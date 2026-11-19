"""Tạo grammar-examples.js từ grammar-data.js và tools/grammar-translations.json.

Cần: pip install pykakasi
Chạy:  python tools/generate-grammar.py
"""
import json
import re
from pathlib import Path

import pykakasi

tools = Path(__file__).parent
root = tools.parent
source = json.loads((tools / 'grammar-translations.json').read_text(encoding='utf-8'))
grammar_text = (root / 'grammar-data.js').read_text(encoding='utf-8')
raw = grammar_text.split('const GRAMMAR_RAW = {', 1)[1].split('\n};', 1)[0]
items = {}
for lesson, block in re.findall(r'(\d+): `([^`]+)`', raw):
    for index, line in enumerate(block.strip().splitlines()):
        fields = line.split('|')
        items[f'{lesson}-{index}'] = {
            'sentence': fields[4], 'answer': fields[5],
            'connection': fields[7], 'connectionAnswer': fields[8]
        }
extra_raw = grammar_text.split('const EXTRA_CONNECTIONS = Object.fromEntries(`', 1)[1].split('`.trim()', 1)[0]
extras = {}
for line in extra_raw.strip().splitlines():
    key, connection, answer, _ = line.split('|')
    extras[key] = {'connection': connection, 'answer': answer}

if set(source['base']) != set(items) or set(source['extra']) != set(extras):
    raise ValueError('Missing or extra grammar translations')

kakasi = pykakasi.kakasi()
READING_OVERRIDES = [
    ('朝ご飯', 'あさごはん'), ('昼ご飯', 'ひるごはん'),
    ('今日は', 'きょうは'), ('今年', 'ことし'), ('一日', 'いちにち'),
    ('八時', 'はちじ'), ('100円', 'ひゃくえん'), ('お金', 'おかね'),
    ('疲れた日', 'つかれたひ'), ('使う人', 'つかうひと'),
    ('あの人', 'あのひと'), ('人が', 'ひとが'), ('人は', 'ひとは'),
    ('彼の', 'かれの'), ('凍って', 'こおって'), ('日本', 'にほん'),
    ('通して', 'とおして')
]


def reading(sentence):
    for original, kana in READING_OVERRIDES:
        sentence = sentence.replace(original, kana)
    value = ''.join(part['hira'] for part in kakasi.convert(sentence))
    if re.search(r'[㐀-鿿]', value):
        raise ValueError(f'Unread Kanji: {sentence} => {value}')
    return value


def blank_reading(question, marker, full_hira):
    """Cách đọc của câu hỏi, giữ nguyên ô trống để gợi ý không lộ đáp án."""
    before, after = question.split(marker)
    head, tail = reading(before), reading(after)
    if not (full_hira.startswith(head) and full_hira.endswith(tail) and len(head) + len(tail) <= len(full_hira)):
        raise ValueError(f'Blank reading mismatch: {question} => {head}{marker}{tail} vs {full_hira}')
    return head + marker + tail


def connection_example(key, item, custom, base):
    answer = item['answer']
    if custom:
        question = custom['sentence']
    else:
        before, after = item['connection'].split('［　］')
        fragment = before + ('' if answer == '∅' else answer) + after
        if fragment not in base['full']:
            raise ValueError(f'Need full sentence for connection {key}: {fragment}')
        question = base['full'].replace(fragment, before + '［　］' + after, 1)
    if question.count('［　］') != 1:
        raise ValueError(f'Connection marker count wrong: {key}')
    full = question.replace('［　］', '' if answer == '∅' else answer)
    vi = custom.get('vi') if custom else None
    if not vi and full != base['full']:
        raise ValueError(f'Need translation for changed sentence: {key}')
    hira = reading(full)
    return {'question': question, 'full': full, 'hira': hira,
            'questionHira': blank_reading(question, '［　］', hira), 'vi': vi or base['vi']}


examples = {}
for key, item in items.items():
    full = item['sentence'].replace('＿＿', item['answer'])
    hira = reading(full)
    base = {'full': full, 'hira': hira, 'questionHira': blank_reading(item['sentence'], '＿＿', hira),
            'vi': source['base'][key]}
    entry = {
        'sentence': base,
        'connection': connection_example(key, {'connection': item['connection'], 'answer': item['connectionAnswer']}, source['connection'].get(key), base)
    }
    if key in extras:
        entry['extraConnection'] = connection_example(key, extras[key], source['extra'][key], base)
    examples[key] = entry

output = '// Tạo bởi tools/generate-grammar.py — không sửa tay.\n'
output += '// Câu ví dụ hoàn chỉnh, cách đọc cả câu (và câu còn ô trống) cùng bản dịch tiếng Việt.\n'
output += 'const GRAMMAR_EXAMPLES = ' + json.dumps(examples, ensure_ascii=False, indent=2) + ';\n'
(root / 'grammar-examples.js').write_text(output, encoding='utf-8')
print(f'Generated {len(examples)} grammar examples, {len(extras)} extra connections')

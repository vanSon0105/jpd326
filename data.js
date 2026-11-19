// Mỗi dòng: kanji | hiragana | nghĩa tiếng Việt. Nguồn: các slide Kanji 6–10 trong thư mục này.
const RAW = {
  6: `
地形|ちけい|địa hình
形成|けいせい|hình thành
外形|がいけい|hình dáng bên ngoài
人形|にんぎょう|búp bê
位置|いち|vị trí
地位|ちい|địa vị
設置|せっち|lắp đặt
置物|おきもの|đồ trang trí
連合|れんごう|liên hợp
連結|れんけつ|liên kết; nối lại
連休|れんきゅう|kỳ nghỉ liên tiếp
関連|かんれん|liên quan
国連|こくれん|Liên Hợp Quốc
固定|こてい|cố định
固形|こけい|dạng rắn
確固|かっこ|vững chắc
強固|きょうこ|kiên cố
固有|こゆう|vốn có; đặc hữu
展開|てんかい|triển khai
展示|てんじ|trưng bày
発展|はってん|phát triển
展望台|てんぼうだい|đài quan sát
願望|がんぼう|nguyện vọng
待望|たいぼう|mong đợi
論文|ろんぶん|luận văn; bài nghiên cứu
論議|ろんぎ|thảo luận
論証|ろんしょう|luận chứng
理論|りろん|lý luận; lý thuyết
立論|りつろん|lập luận
世論|よろん|dư luận
現代|げんだい|hiện đại
現地|げんち|hiện trường; tại chỗ
現場|げんば|hiện trường; nơi làm việc
表現|ひょうげん|biểu hiện; diễn đạt
現象|げんしょう|hiện tượng
気象|きしょう|khí tượng; thời tiết
在職|ざいしょく|đang tại chức
現在|げんざい|hiện tại
海港|かいこう|cảng biển
出港|しゅっこう|rời cảng
入港|にゅうこう|vào cảng
空港|くうこう|sân bay
帰港|きこう|trở về cảng
訪問|ほうもん|thăm viếng
訪日|ほうにち|thăm Nhật Bản
訪米|ほうべい|thăm Mỹ
探訪|たんぼう|đi thăm; tìm hiểu
来訪|らいほう|đến thăm
景気|けいき|tình hình kinh tế
景品|けいひん|quà tặng; giải thưởng
景色|けしき|phong cảnh
風景|ふうけい|phong cảnh
遠景|えんけい|cảnh nhìn từ xa
光景|こうけい|quang cảnh
駅周辺|えきしゅうへん|khu vực quanh ga
海辺|うみべ|bờ biển
山辺|やまべ|ven núi
`,
  7: `
会談|かいだん|hội đàm
面談|めんだん|phỏng vấn; gặp trực tiếp
体験談|たいけんだん|chuyện kể trải nghiệm
配置|はいち|bố trí
配達|はいたつ|giao hàng
心配|しんぱい|lo lắng
手配|てはい|thu xếp; sắp đặt
宅配|たくはい|giao tận nhà
配給|はいきゅう|phân phối; cấp phát
年配|ねんぱい|lớn tuổi
努力|どりょく|nỗ lực
助言|じょげん|lời khuyên
介助犬|かいじょけん|chó trợ giúp
助役|じょやく|trợ lý; phó trưởng
団体|だんたい|đoàn thể; tổ chức
団結|だんけつ|đoàn kết
団地|だんち|khu nhà ở tập thể
団子|だんご|bánh dango
集団|しゅうだん|tập thể; nhóm
社団|しゃだん|hiệp hội
旅団|りょだん|lữ đoàn
苦情|くじょう|lời phàn nàn
苦痛|くつう|đau đớn; khổ sở
苦心|くしん|dày công; lao tâm
苦手|にがて|không giỏi; không thích
退院|たいいん|xuất viện
退社|たいしゃ|rời công ty; nghỉ việc
退去|たいきょ|rời đi; dọn đi
退職|たいしょく|nghỉ việc
進退|しんたい|tiến thoái
早退|そうたい|về sớm
後退|こうたい|rút lui; lùi lại
夢中|むちゅう|mải mê
悪夢|あくむ|ác mộng
若者|わかもの|người trẻ
若年|じゃくねん|tuổi trẻ
若々しい|わかわかしい|trẻ trung
期間|きかん|khoảng thời gian
期待|きたい|kỳ vọng
期限|きげん|thời hạn
学期|がっき|học kỳ
初期|しょき|giai đoạn đầu
時期|じき|thời kỳ; thời điểm
定期|ていき|định kỳ
反動|はんどう|phản động; phản ứng ngược
反証|はんしょう|bằng chứng phản bác
反対|はんたい|phản đối; đối diện
対談|たいだん|đối thoại
対面|たいめん|đối mặt
対立|たいりつ|đối lập
賛成|さんせい|tán thành
賛美|さんび|tán dương
賛助|さんじょ|ủng hộ; tài trợ
賛意|さんい|sự đồng tình
協賛|きょうさん|đồng tài trợ
`,
  8: `
許可|きょか|cho phép; giấy phép
特許|とっきょ|bằng sáng chế
収入|しゅうにゅう|thu nhập
買収|ばいしゅう|mua lại; hối lộ
回収|かいしゅう|thu hồi
収集|しゅうしゅう|thu thập; sưu tập
収税|しゅうぜい|thu thuế
年収|ねんしゅう|thu nhập hằng năm
礼金|れいきん|tiền cảm ơn; tiền lễ
朝礼|ちょうれい|chào buổi sáng tập thể
返礼|へんれい|đáp lễ
礼式|れいしき|nghi lễ
礼服|れいふく|lễ phục
礼法|れいほう|lễ nghi
無礼|ぶれい|vô lễ
細工|さいく|gia công; mánh khóe
明細|めいさい|chi tiết; bản kê
細部|さいぶ|chi tiết nhỏ
細長い|ほそながい|thon dài
汚職|おしょく|tham nhũng
汚水|おすい|nước bẩn; nước thải
汚名|おめい|tiếng xấu
倒産|とうさん|phá sản
破産|はさん|phá sản
破線|はせん|đường đứt nét
論破|ろんぱ|bác bỏ bằng lý lẽ
破壊|はかい|phá hủy
半壊|はんかい|hư hại một nửa
全壊|ぜんかい|hư hại hoàn toàn
横顔|よこがお|mặt nhìn nghiêng
横着|おうちゃく|lười biếng; láu cá
横書き|よこがき|viết ngang
横長|よこなが|rộng theo chiều ngang
縦書き|たてがき|viết dọc
縦列|じゅうれつ|hàng dọc
縦線|じゅうせん|đường thẳng đứng
印画|いんが|in ảnh
印象|いんしょう|ấn tượng
刷新|さっしん|đổi mới
印刷|いんさつ|in ấn
類似|るいじ|tương tự
同類|どうるい|cùng loại
人類|じんるい|loài người
親類|しんるい|họ hàng
書類|しょるい|giấy tờ; tài liệu
`,
  9: `
暮秋|ぼしゅう|cuối thu
暮色|ぼしょく|ánh chiều tà
日暮れ|ひぐれ|hoàng hôn
一人暮らし|ひとりぐらし|sống một mình
個別|こべつ|riêng lẻ; cá biệt
個人|こじん|cá nhân
個体|こたい|cá thể
個性|こせい|cá tính
個室|こしつ|phòng riêng
個展|こてん|triển lãm cá nhân
疑問|ぎもん|nghi vấn; thắc mắc
半信半疑|はんしんはんぎ|bán tín bán nghi
水平|すいへい|nằm ngang; cân bằng
平日|へいじつ|ngày thường
平価|へいか|ngang giá
平等|びょうどう|bình đẳng
等分|とうぶん|chia đều
誤解|ごかい|hiểu lầm
誤読|ごどく|đọc sai
正誤|せいご|đúng sai
誤信|ごしん|tin sai
笑い話|わらいばなし|chuyện cười
笑顔|えがお|gương mặt tươi cười
笑い声|わらいごえ|tiếng cười
可笑しい|おかしい|buồn cười; kỳ lạ
苦笑|くしょう|cười gượng
訳者|やくしゃ|người dịch
訳解|やっかい|giải nghĩa; chú giải
訳書|やくしょ|sách dịch
訳名|やくめい|tên được dịch
通訳|つうやく|phiên dịch
直訳|ちょくやく|dịch sát nghĩa
捨子|すてご|trẻ bị bỏ rơi
詩人|しじん|nhà thơ
詩歌|しか|thơ ca
詩集|ししゅう|tập thơ
想定|そうてい|giả định; dự tính
想見|そうけん|hình dung
予想|よそう|dự đoán
思想|しそう|tư tưởng
理想|りそう|lý tưởng
空想|くうそう|tưởng tượng; mơ mộng
最高|さいこう|cao nhất; tuyệt nhất
最低|さいてい|thấp nhất; tệ nhất
最多|さいた|nhiều nhất
最少|さいしょう|ít nhất
最近|さいきん|gần đây
最初|さいしょ|đầu tiên
最後|さいご|cuối cùng
浴室|よくしつ|phòng tắm
浴場|よくじょう|nhà tắm công cộng
衣服|いふく|quần áo
浴衣|ゆかた|áo yukata
衣類|いるい|quần áo; trang phục
衣料|いりょう|vải vóc; hàng may mặc
衣食住|いしょくじゅう|ăn mặc ở
曲線|きょくせん|đường cong
曲面|きょくめん|mặt cong
歌曲|かきょく|ca khúc
作曲|さっきょく|sáng tác nhạc
失業|しつぎょう|thất nghiệp
失礼|しつれい|thất lễ; xin lỗi
失言|しつげん|lỡ lời
失望|しつぼう|thất vọng
過失|かしつ|lỗi; sơ suất
得失|とくしつ|được và mất
流失|りゅうしつ|bị cuốn trôi
`,
  10: `
当然|とうぜん|đương nhiên
自然|しぜん|tự nhiên
全然|ぜんぜん|hoàn toàn; chẳng hề
立ち姿|たちすがた|dáng đứng
寝姿|ねすがた|dáng nằm ngủ
神様|かみさま|thần linh
死神|しにがみ|thần chết
神道|しんとう|Thần đạo
神意|しんい|ý thần linh
神社|じんじゃ|đền Thần đạo
女神|めがみ|nữ thần
天神|てんじん|thiên thần; thần trời
心神|しんしん|tâm trí; tinh thần
積雪|せきせつ|tuyết tích tụ
集積|しゅうせき|tập hợp; tích lũy
積算|せきさん|cộng dồn; tính tổng
面積|めんせき|diện tích
体積|たいせき|thể tích
材料|ざいりょう|nguyên liệu
材質|ざいしつ|chất liệu
人材|じんざい|nhân tài
教材|きょうざい|giáo trình; tài liệu học
満足|まんぞく|hài lòng
未満|みまん|chưa đến; dưới mức
満員|まんいん|đầy người
満開|まんかい|nở rộ
満点|まんてん|điểm tối đa
不満|ふまん|bất mãn
戦術|せんじゅつ|chiến thuật
戦後|せんご|sau chiến tranh
内戦|ないせん|nội chiến
争論|そうろん|tranh luận
内争|ないそう|tranh chấp nội bộ
戦争|せんそう|chiến tranh
再度|さいど|lần nữa
再生|さいせい|tái sinh; tái chế
再建|さいけん|xây dựng lại
再出|さいしゅつ|xuất hiện lại
再利用|さいりよう|tái sử dụng
再発|さいはつ|tái phát
列車|れっしゃ|tàu hỏa
行列|ぎょうれつ|hàng người; hàng dài
座席|ざせき|chỗ ngồi
口座|こうざ|tài khoản ngân hàng
正座|せいざ|ngồi quỳ kiểu Nhật
鉄道|てつどう|đường sắt
国鉄|こくてつ|đường sắt quốc gia
私鉄|してつ|đường sắt tư nhân
遅刻|ちこく|đi muộn
時刻|じこく|thời điểm; giờ giấc
岸辺|きしべ|bờ sông; bờ biển
海岸|かいがん|bờ biển
両岸|りょうがん|hai bờ
製品|せいひん|sản phẩm
製作|せいさく|chế tác; sản xuất
製造|せいぞう|chế tạo; sản xuất
造形|ぞうけい|tạo hình
造林|ぞうりん|trồng rừng
造反|ぞうはん|nổi loạn; chống đối
`
};

const WORDS = Object.entries(RAW).flatMap(([lesson, text]) =>
  text.trim().split("\n").map((line, index) => {
    const [kanji, hira, meaning] = line.split("|");
    return { id: `${lesson}-${index}`, lesson: Number(lesson), kanji, hira, meaning };
  })
);

// Từ vựng bài 6–10, lấy từ "List tu vung - quyen xanh" (できる日本語 中級 本冊, bản dịch tiếng Việt).
// Mỗi dòng: từ | cách đọc | nghĩa tiếng Việt.
const VOCAB_RAW = {
  6: `
快適（な）|かいてき（な）|thoải mái; dễ chịu
梅雨|つゆ|mùa mưa
焼ける|やける|bỏng; cháy nắng
太陽|たいよう|mặt trời
今でこそ|いまでこそ|ngày nay, thời nay
普及（する）|ふきゅう（する）|phổ cập; phổ biến
しのぐ|しのぐ|tránh
つるす|つるす|treo
チリンチリン|チリンチリン|leng keng
魔除け|まよけ|bùa chú
打ち水|うちみず|tưới nước; té nước
地面|じめん|mặt đất
まく（水をまく）|まく（みずをまく）|tưới (tưới nước)
光景|こうけい|quang cảnh
蒸発（する）|じょうはつ（する）|bốc hơi
奪う|うばう|lấy đi
近年|きんねん|những năm gần đây
作戦|さくせん|tác chiến
開催（する）|かいさい（する）|tổ chức
水道水|すいどうすい|nước máy
残り湯|のこりゆ|nước bồn tắm thừa lại
雨水|あまみず|nước mưa
平均|へいきん|bình quân; trung bình
降水量|こうすいりょう|lượng mưa
気候|きこう|khí hậu
コーナー|コーナー|góc; chỗ
南北|なんぼく|nam bắc
島|しま|đảo
山林|さんりん|rừng núi
～分の～|～ぶんの～|～ phần ～ (３分の２: 2 phần 3)
地形|ちけい|địa hình
温帯|おんたい|ôn đới
位置（する）|いち（する）|vị trí; nằm ở vị trí
蒸し暑い|むしあつい|oi bức
～側（太平洋側）|～がわ（たいへいようがわ）|phía～ (phía biển Thái Bình Dương)
ペンション|ペンション|khách sạn kiểu tây âu
割合|わりあい|tỷ lệ
例年|れいねん|hàng năm; mọi năm
連なる|つらなる|xếp thành dãy dài
恵まれる|めぐまれる|được ban cho; phong phú về...
展望台|てんぼうだい|đài quan sát
美しい|うつくしい|đẹp
平野|へいや|đồng bằng
庭|にわ|vườn
石垣|いしがき|tường đá, thành đá
名園|めいえん|vườn nổi tiếng
音声|おんせい|âm thanh
瓦|かわら|ngói
軒|のき|mái chìa
塀|へい|tường; vách
石|いし|đá
ふるさと|ふるさと|quê hương
合わせる|あわせる|làm hợp; hợp với
日差し|ひざし|ánh nắng; tia nắng
しっくい|しっくい|vữa
セメント|セメント|xi măng
固める|かためる|gắn lại; đông lại
鉄筋|てっきん|cốt thép
コンクリート|コンクリート|bê tông
気象|きしょう|khí tượng
小論文|しょうろんぶん|tiểu luận
畳|たたみ|chiếu Nhật
フローリング|フローリング|sàn gỗ
現金|げんきん|tiền mặt
電子マネー|でんしマネー|tiền điện tử
アドバイス（する）|アドバイス（する）|khuyên bảo
体調|たいちょう|tình trạng sức khỏe
なんだか|なんだか|không hiểu vì sao mà…
和菓子|わがし|bánh kẹo Nhật
港|みなと|cảng
栄える|さかえる|phồn vinh
現在|げんざい|hiện tại
人口|じんこう|dân số
都市|とし|thành phố
県庁|けんちょう|ủy ban hành chính huyện
～周辺（駅周辺）|～しゅうへん（えきしゅうへん）|quanh ～ (quanh ga)
地区|ちく|quận; khu vực; khu
商業|しょうぎょう|thương mại
砂浜|すなはま|bãi cát
～年代|～ねんだい|những năm ～ (1600年代: những năm 1600)
～街（中華街）|～がい（ちゅうかがい）|phố～ (phố Trung Quốc)
タワー|タワー|tháp
今では|いまでは|bây giờ thì…
訪れる|おとずれる|ghé thăm; thăm
延びる|のびる|trải dài
名付ける|なづける|đặt tên; gọi tên
村|むら|làng
埋め立てる|うめたてる|lấp; chôn lấp
浜|はま|bãi biển
地名|ちめい|địa danh
風景|ふうけい|phong cảnh
まとまる|まとまる|đoàn kết; gắn kết
地方|ちほう|địa phương
名産品|めいさんひん|sản phẩm nổi tiếng
にぎわう|にぎわう|sôi nổi; náo nhiệt
一生|いっしょう|cả cuộc đời
頑固（な）|がんこ（な）|cương quyết; bướng bỉnh
職人|しょくにん|nghệ nhân
海洋|かいよう|đại dương; biển
生物|せいぶつ|sinh vật
化石|かせき|hóa thạch
辺り|あたり|khu; chỗ; vùng lân cận
産業|さんぎょう|ngành sản xuất
盛ん（な）|さかん（な）|phồn thịnh
企業|きぎょう|doanh nghiệp
発展する|はってんする|phát triển
特産物|とくさんぶつ|đặc sản
空っ風|からっかぜ|gió khô nóng
吹く|ふく|thổi
湿る|しめる|ẩm ướt
越える|こえる|vượt qua
風力|ふうりょく|lực gió
凧揚げ|たこあげ|thả diều
揚げる|あげる|thả; giương
思い浮かべる|おもいうかべる|nghĩ đến
`,
  7: `
同年代|どうねんだい|cùng độ tuổi
すると|すると|kết quả là
返る|かえる|trở lại; trở về
タメ口|タメぐち|cách nói ngang hàng
違和感|いわかん|cảm giác khó chịu
共通（する）|きょうつう（する）|chung
友人|ゆうじん|bạn thân
対等（な）|たいとう（な）|ngang bằng
回答（する）|かいとう（する）|trả lời
初対面|しょたいめん|lần đầu gặp
タイミング|タイミング|thời điểm
話題|わだい|đề tài
分野|ぶんや|lĩnh vực
より～|より～|hơn (より早く: nhanh hơn)
判断（する）|はんだん（する）|phán đoán
思い切って|おもいきって|mạnh dạn; mạnh mẽ
体験談|たいけんだん|câu chuyện trải qua
海岸|かいがん|bờ biển
年代|ねんだい|niên đại; độ tuổi
～分け（グループ分け）|～わけ（グループわけ）|chia～ (chia nhóm)
年配|ねんぱい|có tuổi; trung niên
要る|いる|cần
～以外（勉強以外）|～いがい（べんきょういがい）|ngoài～ (ngoài việc học)
景気|けいき|tình hình kinh tế
都心|としん|trung tâm đô thị
ドレス|ドレス|váy liền
努力（する）|どりょく（する）|nỗ lực
当然（な）|とうぜん（な）|đương nhiên
ブログ|ブログ|blog
フットサル|フットサル|futsal (bóng đá trong nhà)
ネット（インターネット）|ネット（インターネット）|net (internet)
メンバー|メンバー|thành viên
数|かず|số lượng
～代|～だい|lứa tuổi ～ (40代: tuổi 40)
シュート（する）|シュート（する）|cú sút bóng
お互い|おたがい|lẫn nhau; với nhau
チームプレー|チームプレー|lối chơi đồng đội
気がする|きがする|có cảm giác
掛け声|かけごえ|tiếng hò hét (trong trận đấu)
瞬間|しゅんかん|khoảnh khắc
ハイタッチ（する）|ハイタッチ（する）|high touch (đập tay nhau để ăn mừng một thành công)
意外（な）|いがい（な）|ngoài sức tưởng tượng; bất ngờ
出会い|であい|sự gặp gỡ; hội ngộ
出店（する）|しゅってん（する）|mở cửa hàng
中古品|ちゅうこひん|hàng cũ; secondhand
介助犬|かいじょけん|chó phụ giúp
育成（する）|いくせい（する）|nuôi dạy
寄付（する）|きふ（する）|quyên góp
～金（寄付金）|～きん（きふきん）|tiền ～ (tiền quyên góp)
受ける（誘いを受ける）|うける（さそいをうける）|nhận (nhận lời mời)
売り上げ|うりあげ|doanh thu
一部|いちぶ|một phần
今ごろ|いまごろ|cùng thời điểm này
点|てん|điểm
たまたま|たまたま|tình cờ; ngẫu nhiên
団体|だんたい|đoàn thể; tập thể
学園祭|がくえんさい|ngày hội trường
全て|すべて|tất cả
苦しむ|くるしむ|đau đớn; đau khổ
世代|せだい|thế hệ
ミーティング（する）|ミーティング（する）|họp
定年|ていねん|tuổi về hưu
退職（する）|たいしょく（する）|nghỉ việc
～とも|～とも|cả ～ (２人とも: cả 2 người)
ただ|ただ|chỉ có
かみさん|かみさん|vợ; bà xã; nhà
うらやましい|うらやましい|thèm muốn; ngưỡng mộ
人見知り（する）|ひとみしり（する）|nhút nhát đối với người lạ
～同士（男同士）|～どうし（おとこどうし）|cùng～ (cùng phái đàn ông)
な（頑張ろうな）|な（がんばろうな）|nhé (cùng cố nhé)
素晴らしい|すばらしい|tuyệt vời
いつか|いつか|khi nào đó
月日|つきひ|ngày tháng
夢中（な）|むちゅう（な）|say sưa; say mê
迎える|むかえる|đón
感動（する）|かんどう（する）|cảm động
若々しい|わかわかしい|trẻ trung
持ち上げる|もちあげる|nhấc lên
トラック|トラック|xe tải
孫|まご|cháu (gọi ông bà)
気象庁|きしょうちょう|nha khí tượng
暖冬|だんとう|mùa đông ấm áp
期待（する）|きたい（する）|kỳ vọng; hy vọng
親孝行（する）|おやこうこう（する）|báo hiếu
タイトル|タイトル|đầu đề; tiêu đề
立派（な）|りっぱ（な）|lộng lẫy
`,
  8: `
包装（する）|ほうそう（する）|đóng gói; bao bì
仕方|しかた|cách làm
任せる|まかせる|phó thác
箱|はこ|hộp
包装紙|ほうそうし|giấy bọc
リボン|リボン|dây nơ
かける（リボンをかける）|かける（リボンをかける）|treo lên; đính (đính nơ)
ラッピング（する）|ラッピング（する）|gói; bọc(quà)
グッズ|グッズ|đồ; hàng
貴族|きぞく|quý tộc; vương giả
さらす|さらす|ngâm
当時|とうじ|thời đó
高価（な）|こうか（な）|đắt giá
表れ|あらわれ|biểu hiện
破る|やぶる|rách
ブックカバー|ブックカバー|bọc sách
あるいは|あるいは|hoặc; hoặc là
含める|ふくめる|bao gồm
ぐっと|ぐっと|nhiều; nhanh
許可（する）|きょか（する）|cho phép
～末（来月末）|～まつ（らいげつまつ）|cuối ~ (cuối tháng sau)
全く|まったく|hoàn toàn
同僚|どうりょう|bạn cùng nơi làm việc
かける（迷惑をかける）|かける（めいわくをかける）|làm (làm phiền)
回収（する）|かいしゅう（する）|thu hồi; thu lại
置き場|おきば|chỗ để
色違い|いろちがい|màu khác
申し訳ありません|もうしわけありません|xin lỗi
朝礼|ちょうれい|họp buổi sáng
オープンキャンパス|オープンキャンパス|đợt mở cửa cho tự do tham quan trường
一時帰国|いちじきこく|về nước tạm thời
帰国（する）|きこく（する）|về nước
メッセージ|メッセージ|tin nhắn
一筆箋|いっぴつせん|ippitsusen (giấy dài, thon để viết thư ngắn)
伝わる|つたわる|truyền đạt
縦|たて|chiều dọc
～センチ（18センチ）|～センチ（18センチ）|xen-ti-mét (18 xen-ti-mét)
細長い|ほそながい|thon dài
便箋|びんせん|giấy viết thư
堅い|かたい|cứng; long trọng
本題|ほんだい|chủ đề chính
手書き|てがき|viết tay
贈り物|おくりもの|quà tặng
お世話になっています|おせわになっています|cảm ơn vì luôn được quan tâm
気が利く|きがきく|chu đáo
機械|きかい|máy móc
印刷（する）|いんさつ（する）|in ấn
済ませる|すませる|kết thúc; cho xong
思い|おもい|tâm tư; tình cảm
先日|せんじつ|hôm trước
近況|きんきょう|tình hình gần đây
お久しぶりです|おひさしぶりです|đã lâu rồi không gặp
相変わらず|あいかわらず|không thay đổi
出産（する）|しゅっさん（する）|sinh con
ちょっとした|ちょっとした|một chút
一言|ひとこと|một câu; một lời
添える|そえる|thêm vào; kèm theo
気に入る|きにいる|yêu thích; ưa thích
愚痴|ぐち|than thở; cằn nhằn
ラストオーダー|ラストオーダー|gọi món lần cuối
追加（する）|ついか（する）|thêm
生ビール|なまビール|bia tươi
渋滞（する）|じゅうたい（する）|tắc đường
帰宅（する）|きたく（する）|về nhà
久しぶり（な）|ひさしぶり（な）|lâu rồi
壊す（体を壊す）|こわす（からだをこわす）|làm hỏng (làm hại cơ thể)
割る|わる|làm vỡ
サプライズパーティー|サプライズパーティー|bữa tiệc bất ngờ
言葉遣い|ことばづかい|cách dùng từ
間違う|まちがう|nhầm lẫn; sai
ショック|ショック|sốc
受ける（ショックを受ける）|うける（ショックをうける）|bị (bị sốc)
落ち込む|おちこむ|buồn bã; suy sụp
わざわざ|わざわざ|cất công
倒す|たおす|đánh đổ; làm đổ
汚す|よごす|làm bẩn
本気（な）|ほんき（な）|thực lòng
わざと|わざと|cố tình
後悔（する）|こうかい（する）|hối hận
なんで|なんで|vì sao; cớ sao
`,
  9: `
なんか|なんか|có gì đó
変（な）|へん（な）|lạ; kì lạ
ふもと|ふもと|chân núi
～軒|～けん|căn, ngôi (１軒: 1 ngôi nhà)
お参り（する）|おまいり（する）|lễ chùa
村人|むらびと|dân làng
平気（な）|へいき（な）|dửng dưng; vô tư
和尚|おしょう|hòa thượng
わいわい|わいわい|ồn ào; náo động lên
やって来る|やってくる|đến
口々に|くちぐちに|ồn ào lộn xộn
裸|はだか|khỏa thân
誤解（する）|ごかい（する）|hiểu nhầm
文章|ぶんしょう|câu văn
笑い出す|わらいだす|cười phá lên
訳|わけ|lý do; nguyên nhân
早口言葉|はやくちことば|câu nói nhanh
柿|かき|quả hồng
食う|くう|ăn; xơi
パジャマ|パジャマ|quần áo ngủ
カエル|カエル|con ếch
ぴょこぴょこ|ぴょこぴょこ|tiếng ếch kêu
なぞなぞ|なぞなぞ|câu đố
回文|かいぶん|câu đọc từ cuối lên cũng giống đọc từ trên xuống
マウス|マウス|chuột
崖|がけ|vách đá
わ（けがしたわ）|わ（けがしたわ）|đấy (tôi đã bị thương đấy)
詩|し|thơ
載る|のる|đưa lên; được đăng
小鳥|ことり|chim non
鈴|すず|chuông; cái chuông
両手|りょうて|hai tay
広げる|ひろげる|mở rộng ra; giang rộng
空|そら|bầu trời
ちっとも|ちっとも|không ...một chút nào
地べた|ぢべた|mặt đất
ゆする|ゆする|lắc; đu đưa
唄|うた|bài hát
暮らす|くらす|sống
～後（帰国後）|～ご（きこくご）|sau khi～ (sau khi về nước)
励ます|はげます|động viên; khích lệ
生きる|いきる|sống
時代|じだい|thời đại; thời thế
個性|こせい|cá tính
～らしさ（自分らしさ）|～らしさ（じぶんらしさ）|vẻ ～ (vẻ riêng của bản thân)
認める|みとめる|công nhận; chấp nhận
込める|こめる|cho vào; đặt vào
許す|ゆるす|tha thứ; bỏ qua
消費（する）|しょうひ（する）|tiêu dùng
～者（消費者）|～しゃ（しょうひしゃ）|người～ (người tiêu dùng)
開発（する）|かいはつ（する）|khai thác; phát triển mới
実話|じつわ|chuyện có thật
コマーシャル|コマーシャル|quảng cáo
フリーダイヤル|フリーダイヤル|số điện thoại gọi miễn phí
～製（革製）|～せい（かわせい）|hàng～ (hàng da thuộc)
かけ間違い|かけまちがい|gọi nhầm số
いったい|いったい|không hiểu là…(dùng để nhấn mạnh khi có thắc mắc)
文字|もじ|chữ
イメージ（する）|イメージ（する）|hình ảnh; hình dung
数える|かぞえる|đếm
遠足|えんそく|tham quan; dã ngoại
作家|さっか|tác giả
４こま漫画|４こままんが|truyện tranh4 cảnh
せりふ|せりふ|lời thoại
登場人物|とうじょうじんぶつ|nhân vật xuất hiện
はしご|はしご|cầu thang
わくわく|わくわく|phấn chấn
はらはら|はらはら|lo lắng; hồi hộp
しょんぼり|しょんぼり|ủ rũ; buồn rầu
駄目（な）|だめ（な）|không được
だって|だって|tại vì
勘違い（する）|かんちがい（する）|hiểu nhầm
顔が広い|かおがひろい|quen biết rộng
顔から火が出る|かおからひがでる|xấu hổ; ngượng đỏ mặt
表現（する）|ひょうげん（する）|biểu hiện; cách nói
黙る|だまる|im lặng
必死（な）|ひっし（な）|cố hết sức
あはは|あはは|haha (tiếng cười to)
もう少しで|もうすこしで|chút nữa thì…
優勝（する）|ゆうしょう（する）|vô địch; giải nhất
飛び上がる|とびあがる|nhảy cẫng lên; bay lên
ほっぺた|ほっぺた|má
飛び出す|とびだす|chạy ào ra
疑問|ぎもん|sự nghi vấn; lạ lùng khó hiểu
女子高生|じょしこうせい|nữ sinh cấp ba
男|おとこ|con trai
女|おんな|con gái
男女|だんじょ|trai gái
目上|めうえ|người bề trên
使い分ける|つかいわける|chọn cách dùng
若者|わかもの|giới trẻ
我慢（する）|がまん（する）|chịu đựng
`,
  10: `
のんびり|のんびり|thong thả
海岸線|かいがんせん|tuyến dọc bờ biển
渓谷|けいこく|thung lũng
トロッコ列車|トロッコれっしゃ|loại tàu cửa sổ mở rộng để ngắm cảnh
SL|エスエル|tàu chạy bằng năng lượng hơi nước (Steam Locomotive)
製造（する）|せいぞう（する）|chế tạo
鉄|てつ|sắt; thép
扇風機|せんぷうき|quạt gió
石炭|せきたん|than đá
燃やす|もやす|đốt cháy
入り込む|はいりこむ|vào trong
揺れる|ゆれる|rung; lắc
～産|～さん|sản vật của ～ (静岡県産: sản vật của Shizuoka)
車窓|しゃそう|cửa sổ xe
目を向ける|めをむける|hướng mắt
通り過ぎる|とおりすぎる|đi qua; trôi đi
車掌|しゃしょう|nhân viên tàu
土地|とち|vùng; vùng đất
ハーモニカ|ハーモニカ|kèn harmonica
乗客|じょうきゃく|hành khách đi tầu
ハプニング|ハプニング|biến cố; sự cố
思いがけない|おもいがけない|không lường trước
出来事|できごと|chuyện; việc
向かい合う|むかいあう|đối diện
フリー切符|フリーきっぷ|loại vé đi tự do
乗り降り（する）|のりおり（する）|lên xuống (tầu)
配布（する）|はいふ（する）|phân phát
観光マップ|かんこうマップ|bản đồ du lịch
書き込む|かきこむ|viết vào
ときには|ときには|thỉnh thoảng
薦める|すすめる|khuyến khích
世界自然遺産|せかいしぜんいさん|di sản thiên nhiên thế giới
～発|～はつ|xuất phát từ ～ (羽田発: xuất phát từ Haneda)
地元|じもと|địa phương
豊かさ|ゆたかさ|sự phong phú
見どころ|みどころ|điểm nổi tiếng
杉|すぎ|cây tùng
トレッキング（する）|トレッキング（する）|đi bộ đường núi
所要時間|しょようじかん|thời gian cần thiết
歩行距離|ほこうきょり|khoảng cách đi bộ
往復（する）|おうふく（する）|hai chiều; đi hai chiều
樹齢|じゅれい|tuổi của cây
神秘的（な）|しんぴてき（な）|tính thần bí
姿|すがた|hình dáng; phong thái
言い表す|いいあらわす|diễn đạt
モデル|モデル|vật mẫu; hình mẫu
森|もり|rừng rậm
日常|にちじょう|thường ngày
海の幸|うみのさち|hải sản
山の幸|やまのさち|nguyên liệu lấy trên núi
民宿|みんしゅく|nhà trọ tư nhân
味わう|あじわう|thưởng thức đồ ăn
頂上|ちょうじょう|đỉnh (núi)
朝日|あさひ|mặt trời buổi sáng
積もる|つもる|chất đống
おやつ|おやつ|đồ ăn vặt
おつまみ|おつまみ|đồ nhắm
通る（電気が通る）|とおる（でんきがとおる）|đi qua (có đường điện đi qua)
日帰り（する）|ひがえり（する）|đi trong ngày
滝|たき|thác
食材|しょくざい|thực phẩm
門|もん|cổng
国宝|こくほう|quốc bảo; vật quý của đất nước
指定（する）|してい（する）|chỉ định
全体|ぜんたい|toàn thể
彫刻（する）|ちょうこく（する）|điêu khắc
彫る|ほる|khắc; chạm; tạc
豪華さ|ごうかさ|vẻ lộng lẫy; tráng lệ
名所|めいしょ|thắng cảnh; địa điểm nổi tiếng
まるで|まるで|hệt như
絵の具|えのぐ|màu vẽ
カラフル（な）|カラフル（な）|sặc sỡ; đầy màu sắc
トンネル|トンネル|đường hầm
一気に|いっきに|một lần; một mạch
流れ落ちる|ながれおちる|chảy xuống
迫力満点|はくりょくまんてん|đầy sức quyến rũ; hùng vĩ
ごうごう|ごうごう|ầm ầm
鯱|しゃちほこ|thủy quái thân cá đầu hổ
～世紀|～せいき|thế kỉ ～ (17世紀: thế kỉ 17)
代表（する）|だいひょう（する）|đại biểu; đại diện
誇り|ほこり|tự hào; kiêu hãnh
戦争（する）|せんそう（する）|chiến tranh
天守閣|てんしゅかく|tháp canh trong lâu đài
再び|ふたたび|lại; lại một lần nữa
金|きん|vàng
上り|のぼり|hướng đi lên trung tâm thủ đô
列車|れっしゃ|đoàn tàu
発車（する）|はっしゃ（する）|khởi hành xe
カーディガン|カーディガン|áo khoác len
奥|おく|bên trong
もしかしたら|もしかしたら|có lẽ là
ございます|ございます|có
着払い|ちゃくばらい|người nhận trả tiền
宅配便|たくはいびん|chuyển phát nhanh
グレー|グレー|màu xám
胸|むね|ngực
マーク|マーク|dấu; hình
まだまだ|まだまだ|vẫn còn
請求（する）|せいきゅう（する）|yêu cầu thanh toán
洗面台|せんめんだい|bồn rửa mặt
車内|しゃない|trong xe; trong tàu
座席|ざせき|chỗ ngồi
鉄道|てつどう|đường sắt
グリーン車|グリーンしゃ|toa green (toa hạng sang)
販売（する）|はんばい（する）|bán hàng
停車（する）|ていしゃ（する）|dừng xe; dừng tàu
時刻|じこく|giờ
禁煙（する）|きんえん（する）|cấm hút thuốc
デッキ|デッキ|khoang tầu chỗ cửa ra vào
通話（する）|つうわ（する）|gọi điện thoại
なお|なお|hơn nữa; mặt khác
満席|まんせき|đầy hết chỗ
いたす|いたす|làm… (chỉ dùng cho hành động của bản thân)
あらかじめ|あらかじめ|sẵn sàng; từ trước
了承（する）|りょうしょう（する）|chấp nhận; thông cảm
心より|こころより|từ trái tim
車両|しゃりょう|xe; tầu
内回り|うちまわり|vòng trong
見合わせる|みあわせる|tạm ngừng
尋ねる|たずねる|hỏi; thăm hỏi
幸運（な）|こううん（な）|may; may mắn
雲|くも|mây
早速|さっそく|nhanh chóng; ngay
路面電車|ろめんでんしゃ|xe điện chạy trong phố
天井|てんじょう|trần nhà
満足（な）|まんぞく（な）|thỏa mãn; mãn nguyện
～ぶりに（10年ぶりに）|～ぶりに（10ねんぶりに）|sau～ (sau 10 năm)
再会（する）|さいかい（する）|gặp lại
さすが|さすが|quả là
香り|かおり|hương thơm
旅行記|りょこうき|hồi ký du lịch
`
};

const VOCAB = Object.entries(VOCAB_RAW).flatMap(([lesson, text]) =>
  text.trim().split("\n").map((line, index) => {
    const [word, reading, meaning] = line.split("|");
    return { id: `${lesson}-${index}`, lesson: Number(lesson), word, reading, meaning };
  })
);

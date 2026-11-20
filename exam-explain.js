// Giải thích chi tiết từng câu đề thi: vì sao chọn, nghĩa/lý do sai của từng đáp án (theo thứ tự A–D trong đề), dịch câu hoàn chỉnh.
const EXAM_EXPLAIN = {
 "fe-sp24-001": {
  "why": "Cấu trúc 〜に恵まれる (được trời phú cho / may mắn có được ...) luôn dùng trợ từ に trước danh từ.",
  "options": [
   "に — trợ từ đúng của 恵まれる",
   "が — không đi với 恵まれる",
   "も — \"cũng\", sai nghĩa",
   "を — 恵まれる là động từ bị động, không nhận を"
  ],
  "vi": "Anh ấy được trời phú cho một thể hình cường tráng."
 },
 "fe-sp24-002": {
  "why": "Thành ngữ 顔から火が出る: \"lửa bốc ra từ mặt\" = xấu hổ đỏ bừng mặt. Lửa \"đi ra từ\" mặt nên dùng から (xuất phát điểm).",
  "options": [
   "に — chỉ đích/nơi chốn, không hợp",
   "から — \"từ\" (xuất phát), đúng thành ngữ",
   "は — chủ đề, sai",
   "で — nơi diễn ra/phương tiện, sai"
  ],
  "vi": "Xấu hổ đến mức mặt nóng bừng như bốc lửa."
 },
 "fe-sp24-003": {
  "why": "作戦 đọc là さくせん: 作 (TÁC) đọc さく, 戦 (CHIẾN) đọc せん, không biến âm.",
  "options": [
   "さっせん — sai, không có âm ngắt っ",
   "さくせん — đúng",
   "さくぜん — sai, せん không bị đục thành ぜん",
   "さっぜん — sai cả hai chỗ"
  ],
  "vi": "Ở khắp nơi đang tổ chức \"chiến dịch tưới nước lớn\"."
 },
 "fe-sp24-004": {
  "why": "朝礼 = ちょうれい (buổi chào cờ/họp đầu giờ). 朝 đọc ちょう với trường âm う.",
  "options": [
   "ちょれい — thiếu trường âm う",
   "ちょうれい — đúng",
   "ちょうてい — 礼 đọc れい, không phải てい",
   "ちゅうてい — sai cả hai chữ"
  ],
  "vi": "Trưởng phòng đã phát biểu trong buổi chào cờ đầu giờ."
 },
 "fe-sp24-005": {
  "why": "曲 (KHÚC) đọc âm On là きょく = bản nhạc, ca khúc.",
  "options": [
   "し — đọc của 詩 (bài thơ)",
   "きょく — đúng",
   "うた — đọc của 歌 (bài hát)",
   "たに — đọc của 谷 (thung lũng)"
  ],
  "vi": "Bản nhạc này hay nhỉ."
 },
 "fe-sp24-006": {
  "why": "訳（わけ）= lý do, nguyên cớ. \"その訳がわからない\" = không hiểu lý do đó.",
  "options": [
   "必死 — liều mạng, hết sức",
   "我慢 — chịu đựng, nhẫn nại",
   "訳 — lý do (đúng)",
   "回文 — câu đọc xuôi ngược như nhau"
  ],
  "vi": "Không hiểu vì lý do gì mà bạn lại nổi giận."
 },
 "fe-sp24-007": {
  "why": "介助犬 = かいじょけん (chó trợ giúp người khuyết tật). 介 かい, 助 じょ (không kéo dài), 犬 đọc âm On けん.",
  "options": [
   "かいじょういぬ — じょ không dài, 犬 trong từ ghép đọc けん",
   "かいじょけん — đúng",
   "かいじょうけん — sai trường âm",
   "かいじょいぬ — 犬 phải đọc けん"
  ],
  "vi": "10% giá sản phẩm sẽ thành tiền quyên góp để huấn luyện chó trợ giúp người khuyết tật."
 },
 "fe-sp24-008": {
  "why": "一人暮らし = ひとりぐらし. 一人 đọc ひとり; 暮らし đứng sau trong từ ghép bị đục âm く → ぐ (rendaku).",
  "options": [
   "ひとりくらし — thiếu đục âm",
   "ひとりぐらし — đúng",
   "いちにんくらし — 一人 không đọc いちにん",
   "いちにんぐらし — sai cách đọc 一人"
  ],
  "vi": "Tôi đang sống một mình ở nước ngoài."
 },
 "fe-sp24-009": {
  "why": "気が利かない = không tinh ý, vô duyên. Ghế trống mà vẫn đứng (không nhường/không ngồi) bị coi là thiếu tinh ý. Thành ngữ luôn dùng が, không dùng を.",
  "options": [
   "気が利く — tinh ý (nghĩa ngược)",
   "気が利かない — không tinh ý (đúng)",
   "気を利く — sai trợ từ",
   "気を利かない — sai trợ từ"
  ],
  "vi": "Đã có ghế trống mà vẫn đứng thì thật là không tinh ý."
 },
 "fe-sp24-010": {
  "why": "積算（せきさん）= tính dồn, cộng dồn. 積 (TÍCH, せき) + 算 (TOÁN, さん). Các đáp án khác đảo chữ hoặc dùng chữ sai (績).",
  "options": [
   "積算 — đúng",
   "算積 — đảo thứ tự",
   "績積 — 績 là \"thành tích\", sai chữ",
   "算績 — đảo và sai chữ"
  ],
  "vi": "Hằng tháng tôi tính cộng dồn chi phí sinh hoạt."
 },
 "fe-sp24-011": {
  "why": "設置 = せっち (lắp đặt). せつ + ち → せっち (つ biến thành っ khi ghép).",
  "options": [
   "せつち — phải là âm ngắt っ",
   "せつおき — 置 trong từ ghép đọc ち",
   "せっち — đúng",
   "せっおき — sai"
  ],
  "vi": "Lắp đặt hệ thống sưởi trung tâm trong văn phòng."
 },
 "fe-sp24-012": {
  "why": "Thông báo trên tàu thường xin hành khách hạn chế 通話 (nói chuyện điện thoại).",
  "options": [
   "通話 — gọi điện thoại (đúng)",
   "世話 — chăm sóc",
   "時刻 — giờ giấc",
   "鉄道 — đường sắt"
  ],
  "vi": "<Thông báo trên tàu> Xin quý khách vui lòng không nói chuyện điện thoại trên tàu."
 },
 "fe-sp24-013": {
  "why": "〜うちに diễn tả \"trong lúc đang làm A thì B thay đổi lúc nào không hay\"; vế sau thường là sự biến đổi dần: 〜てくる/〜ようになる. 分かってきました = dần dần hiểu ra.",
  "options": [
   "とても楽しかったです — chỉ cảm xúc, không phải biến đổi",
   "分かってきました — dần hiểu ra (đúng)",
   "面白いと思いました — nhận xét, không có biến đổi",
   "したくなりました — có biến đổi nhưng không nối với việc \"không hiểu luật\""
  ],
  "vi": "Tôi không hiểu rõ luật bóng chày, nhưng trong lúc xem trận đấu trên tivi thì dần dần đã hiểu ra."
 },
 "fe-sp24-014": {
  "why": "ショックを受ける = bị sốc (cụm cố định).",
  "options": [
   "落ち込む — suy sụp (tự động từ, không nhận を)",
   "受ける — nhận, bị (đúng)",
   "かける — treo, gây (ショックをかける không dùng)",
   "倒す — làm đổ"
  ],
  "vi": "Nghe tin bạn A đột ngột về nước, tôi bị sốc."
 },
 "fe-sp24-015": {
  "why": "実感する = cảm nhận rõ, thấm thía qua trải nghiệm thật. Sau khi tự làm nông mới thấm sự vất vả.",
  "options": [
   "実感 — cảm nhận thực tế (đúng)",
   "感動 — cảm động",
   "感想 — cảm tưởng",
   "共通 — chung, giống nhau"
  ],
  "vi": "Kỳ nghỉ hè tôi đã trải nghiệm làm nông. Dậy sớm hái rau, khuân vác đồ nặng… tôi đã thấm thía được sự vất vả của việc đồng áng."
 },
 "fe-sp24-016": {
  "why": "汚す đọc よごす = làm bẩn, làm hoen ố (名を汚す = bôi nhọ danh tiếng).",
  "options": [
   "よごれす — không có từ này (汚れる là よごれる)",
   "よごす — đúng",
   "おぼす — sai",
   "おぼえす — sai (覚える là おぼえる)"
  ],
  "vi": "Như vậy là sẽ làm hoen ố danh tiếng của cha."
 },
 "fe-sp24-017": {
  "why": "時刻（じこく）= giờ, thời điểm. 到着時刻 = giờ đến.",
  "options": [
   "自国 — nước mình",
   "時刻 — giờ (đúng)",
   "遅該 — không có từ này",
   "遅刻 — đi muộn (cũng đọc ちこく, khác âm)"
  ],
  "vi": "Xin thông báo các ga dừng và giờ đến nơi."
 },
 "fe-sp24-018": {
  "why": "全然（ぜんぜん）= hoàn toàn (không). 然 (NHIÊN). Các chữ 熟, 熱, 黙 trông giống nhưng sai.",
  "options": [
   "全然 — đúng",
   "全熟 — sai chữ (熟 = chín)",
   "全熱 — sai chữ (熱 = nóng)",
   "全黙 — sai chữ (黙 = im lặng)"
  ],
  "vi": "Về việc đó thì tôi hoàn toàn không biết."
 },
 "fe-sp24-019": {
  "why": "小論文 = しょうろんぶん (bài tiểu luận). 小 đọc しょう (có trường âm).",
  "options": [
   "しょうろんぶん — đúng",
   "しょろんぶん — thiếu trường âm",
   "ころんぶん — sai cách đọc 小",
   "こそんぶん — sai"
  ],
  "vi": "Tôi đang đọc cuốn sách \"Cách viết bài tiểu luận\"."
 },
 "fe-sp24-020": {
  "why": "空港 = くうこう: 空 くう, 港 こう, cả hai đều có trường âm.",
  "options": [
   "くうこう — đúng",
   "くこう — thiếu trường âm ở 空",
   "くうこ — thiếu trường âm ở 港",
   "ぐうこ — sai"
  ],
  "vi": "Tôi vừa ra sân bay đón bạn về."
 },
 "fe-sp24-021": {
  "why": "Nのような + N: \"N giống như\". Trước danh từ (町) phải dùng ような; ように đứng trước động từ/tính từ.",
  "options": [
   "ように — dùng trước động từ",
   "よう — thiếu な",
   "ような — đúng (bổ nghĩa cho danh từ)",
   "ようの — sai dạng"
  ],
  "vi": "Tôi muốn sống ở một thành phố có lịch sử lâu đời giống như Kyoto."
 },
 "fe-sp24-022": {
  "why": "Bus kẹt cứng vì tắc đường → sốt ruột, bực bội = いらいらする.",
  "options": [
   "いらいらする — bực bội, sốt ruột (đúng)",
   "ほっとする — nhẹ nhõm",
   "どきどきする — hồi hộp",
   "わいわいする — ồn ào vui vẻ"
  ],
  "vi": "Bus không nhúc nhích được vì tắc đường (tôi thấy sốt ruột)."
 },
 "fe-sp24-023": {
  "why": "夢中になる = say mê, mải mê quên cả thời gian.",
  "options": [
   "夢中 — say mê (đúng)",
   "暖冬 — mùa đông ấm",
   "景気 — tình hình kinh tế",
   "意外 — bất ngờ"
  ],
  "vi": "Trong lúc đang mải mê chơi game thì trời đã sáng lúc nào không hay."
 },
 "fe-sp24-024": {
  "why": "Làm lái tàu tuyến 〇〇 → làm cho công ty đường sắt (鉄道会社).",
  "options": [
   "鉄道 — đường sắt (đúng)",
   "販売 — bán hàng",
   "禁煙 — cấm hút thuốc",
   "野菜 — rau"
  ],
  "vi": "Anh trai tôi vào làm ở công ty đường sắt và đang là lái tàu tuyến 〇〇."
 },
 "fe-sp24-025": {
  "why": "宅配便 = たくはいびん (dịch vụ giao hàng tận nhà). 宅 たく, 配 はい, 便 びん.",
  "options": [
   "ていはいべん — sai",
   "たくはいびん — đúng",
   "たくはいひん — 便 ở đây đọc びん",
   "ていはいびん — 宅 đọc たく (đề gốc A và D trùng nhau)"
  ],
  "vi": "Hãy gửi bằng dịch vụ chuyển phát tận nhà."
 },
 "fe-sp24-026": {
  "why": "許可 = きょか (giấy phép, sự cho phép). きょ không có trường âm, không đục.",
  "options": [
   "きょうか — thừa trường âm",
   "きょか — đúng",
   "ぎょか — sai, không đục",
   "ぎょうか — sai"
  ],
  "vi": "Không có giấy phép thì không được sử dụng phòng này."
 },
 "fe-sp24-027": {
  "why": "〜ながら (nghịch tiếp) = \"tuy ... nhưng\". Sinh ra gần biển → kỳ vọng thích cá, vế sau phải trái ngược.",
  "options": [
   "魚が好きだ — không trái ngược",
   "魚が好きではない — trái ngược (đúng)",
   "魚と一緒に生きてきた — không trái ngược",
   "魚を売っている — không trái ngược"
  ],
  "vi": "Tuy sinh ra ở gần biển, nhưng tôi không thích cá."
 },
 "fe-sp24-028": {
  "why": "光景（こうけい）= cảnh tượng (đang diễn ra trước mắt). 風景 là ふうけい (phong cảnh) nên không khớp cách đọc.",
  "options": [
   "光景 — đúng",
   "風景 — đọc ふうけい",
   "風影 — không có từ",
   "光影 — không có từ"
  ],
  "vi": "Các bạn đã bao giờ thấy cảnh người ta tưới nước xuống mặt đất trước cửa hàng hay nhà chưa?"
 },
 "fe-sp24-029": {
  "why": "Câu bị động: chủ thể bị/được cho phép là 営業 → 営業が許可される.",
  "options": [
   "が — chủ ngữ câu bị động (đúng)",
   "を — tân ngữ, không dùng trong câu bị động này",
   "は — có thể nhưng đề chọn が",
   "に — chỉ người cho phép"
  ],
  "vi": "Việc kinh doanh nhà hàng của anh ấy đã được cấp phép."
 },
 "fe-sp24-030": {
  "why": "快適（かいてき）= dễ chịu, thoải mái. Có điều hòa nên trong phòng dễ chịu.",
  "options": [
   "快適 — dễ chịu (đúng)",
   "盛ん — thịnh vượng, sôi nổi",
   "頑固 — cứng đầu",
   "光景 — cảnh tượng"
  ],
  "vi": "Dù bên ngoài nóng đến đâu, trong phòng có điều hòa vẫn dễ chịu."
 },
 "fe-sp24-031": {
  "why": "印刷する = in ra giấy. In ra giấy để xem sẽ dễ thấy lỗi hơn.",
  "options": [
   "印刷 — in ấn (đúng)",
   "渋滞 — tắc đường",
   "出産 — sinh con",
   "包装 — đóng gói"
  ],
  "vi": "Lỗi trong tài liệu thì in ra giấy để xem sẽ dễ tìm hơn xem trên màn hình."
 },
 "fe-sp24-032": {
  "why": "〜をもとにして = dựa trên, lấy ... làm cơ sở. Tiểu thuyết viết dựa trên chuyện có thật.",
  "options": [
   "むけに — dành cho",
   "によって — bởi (tác giả), do",
   "をもとにして — dựa trên (đúng)",
   "について — về (chủ đề)"
  ],
  "vi": "Cuốn tiểu thuyết này được viết dựa trên một câu chuyện có thật."
 },
 "fe-sp24-033": {
  "why": "後悔する là tha động từ: 〜を後悔する = hối hận về việc gì.",
  "options": [
   "で — sai",
   "∅ — thiếu trợ từ",
   "が — sai",
   "を — đúng"
  ],
  "vi": "Anh ấy đang hối hận về việc mình đã làm."
 },
 "fe-sp24-034": {
  "why": "退職 = たいしょく (nghỉ việc). 定年退職 = nghỉ hưu đúng tuổi.",
  "options": [
   "ていしょく — sai, đó là 定職/停職",
   "たいしょく — đúng",
   "たいそく — thiếu ょ",
   "でいそく — sai"
  ],
  "vi": "Sau khi nghỉ hưu, anh Miller đã nghĩ về những điều gì?"
 },
 "fe-sp24-035": {
  "why": "企業（きぎょう）= doanh nghiệp, công ty. \"Lớn và nổi tiếng\" dùng cho công ty.",
  "options": [
   "工業 — công nghiệp",
   "産業 — ngành sản xuất",
   "商業 — thương nghiệp",
   "企業 — doanh nghiệp (đúng)"
  ],
  "vi": "Nếu đi làm thì tôi nghĩ nên chọn doanh nghiệp lớn và nổi tiếng."
 },
 "fe-sp24-036": {
  "why": "任せる = giao phó; 任せられない = không thể giao cho được. Người mới chưa thể giao việc.",
  "options": [
   "往復できない — không đi về được",
   "通話できない — không gọi điện được",
   "まかせられない — không giao được (đúng)",
   "ふくめられない — không gộp vào được"
  ],
  "vi": "Công việc này vẫn chưa thể giao cho cậu A mới vào được."
 },
 "fe-sp24-037": {
  "why": "雑誌に載る = được đăng trên tạp chí; に chỉ nơi xuất hiện.",
  "options": [
   "に — đúng",
   "で — nơi hành động, sai",
   "が — sai",
   "を — 載る là tự động từ"
  ],
  "vi": "Bài thơ của tôi đã được đăng trên tạp chí."
 },
 "fe-sp24-038": {
  "why": "お礼（おれい）= lời cảm ơn, quà cảm ơn. 礼 (LỄ).",
  "options": [
   "お社 — sai chữ",
   "お礼 — đúng",
   "お写 — sai chữ",
   "お例 — 例 là \"ví dụ\" (れい) nhưng sai nghĩa"
  ],
  "vi": "Hãy viết thư cảm ơn."
 },
 "fe-sp24-039": {
  "why": "〜を誇りに思う = tự hào về ... (誇り = ほこり, niềm tự hào).",
  "options": [
   "一気 — một mạch",
   "ほこり — niềm tự hào (đúng)",
   "了承 — chấp thuận",
   "心より — từ đáy lòng"
  ],
  "vi": "Tôi tự hào về đứa con trai đang tiếp tục làm tình nguyện vì những người gặp khó khăn."
 },
 "fe-sp24-040": {
  "why": "いったい + câu hỏi = \"rốt cuộc là ... vậy?\", nhấn mạnh sự khó hiểu.",
  "options": [
   "いつか — một lúc nào đó",
   "いったい — rốt cuộc (đúng)",
   "ぜったい — tuyệt đối",
   "もう少しで — suýt nữa"
  ],
  "vi": "Hôm nay lẽ ra tập trung lúc 9 giờ mà chẳng ai đến. Rốt cuộc chuyện gì đang xảy ra vậy?"
 },
 "fe-sp24-041": {
  "why": "Người bán nói về hành động của mình → khiêm nhường ngữ お + Vます + する: お待ちしております.",
  "options": [
   "お待ちになります — tôn kính ngữ (dùng cho khách), sai",
   "お待ちになっております — tôn kính ngữ, sai",
   "お待ちしております — khiêm nhường (đúng)",
   "ご待ちしております — 待つ là từ thuần Nhật, dùng お"
  ],
  "vi": "Chúng tôi rất mong được đón quý khách lại ghé cửa hàng."
 },
 "fe-sp24-042": {
  "why": "海岸線 = かいがんせん (đường bờ biển). 岸 (NGẠN) đọc がん.",
  "options": [
   "かいさんせん — sai",
   "かいがんせん — đúng",
   "かいかんせん — 岸 đọc がん (đục)",
   "かいさんぜん — sai"
  ],
  "vi": "Ở Nhật cũng có tuyến đường sắt chạy dọc bờ biển."
 },
 "fe-sp24-043": {
  "why": "体を壊す = làm hỏng sức khỏe (cụm cố định).",
  "options": [
   "割る — làm vỡ (đồ vật)",
   "壊す — làm hỏng (đúng)",
   "汚す — làm bẩn",
   "落ち込む — suy sụp"
  ],
  "vi": "Uống nhiều quá thì sẽ hại sức khỏe đấy."
 },
 "fe-sp24-044": {
  "why": "シャワーを浴びる = tắm vòi sen; 浴 (DỤC) có bộ thủy 氵. Dạng て: 浴びて.",
  "options": [
   "欲びて — 欲 là \"muốn\", sai chữ",
   "浴びて — đúng",
   "欲て — sai",
   "浴て — thiếu び"
  ],
  "vi": "Tôi tắm rồi mới ăn cơm."
 },
 "fe-sp24-045a": {
  "why": "〜に面している = giáp, hướng ra (biển, đường). Niigata giáp biển Nhật Bản.",
  "options": [
   "連なっていて — nối dài thành dãy (dùng cho núi)",
   "流れていて — chảy (sông)",
   "面していて — giáp biển (đúng)",
   "位置していて — nằm ở (đã dùng ở vế sau)"
  ],
  "vi": "Tỉnh Niigata giáp biển Nhật Bản, nằm cách Tokyo khoảng 300 km về phía bắc."
 },
 "fe-sp24-045b": {
  "why": "平野が広がる = đồng bằng trải rộng.",
  "options": [
   "占めています — chiếm (tỉ lệ)",
   "広がっています — trải rộng (đúng)",
   "汚れていて — bị bẩn",
   "面しています — giáp"
  ],
  "vi": "Từ miền trung đến miền bắc của tỉnh là đồng bằng Echigo trải rộng."
 },
 "fe-sp24-045c": {
  "why": "自然に恵まれる = được thiên nhiên ưu đãi, có thiên nhiên phong phú.",
  "options": [
   "連なっていて — nối dãy",
   "落ちっていて — không có từ",
   "恵まれていて — được ưu đãi (đúng)",
   "接していて — tiếp giáp"
  ],
  "vi": "Đồng bằng Echigo được thiên nhiên ưu đãi, có thể thấy nhiều loài động thực vật."
 },
 "fe-sp24-045d": {
  "why": "Bài viết: mùa hè Niigata nhiệt độ cao, gần như không khác Tokyo → \"mùa hè mát hơn Tokyo\" là SAI. Đề hỏi câu không đúng.",
  "options": [
   "Thiên nga bay từ Siberia về trú đông — đúng theo bài",
   "Gió mùa tây bắc thành gió ẩm — đúng theo bài",
   "Mùa hè Niigata mát hơn Tokyo — SAI (đáp án)",
   "Mùa đông có gió mùa tây bắc — đúng theo bài"
  ],
  "vi": "Về khí hậu tỉnh Niigata, câu không đúng là: \"Mùa hè Niigata mát hơn Tokyo\"."
 },
 "fe-su24-001": {
  "why": "〜へ発展する = phát triển (vươn) ra phía ...; へ chỉ phương hướng.",
  "options": [
   "で — nơi hành động",
   "まで — đến tận",
   "へ — hướng tới (đúng)",
   "に — có thể nhưng đề chọn へ cho phương hướng"
  ],
  "vi": "Công ty thương mại đó đã phát triển ra nước ngoài."
 },
 "fe-su24-003": {
  "why": "Danh từ + である + 限り = chừng nào còn là N. Không dùng な/です trước 限り với danh từ.",
  "options": [
   "な — dùng cho tính từ な",
   "∅ — thiếu",
   "である — đúng",
   "です — không dùng trong mệnh đề này"
  ],
  "vi": "Chừng nào còn là tuyển thủ chuyên nghiệp thì nỗ lực là đương nhiên."
 },
 "fe-su24-004": {
  "why": "配る = くばる (phân phát).",
  "options": [
   "もって — đọc của 持って",
   "くばって — đúng",
   "そこなって — 損なって",
   "とまって — 止まって"
  ],
  "vi": "Hãy phát tài liệu này."
 },
 "fe-su24-005": {
  "why": "苦しむ = くるしむ (đau khổ, khổ sở).",
  "options": [
   "くるしんで — đúng",
   "くむしんで — sai",
   "なやしんで — nhầm với 悩む (なやむ)",
   "ことしんで — sai"
  ],
  "vi": "Cô ấy đang khổ sở vì chuyện tương lai của mình."
 },
 "fe-su24-006": {
  "why": "N + といったら: nhấn mạnh mức độ của N (\"nói đến ... thì thật là ...\"). Vế sau phải là lời bình về mức độ rất cao, thường kiểu 〜くらいだ / 〜ほどだ.",
  "options": [
   "今は思い出せない — không nhấn mạnh mức độ",
   "とてもさびしかった — lặp lại ý, không đúng cách dùng といったら",
   "今忘れた — không hợp",
   "言葉にならないくらいだ — mức độ không nói nên lời (đúng)"
  ],
  "vi": "Nói đến nỗi cô đơn hồi mới bắt đầu sống một mình thì không thể diễn tả thành lời."
 },
 "fe-su24-007": {
  "why": "個性（こせい）= cá tính, nét riêng của mỗi người.",
  "options": [
   "延期 — hoãn lại",
   "誤解 — hiểu lầm",
   "個性 — cá tính (đúng)",
   "比較 — so sánh"
  ],
  "vi": "Cá tính của mỗi người cần phải được tôn trọng."
 },
 "fe-su24-008": {
  "why": "〜に感動する = cảm động trước/vì ...; trợ từ に chỉ đối tượng gây cảm xúc.",
  "options": [
   "が — sai",
   "∅ — thiếu trợ từ",
   "に — đúng",
   "を — 感動する là tự động từ"
  ],
  "vi": "Tôi đã cảm động vì bộ phim này."
 },
 "fe-su24-009": {
  "why": "〜に備えて + 〜ておく: chuẩn bị sẵn cho tình huống có thể xảy ra. 立てておいた = đã lập sẵn.",
  "options": [
   "別の計画を立てた — thiếu sắc thái \"làm sẵn\"",
   "立てる必要がある — có thể nhưng không có ておく",
   "立てたい — mong muốn, không hợp",
   "立てておいた — đã lập sẵn (đúng)"
  ],
  "vi": "Để phòng khi xảy ra sự cố ngoài dự kiến, chúng tôi đã lập sẵn một kế hoạch khác."
 },
 "fe-su24-010": {
  "why": "代表のメンバー = thành viên đội tuyển.",
  "options": [
   "ネット — lưới, mạng",
   "フットサル — bóng đá trong nhà",
   "チームプレイ — lối chơi đồng đội",
   "メンバー — thành viên (đúng)"
  ],
  "vi": "Anh ấy đã được chọn làm thành viên đội tuyển bóng đá Nhật Bản."
 },
 "fe-su24-011": {
  "why": "人に〜をすすめる = giới thiệu/khuyên ai cái gì; に chỉ người nhận.",
  "options": [
   "に — đúng",
   "が — chủ ngữ, sai",
   "を — đã có この辞書を",
   "へ — chỉ hướng, không dùng cho người nhận ở đây"
  ],
  "vi": "Anh trai đã giới thiệu cuốn từ điển này cho tôi."
 },
 "fe-su24-012": {
  "why": "騒ぐ là hành động → nơi diễn ra hành động dùng で.",
  "options": [
   "で — nơi hành động (đúng)",
   "に — nơi tồn tại",
   "から — từ",
   "は — chủ đề"
  ],
  "vi": "Bọn trẻ đang làm ầm ĩ ở bên ngoài."
 },
 "fe-su24-013": {
  "why": "N + につき (văn thông báo trang trọng) = vì đang N. Hay gặp trên biển báo: 工事中につき.",
  "options": [
   "ものですから — vì (văn nói, giải thích cá nhân)",
   "もので — vì (văn nói)",
   "につき — vì (thông báo) (đúng)",
   "からこそ — chính vì"
  ],
  "vi": "Vì đang thi công nên đường này cấm qua lại."
 },
 "fe-su24-014": {
  "why": "Tính từ な + な/である + だけあって = quả đúng là vì ... nên. 好き là tính từ な → 好きである (hoặc 好きな).",
  "options": [
   "好き — thiếu な/である",
   "好きだ — sai dạng",
   "好きである — đúng",
   "好きじゃない — nghĩa ngược"
  ],
  "vi": "Anh ấy quả đúng là thích xe hơi nên biết rất rõ về xe."
 },
 "fe-su24-015": {
  "why": "〜ない限り(は) = chừng nào chưa ... thì (không thể ...). Vế sau là kết quả phủ định/khó thực hiện.",
  "options": [
   "私は結婚する — mâu thuẫn",
   "家を出るつもりだ — không phải kết quả trực tiếp",
   "父を納得してください — sai trợ từ và không hợp",
   "私は結婚できない — đúng"
  ],
  "vi": "Chừng nào bố còn chưa cho phép cuộc hôn nhân này thì tôi không thể kết hôn."
 },
 "fe-su24-016": {
  "why": "〜のせいで = tại vì (kết quả xấu). Về muộn 3 tiếng vì tắc đường (渋滞).",
  "options": [
   "寄付 — quyên góp",
   "消費 — tiêu dùng",
   "期待 — kỳ vọng",
   "渋滞 — tắc đường (đúng)"
  ],
  "vi": "Vì tắc đường mà về nhà muộn hơn dự định tới 3 tiếng."
 },
 "fe-su24-017": {
  "why": "〜っけ = hỏi lại điều mình không chắc; chuyện từ trước nên dùng dạng quá khứ: きれいだったっけ.",
  "options": [
   "きれいな — sai dạng",
   "きれいだ — không hợp với \"từ trước\"",
   "きれい — thiếu だ/だった",
   "きれいだった — đúng"
  ],
  "vi": "Cô ấy trước giờ đã xinh như thế rồi à nhỉ?"
 },
 "fe-su24-018": {
  "why": "捨てる = すてる (vứt bỏ), bộ thủ 扌.",
  "options": [
   "捨てて — đúng",
   "挿てて — sai chữ (挿 = cắm)",
   "持てて — sai chữ (持 = cầm)",
   "握てて — sai chữ (握 = nắm)"
  ],
  "vi": "Hãy vứt những đồ không cần thiết đi."
 },
 "fe-su24-019": {
  "why": "V辞書形 + に限る = làm V là tốt nhất.",
  "options": [
   "はいる — đúng",
   "はいった — sai dạng",
   "はいり — sai dạng",
   "はいらなく — sai dạng"
  ],
  "vi": "Khi người không khỏe thì tốt nhất là ngâm suối nước nóng."
 },
 "fe-su24-020": {
  "why": "〜というのに = vậy mà (bất mãn, ngạc nhiên).",
  "options": [
   "と言えば — nói đến",
   "と言うので — vì nói là",
   "と言うのに — vậy mà (đúng)",
   "と言う — thiếu từ nối"
  ],
  "vi": "Còn 1 tiếng nữa là xuất phát đi du lịch vậy mà vẫn chưa chuẩn bị gì cả."
 },
 "fe-su24-021": {
  "why": "再会 = さいかい (gặp lại). 再 (TÁI) đọc さい, 会 đọc かい.",
  "options": [
   "せいあい — sai",
   "せいかい — 再 đọc さい",
   "さいかい — đúng",
   "さいあい — 会 đọc かい"
  ],
  "vi": "Gặp lại bạn cùng lớp hồi tiểu học."
 },
 "fe-su24-022": {
  "why": "後悔（こうかい）= hối hận. 〜ばよかった (giá mà ...) diễn tả sự hối tiếc.",
  "options": [
   "表現 — biểu hiện",
   "後悔 — hối hận (đúng)",
   "努力 — nỗ lực",
   "期待 — kỳ vọng"
  ],
  "vi": "Điểm kiểm tra kém nên tôi đang hối hận là giá mà đã học nhiều hơn."
 },
 "fe-su24-023": {
  "why": "置き場（おきば）= chỗ để. 置く (đặt) + 場 (chỗ).",
  "options": [
   "着き場 — sai chữ",
   "着き易 — sai",
   "置き場 — đúng",
   "置き易 — sai"
  ],
  "vi": "Tủ lạnh cũ thì hãy mang đến chỗ để rác."
 },
 "fe-su24-024": {
  "why": "アンケートに回答する = trả lời bảng khảo sát.",
  "options": [
   "回答 — trả lời (đúng)",
   "許可 — cho phép",
   "印刷 — in",
   "追加 — thêm vào"
  ],
  "vi": "Số người đã trả lời bảng khảo sát tổng cộng là 30 người."
 },
 "fe-su24-026": {
  "why": "〜ばいいのに = giá mà ... thì hay (tiếc nuối, mong muốn người khác làm).",
  "options": [
   "いいかも — có lẽ tốt",
   "いいのに — giá mà (đúng)",
   "よかったこと — sai",
   "よかったもの — sai"
  ],
  "vi": "Về rồi sao? Giá mà ở lại chơi thêm thì hay biết mấy."
 },
 "fe-su24-027": {
  "why": "Buổi hòa nhạc sắp bắt đầu → háo hức, mong chờ = わくわくする.",
  "options": [
   "わいわいする — ồn ào",
   "いらいらする — bực bội",
   "わくわくする — háo hức (đúng)",
   "ほっとする — nhẹ nhõm"
  ],
  "vi": "Buổi hòa nhạc sắp bắt đầu (tôi thấy háo hức)."
 },
 "fe-su24-028": {
  "why": "気に入る = vừa ý, thích ≈ 好きになる.",
  "options": [
   "けんかする — cãi nhau",
   "おこる — nổi giận",
   "好きになる — trở nên thích (đúng)",
   "がまんする — chịu đựng"
  ],
  "vi": "気に入る (thích, vừa ý) gần nghĩa nhất với 好きになる."
 },
 "fe-su24-029": {
  "why": "戦争（せんそう）= chiến tranh. 戦 (CHIẾN) + 争 (TRANH).",
  "options": [
   "戦争 — đúng",
   "大会 — đại hội (たいかい)",
   "地震 — động đất (じしん)",
   "会議 — cuộc họp (かいぎ)"
  ],
  "vi": "Năm 1900 đã xảy ra chiến tranh."
 },
 "fe-su24-032": {
  "why": "誤解される = bị hiểu lầm. Không nói rõ thì dễ bị hiểu lầm.",
  "options": [
   "開発 — phát triển",
   "計算 — tính toán",
   "誤解 — hiểu lầm (đúng)",
   "個性 — cá tính"
  ],
  "vi": "Không nói rõ ràng thì có khi bị hiểu lầm nên cẩn thận thì hơn."
 },
 "fe-su24-033": {
  "why": "まだ + thể phủ định = vẫn chưa. 歩けない = chưa đi được (khả năng). 歩きにくい/歩きがたい là \"khó đi\", không hợp với まだ.",
  "options": [
   "歩きにくい — khó đi",
   "歩けない — chưa đi được (đúng)",
   "歩ける — đi được (mâu thuẫn với まだ)",
   "歩きがたい — khó đi (văn viết)"
  ],
  "vi": "Con nhà tôi vẫn chưa biết đi."
 },
 "fe-su24-034": {
  "why": "最新 = さいしん (mới nhất). 新 đọc しん.",
  "options": [
   "さいきん — đó là 最近 (gần đây)",
   "ざいきん — sai",
   "さいしん — đúng",
   "ざいしん — sai"
  ],
  "vi": "Tôi muốn biết thời trang mới nhất."
 },
 "fe-su24-036": {
  "why": "〜として = với tư cách là.",
  "options": [
   "について — về",
   "を通して — thông qua",
   "として — với tư cách (đúng)",
   "にとって — đối với"
  ],
  "vi": "Bố tôi đang làm việc ở trường cấp ba với tư cách giáo viên toán."
 },
 "fe-su24-037": {
  "why": "風が吹く = gió thổi.",
  "options": [
   "埋め立て — san lấp",
   "吹いて — thổi (đúng)",
   "湿って — ẩm ướt",
   "延びて — kéo dài"
  ],
  "vi": "Bão đang đến gần nên gió đang thổi rất mạnh."
 },
 "fe-su24-038": {
  "why": "出来事（できごと）= sự việc, chuyện xảy ra. Viết chuyện mỗi ngày vào nhật ký.",
  "options": [
   "地方 — vùng",
   "一生 — cả đời",
   "出来事 — sự việc (đúng)",
   "瞬間 — khoảnh khắc"
  ],
  "vi": "Hằng ngày tôi ghi lại những chuyện đã xảy ra vào nhật ký."
 },
 "fe-su24-039": {
  "why": "〜を代表して = thay mặt, đại diện cho ...",
  "options": [
   "請求 — yêu cầu thanh toán",
   "幸運 — may mắn",
   "代表 — đại diện (đúng)",
   "再開 — mở lại"
  ],
  "vi": "Bạn Lee sẽ đại diện lớp để phát biểu."
 },
 "fe-su24-040": {
  "why": "感動して泣く = cảm động đến phát khóc.",
  "options": [
   "開発 — phát triển",
   "実感 — cảm nhận thực tế",
   "期待 — kỳ vọng",
   "感動 — cảm động (đúng)"
  ],
  "vi": "Xem bộ phim 〇〇 xong, tôi đã cảm động đến phát khóc."
 },
 "fe-su24-041": {
  "why": "〜に恵まれる = được ưu đãi về ...; luôn dùng に.",
  "options": [
   "が — sai",
   "で — sai",
   "に — đúng",
   "を — sai"
  ],
  "vi": "Hòn đảo đó được thiên nhiên ưu đãi về tài nguyên biển."
 },
 "fe-su24-042": {
  "why": "幸運（こううん）= may mắn. Tìm được nhà hàng ngay là may mắn.",
  "options": [
   "豊か — phong phú",
   "大変 — vất vả",
   "幸運 — may mắn (đúng)",
   "平気 — bình thản"
  ],
  "vi": "Tìm được nhà hàng mới ngay như vậy thật là may mắn."
 },
 "fe-su24-043": {
  "why": "景色が美しい = cảnh đẹp.",
  "options": [
   "うつくしい — đẹp (đúng)",
   "うらやましい — ghen tị",
   "むしあつい — oi bức",
   "かたい — cứng"
  ],
  "vi": "Cảnh biển nhìn từ khách sạn thật sự rất đẹp."
 },
 "fe-su24-044": {
  "why": "〜くせに = vậy mà (trách móc, chê bai). Là người Nhật vậy mà tiếng Nhật kỳ quặc → vế sau phải là lời chê.",
  "options": [
   "日本についてよく知っている — khen, không phải chê",
   "日本語がおかしいな — chê (đúng)",
   "日本語がしゃべれるね — hiển nhiên, không chê",
   "日本が好きだ — không chê"
  ],
  "vi": "Anh Sato là người Nhật vậy mà tiếng Nhật kỳ quặc ghê."
 },
 "fe-su24-045a": {
  "why": "Bài viết: \"今では冬の北海道を代表するイベントとして知られています\" → A đúng.",
  "options": [
   "Lễ hội tuyết là sự kiện tiêu biểu của Hokkaido (đúng)",
   "Trồng nhiều cây bằng tuyết: bài không nói",
   "Học sinh cấp 3 làm tượng tuyết: sai, bài nói học sinh cấp 2 (中学生)",
   "Mùa đông ấm, ít tuyết: ngược với bài"
  ],
  "vi": "Câu đúng: Lễ hội tuyết là sự kiện tiêu biểu của Hokkaido."
 },
 "fe-su24-045b": {
  "why": "まつりが行われる = lễ hội được tổ chức.",
  "options": [
   "行われます — được tổ chức (đúng)",
   "栽培されます — được trồng trọt",
   "ながれます — trôi, chảy",
   "めぐまれます — được ưu đãi"
  ],
  "vi": "Hằng năm vào đầu tháng 2, \"Lễ hội tuyết Sapporo\" được tổ chức."
 },
 "fe-su25-001a": {
  "why": "Bài viết có câu \"大人むけの「学習まんが」もある\" (cũng có truyện tranh học tập cho người lớn) → D nói ngược lại nên là câu KHÁC với bài.",
  "options": [
   "Nội dung học được thể hiện bằng truyện tranh: đúng theo bài",
   "Phần lớn làm cho trẻ không thích đọc chữ: đúng theo bài",
   "Chuyên gia kiểm tra nội dung: đúng theo bài",
   "Không có truyện cho người lớn: SAI (đáp án)"
  ],
  "vi": "Câu khác với bài viết: \"Không có người lớn học bằng truyện tranh nên không có loại dành cho người lớn\"."
 },
 "fe-su25-001b": {
  "why": "Bài viết: \"大人の場合、教える方も学ぶ方も、まんがで勉強することには、否定的な人もいる\" → có người lớn cho rằng học bằng truyện tranh là không tốt.",
  "options": [
   "Nói về trẻ em: bài không nói",
   "Muốn học nhưng xấu hổ: bài không nói",
   "Cả trẻ em lẫn người lớn: bài chỉ nói người lớn",
   "Có người lớn phản đối việc học bằng truyện tranh (đúng)"
  ],
  "vi": "Câu khớp với bài: Trong số người lớn, có người cho rằng học bằng truyện tranh là không tốt."
 },
 "fe-su25-001c": {
  "why": "Kết luận của bài: chỉ cần tiếp thu được kiến thức, cách nào dễ hiểu dễ nhớ với người đó là cách tốt; phương pháp học không có cao thấp.",
  "options": [
   "Cách nào dễ hiểu, dễ nhớ với người đó là tốt (đúng)",
   "Truyện tranh đẳng cấp cao hơn: bài nói không có cao thấp",
   "Người lớn học bằng chữ dễ hơn: bài không nói",
   "Người lớn học truyện tranh khó nhớ: bài không nói"
  ],
  "vi": "Bài viết cho rằng: dù bằng truyện tranh hay bằng chữ, cách nào dễ hiểu và dễ nhớ với người đó là phương pháp tốt."
 },
 "fe-su25-002": {
  "why": "ただ〜だけ = chỉ ... mà thôi.",
  "options": [
   "ただし — tuy nhiên (liên từ)",
   "ただ — chỉ (đúng)",
   "いつか — lúc nào đó",
   "いつ — khi nào"
  ],
  "vi": "Hỏi gì đứa bé cũng chỉ khóc mà không trả lời gì cả."
 },
 "fe-su25-003": {
  "why": "孫（まご）= cháu. Bà nấu cho các cháu (私達まご) khi đến chơi.",
  "options": [
   "迷子 — trẻ lạc",
   "親子 — cha mẹ và con",
   "まご — cháu (đúng)",
   "親 — cha mẹ"
  ],
  "vi": "Mỗi lần các cháu chúng tôi đến chơi, bà đều nấu món ăn ngon cho."
 },
 "fe-su25-004": {
  "why": "早速（さっそく）= ngay lập tức, không chần chừ.",
  "options": [
   "速く — nhanh (tốc độ)",
   "さすが — quả là",
   "早速 — ngay (đúng)",
   "心より — từ đáy lòng"
  ],
  "vi": "Nghe nói trước ga mới mở nhà hàng. Đi thử ngay xem nào."
 },
 "fe-su25-005": {
  "why": "たまたま = tình cờ, ngẫu nhiên (một lần). たまに là \"thỉnh thoảng\".",
  "options": [
   "たまたま — tình cờ (đúng)",
   "お互いに — lẫn nhau",
   "時々 — thỉnh thoảng",
   "たまに — thỉnh thoảng"
  ],
  "vi": "Hôm qua tôi đã gặp thầy Yamada ở quán cà phê tình cờ ghé vào."
 },
 "fe-su25-006": {
  "why": "本気で = nghiêm túc, thật sự.",
  "options": [
   "ちょっとした — nho nhỏ",
   "本気で — nghiêm túc (đúng)",
   "相変わらず — vẫn như mọi khi",
   "ひさしぶりに — sau một thời gian dài"
  ],
  "vi": "Từ tuần trước, tôi đã bắt đầu học nghiêm túc để thi năng lực tiếng Nhật."
 },
 "fe-su25-007": {
  "why": "もう少しで〜ところだった = suýt nữa thì ...",
  "options": [
   "少し — một chút",
   "もう少しで — suýt nữa (đúng)",
   "ぜんぜん — hoàn toàn (không)",
   "ちっとも — chẳng chút nào"
  ],
  "vi": "Suýt nữa là vô địch rồi vậy mà lại thua, thật tiếc."
 },
 "fe-su25-008": {
  "why": "音声（おんせい）= âm thanh, tiếng. Chỉ có hình mà không có tiếng.",
  "options": [
   "気象 — khí tượng",
   "例年 — mọi năm",
   "地形 — địa hình",
   "音声 — âm thanh (đúng)"
  ],
  "vi": "Định xem phim trên máy tính thì chỉ có hình mà không nghe được tiếng."
 },
 "fe-su25-009": {
  "why": "コーナー = quầy, khu bán (trong cửa hàng).",
  "options": [
   "トラック — xe tải",
   "ペンション — nhà nghỉ",
   "コンクリート — bê tông",
   "コーナー — quầy (đúng)"
  ],
  "vi": "Tôi đã mua rượu vang ở quầy rượu vang của cửa hàng bách hóa."
 },
 "fe-su25-010": {
  "why": "気になる = bận tâm, quan tâm; 気にならなくなった = không còn hứng thú nữa.",
  "options": [
   "気をしらな — sai",
   "気がならな — sai trợ từ",
   "気にならな — đúng",
   "気がしな — 気がしない = không có cảm giác, sai"
  ],
  "vi": "Tôi không còn hứng thú với cuốn sách này nữa nên định tặng bạn."
 },
 "fe-su25-011": {
  "why": "山が連なる = núi nối tiếp nhau thành dãy.",
  "options": [
   "連なって — nối dãy (đúng)",
   "流れて — chảy",
   "面して — giáp",
   "恵まれて — được ưu đãi"
  ],
  "vi": "Ở phía bắc thị trấn A có dãy núi nối tiếp nhau."
 },
 "fe-su25-012": {
  "why": "延びる là tự động từ → chủ ngữ dùng が: 時間が延びる.",
  "options": [
   "に — sai",
   "が — đúng",
   "で — sai",
   "を — dùng cho tha động từ 延ばす"
  ],
  "vi": "Thời gian đăng ký được kéo dài."
 },
 "fe-su25-014": {
  "why": "〜のことで苦しむ = khổ sở vì chuyện ...; で chỉ nguyên nhân.",
  "options": [
   "を — sai",
   "が — sai",
   "で — nguyên nhân (đúng)",
   "に — sai"
  ],
  "vi": "Cô ấy đang khổ sở vì chuyện tương lai của mình."
 },
 "fe-su25-015": {
  "why": "育成する là tha động từ: 〜を育成する = lai tạo, nuôi trồng cái gì.",
  "options": [
   "が — sai",
   "に — sai",
   "を — đúng",
   "で — sai"
  ],
  "vi": "Anh ấy đã lai tạo được nhiều giống cây mới."
 },
 "fe-su25-016": {
  "why": "訪れる dùng với を khi chỉ người/nơi được đến thăm: 彼を訪れる (đến thăm anh ấy).",
  "options": [
   "に — sai (会社に là nơi chốn)",
   "を — đúng",
   "で — sai",
   "が — sai"
  ],
  "vi": "Đến công ty thăm anh ấy."
 },
 "fe-su25-017": {
  "why": "〜はずの + N = (N) lẽ ra phải ... Hàng lẽ ra phải đến hôm nay mà vẫn chưa đến.",
  "options": [
   "とどくおそれがる — sai dạng (おそれがある = e rằng)",
   "とどくはずの — lẽ ra sẽ đến (đúng)",
   "とどくにきまっている — chắc chắn đến, mâu thuẫn với まだとどかない",
   "とどきかねる — khó đến (văn cứng), không hợp"
  ],
  "vi": "Hàng lẽ ra phải đến hôm nay mà vẫn chưa đến."
 },
 "fe-su25-018": {
  "why": "相談する dùng với に (人に相談する); thêm さえ (ngay cả) → 両親にさえ. Trợ từ に giữ lại trước さえ.",
  "options": [
   "さえ — mất trợ từ に",
   "はさえ — sai",
   "にさえ — ngay cả với (đúng)",
   "でさえ — で không đi với 相談する"
  ],
  "vi": "Tôi đã quyết định bỏ đại học mà không bàn ngay cả với bố mẹ."
 },
 "fe-su25-021": {
  "why": "〜限り(は) = chừng nào còn (trạng thái kéo dài). Cần một trạng thái liên tục: 高熱が続く (sốt cao vẫn kéo dài).",
  "options": [
   "熱が出た — sự việc một lần, không phải trạng thái kéo dài",
   "熱が止めた — sai ngữ pháp",
   "熱が38度になった — sự thay đổi một lần",
   "高熱が続く — trạng thái kéo dài (đúng)"
  ],
  "vi": "Chừng nào còn sốt cao liên tục thì không thể đi làm."
 },
 "fe-su25-023": {
  "why": "N + といったら: cần một danh từ. くやしさ = nỗi uất ức, tiếc nuối (danh từ). Các đáp án khác là tính từ.",
  "options": [
   "さびしい — tính từ, phải là さびしさ",
   "ざんねんだ — tính từ",
   "しんぱい — không hợp ngữ cảnh thua trận",
   "くやしさ — danh từ (đúng)"
  ],
  "vi": "Nói đến nỗi tiếc nuối khi thua trận thì không sao quên được."
 },
 "fe-su25-024": {
  "why": "〜に比べて = so với ...",
  "options": [
   "くらべて — so với (đúng)",
   "よって — tùy theo, bởi",
   "しては — so với mức thường (không hợp)",
   "より — より không đi sau に"
  ],
  "vi": "So với tôi, em gái tôi nấu ăn giỏi hơn."
 },
 "fe-su25-025": {
  "why": "〜っこない = không đời nào (văn nói). Hứa điều không làm được thì không đời nào giữ được.",
  "options": [
   "守れがたい — sai dạng (守りがたい)",
   "守れっこない — không đời nào giữ được (đúng)",
   "守れる — giữ được, mâu thuẫn",
   "守るわけだ — thảo nào giữ, không hợp"
  ],
  "vi": "Dù có hứa những điều không làm được thì cũng không đời nào giữ được."
 },
 "fe-su25-026": {
  "why": "V辞書形 + に限る = làm V là tốt nhất.",
  "options": [
   "聞いた — sai dạng",
   "聞いている — sai dạng",
   "聞く — đúng",
   "聞かない — nghĩa ngược"
  ],
  "vi": "Nếu muốn biết quán ngon ở nơi du lịch thì tốt nhất là hỏi người địa phương."
 },
 "fe-su25-027": {
  "why": "〜ことから = từ việc ... (căn cứ dẫn đến kết quả khách quan). Vế sau phải là sự việc thực tế, không dùng ý chí/mong muốn.",
  "options": [
   "気をつけよう — ý chí, không hợp",
   "けいさつの注意がきびしくなった — kết quả khách quan (đúng)",
   "バスに乗りました — không liên quan",
   "自転車に乗りたくない — mong muốn cá nhân"
  ],
  "vi": "Vì tai nạn xe đạp tăng lên nên cảnh sát đã nhắc nhở nghiêm hơn."
 },
 "fe-su25-028": {
  "why": "〜ものだ = cảm thán về điều hiển nhiên (\"... thật là ...\"). Thời gian trôi nhanh thật.",
  "options": [
   "もん — văn nói, không hợp câu văn này",
   "ものではない — \"không nên\"",
   "ものだった — hồi tưởng quá khứ",
   "ものだ — cảm thán (đúng)"
  ],
  "vi": "Thời gian trôi qua thật nhanh. Mới nghĩ là Tết đây mà đã nửa năm trôi qua rồi."
 },
 "fe-su25-029": {
  "why": "〜ことにしよう = quyết định làm (ý chí của người nói).",
  "options": [
   "勉強するところだった — suýt nữa thì học",
   "勉強するわけだ — thảo nào học",
   "勉強すればよかった — giá mà đã học (hối tiếc)",
   "勉強することにしよう — quyết định sẽ học (đúng)"
  ],
  "vi": "Tối nay đi ngủ sớm, sáng mai dậy sớm rồi quyết định sẽ học."
 },
 "fe-su25-031": {
  "why": "〜だけあって = quả đúng là vì ... nên (đánh giá tích cực, hợp lý). Học y nên có nhiều kiến thức sức khỏe.",
  "options": [
   "わりに — tương đối so với (trái kỳ vọng)",
   "にしたら — đứng ở lập trường",
   "だけあって — quả đúng là vì (đúng)",
   "にしては — so với ... thì (trái kỳ vọng)"
  ],
  "vi": "Chị Yoko quả đúng là đã học y nên có nhiều kiến thức về sức khỏe."
 },
 "fe-su25-032": {
  "why": "誤解（ごかい）= hiểu lầm. 誤 (NGỘ, sai) + 解 (GIẢI, hiểu).",
  "options": [
   "誤解 — đúng",
   "呉解 — thiếu bộ 言",
   "諟解 — sai chữ",
   "説解 — 説 là \"thuyết\""
  ],
  "vi": "Cậu hoàn toàn hiểu lầm ý định thật của tôi."
 },
 "fe-su25-033": {
  "why": "破壊（はかい）= phá hủy. 破 (PHÁ, は) + 壊 (HOẠI, かい).",
  "options": [
   "壊破 — đảo thứ tự",
   "皮壊 — 皮 là \"da\", thiếu bộ 石",
   "壊皮 — sai",
   "破壊 — đúng"
  ],
  "vi": "Người ta đã phá hủy nhà máy cũ để xây cửa hàng bách hóa mới."
 },
 "fe-su25-034": {
  "why": "賛成（さんせい）= tán thành.",
  "options": [
   "賛政 — 政 là \"chính trị\"",
   "讃政 — sai",
   "讃成 — 讃 là \"tán dương\", sai chữ",
   "賛成 — đúng"
  ],
  "vi": "Tôi tán thành kế hoạch đó."
 },
 "fe-su25-035": {
  "why": "出港（しゅっこう）= tàu rời cảng. 出 (XUẤT) + 港 (CẢNG).",
  "options": [
   "出港 — đúng",
   "山港 — 山 là \"núi\"",
   "出巷 — 巷 là \"ngõ\"",
   "山巷 — sai"
  ],
  "vi": "Việc tàu rời cảng đang bị đình chỉ."
 },
 "fe-su25-036": {
  "why": "面談（めんだん）= gặp mặt trao đổi.",
  "options": [
   "面談 — đúng",
   "面淡 — 淡 là \"nhạt\"",
   "面訟 — 訟 là \"kiện\"",
   "面炎 — 炎 là \"lửa\""
  ],
  "vi": "Tôi muốn gặp mặt trao đổi về việc này."
 },
 "fe-su25-037": {
  "why": "縦 (TUNG) đọc たて = chiều dọc. 横 (よこ) là chiều ngang.",
  "options": [
   "おう — âm On của 横",
   "じゅう — âm On của 縦 (dùng trong từ ghép), không dùng đơn lẻ ở đây",
   "よこ — đọc của 横 (ngang)",
   "たて — đúng"
  ],
  "vi": "Tôi đã xếp thẻ theo chiều dọc."
 },
 "fe-su25-038": {
  "why": "発展 = はってん (phát triển). はつ + てん → はってん.",
  "options": [
   "はってん — đúng",
   "てんかい — đọc của 展開",
   "かいてん — đọc của 回転/開店",
   "はつてん — phải có âm ngắt っ"
  ],
  "vi": "Câu chuyện đã phát triển theo một hướng không ngờ."
 },
 "fe-su25-039": {
  "why": "苦情 = くじょう (lời phàn nàn).",
  "options": [
   "くじょう — đúng",
   "くぞう — sai",
   "ぐじょう — không đục",
   "くじょ — thiếu trường âm"
  ],
  "vi": "Nếu có phàn nàn gì thì hãy nói nhé."
 },
 "fe-su25-040": {
  "why": "現場 = げんば (hiện trường). 場 đọc âm Kun ば.",
  "options": [
   "げんじょ — sai",
   "げんは — thiếu đục",
   "げんじょう — đọc của 現状 (hiện trạng)",
   "げんば — đúng"
  ],
  "vi": "Cảnh sát đã bắt được thủ phạm tại hiện trường."
 },
 "fe-su25-041": {
  "why": "横顔 = よこがお (khuôn mặt nhìn nghiêng). 顔 đứng sau bị đục: かお → がお.",
  "options": [
   "よこがお — đúng",
   "おがん — sai",
   "おうがん — sai",
   "よこかお — thiếu đục âm"
  ],
  "vi": "Cô ấy trông nghiêng thì đẹp hơn."
 },
 "me-su24-001a": {
  "why": "Bài viết: \"ほとんど苦くなくて、においもあまりしません\" (gần như không đắng, mùi cũng không nhiều).",
  "options": [
   "Ít mùi, gần như không đắng (đúng)",
   "Đắng nhưng ít mùi: sai, bài nói không đắng",
   "Mùi mạnh nhưng không đắng: sai",
   "Hoàn toàn không có mùi: bài nói \"あまり\" (không nhiều), không phải \"hoàn toàn không\""
  ],
  "vi": "Các em trả lời \"ngon\" vì ớt chuông ít mùi và gần như không đắng."
 },
 "me-su24-001b": {
  "why": "Bài viết: \"その出発点は、外国産のとうがらしです…偶然辛くないものが見つかった\" → điểm xuất phát là tìm thấy cây ớt không cay trong số ớt nước ngoài.",
  "options": [
   "Từ ớt chuông nước ngoài: sai, là ớt (とうがらし)",
   "Tìm được ớt không cay trong ớt cay nước ngoài (đúng)",
   "Ớt chuông cay nước ngoài: sai loại",
   "Tạo ra ớt kiểu mới: sai, là tạo ra ớt chuông kiểu mới"
  ],
  "vi": "Điểm xuất phát là việc tình cờ tìm được cây ớt không cay trong số ớt cay của nước ngoài."
 },
 "me-su24-001c": {
  "why": "Toàn bài nói về loại ớt chuông mới mà trẻ em cũng thích (câu chốt: 子供も好きになれるピーマンの誕生).",
  "options": [
   "Sự khó khăn của nghiên cứu: chỉ là chi tiết",
   "Cách cho trẻ ăn rau: không phải chủ đề",
   "Ớt chuông mà trẻ em cũng thích (đúng)",
   "Loại ớt mới: sai, là ớt chuông mới"
  ],
  "vi": "Chủ đề của bài viết là loại ớt chuông mà cả trẻ em cũng có thể thích."
 },
 "me-su24-002": {
  "why": "周辺（しゅうへん）= vùng xung quanh. 周 (CHU) + 辺 (BIÊN).",
  "options": [
   "周辺 — đúng",
   "周込 — sai chữ",
   "週込 — 週 là \"tuần\"",
   "週辺 — 週 là \"tuần\""
  ],
  "vi": "Ở Tokyo và vùng xung quanh, các tòa nhà mới mọc lên liên tục."
 },
 "me-su24-003": {
  "why": "Thứ tự đúng: 彼は【希望した】【とおりの】【会社に】【就職できて】喜んでいる. Vị trí ★ là ô thứ 2 → とおりの. (〜とおりの + N = N đúng như ...)",
  "options": [
   "希望した — ô 1",
   "とおりの — ô 2 ★ (đúng)",
   "就職できて — ô 4",
   "会社に — ô 3"
  ],
  "vi": "Anh ấy vui vì đã vào làm được đúng công ty mình mong muốn."
 },
 "me-su24-004": {
  "why": "さまざま = đa dạng, mỗi người một khác.",
  "options": [
   "わざわざ — cất công",
   "さまざま — đa dạng (đúng)",
   "たまたま — tình cờ",
   "まだまだ — vẫn còn"
  ],
  "vi": "Lòng người mỗi người một khác nên không cần bận tâm đâu."
 },
 "me-su24-005": {
  "why": "Thứ tự: 兄は歌が【下手な】【くせに】【マイクを】【持つと】放さない. ★ ở ô thứ 4 → 持つと. (〜くせに = vậy mà)",
  "options": [
   "マイクを — ô 3",
   "くせに — ô 2",
   "持つと — ô 4 ★ (đúng)",
   "下手な — ô 1"
  ],
  "vi": "Anh trai tôi hát dở vậy mà cầm micro lên là không chịu buông."
 },
 "me-su24-006": {
  "why": "Thứ tự: 最近、【ペットを】【家族の】【一員】【とする】人が増えてきたようだ. ★ ở ô thứ 2 → 家族の. (AをBとする = coi A là B)",
  "options": [
   "ペットを — ô 1",
   "一員 — ô 3",
   "とする — ô 4",
   "家族の — ô 2 ★ (đúng)"
  ],
  "vi": "Gần đây hình như số người coi thú cưng là một thành viên trong gia đình đã tăng lên."
 },
 "me-su24-007": {
  "why": "〜たらよかったのに = giá mà đã ... (tiếc nuối việc đã không làm).",
  "options": [
   "行ってよかったのよ — \"đi thật tốt\" (đã đi rồi), sai",
   "行けばいいので — sai",
   "行ったらよかったのに — giá mà đã đi (đúng)",
   "行くといいのよ — khuyên làm (tương lai)"
  ],
  "vi": "Bữa tiệc vui như thế thì giá mà tôi cũng đã đi."
 },
 "me-su24-008": {
  "why": "栄転 = えいてん (thăng chức kèm chuyển công tác). 栄 (VINH) えい, 転 (CHUYỂN) てん.",
  "options": [
   "えいてん — đúng",
   "こうてん — sai",
   "えいうん — sai",
   "こううん — đọc của 幸運"
  ],
  "vi": "Kim: Chúc mừng trưởng phòng Tanaka được thăng chức chuyển công tác ạ. Tanaka: Cảm ơn cậu."
 },
 "me-su24-009": {
  "why": "〜を通して = thông qua (trung gian).",
  "options": [
   "をとおして — thông qua (đúng)",
   "を中心に — lấy làm trung tâm",
   "にかわって — thay cho",
   "によって — tùy theo, do"
  ],
  "vi": "Học bổng của hiệp hội IT thì nhất định phải đăng ký thông qua nhà trường."
 },
 "me-su24-010": {
  "why": "間違っている = bị sai.",
  "options": [
   "まちがって — sai (đúng)",
   "ことなって — khác nhau",
   "にぎわって — đông vui",
   "おこなって — tiến hành"
  ],
  "vi": "Bài văn này nội dung thì tốt nhưng ngữ pháp và chữ Hán vẫn còn nhiều chỗ sai."
 },
 "me-su24-011": {
  "why": "Thứ tự: 子供が【したい】【と思うことは】【やらせて】【やりたい】と思っています. ★ ở ô thứ 3 → やらせて. (〜させてやる = cho con làm)",
  "options": [
   "したい — ô 1",
   "やりたい — ô 4",
   "と思うことは — ô 2",
   "やらせて — ô 3 ★ (đúng)"
  ],
  "vi": "Gần đây con tôi bảo muốn học piano. Tôi nghĩ việc gì con muốn làm thì tôi muốn để con làm."
 },
 "me-su24-012": {
  "why": "よろしければ = nếu được / nếu không phiền (lời mời lịch sự).",
  "options": [
   "すばらしければ — nếu tuyệt vời",
   "うらやましければ — nếu ghen tị",
   "よろしければ — nếu được (đúng)",
   "うつくしければ — nếu đẹp"
  ],
  "vi": "Thưa thầy, tối nay chúng em tổ chức tiệc, nếu được thầy có thể đến dự không ạ?"
 },
 "me-su24-013": {
  "why": "V辞書形 + ことはない = không cần phải V.",
  "options": [
   "ことはありませんよ — không cần phải (đúng)",
   "つもりですはありませんよ — sai ngữ pháp",
   "せいじゃありませんよ — không phải tại",
   "しかありませんよ — chỉ còn cách"
  ],
  "vi": "Kim: \"Mai mình đi suối nước nóng với bạn, nếu có động đất thì nên làm thế nào nhỉ?\" Ali: \"Cậu không cần lo đến mức đó đâu.\""
 },
 "me-su24-014": {
  "why": "Thứ tự: 息子は【悪い】【友だちと】【遊んで】【ばかり】いて… ★ ở ô thứ 3 → 遊んで. (Vてばかりいる = suốt ngày chỉ V)",
  "options": [
   "ばかり — ô 4",
   "遊んで — ô 3 ★ (đúng)",
   "悪い — ô 1",
   "友だちと — ô 2"
  ],
  "vi": "Con trai tôi suốt ngày chơi với bạn xấu, chẳng chịu học hành gì cả."
 },
 "me-su24-015": {
  "why": "気持ちが落ち込む = tâm trạng suy sụp, buồn chán.",
  "options": [
   "うめたてている — san lấp",
   "なづけている — đặt tên",
   "もちあげている — nâng lên",
   "おちこんでいる — suy sụp (đúng)"
  ],
  "vi": "Cô ấy không đỗ được trường đại học mong muốn nên bây giờ tâm trạng có vẻ suy sụp."
 },
 "me-su24-016": {
  "why": "任せる = まかせる (giao phó).",
  "options": [
   "たかせる — sai",
   "まかせる — đúng",
   "もかせる — sai",
   "つかせる — sai"
  ],
  "vi": "Lào này, dự án lần này giao hết cho cậu đấy, cố lên nhé."
 },
 "me-su24-017": {
  "why": "苦い = にがい (đắng). 苦 (KHỔ) gồm bộ 艹 + 古.",
  "options": [
   "芸い — 芸 là \"nghệ\"",
   "苦い — đúng",
   "茖い — sai chữ",
   "若い — 若 là \"trẻ\" (わかい), trông giống"
  ],
  "vi": "Thuốc này hơi đắng nhưng hiệu quả lắm đấy."
 },
 "me-su24-018": {
  "why": "言葉遣い（ことばづかい）= cách dùng từ, cách ăn nói.",
  "options": [
   "ひとみしり — nhút nhát với người lạ",
   "いろちがい — khác màu",
   "ことばづかい — cách ăn nói (đúng)",
   "であい — cuộc gặp gỡ"
  ],
  "vi": "Khi nói chuyện với người già hay người trên, tôi nghĩ nên chú ý cách ăn nói."
 },
 "me-su24-019": {
  "why": "対象（たいしょう）= đối tượng. 対 (ĐỐI) + 象 (TƯỢNG).",
  "options": [
   "材像 — sai",
   "材象 — sai",
   "対像 — 像 là \"tượng\" (bức tượng), sai chữ",
   "対象 — đúng"
  ],
  "vi": "Chúng tôi đang tìm đối tượng cho cuộc khảo sát lần này."
 },
 "me-su24-020": {
  "why": "〜くせに = vậy mà (trách móc). Đến muộn vậy mà còn nói những điều tùy tiện.",
  "options": [
   "くせに — vậy mà (đúng)",
   "せいか — có lẽ vì",
   "とおりに — đúng như",
   "うちに — trong lúc"
  ],
  "vi": "Đến muộn vậy mà còn nói những điều tùy tiện."
 },
 "me-su24-021": {
  "why": "〜として = với tư cách là.",
  "options": [
   "について — về",
   "にとって — đối với",
   "として — với tư cách (đúng)",
   "にしても — dù là"
  ],
  "vi": "Cô ấy mới năm ngoái còn là sinh viên, giờ đã đứng trước học sinh với tư cách giáo viên."
 },
 "me-su24-022": {
  "why": "〜たびに = mỗi lần ... (lần nào cũng).",
  "options": [
   "とおりに — đúng như",
   "ように — để",
   "ことから — vì",
   "たびに — mỗi lần (đúng)"
  ],
  "vi": "Mỗi lần đi khám sức khỏe, tôi lại bị bác sĩ nhắc là thiếu vận động."
 },
 "me-su24-023": {
  "why": "メッセージ = thông điệp (tác giả muốn truyền tải).",
  "options": [
   "マッサージ — mát-xa",
   "ホームページ — trang web",
   "ソーセージ — xúc xích",
   "メッセージ — thông điệp (đúng)"
  ],
  "vi": "Tôi đã đọc cuốn tiểu thuyết này nhiều lần nhưng vẫn chưa hiểu thông điệp mà tác giả muốn truyền tải."
 },
 "me-su24-024": {
  "why": "Thể sai khiến 〜させる: làm cho ai đó (cảm thấy) ... → 両親を心配させた = làm bố mẹ lo lắng.",
  "options": [
   "心配された — bị lo (bị động), sai",
   "心配させた — làm cho lo (đúng)",
   "心配させられた — bị bắt phải lo",
   "心配した — tự mình lo"
  ],
  "vi": "Cô ấy đã đến Nhật nhưng không gọi điện ngay nên đã làm bố mẹ lo lắng."
 },
 "me-su24-025": {
  "why": "Vたところ = sau khi làm V thì (biết được kết quả).",
  "options": [
   "ところに — đúng lúc (có người đến)",
   "ところで — dù có ... thì cũng",
   "ところを — đúng lúc (bị thấy)",
   "ところ — sau khi ... thì (đúng)"
  ],
  "vi": "Hỏi thầy thì được biết bạn Hayashi nghỉ."
 },
 "me-su24-026": {
  "why": "〜せいか = có lẽ vì ... (nguyên nhân không chắc chắn).",
  "options": [
   "わりに — tương đối",
   "うちに — trong lúc",
   "くせに — vậy mà",
   "せいか — có lẽ vì (đúng)"
  ],
  "vi": "Có lẽ vì không có thời gian nên anh ấy vội vàng rời khỏi phòng."
 },
 "me-su24-027": {
  "why": "許可（きょか）= sự cho phép.",
  "options": [
   "きょか — sự cho phép (đúng)",
   "へんか — thay đổi",
   "さんか — tham gia",
   "ついか — thêm vào"
  ],
  "vi": "Hayashi này, không có sự cho phép của thầy hiệu trưởng thì không được vào phòng đó đâu."
 },
 "me-su24-028": {
  "why": "周りを海に囲まれている: 囲まれる (bị bao quanh) đi với に chỉ thứ bao quanh (海に), còn 周り (xung quanh) là phần bị bao nên dùng を.",
  "options": [
   "に・を — đảo ngược",
   "を・に — đúng",
   "を・が — sai trợ từ thứ hai",
   "に・が — sai cả hai"
  ],
  "vi": "Nhật Bản là quần đảo dài theo hướng bắc nam, xung quanh được biển bao bọc."
 },
 "me-su24-029": {
  "why": "光景（こうけい）= cảnh tượng. 光 (QUANG) + 景 (CẢNH).",
  "options": [
   "党原 — sai",
   "光景 — đúng",
   "光原 — 原 là \"nguyên\" (cánh đồng)",
   "党景 — 党 là \"đảng\""
  ],
  "vi": "Tai nạn giao thông là cảnh tượng thường thấy ở vùng này."
 },
 "me-su24-030": {
  "why": "残業（ざんぎょう）= làm thêm giờ. Việc đơn giản, ít làm thêm → thích công ty.",
  "options": [
   "しょうぎょう — thương nghiệp",
   "ざんぎょう — làm thêm giờ (đúng)",
   "きぎょう — doanh nghiệp",
   "そつぎょう — tốt nghiệp"
  ],
  "vi": "Công ty này công việc đơn giản, làm thêm giờ cũng ít nên tôi rất thích."
 },
 "me-su24-031": {
  "why": "設置 = せっち (lắp đặt).",
  "options": [
   "てっち — sai",
   "せったい — đọc của 接待 (tiếp đãi)",
   "けったい — sai",
   "せっち — đúng"
  ],
  "vi": "Vì an toàn, chúng tôi đã quyết định lắp đặt chuông báo khẩn cấp."
 },
 "me-su24-032": {
  "why": "盛んに = rộng rãi, phổ biến, sôi nổi.",
  "options": [
   "さかんに — rộng rãi (đúng)",
   "むちゅうに — say mê",
   "いがいに — bất ngờ",
   "ほんきに — sai dạng (本気で)"
  ],
  "vi": "Nghe nói hồi đó loại điện thoại này được dùng rất phổ biến."
 },
 "me-su24-033": {
  "why": "壊れる = こわれる (hỏng, vỡ). 破れる là やぶれる (rách).",
  "options": [
   "表れて — あらわれて (xuất hiện)",
   "破れて — やぶれて (rách)",
   "壊れて — đúng",
   "退れて — sai"
  ],
  "vi": "Máy tính bị hỏng nên không dùng được."
 },
 "me-su24-034": {
  "why": "〜にしては = so với ... thì (kết quả trái với kỳ vọng). Ở Nhật tới 5 năm mà tiếng Nhật không giỏi.",
  "options": [
   "にしてみれば — đứng ở lập trường của",
   "にくらべて — so với (so sánh hai thứ)",
   "にそなえて — để chuẩn bị",
   "にしては — so với ... thì (đúng)"
  ],
  "vi": "Cô ấy đã sống ở Nhật tới 5 năm vậy mà tiếng Nhật không giỏi lắm."
 },
 "me-su24-035": {
  "why": "許す = ゆるす (tha thứ, cho phép).",
  "options": [
   "たおす — 倒す (làm đổ)",
   "よごす — 汚す (làm bẩn)",
   "ながす — 流す (làm trôi)",
   "ゆるす — đúng"
  ],
  "vi": "Không thể tha thứ cho việc xấu như vậy."
 },
 "me-su24-036": {
  "why": "楽しみにする = mong chờ (dùng に); 病気で = vì ốm (で chỉ nguyên nhân).",
  "options": [
   "に・で — đúng",
   "を・に — sai cả hai",
   "に・に — sai chỗ thứ hai",
   "で・で — sai chỗ thứ nhất"
  ],
  "vi": "Chuyến du lịch tôi đã mong chờ từ lâu nhưng vì ốm nên không đi được nữa."
 },
 "me-su24-037": {
  "why": "開催（かいさい）される = được tổ chức (sự kiện lớn).",
  "options": [
   "かいさい — tổ chức (đúng)",
   "きたい — kỳ vọng",
   "こうかい — hối hận / công khai",
   "じゅうたい — tắc đường"
  ],
  "vi": "Olympic 2020 được tổ chức ở Tokyo nhưng tôi không có tiền nên không đi xem được."
 },
 "me-su24-038": {
  "why": "在住 = ざいじゅう (cư trú). 在 đọc ざい (đục), 住 đọc じゅう.",
  "options": [
   "さいじゅう — thiếu đục",
   "さいちゅう — đọc của 最中",
   "ざいじゅう — đúng",
   "ざいちゅう — sai"
  ],
  "vi": "Hiện nay số người Việt Nam sinh sống ở Nhật đã vượt quá 300 nghìn người."
 },
 "me-su25-001a": {
  "why": "Câu trước 【そうすると】: \"うなずきは、相手の意見に同意するときだけでなく、同意できないときでも…小さくうなずくだけで…\" → gật đầu cả khi đồng ý lẫn không đồng ý.",
  "options": [
   "Chỉ gật khi đồng ý: sai, bài nói cả khi không đồng ý",
   "Nói ra \"tôi đang nghe\": sai, đó là ý nghĩa của cái gật đầu",
   "Ngồi im không làm gì: bài nói như vậy làm người nói bất an",
   "Gật đầu cả khi đồng ý lẫn không (đúng)"
  ],
  "vi": "【Làm như vậy】 nghĩa là: gật đầu cả khi đồng ý lẫn khi không đồng ý với ý kiến của đối phương."
 },
 "me-su25-001b": {
  "why": "Bài viết: gật đầu khi người khác nói, đệm \"はい\" \"そうですね\", chỗ đồng cảm thì nói \"本当にそうですね\" → dễ tham gia hội thoại.",
  "options": [
   "Không đồng cảm vẫn nói \"đúng thật vậy\": sai, bài nói nói khi đồng cảm",
   "1-1 thì gật, đông người thì đệm: bài không chia như vậy",
   "Im lặng nghe rồi mới nói: sai",
   "Gật đầu và đệm lời khi người khác đang nói (đúng)"
  ],
  "vi": "Theo bài, cách để tham gia câu chuyện khéo léo là gật đầu và đệm lời khi người khác đang nói."
 },
 "me-su25-002": {
  "why": "Thứ tự: レストランやきっさてんなどの【飲食店を】【中心に】【本屋や美術院など】【いろいろな店が】ある. ★ ở ô thứ 3 → 本屋や美術院など. (〜を中心に = lấy ... làm trung tâm)",
  "options": [
   "本屋や美術院など — ô 3 ★ (đúng)",
   "中心に — ô 2",
   "飲食店を — ô 1",
   "いろいろな店が — ô 4"
  ],
  "vi": "Quanh trường đại học Sakura có nhiều loại cửa hàng, chủ yếu là quán ăn như nhà hàng, quán cà phê, ngoài ra còn có hiệu sách, thẩm mỹ viện…"
 },
 "me-su25-003": {
  "why": "企業 = doanh nghiệp ≈ 会社 (công ty).",
  "options": [
   "建物 — tòa nhà",
   "事務室 — văn phòng",
   "旅行 — du lịch",
   "会社 — công ty (đúng)"
  ],
  "vi": "Tuần sau ở đây có buổi giới thiệu của doanh nghiệp (công ty)."
 },
 "me-su25-004": {
  "why": "Thứ tự: 大川橋は【めがねのような】【形を】【している】【ことから】「めがね橋」とも呼ばれている. ★ ở ô thứ 3 → している. (〜ことから = vì ... nên được gọi là)",
  "options": [
   "形を — ô 2",
   "ことから — ô 4",
   "している — ô 3 ★ (đúng)",
   "めがねのような — ô 1"
  ],
  "vi": "Cầu Okawa có hình dáng giống cặp kính nên còn được gọi là \"cầu kính\"."
 },
 "me-su25-005": {
  "why": "Thứ tự: 行く【たびに】【新しい】【メニューが】【増えている】から. ★ ở ô thứ 3 → メニューが. (〜たびに = mỗi lần)",
  "options": [
   "新しい — ô 2",
   "たびに — ô 1",
   "増えている — ô 4",
   "メニューが — ô 3 ★ (đúng)"
  ],
  "vi": "Nhà hàng đó mỗi lần đến lại có thêm món mới nên lúc nào tôi cũng mong."
 },
 "me-su25-006": {
  "why": "Nのような + N = (những thứ) như là N. \"Đồ nhiều calo như tonkatsu\".",
  "options": [
   "の代わりに — thay cho",
   "どおり — đúng như",
   "によって — tùy theo",
   "のような — như là (đúng)"
  ],
  "vi": "Ăn quá nhiều đồ nhiều calo như tonkatsu thì không tốt cho sức khỏe đâu."
 },
 "me-su25-007": {
  "why": "破る = やぶる (xé, làm rách). 破りとる = xé ra.",
  "options": [
   "こわり — sai",
   "やぶり — đúng",
   "たおり — sai",
   "めぐり — 巡り"
  ],
  "vi": "Không được xé trang sách của thư viện."
 },
 "me-su25-008": {
  "why": "退く = しりぞく (rút lui).",
  "options": [
   "しりぞかなければ — đúng",
   "とどかなければ — 届く",
   "とかなければ — sai",
   "しのかなければ — sai"
  ],
  "vi": "Quân Ý đã phải rút lui đến tận sông Isonzo."
 },
 "me-su25-009": {
  "why": "地下鉄が延びる = tuyến tàu điện ngầm được kéo dài (đến gần đây).",
  "options": [
   "こえて — vượt qua",
   "むかえて — đón",
   "のびて — kéo dài (đúng)",
   "あげて — nâng lên"
  ],
  "vi": "Chắc tàu điện ngầm sẽ được kéo dài đến tận gần đây."
 },
 "me-su25-010": {
  "why": "貴重（きちょう）= quý giá.",
  "options": [
   "ほんき — nghiêm túc",
   "しんせん — tươi mới",
   "きちょう — quý giá (đúng)",
   "こうか — hiệu quả / đắt tiền"
  ],
  "vi": "Sức khỏe của chồng là điều quý giá đối với cô ấy."
 },
 "me-su25-011": {
  "why": "〜もんだから = vì ... (văn nói, giải thích lý do của bản thân).",
  "options": [
   "ようで — có vẻ như",
   "そうだから — nghe nói nên",
   "かわりに — thay vào đó",
   "もんだから — vì (đúng)"
  ],
  "vi": "A: \"Ơ? Mới 10 giờ mà đã ăn cơm hộp rồi à?\" B: \"Ừ. Vì sáng không ăn nên đói bụng quá.\""
 },
 "me-su25-012": {
  "why": "渋滞 chỉ dùng cho giao thông (đường, xe cộ bị tắc).",
  "options": [
   "Căng thẳng bị \"tắc\": sai, dùng たまる",
   "Thi công bị \"tắc\": sai, dùng 遅れる",
   "Đường bị tắc vì tai nạn nên đến muộn (đúng)",
   "Hàng bị \"tắc\" trong kho: sai, dùng 在庫が残る"
  ],
  "vi": "Câu dùng đúng: 事故で道が渋滞していたので、遅刻してしまった。 (Vì tai nạn mà đường bị tắc nên tôi đã đến muộn.)"
 },
 "me-su25-013": {
  "why": "成功を収める = đạt được thành công. 収める (thu, đạt) không có さ trong okurigana.",
  "options": [
   "取さめる — sai chữ và okurigana",
   "取める — sai chữ",
   "収さめる — sai okurigana",
   "収める — đúng"
  ],
  "vi": "Anh ấy không thể đạt được thành công trong công việc."
 },
 "me-su25-014": {
  "why": "Người kia gửi hàng cho mình → dùng お + Vます + いただく (khiêm nhường, nhận ơn): お送りいただき.",
  "options": [
   "送らせていただき — mình xin phép gửi (sai chủ thể)",
   "送らせてさしあげ — sai",
   "お送りいただき — được anh chị gửi cho (đúng)",
   "送ってさしあげ — mình gửi cho người khác"
  ],
  "vi": "Hàng đã đến lúc nãy. Cảm ơn anh chị đã gửi ngay cho chúng tôi."
 },
 "me-su25-015": {
  "why": "団体 = đoàn, nhóm ≈ グループ.",
  "options": [
   "タクシーで — bằng taxi",
   "歩いて — đi bộ",
   "一人で — một mình",
   "グループで — theo nhóm (đúng)"
  ],
  "vi": "Trong chuyến du lịch, chúng tôi di chuyển theo đoàn (nhóm)."
 },
 "me-su25-016": {
  "why": "〜ながら (nghịch tiếp) = tuy ... nhưng. Không nói giỏi tiếng Nhật nhưng vẫn truyền đạt được cảm xúc.",
  "options": [
   "に反して — trái với",
   "ながら — tuy ... nhưng (đúng)",
   "せいで — tại vì (kết quả xấu)",
   "にすれば — đứng ở lập trường"
  ],
  "vi": "Anh ấy tuy không nói giỏi tiếng Nhật nhưng đã dùng những từ mình biết để truyền đạt cảm xúc."
 },
 "me-su25-017": {
  "why": "身を固める = ổn định cuộc sống (lập gia đình). 固める: chữ 固 (CỐ) + okurigana める.",
  "options": [
   "個めた — 個 là \"cá\" (cái)",
   "個ためた — sai",
   "固ためた — sai okurigana",
   "固めた — đúng"
  ],
  "vi": "Anh ấy đã lập gia đình và ổn định cuộc sống."
 },
 "me-su25-018": {
  "why": "話しかける = bắt chuyện với ai (人に話しかける).",
  "options": [
   "Gọi tên: phải dùng 名前を呼ぶ",
   "Bị khách du lịch bắt chuyện bằng tiếng Anh (đúng)",
   "Nói lời cảm ơn: phải dùng お礼を言う",
   "Bàn bạc với gia đình: phải dùng 話し合う"
  ],
  "vi": "Câu dùng đúng: きのう、駅で観光客に英語で話しかけられた。 (Hôm qua ở ga tôi bị một khách du lịch bắt chuyện bằng tiếng Anh.)"
 },
 "me-su25-019": {
  "why": "横顔（よこがお）= khuôn mặt nhìn nghiêng.",
  "options": [
   "縦顔 — 縦 là \"dọc\"",
   "横貌 — 貌 sai chữ",
   "横顔 — đúng",
   "横頼 — 頼 là \"nhờ\""
  ],
  "vi": "Tôi thích khuôn mặt nhìn nghiêng của cậu."
 },
 "me-su25-020": {
  "why": "〜せいで = tại vì (kết quả xấu). Tòa nhà mọc lên làm mất tầm nhìn núi Phú Sĩ.",
  "options": [
   "せいで — tại vì (đúng)",
   "おかげで — nhờ (kết quả tốt)",
   "にしては — so với",
   "ことから — vì (căn cứ)"
  ],
  "vi": "Tại tòa nhà được xây lên mà từ sân thượng không còn nhìn thấy núi Phú Sĩ."
 },
 "me-su25-021": {
  "why": "Thứ tự: いつ、どんな本を読んだかを【忘れない】【ように】【必ずノートに記録する】【ことにしている】そうだ. ★ ở ô thứ 3 → 必ずノートに記録する. (〜ように = để; 〜ことにしている = có thói quen)",
  "options": [
   "ことにしている — ô 4",
   "ように — ô 2",
   "忘れない — ô 1",
   "必ずノートに記録する — ô 3 ★ (đúng)"
  ],
  "vi": "Nghe nói người bạn có sở thích đọc sách luôn ghi chép vào sổ để không quên đã đọc sách gì, lúc nào."
 },
 "me-su25-022": {
  "why": "若者（わかもの）= giới trẻ. 若 (NHƯỢC, trẻ) + 者 (GIẢ, người).",
  "options": [
   "苦者 — 苦 là \"khổ\", trông giống 若",
   "苦物 — sai",
   "若物 — 物 là \"vật\"",
   "若者 — đúng"
  ],
  "vi": "Gần đây có nhiều người trẻ không dùng kính ngữ với người trên."
 },
 "me-su25-023": {
  "why": "〜といえば = nhắc đến ... thì (liên tưởng ngay).",
  "options": [
   "にしたら — đứng ở lập trường",
   "からして — ngay từ",
   "として — với tư cách",
   "といえば — nhắc đến (đúng)"
  ],
  "vi": "Nhắc đến món ăn mùa hè thì chắc nhiều người sẽ nói là lươn."
 },
 "me-su25-024": {
  "why": "ケーキ職人（しょくにん）= thợ làm bánh.",
  "options": [
   "じんこう — dân số",
   "せだい — thế hệ",
   "しょくにん — thợ thủ công (đúng)",
   "ねんだい — thời đại, thập niên"
  ],
  "vi": "Trở thành thợ làm bánh là ước mơ của tôi từ nhỏ."
 },
 "me-su25-025": {
  "why": "世論 = よろん (dư luận). Cách đọc đặc biệt.",
  "options": [
   "ようろん — thừa trường âm",
   "よろん — đúng",
   "じょろん — sai",
   "じょうろん — sai"
  ],
  "vi": "Dư luận rất quan trọng."
 },
 "me-su25-026": {
  "why": "苦手 = にがて (kém, không giỏi).",
  "options": [
   "にがて — đúng",
   "にがいて — thừa い",
   "くしゅ — sai",
   "にがって — sai"
  ],
  "vi": "Tôi kém thể thao."
 },
 "me-su25-027": {
  "why": "収入 = しゅうにゅう (thu nhập). Cả hai chữ đều có trường âm.",
  "options": [
   "しゅうにゅう — đúng",
   "しゅうにゅ — thiếu trường âm ở 入",
   "しゅにゅ — thiếu cả hai",
   "しゅにゅう — thiếu trường âm ở 収"
  ],
  "vi": "Thu nhập của cậu gấp đôi thu nhập của tôi."
 },
 "me-su25-028": {
  "why": "食事を済ませる = ăn xong.",
  "options": [
   "まちがって — sai",
   "そえて — kèm theo",
   "すませて — làm xong (đúng)",
   "つたわって — được truyền đạt"
  ],
  "vi": "Cô ấy ăn xong rồi đi mua sắm."
 },
 "me-su25-029": {
  "why": "Thứ tự: 留守【がちの】【家は】【どろぼうに】【ねらわれやすい】ようです. ★ ở ô thứ 3 → どろぼうに. (〜がち = hay ...)",
  "options": [
   "ねらわれやすい — ô 4",
   "家は — ô 2",
   "どろぼうに — ô 3 ★ (đúng)",
   "がちの — ô 1"
  ],
  "vi": "Hình như nhà hay vắng chủ thì dễ bị trộm nhắm tới."
 },
 "me-su25-030": {
  "why": "〜さえ = ngay cả (điều tối thiểu nhất). Quên ví nên ngay cả nước ép cũng không mua được.",
  "options": [
   "さえ — ngay cả (đúng)",
   "のことなんですが — về việc ...",
   "につけ — mỗi khi",
   "にしては — so với"
  ],
  "vi": "Hôm nay tôi quên ví nên ngay cả nước ép cũng không mua được."
 },
 "me-su25-031": {
  "why": "共通 = chung, giống nhau giữa nhiều người/vật: 共通の趣味 (sở thích chung).",
  "options": [
   "Nhiệt độ: phải dùng 同じ",
   "Giờ ngủ: phải dùng 同じ",
   "Khuôn mặt: phải dùng 似ている",
   "Sở thích chung (đúng)"
  ],
  "vi": "Câu dùng đúng: 娘と息子は、共通の趣味を持っていて、とても仲がいい。 (Con gái và con trai tôi có sở thích chung nên rất thân nhau.)"
 },
 "me-su25-032": {
  "why": "〜ないうちに = trong lúc chưa ... thì đã. Lâu không gặp mà tóc đã dài ra.",
  "options": [
   "というと — nói đến",
   "ようなら — nếu như",
   "うちに — trong lúc (đúng)",
   "たびに — mỗi lần"
  ],
  "vi": "Mới không gặp một thời gian mà tóc đã dài ra rồi nhỉ."
 },
 "me-su25-033": {
  "why": "〜かわりに = đổi lại. Mình giúp chuyển nhà, đổi lại cậu mời mình ăn.",
  "options": [
   "ように — để",
   "にかわって — thay mặt",
   "かわりに — đổi lại (đúng)",
   "くせに — vậy mà"
  ],
  "vi": "Mình giúp cậu chuyển nhà, đổi lại lần sau cậu mời mình ăn nhé."
 },
 "me-su25-034": {
  "why": "たまたま = tình cờ.",
  "options": [
   "たまたま — tình cờ (đúng)",
   "わざわざ — cất công",
   "いつか — lúc nào đó",
   "思ったより — hơn tưởng tượng"
  ],
  "vi": "Chúng tôi tình cờ đi cùng một chuyến xe buýt."
 },
 "me-su25-035": {
  "why": "〜を通じて = suốt (khoảng thời gian). 1年を通じて = quanh năm.",
  "options": [
   "に代わって — thay cho",
   "をはじめ — tiêu biểu là",
   "を通じて — suốt (đúng)",
   "に比べて — so với"
  ],
  "vi": "Quanh năm Kyoto có rất nhiều khách du lịch ghé thăm."
 },
 "me-su25-036": {
  "why": "〜くせに = vậy mà (trách móc). Biết đáp án vậy mà không chịu chỉ.",
  "options": [
   "くせに — vậy mà (đúng)",
   "せいで — tại vì",
   "ながらも — tuy nhưng (trung tính, không có ý trách)",
   "うちに — trong lúc"
  ],
  "vi": "Anh tôi biết đáp án vậy mà cứ bảo \"Tự nghĩ đi\" rồi không chịu chỉ."
 },
 "me-su25-037": {
  "why": "〜おかげだ = là nhờ (kết quả tốt).",
  "options": [
   "おかげ — nhờ (đúng)",
   "ところ — sai",
   "つもり — dự định",
   "ほど — mức độ"
  ],
  "vi": "Sự kiện này thành công là nhờ toàn bộ nhân viên đã cùng nhau cố gắng."
 },
 "me-su25-038": {
  "why": "Bài viết: \"ふわふわと、でも、くずれない程度に力を込めてにぎらなければならない\" → nắm sao cho không vỡ nhưng ăn thấy mềm.",
  "options": [
   "Nắm thật chặt nhiều lần: bài nói như vậy sẽ không ngon",
   "Nắm mềm đến mức vỡ: sai",
   "Nắm thật chặt để không vỡ: sai, quá chặt sẽ không ngon",
   "Không vỡ nhưng ăn thấy mềm (đúng)"
  ],
  "vi": "Cách làm cơm nắm ngon: nắm sao cho không bị vỡ nhưng khi ăn vẫn thấy mềm."
 }
};

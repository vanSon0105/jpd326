// Tạo bởi tools/generate-grammar.py — không sửa tay.
// Câu ví dụ hoàn chỉnh, cách đọc cả câu (và câu còn ô trống) cùng bản dịch tiếng Việt.
const GRAMMAR_EXAMPLES = {
  "6-0": {
    "sentence": {
      "full": "その家は森に囲まれている。",
      "hira": "そのいえはもりにかこまれている。",
      "questionHira": "そのいえはもり＿＿。",
      "vi": "Ngôi nhà đó được bao quanh bởi rừng."
    },
    "connection": {
      "question": "その家は森［　］囲まれている。",
      "full": "その家は森に囲まれている。",
      "hira": "そのいえはもりにかこまれている。",
      "questionHira": "そのいえはもり［　］かこまれている。",
      "vi": "Ngôi nhà đó được bao quanh bởi rừng."
    }
  },
  "6-1": {
    "sentence": {
      "full": "この学校では留学生が全体の三割を占めている。",
      "hira": "このがっこうではりゅうがくせいがぜんたいのさんわりをしめている。",
      "questionHira": "このがっこうではりゅうがくせいがぜんたいのさんわり＿＿。",
      "vi": "Ở trường này, du học sinh chiếm 30% tổng số học sinh."
    },
    "connection": {
      "question": "この学校では留学生が全体の三割［　］占めている。",
      "full": "この学校では留学生が全体の三割を占めている。",
      "hira": "このがっこうではりゅうがくせいがぜんたいのさんわりをしめている。",
      "questionHira": "このがっこうではりゅうがくせいがぜんたいのさんわり［　］しめている。",
      "vi": "Ở trường này, du học sinh chiếm 30% tổng số học sinh."
    }
  },
  "6-2": {
    "sentence": {
      "full": "最近忙しくて、朝ご飯を抜きがちだ。",
      "hira": "さいきんいそがしくて、あさごはんをぬきがちだ。",
      "questionHira": "さいきんいそがしくて、あさごはんをぬき＿＿。",
      "vi": "Gần đây bận quá nên tôi thường bỏ bữa sáng."
    },
    "connection": {
      "question": "最近、約束を忘れ［　］だ。",
      "full": "最近、約束を忘れがちだ。",
      "hira": "さいきん、やくそくをわすれがちだ。",
      "questionHira": "さいきん、やくそくをわすれ［　］だ。",
      "vi": "Gần đây tôi hay quên các cuộc hẹn."
    },
    "extraConnection": {
      "question": "彼は遠慮［　］がちで、あまり意見を言わない。",
      "full": "彼は遠慮がちで、あまり意見を言わない。",
      "hira": "かれはえんりょがちで、あまりいけんをいわない。",
      "questionHira": "かれはえんりょ［　］がちで、あまりいけんをいわない。",
      "vi": "Anh ấy hay ngại nên ít khi nêu ý kiến."
    }
  },
  "6-3": {
    "sentence": {
      "full": "去年に比べて、今年は雨が多い。",
      "hira": "きょねんにくらべて、ことしはあめがおおい。",
      "questionHira": "きょねん＿＿、ことしはあめがおおい。",
      "vi": "So với năm ngoái, năm nay mưa nhiều hơn."
    },
    "connection": {
      "question": "去年［　］比べて、今年は雨が多い。",
      "full": "去年に比べて、今年は雨が多い。",
      "hira": "きょねんにくらべて、ことしはあめがおおい。",
      "questionHira": "きょねん［　］くらべて、ことしはあめがおおい。",
      "vi": "So với năm ngoái, năm nay mưa nhiều hơn."
    }
  },
  "6-4": {
    "sentence": {
      "full": "台風に備えて、水を買っておいた。",
      "hira": "たいふうにそなえて、みずをかっておいた。",
      "questionHira": "たいふう＿＿、みずをかっておいた。",
      "vi": "Tôi đã mua sẵn nước để chuẩn bị cho bão."
    },
    "connection": {
      "question": "台風［　］備えて、水を買っておいた。",
      "full": "台風に備えて、水を買っておいた。",
      "hira": "たいふうにそなえて、みずをかっておいた。",
      "questionHira": "たいふう［　］そなえて、みずをかっておいた。",
      "vi": "Tôi đã mua sẵn nước để chuẩn bị cho bão."
    }
  },
  "6-5": {
    "sentence": {
      "full": "現金に代わって、電子マネーを使う人が増えた。",
      "hira": "げんきんにかわって、でんしまねーをつかうひとがふえた。",
      "questionHira": "げんきん＿＿、でんしまねーをつかうひとがふえた。",
      "vi": "Số người dùng ví điện tử thay cho tiền mặt đã tăng lên."
    },
    "connection": {
      "question": "現金［　］代わって、電子マネーを使う人が増えた。",
      "full": "現金に代わって、電子マネーを使う人が増えた。",
      "hira": "げんきんにかわって、でんしまねーをつかうひとがふえた。",
      "questionHira": "げんきん［　］かわって、でんしまねーをつかうひとがふえた。",
      "vi": "Số người dùng ví điện tử thay cho tiền mặt đã tăng lên."
    }
  },
  "6-6": {
    "sentence": {
      "full": "京都のような古い町に住んでみたい。",
      "hira": "きょうとのようなふるいまちにすんでみたい。",
      "questionHira": "きょうと＿＿ふるいまちにすんでみたい。",
      "vi": "Tôi muốn thử sống ở một thành phố cổ như Kyoto."
    },
    "connection": {
      "question": "京都［　］ような古い町に住んでみたい。",
      "full": "京都のような古い町に住んでみたい。",
      "hira": "きょうとのようなふるいまちにすんでみたい。",
      "questionHira": "きょうと［　］ようなふるいまちにすんでみたい。",
      "vi": "Tôi muốn thử sống ở một thành phố cổ như Kyoto."
    }
  },
  "6-7": {
    "sentence": {
      "full": "彼女は通訳として会議に参加した。",
      "hira": "かのじょはつうやくとしてかいぎにさんかした。",
      "questionHira": "かのじょはつうやく＿＿かいぎにさんかした。",
      "vi": "Cô ấy tham gia cuộc họp với tư cách phiên dịch viên."
    },
    "connection": {
      "question": "彼女は通訳［　］会議に参加した。",
      "full": "彼女は通訳として会議に参加した。",
      "hira": "かのじょはつうやくとしてかいぎにさんかした。",
      "questionHira": "かのじょはつうやく［　］かいぎにさんかした。",
      "vi": "Cô ấy tham gia cuộc họp với tư cách phiên dịch viên."
    }
  },
  "6-8": {
    "sentence": {
      "full": "疲れた日は早く寝るに限る。",
      "hira": "つかれたひははやくねるにかぎる。",
      "questionHira": "つかれたひははやくねる＿＿。",
      "vi": "Vào những ngày mệt mỏi, tốt nhất là đi ngủ sớm."
    },
    "connection": {
      "question": "疲れた日は早く寝る［　］。",
      "full": "疲れた日は早く寝るに限る。",
      "hira": "つかれたひははやくねるにかぎる。",
      "questionHira": "つかれたひははやくねる［　］。",
      "vi": "Vào những ngày mệt mỏi, tốt nhất là đi ngủ sớm."
    }
  },
  "6-9": {
    "sentence": {
      "full": "駅を中心に商店が並んでいる。",
      "hira": "えきをちゅうしんにしょうてんがならんでいる。",
      "questionHira": "えき＿＿しょうてんがならんでいる。",
      "vi": "Các cửa hàng nằm san sát quanh nhà ga."
    },
    "connection": {
      "question": "駅［　］中心に商店が並んでいる。",
      "full": "駅を中心に商店が並んでいる。",
      "hira": "えきをちゅうしんにしょうてんがならんでいる。",
      "questionHira": "えき［　］ちゅうしんにしょうてんがならんでいる。",
      "vi": "Các cửa hàng nằm san sát quanh nhà ga."
    }
  },
  "6-10": {
    "sentence": {
      "full": "京都には清水寺をはじめ多くの名所がある。",
      "hira": "きょうとにはきよみずでらをはじめおおくのめいしょがある。",
      "questionHira": "きょうとにはきよみずでら＿＿おおくのめいしょがある。",
      "vi": "Kyoto có nhiều địa danh nổi tiếng, tiêu biểu là chùa Kiyomizu."
    },
    "connection": {
      "question": "京都には清水寺［　］はじめ多くの名所がある。",
      "full": "京都には清水寺をはじめ多くの名所がある。",
      "hira": "きょうとにはきよみずでらをはじめおおくのめいしょがある。",
      "questionHira": "きょうとにはきよみずでら［　］はじめおおくのめいしょがある。",
      "vi": "Kyoto có nhiều địa danh nổi tiếng, tiêu biểu là chùa Kiyomizu."
    }
  },
  "6-11": {
    "sentence": {
      "full": "一年を通して、この町は観光客でにぎわう。",
      "hira": "いちねんをとおして、このまちはかんこうきゃくでにぎわう。",
      "questionHira": "いちねん＿＿、このまちはかんこうきゃくでにぎわう。",
      "vi": "Suốt cả năm, thị trấn này đông khách du lịch."
    },
    "connection": {
      "question": "一年［　］通して、この町は観光客でにぎわう。",
      "full": "一年を通して、この町は観光客でにぎわう。",
      "hira": "いちねんをとおして、このまちはかんこうきゃくでにぎわう。",
      "questionHira": "いちねん［　］とおして、このまちはかんこうきゃくでにぎわう。",
      "vi": "Suốt cả năm, thị trấn này đông khách du lịch."
    }
  },
  "6-12": {
    "sentence": {
      "full": "海の化石が見つかったことから、昔ここは海だったと考えられる。",
      "hira": "うみのかせきがみつかったことから、むかしここはうみだったとかんがえられる。",
      "questionHira": "うみのかせきがみつかった＿＿、むかしここはうみだったとかんがえられる。",
      "vi": "Vì tìm thấy hóa thạch biển, người ta cho rằng nơi này xưa kia là biển."
    },
    "connection": {
      "question": "静か［　］ことから、この町は観光地として人気がある。",
      "full": "静かなことから、この町は観光地として人気がある。",
      "hira": "しずかなことから、このまちはかんこうちとしてにんきがある。",
      "questionHira": "しずか［　］ことから、このまちはかんこうちとしてにんきがある。",
      "vi": "Vì yên tĩnh nên thị trấn này được yêu thích như một điểm du lịch."
    },
    "extraConnection": {
      "question": "海辺の町［　］ことから、魚がおいしい。",
      "full": "海辺の町であることから、魚がおいしい。",
      "hira": "うみべのまちであることから、さかながおいしい。",
      "questionHira": "うみべのまち［　］ことから、さかながおいしい。",
      "vi": "Vì là thị trấn ven biển nên cá ở đây ngon."
    }
  },
  "6-13": {
    "sentence": {
      "full": "北海道といえば、雪を思い浮かべる。",
      "hira": "ほっかいどうといえば、ゆきをおもいうかべる。",
      "questionHira": "ほっかいどう＿＿、ゆきをおもいうかべる。",
      "vi": "Nhắc đến Hokkaido, tôi nghĩ ngay đến tuyết."
    },
    "connection": {
      "question": "北海道［　］いえば、雪を思い浮かべる。",
      "full": "北海道といえば、雪を思い浮かべる。",
      "hira": "ほっかいどうといえば、ゆきをおもいうかべる。",
      "questionHira": "ほっかいどう［　］いえば、ゆきをおもいうかべる。",
      "vi": "Nhắc đến Hokkaido, tôi nghĩ ngay đến tuyết."
    }
  },
  "7-0": {
    "sentence": {
      "full": "試験が明日なので、遊ぶどころではない。",
      "hira": "しけんがあしたなので、あそぶどころではない。",
      "questionHira": "しけんがあしたなので、あそぶ＿＿。",
      "vi": "Vì ngày mai thi nên chẳng có tâm trí đâu mà đi chơi."
    },
    "connection": {
      "question": "試験が明日なので、遊ぶ［　］ではない。",
      "full": "試験が明日なので、遊ぶどころではない。",
      "hira": "しけんがあしたなので、あそぶどころではない。",
      "questionHira": "しけんがあしたなので、あそぶ［　］ではない。",
      "vi": "Vì ngày mai thi nên chẳng có tâm trí đâu mà đi chơi."
    }
  },
  "7-1": {
    "sentence": {
      "full": "新しい薬を飲んでみたところ、よく眠れた。",
      "hira": "あたらしいくすりをのんでみたところ、よくねむれた。",
      "questionHira": "あたらしいくすりをのんでみた＿＿、よくねむれた。",
      "vi": "Sau khi thử uống loại thuốc mới, tôi đã ngủ ngon."
    },
    "connection": {
      "question": "新しい薬を飲んでみ［　］ところ、よく眠れた。",
      "full": "新しい薬を飲んでみたところ、よく眠れた。",
      "hira": "あたらしいくすりをのんでみたところ、よくねむれた。",
      "questionHira": "あたらしいくすりをのんでみ［　］ところ、よくねむれた。",
      "vi": "Sau khi thử uống loại thuốc mới, tôi đã ngủ ngon."
    }
  },
  "7-2": {
    "sentence": {
      "full": "来月から大阪で働くことになった。",
      "hira": "らいげつからおおさかではたらくことになった。",
      "questionHira": "らいげつからおおさかではたらく＿＿。",
      "vi": "Đã có quyết định rằng từ tháng sau tôi sẽ làm việc ở Osaka."
    },
    "connection": {
      "question": "来月から大阪で働く［　］なった。",
      "full": "来月から大阪で働くことになった。",
      "hira": "らいげつからおおさかではたらくことになった。",
      "questionHira": "らいげつからおおさかではたらく［　］なった。",
      "vi": "Đã có quyết định rằng từ tháng sau tôi sẽ làm việc ở Osaka."
    }
  },
  "7-3": {
    "sentence": {
      "full": "日本に住んでいる限り、日本語を使う機会が多い。",
      "hira": "にほんにすんでいるかぎり、にほんごをつかうきかいがおおい。",
      "questionHira": "にほんにすんでいる＿＿、にほんごをつかうきかいがおおい。",
      "vi": "Chừng nào còn sống ở Nhật, tôi còn có nhiều cơ hội dùng tiếng Nhật."
    },
    "connection": {
      "question": "学生［　］限り、学割が使える。",
      "full": "学生である限り、学割が使える。",
      "hira": "がくせいであるかぎり、がくわりがつかえる。",
      "questionHira": "がくせい［　］かぎり、がくわりがつかえる。",
      "vi": "Chừng nào còn là sinh viên thì có thể dùng ưu đãi sinh viên."
    },
    "extraConnection": {
      "question": "元気［　］限り、旅行を続けたい。",
      "full": "元気な限り、旅行を続けたい。",
      "hira": "げんきなかぎり、りょこうをつづけたい。",
      "questionHira": "げんき［　］かぎり、りょこうをつづけたい。",
      "vi": "Chừng nào còn khỏe, tôi muốn tiếp tục đi du lịch."
    }
  },
  "7-4": {
    "sentence": {
      "full": "もし時間があれば、一緒に行かないかなと思って電話したんです。",
      "hira": "もしじかんがあれば、いっしょにいかないかなとおもってでんわしたんです。",
      "questionHira": "もしじかんがあれば、いっしょにいかない＿＿でんわしたんです。",
      "vi": "Nếu có thời gian, tôi gọi điện vì nghĩ không biết bạn có muốn đi cùng không."
    },
    "connection": {
      "question": "もし時間があれば、一緒に行かない［　］と思って電話したんです。",
      "full": "もし時間があれば、一緒に行かないかなと思って電話したんです。",
      "hira": "もしじかんがあれば、いっしょにいかないかなとおもってでんわしたんです。",
      "questionHira": "もしじかんがあれば、いっしょにいかない［　］とおもってでんわしたんです。",
      "vi": "Nếu có thời gian, tôi gọi điện vì nghĩ không biết bạn có muốn đi cùng không."
    }
  },
  "7-5": {
    "sentence": {
      "full": "初めて作ったにしては、とてもおいしい。",
      "hira": "はじめてつくったにしては、とてもおいしい。",
      "questionHira": "はじめてつくった＿＿、とてもおいしい。",
      "vi": "Dù mới làm lần đầu, món này rất ngon."
    },
    "connection": {
      "question": "新人［　］しては、仕事が速い。",
      "full": "新人にしては、仕事が速い。",
      "hira": "しんじんにしては、しごとがはやい。",
      "questionHira": "しんじん［　］しては、しごとがはやい。",
      "vi": "Dù là người mới, bạn làm việc nhanh."
    }
  },
  "7-6": {
    "sentence": {
      "full": "チケット二枚につき、飲み物を一つ差し上げます。",
      "hira": "ちけっとにまいにつき、のみものをひとつさしあげます。",
      "questionHira": "ちけっとにまい＿＿、のみものをひとつさしあげます。",
      "vi": "Cứ hai vé, chúng tôi tặng một đồ uống."
    },
    "connection": {
      "question": "一人［　］100円いただきます。",
      "full": "一人につき100円いただきます。",
      "hira": "ひとりにつきひゃくえんいただきます。",
      "questionHira": "ひとり［　］ひゃくえんいただきます。",
      "vi": "Chúng tôi thu 100 yên mỗi người."
    }
  },
  "7-7": {
    "sentence": {
      "full": "子どもの成長は早いものだ。",
      "hira": "こどものせいちょうははやいものだ。",
      "questionHira": "こどものせいちょうははやい＿＿。",
      "vi": "Trẻ con lớn nhanh thật đấy."
    },
    "connection": {
      "question": "夜の図書館は静か［　］ものだ。",
      "full": "夜の図書館は静かなものだ。",
      "hira": "よるのとしょかんはしずかなものだ。",
      "questionHira": "よるのとしょかんはしずか［　］ものだ。",
      "vi": "Thư viện ban đêm thường yên tĩnh."
    }
  },
  "7-8": {
    "sentence": {
      "full": "体に悪いと知りながらも、夜更かししてしまう。",
      "hira": "からだにわるいとしりながらも、よふかししてしまう。",
      "questionHira": "からだにわるいとしり＿＿、よふかししてしまう。",
      "vi": "Dù biết thức khuya có hại cho sức khỏe, tôi vẫn cứ thức khuya."
    },
    "connection": {
      "question": "体に悪いと知り［　］も、夜更かししてしまう。",
      "full": "体に悪いと知りながらも、夜更かししてしまう。",
      "hira": "からだにわるいとしりながらも、よふかししてしまう。",
      "questionHira": "からだにわるいとしり［　］も、よふかししてしまう。",
      "vi": "Dù biết thức khuya có hại cho sức khỏe, tôi vẫn cứ thức khuya."
    },
    "extraConnection": {
      "question": "学生［　］ながらも、彼は会社を経営している。",
      "full": "学生でありながらも、彼は会社を経営している。",
      "hira": "がくせいでありながらも、かれはかいしゃをけいえいしている。",
      "questionHira": "がくせい［　］ながらも、かれはかいしゃをけいえいしている。",
      "vi": "Dù là sinh viên, cậu ấy vẫn điều hành một công ty."
    }
  },
  "7-9": {
    "sentence": {
      "full": "この歌を聞くにつけ、子どものころを思い出す。",
      "hira": "このうたをきくにつけ、こどものころをおもいだす。",
      "questionHira": "このうたをきく＿＿、こどものころをおもいだす。",
      "vi": "Mỗi khi nghe bài hát này, tôi lại nhớ về thời thơ ấu."
    },
    "connection": {
      "question": "この歌を聞く［　］、子どものころを思い出す。",
      "full": "この歌を聞くにつけ、子どものころを思い出す。",
      "hira": "このうたをきくにつけ、こどものころをおもいだす。",
      "questionHira": "このうたをきく［　］、こどものころをおもいだす。",
      "vi": "Mỗi khi nghe bài hát này, tôi lại nhớ về thời thơ ấu."
    }
  },
  "7-10": {
    "sentence": {
      "full": "忙しくて、昼ご飯を食べる時間さえなかった。",
      "hira": "いそがしくて、ひるごはんをたべるじかんさえなかった。",
      "questionHira": "いそがしくて、ひるごはんをたべるじかん＿＿なかった。",
      "vi": "Tôi bận đến mức ngay cả thời gian ăn trưa cũng không có."
    },
    "connection": {
      "question": "子どもで［　］できる簡単なゲームです。",
      "full": "子どもでさえできる簡単なゲームです。",
      "hira": "こどもでさえできるかんたんなげーむです。",
      "questionHira": "こどもで［　］できるかんたんなげーむです。",
      "vi": "Đây là trò chơi đơn giản đến cả trẻ con cũng chơi được."
    }
  },
  "7-11": {
    "sentence": {
      "full": "予想に反して、試験は簡単だった。",
      "hira": "よそうにはんして、しけんはかんたんだった。",
      "questionHira": "よそう＿＿、しけんはかんたんだった。",
      "vi": "Trái với dự đoán, bài thi khá dễ."
    },
    "connection": {
      "question": "予想［　］反して、試験は簡単だった。",
      "full": "予想に反して、試験は簡単だった。",
      "hira": "よそうにはんして、しけんはかんたんだった。",
      "questionHira": "よそう［　］はんして、しけんはかんたんだった。",
      "vi": "Trái với dự đoán, bài thi khá dễ."
    }
  },
  "7-12": {
    "sentence": {
      "full": "本を読んでいるうちに、いつの間にか眠った。",
      "hira": "ほんをよんでいるうちに、いつのまにかねむった。",
      "questionHira": "ほんをよんでいる＿＿、いつのまにかねむった。",
      "vi": "Trong lúc đọc sách, tôi đã ngủ thiếp đi lúc nào không hay."
    },
    "connection": {
      "question": "本を読んでいる［　］、いつの間にか眠った。",
      "full": "本を読んでいるうちに、いつの間にか眠った。",
      "hira": "ほんをよんでいるうちに、いつのまにかねむった。",
      "questionHira": "ほんをよんでいる［　］、いつのまにかねむった。",
      "vi": "Trong lúc đọc sách, tôi đã ngủ thiếp đi lúc nào không hay."
    }
  },
  "7-13": {
    "sentence": {
      "full": "このホテルは入口からして立派だ。",
      "hira": "このほてるはいりぐちからしてりっぱだ。",
      "questionHira": "このほてるはいりぐち＿＿りっぱだ。",
      "vi": "Khách sạn này sang trọng ngay từ lối vào."
    },
    "connection": {
      "question": "このホテルは入口［　］して立派だ。",
      "full": "このホテルは入口からして立派だ。",
      "hira": "このほてるはいりぐちからしてりっぱだ。",
      "questionHira": "このほてるはいりぐち［　］してりっぱだ。",
      "vi": "Khách sạn này sang trọng ngay từ lối vào."
    }
  },
  "8-0": {
    "sentence": {
      "full": "店長、来週のシフトのことなんですが、少しお話しできますか。",
      "hira": "てんちょう、らいしゅうのしふとのことなんですが、すこしおはなしできますか。",
      "questionHira": "てんちょう、らいしゅうのしふと＿＿、すこしおはなしできますか。",
      "vi": "Thưa quản lý, về lịch làm việc tuần sau, tôi có thể trao đổi một chút được không ạ?"
    },
    "connection": {
      "question": "店長、来週のシフト［　］ことなんですが、少しお話しできますか。",
      "full": "店長、来週のシフトのことなんですが、少しお話しできますか。",
      "hira": "てんちょう、らいしゅうのしふとのことなんですが、すこしおはなしできますか。",
      "questionHira": "てんちょう、らいしゅうのしふと［　］ことなんですが、すこしおはなしできますか。",
      "vi": "Thưa quản lý, về lịch làm việc tuần sau, tôi có thể trao đổi một chút được không ạ?"
    }
  },
  "8-1": {
    "sentence": {
      "full": "体調が悪いので、先に帰らせていただけませんか。",
      "hira": "たいちょうがわるいので、さきにかえらせていただけませんか。",
      "questionHira": "たいちょうがわるいので、さきにかえら＿＿。",
      "vi": "Vì tôi không khỏe, tôi có thể xin phép về trước được không ạ?"
    },
    "connection": {
      "question": "体調が悪いので、先に帰ら［　］いただけませんか。",
      "full": "体調が悪いので、先に帰らせていただけませんか。",
      "hira": "たいちょうがわるいので、さきにかえらせていただけませんか。",
      "questionHira": "たいちょうがわるいので、さきにかえら［　］いただけませんか。",
      "vi": "Vì tôi không khỏe, tôi có thể xin phép về trước được không ạ?"
    }
  },
  "8-2": {
    "sentence": {
      "full": "先生が教えてくれたおかげで、合格できた。",
      "hira": "せんせいがおしえてくれたおかげで、ごうかくできた。",
      "questionHira": "せんせいがおしえてくれた＿＿、ごうかくできた。",
      "vi": "Nhờ thầy cô dạy bảo mà tôi đã thi đỗ."
    },
    "connection": {
      "question": "先生［　］おかげで、合格できた。",
      "full": "先生のおかげで、合格できた。",
      "hira": "せんせいのおかげで、ごうかくできた。",
      "questionHira": "せんせい［　］おかげで、ごうかくできた。",
      "vi": "Nhờ thầy cô mà tôi đã thi đỗ."
    },
    "extraConnection": {
      "question": "みんなが親切［　］おかげで、安心できた。",
      "full": "みんなが親切なおかげで、安心できた。",
      "hira": "みんながしんせつなおかげで、あんしんできた。",
      "questionHira": "みんながしんせつ［　］おかげで、あんしんできた。",
      "vi": "Nhờ mọi người tử tế mà tôi thấy yên tâm."
    }
  },
  "8-3": {
    "sentence": {
      "full": "電車が止まったものですから、遅れてしまいました。",
      "hira": "でんしゃがとまったものですから、おくれてしまいました。",
      "questionHira": "でんしゃがとまった＿＿、おくれてしまいました。",
      "vi": "Vì tàu dừng chạy nên tôi đã đến muộn."
    },
    "connection": {
      "question": "心配［　］ものですから、電話しました。",
      "full": "心配なものですから、電話しました。",
      "hira": "しんぱいなものですから、でんわしました。",
      "questionHira": "しんぱい［　］ものですから、でんわしました。",
      "vi": "Vì tôi lo lắng nên đã gọi điện."
    },
    "extraConnection": {
      "question": "学生［　］ものですから、あまりお金がありません。",
      "full": "学生なものですから、あまりお金がありません。",
      "hira": "がくせいなものですから、あまりおかねがありません。",
      "questionHira": "がくせい［　］ものですから、あまりおかねがありません。",
      "vi": "Vì là sinh viên nên tôi không có nhiều tiền."
    }
  },
  "8-4": {
    "sentence": {
      "full": "部長の代わりに、課長が会議に出席した。",
      "hira": "ぶちょうのかわりに、かちょうがかいぎにしゅっせきした。",
      "questionHira": "ぶちょう＿＿、かちょうがかいぎにしゅっせきした。",
      "vi": "Trưởng phòng đã thay mặt trưởng bộ phận tham dự cuộc họp."
    },
    "connection": {
      "question": "部長［　］代わりに、課長が会議に出席した。",
      "full": "部長の代わりに、課長が会議に出席した。",
      "hira": "ぶちょうのかわりに、かちょうがかいぎにしゅっせきした。",
      "questionHira": "ぶちょう［　］かわりに、かちょうがかいぎにしゅっせきした。",
      "vi": "Trưởng phòng đã thay mặt trưởng bộ phận tham dự cuộc họp."
    }
  },
  "8-5": {
    "sentence": {
      "full": "自分は何もしないくせに、文句ばかり言う。",
      "hira": "じぶんはなにもしないくせに、もんくばかりいう。",
      "questionHira": "じぶんはなにもしない＿＿、もんくばかりいう。",
      "vi": "Bản thân chẳng làm gì mà cứ toàn phàn nàn."
    },
    "connection": {
      "question": "子ども［　］くせに、大人のようなことを言う。",
      "full": "子どものくせに、大人のようなことを言う。",
      "hira": "こどものくせに、おとなのようなことをいう。",
      "questionHira": "こども［　］くせに、おとなのようなことをいう。",
      "vi": "Dù chỉ là trẻ con mà lại nói như người lớn."
    },
    "extraConnection": {
      "question": "元気［　］くせに、仕事を休んだ。",
      "full": "元気なくせに、仕事を休んだ。",
      "hira": "げんきなくせに、しごとをやすんだ。",
      "questionHira": "げんき［　］くせに、しごとをやすんだ。",
      "vi": "Dù khỏe mà lại nghỉ làm."
    }
  },
  "8-6": {
    "sentence": {
      "full": "大雨のせいで、試合が中止になった。",
      "hira": "おおあめのせいで、しあいがちゅうしになった。",
      "questionHira": "おおあめの＿＿、しあいがちゅうしになった。",
      "vi": "Vì mưa lớn nên trận đấu đã bị hủy."
    },
    "connection": {
      "question": "忙しい［　］せいで、昼ご飯を食べる時間がなかった。",
      "full": "忙しいせいで、昼ご飯を食べる時間がなかった。",
      "hira": "いそがしいせいで、ひるごはんをたべるじかんがなかった。",
      "questionHira": "いそがしい［　］せいで、ひるごはんをたべるじかんがなかった。",
      "vi": "Vì bận nên tôi không có thời gian ăn trưa."
    },
    "extraConnection": {
      "question": "雨［　］せいで、試合が中止になった。",
      "full": "雨のせいで、試合が中止になった。",
      "hira": "あめのせいで、しあいがちゅうしになった。",
      "questionHira": "あめ［　］せいで、しあいがちゅうしになった。",
      "vi": "Vì mưa nên trận đấu đã bị hủy."
    }
  },
  "8-7": {
    "sentence": {
      "full": "そんなに無理をしたら、体を壊すにきまっている。",
      "hira": "そんなにむりをしたら、からだをこわすにきまっている。",
      "questionHira": "そんなにむりをしたら、からだをこわす＿＿。",
      "vi": "Nếu cố quá như thế, chắc chắn bạn sẽ làm hỏng sức khỏe."
    },
    "connection": {
      "question": "制服を着ているから、あの人は学生［　］にきまっている。",
      "full": "制服を着ているから、あの人は学生にきまっている。",
      "hira": "せいふくをきているから、あのひとはがくせいにきまっている。",
      "questionHira": "せいふくをきているから、あのひとはがくせい［　］にきまっている。",
      "vi": "Người đó mặc đồng phục nên chắc chắn là sinh viên."
    },
    "extraConnection": {
      "question": "新しい道具なら、便利［　］にきまっている。",
      "full": "新しい道具なら、便利にきまっている。",
      "hira": "あたらしいどうぐなら、べんりにきまっている。",
      "questionHira": "あたらしいどうぐなら、べんり［　］にきまっている。",
      "vi": "Nếu là dụng cụ mới thì chắc chắn sẽ tiện lợi."
    }
  },
  "8-8": {
    "sentence": {
      "full": "その知らせは家族を喜ばせた。",
      "hira": "そのしらせはかぞくをよろこばせた。",
      "questionHira": "そのしらせはかぞくをよろこば＿＿。",
      "vi": "Tin đó đã khiến cả gia đình vui mừng."
    },
    "connection": {
      "question": "良い知らせは家族を喜ば［　］。",
      "full": "良い知らせは家族を喜ばせる。",
      "hira": "よいしらせはかぞくをよろこばせる。",
      "questionHira": "よいしらせはかぞくをよろこば［　］。",
      "vi": "Tin tốt khiến gia đình vui mừng."
    }
  },
  "8-9": {
    "sentence": {
      "full": "まだ時間があるから、急ぐことはない。",
      "hira": "まだじかんがあるから、いそぐことはない。",
      "questionHira": "まだじかんがあるから、いそぐ＿＿。",
      "vi": "Vẫn còn thời gian nên không cần vội."
    },
    "connection": {
      "question": "まだ時間があるから、急ぐ［　］はない。",
      "full": "まだ時間があるから、急ぐことはない。",
      "hira": "まだじかんがあるから、いそぐことはない。",
      "questionHira": "まだじかんがあるから、いそぐ［　］はない。",
      "vi": "Vẫn còn thời gian nên không cần vội."
    }
  },
  "8-10": {
    "sentence": {
      "full": "母は料理のことになると、話が止まらない。",
      "hira": "はははりょうりのことになると、はなしがとまらない。",
      "questionHira": "はははりょうり＿＿、はなしがとまらない。",
      "vi": "Hễ nói đến chuyện nấu ăn là mẹ tôi nói mãi không dừng."
    },
    "connection": {
      "question": "母は料理［　］ことになると、話が止まらない。",
      "full": "母は料理のことになると、話が止まらない。",
      "hira": "はははりょうりのことになると、はなしがとまらない。",
      "questionHira": "はははりょうり［　］ことになると、はなしがとまらない。",
      "vi": "Hễ nói đến chuyện nấu ăn là mẹ tôi nói mãi không dừng."
    }
  },
  "8-11": {
    "sentence": {
      "full": "親にしたら、子どもの帰りが遅いと心配だ。",
      "hira": "おやにしたら、こどものかえりがおそいとしんぱいだ。",
      "questionHira": "おや＿＿、こどものかえりがおそいとしんぱいだ。",
      "vi": "Ở vị trí của cha mẹ, con về muộn thì sẽ lo lắng."
    },
    "connection": {
      "question": "親［　］したら、子どもの帰りが遅いと心配だ。",
      "full": "親にしたら、子どもの帰りが遅いと心配だ。",
      "hira": "おやにしたら、こどものかえりがおそいとしんぱいだ。",
      "questionHira": "おや［　］したら、こどものかえりがおそいとしんぱいだ。",
      "vi": "Ở vị trí của cha mẹ, con về muộn thì sẽ lo lắng."
    }
  },
  "8-12": {
    "sentence": {
      "full": "この写真を見るたびに、旅行を思い出す。",
      "hira": "このしゃしんをみるたびに、りょこうをおもいだす。",
      "questionHira": "このしゃしんをみる＿＿、りょこうをおもいだす。",
      "vi": "Mỗi lần nhìn bức ảnh này, tôi lại nhớ chuyến du lịch."
    },
    "connection": {
      "question": "旅行［　］たびに、新しい友達ができる。",
      "full": "旅行のたびに、新しい友達ができる。",
      "hira": "りょこうのたびに、あたらしいともだちができる。",
      "questionHira": "りょこう［　］たびに、あたらしいともだちができる。",
      "vi": "Mỗi chuyến du lịch, tôi lại có thêm bạn mới."
    },
    "extraConnection": {
      "question": "会う［　］たびに、彼は新しい話をしてくれる。",
      "full": "会うたびに、彼は新しい話をしてくれる。",
      "hira": "あうたびに、かれはあたらしいはなしをしてくれる。",
      "questionHira": "あう［　］たびに、かれはあたらしいはなしをしてくれる。",
      "vi": "Mỗi lần gặp, cậu ấy lại kể cho tôi chuyện mới."
    }
  },
  "8-13": {
    "sentence": {
      "full": "早く出発すれば、電車に間に合ったのに。",
      "hira": "はやくしゅっぱつすれば、でんしゃにまにあったのに。",
      "questionHira": "はやくしゅっぱつ＿＿、でんしゃにまにあったのに。",
      "vi": "Giá mà xuất phát sớm thì đã kịp tàu."
    },
    "connection": {
      "question": "早く出発［　］、電車に間に合ったのに。",
      "full": "早く出発すれば、電車に間に合ったのに。",
      "hira": "はやくしゅっぱつすれば、でんしゃにまにあったのに。",
      "questionHira": "はやくしゅっぱつ［　］、でんしゃにまにあったのに。",
      "vi": "Giá mà xuất phát sớm thì đã kịp tàu."
    }
  },
  "9-0": {
    "sentence": {
      "full": "友達との思い出は忘れがたい。",
      "hira": "ともだちとのおもいではわすれがたい。",
      "questionHira": "ともだちとのおもいではわすれ＿＿。",
      "vi": "Những kỷ niệm với bạn bè thật khó quên."
    },
    "connection": {
      "question": "友達との思い出は忘れ［　］。",
      "full": "友達との思い出は忘れがたい。",
      "hira": "ともだちとのおもいではわすれがたい。",
      "questionHira": "ともだちとのおもいではわすれ［　］。",
      "vi": "Những kỷ niệm với bạn bè thật khó quên."
    }
  },
  "9-1": {
    "sentence": {
      "full": "先生が説明したように、やってみてください。",
      "hira": "せんせいがせつめいしたように、やってみてください。",
      "questionHira": "せんせいがせつめいした＿＿、やってみてください。",
      "vi": "Hãy thử làm như thầy cô đã giải thích."
    },
    "connection": {
      "question": "先生［　］ように、やってみてください。",
      "full": "先生のように、やってみてください。",
      "hira": "せんせいのように、やってみてください。",
      "questionHira": "せんせい［　］ように、やってみてください。",
      "vi": "Hãy thử làm theo cách của thầy cô."
    },
    "extraConnection": {
      "question": "見本と同じ［　］ように作ってください。",
      "full": "見本と同じように作ってください。",
      "hira": "みほんとおなじようにつくってください。",
      "questionHira": "みほんとおなじ［　］ようにつくってください。",
      "vi": "Hãy làm giống như mẫu."
    }
  },
  "9-2": {
    "sentence": {
      "full": "時間がたつとともに、不安も消えていった。",
      "hira": "じかんがたつとともに、ふあんもきえていった。",
      "questionHira": "じかんがたつ＿＿、ふあんもきえていった。",
      "vi": "Theo thời gian, nỗi bất an cũng dần tan biến."
    },
    "connection": {
      "question": "家族［　］ともに歩んでいきたい。",
      "full": "家族とともに歩んでいきたい。",
      "hira": "かぞくとともにあゆんでいきたい。",
      "questionHira": "かぞく［　］ともにあゆんでいきたい。",
      "vi": "Tôi muốn cùng gia đình bước tiếp."
    }
  },
  "9-3": {
    "sentence": {
      "full": "この映画は実話をもとに作られた。",
      "hira": "このえいがはじつわをもとにつくられた。",
      "questionHira": "このえいがはじつわ＿＿つくられた。",
      "vi": "Bộ phim này được làm dựa trên một câu chuyện có thật."
    },
    "connection": {
      "question": "この映画は実話［　］もとに作られた。",
      "full": "この映画は実話をもとに作られた。",
      "hira": "このえいがはじつわをもとにつくられた。",
      "questionHira": "このえいがはじつわ［　］もとにつくられた。",
      "vi": "Bộ phim này được làm dựa trên một câu chuyện có thật."
    }
  },
  "9-4": {
    "sentence": {
      "full": "明日の集合は八時でしょう？",
      "hira": "あしたのしゅうごうははちじでしょう？",
      "questionHira": "あしたのしゅうごうははちじ＿＿？",
      "vi": "Ngày mai tập trung lúc tám giờ, đúng không?"
    },
    "connection": {
      "question": "あの人は制服を着ているから、学生［　］でしょう？",
      "full": "あの人は制服を着ているから、学生でしょう？",
      "hira": "あのひとはせいふくをきているから、がくせいでしょう？",
      "questionHira": "あのひとはせいふくをきているから、がくせい［　］でしょう？",
      "vi": "Người đó mặc đồng phục nên chắc là sinh viên, đúng không?"
    }
  },
  "9-5": {
    "sentence": {
      "full": "あれ、会議は何時からだっけ？",
      "hira": "あれ、かいぎはなんじからだっけ？",
      "questionHira": "あれ、かいぎはなんじからだ＿＿？",
      "vi": "Ơ, cuộc họp bắt đầu từ mấy giờ ấy nhỉ?"
    },
    "connection": {
      "question": "あれ、彼はまだ学生［　］っけ？",
      "full": "あれ、彼はまだ学生だっけ？",
      "hira": "あれ、かれはまだがくせいだっけ？",
      "questionHira": "あれ、かれはまだがくせい［　］っけ？",
      "vi": "Ơ, cậu ấy vẫn còn là sinh viên ấy nhỉ?"
    }
  },
  "9-6": {
    "sentence": {
      "full": "今日は祭りか。だから人が多いわけだ。",
      "hira": "きょうはまつりか。だからひとがおおいわけだ。",
      "questionHira": "きょうはまつりか。だからひとがおおい＿＿。",
      "vi": "Hôm nay là ngày hội à. Thảo nào đông người."
    },
    "connection": {
      "question": "彼はまだ学生［　］というわけだ。",
      "full": "彼はまだ学生だというわけだ。",
      "hira": "かれはまだがくせいだというわけだ。",
      "questionHira": "かれはまだがくせい［　］というわけだ。",
      "vi": "Vậy ra cậu ấy vẫn còn là sinh viên."
    },
    "extraConnection": {
      "question": "毎日大学に通っている。彼は学生［　］わけだ。",
      "full": "毎日大学に通っている。彼は学生なわけだ。",
      "hira": "まいにちだいがくにとおっている。かれはがくせいなわけだ。",
      "questionHira": "まいにちだいがくにとおっている。かれはがくせい［　］わけだ。",
      "vi": "Ngày nào cậu ấy cũng đến trường đại học. Thảo nào cậu ấy là sinh viên."
    }
  },
  "9-7": {
    "sentence": {
      "full": "この重い箱を一人で持てっこない。",
      "hira": "このおもいはこをひとりでもてっこない。",
      "questionHira": "このおもいはこをひとりでもて＿＿。",
      "vi": "Tôi không thể nào một mình bê chiếc hộp nặng này."
    },
    "connection": {
      "question": "そんなに遠い所へは一日で行き［　］。",
      "full": "そんなに遠い所へは一日で行きっこない。",
      "hira": "そんなにとおいところへはいちにちでいきっこない。",
      "questionHira": "そんなにとおいところへはいちにちでいき［　］。",
      "vi": "Không đời nào đi tới nơi xa như vậy trong một ngày."
    }
  },
  "9-8": {
    "sentence": {
      "full": "どうして行かないの？ 怖いもん。",
      "hira": "どうしていかないの？ こわいもん。",
      "questionHira": "どうしていかないの？ こわい＿＿。",
      "vi": "Sao bạn không đi? Vì tớ sợ mà."
    },
    "connection": {
      "question": "どうしてそんなに安いの？ 学生［　］んだもん。",
      "full": "どうしてそんなに安いの？ 学生なんだもん。",
      "hira": "どうしてそんなにやすいの？ がくせいなんだもん。",
      "questionHira": "どうしてそんなにやすいの？ がくせい［　］んだもん。",
      "vi": "Sao rẻ thế? Vì tớ là sinh viên mà."
    },
    "extraConnection": {
      "question": "どうして食べないの？ 野菜が嫌い［　］んだもん。",
      "full": "どうして食べないの？ 野菜が嫌いなんだもん。",
      "hira": "どうしてたべないの？ やさいがきらいなんだもん。",
      "questionHira": "どうしてたべないの？ やさいがきらい［　］んだもん。",
      "vi": "Sao cậu không ăn? Vì tớ ghét rau mà."
    }
  },
  "9-9": {
    "sentence": {
      "full": "転びそうになるほど道が凍っていた。",
      "hira": "ころびそうになるほどみちがこおっていた。",
      "questionHira": "ころびそうになる＿＿みちがこおっていた。",
      "vi": "Con đường đóng băng đến mức tôi suýt ngã."
    },
    "connection": {
      "question": "合格の知らせを聞いて、驚く［　］うれしい。",
      "full": "合格の知らせを聞いて、驚くほどうれしい。",
      "hira": "ごうかくのしらせをきいて、おどろくほどうれしい。",
      "questionHira": "ごうかくのしらせをきいて、おどろく［　］うれしい。",
      "vi": "Nghe tin đỗ, tôi vui đến kinh ngạc."
    }
  },
  "9-10": {
    "sentence": {
      "full": "もう少しで電車に乗り遅れるところだった。",
      "hira": "もうすこしででんしゃにのりおくれるところだった。",
      "questionHira": "もうすこしででんしゃにのりおくれる＿＿。",
      "vi": "Tôi đã suýt lỡ chuyến tàu."
    },
    "connection": {
      "question": "階段で転ぶ［　］だった。",
      "full": "階段で転ぶところだった。",
      "hira": "かいだんでころぶところだった。",
      "questionHira": "かいだんでころぶ［　］だった。",
      "vi": "Tôi đã suýt ngã ở cầu thang."
    }
  },
  "9-11": {
    "sentence": {
      "full": "家族に会いたくてたまらない。",
      "hira": "かぞくにあいたくてたまらない。",
      "questionHira": "かぞくにあいたく＿＿。",
      "vi": "Tôi nhớ gia đình đến không chịu nổi."
    },
    "connection": {
      "question": "試験の結果が心配［　］たまらない。",
      "full": "試験の結果が心配でたまらない。",
      "hira": "しけんのけっかがしんぱいでたまらない。",
      "questionHira": "しけんのけっかがしんぱい［　］たまらない。",
      "vi": "Tôi lo lắng về kết quả thi đến không chịu nổi."
    }
  },
  "9-12": {
    "sentence": {
      "full": "野菜が嫌いなわけではないが、毎日は食べない。",
      "hira": "やさいがきらいなわけではないが、まいにちはたべない。",
      "questionHira": "やさいがきらいな＿＿が、まいにちはたべない。",
      "vi": "Không phải tôi ghét rau, nhưng tôi không ăn hằng ngày."
    },
    "connection": {
      "question": "彼はまだ学生［　］わけではない。",
      "full": "彼はまだ学生なわけではない。",
      "hira": "かれはまだがくせいなわけではない。",
      "questionHira": "かれはまだがくせい［　］わけではない。",
      "vi": "Không hẳn cậu ấy vẫn còn là sinh viên."
    },
    "extraConnection": {
      "question": "野菜が嫌い［　］わけではないが、毎日は食べない。",
      "full": "野菜が嫌いなわけではないが、毎日は食べない。",
      "hira": "やさいがきらいなわけではないが、まいにちはたべない。",
      "questionHira": "やさいがきらい［　］わけではないが、まいにちはたべない。",
      "vi": "Không phải tôi ghét rau, nhưng tôi không ăn hằng ngày."
    }
  },
  "9-13": {
    "sentence": {
      "full": "メールを一通読む時間くらいはあるでしょう。",
      "hira": "めーるをいっつうよむじかんくらいはあるでしょう。",
      "questionHira": "めーるをいっつうよむじかん＿＿あるでしょう。",
      "vi": "Chắc vẫn có thời gian đọc một email chứ."
    },
    "connection": {
      "question": "時間があるなら、メール［　］くらい読もう。",
      "full": "時間があるなら、メールくらい読もう。",
      "hira": "じかんがあるなら、めーるくらいよもう。",
      "questionHira": "じかんがあるなら、めーる［　］くらいよもう。",
      "vi": "Nếu có thời gian thì ít nhất hãy đọc một email."
    }
  },
  "10-0": {
    "sentence": {
      "full": "山の上から見た景色の美しさといったら、忘れられない。",
      "hira": "やまのうえからみたけしきのうつくしさといったら、わすれられない。",
      "questionHira": "やまのうえからみたけしきのうつくしさ＿＿、わすれられない。",
      "vi": "Cảnh đẹp nhìn từ trên núi thật khó quên."
    },
    "connection": {
      "question": "山の上から見た景色の美しさ［　］いったら、忘れられない。",
      "full": "山の上から見た景色の美しさといったら、忘れられない。",
      "hira": "やまのうえからみたけしきのうつくしさといったら、わすれられない。",
      "questionHira": "やまのうえからみたけしきのうつくしさ［　］いったら、わすれられない。",
      "vi": "Cảnh đẹp nhìn từ trên núi thật khó quên."
    }
  },
  "10-1": {
    "sentence": {
      "full": "この本は厚すぎて、一日ではとても読めない。",
      "hira": "このほんはあつすぎて、いちにちではとてもよめない。",
      "questionHira": "このほんはあつすぎて、いちにちでは＿＿。",
      "vi": "Cuốn sách này dày quá, tôi không thể nào đọc hết trong một ngày."
    },
    "connection": {
      "question": "この本は厚すぎて、一日ではとても読め［　］。",
      "full": "この本は厚すぎて、一日ではとても読めない。",
      "hira": "このほんはあつすぎて、いちにちではとてもよめない。",
      "questionHira": "このほんはあつすぎて、いちにちではとてもよめ［　］。",
      "vi": "Cuốn sách này dày quá, tôi không thể nào đọc hết trong một ngày."
    }
  },
  "10-2": {
    "sentence": {
      "full": "この公園は子どもはもちろん、大人も楽しめる。",
      "hira": "このこうえんはこどもはもちろん、おとなもたのしめる。",
      "questionHira": "このこうえんはこども＿＿、おとなもたのしめる。",
      "vi": "Công viên này không chỉ trẻ em mà cả người lớn cũng có thể vui chơi."
    },
    "connection": {
      "question": "この公園は子ども［　］もちろん、大人も楽しめる。",
      "full": "この公園は子どもはもちろん、大人も楽しめる。",
      "hira": "このこうえんはこどもはもちろん、おとなもたのしめる。",
      "questionHira": "このこうえんはこども［　］もちろん、おとなもたのしめる。",
      "vi": "Công viên này không chỉ trẻ em mà cả người lớn cũng có thể vui chơi."
    }
  },
  "10-3": {
    "sentence": {
      "full": "それでは、私がご案内させていただきます。",
      "hira": "それでは、わたしがごあんないさせていただきます。",
      "questionHira": "それでは、わたしがごあんない＿＿。",
      "vi": "Vậy thì xin cho phép tôi hướng dẫn quý vị."
    },
    "connection": {
      "question": "それでは、私がご案内［　］いただきます。",
      "full": "それでは、私がご案内させていただきます。",
      "hira": "それでは、わたしがごあんないさせていただきます。",
      "questionHira": "それでは、わたしがごあんない［　］いただきます。",
      "vi": "Vậy thì xin cho phép tôi hướng dẫn quý vị."
    }
  },
  "10-4": {
    "sentence": {
      "full": "後ほど、こちらからご連絡いたします。",
      "hira": "のちほど、こちらからごれんらくいたします。",
      "questionHira": "のちほど、こちらからごれんらく＿＿。",
      "vi": "Lát nữa chúng tôi sẽ liên lạc lại với quý vị."
    },
    "connection": {
      "question": "後ほど、こちらから［　］連絡いたします。",
      "full": "後ほど、こちらからご連絡いたします。",
      "hira": "のちほど、こちらからごれんらくいたします。",
      "questionHira": "のちほど、こちらから［　］れんらくいたします。",
      "vi": "Lát nữa chúng tôi sẽ liên lạc lại với quý vị."
    }
  },
  "10-5": {
    "sentence": {
      "full": "かばんに入れたつもりだったが、財布が見つからない。",
      "hira": "かばんにいれたつもりだったが、さいふがみつからない。",
      "questionHira": "かばんにいれた＿＿、さいふがみつからない。",
      "vi": "Tôi cứ tưởng đã bỏ ví vào túi, nhưng không tìm thấy ví đâu."
    },
    "connection": {
      "question": "まだ元気［　］つもりだったが、すぐ疲れてしまった。",
      "full": "まだ元気なつもりだったが、すぐ疲れてしまった。",
      "hira": "まだげんきなつもりだったが、すぐつかれてしまった。",
      "questionHira": "まだげんき［　］つもりだったが、すぐつかれてしまった。",
      "vi": "Tôi cứ tưởng mình vẫn khỏe, nhưng lại mệt ngay."
    },
    "extraConnection": {
      "question": "社会人になっても、学生［　］つもりでいた。",
      "full": "社会人になっても、学生のつもりでいた。",
      "hira": "しゃかいじんになっても、がくせいのつもりでいた。",
      "questionHira": "しゃかいじんになっても、がくせい［　］つもりでいた。",
      "vi": "Dù đã đi làm, tôi vẫn nghĩ mình là sinh viên."
    }
  },
  "10-6": {
    "sentence": {
      "full": "この数字は少し違うように思います。",
      "hira": "このすうじはすこしちがうようにおもいます。",
      "questionHira": "このすうじはすこしちがう＿＿。",
      "vi": "Tôi nghĩ con số này có vẻ hơi sai."
    },
    "connection": {
      "question": "彼が来た［　］思います。",
      "full": "彼が来たように思います。",
      "hira": "かれがきたようにおもいます。",
      "questionHira": "かれがきた［　］おもいます。",
      "vi": "Tôi có cảm giác là anh ấy đã đến."
    }
  },
  "10-7": {
    "sentence": {
      "full": "ただいま列車は運転を見合わせております。",
      "hira": "ただいまれっしゃはうんてんをみあわせております。",
      "questionHira": "ただいまれっしゃはうんてんをみあわせ＿＿。",
      "vi": "Hiện tại đoàn tàu đang tạm ngừng vận hành."
    },
    "connection": {
      "question": "ただいま列車は運転を見合わせ［　］おります。",
      "full": "ただいま列車は運転を見合わせております。",
      "hira": "ただいまれっしゃはうんてんをみあわせております。",
      "questionHira": "ただいまれっしゃはうんてんをみあわせ［　］おります。",
      "vi": "Hiện tại đoàn tàu đang tạm ngừng vận hành."
    }
  },
  "10-8": {
    "sentence": {
      "full": "申し訳ありませんが、変更はいたしかねます。",
      "hira": "もうしわけありませんが、へんこうはいたしかねます。",
      "questionHira": "もうしわけありませんが、へんこうはいたし＿＿。",
      "vi": "Rất xin lỗi, nhưng chúng tôi không thể thay đổi được."
    },
    "connection": {
      "question": "申し訳ありませんが、変更はいたし［　］。",
      "full": "申し訳ありませんが、変更はいたしかねます。",
      "hira": "もうしわけありませんが、へんこうはいたしかねます。",
      "questionHira": "もうしわけありませんが、へんこうはいたし［　］。",
      "vi": "Rất xin lỗi, nhưng chúng tôi không thể thay đổi được."
    }
  },
  "10-9": {
    "sentence": {
      "full": "驚いたことに、昔の友達に駅で会った。",
      "hira": "おどろいたことに、むかしのともだちにえきであった。",
      "questionHira": "おどろいた＿＿、むかしのともだちにえきであった。",
      "vi": "Thật ngạc nhiên là tôi đã gặp một người bạn cũ ở nhà ga."
    },
    "connection": {
      "question": "残念［　］ことに、試合は中止になった。",
      "full": "残念なことに、試合は中止になった。",
      "hira": "ざんねんなことに、しあいはちゅうしになった。",
      "questionHira": "ざんねん［　］ことに、しあいはちゅうしになった。",
      "vi": "Thật tiếc là trận đấu đã bị hủy."
    }
  },
  "10-10": {
    "sentence": {
      "full": "彼は日本に十年住んでいただけあって、日本語が上手だ。",
      "hira": "かれはにほんにじゅうねんすんでいただけあって、にほんごがじょうずだ。",
      "questionHira": "かれはにほんにじゅうねんすんでいた＿＿、にほんごがじょうずだ。",
      "vi": "Đúng là anh ấy đã sống ở Nhật mười năm, tiếng Nhật của anh ấy rất giỏi."
    },
    "connection": {
      "question": "有名［　］だけあって、この店はいつも混んでいる。",
      "full": "有名なだけあって、この店はいつも混んでいる。",
      "hira": "ゆうめいなだけあって、このみせはいつもこんでいる。",
      "questionHira": "ゆうめい［　］だけあって、このみせはいつもこんでいる。",
      "vi": "Đúng là nổi tiếng, quán này lúc nào cũng đông."
    },
    "extraConnection": {
      "question": "プロ［　］だけあって、彼の演奏はすばらしい。",
      "full": "プロだけあって、彼の演奏はすばらしい。",
      "hira": "ぷろだけあって、かれのえんそうはすばらしい。",
      "questionHira": "ぷろ［　］だけあって、かれのえんそうはすばらしい。",
      "vi": "Đúng là dân chuyên nghiệp, màn trình diễn của anh ấy thật xuất sắc."
    }
  },
  "10-11": {
    "sentence": {
      "full": "スーパーへ行くついでに、牛乳を買ってきて。",
      "hira": "すーぱーへいくついでに、ぎゅうにゅうをかってきて。",
      "questionHira": "すーぱーへいく＿＿、ぎゅうにゅうをかってきて。",
      "vi": "Tiện thể đi siêu thị, mua giúp tôi ít sữa nhé."
    },
    "connection": {
      "question": "買い物［　］ついでに、牛乳を買ってきて。",
      "full": "買い物のついでに、牛乳を買ってきて。",
      "hira": "かいもののついでに、ぎゅうにゅうをかってきて。",
      "questionHira": "かいもの［　］ついでに、ぎゅうにゅうをかってきて。",
      "vi": "Tiện thể đi mua sắm, mua giúp tôi ít sữa nhé."
    }
  }
};

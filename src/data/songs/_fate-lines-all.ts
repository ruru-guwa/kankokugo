import type { LyricLine, Token } from "../../types/song";

type TokenSeed = Omit<Token, "id">;
type LineTemplate = {
  japanese: string;
  literalJapanese: string;
  sentenceExplanation: string;
  tokens: TokenSeed[];
};

const lineTemplates: Record<string, LineTemplate> = {
  "오늘도 아침엔 입에 빵을 물고": {
    "japanese": "今日も朝、パンを口にくわえて。",
    "literalJapanese": "今日も朝には口にパンをくわえて。",
    "sentenceExplanation": "漫画やドラマでよくある「朝、急いでパンをくわえて出かける」ような日常描写。 特別な日ではなく、いつも通りの始まり。",
    "tokens": [
      {
        "surface": "오늘도",
        "base": "오늘도",
        "language": "ko",
        "shortMeaning": "-도 = 〜も",
        "meaning": "今日も / 오늘 = 今日 / -도 = 〜も",
        "explanation": "오늘 = 今日 -도 = 〜も"
      },
      {
        "surface": "아침엔",
        "base": "아침엔",
        "language": "ko",
        "shortMeaning": "〜には",
        "meaning": "朝には / 아침 = 朝 / -엔 = -에는 の縮約 / 〜には",
        "explanation": "아침 = 朝 -엔 = -에는 の縮約 〜には"
      },
      {
        "surface": "입",
        "base": "입",
        "language": "ko",
        "shortMeaning": "口",
        "meaning": "口"
      },
      {
        "surface": "-에",
        "base": "-에",
        "language": "ko",
        "shortMeaning": "〜に",
        "meaning": "〜に"
      },
      {
        "surface": "빵",
        "base": "빵",
        "language": "ko",
        "shortMeaning": "パン",
        "meaning": "パン"
      },
      {
        "surface": "-을",
        "base": "-을",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "물다",
        "base": "물다",
        "language": "ko",
        "shortMeaning": "くわえる、噛む",
        "meaning": "くわえる、噛む"
      },
      {
        "surface": "물고",
        "base": "물고",
        "language": "ko",
        "shortMeaning": "くわえて",
        "meaning": "くわえて"
      }
    ]
  },
  "똑같이 하루를 시작하고": {
    "japanese": "いつもと同じように一日を始める。",
    "literalJapanese": "同じように一日を始めて。",
    "sentenceExplanation": "退屈で繰り返しの毎日。 ここで「いつも通り」が強調されているから、その後の「あの子」との出会いがより異常に感じられる。",
    "tokens": [
      {
        "surface": "똑같이",
        "base": "똑같이",
        "language": "ko",
        "shortMeaning": "똑같다 = 同じだ",
        "meaning": "同じように、まったく同じに / 똑같다 = 同じだ",
        "explanation": "똑같다 = 同じだ"
      },
      {
        "surface": "하루",
        "base": "하루",
        "language": "ko",
        "shortMeaning": "一日",
        "meaning": "一日"
      },
      {
        "surface": "-를",
        "base": "-를",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "시작하다",
        "base": "시작하다",
        "language": "ko",
        "shortMeaning": "始める",
        "meaning": "始める"
      },
      {
        "surface": "시작하고",
        "base": "시작하고",
        "language": "ko",
        "shortMeaning": "始めて",
        "meaning": "始めて"
      }
    ]
  },
  "온종일 한 손엔 아이스 아메리카노": {
    "japanese": "一日中、片手にはアイスアメリカーノ。",
    "literalJapanese": "一日中、片手にはアイスアメリカーノ。",
    "sentenceExplanation": "忙しい現代人っぽい日常。 韓国ではアイスアメリカーノはかなり定番で、疲れた日常・カフェイン頼みの生活の象徴としても使われやすい。",
    "tokens": [
      {
        "surface": "온종일",
        "base": "온종일",
        "language": "ko",
        "shortMeaning": "종일 = 終日、一日中",
        "meaning": "一日中 / 온 = 全〜 / 종일 = 終日、一日中",
        "explanation": "온 = 全〜 종일 = 終日、一日中"
      },
      {
        "surface": "한 손엔",
        "base": "한 손엔",
        "language": "ko",
        "shortMeaning": "-엔 = -에는",
        "meaning": "片手には / 한 = 一つの / 손 = 手 / -엔 = -에는",
        "explanation": "한 = 一つの 손 = 手 -엔 = -에는"
      },
      {
        "surface": "아이스 아메리카노",
        "base": "아이스 아메리카노",
        "language": "ko",
        "shortMeaning": "アイスアメリカーノ",
        "meaning": "アイスアメリカーノ"
      }
    ]
  },
  "피곤해 죽겠네": {
    "japanese": "疲れすぎてしんどい。",
    "literalJapanese": "疲れて死にそうだね。",
    "sentenceExplanation": "韓国語では「〜아/어 죽겠다」で「〜すぎてたまらない」という強調表現になる。 例： 배고파 죽겠어 = お腹が空きすぎて死にそう 피곤해 죽겠네 = 疲れすぎて死にそう",
    "tokens": [
      {
        "surface": "피곤하다",
        "base": "피곤하다",
        "language": "ko",
        "shortMeaning": "疲れている",
        "meaning": "疲れている"
      },
      {
        "surface": "피곤해",
        "base": "피곤해",
        "language": "ko",
        "shortMeaning": "疲れている",
        "meaning": "疲れている"
      },
      {
        "surface": "죽겠다",
        "base": "죽겠다",
        "language": "ko",
        "shortMeaning": "死にそうだ",
        "meaning": "死にそうだ"
      },
      {
        "surface": "-네",
        "base": "-네",
        "language": "ko",
        "shortMeaning": "〜だね、〜だな",
        "meaning": "〜だね、〜だな"
      }
    ]
  },
  "지하철 속 이 장면 어제 꿈에서 봤나": {
    "japanese": "地下鉄のこの景色、昨日の夢で見た気がする。",
    "literalJapanese": "地下鉄の中のこの場面、昨日夢で見たのかな。",
    "sentenceExplanation": "デジャヴの始まり。 ただし、すぐ後に「毎日のことだった」と気づくので、日常が夢のように繰り返されている感じもある。",
    "tokens": [
      {
        "surface": "지하철",
        "base": "지하철",
        "language": "ko",
        "shortMeaning": "地下鉄",
        "meaning": "地下鉄"
      },
      {
        "surface": "속",
        "base": "속",
        "language": "ko",
        "shortMeaning": "中",
        "meaning": "中"
      },
      {
        "surface": "지하철 속",
        "base": "지하철 속",
        "language": "ko",
        "shortMeaning": "地下鉄の中",
        "meaning": "地下鉄の中"
      },
      {
        "surface": "이",
        "base": "이",
        "language": "ko",
        "shortMeaning": "この",
        "meaning": "この"
      },
      {
        "surface": "장면",
        "base": "장면",
        "language": "ko",
        "shortMeaning": "場面、シーン",
        "meaning": "場面、シーン"
      },
      {
        "surface": "어제",
        "base": "어제",
        "language": "ko",
        "shortMeaning": "昨日",
        "meaning": "昨日"
      },
      {
        "surface": "꿈",
        "base": "꿈",
        "language": "ko",
        "shortMeaning": "夢",
        "meaning": "夢"
      },
      {
        "surface": "-에서",
        "base": "-에서",
        "language": "ko",
        "shortMeaning": "〜で",
        "meaning": "〜で"
      },
      {
        "surface": "보다",
        "base": "보다",
        "language": "ko",
        "shortMeaning": "見る",
        "meaning": "見る"
      },
      {
        "surface": "봤나",
        "base": "봤나",
        "language": "ko",
        "shortMeaning": "見たのかな",
        "meaning": "見たのかな"
      }
    ]
  },
  "아참 매일이지 지나치고": {
    "japanese": "あ、違う。毎日のことだった。ただ通り過ぎていく。",
    "literalJapanese": "あ、そうだ、毎日だ。通り過ぎて。",
    "sentenceExplanation": "「夢で見たのかな」と思ったけれど、ただ毎日同じことを繰り返しているだけ。 日常の単調さが出ている。",
    "tokens": [
      {
        "surface": "아참",
        "base": "아참",
        "language": "ko",
        "shortMeaning": "思い出した時に使う表現。",
        "meaning": "あ、そうだ、あ、そういえば / 思い出した時に使う表現。",
        "explanation": "思い出した時に使う表現。"
      },
      {
        "surface": "매일",
        "base": "매일",
        "language": "ko",
        "shortMeaning": "毎日",
        "meaning": "毎日"
      },
      {
        "surface": "-이지",
        "base": "-이지",
        "language": "ko",
        "shortMeaning": "〜だよね、〜だった",
        "meaning": "〜だよね、〜だった"
      },
      {
        "surface": "지나치다",
        "base": "지나치다",
        "language": "ko",
        "shortMeaning": "通り過ぎる、見過ごす",
        "meaning": "通り過ぎる、見過ごす"
      },
      {
        "surface": "지나치고",
        "base": "지나치고",
        "language": "ko",
        "shortMeaning": "通り過ぎて",
        "meaning": "通り過ぎて"
      }
    ]
  },
  "바쁜 이 삶에 그냥 흔한 날에": {
    "japanese": "忙しい日々の中の、何でもない普通の日に。",
    "literalJapanese": "忙しいこの人生に、ただありふれた日に。",
    "sentenceExplanation": "特別な出来事が起こるはずのない日。 だからこそ、「그 애를 보고」から空気が一気に変わる。",
    "tokens": [
      {
        "surface": "바쁘다",
        "base": "바쁘다",
        "language": "ko",
        "shortMeaning": "忙しい",
        "meaning": "忙しい"
      },
      {
        "surface": "바쁜",
        "base": "바쁜",
        "language": "ko",
        "shortMeaning": "忙しい〜",
        "meaning": "忙しい〜"
      },
      {
        "surface": "이",
        "base": "이",
        "language": "ko",
        "shortMeaning": "この",
        "meaning": "この"
      },
      {
        "surface": "삶",
        "base": "삶",
        "language": "ko",
        "shortMeaning": "人生、生活",
        "meaning": "人生、生活"
      },
      {
        "surface": "-에",
        "base": "-에",
        "language": "ko",
        "shortMeaning": "〜に、〜で",
        "meaning": "〜に、〜で"
      },
      {
        "surface": "그냥",
        "base": "그냥",
        "language": "ko",
        "shortMeaning": "ただ、なんとなく、普通に",
        "meaning": "ただ、なんとなく、普通に"
      },
      {
        "surface": "흔하다",
        "base": "흔하다",
        "language": "ko",
        "shortMeaning": "ありふれている、よくある",
        "meaning": "ありふれている、よくある"
      },
      {
        "surface": "흔한",
        "base": "흔한",
        "language": "ko",
        "shortMeaning": "ありふれた〜",
        "meaning": "ありふれた〜"
      },
      {
        "surface": "날",
        "base": "날",
        "language": "ko",
        "shortMeaning": "日",
        "meaning": "日"
      }
    ]
  },
  "그 애를 보고 말야": {
    "japanese": "あの子を見てしまったんだ。",
    "literalJapanese": "その子を見たんだよ。",
    "sentenceExplanation": "「그 애」は名前ではなく「あの子」。 距離がある言い方だが、語り手にとって強く印象に残った存在。 “보고 말야” は、話し相手に打ち明けるような口調。",
    "tokens": [
      {
        "surface": "그",
        "base": "그",
        "language": "ko",
        "shortMeaning": "その、あの",
        "meaning": "その、あの"
      },
      {
        "surface": "애",
        "base": "애",
        "language": "ko",
        "shortMeaning": "あの子、その子",
        "meaning": "子 / 그 애 / あの子、その子",
        "explanation": "그 애 あの子、その子"
      },
      {
        "surface": "-를",
        "base": "-를",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "보다",
        "base": "보다",
        "language": "ko",
        "shortMeaning": "見る、会う",
        "meaning": "見る、会う"
      },
      {
        "surface": "보고",
        "base": "보고",
        "language": "ko",
        "shortMeaning": "見て",
        "meaning": "見て"
      },
      {
        "surface": "말야",
        "base": "말야",
        "language": "ko",
        "shortMeaning": "〜なんだよ、〜ってこと",
        "meaning": "말이야 の縮約 / 〜なんだよ、〜ってこと",
        "explanation": "〜なんだよ、〜ってこと"
      }
    ]
  },
  "평온했던 하늘이 무너지고": {
    "japanese": "穏やかだった空が崩れ落ちて。",
    "literalJapanese": "穏やかだった空が崩れて。",
    "sentenceExplanation": "日常の安定が一瞬で壊れる表現。 あの子を見たことで、自分の世界そのものが崩れるような衝撃を受けている。",
    "tokens": [
      {
        "surface": "평온하다",
        "base": "평온하다",
        "language": "ko",
        "shortMeaning": "平穏だ、穏やかだ",
        "meaning": "平穏だ、穏やかだ"
      },
      {
        "surface": "평온했던",
        "base": "평온했던",
        "language": "ko",
        "shortMeaning": "-했던 は過去にそうだった状態。",
        "meaning": "穏やかだった〜 / -했던 は過去にそうだった状態。",
        "explanation": "-했던 は過去にそうだった状態。"
      },
      {
        "surface": "하늘",
        "base": "하늘",
        "language": "ko",
        "shortMeaning": "空",
        "meaning": "空"
      },
      {
        "surface": "-이",
        "base": "-이",
        "language": "ko",
        "shortMeaning": "〜が",
        "meaning": "〜が"
      },
      {
        "surface": "무너지다",
        "base": "무너지다",
        "language": "ko",
        "shortMeaning": "崩れる、崩れ落ちる",
        "meaning": "崩れる、崩れ落ちる"
      },
      {
        "surface": "무너지고",
        "base": "무너지고",
        "language": "ko",
        "shortMeaning": "崩れて",
        "meaning": "崩れて"
      }
    ]
  },
  "어둡던 눈앞이 붉어지며": {
    "japanese": "暗かった視界が赤く染まっていく。",
    "literalJapanese": "暗かった目の前が赤くなりながら。",
    "sentenceExplanation": "感情が急に高ぶる感じ。 赤は恋・混乱・痛み・危険の色として読める。 「平穏な空が崩れる」とセットで、心の異常事態を表している。",
    "tokens": [
      {
        "surface": "어둡다",
        "base": "어둡다",
        "language": "ko",
        "shortMeaning": "暗い",
        "meaning": "暗い"
      },
      {
        "surface": "어둡던",
        "base": "어둡던",
        "language": "ko",
        "shortMeaning": "暗かった〜",
        "meaning": "暗かった〜"
      },
      {
        "surface": "눈앞",
        "base": "눈앞",
        "language": "ko",
        "shortMeaning": "앞 = 前",
        "meaning": "目の前、視界 / 눈 = 目 / 앞 = 前",
        "explanation": "눈 = 目 앞 = 前"
      },
      {
        "surface": "-이",
        "base": "-이",
        "language": "ko",
        "shortMeaning": "〜が",
        "meaning": "〜が"
      },
      {
        "surface": "붉다",
        "base": "붉다",
        "language": "ko",
        "shortMeaning": "赤い",
        "meaning": "赤い"
      },
      {
        "surface": "붉어지다",
        "base": "붉어지다",
        "language": "ko",
        "shortMeaning": "赤くなる",
        "meaning": "赤くなる"
      },
      {
        "surface": "붉어지며",
        "base": "붉어지며",
        "language": "ko",
        "shortMeaning": "-며 = 〜しながら、〜して",
        "meaning": "赤くなりながら、赤くなって / -며 = 〜しながら、〜して",
        "explanation": "-며 = 〜しながら、〜して"
      }
    ]
  },
  "뭔가 잊고 온 게 있는 것 같아": {
    "japanese": "何か大切なものを置いてきた気がする。",
    "literalJapanese": "何か忘れて来たものがあるようだ。",
    "sentenceExplanation": "ただの忘れ物ではなく、記憶・約束・前世・別世界の何かを忘れてきたような感覚。 この曲の「運命的な既視感」の中心。",
    "tokens": [
      {
        "surface": "뭔가",
        "base": "뭔가",
        "language": "ko",
        "shortMeaning": "무언가 の縮約。",
        "meaning": "何か / 무언가 の縮約。",
        "explanation": "무언가 の縮約。"
      },
      {
        "surface": "잊다",
        "base": "잊다",
        "language": "ko",
        "shortMeaning": "忘れる",
        "meaning": "忘れる"
      },
      {
        "surface": "잊고 오다",
        "base": "잊고 오다",
        "language": "ko",
        "shortMeaning": "忘れて来る、置いてくる",
        "meaning": "忘れて来る、置いてくる"
      },
      {
        "surface": "잊고 온",
        "base": "잊고 온",
        "language": "ko",
        "shortMeaning": "忘れて来た〜",
        "meaning": "忘れて来た〜"
      },
      {
        "surface": "게",
        "base": "게",
        "language": "ko",
        "shortMeaning": "ものが、ことが",
        "meaning": "것이 の縮約 / ものが、ことが",
        "explanation": "ものが、ことが"
      },
      {
        "surface": "있다",
        "base": "있다",
        "language": "ko",
        "shortMeaning": "ある",
        "meaning": "ある"
      },
      {
        "surface": "있는 것 같다",
        "base": "있는 것 같다",
        "language": "ko",
        "shortMeaning": "あるようだ、ある気がする",
        "meaning": "あるようだ、ある気がする"
      }
    ]
  },
  "괜히 이상하게 막 울 것만 같고": {
    "japanese": "なぜかおかしくて、今にも泣きそうになる。",
    "literalJapanese": "わけもなく変に、今にも泣きそうで。",
    "sentenceExplanation": "理由は分からないのに涙が出そう。 恋というより、もっと深い記憶や喪失感に触れている感じ。",
    "tokens": [
      {
        "surface": "괜히",
        "base": "괜히",
        "language": "ko",
        "shortMeaning": "わけもなく、無駄に、なんとなく",
        "meaning": "わけもなく、無駄に、なんとなく"
      },
      {
        "surface": "이상하다",
        "base": "이상하다",
        "language": "ko",
        "shortMeaning": "変だ、おかしい",
        "meaning": "変だ、おかしい"
      },
      {
        "surface": "이상하게",
        "base": "이상하게",
        "language": "ko",
        "shortMeaning": "変に、不思議に",
        "meaning": "変に、不思議に"
      },
      {
        "surface": "막",
        "base": "막",
        "language": "ko",
        "shortMeaning": "会話で感情を強める言葉。",
        "meaning": "やたら、今にも、なんか / 会話で感情を強める言葉。",
        "explanation": "会話で感情を強める言葉。"
      },
      {
        "surface": "울다",
        "base": "울다",
        "language": "ko",
        "shortMeaning": "泣く",
        "meaning": "泣く"
      },
      {
        "surface": "울 것 같다",
        "base": "울 것 같다",
        "language": "ko",
        "shortMeaning": "泣きそうだ",
        "meaning": "泣きそうだ"
      },
      {
        "surface": "울 것만 같다",
        "base": "울 것만 같다",
        "language": "ko",
        "shortMeaning": "今にも泣きそうだ、泣きそうな気ばかりする",
        "meaning": "今にも泣きそうだ、泣きそうな気ばかりする"
      }
    ]
  },
  "그냥 지나치는 게 나을 것 같아": {
    "japanese": "何もせず、通り過ぎた方がいい気がする。",
    "literalJapanese": "ただ通り過ぎるのがよさそうだ。",
    "sentenceExplanation": "気になるけれど、近づいたら何かが壊れそう。 だから「見なかったことにしたい」という防衛反応。",
    "tokens": [
      {
        "surface": "그냥",
        "base": "그냥",
        "language": "ko",
        "shortMeaning": "ただ、そのまま",
        "meaning": "ただ、そのまま"
      },
      {
        "surface": "지나치다",
        "base": "지나치다",
        "language": "ko",
        "shortMeaning": "通り過ぎる、見過ごす",
        "meaning": "通り過ぎる、見過ごす"
      },
      {
        "surface": "지나치는 게",
        "base": "지나치는 게",
        "language": "ko",
        "shortMeaning": "通り過ぎることが",
        "meaning": "通り過ぎることが"
      },
      {
        "surface": "낫다",
        "base": "낫다",
        "language": "ko",
        "shortMeaning": "より良い、ましだ",
        "meaning": "より良い、ましだ"
      },
      {
        "surface": "나을 것 같다",
        "base": "나을 것 같다",
        "language": "ko",
        "shortMeaning": "よさそうだ、ましな気がする",
        "meaning": "よさそうだ、ましな気がする"
      }
    ]
  },
  "나는 생각은 딱 질색이니까": {
    "japanese": "私は考え込むのだけは本当に苦手だから。",
    "literalJapanese": "私は考えることは本当に嫌いだから。",
    "sentenceExplanation": "表面上は「考えたくない」と言っている。 でも最後の「아픈 건 딱 질색」によって、本当は考えるのが嫌なのではなく、考えた先で傷つくのが怖いと分かる。",
    "tokens": [
      {
        "surface": "나는",
        "base": "나는",
        "language": "ko",
        "shortMeaning": "私は",
        "meaning": "私は"
      },
      {
        "surface": "생각",
        "base": "생각",
        "language": "ko",
        "shortMeaning": "考え、思考",
        "meaning": "考え、思考"
      },
      {
        "surface": "-은",
        "base": "-은",
        "language": "ko",
        "shortMeaning": "〜は",
        "meaning": "〜は"
      },
      {
        "surface": "딱",
        "base": "딱",
        "language": "ko",
        "shortMeaning": "強調。",
        "meaning": "きっぱり、まさに、本当に / 強調。",
        "explanation": "強調。"
      },
      {
        "surface": "질색",
        "base": "질색",
        "language": "ko",
        "shortMeaning": "大嫌い、うんざり、苦手",
        "meaning": "大嫌い、うんざり、苦手"
      },
      {
        "surface": "질색이다",
        "base": "질색이다",
        "language": "ko",
        "shortMeaning": "大嫌いだ、絶対に嫌だ",
        "meaning": "大嫌いだ、絶対に嫌だ"
      },
      {
        "surface": "-니까",
        "base": "-니까",
        "language": "ko",
        "shortMeaning": "〜だから",
        "meaning": "〜だから"
      }
    ]
  },
  "카페인으로 잡은 정신은 빠졌고": {
    "japanese": "カフェインで保っていた意識も抜けてしまって。",
    "literalJapanese": "カフェインでつかまえていた正気は抜けて。",
    "sentenceExplanation": "忙しい日常をカフェインでなんとか乗り切っていたが、あの子のせいで完全に集中力が切れた。 「心ここにあらず」の状態。",
    "tokens": [
      {
        "surface": "카페인",
        "base": "카페인",
        "language": "ko",
        "shortMeaning": "カフェイン",
        "meaning": "カフェイン"
      },
      {
        "surface": "-으로",
        "base": "-으로",
        "language": "ko",
        "shortMeaning": "〜で、〜によって",
        "meaning": "〜で、〜によって"
      },
      {
        "surface": "잡다",
        "base": "잡다",
        "language": "ko",
        "shortMeaning": "つかむ、保つ",
        "meaning": "つかむ、保つ"
      },
      {
        "surface": "잡은",
        "base": "잡은",
        "language": "ko",
        "shortMeaning": "つかんだ〜、保った〜",
        "meaning": "つかんだ〜、保った〜"
      },
      {
        "surface": "정신",
        "base": "정신",
        "language": "ko",
        "shortMeaning": "精神、意識、気力",
        "meaning": "精神、意識、気力"
      },
      {
        "surface": "빠지다",
        "base": "빠지다",
        "language": "ko",
        "shortMeaning": "抜ける、落ちる",
        "meaning": "抜ける、落ちる"
      },
      {
        "surface": "빠졌고",
        "base": "빠졌고",
        "language": "ko",
        "shortMeaning": "抜けて",
        "meaning": "抜けて"
      }
    ]
  },
  "하루 종일 신경 쓰여 토할 것 같아": {
    "japanese": "一日中気になって、吐きそうになる。",
    "literalJapanese": "一日中気になって、吐きそうだ。",
    "sentenceExplanation": "気になる程度を超えて、身体反応が出ている。 恋のときめきというより、不安・既視感・違和感が混ざって気持ち悪くなる感じ。",
    "tokens": [
      {
        "surface": "하루 종일",
        "base": "하루 종일",
        "language": "ko",
        "shortMeaning": "一日中",
        "meaning": "一日中"
      },
      {
        "surface": "신경",
        "base": "신경",
        "language": "ko",
        "shortMeaning": "神経、気",
        "meaning": "神経、気"
      },
      {
        "surface": "신경 쓰이다",
        "base": "신경 쓰이다",
        "language": "ko",
        "shortMeaning": "気になる、気にかかる",
        "meaning": "気になる、気にかかる"
      },
      {
        "surface": "신경 쓰여",
        "base": "신경 쓰여",
        "language": "ko",
        "shortMeaning": "気になって",
        "meaning": "気になって"
      },
      {
        "surface": "토하다",
        "base": "토하다",
        "language": "ko",
        "shortMeaning": "吐く",
        "meaning": "吐く"
      },
      {
        "surface": "토할 것 같다",
        "base": "토할 것 같다",
        "language": "ko",
        "shortMeaning": "吐きそうだ",
        "meaning": "吐きそうだ"
      }
    ]
  },
  "저녁이 돼도 배고픔까지 까먹고": {
    "japanese": "夜になっても、お腹が空いていることさえ忘れて。",
    "literalJapanese": "夕方になっても空腹まで忘れて。",
    "sentenceExplanation": "生活の基本感覚まで抜け落ちている。 それほど一日中「あの子」が頭から離れない。",
    "tokens": [
      {
        "surface": "저녁",
        "base": "저녁",
        "language": "ko",
        "shortMeaning": "夕方、夜、夕食",
        "meaning": "夕方、夜、夕食"
      },
      {
        "surface": "되다",
        "base": "되다",
        "language": "ko",
        "shortMeaning": "なる",
        "meaning": "なる"
      },
      {
        "surface": "돼도",
        "base": "돼도",
        "language": "ko",
        "shortMeaning": "なっても",
        "meaning": "なっても"
      },
      {
        "surface": "배고픔",
        "base": "배고픔",
        "language": "ko",
        "shortMeaning": "배고픔 = 空腹",
        "meaning": "空腹 / 배고프다 = お腹が空く / 배고픔 = 空腹",
        "explanation": "배고프다 = お腹が空く 배고픔 = 空腹"
      },
      {
        "surface": "-까지",
        "base": "-까지",
        "language": "ko",
        "shortMeaning": "〜まで、〜さえ",
        "meaning": "〜まで、〜さえ"
      },
      {
        "surface": "까먹다",
        "base": "까먹다",
        "language": "ko",
        "shortMeaning": "잊다 よりくだけている。",
        "meaning": "忘れる / 会話的な表現。 / 잊다 よりくだけている。",
        "explanation": "会話的な表現。 잊다 よりくだけている。"
      }
    ]
  },
  "그치 이상하지 근데 말야 있잖아": {
    "japanese": "変だよね。でもさ、聞いて。",
    "literalJapanese": "そうでしょ、変でしょ。でもね、あのね。",
    "sentenceExplanation": "友達に話しているような会話体。 自分でも変だと分かっているが、それでも説明したい感覚がある。",
    "tokens": [
      {
        "surface": "그치",
        "base": "그치",
        "language": "ko",
        "shortMeaning": "そうでしょ",
        "meaning": "そうでしょ"
      },
      {
        "surface": "이상하다",
        "base": "이상하다",
        "language": "ko",
        "shortMeaning": "変だ",
        "meaning": "変だ"
      },
      {
        "surface": "이상하지",
        "base": "이상하지",
        "language": "ko",
        "shortMeaning": "変でしょ",
        "meaning": "変でしょ"
      },
      {
        "surface": "근데",
        "base": "근데",
        "language": "ko",
        "shortMeaning": "でも、ところで",
        "meaning": "でも、ところで"
      },
      {
        "surface": "말야",
        "base": "말야",
        "language": "ko",
        "shortMeaning": "〜なんだけど",
        "meaning": "말이야 / 〜なんだけど",
        "explanation": "〜なんだけど"
      },
      {
        "surface": "있잖아",
        "base": "있잖아",
        "language": "ko",
        "shortMeaning": "あのさ、ねえ、ほら",
        "meaning": "あのさ、ねえ、ほら"
      }
    ]
  },
  "처음 본 순간 뭐라 할까 그립달까": {
    "japanese": "初めて見た瞬間、なんて言えばいいんだろう、懐かしいような。",
    "literalJapanese": "初めて見た瞬間、何と言おうか、懐かしいというか。",
    "sentenceExplanation": "この曲でかなり重要。 「初めて見た」のに「懐かしい」。 つまり、現実の記憶にはないが、心や身体が知っているような感覚。",
    "tokens": [
      {
        "surface": "처음",
        "base": "처음",
        "language": "ko",
        "shortMeaning": "初めて",
        "meaning": "初めて"
      },
      {
        "surface": "보다",
        "base": "보다",
        "language": "ko",
        "shortMeaning": "見る、会う",
        "meaning": "見る、会う"
      },
      {
        "surface": "처음 본",
        "base": "처음 본",
        "language": "ko",
        "shortMeaning": "初めて見た〜",
        "meaning": "初めて見た〜"
      },
      {
        "surface": "순간",
        "base": "순간",
        "language": "ko",
        "shortMeaning": "瞬間",
        "meaning": "瞬間"
      },
      {
        "surface": "뭐라 할까",
        "base": "뭐라 할까",
        "language": "ko",
        "shortMeaning": "-ㄹ까 = 〜かな",
        "meaning": "何と言えばいいかな / 무어라 = 何と / 하다 = 言う / -ㄹ까 = 〜かな",
        "explanation": "무어라 = 何と 하다 = 言う -ㄹ까 = 〜かな"
      },
      {
        "surface": "그립다",
        "base": "그립다",
        "language": "ko",
        "shortMeaning": "恋しい、懐かしい、会いたい",
        "meaning": "恋しい、懐かしい、会いたい"
      },
      {
        "surface": "그립달까",
        "base": "그립달까",
        "language": "ko",
        "shortMeaning": "恋しいと言おうか、懐かしいと言おうか",
        "meaning": "그립다고 할까 の縮約 / 恋しいと言おうか、懐かしいと言おうか",
        "explanation": "恋しいと言おうか、懐かしいと言おうか"
      }
    ]
  },
  "나도 웃긴데 말야": {
    "japanese": "自分でも変だと思うんだけど。",
    "literalJapanese": "私もおかしいんだけどね。",
    "sentenceExplanation": "自分で自分の感情を信じきれていない。 でも、確かに感じているから困っている。",
    "tokens": [
      {
        "surface": "나도",
        "base": "나도",
        "language": "ko",
        "shortMeaning": "私も",
        "meaning": "私も"
      },
      {
        "surface": "웃기다",
        "base": "웃기다",
        "language": "ko",
        "shortMeaning": "笑える、おかしい",
        "meaning": "笑える、おかしい"
      },
      {
        "surface": "웃긴데",
        "base": "웃긴데",
        "language": "ko",
        "shortMeaning": "おかしいけど、笑えるけど",
        "meaning": "おかしいけど、笑えるけど"
      },
      {
        "surface": "말야",
        "base": "말야",
        "language": "ko",
        "shortMeaning": "〜なんだけど",
        "meaning": "〜なんだけど"
      }
    ]
  },
  "오랫동안 나를 아는": {
    "japanese": "ずっと前から私を知っているような。",
    "literalJapanese": "長い間、私を知っている。",
    "sentenceExplanation": "初対面なのに、相手が自分を長く知っているように感じる。 「過去・未来・別次元」の伏線。",
    "tokens": [
      {
        "surface": "오랫동안",
        "base": "오랫동안",
        "language": "ko",
        "shortMeaning": "동안 = 間",
        "meaning": "長い間 / 오래 = 長く / 동안 = 間",
        "explanation": "오래 = 長く 동안 = 間"
      },
      {
        "surface": "나를",
        "base": "나를",
        "language": "ko",
        "shortMeaning": "私を",
        "meaning": "私を"
      },
      {
        "surface": "알다",
        "base": "알다",
        "language": "ko",
        "shortMeaning": "知る",
        "meaning": "知る"
      },
      {
        "surface": "아는",
        "base": "아는",
        "language": "ko",
        "shortMeaning": "知っている〜",
        "meaning": "知っている〜"
      }
    ]
  },
  "슬픈 표정을 하고 Oh": {
    "japanese": "悲しい表情をしている。",
    "literalJapanese": "悲しい表情をして。",
    "sentenceExplanation": "あの子は語り手を知っているような、しかも悲しそうな顔をしている。 二人の間に、語り手が忘れている何かがあるような不穏さ。",
    "tokens": [
      {
        "surface": "슬프다",
        "base": "슬프다",
        "language": "ko",
        "shortMeaning": "悲しい",
        "meaning": "悲しい"
      },
      {
        "surface": "슬픈",
        "base": "슬픈",
        "language": "ko",
        "shortMeaning": "悲しい〜",
        "meaning": "悲しい〜"
      },
      {
        "surface": "표정",
        "base": "표정",
        "language": "ko",
        "shortMeaning": "表情",
        "meaning": "表情"
      },
      {
        "surface": "-을 하다",
        "base": "-을 하다",
        "language": "ko",
        "shortMeaning": "〜をする",
        "meaning": "〜をする"
      },
      {
        "surface": "표정을 하다",
        "base": "표정을 하다",
        "language": "ko",
        "shortMeaning": "表情をする",
        "meaning": "表情をする"
      }
    ]
  },
  "흔적 없는 기억 밖": {
    "japanese": "跡形もない記憶の外側で。",
    "literalJapanese": "痕跡のない記憶の外。",
    "sentenceExplanation": "自分の記憶には残っていない。 でも、記憶の外側に何かがあるような感じ。 かなり幻想的な表現。",
    "tokens": [
      {
        "surface": "흔적",
        "base": "흔적",
        "language": "ko",
        "shortMeaning": "痕跡、跡",
        "meaning": "痕跡、跡"
      },
      {
        "surface": "없다",
        "base": "없다",
        "language": "ko",
        "shortMeaning": "ない",
        "meaning": "ない"
      },
      {
        "surface": "흔적 없는",
        "base": "흔적 없는",
        "language": "ko",
        "shortMeaning": "痕跡のない〜",
        "meaning": "痕跡のない〜"
      },
      {
        "surface": "기억",
        "base": "기억",
        "language": "ko",
        "shortMeaning": "記憶",
        "meaning": "記憶"
      },
      {
        "surface": "밖",
        "base": "밖",
        "language": "ko",
        "shortMeaning": "外",
        "meaning": "外"
      }
    ]
  },
  "혹 과거에 미래에 딴 차원에 세계에": {
    "japanese": "もしかして過去で、未来で、別の次元の世界で。",
    "literalJapanese": "もしかして過去に、未来に、別の次元に、世界に。",
    "sentenceExplanation": "「初めてなのに懐かしい」理由を探している。 過去生、未来、別次元、別世界など、現実を超えた可能性を思い浮かべている。",
    "tokens": [
      {
        "surface": "혹",
        "base": "혹",
        "language": "ko",
        "shortMeaning": "혹시 と近い。",
        "meaning": "もしかして、ひょっとして / 혹시 と近い。",
        "explanation": "혹시 と近い。"
      },
      {
        "surface": "과거",
        "base": "과거",
        "language": "ko",
        "shortMeaning": "過去",
        "meaning": "過去"
      },
      {
        "surface": "-에",
        "base": "-에",
        "language": "ko",
        "shortMeaning": "〜に、〜で",
        "meaning": "〜に、〜で"
      },
      {
        "surface": "미래",
        "base": "미래",
        "language": "ko",
        "shortMeaning": "未来",
        "meaning": "未来"
      },
      {
        "surface": "딴",
        "base": "딴",
        "language": "ko",
        "shortMeaning": "別の",
        "meaning": "다른 のくだけた形 / 別の",
        "explanation": "別の"
      },
      {
        "surface": "차원",
        "base": "차원",
        "language": "ko",
        "shortMeaning": "次元",
        "meaning": "次元"
      },
      {
        "surface": "세계",
        "base": "세계",
        "language": "ko",
        "shortMeaning": "世界",
        "meaning": "世界"
      }
    ]
  },
  "1 2 3 4 5 6 7 8": {
    "japanese": "1 2 3 4 5 6 7 8。",
    "literalJapanese": "1 2 3 4 5 6 7 8。",
    "sentenceExplanation": "この行では「1 2 3 4 5 6 7 8。」と伝えている。",
    "tokens": [
      {
        "surface": "1 2 3 4 5 6 7 8",
        "base": "1 2 3 4 5 6 7 8",
        "language": "en",
        "shortMeaning": "1 2 3 4 5 6 7 8",
        "meaning": "1 2 3 4 5 6 7 8。"
      }
    ]
  },
  "어둡던 눈앞이 붉어져도": {
    "japanese": "暗かった視界が赤く染まっても。",
    "literalJapanese": "暗かった目の前が赤くなっても。",
    "sentenceExplanation": "感情が急に高ぶる感じ。 赤は恋・混乱・痛み・危険の色として読める。 「平穏な空が崩れる」とセットで、心の異常事態を表している。",
    "tokens": [
      {
        "surface": "어둡다",
        "base": "어둡다",
        "language": "ko",
        "shortMeaning": "暗い",
        "meaning": "暗い"
      },
      {
        "surface": "어둡던",
        "base": "어둡던",
        "language": "ko",
        "shortMeaning": "暗かった〜",
        "meaning": "暗かった〜"
      },
      {
        "surface": "눈앞",
        "base": "눈앞",
        "language": "ko",
        "shortMeaning": "앞 = 前",
        "meaning": "目の前、視界 / 눈 = 目 / 앞 = 前",
        "explanation": "눈 = 目 앞 = 前"
      },
      {
        "surface": "-이",
        "base": "-이",
        "language": "ko",
        "shortMeaning": "〜が",
        "meaning": "〜が"
      },
      {
        "surface": "붉다",
        "base": "붉다",
        "language": "ko",
        "shortMeaning": "赤い",
        "meaning": "赤い"
      },
      {
        "surface": "붉어지다",
        "base": "붉어지다",
        "language": "ko",
        "shortMeaning": "赤くなる",
        "meaning": "赤くなる"
      },
      {
        "surface": "붉어지며",
        "base": "붉어지며",
        "language": "ko",
        "shortMeaning": "-며 = 〜しながら、〜して",
        "meaning": "赤くなりながら、赤くなって / -며 = 〜しながら、〜して",
        "explanation": "-며 = 〜しながら、〜して"
      }
    ]
  },
  "다시 놓쳐버리는 것만 같아": {
    "japanese": "また何かを失ってしまう気がする。",
    "literalJapanese": "また逃してしまうようだ。",
    "sentenceExplanation": "「また」が重要。 今回初めてのはずなのに、また失う気がする。 過去や別世界で一度失った相手を、今回も逃すような感覚。",
    "tokens": [
      {
        "surface": "다시",
        "base": "다시",
        "language": "ko",
        "shortMeaning": "また、再び",
        "meaning": "また、再び"
      },
      {
        "surface": "놓치다",
        "base": "놓치다",
        "language": "ko",
        "shortMeaning": "逃す、見失う、失う",
        "meaning": "逃す、見失う、失う"
      },
      {
        "surface": "놓쳐버리다",
        "base": "놓쳐버리다",
        "language": "ko",
        "shortMeaning": "-아/어 버리다 = 〜してしまう",
        "meaning": "逃してしまう、失ってしまう / -아/어 버리다 = 〜してしまう",
        "explanation": "-아/어 버리다 = 〜してしまう"
      },
      {
        "surface": "놓쳐버리는 것 같다",
        "base": "놓쳐버리는 것 같다",
        "language": "ko",
        "shortMeaning": "逃してしまうようだ",
        "meaning": "逃してしまうようだ"
      },
      {
        "surface": "-만 같다",
        "base": "-만 같다",
        "language": "ko",
        "shortMeaning": "〜のようにばかり感じる",
        "meaning": "〜のようにばかり感じる"
      }
    ]
  },
  "아냐 지나치는 게 나을 것 같아": {
    "japanese": "いや、やっぱり通り過ぎた方がいい。",
    "literalJapanese": "いや、通り過ぎるのがよさそうだ。",
    "sentenceExplanation": "気になる、泣きそう、失いそう。 でも最終的に「いや、通り過ぎよう」と自分に言い聞かせる。 逃げの選択。",
    "tokens": [
      {
        "surface": "아냐",
        "base": "아냐",
        "language": "ko",
        "shortMeaning": "いや、違う",
        "meaning": "아니야 の縮約 / いや、違う",
        "explanation": "いや、違う"
      },
      {
        "surface": "지나치다",
        "base": "지나치다",
        "language": "ko",
        "shortMeaning": "通り過ぎる",
        "meaning": "通り過ぎる"
      },
      {
        "surface": "지나치는 게",
        "base": "지나치는 게",
        "language": "ko",
        "shortMeaning": "通り過ぎることが",
        "meaning": "通り過ぎることが"
      },
      {
        "surface": "낫다",
        "base": "낫다",
        "language": "ko",
        "shortMeaning": "より良い、ましだ",
        "meaning": "より良い、ましだ"
      },
      {
        "surface": "나을 것 같다",
        "base": "나을 것 같다",
        "language": "ko",
        "shortMeaning": "よさそうだ",
        "meaning": "よさそうだ"
      }
    ]
  },
  "나는 아픈 건 딱 질색이니까": {
    "japanese": "私は傷つくのだけは絶対に嫌だから。",
    "literalJapanese": "私は痛いことは本当に嫌いだから。",
    "sentenceExplanation": "最後の本音。 「考えるのが嫌」なのではなく、「考えて近づいた結果、傷つくのが嫌」。 だから、気になる相手を通り過ぎようとしている。",
    "tokens": [
      {
        "surface": "나는",
        "base": "나는",
        "language": "ko",
        "shortMeaning": "私は",
        "meaning": "私は"
      },
      {
        "surface": "아프다",
        "base": "아프다",
        "language": "ko",
        "shortMeaning": "痛い、苦しい、つらい",
        "meaning": "痛い、苦しい、つらい"
      },
      {
        "surface": "아픈 것",
        "base": "아픈 것",
        "language": "ko",
        "shortMeaning": "痛いこと、つらいこと",
        "meaning": "痛いこと、つらいこと"
      },
      {
        "surface": "아픈 건",
        "base": "아픈 건",
        "language": "ko",
        "shortMeaning": "痛いことは、傷つくことは",
        "meaning": "아픈 것은 の縮約 / 痛いことは、傷つくことは",
        "explanation": "痛いことは、傷つくことは"
      },
      {
        "surface": "딱",
        "base": "딱",
        "language": "ko",
        "shortMeaning": "本当に、きっぱり、まさに",
        "meaning": "本当に、きっぱり、まさに"
      },
      {
        "surface": "질색",
        "base": "질색",
        "language": "ko",
        "shortMeaning": "大嫌い、絶対嫌",
        "meaning": "大嫌い、絶対嫌"
      },
      {
        "surface": "질색이니까",
        "base": "질색이니까",
        "language": "ko",
        "shortMeaning": "本当に嫌だから",
        "meaning": "本当に嫌だから"
      }
    ]
  }
};

const lyricsSequence: string[] = [
  "오늘도 아침엔 입에 빵을 물고",
  "똑같이 하루를 시작하고",
  "온종일 한 손엔 아이스 아메리카노",
  "피곤해 죽겠네",
  "지하철 속 이 장면 어제 꿈에서 봤나",
  "아참 매일이지 지나치고",
  "바쁜 이 삶에 그냥 흔한 날에",
  "그 애를 보고 말야",
  "평온했던 하늘이 무너지고",
  "어둡던 눈앞이 붉어지며",
  "뭔가 잊고 온 게 있는 것 같아",
  "괜히 이상하게 막 울 것만 같고",
  "그냥 지나치는 게 나을 것 같아",
  "나는 생각은 딱 질색이니까",
  "카페인으로 잡은 정신은 빠졌고",
  "하루 종일 신경 쓰여 토할 것 같아",
  "저녁이 돼도 배고픔까지 까먹고",
  "그치 이상하지 근데 말야 있잖아",
  "처음 본 순간 뭐라 할까 그립달까",
  "나도 웃긴데 말야",
  "평온했던 하늘이 무너지고",
  "어둡던 눈앞이 붉어지며",
  "뭔가 잊고 온 게 있는 것 같아",
  "괜히 이상하게 막 울 것만 같고",
  "그냥 지나치는 게 나을 것 같아",
  "나는 생각은 딱 질색이니까",
  "오랫동안 나를 아는",
  "슬픈 표정을 하고 Oh",
  "흔적 없는 기억 밖",
  "혹 과거에 미래에 딴 차원에 세계에",
  "1 2 3 4 5 6 7 8",
  "평온했던 하늘이 무너지고",
  "어둡던 눈앞이 붉어져도",
  "다시 놓쳐버리는 것만 같아",
  "괜히 이상하게 막 울 것만 같고",
  "그냥 지나치는 게 나을 것 같아",
  "나는 생각은 딱 질색이니까",
  "아냐 지나치는 게 나을 것 같아",
  "나는 아픈 건 딱 질색이니까"
];

export const completeFateLines: LyricLine[] = lyricsSequence.map((korean, index) => {
  const template = lineTemplates[korean];

  return {
    id: `idle-fate-line-${index + 1}`,
    korean,
    japanese: template.japanese,
    literalJapanese: template.literalJapanese,
    sentenceExplanation: template.sentenceExplanation,
    tokens: template.tokens.map((token, tokenIndex) => ({
      ...token,
      id: `idle-fate-line-${index + 1}-token-${tokenIndex + 1}`,
    })),
  };
});

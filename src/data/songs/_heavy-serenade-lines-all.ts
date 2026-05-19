import type { LyricLine, Token } from "../../types/song";

type TokenSeed = Omit<Token, "id">;
type LineTemplate = {
  japanese: string;
  literalJapanese: string;
  sentenceExplanation: string;
  nuance?: string;
  tokens: TokenSeed[];
};

const lineTemplates: Record<string, LineTemplate> = {
  "We're blooming, yeah we're blooming, baby": {
    "japanese": "私たちは花開いている、そう、今咲いている。",
    "literalJapanese": "私たちは咲いている、そう、私たちは咲いている、baby。",
    "sentenceExplanation": "花だけでなく、 心・恋・夢・関係が開いていくことを表している。 この曲全体の中心語。",
    "nuance": "花だけでなく、 心・恋・夢・関係が開いていくことを表している。 この曲全体の中心語。",
    "tokens": [
      {
        "surface": "blooming",
        "base": "blooming",
        "language": "en",
        "shortMeaning": "花が咲いている、開花している",
        "meaning": "花が咲いている、開花している / bloom = 咲く、花開く / - ing = 〜している"
      }
    ]
  },
  "We're blooming, yeah we're blooming": {
    "japanese": "私たちは今、花開いている。",
    "literalJapanese": "私たちは咲いている、そう、私たちは咲いている。",
    "sentenceExplanation": "花だけでなく、 心・恋・夢・関係が開いていくことを表している。 この曲全体の中心語。",
    "nuance": "花だけでなく、 心・恋・夢・関係が開いていくことを表している。 この曲全体の中心語。",
    "tokens": [
      {
        "surface": "blooming",
        "base": "blooming",
        "language": "en",
        "shortMeaning": "花が咲いている、開花している",
        "meaning": "花が咲いている、開花している / bloom = 咲く、花開く / - ing = 〜している"
      }
    ]
  },
  "어린 맘속 헤매던 cosmos": {
    "japanese": "幼い心の中で迷っていた小さな宇宙。",
    "literalJapanese": "幼い心の中でさまよっていた宇宙。",
    "sentenceExplanation": "自分の心の中に、広すぎて整理できない感情や夢があった感じ。 “cosmos” は単なる宇宙ではなく、心の奥にある世界全体のようなイメージ。",
    "nuance": "自分の心の中に、広すぎて整理できない感情や夢があった感じ。 “cosmos” は単なる宇宙ではなく、心の奥にある世界全体のようなイメージ。",
    "tokens": [
      {
        "surface": "어린",
        "base": "어린",
        "language": "ko",
        "shortMeaning": "幼い、若い",
        "meaning": "幼い、若い / 어리다 = 幼い"
      },
      {
        "surface": "맘속",
        "base": "맘속",
        "language": "ko",
        "shortMeaning": "마음속 の縮約",
        "meaning": "마음속 の縮約 / 心の中 / 맘 = 마음 = 心 / 속 = 中"
      },
      {
        "surface": "헤매다",
        "base": "헤매다",
        "language": "ko",
        "shortMeaning": "さまよう、迷う",
        "meaning": "さまよう、迷う"
      },
      {
        "surface": "헤매던",
        "base": "헤매던",
        "language": "ko",
        "shortMeaning": "さまよっていた〜、迷っていた〜",
        "meaning": "さまよっていた〜、迷っていた〜",
        "explanation": "-던 は「過去に〜していた」という回想。"
      },
      {
        "surface": "cosmos",
        "base": "cosmos",
        "language": "en",
        "shortMeaning": "宇宙、秩序ある世界",
        "meaning": "宇宙、秩序ある世界"
      }
    ]
  },
  "터진 눈물 잃어버린 color": {
    "japanese": "こぼれた涙と、なくしてしまった色。",
    "literalJapanese": "あふれた涙、失ってしまった色。",
    "sentenceExplanation": "涙によって自分の色、自分らしさ、明るさを失っていた状態。 “color” は感情・個性・希望の象徴。",
    "nuance": "涙によって自分の色、自分らしさ、明るさを失っていた状態。 “color” は感情・個性・希望の象徴。",
    "tokens": [
      {
        "surface": "터지다",
        "base": "터지다",
        "language": "ko",
        "shortMeaning": "破裂する、爆発する、あふれる",
        "meaning": "破裂する、爆発する、あふれる"
      },
      {
        "surface": "터진",
        "base": "터진",
        "language": "ko",
        "shortMeaning": "あふれた〜、弾けた〜",
        "meaning": "あふれた〜、弾けた〜"
      },
      {
        "surface": "눈물",
        "base": "눈물",
        "language": "ko",
        "shortMeaning": "涙",
        "meaning": "涙"
      },
      {
        "surface": "잃어버리다",
        "base": "잃어버리다",
        "language": "ko",
        "shortMeaning": "失ってしまう、なくしてしまう",
        "meaning": "失ってしまう、なくしてしまう / 잃다 = 失う / -아/어 버리다 = 〜してしまう"
      },
      {
        "surface": "잃어버린",
        "base": "잃어버린",
        "language": "ko",
        "shortMeaning": "失ってしまった〜",
        "meaning": "失ってしまった〜"
      },
      {
        "surface": "color",
        "base": "color",
        "language": "en",
        "shortMeaning": "色",
        "meaning": "色"
      }
    ]
  },
  "But I'm with you, every day and night": {
    "japanese": "でも私は、昼も夜もあなたのそばにいる。",
    "literalJapanese": "でも私はあなたと一緒にいる、毎日、毎晩。",
    "sentenceExplanation": "相手が不安定でも、涙を流していても、ずっとそばにいるという支え。 失った色を取り戻すきっかけになる存在。",
    "nuance": "相手が不安定でも、涙を流していても、ずっとそばにいるという支え。 失った色を取り戻すきっかけになる存在。",
    "tokens": [
      {
        "surface": "I'm with you",
        "base": "I'm with you",
        "language": "en",
        "shortMeaning": "私はあなたと一緒にいる",
        "meaning": "私はあなたと一緒にいる"
      },
      {
        "surface": "every day and night",
        "base": "every day and night",
        "language": "en",
        "shortMeaning": "毎日、毎晩",
        "meaning": "毎日、毎晩"
      }
    ]
  },
  "모든 별을 안고서 keep dreamin'": {
    "japanese": "すべての星を抱きしめながら、夢を見続ける。",
    "literalJapanese": "すべての星を抱いて、夢見続ける。",
    "sentenceExplanation": "星は夢・希望・願いの象徴。 失った色があっても、星を抱えて夢を見続けるという前向きな表現。",
    "nuance": "星は夢・希望・願いの象徴。 失った色があっても、星を抱えて夢を見続けるという前向きな表現。",
    "tokens": [
      {
        "surface": "모든",
        "base": "모든",
        "language": "ko",
        "shortMeaning": "すべての",
        "meaning": "すべての"
      },
      {
        "surface": "별",
        "base": "별",
        "language": "ko",
        "shortMeaning": "星",
        "meaning": "星"
      },
      {
        "surface": "-을",
        "base": "-을",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "안다",
        "base": "안다",
        "language": "ko",
        "shortMeaning": "抱く、抱きしめる",
        "meaning": "抱く、抱きしめる"
      },
      {
        "surface": "안고서",
        "base": "안고서",
        "language": "ko",
        "shortMeaning": "抱いて、抱いたまま",
        "meaning": "抱いて、抱いたまま / -고서 = 〜して、それから / 〜した状態で"
      },
      {
        "surface": "keep dreamin'",
        "base": "keep dreamin'",
        "language": "en",
        "shortMeaning": "夢を見続ける",
        "meaning": "夢を見続ける"
      }
    ]
  },
  "날 깨뜨려서 만들래": {
    "japanese": "自分を壊してでも作りたい。",
    "literalJapanese": "私を壊して作るつもり。",
    "sentenceExplanation": "自分の心や感情を砕いて、何か美しいものに作り変える感じ。 少し痛みのある創作・愛の表現。",
    "nuance": "自分の心や感情を砕いて、何か美しいものに作り変える感じ。 少し痛みのある創作・愛の表現。",
    "tokens": [
      {
        "surface": "날",
        "base": "날",
        "language": "ko",
        "shortMeaning": "나를 の縮約",
        "meaning": "나를 の縮約 / 私を"
      },
      {
        "surface": "깨뜨리다",
        "base": "깨뜨리다",
        "language": "ko",
        "shortMeaning": "壊す、割る、砕く",
        "meaning": "壊す、割る、砕く"
      },
      {
        "surface": "깨뜨려서",
        "base": "깨뜨려서",
        "language": "ko",
        "shortMeaning": "壊して、砕いて",
        "meaning": "壊して、砕いて"
      },
      {
        "surface": "만들다",
        "base": "만들다",
        "language": "ko",
        "shortMeaning": "作る",
        "meaning": "作る"
      },
      {
        "surface": "만들래",
        "base": "만들래",
        "language": "ko",
        "shortMeaning": "作りたい、作るつもり",
        "meaning": "作りたい、作るつもり / -ㄹ래 = 〜したい、〜するつもり"
      }
    ]
  },
  "단 하나뿐인 bouquet": {
    "japanese": "世界に一つだけの花束を。",
    "literalJapanese": "たった一つだけの花束。",
    "sentenceExplanation": "自分の感情を集めて、相手に渡す花束にするイメージ。 “깨뜨려서 만들래” とつながり、自分を砕いてでも唯一の花束を作るという意味。",
    "nuance": "自分の感情を集めて、相手に渡す花束にするイメージ。 “깨뜨려서 만들래” とつながり、自分を砕いてでも唯一の花束を作るという意味。",
    "tokens": [
      {
        "surface": "단",
        "base": "단",
        "language": "ko",
        "shortMeaning": "たった、ただ",
        "meaning": "たった、ただ"
      },
      {
        "surface": "하나",
        "base": "하나",
        "language": "ko",
        "shortMeaning": "一つ",
        "meaning": "一つ"
      },
      {
        "surface": "뿐",
        "base": "뿐",
        "language": "ko",
        "shortMeaning": "〜だけ",
        "meaning": "〜だけ"
      },
      {
        "surface": "단 하나뿐인",
        "base": "단 하나뿐인",
        "language": "ko",
        "shortMeaning": "たった一つだけの、唯一の",
        "meaning": "たった一つだけの、唯一の"
      },
      {
        "surface": "bouquet",
        "base": "bouquet",
        "language": "en",
        "shortMeaning": "花束",
        "meaning": "花束"
      }
    ]
  },
  "Glassy serenade": {
    "japanese": "透明で繊細なセレナーデ。",
    "literalJapanese": "ガラスのようなセレナーデ。",
    "sentenceExplanation": "美しいけれど壊れやすい愛の歌。 “glassy” によって、きらめき・透明感・脆さが出ている。",
    "nuance": "美しいけれど壊れやすい愛の歌。 “glassy” によって、きらめき・透明感・脆さが出ている。",
    "tokens": [
      {
        "surface": "glassy",
        "base": "glassy",
        "language": "en",
        "shortMeaning": "ガラスのような、透明な、壊れやすい",
        "meaning": "ガラスのような、透明な、壊れやすい"
      },
      {
        "surface": "serenade",
        "base": "serenade",
        "language": "en",
        "shortMeaning": "セレナーデ、恋人に捧げる歌",
        "meaning": "セレナーデ、恋人に捧げる歌"
      }
    ]
  },
  "서툴러도 뭐 어때?": {
    "japanese": "不器用でも別にいいでしょ？",
    "literalJapanese": "不器用でも何がどうなの？",
    "sentenceExplanation": "完璧でなくても、下手でも、気持ちがあるならいいという肯定。 恋や表現に対する優しい開き直り。",
    "nuance": "完璧でなくても、下手でも、気持ちがあるならいいという肯定。 恋や表現に対する優しい開き直り。",
    "tokens": [
      {
        "surface": "서투르다",
        "base": "서투르다",
        "language": "ko",
        "shortMeaning": "不器用だ、未熟だ",
        "meaning": "不器用だ、未熟だ"
      },
      {
        "surface": "서툴러도",
        "base": "서툴러도",
        "language": "ko",
        "shortMeaning": "不器用でも",
        "meaning": "不器用でも / -아/어도 = 〜しても"
      },
      {
        "surface": "뭐",
        "base": "뭐",
        "language": "ko",
        "shortMeaning": "何、まあ",
        "meaning": "何、まあ"
      },
      {
        "surface": "어때?",
        "base": "어때?",
        "language": "ko",
        "shortMeaning": "どうなの？ どう？",
        "meaning": "どうなの？ どう？"
      }
    ]
  },
  "은하수 아래서 take my hands": {
    "japanese": "天の川の下で、私の手を取って。",
    "literalJapanese": "天の川の下で、私の手を取って。",
    "sentenceExplanation": "宇宙・星・夢のイメージが続く。 相手を幻想的な場所へ連れていく誘い。",
    "nuance": "宇宙・星・夢のイメージが続く。 相手を幻想的な場所へ連れていく誘い。",
    "tokens": [
      {
        "surface": "은하수",
        "base": "은하수",
        "language": "ko",
        "shortMeaning": "天の川",
        "meaning": "天の川 / 은하 = 銀河 / 수 = 水の流れ"
      },
      {
        "surface": "아래",
        "base": "아래",
        "language": "ko",
        "shortMeaning": "下",
        "meaning": "下"
      },
      {
        "surface": "-서",
        "base": "-서",
        "language": "ko",
        "shortMeaning": "〜で",
        "meaning": "〜で"
      },
      {
        "surface": "take my hands",
        "base": "take my hands",
        "language": "en",
        "shortMeaning": "私の手を取って",
        "meaning": "私の手を取って"
      }
    ]
  },
  "시들지 않을 꿈에": {
    "japanese": "枯れることのない夢へ。",
    "literalJapanese": "しおれない夢へ。",
    "sentenceExplanation": "花のイメージと夢がつながっている。 普通の花は枯れるが、この夢は枯れない。",
    "nuance": "花のイメージと夢がつながっている。 普通の花は枯れるが、この夢は枯れない。",
    "tokens": [
      {
        "surface": "시들다",
        "base": "시들다",
        "language": "ko",
        "shortMeaning": "しおれる、枯れる",
        "meaning": "しおれる、枯れる"
      },
      {
        "surface": "시들지 않다",
        "base": "시들지 않다",
        "language": "ko",
        "shortMeaning": "しおれない",
        "meaning": "しおれない"
      },
      {
        "surface": "시들지 않을",
        "base": "시들지 않을",
        "language": "ko",
        "shortMeaning": "しおれない〜",
        "meaning": "しおれない〜"
      },
      {
        "surface": "꿈",
        "base": "꿈",
        "language": "ko",
        "shortMeaning": "夢",
        "meaning": "夢"
      },
      {
        "surface": "-에",
        "base": "-에",
        "language": "ko",
        "shortMeaning": "〜へ、〜に",
        "meaning": "〜へ、〜に"
      }
    ]
  },
  "널 데려가고 있잖아": {
    "japanese": "あなたを連れて行っているんだよ。",
    "literalJapanese": "あなたを連れて行っているじゃない。",
    "sentenceExplanation": "語り手が相手を夢の世界へ導いている。 少し安心させるような言い方。",
    "nuance": "語り手が相手を夢の世界へ導いている。 少し安心させるような言い方。",
    "tokens": [
      {
        "surface": "널",
        "base": "널",
        "language": "ko",
        "shortMeaning": "너를 の縮約",
        "meaning": "너를 の縮約 / あなたを"
      },
      {
        "surface": "데려가다",
        "base": "데려가다",
        "language": "ko",
        "shortMeaning": "連れて行く",
        "meaning": "連れて行く / 데리다 = 連れる / 가다 = 行く"
      },
      {
        "surface": "데려가고 있다",
        "base": "데려가고 있다",
        "language": "ko",
        "shortMeaning": "連れて行っている",
        "meaning": "連れて行っている"
      },
      {
        "surface": "-잖아",
        "base": "-잖아",
        "language": "ko",
        "shortMeaning": "〜じゃない、〜でしょ",
        "meaning": "〜じゃない、〜でしょ"
      }
    ]
  },
  "봄 지나 겨울 와도": {
    "japanese": "春が過ぎ、冬が来ても。",
    "literalJapanese": "春が過ぎて冬が来ても。",
    "sentenceExplanation": "季節が変わっても、気持ちは終わらない。 春＝開花、冬＝寒さ・停滞。 冬が来てもまた咲く流れにつながる。",
    "nuance": "季節が変わっても、気持ちは終わらない。 春＝開花、冬＝寒さ・停滞。 冬が来てもまた咲く流れにつながる。",
    "tokens": [
      {
        "surface": "봄",
        "base": "봄",
        "language": "ko",
        "shortMeaning": "春",
        "meaning": "春"
      },
      {
        "surface": "지나다",
        "base": "지나다",
        "language": "ko",
        "shortMeaning": "過ぎる",
        "meaning": "過ぎる"
      },
      {
        "surface": "지나",
        "base": "지나",
        "language": "ko",
        "shortMeaning": "過ぎて",
        "meaning": "過ぎて"
      },
      {
        "surface": "겨울",
        "base": "겨울",
        "language": "ko",
        "shortMeaning": "冬",
        "meaning": "冬"
      },
      {
        "surface": "오다",
        "base": "오다",
        "language": "ko",
        "shortMeaning": "来る",
        "meaning": "来る"
      },
      {
        "surface": "와도",
        "base": "와도",
        "language": "ko",
        "shortMeaning": "来ても",
        "meaning": "来ても"
      }
    ]
  },
  "다시 피어날 my heart": {
    "japanese": "私の心はまた咲き始める。",
    "literalJapanese": "また咲く私の心。",
    "sentenceExplanation": "一度しおれても、また咲く。 恋や夢が再生するイメージ。",
    "nuance": "一度しおれても、また咲く。 恋や夢が再生するイメージ。",
    "tokens": [
      {
        "surface": "다시",
        "base": "다시",
        "language": "ko",
        "shortMeaning": "また、再び",
        "meaning": "また、再び"
      },
      {
        "surface": "피어나다",
        "base": "피어나다",
        "language": "ko",
        "shortMeaning": "咲き始める、開花する",
        "meaning": "咲き始める、開花する / 피다 = 咲く / 나다 = 出る、生じる"
      },
      {
        "surface": "피어날",
        "base": "피어날",
        "language": "ko",
        "shortMeaning": "咲く〜、咲き始める〜",
        "meaning": "咲く〜、咲き始める〜"
      },
      {
        "surface": "my heart",
        "base": "my heart",
        "language": "en",
        "shortMeaning": "私の心",
        "meaning": "私の心"
      }
    ]
  },
  "커진 심장 소릴 들어봐": {
    "japanese": "高鳴る鼓動を聞いてみて。",
    "literalJapanese": "大きくなった心臓の音を聞いてみて。",
    "sentenceExplanation": "恋や期待で鼓動が大きくなる。 相手に自分の本気を感じてほしい。",
    "nuance": "恋や期待で鼓動が大きくなる。 相手に自分の本気を感じてほしい。",
    "tokens": [
      {
        "surface": "커지다",
        "base": "커지다",
        "language": "ko",
        "shortMeaning": "大きくなる",
        "meaning": "大きくなる"
      },
      {
        "surface": "커진",
        "base": "커진",
        "language": "ko",
        "shortMeaning": "大きくなった〜",
        "meaning": "大きくなった〜"
      },
      {
        "surface": "심장",
        "base": "심장",
        "language": "ko",
        "shortMeaning": "心臓",
        "meaning": "心臓"
      },
      {
        "surface": "소리",
        "base": "소리",
        "language": "ko",
        "shortMeaning": "音",
        "meaning": "音"
      },
      {
        "surface": "소릴",
        "base": "소릴",
        "language": "ko",
        "shortMeaning": "소리를 の縮約",
        "meaning": "소리를 の縮約 / 音を"
      },
      {
        "surface": "듣다",
        "base": "듣다",
        "language": "ko",
        "shortMeaning": "聞く",
        "meaning": "聞く"
      },
      {
        "surface": "들어봐",
        "base": "들어봐",
        "language": "ko",
        "shortMeaning": "聞いてみて",
        "meaning": "聞いてみて / -아/어 보다 = 〜してみる"
      }
    ]
  },
  "영원히 기억될 이 순간": {
    "japanese": "この瞬間は、永遠に記憶に残る。",
    "literalJapanese": "永遠に記憶されるこの瞬間。",
    "sentenceExplanation": "今の恋や開花の瞬間が、ずっと残るほど特別だということ。",
    "nuance": "今の恋や開花の瞬間が、ずっと残るほど特別だということ。",
    "tokens": [
      {
        "surface": "영원히",
        "base": "영원히",
        "language": "ko",
        "shortMeaning": "永遠に",
        "meaning": "永遠に"
      },
      {
        "surface": "기억되다",
        "base": "기억되다",
        "language": "ko",
        "shortMeaning": "記憶される",
        "meaning": "記憶される / 기억 = 記憶 / 되다 = 〜される、〜になる"
      },
      {
        "surface": "기억될",
        "base": "기억될",
        "language": "ko",
        "shortMeaning": "記憶される〜",
        "meaning": "記憶される〜"
      },
      {
        "surface": "이",
        "base": "이",
        "language": "ko",
        "shortMeaning": "この",
        "meaning": "この"
      },
      {
        "surface": "순간",
        "base": "순간",
        "language": "ko",
        "shortMeaning": "瞬間",
        "meaning": "瞬間"
      }
    ]
  },
  "가사가 된 꽃잎들을 봐": {
    "japanese": "歌詞になった花びらを見て。",
    "literalJapanese": "歌詞になった花びらたちを見て。",
    "sentenceExplanation": "咲いた感情が花びらになり、その花びらが歌詞になる。 愛や思い出が歌として残るという詩的表現。",
    "nuance": "咲いた感情が花びらになり、その花びらが歌詞になる。 愛や思い出が歌として残るという詩的表現。",
    "tokens": [
      {
        "surface": "가사",
        "base": "가사",
        "language": "ko",
        "shortMeaning": "歌詞",
        "meaning": "歌詞"
      },
      {
        "surface": "-가 되다",
        "base": "-가 되다",
        "language": "ko",
        "shortMeaning": "〜になる",
        "meaning": "〜になる"
      },
      {
        "surface": "가사가 된",
        "base": "가사가 된",
        "language": "ko",
        "shortMeaning": "歌詞になった〜",
        "meaning": "歌詞になった〜"
      },
      {
        "surface": "꽃잎",
        "base": "꽃잎",
        "language": "ko",
        "shortMeaning": "花びら",
        "meaning": "花びら / 꽃 = 花 / 잎 = 葉、花びら"
      },
      {
        "surface": "꽃잎들",
        "base": "꽃잎들",
        "language": "ko",
        "shortMeaning": "花びらたち",
        "meaning": "花びらたち"
      },
      {
        "surface": "보다",
        "base": "보다",
        "language": "ko",
        "shortMeaning": "見る",
        "meaning": "見る"
      },
      {
        "surface": "봐",
        "base": "봐",
        "language": "ko",
        "shortMeaning": "見て",
        "meaning": "見て"
      }
    ]
  },
  "이미 넌 불러본 멜로디": {
    "japanese": "あなたはもう、そのメロディを歌ったことがある。",
    "literalJapanese": "すでにあなたは歌ってみたメロディ。",
    "sentenceExplanation": "二人の恋や感情は、初めてのようでどこか知っているメロディ。 心がすでに知っている愛のような感覚。",
    "nuance": "二人の恋や感情は、初めてのようでどこか知っているメロディ。 心がすでに知っている愛のような感覚。",
    "tokens": [
      {
        "surface": "이미",
        "base": "이미",
        "language": "ko",
        "shortMeaning": "すでに、もう",
        "meaning": "すでに、もう"
      },
      {
        "surface": "넌",
        "base": "넌",
        "language": "ko",
        "shortMeaning": "너는 の縮約",
        "meaning": "너는 の縮約 / あなたは"
      },
      {
        "surface": "부르다",
        "base": "부르다",
        "language": "ko",
        "shortMeaning": "歌う、呼ぶ",
        "meaning": "歌う、呼ぶ"
      },
      {
        "surface": "불러보다",
        "base": "불러보다",
        "language": "ko",
        "shortMeaning": "歌ってみる",
        "meaning": "歌ってみる"
      },
      {
        "surface": "불러본",
        "base": "불러본",
        "language": "ko",
        "shortMeaning": "歌ってみたことのある〜",
        "meaning": "歌ってみたことのある〜"
      },
      {
        "surface": "멜로디",
        "base": "멜로디",
        "language": "ko",
        "shortMeaning": "メロディ",
        "meaning": "メロディ"
      }
    ]
  },
  "L O V E, right?": {
    "japanese": "これはLOVE、そうでしょ？",
    "literalJapanese": "L O V E、でしょ？",
    "sentenceExplanation": "自分たちの感情がLOVEだと確認している。 次の “I don't doubt it” で、疑いがないことを強調。",
    "nuance": "自分たちの感情がLOVEだと確認している。 次の “I don't doubt it” で、疑いがないことを強調。",
    "tokens": [
      {
        "surface": "LOVE",
        "base": "LOVE",
        "language": "en",
        "shortMeaning": "愛",
        "meaning": "愛"
      },
      {
        "surface": "right?",
        "base": "right?",
        "language": "en",
        "shortMeaning": "そうでしょ？",
        "meaning": "そうでしょ？"
      }
    ]
  },
  "(I don't doubt it!)": {
    "japanese": "疑いなんてない。",
    "literalJapanese": "私はそれを疑わない。",
    "sentenceExplanation": "これは愛だと確信している。 迷いよりも確信が勝っている。",
    "nuance": "これは愛だと確信している。 迷いよりも確信が勝っている。",
    "tokens": [
      {
        "surface": "doubt",
        "base": "doubt",
        "language": "en",
        "shortMeaning": "疑う",
        "meaning": "疑う"
      },
      {
        "surface": "I don't doubt it",
        "base": "I don't doubt it",
        "language": "en",
        "shortMeaning": "それを疑わない",
        "meaning": "それを疑わない"
      }
    ]
  },
  "Be my, be my light!": {
    "japanese": "私の光になって。",
    "literalJapanese": "私の、私の光になって。",
    "sentenceExplanation": "相手が暗い心や失った色を照らす存在。 最初の「잃어버린 color」とつながる。",
    "nuance": "相手が暗い心や失った色を照らす存在。 最初の「잃어버린 color」とつながる。",
    "tokens": [
      {
        "surface": "be my light",
        "base": "be my light",
        "language": "en",
        "shortMeaning": "私の光になって",
        "meaning": "私の光になって / light = 光"
      }
    ]
  },
  "Now then": {
    "japanese": "さあ、今。",
    "literalJapanese": "それでは今。",
    "sentenceExplanation": "感情を確信の形にまとめたあと、次の blooming へ勢いよく踏み出す短い合図になっている。",
    "nuance": "会話の『では』というより、ステージの空気を切り替えるスイッチのように聞こえる。",
    "tokens": [
      {
        "surface": "Now then",
        "base": "now then",
        "language": "en",
        "shortMeaning": "さあ、今",
        "meaning": "さあ、今。それじゃあ今こそ"
      }
    ]
  },
  "We're blooming, can you hug me?": {
    "japanese": "私たちは咲いている。抱きしめてくれる？",
    "literalJapanese": "私たちは咲いている、私を抱きしめてくれる？",
    "sentenceExplanation": "花開く喜びの中に、相手に抱きしめてほしい甘さがある。 ただ強いだけではなく、弱さや甘えも含む。",
    "nuance": "花開く喜びの中に、相手に抱きしめてほしい甘さがある。 ただ強いだけではなく、弱さや甘えも含む。",
    "tokens": [
      {
        "surface": "hug",
        "base": "hug",
        "language": "en",
        "shortMeaning": "抱きしめる",
        "meaning": "抱きしめる"
      },
      {
        "surface": "can you hug me?",
        "base": "can you hug me?",
        "language": "en",
        "shortMeaning": "抱きしめてくれる？",
        "meaning": "抱きしめてくれる？"
      }
    ]
  },
  "Hold up hold up, I can't breathe": {
    "japanese": "ちょっと待って、息ができないくらい。",
    "literalJapanese": "待って、待って、息ができない。",
    "sentenceExplanation": "感情があふれすぎて息が詰まりそう。 恋の高揚感・緊張感。",
    "nuance": "感情があふれすぎて息が詰まりそう。 恋の高揚感・緊張感。",
    "tokens": [
      {
        "surface": "hold up",
        "base": "hold up",
        "language": "en",
        "shortMeaning": "待って、止まって",
        "meaning": "待って、止まって"
      },
      {
        "surface": "I can't breathe",
        "base": "I can't breathe",
        "language": "en",
        "shortMeaning": "息ができない",
        "meaning": "息ができない"
      }
    ]
  },
  "I'm ready ready to make it": {
    "japanese": "もう準備はできている。",
    "literalJapanese": "私はそれを作る準備ができている。",
    "sentenceExplanation": "愛や夢を形にする準備ができたということ。 前の「bouquetを作る」とつながる。",
    "nuance": "愛や夢を形にする準備ができたということ。 前の「bouquetを作る」とつながる。",
    "tokens": [
      {
        "surface": "ready",
        "base": "ready",
        "language": "en",
        "shortMeaning": "準備ができている",
        "meaning": "準備ができている"
      },
      {
        "surface": "make it",
        "base": "make it",
        "language": "en",
        "shortMeaning": "成し遂げる、作り上げる",
        "meaning": "成し遂げる、作り上げる"
      }
    ]
  },
  "하나의 숨결에 담기엔": {
    "japanese": "たった一つの息に込めるには。",
    "literalJapanese": "一つの息遣いに込めるには。",
    "sentenceExplanation": "言いたいこと・感情が多すぎて、一息では言い切れないという意味。",
    "nuance": "言いたいこと・感情が多すぎて、一息では言い切れないという意味。",
    "tokens": [
      {
        "surface": "하나",
        "base": "하나",
        "language": "ko",
        "shortMeaning": "一つ",
        "meaning": "一つ"
      },
      {
        "surface": "-의",
        "base": "-의",
        "language": "ko",
        "shortMeaning": "〜の",
        "meaning": "〜の"
      },
      {
        "surface": "숨결",
        "base": "숨결",
        "language": "ko",
        "shortMeaning": "息遣い、息、呼吸",
        "meaning": "息遣い、息、呼吸 / 숨 = 息 / 결 = 流れ、感じ"
      },
      {
        "surface": "담다",
        "base": "담다",
        "language": "ko",
        "shortMeaning": "込める、入れる",
        "meaning": "込める、入れる"
      },
      {
        "surface": "담기엔",
        "base": "담기엔",
        "language": "ko",
        "shortMeaning": "담기에는 の縮約",
        "meaning": "담기에는 の縮約 / 込めるには"
      }
    ]
  },
  "널 향한 말들이 넘쳐": {
    "japanese": "あなたへの言葉があふれすぎている。",
    "literalJapanese": "あなたに向かう言葉たちがあふれる。",
    "sentenceExplanation": "好き、ありがとう、そばにいてほしいなど、伝えたい言葉が多すぎる状態。",
    "nuance": "好き、ありがとう、そばにいてほしいなど、伝えたい言葉が多すぎる状態。",
    "tokens": [
      {
        "surface": "널",
        "base": "널",
        "language": "ko",
        "shortMeaning": "너를",
        "meaning": "너를 / あなたを"
      },
      {
        "surface": "향하다",
        "base": "향하다",
        "language": "ko",
        "shortMeaning": "向かう",
        "meaning": "向かう"
      },
      {
        "surface": "널 향한",
        "base": "널 향한",
        "language": "ko",
        "shortMeaning": "あなたに向かう〜、あなたへの〜",
        "meaning": "あなたに向かう〜、あなたへの〜"
      },
      {
        "surface": "말",
        "base": "말",
        "language": "ko",
        "shortMeaning": "言葉",
        "meaning": "言葉"
      },
      {
        "surface": "말들",
        "base": "말들",
        "language": "ko",
        "shortMeaning": "言葉たち",
        "meaning": "言葉たち"
      },
      {
        "surface": "넘치다",
        "base": "넘치다",
        "language": "ko",
        "shortMeaning": "あふれる",
        "meaning": "あふれる"
      },
      {
        "surface": "넘쳐",
        "base": "넘쳐",
        "language": "ko",
        "shortMeaning": "あふれる",
        "meaning": "あふれる"
      }
    ]
  },
  "너는 뭐랄까? 나를 웃게 하는 춤": {
    "japanese": "あなたは何て言えばいいんだろう、私を笑顔にするダンスみたい。",
    "literalJapanese": "あなたは何と言おうか？ 私を笑わせる踊り。",
    "sentenceExplanation": "相手を普通の言葉では説明できない。 「ダンス」のように、見ているだけで心が動いて笑顔になる存在。",
    "nuance": "相手を普通の言葉では説明できない。 「ダンス」のように、見ているだけで心が動いて笑顔になる存在。",
    "tokens": [
      {
        "surface": "너는",
        "base": "너는",
        "language": "ko",
        "shortMeaning": "あなたは",
        "meaning": "あなたは"
      },
      {
        "surface": "뭐랄까?",
        "base": "뭐랄까?",
        "language": "ko",
        "shortMeaning": "何と言おうか、何て言えばいいかな",
        "meaning": "何と言おうか、何て言えばいいかな / 뭐라 하다 = 何と言う / -ㄹ까 = 〜かな"
      },
      {
        "surface": "나를",
        "base": "나를",
        "language": "ko",
        "shortMeaning": "私を",
        "meaning": "私を"
      },
      {
        "surface": "웃다",
        "base": "웃다",
        "language": "ko",
        "shortMeaning": "笑う",
        "meaning": "笑う"
      },
      {
        "surface": "웃게 하다",
        "base": "웃게 하다",
        "language": "ko",
        "shortMeaning": "笑わせる",
        "meaning": "笑わせる"
      },
      {
        "surface": "춤",
        "base": "춤",
        "language": "ko",
        "shortMeaning": "踊り、ダンス",
        "meaning": "踊り、ダンス"
      }
    ]
  },
  "매일 round n' round 서로 가득 채울 품": {
    "japanese": "毎日ぐるぐる回りながら、互いの腕の中を満たしていく。",
    "literalJapanese": "毎日ぐるぐる、お互いをいっぱいに満たす胸。",
    "sentenceExplanation": "お互いを抱きしめ合い、足りないものを満たしていく感じ。 “round n' round” で繰り返される日々や回転する感情を表している。",
    "nuance": "お互いを抱きしめ合い、足りないものを満たしていく感じ。 “round n' round” で繰り返される日々や回転する感情を表している。",
    "tokens": [
      {
        "surface": "매일",
        "base": "매일",
        "language": "ko",
        "shortMeaning": "毎日",
        "meaning": "毎日"
      },
      {
        "surface": "round n' round",
        "base": "round n' round",
        "language": "en",
        "shortMeaning": "ぐるぐる、何度も回る",
        "meaning": "ぐるぐる、何度も回る"
      },
      {
        "surface": "서로",
        "base": "서로",
        "language": "ko",
        "shortMeaning": "お互い",
        "meaning": "お互い"
      },
      {
        "surface": "가득",
        "base": "가득",
        "language": "ko",
        "shortMeaning": "いっぱいに",
        "meaning": "いっぱいに"
      },
      {
        "surface": "채우다",
        "base": "채우다",
        "language": "ko",
        "shortMeaning": "満たす",
        "meaning": "満たす"
      },
      {
        "surface": "채울",
        "base": "채울",
        "language": "ko",
        "shortMeaning": "満たす〜",
        "meaning": "満たす〜"
      },
      {
        "surface": "품",
        "base": "품",
        "language": "ko",
        "shortMeaning": "胸、懐、腕の中",
        "meaning": "胸、懐、腕の中"
      }
    ]
  },
  "언제 어디까지나 깨고 싶지 않은 꿈": {
    "japanese": "いつまでも、どこまでも、覚めたくない夢。",
    "literalJapanese": "いつ、どこまでも覚めたくない夢。",
    "sentenceExplanation": "相手との時間が夢のようで、終わってほしくない。 “시들지 않을 꿈” ともつながる。",
    "nuance": "相手との時間が夢のようで、終わってほしくない。 “시들지 않을 꿈” ともつながる。",
    "tokens": [
      {
        "surface": "언제",
        "base": "언제",
        "language": "ko",
        "shortMeaning": "いつ",
        "meaning": "いつ"
      },
      {
        "surface": "어디까지나",
        "base": "어디까지나",
        "language": "ko",
        "shortMeaning": "どこまでも、あくまでも",
        "meaning": "どこまでも、あくまでも"
      },
      {
        "surface": "깨다",
        "base": "깨다",
        "language": "ko",
        "shortMeaning": "目覚める、覚める",
        "meaning": "目覚める、覚める"
      },
      {
        "surface": "깨고 싶지 않다",
        "base": "깨고 싶지 않다",
        "language": "ko",
        "shortMeaning": "覚めたくない",
        "meaning": "覚めたくない"
      },
      {
        "surface": "꿈",
        "base": "꿈",
        "language": "ko",
        "shortMeaning": "夢",
        "meaning": "夢"
      }
    ]
  },
  "Gonna zoom zoom zoom": {
    "japanese": "一気に近づいていく。",
    "literalJapanese": "ズームしていくつもり。",
    "sentenceExplanation": "ここではもう迷わず、相手との距離を一気に縮めようとする勢いが前に出ている。",
    "nuance": "zoom の反復で、感情が一直線に加速していくスピード感が強く出る。",
    "tokens": [
      {
        "surface": "gonna",
        "base": "gonna",
        "language": "en",
        "shortMeaning": "〜するつもり",
        "meaning": "going to、〜するつもり"
      },
      {
        "surface": "zoom",
        "base": "zoom",
        "language": "en",
        "shortMeaning": "一気に近づく",
        "meaning": "急に近づく、勢いよく進む"
      }
    ]
  },
  "On just you you you": {
    "japanese": "ただ、あなただけへ。",
    "literalJapanese": "ただあなたに。",
    "sentenceExplanation": "気持ちの焦点が他の誰でもなく you にだけ合っていることを、そのまま短く示している。",
    "nuance": "you を重ねることで、視線も感情も完全に一人へ向いていると分かる。",
    "tokens": [
      {
        "surface": "just you",
        "base": "just you",
        "language": "en",
        "shortMeaning": "ただあなただけ",
        "meaning": "ただあなただけ"
      }
    ]
  },
  "지구를 벗어나도": {
    "japanese": "たとえ地球を飛び出しても。",
    "literalJapanese": "地球を抜け出しても。",
    "sentenceExplanation": "宇宙規模の愛・夢。 場所がどこであっても、心はまた咲くという意味。",
    "nuance": "宇宙規模の愛・夢。 場所がどこであっても、心はまた咲くという意味。",
    "tokens": [
      {
        "surface": "지구",
        "base": "지구",
        "language": "ko",
        "shortMeaning": "地球",
        "meaning": "地球"
      },
      {
        "surface": "-를",
        "base": "-를",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "벗어나다",
        "base": "벗어나다",
        "language": "ko",
        "shortMeaning": "抜け出す、離れる",
        "meaning": "抜け出す、離れる"
      },
      {
        "surface": "벗어나도",
        "base": "벗어나도",
        "language": "ko",
        "shortMeaning": "抜け出しても",
        "meaning": "抜け出しても"
      }
    ]
  },
  "Then I realize": {
    "japanese": "その時、私は気づく。",
    "literalJapanese": "その時、私は気づく。",
    "sentenceExplanation": "ここから歌の答えに近づく。 自分の花や夢の意味が、相手だったと気づく流れ。",
    "nuance": "ここから歌の答えに近づく。 自分の花や夢の意味が、相手だったと気づく流れ。",
    "tokens": [
      {
        "surface": "realize",
        "base": "realize",
        "language": "en",
        "shortMeaning": "気づく、悟る",
        "meaning": "気づく、悟る"
      }
    ]
  },
  "모든 꽃말은 너야": {
    "japanese": "すべての花言葉は、あなたのことだった。",
    "literalJapanese": "すべての花言葉はあなた。",
    "sentenceExplanation": "この曲で一番大事な表現の一つ。 咲いた花、花束、花びら、歌詞に込めた意味は、すべて相手に向かっていたということ。",
    "nuance": "この曲で一番大事な表現の一つ。 咲いた花、花束、花びら、歌詞に込めた意味は、すべて相手に向かっていたということ。",
    "tokens": [
      {
        "surface": "모든",
        "base": "모든",
        "language": "ko",
        "shortMeaning": "すべての",
        "meaning": "すべての"
      },
      {
        "surface": "꽃말",
        "base": "꽃말",
        "language": "ko",
        "shortMeaning": "花言葉",
        "meaning": "花言葉 / 꽃 = 花 / 말 = 言葉"
      },
      {
        "surface": "-은",
        "base": "-은",
        "language": "ko",
        "shortMeaning": "〜は",
        "meaning": "〜は"
      },
      {
        "surface": "너야",
        "base": "너야",
        "language": "ko",
        "shortMeaning": "あなたなんだ",
        "meaning": "あなたなんだ"
      }
    ]
  },
  "(I'm sure, it's you)": {
    "japanese": "間違いない、あなたなんだ。",
    "literalJapanese": "私は確信している、それはあなた。",
    "sentenceExplanation": "LOVEであること、花言葉の意味が相手であることを確信している。",
    "nuance": "LOVEであること、花言葉の意味が相手であることを確信している。",
    "tokens": [
      {
        "surface": "I'm sure",
        "base": "I'm sure",
        "language": "en",
        "shortMeaning": "確信している",
        "meaning": "確信している"
      },
      {
        "surface": "it's you",
        "base": "it's you",
        "language": "en",
        "shortMeaning": "それはあなた",
        "meaning": "それはあなた"
      }
    ]
  },
  "It's time to get you so I": {
    "japanese": "今こそあなたのもとへ行く時だから。",
    "literalJapanese": "あなたを手に入れる時間だから、私は。",
    "sentenceExplanation": "気づきだけで終わらず、ここから実際に取りに行く段階へ変わる直前の宣言になっている。",
    "nuance": "it’s time to で『もうタイミングは来た』と自分の背中を押している感じがある。",
    "tokens": [
      {
        "surface": "It's time to",
        "base": "it's time to",
        "language": "en",
        "shortMeaning": "〜する時だ",
        "meaning": "〜する時だ"
      },
      {
        "surface": "get you",
        "base": "get you",
        "language": "en",
        "shortMeaning": "あなたをつかむ",
        "meaning": "あなたをつかむ、あなたのもとへ行く"
      }
    ]
  },
  "Run run run": {
    "japanese": "走っていく。",
    "literalJapanese": "走る、走る、走る。",
    "sentenceExplanation": "さっきまで歌や花で包んでいた感情が、ここでは行動として前へ飛び出していく。",
    "nuance": "run の反復で、ためらいより衝動が勝った瞬間の一直線さが出る。",
    "tokens": [
      {
        "surface": "run",
        "base": "run",
        "language": "en",
        "shortMeaning": "走る",
        "meaning": "走る"
      }
    ]
  },
  "가사가 된 우리들을 봐": {
    "japanese": "歌詞になった私たちを見て。",
    "literalJapanese": "歌詞になった私たちを見て。",
    "sentenceExplanation": "最初は「꽃잎들이＝花びらたち」だったが、最後は「우리들＝私たち」になる。 つまり、二人の関係そのものが歌になったということ。",
    "nuance": "最初は「꽃잎들이＝花びらたち」だったが、最後は「우리들＝私たち」になる。 つまり、二人の関係そのものが歌になったということ。",
    "tokens": [
      {
        "surface": "가사",
        "base": "가사",
        "language": "ko",
        "shortMeaning": "歌詞",
        "meaning": "歌詞"
      },
      {
        "surface": "-가 되다",
        "base": "-가 되다",
        "language": "ko",
        "shortMeaning": "〜になる",
        "meaning": "〜になる"
      },
      {
        "surface": "가사가 된",
        "base": "가사가 된",
        "language": "ko",
        "shortMeaning": "歌詞になった〜",
        "meaning": "歌詞になった〜"
      },
      {
        "surface": "우리들",
        "base": "우리들",
        "language": "ko",
        "shortMeaning": "私たち",
        "meaning": "私たち"
      },
      {
        "surface": "봐",
        "base": "봐",
        "language": "ko",
        "shortMeaning": "見て",
        "meaning": "見て"
      }
    ]
  }
};

const lyricsSequence: string[] = [
  "We're blooming, yeah we're blooming, baby",
  "We're blooming, yeah we're blooming",
  "어린 맘속 헤매던 cosmos",
  "터진 눈물 잃어버린 color",
  "But I'm with you, every day and night",
  "모든 별을 안고서 keep dreamin'",
  "날 깨뜨려서 만들래",
  "단 하나뿐인 bouquet",
  "Glassy serenade",
  "서툴러도 뭐 어때?",
  "은하수 아래서 take my hands",
  "시들지 않을 꿈에",
  "널 데려가고 있잖아",
  "봄 지나 겨울 와도",
  "다시 피어날 my heart",
  "커진 심장 소릴 들어봐",
  "영원히 기억될 이 순간",
  "가사가 된 꽃잎들을 봐",
  "이미 넌 불러본 멜로디",
  "L O V E, right?",
  "L O V E, right?",
  "(I don't doubt it!)",
  "Be my, be my light!",
  "Be my, be my light!",
  "Now then",
  "We're blooming, yeah we're blooming, baby",
  "We're blooming, can you hug me?",
  "Hold up hold up, I can't breathe",
  "I'm ready ready to make it",
  "하나의 숨결에 담기엔",
  "널 향한 말들이 넘쳐",
  "너는 뭐랄까? 나를 웃게 하는 춤",
  "매일 round n' round 서로 가득 채울 품",
  "언제 어디까지나 깨고 싶지 않은 꿈",
  "Gonna zoom zoom zoom",
  "On just you you you",
  "지구를 벗어나도",
  "다시 피어날 my heart",
  "커진 심장 소릴 들어봐",
  "영원히 기억될 이 순간",
  "가사가 된 꽃잎들을 봐",
  "이미 넌 불러본 멜로디",
  "L O V E, right?",
  "L O V E, right?",
  "(I don't doubt it!)",
  "Be my, be my light!",
  "Be my, be my light!",
  "Now then",
  "We're blooming, yeah we're blooming, baby",
  "We're blooming, can you hug me?",
  "Then I realize",
  "모든 꽃말은 너야",
  "(I'm sure, it's you)",
  "It's time to get you so I",
  "Run run run",
  "커진 심장 소릴 들어봐",
  "영원히 기억될 이 순간",
  "가사가 된 우리들을 봐",
  "이미 넌 불러본 멜로디",
  "L O V E, right?",
  "L O V E, right?",
  "(I don't doubt it!)",
  "Be my, be my light!",
  "Be my, be my light!",
  "Now then",
  "We're blooming, yeah we're blooming, baby",
  "We're blooming, can you hug me?",
  "We're blooming, yeah we're blooming, baby",
  "We're blooming, can you hug me?"
];

export const completeHeavySerenadeLines: LyricLine[] = lyricsSequence.map((korean, index) => {
  const template = lineTemplates[korean];

  return {
    id: `nmixx-heavy-serenade-line-${index + 1}`,
    korean,
    japanese: template.japanese,
    literalJapanese: template.literalJapanese,
    sentenceExplanation: template.sentenceExplanation,
    ...(template.nuance ? { nuance: template.nuance } : {}),
    tokens: template.tokens.map((token, tokenIndex) => ({
      ...token,
      id: `nmixx-heavy-serenade-line-${index + 1}-token-${tokenIndex + 1}`,
    })),
  };
});

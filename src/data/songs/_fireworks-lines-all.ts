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
  "세상은 어둡고": {
    "japanese": "世界は暗くて。",
    "literalJapanese": "世界は暗くて。",
    "sentenceExplanation": "ここでの「世界」は、実際の夜だけでなく、心の中の暗さも表している。 恋が始まる前の、色のない静かな状態。",
    "nuance": "ここでの「世界」は、実際の夜だけでなく、心の中の暗さも表している。 恋が始まる前の、色のない静かな状態。",
    "tokens": [
      {
        "surface": "세상",
        "base": "세상",
        "language": "ko",
        "shortMeaning": "世界",
        "meaning": "世界"
      },
      {
        "surface": "-은",
        "base": "-은",
        "language": "ko",
        "shortMeaning": "〜は",
        "meaning": "〜は"
      },
      {
        "surface": "어둡다",
        "base": "어둡다",
        "language": "ko",
        "shortMeaning": "暗い",
        "meaning": "暗い"
      },
      {
        "surface": "어둡고",
        "base": "어둡고",
        "language": "ko",
        "shortMeaning": "暗くて",
        "meaning": "暗くて"
      }
    ]
  },
  "너무 고요한데": {
    "japanese": "あまりにも静かなのに。",
    "literalJapanese": "とても静かなのに。",
    "sentenceExplanation": "外の世界は静か。 でも次に「네 마음은 그렇지 못해」と続くので、外の静けさと心の騒がしさが対比されている。",
    "nuance": "外の世界は静か。 でも次に「네 마음은 그렇지 못해」と続くので、外の静けさと心の騒がしさが対比されている。",
    "tokens": [
      {
        "surface": "너무",
        "base": "너무",
        "language": "ko",
        "shortMeaning": "とても、あまりにも",
        "meaning": "とても、あまりにも"
      },
      {
        "surface": "고요하다",
        "base": "고요하다",
        "language": "ko",
        "shortMeaning": "静かだ、穏やかだ",
        "meaning": "静かだ、穏やかだ"
      },
      {
        "surface": "고요한데",
        "base": "고요한데",
        "language": "ko",
        "shortMeaning": "静かなのに",
        "meaning": "静かなのに / -ㄴ데 = 〜なのに、〜だけど"
      }
    ]
  },
  "네 마음은 그렇지 못해": {
    "japanese": "あなたの心は、そんなふうに静かではいられない。",
    "literalJapanese": "あなたの心はそうではいられない。",
    "sentenceExplanation": "外は静かでも、あなたの心は落ち着いていない。 恋・寂しさ・会いたさで心が眠れない感じ。",
    "nuance": "外は静かでも、あなたの心は落ち着いていない。 恋・寂しさ・会いたさで心が眠れない感じ。",
    "tokens": [
      {
        "surface": "네",
        "base": "네",
        "language": "ko",
        "shortMeaning": "あなたの",
        "meaning": "あなたの"
      },
      {
        "surface": "마음",
        "base": "마음",
        "language": "ko",
        "shortMeaning": "心、気持ち",
        "meaning": "心、気持ち"
      },
      {
        "surface": "-은",
        "base": "-은",
        "language": "ko",
        "shortMeaning": "〜は",
        "meaning": "〜は"
      },
      {
        "surface": "그렇다",
        "base": "그렇다",
        "language": "ko",
        "shortMeaning": "そうだ",
        "meaning": "そうだ"
      },
      {
        "surface": "그렇지 못하다",
        "base": "그렇지 못하다",
        "language": "ko",
        "shortMeaning": "そうではいられない、そうできない",
        "meaning": "そうではいられない、そうできない"
      },
      {
        "surface": "못해",
        "base": "못해",
        "language": "ko",
        "shortMeaning": "できない",
        "meaning": "できない"
      }
    ]
  },
  "넌 잠들지 못하지 쉽게": {
    "japanese": "あなたはなかなか眠れない。",
    "literalJapanese": "あなたは眠れない、簡単には。",
    "sentenceExplanation": "会いたい気持ちや落ち着かない感情で、簡単に眠れない夜。 恋の前のざわめき。",
    "nuance": "会いたい気持ちや落ち着かない感情で、簡単に眠れない夜。 恋の前のざわめき。",
    "tokens": [
      {
        "surface": "넌",
        "base": "넌",
        "language": "ko",
        "shortMeaning": "너는 の縮約",
        "meaning": "너는 の縮約 / あなたは"
      },
      {
        "surface": "잠들다",
        "base": "잠들다",
        "language": "ko",
        "shortMeaning": "眠りにつく",
        "meaning": "眠りにつく"
      },
      {
        "surface": "잠들지 못하다",
        "base": "잠들지 못하다",
        "language": "ko",
        "shortMeaning": "眠れない",
        "meaning": "眠れない"
      },
      {
        "surface": "-지",
        "base": "-지",
        "language": "ko",
        "shortMeaning": "〜でしょ、〜だよね",
        "meaning": "〜でしょ、〜だよね"
      },
      {
        "surface": "쉽게",
        "base": "쉽게",
        "language": "ko",
        "shortMeaning": "簡単に、たやすく",
        "meaning": "簡単に、たやすく"
      }
    ]
  },
  "차가운 밤공기": {
    "japanese": "冷たい夜風。",
    "literalJapanese": "冷たい夜の空気。",
    "sentenceExplanation": "夜の冷たさが、心の寂しさや静けさを強めている。 恋しい人を思う夜の空気感。",
    "nuance": "夜の冷たさが、心の寂しさや静けさを強めている。 恋しい人を思う夜の空気感。",
    "tokens": [
      {
        "surface": "차갑다",
        "base": "차갑다",
        "language": "ko",
        "shortMeaning": "冷たい",
        "meaning": "冷たい"
      },
      {
        "surface": "차가운",
        "base": "차가운",
        "language": "ko",
        "shortMeaning": "冷たい〜",
        "meaning": "冷たい〜"
      },
      {
        "surface": "밤",
        "base": "밤",
        "language": "ko",
        "shortMeaning": "夜",
        "meaning": "夜"
      },
      {
        "surface": "공기",
        "base": "공기",
        "language": "ko",
        "shortMeaning": "空気",
        "meaning": "空気"
      },
      {
        "surface": "밤공기",
        "base": "밤공기",
        "language": "ko",
        "shortMeaning": "夜の空気",
        "meaning": "夜の空気"
      }
    ]
  },
  "창을 열어둔 채": {
    "japanese": "窓を開けたまま。",
    "literalJapanese": "窓を開けておいたまま。",
    "sentenceExplanation": "眠れない夜に窓を開けて、冷たい空気を感じながら誰かを思っている場面。 静かな映画のワンシーンのような描写。",
    "nuance": "眠れない夜に窓を開けて、冷たい空気を感じながら誰かを思っている場面。 静かな映画のワンシーンのような描写。",
    "tokens": [
      {
        "surface": "창",
        "base": "창",
        "language": "ko",
        "shortMeaning": "窓",
        "meaning": "窓"
      },
      {
        "surface": "-을",
        "base": "-을",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "열다",
        "base": "열다",
        "language": "ko",
        "shortMeaning": "開ける",
        "meaning": "開ける"
      },
      {
        "surface": "열어두다",
        "base": "열어두다",
        "language": "ko",
        "shortMeaning": "開けておく",
        "meaning": "開けておく"
      },
      {
        "surface": "열어둔",
        "base": "열어둔",
        "language": "ko",
        "shortMeaning": "開けておいた〜",
        "meaning": "開けておいた〜"
      },
      {
        "surface": "채",
        "base": "채",
        "language": "ko",
        "shortMeaning": "〜したまま",
        "meaning": "〜したまま"
      }
    ]
  },
  "턱을 괴며 말해": {
    "japanese": "頬づえをつきながら言う。",
    "literalJapanese": "あごを支えながら言う。",
    "sentenceExplanation": "考えごとをしている、ぼんやり誰かを思っている姿。 恋しさがある静かな動作。",
    "nuance": "考えごとをしている、ぼんやり誰かを思っている姿。 恋しさがある静かな動作。",
    "tokens": [
      {
        "surface": "턱",
        "base": "턱",
        "language": "ko",
        "shortMeaning": "あご",
        "meaning": "あご"
      },
      {
        "surface": "괴다",
        "base": "괴다",
        "language": "ko",
        "shortMeaning": "支える",
        "meaning": "支える"
      },
      {
        "surface": "턱을 괴다",
        "base": "턱을 괴다",
        "language": "ko",
        "shortMeaning": "頬づえをつく、あごを手で支える",
        "meaning": "頬づえをつく、あごを手で支える"
      },
      {
        "surface": "괴며",
        "base": "괴며",
        "language": "ko",
        "shortMeaning": "支えながら",
        "meaning": "支えながら / -며 = 〜しながら"
      },
      {
        "surface": "말하다",
        "base": "말하다",
        "language": "ko",
        "shortMeaning": "言う",
        "meaning": "言う"
      },
      {
        "surface": "말해",
        "base": "말해",
        "language": "ko",
        "shortMeaning": "言う",
        "meaning": "言う"
      }
    ]
  },
  "“한 번 더 보고 싶어”": {
    "japanese": "「もう一度会いたい」",
    "literalJapanese": "「もう一度見たい」",
    "sentenceExplanation": "この一言が曲全体の始まり。 たった一言なのに、相手の心や語り手の世界を大きく動かす。",
    "nuance": "この一言が曲全体の始まり。 たった一言なのに、相手の心や語り手の世界を大きく動かす。",
    "tokens": [
      {
        "surface": "한 번",
        "base": "한 번",
        "language": "ko",
        "shortMeaning": "一度",
        "meaning": "一度"
      },
      {
        "surface": "더",
        "base": "더",
        "language": "ko",
        "shortMeaning": "もっと、もう一度",
        "meaning": "もっと、もう一度"
      },
      {
        "surface": "보다",
        "base": "보다",
        "language": "ko",
        "shortMeaning": "見る、会う",
        "meaning": "見る、会う"
      },
      {
        "surface": "보고 싶다",
        "base": "보고 싶다",
        "language": "ko",
        "shortMeaning": "会いたい、見たい",
        "meaning": "会いたい、見たい"
      }
    ]
  },
  "참 이상하지": {
    "japanese": "本当に不思議だよね。",
    "literalJapanese": "本当に不思議だよね。",
    "sentenceExplanation": "理屈では説明できない恋の力。 相手の一言で世界が変わることへの驚き。",
    "nuance": "理屈では説明できない恋の力。 相手の一言で世界が変わることへの驚き。",
    "tokens": [
      {
        "surface": "참",
        "base": "참",
        "language": "ko",
        "shortMeaning": "本当に、とても",
        "meaning": "本当に、とても"
      },
      {
        "surface": "이상하다",
        "base": "이상하다",
        "language": "ko",
        "shortMeaning": "不思議だ、変だ",
        "meaning": "不思議だ、変だ"
      },
      {
        "surface": "이상하지",
        "base": "이상하지",
        "language": "ko",
        "shortMeaning": "不思議だよね",
        "meaning": "不思議だよね"
      }
    ]
  },
  "네 한마디면 난 초능력이 생겨": {
    "japanese": "あなたの一言だけで、私は何でもできる気がする。",
    "literalJapanese": "あなたの一言なら、私は超能力が生まれる。",
    "sentenceExplanation": "恋の相手の言葉が、普通ではない力をくれる。 実際の超能力ではなく、心が強くなる比喩。",
    "nuance": "恋の相手の言葉が、普通ではない力をくれる。 実際の超能力ではなく、心が強くなる比喩。",
    "tokens": [
      {
        "surface": "네",
        "base": "네",
        "language": "ko",
        "shortMeaning": "あなたの",
        "meaning": "あなたの"
      },
      {
        "surface": "한마디",
        "base": "한마디",
        "language": "ko",
        "shortMeaning": "一言",
        "meaning": "一言 / 한 = 一つの / 마디 = 言葉の一区切り"
      },
      {
        "surface": "-면",
        "base": "-면",
        "language": "ko",
        "shortMeaning": "〜なら、〜すれば",
        "meaning": "〜なら、〜すれば"
      },
      {
        "surface": "난",
        "base": "난",
        "language": "ko",
        "shortMeaning": "나는",
        "meaning": "나는 / 私は"
      },
      {
        "surface": "초능력",
        "base": "초능력",
        "language": "ko",
        "shortMeaning": "超能力",
        "meaning": "超能力 / 초 = 超 / 능력 = 能力"
      },
      {
        "surface": "생기다",
        "base": "생기다",
        "language": "ko",
        "shortMeaning": "生まれる、できる",
        "meaning": "生まれる、できる"
      },
      {
        "surface": "생겨",
        "base": "생겨",
        "language": "ko",
        "shortMeaning": "生まれる",
        "meaning": "生まれる"
      }
    ]
  },
  "까맣던 세상이 무지개 색깔로 하늘을 채우던 날": {
    "japanese": "真っ暗だった世界が、虹色で空いっぱいに染まったあの日。",
    "literalJapanese": "真っ黒だった世界が、虹色で空を満たした日。",
    "sentenceExplanation": "相手との出会いや一言によって、暗かった世界に色が戻る。 かなり重要な表現。 「暗闇 → 虹色」の変化が、恋による心の変化を表している。",
    "nuance": "相手との出会いや一言によって、暗かった世界に色が戻る。 かなり重要な表現。 「暗闇 → 虹色」の変化が、恋による心の変化を表している。",
    "tokens": [
      {
        "surface": "까맣다",
        "base": "까맣다",
        "language": "ko",
        "shortMeaning": "真っ黒だ",
        "meaning": "真っ黒だ"
      },
      {
        "surface": "까맣던",
        "base": "까맣던",
        "language": "ko",
        "shortMeaning": "真っ黒だった〜",
        "meaning": "真っ黒だった〜 / -던 = 過去に〜だった"
      },
      {
        "surface": "세상",
        "base": "세상",
        "language": "ko",
        "shortMeaning": "世界",
        "meaning": "世界"
      },
      {
        "surface": "무지개",
        "base": "무지개",
        "language": "ko",
        "shortMeaning": "虹",
        "meaning": "虹"
      },
      {
        "surface": "색깔",
        "base": "색깔",
        "language": "ko",
        "shortMeaning": "色",
        "meaning": "色"
      },
      {
        "surface": "무지개 색깔",
        "base": "무지개 색깔",
        "language": "ko",
        "shortMeaning": "虹色",
        "meaning": "虹色"
      },
      {
        "surface": "하늘",
        "base": "하늘",
        "language": "ko",
        "shortMeaning": "空",
        "meaning": "空"
      },
      {
        "surface": "-을",
        "base": "-을",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "채우다",
        "base": "채우다",
        "language": "ko",
        "shortMeaning": "満たす",
        "meaning": "満たす"
      },
      {
        "surface": "채우던",
        "base": "채우던",
        "language": "ko",
        "shortMeaning": "満たしていた〜",
        "meaning": "満たしていた〜"
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
  "아이같이 뛰며 웃던 너": {
    "japanese": "子どもみたいに飛び跳ねて笑っていたあなた。",
    "literalJapanese": "子どものように跳ねながら笑っていたあなた。",
    "sentenceExplanation": "純粋で無邪気な相手の姿。 この姿が、語り手にとって忘れられない光景になっている。",
    "nuance": "純粋で無邪気な相手の姿。 この姿が、語り手にとって忘れられない光景になっている。",
    "tokens": [
      {
        "surface": "아이",
        "base": "아이",
        "language": "ko",
        "shortMeaning": "子ども",
        "meaning": "子ども"
      },
      {
        "surface": "-같이",
        "base": "-같이",
        "language": "ko",
        "shortMeaning": "〜のように",
        "meaning": "〜のように"
      },
      {
        "surface": "아이같이",
        "base": "아이같이",
        "language": "ko",
        "shortMeaning": "子どものように",
        "meaning": "子どものように"
      },
      {
        "surface": "뛰다",
        "base": "뛰다",
        "language": "ko",
        "shortMeaning": "走る、跳ねる",
        "meaning": "走る、跳ねる"
      },
      {
        "surface": "뛰며",
        "base": "뛰며",
        "language": "ko",
        "shortMeaning": "跳ねながら",
        "meaning": "跳ねながら"
      },
      {
        "surface": "웃다",
        "base": "웃다",
        "language": "ko",
        "shortMeaning": "笑う",
        "meaning": "笑う"
      },
      {
        "surface": "웃던",
        "base": "웃던",
        "language": "ko",
        "shortMeaning": "笑っていた〜",
        "meaning": "笑っていた〜"
      },
      {
        "surface": "너",
        "base": "너",
        "language": "ko",
        "shortMeaning": "あなた",
        "meaning": "あなた"
      }
    ]
  },
  "I keep on holding": {
    "japanese": "私はずっと抱きしめている。",
    "literalJapanese": "私は持ち続けている。",
    "sentenceExplanation": "相手そのものを抱きしめるだけでなく、 その記憶・感情・瞬間を心の中で持ち続けるという意味。",
    "nuance": "相手そのものを抱きしめるだけでなく、 その記憶・感情・瞬間を心の中で持ち続けるという意味。",
    "tokens": [
      {
        "surface": "keep on -ing",
        "base": "keep on -ing",
        "language": "en",
        "shortMeaning": "〜し続ける",
        "meaning": "〜し続ける"
      },
      {
        "surface": "holding",
        "base": "holding",
        "language": "en",
        "shortMeaning": "持つ、抱きしめる、保つ",
        "meaning": "持つ、抱きしめる、保つ"
      }
    ]
  },
  "내 맘을 다 몰라줘도 난": {
    "japanese": "私の気持ちを全部分かってくれなくても、私は。",
    "literalJapanese": "私の心を全部分かってくれなくても、私は。",
    "sentenceExplanation": "相手が自分の愛を完全に理解していなくても、それでも愛し続ける。 一方的な切なさも少しある。",
    "nuance": "相手が自分の愛を完全に理解していなくても、それでも愛し続ける。 一方的な切なさも少しある。",
    "tokens": [
      {
        "surface": "내",
        "base": "내",
        "language": "ko",
        "shortMeaning": "私の",
        "meaning": "私の"
      },
      {
        "surface": "맘",
        "base": "맘",
        "language": "ko",
        "shortMeaning": "마음 の縮約",
        "meaning": "마음 の縮約 / 心、気持ち"
      },
      {
        "surface": "-을",
        "base": "-을",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "다",
        "base": "다",
        "language": "ko",
        "shortMeaning": "全部",
        "meaning": "全部"
      },
      {
        "surface": "모르다",
        "base": "모르다",
        "language": "ko",
        "shortMeaning": "知らない、分からない",
        "meaning": "知らない、分からない"
      },
      {
        "surface": "몰라주다",
        "base": "몰라주다",
        "language": "ko",
        "shortMeaning": "分かってくれない",
        "meaning": "分かってくれない"
      },
      {
        "surface": "몰라줘도",
        "base": "몰라줘도",
        "language": "ko",
        "shortMeaning": "分かってくれなくても",
        "meaning": "分かってくれなくても"
      },
      {
        "surface": "난",
        "base": "난",
        "language": "ko",
        "shortMeaning": "私は",
        "meaning": "私は"
      }
    ]
  },
  "Forever and ever and ever": {
    "japanese": "いつまでも、ずっと。",
    "literalJapanese": "永遠に、永遠に、永遠に。",
    "sentenceExplanation": "強い永続性。 「永遠なんて信じていなかった」語り手が、相手によって永遠を信じるようになる流れ。",
    "nuance": "強い永続性。 「永遠なんて信じていなかった」語り手が、相手によって永遠を信じるようになる流れ。",
    "tokens": [
      {
        "surface": "forever",
        "base": "forever",
        "language": "en",
        "shortMeaning": "永遠に",
        "meaning": "永遠に"
      },
      {
        "surface": "and ever",
        "base": "and ever",
        "language": "en",
        "shortMeaning": "ずっと、いつまでも",
        "meaning": "ずっと、いつまでも"
      }
    ]
  },
  "절대 시들지 않을 넌 나의 꽃잎": {
    "japanese": "決して枯れないあなたは、私の花びら。",
    "literalJapanese": "絶対にしおれないあなたは、私の花びら。",
    "sentenceExplanation": "普通の花びらはいつか枯れる。 でも相手の存在や思い出は枯れない。 “꽃잎” は繊細さ、美しさ、記憶の象徴。",
    "nuance": "普通の花びらはいつか枯れる。 でも相手の存在や思い出は枯れない。 “꽃잎” は繊細さ、美しさ、記憶の象徴。",
    "tokens": [
      {
        "surface": "절대",
        "base": "절대",
        "language": "ko",
        "shortMeaning": "絶対に",
        "meaning": "絶対に"
      },
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
        "shortMeaning": "しおれない、枯れない",
        "meaning": "しおれない、枯れない"
      },
      {
        "surface": "시들지 않을",
        "base": "시들지 않을",
        "language": "ko",
        "shortMeaning": "しおれない〜",
        "meaning": "しおれない〜"
      },
      {
        "surface": "넌",
        "base": "넌",
        "language": "ko",
        "shortMeaning": "너는",
        "meaning": "너는 / あなたは"
      },
      {
        "surface": "나의",
        "base": "나의",
        "language": "ko",
        "shortMeaning": "私の",
        "meaning": "私の"
      },
      {
        "surface": "꽃잎",
        "base": "꽃잎",
        "language": "ko",
        "shortMeaning": "花びら",
        "meaning": "花びら / 꽃 = 花 / 잎 = 葉、花びら"
      }
    ]
  },
  "Fireworks ohhh": {
    "japanese": "花火のように。",
    "literalJapanese": "花火。",
    "sentenceExplanation": "暗闇の中で一瞬強く輝くもの。 恋の高揚感、忘れられない瞬間、二人だけの輝きを表している。",
    "nuance": "暗闇の中で一瞬強く輝くもの。 恋の高揚感、忘れられない瞬間、二人だけの輝きを表している。",
    "tokens": [
      {
        "surface": "fireworks",
        "base": "fireworks",
        "language": "en",
        "shortMeaning": "花火",
        "meaning": "花火"
      }
    ]
  },
  "You and I were shining in the dark": {
    "japanese": "あなたと私は、暗闇の中で輝いていた。",
    "literalJapanese": "あなたと私は暗闇の中で輝いていた。",
    "sentenceExplanation": "世界が暗くても、二人だけは光っていた。 Fireworks の中心イメージ。",
    "nuance": "世界が暗くても、二人だけは光っていた。 Fireworks の中心イメージ。",
    "tokens": [
      {
        "surface": "You and I",
        "base": "You and I",
        "language": "en",
        "shortMeaning": "あなたと私",
        "meaning": "あなたと私"
      },
      {
        "surface": "were shining",
        "base": "were shining",
        "language": "en",
        "shortMeaning": "輝いていた",
        "meaning": "輝いていた"
      },
      {
        "surface": "in the dark",
        "base": "in the dark",
        "language": "en",
        "shortMeaning": "暗闇の中で",
        "meaning": "暗闇の中で"
      }
    ]
  },
  "펑 하고 터질 때 봤지": {
    "japanese": "花火がパッと弾けた瞬間、見たよね。",
    "literalJapanese": "パンと弾けた時、見たよね。",
    "sentenceExplanation": "花火が開く一瞬。 二人の記憶の中で特別な瞬間として残っている。",
    "nuance": "花火が開く一瞬。 二人の記憶の中で特別な瞬間として残っている。",
    "tokens": [
      {
        "surface": "펑",
        "base": "펑",
        "language": "ko",
        "shortMeaning": "パン、ドン",
        "meaning": "パン、ドン",
        "explanation": "爆発・破裂する音。"
      },
      {
        "surface": "-하고",
        "base": "-하고",
        "language": "ko",
        "shortMeaning": "〜と、〜して",
        "meaning": "〜と、〜して"
      },
      {
        "surface": "터지다",
        "base": "터지다",
        "language": "ko",
        "shortMeaning": "爆発する、弾ける",
        "meaning": "爆発する、弾ける"
      },
      {
        "surface": "터질 때",
        "base": "터질 때",
        "language": "ko",
        "shortMeaning": "弾ける時",
        "meaning": "弾ける時"
      },
      {
        "surface": "보다",
        "base": "보다",
        "language": "ko",
        "shortMeaning": "見る",
        "meaning": "見る"
      },
      {
        "surface": "봤지",
        "base": "봤지",
        "language": "ko",
        "shortMeaning": "見たよね、見たでしょ",
        "meaning": "見たよね、見たでしょ"
      }
    ]
  },
  "너는 하늘, 나는 너를": {
    "japanese": "あなたは空で、私はそのあなたを見つめていた。",
    "literalJapanese": "あなたは空、私はあなたを。",
    "sentenceExplanation": "文が省略されていて詩的。 相手は花火が咲く空そのもののような存在。 語り手はその空＝相手を見つめていた。",
    "nuance": "文が省略されていて詩的。 相手は花火が咲く空そのもののような存在。 語り手はその空＝相手を見つめていた。",
    "tokens": [
      {
        "surface": "너는",
        "base": "너는",
        "language": "ko",
        "shortMeaning": "あなたは",
        "meaning": "あなたは"
      },
      {
        "surface": "하늘",
        "base": "하늘",
        "language": "ko",
        "shortMeaning": "空",
        "meaning": "空"
      },
      {
        "surface": "나는",
        "base": "나는",
        "language": "ko",
        "shortMeaning": "私は",
        "meaning": "私は"
      },
      {
        "surface": "너를",
        "base": "너를",
        "language": "ko",
        "shortMeaning": "あなたを",
        "meaning": "あなたを"
      }
    ]
  },
  "아직도 잊을 수 없지": {
    "japanese": "今でも忘れられない。",
    "literalJapanese": "今でも忘れられないよね。",
    "sentenceExplanation": "花火の瞬間、初めて手をつないだ日が、今も鮮明に残っている。",
    "nuance": "花火の瞬間、初めて手をつないだ日が、今も鮮明に残っている。",
    "tokens": [
      {
        "surface": "아직도",
        "base": "아직도",
        "language": "ko",
        "shortMeaning": "今でも、まだ",
        "meaning": "今でも、まだ"
      },
      {
        "surface": "잊다",
        "base": "잊다",
        "language": "ko",
        "shortMeaning": "忘れる",
        "meaning": "忘れる"
      },
      {
        "surface": "잊을 수 없다",
        "base": "잊을 수 없다",
        "language": "ko",
        "shortMeaning": "忘れることができない",
        "meaning": "忘れることができない"
      },
      {
        "surface": "없지",
        "base": "없지",
        "language": "ko",
        "shortMeaning": "できないよね、できない",
        "meaning": "できないよね、できない"
      }
    ]
  },
  "처음 손을 잡던 날은": {
    "japanese": "初めて手をつないだあの日は。",
    "literalJapanese": "初めて手を握った日は。",
    "sentenceExplanation": "恋の記憶の中でも特に大切な場面。 花火と重なる、忘れられない初めての瞬間。",
    "nuance": "恋の記憶の中でも特に大切な場面。 花火と重なる、忘れられない初めての瞬間。",
    "tokens": [
      {
        "surface": "처음",
        "base": "처음",
        "language": "ko",
        "shortMeaning": "初めて",
        "meaning": "初めて"
      },
      {
        "surface": "손",
        "base": "손",
        "language": "ko",
        "shortMeaning": "手",
        "meaning": "手"
      },
      {
        "surface": "-을",
        "base": "-을",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "잡다",
        "base": "잡다",
        "language": "ko",
        "shortMeaning": "握る、つなぐ",
        "meaning": "握る、つなぐ"
      },
      {
        "surface": "잡던",
        "base": "잡던",
        "language": "ko",
        "shortMeaning": "握っていた〜、つないだ〜",
        "meaning": "握っていた〜、つないだ〜"
      },
      {
        "surface": "날",
        "base": "날",
        "language": "ko",
        "shortMeaning": "日",
        "meaning": "日"
      },
      {
        "surface": "-은",
        "base": "-은",
        "language": "ko",
        "shortMeaning": "〜は",
        "meaning": "〜は"
      }
    ]
  },
  "솔직히 나": {
    "japanese": "正直、私は。",
    "literalJapanese": "正直、私は。",
    "sentenceExplanation": "ここから本音が出る。 語り手が以前は永遠の愛を信じていなかったことを告白する。",
    "nuance": "ここから本音が出る。 語り手が以前は永遠の愛を信じていなかったことを告白する。",
    "tokens": [
      {
        "surface": "솔직히",
        "base": "솔직히",
        "language": "ko",
        "shortMeaning": "正直に",
        "meaning": "正直に"
      },
      {
        "surface": "나",
        "base": "나",
        "language": "ko",
        "shortMeaning": "私",
        "meaning": "私"
      }
    ]
  },
  "I don't buy it guys": {
    "japanese": "そんなの信じていなかった。",
    "literalJapanese": "私はそれを信じない、みんな。",
    "sentenceExplanation": "「永遠の愛なんて嘘でしょ」と思っていた感じ。 口語的で少し軽い言い方。",
    "nuance": "「永遠の愛なんて嘘でしょ」と思っていた感じ。 口語的で少し軽い言い方。",
    "tokens": [
      {
        "surface": "I don't buy it",
        "base": "I don't buy it",
        "language": "en",
        "shortMeaning": "それを信じない、納得しない",
        "meaning": "それを信じない、納得しない"
      },
      {
        "surface": "guys",
        "base": "guys",
        "language": "en",
        "shortMeaning": "みんな",
        "meaning": "みんな"
      }
    ]
  },
  "그 영원한 사랑이란 거": {
    "japanese": "「永遠の愛」なんてものを。",
    "literalJapanese": "その永遠の愛というもの。",
    "sentenceExplanation": "抽象的で信じにくかった概念。 しかし次で、相手を見た瞬間に信じるようになる。",
    "nuance": "抽象的で信じにくかった概念。 しかし次で、相手を見た瞬間に信じるようになる。",
    "tokens": [
      {
        "surface": "그",
        "base": "그",
        "language": "ko",
        "shortMeaning": "その",
        "meaning": "その"
      },
      {
        "surface": "영원하다",
        "base": "영원하다",
        "language": "ko",
        "shortMeaning": "永遠だ",
        "meaning": "永遠だ"
      },
      {
        "surface": "영원한",
        "base": "영원한",
        "language": "ko",
        "shortMeaning": "永遠の〜",
        "meaning": "永遠の〜"
      },
      {
        "surface": "사랑",
        "base": "사랑",
        "language": "ko",
        "shortMeaning": "愛",
        "meaning": "愛"
      },
      {
        "surface": "-이란 거",
        "base": "-이란 거",
        "language": "ko",
        "shortMeaning": "〜というもの",
        "meaning": "〜というもの"
      }
    ]
  },
  "널 본 순간 완전히 믿게 됐어": {
    "japanese": "でもあなたを見た瞬間、完全に信じるようになった。",
    "literalJapanese": "あなたを見た瞬間、完全に信じるようになった。",
    "sentenceExplanation": "この曲の核心の一つ。 相手の存在が、語り手の価値観を変えた。 永遠を信じなかった人が、永遠を信じるようになった。",
    "nuance": "この曲の核心の一つ。 相手の存在が、語り手の価値観を変えた。 永遠を信じなかった人が、永遠を信じるようになった。",
    "tokens": [
      {
        "surface": "널",
        "base": "널",
        "language": "ko",
        "shortMeaning": "너를",
        "meaning": "너를 / あなたを"
      },
      {
        "surface": "보다",
        "base": "보다",
        "language": "ko",
        "shortMeaning": "見る",
        "meaning": "見る"
      },
      {
        "surface": "본",
        "base": "본",
        "language": "ko",
        "shortMeaning": "見た〜",
        "meaning": "見た〜"
      },
      {
        "surface": "순간",
        "base": "순간",
        "language": "ko",
        "shortMeaning": "瞬間",
        "meaning": "瞬間"
      },
      {
        "surface": "완전히",
        "base": "완전히",
        "language": "ko",
        "shortMeaning": "完全に",
        "meaning": "完全に"
      },
      {
        "surface": "믿다",
        "base": "믿다",
        "language": "ko",
        "shortMeaning": "信じる",
        "meaning": "信じる"
      },
      {
        "surface": "믿게 되다",
        "base": "믿게 되다",
        "language": "ko",
        "shortMeaning": "信じるようになる",
        "meaning": "信じるようになる"
      },
      {
        "surface": "됐어",
        "base": "됐어",
        "language": "ko",
        "shortMeaning": "なった",
        "meaning": "なった"
      }
    ]
  },
  "네 한마디면 난 뭐든 할 수 있어": {
    "japanese": "あなたの一言があれば、私は何でもできる気がする。",
    "literalJapanese": "あなたの一言なら、私は何でもできる。",
    "sentenceExplanation": "最初の「초능력이 생겨」と近い。 相手の言葉が、語り手に力を与える。",
    "nuance": "最初の「초능력이 생겨」と近い。 相手の言葉が、語り手に力を与える。",
    "tokens": [
      {
        "surface": "네",
        "base": "네",
        "language": "ko",
        "shortMeaning": "あなたの",
        "meaning": "あなたの"
      },
      {
        "surface": "한마디",
        "base": "한마디",
        "language": "ko",
        "shortMeaning": "一言",
        "meaning": "一言"
      },
      {
        "surface": "-면",
        "base": "-면",
        "language": "ko",
        "shortMeaning": "〜なら",
        "meaning": "〜なら"
      },
      {
        "surface": "난",
        "base": "난",
        "language": "ko",
        "shortMeaning": "私は",
        "meaning": "私は"
      },
      {
        "surface": "뭐든",
        "base": "뭐든",
        "language": "ko",
        "shortMeaning": "何でも",
        "meaning": "何でも"
      },
      {
        "surface": "하다",
        "base": "하다",
        "language": "ko",
        "shortMeaning": "する",
        "meaning": "する"
      },
      {
        "surface": "할 수 있다",
        "base": "할 수 있다",
        "language": "ko",
        "shortMeaning": "できる",
        "meaning": "できる"
      }
    ]
  },
  "동그란 보름달 조그만 별들로 방 안을 채우던 날": {
    "japanese": "丸い満月と小さな星たちで、部屋の中まで満たされたあの日。",
    "literalJapanese": "丸い満月、小さな星たちで部屋の中を満たした日。",
    "sentenceExplanation": "外の空だけでなく、部屋の中まで月や星で満たされるような幻想的な場面。 相手と過ごした時間が、普通の部屋を特別な宇宙のように変えている。",
    "nuance": "外の空だけでなく、部屋の中まで月や星で満たされるような幻想的な場面。 相手と過ごした時間が、普通の部屋を特別な宇宙のように変えている。",
    "tokens": [
      {
        "surface": "동그랗다",
        "base": "동그랗다",
        "language": "ko",
        "shortMeaning": "丸い",
        "meaning": "丸い"
      },
      {
        "surface": "동그란",
        "base": "동그란",
        "language": "ko",
        "shortMeaning": "丸い〜",
        "meaning": "丸い〜"
      },
      {
        "surface": "보름달",
        "base": "보름달",
        "language": "ko",
        "shortMeaning": "満月",
        "meaning": "満月 / 보름 = 陰暦の15日ごろ / 달 = 月"
      },
      {
        "surface": "조그맣다",
        "base": "조그맣다",
        "language": "ko",
        "shortMeaning": "小さい",
        "meaning": "小さい"
      },
      {
        "surface": "조그만",
        "base": "조그만",
        "language": "ko",
        "shortMeaning": "小さな〜",
        "meaning": "小さな〜"
      },
      {
        "surface": "별들",
        "base": "별들",
        "language": "ko",
        "shortMeaning": "星たち",
        "meaning": "星たち"
      },
      {
        "surface": "-로",
        "base": "-로",
        "language": "ko",
        "shortMeaning": "〜で",
        "meaning": "〜で"
      },
      {
        "surface": "방 안",
        "base": "방 안",
        "language": "ko",
        "shortMeaning": "部屋の中",
        "meaning": "部屋の中"
      },
      {
        "surface": "채우다",
        "base": "채우다",
        "language": "ko",
        "shortMeaning": "満たす",
        "meaning": "満たす"
      },
      {
        "surface": "채우던 날",
        "base": "채우던 날",
        "language": "ko",
        "shortMeaning": "満たしていた日",
        "meaning": "満たしていた日"
      }
    ]
  },
  "Shining in the dark": {
    "japanese": "暗闇の中で輝いて。",
    "literalJapanese": "暗闇の中で輝いている。",
    "sentenceExplanation": "暗い世界の中でも輝く二人。 Fireworks と同じく、闇と光の対比が大事。",
    "nuance": "暗い世界の中でも輝く二人。 Fireworks と同じく、闇と光の対比が大事。",
    "tokens": [
      {
        "surface": "shining",
        "base": "shining",
        "language": "en",
        "shortMeaning": "輝いている",
        "meaning": "輝いている"
      },
      {
        "surface": "in the dark",
        "base": "in the dark",
        "language": "en",
        "shortMeaning": "暗闇の中で",
        "meaning": "暗闇の中で"
      }
    ]
  },
  "Yeah forever and ever and ever": {
    "japanese": "そう、いつまでも、ずっと。",
    "literalJapanese": "そう、永遠に、永遠に、永遠に。",
    "sentenceExplanation": "強い永続性。 「永遠なんて信じていなかった」語り手が、相手によって永遠を信じるようになる流れ。",
    "nuance": "強い永続性。 「永遠なんて信じていなかった」語り手が、相手によって永遠を信じるようになる流れ。",
    "tokens": [
      {
        "surface": "forever",
        "base": "forever",
        "language": "en",
        "shortMeaning": "永遠に",
        "meaning": "永遠に"
      },
      {
        "surface": "and ever",
        "base": "and ever",
        "language": "en",
        "shortMeaning": "ずっと、いつまでも",
        "meaning": "ずっと、いつまでも"
      }
    ]
  },
  "Caught in the moment, it's our time": {
    "japanese": "この瞬間に包まれている。今は私たちだけの時間。",
    "literalJapanese": "その瞬間に捕まっている、これは私たちの時間。",
    "sentenceExplanation": "時間が止まったように、その瞬間に入り込んでいる。 二人だけの特別な時間。",
    "nuance": "時間が止まったように、その瞬間に入り込んでいる。 二人だけの特別な時間。",
    "tokens": [
      {
        "surface": "caught in",
        "base": "caught in",
        "language": "en",
        "shortMeaning": "〜に捕まっている、包まれている",
        "meaning": "〜に捕まっている、包まれている"
      },
      {
        "surface": "the moment",
        "base": "the moment",
        "language": "en",
        "shortMeaning": "その瞬間",
        "meaning": "その瞬間"
      },
      {
        "surface": "our time",
        "base": "our time",
        "language": "en",
        "shortMeaning": "私たちの時間",
        "meaning": "私たちの時間"
      }
    ]
  },
  "오래도록 간직하고 파": {
    "japanese": "ずっと大切にしていたい。",
    "literalJapanese": "長く大切にしたい。",
    "sentenceExplanation": "その瞬間を記憶として心にしまっておきたい。 恋の記憶を守りたい気持ち。",
    "nuance": "その瞬間を記憶として心にしまっておきたい。 恋の記憶を守りたい気持ち。",
    "tokens": [
      {
        "surface": "오래도록",
        "base": "오래도록",
        "language": "ko",
        "shortMeaning": "長く、長い間、いつまでも",
        "meaning": "長く、長い間、いつまでも"
      },
      {
        "surface": "간직하다",
        "base": "간직하다",
        "language": "ko",
        "shortMeaning": "大切にしまっておく、心にしまう",
        "meaning": "大切にしまっておく、心にしまう"
      },
      {
        "surface": "간직하고 싶다",
        "base": "간직하고 싶다",
        "language": "ko",
        "shortMeaning": "大切にしたい",
        "meaning": "大切にしたい"
      },
      {
        "surface": "파",
        "base": "파",
        "language": "ko",
        "shortMeaning": "싶어 のくだけた歌詞的な省略",
        "meaning": "싶어 のくだけた歌詞的な省略"
      }
    ]
  },
  "(시간아 천천히 Baby)": {
    "japanese": "（時間よ、ゆっくり進んで、Baby）",
    "literalJapanese": "（時間よ、ゆっくり、Baby）",
    "sentenceExplanation": "幸せな瞬間が終わってほしくない。 時間そのものにお願いしている表現。",
    "nuance": "幸せな瞬間が終わってほしくない。 時間そのものにお願いしている表現。",
    "tokens": [
      {
        "surface": "시간",
        "base": "시간",
        "language": "ko",
        "shortMeaning": "時間",
        "meaning": "時間"
      },
      {
        "surface": "-아",
        "base": "-아",
        "language": "ko",
        "shortMeaning": "呼びかけ",
        "meaning": "呼びかけ / 시간아 / 時間よ"
      },
      {
        "surface": "천천히",
        "base": "천천히",
        "language": "ko",
        "shortMeaning": "ゆっくり",
        "meaning": "ゆっくり"
      }
    ]
  },
  "내 사랑을 몰라줘도 난": {
    "japanese": "私の愛に気づいてくれなくても、私は。",
    "literalJapanese": "私の愛を分かってくれなくても、私は。",
    "sentenceExplanation": "前半の「내 맘을 다 몰라줘도」と似ているが、ここでは「사랑」とはっきり言っている。 気持ちがさらに明確になっている。",
    "nuance": "前半の「내 맘을 다 몰라줘도」と似ているが、ここでは「사랑」とはっきり言っている。 気持ちがさらに明確になっている。",
    "tokens": [
      {
        "surface": "내",
        "base": "내",
        "language": "ko",
        "shortMeaning": "私の",
        "meaning": "私の"
      },
      {
        "surface": "사랑",
        "base": "사랑",
        "language": "ko",
        "shortMeaning": "愛",
        "meaning": "愛"
      },
      {
        "surface": "-을",
        "base": "-을",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "몰라주다",
        "base": "몰라주다",
        "language": "ko",
        "shortMeaning": "分かってくれない、気づいてくれない",
        "meaning": "分かってくれない、気づいてくれない"
      },
      {
        "surface": "몰라줘도",
        "base": "몰라줘도",
        "language": "ko",
        "shortMeaning": "分かってくれなくても",
        "meaning": "分かってくれなくても"
      },
      {
        "surface": "난",
        "base": "난",
        "language": "ko",
        "shortMeaning": "私は",
        "meaning": "私は"
      }
    ]
  },
  "매일 새로운 축제 넌 나의 꽃잎": {
    "japanese": "毎日が新しいお祭りみたい。あなたは私の花びら。",
    "literalJapanese": "毎日新しい祭り、あなたは私の花びら。",
    "sentenceExplanation": "相手がいることで、毎日が特別な祝祭になる。 花火・花びら・祭りがつながり、恋の華やかさを表している。",
    "nuance": "相手がいることで、毎日が特別な祝祭になる。 花火・花びら・祭りがつながり、恋の華やかさを表している。",
    "tokens": [
      {
        "surface": "매일",
        "base": "매일",
        "language": "ko",
        "shortMeaning": "毎日",
        "meaning": "毎日"
      },
      {
        "surface": "새롭다",
        "base": "새롭다",
        "language": "ko",
        "shortMeaning": "新しい",
        "meaning": "新しい"
      },
      {
        "surface": "새로운",
        "base": "새로운",
        "language": "ko",
        "shortMeaning": "新しい〜",
        "meaning": "新しい〜"
      },
      {
        "surface": "축제",
        "base": "축제",
        "language": "ko",
        "shortMeaning": "祭り、フェスティバル",
        "meaning": "祭り、フェスティバル"
      },
      {
        "surface": "넌",
        "base": "넌",
        "language": "ko",
        "shortMeaning": "あなたは",
        "meaning": "あなたは"
      },
      {
        "surface": "나의",
        "base": "나의",
        "language": "ko",
        "shortMeaning": "私の",
        "meaning": "私の"
      },
      {
        "surface": "꽃잎",
        "base": "꽃잎",
        "language": "ko",
        "shortMeaning": "花びら",
        "meaning": "花びら"
      }
    ]
  },
  "“언제까지 사랑할 거야?”": {
    "japanese": "「いつまで愛してくれるの？」",
    "literalJapanese": "「いつまで愛するつもりなの？」",
    "sentenceExplanation": "相手からの問いかけのようにも、語り手が想像する問いのようにも読める。 答えは次の “Forever and ever and ever!”。",
    "nuance": "相手からの問いかけのようにも、語り手が想像する問いのようにも読める。 答えは次の “Forever and ever and ever!”。",
    "tokens": [
      {
        "surface": "언제까지",
        "base": "언제까지",
        "language": "ko",
        "shortMeaning": "いつまで",
        "meaning": "いつまで"
      },
      {
        "surface": "사랑하다",
        "base": "사랑하다",
        "language": "ko",
        "shortMeaning": "愛する",
        "meaning": "愛する"
      },
      {
        "surface": "사랑할 거야?",
        "base": "사랑할 거야?",
        "language": "ko",
        "shortMeaning": "愛するつもりなの？",
        "meaning": "愛するつもりなの？"
      }
    ]
  },
  "Forever and ever and ever!": {
    "japanese": "いつまでも、永遠に！",
    "literalJapanese": "永遠に、永遠に、永遠に！",
    "sentenceExplanation": "強い永続性。 「永遠なんて信じていなかった」語り手が、相手によって永遠を信じるようになる流れ。",
    "nuance": "強い永続性。 「永遠なんて信じていなかった」語り手が、相手によって永遠を信じるようになる流れ。",
    "tokens": [
      {
        "surface": "forever",
        "base": "forever",
        "language": "en",
        "shortMeaning": "永遠に",
        "meaning": "永遠に"
      },
      {
        "surface": "and ever",
        "base": "and ever",
        "language": "en",
        "shortMeaning": "ずっと、いつまでも",
        "meaning": "ずっと、いつまでも"
      }
    ]
  }
};

const lyricsSequence: string[] = [
  "세상은 어둡고",
  "너무 고요한데",
  "네 마음은 그렇지 못해",
  "넌 잠들지 못하지 쉽게",
  "차가운 밤공기",
  "창을 열어둔 채",
  "턱을 괴며 말해",
  "“한 번 더 보고 싶어”",
  "참 이상하지",
  "네 한마디면 난 초능력이 생겨",
  "까맣던 세상이 무지개 색깔로 하늘을 채우던 날",
  "아이같이 뛰며 웃던 너",
  "I keep on holding",
  "내 맘을 다 몰라줘도 난",
  "Forever and ever and ever",
  "절대 시들지 않을 넌 나의 꽃잎",
  "Fireworks ohhh",
  "You and I were shining in the dark",
  "Forever and ever and ever",
  "펑 하고 터질 때 봤지",
  "너는 하늘, 나는 너를",
  "아직도 잊을 수 없지",
  "처음 손을 잡던 날은",
  "솔직히 나",
  "I don't buy it guys",
  "그 영원한 사랑이란 거",
  "널 본 순간 완전히 믿게 됐어",
  "참 이상하지",
  "네 한마디면 난 뭐든 할 수 있어",
  "동그란 보름달 조그만 별들로 방 안을 채우던 날",
  "아이같이 뛰며 웃던 너",
  "I keep on holding",
  "내 맘을 다 몰라줘도 난",
  "Forever and ever and ever",
  "절대 시들지 않을 넌 나의 꽃잎",
  "Fireworks ohhh",
  "You and I were shining in the dark",
  "Forever and ever and ever",
  "Shining in the dark",
  "Yeah forever and ever and ever",
  "Caught in the moment, it's our time",
  "오래도록 간직하고 파",
  "(시간아 천천히 Baby)",
  "내 사랑을 몰라줘도 난",
  "Forever and ever and ever",
  "매일 새로운 축제 넌 나의 꽃잎",
  "Fireworks ohhh",
  "“언제까지 사랑할 거야?”",
  "Forever and ever and ever!"
];

export const completeFireworksLines: LyricLine[] = lyricsSequence.map((korean, index) => {
  const template = lineTemplates[korean];

  return {
    id: `ive-fireworks-line-${index + 1}`,
    korean,
    japanese: template.japanese,
    literalJapanese: template.literalJapanese,
    sentenceExplanation: template.sentenceExplanation,
    ...(template.nuance ? { nuance: template.nuance } : {}),
    tokens: template.tokens.map((token, tokenIndex) => ({
      ...token,
      id: `ive-fireworks-line-${index + 1}-token-${tokenIndex + 1}`,
    })),
  };
});

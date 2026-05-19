import type { LyricLine, Token } from "../../types/song";

type TokenSeed = Omit<Token, "id">;
type LineTemplate = {
  japanese: string;
  literalJapanese: string;
  sentenceExplanation: string;
  tokens: TokenSeed[];
};

const lineTemplates: Record<string, LineTemplate> = {
  "Hey you": {
    "japanese": "ねえ、そこのあなた。",
    "literalJapanese": "ねえ、あなた。",
    "sentenceExplanation": "この行では「ねえ、そこのあなた。」と伝えている。",
    "tokens": [
      {
        "surface": "Hey you",
        "base": "Hey you",
        "language": "en",
        "shortMeaning": "ねえ、そこのあなた",
        "meaning": "ねえ、そこのあなた。"
      }
    ]
  },
  "뭘 보니? 내가 좀 Sexy Sexy 반했니": {
    "japanese": "何見てるの？ 私がセクシーすぎて惚れちゃった？",
    "literalJapanese": "何を見てるの？ 私がちょっとSexy Sexyで惚れた？",
    "sentenceExplanation": "相手の視線に気づいて、少し挑発的に言っている。 「私を見てるんでしょ？」という自信がある。 自分の魅力を分かったうえで、相手をからかっている。 強気で遊び心のある表現。",
    "tokens": [
      {
        "surface": "뭘",
        "base": "뭘",
        "language": "ko",
        "shortMeaning": "何を",
        "meaning": "무엇을 の縮約 / 何を",
        "explanation": "何を"
      },
      {
        "surface": "보다",
        "base": "보다",
        "language": "ko",
        "shortMeaning": "見る",
        "meaning": "見る"
      },
      {
        "surface": "보니?",
        "base": "보니?",
        "language": "ko",
        "shortMeaning": "見てるの？",
        "meaning": "見てるの？"
      },
      {
        "surface": "내가",
        "base": "내가",
        "language": "ko",
        "shortMeaning": "私が",
        "meaning": "私が"
      },
      {
        "surface": "좀",
        "base": "좀",
        "language": "ko",
        "shortMeaning": "ここでは謙遜ではなく、軽く自分を強調す…",
        "meaning": "ちょっと、かなり / ここでは謙遜ではなく、軽く自分を強調する感じ。",
        "explanation": "ここでは謙遜ではなく、軽く自分を強調する感じ。"
      },
      {
        "surface": "Sexy",
        "base": "Sexy",
        "language": "en",
        "shortMeaning": "セクシー",
        "meaning": "セクシー"
      },
      {
        "surface": "반하다",
        "base": "반하다",
        "language": "ko",
        "shortMeaning": "惚れる、心を奪われる",
        "meaning": "惚れる、心を奪われる"
      },
      {
        "surface": "반했니?",
        "base": "반했니?",
        "language": "ko",
        "shortMeaning": "惚れたの？",
        "meaning": "惚れたの？"
      }
    ]
  },
  "Ye you": {
    "japanese": "ねえ、あなた。",
    "literalJapanese": "Yeah、あなた。",
    "sentenceExplanation": "この行では「ねえ、あなた。」と伝えている。",
    "tokens": [
      {
        "surface": "Ye you",
        "base": "Ye you",
        "language": "en",
        "shortMeaning": "ねえ、あなた",
        "meaning": "ねえ、あなた。"
      }
    ]
  },
  "뭐 하니? 너도 내 Kiss Kiss 원하니": {
    "japanese": "何してるの？ あなたも私のキスが欲しいの？",
    "literalJapanese": "何してるの？ あなたも私のKiss Kissを望むの？",
    "sentenceExplanation": "相手に声をかけるような軽い表現。 前の “뭘 보니?” と合わせて、相手を挑発している。 かなり自信満々で、相手をからかうような表現。 恋愛というより、魅力を見せつける歌詞。",
    "tokens": [
      {
        "surface": "뭐",
        "base": "뭐",
        "language": "ko",
        "shortMeaning": "何",
        "meaning": "何"
      },
      {
        "surface": "하다",
        "base": "하다",
        "language": "ko",
        "shortMeaning": "する",
        "meaning": "する"
      },
      {
        "surface": "하니?",
        "base": "하니?",
        "language": "ko",
        "shortMeaning": "してるの？",
        "meaning": "してるの？"
      },
      {
        "surface": "너도",
        "base": "너도",
        "language": "ko",
        "shortMeaning": "-도 = 〜も",
        "meaning": "あなたも / 너 = あなた / -도 = 〜も",
        "explanation": "너 = あなた -도 = 〜も"
      },
      {
        "surface": "내",
        "base": "내",
        "language": "ko",
        "shortMeaning": "私の",
        "meaning": "私の"
      },
      {
        "surface": "원하다",
        "base": "원하다",
        "language": "ko",
        "shortMeaning": "望む、欲しがる",
        "meaning": "望む、欲しがる"
      },
      {
        "surface": "원하니?",
        "base": "원하니?",
        "language": "ko",
        "shortMeaning": "欲しいの？",
        "meaning": "欲しいの？"
      }
    ]
  },
  "월 화 수 목 금 토 일 미모가 쉬지를 않네": {
    "japanese": "月曜から日曜まで、私の美しさは休まない。",
    "literalJapanese": "月火水木金土日、美貌が休まないね。",
    "sentenceExplanation": "毎日ずっと綺麗、という誇張表現。 “쉬지를 않네” は「休むことがない」という強調。",
    "tokens": [
      {
        "surface": "월",
        "base": "월",
        "language": "ko",
        "shortMeaning": "月曜日",
        "meaning": "月曜日"
      },
      {
        "surface": "화",
        "base": "화",
        "language": "ko",
        "shortMeaning": "火曜日",
        "meaning": "火曜日"
      },
      {
        "surface": "수",
        "base": "수",
        "language": "ko",
        "shortMeaning": "水曜日",
        "meaning": "水曜日"
      },
      {
        "surface": "목",
        "base": "목",
        "language": "ko",
        "shortMeaning": "木曜日",
        "meaning": "木曜日"
      },
      {
        "surface": "금",
        "base": "금",
        "language": "ko",
        "shortMeaning": "金曜日",
        "meaning": "金曜日"
      },
      {
        "surface": "토",
        "base": "토",
        "language": "ko",
        "shortMeaning": "土曜日",
        "meaning": "土曜日"
      },
      {
        "surface": "일",
        "base": "일",
        "language": "ko",
        "shortMeaning": "日曜日",
        "meaning": "日曜日"
      },
      {
        "surface": "미모",
        "base": "미모",
        "language": "ko",
        "shortMeaning": "美貌、美しさ",
        "meaning": "美貌、美しさ"
      },
      {
        "surface": "쉬다",
        "base": "쉬다",
        "language": "ko",
        "shortMeaning": "休む",
        "meaning": "休む"
      },
      {
        "surface": "쉬지를 않다",
        "base": "쉬지를 않다",
        "language": "ko",
        "shortMeaning": "休みはしない",
        "meaning": "休みはしない"
      },
      {
        "surface": "않네",
        "base": "않네",
        "language": "ko",
        "shortMeaning": "しないね",
        "meaning": "しないね"
      }
    ]
  },
  "머리부터 발끝까지 눈부셔 빛이 나네": {
    "japanese": "頭からつま先まで眩しいくらい輝いている。",
    "literalJapanese": "頭からつま先まで眩しくて光が出るね。",
    "sentenceExplanation": "全身が完璧に輝いているという自信。 K-POPでよくある「빛이 나다」は、魅力や存在感がある時にも使う。",
    "tokens": [
      {
        "surface": "머리",
        "base": "머리",
        "language": "ko",
        "shortMeaning": "頭",
        "meaning": "頭"
      },
      {
        "surface": "-부터",
        "base": "-부터",
        "language": "ko",
        "shortMeaning": "〜から",
        "meaning": "〜から"
      },
      {
        "surface": "발끝",
        "base": "발끝",
        "language": "ko",
        "shortMeaning": "끝 = 先",
        "meaning": "つま先 / 발 = 足 / 끝 = 先",
        "explanation": "발 = 足 끝 = 先"
      },
      {
        "surface": "-까지",
        "base": "-까지",
        "language": "ko",
        "shortMeaning": "〜まで",
        "meaning": "〜まで"
      },
      {
        "surface": "눈부시다",
        "base": "눈부시다",
        "language": "ko",
        "shortMeaning": "まぶしい",
        "meaning": "まぶしい"
      },
      {
        "surface": "눈부셔",
        "base": "눈부셔",
        "language": "ko",
        "shortMeaning": "まぶしくて",
        "meaning": "まぶしくて"
      },
      {
        "surface": "빛",
        "base": "빛",
        "language": "ko",
        "shortMeaning": "光",
        "meaning": "光"
      },
      {
        "surface": "빛이 나다",
        "base": "빛이 나다",
        "language": "ko",
        "shortMeaning": "光が出る、輝く",
        "meaning": "光が出る、輝く"
      },
      {
        "surface": "나네",
        "base": "나네",
        "language": "ko",
        "shortMeaning": "出るね、出ているね",
        "meaning": "出るね、出ているね"
      }
    ]
  },
  "Oh 저기 언니야들 내 Fashion을 따라 하네": {
    "japanese": "ほら、あそこのお姉さんたちも私のファッションを真似してる。",
    "literalJapanese": "Oh、あそこのお姉さんたちが私のファッションを真似しているね。",
    "sentenceExplanation": "自分が流行の中心だという表現。 やや生意気で、かわいく挑発している。",
    "tokens": [
      {
        "surface": "저기",
        "base": "저기",
        "language": "ko",
        "shortMeaning": "あそこ、あの",
        "meaning": "あそこ、あの"
      },
      {
        "surface": "언니",
        "base": "언니",
        "language": "ko",
        "shortMeaning": "お姉さん",
        "meaning": "お姉さん"
      },
      {
        "surface": "언니야들",
        "base": "언니야들",
        "language": "ko",
        "shortMeaning": "“언니야들” は方言っぽさ・くだけた感…",
        "meaning": "お姉さんたち / “언니들” が標準的。 / “언니야들” は方言っぽさ・くだけた感じ・かわいさのある言い方。",
        "explanation": "“언니들” が標準的。 “언니야들” は方言っぽさ・くだけた感じ・かわいさのある言い方。"
      },
      {
        "surface": "내",
        "base": "내",
        "language": "ko",
        "shortMeaning": "私の",
        "meaning": "私の"
      },
      {
        "surface": "Fashion",
        "base": "Fashion",
        "language": "en",
        "shortMeaning": "ファッション",
        "meaning": "ファッション"
      },
      {
        "surface": "따라 하다",
        "base": "따라 하다",
        "language": "ko",
        "shortMeaning": "하다 = する",
        "meaning": "真似する / 따르다 = 従う、ついていく / 하다 = する",
        "explanation": "따르다 = 従う、ついていく 하다 = する"
      },
      {
        "surface": "따라 하네",
        "base": "따라 하네",
        "language": "ko",
        "shortMeaning": "真似しているね",
        "meaning": "真似しているね"
      }
    ]
  },
  "아름다운 여자의 하루는 다 아름답네": {
    "japanese": "美しい女の一日は、どこを切り取っても美しい。",
    "literalJapanese": "美しい女の一日は全部美しいね。",
    "sentenceExplanation": "朝から夜まで、何をしても美しいという自己肯定。 自分の日常そのものを肯定している。",
    "tokens": [
      {
        "surface": "아름답다",
        "base": "아름답다",
        "language": "ko",
        "shortMeaning": "美しい",
        "meaning": "美しい"
      },
      {
        "surface": "아름다운",
        "base": "아름다운",
        "language": "ko",
        "shortMeaning": "美しい〜",
        "meaning": "美しい〜"
      },
      {
        "surface": "여자",
        "base": "여자",
        "language": "ko",
        "shortMeaning": "女、女性",
        "meaning": "女、女性"
      },
      {
        "surface": "하루",
        "base": "하루",
        "language": "ko",
        "shortMeaning": "一日",
        "meaning": "一日"
      },
      {
        "surface": "다",
        "base": "다",
        "language": "ko",
        "shortMeaning": "全部、すべて",
        "meaning": "全部、すべて"
      },
      {
        "surface": "아름답네",
        "base": "아름답네",
        "language": "ko",
        "shortMeaning": "美しいね",
        "meaning": "美しいね"
      }
    ]
  },
  "이 Party에 준비된 Birthday cake": {
    "japanese": "このパーティーにはバースデーケーキが用意されている。",
    "literalJapanese": "このパーティーに用意されたバースデーケーキ。",
    "sentenceExplanation": "自分の存在を祝うパーティーのイメージ。 「生まれてきたことを祝う」流れにつながる。",
    "tokens": [
      {
        "surface": "이",
        "base": "이",
        "language": "ko",
        "shortMeaning": "この",
        "meaning": "この"
      },
      {
        "surface": "Party",
        "base": "Party",
        "language": "en",
        "shortMeaning": "パーティー",
        "meaning": "パーティー"
      },
      {
        "surface": "-에",
        "base": "-에",
        "language": "ko",
        "shortMeaning": "〜に",
        "meaning": "〜に"
      },
      {
        "surface": "준비되다",
        "base": "준비되다",
        "language": "ko",
        "shortMeaning": "準備される",
        "meaning": "準備される"
      },
      {
        "surface": "준비된",
        "base": "준비된",
        "language": "ko",
        "shortMeaning": "準備された〜",
        "meaning": "準備された〜"
      },
      {
        "surface": "Birthday cake",
        "base": "Birthday cake",
        "language": "en",
        "shortMeaning": "誕生日ケーキ",
        "meaning": "誕生日ケーキ"
      }
    ]
  },
  "태어나서 감사해 Every day": {
    "japanese": "生まれてきたことに毎日感謝している。",
    "literalJapanese": "生まれてきてありがとう、毎日。",
    "sentenceExplanation": "自分の存在そのものを祝う表現。 かなり強い自己肯定。",
    "tokens": [
      {
        "surface": "태어나다",
        "base": "태어나다",
        "language": "ko",
        "shortMeaning": "生まれる",
        "meaning": "生まれる"
      },
      {
        "surface": "태어나서",
        "base": "태어나서",
        "language": "ko",
        "shortMeaning": "生まれて、生まれてきて",
        "meaning": "生まれて、生まれてきて"
      },
      {
        "surface": "감사하다",
        "base": "감사하다",
        "language": "ko",
        "shortMeaning": "感謝する、ありがたい",
        "meaning": "感謝する、ありがたい"
      },
      {
        "surface": "감사해",
        "base": "감사해",
        "language": "ko",
        "shortMeaning": "感謝している、ありがたい",
        "meaning": "感謝している、ありがたい"
      },
      {
        "surface": "Every day",
        "base": "Every day",
        "language": "en",
        "shortMeaning": "毎日",
        "meaning": "毎日"
      }
    ]
  },
  "I don't need them": {
    "japanese": "誰かの評価なんていらない。",
    "literalJapanese": "私は彼らを必要としない。",
    "sentenceExplanation": "他人からの承認や評価を必要としない。 自分で自分を認めている。",
    "tokens": [
      {
        "surface": "I don't need",
        "base": "I don't need",
        "language": "en",
        "shortMeaning": "私は必要としない",
        "meaning": "私は必要としない"
      },
      {
        "surface": "them",
        "base": "them",
        "language": "en",
        "shortMeaning": "彼ら、それら",
        "meaning": "彼ら、それら"
      }
    ]
  },
  "그래 내가 봐도 난": {
    "japanese": "そう、自分で見ても私は。",
    "literalJapanese": "そう、私が見ても私は。",
    "sentenceExplanation": "他人がどう見るかではなく、自分で見ても魅力的だと認めている。 自分視点の自己肯定。",
    "tokens": [
      {
        "surface": "그래",
        "base": "그래",
        "language": "ko",
        "shortMeaning": "そう、うん",
        "meaning": "そう、うん"
      },
      {
        "surface": "내가",
        "base": "내가",
        "language": "ko",
        "shortMeaning": "私が",
        "meaning": "私が"
      },
      {
        "surface": "보다",
        "base": "보다",
        "language": "ko",
        "shortMeaning": "見る",
        "meaning": "見る"
      },
      {
        "surface": "봐도",
        "base": "봐도",
        "language": "ko",
        "shortMeaning": "-아/어도 = 〜しても",
        "meaning": "見ても / -아/어도 = 〜しても",
        "explanation": "-아/어도 = 〜しても"
      },
      {
        "surface": "난",
        "base": "난",
        "language": "ko",
        "shortMeaning": "私は",
        "meaning": "나는 / 私は",
        "explanation": "私は"
      }
    ]
  },
  "퀸카 I'm hot": {
    "japanese": "私はクイーン、最高にイケてる。",
    "literalJapanese": "クイーンカード、私はホット。",
    "sentenceExplanation": "自分を主役として堂々と名乗るサビの中心。",
    "tokens": [
      {
        "surface": "퀸카",
        "base": "퀸카",
        "language": "ko",
        "shortMeaning": "一番イケてる女の子、クイーン",
        "meaning": "一番イケてる女の子、クイーン"
      },
      {
        "surface": "hot",
        "base": "hot",
        "language": "en",
        "shortMeaning": "セクシー、魅力的、イケてる",
        "meaning": "セクシー、魅力的、イケてる"
      }
    ]
  },
  "My boob and booty is hot": {
    "japanese": "私の体も魅力的。",
    "literalJapanese": "私の胸とお尻はホット。",
    "sentenceExplanation": "文法的には “are hot” が自然だが、歌詞ではリズム重視。 自分の体を恥じるのではなく、堂々と肯定している表現。",
    "tokens": [
      {
        "surface": "boob",
        "base": "boob",
        "language": "en",
        "shortMeaning": "胸",
        "meaning": "胸"
      },
      {
        "surface": "booty",
        "base": "booty",
        "language": "en",
        "shortMeaning": "お尻",
        "meaning": "お尻"
      },
      {
        "surface": "hot",
        "base": "hot",
        "language": "en",
        "shortMeaning": "魅力的、セクシー",
        "meaning": "魅力的、セクシー"
      }
    ]
  },
  "Spotlight 날 봐": {
    "japanese": "スポットライトを浴びる私を見て。",
    "literalJapanese": "スポットライト、私を見て。",
    "sentenceExplanation": "自分が舞台の中心にいるイメージ。 見られることを恐れず、むしろ楽しんでいる。",
    "tokens": [
      {
        "surface": "Spotlight",
        "base": "Spotlight",
        "language": "en",
        "shortMeaning": "スポットライト",
        "meaning": "スポットライト"
      },
      {
        "surface": "날",
        "base": "날",
        "language": "ko",
        "shortMeaning": "私を",
        "meaning": "나를 の縮約 / 私を",
        "explanation": "私を"
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
  "I'm a star star star": {
    "japanese": "私はスターそのもの。",
    "literalJapanese": "私はスター、スター、スター。",
    "sentenceExplanation": "“Spotlight” とつながる。 自分は注目される存在だと宣言している。",
    "tokens": [
      {
        "surface": "star",
        "base": "star",
        "language": "en",
        "shortMeaning": "星、スター",
        "meaning": "星、スター"
      }
    ]
  },
  "퀸카 I'm the top": {
    "japanese": "私はトップに立つクイーン。",
    "literalJapanese": "クイーンカード、私はトップ。",
    "sentenceExplanation": "ただの人気者ではなく、頂点にいるという強い自己表現。",
    "tokens": [
      {
        "surface": "the top",
        "base": "the top",
        "language": "en",
        "shortMeaning": "トップ、一番上",
        "meaning": "トップ、一番上"
      }
    ]
  },
  "I'm twerking on the runway": {
    "japanese": "ランウェイの上で堂々と踊っている。",
    "literalJapanese": "私はランウェイでトゥワークしている。",
    "sentenceExplanation": "普通はランウェイではモデルのように歩くが、ここでは自分らしく踊っている。 上品な型に収まらない自由さがある。",
    "tokens": [
      {
        "surface": "twerking",
        "base": "twerking",
        "language": "en",
        "shortMeaning": "腰やお尻を強調して踊るダンス",
        "meaning": "腰やお尻を強調して踊るダンス"
      },
      {
        "surface": "runway",
        "base": "runway",
        "language": "en",
        "shortMeaning": "ランウェイ、ファッションショーの歩く舞台",
        "meaning": "ランウェイ、ファッションショーの歩く舞台"
      }
    ]
  },
  "I am a 퀸카": {
    "japanese": "私は最高にイケてる女。",
    "literalJapanese": "私はクイーンカード。",
    "sentenceExplanation": "昔からある韓国語の俗語。 학교 퀸카 と言えば「学校で一番目立つ美人・人気者」のような意味。 この曲では、 「私は誰かに選ばれる퀸카」ではなく、 「自分で自分を퀸카だと言える人」 という意味が強い。",
    "tokens": [
      {
        "surface": "퀸",
        "base": "퀸",
        "language": "ko",
        "shortMeaning": "女王、クイーン",
        "meaning": "queen / 女王、クイーン",
        "explanation": "女王、クイーン"
      },
      {
        "surface": "카",
        "base": "카",
        "language": "ko",
        "shortMeaning": "card から来た俗語的な言い方",
        "meaning": "card から来た俗語的な言い方"
      },
      {
        "surface": "퀸카",
        "base": "퀸카",
        "language": "ko",
        "shortMeaning": "対になる言葉として、",
        "meaning": "一番イケてる女の子、人気者の女性 / 対になる言葉として、",
        "explanation": "対になる言葉として、"
      },
      {
        "surface": "킹카",
        "base": "킹카",
        "language": "ko",
        "shortMeaning": "一番イケてる男の子、人気者の男性",
        "meaning": "一番イケてる男の子、人気者の男性"
      }
    ]
  },
  "You wanna be the 퀸카": {
    "japanese": "あなたもクイーンになりたいんでしょ。",
    "literalJapanese": "あなたはクイーンカードになりたい。",
    "sentenceExplanation": "自分が憧れられる存在だという表現。 同時に、聴き手にも「あなたも퀸카になれる」と誘っているようにも聞こえる。",
    "tokens": [
      {
        "surface": "You wanna",
        "base": "You wanna",
        "language": "en",
        "shortMeaning": "あなたは〜したい",
        "meaning": "You want to / あなたは〜したい",
        "explanation": "あなたは〜したい"
      },
      {
        "surface": "be",
        "base": "be",
        "language": "en",
        "shortMeaning": "〜になる",
        "meaning": "〜になる"
      },
      {
        "surface": "the 퀸카",
        "base": "the 퀸카",
        "language": "ko",
        "shortMeaning": "そのクイーン、最高にイケてる女",
        "meaning": "そのクイーン、最高にイケてる女"
      }
    ]
  },
  "I'm a 퀸카": {
    "japanese": "私はクイーン。",
    "literalJapanese": "私はクイーンカード。",
    "sentenceExplanation": "昔からある韓国語の俗語。 학교 퀸카 と言えば「学校で一番目立つ美人・人気者」のような意味。 この曲では、 「私は誰かに選ばれる퀸카」ではなく、 「自分で自分を퀸카だと言える人」 という意味が強い。",
    "tokens": [
      {
        "surface": "퀸",
        "base": "퀸",
        "language": "ko",
        "shortMeaning": "女王、クイーン",
        "meaning": "queen / 女王、クイーン",
        "explanation": "女王、クイーン"
      },
      {
        "surface": "카",
        "base": "카",
        "language": "ko",
        "shortMeaning": "card から来た俗語的な言い方",
        "meaning": "card から来た俗語的な言い方"
      },
      {
        "surface": "퀸카",
        "base": "퀸카",
        "language": "ko",
        "shortMeaning": "対になる言葉として、",
        "meaning": "一番イケてる女の子、人気者の女性 / 対になる言葉として、",
        "explanation": "対になる言葉として、"
      },
      {
        "surface": "킹카",
        "base": "킹카",
        "language": "ko",
        "shortMeaning": "一番イケてる男の子、人気者の男性",
        "meaning": "一番イケてる男の子、人気者の男性"
      }
    ]
  },
  "I'm a I'm a I'm a 퀸카": {
    "japanese": "私は、私は、私はクイーン。",
    "literalJapanese": "私は、私は、私はクイーンカード。",
    "sentenceExplanation": "昔からある韓国語の俗語。 학교 퀸카 と言えば「学校で一番目立つ美人・人気者」のような意味。 この曲では、 「私は誰かに選ばれる퀸카」ではなく、 「自分で自分を퀸카だと言える人」 という意味が強い。",
    "tokens": [
      {
        "surface": "퀸",
        "base": "퀸",
        "language": "ko",
        "shortMeaning": "女王、クイーン",
        "meaning": "queen / 女王、クイーン",
        "explanation": "女王、クイーン"
      },
      {
        "surface": "카",
        "base": "카",
        "language": "ko",
        "shortMeaning": "card から来た俗語的な言い方",
        "meaning": "card から来た俗語的な言い方"
      },
      {
        "surface": "퀸카",
        "base": "퀸카",
        "language": "ko",
        "shortMeaning": "対になる言葉として、",
        "meaning": "一番イケてる女の子、人気者の女性 / 対になる言葉として、",
        "explanation": "対になる言葉として、"
      },
      {
        "surface": "킹카",
        "base": "킹카",
        "language": "ko",
        "shortMeaning": "一番イケてる男の子、人気者の男性",
        "meaning": "一番イケてる男の子、人気者の男性"
      }
    ]
  },
  "I'm a 퀸카 (Take a photo)": {
    "japanese": "私はクイーン。写真を撮って。",
    "literalJapanese": "私はクイーンカード。（写真を撮って）",
    "sentenceExplanation": "昔からある韓国語の俗語。 학교 퀸카 と言えば「学校で一番目立つ美人・人気者」のような意味。 この曲では、 「私は誰かに選ばれる퀸카」ではなく、 「自分で自分を퀸카だと言える人」 という意味が強い。 今の私は撮る価値がある、記録する価値があるという自信。 SNS時代の「見られる私」も意識した表現。",
    "tokens": [
      {
        "surface": "퀸",
        "base": "퀸",
        "language": "ko",
        "shortMeaning": "女王、クイーン",
        "meaning": "queen / 女王、クイーン",
        "explanation": "女王、クイーン"
      },
      {
        "surface": "카",
        "base": "카",
        "language": "ko",
        "shortMeaning": "card から来た俗語的な言い方",
        "meaning": "card から来た俗語的な言い方"
      },
      {
        "surface": "퀸카",
        "base": "퀸카",
        "language": "ko",
        "shortMeaning": "対になる言葉として、",
        "meaning": "一番イケてる女の子、人気者の女性 / 対になる言葉として、",
        "explanation": "対になる言葉として、"
      },
      {
        "surface": "킹카",
        "base": "킹카",
        "language": "ko",
        "shortMeaning": "一番イケてる男の子、人気者の男性",
        "meaning": "一番イケてる男の子、人気者の男性"
      },
      {
        "surface": "Take a photo",
        "base": "Take a photo",
        "language": "en",
        "shortMeaning": "写真を撮って",
        "meaning": "写真を撮って"
      }
    ]
  },
  "Look so cool look so sexy like Kim Kardashian": {
    "japanese": "キム・カーダシアンみたいにクールでセクシー。",
    "literalJapanese": "キム・カーダシアンみたいに、とてもかっこよく、とてもセクシーに見える。",
    "sentenceExplanation": "キム・カーダシアンは、グラマラスな体型や強い自己演出の象徴として使われている。 ここでは「堂々としたセクシーさ」の比喩。",
    "tokens": [
      {
        "surface": "Look so cool",
        "base": "Look so cool",
        "language": "en",
        "shortMeaning": "とてもかっこよく見える",
        "meaning": "とてもかっこよく見える"
      },
      {
        "surface": "look so sexy",
        "base": "look so sexy",
        "language": "en",
        "shortMeaning": "とてもセクシーに見える",
        "meaning": "とてもセクシーに見える"
      },
      {
        "surface": "like Kim Kardashian",
        "base": "like Kim Kardashian",
        "language": "en",
        "shortMeaning": "キム・カーダシアンのように",
        "meaning": "キム・カーダシアンのように"
      }
    ]
  },
  "Look so cute look so pretty like Ariana": {
    "japanese": "アリアナみたいにかわいくて綺麗。",
    "literalJapanese": "アリアナみたいに、とてもかわいく、とてもきれいに見える。",
    "sentenceExplanation": "アリアナ・グランデのような、かわいさ・綺麗さ・ポップスター感のイメージ。 前の Kim Kardashian と合わせて、いろいろなタイプの美しさを並べている。",
    "tokens": [
      {
        "surface": "cute",
        "base": "cute",
        "language": "en",
        "shortMeaning": "かわいい",
        "meaning": "かわいい"
      },
      {
        "surface": "pretty",
        "base": "pretty",
        "language": "en",
        "shortMeaning": "きれい",
        "meaning": "きれい"
      },
      {
        "surface": "like Ariana",
        "base": "like Ariana",
        "language": "en",
        "shortMeaning": "アリアナのように",
        "meaning": "アリアナのように"
      }
    ]
  },
  "I wanna with you 뽀뽀": {
    "japanese": "あなたとチューしたい。",
    "literalJapanese": "あなたとチューしたい。",
    "sentenceExplanation": "英語としては “I wanna 뽀뽀 with you” の方が自然だが、歌詞では音のリズム重視。 かわいい恋愛表現。",
    "tokens": [
      {
        "surface": "I wanna",
        "base": "I wanna",
        "language": "en",
        "shortMeaning": "〜したい",
        "meaning": "I want to / 〜したい",
        "explanation": "〜したい"
      },
      {
        "surface": "with you",
        "base": "with you",
        "language": "en",
        "shortMeaning": "あなたと",
        "meaning": "あなたと"
      },
      {
        "surface": "뽀뽀",
        "base": "뽀뽀",
        "language": "ko",
        "shortMeaning": "키스 よりかわいくて軽い言い方。",
        "meaning": "チュー、軽いキス / 키스 よりかわいくて軽い言い方。",
        "explanation": "키스 よりかわいくて軽い言い方。"
      }
    ]
  },
  "I wanna with you 포옹": {
    "japanese": "あなたと抱きしめ合いたい。",
    "literalJapanese": "あなたとハグしたい。",
    "sentenceExplanation": "뽀뽀 より少し大人っぽく、やさしい身体的な親密さ。",
    "tokens": [
      {
        "surface": "포옹",
        "base": "포옹",
        "language": "ko",
        "shortMeaning": "포옹하다 = 抱きしめる",
        "meaning": "抱擁、ハグ / 포옹하다 = 抱きしめる",
        "explanation": "포옹하다 = 抱きしめる"
      }
    ]
  },
  "자꾸 예뻐져 거울 속 너어~": {
    "japanese": "鏡の中のあなたは、どんどん綺麗になっていく。",
    "literalJapanese": "どんどん綺麗になっていく、鏡の中のあなた。",
    "sentenceExplanation": "ここで「私」だけでなく「鏡の中のあなた」にも広がる。 聴いている人自身も퀸카になれる、という自己肯定のメッセージ。",
    "tokens": [
      {
        "surface": "자꾸",
        "base": "자꾸",
        "language": "ko",
        "shortMeaning": "何度も、どんどん、しきりに",
        "meaning": "何度も、どんどん、しきりに"
      },
      {
        "surface": "예쁘다",
        "base": "예쁘다",
        "language": "ko",
        "shortMeaning": "かわいい、きれいだ",
        "meaning": "かわいい、きれいだ"
      },
      {
        "surface": "예뻐지다",
        "base": "예뻐지다",
        "language": "ko",
        "shortMeaning": "きれいになる",
        "meaning": "きれいになる"
      },
      {
        "surface": "예뻐져",
        "base": "예뻐져",
        "language": "ko",
        "shortMeaning": "きれいになっていく",
        "meaning": "きれいになっていく"
      },
      {
        "surface": "거울",
        "base": "거울",
        "language": "ko",
        "shortMeaning": "鏡",
        "meaning": "鏡"
      },
      {
        "surface": "속",
        "base": "속",
        "language": "ko",
        "shortMeaning": "中",
        "meaning": "中"
      },
      {
        "surface": "거울 속",
        "base": "거울 속",
        "language": "ko",
        "shortMeaning": "鏡の中",
        "meaning": "鏡の中"
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
  "이 Party에 준비된 <Blue> Champagne": {
    "japanese": "このパーティーにはブルーシャンパンが用意されている。",
    "literalJapanese": "このパーティーに用意された青いシャンパン。",
    "sentenceExplanation": "華やかで非日常的なパーティーの象徴。 “Birthday cake” と同じく、自分の存在を祝う演出。",
    "tokens": [
      {
        "surface": "Blue",
        "base": "Blue",
        "language": "en",
        "shortMeaning": "青い",
        "meaning": "青い"
      },
      {
        "surface": "Champagne",
        "base": "Champagne",
        "language": "en",
        "shortMeaning": "シャンパン",
        "meaning": "シャンパン"
      }
    ]
  },
  "태어난 걸 축하해 Every day": {
    "japanese": "生まれてきたことを毎日祝おう。",
    "literalJapanese": "生まれたことを祝って、毎日。",
    "sentenceExplanation": "自分の誕生日だけでなく、存在そのものを毎日祝う。 かなりポジティブな自己肯定。",
    "tokens": [
      {
        "surface": "태어나다",
        "base": "태어나다",
        "language": "ko",
        "shortMeaning": "生まれる",
        "meaning": "生まれる"
      },
      {
        "surface": "태어난 것",
        "base": "태어난 것",
        "language": "ko",
        "shortMeaning": "生まれたこと",
        "meaning": "生まれたこと"
      },
      {
        "surface": "걸",
        "base": "걸",
        "language": "ko",
        "shortMeaning": "ことを",
        "meaning": "것을 の縮約 / ことを",
        "explanation": "ことを"
      },
      {
        "surface": "축하하다",
        "base": "축하하다",
        "language": "ko",
        "shortMeaning": "祝う",
        "meaning": "祝う"
      },
      {
        "surface": "축하해",
        "base": "축하해",
        "language": "ko",
        "shortMeaning": "祝うよ、おめでとう",
        "meaning": "祝うよ、おめでとう"
      }
    ]
  },
  "아무거나 걸친 Girl 퀸카카카": {
    "japanese": "何を着ても似合うGirl、クイーン。",
    "literalJapanese": "何でも身につけたGirl、クイーンカカカ。",
    "sentenceExplanation": "高級ブランドや流行服でなくてもいい。 何を着ていても、自信があれば퀸카という意味。",
    "tokens": [
      {
        "surface": "아무거나",
        "base": "아무거나",
        "language": "ko",
        "shortMeaning": "何でも、どんなものでも",
        "meaning": "何でも、どんなものでも"
      },
      {
        "surface": "걸치다",
        "base": "걸치다",
        "language": "ko",
        "shortMeaning": "身につける、羽織る、着る",
        "meaning": "身につける、羽織る、着る"
      },
      {
        "surface": "걸친",
        "base": "걸친",
        "language": "ko",
        "shortMeaning": "身につけた〜",
        "meaning": "身につけた〜"
      },
      {
        "surface": "Girl",
        "base": "Girl",
        "language": "en",
        "shortMeaning": "女の子",
        "meaning": "女の子"
      },
      {
        "surface": "퀸카카카",
        "base": "퀸카카카",
        "language": "ko",
        "shortMeaning": "퀸카 + カカカというリズム遊び",
        "meaning": "퀸카 + カカカというリズム遊び"
      }
    ]
  },
  "마르거나 살찐 Girl 퀸카카카": {
    "japanese": "痩せていても太っていても、Girlはクイーン。",
    "literalJapanese": "痩せていたり太っていたりするGirl、クイーンカカカ。",
    "sentenceExplanation": "かなり重要。 美しさは体型だけで決まらないというメッセージ。 この曲が単なる外見自慢で終わらない理由。",
    "tokens": [
      {
        "surface": "마르다",
        "base": "마르다",
        "language": "ko",
        "shortMeaning": "痩せている",
        "meaning": "痩せている"
      },
      {
        "surface": "마르거나",
        "base": "마르거나",
        "language": "ko",
        "shortMeaning": "痩せていたり",
        "meaning": "痩せていたり"
      },
      {
        "surface": "살찌다",
        "base": "살찌다",
        "language": "ko",
        "shortMeaning": "太る、肉がつく",
        "meaning": "太る、肉がつく"
      },
      {
        "surface": "살찐",
        "base": "살찐",
        "language": "ko",
        "shortMeaning": "太った〜、ふくよかな〜",
        "meaning": "太った〜、ふくよかな〜"
      },
      {
        "surface": "Girl",
        "base": "Girl",
        "language": "en",
        "shortMeaning": "女の子",
        "meaning": "女の子"
      }
    ]
  },
  "자신감 넘치는 Girl 퀸카카카": {
    "japanese": "自信に満ちたGirlこそ、クイーン。",
    "literalJapanese": "自信があふれるGirl、クイーンカカカ。",
    "sentenceExplanation": "この曲の結論に近い。 퀸카かどうかを決めるのは、体型や服よりも「自信」。",
    "tokens": [
      {
        "surface": "자신감",
        "base": "자신감",
        "language": "ko",
        "shortMeaning": "감 = 感",
        "meaning": "自信 / 자신 = 自分 / 감 = 感",
        "explanation": "자신 = 自分 감 = 感"
      },
      {
        "surface": "넘치다",
        "base": "넘치다",
        "language": "ko",
        "shortMeaning": "あふれる",
        "meaning": "あふれる"
      },
      {
        "surface": "넘치는",
        "base": "넘치는",
        "language": "ko",
        "shortMeaning": "あふれる〜",
        "meaning": "あふれる〜"
      },
      {
        "surface": "Girl",
        "base": "Girl",
        "language": "en",
        "shortMeaning": "女の子",
        "meaning": "女の子"
      }
    ]
  }
};

const lyricsSequence: string[] = [
  "Hey you",
  "뭘 보니? 내가 좀 Sexy Sexy 반했니",
  "Ye you",
  "뭐 하니? 너도 내 Kiss Kiss 원하니",
  "월 화 수 목 금 토 일 미모가 쉬지를 않네",
  "머리부터 발끝까지 눈부셔 빛이 나네",
  "Oh 저기 언니야들 내 Fashion을 따라 하네",
  "아름다운 여자의 하루는 다 아름답네",
  "이 Party에 준비된 Birthday cake",
  "태어나서 감사해 Every day",
  "I don't need them",
  "그래 내가 봐도 난",
  "퀸카 I'm hot",
  "My boob and booty is hot",
  "Spotlight 날 봐",
  "I'm a star star star",
  "퀸카 I'm the top",
  "I'm twerking on the runway",
  "I am a 퀸카",
  "You wanna be the 퀸카",
  "I'm a 퀸카",
  "I'm a 퀸카",
  "I'm a I'm a I'm a 퀸카",
  "I'm a 퀸카 (Take a photo)",
  "I'm a 퀸카",
  "I'm a 퀸카",
  "I'm a I'm a I'm a 퀸카",
  "I'm a 퀸카",
  "Look so cool look so sexy like Kim Kardashian",
  "Look so cute look so pretty like Ariana",
  "I wanna with you 뽀뽀",
  "I wanna with you 포옹",
  "자꾸 예뻐져 거울 속 너어~",
  "이 Party에 준비된 <Blue> Champagne",
  "태어난 걸 축하해 Every day",
  "I don't need them",
  "그래 내가 봐도 난",
  "퀸카 I'm hot",
  "My boob and booty is hot",
  "Spotlight 날 봐",
  "I'm a star star star",
  "퀸카 I'm the top",
  "I'm twerking on the runway",
  "I am a 퀸카",
  "You wanna be the 퀸카",
  "I'm a 퀸카",
  "I'm a 퀸카",
  "I'm a I'm a I'm a 퀸카",
  "I'm a 퀸카 (Take a photo)",
  "I'm a 퀸카",
  "I'm a 퀸카",
  "I'm a I'm a I'm a 퀸카",
  "I'm a 퀸카",
  "아무거나 걸친 Girl 퀸카카카",
  "마르거나 살찐 Girl 퀸카카카",
  "자신감 넘치는 Girl 퀸카카카",
  "I am a 퀸카",
  "You wanna be the 퀸카"
];

export const completeQueencardLines: LyricLine[] = lyricsSequence.map((korean, index) => {
  const template = lineTemplates[korean];

  return {
    id: `idle-queencard-line-${index + 1}`,
    korean,
    japanese: template.japanese,
    literalJapanese: template.literalJapanese,
    sentenceExplanation: template.sentenceExplanation,
    tokens: template.tokens.map((token, tokenIndex) => ({
      ...token,
      id: `idle-queencard-line-${index + 1}-token-${tokenIndex + 1}`,
    })),
  };
});

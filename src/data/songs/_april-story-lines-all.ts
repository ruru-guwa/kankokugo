import type { GrammarPoint, LyricLine, Token } from "../../types/song";

type GrammarSpec = Omit<GrammarPoint, "id">;
type TokenSpec = Omit<Token, "id">;

type LineSpec = Omit<LyricLine, "id" | "tokens" | "grammarPoints"> & {
  tokens: TokenSpec[];
  grammarPoints?: GrammarSpec[];
};

const ko = (
  surface: string,
  base: string,
  shortMeaning: string,
  meaning: string,
  extra: Partial<TokenSpec> = {},
): TokenSpec => ({
  surface,
  base,
  language: "ko",
  shortMeaning,
  meaning,
  ...extra,
});

const line = (lineNumber: number, spec: LineSpec): LyricLine => ({
  id: `line-${lineNumber}`,
  korean: spec.korean,
  reading: spec.reading,
  japanese: spec.japanese,
  literalJapanese: spec.literalJapanese,
  sentenceExplanation: spec.sentenceExplanation,
  nuance: spec.nuance,
  roleInSong: spec.roleInSong,
  sectionBreakAfter: spec.sectionBreakAfter,
  grammarPoints: spec.grammarPoints?.map((grammarPoint, index) => ({
    id: `line-${lineNumber}-g${index + 1}`,
    ...grammarPoint,
  })),
  tokens: spec.tokens.map((token, index) => ({
    id: `line-${lineNumber}-t${index + 1}`,
    ...token,
  })),
});

const line1Spec: LineSpec = {
  korean: "언제인지 모를 참 오래전 얘기",
  reading: "オンジェインジ モル チャム オレジョン イェギ",
  japanese: "いつのことか分からないほど、ずっと昔の話。",
  literalJapanese: "いつなのか分からない、本当に昔の話。",
  sentenceExplanation:
    "物語の始まりのように、いつのことかも分からない遠い昔の話として導入している行。",
  nuance:
    "現実の恋というより、童話の世界に入っていくような柔らかい語り口。あとでこの物語が『私の話』だと重なるため、その前振りにもなっている。",
  roleInSong:
    "童話の扉を開く導入。現実を少しぼかして語ることで、片思いの痛みを寓話の形に包んでいる。",
  tokens: [
    ko("언제인지 모를", "언제인지 모르다", "いつかも分からない", "いつなのか分からない", {
      breakdown: "언제 + -인지 + 모르다 + -ㄹ",
      meaningInThisLine: "あまりにも遠くて曖昧な時間の感覚。",
    }),
    ko("참 오래전", "참 오래전", "本当に昔", "本当にずっと前、かなり昔", {
      relatedWords: ["오래", "예전"],
    }),
    ko("얘기", "이야기", "話", "話、物語", {
      explanation: "이야기 のくだけた形。会話や歌詞でよく使われる。",
    }),
  ],
};

const line2Spec: LineSpec = {
  korean: "소녀는 아무 말도 할 수 없었대",
  reading: "ソニョヌン アム マルド ハル ス オプソッテ",
  japanese: "その少女は、何も言えなかったらしい。",
  literalJapanese: "少女は何の言葉も言うことができなかったんだって。",
  sentenceExplanation:
    "少女は自分の気持ちを抱えていても、結局何ひとつ言葉にできなかったと語っている。",
  nuance:
    "『言わなかった』ではなく『言えなかった』なので、意志よりも切なさや無力感が強い。",
  roleInSong:
    "この物語の核になる『伝えられない恋』が最初にはっきり示される部分。",
  grammarPoints: [
    {
      title: "아무 + 名詞 + 도",
      meaning: "何の〜も",
      explanation:
        "否定文と一緒に使って『何の〜も』を表す形。아무 말도 で『何も言葉も』。",
      example: "아무 생각도 안 나",
      exampleJapanese: "何も思い浮かばない",
    },
    {
      title: "-대",
      meaning: "〜なんだって、〜らしい",
      explanation:
        "伝聞を表すくだけた語尾。童話を語るような距離感を作りながら、あとで自分の話へ重ねる効果もある。",
      example: "비가 온대",
      exampleJapanese: "雨が降るんだって",
    },
  ],
  tokens: [
    ko("소녀는", "소녀", "少女は", "少女は", {
      breakdown: "소녀 + 는",
    }),
    ko("아무 말도", "아무 말도", "何も", "何の言葉も、何も", {
      meaningInThisLine: "告白も、本音も、何ひとつ言えないこと。",
    }),
    ko("할 수 없었대", "할 수 없다", "できなかったって", "することができなかったんだって", {
      breakdown: "하다 + -ㄹ 수 없다 + -었- + -대",
      explanation: "불가능 + 過去 + 伝聞が重なった形。",
    }),
  ],
};

const line3Spec: LineSpec = {
  korean: "시간이 흐르고 또 계절이 가도",
  reading: "シガニ フルゴ ット ケジョリ カド",
  japanese: "時間が過ぎ、季節が変わっても。",
  literalJapanese: "時間が流れて、また季節が過ぎても。",
  sentenceExplanation:
    "長い時間が経っても、その気持ちは終わらず残り続けていることを示している。",
  nuance:
    "片思いが一時的な感情ではなく、季節をまたぐほど長く続いていることが静かに伝わる。",
  roleInSong:
    "『昔の話』だったはずの感情が、今もなお続いていると明かすつなぎ。",
  grammarPoints: [
    {
      title: "-고",
      meaning: "〜して、そして",
      explanation:
        "動作や状態を並べて流れを作る接続語尾。흐르고 で『流れて』。",
      example: "문을 열고 들어가",
      exampleJapanese: "ドアを開けて入って",
    },
    {
      title: "-아/어도",
      meaning: "〜しても",
      explanation:
        "譲歩を表す基本形。가도 で『過ぎても』。",
      example: "늦어도 괜찮아",
      exampleJapanese: "遅れても大丈夫",
    },
  ],
  tokens: [
    ko("시간이 흐르고", "시간이 흐르다", "時間が流れて", "時間が流れて", {
      breakdown: "시간 + -이 + 흐르다 + -고",
    }),
    ko("또", "또", "また", "また、さらに"),
    ko("계절이 가도", "계절이 가다", "季節が過ぎても", "季節が過ぎても、時が巡っても", {
      breakdown: "계절 + -이 + 가다 + -아/어도",
      meaningInThisLine: "かなりの時間が経っても気持ちは消えないこと。",
    }),
  ],
};

const line4Spec: LineSpec = {
  korean: "여전한 그 마음 어떻게든 숨겼대",
  reading: "ヨジョナン ク マウム オットケドゥン スムギョッテ",
  japanese: "変わらない想いを、何とか隠していたらしい。",
  literalJapanese: "変わらないその心を、どうにか隠したんだって。",
  sentenceExplanation:
    "ずっと変わらない気持ちを抱えたまま、それを必死に隠してきたことを表している。",
  nuance:
    "消そうとして消える感情ではないからこそ、『どうにかして』隠すしかない苦しさが出ている。",
  roleInSong:
    "長く続く片思いに対して、主人公が取ってきた態度が『告白』ではなく『隠すこと』だと分かる行。",
  grammarPoints: [
    {
      title: "어떻게든",
      meaning: "どうにかして、何とかして",
      explanation:
        "어떻게 に -든 が付いて『どんな方法でもいいから』という切迫感を出す副詞。",
      example: "어떻게든 끝내야 해",
      exampleJapanese: "何とかして終わらせなきゃ",
    },
  ],
  tokens: [
    ko("여전한 그 마음", "여전한 그 마음", "変わらないその気持ち", "相変わらずのその想い", {
      breakdown: "여전하다 + -ㄴ + 그 마음",
      meaningInThisLine: "時間が経っても残り続ける片思い。",
    }),
    ko("어떻게든", "어떻게든", "何とかして", "どうにかして、何としても"),
    ko("숨겼대", "숨기다", "隠したって", "隠したんだって、隠していたらしい", {
      breakdown: "숨기다 + -었- + -대",
      explanation: "隠したという事実を、物語を語るように伝聞で包んでいる。",
    }),
  ],
};

const line5Spec: LineSpec = {
  korean: "행복해 보여 그 모습조차",
  reading: "ヘンボケ ボヨ ク モスプジョチャ",
  japanese: "幸せそうに見えるその姿さえ。",
  literalJapanese: "幸せそうに見えて、その姿さえ。",
  sentenceExplanation:
    "本来なら喜ぶべき相手の幸せそうな姿が、今はつらく刺さってしまうことを表している。",
  nuance:
    "『相手が悪い』というより、好きだからこそ見ているのが苦しいという感情のねじれがある。",
  roleInSong:
    "隠し続けた片思いが、静かな痛みから嫉妬まじりの苦しさへ変わる部分。",
  tokens: [
    ko("행복해 보여", "행복해 보이다", "幸せそうに見える", "幸せそうに見える", {
      breakdown: "행복하다 + -아/어 보이다",
    }),
    ko("그 모습조차", "그 모습조차", "その姿さえ", "その姿さえ、その様子までも", {
      breakdown: "그 모습 + -조차",
      meaningInThisLine: "本当は嫌いになりたくない相手の姿まで苦しいこと。",
    }),
  ],
};

const line6Spec: LineSpec = {
  korean: "미워질 만큼",
  reading: "ミウォジル マンクム",
  japanese: "憎らしく思えてしまうほど。",
  literalJapanese: "憎くなるほど。",
  sentenceExplanation:
    "苦しさが積もって、相手の幸せな様子さえ憎らしく感じてしまうほどだと言っている。",
  nuance:
    "本気で憎いというより、自分の行き場のない気持ちがそこまで追い詰められているという意味合いが強い。",
  roleInSong:
    "この片思いが綺麗なだけではなく、嫉妬や自己嫌悪も含んでいると見せる短い強調。",
  grammarPoints: [
    {
      title: "-ㄹ/을 만큼",
      meaning: "〜するほど",
      explanation:
        "程度が大きいことを表す形。미워질 만큼 で『憎くなるほど』。",
      example: "놀랄 만큼 예뻐",
      exampleJapanese: "驚くほどきれいだ",
    },
  ],
  tokens: [
    ko("미워질", "미워지다", "憎らしくなる", "憎らしくなる、嫌に思えてくる", {
      breakdown: "밉다 + -아/어지다 + -ㄹ",
    }),
    ko("만큼", "만큼", "〜ほど", "〜ほど、〜くらい"),
  ],
};

const line7Spec: LineSpec = {
  korean: "점점 커져가는 마음",
  reading: "チョムジョム コジョガヌン マウム",
  japanese: "少しずつ膨らんでいく想いは。",
  literalJapanese: "だんだん大きくなっていく心。",
  sentenceExplanation:
    "隠していても気持ちは消えるどころか、少しずつ大きくなっていくと描いている。",
  nuance:
    "我慢して抑えているのに、かえって想いが育ってしまう片思いらしい苦しさがある。",
  roleInSong:
    "抑圧と反比例するように感情が大きくなる流れを見せる行。",
  grammarPoints: [
    {
      title: "-아/어 가다",
      meaning: "だんだん〜していく",
      explanation:
        "変化が時間をかけて進んでいくことを表す。커져가다 で『大きくなっていく』。",
      example: "밝아져 가는 하늘",
      exampleJapanese: "だんだん明るくなっていく空",
    },
  ],
  tokens: [
    ko("점점", "점점", "だんだん", "だんだん、少しずつ"),
    ko("커져가는", "커져가다", "大きくなっていく", "大きくなっていく、膨らんでいく", {
      breakdown: "크다 + -아/어지다 + 가다",
      meaningInThisLine: "片思いが時間とともに強くなっていくこと。",
    }),
    ko("마음", "마음", "気持ち", "心、気持ち、想い"),
  ],
};

const line8Spec: LineSpec = {
  korean: "전하지 못할 비밀이 됐대요",
  reading: "チョナジ モタル ピミリ ドェッテヨ",
  japanese: "伝えることのできない秘密になってしまった。",
  literalJapanese: "伝えられない秘密になったんですって。",
  sentenceExplanation:
    "本来なら伝えたいはずの想いが、とうとう口に出せない秘密へ変わってしまったと言っている。",
  nuance:
    "恋心が希望ではなく『秘密』として閉じ込められているのが切ない。",
  roleInSong:
    "1番の結論。片思いは告白へ向かわず、誰にも言えない秘密として胸に沈んでいく。",
  grammarPoints: [
    {
      title: "-지 못하다",
      meaning: "〜できない",
      explanation:
        "能力や状況のせいでできないことを表す。전하지 못할 で『伝えられない』。",
      example: "믿지 못해",
      exampleJapanese: "信じられない",
    },
    {
      title: "-대요",
      meaning: "〜なんですって、〜らしいです",
      explanation:
        "伝聞の丁寧形。物語をやわらかく語る響きがある。",
      example: "좋아한대요",
      exampleJapanese: "好きなんですって",
    },
  ],
  tokens: [
    ko("전하지 못할", "전하지 못하다", "伝えられない", "伝えることができない", {
      breakdown: "전하다 + -지 못하다 + -ㄹ",
    }),
    ko("비밀이", "비밀", "秘密が", "秘密が", {
      breakdown: "비밀 + -이",
    }),
    ko("됐대요", "되다", "なったんですって", "なったんですって、なったらしいです", {
      breakdown: "되다 + -었- + -대요",
      meaningInThisLine: "好きな気持ちが、もう表に出せないものへ変わったこと。",
    }),
  ],
};

const line9Spec: LineSpec = {
  korean: "봄의 나라에 사는 그 소녀는",
  reading: "ボメ ナラエ サヌン ク ソニョヌン",
  japanese: "春の国に暮らすその少女は。",
  literalJapanese: "春の国に住むその少女は。",
  sentenceExplanation:
    "春の国の少女という童話めいたイメージで、語り手自身の心をやわらかく置き換えている。",
  nuance:
    "春はやわらかさや希望の季節だが、ここではその優しさがかえって報われなさを強めている。",
  roleInSong:
    "ここから童話の比喩が本格的に始まり、主人公の立場が『春の国の少女』として描かれる。",
  tokens: [
    ko("봄의 나라에", "봄의 나라", "春の国に", "春の国に", {
      breakdown: "봄 + -의 + 나라 + -에",
    }),
    ko("사는", "살다", "住む", "住む、暮らす", {
      breakdown: "살다 + -는",
    }),
    ko("그 소녀는", "그 소녀", "その少女は", "その少女は", {
      breakdown: "그 소녀 + 는",
    }),
  ],
};

const line10Spec: LineSpec = {
  korean: "얼음 나라의 멋진 소년을 보았죠",
  reading: "オルム ナラエ モッチン ソニョヌル ボアッチョ",
  japanese: "氷の国の素敵な少年に出会った。",
  literalJapanese: "氷の国の素敵な少年を見たのです。",
  sentenceExplanation:
    "春の国の少女は、氷の国の美しくて遠い存在のような少年を見つける。",
  nuance:
    "보았죠 はただ『見た』だけでなく、運命的に心に残った出会いのようにも響く。",
  roleInSong:
    "片思いの相手が童話の人物として現れる場面。",
  grammarPoints: [
    {
      title: "-았/었죠",
      meaning: "〜したのです、〜しましたよね",
      explanation:
        "説明ややわらかな共有感を帯びる語尾。ここでは童話を静かに語るような響き。",
      example: "정말 예뻤죠",
      exampleJapanese: "本当にきれいでしたよね",
    },
  ],
  tokens: [
    ko("얼음 나라의", "얼음 나라", "氷の国の", "氷の国の", {
      breakdown: "얼음 + 나라 + -의",
    }),
    ko("멋진 소년을", "멋진 소년", "素敵な少年を", "素敵な少年を", {
      breakdown: "멋지다 + -ㄴ + 소년 + -을",
      meaningInThisLine: "少女が心を奪われた相手。",
    }),
    ko("보았죠", "보다", "見たのです", "見たのです、出会ったのです", {
      breakdown: "보다 + -았- + -죠",
    }),
  ],
};

const line11Spec: LineSpec = {
  korean: "겨울 나라의 예쁜 그녀 곁에서",
  reading: "キョウル ナラエ イェップン クニョ キョテソ",
  japanese: "冬の国の美しい彼女の隣で。",
  literalJapanese: "冬の国の美しい彼女のそばで。",
  sentenceExplanation:
    "その少年のそばには、すでに別の『彼女』がいることが分かる行。",
  nuance:
    "春・氷・冬と季節のイメージが分かれることで、三人の距離や立場の違いまで幻想的に見せている。",
  roleInSong:
    "報われない片思いであることが明確になる痛い瞬間。",
  tokens: [
    ko("겨울 나라의", "겨울 나라", "冬の国の", "冬の国の", {
      breakdown: "겨울 + 나라 + -의",
    }),
    ko("예쁜 그녀", "예쁜 그녀", "美しい彼女", "美しい彼女、きれいなあの子", {
      breakdown: "예쁘다 + -ㄴ + 그녀",
    }),
    ko("곁에서", "곁", "そばで", "そばで、隣で", {
      breakdown: "곁 + -에서",
    }),
  ],
};

const line12Spec: LineSpec = {
  korean: "늘 웃고 있는 그 모습을",
  reading: "ヌル ウッコ インヌン ク モスブル",
  japanese: "いつも笑っている彼の姿を見ていた。",
  literalJapanese: "いつも笑っているその姿を。",
  sentenceExplanation:
    "彼がその彼女のそばで、いつも笑っている様子を見つめている場面。",
  nuance:
    "笑顔そのものは美しいのに、それを見る側にとっては苦しさの証拠でもある。",
  roleInSong:
    "三角関係の痛みを、説明ではなく一つの情景で見せるライン。",
  tokens: [
    ko("늘", "늘", "いつも", "いつも"),
    ko("웃고 있는", "웃고 있다", "笑っている", "笑っている、笑顔でいる", {
      breakdown: "웃다 + -고 있다 + -는",
    }),
    ko("그 모습을", "그 모습", "その姿を", "その姿を、その様子を", {
      breakdown: "그 모습 + -을",
    }),
  ],
};

const line13Spec: LineSpec = {
  korean: "아름다운 맘을 억지로 숨기고",
  reading: "アルムダウン マムル オクチロ スムギゴ",
  japanese: "美しい想いを無理に押し隠して。",
  literalJapanese: "美しい心を無理やり隠して。",
  sentenceExplanation:
    "本当は綺麗な気持ちなのに、それを無理に抑え込んで隠している状態を表している。",
  nuance:
    "恋心そのものは汚れていないのに、状況のせいで表に出せない。そこがこの曲の悲しさ。",
  roleInSong:
    "片思いを抱える主人公の美しさと苦しさが同時に出る行。",
  grammarPoints: [
    {
      title: "억지로",
      meaning: "無理やり、無理に",
      explanation:
        "自然ではないのに力ずくでそうする感じを出す副詞。感情を押し込める苦しさが強い。",
      example: "억지로 웃었어",
      exampleJapanese: "無理に笑った",
    },
  ],
  tokens: [
    ko("아름다운 맘을", "아름다운 마음", "美しい想いを", "美しい気持ちを", {
      breakdown: "아름답다 + -ㄴ + 마음 + -을",
      meaningInThisLine: "報われなくても汚れていない純粋な恋心。",
    }),
    ko("억지로", "억지로", "無理に", "無理に、無理やり"),
    ko("숨기고", "숨기다", "隠して", "隠して", {
      breakdown: "숨기다 + -고",
    }),
  ],
};

const line14Spec: LineSpec = {
  korean: "아름다운 둘을 위해 기도를 했대요",
  reading: "アルムダウン トゥルル ウィヘ キドルル ヘッテヨ",
  japanese: "美しい二人の幸せを願って祈ったらしい。",
  literalJapanese: "美しい二人のために祈りをしたんですって。",
  sentenceExplanation:
    "自分の恋を叶えたいのではなく、目の前の二人のために祈ってしまう切ない行。",
  nuance:
    "本心では苦しいのに、それでも相手の幸せを願おうとする優しさが胸に刺さる。",
  roleInSong:
    "この曲でもっとも自己犠牲的なやさしさが表れる部分。",
  grammarPoints: [
    {
      title: "-를/을 위해",
      meaning: "〜のために",
      explanation:
        "目的や相手を表す形。둘을 위해 で『二人のために』。",
      example: "널 위해 준비했어",
      exampleJapanese: "君のために準備したよ",
    },
  ],
  tokens: [
    ko("아름다운 둘을 위해", "아름다운 둘을 위해", "美しい二人のために", "美しい二人のために", {
      breakdown: "아름답다 + -ㄴ + 둘 + -을 위해",
    }),
    ko("기도를", "기도", "祈りを", "祈りを", {
      breakdown: "기도 + -를",
    }),
    ko("했대요", "하다", "したんですって", "したんですって、したらしいです", {
      breakdown: "하다 + -였/었- + -대요",
    }),
  ],
};

const line15Spec: LineSpec = {
  korean: "서로의 맘이 변하지 않기를",
  reading: "ソロエ マミ ピョナジ アンキルル",
  japanese: "二人の気持ちが変わりませんようにと。",
  literalJapanese: "お互いの心が変わらないことを。",
  sentenceExplanation:
    "自分の願いではなく、あの二人の気持ちが変わらないことを願っている。",
  nuance:
    "片思いの相手に未練があるほど、本当はそんな願いをしたくないはずなのに、それでも祈ってしまう矛盾がつらい。",
  roleInSong:
    "自分の幸福よりも相手の関係を優先してしまう、主人公の切なさの中心。",
  grammarPoints: [
    {
      title: "-기를",
      meaning: "〜することを",
      explanation:
        "願い・祈り・期待の内容を表す形。변하지 않기를 で『変わらないことを』。",
      example: "잘되기를 바래",
      exampleJapanese: "うまくいくことを願う",
    },
  ],
  tokens: [
    ko("서로의 맘이", "서로의 마음", "互いの気持ちが", "お互いの気持ちが", {
      breakdown: "서로 + -의 + 마음 + -이",
    }),
    ko("변하지 않기를", "변하지 않다", "変わらないことを", "変わらないことを", {
      breakdown: "변하다 + -지 않다 + -기 + -를",
      meaningInThisLine: "二人の関係がそのまま続くことを願う気持ち。",
    }),
  ],
};

const line16Spec: LineSpec = {
  korean: "하늘에 매일 빌었대요 마치 나처럼",
  reading: "ハヌレ メイル ピロッテヨ マチ ナチョロム",
  japanese: "毎日、空に祈っていたらしい。まるで私みたいに。",
  literalJapanese: "空に毎日祈ったんですって。まるで私のように。",
  sentenceExplanation:
    "童話の少女が空へ祈る姿と、自分自身の片思いが重なっていることがここで明かされる。",
  nuance:
    "마치 나처럼 の一言で、ただの童話ではなく『これは私のことでもある』と静かに告白している。",
  roleInSong:
    "童話と現実が初めて重なる重要な一行。主人公自身の感情がにじみ出る。",
  grammarPoints: [
    {
      title: "마치 ~처럼",
      meaning: "まるで〜のように",
      explanation:
        "比喩を強くする組み合わせ。ここでは物語の少女と語り手自身を重ねている。",
      example: "마치 꿈처럼",
      exampleJapanese: "まるで夢のように",
    },
  ],
  tokens: [
    ko("하늘에 매일", "하늘에 매일", "毎日空に", "毎日、空に", {
      breakdown: "하늘 + -에 + 매일",
    }),
    ko("빌었대요", "빌다", "祈っていたらしい", "祈っていたんですって", {
      breakdown: "빌다 + -었- + -대요",
      explanation: "빌다 は『祈る、願う』。",
    }),
    ko("마치 나처럼", "마치 나처럼", "まるで私のように", "まるで私のように", {
      breakdown: "마치 + 나 + -처럼",
      meaningInThisLine: "童話の少女の物語が、そのまま自分の片思いと重なること。",
    }),
  ],
};

const line19Spec: LineSpec = {
  korean: "정말 어쩔 수 없는 마음",
  reading: "チョンマル オッチョル ス オムヌン マウム",
  japanese: "本当にどうにもできないこの想い。",
  literalJapanese: "本当にどうしようもない心。",
  sentenceExplanation:
    "好きでいたくて好きなのではなく、もうどうにもならない気持ちになっていることを表している。",
  nuance:
    "理性で片づけられない感情を、あきらめにも似た響きで認めている。",
  roleInSong:
    "2番前半で、嫉妬のあとに残る無力感を静かに言い直すパート。",
  grammarPoints: [
    {
      title: "어쩔 수 없다",
      meaning: "どうしようもない、仕方がない",
      explanation:
        "方法がない、どうにもならないという意味の定番表現。",
      example: "이건 어쩔 수 없어",
      exampleJapanese: "これはどうしようもない",
    },
  ],
  tokens: [
    ko("정말", "정말", "本当に", "本当に"),
    ko("어쩔 수 없는", "어쩔 수 없다", "どうしようもない", "どうにもならない、仕方のない", {
      breakdown: "어쩌다 + -ㄹ 수 없다 + -는",
      meaningInThisLine: "自分では止められない片思い。",
    }),
    ko("마음", "마음", "気持ち", "心、気持ち、想い"),
  ],
};

const line20Spec: LineSpec = {
  korean: "또 바보처럼 혼자서 달래요",
  reading: "ット パボチョロム ホンジャソ タルレヨ",
  japanese: "また馬鹿みたいに、一人で自分を慰める。",
  literalJapanese: "また馬鹿のように一人でなだめます。",
  sentenceExplanation:
    "苦しい気持ちを誰にも言えず、結局また一人で自分をなだめるしかない状態を描いている。",
  nuance:
    "바보처럼 には自分を少し責めるような痛い自己認識がある。",
  roleInSong:
    "片思いを外に出せない主人公が、毎回同じように一人で感情を処理していると分かる行。",
  grammarPoints: [
    {
      title: "-처럼",
      meaning: "〜のように",
      explanation:
        "比喩を作る助詞。바보처럼 で『馬鹿みたいに』。",
      example: "아이처럼 웃어",
      exampleJapanese: "子どものように笑う",
    },
  ],
  tokens: [
    ko("또", "또", "また", "また"),
    ko("바보처럼", "바보처럼", "馬鹿みたいに", "馬鹿みたいに、愚かなくらい", {
      breakdown: "바보 + -처럼",
    }),
    ko("혼자서", "혼자서", "一人で", "一人で"),
    ko("달래요", "달래다", "なだめる", "なだめる、慰める", {
      explanation: "自分の気持ちや相手を落ち着かせる時に使う。",
      example: "마음을 달래다",
      exampleJapanese: "心を落ち着かせる",
    }),
  ],
};

const line25Spec: LineSpec = {
  korean: "아픈 동화 속 얘기가",
  reading: "アプン トンファ ソク イェギガ",
  japanese: "切ない童話の中の物語が。",
  literalJapanese: "痛い童話の中の話が。",
  sentenceExplanation:
    "これまで語ってきた童話めいた話が、ただの綺麗な物語ではなく痛みを含んだものだと示している。",
  nuance:
    "아픈 は体の痛みだけでなく、心が痛む切なさにもよく使われる。",
  roleInSong:
    "ブリッジで童話と現実がほとんど重なり切る入口。",
  tokens: [
    ko("아픈", "아프다", "痛い、切ない", "痛い、胸が痛むような", {
      breakdown: "아프다 + -ㄴ",
    }),
    ko("동화 속", "동화 속", "童話の中", "童話の中", {
      breakdown: "동화 + 속",
    }),
    ko("얘기가", "얘기", "話が", "話が、物語が", {
      breakdown: "얘기 + -가",
    }),
  ],
};

const line26Spec: LineSpec = {
  korean: "모두 내 얘기 같았어",
  reading: "モドゥ ネ イェギ カタッソ",
  japanese: "全部、自分のことみたいに思えた。",
  literalJapanese: "すべて私の話のようだった。",
  sentenceExplanation:
    "童話の中の出来事が、結局は全部自分の片思いの話みたいに感じられたと言っている。",
  nuance:
    "ここで『少女』と『私』の距離がほぼなくなる。",
  roleInSong:
    "物語が完全に語り手自身の感情へ接続される告白のような部分。",
  tokens: [
    ko("모두", "모두", "全部", "全部、すべて"),
    ko("내 얘기", "내 얘기", "私の話", "私の話、自分のこと", {
      breakdown: "내 + 얘기",
    }),
    ko("같았어", "같다", "みたいだった", "〜のようだった", {
      breakdown: "같다 + -았/었어",
      meaningInThisLine: "童話がそのまま自分自身の経験に見えたこと。",
    }),
  ],
};

const line27Spec: LineSpec = {
  korean: "다른 봄이 오길 바래요",
  reading: "タルン ボミ オギル パレヨ",
  japanese: "違う春が来てほしいと願っている。",
  literalJapanese: "別の春が来ることを願います。",
  sentenceExplanation:
    "今のつらい春ではない、別の季節や別の気持ちが来てくれることを願っている。",
  nuance:
    "『春』は本来明るい季節なのに、ここでは片思いの季節になってしまっている。その春が変わってほしいという願い。",
  roleInSong:
    "ブリッジで初めて、自分の苦しみから抜け出したいという願いが正面から出る。",
  grammarPoints: [
    {
      title: "-길 바라다",
      meaning: "〜することを願う",
      explanation:
        "願望を丁寧に表す定番の形。오길 바래요 で『来てほしいと願います』。",
      example: "잘되길 바래",
      exampleJapanese: "うまくいくことを願う",
    },
  ],
  tokens: [
    ko("다른 봄이", "다른 봄", "別の春が", "別の春が、違う春が", {
      meaningInThisLine: "今の片思いに満ちた季節とは違う時間。",
    }),
    ko("오길", "오다", "来ることを", "来ることを", {
      breakdown: "오다 + -기 + -를",
    }),
    ko("바래요", "바라다", "願います", "願います、願っている", {
      explanation: "会話では 바래요 と発音・表記されることも多い。",
    }),
  ],
};

const line28Spec: LineSpec = {
  korean: "(난 그래요)",
  reading: "ナン クレヨ",
  japanese: "私はそうなんです。",
  literalJapanese: "私はそうです。",
  sentenceExplanation:
    "『違う春が来てほしい』という願いが、まさに今の自分の本音だと小さく添えている。",
  nuance:
    "かっこで包まれているぶん、独り言のような静かな本音に聞こえる。",
  roleInSong:
    "大きな物語の中に、小さく自分の本音が顔を出す一言。",
  tokens: [
    ko("(난 그래요)", "나는 그래요", "私はそうです", "私はそうなんです", {
      breakdown: "나는 + 그래요",
      explanation: "난 は 나는 の縮約形。",
    }),
  ],
};

const line29Spec: LineSpec = {
  korean: "억지로 숨겨둔 내 맘이 닿을까 봐",
  reading: "オクチロ スムギョドゥン ネ マミ タウルカ バ",
  japanese: "無理に隠してきた私の想いが、届いてしまいそうで。",
  literalJapanese: "無理やり隠しておいた私の心が届くかと思って。",
  sentenceExplanation:
    "気持ちを隠しているつもりでも、うっかり相手に伝わってしまうのではと怯えている。",
  nuance:
    "本当は届いてほしい気持ちもあるはずなのに、『届くのが怖い』という矛盾が片思いらしい。",
  roleInSong:
    "主人公が苦しんでいる理由が、単に叶わないからだけでなく『知られるのも怖い』からだと分かる行。",
  grammarPoints: [
    {
      title: "-아/어 두다",
      meaning: "〜しておく",
      explanation:
        "結果の状態を保っておく形。숨겨두다 は『隠しておく』。",
      example: "문을 열어 둬",
      exampleJapanese: "ドアを開けておいて",
    },
    {
      title: "-ㄹ/을까 봐",
      meaning: "〜するかと思って、〜しそうで",
      explanation:
        "不安や心配の理由を表す形。닿을까 봐 で『届いてしまいそうで』。",
      example: "늦을까 봐 뛰었어",
      exampleJapanese: "遅れそうで走った",
    },
  ],
  tokens: [
    ko("억지로 숨겨둔", "숨겨두다", "無理に隠しておいた", "無理に隠しておいた", {
      breakdown: "억지로 + 숨기다 + -어 두다 + -ㄴ",
    }),
    ko("내 맘이", "내 마음", "私の気持ちが", "私の気持ちが", {
      breakdown: "내 + 마음 + -이",
    }),
    ko("닿을까 봐", "닿다", "届いてしまいそうで", "届いてしまうのではと、届きそうで", {
      breakdown: "닿다 + -ㄹ까 봐",
      meaningInThisLine: "隠してきた本心が相手に知られることへの怖さ。",
    }),
  ],
};

const line30Spec: LineSpec = {
  korean: "항상 혼자만 앓아요",
  reading: "ハンサン ホンジャマン アラヨ",
  japanese: "いつも一人で苦しんでいる。",
  literalJapanese: "いつも一人だけ病みます。",
  sentenceExplanation:
    "誰にも分けられない片思いの痛みを、結局いつも一人きりで抱えていると語っている。",
  nuance:
    "앓다 は体調不良にも使うが、恋や悩みを長く患うイメージでも使われる。",
  roleInSong:
    "ブリッジの締め。物語ではなく、今ここでの孤独がはっきり見える一行。",
  tokens: [
    ko("항상", "항상", "いつも", "いつも、常に"),
    ko("혼자만", "혼자만", "一人だけ", "一人だけ", {
      breakdown: "혼자 + -만",
    }),
    ko("앓아요", "앓다", "苦しんでいる", "患う、苦しむ", {
      explanation: "心の痛みを長く抱えるニュアンスでも使う。",
      example: "짝사랑을 앓다",
      exampleJapanese: "片思いに苦しむ",
    }),
  ],
};

const line36Spec: LineSpec = {
  korean: "기적처럼 다 지워지기를 바라죠",
  reading: "キジョクチョロム タ チウォジギルル パラジョ",
  japanese: "奇跡みたいに、全部消えてしまえばいいと願うのです。",
  literalJapanese: "奇跡のように全部消されることを願うのです。",
  sentenceExplanation:
    "もうこの気持ちを叶えるのではなく、奇跡のようにきれいに消えてほしいと願うところまで来ている。",
  nuance:
    "恋を守りたい気持ちより、苦しさから解放されたい気持ちが強くなっている。",
  roleInSong:
    "ラストでは祈りの内容が『二人の幸せ』から『自分の感情が消えること』へ変わる。",
  grammarPoints: [
    {
      title: "-아/어지다",
      meaning: "〜になる",
      explanation:
        "状態の変化を表す。지워지다 は『消える、消される』という受け身・自動詞的な形。",
      example: "잊혀졌어",
      exampleJapanese: "忘れられた",
    },
  ],
  tokens: [
    ko("기적처럼", "기적처럼", "奇跡のように", "奇跡のように", {
      breakdown: "기적 + -처럼",
    }),
    ko("다 지워지기를", "지워지다", "全部消えることを", "全部消えることを、すべて消えてしまうことを", {
      breakdown: "다 + 지우다 + -어지다 + -기 + -를",
      meaningInThisLine: "片思いの記憶も感情も残さず消えてほしい願い。",
    }),
    ko("바라죠", "바라다", "願うのです", "願うのです、願っています", {
      breakdown: "바라다 + -죠",
    }),
  ],
};

const line37Spec: LineSpec = {
  korean: "아무 마음 없던 그 날이 오기를",
  reading: "アム マウム オプトン ク ナリ オギルル",
  japanese: "何の想いも抱いていなかった、あの日に戻れることを。",
  literalJapanese: "何の気持ちもなかったその日が来ることを。",
  sentenceExplanation:
    "好きになる前の、まだ何も苦しくなかった頃に戻りたいという願いを表している。",
  nuance:
    "『忘れたい』よりも、『最初から何もなかった時点に戻りたい』というさらに深い切なさがある。",
  roleInSong:
    "ラストで示される最終的な願い。恋が叶うことではなく、恋を知る前へ戻ること。",
  grammarPoints: [
    {
      title: "없던",
      meaning: "なかった〜",
      explanation:
        "없다 の連体形。過去に存在しなかった状態を名詞の前で説明する。",
      example: "없던 일처럼",
      exampleJapanese: "なかったことのように",
    },
  ],
  tokens: [
    ko("아무 마음 없던", "아무 마음 없다", "何の気持ちもなかった", "何の想いもなかった", {
      breakdown: "아무 마음 + 없다 + -던",
    }),
    ko("그 날이", "그 날", "その日が", "その日が、あの日が", {
      breakdown: "그 날 + -이",
    }),
    ko("오기를", "오다", "来ることを", "来ることを", {
      breakdown: "오다 + -기 + -를",
      meaningInThisLine: "好きになる前の時間が戻ってきてほしいこと。",
    }),
  ],
};

export const completeAprilStoryLines: LyricLine[] = [
  line(1, line1Spec),
  line(2, line2Spec),
  line(3, line3Spec),
  line(4, line4Spec),
  line(5, line5Spec),
  line(6, line6Spec),
  line(7, line7Spec),
  line(8, { ...line8Spec, sectionBreakAfter: true }),
  line(9, line9Spec),
  line(10, line10Spec),
  line(11, line11Spec),
  line(12, line12Spec),
  line(13, line13Spec),
  line(14, line14Spec),
  line(15, line15Spec),
  line(16, { ...line16Spec, sectionBreakAfter: true }),
  line(17, line5Spec),
  line(18, line6Spec),
  line(19, line19Spec),
  line(20, { ...line20Spec, sectionBreakAfter: true }),
  line(21, line9Spec),
  line(22, line10Spec),
  line(23, line15Spec),
  line(24, { ...line16Spec, sectionBreakAfter: true }),
  line(25, line25Spec),
  line(26, line26Spec),
  line(27, line27Spec),
  line(28, line28Spec),
  line(29, line29Spec),
  line(30, { ...line30Spec, sectionBreakAfter: true }),
  line(31, line9Spec),
  line(32, line10Spec),
  line(33, line11Spec),
  line(34, line12Spec),
  line(35, line13Spec),
  line(36, line36Spec),
  line(37, line37Spec),
  line(38, line16Spec),
];

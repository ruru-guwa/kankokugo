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
  korean: "다가서지 못하고 헤매이고 있어",
  reading: "タガソジ モタゴ ヘメイゴ イッソ",
  japanese: "近づけないまま、迷い続けている。",
  literalJapanese: "近づくことができず、さまよっている。",
  sentenceExplanation:
    "好きな相手に一歩近づきたいのに、その方法が分からず気持ちだけが迷っている状態を描いている。",
  nuance:
    "単に距離があるのではなく、自分から歩み寄りたいのに踏み出せないもどかしさが強い。",
  roleInSong:
    "曲全体の出発点。『好きなのに近づけない』という未熟な恋の苦しさを最初に置いている。",
  grammarPoints: [
    {
      title: "-지 못하다",
      meaning: "〜できない",
      explanation:
        "したい気持ちはあるのに、状況や心のせいでできない時によく使う。다가서지 못하고 で『近づけずに』。",
      example: "말하지 못했어",
      exampleJapanese: "言えなかった",
    },
  ],
  tokens: [
    ko("다가서지 못하고", "다가서지 못하다", "近づけずに", "近づくことができずに", {
      breakdown: "다가서다 + -지 못하다 + -고",
      meaningInThisLine: "距離を縮めたいのに実際には踏み出せないこと。",
    }),
    ko("헤매이고 있어", "헤매이고 있다", "迷っている", "さまよっている、迷っている", {
      explanation:
        "標準的には 헤매고 있어 も自然だが、歌詞では響きのために 헤매이고 있어 が使われている。",
      relatedWords: ["헤매다", "망설이다"],
    }),
  ],
};

const line2Spec: LineSpec = {
  korean: "좋아하지만 다른 곳을 보고 있어",
  reading: "チョアハジマン タルン ゴスル ポゴ イッソ",
  japanese: "好きなのに、別の方ばかり見ている。",
  literalJapanese: "好きだけれど、違う場所を見ている。",
  sentenceExplanation:
    "好きという気持ちはあるのに、素直に相手を見られず、心も視線も噛み合っていない状態を表している。",
  nuance:
    "自分が目をそらしているとも、二人が違う方向を見ているとも読める曖昧さがあって、それが切ない。",
  roleInSong:
    "『近づけない』だけでなく、『同じ方向も見られない』というすれ違いを加える行。",
  grammarPoints: [
    {
      title: "-지만",
      meaning: "〜だけど、〜けれど",
      explanation:
        "前の気持ちを認めながら、それと逆の状態を続ける接続語尾。좋아하지만 で『好きだけど』。",
      example: "바쁘지만 갈게",
      exampleJapanese: "忙しいけど行くね",
    },
  ],
  tokens: [
    ko("좋아하지만", "좋아하다", "好きだけど", "好きだけれど", {
      breakdown: "좋아하다 + -지만",
    }),
    ko("다른 곳을", "다른 곳", "別の場所を", "別の場所を、違うところを", {
      breakdown: "다르다 + -ㄴ + 곳 + -을",
    }),
    ko("보고 있어", "보고 있다", "見ている", "見ている", {
      meaningInThisLine: "相手と同じ方向を見られず、気持ちが噛み合っていないこと。",
    }),
  ],
};

const line3Spec: LineSpec = {
  korean: "가까워 지려고 하면 할수록",
  reading: "カッカウォ ジリョゴ ハミョン ハルスロク",
  japanese: "近づこうとすればするほど。",
  literalJapanese: "近くなろうとすればするほど。",
  sentenceExplanation:
    "距離を縮めたいと思って頑張れば頑張るほど、かえってうまくいかない流れの前半を作っている。",
  nuance:
    "努力が報われるのではなく、努力するほどずれるという青春らしい残酷さがある。",
  roleInSong:
    "すれ違いの構造を文法そのものではっきり見せる行。",
  grammarPoints: [
    {
      title: "-려고 하다",
      meaning: "〜しようとする",
      explanation:
        "意志や試みを表す形。가까워지려고 で『近づこうとして』。",
      example: "말하려고 했어",
      exampleJapanese: "言おうとした",
    },
    {
      title: "-면 -ㄹ수록",
      meaning: "〜すればするほど",
      explanation:
        "ある動作を重ねるほど、後ろの状態が強くなる構文。하면 할수록 がそのまま出ている。",
      example: "볼수록 좋아",
      exampleJapanese: "見れば見るほど好きだ",
    },
  ],
  tokens: [
    ko("가까워 지려고", "가까워지려고", "近づこうとして", "近づこうとして", {
      breakdown: "가까워지다 + -려고",
      explanation: "通常は 가까워지려고 と続けて書くことが多い。",
    }),
    ko("하면 할수록", "하면 할수록", "すればするほど", "すればするほど", {
      breakdown: "하다 + -면 + 하다 + -ㄹ수록",
      meaningInThisLine: "努力が増えるほど、逆にうまくいかないこと。",
    }),
  ],
};

const line4Spec: LineSpec = {
  korean: "멀어져 가는 우리 둘의 마음처럼",
  reading: "モロジョ ガヌン ウリ トゥレ マウムチョロム",
  japanese: "私たち二人の心は、かえって離れていくみたい。",
  literalJapanese: "遠ざかっていく私たち二人の心のように。",
  sentenceExplanation:
    "近づこうとするほど心は遠ざかっていく、二人の関係の皮肉な状態をたとえで描いている。",
  nuance:
    "物理的な距離よりも、心のズレの方が大きいことが分かる。",
  roleInSong:
    "1番Aメロの結論。『努力しても心は離れる』という切なさを明確にする。",
  grammarPoints: [
    {
      title: "-아/어 가다",
      meaning: "だんだん〜していく",
      explanation:
        "時間の流れの中で少しずつ変化が進むことを表す。멀어져 가는 で『遠ざかっていく』。",
      example: "희미해져 가는 기억",
      exampleJapanese: "だんだん薄れていく記憶",
    },
  ],
  tokens: [
    ko("멀어져 가는", "멀어져 가다", "遠ざかっていく", "遠ざかっていく、離れていく", {
      breakdown: "멀어지다 + 가다 + -는",
    }),
    ko("우리 둘의", "우리 둘", "私たち二人の", "私たち二人の", {
      breakdown: "우리 둘 + -의",
    }),
    ko("마음처럼", "마음처럼", "心のように", "心のように、気持ちみたいに", {
      breakdown: "마음 + -처럼",
      meaningInThisLine: "二人の気持ちがすれ違っていく様子そのもの。",
    }),
  ],
};

const line5Spec: LineSpec = {
  korean: "만나지 못해 맴돌고 있어",
  reading: "マンナジ モテ メムドルゴ イッソ",
  japanese: "出会えないまま、同じ場所をさまよっている。",
  literalJapanese: "会うことができず、ぐるぐる回っている。",
  sentenceExplanation:
    "近くにいるようで実際には会えず、同じ場所をぐるぐる回るように関係が進まないことを表している。",
  nuance:
    "맴돌다 には前に進めず、同じ感情や場所の周りを回り続ける停滞感がある。",
  roleInSong:
    "1番Bメロで『離れていく心』が『進まない関係』へ言い換えられる部分。",
  tokens: [
    ko("만나지 못해", "만나지 못하다", "会えなくて", "会うことができなくて", {
      breakdown: "만나다 + -지 못하다 + -아/어",
    }),
    ko("맴돌고 있어", "맴돌고 있다", "さまよっている", "ぐるぐる回っている、同じ場所を巡っている", {
      meaningInThisLine: "恋が前に進まず同じところで止まっている感覚。",
    }),
  ],
};

const line6Spec: LineSpec = {
  korean: "우린 마치 평행선처럼",
  reading: "ウリン マチ ピョンヘンソンチョロム",
  japanese: "私たちはまるで、交わらない平行線みたい。",
  literalJapanese: "私たちはまるで平行線のように。",
  sentenceExplanation:
    "近くに並んでいるようでも決して交わらない平行線に、自分たちの関係を重ねている。",
  nuance:
    "『完全に遠い』のではなく、『近くにあるのに交われない』ところがこの比喩の痛さ。",
  roleInSong:
    "この曲の中心比喩。二人の距離感を最も印象的に表しているフレーズ。",
  grammarPoints: [
    {
      title: "마치 ~처럼",
      meaning: "まるで〜のように",
      explanation:
        "比喩を強く印象づける組み合わせ。평행선처럼 のイメージをよりはっきりさせている。",
      example: "마치 꿈처럼",
      exampleJapanese: "まるで夢のように",
    },
  ],
  tokens: [
    ko("우린", "우리는", "私たちは", "私たちは", {
      explanation: "우리는 の縮約形。",
    }),
    ko("마치", "마치", "まるで", "まるで"),
    ko("평행선처럼", "평행선처럼", "平行線のように", "平行線のように", {
      breakdown: "평행선 + -처럼",
      meaningInThisLine: "近くても決して交わらない二人の関係。",
    }),
  ],
};

const line7Spec: LineSpec = {
  korean: "말도 안돼 우린 반드시 만날 거야",
  reading: "マルド アンドェ ウリン パンドゥシ マンナル コヤ",
  japanese: "そんなはずない。私たちはきっと出会えるはず。",
  literalJapanese: "話にもならない。私たちは必ず会うだろう。",
  sentenceExplanation:
    "平行線みたいだとしても、そんな結末は認めたくないと、自分に言い聞かせるように希望を言っている。",
  nuance:
    "現実は苦しいのに、ここでは意地のような前向きさが出る。",
  roleInSong:
    "Bメロ後半で、一度はすれ違いを認めながらも『それでも会える』と反転させる行。",
  grammarPoints: [
    {
      title: "말도 안 되다",
      meaning: "ありえない、話にならない",
      explanation:
        "文字通りは『言葉にもならない』だが、自然には『そんなはずない』『ありえない』。",
      example: "그건 말도 안 돼",
      exampleJapanese: "それはありえない",
    },
    {
      title: "-ㄹ/을 거야",
      meaning: "〜するだろう、〜するはずだ",
      explanation:
        "未来の見通しや意志を表す形。만날 거야 で『会うはずだ』。",
      example: "다시 올 거야",
      exampleJapanese: "また来るはずだ",
    },
  ],
  tokens: [
    ko("말도 안돼", "말도 안 되다", "ありえない", "ありえない、そんなはずない", {
      meaningInThisLine: "平行線のままで終わるなんて認めたくない気持ち。",
    }),
    ko("반드시", "반드시", "必ず", "必ず、絶対に"),
    ko("만날 거야", "만날 거야", "会うはずだ", "会うはずだ、出会うだろう", {
      breakdown: "만나다 + -ㄹ 거야",
    }),
  ],
};

const line8Spec: LineSpec = {
  korean: "기다릴게 언제까지나",
  reading: "キダリルケ オンジェッカジナ",
  japanese: "いつまでも待っている。",
  literalJapanese: "待つね、いつまでも。",
  sentenceExplanation:
    "相手と必ず会えると信じて、その時までずっと待ち続けるという強い意志を表している。",
  nuance:
    "ただの受け身ではなく、自分で選んで待つというやさしい決意がある。",
  roleInSong:
    "1番Bメロの着地。希望を言葉にしたあと、それを支える時間の長さまで引き受けている。",
  grammarPoints: [
    {
      title: "-ㄹ게 / -을게",
      meaning: "〜するね、〜するよ",
      explanation:
        "話し手の意志をやわらかく相手に向ける語尾。기다릴게 で『待っているね』。",
      example: "내가 해줄게",
      exampleJapanese: "私がしてあげるよ",
    },
  ],
  tokens: [
    ko("기다릴게", "기다리다", "待っているね", "待っているね、待つよ", {
      breakdown: "기다리다 + -ㄹ게",
    }),
    ko("언제까지나", "언제까지나", "いつまでも", "いつまでも"),
  ],
};

const line9Spec: LineSpec = {
  korean: "미처 말하지 못했어",
  reading: "ミチョ マラジ モテッソ",
  japanese: "結局、言えないままだった。",
  literalJapanese: "まだ言うことができなかった。",
  sentenceExplanation:
    "気持ちはあったのに、タイミングも勇気も足りず、とうとう言葉にできなかったことを振り返っている。",
  nuance:
    "미처 が入ることで、『もう少しで言えたかもしれないのに』という惜しさがにじむ。",
  roleInSong:
    "サビで最初に出る告白の失敗。曲の痛みをもっとも短く的確に表す一行。",
  tokens: [
    ko("미처", "미처", "ついに、まだ", "ついに、そこまで至らず、まだ", {
      explanation: "否定とよく一緒に使われ、『そこまでできないまま』の感じを出す。",
    }),
    ko("말하지 못했어", "말하지 못하다", "言えなかった", "言うことができなかった", {
      breakdown: "말하다 + -지 못하다 + -었어",
      meaningInThisLine: "好きだと伝えることが結局できなかったこと。",
    }),
  ],
};

const line10Spec: LineSpec = {
  korean: "다만 너를 좋아했어",
  reading: "タマン ノルル チョアヘッソ",
  japanese: "ただ、あなたのことが好きだった。",
  literalJapanese: "ただ、あなたを好きだった。",
  sentenceExplanation:
    "複雑な理由や条件ではなく、ただ純粋に好きだったという気持ちだけを残している。",
  nuance:
    "言い訳も説明もなく、『好きだった』だけを置くからこそ、まっすぐで痛い。",
  roleInSong:
    "サビの感情の芯。伝えられなかった告白の中身は、結局これだけだったと分かる。",
  tokens: [
    ko("다만", "다만", "ただ", "ただ、ただ単に"),
    ko("너를", "너", "あなたを", "あなたを", {
      breakdown: "너 + -를",
    }),
    ko("좋아했어", "좋아하다", "好きだった", "好きだった", {
      breakdown: "좋아하다 + -았/었어",
      meaningInThisLine: "余計な言葉がいらないほど純粋な気持ち。",
    }),
  ],
};

const line11Spec: LineSpec = {
  korean: "어린 날의 꿈처럼 마치 기적처럼",
  reading: "オリン ナレ クムチョロム マチ キジョクチョロム",
  japanese: "幼い頃の夢みたいに、まるで奇跡みたいに。",
  literalJapanese: "幼い日の夢のように、まるで奇跡のように。",
  sentenceExplanation:
    "今の願いが、子どもの頃に信じていた夢や奇跡のように、純粋で少し非現実的なものだと描いている。",
  nuance:
    "手が届かないからこそ、夢や奇跡の比喩がぴったり重なる。",
  roleInSong:
    "サビで恋が『ただの感情』から『時間を超える願い』へ広がっていく部分。",
  tokens: [
    ko("어린 날의", "어린 날", "幼い日の", "幼い日の、幼い頃の", {
      breakdown: "어리다 + -ㄴ + 날 + -의",
    }),
    ko("꿈처럼", "꿈처럼", "夢のように", "夢のように", {
      breakdown: "꿈 + -처럼",
    }),
    ko("마치 기적처럼", "마치 기적처럼", "まるで奇跡のように", "まるで奇跡のように", {
      breakdown: "마치 + 기적 + -처럼",
      meaningInThisLine: "今は遠い願いでも、いつか起きてほしい奇跡の感覚。",
    }),
  ],
};

const line12Spec: LineSpec = {
  korean: "시간을 달려서",
  reading: "シガヌル タルリョソ",
  japanese: "時を駆け抜けて。",
  literalJapanese: "時間を走って。",
  sentenceExplanation:
    "ただ今この瞬間で会えないなら、時間そのものを駆け抜けてでも会いに行きたいという願いを込めている。",
  nuance:
    "直訳の『時間を走る』がそのまま幻想的で、この曲の世界観を代表するタイトルにもなっている。",
  roleInSong:
    "曲の核になるフレーズ。未熟な今を飛び越えて未来へ向かう願いがここに集約される。",
  tokens: [
    ko("시간을", "시간", "時間を", "時間を", {
      breakdown: "시간 + -을",
    }),
    ko("달려서", "달리다", "駆けて", "走って、駆け抜けて", {
      breakdown: "달리다 + -아/어서",
      meaningInThisLine: "時間そのものを越えて未来へ進みたいこと。",
    }),
  ],
};

const line13Spec: LineSpec = {
  korean: "어른이 될 수만 있다면",
  reading: "オルニ ドェル スマン イッタミョン",
  japanese: "大人になることができるなら。",
  literalJapanese: "大人になることさえできるなら。",
  sentenceExplanation:
    "今はまだ幼くて不器用だからこそ、ちゃんと大人になれた未来ならこの想いを守れるかもしれないと願っている。",
  nuance:
    "『今のままでは足りない』という自己認識と、『未来ならできる』という希望が同時にある。",
  roleInSong:
    "サビ後半で未来への条件が提示される重要な一行。",
  grammarPoints: [
    {
      title: "-ㄹ/을 수만 있다면",
      meaning: "〜できさえすれば、〜できるなら",
      explanation:
        "できることを条件として強く願う形。수만 が入ることで『それさえ叶えば』の切実さが出る。",
      example: "볼 수만 있다면",
      exampleJapanese: "会えさえするなら",
    },
  ],
  tokens: [
    ko("어른이", "어른", "大人が", "大人が、大人に", {
      breakdown: "어른 + -이",
    }),
    ko("될 수만 있다면", "될 수만 있다면", "なれさえするなら", "なることができるなら", {
      breakdown: "되다 + -ㄹ 수만 있다면",
      meaningInThisLine: "未熟な今を越えて、ちゃんとした未来へ行けるならという願い。",
    }),
  ],
};

const line14Spec: LineSpec = {
  korean: "거친 세상 속에서 손을 잡아줄게",
  reading: "コチン セサン ソゲソ ソヌル チャバジュルケ",
  japanese: "厳しい世界の中で、あなたの手を握ってあげる。",
  literalJapanese: "荒い世界の中で、手を握ってあげる。",
  sentenceExplanation:
    "未来で大人になれたなら、優しいだけではない厳しい現実の中でも相手のそばに立ちたいと言っている。",
  nuance:
    "守ってもらうのではなく、自分が手を握る側になりたいという意志が頼もしい。",
  roleInSong:
    "サビの着地。未来への願いが『手を握って支える』という具体的な行動に変わる。",
  grammarPoints: [
    {
      title: "-아/어 주다",
      meaning: "〜してあげる、〜してくれる",
      explanation:
        "相手のために何かをする気持ちを込める形。잡아주다 で『握ってあげる』。",
      example: "들어줄게",
      exampleJapanese: "聞いてあげるよ",
    },
  ],
  tokens: [
    ko("거친 세상 속에서", "거친 세상 속", "荒い世界の中で", "荒々しい世界の中で、厳しい現実の中で", {
      breakdown: "거칠다 + -ㄴ + 세상 + 속 + -에서",
      meaningInThisLine: "大人になったあとに待つ甘くない現実。",
    }),
    ko("손을", "손", "手を", "手を", {
      breakdown: "손 + -을",
    }),
    ko("잡아줄게", "잡아주다", "握ってあげるよ", "握ってあげるよ、つないであげるよ", {
      breakdown: "잡다 + -아/어 주다 + -ㄹ게",
    }),
  ],
};

const line15Spec: LineSpec = {
  korean: "다가서려 해봐도 엇갈리고 있어",
  reading: "タガソリョ ヘバド オッカルリゴ イッソ",
  japanese: "近づこうとしても、すれ違ってばかりいる。",
  literalJapanese: "近づこうとしてみても、すれ違っている。",
  sentenceExplanation:
    "一歩踏み出そうとしても、そのたびにタイミングや気持ちがずれてしまう様子を描いている。",
  nuance:
    "1番よりさらに具体的で、『努力しても失敗する』感じが強い。",
  roleInSong:
    "2番Aメロで、すれ違いが偶然ではなく繰り返されていることを見せる行。",
  grammarPoints: [
    {
      title: "-아/어 보다",
      meaning: "〜してみる",
      explanation:
        "試しにやってみる感じを加える。해봐도 で『やってみても』。",
      example: "말해봐도 몰라",
      exampleJapanese: "言ってみても分からない",
    },
  ],
  tokens: [
    ko("다가서려 해봐도", "다가서려 해보다", "近づこうとしても", "近づこうとしてみても", {
      breakdown: "다가서다 + -려고 하다 + 보다 + -아/어도",
    }),
    ko("엇갈리고 있어", "엇갈리고 있다", "すれ違っている", "すれ違っている、食い違っている", {
      meaningInThisLine: "気持ちもタイミングも噛み合わないこと。",
    }),
  ],
};

const line16Spec: LineSpec = {
  korean: "좋아한단 말도 아직 못하고 있어",
  reading: "チョアハンダン マルド アジク モタゴ イッソ",
  japanese: "『好き』という言葉さえ、まだ言えないままでいる。",
  literalJapanese: "好きだという言葉も、まだ言えずにいる。",
  sentenceExplanation:
    "相手への気持ちははっきりしているのに、その一番大事な一言だけがまだ口にできない状態。",
  nuance:
    "좋아한단 は会話っぽく縮まった形で、そのぶん素直な本音に近い響きがある。",
  roleInSong:
    "2番では『すれ違い』の原因が、やはり言葉にできない未熟さだと再確認される。",
  grammarPoints: [
    {
      title: "-단",
      meaning: "〜だという",
      explanation:
        "다는 の縮約形。좋아한단 말 は『好きだという言葉』。",
      example: "간단 말이야",
      exampleJapanese: "行くってば",
    },
  ],
  tokens: [
    ko("좋아한단 말도", "좋아한다는 말도", "好きだという言葉も", "好きだという言葉さえも", {
      breakdown: "좋아한다는 → 좋아한단 + 말 + -도",
    }),
    ko("아직", "아직", "まだ", "まだ"),
    ko("못하고 있어", "못하고 있다", "できずにいる", "できずにいる", {
      breakdown: "못하다 + -고 있다",
      meaningInThisLine: "告白だけが今も止まったままなこと。",
    }),
  ],
};

const line17Spec: LineSpec = {
  korean: "머뭇거리는 널 보고 있으면",
  reading: "モムッコリヌン ノル ポゴ イッスミョン",
  japanese: "戸惑っているあなたを見ていると。",
  literalJapanese: "ためらっているあなたを見ていると。",
  sentenceExplanation:
    "相手の方もどこか迷っているように見えるため、余計に関係が前に進まないと感じている。",
  nuance:
    "相手も同じように未熟なのかもしれないと気づく、少しやさしい視点が入る。",
  roleInSong:
    "自分だけでなく相手の幼さも見えてくる転換点。",
  tokens: [
    ko("머뭇거리는", "머뭇거리다", "ためらっている", "ためらっている、もじもじしている", {
      breakdown: "머뭇거리다 + -는",
    }),
    ko("널", "너를", "あなたを", "あなたを", {
      explanation: "너를 の縮約形。",
    }),
    ko("보고 있으면", "보고 있다", "見ていると", "見ていると", {
      breakdown: "보다 + -고 있다 + -으면",
    }),
  ],
};

const line18Spec: LineSpec = {
  korean: "우린 아직도 많이 어리긴 한가 봐",
  reading: "ウリン アジクト マニ オリギン ハンガ バ",
  japanese: "私たちはまだ、ずいぶん子どもなのかもしれない。",
  literalJapanese: "私たちはまだかなり幼いようだ。",
  sentenceExplanation:
    "言えないことも、すれ違うことも、結局はまだ二人が幼いからなのかもしれないと振り返っている。",
  nuance:
    "責めるよりも、『今はまだその時じゃないのかも』と自分たちを見つめる優しい諦めがある。",
  roleInSong:
    "2番Aメロのまとめ。恋の未熟さを『若さ』として受け止める行。",
  grammarPoints: [
    {
      title: "-긴 하다",
      meaning: "〜ではある",
      explanation:
        "ある事実は認めつつ、そこに含みを持たせる形。어리긴 하다 で『幼くはある』。",
      example: "좋긴 한데",
      exampleJapanese: "いいことはいいけど",
    },
    {
      title: "-나 보다",
      meaning: "〜みたいだ、〜ようだ",
      explanation:
        "見た感じや状況からの推測。한가 봐 はくだけた言い方。",
      example: "비가 오나 봐",
      exampleJapanese: "雨が降るみたいだ",
    },
  ],
  tokens: [
    ko("아직도", "아직도", "今でもまだ", "今でもまだ"),
    ko("많이", "많이", "かなり", "かなり、たくさん"),
    ko("어리긴 한가 봐", "어리긴 한가 보다", "幼いみたいだ", "幼いみたいだ、まだ子どもなのかもしれない", {
      breakdown: "어리다 + -긴 하다 + -ㄴ가 보다",
      meaningInThisLine: "今すぐ結ばれないのは、二人ともまだ未熟だからかもしれないこと。",
    }),
  ],
};

const line19Spec: LineSpec = {
  korean: "좁혀지지 않아 한 끗 차이",
  reading: "チョピョジジ アナ ハン ックッ チャイ",
  japanese: "ほんの少しの差なのに、距離は縮まらない。",
  literalJapanese: "縮まらない、ほんのわずかな差。",
  sentenceExplanation:
    "大きな壁があるわけではないのに、たった少しの差やズレのせいで関係が近づかないことを言っている。",
  nuance:
    "한 끗 차이 はごくわずかな差をくだけて言う表現で、余計にもどかしさが増す。",
  roleInSong:
    "2番Bメロで、平行線になる原因が『大きな問題』ではなく『小さなズレ』だと分かる行。",
  tokens: [
    ko("좁혀지지 않아", "좁혀지지 않다", "縮まらない", "狭まらない、縮まらない", {
      breakdown: "좁히다 + -어지다 + -지 않다",
    }),
    ko("한 끗 차이", "한 끗 차이", "ほんの少しの差", "ほんのわずかな差、紙一重の差", {
      explanation: "会話的な言い方で、ごく小さな差を表す。",
      meaningInThisLine: "ほとんど届きそうなのに届かない二人の距離。",
    }),
  ],
};

const line20Spec: LineSpec = {
  korean: "언젠가는 못다한 말을 전할 거야",
  reading: "オンジェンガヌン モッタハン マルル チョナル コヤ",
  japanese: "いつか、言えなかった言葉をちゃんと伝える。",
  literalJapanese: "いつかは言い切れなかった言葉を伝えるだろう。",
  sentenceExplanation:
    "今は無理でも、いつかは最後まで言えなかった気持ちをちゃんと伝えると誓っている。",
  nuance:
    "未熟な現在を認めたうえで、未来の自分にはまだ希望を残している。",
  roleInSong:
    "2番Bメロでの前進。待つだけでなく、いつか自分から伝える覚悟へ進む。",
  tokens: [
    ko("언젠가는", "언젠가", "いつかは", "いつかは", {
      breakdown: "언젠가 + -는",
    }),
    ko("못다한 말", "못다한 말", "言い切れなかった言葉", "最後まで言えなかった言葉", {
      breakdown: "못 다하다 + -ㄴ + 말",
    }),
    ko("전할 거야", "전하다", "伝えるはずだ", "伝えるはずだ、伝えるだろう", {
      breakdown: "전하다 + -ㄹ 거야",
      meaningInThisLine: "いつか告白や本音をきちんと届けたいこと。",
    }),
  ],
};

const line21Spec: LineSpec = {
  korean: "다가갈게 언제까지나",
  reading: "タガガルケ オンジェッカジナ",
  japanese: "いつまでも、あなたに近づいていく。",
  literalJapanese: "近づくね、いつまでも。",
  sentenceExplanation:
    "待つだけではなく、自分から相手のほうへ近づき続けると静かに宣言している。",
  nuance:
    "1番の 기다릴게 より少し能動的になっているのがポイント。",
  roleInSong:
    "2番Bメロの締め。未来への意志が待機から接近へ少し強まる。",
  tokens: [
    ko("다가갈게", "다가가다", "近づいていくね", "近づいていくね", {
      breakdown: "다가가다 + -ㄹ게",
    }),
    ko("언제까지나", "언제까지나", "いつまでも", "いつまでも"),
  ],
};

const line22Spec: LineSpec = {
  korean: "시간 속에 갇혀 길을 헤매여도",
  reading: "シガン ソゲ カチョ キルル ヘメヨド",
  japanese: "時間の中に閉じ込められ、道に迷ったとしても。",
  literalJapanese: "時間の中に閉じ込められて、道をさまよっても。",
  sentenceExplanation:
    "今すぐ進めない時間の中に閉じ込められ、進む道を見失ったとしてもという仮定を置いている。",
  nuance:
    "時間そのものが壁になっているイメージが強く、青春のもどかしさが幻想的に広がる。",
  roleInSong:
    "ブリッジで曲の世界観がいちばん大きくなる部分。時間と運命そのものに抗おうとする。",
  grammarPoints: [
    {
      title: "-아/어도",
      meaning: "〜しても",
      explanation:
        "譲歩を表す基本形。헤매여도 で『迷っても』。",
      example: "늦어도 갈게",
      exampleJapanese: "遅れても行くよ",
    },
  ],
  tokens: [
    ko("시간 속에 갇혀", "시간 속에 갇히다", "時間に閉じ込められて", "時間の中に閉じ込められて", {
      breakdown: "시간 속 + -에 + 갇히다 + -어",
      meaningInThisLine: "今すぐには越えられない時の壁。",
    }),
    ko("길을", "길", "道を", "道を", {
      breakdown: "길 + -을",
    }),
    ko("헤매여도", "헤매다", "迷っても", "さまよっても、迷っても", {
      breakdown: "헤매다 + -아/어도",
    }),
  ],
};

const line23Spec: LineSpec = {
  korean: "그렇지만 우린 결국 만날 거야",
  reading: "クロチマン ウリン キョルグク マンナル コヤ",
  japanese: "それでも私たちは、最後にはきっと出会える。",
  literalJapanese: "それでも私たちは結局会うだろう。",
  sentenceExplanation:
    "どんなに時間がかかっても、どれだけ迷っても、最後にはきっと会えると信じている。",
  nuance:
    "결국 には、遠回りしても最後にはそこへ行き着くという粘り強さがある。",
  roleInSong:
    "ブリッジの希望。時間の壁を描いたあとでも、結末だけは諦めていない。",
  tokens: [
    ko("그렇지만", "그렇지만", "それでも", "それでも、だけど"),
    ko("결국", "결국", "結局は", "結局は、最後には"),
    ko("만날 거야", "만나다", "会えるはずだ", "会えるはずだ、会うだろう", {
      breakdown: "만나다 + -ㄹ 거야",
    }),
  ],
};

const line24Spec: LineSpec = {
  korean: "진심인 것만 알아줘 정말",
  reading: "チンシミン コンマン アラジョ チョンマル",
  japanese: "これだけは分かって。本気なんだ、本当に。",
  literalJapanese: "本心であることだけ分かって、本当に。",
  sentenceExplanation:
    "すれ違っていても未熟でも、この気持ちが本気だということだけは知ってほしいと願っている。",
  nuance:
    "説明よりも、『本気なんだ』という一点だけを受け取ってほしい切実さがある。",
  roleInSong:
    "ブリッジで気持ちの核心を直接相手へ向ける行。",
  tokens: [
    ko("진심인", "진심이다", "本気な", "本心である", {
      breakdown: "진심이다 + -ㄴ",
    }),
    ko("것만", "것만", "それだけ", "それだけ、ことだけ", {
      breakdown: "것 + -만",
    }),
    ko("알아줘", "알아주다", "分かってほしい", "分かってほしい、受け取ってほしい", {
      breakdown: "알다 + -아/어 주다",
      meaningInThisLine: "この恋が軽いものではないと知ってほしいこと。",
    }),
    ko("정말", "정말", "本当に", "本当に"),
  ],
};

const line25Spec: LineSpec = {
  korean: "서툴기만 한대도",
  reading: "ソトゥルギマン ハンデド",
  japanese: "たとえ不器用なだけだとしても。",
  literalJapanese: "ただ不器用なだけだとしても。",
  sentenceExplanation:
    "今の自分たちはまだ不器用でしかないとしても、それでも真剣だと続けている。",
  nuance:
    "完璧ではないことを認めたうえで、それでも気持ち自体は否定しない姿勢がある。",
  roleInSong:
    "ブリッジの締め。未熟さを抱えたままでも、想いの真剣さは残ると示す。",
  grammarPoints: [
    {
      title: "-기만 하다",
      meaning: "ただ〜するだけだ",
      explanation:
        "ほかの要素はなく、それだけだと限定する形。서툴기만 하다 で『不器用なだけだ』。",
      example: "울기만 했어",
      exampleJapanese: "泣いてばかりいた",
    },
  ],
  tokens: [
    ko("서툴기만", "서툴기만", "不器用でばかり", "不器用でばかり、ただ不器用なだけ", {
      breakdown: "서툴다 + -기만",
    }),
    ko("한대도", "하다", "だとしても", "だとしても、そうだとしても", {
      explanation: "歌詞では口語的に縮まっていて、譲歩のニュアンスで使われている。",
      meaningInThisLine: "たとえ今の自分たちが未熟でも、という譲歩。",
    }),
  ],
};

const line26Spec: LineSpec = {
  korean: "거친 세상 속에서 너를 안아줄게",
  reading: "コチン セサン ソゲソ ノルル アナジュルケ",
  japanese: "厳しい世界の中で、あなたを抱きしめてあげる。",
  literalJapanese: "荒い世界の中で、あなたを抱きしめてあげる。",
  sentenceExplanation:
    "最後のサビでは手を握るよりさらに近い距離で、相手を守り包み込みたいという願いが出てくる。",
  nuance:
    "関係が一歩進んだ未来を想像しているぶん、前の 손을 잡아줄게 より親密さが強い。",
  roleInSong:
    "3回目サビの変化。未来の守り方が『手を握る』から『抱きしめる』へ深まる。",
  tokens: [
    ko("거친 세상 속에서", "거친 세상 속", "荒い世界の中で", "厳しい世界の中で", {
      breakdown: "거칠다 + -ㄴ + 세상 + 속 + -에서",
    }),
    ko("너를", "너", "あなたを", "あなたを", {
      breakdown: "너 + -를",
    }),
    ko("안아줄게", "안아주다", "抱きしめてあげるよ", "抱きしめてあげるよ", {
      breakdown: "안다 + -아/어 주다 + -ㄹ게",
      meaningInThisLine: "未来では今よりもっと近くで相手を守りたいこと。",
    }),
  ],
};

const line27Spec: LineSpec = {
  korean: "이거 하나만 약속해",
  reading: "イゴ ハナマン ヤクソケ",
  japanese: "これだけは約束して。",
  literalJapanese: "これ一つだけ約束して。",
  sentenceExplanation:
    "たくさんは望まないから、たった一つだけ守ってほしい願いを差し出している。",
  nuance:
    "大きな願いのあとの『一つだけ』が、かえって切実さを強くする。",
  roleInSong:
    "ラストで未来への願いが、相手への具体的なお願いへ変わる入口。",
  tokens: [
    ko("이거", "이거", "これ", "これ"),
    ko("하나만", "하나만", "一つだけ", "一つだけ", {
      breakdown: "하나 + -만",
    }),
    ko("약속해", "약속하다", "約束して", "約束して", {
      breakdown: "약속하다 + -아/어",
    }),
  ],
};

const line28Spec: LineSpec = {
  korean: "변치 않기를 바랄게",
  reading: "ピョンチ アンキルル パラルケ",
  japanese: "変わらずにいてほしい。",
  literalJapanese: "変わらないことを願うね。",
  sentenceExplanation:
    "未来に時間が流れても、今の気持ちや笑顔が変わらないでいてほしいと願っている。",
  nuance:
    "『私を好きでいて』とまでは言わず、まず『変わらないで』と願う控えめさがこの曲らしい。",
  roleInSong:
    "エンディングの核心。時間を越えたい曲だからこそ、『変わらないこと』がいちばん大事な願いになる。",
  grammarPoints: [
    {
      title: "-기를 바라다",
      meaning: "〜することを願う",
      explanation:
        "願いの内容を表す形。변치 않기를 で『変わらないことを』。",
      example: "행복하길 바랄게",
      exampleJapanese: "幸せでいてほしいと願うよ",
    },
  ],
  tokens: [
    ko("변치 않기를", "변치 않다", "変わらないことを", "変わらないことを", {
      breakdown: "변하다 + -지 않다 + -기 + -를",
      meaningInThisLine: "時間が流れても今の気持ちが消えないこと。",
    }),
    ko("바랄게", "바라다", "願うね", "願うね、願っているよ", {
      breakdown: "바라다 + -ㄹ게",
    }),
  ],
};

const line29Spec: LineSpec = {
  korean: "그때도 지금처럼 날 향해 웃어줘",
  reading: "クテド チグムチョロム ナル ヒャンヘ ウソジョ",
  japanese: "その時も今みたいに、私に笑いかけて。",
  literalJapanese: "その時も今のように、私に向かって笑って。",
  sentenceExplanation:
    "未来になっても、今見せてくれている笑顔を自分に向けてほしいと願っている。",
  nuance:
    "大きな奇跡よりも、笑顔ひとつを守りたいという願いがとても具体的でやさしい。",
  roleInSong:
    "ラストで『変わらないでほしいもの』が、相手の笑顔として具体化される。",
  tokens: [
    ko("그때도", "그때도", "その時も", "その時も"),
    ko("지금처럼", "지금처럼", "今のように", "今のように", {
      breakdown: "지금 + -처럼",
    }),
    ko("날 향해", "나를 향해", "私に向かって", "私に向かって", {
      breakdown: "나를 → 날 + 향해",
    }),
    ko("웃어줘", "웃어주다", "笑いかけて", "笑いかけて、笑って見せて", {
      breakdown: "웃다 + -어 주다",
    }),
  ],
};

const line30Spec: LineSpec = {
  korean: "시간이 흘러서",
  reading: "シガニ フルロソ",
  japanese: "時が流れて。",
  literalJapanese: "時間が流れて。",
  sentenceExplanation:
    "これまで願ってきた未来が、本当に時間の経過の先にあることを改めて置いている。",
  nuance:
    "タイトルの 시간을 달려서 に対して、ここでは時間が自然に流れていく感覚がある。",
  roleInSong:
    "ラストの未来条件をもう一度静かに置く一行。",
  tokens: [
    ko("시간이", "시간", "時間が", "時間が", {
      breakdown: "시간 + -이",
    }),
    ko("흘러서", "흐르다", "流れて", "流れて", {
      breakdown: "흐르다 + -아/어서",
      meaningInThisLine: "いずれ本当に大人になるまでの時間の流れ。",
    }),
  ],
};

const line31Spec: LineSpec = {
  korean: "엇갈림 그 속에서 손을 잡아줄게",
  reading: "オッカルリム ク ソゲソ ソヌル チャバジュルケ",
  japanese: "すれ違いの中でも、あなたの手を握ってあげる。",
  literalJapanese: "すれ違い、その中で手を握ってあげる。",
  sentenceExplanation:
    "未来では、すれ違いが完全に消えなくても、その中でちゃんと相手の手を握ると誓っている。",
  nuance:
    "理想の世界ではなく、難しさを含んだ現実の中で支えるというのがこの曲の成熟したやさしさ。",
  roleInSong:
    "ラストの締め。時間を越えた先で、すれ違いさえ抱えたまま結ばれたいという願いで終わる。",
  tokens: [
    ko("엇갈림", "엇갈림", "すれ違い", "すれ違い、行き違い", {
      relatedWords: ["엇갈리다", "어긋나다"],
    }),
    ko("그 속에서", "그 속에서", "その中で", "その中で", {
      breakdown: "그 속 + -에서",
    }),
    ko("손을", "손", "手を", "手を", {
      breakdown: "손 + -을",
    }),
    ko("잡아줄게", "잡아주다", "握ってあげるよ", "握ってあげるよ、つないであげるよ", {
      breakdown: "잡다 + -아/어 주다 + -ㄹ게",
      meaningInThisLine: "完全ではない関係の中でも手放さない意志。",
    }),
  ],
};

export const completeRoughLines: LyricLine[] = [
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
  line(14, { ...line14Spec, sectionBreakAfter: true }),
  line(15, line15Spec),
  line(16, line16Spec),
  line(17, line17Spec),
  line(18, line18Spec),
  line(19, line19Spec),
  line(20, line6Spec),
  line(21, line20Spec),
  line(22, { ...line21Spec, sectionBreakAfter: true }),
  line(23, line9Spec),
  line(24, line10Spec),
  line(25, line11Spec),
  line(26, line12Spec),
  line(27, line13Spec),
  line(28, { ...line14Spec, sectionBreakAfter: true }),
  line(29, line22Spec),
  line(30, line23Spec),
  line(31, line24Spec),
  line(32, { ...line25Spec, sectionBreakAfter: true }),
  line(33, line9Spec),
  line(34, line10Spec),
  line(35, line11Spec),
  line(36, line12Spec),
  line(37, line13Spec),
  line(38, { ...line26Spec, sectionBreakAfter: true }),
  line(39, line27Spec),
  line(40, line28Spec),
  line(41, line29Spec),
  line(42, line30Spec),
  line(43, line13Spec),
  line(44, line31Spec),
];

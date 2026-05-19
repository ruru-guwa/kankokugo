import type { Song } from "../../types/song";
import { completeMeGustasTuLines } from "./_me-gustas-tu-lines-all";

const expandTextMap = (
  groups: Array<[number[], string]>,
): Record<number, string> =>
  Object.fromEntries(
    groups.flatMap(([numbers, text]) => numbers.map((number) => [number, text])),
  );

const combineRole = (
  sectionRole?: string,
  lineRole?: string,
): string | undefined => {
  if (sectionRole && lineRole) {
    return `${sectionRole} ${lineRole}`;
  }

  return sectionRole ?? lineRole;
};

const meGustasTuSectionRoleMap = expandTextMap([
  [[1, 2, 3, 4, 5, 6, 7], "イントロ兼リフレイン。ときめき、祈り、告白を一気に明るく提示して、この曲の世界を最初に決める。"],
  [[8, 9, 10, 11, 12, 13], "1番Aメロ。照れと不安で動けない二人を描きながら、告白へ向かう理由を少しずつ固める。"],
  [[14, 15, 16], "1回目サビ。勇気を出して気持ちを伝え、二人の関係を始めたいとやさしく差し出す中心部。"],
  [[17, 18, 19, 20, 21, 22], "リフレイン。最初の告白フレーズが、もう少し現実味を帯びた希望として繰り返される。"],
  [[23, 24, 25, 26, 27, 28], "2番Aメロ。後ろにいた二人が一歩前へ進み、約束と思い出の未来まで想像し始める。"],
  [[29, 30, 31], "2回目サビ。『二人で』から『一つになって』へ進み、関係の理想像が少し深まる。"],
  [[32, 33, 34, 35], "終盤前の反復。最初のときめきと告白が、もう共有されかけた気持ちとして戻ってくる。"],
  [[36, 37, 38], "ブリッジ。好きという高鳴りが、包み込む愛情と感謝へ育っていくパート。"],
  [[39, 40, 41, 42, 43, 44, 45], "エンディング。最初のフレーズへ戻りつつ、もう不安より希望のほうが強いまま締めていく。"],
]);

const meGustasTuExtraGrammar: Record<
  number,
  Array<{
    title: string;
    meaning: string;
    explanation: string;
    example?: string;
    exampleJapanese?: string;
  }>
> = {
  1: [
    {
      title: "動詞 + 향한",
      meaning: "〜へ向かった、〜に向けた",
      explanation:
        "향하다 の連体形で、気持ちの向かう先を表す。널 향한 は『あなたへ向かった』。",
      example: "꿈을 향한 마음",
      exampleJapanese: "夢へ向かった気持ち",
    },
  ],
  12: [
    {
      title: "-처럼",
      meaning: "〜のように",
      explanation:
        "比喩を作る助詞。꽃잎처럼 で『花びらのように』。",
      example: "아이처럼 웃어",
      exampleJapanese: "子どものように笑う",
    },
  ],
  16: [
    {
      title: "-고 싶어",
      meaning: "〜したい",
      explanation:
        "願望をくだけて表す基本形。전하고 싶어 で『伝えたい』。",
      example: "만나고 싶어",
      exampleJapanese: "会いたい",
    },
  ],
  23: [
    {
      title: "-아/어 서",
      meaning: "〜して",
      explanation:
        "動作をつないで流れを作る形。서서 は『立って、その状態で』。",
      example: "앉아서 기다려",
      exampleJapanese: "座って待って",
    },
  ],
  26: [
    {
      title: "-아/어 주세요",
      meaning: "〜してください",
      explanation:
        "相手へやわらかくお願いする形。아껴주세요 で『大切にしてください』。",
      example: "기다려 주세요",
      exampleJapanese: "待ってください",
    },
  ],
  28: [
    {
      title: "-는데",
      meaning: "〜のに、〜けれど",
      explanation:
        "状況説明や含みを持たせる接続形。가는데 で『過ぎていくのに』。",
      example: "괜찮은데 왜 그래",
      exampleJapanese: "大丈夫なのにどうしたの",
    },
  ],
  29: [
    {
      title: "名詞 + 되다",
      meaning: "〜になる",
      explanation:
        "状態や立場の変化を表す基本形。하나 되어 は『一つになって』。",
      example: "친구가 됐어",
      exampleJapanese: "友達になった",
    },
  ],
  38: [
    {
      title: "-운",
      meaning: "〜な、〜である",
      explanation:
        "形容詞 고맙다 が名詞を修飾する連体形。고마운 마음 は『ありがたい気持ち』。",
      example: "따뜻한 마음",
      exampleJapanese: "あたたかい気持ち",
    },
  ],
};

const meGustasTuTokenMeanings: Record<number, Record<string, string>> = {
  1: {
    "널 향한": "この歌の最初から、気持ちの向き先がもう相手にはっきり決まっていること。",
  },
  4: {
    "노을 빛": "明るい恋の歌の中に少しだけ切なさを混ぜる夕焼け色。",
  },
  6: {
    "Me gustas tu": "韓国語より少し軽やかで、弾むように『好き』を差し出せる告白フレーズ。",
  },
  7: {
    좋아해요: "スペイン語のサビを、韓国語でもちゃんと意味に着地させる素直な言葉。",
  },
  9: {
    센치: "悲しいというより、恋で胸がきゅっとする感傷のかわいい言い方。",
  },
  13: {
    "알 수가 없잖아": "未来が読めないからこそ、今の気持ちを後回しにしたくない理由づけ。",
  },
  15: {
    느껴봐요: "急がずに、お互いを少しずつ感じて知っていきたい提案。",
  },
  16: {
    "전하고 싶어": "好意を抱えるだけでなく、ちゃんと相手へ渡したいという本音。",
  },
  23: {
    "한 걸음": "後ろにいた二人が、今度は自分たちの意思で前へ出る歩幅。",
  },
  24: {
    "놓지 말기로": "つながった関係を手放さないと、未来の形で約束すること。",
  },
  25: {
    "꼭 꼭": "大切な思い出を逃がさないように、ぎゅっと抱えるかわいさ。",
  },
  26: {
    아껴주세요: "自分も関係も、今よりもっと大事にしてほしいというやさしいお願い。",
  },
  29: {
    "하나 되어": "一緒にいるだけでなく、気持ちまで通わせて一つになりたい願い。",
  },
  36: {
    감싸줄게요: "好きと言う段階を越えて、相手を包み守りたい愛情。",
  },
  37: {
    "사랑이란 말": "前半で言えなかった言葉が、後半では『言わなくても伝わるもの』へ変わっている。",
    "느낄 수 있어요": "もう言葉だけに頼らなくても愛情を感じ取れる段階に近づいていること。",
  },
  38: {
    "고마운 마음을": "恋の高鳴りだけでなく、相手がいてくれることへの感謝まで含んだ気持ち。",
  },
  40: {
    "오늘부터 우리는": "ラストでは宣言よりも、もう始まりを信じている言葉として響く。",
  },
};

const meGustasTuExtraSentenceExplanations: Record<number, string> = {
  17: "ここでは最初の高鳴りが、もう『告白して始めたい関係』を抱えたときめきとして戻ってくる。",
  18: "同じ反復でも、1回目より『祈るだけ』ではなく『始めたい』気持ちが少し前へ出て聞こえる。",
  23: "2番では一歩後ろではなく一歩前へ立つことで、二人の関係が少しだけ進んだことを見せている。",
  24: "告白の次の段階として、ここではもう『手を離さない』約束が具体的に置かれている。",
  25: "未来の思い出を先に大切なものとして想像しているところに、この曲の明るい恋の始まり方がある。",
  29: "2回目サビでは『二人で』からさらに進み、心まで一つになりたい理想像へ広がっている。",
  36: "ブリッジでは恋の勢いより、相手を守って包みたいというやさしい愛情が前に出る。",
  37: "前半では言いたかった『好き』が、後半では言葉にしなくても伝わるものへ成長している。",
  38: "最後に感謝の気持ちが加わることで、ときめきだけではない少し落ち着いた愛情になる。",
  40: "エンディングでこのフレーズが来ると、最初の不安より『本当に始まりそう』な希望が強く残る。",
};

const meGustasTuExtraNuance: Record<number, string> = {
  17: "同じ設計のフレーズでも、ここでは告白後の余韻が少し乗っていて聞こえ方が明るい。",
  18: "『祈る』は受け身に見えて、実際には関係を始めたい意志をやわらかく包んでいる。",
  23: "一歩という小さな変化だけで、関係の前進がとても可愛く見える行。",
  24: "かなり恋人らしい内容なのに、해요 体の柔らかさで重くならないのがこの曲らしい。",
  25: "꼭 꼭 の反復が、未来の記憶を大事に抱きしめる感じを音でも作っている。",
  29: "『一つになる』は強すぎる独占ではなく、心が通い合う理想を明るく描いたもの。",
  36: "感싸주다 には包容力があり、好きの高揚がやさしい保護へ変わっているのが分かる。",
  37: "ここまで来ると告白の歌でありながら、言葉を越える安心感まで少し見えてくる。",
  38: "感謝が入ることで、初恋のときめきが少し成熟した愛情に触れる。",
  40: "最後は同じ言葉でも『願い』より『始まりを信じる声』に近い響きになる。",
};

export const gfriendMeGustasTu: Song = {
  id: "gfriend-me-gustas-tu",
  title: "오늘부터 우리는 (Me gustas tu)",
  artist: "GFRIEND",
  difficulty: "中級",
  tags: ["初恋", "告白", "ときめき", "青春", "スペイン語ミックス", "中級"],

  overview:
    "『恥ずかしくて言えなかった好きという気持ちを、今日から勇気を出して伝えたい』という、初々しくて明るい恋の歌。前半では照れて何も言えなかった二人が、一歩後ろから一歩前へ進み、風や夕焼けや月明かりに気持ちを乗せながら少しずつ関係を始めようとします。スペイン語の “Me gustas tu” と韓国語の “좋아해요” を重ねることで、ストレートな告白をかわいく軽やかに響かせているのも特徴です。",

  lines: completeMeGustasTuLines.map((line, index) => {
    const lineNumber = index + 1;
    const extraGrammar =
      meGustasTuExtraGrammar[lineNumber]?.map(
        (grammarPoint, grammarIndex) => ({
          id: `line-${lineNumber}-extra-g${grammarIndex + 1}`,
          ...grammarPoint,
        }),
      ) ?? [];

    return {
      ...line,
      roleInSong: combineRole(
        meGustasTuSectionRoleMap[lineNumber],
        line.roleInSong,
      ),
      sentenceExplanation:
        meGustasTuExtraSentenceExplanations[lineNumber] ??
        line.sentenceExplanation,
      nuance: meGustasTuExtraNuance[lineNumber] ?? line.nuance,
      grammarPoints: [...(line.grammarPoints ?? []), ...extraGrammar],
      tokens: line.tokens.map((token) => ({
        ...token,
        meaningInThisLine:
          meGustasTuTokenMeanings[lineNumber]?.[token.surface] ??
          token.meaningInThisLine,
      })),
    };
  }),

  quizzes: [
    {
      id: "q1",
      type: "word-meaning",
      question: "설레임 / 설렘 の意味は？",
      choices: ["ときめき", "約束", "勇気", "恋しさ"],
      answer: "ときめき",
      explanation:
        "好きな人を思う時の胸の高鳴りを表します。歌詞では 널 향한 설레임 として出てきます。",
      songId: "gfriend-me-gustas-tu",
    },
    {
      id: "q2",
      type: "grammar",
      question: "「-부터」の意味は？",
      choices: ["〜から", "〜まで", "〜より", "〜だけ"],
      answer: "〜から",
      explanation:
        "오늘부터 は『今日から』。この曲の関係の始まりを示す大事な助詞です。",
      songId: "gfriend-me-gustas-tu",
    },
    {
      id: "q3",
      type: "word-meaning",
      question: "Me gustas tu の自然な意味は？",
      choices: ["あなたが好き", "私を見て", "一緒に行こう", "大丈夫だよ"],
      answer: "あなたが好き",
      explanation:
        "スペイン語のフレーズで、韓国語の 좋아해요 と同じように『あなたが好き』という意味です。",
      songId: "gfriend-me-gustas-tu",
    },
    {
      id: "q4",
      type: "grammar",
      question: "「-며」の意味は？",
      choices: ["〜しながら", "〜してから", "〜したい", "〜できない"],
      answer: "〜しながら",
      explanation:
        "꿈꾸며 で『夢見ながら』。二つの動きを同時にやわらかく並べています。",
      songId: "gfriend-me-gustas-tu",
    },
    {
      id: "q5",
      type: "word-meaning",
      question: "내 맘을 실어 보낼게 の自然な意味は？",
      choices: [
        "私の気持ちを乗せて送るね",
        "私の心を隠しておくね",
        "私の想いを忘れるね",
        "私の夢を壊すね",
      ],
      answer: "私の気持ちを乗せて送るね",
      explanation:
        "風や夕焼けに気持ちを託して届けたい、という詩的な表現です。",
      songId: "gfriend-me-gustas-tu",
    },
    {
      id: "q6",
      type: "word-meaning",
      question: "그리운 마음 の意味は？",
      choices: ["恋しい気持ち", "勇気ある言葉", "明るい未来", "小さな約束"],
      answer: "恋しい気持ち",
      explanation:
        "그립다 は『恋しい、会いたい』。近づきたいのにまだ距離がある気持ちです。",
      songId: "gfriend-me-gustas-tu",
    },
    {
      id: "q7",
      type: "grammar",
      question: "아무 + 名詞 + 도 の意味は？",
      choices: ["何の〜も", "どこかで〜", "少しだけ〜", "全部〜"],
      answer: "何の〜も",
      explanation:
        "아무 말도 못하는 で『何も言えない』という意味になります。",
      songId: "gfriend-me-gustas-tu",
    },
    {
      id: "q8",
      type: "word-meaning",
      question: "다가가고 싶은데 の自然な意味は？",
      choices: [
        "近づきたいのに",
        "離れたくなくて",
        "言ってみたいから",
        "忘れられなくて",
      ],
      answer: "近づきたいのに",
      explanation:
        "気持ちは前へ進んでいるのに、照れくささで行動できない状態を表しています。",
      songId: "gfriend-me-gustas-tu",
    },
    {
      id: "q9",
      type: "grammar",
      question: "「-잖아」の意味は？",
      choices: ["〜じゃない、〜でしょ", "〜したい", "〜できる", "〜してしまう"],
      answer: "〜じゃない、〜でしょ",
      explanation:
        "미래는 알 수가 없잖아 で『未来なんて分からないじゃない』と自分に言い聞かせています。",
      songId: "gfriend-me-gustas-tu",
    },
    {
      id: "q10",
      type: "word-meaning",
      question: "용기 내서 고백할게요 の自然な意味は？",
      choices: [
        "勇気を出して告白するね",
        "黙って待っているね",
        "思い出をしまっておくね",
        "未来を忘れないでね",
      ],
      answer: "勇気を出して告白するね",
      explanation:
        "この曲の大きな転換点で、照れて言えなかった状態から前へ進む決意です。",
      songId: "gfriend-me-gustas-tu",
    },
    {
      id: "q11",
      type: "grammar",
      question: "보단 の意味は？",
      choices: ["〜よりは", "〜だけは", "〜までに", "〜のために"],
      answer: "〜よりは",
      explanation:
        "하나보단 둘이서、둘 보단 하나 되어 のように比較の意味で使われています。",
      songId: "gfriend-me-gustas-tu",
    },
    {
      id: "q12",
      type: "word-meaning",
      question: "두 손을 놓지 말기로 약속해요 の自然な意味は？",
      choices: [
        "つないだ手を離さないと約束しよう",
        "二人で遠くへ行こう",
        "今はまだ友達でいよう",
        "思い出を大切にしよう",
      ],
      answer: "つないだ手を離さないと約束しよう",
      explanation:
        "놓지 말다（離さない）+ -기로 하다（〜することにする）の組み合わせです。",
      songId: "gfriend-me-gustas-tu",
    },
    {
      id: "q13",
      type: "grammar",
      question: "「-아/어 두다」の意味は？",
      choices: ["〜しておく", "〜してみる", "〜できない", "〜するしかない"],
      answer: "〜しておく",
      explanation:
        "담아둘게요 で『しまっておくね』。大切な記憶を心に残しておく感じです。",
      songId: "gfriend-me-gustas-tu",
    },
    {
      id: "q14",
      type: "word-meaning",
      question: "감싸줄게요 の自然な意味は？",
      choices: [
        "包み込んであげるね",
        "近づいていくね",
        "手を離さないよ",
        "夢を見ているよ",
      ],
      answer: "包み込んであげるね",
      explanation:
        "感싸다 は『包む』。相手をやさしく守るような愛情の表現です。",
      songId: "gfriend-me-gustas-tu",
    },
    {
      id: "q15",
      type: "which-song",
      question: "「오늘부터 우리는」はどの曲？",
      text: "오늘부터 우리는",
      choices: [
        "오늘부터 우리는 (Me gustas tu)",
        "시간을 달려서 (Rough)",
        "봄의 나라 이야기 (April Story)",
        "REBEL HEART",
      ],
      answer: "오늘부터 우리는 (Me gustas tu)",
      explanation:
        "GFRIEND『오늘부터 우리는 (Me gustas tu)』。今日から二人の関係が始まる、という曲の核になるフレーズです。",
      songId: "gfriend-me-gustas-tu",
    },
    {
      id: "q16",
      type: "fill-blank",
      question: "「사랑이란 말 안 해도 _____ 수 있어요」の空欄に入るのは？",
      choices: ["느낄", "잡을", "보낼", "그릴"],
      answer: "느낄",
      explanation:
        "느낄 수 있어요 で『感じることができます』。言葉にしなくても伝わる愛情を表しています。",
      songId: "gfriend-me-gustas-tu",
    },
    {
      id: "q17",
      type: "word-meaning",
      question: "한 걸음 앞에 서서 の自然な意味は？",
      choices: [
        "一歩前に進んで",
        "元の場所に戻って",
        "黙って見守って",
        "遠くへ離れて",
      ],
      answer: "一歩前に進んで",
      explanation:
        "前半の 한 발짝 뒤에 섰던 우리 から進んで、2番ではちゃんと前へ出ようとしています。",
      songId: "gfriend-me-gustas-tu",
    },
    {
      id: "q18",
      type: "word-meaning",
      question: "꼭 꼭 담아둘게요 の自然な意味は？",
      choices: [
        "しっかり胸にしまっておくね",
        "すぐに言ってしまうね",
        "遠くへ送っておくね",
        "全部忘れてしまうね",
      ],
      answer: "しっかり胸にしまっておくね",
      explanation:
        "大切になる思い出を、ぎゅっと心の中に残しておきたい気持ちです。",
      songId: "gfriend-me-gustas-tu",
    },
    {
      id: "q19",
      type: "word-meaning",
      question: "아껴주세요 の自然な意味は？",
      choices: [
        "大切にしてください",
        "忘れないでください",
        "急いでください",
        "見つめてください",
      ],
      answer: "大切にしてください",
      explanation:
        "지금보다 더 아껴주세요 は『今よりもっと大切にしてね』というやさしいお願いです。",
      songId: "gfriend-me-gustas-tu",
    },
    {
      id: "q20",
      type: "grammar",
      question: "「-아/어 주세요」の意味は？",
      choices: ["〜してください", "〜してみたい", "〜してしまった", "〜しなくてもいい"],
      answer: "〜してください",
      explanation:
        "아껴주세요 のように、相手へやわらかくお願いする形です。",
      songId: "gfriend-me-gustas-tu",
    },
  ],
};

import type { Song } from "../../types/song";
import { completeFeelMyRhythmLines } from "./_feel-my-rhythm-lines-all";

const expandTextMap = (
  groups: Array<[number[], string]>,
): Record<number, string> =>
  Object.fromEntries(
    groups.flatMap(([numbers, text]) => numbers.map((number) => [number, text])),
  );

const feelMyRhythmSectionBreaks = new Set([10, 22, 38, 52, 62]);

const feelMyRhythmRoleMap = expandTextMap([
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    "導入。整った舞踏会をひっくり返し、自分たちの型破りな祝祭へ相手を招き入れるオープニング。",
  ],
  [
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
    "1回目のサビ。偏見や形式から自由になり、月明かりの下で同じリズムに入ろうと誘う中心パート。",
  ],
  [
    [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38],
    "2番。クラシックな車で別次元へ向かい、相手に引かれながら世界の境界そのものをかき混ぜていく幻想旅行のパート。",
  ],
  [
    [39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    "2回目のサビ。花びら、シャンパン、今という瞬間を重ねながら、昨日と明日ではなく『今の自由』をもう一度強く押し出す。",
  ],
  [
    [53, 54, 55, 56, 57, 58, 59, 60, 61, 62],
    "ブリッジ。世界が止まる一瞬から、映画のような場面、時計を巻き戻す感覚へ進み、もう一度物語を始める転換部。",
  ],
  [
    [63, 64, 65, 66, 67, 68, 69, 70],
    "ラストサビ。最初の誘いへ戻りつつ、最後は『終わらない夢』としてこの夜とリズムを余韻の中に残して締める。",
  ],
]);

const feelMyRhythmReadingMap: Record<number, string> = {
  2: "ムドフェルル ティジボ",
  3: "チャグン ソラヌル ト イルキョ",
  6: "トゥンジャンブト インサッカジ パギョクチョギゲ",
  7: "ウリ サルッチャク ノラボルッカ",
  8: "ソルジカゲ Bae bae",
  9: "チグムブト シジャケ ボルケ",
  11: "コッカルルル ナルリョ",
  12: "ポクチュグル ト クゲ トトゥリョ",
  13: "ウリル オマングァ ピョンギョネ カドゥジ マ",
  14: "チャユロウォ チグム",
  16: "サンサンヘ バ ムォドゥンジ",
  17: "ノレルル ッタラソ チョ タルビチェ チュムル チョ",
  18: "パロ チグム Play my rhythm",
  20: "ヘガ ットオル ッテッカジ",
  21: "Feel my rhythm モムチュジ マラ ジョ",
  22: "イ スンガヌル ノッチ マ Baby",
  25: "イジェ チョグム ナッソン タルン チャウォンッカジ",
  27: "サンサンハル ス オプトン コッ シガン ソク",
  28: "イェゴ オプシ トゥンジャンヘ",
  29: "イ バムン モッチゴ ウリン",
  31: "シソヌル ックヌン ネ Motion",
  33: "ックトムヌン Black holeチョロム",
  34: "パジョドゥヌン Sweet emotion",
  35: "ノルル テウン チェ Sway",
  36: "オディロドゥン ットナルレ Way",
  37: "オン セサン モドゥン キョンゲルル",
  38: "タ フィジョウルレ Oh yeah",
  39: "コッカルルル ナルリョ",
  40: "フンナルリョ",
  41: "Champagneウル ト クゲ トトゥリョ",
  42: "マウムコッ",
  43: "トヌン オジェワ ネイレ カドゥジ マ",
  44: "チャユロウォ チグム",
  45: "Feel my rhythm Come with me",
  46: "サンサンヘ バ ムォドゥンジ",
  47: "ノレルル ッタラソ チョ タルビチェ チュムル チョ",
  48: "パロ チグム Play my rhythm",
  50: "ヘガ ットオル ッテッカジ",
  51: "Feel my rhythm モムチュジ マラ ジョ",
  52: "イ スンガヌル ノッチ マ Baby",
  53: "オン セサンイ モムチュヌン スンガン",
  55: "オソ ネ ソヌル チャバ",
  57: "ポン ジョク オプトン Film",
  58: "パジョドゥヌン You and I",
  59: "Next time シゲルル トルリョ",
  60: "オディロ カボルッカ",
  61: "Come on ットダシ シジャケ",
  63: "Feel my rhythm Come with me",
  64: "サンサンヘ バ ムォドゥンジ",
  65: "ノレルル ッタラソ チョ タルビチェ チュムル チョ",
  66: "パロ チグム Play my rhythm",
  68: "ヘガ ットオル ッテッカジ",
  69: "Feel my rhythm ックンナジ アンヌン ックム",
  70: "イ スンガヌル ノッチ マ Baby",
};

const feelMyRhythmExtraSentenceExplanations: Record<number, string> = {
  13: "ここはこの曲の思想の核で、華やかな舞踏会の話をしながら実際には『私たちを勝手に決めつけないで』と言っている。",
  23: "クラシックな車のイメージを出すことで、舞踏会と古典音楽の上品さをそのまま移動手段にしている。",
  27: "この行では空間だけでなく時間の中へも入っていくので、ただのドライブではなく次元移動に近くなる。",
  35: "あなたを乗せたまま揺れる、という表現で、一人の逃避ではなく二人で同じ幻想へ向かう感じが強くなる。",
  38: "境界を『越える』ではなく『かき回す』と言うので、きれいな分類そのものを壊す Red Velvet らしさが出る。",
  43: "最初の偏見からの自由に対して、ここでは時間からの自由が語られ、『今』の価値がさらに強調される。",
  53: "世界が止まる瞬間と置くことで、このブリッジは派手さよりも『特別な一瞬の濃さ』へ焦点が移る。",
  57: "現実の出来事ではなく『今まで見たことのない映画』として描くことで、この夜が完全に映像世界へ変わる。",
  59: "時計を巻き戻す発想で、過去や未来に縛られるのでなく、時間そのものを遊び道具にしている。",
  69: "最後だけ『멈추지 말아 줘』ではなく『끝나지 않는 꿈』に変わり、リズムそのものが夢の継続へ変わって終わる。",
};

const feelMyRhythmExtraNuance: Record<number, string> = {
  2: "『舞踏会をひっくり返す』ので、上品さを捨てるというより、クラシックな場を自分たちの色で塗り替える感じが強い。",
  6: "登場から挨拶までと言うことで、一瞬のサプライズではなく最初から最後まで世界観を崩さない姿勢が見える。",
  13: "오만과 편견 は『高慢と偏見』の連想もあり、クラシックな雰囲気のまま偏見批判を入れているのが面白い。",
  15: "Feel my rhythm は単なるビートでなく、『私の感覚・私たちの世界』ごと一緒に感じてという誘い。",
  17: "月明かりとダンスが重なることで、ここは現実のクラブではなく夢の舞踏会みたいな空気になる。",
  23: "Old and Classic のイメージで、古さが時代遅れではなく、むしろこの曲の気品として機能している。",
  27: "『想像できなかった場所』だけでなく『時間の中』まで入るので、空間移動よりもっと幻想的になる。",
  33: "Black hole はロマンチックさだけでなく、一度入ったら抜けられない強い引力も含んでいる。",
  38: "경계를 휘젓다 は境界を丁寧に超えるのでなく、混ぜて見えなくしてしまう乱暴さが心地いい。",
  42: "마음껏 が入ることで、祝祭感が『見ているだけ』ではなく『思いきり楽しむもの』へ変わる。",
  43: "昨日と明日から自由になると言うので、この曲の 핵심 は『今』を最大化することだと分かる。",
  53: "世界が止まる瞬間という大げさな表現が、かえってこの一瞬の体感の濃さを伝えている。",
  57: "Film の比喩で、現実の夜景ではなく映像のワンシーンみたいな美しさが立ち上がる。",
  59: "시계를 돌려 は後悔ではなく、もっと遊ぶために時間まで巻き戻したい感じで明るい。",
  69: "最後は夢が終わらないと締めるので、曲が終わっても世界観は続いている感覚が残る。",
};

const feelMyRhythmExtraGrammar: Record<
  number,
  Array<{
    title: string;
    meaning: string;
    explanation: string;
    example?: string;
    exampleJapanese?: string;
  }>
> = {
  7: [
    {
      title: "-아/어 볼까",
      meaning: "〜してみようか",
      explanation:
        "試しにやってみる感じを出す形。놀아볼까 で『遊んでみようか』という軽い誘いになる。",
      example: "먹어 볼까?",
      exampleJapanese: "食べてみようか？",
    },
  ],
  9: [
    {
      title: "-아/어 볼게",
      meaning: "〜してみるね",
      explanation:
        "話し手の軽い意志や約束を表す形。시작해 볼게 で『始めてみるね』。",
      example: "해 볼게",
      exampleJapanese: "やってみるね",
    },
  ],
  13: [
    {
      title: "-지 마",
      meaning: "〜しないで",
      explanation:
        "禁止や制止を表す基本形。가두지 마 で『閉じ込めないで』。",
      example: "울지 마",
      exampleJapanese: "泣かないで",
    },
  ],
  16: [
    {
      title: "-아/어 보다",
      meaning: "〜してみる",
      explanation:
        "試しにしてみるニュアンスを足す形。상상해 봐 で『想像してみて』。",
      example: "읽어 봐",
      exampleJapanese: "読んでみて",
    },
  ],
  20: [
    {
      title: "-까지",
      meaning: "〜まで",
      explanation:
        "時間や範囲の終点を表す。해가 떠올 때까지 で『日が昇るまで』。",
      example: "끝까지 해",
      exampleJapanese: "最後までやって",
    },
  ],
  21: [
    {
      title: "-지 말아 주다",
      meaning: "〜しないでくれる",
      explanation:
        "相手へのやわらかい依頼。멈추지 말아 줘 で『止まらないで』。",
      example: "가지 말아 줘",
      exampleJapanese: "行かないで",
    },
  ],
  27: [
    {
      title: "-ㄹ 수 없다",
      meaning: "〜できない",
      explanation:
        "能力・可能性の否定を表す。상상할 수 없던 で『想像できなかった〜』。",
      example: "볼 수 없어",
      exampleJapanese: "見ることができない",
    },
  ],
  35: [
    {
      title: "-ㄴ 채",
      meaning: "〜したまま",
      explanation:
        "ある状態を保ったまま次の動作へつなぐ形。태운 채 で『乗せたまま』。",
      example: "문을 연 채",
      exampleJapanese: "ドアを開けたまま",
    },
  ],
  36: [
    {
      title: "-ㄹ래",
      meaning: "〜したい、〜するつもり",
      explanation:
        "話し手の意志や希望をカジュアルに表す。떠날래 で『出かけたい』。",
      example: "갈래",
      exampleJapanese: "行きたい、行くよ",
    },
  ],
  47: [
    {
      title: "V-(으)ㄴ 적 없다",
      meaning: "〜したことがない",
      explanation:
        "経験の否定を表す形。본 적 없던 で『見たことのなかった〜』。",
      example: "가 본 적 없어",
      exampleJapanese: "行ったことがない",
    },
  ],
  53: [
    {
      title: "-는 순간",
      meaning: "〜する瞬間",
      explanation:
        "動作や状態が起きるちょうどその時を表す。멈추는 순간 で『止まる瞬間』。",
      example: "만나는 순간",
      exampleJapanese: "会う瞬間",
    },
  ],
  69: [
    {
      title: "-지 않는",
      meaning: "〜しない〜",
      explanation:
        "動詞の否定連体形で、後ろの名詞を説明する。끝나지 않는 꿈 で『終わらない夢』。",
      example: "변하지 않는 마음",
      exampleJapanese: "変わらない心",
    },
  ],
};

const feelMyRhythmTokenMeanings: Record<number, Record<string, string>> = {
  2: {
    무도회: "クラシックで上品な世界そのもの。ここではそれを舞台装置としてひっくり返す対象。",
    뒤집어: "壊すというより、上下を入れ替えるように世界の見え方ごと変えてしまう動き。",
  },
  6: {
    파격적이게: "ちょっと目立つ程度ではなく、常識を崩すくらい大胆に振る舞うこと。",
  },
  13: {
    "오만과 편견": "単なる悪口ではなく、他人が勝手にこちらを分類する古い枠組み。",
    "가두지 마": "その枠へ押し込めようとする視線そのものを拒否している言い方。",
  },
  15: {
    "Feel my rhythm":
      "音楽だけでなく、自分たちの感覚・空気・この夜の流れ全部を感じてという招待状。",
    "Come with me":
      "見物人でいないで、同じ世界へ一緒に入ってきてという誘い。",
  },
  17: {
    "노래를 따라서": "曲の流れに身をまかせ、考えるより先に動くこと。",
    달빛에: "現実の照明ではなく、夢や舞踏会を思わせる幻想的な明かり。",
    "춤을 춰": "説明する代わりに、体ごとこの世界へ入る行為。",
  },
  19: {
    "my heartbeat":
      "単なる拍子ではなく、自分の内側にある本物のリズムや生の鼓動。",
  },
  23: {
    차: "この夜を移動するための乗り物であり、クラシック世界の延長。",
    "Old and Classic":
      "古びているのでなく、気品と物語性をまとった雰囲気。",
  },
  27: {
    "상상할 수 없던": "あらかじめ思い描いていた範囲の外側にあること。",
    "시간 속": "空間だけでなく、時間の流れの中へまで入り込む感覚。",
  },
  31: {
    "시선을 끄는":
      "一度見たら自然に視線が持っていかれるほどの引力。",
    Motion: "ダンスの動きであり、その人の存在感そのもの。",
  },
  33: {
    끝없는: "限界が見えず、どこまでも続く引力の強さ。",
    "Black hole처럼":
      "一度引き寄せられたら抜け出せない魅力の比喩。",
  },
  34: {
    빠져드는: "自分から飛び込むというより、自然に深みへ吸い込まれていくこと。",
    "Sweet emotion": "甘く心地いいのに、少し危うさもある感情の渦。",
  },
  35: {
    "너를 태운 채":
      "一人の逃避ではなく、相手ごとこの旅へ連れていく状態。",
  },
  36: {
    어디로든: "行き先に制限がない自由さそのもの。",
    떠날래: "深く計画する前に、今の勢いで出発したい気持ち。",
  },
  38: {
    휘저을래: "きれいに整えるのでなく、全部混ぜてしまう大胆さ。",
  },
  42: {
    마음껏: "遠慮や self-control を外して、心ゆくまで楽しむこと。",
  },
  43: {
    더는: "もうこれ以上は、という切り替えの強さ。",
    "어제와 내일에": "過去の後悔と未来の不安、その両方の時間の縛り。",
  },
  53: {
    "멈추는 순간":
      "現実の時計まで止まったように感じる、極端に濃い一瞬。",
  },
  57: {
    "본 적 없던": "経験の中にまだない、完全に新しい感覚。",
    Film: "現実よりも少し非現実な、映像作品みたいな美しさ。",
  },
  59: {
    "시계를 돌려":
      "時間を戻すことで、もう一度別の場面や夢を始められる感覚。",
  },
  69: {
    "끝나지 않는 꿈":
      "この夜とリズムが曲の外でもまだ続いていくような、閉じきらない余韻。",
  },
};

export const redVelvetFeelMyRhythm: Song = {
  id: "red-velvet-feel-my-rhythm",
  title: "Feel My Rhythm",
  artist: "Red Velvet",
  difficulty: "中級",
  tags: ["幻想", "自由", "祝祭", "時間", "比喩表現", "英語ミックス", "中級"],

  overview:
    "『決めつけや偏見、過去や未来への縛りから抜け出して、今この瞬間のリズムに身を任せよう』という曲。舞踏会、花びら、花火、シャンパン、月明かり、クラシックな車、映画、時間の巻き戻しといったイメージを重ねながら、上品さと型破りさが同時にある幻想的な世界へ相手を誘っています。",

  lines: completeFeelMyRhythmLines.map((line, index) => {
    const lineNumber = index + 1;
    const extraGrammar =
      feelMyRhythmExtraGrammar[lineNumber]?.map((grammarPoint, grammarIndex) => ({
        id: `line-${lineNumber}-extra-g${grammarIndex + 1}`,
        ...grammarPoint,
      })) ?? [];

    return {
      ...line,
      roleInSong: feelMyRhythmRoleMap[lineNumber] ?? line.roleInSong,
      sectionBreakAfter: feelMyRhythmSectionBreaks.has(lineNumber),
      reading: feelMyRhythmReadingMap[lineNumber] ?? line.reading,
      sentenceExplanation:
        feelMyRhythmExtraSentenceExplanations[lineNumber] ?? line.sentenceExplanation,
      nuance: feelMyRhythmExtraNuance[lineNumber] ?? line.nuance,
      grammarPoints: [...(line.grammarPoints ?? []), ...extraGrammar],
      tokens: line.tokens.map((token) => ({
        ...token,
        meaningInThisLine:
          feelMyRhythmTokenMeanings[lineNumber]?.[token.surface] ??
          token.meaningInThisLine,
      })),
    };
  }),

  quizzes: [
    {
      id: "q1",
      type: "word-meaning",
      question: "무도회 の意味は？",
      choices: ["舞踏会", "映画", "境界", "花火"],
      answer: "舞踏会",
      explanation: "무도회 は『舞踏会』。この曲全体のクラシックで華やかな世界観の入口です。",
      songId: "red-velvet-feel-my-rhythm",
    },
    {
      id: "q2",
      type: "grammar",
      question: "「-지 마」の意味は？",
      choices: ["〜しないで", "〜してみよう", "〜するために", "〜だったのに"],
      answer: "〜しないで",
      explanation: "가두지 마 で『閉じ込めないで』。禁止や制止を表す基本形です。",
      songId: "red-velvet-feel-my-rhythm",
    },
    {
      id: "q3",
      type: "word-meaning",
      question: "편견 の意味は？",
      choices: ["偏見", "勇気", "月明かり", "自由"],
      answer: "偏見",
      explanation: "편견 は『偏見』。この曲では他人の決めつけや固定観念を指します。",
      songId: "red-velvet-feel-my-rhythm",
    },
    {
      id: "q4",
      type: "grammar",
      question: "「-ㄴ 채」の意味は？",
      choices: ["〜したまま", "〜しそうだ", "〜しなければならない", "〜したことがある"],
      answer: "〜したまま",
      explanation: "너를 태운 채 で『あなたを乗せたまま』という意味です。",
      songId: "red-velvet-feel-my-rhythm",
    },
    {
      id: "q5",
      type: "word-meaning",
      question: "경계 の意味は？",
      choices: ["境界", "時計", "舞踏会", "感覚"],
      answer: "境界",
      explanation: "경계 は『境界、境目』。この曲では世界のあらゆる境目を指します。",
      songId: "red-velvet-feel-my-rhythm",
    },
    {
      id: "q6",
      type: "word-base",
      question: "휘저을래 の原形は？",
      choices: ["휘젓다", "휘두르다", "휘청이다", "휘감다"],
      answer: "휘젓다",
      explanation: "휘저을래 は 휘젓다（かき回す）の意志形に近い使い方です。",
      songId: "red-velvet-feel-my-rhythm",
    },
    {
      id: "q7",
      type: "fill-blank",
      question: "「더는 어제와 _____에 가두지 마」の空欄に入るのは？",
      choices: ["내일", "편견", "달빛", "경계"],
      answer: "내일",
      explanation: "더는 어제와 내일에 가두지 마 で『もう昨日や明日に縛らないで』です。",
      songId: "red-velvet-feel-my-rhythm",
    },
    {
      id: "q8",
      type: "word-meaning",
      question: "본 적 없던 の自然な意味は？",
      choices: ["見たことのない", "聞いたことのある", "変わってしまった", "手放せない"],
      answer: "見たことのない",
      explanation: "V-(으)ㄴ 적 없다 で『〜したことがない』。ここでは『見たことのない』です。",
      songId: "red-velvet-feel-my-rhythm",
    },
    {
      id: "q9",
      type: "grammar",
      question: "「-지 않는」の意味は？",
      choices: ["〜しない〜", "〜していた", "〜したい", "〜してみよう"],
      answer: "〜しない〜",
      explanation: "끝나지 않는 꿈 で『終わらない夢』。否定の連体形です。",
      songId: "red-velvet-feel-my-rhythm",
    },
    {
      id: "q10",
      type: "which-song",
      question: "「우릴 오만과 편견에 가두지 마」はどの曲？",
      text: "우릴 오만과 편견에 가두지 마",
      choices: ["Feel My Rhythm", "I DO ME", "I AM", "Glass Bead"],
      answer: "Feel My Rhythm",
      explanation: "Red Velvet『Feel My Rhythm』。この曲の自由と解放のメッセージを象徴するラインです。",
      songId: "red-velvet-feel-my-rhythm",
    },
  ],
};

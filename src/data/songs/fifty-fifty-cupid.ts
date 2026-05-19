import type { Song } from "../../types/song";
import { completeCupidLines } from "./_cupid-lines-all";

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

type ExtraGrammarPoint = {
  title: string;
  meaning: string;
  explanation: string;
  example?: string;
  exampleJapanese?: string;
};

const expandGrammarMap = (
  groups: Array<[number[], ExtraGrammarPoint[]]>,
): Record<number, ExtraGrammarPoint[]> =>
  Object.fromEntries(
    groups.flatMap(([numbers, grammarPoints]) =>
      numbers.map((number) => [number, grammarPoints]),
    ),
  );

const cupidSectionBreaks = new Set([5, 10, 14, 19, 25, 29, 37, 43, 47]);

const cupidSectionRoleMap = expandTextMap([
  [
    [1, 2, 3, 4, 5],
    "導入。周りは恋で満ちているのに自分だけ灯りが消えたまま、という loneliness を先に置いて曲の温度を決める。",
  ],
  [
    [6, 7, 8, 9, 10],
    "1番前半。相手の曖昧な態度に傷つきながら、隠したいのにもっと愛が欲しいという本音まで出てくる。",
  ],
  [
    [11, 12, 13, 14],
    "1回目のサビ。Cupid にもう一度 chance をあげたのに裏切られた、と恋の神様と自分自身の両方に文句を言う中心部。",
  ],
  [
    [15, 16, 17, 18, 19],
    "2番前半。夢の中では恋があるのに目を覚ますと消えてしまう、理想と現実のズレが前に出る。",
  ],
  [
    [20, 21, 22, 23, 24, 25],
    "2番後半。寂しさと諦めの気配を言いながらも、結局 still more を求めてしまう揺れをもう一度見せる。",
  ],
  [
    [26, 27, 28, 29],
    "2回目のサビ。最初の失望を反復して、Cupid への不信と自分の foolish さをさらに強く刻む。",
  ],
  [
    [30, 31, 32, 33, 34, 35, 36, 37],
    "転換部。寂しい、抱きしめてほしいという願いから、『もう待たない』『自分でつかむ』へ姿勢が能動的に切り替わる。",
  ],
  [
    [38, 39, 40, 41, 42, 43],
    "ブリッジ。強気な最後通告を出しつつも、夢の中の someone と『a fool for love』で弱さと本音が見える。",
  ],
  [
    [44, 45, 46, 47, 48, 49, 50, 51],
    "ラスト。サビをもう一度なぞったあと、『もう chance はない』と言ったはずなのに結局また chance をあげてしまう矛盾で締める。",
  ],
]);

const cupidLineRoleMap = expandTextMap([
  [[4], "理由が分からないまま恋だけが遠いことへの戸惑いを、短い合いの手で強く残す。"],
  [[9, 24], "周りが何を言っても、結局まだ愛を欲しがる本音がこぼれる。"],
  [
    [11, 26, 44, 48],
    "同じ失敗を知りながら again を選んでしまう、この曲の循環構造を象徴する一行。",
  ],
  [
    [14, 29, 47, 51],
    "Cupid への怒りをかわいく言い切る punch line として、各ブロックの着地を担う。",
  ],
  [[17], "『待つだけは waste』と言って、後半の能動性への布石を打つ。"],
  [[18], "恋は欲しいのに一人のほうが楽だとも思う、防御的な本音が見える。"],
  [[21], "現実ではなく夢の中で恋愛の練習をしている未経験さと切なさが濃い。"],
  [[30], "lonely を隠さず、抱きしめてほしい願望を正面から口にする。"],
  [[33, 34, 35], "受け身をやめて自分で取りにいく流れを三連打で見せるターニングポイント。"],
  [[38], "ここだけは強気に『もうチャンスはない』と言い切って相手を突き放す。"],
  [[39, 40], "気づいてくれない相手への呼びかけと、軽い苛立ち混じりのからかいが続く。"],
  [[43], "自分でも fool と認めてしまうことで、最後まで愛に弱い本音を隠さない。"],
  [[50], "結局は聞こえなかったふりまでして chance をあげる、最後の甘さと弱さ。"],
]);

const cupidReadingMap: Record<number, string> = {
  1: "プルッコジン ロマンティック オール マイ ライフ",
  2: "ネ チュイヌン オントン ラブリー デイ",
  3: "ネ ヌン ソゲ ビチン アロー サイン",
  4: "オー ホワイ オー ホワイ オー ホワイ オー ホワイ",
  5: "アイム フィーリング ロンリー ロンリー",
  6: "クマン ヒルックテゴ マレジョヨ ホールド ミー ホールド ミー",
  7: "タシ クライング イン マイ ルーム",
  9: "セイ ワット ユー セイ バット アイ ウォント イット モア",
  10: "バット スティル アイ ウォント イット モア モア モア",
  11: "アイ ゲイヴ ア セカンド チャンス トゥ キューピッド",
  12: "ノル ミドゥン ネガ チョンマル ストゥーピッド",
  13: "ボヨジュルケ スムギョワットン ラブ イズ イット リアル",
  14: "キューピッド イズ ソー ダム",
  15: "ト クムキルル コンヌン エブリデイ",
  16: "ヌン ットゥミョン タシ ト フルー アウェイ",
  17: "ウェイティング アラウンド イズ ア ウェイスト ウェイスト",
  20: "ナウ アイム ソー ロンリー ロンリー",
  21: "メイル クムソゲソ ヨンスペッチョ キス ミー キス ミー",
  30: "アイム ソー ロンリー ホールド ミー タイトリー",
  31: "ッチャリタン ゴル ウォネ",
  32: "フー ウィル リアリー ラブ ミー トゥルーリー",
  33: "ネゲ キダリムン オプソ アイ キャント ウェイト",
  34: "トヌン ミッチ アナ ナウ",
  35: "アイム ゴナ メイク イット マイン",
  36: "ラブ イズ ア ライト アイル ショウ マイ ラブ イズ ライト",
  37: "イッツ ノット ア ジョーク ソー ギヴ イット トゥ ミー ライト ナウ",
  38: "ノー モア チャンス トゥ ユー",
  39: "ユー ノウ",
  40: "ヘイ ディ ディ ディ ダム ボーイ",
  41: "クムソゲ メイル バム サムワン",
  42: "フー ウィル シェア ディス フィーリング",
  43: "アイム ア フール ア フール フォー ラブ ア フール フォー ラブ",
  50: "タシ ハンボン モッ トゥルン チョク キフェルル ジュルケ",
};

const cupidExtraGrammar = expandGrammarMap([
  [
    [1],
    [
      {
        title: "-진",
        meaning: "〜された、〜になった",
        explanation:
          "動詞の結果状態を表す連体形。불꺼진 は『火が消えた状態の』で、恋の灯りがもう消えたまま残っている感じを作る。",
        example: "문 닫힌 가게",
        exampleJapanese: "閉まった店",
      },
    ],
  ],
  [
    [3],
    [
      {
        title: "-에 비치다",
        meaning: "〜に映る",
        explanation:
          "何かが目や水面、鏡の中に映るときの表現。내 눈 속에 비친 で『私の目の中に映った』になる。",
        example: "창문에 비친 하늘",
        exampleJapanese: "窓に映る空",
      },
    ],
  ],
  [
    [6],
    [
      {
        title: "-아/어 주다",
        meaning: "〜してくれる、〜してあげる",
        explanation:
          "相手に向けた行為としてやわらかく頼んだり約束したりする形。말해줘요 は『言ってください』『言ってよ』の感じ。",
        example: "도와줘",
        exampleJapanese: "手伝って",
      },
    ],
  ],
  [
    [8],
    [
      {
        title: "-고 싶다",
        meaning: "〜したい",
        explanation:
          "自分の願望をそのまま言う基本形。숨기고 싶어 は『隠したい』で、見せたい気持ちと逆方向の本音を出している。",
        example: "가고 싶어",
        exampleJapanese: "行きたい",
      },
    ],
  ],
  [
    [13],
    [
      {
        title: "-아/어 오다",
        meaning: "ずっと〜してくる",
        explanation:
          "過去から今まで続いてきた流れを表す形。숨겨왔던 は『ずっと隠してきた』で、長く抱えた感情を出している。",
        example: "참아 왔어",
        exampleJapanese: "ずっと我慢してきた",
      },
    ],
  ],
  [
    [16],
    [
      {
        title: "-면",
        meaning: "〜すると、〜なら",
        explanation:
          "条件やきっかけを置く形。눈 뜨면 で『目を開けると』『目を覚ますと』となり、その直後に夢が消える流れにつながる。",
        example: "비가 오면 집에 있어",
        exampleJapanese: "雨が降ったら家にいる",
      },
    ],
  ],
  [
    [19],
    [
      {
        title: "-만큼",
        meaning: "〜ほど、〜くらい",
        explanation:
          "程度を比べるときの形。상상만큼 は『想像するほど』で、理想の大きさを基準に置いている。",
        example: "생각만큼 어렵지 않아",
        exampleJapanese: "思うほど難しくない",
      },
      {
        title: "-ㄹ까?",
        meaning: "〜かな？",
        explanation:
          "自問するようなやわらかい疑問。걸까? は断定せず、期待と不安が混ざった気持ちを残す。",
        example: "올까?",
        exampleJapanese: "来るかな？",
      },
    ],
  ],
  [
    [23],
    [
      {
        title: "-ㄹ까 봐",
        meaning: "〜しそうで、〜するのが心配で",
        explanation:
          "悪い方向を心配するときによく使う形。포기할까봐 は『諦めてしまいそうで』という不安。",
        example: "늦을까 봐 뛰었어",
        exampleJapanese: "遅れそうで走った",
      },
    ],
  ],
  [
    [33],
    [
      {
        title: "-은/는 없다",
        meaning: "〜はない",
        explanation:
          "その対象が存在しないときに使う基本形。기다림은 없어 は『待つことなんてない』で、受け身をやめる宣言になっている。",
        example: "후회는 없어",
        exampleJapanese: "後悔はない",
      },
    ],
  ],
  [
    [34],
    [
      {
        title: "-지 않다",
        meaning: "〜しない",
        explanation:
          "動詞や形容詞の否定を作る基本表現。믿지 않아 は『信じない』で、Cupid への不信をはっきり言い切る。",
        example: "먹지 않아",
        exampleJapanese: "食べない",
      },
    ],
  ],
  [
    [50],
    [
      {
        title: "-ㄴ 척",
        meaning: "〜したふり",
        explanation:
          "実際はそうではないのに、そう見せるときの形。못 들은 척 は『聞こえなかったふり』で、わざと見逃してあげる感じ。",
        example: "모른 척했어",
        exampleJapanese: "知らないふりをした",
      },
      {
        title: "다시 한번",
        meaning: "もう一度",
        explanation:
          "前に一度あったことを繰り返す表現。最後に again を置くことで、この曲が同じ期待と失望を繰り返す構造だと分かる。",
        example: "다시 한번 말해 줘",
        exampleJapanese: "もう一度言って",
      },
    ],
  ],
]);

export const fiftyFiftyCupid: Song = {
  id: "fifty-fifty-cupid",
  title: "Cupid",
  artist: "FIFTY FIFTY",
  difficulty: "初級",
  tags: ["恋愛", "片思い", "感情表現", "英語ミックス", "初級"],

  overview:
    "恋をしたいのにうまくいかず、Cupid に文句を言いながらも本物の愛をまだ諦めきれない曲。前半は lonely、crying in my room、still I want it more で『欲しいのに届かない』寂しさが中心にあり、後半では I can't wait、I'm gonna make it mine で少しだけ能動的になる。でも最後にはまた chance をあげてしまう。その揺れがこの曲のかわいさと切なさになっている。",

  lines: completeCupidLines.map((line, index) => {
    const lineNumber = index + 1;
    const extraGrammar =
      cupidExtraGrammar[lineNumber]?.map((grammarPoint, grammarIndex) => ({
        id: `line-${lineNumber}-extra-g${grammarIndex + 1}`,
        ...grammarPoint,
      })) ?? [];

    return {
      ...line,
      reading: cupidReadingMap[lineNumber] ?? line.reading,
      roleInSong: combineRole(
        cupidSectionRoleMap[lineNumber],
        cupidLineRoleMap[lineNumber],
      ),
      sectionBreakAfter: cupidSectionBreaks.has(lineNumber),
      grammarPoints: [...(line.grammarPoints ?? []), ...extraGrammar],
    };
  }),

  quizzes: [
    {
      id: "q1",
      type: "word-meaning",
      question: "힐끗대다 の意味は？",
      choices: ["ちらちら見る", "強く抱きしめる", "隠しておく", "待ち続ける"],
      answer: "ちらちら見る",
      explanation:
        "힐끗 は『ちらっと』、-대다 は『何度も〜する』で、何度もちらちら見る感じです。",
      songId: "fifty-fifty-cupid",
    },
    {
      id: "q2",
      type: "word-meaning",
      question: "짜릿하다 の意味は？",
      choices: ["しびれる、ときめく", "疲れている", "静かだ", "恥ずかしい"],
      answer: "しびれる、ときめく",
      explanation:
        "짜릿하다 は電気が走るようにぞくっとする感じで、恋のドキドキにもよく使います。",
      songId: "fifty-fifty-cupid",
    },
    {
      id: "q3",
      type: "word-meaning",
      question: "기다림 の意味は？",
      choices: ["待つこと", "愛すること", "夢の中", "冗談"],
      answer: "待つこと",
      explanation: "기다리다（待つ）から来た名詞で、『待ち時間』『待つこと』の意味です。",
      songId: "fifty-fifty-cupid",
    },
    {
      id: "q4",
      type: "word-base",
      question: "믿지 않아 の原形は？",
      choices: ["믿다", "밉다", "밀다", "맡다"],
      answer: "믿다",
      explanation: "믿다（信じる）+ -지 않다（〜しない）で『信じない』になります。",
      songId: "fifty-fifty-cupid",
    },
    {
      id: "q5",
      type: "word-base",
      question: "숨겨왔던 の中心になる動詞は？",
      choices: ["숨기다", "숨다", "보이다", "걷다"],
      answer: "숨기다",
      explanation:
        "숨기다（隠す）に -아/어 오다 がつながって『ずっと隠してきた』の流れになります。",
      songId: "fifty-fifty-cupid",
    },
    {
      id: "q6",
      type: "grammar",
      question: "「-고 싶다」の意味は？",
      choices: ["〜したい", "〜している", "〜できる", "〜してはいけない"],
      answer: "〜したい",
      explanation: "願望を表す基本文法で、숨기고 싶어 は『隠したい』です。",
      songId: "fifty-fifty-cupid",
    },
    {
      id: "q7",
      type: "grammar",
      question: "「-ㄹ까 봐」の意味は？",
      choices: [
        "〜しそうで、〜するのが心配で",
        "〜したあとで",
        "〜しているあいだ",
        "〜しても",
      ],
      answer: "〜しそうで、〜するのが心配で",
      explanation: "포기할까봐 は『諦めてしまいそうで』という不安を表しています。",
      songId: "fifty-fifty-cupid",
    },
    {
      id: "q8",
      type: "fill-blank",
      question: "「I'm gonna make it _____」の空欄に入る語は？",
      choices: ["mine", "light", "right", "fool"],
      answer: "mine",
      explanation: "make it mine で『それを自分のものにする』です。",
      songId: "fifty-fifty-cupid",
    },
    {
      id: "q9",
      type: "fill-blank",
      question: "「더는 믿지 않아 _____」の空欄に入る語は？",
      choices: ["now", "Cupid", "waste", "truly"],
      answer: "now",
      explanation: "歌では 더는 믿지 않아 now と続いて、『もうこれ以上は信じない』と言い切ります。",
      songId: "fifty-fifty-cupid",
    },
  ],
};

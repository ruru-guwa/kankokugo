import type { Song } from "../../types/song";
import { completeBlueValentineLines } from "./_bv-lines-all";

const expandTextMap = (
  groups: Array<[number[], string]>,
): Record<number, string> =>
  Object.fromEntries(
    groups.flatMap(([numbers, text]) => numbers.map((number) => [number, text])),
  );

const blueValentineSectionBreaks = new Set([2, 8, 16, 23, 25, 33, 35, 40, 46, 50]);

const blueValentineRoleMap = expandTextMap([
  [[1, 2], "タイトルを反復しながら、『痛みまで含めて手放せない相手』という曲全体の象徴を先に置く導入。"],
  [[3, 4, 5, 6, 7, 8], "相手の冷たさと、自分の傷つき方を blue のイメージで描く1番Aメロ。"],
  [[9, 10, 11, 12, 13, 14, 15, 16], "燃え上がっては冷める関係を、巻き戻しや傷の比喩で見せる前半の盛り上がり。"],
  [[17, 18, 19, 20, 21, 22, 23], "1回目のサビ。壊れていると分かっていても、また戻り、また飛び込む依存的な愛の核。"],
  [[24, 25], "サビ後にタイトルをもう一度置き、この恋が結局『blue valentine』へ戻ることを強める反復。"],
  [[26, 27, 28, 29, 30, 31, 32, 33], "2番では『氷の中の炎』『hot and icy』のような矛盾語で、この恋の中毒性をさらに押し出す。"],
  [[34, 35, 36, 37, 38, 39, 40], "ジェットコースターのように揺れても、結局また戻ると知っている循環構造を描くパート。"],
  [[41, 42, 43, 44, 45, 46], "『最後の恋かもしれない』と思う一方、その代償が最悪の痛みだと分かっている後半サビ。"],
  [[47, 48, 49, 50], "ブリッジで red / blue、愛 / 傷の対比を一気に回収し、痛みそのものを手放したくない気持ちまで出す。"],
  [[51, 52, 53, 54, 55, 56, 57], "ラストでは再び飛び込み続ける自分と冷えていく相手を並べ、最後に『Blue valentine』だけを残して終わる。"],
]);

const blueValentineReadingMap: Record<number, string> = {
  1: "ユール オールウェイズ ビー マイ ブルー バレンタイン",
  2: "ユール オールウェイズ ビー マイ ブルー バレンタイン",
  8: "ウィー ファイト ウィー サイ アンド ストップ",
  10: "リワインド リワインド リワインド",
  15: "アイ キャン シー イット ナウ",
  16: "キャン ユー シー イット ナウ",
  19: "ウィー キャン フィギュア イット アウト",
  20: "イフ ディス ラブ イズ オーバー",
  22: "イ サランウン コールダー",
  23: "アイル キープ ザ ファイア リット イン マイン",
  24: "ユール オールウェイズ ビー マイ ブルー バレンタイン",
  25: "ユール オールウェイズ ビー マイ ブルー バレンタイン",
  28: "ホット アンド アイシー",
  29: "バット アイ ライク イット",
  30: "イッツ ソー ユー",
  31: "パックィオ マメ ウェザー",
  32: "モルリョオン クラウド",
  33: "ウェロウン トゥゲザー",
  34: "アイ キャン フィール イット ナウ",
  35: "キャン ユー フィール イット ナウ",
  40: "ソー イット ダズント マター",
  41: "ユー マイト ビー マイ エンド ゲーム",
  43: "イフ ディス ラブ イズ オーバー",
  45: "イ サランウン コールダー",
  46: "アイル キープ ザ ファイア リット イン マイン",
  48: "サランイラン ブルーズ",
  50: "コーズ イッツ ユー",
  51: "イフ ディス ラブ イズ オーバー",
  53: "イ サランウン コールダー",
  54: "アイル キープ ザ ファイア リット イン マイン",
  55: "アイム フォーリング オーバー アンド オーバー アンド オーバー アー",
  56: "ユア ゲッティング コールダー アンド コールダー アンド コールダー",
  57: "ブルー バレンタイン",
};

const blueValentineExtraGrammar: Record<
  number,
  Array<{
    title: string;
    meaning: string;
    explanation: string;
    example?: string;
    exampleJapanese?: string;
  }>
> = {
  11: [
    {
      title: "-냐는 듯이",
      meaning: "〜だったかのように",
      explanation:
        "直前までの出来事をなかったことのように扱う慣用的な言い方。언제 그랬냐는 듯이 で『何事もなかったかのように』。",
      example: "아무 일 없었다는 듯이 웃어",
      exampleJapanese: "何事もなかったかのように笑う",
    },
  ],
  42: [
    {
      title: "대가로",
      meaning: "代償として、引き換えに",
      explanation:
        "何かを得る代わりに払うものを表す。대가로 얻은 worst pain で『その代わりに得た最悪の痛み』。",
      example: "희생의 대가로 얻은 평화",
      exampleJapanese: "犠牲の代償として得た平和",
    },
  ],
  49: [
    {
      title: "-길",
      meaning: "〜ことを、〜であってほしい",
      explanation:
        "願いを表す -기를 の縮約。낫지는 않길 で『治らないでほしい』『治らないことを願う』という倒錯した願望になる。",
      example: "행복하길 바라",
      exampleJapanese: "幸せであってほしい",
    },
  ],
};

const blueValentineExtraSentenceExplanations: Record<number, string> = {
  3: "相手の『色』を感情の温度として見ることで、見た目ではなく関係全体がもう冷たく変わってしまったと感じている。",
  5: "ここでは傷が一度ついて終わるのでなく、治りかけるたびにまた悪くなる恋の反復が描かれている。",
  9: "赤く燃えた直後に一瞬で冷めるので、この恋は強い愛よりも温度差の激しさそのものが問題になっている。",
  17: "割れたガラスの比喩によって、二人はただ壊れているだけでなく、近づくほど互いを傷つける危険な関係として見える。",
  21: "ここで大事なのは『また戻される』ではなく『また飛び込む』で、自分でもこの恋へ戻ってしまう依存を認めていること。",
  26: "氷の中の炎という矛盾表現で、終わっているはずの関係の中に、自分の感情だけがまだ燃えている苦しさを凝縮している。",
  31: "心の weather と言うことで、ひとつの大きな悲しみより、晴れたり曇ったりを繰り返す不安定さ全体を見せている。",
  36: "ここから感情の揺れは静かな悲しみではなく、上下の激しさそのものが中毒になっている段階として描かれる。",
  42: "『最後の恋かもしれない相手』から受け取ったものが痛みだと言い切ることで、この愛の代償の重さが前に出る。",
  47: "赤と青だけを並べることで、熱と冷たさ、愛と傷が一行で要約され、この曲全体の色彩イメージが回収される。",
  49: "普通なら治ってほしい傷に対して『治らないでほしい』と願うので、痛みさえ相手とのつながりとして抱え込んでいる。",
  55: "落ち続ける反復をそのまま音にすることで、この恋が一度の失敗ではなく習慣のような墜落になっていると分かる。",
  56: "自分は落ち続けるのに相手は冷え続けるので、最後には二人の温度差が修復できない形で残る。",
};

const blueValentineExtraNuance: Record<number, string> = {
  3: "『青い相手』は見た目の印象ではなく、こちらが感じ取る温度や空気そのものになっている。",
  5: "덧 が入ることで、忘れようとしても恋の痛みが蒸し返される感じがかなり生々しい。",
  9: "hot / cold の対比が一行の中で起こるので、安定した情熱ではなく急降下する関係に聞こえる。",
  19: "ここでの hope は健全な前進というより、『壊れているのにまだ戻ろうとする』危うい希望に近い。",
  21: "自分から飛び込むと言うことで、被害者でいるだけでは済まない依存の深さが出る。",
  23: "相手が冷えていくほど、自分の中の火だけは逆に守ろうとする。その非対称さがこの曲の痛みになっている。",
  26: "『氷の中の炎』は、もう冷え切っている関係の中でも自分の感情だけは消えないという、この曲最大級の矛盾表現。",
  31: "weather によって、感情の変化が一回の事件でなく天候のように繰り返しやってくるものになる。",
  36: "Rollercoaster は怖さと快感が一緒にあるので、この恋をやめられない中毒性とも相性がいい。",
  33: "一緒にいること自体が救いではなく、むしろ一緒だからこそ孤独になる関係の苦しさが出ている。",
  41: "end game は『最後の恋』のロマンチックさより、『結局ここに戻ってしまう相手』という執着の重さが強い。",
  42: "愛の価値より worst pain の方を強く言うので、この恋はもう幸福より代償で記憶されている。",
  48: "bruise はただの傷ではなく、消えずに残る色のある痕。だから blue と最初から最後までつながる。",
  49: "治ってしまえば痛みも記憶も薄れる。だからこそ『治らないでほしい』という、かなり危うい愛着が露わになる。",
  55: "落ち続ける自分を over and over で重ねることで、抜け出せない反復そのものがラストに残る。",
  56: "相手は colder を繰り返すほど遠のいていくのに、自分は falling をやめられないという温度差の決定打。",
};

const blueValentineTokenMeanings: Record<number, Record<string, string>> = {
  3: {
    blue: "相手の冷たさであり、自分に残る悲しみや青あざの色でもある、この曲の中心色。",
  },
  4: {
    멍이: "見えない心の傷を、触れれば痛む青あざとして身体化した言葉。",
    "my heart": "単なる気分ではなく、いちばん内側の心そのものが傷んでいること。",
  },
  5: {
    덧이: "治りかけた傷がまた悪くなること。忘れかけるたびに痛みが再発する感じ。",
  },
  9: {
    붉게: "まだ熱も血も通っている、冷え切りきらない感情の側。",
    식어가: "一瞬ではなく、じわじわと冷えが進行していくこと。",
  },
  12: {
    상처: "一度ついて終わる傷ではなく、深く刻まれて残り続ける痕。",
  },
  13: {
    "red blood": "blue の冷たさと並ぶ、まだ生々しく熱い痛みの側面。",
  },
  14: {
    forever: "永遠だったはずのものを、壊れた物みたいに置いてしまう残酷さ。",
  },
  17: {
    "broken glass on the ground":
      "一度壊れたら元に戻らず、触れればさらに傷つく関係のたとえ。",
  },
  19: {
    "We can figure it out":
      "壊れていても、まだ何とかできると自分に言い聞かせる危うい希望。",
  },
  23: {
    "the fire": "相手が冷たくなってもなお消したくない、自分側の愛情や執着。",
    "in mine": "相手の中ではなく、自分の内側だけに残っている火であること。",
  },
  26: {
    얼음: "もう冷え切っている関係や相手側の温度を入れ物として見せる言葉。",
    불꽃: "そんな冷えた状況の中でもまだ消えずに跳ねる、自分の愛情や執着。",
  },
  27: {
    "아무 겁도 없이": "結果を考える余裕もないまま、怖さごと突っ切ってしまう勢い。",
    뻗어버린: "理性より先に手が伸びてしまい、もう引っ込められない感じ。",
  },
  28: {
    icy: "ただ冷静なだけでなく、触れると痛いくらいの冷たさ。",
  },
  31: {
    weather: "感情の状態を固定した性格ではなく、変わり続ける天気として見せる比喩。",
  },
  32: {
    cloud: "一気に押し寄せて視界を暗くする、不安や孤独のかたまり。",
  },
  33: {
    together: "一緒にいる事実そのものが、かえって孤独を強めていること。",
  },
  36: {
    Rollercoaster: "上がる快感と落ちる怖さが同時にある、この恋の中毒性そのもの。",
  },
  38: {
    흔들려도: "どれだけ揺れても、その不安定さの中に残り続けること。",
  },
  39: {
    돌아갈: "結局またその関係へ戻る方向へ心が向いてしまうこと。",
    알아: "もう結果が読めているのに止められない自覚。",
  },
  41: {
    "my end game": "最後に行き着いてしまう相手、つまり抜け出せない終着点。",
  },
  42: {
    대가로: "その恋を続ける代わりに払っている感情的なコスト。",
    "worst pain": "最終地点かもしれない相手から受け取る、最悪級の痛み。",
  },
  48: {
    bruise: "消したくないほど残しておきたい、愛の痕としての青あざ。",
  },
  47: {
    붉고: "熱、血、情熱、まだ生きている痛みの色。",
    푸른: "冷たさ、悲しみ、あざ、遠ざかっていく相手の色。",
  },
  49: {
    낫지는: "ただ治らないではなく、『治りはしないでほしい』と逆説的に願う感じ。",
    않길: "否定そのものを願いの形にして、傷が消えないことを望んでいる危うさ。",
  },
  50: {
    "it’s you": "痛みでも手放せない理由が、相手その人であること。",
  },
  55: {
    "I’m falling": "恋に落ちるだけでなく、同じ関係の底へ何度も沈んでいくこと。",
    "over and over": "一度で終わらない反復そのものが、この恋の構造になっている。",
  },
  56: {
    "You’re getting": "相手側の変化は止まらず、今も進行中であること。",
    "colder and colder": "冷たさが一段ずつ増していき、もう戻りづらいところまで来ていること。",
  },
  57: {
    Blue: "青さ、冷たさ、悲しみ、あざの色まで含んだこの曲の総まとめ。",
    valentine: "痛みを伴ってもなお特別な相手として残る恋人。",
  },
};

export const blueValentine: Song = {
  id: "nmixx-blue-valentine",
  title: "Blue Valentine",
  artist: "NMIXX",
  difficulty: "中級",
  tags: ["失恋", "比喩表現", "感情表現", "対比表現", "中級"],

  links: {
    youtube: "https://www.youtube.com/watch?v=EXAMPLE",
    spotify: "https://open.spotify.com/track/EXAMPLE",
  },

  overview:
    "blue＝悲しみ・冷たさ・青あざ、red＝熱・血・情熱を対比させながら、傷つくと分かっていても戻ってしまう恋を描いた曲。相手は冷たくなっていくのに、自分はまだ火を消せない。幸せな恋というより、痛みを伴う依存的な愛を美しく表現している。",

  lines: completeBlueValentineLines.map((line, index) => {
    const lineNumber = index + 1;
    const extraGrammar =
      blueValentineExtraGrammar[lineNumber]?.map((grammarPoint, grammarIndex) => ({
        id: `line-${lineNumber}-extra-g${grammarIndex + 1}`,
        ...grammarPoint,
      })) ?? [];

    return {
      ...line,
      reading: blueValentineReadingMap[lineNumber] ?? line.reading,
      roleInSong: blueValentineRoleMap[lineNumber] ?? line.roleInSong,
      sectionBreakAfter: blueValentineSectionBreaks.has(lineNumber),
      sentenceExplanation:
        blueValentineExtraSentenceExplanations[lineNumber] ??
        line.sentenceExplanation,
      nuance: blueValentineExtraNuance[lineNumber] ?? line.nuance,
      grammarPoints: [...(line.grammarPoints ?? []), ...extraGrammar],
      tokens: line.tokens.map((token) => ({
        ...token,
        meaningInThisLine:
          blueValentineTokenMeanings[lineNumber]?.[token.surface] ??
          token.meaningInThisLine,
      })),
    };
  }),

  quizzes: [
    {
      id: "q1",
      type: "word-meaning",
      question: "식어버린 の意味は？",
      choices: ["冷めてしまった", "燃え上がった", "壊れてしまった", "戻ってきた"],
      answer: "冷めてしまった",
      explanation: "식다（冷める）+ -어 버리다（〜してしまう）+ -ㄴ（連体形）。",
      songId: "nmixx-blue-valentine",
    },
    {
      id: "q2",
      type: "word-meaning",
      question: "멍이 들다 の意味は？",
      choices: ["あざができる", "熱が出る", "涙が出る", "声が出る"],
      answer: "あざができる",
      explanation: "멍（あざ）+ 이 들다 で『あざができる』という決まった表現。",
      songId: "nmixx-blue-valentine",
    },
    {
      id: "q3",
      type: "word-meaning",
      question: "타오르다 の意味は？",
      choices: ["燃え上がる", "冷める", "壊れる", "揺れる"],
      answer: "燃え上がる",
      explanation: "火や感情が激しく燃える感じ。붉게 타오르다 で『赤く燃え上がる』。",
      songId: "nmixx-blue-valentine",
    },
    {
      id: "q4",
      type: "word-base",
      question: "뻗어버린 の原形は？",
      choices: ["뻗다", "벋다", "뻐다", "뻣다"],
      answer: "뻗다",
      explanation: "뻗다（伸ばす）+ -어 버리다（〜してしまう）+ -ㄴ（連体形）。",
      songId: "nmixx-blue-valentine",
    },
    {
      id: "q5",
      type: "word-base",
      question: "흔들려도 の原形は？",
      choices: ["흔들리다", "흔들다", "흔들어다", "흔들이다"],
      answer: "흔들리다",
      explanation: "흔들리다（揺れる）+ -어도（〜しても）。",
      songId: "nmixx-blue-valentine",
    },
    {
      id: "q6",
      type: "grammar",
      question: "「-아/어 버리다」の意味は？",
      choices: ["〜してしまう", "〜しようとする", "〜しなければならない", "〜することができる"],
      answer: "〜してしまう",
      explanation: "完了・後悔・残念さのニュアンス。식어버리다（冷めてしまう）、뻗어버리다（伸ばしてしまう）など。",
      songId: "nmixx-blue-valentine",
    },
    {
      id: "q7",
      type: "grammar",
      question: "「-아/어도」の意味は？",
      choices: ["〜しても", "〜してから", "〜しながら", "〜するために"],
      answer: "〜しても",
      explanation: "譲歩を表す文法。식어도（冷めても）、흔들려도（揺れても）など。",
      songId: "nmixx-blue-valentine",
    },
    {
      id: "q8",
      type: "grammar",
      question: "「처럼」の意味は？",
      choices: ["〜のように", "〜だけど", "〜してから", "〜なので"],
      answer: "〜のように",
      explanation: "名詞に付けて比喩を作る助詞。Rollercoaster처럼 で『ジェットコースターのように』。",
      songId: "nmixx-blue-valentine",
    },
    {
      id: "q9",
      type: "fill-blank",
      question: "「_____ 너의 색은 blue」の空欄に入る言葉は？",
      choices: ["식어버린", "타오르는", "부서진", "외로운"],
      answer: "식어버린",
      explanation: "『冷めてしまったあなたの色は blue』。",
      songId: "nmixx-blue-valentine",
    },
    {
      id: "q10",
      type: "fill-blank",
      question: "「식어도 타오르는 얼음 속 _____」の空欄に入る言葉は？",
      choices: ["불꽃", "상처", "멍", "손"],
      answer: "불꽃",
      explanation: "『冷めても燃え続ける、氷の中の炎』。불꽃 は『火花、炎』。",
      songId: "nmixx-blue-valentine",
    },
    {
      id: "q11",
      type: "fill-blank",
      question: "「사랑이란 _____」の空欄に入る言葉は？",
      choices: ["bruise", "fire", "glass", "cloud"],
      answer: "bruise",
      explanation: "『愛という名のあざ』。bruise（あざ）は blue のイメージとつながる。",
      songId: "nmixx-blue-valentine",
    },
    {
      id: "q12",
      type: "word-meaning",
      question: "돌이키다 の意味は？",
      choices: ["元に戻す", "燃え上がる", "飛び込む", "刻む"],
      answer: "元に戻す",
      explanation: "돌이킬 수 없다 で『取り返せない、元に戻せない』。",
      songId: "nmixx-blue-valentine",
    },
    {
      id: "q13",
      type: "word-meaning",
      question: "뛰어들다 の意味は？",
      choices: ["飛び込む", "走り去る", "立ち止まる", "振り返る"],
      answer: "飛び込む",
      explanation: "物理的に飛び込む意味と、恋や危険な状況に『身を投じる』意味がある。",
      songId: "nmixx-blue-valentine",
    },
    {
      id: "q14",
      type: "which-song",
      question: "「우린 마치 broken glass on the ground」はどの曲？",
      text: "우린 마치 broken glass on the ground",
      choices: ["Blue Valentine", "Ditto", "Drama", "After Like"],
      answer: "Blue Valentine",
      explanation: "NMIXX『Blue Valentine』。割れたガラスで壊れた関係を比喩。",
      songId: "nmixx-blue-valentine",
    },
    {
      id: "q15",
      type: "word-meaning",
      question: "「언제 그랬냐는 듯이」の意味は？",
      choices: ["何事もなかったかのように", "いつだったか思い出して", "いつも通りに", "いつか必ず"],
      answer: "何事もなかったかのように",
      explanation: "『いつそんなことがあったのかというように』→ 慣用的に『何事もなかったかのように』。",
      songId: "nmixx-blue-valentine",
    },
    {
      id: "q16",
      type: "grammar",
      question: "「-이란」の意味は？",
      choices: ["〜という、〜という名の", "〜しながら", "〜できない", "〜のように"],
      answer: "〜という、〜という名の",
      explanation: "이라는 の縮約。사랑이란 bruise で『愛という名のあざ』。",
      songId: "nmixx-blue-valentine",
    },
  ],
};

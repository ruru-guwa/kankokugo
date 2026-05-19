import type { Song } from "../../types/song";
import { completeAfterLikeLines } from "./_afterlike-lines-all";

const expandTextMap = (
  groups: Array<[number[], string]>,
): Record<number, string> =>
  Object.fromEntries(
    groups.flatMap(([numbers, text]) => numbers.map((number) => [number, text])),
  );

const afterLikeSectionBreaks = new Set([10, 17, 25, 34, 42, 49]);

const afterLikeRoleMap = expandTextMap([
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    "導入。気持ちは変わるかもしれないし自分でも読めないと認めつつ、それでも今は相手に完全に夢中で、これはただのLIKEではないと宣言するパート。",
  ],
  [
    [11, 12, 13, 14, 15, 16, 17],
    "1回目のサビ。You and I と more than LIKE を反復し、文字遊びも交えながら『LIKEの次にある感情』を真正面から押し出す中心パート。",
  ],
  [
    [18, 19, 20, 21, 22, 23, 24, 25],
    "2番。二人の心に咲いた青い炎や感情のグラフを使って、恋の熱さと自分の振れ幅の大きさを堂々と見せるパート。",
  ],
  [
    [26, 27, 28, 29, 30, 31, 32, 33, 34],
    "2回目のサビ。同じ宣言をもう一度なぞりながら、疑わないでほしいという本音と、LIKEでは足りないという核心をさらに強く刻み直す。",
  ],
  [
    [35, 36, 37, 38, 39, 40, 41, 42],
    "ブリッジ。strike や space の言葉、LOVE のつづりを分解する遊びで、『私が入ることでLOVEが完成する』という発想を具体的に見せるパート。",
  ],
  [
    [43, 44, 45, 46, 47, 48, 49],
    "終盤のサビ変奏。括弧の呼びかけから始めて、今度は E と V の間にも自分を置きながら、LOVE の中にいる私たちを印象づける。",
  ],
  [
    [50, 51, 52, 53, 54, 55, 56],
    "ラスト。冒頭のサビをもう一度重ねて、最後まで『ただ好きなだけじゃない』という宣言を反復の勢いで締めくくる。",
  ],
]);

const afterLikeExtraGrammar: Record<
  number,
  Array<{
    title: string;
    meaning: string;
    explanation: string;
    example?: string;
    exampleJapanese?: string;
  }>
> = {
  2: [
    {
      title: "-ㄹ지",
      meaning: "〜するかどうか、〜かもしれない",
      explanation:
        "はっきり断定せず、可能性を残しながら『〜かもしれない』と含みを持たせる形。바뀔지 で『変わるかもしれないし』。",
      example: "올지 모르겠어",
      exampleJapanese: "来るかどうか分からない",
    },
  ],
  3: [
    {
      title: "-조차",
      meaning: "〜さえ",
      explanation:
        "予想される範囲のいちばん端まで含めて『〜でさえ』と強調する形。나조차 で『私でさえ』。",
      example: "나조차 몰랐어",
      exampleJapanese: "私でさえ知らなかった",
    },
    {
      title: "-으니",
      meaning: "〜だから、〜なので",
      explanation:
        "理由や背景をつなぐ形。없으니 で『ないから』となり、次の判断へ自然につながる。",
      example: "늦었으니 가자",
      exampleJapanese: "遅くなったから行こう",
    },
  ],
  6: [
    {
      title: "-단 게 / -다는 게",
      meaning: "〜だということが",
      explanation:
        "発言や状態を一まとまりの内容として受ける形。빠졌단 게 で『夢中になったということが』。",
      example: "좋아한단 게 보여",
      exampleJapanese: "好きだというのが見える",
    },
  ],
  7: [
    {
      title: "-겠지만",
      meaning: "〜だろうけど",
      explanation:
        "推量や見込みを置きつつ、そのあとで逆接へつなぐ形。꿈만 같겠지만 で『夢みたいだろうけど』。",
      example: "힘들겠지만 해 보자",
      exampleJapanese: "大変だろうけどやってみよう",
    },
  ],
  8: [
    {
      title: "-ㄹ 수 없다",
      meaning: "〜できない",
      explanation:
        "能力や可能性がないことを表す基本形。설명할 수 없는 で『説明できない』。",
      example: "믿을 수 없어",
      exampleJapanese: "信じられない",
    },
    {
      title: "-ㄹ 거야",
      meaning: "〜だろう、〜するつもりだ",
      explanation:
        "話し手の見込みや意志を込める形。사랑일 거야 で『愛なんだと思う』のような確信を出している。",
      example: "괜찮을 거야",
      exampleJapanese: "大丈夫だよ",
    },
  ],
  9: [
    {
      title: "-지 마",
      meaning: "〜しないで",
      explanation:
        "相手に行動を止めてほしいときの禁止表現。의심하지 마 で『疑わないで』。",
      example: "걱정하지 마",
      exampleJapanese: "心配しないで",
    },
  ],
  20: [
    {
      title: "-ㄹ 테니",
      meaning: "〜するはずだから、〜だろうから",
      explanation:
        "話し手の見込みを理由として後ろにつなぐ形。뜨거울 테니 で『熱いはずだから』。",
      example: "늦을 테니 먼저 가",
      exampleJapanese: "遅れるだろうから先に行って",
    },
  ],
  24: [
    {
      title: "-지 마",
      meaning: "〜しないで",
      explanation:
        "同じ禁止表現でも、ここでは『何度も聞かないで』と少しうんざりした気分を出している。",
      example: "묻지 마",
      exampleJapanese: "聞かないで",
    },
  ],
  25: [
    {
      title: "-ㄴ지",
      meaning: "〜なのか",
      explanation:
        "内容を問い直したり、間接疑問を作る形。뭔지 알아? で『何なのか分かる？』。",
      example: "어딘지 알아?",
      exampleJapanese: "どこなのか分かる？",
    },
  ],
  38: [
    {
      title: "-지 못하다",
      meaning: "〜できない",
      explanation:
        "能力や状況の面から『できない』を表す形。막지 못해 で『止められない』。",
      example: "믿지 못해",
      exampleJapanese: "信じられない",
    },
  ],
  40: [
    {
      title: "-조차도",
      meaning: "〜さえも",
      explanation:
        "조차 に 도 が重なって、より強く『〜さえも』と押し出す形。시간 조차도 で『時間さえも』。",
      example: "밥조차도 못 먹어",
      exampleJapanese: "ご飯さえ食べられない",
    },
  ],
};

const afterLikeExtraNuance: Record<number, string> = {
  10: "ここで Korean と English を一続きに置くことで、『ただ好きなだけじゃない』という否定と、『じゃあその先は何か』という問いを一気に畳みかけている。",
  13: "L と O の間に 난 を滑り込ませる言い方で、ただ LOVE を綴るのでなく『その中に私がいる』ことまで遊びとして見せている。",
  19: "青い炎は冷たさより高温のイメージが先に立ち、見た目の透明感と感情の熱さが同時に出るのがこの曲らしい。",
  22: "그래프는 폭이 커 は感情の起伏をグラフで可視化する言い方で、理屈より振れ幅そのものを堂々と見せている。",
  23: "Yeah that's me は弁解ではなく自己紹介に近く、感情の激しさも含めて『それが私』と引き受けている。",
  35: "strike は野球の用語というより、心にぴたりと命中した感じ。恋の感覚をゲームっぽくなく即効性のある衝撃として言っている。",
  37: "LO の次に I を差し込むことで、LOVE は最初から完成している単語ではなく、『私が入ることで完成する関係』として描かれる。",
  38: "space は単なる場所ではなく、二人だけの領域や空気感まで含んでいて、そこへは誰も割り込めないという親密さがある。",
  42: "LOVE 사이 놓일 I は、文字どおり I が LOVE の中に置かれるだけでなく、『私自身が愛の中心に入る』という自己確信も響かせている。",
  46: "E と V の前にも 난 を置くので、後半では文字遊びをさらにひねって『どこに置いても私はLOVEの中にいる』感覚を強めている。",
};

const afterLikeTokenMeanings: Record<number, Record<string, string>> = {
  10: {
    LIKE: "ここでは単なる『好き』より少し軽い好意の段階を指し、その次に来る LOVE との対比を作っている。",
    "What's after": "相手に問いかけているようで、実際には答えを分かったうえで期待を高める言い方。",
  },
  13: {
    다음: "順番を一つずつ追うことで、LIKE から LOVE へ進んでいくプロセスを見せる言葉。",
    난: "文字の列の中へ『私』を入れ込んで、感情の主役が自分だとはっきり示している。",
  },
  18: {
    심장: "単なる臓器というより、二人の感情の中心そのもの。",
  },
  19: {
    불꽃: "瞬間的な火花というより、恋が一気に燃え上がる熱のイメージ。",
  },
  22: {
    그래프: "見えない感情の上下を、線の動きとして分かりやすく見せる比喩。",
    폭: "ここでは幅そのものより『振れ幅の大きさ』を強く感じさせる。",
  },
  35: {
    strike: "心にまっすぐ入った衝撃や命中感。",
  },
  37: {
    I: "文字遊びの中での I は代名詞としての『私』も同時に響く。",
    VE: "LOVE の残り半分として置かれ、前の I とつながって愛が完成する感じを作る。",
  },
  38: {
    space: "二人の関係だけで満たされた空間や距離感。",
    "막지 못하다": "外からは止められないほど、もう勢いがついていること。",
  },
  42: {
    LOVE: "文字列そのものと感情としての愛がぴったり重なる、この曲の答えの言葉。",
    I: "LOVE の中に置かれる『私』であり、関係を完成させる存在。",
  },
  46: {
    E: "文字遊びを最後まで続けるための配置で、LOVE の完成形を逆方向からも意識させる。",
    V: "E と並べて置くことで、I が間に入る感覚を後半でも繰り返している。",
  },
};

export const iveAfterLike: Song = {
  id: "ive-after-like",
  title: "After LIKE",
  artist: "IVE",
  difficulty: "中級",
  tags: ["恋", "自己確信", "文字遊び", "英語ミックス", "比喩表現", "中級"],

  overview:
    "『ただ好きなだけじゃない。この気持ちはもうLOVEだ』と、IVEらしい自信で言い切る曲です。自分の気持ちは変わるかもしれないし、自分でも読み切れないと認めながら、それでも今は完全に夢中だとまっすぐ告げます。LIKE と LOVE のあいだを文字遊びでつなぎながら、『私がその愛の中に入ることで関係が完成する』という発想まで華やかに見せる一曲です。",

  lines: completeAfterLikeLines.map((line, index) => {
    const lineNumber = index + 1;
    const extraGrammar =
      afterLikeExtraGrammar[lineNumber]?.map((grammarPoint, grammarIndex) => ({
        id: `${line.id}-extra-g${grammarIndex + 1}`,
        ...grammarPoint,
      })) ?? [];

    return {
      ...line,
      roleInSong: afterLikeRoleMap[lineNumber] ?? line.roleInSong,
      sectionBreakAfter: afterLikeSectionBreaks.has(lineNumber),
      nuance: afterLikeExtraNuance[lineNumber] ?? line.nuance,
      grammarPoints: [...(line.grammarPoints ?? []), ...extraGrammar],
      tokens: line.tokens.map((token) => ({
        ...token,
        meaningInThisLine:
          afterLikeTokenMeanings[lineNumber]?.[token.surface] ??
          token.meaningInThisLine,
      })),
    };
  }),

  quizzes: [
    {
      id: "q1",
      type: "word-meaning",
      question: "푹 빠지다 の自然な意味は？",
      choices: ["すっかりハマる、夢中になる", "静かに座る", "深く眠る", "急に冷める"],
      answer: "すっかりハマる、夢中になる",
      explanation: "푹 빠졌단 게 중요한 거지 で『すっかり夢中になっていることが大事』と使われています。",
      songId: "ive-after-like",
    },
    {
      id: "q2",
      type: "grammar",
      question: "「-ㄹ지」の意味は？",
      choices: ["〜するかどうか、〜かもしれない", "〜したあとで", "〜しなければならない", "〜してしまった"],
      answer: "〜するかどうか、〜かもしれない",
      explanation: "바뀔지 で『変わるかもしれないし』のように、不確かさを残して言う形です。",
      songId: "ive-after-like",
    },
    {
      id: "q3",
      type: "word-meaning",
      question: "나조차 の意味は？",
      choices: ["私でさえ", "私だけ", "私より", "私のために"],
      answer: "私でさえ",
      explanation: "조차 は『〜さえ』。나조차 で『私でさえ』になります。",
      songId: "ive-after-like",
    },
    {
      id: "q4",
      type: "fill-blank",
      question: "「달리 설명할 수 없는 이건 _____ 거야」の空欄に入るのは？",
      choices: ["사랑일", "기적일", "거짓말일", "운명일"],
      answer: "사랑일",
      explanation: "『他に説明できないこれは愛なんだと思う』という核心の一行です。",
      songId: "ive-after-like",
    },
    {
      id: "q5",
      type: "grammar",
      question: "의심하지 마 の意味は？",
      choices: ["疑わないで", "忘れないで", "急がないで", "隠さないで"],
      answer: "疑わないで",
      explanation: "-지 마 は『〜しないで』。ここでは自分の気持ちを疑わないでほしいと言っています。",
      songId: "ive-after-like",
    },
    {
      id: "q6",
      type: "word-meaning",
      question: "그래프는 폭이 커 の自然な意味は？",
      choices: ["感情の振れ幅が大きい", "地図がかなり広い", "計画が細かい", "数字に強い"],
      answer: "感情の振れ幅が大きい",
      explanation: "그래프 と 폭 を使って、自分の感情の上下をグラフの振れ幅として表しています。",
      songId: "ive-after-like",
    },
    {
      id: "q7",
      type: "grammar",
      question: "「-ㄹ 테니」の意味として近いのは？",
      choices: ["〜するはずだから", "〜したいのに", "〜してしまって", "〜するために"],
      answer: "〜するはずだから",
      explanation: "뜨거울 테니 で『熱いはずだから』。話し手の見込みを理由にしています。",
      songId: "ive-after-like",
    },
    {
      id: "q8",
      type: "fill-blank",
      question: "「LO 다음에 I 그 다음에 _____」の空欄に入るのは？",
      choices: ["VE", "KE", "ME", "LE"],
      answer: "VE",
      explanation: "LOVE を文字で分解しながら、その中に I を入れる遊びになっています。",
      songId: "ive-after-like",
    },
    {
      id: "q9",
      type: "word-meaning",
      question: "막지 못해 の自然な意味は？",
      choices: ["止められない", "隠してしまう", "追いつけない", "見つけられない"],
      answer: "止められない",
      explanation: "-지 못하다 は『〜できない』。아무도 막지 못해 で『誰にも止められない』です。",
      songId: "ive-after-like",
    },
    {
      id: "q10",
      type: "which-song",
      question: "「LOVE 사이 놓일 I」はどの曲？",
      text: "LOVE 사이 놓일 I",
      choices: ["After LIKE", "I AM", "Psycho", "COOL (Your rainbow)"],
      answer: "After LIKE",
      explanation: "IVE『After LIKE』。LIKE の次にある LOVE を文字遊びで見せる、この曲の象徴的なフレーズです。",
      songId: "ive-after-like",
    },
  ],
};

import type { Song } from "../../types/song";
import { completeGlassBeadLines } from "./_glass-bead-lines-all";

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

const glassBeadSectionRoleMap = expandTextMap([
  [[1, 2, 3, 4], "導入。ガラス玉の比喩で『繊細に見えても壊れない』強さと、一途な誓いを最初に示す。"],
  [[5, 6, 7, 8], "1番Aメロ。相手が自分を心配している視線を受け止めつつ、儚く見える印象を言葉にする。"],
  [[9, 10, 11, 12], "1番サビ。相手を安心させ、自分が光になり手を握って包む側だとはっきり見せる。"],
  [[13, 14, 15, 16], "反復サビ。中心メッセージが繰り返され、最初よりも『誓い』として強く響く。"],
  [[17, 18, 19, 20, 21], "2番前半。不可能を越えられる希望と、相手がいてくれることで強くなれる本音が出る。"],
  [[22, 23, 24, 25], "2番後半。鼓動や肩の震えを通じて、気持ちが伝わり合い距離が近づくパート。"],
  [[26, 27, 28, 29], "再提示のサビ。壊れない強さが、もう二人で確かめる約束のように戻ってくる。"],
  [[30, 31, 32, 33, 34, 35], "終盤前。甘い言葉より本音や笑顔を大事にし、関係そのものを一緒に守りたい段階へ進む。"],
  [[36, 37, 38, 39, 40], "クライマックス。愛情をかなり直接的に言い切り、出会いを奇跡として抱きしめる頂点。"],
  [[41, 42, 43, 44], "エンディング。最初の誓いへ戻りつつ、もう揺るがない約束として締めくくる。"],
]);

const glassBeadExtraGrammar: Record<
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
      title: "副詞 + 動詞",
      meaning: "様子を具体的に強める",
      explanation:
        "꽉 は『ぎゅっと、しっかり』。잡아줄게요 の行為の強さと安心感を増している。",
      example: "꽉 안아 줘",
      exampleJapanese: "ぎゅっと抱きしめて",
    },
  ],
  17: [
    {
      title: "것 없다",
      meaning: "〜するものはない、〜はない",
      explanation:
        "못 이룰 것 없어요 は『叶えられないことはない』。不可能の否定で強い肯定を作る。",
      example: "걱정할 것 없어",
      exampleJapanese: "心配することはない",
    },
  ],
  20: [
    {
      title: "-아/어 주다",
      meaning: "〜してくれる、〜してあげる",
      explanation:
        "비춰줘 は『照らして』。相手にやさしく光を求める形。",
      example: "기다려 줘",
      exampleJapanese: "待っていて",
    },
  ],
  24: [
    {
      title: "이젠",
      meaning: "今はもう、これからは",
      explanation:
        "이제는 の縮約形で、関係が一歩進んだ今を感じさせる。이젠 꼭 안아줄게요 で『今度はちゃんと抱きしめる』。",
      example: "이젠 알겠어",
      exampleJapanese: "今はもう分かる",
    },
  ],
  35: [
    {
      title: "-도록",
      meaning: "〜するように",
      explanation:
        "깨지지 않도록 で『壊れないように』。状態を守る願いを表す。",
      example: "늦지 않도록",
      exampleJapanese: "遅れないように",
    },
  ],
  37: [
    {
      title: "-ㄴ 거야 / -은 거야",
      meaning: "〜なんだ、〜ということだ",
      explanation:
        "찾아 온 거야 で『訪れたんだ』。感情をこめて言い切る説明の形。",
      example: "이게 운명인 거야",
      exampleJapanese: "これが運命なんだ",
    },
  ],
};

const glassBeadTokenMeanings: Record<number, Record<string, string>> = {
  1: {
    "유리구슬처럼": "きれいで繊細に見えるけれど、簡単には壊れない自分の比喩。",
  },
  2: {
    깨지진: "少なくとも簡単に壊れる存在ではない、と線を引く強調。",
  },
  4: {
    비춰줄게: "守られるだけではなく、自分も相手の光になるという約束。",
  },
  9: {
    "불안해 마요": "相手の不安を先に受け止め、自分が安心させる側に回る言葉。",
  },
  10: {
    "빛나고 있어": "ただ強いだけでなく、相手のために今も光っていること。",
  },
  11: {
    꽉: "不安を逃がさないように、しっかり支える手の強さ。",
  },
  17: {
    "것 없어요": "不可能だと思うことまで越えられるという大きな肯定。",
  },
  18: {
    있어준다면: "自分の強さが、相手がそばにいてくれることから生まれる本音。",
  },
  20: {
    "밝은 햇살을": "今度は自分が照らすだけでなく、相手の光も受け取りたい願い。",
  },
  22: {
    심장소리에: "言葉よりも先に届く、相手の鼓動や気持ちのサイン。",
  },
  23: {
    전해져: "不安しかなかった前半と違い、今はちゃんと気持ちが通じてくること。",
  },
  24: {
    꼭: "今度は逃さず、ちゃんと抱きしめるという決意の強さ。",
    안아줄게요: "手を握る段階を越えて、もっと近い距離で相手を守りたい気持ち。",
  },
  30: {
    "달콤한 말도": "表面的な甘さより、本気の気持ちの方が大切だという価値観。",
  },
  32: {
    매일같은: "一瞬の奇跡ではなく、日々続いていく幸せとして感じていること。",
  },
  34: {
    "담아 둘게요": "相手の笑顔を流さず、ちゃんと記憶としてしまって守ること。",
  },
  35: {
    지켜줘: "自分一人で強がるのではなく、関係を一緒に守ってほしいお願い。",
  },
  36: {
    "그 누구보다 더": "相手が最優先で、誰より特別な存在だという強い比較。",
  },
  37: {
    기적이: "この出会いや関係そのものを、現実離れした幸運として感じていること。",
  },
  40: {
    "영원히": "クライマックス後もぶれない、時間の長い約束。",
  },
};

const glassBeadExtraSentenceExplanations: Record<number, string> = {
  13: "ここからの反復は単なる繰り返しではなく、相手の不安を受け止めたあとに改めて言い直す誓いになっている。",
  17: "2番では『壊れない』からさらに進み、『叶えられないことはない』という未来向きの強さまで広がる。",
  20: "この行で初めて、自分が照らすだけでなく相手にも照らしてほしいと関係が双方向になる。",
  24: "ここでは手を握るよりさらに近く、相手の震えまで抱きしめて受け止める約束になっている。",
  26: "3回目の反復では、最初の自己紹介より『もう二人で確かめた強さ』として聞こえやすい。",
  30: "終盤では甘い言葉そのものを否定して、本気の気持ちと一緒にいる時間の価値を前に出している。",
  35: "『壊れない』と言い切るだけでなく、同時に守ってほしいと頼ることで関係の深さが増している。",
  36: "ここはこの曲の中でもかなり直接的な愛情表現で、清純さの中にまっすぐな告白の強さがある。",
  37: "相手との出会いを奇跡と呼ぶことで、ここまでの強さもやさしさも全部正当化されるような頂点になる。",
  41: "最後の反復はもう『弱く見えるけれど』という弁明ではなく、分かってほしい本質として戻ってくる。",
};

const glassBeadExtraNuance: Record<number, string> = {
  13: "同じフレーズでも、ここでは『そう見えても大丈夫』と相手を安心させた後だから響きがより頼もしい。",
  17: "強さが defensive なものから、未来を開く前向きな確信へ変わっている。",
  20: "一方的に守るだけでなく、照らし返してほしい願いが見えることで恋が少し対等になる。",
  24: "肩を抱くイメージまで来ると、支える気持ちがかなり具体的で親密になる。",
  26: "3回目ではサビが宣言というより、ぶれない約束の再確認に近い。",
  30: "甘い言葉を要らないと言うことで、かえってこの恋の本気さが立ち上がる。",
  35: "壊れない強さと、守ってほしい願いが同居しているのがこの曲のやさしさ。",
  36: "初期GFRIENDらしい清純さの中で、ここだけ少し驚くほど率直な愛情表現になっている。",
  37: "『奇跡』は大げさというより、それくらい大切で信じがたい出会いだという高揚感。",
  41: "最後はもう自己証明ではなく、二人の間で共有された前提みたいに聞こえる。",
};

export const gfriendGlassBead: Song = {
  id: "gfriend-glass-bead",
  title: "유리구슬 (Glass Bead)",
  artist: "GFRIEND",
  difficulty: "中級",
  tags: ["初恋", "強さ", "光", "純粋", "守る", "中級"],

  overview:
    "『透明で壊れやすそうに見えても、本当は簡単には壊れない』という強さをまっすぐ歌う曲。ガラス玉、月明かり、露、陽ざしといった光のイメージを通して、繊細さと芯の強さが同時に描かれています。ただ守られたいのではなく、自分も相手を照らし、包み、支えたいという能動的な愛情がこの曲の大きな特徴です。",

  lines: completeGlassBeadLines.map((line, index) => {
    const lineNumber = index + 1;
    const extraGrammar =
      glassBeadExtraGrammar[lineNumber]?.map((grammarPoint, grammarIndex) => ({
        id: `line-${lineNumber}-extra-g${grammarIndex + 1}`,
        ...grammarPoint,
      })) ?? [];

    return {
      ...line,
      roleInSong: combineRole(
        glassBeadSectionRoleMap[lineNumber],
        line.roleInSong,
      ),
      sentenceExplanation:
        glassBeadExtraSentenceExplanations[lineNumber] ??
        line.sentenceExplanation,
      nuance: glassBeadExtraNuance[lineNumber] ?? line.nuance,
      grammarPoints: [...(line.grammarPoints ?? []), ...extraGrammar],
      tokens: line.tokens.map((token) => ({
        ...token,
        meaningInThisLine:
          glassBeadTokenMeanings[lineNumber]?.[token.surface] ??
          token.meaningInThisLine,
      })),
    };
  }),

  quizzes: [
    {
      id: "q1",
      type: "word-meaning",
      question: "유리구슬 の意味は？",
      choices: ["ガラス玉", "月明かり", "奇跡", "露"],
      answer: "ガラス玉",
      explanation:
        "유리 は『ガラス』、구슬 は『玉』で、曲全体の中心比喩です。",
      songId: "gfriend-glass-bead",
    },
    {
      id: "q2",
      type: "grammar",
      question: "「-처럼」の意味は？",
      choices: ["〜のように", "〜だけ", "〜してから", "〜してみる"],
      answer: "〜のように",
      explanation:
        "유리구슬처럼、이슬처럼 のように比喩を作る時に使います。",
      songId: "gfriend-glass-bead",
    },
    {
      id: "q3",
      type: "grammar",
      question: "깨지진 않을 거야 の「-진」はどんなニュアンス？",
      choices: ["少なくとも〜はしないという強調", "過去の回想", "丁寧な依頼", "経験の確認"],
      answer: "少なくとも〜はしないという強調",
      explanation:
        "깨지지는 の縮約で、『壊れはしない』と対比をこめて強めています。",
      songId: "gfriend-glass-bead",
    },
    {
      id: "q4",
      type: "grammar",
      question: "변하지 않도록 の意味は？",
      choices: ["変わらないように", "変わりたくて", "変わってしまって", "変わったので"],
      answer: "変わらないように",
      explanation:
        "-도록 は『〜するように』。ここでは愛が変わらない願いです。",
      songId: "gfriend-glass-bead",
    },
    {
      id: "q5",
      type: "word-meaning",
      question: "영원히 널 비춰줄게 の自然な意味は？",
      choices: ["永遠にあなたを照らしてあげるね", "永遠にあなたを忘れない", "永遠にあなたを待っている", "永遠にあなたを探している"],
      answer: "永遠にあなたを照らしてあげるね",
      explanation:
        "비춰주다 は『照らしてあげる』で、相手の光になりたい約束です。",
      songId: "gfriend-glass-bead",
    },
    {
      id: "q6",
      type: "word-meaning",
      question: "약해 보였나요 の自然な意味は？",
      choices: ["弱く見えたのかな", "もっと強くなったかな", "本当に泣いていたかな", "急に消えたのかな"],
      answer: "弱く見えたのかな",
      explanation:
        "약해 보이다 は『弱く見える』、-나요 はやわらかい疑問です。",
      songId: "gfriend-glass-bead",
    },
    {
      id: "q7",
      type: "word-meaning",
      question: "불안해 마요 の自然な意味は？",
      choices: ["不安にならないで", "不安でたまらない", "不安を隠して", "不安でも進もう"],
      answer: "不安にならないで",
      explanation:
        "歌詞では短く言っていて、『心配しないで』と相手を安心させています。",
      songId: "gfriend-glass-bead",
    },
    {
      id: "q8",
      type: "word-meaning",
      question: "꽉 잡아줄게요 の自然な意味は？",
      choices: ["ぎゅっと握ってあげるね", "すぐ離してあげるね", "そっと見守るね", "一緒に走っていくね"],
      answer: "ぎゅっと握ってあげるね",
      explanation:
        "꽉 は『ぎゅっと』、잡아주다 は『握ってあげる』です。",
      songId: "gfriend-glass-bead",
    },
    {
      id: "q9",
      type: "grammar",
      question: "그대만 있어준다면 の「-ㄴ다면」の意味は？",
      choices: ["〜なら", "〜したのに", "〜しなさい", "〜しておいた"],
      answer: "〜なら",
      explanation:
        "있어준다면 は『いてくれるなら』で、仮定を表しています。",
      songId: "gfriend-glass-bead",
    },
    {
      id: "q10",
      type: "word-meaning",
      question: "어두웠던 맘 속에 の自然な意味は？",
      choices: ["暗かった心の中に", "遠くなった夢の中に", "明るい部屋の中に", "昨日までの記憶に"],
      answer: "暗かった心の中に",
      explanation:
        "-던 は過去の状態を表し、前は暗かったことが分かります。",
      songId: "gfriend-glass-bead",
    },
    {
      id: "q11",
      type: "word-meaning",
      question: "달콤한 말도 필요 없어요 の自然な意味は？",
      choices: ["甘い言葉なんていらない", "甘い言葉をもっと聞かせて", "甘い言葉が怖い", "甘い言葉しか信じない"],
      answer: "甘い言葉なんていらない",
      explanation:
        "말도 は『言葉も』、필요 없어요 は『必要ないです』です。",
      songId: "gfriend-glass-bead",
    },
    {
      id: "q12",
      type: "grammar",
      question: "담아 둘게요 の「-아/어 두다」の意味は？",
      choices: ["〜しておく、しまっておく", "〜してみる", "〜してしまう", "〜するしかない"],
      answer: "〜しておく、しまっておく",
      explanation:
        "笑顔や記憶を大切に保存する感じを出しています。",
      songId: "gfriend-glass-bead",
    },
    {
      id: "q13",
      type: "word-meaning",
      question: "그 누구보다 더 널 사랑해 の自然な意味は？",
      choices: ["誰よりもあなたを愛してる", "誰かより少し好きだ", "みんなを同じように愛してる", "誰よりもあなたを守ってほしい"],
      answer: "誰よりもあなたを愛してる",
      explanation:
        "그 누구보다 더 で『誰よりももっと』と強く比較しています。",
      songId: "gfriend-glass-bead",
    },
    {
      id: "q14",
      type: "word-meaning",
      question: "믿기지 않는 기적 の自然な意味は？",
      choices: ["信じられない奇跡", "消えかけた夢", "壊れやすい心", "明るい月明かり"],
      answer: "信じられない奇跡",
      explanation:
        "믿기지 않다 は『信じられない』、기적 は『奇跡』です。",
      songId: "gfriend-glass-bead",
    },
    {
      id: "q15",
      type: "which-song",
      question: "「투명한 유리구슬처럼 보이지만」はどの曲？",
      text: "투명한 유리구슬처럼 보이지만",
      choices: [
        "유리구슬 (Glass Bead)",
        "밤 (Time for the moon night)",
        "오늘부터 우리는 (Me gustas tu)",
        "시간을 달려서 (Rough)",
      ],
      answer: "유리구슬 (Glass Bead)",
      explanation:
        "GFRIEND『유리구슬 (Glass Bead)』の代表的な冒頭フレーズです。",
      songId: "gfriend-glass-bead",
    },
    {
      id: "q16",
      type: "fill-blank",
      question: "「떨리는 그대 손을 _____ 잡아줄게요」の空欄に入るのは？",
      choices: ["꽉", "몰래", "다시", "조용히"],
      answer: "꽉",
      explanation:
        "꽉 は『ぎゅっと』で、相手をしっかり支える感じを出します。",
      songId: "gfriend-glass-bead",
    },
    {
      id: "q17",
      type: "word-meaning",
      question: "못 이룰 것 없어요 の自然な意味は？",
      choices: [
        "叶えられないことなんてない",
        "何も始められない",
        "まだ夢の途中だ",
        "壊れそうで不安だ",
      ],
      answer: "叶えられないことなんてない",
      explanation:
        "不可能を否定することで、かなり強い肯定を作っている一行です。",
      songId: "gfriend-glass-bead",
    },
    {
      id: "q18",
      type: "word-meaning",
      question: "밝은 햇살을 비춰줘 の自然な意味は？",
      choices: [
        "明るい陽ざしで私も照らしてほしい",
        "静かに背中を向けてほしい",
        "そのまま何も言わないでほしい",
        "早く遠くへ行ってほしい",
      ],
      answer: "明るい陽ざしで私も照らしてほしい",
      explanation:
        "ここでは自分が照らすだけでなく、相手にも光をもらいたい双方向の関係が見えます。",
      songId: "gfriend-glass-bead",
    },
    {
      id: "q19",
      type: "grammar",
      question: "것 없다 のニュアンスとして自然なのは？",
      choices: [
        "〜するものはない、つまり十分できる",
        "〜したくない",
        "〜しか見えない",
        "〜しておかなければならない",
      ],
      answer: "〜するものはない、つまり十分できる",
      explanation:
        "못 이룰 것 없어요 は『叶えられないことはない』で、強い肯定になります。",
      songId: "gfriend-glass-bead",
    },
    {
      id: "q20",
      type: "fill-blank",
      question: "「그 누구보다 더 널 _____」の空欄に入るのは？",
      choices: ["사랑해", "믿어", "기다려", "지켜"],
      answer: "사랑해",
      explanation:
        "소중해 그 누구보다 더 널 사랑해 は、後半クライマックスのかなり直接的な愛情表現です。",
      songId: "gfriend-glass-bead",
    },
  ],
};

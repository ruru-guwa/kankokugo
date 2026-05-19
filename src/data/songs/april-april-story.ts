import type { Song } from "../../types/song";
import { completeAprilStoryLines } from "./_april-story-lines-all";

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

const aprilStorySectionRoleMap = expandTextMap([
  [[1, 2, 3, 4], "序章。昔話の形を借りて、長く隠してきた片思いの輪郭を静かに出していくパート。"],
  [[5, 6, 7, 8], "感情の増幅。相手の幸せそうな姿を見てしまうことで、嫉妬と秘密が一気に濃くなる流れ。"],
  [[9, 10, 11, 12], "童話の配置。春の国の少女、氷の国の少年、冬の国の彼女という三者の距離を映像的に置く場面。"],
  [[13, 14, 15, 16], "自己抑制の核心。自分を消してでも二人の幸せを祈るという、この曲いちばん痛い優しさが前面に出る。"],
  [[17, 18, 19, 20], "2番前半。嫉妬のあとに残る『どうにもできなさ』と、一人で感情を処理する孤独が強まる。"],
  [[21, 22, 23, 24], "2番後半。童話の比喩をもう一度なぞりながら、それが完全に自分自身の祈りとして固まっていく反復。"],
  [[25, 26, 27, 28, 29, 30], "ブリッジ。物語が『私の話』へ変わり、別の春を願いながらも本心が届くことを怖がる矛盾がむき出しになる。"],
  [[31, 32, 33, 34, 35, 36, 37, 38], "ラスト。恋を叶える方向ではなく、気持ちごと消えて好きになる前へ戻りたいと願う終着点。"],
]);

const aprilStoryExtraGrammar: Record<
  number,
  Array<{
    title: string;
    meaning: string;
    explanation: string;
    example?: string;
    exampleJapanese?: string;
  }>
> = {
  5: [
    {
      title: "-아/어 보이다",
      meaning: "〜そうに見える",
      explanation:
        "見た印象からそう感じられることを表す形。행복해 보여 は『幸せそうに見える』。",
      example: "피곤해 보여",
      exampleJapanese: "疲れていそうに見える",
    },
  ],
  8: [
    {
      title: "-게 되다",
      meaning: "〜するようになる、〜という状態になる",
      explanation:
        "状態の変化や成り行きを表す形。비밀이 됐대요 は『秘密になってしまったらしい』。",
      example: "친해지게 됐어",
      exampleJapanese: "親しくなることになった",
    },
  ],
  14: [
    {
      title: "-대요",
      meaning: "〜なんですって、〜らしいです",
      explanation:
        "伝聞をやわらかく丁寧に言う形。했대요 で『したんですって』。",
      example: "오늘 쉰대요",
      exampleJapanese: "今日は休みなんですって",
    },
  ],
  26: [
    {
      title: "-같다",
      meaning: "〜みたいだ、〜のようだ",
      explanation:
        "断定せず比喩的に感じたままを言う形。내 얘기 같았어 は『私の話みたいだった』。",
      example: "꿈같았어",
      exampleJapanese: "夢みたいだった",
    },
  ],
};

const aprilStoryTokenMeanings: Record<number, Record<string, string>> = {
  10: {
    "멋진 소년을": "春の国の少女から見た、遠くて美しく理想化された相手。",
  },
  11: {
    "예쁜 그녀": "主人公が憎み切れないまま見つめてしまう、すでに彼のそばにいる存在。",
  },
  14: {
    "아름다운 둘을 위해": "自分の願いではなく、二人の幸せを優先しようとしてしまう自己犠牲。",
  },
  16: {
    "마치 나처럼": "童話の中の少女と自分自身が、もう分けられないことを示す一刺し。",
  },
  19: {
    "어쩔 수 없는": "理性で止められず、好きでいるしかないほど強くなった感情。",
  },
  20: {
    "바보처럼": "分かっていても同じ苦しみ方をしてしまう、自分へのやさしい自己批判。",
    달래요: "誰にも言えないから、自分で自分の痛みをなだめ直していること。",
  },
  26: {
    "내 얘기": "もう比喩や童話ではなく、語り手自身の片思いそのものだという認識。",
  },
  27: {
    "다른 봄이": "今の苦しい春とは違う、感情ごと塗り替わる新しい季節。",
  },
  29: {
    "닿을까 봐": "本当は届いてほしさもあるのに、知られるのが怖いという片思い特有の矛盾。",
  },
  30: {
    앓아요: "病気みたいに長く抱え込み、誰にも見せず一人で苦しむこと。",
  },
  36: {
    "다 지워지기를": "恋が叶うより、記憶も感情も消えて楽になりたい願い。",
  },
  37: {
    "아무 마음 없던": "好きになる前の、まだ何も始まっていなかった平穏な時間。",
  },
};

const aprilStoryExtraSentenceExplanations: Record<number, string> = {
  17: "ここでは最初の驚きではなく、相手の幸せを見続けた末にその姿自体がつらくなる段階まで進んでいる。",
  18: "この短い一行は、嫉妬そのものより『そんな自分になってしまうほど苦しい』という自己嫌悪に近い。",
  21: "2番でこの童話の導入が戻ることで、もう比喩ではなく自分の物語を言い換えているだけだと分かってくる。",
  23: "ここでの祈りは優しさだけでなく、もう自分では入り込めない関係だと認める痛みも含んでいる。",
  24: "反復の最後に 다시 나처럼 が来ることで、物語と現実の境界がほとんど消えてしまう。",
  27: "ここで初めて、相手の幸せではなく自分がこの季節から抜け出したいという願いが正面に出る。",
  29: "ブリッジ後半では、忘れたいのに届きそうで怖いという片思いのねじれが最もはっきり現れる。",
  36: "最後の祈りは成就ではなく消去へ向かっていて、この曲の切なさがいちばん強く出る部分。",
  37: "叶えることよりも『好きになる前へ戻りたい』が願いになることで、この恋がどれだけ苦しかったかが分かる。",
};

const aprilStoryExtraNuance: Record<number, string> = {
  17: "同じフレーズでも1番より感情が濁っていて、長く見続けてしまった苦しさが強い。",
  18: "相手を本当に憎みたいのではなく、憎いと思うほど自分が追い込まれていることがつらい。",
  21: "童話の語りに戻っても、聞き手にはもう『これは本人のことだ』と分かってしまう重さがある。",
  23: "『変わらないでほしい』は祝福でもあり、同時に自分の望みを完全に下げる言葉でもある。",
  27: "春を願う歌なのに、ここでは『今とは違う春』を求めるところにこの曲の痛みがある。",
  29: "届いてほしい願望と、届いたら壊れるかもしれない恐れが一つの表現に重なっている。",
  36: "きれいに消えてほしいという願いは、まだ好きでいる証拠でもあって余計に切ない。",
  37: "忘れるでは足りず、『始まる前に戻りたい』まで行くところがこの曲の終着点。",
};

export const aprilAprilStory: Song = {
  id: "april-april-story",
  title: "봄의 나라 이야기 (April Story)",
  artist: "APRIL",
  difficulty: "中級",
  tags: ["片思い", "童話", "切なさ", "比喩表現", "物語調", "中級"],

  overview:
    "『好きな人にはすでに大切な人がいて、自分の想いだけが言えないまま残ってしまう』という切ない片思いを、童話の形で描いた曲。春の国の少女、氷の国の少年、冬の国の彼女という比喩を使いながら、自分の感情を隠し、二人の幸せさえ祈ってしまう苦しさが静かに積み重なります。最後には恋が叶うことではなく、何も知らなかった頃に戻りたいと願うところまで進むのがこの曲の痛みです。",

  lines: completeAprilStoryLines.map((line, index) => {
    const lineNumber = index + 1;
    const extraGrammar =
      aprilStoryExtraGrammar[lineNumber]?.map((grammarPoint, grammarIndex) => ({
        id: `line-${lineNumber}-extra-g${grammarIndex + 1}`,
        ...grammarPoint,
      })) ?? [];

    return {
      ...line,
      roleInSong: combineRole(
        aprilStorySectionRoleMap[lineNumber],
        line.roleInSong,
      ),
      sentenceExplanation:
        aprilStoryExtraSentenceExplanations[lineNumber] ??
        line.sentenceExplanation,
      nuance: aprilStoryExtraNuance[lineNumber] ?? line.nuance,
      grammarPoints: [...(line.grammarPoints ?? []), ...extraGrammar],
      tokens: line.tokens.map((token) => ({
        ...token,
        meaningInThisLine:
          aprilStoryTokenMeanings[lineNumber]?.[token.surface] ??
          token.meaningInThisLine,
      })),
    };
  }),

  quizzes: [
    {
      id: "q1",
      type: "grammar",
      question: "「-대 / -대요」の意味は？",
      choices: [
        "〜なんだって、〜らしい",
        "〜したい",
        "〜してはいけない",
        "〜できる",
      ],
      answer: "〜なんだって、〜らしい",
      explanation:
        "소녀는 아무 말도 할 수 없었대、빌었대요 のように、童話を語るような伝聞表現として使われています。",
      songId: "april-april-story",
    },
    {
      id: "q2",
      type: "word-meaning",
      question: "억지로 の意味は？",
      choices: ["無理に", "自然に", "静かに", "少しずつ"],
      answer: "無理に",
      explanation:
        "아름다운 맘을 억지로 숨기고 で『美しい想いを無理に隠して』という意味です。",
      songId: "april-april-story",
    },
    {
      id: "q3",
      type: "grammar",
      question: "「-길 바라다」の意味は？",
      choices: ["〜することを願う", "〜しなければならない", "〜してみる", "〜したらしい"],
      answer: "〜することを願う",
      explanation:
        "다른 봄이 오길 바래요 は『違う春が来ることを願います』という意味です。",
      songId: "april-april-story",
    },
    {
      id: "q4",
      type: "word-meaning",
      question: "여전한 の自然な意味は？",
      choices: ["相変わらない", "輝いている", "隠された", "壊れそうな"],
      answer: "相変わらない",
      explanation:
        "여전한 그 마음 で『変わらないその気持ち』を表しています。",
      songId: "april-april-story",
    },
    {
      id: "q5",
      type: "grammar",
      question: "「-ㄹ/을 만큼」の意味は？",
      choices: ["〜するほど", "〜する前に", "〜するために", "〜するとき"],
      answer: "〜するほど",
      explanation:
        "미워질 만큼 で『憎らしくなるほど』という強い程度を表しています。",
      songId: "april-april-story",
    },
    {
      id: "q6",
      type: "word-meaning",
      question: "커져가는 마음 の自然な意味は？",
      choices: [
        "だんだん大きくなる想い",
        "急に冷める気持ち",
        "届きそうな手紙",
        "消えていく秘密",
      ],
      answer: "だんだん大きくなる想い",
      explanation:
        "隠していても、片思いの気持ちが少しずつ膨らんでいくことを表しています。",
      songId: "april-april-story",
    },
    {
      id: "q7",
      type: "word-meaning",
      question: "전하지 못할 비밀 の自然な意味は？",
      choices: [
        "伝えられない秘密",
        "忘れられた約束",
        "叶った願い",
        "美しい噂",
      ],
      answer: "伝えられない秘密",
      explanation:
        "恋心が告白ではなく『秘密』になってしまった、というこの曲の核心表現です。",
      songId: "april-april-story",
    },
    {
      id: "q8",
      type: "fill-blank",
      question: "「서로의 맘이 _____ 않기를」の空欄に入るのは？",
      choices: ["변하지", "흔들리지", "아프지", "잊히지"],
      answer: "변하지",
      explanation:
        "서로의 맘이 변하지 않기를 は『二人の気持ちが変わりませんように』です。",
      songId: "april-april-story",
    },
    {
      id: "q9",
      type: "word-meaning",
      question: "마치 나처럼 の意味は？",
      choices: [
        "まるで私のように",
        "私だけのために",
        "私を見ないで",
        "私と違って",
      ],
      answer: "まるで私のように",
      explanation:
        "童話の少女の祈りが、実は自分自身の片思いと重なっていることを示す重要な表現です。",
      songId: "april-april-story",
    },
    {
      id: "q10",
      type: "word-meaning",
      question: "어쩔 수 없는 마음 の自然な意味は？",
      choices: [
        "どうしようもない想い",
        "隠しきれない秘密",
        "届かない願い",
        "静かな思い出",
      ],
      answer: "どうしようもない想い",
      explanation:
        "理性では片づけられない、どうにも止められない感情を表します。",
      songId: "april-april-story",
    },
    {
      id: "q11",
      type: "word-meaning",
      question: "달래요 の意味は？",
      choices: ["なだめる、慰める", "隠す", "願う", "変わる"],
      answer: "なだめる、慰める",
      explanation:
        "또 바보처럼 혼자서 달래요 で『また一人で自分を慰める』という意味です。",
      songId: "april-april-story",
    },
    {
      id: "q12",
      type: "grammar",
      question: "「-ㄹ/을까 봐」の意味は？",
      choices: ["〜しそうで、〜するかと思って", "〜したいから", "〜したあとで", "〜するべきだ"],
      answer: "〜しそうで、〜するかと思って",
      explanation:
        "닿을까 봐 で『届いてしまいそうで』という不安を表しています。",
      songId: "april-april-story",
    },
    {
      id: "q13",
      type: "word-meaning",
      question: "앓아요 の自然な意味は？",
      choices: ["苦しんでいる", "笑っている", "忘れている", "見つめている"],
      answer: "苦しんでいる",
      explanation:
        "항상 혼자만 앓아요 で、片思いを一人で患うように抱えている感じを出しています。",
      songId: "april-april-story",
    },
    {
      id: "q14",
      type: "which-song",
      question: "「하늘에 매일 빌었대요 마치 나처럼」はどの曲？",
      text: "하늘에 매일 빌었대요 마치 나처럼",
      choices: [
        "봄의 나라 이야기 (April Story)",
        "Blue Valentine",
        "REBEL HEART",
        "I AM",
      ],
      answer: "봄의 나라 이야기 (April Story)",
      explanation:
        "APRIL『봄의 나라 이야기 (April Story)』。童話の少女と自分自身の片思いが重なる核心の一行です。",
      songId: "april-april-story",
    },
    {
      id: "q15",
      type: "fill-blank",
      question: "「기적처럼 다 _____ 바라죠」の空欄に入るのは？",
      choices: ["지워지기를", "변하기를", "웃어주기를", "사라지라고"],
      answer: "지워지기를",
      explanation:
        "기적처럼 다 지워지기를 바라죠 は『奇跡みたいに全部消えてしまえばいいと願う』です。",
      songId: "april-april-story",
    },
    {
      id: "q16",
      type: "word-meaning",
      question: "아무 마음 없던 그 날 の自然な意味は？",
      choices: [
        "何の想いもなかったあの日",
        "誰も知らないその場所",
        "気持ちが変わったあの時",
        "願いが叶った明日",
      ],
      answer: "何の想いもなかったあの日",
      explanation:
        "好きになる前の、まだ苦しくなかった時点に戻りたいという気持ちがこもっています。",
      songId: "april-april-story",
    },
    {
      id: "q17",
      type: "grammar",
      question: "「-게 되다」の意味は？",
      choices: [
        "〜するようになる、〜という状態になる",
        "〜したいと思う",
        "〜してはいけない",
        "〜するしかない",
      ],
      answer: "〜するようになる、〜という状態になる",
      explanation:
        "비밀이 됐대요 は『秘密になってしまったらしい』。気持ちが言葉ではなく秘密へ変わった流れを表します。",
      songId: "april-april-story",
    },
    {
      id: "q18",
      type: "word-meaning",
      question: "다른 봄이 の自然な意味は？",
      choices: [
        "今とは違う季節、違う感情の時間",
        "もっと寒い冬",
        "忘れられない昨日",
        "二人だけの秘密",
      ],
      answer: "今とは違う季節、違う感情の時間",
      explanation:
        "다른 봄이 오길 바래요 は、今の片思いに満ちた春ではない別の時間が来てほしい願いです。",
      songId: "april-april-story",
    },
    {
      id: "q19",
      type: "word-meaning",
      question: "내 얘기 같았어 の自然な意味は？",
      choices: [
        "まるで自分の話みたいだった",
        "君の話に聞こえた",
        "もう終わった話だった",
        "昔の夢を思い出した",
      ],
      answer: "まるで自分の話みたいだった",
      explanation:
        "童話の物語が、結局は全部自分の片思いの話に思えたという告白です。",
      songId: "april-april-story",
    },
    {
      id: "q20",
      type: "fill-blank",
      question: "「억지로 숨겨둔 내 맘이 _____ 봐」の空欄に入るのは？",
      choices: ["닿을까", "멈출까", "잊을까", "변할까"],
      answer: "닿을까",
      explanation:
        "닿을까 봐 は『届いてしまいそうで』。隠してきた気持ちが相手に伝わることへの怖さです。",
      songId: "april-april-story",
    },
  ],
};

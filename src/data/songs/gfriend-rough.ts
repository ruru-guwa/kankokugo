import type { Song } from "../../types/song";
import { completeRoughLines } from "./_rough-lines-all";

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

const roughSectionRoleMap = expandTextMap([
  [[1, 2, 3, 4], "導入。近づきたいのに心だけが遠ざかる、青春のすれ違いが最初から正面に置かれる。"],
  [[5, 6, 7, 8], "1番Bメロ。『平行線』の比喩と、それでも会えるはずだと信じる反発が並ぶパート。"],
  [[9, 10, 11, 12, 13, 14], "1回目サビ。言えなかった好意を未来へ預け、時間を越えた先で守りたいと願う中心部。"],
  [[15, 16, 17, 18], "2番Aメロ。すれ違いが偶然ではなく、二人の未熟さから何度も起きていると見つめ直す。"],
  [[19, 20, 21, 22], "2番Bメロ。大きな壁ではなく小さなズレだと認めつつ、いつかは伝えると決意が少し前へ出る。"],
  [[23, 24, 25, 26, 27, 28], "2回目サビ。1回目と同じ言葉でも、待つだけでなく意志を伴った願いとして響く反復。"],
  [[29, 30, 31, 32], "ブリッジ。時間や運命に閉じ込められても、最後には会えるし本気だと知ってほしい局面。"],
  [[33, 34, 35, 36, 37, 38], "ラストサビ。願いが再提示され、最後には『抱きしめる』まで距離の理想が深まる。"],
  [[39, 40, 41, 42, 43, 44], "アウトロ。変わらない笑顔を望みつつ、すれ違いの中でも手を握る約束で締める終盤。"],
]);

const roughExtraGrammar: Record<
  number,
  Array<{
    title: string;
    meaning: string;
    explanation: string;
    example?: string;
    exampleJapanese?: string;
  }>
> = {
  8: [
    {
      title: "-ㄹ게 / -을게",
      meaning: "〜するね、〜するよ",
      explanation:
        "話し手の意志をやわらかく相手へ向ける語尾。기다릴게 で『待つね』。",
      example: "내가 갈게",
      exampleJapanese: "私が行くね",
    },
  ],
  19: [
    {
      title: "-아/어지다",
      meaning: "〜くなる、〜になる",
      explanation:
        "状態が変化していく形。좁혀지지 않아 では『縮まる状態にならない』ことを表す。",
      example: "가까워졌어",
      exampleJapanese: "近くなった",
    },
  ],
  20: [
    {
      title: "못다 + 動詞",
      meaning: "最後まで〜できなかった",
      explanation:
        "途中で終わってしまい、やり切れなかったことを表す形。못다한 말 は『言い切れなかった言葉』。",
      example: "못다 한 이야기",
      exampleJapanese: "まだ言い終えていない話",
    },
  ],
  24: [
    {
      title: "-만",
      meaning: "〜だけ",
      explanation:
        "範囲を絞って『それだけでも』の感じを出す助詞。것만 알아줘 で『それだけは分かって』。",
      example: "한 번만 믿어 줘",
      exampleJapanese: "一度だけ信じてよ",
    },
  ],
  29: [
    {
      title: "-처럼",
      meaning: "〜のように",
      explanation:
        "比喩や基準を作る助詞。지금처럼 で『今みたいに』。",
      example: "예전처럼 웃어",
      exampleJapanese: "前みたいに笑って",
    },
  ],
};

const roughTokenMeanings: Record<number, Record<string, string>> = {
  6: {
    "평행선처럼": "近くを走っているのに、今はまだ交わらない二人の関係そのもの。",
  },
  7: {
    "말도 안돼": "平行線のまま終わる結末だけは認めたくないという反発。",
  },
  8: {
    기다릴게: "今は追い詰めず、未来の出会いを信じて待つという静かな意志。",
  },
  19: {
    "한 끗 차이": "ほんのわずかなズレのせいで、届きそうで届かない距離。",
  },
  20: {
    "못다한 말": "告白だけでなく、今まで積み残してきた本音すべて。",
  },
  22: {
    "시간 속에 갇혀": "自分たちの未熟さや今という時期そのものに縛られている感覚。",
  },
  23: {
    결국: "遠回りしても最後にはそこへたどり着くと信じる粘り強さ。",
  },
  24: {
    진심인: "未熟でも軽い気持ちではない、本気の恋だという核心。",
    알아줘: "解決より先に、まずその本気さだけは受け取ってほしい願い。",
  },
  25: {
    서툴기만: "今の自分たちには不器用さしか目立たないという自己認識。",
  },
  26: {
    안아줄게: "最終盤では『手を握る』よりさらに近い距離で守りたい願い。",
  },
  28: {
    "변치 않기를": "時間が流れても相手の気持ちや笑顔が変わらないでいてほしい願い。",
  },
  29: {
    지금처럼: "未来になっても、今この瞬間のやさしい表情を保っていてほしいこと。",
  },
  31: {
    엇갈림: "完全に消えないかもしれないズレまで含めた現実の難しさ。",
  },
};

const roughExtraSentenceExplanations: Record<number, string> = {
  20: "ここでは『好きだった』だけで終わらず、いつか言い切れなかった言葉を自分から渡す未来まで見始めている。",
  23: "ブリッジでは、ただ願うだけでなく『どれだけ迷っても最後には会える』と結末そのものを信じて押し切っている。",
  24: "問題を全部解くことはできなくても、この恋が本気だという一点だけは分かってほしいと真っすぐ言う行。",
  26: "ラストサビの変化で、未来の守り方が『手を握る』から『抱きしめる』へ一段深くなる。",
  29: "ここでは大きな奇跡ではなく、今向けてくれている笑顔が未来でも続いていてほしいと願っている。",
  31: "最後は理想化された完全な結末ではなく、すれ違いさえある現実の中で手を握る約束に着地する。",
};

const roughExtraNuance: Record<number, string> = {
  20: "『못다한』には、言えなかった悔しさと、まだ終わっていない希望の両方が残る。",
  23: "결국 が入ることで、途中がどれだけ長くても最後は会えるという粘りが強くなる。",
  24: "説明も正しさも要らないから、まず本気だったことだけは知ってほしい切実さがある。",
  26: "終盤で抱きしめるイメージに変わることで、願いが少しだけ大人びて聞こえる。",
  29: "未来への願いが笑顔ひとつに絞られるからこそ、かえって感情が切実に見える。",
  31: "完全なハッピーエンドより、難しさ込みで一緒にいたいという現実的なやさしさが残る締め方。",
};

export const gfriendRough: Song = {
  id: "gfriend-rough",
  title: "시간을 달려서 (Rough)",
  artist: "GFRIEND",
  difficulty: "中級",
  tags: ["青春", "片思い", "時間", "すれ違い", "未来", "中級"],

  overview:
    "『好きなのに近づけない二人』が、未熟さや時間の壁のせいですれ違いながらも、いつか必ず出会えると信じ続ける曲。平行線、時間、奇跡といった大きな比喩を使いながら、今は言えない気持ちを未来へ預けていくのが特徴です。今はまだ子どもでも、時を駆け抜けて大人になれたなら、厳しい世界の中で相手の手を握りたいという切なく前向きな願いが中心にあります。",

  lines: completeRoughLines.map((line, index) => {
    const lineNumber = index + 1;
    const extraGrammar =
      roughExtraGrammar[lineNumber]?.map((grammarPoint, grammarIndex) => ({
        id: `line-${lineNumber}-extra-g${grammarIndex + 1}`,
        ...grammarPoint,
      })) ?? [];

    return {
      ...line,
      roleInSong: combineRole(roughSectionRoleMap[lineNumber], line.roleInSong),
      sentenceExplanation:
        roughExtraSentenceExplanations[lineNumber] ?? line.sentenceExplanation,
      nuance: roughExtraNuance[lineNumber] ?? line.nuance,
      grammarPoints: [...(line.grammarPoints ?? []), ...extraGrammar],
      tokens: line.tokens.map((token) => ({
        ...token,
        meaningInThisLine:
          roughTokenMeanings[lineNumber]?.[token.surface] ??
          token.meaningInThisLine,
      })),
    };
  }),

  quizzes: [
    {
      id: "q1",
      type: "grammar",
      question: "「-지 못하다」の意味は？",
      choices: ["〜できない", "〜したい", "〜してしまう", "〜してみる"],
      answer: "〜できない",
      explanation:
        "다가서지 못하고、말하지 못했어 のように『したいのにできない』気持ちを表しています。",
      songId: "gfriend-rough",
    },
    {
      id: "q2",
      type: "word-meaning",
      question: "헤매이다 / 헤매다 の意味は？",
      choices: ["迷う、さまよう", "約束する", "近づく", "抱きしめる"],
      answer: "迷う、さまよう",
      explanation:
        "헤매이고 있어 で『迷い続けている』。気持ちや関係が前に進まない感じも含みます。",
      songId: "gfriend-rough",
    },
    {
      id: "q3",
      type: "grammar",
      question: "「-려고 하다」の意味は？",
      choices: ["〜しようとする", "〜したあとは", "〜してはいけない", "〜するしかない"],
      answer: "〜しようとする",
      explanation:
        "가까워 지려고 で『近づこうとして』。意志や試みを表します。",
      songId: "gfriend-rough",
    },
    {
      id: "q4",
      type: "grammar",
      question: "「-면 -ㄹ수록」の意味は？",
      choices: ["〜すればするほど", "〜したばかり", "〜するために", "〜するみたいだ"],
      answer: "〜すればするほど",
      explanation:
        "하면 할수록 で『すればするほど』。近づこうとするほど離れる切なさを出しています。",
      songId: "gfriend-rough",
    },
    {
      id: "q5",
      type: "word-meaning",
      question: "평행선처럼 の自然な意味は？",
      choices: [
        "平行線のように",
        "奇跡のように",
        "夢のように",
        "時間のように",
      ],
      answer: "平行線のように",
      explanation:
        "近くにあるのに交わらない二人の関係を表す、この曲の中心比喩です。",
      songId: "gfriend-rough",
    },
    {
      id: "q6",
      type: "word-meaning",
      question: "말도 안돼 の自然な意味は？",
      choices: ["ありえない", "本当だよ", "静かにして", "急いで行こう"],
      answer: "ありえない",
      explanation:
        "『そんなはずない』という否定と反発の気持ちを表します。",
      songId: "gfriend-rough",
    },
    {
      id: "q7",
      type: "grammar",
      question: "「-ㄹ게 / -을게」の意味は？",
      choices: ["〜するね、〜するよ", "〜するつもりだった", "〜したいみたいだ", "〜してしまった"],
      answer: "〜するね、〜するよ",
      explanation:
        "기다릴게、다가갈게、잡아줄게 のようにやさしい意志を表しています。",
      songId: "gfriend-rough",
    },
    {
      id: "q8",
      type: "word-meaning",
      question: "미처 말하지 못했어 の自然な意味は？",
      choices: [
        "結局、言えないままだった",
        "早く言ってしまった",
        "今なら言える",
        "言う必要はなかった",
      ],
      answer: "結局、言えないままだった",
      explanation:
        "言いたかったのに、タイミングや勇気が足りず言えなかった切なさが出ています。",
      songId: "gfriend-rough",
    },
    {
      id: "q9",
      type: "fill-blank",
      question: "「다만 너를 _____」の空欄に入るのは？",
      choices: ["좋아했어", "기다렸어", "안아줬어", "몰랐어"],
      answer: "좋아했어",
      explanation:
        "다만 너를 좋아했어 は『ただ、あなたのことが好きだった』です。",
      songId: "gfriend-rough",
    },
    {
      id: "q10",
      type: "word-meaning",
      question: "시간을 달려서 の自然な意味は？",
      choices: [
        "時を駆け抜けて",
        "時間を止めて",
        "時を忘れて",
        "今を諦めて",
      ],
      answer: "時を駆け抜けて",
      explanation:
        "直訳は『時間を走って』ですが、自然には『時を駆け抜けて』『時間を越えて』に近いです。",
      songId: "gfriend-rough",
    },
    {
      id: "q11",
      type: "grammar",
      question: "「-ㄹ/을 수만 있다면」の意味は？",
      choices: [
        "〜できさえすれば、〜できるなら",
        "〜したくないなら",
        "〜してしまうなら",
        "〜したことがあるなら",
      ],
      answer: "〜できさえすれば、〜できるなら",
      explanation:
        "어른이 될 수만 있다면 で『大人になれさえするなら』という強い願いを表しています。",
      songId: "gfriend-rough",
    },
    {
      id: "q12",
      type: "word-meaning",
      question: "좁혀지지 않아 한 끗 차이 の自然な意味は？",
      choices: [
        "ほんの少しの差なのに縮まらない",
        "時間が流れても忘れられない",
        "近づくほど心が遠ざかる",
        "大人になれば必ず会える",
      ],
      answer: "ほんの少しの差なのに縮まらない",
      explanation:
        "大きな壁ではなく、ほんのわずかなズレで距離が縮まらないもどかしさを表しています。",
      songId: "gfriend-rough",
    },
    {
      id: "q13",
      type: "word-meaning",
      question: "못다한 말 の自然な意味は？",
      choices: [
        "言い切れなかった言葉",
        "忘れてしまった夢",
        "二人だけの約束",
        "奇跡のような時間",
      ],
      answer: "言い切れなかった言葉",
      explanation:
        "언젠가는 못다한 말을 전할 거야 で『いつか言えなかった言葉を伝える』になります。",
      songId: "gfriend-rough",
    },
    {
      id: "q14",
      type: "grammar",
      question: "「-기를 바라다」の意味は？",
      choices: ["〜することを願う", "〜するしかない", "〜したいと思う", "〜したようだ"],
      answer: "〜することを願う",
      explanation:
        "변치 않기를 바랄게 で『変わらないことを願うね』という意味です。",
      songId: "gfriend-rough",
    },
    {
      id: "q15",
      type: "which-song",
      question: "「우린 마치 평행선처럼」はどの曲？",
      text: "우린 마치 평행선처럼",
      choices: [
        "시간을 달려서 (Rough)",
        "봄의 나라 이야기 (April Story)",
        "REBEL HEART",
        "I AM",
      ],
      answer: "시간을 달려서 (Rough)",
      explanation:
        "GFRIEND『시간을 달려서 (Rough)』。近いのに交わらない二人を表す代表的な一行です。",
      songId: "gfriend-rough",
    },
    {
      id: "q16",
      type: "fill-blank",
      question: "「그때도 지금처럼 날 향해 _____」の空欄に入るのは？",
      choices: ["웃어줘", "기다려줘", "돌아봐", "안아줘"],
      answer: "웃어줘",
      explanation:
        "『その時も今みたいに、私に笑いかけて』という未来への願いです。",
      songId: "gfriend-rough",
    },
    {
      id: "q17",
      type: "word-meaning",
      question: "결국 の自然な意味は？",
      choices: ["結局は、最後には", "すぐに", "偶然に", "静かに"],
      answer: "結局は、最後には",
      explanation:
        "그렇지만 우린 결국 만날 거야 で、遠回りしても最後には会えるという粘り強い希望を表します。",
      songId: "gfriend-rough",
    },
    {
      id: "q18",
      type: "word-meaning",
      question: "진심인 것만 알아줘 の自然な意味は？",
      choices: [
        "本気だということだけは分かってほしい",
        "今は何も言わないでほしい",
        "もう会わないでほしい",
        "子どものままでいたい",
      ],
      answer: "本気だということだけは分かってほしい",
      explanation:
        "全部を解決できなくても、この気持ちだけは本気だと受け取ってほしい一行です。",
      songId: "gfriend-rough",
    },
    {
      id: "q19",
      type: "grammar",
      question: "「못다 + 動詞」のニュアンスは？",
      choices: [
        "最後までやり切れなかった",
        "急いでやってしまった",
        "何度も繰り返した",
        "簡単に終わった",
      ],
      answer: "最後までやり切れなかった",
      explanation:
        "못다한 말 は『言い切れなかった言葉』。途中で止まってしまった未完了感が大事です。",
      songId: "gfriend-rough",
    },
    {
      id: "q20",
      type: "fill-blank",
      question: "「변치 않기를 _____」の空欄に入るのは？",
      choices: ["바랄게", "기다릴게", "안아줄게", "말할게"],
      answer: "바랄게",
      explanation:
        "변치 않기를 바랄게 は『変わらないことを願うね』。時間が流れても保っていてほしい願いです。",
      songId: "gfriend-rough",
    },
  ],
};

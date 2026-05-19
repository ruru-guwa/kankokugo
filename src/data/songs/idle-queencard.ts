import type { Song, Token } from "../../types/song";
import { completeQueencardLines } from "./_queencard-lines-all";

const expandTextMap = (
  groups: Array<[number[], string]>,
): Record<number, string> =>
  Object.fromEntries(
    groups.flatMap(([numbers, text]) => numbers.map((number) => [number, text])),
  );

const queencardSectionBreaks = new Set([12, 20, 28, 37, 45, 53]);

const queencardRoleMap = expandTextMap([
  [
    [1, 2, 3, 4, 5, 6, 7, 8],
    "導入。視線を向けてくる相手を軽く挑発しながら、毎日休みなく輝く自分の美しさと存在感を大きく立ち上げるパート。",
  ],
  [
    [9, 10, 11, 12],
    "プレサビ。自分の誕生そのものを祝うパーティーのイメージに切り替え、他人の評価は要らないという自己肯定へつなぐ。",
  ],
  [
    [13, 14, 15, 16, 17, 18, 19, 20],
    "1回目のサビ。私は hot で top で star だと次々に名札を貼り、自分で自分を『퀸카』だと言い切る中心パート。",
  ],
  [
    [21, 22, 23, 24, 25, 26, 27, 28],
    "フック。『I'm a 퀸카』を反復しながら、写真を撮ってと言えるくらい自分の見え方を楽しみ尽くすパート。",
  ],
  [
    [29, 30, 31, 32, 33, 34, 35, 36, 37],
    "2番。カーダシアンやアリアナの名を借りつつ、鏡の中の自分がもっと綺麗になる感覚まで広げ、自信をセルフプロデュースしていく。",
  ],
  [
    [38, 39, 40, 41, 42, 43, 44, 45],
    "2回目のサビ。最初の自己宣言をもう一度重ねて、『自分で認めるから私はクイーンだ』という軸をさらに強く押し出す。",
  ],
  [
    [46, 47, 48, 49, 50, 51, 52, 53],
    "フック再提示。反復の勢いで自己像を固めながら、カメラを向けられる側の余裕を最後まで保つ。",
  ],
  [
    [54, 55, 56, 57, 58],
    "ラスト。どんな服でも、どんな体型でも、自信があれば誰だって 퀸카 だと意味を広げて締める包摂的なパート。",
  ],
]);

const queencardExtraGrammar: Record<
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
      title: "-니?",
      meaning: "〜なの？、〜するの？",
      explanation:
        "少しくだけた疑問の語尾。보니? / 반했니? のように使うと、からかうような軽い挑発にもなりやすい。",
      example: "뭐 하니?",
      exampleJapanese: "何してるの？",
    },
  ],
  4: [
    {
      title: "-도",
      meaning: "〜も",
      explanation:
        "名詞や代名詞のあとについて『〜も』を表す。너도 で『あなたも』となり、相手も自分に惹かれている前提を作る。",
      example: "나도 알아",
      exampleJapanese: "私も分かる",
    },
  ],
  5: [
    {
      title: "-지를 않다",
      meaning: "〜しない",
      explanation:
        "動詞を強めて否定する形。쉬지를 않네 で『休みやしないね』のような強調になる。",
      example: "멈추지를 않아",
      exampleJapanese: "止まりやしない",
    },
  ],
  6: [
    {
      title: "-부터 / -까지",
      meaning: "〜から / 〜まで",
      explanation:
        "範囲の始点と終点を表す助詞。머리부터 발끝까지 で『頭からつま先まで』と全身を言い切っている。",
      example: "아침부터 밤까지",
      exampleJapanese: "朝から夜まで",
    },
  ],
  10: [
    {
      title: "-아서/어서",
      meaning: "〜して、〜だから",
      explanation:
        "前後の流れをつなぐ形。태어나서 감사해 は『生まれてきたことに感謝している』のように理由と感情がつながる。",
      example: "만나서 반가워",
      exampleJapanese: "会えてうれしい",
    },
  ],
  12: [
    {
      title: "-아/어도",
      meaning: "〜しても",
      explanation:
        "譲歩の形。봐도 は『見ても』で、『自分で見ても私はイケてる』という自己承認の言い方になる。",
      example: "먹어도 돼",
      exampleJapanese: "食べてもいい",
    },
  ],
  31: [
    {
      title: "擬音語: 뽀뽀",
      meaning: "チュー、軽いキス",
      explanation:
        "子どもっぽさや可愛さのある軽いキスの表現。露骨さより遊び心が前に出る。",
      example: "뽀뽀해 줘",
      exampleJapanese: "チューして",
    },
  ],
  33: [
    {
      title: "-어지다",
      meaning: "〜くなる",
      explanation:
        "状態変化を表す形。예뻐져 で『綺麗になっていく』となり、自分で自分を更新していく感じが出る。",
      example: "밝아졌어",
      exampleJapanese: "明るくなった",
    },
  ],
  55: [
    {
      title: "-거나",
      meaning: "〜だったり、〜でも",
      explanation:
        "選択肢や並列を出す形。마르거나 살찐 で『痩せていても太っていても』と、両方を含めている。",
      example: "가거나 말거나",
      exampleJapanese: "行っても行かなくても",
    },
  ],
  56: [
    {
      title: "넘치다",
      meaning: "あふれる、満ちる",
      explanation:
        "量や感情が外へあふれる感じ。자신감 넘치는 で『自信に満ちた』という強いポジティブ表現になる。",
      example: "에너지가 넘쳐",
      exampleJapanese: "エネルギーにあふれている",
    },
  ],
};

const queencardExtraNuance: Record<number, string> = {
  1: "Hey you はただ呼びかけるだけでなく、『もう私に目が行ってるでしょ？』という前提込みの入り方になっている。",
  5: "月火水木金土日を並べることで、『今日はたまたま綺麗』ではなく常時稼働の美しさとして自分を見せている。",
  7: "他人が自分のファッションを真似しているという言い方で、憧れられる側の余裕を可愛く誇張している。",
  10: "生まれてきたことに毎日感謝する、というのは大げさな冗談みたいでありながら、この曲の自己肯定の核でもある。",
  11: "I don't need them は恋愛相手より広く、『評価する他人全般』をまとめて外へ置く言い方として効いている。",
  13: "퀸카 I'm hot は『私は熱い』以上に、『自分が主役だと自分で決める』宣言として響く。",
  17: "the top は順位そのものより、『私は下から承認を待つ側じゃない』という位置取りが大事。",
  24: "Take a photo が入ることで、ただ綺麗な人ではなく『撮られる価値がある私』を自分で演出している。",
  29: "有名人の名前を出すのは比較して落ち込むためでなく、自分の魅力の参照先として軽やかに借りている感じ。",
  33: "거울 속 너어~ は相手ではなく鏡の中の自分自身へ向けた呼びかけにも聞こえ、自己肯定の視線が内側へ戻ってくる。",
  54: "아무거나 걸친 Girl でも 퀸카 と言うことで、ブランドや完成された装いより、自分の持つ空気そのものが価値だと示している。",
  55: "痩せていても太っていても、の並べ方で『理想体型だけがクイーン』という発想をきっぱり崩している。",
  56: "最後は美貌ではなく 자신감 を主語に近い位置へ置くので、この曲が最終的に言いたいことがはっきり見える。",
};

const queencardTokenMeanings: Record<number, Record<string, string>> = {
  2: {
    뭘: "相手の視線に気づいたうえで、わざと軽く突っかかる感じの『何見てるの』。",
    Sexy: "単なる性的魅力というより、自分で自分の魅力を把握して楽しんでいる空気。",
  },
  5: {
    미모: "顔立ちだけでなく、全体としての『映え』や見た目の華やかさ。",
  },
  6: {
    "빛이 나다": "本当に光るのではなく、存在感や魅力が強くにじみ出ていること。",
  },
  9: {
    Party: "現実の誕生日会というより、自分の存在そのものを祝う舞台。",
  },
  11: {
    them: "他人の評価、視線、承認のような外側の基準全部。",
  },
  13: {
    퀸카: "誰かに選ばれてなるものではなく、自分で自分に与える称号としての『クイーン』。",
    hot: "セクシーさも勢いも含んだ、目が離せない魅力。",
  },
  14: {
    boob: "体の一部を恥じるのでなく、堂々と自分の魅力として所有している言い方。",
    booty: "体型を評価される対象でなく、自分が誇る一部として言い切っている。",
  },
  15: {
    Spotlight: "注目を浴びる状況そのものが自分の定位置であること。",
  },
  18: {
    runway: "モデルの舞台というより、人前で自分を見せるための象徴的な場所。",
  },
  20: {
    "You wanna": "相手を羨望する側に置くことで、自分の立ち位置をさらに上げている。",
  },
  24: {
    "Take a photo": "『見て終わり』でなく、残したくなる存在だという自己演出。",
  },
  29: {
    "Kim Kardashian": "グラマラスで強いセルフブランディングの象徴として借りている名前。",
  },
  30: {
    Ariana: "可愛さとポップな華やかさの象徴として使われている名前。",
  },
  33: {
    거울: "他人の目ではなく、自分で自分を見るための装置。",
    너: "鏡の中の『あなた』であり、自分自身を少し距離を置いて褒める言い方。",
  },
  54: {
    아무거나: "特別に着飾っていなくても、という条件の緩さ。",
  },
  56: {
    자신감: "この曲の最後の答えで、美しさや体型より先に来る核の言葉。",
  },
};

function createLine34Tokens(lineId: string): Token[] {
  return [
    {
      id: `${lineId}-custom-t1`,
      surface: "이",
      base: "이",
      language: "ko",
      shortMeaning: "この",
      meaning: "この",
    },
    {
      id: `${lineId}-custom-t2`,
      surface: "Party",
      base: "Party",
      language: "en",
      shortMeaning: "パーティー",
      meaning: "パーティー",
    },
    {
      id: `${lineId}-custom-t3`,
      surface: "준비된",
      base: "준비되다",
      language: "ko",
      shortMeaning: "準備された",
      meaning: "準備された",
      breakdown: "준비되다 + -ㄴ",
    },
    {
      id: `${lineId}-custom-t4`,
      surface: "Blue",
      base: "Blue",
      language: "en",
      shortMeaning: "青い",
      meaning: "青い",
    },
    {
      id: `${lineId}-custom-t5`,
      surface: "Champagne",
      base: "Champagne",
      language: "en",
      shortMeaning: "シャンパン",
      meaning: "シャンパン",
    },
  ];
}

function createLine57Tokens(lineId: string): Token[] {
  return [
    {
      id: `${lineId}-custom-t1`,
      surface: "I am a",
      base: "I am a",
      language: "en",
      shortMeaning: "私は〜だ",
      meaning: "私は〜だ",
    },
    {
      id: `${lineId}-custom-t2`,
      surface: "퀸카",
      base: "퀸카",
      language: "ko",
      shortMeaning: "一番イケてる女の子",
      meaning: "一番イケてる女の子、人気者の女性",
      meaningInThisLine: "ここでは『自分で自分をクイーンだと言える存在』。",
    },
  ];
}

export const idleQueencard: Song = {
  id: "idle-queencard",
  title: "Queencard",
  artist: "i-dle",
  difficulty: "中級",
  tags: ["自己肯定", "強気", "ポップ", "英語ミックス", "会話表現", "中級"],

  overview:
    "『私は誰かに認められるから綺麗なのではなく、自分で自分を最高だと思えるから輝いている』と、明るく派手に言い切る曲です。最初は美貌や注目を誇る自己賛美に見えますが、最後には服装や体型ではなく自信そのものが 퀸카 を作ると意味を広げます。挑発的でコミカルなのに、芯にはかなりはっきりした自己肯定がある一曲です。",

  lines: completeQueencardLines.map((line, index) => {
    const lineNumber = index + 1;
    const extraGrammar =
      queencardExtraGrammar[lineNumber]?.map((grammarPoint, grammarIndex) => ({
        id: `${line.id}-extra-g${grammarIndex + 1}`,
        ...grammarPoint,
      })) ?? [];

    let tokens: Token[];
    if (lineNumber === 34) {
      tokens = createLine34Tokens(line.id);
    } else if (lineNumber === 57) {
      tokens = createLine57Tokens(line.id);
    } else {
      tokens = line.tokens.map((token) => ({
        ...token,
        meaningInThisLine:
          queencardTokenMeanings[lineNumber]?.[token.surface] ??
          token.meaningInThisLine,
      }));
    }

    return {
      ...line,
      roleInSong: queencardRoleMap[lineNumber] ?? line.roleInSong,
      sectionBreakAfter: queencardSectionBreaks.has(lineNumber),
      nuance: queencardExtraNuance[lineNumber] ?? line.nuance,
      grammarPoints: [...(line.grammarPoints ?? []), ...extraGrammar],
      tokens,
    };
  }),

  quizzes: [
    {
      id: "q1",
      type: "word-meaning",
      question: "퀸카 の自然な意味は？",
      choices: ["一番イケてる女の子、主役級の人気者", "静かな優等生", "片思い中の女の子", "年上の女性"],
      answer: "一番イケてる女の子、主役級の人気者",
      explanation: "俗語の 퀸카 は『目立つ美人・人気者』の意味ですが、この曲では『自分で自分をそう言える人』に広げています。",
      songId: "idle-queencard",
    },
    {
      id: "q2",
      type: "grammar",
      question: "「-지를 않다」の意味は？",
      choices: ["〜しない", "〜してしまう", "〜しながら", "〜するために"],
      answer: "〜しない",
      explanation: "쉬지를 않네 は『休みやしないね』のような強い否定です。",
      songId: "idle-queencard",
    },
    {
      id: "q3",
      type: "word-meaning",
      question: "머리부터 발끝까지 の自然な意味は？",
      choices: ["頭からつま先まで", "朝から夜まで", "前から後ろまで", "外から中まで"],
      answer: "頭からつま先まで",
      explanation: "-부터 / -까지 を使って、全身が輝いていることを言っています。",
      songId: "idle-queencard",
    },
    {
      id: "q4",
      type: "fill-blank",
      question: "「I don't need _____」の空欄に入るのは？",
      choices: ["them", "you", "me", "it"],
      answer: "them",
      explanation: "ここでの them は、他人の評価や承認のような外側の基準をまとめて指しています。",
      songId: "idle-queencard",
    },
    {
      id: "q5",
      type: "word-meaning",
      question: "Spotlight 날 봐 の自然な意味は？",
      choices: ["スポットライトを浴びる私を見て", "明かりを消して見て", "横から見ないで", "遠くから眺めて"],
      answer: "スポットライトを浴びる私を見て",
      explanation: "注目を集める側に自分がいることを堂々と前提にしたフレーズです。",
      songId: "idle-queencard",
    },
    {
      id: "q6",
      type: "word-meaning",
      question: "자꾸 예뻐져 の自然な意味は？",
      choices: ["どんどん綺麗になっていく", "少し恥ずかしくなる", "急に大人になる", "だんだん静かになる"],
      answer: "どんどん綺麗になっていく",
      explanation: "-어지다 は状態変化で、『綺麗になっていく』という意味になります。",
      songId: "idle-queencard",
    },
    {
      id: "q7",
      type: "grammar",
      question: "「-거나」の意味は？",
      choices: ["〜でも、〜だったり", "〜したい", "〜するしかない", "〜したあとで"],
      answer: "〜でも、〜だったり",
      explanation: "마르거나 살찐 で『痩せていても太っていても』のように並列しています。",
      songId: "idle-queencard",
    },
    {
      id: "q8",
      type: "which-song",
      question: "「아무거나 걸친 Girl 퀸카카카」はどの曲？",
      text: "아무거나 걸친 Girl 퀸카카카",
      choices: ["Queencard", "Fate", "After LIKE", "BANG BANG"],
      answer: "Queencard",
      explanation: "i-dle『Queencard』。服装そのものではなく、自信がある人こそクイーンだと広げる印象的なラインです。",
      songId: "idle-queencard",
    },
    {
      id: "q9",
      type: "word-meaning",
      question: "자신감 넘치는 Girl の自然な意味は？",
      choices: ["自信に満ちた女の子", "静かな女の子", "疲れた女の子", "不思議な女の子"],
      answer: "自信に満ちた女の子",
      explanation: "最後は美貌より 먼저 자신감 が前に出て、この曲のメッセージを回収します。",
      songId: "idle-queencard",
    },
    {
      id: "q10",
      type: "word-base",
      question: "원하니? の原形は？",
      choices: ["원하다", "원해지다", "원받다", "원이다"],
      answer: "원하다",
      explanation: "원하다 は『望む、欲しがる』。원하니? で『欲しいの？』となります。",
      songId: "idle-queencard",
    },
  ],
};

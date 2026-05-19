import type { Song, Token } from "../../types/song";
import { completeFateLines } from "./_fate-lines-all";

const expandTextMap = (
  groups: Array<[number[], string]>,
): Record<number, string> =>
  Object.fromEntries(
    groups.flatMap(([numbers, text]) => numbers.map((number) => [number, text])),
  );

const fateSectionBreaks = new Set([9, 15, 21, 27, 32]);

const fateRoleMap = expandTextMap([
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "導入。パンとアイスアメリカーノに象徴される単調な日常を描きつつ、その普通の日に『あの子』を見てしまった瞬間までを置くパート。",
  ],
  [
    [10, 11, 12, 13, 14, 15],
    "1回目のサビ。空が崩れ、視界が赤く染まり、泣きそうになるほど揺さぶられながらも『考えたくない』と逃げようとする中心パート。",
  ],
  [
    [16, 17, 18, 19, 20, 21],
    "2番。カフェインも効かず、空腹まで忘れるほど気になってしまう現在の反応と、『初めてなのに懐かしい』という説明不能な違和感を深めるパート。",
  ],
  [
    [22, 23, 24, 25, 26, 27],
    "2回目のサビ。最初の動揺をもう一度なぞりながら、『通り過ぎた方がいい』という自己防衛がさらに切実に響く。",
  ],
  [
    [28, 29, 30, 31, 32],
    "ブリッジ。相手は昔から自分を知っているように見え、過去・未来・別次元まで想像が飛んでいくことで、この感情が単なる一目惚れではないと示す。",
  ],
  [
    [33, 34, 35, 36, 37, 38, 39, 40],
    "ラスト。再び崩れる世界と『また失う気がする』不安を経て、最後に『考えるのが嫌』ではなく『傷つくのが嫌』だったという本音に着地する。",
  ],
]);

const fateExtraGrammar: Record<
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
      title: "-도",
      meaning: "〜も",
      explanation:
        "名詞のあとについて『〜も』を表す。오늘도 で『今日も』となり、いつもと同じ日常が繰り返されている感じを出す。",
      example: "나도 갈게",
      exampleJapanese: "私も行くよ",
    },
  ],
  4: [
    {
      title: "-아/어 죽겠다",
      meaning: "〜すぎてたまらない、〜で死にそう",
      explanation:
        "感情や状態が限界に達していることを大げさに言う形。피곤해 죽겠네 で『疲れすぎてたまらない』。",
      example: "배고파 죽겠어",
      exampleJapanese: "お腹が空きすぎて死にそう",
    },
  ],
  10: [
    {
      title: "-고",
      meaning: "〜して、〜しながら",
      explanation:
        "出来事を次へつなぐ基本形。무너지고 で『崩れて』となり、直後の視界の変化へなだれ込む。",
      example: "문을 열고 들어가",
      exampleJapanese: "ドアを開けて入る",
    },
  ],
  12: [
    {
      title: "-는 것 같다",
      meaning: "〜ようだ、〜気がする",
      explanation:
        "断定せず感覚的に言う形。있는 것 같아 で『ある気がする』と、説明できない既視感をやわらかく出している。",
      example: "비 오는 것 같아",
      exampleJapanese: "雨が降っているみたい",
    },
  ],
  13: [
    {
      title: "-ㄹ 것만 같다",
      meaning: "今にも〜しそうだ、〜な気ばかりする",
      explanation:
        "強い予感や感情の高まりを表す形。울 것만 같고 で『今にも泣きそうで』。",
      example: "쓰러질 것만 같아",
      exampleJapanese: "倒れそうな気がする",
    },
  ],
  14: [
    {
      title: "-는 게 나을 것 같다",
      meaning: "〜する方がよさそうだ",
      explanation:
        "行動の比較や自己判断をやわらかく言う形。지나치는 게 나을 것 같아 で『通り過ぎる方がよさそう』。",
      example: "쉬는 게 나을 것 같아",
      exampleJapanese: "休んだ方がよさそう",
    },
  ],
  15: [
    {
      title: "-니까",
      meaning: "〜だから",
      explanation:
        "理由や言い訳をはっきり示す語尾。질색이니까 で『本当に嫌だから』と自分に言い聞かせている感じが出る。",
      example: "늦었으니까 가자",
      exampleJapanese: "遅くなったから行こう",
    },
  ],
  17: [
    {
      title: "신경 쓰이다",
      meaning: "気になる、気にかかる",
      explanation:
        "신경（神経）と 쓰이다 が合わさって『意識がそこへ向く』感覚を作る。気持ちがそこから離れない時によく使う。",
      example: "자꾸 신경 쓰여",
      exampleJapanese: "ずっと気になる",
    },
  ],
  18: [
    {
      title: "-까지",
      meaning: "〜まで、〜さえ",
      explanation:
        "範囲を広げたり、予想外のものまで含める助詞。배고픔까지 で『空腹さえも』忘れている感じになる。",
      example: "이름까지 잊었어",
      exampleJapanese: "名前まで忘れた",
    },
  ],
  20: [
    {
      title: "-ㄹ까",
      meaning: "〜だろうか、〜かな",
      explanation:
        "独り言のように考えを探る語尾。뭐라 할까 / 그립달까 で、ぴったりの言葉を探している迷いが見える。",
      example: "어떡할까",
      exampleJapanese: "どうしようかな",
    },
  ],
  35: [
    {
      title: "-아/어 버리다",
      meaning: "〜してしまう",
      explanation:
        "終わってしまった感じや取り返しのつかなさを出す形。놓쳐버리다 で『逃してしまう』。",
      example: "잊어버렸어",
      exampleJapanese: "忘れてしまった",
    },
  ],
  40: [
    {
      title: "건 = 것은",
      meaning: "〜ことは",
      explanation:
        "것은 の縮約で、話題を取り立てる形。아픈 건 で『傷つくことは』と、本当に避けたいものを最後に名指ししている。",
      example: "좋은 건 좋아",
      exampleJapanese: "いいものはいい",
    },
  ],
};

const fateExtraNuance: Record<number, string> = {
  1: "パンをくわえて朝を始めるイメージで、劇的な恋愛ではなく『どこにでもある朝』から入るのが大事。あとで来る運命感との落差が大きくなる。",
  6: "デジャヴのようでいて、すぐに『いや、毎日だった』と修正するので、特別な夢というより日常そのものがぼやけている感じも出る。",
  10: "平穏な空が崩れるので、相手を好きになったというより、自分の世界の前提そのものが壊れたショックに近い。",
  12: "忘れ物の比喩は、物理的な忘れ物ではなく『記憶のどこかにあるはずの何か』を手探りしている感覚に近い。",
  15: "ここで『考えるのが嫌』と言うのは本音をぼかした言い方で、実際には考えた先の痛みを避けるための自己防衛として響く。",
  20: "그립달까 は『懐かしい』を言い切らずに探りながら言うので、自分でもその感情の正体をまだ説明できていない。",
  28: "오랫동안 나를 아는 で、初対面のはずの相手が時間の外側から来たように感じられる。この曲の運命感がいちばん濃く出る場所。",
  31: "過去・未来・別次元と一気に飛ぶことで、現実的な説明がもう効かないことを逆に示している。理屈ではなく感覚の物語になっていく。",
  35: "また失う気がする、の『また』が重要で、この出会いを現在進行の恋だけでなく『繰り返される喪失』として感じている。",
  40: "最後は 생각 から 아픈 것 へ言い換わることで、恐れていた本体が『思考』ではなく『傷つくこと』だったと静かに明かされる。",
};

const fateTokenMeanings: Record<number, Record<string, string>> = {
  1: {
    오늘도: "特別な一日ではなく、昨日の続きみたいな朝がまた始まること。",
    "빵": "何気ない日常の小道具としてのパンで、平凡さを象徴している。",
  },
  8: {
    흔한: "印象に残らないくらい普通で、特別な出来事が起きるはずのないこと。",
  },
  9: {
    "그 애": "名前のない『あの子』だからこそ、現実の人物というより運命的な像として浮かぶ。",
    말야: "独り言でも告白でもあるような、誰かに打ち明ける柔らかい口調。",
  },
  12: {
    "잊고 온": "どこかに置いてきてしまったものがある感じで、喪失の既視感を含む。",
  },
  15: {
    질색: "ただ嫌いというより、できれば絶対に避けたいほどの強い拒否感。",
  },
  17: {
    "신경 쓰여": "考えないようにしても勝手に意識が向いてしまう状態。",
    "토할 것 같아": "ときめきより不安や混乱の強さが身体にまで出ている感じ。",
  },
  20: {
    그립달까: "懐かしい、会いたい、恋しいが混ざった、ひと言では片付かない感覚。",
  },
  28: {
    오랫동안: "時間の長さそのものより、『前から知っていた感覚』の重み。",
  },
  31: {
    딴: "다른 よりくだけた形で、考えが急に飛躍している感じも出る。",
    차원: "現実の説明で足りないからこそ持ち出される、もう一つの世界のイメージ。",
  },
  35: {
    놓쳐버리는: "ただ逃すのでなく、取り返しがつかないまま失ってしまうこと。",
  },
  40: {
    아픈: "肉体的な痛みというより、感情的に傷つくことやつらい結末まで含む。",
  },
};

function createLine34Tokens(lineId: string): Token[] {
  return [
    {
      id: `${lineId}-custom-t1`,
      surface: "어둡던",
      base: "어둡다",
      language: "ko",
      shortMeaning: "暗かった〜",
      meaning: "暗かった〜",
      breakdown: "어둡다 + -던",
      explanation: "過去にそうだった状態を引きずる連体形。",
    },
    {
      id: `${lineId}-custom-t2`,
      surface: "눈앞",
      base: "눈앞",
      language: "ko",
      shortMeaning: "目の前、視界",
      meaning: "目の前、視界",
      explanation: "文字どおりの『目の前』だけでなく、いま見えている世界全体の感覚。",
    },
    {
      id: `${lineId}-custom-t3`,
      surface: "붉어져도",
      base: "붉어지다",
      language: "ko",
      shortMeaning: "赤くなっても",
      meaning: "赤くなっても",
      breakdown: "붉어지다 + -어도",
      explanation: "-어도 は『〜しても』。ここでは揺れた感情が収まらないまま続く感じ。",
    },
  ];
}

export const idleFate: Song = {
  id: "idle-fate",
  title: "Fate",
  artist: "i-dle",
  difficulty: "中級",
  tags: ["運命", "既視感", "日常", "感情の揺れ", "会話表現", "中級"],

  overview:
    "何でもない朝から始まったはずの一日が、ある相手を見た瞬間に急に運命めいたものへ変わってしまう曲です。初めて会ったはずなのに懐かしく、泣きそうで、また失ってしまう気さえする。でも近づいて考えたら傷つきそうだから、何もなかったように通り過ぎたい。その揺れを、i-dle らしい会話体と日常描写で静かに強く描いています。",

  lines: completeFateLines.map((line, index) => {
    const lineNumber = index + 1;
    const extraGrammar =
      fateExtraGrammar[lineNumber]?.map((grammarPoint, grammarIndex) => ({
        id: `${line.id}-extra-g${grammarIndex + 1}`,
        ...grammarPoint,
      })) ?? [];

    const tokens =
      lineNumber === 34
        ? createLine34Tokens(line.id)
        : line.tokens.map((token) => ({
            ...token,
            meaningInThisLine:
              fateTokenMeanings[lineNumber]?.[token.surface] ??
              token.meaningInThisLine,
          }));

    return {
      ...line,
      roleInSong: fateRoleMap[lineNumber] ?? line.roleInSong,
      sectionBreakAfter: fateSectionBreaks.has(lineNumber),
      nuance: fateExtraNuance[lineNumber] ?? line.nuance,
      grammarPoints: [...(line.grammarPoints ?? []), ...extraGrammar],
      tokens,
    };
  }),

  quizzes: [
    {
      id: "q1",
      type: "word-meaning",
      question: "질색 の自然な意味は？",
      choices: ["大嫌い、絶対に嫌", "懐かしい", "ぼんやりする", "焦っている"],
      answer: "大嫌い、絶対に嫌",
      explanation: "질색 は『嫌い』より強く、『本当に無理』『絶対に嫌』に近い拒否感です。",
      songId: "idle-fate",
    },
    {
      id: "q2",
      type: "grammar",
      question: "「-아/어 죽겠다」の意味は？",
      choices: ["〜すぎてたまらない", "〜してみたい", "〜したあとで", "〜するしかない"],
      answer: "〜すぎてたまらない",
      explanation: "피곤해 죽겠네 は『疲れすぎてたまらない』という強調表現です。",
      songId: "idle-fate",
    },
    {
      id: "q3",
      type: "word-meaning",
      question: "신경 쓰이다 の自然な意味は？",
      choices: ["気になる、気にかかる", "思い出す", "眠くなる", "振り向く"],
      answer: "気になる、気にかかる",
      explanation: "하루 종일 신경 쓰여 で『一日中気になって』という意味です。",
      songId: "idle-fate",
    },
    {
      id: "q4",
      type: "fill-blank",
      question: "「나는 _____은 딱 질색이니까」の空欄に入るのは？",
      choices: ["생각", "사랑", "기억", "하늘"],
      answer: "생각",
      explanation: "サビでは 먼저 『考えることは本当に苦手だから』と言い、最後に本音の『아픈 건』へ変わります。",
      songId: "idle-fate",
    },
    {
      id: "q5",
      type: "word-meaning",
      question: "그립달까 のニュアンスとして自然なのは？",
      choices: ["懐かしいような、恋しいような", "すぐ忘れそうな", "少し怒っているような", "驚いて笑ったような"],
      answer: "懐かしいような、恋しいような",
      explanation: "그립달까 は『懐かしいと言えばいいのかな』と探りながら言う形です。",
      songId: "idle-fate",
    },
    {
      id: "q6",
      type: "grammar",
      question: "「-까지」の意味は？",
      choices: ["〜まで、〜さえ", "〜からだけ", "〜のあとで", "〜のせいで"],
      answer: "〜まで、〜さえ",
      explanation: "배고픔까지 까먹고 で『空腹さえも忘れて』という意味になります。",
      songId: "idle-fate",
    },
    {
      id: "q7",
      type: "fill-blank",
      question: "「혹 과거에 미래에 딴 _____에 세계에」の空欄に入るのは？",
      choices: ["차원", "기억", "사랑", "하늘"],
      answer: "차원",
      explanation: "차원 は『次元』。過去・未来・別次元まで想像が飛んでいきます。",
      songId: "idle-fate",
    },
    {
      id: "q8",
      type: "word-base",
      question: "놓쳐버리는 の原形は？",
      choices: ["놓쳐버리다", "놓치다", "버리다", "놓여지다"],
      answer: "놓쳐버리다",
      explanation: "놓치다（逃す）に -아/어 버리다 がついて『逃してしまう』になっています。",
      songId: "idle-fate",
    },
    {
      id: "q9",
      type: "which-song",
      question: "「입에 빵을 물고」はどの曲？",
      text: "입에 빵을 물고",
      choices: ["Fate", "After LIKE", "Psycho", "BANG BANG"],
      answer: "Fate",
      explanation: "i-dle『Fate』。ごく普通の朝の描写から運命的な感情へ入っていく印象的な冒頭です。",
      songId: "idle-fate",
    },
    {
      id: "q10",
      type: "word-meaning",
      question: "最後の「나는 아픈 건 딱 질색이니까」の自然な意味は？",
      choices: ["私は傷つくのだけは絶対に嫌だから", "私は考えるのが好きじゃないから", "私は朝が本当に苦手だから", "私は普通の日が嫌いだから"],
      answer: "私は傷つくのだけは絶対に嫌だから",
      explanation: "最後に本音が明かされ、『考えたくない』の奥に『傷つきたくない』があったと分かります。",
      songId: "idle-fate",
    },
  ],
};

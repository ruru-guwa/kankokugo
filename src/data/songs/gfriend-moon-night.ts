import type { Song } from "../../types/song";
import { completeMoonNightLines } from "./_moon-night-lines-all";

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

const moonNightSectionRoleMap = expandTextMap([
  [[1], "導入のひらめき。星明かりの美しさと、胸の揺れが同時に始まる一行。"],
  [[2, 3, 4], "序盤の不安。相手の視線も関係の輪郭も見えず、『光をつけてほしい』と願う場所。"],
  [[5, 6, 7, 8], "1番Aメロ後半。沈んだ気分と『相手の中の自分』への不安が静かに深くなる。"],
  [[9, 10, 11, 12, 13, 14], "1回目リフレイン。相手を安心させたい気持ちと、まだ思い出してしまう夜が並ぶ最初の波。"],
  [[15, 16, 17, 18, 19, 20, 21], "2番前半。待ち時間の長さを経て、『手放す』と『まだ残したい』がはっきり衝突する核心部。"],
  [[22, 23, 24, 25], "サビの幻想パート。夜空や夢の中なら本音を言えるかもしれない、という空想の飛躍。"],
  [[26, 27, 28, 29, 30, 31], "サビ後半。窓越しの距離を越えたいと願いながら、少しだけ近づく未来を期待する流れ。"],
  [[32, 33, 34, 35, 36, 37, 38], "2回目リフレイン。同じ夜景でも、今度は未練と反転の本音がよりむき出しになって戻ってくる。"],
  [[39, 40, 41, 42, 43], "終盤の本音。近づけない理由が相手の不確かさだと認めつつ、好きになりすぎた心はもう戻れない。"],
  [[44, 45, 46, 47, 48, 49, 50, 51], "ラスト前。泣き続けた時間、追いかけたい衝動、届かない距離、会いたい夜が一気に押し寄せる。"],
  [[52, 53, 54], "エンディング。夜空と夢のモチーフへ戻りながら、未練の余韻をそのまま残して終わる。"],
]);

const moonNightExtraGrammar: Record<
  number,
  Array<{
    title: string;
    meaning: string;
    explanation: string;
    example?: string;
    exampleJapanese?: string;
  }>
> = {
  19: [
    {
      title: "-ㄹ게 / -을게",
      meaning: "〜するね、〜するよ",
      explanation:
        "話し手の意志や、その場での約束をやわらかく示す語尾。보내줄게 で『見送るね』。",
      example: "내가 기다릴게",
      exampleJapanese: "私が待っているね",
    },
  ],
  46: [
    {
      title: "-이라도",
      meaning: "〜にでも、〜であっても",
      explanation:
        "極端な想定まで含めて気持ちを強める形。당장이라도 は『今すぐにでも』。",
      example: "지금이라도 갈게",
      exampleJapanese: "今すぐにでも行くよ",
    },
  ],
  49: [
    {
      title: "-았/었던",
      meaning: "〜していた、〜した",
      explanation:
        "過去を振り返りながら名詞を修飾する形。쫓았던 밤 で『追いかけていた夜』。",
      example: "웃었던 날",
      exampleJapanese: "笑っていた日",
    },
  ],
  51: [
    {
      title: "-고 싶다",
      meaning: "〜したい",
      explanation:
        "話し手の願望を表す基本形。보고 싶은 밤 は『会いたい夜』。",
      example: "듣고 싶어",
      exampleJapanese: "聞きたい",
    },
  ],
};

const moonNightTokenMeanings: Record<number, Record<string, string>> = {
  1: {
    "떨려오는": "夜景を見た瞬間に、不安とときめきがこちらへ押し寄せてくる感覚。",
  },
  4: {
    "불을 켜줘": "相手の態度や言葉で、この見えない気持ちの闇を照らしてほしい願い。",
    "깜깜해": "相手の本心が見えず、自分の心まで真っ暗になっている状態。",
  },
  19: {
    보내줄게: "本心ではなくても、一度は手放す方向へ自分を押そうとする決意。",
  },
  20: {
    아냐: "諦めると決めた言葉を、その場ですぐひっくり返してしまう本音。",
    "내 방에": "外へ送り出すのではなく、自分の内側の世界にまだ置いておきたいこと。",
  },
  21: {
    "간직하고 싶은": "忘れるより、秘密のままでも残していたい未練。",
  },
  23: {
    "time for the moon night": "現実では届かない気持ちが濃くなる、月夜だけの特別な時間。",
  },
  25: {
    "고백 해볼까": "現実では言えない本音を、夢の中だけでも試しに言ってみたいこと。",
  },
  30: {
    좁혀지길: "一気に結ばれるより、まず少しだけでも距離が縮まってほしい願い。",
  },
  31: {
    "기대하고 싶은": "確信はないのに、それでも期待だけは捨てたくない気持ち。",
  },
  36: {
    아냐: "2回目ではさらに強く、諦めより未練の方が勝っている即答。",
  },
  38: {
    "간직하고 싶어": "『夜』すら要らず、残したい気持ちそのものだけが前に出た形。",
  },
  39: {
    "너의 맘이": "今もなお最大の壁になっている、相手の見えない本心。",
  },
  42: {
    "좋아져버린": "もう元に戻れないほど好きになってしまった、取り返しのつかなさ。",
  },
  44: {
    훌쩍이는데: "大声ではなく、何日も静かに泣き続けるこの曲らしい切なさ。",
  },
  46: {
    "따라가고 싶은데": "待つ側でいた恋が、最後には追いかけたい衝動へ変わっていること。",
  },
  49: {
    하염없이: "終わりも出口もないまま、相手を追い続けてしまう空しさ。",
  },
  50: {
    "닿지 않는": "あと少しで届きそうなのに届かない、いちばん苦しい距離感。",
  },
  51: {
    "보고 싶은": "『見たい』より強く、実際には会いたくてたまらない恋しさ。",
  },
  52: {
    밤하늘을: "終盤では現実の空ではなく、気持ちを飛ばしたい幻想の景色として見える夜空。",
  },
};

const moonNightExtraSentenceExplanations: Record<number, string> = {
  15: "同じ星明かりでも、ここでは最初のときめきより『待ち疲れたあとでもまだ揺れる心』として戻ってくる。",
  19: "この『見送るね』は結論というより、自分を守るために一度だけ口にする仮の決心に近い。",
  20: "すぐ次に『いや』が来ることで、諦める理性より残したい本音の方が強いと分かる。",
  32: "2回目の反復では、同じ夜景よりも未練の方が濃く聞こえるようになっている。",
  36: "ここでは一つの行の中で『見送る』と『いや』がぶつかり、気持ちの揺れが最も露骨に出る。",
  38: "夜という器よりも、残したい気持ちだけが前面に出ることで未練の濃さが増している。",
  45: "終盤では『どこを見ているのか』より一歩進んで、相手がどこへ向かうのかという未来の不安になっている。",
  49: "この一行は、長かった夜をあとから振り返って名前をつけるような総括になっている。",
  52: "ラストの夜空は逃避というより、最後まで届かなかった気持ちを飛ばし続ける場所として響く。",
  53: "英語フレーズが最後に戻ると、意味説明よりも月夜の余韻そのものとして残る。",
  54: "結局は現実で会うより先に、夢の中ででも会いたい気持ちに帰って終わる。",
};

const moonNightExtraNuance: Record<number, string> = {
  15: "同じ景色でも、2回目は待っても変わらなかった時間の重みが少し乗る。",
  19: "見送ると言い切ることで前に進みたいのに、言い切った瞬間からもう揺れている。",
  20: "아냐 の短さが、諦めきれない本音の速さをそのまま表している。",
  32: "きらめく夜の美しさが、今度は希望より未練を照らしているように聞こえる。",
  36: "『見送る』と『違う』が同じ息で出るので、感情の決着が全くついていないことが分かる。",
  38: "もう理屈ではなく、好きなまま持っていたい気持ちがそのまま残っている。",
  45: "未来の方向まで見えないことで、この恋の不安がさらに大きなものへ広がる。",
  49: "하염없이 の少しむなしい響きが、夜の長さと報われなさを同時に作る。",
  52: "最後の夜空は少しだけ夢寄りで、現実よりも感情の居場所として近く感じられる。",
  54: "現実を変える前に終わるからこそ、この曲の切なさがきれいに残る。",
};

export const gfriendMoonNight: Song = {
  id: "gfriend-moon-night",
  title: "밤 (Time for the moon night)",
  artist: "GFRIEND",
  difficulty: "中級",
  tags: ["夜", "片思い", "未練", "不安", "夢", "中級"],

  overview:
    "『好きな人の気持ちが分からず、近づきたいのに近づけない夜』を描いた曲。星明かりや霧、窓、夜空、夢といった幻想的なイメージを使いながら、相手を手放そうとしてもまだ心の中にしまっておきたい揺れる気持ちが続いていきます。『もう見送る』と言いながらすぐ『いや、まだ』と否定してしまうところに、この曲の未練と切なさが一番よく出ています。",

  lines: completeMoonNightLines.map((line, index) => {
    const lineNumber = index + 1;
    const extraGrammar =
      moonNightExtraGrammar[lineNumber]?.map((grammarPoint, grammarIndex) => ({
        id: `line-${lineNumber}-extra-g${grammarIndex + 1}`,
        ...grammarPoint,
      })) ?? [];

    return {
      ...line,
      roleInSong: combineRole(
        moonNightSectionRoleMap[lineNumber],
        line.roleInSong,
      ),
      sentenceExplanation:
        moonNightExtraSentenceExplanations[lineNumber] ??
        line.sentenceExplanation,
      nuance: moonNightExtraNuance[lineNumber] ?? line.nuance,
      grammarPoints: [...(line.grammarPoints ?? []), ...extraGrammar],
      tokens: line.tokens.map((token) => ({
        ...token,
        meaningInThisLine:
          moonNightTokenMeanings[lineNumber]?.[token.surface] ??
          token.meaningInThisLine,
      })),
    };
  }),

  quizzes: [
    {
      id: "q1",
      type: "word-meaning",
      question: "떨려오다 の自然な意味は？",
      choices: ["震えてくる、どきどきしてくる", "急に消えていく", "明かりをつける", "夢を見続ける"],
      answer: "震えてくる、どきどきしてくる",
      explanation:
        "떨리다 + -어 오다 で、感情がだんだん迫ってくる感じを表します。",
      songId: "gfriend-moon-night",
    },
    {
      id: "q2",
      type: "grammar",
      question: "「-는지」の意味は？",
      choices: ["〜なのか、〜しているのか", "〜したい", "〜するべきだ", "〜してしまった"],
      answer: "〜なのか、〜しているのか",
      explanation:
        "넌 어디를 보고 있는지、넌 어디로 가고 있는지 のように、不確かな疑問を表しています。",
      songId: "gfriend-moon-night",
    },
    {
      id: "q3",
      type: "grammar",
      question: "「-ㄹ/을 것 같다」の意味は？",
      choices: ["〜しそうだ", "〜してしまう", "〜したことがある", "〜しておく"],
      answer: "〜しそうだ",
      explanation:
        "사라질 것 같은데 で『消えてしまいそうなのに』という不安な推測を表しています。",
      songId: "gfriend-moon-night",
    },
    {
      id: "q4",
      type: "word-meaning",
      question: "심장이 깜깜해 の自然な意味は？",
      choices: ["心が真っ暗だ", "心臓が速い", "気分が軽い", "夜空がまぶしい"],
      answer: "心が真っ暗だ",
      explanation:
        "ここでの 심장 は心に近く、相手の気持ちが見えず心の中が暗いことを表しています。",
      songId: "gfriend-moon-night",
    },
    {
      id: "q5",
      type: "word-meaning",
      question: "시무룩해 の意味は？",
      choices: ["しょんぼりしている", "わくわくしている", "勇気が出る", "眠くなっている"],
      answer: "しょんぼりしている",
      explanation:
        "元気がなく沈んだ気持ちを表す言葉です。",
      songId: "gfriend-moon-night",
    },
    {
      id: "q6",
      type: "grammar",
      question: "「-아/어 버리다」の意味は？",
      choices: ["〜してしまう", "〜しながら", "〜したい", "〜できない"],
      answer: "〜してしまう",
      explanation:
        "놓쳐버린、좋아져버린 のように、後悔や取り返しのつかなさを強めています。",
      songId: "gfriend-moon-night",
    },
    {
      id: "q7",
      type: "word-meaning",
      question: "좋아하는 만큼 の自然な意味は？",
      choices: ["好きな分だけ", "好きだったけれど", "好きだからこそ", "好きになれずに"],
      answer: "好きな分だけ",
      explanation:
        "気持ちが大きいほど、夜の星も増えるように感じる比喩です。",
      songId: "gfriend-moon-night",
    },
    {
      id: "q8",
      type: "word-meaning",
      question: "어쩔 줄 모르고 の意味は？",
      choices: ["どうしたらいいか分からず", "会いたくてたまらず", "何も言えなくて", "一人で泣きながら"],
      answer: "どうしたらいいか分からず",
      explanation:
        "気持ちは大きくなるのに、行動の仕方が分からない迷いを表します。",
      songId: "gfriend-moon-night",
    },
    {
      id: "q9",
      type: "word-meaning",
      question: "이제 보내줄게 の自然な意味は？",
      choices: ["もう見送るね", "今すぐ追いかけるね", "やっと会えたね", "気持ちを伝えるね"],
      answer: "もう見送るね",
      explanation:
        "相手を諦めて手放そうと一度は決める言い方です。",
      songId: "gfriend-moon-night",
    },
    {
      id: "q10",
      type: "word-meaning",
      question: "몰래 몰래 간직하고 싶은 밤 の自然な意味は？",
      choices: [
        "こっそり大切にしまっておきたい夜",
        "明るく笑っていたい夜",
        "急いで忘れたい夜",
        "友達に会いたい夜",
      ],
      answer: "こっそり大切にしまっておきたい夜",
      explanation:
        "諦めるより、まだ心の中に相手を残しておきたい未練を表しています。",
      songId: "gfriend-moon-night",
    },
    {
      id: "q11",
      type: "grammar",
      question: "「-기엔」の意味は？",
      choices: ["〜するには", "〜したあとで", "〜するみたいだ", "〜しながら"],
      answer: "〜するには",
      explanation:
        "다가가기엔、여기 있기엔 のように、条件としては難しいという含みで使われます。",
      songId: "gfriend-moon-night",
    },
    {
      id: "q12",
      type: "word-meaning",
      question: "훌쩍이다 の意味は？",
      choices: ["すすり泣く", "きらめく", "手放す", "近づく"],
      answer: "すすり泣く",
      explanation:
        "静かに鼻をすすりながら泣くようなニュアンスがあります。",
      songId: "gfriend-moon-night",
    },
    {
      id: "q13",
      type: "word-meaning",
      question: "하염없이 の自然な意味は？",
      choices: ["果てしなく、とめどなく", "明るく軽く", "急いでまっすぐ", "静かに少しだけ"],
      answer: "果てしなく、とめどなく",
      explanation:
        "終わりなく相手を追いかけてしまう夜の長さを強めています。",
      songId: "gfriend-moon-night",
    },
    {
      id: "q14",
      type: "word-meaning",
      question: "손에 닿지 않는 の自然な意味は？",
      choices: ["手が届かない", "手を離したくない", "手をつないでいる", "手を振っている"],
      answer: "手が届かない",
      explanation:
        "すぐ近くに感じるのに、実際には届かない距離感を表しています。",
      songId: "gfriend-moon-night",
    },
    {
      id: "q15",
      type: "which-song",
      question: "「As time time for the moon night」はどの曲？",
      text: "As time time for the moon night",
      choices: [
        "밤 (Time for the moon night)",
        "시간을 달려서 (Rough)",
        "오늘부터 우리는 (Me gustas tu)",
        "봄의 나라 이야기 (April Story)",
      ],
      answer: "밤 (Time for the moon night)",
      explanation:
        "GFRIEND『밤 (Time for the moon night)』。夜の幻想性を強める印象的なフレーズです。",
      songId: "gfriend-moon-night",
    },
    {
      id: "q16",
      type: "fill-blank",
      question: "「다가가기엔 너의 맘이 _____ 않아」の空欄に入るのは？",
      choices: ["확실하지", "보이지", "가깝지", "멀어지지"],
      answer: "확실하지",
      explanation:
        "相手の気持ちがまだはっきりしないから近づけない、というこの曲の核心的な不安です。",
      songId: "gfriend-moon-night",
    },
    {
      id: "q17",
      type: "word-meaning",
      question: "간직하고 싶은 밤 の自然な意味は？",
      choices: [
        "忘れるより心の中に残しておきたい夜",
        "もう終わりにしたい夜",
        "誰かに見せたい夜",
        "朝まで笑っていたい夜",
      ],
      answer: "忘れるより心の中に残しておきたい夜",
      explanation:
        "몰래 몰래 간직하고 싶은 밤 は、諦めるより秘密のまま持っていたい未練を表します。",
      songId: "gfriend-moon-night",
    },
    {
      id: "q18",
      type: "grammar",
      question: "「-이라도」の意味は？",
      choices: ["〜にでも、〜であっても", "〜したばかり", "〜するだけで", "〜しないで"],
      answer: "〜にでも、〜であっても",
      explanation:
        "당장이라도 は『今すぐにでも』。かなり切羽詰まった気持ちを強めています。",
      songId: "gfriend-moon-night",
    },
    {
      id: "q19",
      type: "word-meaning",
      question: "좋아져버린 내 맘 の自然な意味は？",
      choices: [
        "好きになりすぎてしまった私の心",
        "もう忘れてしまった気持ち",
        "急に冷めてしまった心",
        "明るくなっていく夢",
      ],
      answer: "好きになりすぎてしまった私の心",
      explanation:
        "-아/어 버리다 が入ることで、もう後戻りできないほど好きになってしまった感じが出ます。",
      songId: "gfriend-moon-night",
    },
    {
      id: "q20",
      type: "fill-blank",
      question: "「손에 _____ 않는」の空欄に入るのは？",
      choices: ["닿지", "잡지", "놓지", "감지"],
      answer: "닿지",
      explanation:
        "손에 닿지 않는 は『手に届かない』。見えているのに届かない距離感がこの曲の切なさです。",
      songId: "gfriend-moon-night",
    },
  ],
};

import type { Song, Token } from "../../types/song";
import { completeOOLines } from "./_oo-lines-all";

const expandTextMap = (
  groups: Array<[number[], string]>,
): Record<number, string> =>
  Object.fromEntries(
    groups.flatMap(([numbers, text]) => numbers.map((number) => [number, text])),
  );

const ooSectionBreaks = new Set([8, 16, 23, 30, 40, 46, 52, 58]);

type ExtraTokenSpec = Omit<Token, "id">;

const mergeExtraTokens = (
  lineNumber: number,
  tokens: Token[],
  extras: ExtraTokenSpec[] = [],
): Token[] => {
  const seen = new Set(tokens.map((token) => token.surface));
  const merged = [...tokens];

  extras.forEach((token, index) => {
    if (seen.has(token.surface)) {
      return;
    }

    merged.push({
      id: `line-${lineNumber}-extra-t${index + 1}`,
      ...token,
    });
    seen.add(token.surface);
  });

  return merged;
};

const ooRoleMap = expandTextMap([
  [
    [1, 2, 3, 4, 5, 6, 7, 8],
    "イントロ。造語や擬音、挑発的な言い回しで、普通ではない始まりと強烈な第一印象を作る。",
  ],
  [
    [9, 10, 11, 12, 13, 14, 15, 16],
    "ショーの準備パート。観客を席につかせ、まだティーザーだと煽りながら本番への期待を吊り上げる。",
  ],
  [
    [17, 18, 19, 20, 21, 22, 23],
    "転換部。カウントダウンのようなリズムと『今始まる』『目を丸くする』で、タイトル O.O の衝撃へつなげる。",
  ],
  [
    [24, 25, 26, 27, 28, 29, 30],
    "1回目のフック。警告・ダンス・視覚イメージを反復し、危険で楽しい NMIXX の世界観を一気に定着させる。",
  ],
  [
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    "自己紹介と世界観の提示。NMIXX の名乗りから fake / real の宣言、そして次のパートへ広げるビートで中核テーマを置く。",
  ],
  [
    [41, 42, 43, 44, 45, 46],
    "2番前半。ありきたりな夢に飽きた相手を起こし、自分たちが導き手になると約束する。",
  ],
  [
    [47, 48, 49, 50, 51, 52],
    "2番後半。スピード感を上げながら不安を消し、互いを信じれば無限の可能性が生まれると押し出す。",
  ],
  [
    [53, 54, 55, 56, 57, 58],
    "ブリッジ。ヒーロー像と『今がその時』という言葉で、迷いを振り切って勝利まで行く流れを作る。",
  ],
  [
    [59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    "ラストフックとアウトロ。目のモチーフと反応確認を重ねながら、最後まで『ついてきて』と参加を迫って締める。",
  ],
]);

const ooReadingMap: Record<number, string> = {
  3: "バンニ? shOOg shOOg shOOg",
  4: "훅 トゥロワ ネゲ チョム ド",
  7: "チュンギョックァ コンポイルコル OOps",
  9: "クングメ ミチゲッチ Open that bOOm",
  11: "パジン ゴン オプチ? Come in",
  13: "コッ トジヌン タンソン",
  15: "훗 キデヘ coming sOOn",
  16: "ポルッソ ノルラジマ Calm down down down",
  18: "チグム シジャケ",
  21: "キダリョバ チャムカン Oh Tensionウル ト ノピョ",
  23: "トゥ ヌニ コジョ Like 'OO'",
  32: "ヨングァ イレ ミロガ ポヨ?",
  33: "ポゴ イッチマン マルゴ Follow",
  36: "チンチャ シジャグン チグムブト",
  41: "ヒョンシルガトゥン Dreamウン イジェ チギョプチ アンニ?",
  42: "チャムドゥン ノルル Tap Tap ッケウォ Knock Knock",
  43: "オソ buttonウル ト Tap Tap ヌルロババ",
  48: "ナル ッコク チャバ チャバ",
  50: "No ムソウォハル コ オプソ Never give up",
  51: "Baby ノワ ナルル ミド",
  52: "Zero plus Zero equals infinity Oh チェミッチ アンニ?",
  55: "ノム ヌッキ ジョネ Try",
  63: "Come on ヌヌル ッカムッパギル シガニヤ Babe",
  68: "Oh my ットロジン メンタルン チェンギョガ Babe",
  70: "オソ Follow Follow",
};

const ooExtraSentenceExplanations: Record<number, string> = {
  18: "ここで『今から始まる』とはっきり宣言し、ティーザーや予告の段階が終わったことを告げている。",
  24: "警告とダンスの掛け声を重ねて、危険で楽しい NMIXX の世界へ一気に引きずり込むフック。",
  25: "『どれだけすごいか見て』と自信満々に迫り、観客の驚いた反応まで含めて演出している。",
  28: "目薬のイメージで『目を見開くほどの衝撃』をユーモラスに言い換えたライン。",
  32: "0と1でできた迷路という比喩で、現実と仮想が混ざる NMIXX のデジタル世界を見せる。",
  36: "『本当の始まりは今から』と、ここからがただの飾りではない本番だと強く線を引く。",
  47: "Zip、Zap、zOOm と音を連打して、スピード感と転換の勢いそのものを歌詞化している。",
  52: "ありえない式をあえて出すことで、常識の外にある無限の可能性こそ自分たちの世界だと示している。",
  54: "ここでは相手もヒーローだと持ち上げ、導くだけでなく一緒に世界を作る側へ引き上げている。",
  63: "驚きで見開いた目が今度は瞬きをする番だと言い、O.O の目のモチーフを最後までつなげている。",
  68: "衝撃で落ちたメンタルまで拾って帰ってねと茶化し、強烈さを自信満々に笑いへ変えている。",
};

const ooExtraNuance: Record<number, string> = {
  18: "曲の流れの中では、ここが『入場』から『体験開始』へ切り替わるスイッチの役割。",
  24: "Watch out の警告と baila の高揚感が同時にあるので、危ないのに楽しいというデビュー曲らしい圧が出る。",
  25: "驚かせるだけでなく、『見たでしょ、すごいでしょ』と誇示する余裕もある。",
  28: "目薬という日常的な物を使うことで、派手な世界観の中に少しコミカルな可愛さが入る。",
  32: "0と1は二進法や仮想空間の記号でもあり、ここで一気に世界観がSFっぽくなる。",
  36: "fake / real の対比を受けたあとの『今から』なので、自己紹介ではなく宣戦布告に近い響きになる。",
  47: "言葉の意味より音の連打が大事で、視覚的にも聴覚的にもスピードを感じさせる。",
  52: "計算の破綻をそのまま面白がることで、『普通じゃないこと』自体を魅力として押し出している。",
  54: "一方的に救うのではなく、相手も hero と呼ぶことで関係が双方向に見える。",
  63: "驚きが続いたあとに『瞬きの時間』と言うので、まだ余韻の中にいる感じが残る。",
  68: "멘탈 というカジュアルな語を使うことで、強烈さを深刻ではなくノリの良い冗談として処理している。",
};

const ooTokenMeanings: Record<number, Record<string, string>> = {
  4: {
    HOOk: "聞き手を物語の中へひっかける合図で、ここでは『NMIXXの世界へ入れ』という導線そのもの。",
    내게: "ただ近づくのではなく、『私の方へ』来いと、中心にいる自分たちへ引き寄せている。",
    "좀 더": "もう少しだけではなく、ためらわず一段深く入ってこいという煽り。",
  },
  7: {
    충격: "かわいいデビューではなく、まず一撃で印象を残すという宣言。",
    공포: "楽しいだけでなく、少し怖いほど未知なものとして自分たちの世界を見せる語。",
  },
  9: {
    궁금해: "『気になって仕方ないよね』と相手の好奇心を先回りして煽る言葉。",
    미치겠지: "理性を保てないくらい気になるだろうと、引力の強さを誇張している。",
    bOOm: "単なる音ではなく、開いた瞬間に何かが爆発する扉や世界のイメージ。",
  },
  11: {
    빠진: "準備の抜け漏れがないかを確認しつつ、ショーに入る儀式のような感じを作る。",
    건: "会話的で軽い響きになり、『忘れ物ないよね？』という親しさが出る。",
    "없지?": "確認という形を取りつつ、もう入る前提で話を進めている。",
  },
  13: {
    탄성: "これから上がる歓声やどよめきまで、すでに想定済みだという余裕を示す。",
  },
  16: {
    "놀라지 마": "驚かないでと言いながら、実際にはもっと驚かせるつもりだという挑発。",
  },
  18: {
    시작해: "ここが序章ではなく本編の入口だと明確に示すスイッチの語。",
  },
  21: {
    기다려봐: "少し待てと引っ張ることで、相手の期待をさらにふくらませる役割。",
    높여: "テンションや緊張感を自分たちのペースでさらに上げていく押しの強さ。",
  },
  23: {
    "두 눈": "タイトル O.O の『大きく見開いた目』へ直接つながる視覚モチーフ。",
    커져: "驚きによって目が丸くなる様子を、そのまま顔文字的に見せる動詞。",
    OO: "文字の形そのものが、驚き顔や大きく開いた瞳を表す象徴。",
  },
  24: {
    baila: "スペイン語の『踊れ』で、警告だけでなく身体ごと巻き込むノリを作る。",
  },
  28: {
    "한 방울": "目薬一滴という細かいイメージで、目のモチーフをコミカルに具体化している。",
    "Eye drops": "驚いて目を酷使した相手への冗談のようでもあり、O.O の世界観の小道具でもある。",
  },
  32: {
    "0과 1": "デジタルな世界、二進法、現実離れした空間を一気に呼び込む数字の対。",
    미로: "簡単に抜けられない複雑な世界であり、NMIXX の構造そのものの比喩。",
    "보여?": "『見える？』と問いかけることで、相手も世界観を認識し始めたかを確かめる。",
  },
  33: {
    "보고 있지만": "ただ眺めるだけの受け身な態度を、ここで明確に否定している。",
    Follow: "観客ではなく参加者になれという、曲全体の命令形の中心。",
  },
  36: {
    진짜: "fake と対置される『本物』の側に自分たちがいるという自己宣言。",
    지금: "未来ではなく『まさに今』だと、体験の開始点を強く前へ押し出す。",
  },
  42: {
    잠든: "まだ目覚めていない相手、つまりこの世界を知らない聞き手の状態を表す。",
    깨워: "眠った相手を起こすだけでなく、新しい感覚や視界へ目覚めさせる動詞。",
  },
  43: {
    button: "新しい世界を開くスイッチのような装置感を持たせる小道具。",
    "눌러봐봐": "ためらわず試してみてと背中を押す、かなりくだけた誘い方。",
  },
  45: {
    "Never let you down": "派手さだけではなく、『ついてきても失望させない』という保証まで出している。",
    "Be with me": "一緒にいること自体が、この世界へ入る条件であり安心材料でもある。",
  },
  46: {
    "super hero": "怖い未知の世界へ連れていく案内役としての自分たちの姿。",
  },
  48: {
    꼭: "単に握るのではなく、『しっかり』『離さず』という安心の強さが入る。",
    잡아: "不安なら自分を掴んでついてこい、という身体的に分かりやすい支え方。",
  },
  50: {
    "무서워할 거 없어": "この世界は強烈でも、怖がる対象ではないと真正面から安心させている。",
  },
  51: {
    믿어: "自分たちだけでなく『あなたと私たちの関係』ごと信じろという呼びかけ。",
  },
  52: {
    "∞": "ゼロしかないはずの場所から無限が生まれるという、NMIXX 的な逆説の象徴。",
    "재밌지 않니?": "常識外れの式を『面白いでしょ』と軽やかに楽しませる言い方。",
  },
  54: {
    ma: "my をくだけて崩した形で、親しさとストリートっぽい軽さを足している。",
  },
  55: {
    "늦기 전에": "迷っている時間はもう長くない、今決めろという切迫感のある一押し。",
  },
  63: {
    깜빡일: "驚きで見開いた目がようやく瞬きできる、その余韻まで描いている。",
    시간이야: "ただの説明ではなく、『今こそその時間だよ』とタイミングを差し出す言い方。",
  },
  68: {
    멘탈: "衝撃でやられた精神状態を、あえてカジュアルな単語で笑いに変えている。",
    챙겨가: "落としたまま帰るなよ、と最後まで遊び心を保ったまま相手に話しかける感じ。",
  },
  70: {
    어서: "最後まで急かすことで、曲が終わってもまだ誘いが続いている感覚を残す。",
    Follow: "最終行でも結論は同じで、『見るな、ついてこい』に戻って締める。",
  },
};

const ooExtraTokens: Record<number, ExtraTokenSpec[]> = {
  36: [
    {
      surface: "지금부터",
      base: "지금부터",
      language: "ko",
      shortMeaning: "今から",
      meaning: "今から、ここから",
      explanation: "지금 + 부터 で『今から』。時間や始点を切って示す形。",
      meaningInThisLine: "ティーザーではなく、本番の始点がここだと線を引く語。",
    },
  ],
  54: [
    {
      surface: "you are",
      base: "you are",
      language: "en",
      shortMeaning: "あなたは〜だ",
      meaning: "あなたは〜だ",
      meaningInThisLine: "相手そのものを『hero』と認め、受け身の観客から仲間へ引き上げる部分。",
    },
    {
      surface: "super hero",
      base: "super hero",
      language: "en",
      shortMeaning: "スーパーヒーロー",
      meaning: "スーパーヒーロー",
      meaningInThisLine: "ここでは自分たちだけでなく、相手にも特別な役割と力があると持ち上げている。",
    },
  ],
};

const ooExtraGrammar: Record<
  number,
  Array<{
    title: string;
    meaning: string;
    explanation: string;
    example?: string;
    exampleJapanese?: string;
  }>
> = {
  3: [
    {
      title: "-니?",
      meaning: "〜なの？ 〜したの？",
      explanation:
        "親しい相手に使うくだけた疑問形。봤니? で『見た？』という軽い呼びかけになる。",
      example: "들었니?",
      exampleJapanese: "聞いた？",
    },
  ],
  7: [
    {
      title: "-ㄹ걸",
      meaning: "〜だと思うよ、〜だろうね",
      explanation:
        "話し手の推量を少しくだけて言う形。공포일걸 で『恐怖だと思うよ』。",
      example: "재밌을걸",
      exampleJapanese: "面白いと思うよ",
    },
  ],
  9: [
    {
      title: "-겠지",
      meaning: "〜だろう、〜でしょ",
      explanation:
        "推量や相手への確認を表す。미치겠지 で『おかしくなりそうでしょ』。",
      example: "알겠지?",
      exampleJapanese: "分かるでしょ？",
    },
  ],
  11: [
    {
      title: "것은 → 건",
      meaning: "〜は、ことは",
      explanation:
        "것은 の縮約形。빠진 건 없지? で『抜けたものはないよね？』のように会話でよく縮まる。",
      example: "할 건 많아",
      exampleJapanese: "やることは多い",
    },
  ],
  16: [
    {
      title: "-지 마",
      meaning: "〜しないで",
      explanation:
        "禁止や制止を表す基本表現。놀라지마 で『驚かないで』。",
      example: "울지 마",
      exampleJapanese: "泣かないで",
    },
  ],
  28: [
    {
      title: "-ㄹ 때",
      meaning: "〜する時",
      explanation:
        "떨어뜨릴 때야 で『落とす時だよ』。ある行動をするちょうどそのタイミングを示す。",
      example: "갈 때 불러",
      exampleJapanese: "行く時に呼んで",
    },
  ],
  33: [
    {
      title: "-지만 말고",
      meaning: "〜するだけじゃなくて、〜してばかりいないで",
      explanation:
        "その状態にとどまらず次の行動を促す形。보고 있지만 말고 で『見ているだけじゃなくて』。",
      example: "듣지만 말고 말해 봐",
      exampleJapanese: "聞いてるだけじゃなくて言ってみて",
    },
  ],
  36: [
    {
      title: "-부터",
      meaning: "〜から",
      explanation:
        "지금부터 で『今から』。始まりの地点を区切って、この瞬間から本編だと強める。",
      example: "여기부터 시작",
      exampleJapanese: "ここから始まり",
    },
  ],
  41: [
    {
      title: "-지 않니?",
      meaning: "〜じゃない？",
      explanation:
        "相手の同意や共感を求める問いかけ。지겹지 않니? で『飽きたんじゃない？』。",
      example: "좋지 않니?",
      exampleJapanese: "いいと思わない？",
    },
  ],
  42: [
    {
      title: "-ㄴ / -은",
      meaning: "〜している〜、〜した〜",
      explanation:
        "잠든 は 잠들다 の連体形で『眠っている〜』。後ろの名詞を説明する形。",
      example: "웃는 얼굴",
      exampleJapanese: "笑っている顔",
    },
  ],
  43: [
    {
      title: "-아/어 보다",
      meaning: "〜してみる",
      explanation:
        "試しにやってみるニュアンス。눌러봐봐 は 눌러봐 をくだけて重ねた言い方で『押してみてみて』に近い。",
      example: "먹어 봐",
      exampleJapanese: "食べてみて",
    },
  ],
  50: [
    {
      title: "-ㄹ 거 없어",
      meaning: "〜する必要はない",
      explanation:
        "その行動を心配しなくてよいと打ち消す表現。무서워할 거 없어 で『怖がることはない』。",
      example: "걱정할 거 없어",
      exampleJapanese: "心配することはない",
    },
  ],
  52: [
    {
      title: "-지 않니?",
      meaning: "〜じゃない？",
      explanation:
        "재밌지 않니? で『面白いと思わない？』。相手にもこの世界観を楽しませようとする問いかけ。",
      example: "신기하지 않니?",
      exampleJapanese: "不思議だと思わない？",
    },
  ],
  55: [
    {
      title: "-기 전에",
      meaning: "〜する前に",
      explanation:
        "ある事態になる前のタイミングを示す。늦기 전에 で『遅くなる前に』。",
      example: "잊기 전에 적어",
      exampleJapanese: "忘れる前に書いて",
    },
  ],
  63: [
    {
      title: "-이야",
      meaning: "〜だよ",
      explanation:
        "시간이야 は 시간이다 のくだけた形で『時間だよ』。会話的に今のタイミングを示す。",
      example: "지금이야",
      exampleJapanese: "今だよ",
    },
  ],
  68: [
    {
      title: "-아/어 가다",
      meaning: "〜していく、〜して持っていく",
      explanation:
        "動作を続けながら先へ持っていく感じ。챙겨가 で『ちゃんと拾って持っていって』。",
      example: "가져가",
      exampleJapanese: "持っていって",
    },
  ],
};

export const nmixxOO: Song = {
  id: "nmixx-oo",
  title: "O.O",
  artist: "NMIXX",
  difficulty: "中級",
  tags: ["デビュー", "世界観", "挑発", "英語ミックス", "自己宣言", "中級"],

  overview:
    "『普通の現実やありきたりな夢にはもう飽きたでしょ。怖がらずに、NMIXX が見せる新しい世界についてきて』という勢いで押し切るデビュー曲。0と1の迷路、fake と real、O.O の目のモチーフなどを通して、現実と仮想が混ざる独特の世界観を打ち出しています。歌詞全体はストーリーを細かく語るというより、驚き・衝撃・招待・自己宣言を次々に重ねて、聞き手をNMIXXの舞台へ参加させる構造になっています。",

  lines: completeOOLines.map((line, index) => {
    const lineNumber = index + 1;
    const extraGrammar =
      ooExtraGrammar[lineNumber]?.map((grammarPoint, grammarIndex) => ({
        id: `line-${lineNumber}-extra-g${grammarIndex + 1}`,
        ...grammarPoint,
      })) ?? [];
    const enrichedTokens = mergeExtraTokens(
      lineNumber,
      line.tokens.map((token) => ({
        ...token,
        meaningInThisLine:
          ooTokenMeanings[lineNumber]?.[token.surface] ?? token.meaningInThisLine,
      })),
      ooExtraTokens[lineNumber],
    );

    return {
      ...line,
      reading: ooReadingMap[lineNumber] ?? line.reading,
      roleInSong: ooRoleMap[lineNumber] ?? line.roleInSong,
      sectionBreakAfter: ooSectionBreaks.has(lineNumber),
      sentenceExplanation:
        ooExtraSentenceExplanations[lineNumber] ?? line.sentenceExplanation,
      nuance: ooExtraNuance[lineNumber] ?? line.nuance,
      grammarPoints: [...(line.grammarPoints ?? []), ...extraGrammar],
      tokens: enrichedTokens,
    };
  }),

  quizzes: [
    {
      id: "q1",
      type: "word-meaning",
      question: "겁쟁이 の意味は？",
      choices: ["臆病者", "案内人", "ヒーロー", "観客"],
      answer: "臆病者",
      explanation: "겁 は『怖さ』、쟁이 は『〜な人』で、겁쟁이 は『怖がり・臆病者』です。",
      songId: "nmixx-oo",
    },
    {
      id: "q2",
      type: "word-meaning",
      question: "미로 の意味は？",
      choices: ["迷路", "舞台", "ボタン", "歓声"],
      answer: "迷路",
      explanation: "0과 1의 미로 で『0と1の迷路』。デジタルな世界観を象徴する語です。",
      songId: "nmixx-oo",
    },
    {
      id: "q3",
      type: "word-meaning",
      question: "멘탈 の自然な意味は？",
      choices: ["メンタル、精神状態", "体力", "集中力", "視線"],
      answer: "メンタル、精神状態",
      explanation: "韓国語でも 멘탈 は日常的に使われ、『メンタルがやられる』のような言い方をします。",
      songId: "nmixx-oo",
    },
    {
      id: "q4",
      type: "word-base",
      question: "봤니? の原形は？",
      choices: ["보다", "보내다", "보이다", "벗다"],
      answer: "보다",
      explanation: "보다（見る）の過去形 봤다 に、くだけた疑問形 -니? が付いた形です。",
      songId: "nmixx-oo",
    },
    {
      id: "q5",
      type: "word-base",
      question: "눌러봐봐 の原形は？",
      choices: ["누르다", "눌리다", "누워보다", "늘다"],
      answer: "누르다",
      explanation: "누르다（押す）に -아/어 보다 が重なった、くだけた『押してみてみて』です。",
      songId: "nmixx-oo",
    },
    {
      id: "q6",
      type: "grammar",
      question: "「-지 마」の意味は？",
      choices: ["〜しないで", "〜してみて", "〜するつもりだ", "〜しながら"],
      answer: "〜しないで",
      explanation: "놀라지마 のように、相手を止めるときの基本形です。",
      songId: "nmixx-oo",
    },
    {
      id: "q7",
      type: "grammar",
      question: "「-기 전에」の意味は？",
      choices: ["〜する前に", "〜したあとで", "〜しながら", "〜するほど"],
      answer: "〜する前に",
      explanation: "늦기 전에 で『遅くなる前に』。行動のタイミングを示します。",
      songId: "nmixx-oo",
    },
    {
      id: "q8",
      type: "grammar",
      question: "「-겠지」の意味として自然なのは？",
      choices: ["〜だろう、〜でしょ", "〜してはいけない", "〜したい", "〜するために"],
      answer: "〜だろう、〜でしょ",
      explanation: "미치겠지 は『おかしくなりそうでしょ』。推量や相手への確認を含む形です。",
      songId: "nmixx-oo",
    },
    {
      id: "q9",
      type: "fill-blank",
      question: "「0과 1의 _____가 보여?」の空欄に入るのは？",
      choices: ["미로", "기적", "탄성", "빛"],
      answer: "미로",
      explanation: "『0と1の迷路が見える？』という、曲の世界観を象徴する一節です。",
      songId: "nmixx-oo",
    },
    {
      id: "q10",
      type: "fill-blank",
      question: "「보고 있지만 말고 _____」の空欄に入るのは？",
      choices: ["Follow", "Run", "Dream", "Jump"],
      answer: "Follow",
      explanation: "『見ているだけじゃなくて、ついてきて』。傍観者で終わるなという呼びかけです。",
      songId: "nmixx-oo",
    },
    {
      id: "q11",
      type: "fill-blank",
      question: "「Zero + Zero = ∞ Oh _____ 않니?」の空欄に入るのは？",
      choices: ["재밌지", "무섭지", "쉽지", "같지"],
      answer: "재밌지",
      explanation: "재밌지 않니? で『面白いと思わない？』。逆説的な世界観を強める一言です。",
      songId: "nmixx-oo",
    },
    {
      id: "q12",
      type: "which-song",
      question: "「Cause everything is fake / But I ain't fake」はどの曲？",
      text: "Cause everything is fake / But I ain't fake",
      choices: ["O.O", "Blue Valentine", "I AM", "Glass Bead"],
      answer: "O.O",
      explanation: "NMIXX『O.O』。周りの世界が作り物でも、自分たちは本物だと宣言する重要なラインです。",
      songId: "nmixx-oo",
    },
    {
      id: "q13",
      type: "word-meaning",
      question: "어서 の意味は？",
      choices: ["早く、さあ", "静かに", "たくさん", "絶対に"],
      answer: "早く、さあ",
      explanation: "相手を急かしたり促したりするときによく使う表現です。",
      songId: "nmixx-oo",
    },
    {
      id: "q14",
      type: "word-meaning",
      question: "챙겨가 の自然な意味は？",
      choices: ["拾って持っていって", "置いていって", "隠しておいて", "投げてしまって"],
      answer: "拾って持っていって",
      explanation: "챙기다 は『ちゃんと取りまとめる、持っていく』。ここでは落ちたメンタルを拾っていくイメージです。",
      songId: "nmixx-oo",
    },
  ],
};

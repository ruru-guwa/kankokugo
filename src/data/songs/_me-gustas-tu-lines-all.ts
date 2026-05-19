import type { GrammarPoint, LyricLine, Token } from "../../types/song";

type GrammarSpec = Omit<GrammarPoint, "id">;
type TokenSpec = Omit<Token, "id">;

type LineSpec = Omit<LyricLine, "id" | "tokens" | "grammarPoints"> & {
  tokens: TokenSpec[];
  grammarPoints?: GrammarSpec[];
};

const ko = (
  surface: string,
  base: string,
  shortMeaning: string,
  meaning: string,
  extra: Partial<TokenSpec> = {},
): TokenSpec => ({
  surface,
  base,
  language: "ko",
  shortMeaning,
  meaning,
  ...extra,
});

const es = (
  surface: string,
  base: string,
  shortMeaning: string,
  meaning: string,
  extra: Partial<TokenSpec> = {},
): TokenSpec => ({
  surface,
  base,
  language: "es",
  shortMeaning,
  meaning,
  ...extra,
});

const line = (lineNumber: number, spec: LineSpec): LyricLine => ({
  id: `line-${lineNumber}`,
  korean: spec.korean,
  reading: spec.reading,
  japanese: spec.japanese,
  literalJapanese: spec.literalJapanese,
  sentenceExplanation: spec.sentenceExplanation,
  nuance: spec.nuance,
  roleInSong: spec.roleInSong,
  sectionBreakAfter: spec.sectionBreakAfter,
  grammarPoints: spec.grammarPoints?.map((grammarPoint, index) => ({
    id: `line-${lineNumber}-g${index + 1}`,
    ...grammarPoint,
  })),
  tokens: spec.tokens.map((token, index) => ({
    id: `line-${lineNumber}-t${index + 1}`,
    ...token,
  })),
});

const line1Spec: LineSpec = {
  korean: "널 향한 설레임을",
  reading: "ノル ヒャンハン ソルレイムル",
  japanese: "あなたへのときめきを。",
  literalJapanese: "あなたへ向かったときめきを。",
  sentenceExplanation:
    "自分の気持ちがはっきり相手へ向かっていることを、短くまっすぐに置いている行。",
  nuance:
    "まだ全部は言葉にしていないのに、ときめきだけはすでに相手のほうへ向かっている感じがある。",
  roleInSong:
    "曲の出発点。告白の前にある胸の高鳴りを、そのまま題名のように差し出す導入。",
  tokens: [
    ko("널 향한", "너를 향한", "あなたに向かった", "あなたに向かった、あなたへ向けた", {
      breakdown: "너를 → 널 + 향하다 + -ㄴ",
      meaningInThisLine: "気持ちの矢印がはっきり相手へ向いていること。",
    }),
    ko("설레임을", "설레임", "ときめきを", "ときめきを、胸の高鳴りを", {
      breakdown: "설레다 + -임 + -을",
      explanation: "標準表記は 설렘 も多いが、歌詞では 설레임 もよく使われる。",
    }),
  ],
};

const line2Spec: LineSpec = {
  korean: "오늘부터 우리는 꿈꾸며 기도하는",
  reading: "オヌルブト ウリヌン クムックミョ キドハヌン",
  japanese: "今日から私たちは、夢を見て祈りながら。",
  literalJapanese: "今日から私たちは、夢見ながら祈る。",
  sentenceExplanation:
    "二人の関係が今日から少しずつ始まっていくことを、夢と祈りのイメージでやわらかく描いている。",
  nuance:
    "まだ現実として確定した関係ではなく、願いながら始める初々しさが強い。",
  roleInSong:
    "『今日から私たち』というこの曲の中心メッセージが、夢と祈りを伴って提示される部分。",
  grammarPoints: [
    {
      title: "-부터",
      meaning: "〜から",
      explanation:
        "ある時点を出発点として示す助詞。오늘부터 で『今日から』。",
      example: "지금부터 시작해",
      exampleJapanese: "今から始めよう",
    },
    {
      title: "-며",
      meaning: "〜しながら",
      explanation:
        "二つの動作や状態を同時に並べる文語寄りの形。꿈꾸며 で『夢見ながら』。",
      example: "웃으며 말해",
      exampleJapanese: "笑いながら話す",
    },
  ],
  tokens: [
    ko("오늘부터 우리는", "오늘부터 우리는", "今日から私たちは", "今日から私たちは", {
      breakdown: "오늘 + -부터 + 우리 + -는",
      meaningInThisLine: "今日を境に、二人の関係が少し変わり始めること。",
    }),
    ko("꿈꾸며", "꿈꾸다", "夢見ながら", "夢見ながら", {
      breakdown: "꿈꾸다 + -며",
    }),
    ko("기도하는", "기도하다", "祈る", "祈る、祈っている", {
      breakdown: "기도하다 + -는",
      meaningInThisLine: "この恋がうまくいくよう静かに願っていること。",
    }),
  ],
};

const line3Spec: LineSpec = {
  korean: "오늘부터 우리는",
  reading: "オヌルブト ウリヌン",
  japanese: "今日から私たちは。",
  literalJapanese: "今日から私たちは。",
  sentenceExplanation:
    "この一言だけをもう一度置くことで、『今日から始まる』という感覚を強く印象づけている。",
  nuance:
    "まだ言い切ってはいないけれど、気持ちの中ではもう二人の新しい始まりが見えている響き。",
  roleInSong:
    "タイトルそのものを繰り返して、恋の始まりを宣言に近づけるフレーズ。",
  tokens: [
    ko("오늘부터 우리는", "오늘부터 우리는", "今日から私たちは", "今日から私たちは", {
      breakdown: "오늘 + -부터 + 우리 + -는",
    }),
  ],
};

const line4Spec: LineSpec = {
  korean: "저 바람에 노을 빛 내 맘을 실어 보낼게",
  reading: "チョ パラメ ノウル ピッ ネ マムル シロ ボネルケ",
  japanese: "あの風に夕焼け色の私の想いを乗せて届けるね。",
  literalJapanese: "あの風に夕焼けの光、私の心を乗せて送るね。",
  sentenceExplanation:
    "直接は言えない想いを、風や夕焼けの光に乗せて相手へ届けたいと詩的に表している。",
  nuance:
    "恥ずかしくてまっすぐ告白できないからこそ、自然のイメージに自分の気持ちを託している。",
  roleInSong:
    "この曲のいちばん詩的な一行。告白の勇気と照れくささが同時に見える。",
  grammarPoints: [
    {
      title: "-에",
      meaning: "〜に",
      explanation:
        "場所・対象・媒体などを表す助詞。바람에 で『風に』。",
      example: "편지에 써",
      exampleJapanese: "手紙に書く",
    },
    {
      title: "-ㄹ게 / -을게",
      meaning: "〜するね、〜するよ",
      explanation:
        "話し手のやさしい意志を表す語尾。보낼게 で『送るね』。",
      example: "내가 해줄게",
      exampleJapanese: "私がしてあげるよ",
    },
  ],
  tokens: [
    ko("저 바람에", "저 바람에", "あの風に", "あの風に", {
      breakdown: "저 + 바람 + -에",
    }),
    ko("노을 빛", "노을 빛", "夕焼けの光", "夕焼けの光、夕焼け色", {
      meaningInThisLine: "明るさの中に少し切なさもある恋の色。",
    }),
    ko("내 맘을", "내 마음", "私の気持ちを", "私の心を、私の気持ちを", {
      breakdown: "내 + 마음 → 맘 + -을",
    }),
    ko("실어 보낼게", "실어 보내다", "乗せて送るね", "乗せて送るね、託して届けるね", {
      breakdown: "싣다 + -어 + 보내다 + -ㄹ게",
      meaningInThisLine: "言葉にしきれない気持ちを自然に託して伝えたいこと。",
    }),
  ],
};

const line5Spec: LineSpec = {
  korean: "그리운 마음이 모여서 내리는",
  reading: "クリウン マウミ モヨソ ネリヌン",
  japanese: "恋しい気持ちが集まって、降り注ぐ。",
  literalJapanese: "恋しい心が集まって降る。",
  sentenceExplanation:
    "相手を想う気持ちが一つ一つ集まって、雨や光のように降りそそぐイメージで描いている。",
  nuance:
    "感情を自然現象みたいに描くことで、恋しさが静かに広がっていく感じが出る。",
  roleInSong:
    "サビ前後の空気を満たす情景描写。ときめきが恋しさへ育っていることも示す。",
  grammarPoints: [
    {
      title: "-아/어 서",
      meaning: "〜して、〜なので",
      explanation:
        "動作をつないだり理由を出したりする形。모여서 で『集まって』。",
      example: "웃어서 예뻐",
      exampleJapanese: "笑っていてきれいだ",
    },
  ],
  tokens: [
    ko("그리운 마음이", "그리운 마음", "恋しい気持ちが", "恋しい気持ちが", {
      breakdown: "그립다 + -ㄴ + 마음 + -이",
    }),
    ko("모여서", "모이다", "集まって", "集まって", {
      breakdown: "모이다 + -아/어서",
    }),
    ko("내리는", "내리다", "降る", "降る、降りそそぐ", {
      breakdown: "내리다 + -는",
      meaningInThisLine: "恋しい気持ちが景色のように降りてくること。",
    }),
  ],
};

const line6Spec: LineSpec = {
  korean: "Me gustas tu gustas tu su tu tu ru",
  reading: "メ グスタス トゥ グスタス トゥ ス トゥ トゥ ル",
  japanese: "あなたが好き、あなたが好き。",
  literalJapanese: "私はあなたが好き、あなたが好き。",
  sentenceExplanation:
    "スペイン語の告白フレーズをそのまま繰り返して、明るくまっすぐな気持ちを可愛く伝えている。",
  nuance:
    "韓国語で直接言うより少し異国風で軽やかだから、清純で弾むような告白に聞こえる。",
  roleInSong:
    "この曲の象徴フレーズ。ときめきが一気にストレートな『好き』に変わるサビの中心。",
  tokens: [
    es("Me gustas tu", "Me gustas tu", "あなたが好き", "スペイン語で『あなたが好き』", {
      explanation:
        "直訳に近く言えば『あなたは私に好まれる』だが、自然には『あなたが好き』。",
      meaningInThisLine: "好きという気持ちをかわいく真っすぐに伝える告白フレーズ。",
    }),
    es("gustas tu", "gustas tu", "あなたが好き", "『あなたが好き』の繰り返し", {
      explanation: "サビでは響きを重ねて気持ちの高まりを強めている。",
    }),
    es("su tu tu ru", "su tu tu ru", "ルルルのような掛け声", "意味よりもリズムを作るサビの掛け声", {
      shortMeaning: "サビの掛け声",
    }),
  ],
};

const line7Spec: LineSpec = {
  korean: "좋아해요 gustas tu su tu ru su tu ru",
  reading: "チョアヘヨ グスタス トゥ ス トゥ ル ス トゥ ル",
  japanese: "好きです、あなたが好き。",
  literalJapanese: "好きです、あなたが好き。",
  sentenceExplanation:
    "韓国語の 좋아해요 とスペイン語の gustas tu を重ねて、告白の意味をよりはっきり見せている。",
  nuance:
    "丁寧な 해요 体の可愛らしさと、外国語の軽やかさが重なって、強すぎない明るい告白になる。",
  roleInSong:
    "サビの告白を韓国語でも言い直して、意味をしっかり着地させる部分。",
  tokens: [
    ko("좋아해요", "좋아하다", "好きです", "好きです", {
      breakdown: "좋아하다 + -아요/어요",
      meaningInThisLine: "相手に向けた素直で丁寧な告白。",
    }),
    es("gustas tu", "gustas tu", "あなたが好き", "スペイン語で『あなたが好き』", {
      explanation: "좋아해요 と同じ意味を別の響きで重ねている。",
    }),
    es("su tu ru su tu ru", "su tu ru su tu ru", "サビの掛け声", "意味よりもサビの可愛さと弾みを作る掛け声", {
      shortMeaning: "サビの掛け声",
    }),
  ],
};

const line8Spec: LineSpec = {
  korean: "한 발짝 뒤에 섰던 우리는",
  reading: "ハン パルッチャク ティエ ソットン ウリヌン",
  japanese: "一歩引いた場所にいた私たちは。",
  literalJapanese: "一歩後ろに立っていた私たちは。",
  sentenceExplanation:
    "これまでは恋に対して少し引いた位置にいて、積極的になれなかった二人を表している。",
  nuance:
    "後ろに立つという物理的なイメージで、消極的だった関係がやわらかく見える。",
  roleInSong:
    "Aメロで、『今日から前へ進みたい』の前提として、今までの受け身な距離感を振り返る行。",
  grammarPoints: [
    {
      title: "-던",
      meaning: "〜していた、以前の〜",
      explanation:
        "過去に続いていた状態や習慣を表す語尾。섰던 で『立っていた』。",
      example: "좋아하던 노래",
      exampleJapanese: "好きだった歌",
    },
  ],
  tokens: [
    ko("한 발짝", "한 발짝", "一歩", "一歩、少しの距離", {
      explanation: "발짝 は歩幅や距離としての『一歩』に近い。",
    }),
    ko("뒤에", "뒤", "後ろに", "後ろに", {
      breakdown: "뒤 + -에",
    }),
    ko("섰던 우리는", "섰던 우리", "立っていた私たちは", "立っていた私たちは", {
      breakdown: "서다 + -었- + -던 + 우리 + -는",
      meaningInThisLine: "これまでは一歩引いていた二人。",
    }),
  ],
};

const line9Spec: LineSpec = {
  korean: "언제쯤 센치 해질까요",
  reading: "オンジェッチュム センチ ヘジルッカヨ",
  japanese: "いつになったら、素直に胸がきゅんとするのかな。",
  literalJapanese: "いつ頃、感傷的になるのでしょうか。",
  sentenceExplanation:
    "自分たちの気持ちがもう少し素直に表に出るのはいつだろう、と可愛く問いかけている。",
  nuance:
    "センチ は悲しいというより、恋で胸がきゅっとするような感傷的な気分を軽く言う表現。",
  roleInSong:
    "照れくささの中で、感情の変化を自分でものぞき込むような一行。",
  grammarPoints: [
    {
      title: "-ㄹ까요 / -을까요",
      meaning: "〜でしょうか、〜かな",
      explanation:
        "相手にやわらかく問う時や、自分の気持ちを考える時に使う。해질까요 で『なるのでしょうか』。",
      example: "언제 올까요",
      exampleJapanese: "いつ来るでしょうか",
    },
  ],
  tokens: [
    ko("언제쯤", "언제쯤", "いつ頃", "いつ頃"),
    ko("센치", "센치", "センチ", "センチメンタル、胸がきゅんとする感じ", {
      explanation: "센티멘털 の略。会話でも使う。",
    }),
    ko("해질까요", "해지다", "なるのでしょうか", "なるのでしょうか", {
      breakdown: "하다 + -아/어지다 + -ㄹ까요",
    }),
  ],
};

const line10Spec: LineSpec = {
  korean: "서로 부끄러워서 아무 말도 못하는",
  reading: "ソロ プックロウォソ アム マルド モタヌン",
  japanese: "お互い照れてしまって、何も言えない。",
  literalJapanese: "お互い恥ずかしくて、何の言葉も言えない。",
  sentenceExplanation:
    "好きだからこそ、二人とも照れてしまって何も言葉にできない関係を描いている。",
  nuance:
    "片方だけではなく 서로 なので、二人とも同じように恥ずかしがっている初恋っぽさがある。",
  roleInSong:
    "この曲の『初々しさ』がもっともよく出るフレーズ。",
  grammarPoints: [
    {
      title: "아무 + 名詞 + 도",
      meaning: "何の〜も",
      explanation:
        "否定と一緒に使って『何の〜も』を表す。아무 말도 で『何も言葉も』。",
      example: "아무 생각도 안 나",
      exampleJapanese: "何も思い浮かばない",
    },
  ],
  tokens: [
    ko("서로 부끄러워서", "서로 부끄러워서", "お互い恥ずかしくて", "お互い恥ずかしくて、照れていて", {
      breakdown: "서로 + 부끄럽다 + -아/어서",
    }),
    ko("아무 말도", "아무 말도", "何も", "何の言葉も、何も", {
      breakdown: "아무 + 말 + -도",
    }),
    ko("못하는", "못하다", "できない", "できない、言えない", {
      breakdown: "못하다 + -는",
      meaningInThisLine: "好きでも言葉にできない不器用さ。",
    }),
  ],
};

const line11Spec: LineSpec = {
  korean: "너에게로 다가가고 싶은데",
  reading: "ノエゲロ タガガゴ シプンデ",
  japanese: "本当はあなたに近づきたいのに。",
  literalJapanese: "あなたのもとへ近づいていきたいのに。",
  sentenceExplanation:
    "照れて言えない一方で、気持ちとしてはちゃんと相手へ近づきたいと思っていることを示している。",
  nuance:
    "言葉では止まっていても、心はすでに前へ動いている。",
  roleInSong:
    "恥ずかしさの裏にある前向きな本音がここで出る。",
  grammarPoints: [
    {
      title: "-고 싶다",
      meaning: "〜したい",
      explanation:
        "話し手の願望を表す基本形。다가가고 싶다 で『近づきたい』。",
      example: "보고 싶어",
      exampleJapanese: "会いたい",
    },
  ],
  tokens: [
    ko("너에게로", "너에게로", "あなたのもとへ", "あなたのもとへ、あなたの方へ", {
      breakdown: "너 + -에게 + -로",
    }),
    ko("다가가고", "다가가다", "近づいていって", "近づいていって", {
      breakdown: "다가가다 + -고",
    }),
    ko("싶은데", "싶다", "したいのに", "したいのに、したいけれど", {
      breakdown: "-고 싶다 + -ㄴ데",
      meaningInThisLine: "前へ進みたい本音はあるのに照れて動けないこと。",
    }),
  ],
};

const line12Spec: LineSpec = {
  korean: "바람에 나풀거리는 꽃잎처럼",
  reading: "パラメ ナプルコリヌン コチプチョロム",
  japanese: "風に舞う花びらみたいに。",
  literalJapanese: "風にひらひら揺れる花びらのように。",
  sentenceExplanation:
    "自分たちの気持ちが、風に舞う花びらみたいに軽く揺れて不安定であることをたとえている。",
  nuance:
    "かわいらしい映像なのに、未来の分からなさまでにじむ比喩になっている。",
  roleInSong:
    "不安定な恋心を春らしい景色に重ねる、GFRIENDらしい情景描写。",
  tokens: [
    ko("바람에", "바람", "風に", "風に", {
      breakdown: "바람 + -에",
    }),
    ko("나풀거리는", "나풀거리다", "ひらひら揺れる", "ひらひら揺れる、軽く舞う", {
      breakdown: "나풀거리다 + -는",
    }),
    ko("꽃잎처럼", "꽃잎처럼", "花びらのように", "花びらのように", {
      breakdown: "꽃잎 + -처럼",
      meaningInThisLine: "恋心がふわふわ揺れて落ち着かないこと。",
    }),
  ],
};

const line13Spec: LineSpec = {
  korean: "미래는 알 수가 없잖아",
  reading: "ミレヌン アル スガ オプチャナ",
  japanese: "未来なんて分からないから。",
  literalJapanese: "未来は知ることができないじゃない。",
  sentenceExplanation:
    "先のことは誰にも分からないのだから、だからこそ今勇気を出したいとつなげる一行。",
  nuance:
    "不安を言い訳にするのではなく、逆に『分からないから今伝えたい』へ向かう前向きさがある。",
  roleInSong:
    "告白へ踏み出す理由を自分に言い聞かせる大事な転換点。",
  grammarPoints: [
    {
      title: "-ㄹ/을 수 없다",
      meaning: "〜できない",
      explanation:
        "能力や可能性の否定。알 수가 없다 で『分かることができない』。",
      example: "믿을 수 없어",
      exampleJapanese: "信じられない",
    },
    {
      title: "-잖아",
      meaning: "〜じゃない、〜でしょ",
      explanation:
        "共有や念押しの気持ちを込めるくだけた語尾。없잖아 で『分からないじゃない』。",
      example: "알잖아",
      exampleJapanese: "分かってるじゃない",
    },
  ],
  tokens: [
    ko("미래는", "미래", "未来は", "未来は", {
      breakdown: "미래 + -는",
    }),
    ko("알 수가 없잖아", "알 수가 없다", "分からないじゃない", "知ることができないじゃない、分からないじゃない", {
      breakdown: "알다 + -ㄹ 수가 없다 + -잖아",
      meaningInThisLine: "先が読めないからこそ、今の気持ちを大事にしたいこと。",
    }),
  ],
};

const line14Spec: LineSpec = {
  korean: "이제는 용기 내서 고백할게요",
  reading: "イジェヌン ヨンギ ネソ コベカルケヨ",
  japanese: "だから今、勇気を出して告白するね。",
  literalJapanese: "今は勇気を出して告白します。",
  sentenceExplanation:
    "照れて言えなかった状態から一歩進んで、ついに自分から気持ちを伝える決心をしている。",
  nuance:
    "この曲のいちばん大きな転換点。可愛い恋の歌が、ここでちゃんと告白の歌になる。",
  roleInSong:
    "Aメロの恥ずかしさを越えて、サビで最初に置かれる決意の一行。",
  grammarPoints: [
    {
      title: "용기 내다",
      meaning: "勇気を出す",
      explanation:
        "名詞 + 내다 で『引き出す、出す』。용기 내다 はそのまま『勇気を出す』。",
      example: "용기 내서 말해",
      exampleJapanese: "勇気を出して言って",
    },
  ],
  tokens: [
    ko("이제는", "이제는", "今は", "今は、これからは", {
      breakdown: "이제 + -는",
    }),
    ko("용기 내서", "용기 내다", "勇気を出して", "勇気を出して", {
      breakdown: "용기 + 내다 + -아/어서",
    }),
    ko("고백할게요", "고백하다", "告白するね", "告白するね、打ち明けるね", {
      breakdown: "고백하다 + -ㄹ게요",
      meaningInThisLine: "今日から関係を変えたいという決意。",
    }),
  ],
};

const line15Spec: LineSpec = {
  korean: "하나보단 둘이서 서로를 느껴봐요",
  reading: "ハナボダン トゥリソ ソロルル ヌッキョバヨ",
  japanese: "一人より二人で、お互いを感じてみよう。",
  literalJapanese: "一つよりは二人で、お互いを感じてみましょう。",
  sentenceExplanation:
    "一人で抱える恋より、二人で気持ちを通わせる関係へ進みたいとやさしく誘っている。",
  nuance:
    "強引な告白ではなく、『感じてみよう』と相手をそっと巻き込む言い方が可愛い。",
  roleInSong:
    "告白のあとに、ただ気持ちを伝えるだけでなく二人の関係を提案する部分。",
  grammarPoints: [
    {
      title: "보단",
      meaning: "〜よりは",
      explanation:
        "보다 는 が縮まった会話的な形。하나보단 で『一つよりは』。",
      example: "혼자보단 같이",
      exampleJapanese: "一人より一緒に",
    },
    {
      title: "-아/어 보다",
      meaning: "〜してみる",
      explanation:
        "試しにやってみる、体験してみる形。느껴봐요 で『感じてみましょう』。",
      example: "먹어봐",
      exampleJapanese: "食べてみて",
    },
  ],
  tokens: [
    ko("하나보단", "하나보다", "一つよりは", "一つよりは、一人よりは", {
      breakdown: "하나 + 보다 + 는",
    }),
    ko("둘이서", "둘이서", "二人で", "二人で"),
    ko("서로를", "서로", "お互いを", "お互いを", {
      breakdown: "서로 + -를",
    }),
    ko("느껴봐요", "느껴보다", "感じてみよう", "感じてみましょう", {
      breakdown: "느끼다 + -어 보다 + -아요/어요",
      meaningInThisLine: "少しずつ相手を知り、心を通わせたいこと。",
    }),
  ],
};

const line16Spec: LineSpec = {
  korean: "내 마음 모아서 너에게 전하고 싶어",
  reading: "ネ マウム モアソ ノエゲ チョナゴ シポ",
  japanese: "私の想いを全部集めて、あなたに届けたい。",
  literalJapanese: "私の心を集めて、あなたに伝えたい。",
  sentenceExplanation:
    "散らばっていた気持ちや勇気を一つにまとめて、相手へきちんと届けたいという本音を表している。",
  nuance:
    "ただ好きと言うだけでなく、その気持ちの全部を丁寧に渡したい感じがある。",
  roleInSong:
    "サビの感情の中心。ときめき・祈り・勇気が全部ここへ集まる。",
  tokens: [
    ko("내 마음", "내 마음", "私の気持ち", "私の気持ち、私の心", {
      breakdown: "내 + 마음",
    }),
    ko("모아서", "모으다", "集めて", "集めて、まとめて", {
      breakdown: "모으다 + -아/어서",
    }),
    ko("너에게", "너에게", "あなたに", "あなたに", {
      breakdown: "너 + -에게",
    }),
    ko("전하고 싶어", "전하고 싶다", "伝えたい", "伝えたい、届けたい", {
      breakdown: "전하다 + -고 싶다",
      meaningInThisLine: "勇気をまとめて相手へちゃんと気持ちを渡したいこと。",
    }),
  ],
};

const line17Spec: LineSpec = {
  korean: "설레임을 오늘부터 우리는 꿈꾸며",
  reading: "ソルレイムル オヌルブト ウリヌン クムックミョ",
  japanese: "このときめきを胸に、今日から私たちは夢を見て。",
  literalJapanese: "ときめきを、今日から私たちは夢見ながら。",
  sentenceExplanation:
    "サビ後半では、ときめきそのものを抱えながら二人の始まりを夢見る流れに変わっている。",
  nuance:
    "最初の『널 향한 설레임을』より、ときめきがもう前向きな行動へ結びついている感じ。",
  roleInSong:
    "サビの後半で、気持ちが『告白したい』から『二人を始めたい』へ広がる部分。",
  tokens: [
    ko("설레임을", "설레임", "ときめきを", "ときめきを", {
      breakdown: "설레다 + -임 + -을",
    }),
    ko("오늘부터 우리는", "오늘부터 우리는", "今日から私たちは", "今日から私たちは", {
      breakdown: "오늘 + -부터 + 우리 + -는",
    }),
    ko("꿈꾸며", "꿈꾸다", "夢見ながら", "夢見ながら", {
      breakdown: "꿈꾸다 + -며",
    }),
  ],
};

const line18Spec: LineSpec = {
  korean: "기도하는 오늘부터 우리는",
  reading: "キドハヌン オヌルブト ウリヌン",
  japanese: "祈りながら、今日から私たちは始まる。",
  literalJapanese: "祈る、今日から私たちは。",
  sentenceExplanation:
    "祈るような気持ちで、今日からの二人の関係を大事に始めたいという気持ちを繰り返している。",
  nuance:
    "強く押し切る告白ではなく、願いながら進む優しさが残っている。",
  roleInSong:
    "サビを柔らかくつなぐ反復フレーズ。",
  tokens: [
    ko("기도하는", "기도하다", "祈る", "祈る、祈っている", {
      breakdown: "기도하다 + -는",
    }),
    ko("오늘부터 우리는", "오늘부터 우리는", "今日から私たちは", "今日から私たちは", {
      breakdown: "오늘 + -부터 + 우리 + -는",
    }),
  ],
};

const line23Spec: LineSpec = {
  korean: "한 걸음 앞에 서서",
  reading: "ハン コルム アペ ソソ",
  japanese: "一歩前に進んで。",
  literalJapanese: "一歩前に立って。",
  sentenceExplanation:
    "前半では一歩後ろにいた二人が、今度はちゃんと前へ出ようとしていることを示している。",
  nuance:
    "발짝 より 걸음 は『歩み』の感じが少し強く、関係の前進がよりはっきりする。",
  roleInSong:
    "2番で関係が少し進んだことを、一歩前に出るイメージで見せる行。",
  tokens: [
    ko("한 걸음", "한 걸음", "一歩", "一歩、歩み", {
      explanation: "걸음 は歩く行為や歩みのニュアンスも持つ。",
    }),
    ko("앞에", "앞", "前に", "前に", {
      breakdown: "앞 + -에",
    }),
    ko("서서", "서다", "立って", "立って", {
      breakdown: "서다 + -아/어서",
      meaningInThisLine: "これまでより積極的な立ち位置へ進むこと。",
    }),
  ],
};

const line24Spec: LineSpec = {
  korean: "두 손을 놓지 말기로 약속해요",
  reading: "トゥ ソヌル ノチ マルギロ ヤクソケヨ",
  japanese: "つないだ手を離さないと約束しよう。",
  literalJapanese: "二つの手を離さないことに約束しましょう。",
  sentenceExplanation:
    "ただ気持ちを伝えるだけでなく、二人で手を離さない関係になりたいと約束の形で言っている。",
  nuance:
    "かなり恋人らしい表現だけれど、해요 体なので明るく柔らかいまま聞こえる。",
  roleInSong:
    "2番で『今日から私たち』がもっと具体的な約束になる場面。",
  grammarPoints: [
    {
      title: "-지 말다",
      meaning: "〜しないで",
      explanation:
        "禁止や否定の定番形。놓지 말다 で『離さない』。",
      example: "울지 마",
      exampleJapanese: "泣かないで",
    },
    {
      title: "-기로 하다",
      meaning: "〜することにする",
      explanation:
        "意志や約束を表す形。놓지 말기로 で『離さないことに』。",
      example: "같이 가기로 했어",
      exampleJapanese: "一緒に行くことにした",
    },
  ],
  tokens: [
    ko("두 손을", "두 손", "両手を", "両手を、二人の手を", {
      breakdown: "두 + 손 + -을",
    }),
    ko("놓지 말기로", "놓지 말기로", "離さないことに", "離さないことに", {
      breakdown: "놓다 + -지 말다 + -기로",
      meaningInThisLine: "つながった関係を手放さない約束。",
    }),
    ko("약속해요", "약속하다", "約束します", "約束します、約束しよう", {
      breakdown: "약속하다 + -아요/어요",
    }),
  ],
};

const line25Spec: LineSpec = {
  korean: "소중해질 기억을 꼭 꼭 담아둘게요",
  reading: "ソジュンヘジル キオグル コク コク タマドゥルケヨ",
  japanese: "大切になる思い出を、しっかり胸にしまっておくね。",
  literalJapanese: "大切になる記憶を、ぎゅっとぎゅっとしまっておきます。",
  sentenceExplanation:
    "これから二人で作る思い出が、あとで大切になると分かっているから、ちゃんと心にしまっておきたいと言っている。",
  nuance:
    "꼭 꼭 の繰り返しが可愛くて、相手との時間を壊したくない気持ちがにじむ。",
  roleInSong:
    "2番で『未来の二人の記憶』に視線が伸びるやさしい行。",
  grammarPoints: [
    {
      title: "-아/어 두다",
      meaning: "〜しておく",
      explanation:
        "ある結果の状態を保っておく形。담아두다 で『しまっておく』。",
      example: "적어 둘게",
      exampleJapanese: "書いておくね",
    },
  ],
  tokens: [
    ko("소중해질 기억을", "소중해질 기억", "大切になる思い出を", "大切になる記憶を、思い出を", {
      breakdown: "소중해지다 + -ㄹ + 기억 + -을",
      meaningInThisLine: "これから二人で作る大事な思い出。",
    }),
    ko("꼭 꼭", "꼭 꼭", "しっかりしっかり", "ぎゅっとぎゅっと、しっかりしっかり"),
    ko("담아둘게요", "담아두다", "しまっておくね", "しまっておくね、心に留めておくね", {
      breakdown: "담다 + -아 두다 + -ㄹ게요",
    }),
  ],
};

const line26Spec: LineSpec = {
  korean: "지금보다 더 아껴주세요",
  reading: "チグムボダ ト アッキョジュセヨ",
  japanese: "今よりもっと大切にしてね。",
  literalJapanese: "今よりもっと大切にしてください。",
  sentenceExplanation:
    "自分自身も、二人の関係も、これからは今よりもっと大切にしてほしいと願っている。",
  nuance:
    "強い要求ではなく、可愛くお願いする tone なのがこの曲らしい。",
  roleInSong:
    "約束のあとに続く、未来の二人への小さなお願い。",
  tokens: [
    ko("지금보다", "지금보다", "今より", "今より", {
      breakdown: "지금 + 보다",
    }),
    ko("더", "더", "もっと", "もっと"),
    ko("아껴주세요", "아끼다", "大切にしてください", "大切にしてください", {
      breakdown: "아끼다 + -아/어 주세요",
      meaningInThisLine: "自分や二人の関係を今以上に大事にしてほしいこと。",
    }),
  ],
};

const line27Spec: LineSpec = {
  korean: "달빛에 아른거리는",
  reading: "タルビチェ アルンゴリヌン",
  japanese: "月明かりにぼんやり揺れる。",
  literalJapanese: "月明かりにちらつく。",
  sentenceExplanation:
    "夜の柔らかい光の中で、気持ちや景色がぼんやり揺れて見える様子を描いている。",
  nuance:
    "昼の明るさより少し大人っぽくて、甘いのにどこか名残惜しい雰囲気がある。",
  roleInSong:
    "2番後半の景色を、昼の風から夜の月明かりへ変える一行。",
  tokens: [
    ko("달빛에", "달빛", "月明かりに", "月明かりに", {
      breakdown: "달빛 + -에",
    }),
    ko("아른거리는", "아른거리다", "ぼんやり揺れる", "ちらつく、ぼんやり揺れる", {
      breakdown: "아른거리다 + -는",
      meaningInThisLine: "恋の余韻で気持ちも景色もやさしく揺れること。",
    }),
  ],
};

const line28Spec: LineSpec = {
  korean: "구름처럼 아쉬운 시간만 가는데",
  reading: "クルムチョロム アスィウン シガンマン カヌンデ",
  japanese: "雲みたいに、名残惜しい時間ばかりが流れていくのに。",
  literalJapanese: "雲のように名残惜しい時間だけが過ぎていくのに。",
  sentenceExplanation:
    "もっと一緒にいたいのに、楽しくてやさしい時間ほどすぐ過ぎてしまう感覚を表している。",
  nuance:
    "아쉬운 시간 は『終わってほしくない時間』の切なさで、恋の甘さと名残惜しさが混ざる。",
  roleInSong:
    "関係が少し進んだあとに生まれる、『もっと一緒にいたい』気持ちの行。",
  tokens: [
    ko("구름처럼", "구름처럼", "雲のように", "雲のように", {
      breakdown: "구름 + -처럼",
    }),
    ko("아쉬운 시간만", "아쉬운 시간만", "名残惜しい時間だけ", "名残惜しい時間ばかり", {
      breakdown: "아쉽다 + -ㄴ + 시간 + -만",
    }),
    ko("가는데", "가다", "過ぎていくのに", "行くのに、過ぎていくのに", {
      breakdown: "가다 + -는데",
      meaningInThisLine: "幸せな時間が留まらず流れていくこと。",
    }),
  ],
};

const line29Spec: LineSpec = {
  korean: "둘 보단 하나 되어 서로를 느껴봐요",
  reading: "トゥル ボダン ハナ トェオ ソロルル ヌッキョバヨ",
  japanese: "二人別々ではなく、一つになってお互いを感じてみよう。",
  literalJapanese: "二つよりは一つになって、お互いを感じてみましょう。",
  sentenceExplanation:
    "一緒にいるだけでなく、心まで一つに近づいていきたいという願いを表している。",
  nuance:
    "前の 하나보단 둘이서 より関係が一歩深まっていて、二人が『一つ』になるイメージが出てくる。",
  roleInSong:
    "2番サビで、関係の理想像がさらに近い形へ進む部分。",
  tokens: [
    ko("둘 보단", "둘보다", "二つよりは", "二つよりは、二人別々よりは", {
      breakdown: "둘 + 보다 + 는",
    }),
    ko("하나 되어", "하나 되다", "一つになって", "一つになって", {
      breakdown: "하나 + 되다 + -어",
      meaningInThisLine: "心が通い合って一つの関係になること。",
    }),
    ko("서로를 느껴봐요", "서로를 느껴보다", "お互いを感じてみよう", "お互いを感じてみましょう", {
      breakdown: "서로 + -를 + 느끼다 + -어 보다 + -아요/어요",
    }),
  ],
};

const line36Spec: LineSpec = {
  korean: "감싸줄게요 그대 언제까지나 언제까지나",
  reading: "カムッサジュルケヨ クデ オンジェッカジナ オンジェッカジナ",
  japanese: "あなたを包み込んであげる。いつまでも、いつまでも。",
  literalJapanese: "包んであげます、あなたをいつまでも、いつまでも。",
  sentenceExplanation:
    "相手を優しく守り、ずっとそばで包み込んでいたいという愛情を、まっすぐに表している。",
  nuance:
    "『好き』から一歩進んで、『守る』『包む』というやさしい愛情の段階へ入っている。",
  roleInSong:
    "ブリッジで気持ちがいちばん大きく広がる場面。恋から深い愛情へ少し触れる。",
  grammarPoints: [
    {
      title: "-아/어 주다",
      meaning: "〜してあげる、〜してくれる",
      explanation:
        "相手のために何かをしてあげる気持ちを込める形。감싸주다 で『包んであげる』。",
      example: "지켜줄게",
      exampleJapanese: "守ってあげるよ",
    },
  ],
  tokens: [
    ko("감싸줄게요", "감싸주다", "包んであげるね", "包み込んであげるね、守ってあげるね", {
      breakdown: "감싸다 + -아/어 주다 + -ㄹ게요",
      meaningInThisLine: "相手をやさしく守りたい気持ち。",
    }),
    ko("그대", "그대", "あなた", "あなた", {
      explanation: "歌詞や詩でよく使う、少しロマンチックな『あなた』。",
    }),
    ko("언제까지나", "언제까지나", "いつまでも", "いつまでも"),
  ],
};

const line37Spec: LineSpec = {
  korean: "사랑이란 말 안 해도 느낄 수 있어요",
  reading: "サランイラン マル アン ヘド ヌッキル ス イッソヨ",
  japanese: "『愛してる』と言わなくても、感じられる。",
  literalJapanese: "愛という言葉を言わなくても、感じることができます。",
  sentenceExplanation:
    "ここまで一緒に積み重ねた気持ちがあれば、もう愛という言葉を直接言わなくても伝わると感じている。",
  nuance:
    "前半では告白したいと願っていたのに、ここでは言葉を越えた安心感に近づいているのが印象的。",
  roleInSong:
    "ブリッジで関係の深まりが見える一行。好きから愛へ少し届きかけている。",
  grammarPoints: [
    {
      title: "-이란",
      meaning: "〜という、〜というものは",
      explanation:
        "이다 + 는 が縮まったような形。사랑이란 말 で『愛という言葉』。",
      example: "행복이란 뭘까",
      exampleJapanese: "幸せとは何だろう",
    },
    {
      title: "안 ~해도",
      meaning: "〜しなくても",
      explanation:
        "하다 の否定を使った譲歩の形。말 안 해도 で『言わなくても』。",
      example: "안 가도 돼",
      exampleJapanese: "行かなくてもいい",
    },
  ],
  tokens: [
    ko("사랑이란 말", "사랑이란 말", "愛という言葉", "愛という言葉", {
      breakdown: "사랑 + -이란 + 말",
    }),
    ko("안 해도", "안 하다", "言わなくても", "しなくても、言わなくても", {
      breakdown: "안 + 하다 + -아/어도",
    }),
    ko("느낄 수 있어요", "느낄 수 있다", "感じられます", "感じることができます", {
      breakdown: "느끼다 + -ㄹ 수 있다 + -아요/어요",
      meaningInThisLine: "言葉以外でも愛情が伝わる段階に近づいていること。",
    }),
  ],
};

const line38Spec: LineSpec = {
  korean: "고마운 마음을 모아서",
  reading: "コマウン マウムル モアソ",
  japanese: "感謝の気持ちを集めて。",
  literalJapanese: "ありがたい心を集めて。",
  sentenceExplanation:
    "好きという気持ちだけでなく、相手がいてくれることへの感謝も一緒に届けようとしている。",
  nuance:
    "恋の高鳴りが、最後には少し落ち着いたやさしい愛情へ変わっている。",
  roleInSong:
    "ラスト前で感情が『ときめき』だけではなく『感謝』まで広がる行。",
  tokens: [
    ko("고마운 마음을", "고마운 마음", "感謝の気持ちを", "感謝の気持ちを", {
      breakdown: "고맙다 + -운 + 마음 + -을",
    }),
    ko("모아서", "모으다", "集めて", "集めて、まとめて", {
      breakdown: "모으다 + -아/어서",
      meaningInThisLine: "好きな気持ちと感謝を一つにして渡したいこと。",
    }),
  ],
};

const line40Spec: LineSpec = {
  korean: "오늘부터 우리는 꿈꾸며",
  reading: "オヌルブト ウリヌン クムックミョ",
  japanese: "今日から私たちは夢を見て。",
  literalJapanese: "今日から私たちは夢見ながら。",
  sentenceExplanation:
    "最後の繰り返しでは、最初の祈りと告白を受けて、二人の始まりをもう一度夢見直している。",
  nuance:
    "サビの終盤に来ると、最初の不安よりも希望のほうが少し勝って聞こえる。",
  roleInSong:
    "エンディングへ向かう反復。曲全体の明るさを保ちながら締める。",
  tokens: [
    ko("오늘부터 우리는", "오늘부터 우리는", "今日から私たちは", "今日から私たちは", {
      breakdown: "오늘 + -부터 + 우리 + -는",
    }),
    ko("꿈꾸며", "꿈꾸다", "夢見ながら", "夢見ながら", {
      breakdown: "꿈꾸다 + -며",
    }),
  ],
};

export const completeMeGustasTuLines: LyricLine[] = [
  line(1, line1Spec),
  line(2, line2Spec),
  line(3, line3Spec),
  line(4, line4Spec),
  line(5, line5Spec),
  line(6, line6Spec),
  line(7, { ...line7Spec, sectionBreakAfter: true }),
  line(8, line8Spec),
  line(9, line9Spec),
  line(10, line10Spec),
  line(11, line11Spec),
  line(12, line12Spec),
  line(13, line13Spec),
  line(14, line14Spec),
  line(15, line15Spec),
  line(16, { ...line16Spec, sectionBreakAfter: true }),
  line(17, line17Spec),
  line(18, line18Spec),
  line(19, line4Spec),
  line(20, line5Spec),
  line(21, line6Spec),
  line(22, { ...line7Spec, sectionBreakAfter: true }),
  line(23, line23Spec),
  line(24, line24Spec),
  line(25, line25Spec),
  line(26, line26Spec),
  line(27, line27Spec),
  line(28, line28Spec),
  line(29, line14Spec),
  line(30, line29Spec),
  line(31, { ...line16Spec, sectionBreakAfter: true }),
  line(32, line17Spec),
  line(33, line18Spec),
  line(34, line4Spec),
  line(35, line5Spec),
  line(36, line36Spec),
  line(37, line37Spec),
  line(38, line38Spec),
  line(39, line1Spec),
  line(40, line40Spec),
  line(41, line18Spec),
  line(42, line4Spec),
  line(43, line5Spec),
  line(44, line6Spec),
  line(45, line7Spec),
];

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

const en = (
  surface: string,
  base: string,
  shortMeaning: string,
  meaning: string,
  extra: Partial<TokenSpec> = {},
): TokenSpec => ({
  surface,
  base,
  language: "en",
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
  korean: "다른 문을 열어 따라 갈 필요는 없어",
  reading: "タルン ムヌル ヨロ ッタラ カル ピリョヌン オプソ",
  japanese: "誰かの道に合わせて、別の扉を開く必要なんてない。",
  literalJapanese: "別の扉を開いて、ついて行く必要はない。",
  sentenceExplanation:
    "他人が開いた扉や、誰かの進み方をそのままなぞる必要はないと言っている行。",
  nuance:
    "この曲の出発点になる自己肯定の言葉。『正解は外にある』のではなく、自分で道を選んでいいという強さがある。",
  roleInSong:
    "曲全体のテーマを最初に言い切る導入。『他人を追わない』という宣言がここで置かれる。",
  grammarPoints: [
    {
      title: "-ㄹ/을 필요는 없다",
      meaning: "〜する必要はない",
      explanation:
        "動詞の連体形 + 필요는 없다 で『〜する必要はない』。은/는 が入ることで『そこまでしなくていい』という対比も出る。",
      example: "걱정할 필요는 없어",
      exampleJapanese: "心配する必要はない",
    },
  ],
  tokens: [
    ko("다른", "다른", "別の", "他の、別の", {
      relatedWords: ["다르다", "또 다른"],
    }),
    ko("문을 열어", "문을 열다", "扉を開けて", "扉を開けて、別の入口を選んで", {
      breakdown: "문 + -을 + 열다",
      meaningInThisLine: "他人が用意した入口ではなく、新しい選択肢に手をかけること。",
    }),
    ko("따라 갈", "따라가다", "ついて行く", "ついて行く、後を追う", {
      breakdown: "따르다 + 가다",
      explanation:
        "歌詞では 띄어쓰기 されているが、ふつうは 따라갈 と続けて書くことが多い。",
      example: "남 따라가지 마",
      exampleJapanese: "人の真似をしてついて行かないで",
    }),
    ko("필요는 없어", "필요는 없다", "必要はない", "必要はない", {
      explanation:
        "은/는 が入ることで『必要はない』という強調になっている。",
      meaningInThisLine: "自分の生き方を決めるうえで、そこに縛られる必要はない。",
    }),
  ],
  sectionBreakAfter: true,
};

const line2Spec: LineSpec = {
  korean: "넌 너의 길로 난 나의 길로 음",
  reading: "ノン ノエ キルロ ナン ナエ キルロ ウム",
  japanese: "あなたはあなたの道を、私は私の道を行けばいい。",
  literalJapanese: "あなたはあなたの道へ、私は私の道へ。",
  sentenceExplanation:
    "相手を否定せず、それぞれの道をそのまま進めばいいと伝える一行。",
  nuance:
    "『私の方が正しい』ではなく、『人それぞれ道が違っていい』という自立したニュアンスがある。",
  roleInSong:
    "1行目の宣言を受けて、『私は私、あなたはあなた』と距離感を整えるフレーズ。",
  grammarPoints: [
    {
      title: "-로",
      meaning: "〜へ、〜の方向に",
      explanation:
        "名詞に付いて方向や手段を表す。길로 なら『道へ』『道の方向に』という感覚。",
      example: "집으로 가",
      exampleJapanese: "家へ行って",
    },
  ],
  tokens: [
    ko("넌", "너는", "あなたは", "あなたは", {
      explanation: "너는 の縮約形。",
    }),
    ko("너의 길로", "너의 길로", "あなたの道へ", "あなたの道へ、あなたのやり方で", {
      meaningInThisLine: "相手の人生や選択もそのまま尊重している表現。",
    }),
    ko("난", "나는", "私は", "私は", {
      explanation: "나는 の縮約形。",
    }),
    ko("나의 길로", "나의 길로", "私の道へ", "私の道へ、私のやり方で", {
      meaningInThisLine: "自分は自分の進み方で行く、という自己決定。",
    }),
    ko("음", "음", "うん、ん", "ハミングのようなつなぎの音"),
  ],
};

const line3Spec: LineSpec = {
  korean: "하루하루마다 색이 달라진 느낌",
  reading: "ハルハルマダ セギ タルラジン ヌッキム",
  japanese: "毎日少しずつ、景色の色が変わっていくような感じ。",
  literalJapanese: "一日一日ごとに色が変わった感じ。",
  sentenceExplanation:
    "日々が単調ではなく、毎日ちがう色を持って広がっていく感覚を表している。",
  nuance:
    "人生の変化を『色が変わる』ことで描いていて、不安というより前向きな変化として受け止めている。",
  roleInSong:
    "『自分の道』が単調ではなく、日々変化していることを色の比喩で見せる部分。",
  grammarPoints: [
    {
      title: "-마다",
      meaning: "〜ごとに",
      explanation:
        "名詞に付いて『〜ごとに』『〜するたびに』を表す。하루하루마다 で『毎日毎日ごとに』。",
      example: "주말마다 운동해",
      exampleJapanese: "週末ごとに運動する",
    },
  ],
  tokens: [
    ko("하루하루마다", "하루하루마다", "一日一日ごとに", "毎日毎日、一日ごとに", {
      explanation:
        "同じ語を重ねて、日々の積み重ねを強く見せる表現。",
      meaningInThisLine: "毎日ごとに少しずつ世界の見え方が変わっていくこと。",
    }),
    ko("색이 달라진", "색이 달라지다", "色が変わった", "色が変わっていく、景色が変化した", {
      breakdown: "색 + -이 + 달라지다",
      explanation:
        "달라지다 は『違うようになる』『変わる』。人生の変化を 색（色）で表している。",
    }),
    ko("느낌", "느낌", "感じ", "感じ、感覚"),
  ],
};

const line4Spec: LineSpec = {
  korean: "밝게 빛이 나는 길을 찾아",
  reading: "パルケ ピチ ナヌン キルル チャジャ",
  japanese: "明るく輝く道を探して。",
  literalJapanese: "明るく光が出る道を探して。",
  sentenceExplanation:
    "自分が光れる道、自分に合う進み方を探して進んでいく場面。",
  nuance:
    "前の『それぞれの道』を受けて、自分の進路を自分で選びにいく動きが見える。",
  roleInSong:
    "抽象的な自己肯定から一歩進んで、『どんな道を選ぶか』へ視線が向くライン。",
  grammarPoints: [
    {
      title: "-게",
      meaning: "〜く、〜に",
      explanation:
        "形容詞を副詞的にして様子を表す形。밝게 で『明るく』。",
      example: "예쁘게 웃어",
      exampleJapanese: "きれいに笑って",
    },
  ],
  tokens: [
    ko("밝게", "밝게", "明るく", "明るく、明るい状態で", {
      breakdown: "밝다 + -게",
    }),
    ko("빛이 나는", "빛이 나다", "輝く", "光が出る、輝く"),
    ko("길을", "길", "道を", "道を"),
    ko("찾아", "찾다", "探して", "探して、見つけようとして"),
  ],
  sectionBreakAfter: true,
};

const onMyWayBelieveSpec: LineSpec = {
  korean: "I'm on my way 넌 그냥 믿으면 돼",
  reading: "アイム オン マイ ウェイ ノン クニャン ミドゥミョン ドェ",
  japanese: "私はもう進んでいるから、ただ信じてくれればいい。",
  literalJapanese: "私は向かっている。あなたはただ信じればいい。",
  sentenceExplanation:
    "自分はすでに道の途中にいるから、相手にはその姿をそのまま信じてほしいという意味。",
  nuance:
    "細かい説明より、『見ていて』『信じていて』という自信が出ているフレーズ。",
  roleInSong:
    "サビの核になるメッセージ。『私は進んでいる』と『あなたは信じればいい』が対になっている。",
  grammarPoints: [
    {
      title: "-으면 돼",
      meaning: "〜すればいい",
      explanation:
        "条件形 + 되다 で『〜すればいい』『〜で大丈夫』を表す。日常会話でもとてもよく使う。",
      example: "기다리면 돼",
      exampleJapanese: "待てばいいよ",
    },
  ],
  tokens: [
    en("I'm on my way", "on my way", "自分の道を進んでいる", "私は今、自分の道を進んでいる", {
      meaningInThisLine: "もう迷いの外側ではなく、自分のルートの途中にいるという宣言。",
    }),
    ko("넌", "너는", "あなたは", "あなたは"),
    ko("그냥", "그냥", "ただ、そのまま", "ただ、そのまま、深く考えすぎずに"),
    ko("믿으면 돼", "믿으면 되다", "信じればいい", "信じればいい、信じてくれれば十分", {
      breakdown: "믿다 + -으면 + 되다",
      example: "천천히 하면 돼",
      exampleJapanese: "ゆっくりやればいいよ",
    }),
  ],
};

const onMyWayAsIsSpec: LineSpec = {
  korean: "I'm on my way 보이는 그대로야",
  reading: "アイム オン マイ ウェイ ボイヌン クデロヤ",
  japanese: "私はこのまま進んでいる。見えている姿がそのまま私。",
  literalJapanese: "私は向かっている。見えるそのままだ。",
  sentenceExplanation:
    "今見えている姿こそが本当の自分で、飾っていないという自己提示。",
  nuance:
    "『演じている私』ではなく、『見えているままが私』というまっすぐな自己肯定がある。",
  roleInSong:
    "サビのもう一つの柱。進んでいることだけでなく、『見えている私が本物』だと示す。",
  grammarPoints: [
    {
      title: "그대로",
      meaning: "そのまま",
      explanation:
        "変えずにその状態のまま、という意味。보이는 그대로 で『見えているまま』。",
      example: "이대로 가면 돼",
      exampleJapanese: "このまま行けばいい",
    },
    {
      title: "-는 그대로",
      meaning: "〜するそのまま",
      explanation:
        "動詞の現在連体形 + 그대로 で『〜しているそのまま』という意味。보이는 그대로 は『見えているまま』。",
      example: "들은 그대로 말해",
      exampleJapanese: "聞いたまま話して",
    },
  ],
  tokens: [
    en("I'm on my way", "on my way", "自分の道を進んでいる", "私は今、自分の道を進んでいる"),
    ko("보이는", "보이다", "見えている", "見えている、目に映る", {
      breakdown: "보다 + -이다",
      explanation:
        "보다（見る）から来た 보이다 は『見える』。보이는 は『見えている〜』という連体形。",
    }),
    ko("그대로야", "그대로이다", "そのままだ", "そのままだよ、その姿そのものだ", {
      breakdown: "그대로 + -야",
      meaningInThisLine: "飾っていない、今見えている自分がそのまま本当の私だということ。",
    }),
  ],
};

const dreamsLineSpec: LineSpec = {
  korean: "너는 누군가의 Dreams come true",
  reading: "ノヌン ヌグンガエ ドリームズ カム トゥルー",
  japanese: "あなたは誰かにとって、夢が叶ったような存在。",
  literalJapanese: "あなたは誰かの夢が叶ったもの。",
  sentenceExplanation:
    "聴いている相手にも向けて、『あなた自身も誰かにとって特別な存在だ』と伝える言葉。",
  nuance:
    "自分だけを鼓舞する曲ではなく、相手まで持ち上げてくれるのがこの曲のやさしさ。",
  roleInSong:
    "サビの中で視線が『私』から『あなた』へ向かう部分。聴き手まで肯定する。",
  grammarPoints: [
    {
      title: "-ㄴ가 / -는가",
      meaning: "〜か、誰か",
      explanation:
        "疑問や不定を表す語尾。누군가 は 누구（誰）+ -ㄴ가 で『誰か』になる。",
      example: "어딘가에 있어",
      exampleJapanese: "どこかにある",
    },
  ],
  tokens: [
    ko("너는", "너는", "あなたは", "あなたは"),
    ko("누군가의", "누군가의", "誰かの", "誰かの、ある人にとっての", {
      breakdown: "누구 + -ㄴ가 + -의",
      explanation:
        "누군가 は『誰か』、そこに -의 が付いて『誰かの』になる。",
    }),
    en("Dreams come true", "dreams come true", "夢が叶ったもの", "夢が叶うこと、夢の実現", {
      meaningInThisLine: "誰かが『こんな存在がいてくれたら』と願った夢そのもの。",
    }),
  ],
};

const dejaVuSpec: LineSpec = {
  korean: "제일 좋은 어느 날의 데자뷰",
  reading: "チェイル チョウン オヌ ナレ デジャヴ",
  japanese: "最高の日をもう一度見ているような感覚。",
  literalJapanese: "一番良いある日のデジャヴ。",
  sentenceExplanation:
    "夢のような未来の景色を、前にも見たことがある最高の日のように感じている表現。",
  nuance:
    "現実離れした理想ではなく、『どこか懐かしくて確かな未来』として描いているのが印象的。",
  roleInSong:
    "サビの中で未来のイメージを感覚的に広げる比喩パート。",
  tokens: [
    ko("제일 좋은", "제일 좋다", "一番良い", "最も良い、最高の"),
    ko("어느 날의", "어느 날의", "ある日の", "ある日の、いつかの一日の", {
      meaningInThisLine: "思い出の中にある、とても良い一日のような感触。",
    }),
    ko("데자뷰", "데자뷰", "デジャヴ", "デジャヴ、既視感"),
  ],
};

const strangeViewSpec: LineSpec = {
  korean: "머물고픈 어딘가의 낯선 뷰",
  reading: "モムルゴプン オディンガエ ナッソン ビュー",
  japanese: "ずっと眺めていたくなる、どこか知らない美しい景色。",
  literalJapanese: "留まりたいどこかの見慣れない景色。",
  sentenceExplanation:
    "まだ知らない未来なのに、なぜか惹かれてずっとそこにいたくなるような景色を表している。",
  nuance:
    "未知の未来への不安よりも、『見たことのない景色に惹かれる』期待感が強い。",
  roleInSong:
    "サビの風景描写を担う部分。未来を『知らない景色』として美しく見せている。",
  grammarPoints: [
    {
      title: "-고픈",
      meaning: "〜したい",
      explanation:
        "歌詞や詩でよく出る形で、ふつうの会話なら -고 싶은 に近い。머물고픈 で『留まりたい』。",
      example: "가고픈 곳",
      exampleJapanese: "行ってみたい場所",
    },
  ],
  tokens: [
    ko("머물고픈", "머물고 싶다", "留まりたい", "留まりたい、そこにいたい", {
      explanation:
        "머물다 + -고픈。会話なら 머물고 싶다 の方が自然。",
      relatedWords: ["머물다", "머무르다", "머물고 싶은"],
    }),
    ko("어딘가의", "어딘가의", "どこかの", "どこかの、どこかにある"),
    ko("낯선 뷰", "낯선 뷰", "見慣れない景色", "見慣れない景色、知らない眺め", {
      meaningInThisLine: "まだ行ったことがないのに、惹かれてしまう未来の眺め。",
    }),
  ],
};

const farAwaySpec: LineSpec = {
  korean: "I'll be far away",
  reading: "アイル ビー ファー アウェイ",
  japanese: "私はもっと遠くまで行く。",
  literalJapanese: "私は遠くへ行くだろう。",
  sentenceExplanation:
    "今の場所にとどまらず、もっと大きな世界へ進んでいく意思を短く強く言っている。",
  nuance:
    "距離そのものより、『ここでは終わらない』という伸びていく意志が大事なライン。",
  roleInSong:
    "サビの上昇感を一段引き上げるフレーズ。未来がさらに先へ伸びていく。",
  tokens: [
    en("I'll", "I will", "私は〜する", "私は〜するつもりだ、〜するだろう"),
    en("far away", "far away", "遠くへ", "遠くへ、もっと先へ"),
  ],
};

const thatsMySpec: LineSpec = {
  korean: "That's my",
  reading: "ザッツ マイ",
  japanese: "それが私の――",
  literalJapanese: "それが私の。",
  sentenceExplanation:
    "文を途中で切ることで、次の『Life』を強く印象づけている短いブリッジ。",
  nuance:
    "あえて言い切らずにつなぐことで、自分の人生観そのものを大きく見せている。",
  tokens: [
    en("That's", "that is", "それが〜だ", "それが〜だ"),
    en("my", "my", "私の", "私の"),
  ],
};

const galaxySpec: LineSpec = {
  korean: "Life is 아름다운 갤럭시",
  reading: "ライフ イズ アルムダウン ギャラクシー",
  japanese: "私の人生は、美しい銀河のように広がっている。",
  literalJapanese: "人生は美しい銀河。",
  sentenceExplanation:
    "人生を一本道ではなく、無数の星が広がる銀河としてイメージしている一行。",
  nuance:
    "可能性がいくつも散らばっている世界観で、この曲のスケール感がよく出ている。",
  roleInSong:
    "サビ後半の世界観を象徴する比喩。人生の広がりを一気に大きく見せる。",
  tokens: [
    en("Life is", "life is", "人生は〜だ", "人生は〜だ"),
    ko("아름다운", "아름답다", "美しい", "美しい、きれいな", {
      meaningInThisLine: "ただ広いだけでなく、きらめいて価値のある人生。",
    }),
    ko("갤럭시", "갤럭시", "銀河", "銀河、ギャラクシー", {
      meaningInThisLine: "無数の可能性が広がる大きな世界の比喩。",
    }),
  ],
};

const fantasySpec: LineSpec = {
  korean: "Be a writer 장르로는 판타지",
  reading: "ビー ア ライター ジャンルロヌン ファンタジー",
  japanese: "自分の物語を書くなら、ジャンルはファンタジー。",
  literalJapanese: "作家になって、ジャンルとしてはファンタジー。",
  sentenceExplanation:
    "自分の人生を自分で書く物語にたとえ、そのジャンルは夢の大きいファンタジーだと言っている。",
  nuance:
    "ただ現実を受け入れるのではなく、自分で物語を作っていく主体性がある。",
  roleInSong:
    "人生を『書くもの』として捉えることで、自分が作者である感覚を強く出している。",
  grammarPoints: [
    {
      title: "-로는",
      meaning: "〜としては",
      explanation:
        "名詞に付いて『〜としては』『〜の部類では』を表す。장르로는 판타지 で『ジャンルとしてはファンタジー』。",
      example: "취미로는 운동을 해",
      exampleJapanese: "趣味としては運動をしている",
    },
  ],
  tokens: [
    en("Be a writer", "be a writer", "書き手になれ", "書き手になれ、自分の物語を書く人になれ", {
      meaningInThisLine: "自分の人生のストーリーを他人任せにせず、自分で書くこと。",
    }),
    ko("장르로는", "장르로는", "ジャンルとしては", "ジャンルとしては"),
    ko("판타지", "판타지", "ファンタジー", "ファンタジー"),
  ],
};

const stageSpec: LineSpec = {
  korean: "내일 내게 열리는 건 Big big 스테이지",
  reading: "ネイル ネゲ ヨルリヌン ゴン ビッグ ビッグ ステージ",
  japanese: "明日、私の前に広がるのは大きなステージ。",
  literalJapanese: "明日、私に開かれるものは大きな大きなステージ。",
  sentenceExplanation:
    "未来を不安ではなく、自分が立つ大きな舞台として見ているライン。",
  nuance:
    "IVEらしい華やかな自己肯定が強く出る部分で、『未来は怖いものではなく開かれる舞台』と捉えている。",
  roleInSong:
    "サビの着地点。未来が『大きなステージ』として開くという華やかな自己像を置いている。",
  grammarPoints: [
    {
      title: "-는 건",
      meaning: "〜するものは、〜することは",
      explanation:
        "動詞の現在連体形 + 건(것은) で『〜するものは』を表す。열리는 건 は『開かれるものは』。",
      example: "중요한 건 계속하는 거야",
      exampleJapanese: "大事なのは続けることだよ",
    },
    {
      title: "-에게 / -게",
      meaning: "〜に",
      explanation:
        "내게 は 나에게 の縮約で『私に』。話し言葉では -에게 が短くなって -게 になることが多い。",
      example: "내게 말해 줘",
      exampleJapanese: "私に話してよ",
    },
  ],
  tokens: [
    ko("내일", "내일", "明日", "明日"),
    ko("내게 열리는 건", "내게 열리다 + 것은", "私に開かれるものは", "私の前に開かれるものは", {
      breakdown: "내게 + 열리다 + 것은",
      explanation:
        "내게 は『私に』、열리는 건 は『開かれるものは』。合わせて『私に開かれるものは』になる。",
      meaningInThisLine: "未来に向かって、自分の前に新しく現れてくるもの。",
    }),
    en("Big big", "big", "とても大きな", "大きな大きな、強調した言い方"),
    ko("스테이지", "스테이지", "ステージ", "ステージ、舞台"),
  ],
};

const whoIAmSpec: LineSpec = {
  korean: "So that is who I am",
  reading: "ソー ザット イズ フー アイ アム",
  japanese: "だから、それが私なんだ。",
  literalJapanese: "だから、それが私という人。",
  sentenceExplanation:
    "ここまでの道・銀河・ステージという自己像をひとまとめにして、『それこそが私』と宣言している。",
  nuance:
    "この曲の自己紹介のような締めで、揺らがないアイデンティティを見せる。",
  roleInSong:
    "サビ全体のまとめ。ここまで並べたすべての比喩を『私』へ回収する一言。",
  tokens: [
    en("So", "so", "だから", "だから"),
    en("that is", "that is", "それが〜だ", "それが〜だ"),
    en("who I am", "who I am", "私という人", "私が誰なのか、私という人"),
  ],
  sectionBreakAfter: true,
};

const lookAtMeSpec: LineSpec = {
  korean: "Look at me",
  reading: "ルック アット ミー",
  japanese: "私を見て。",
  literalJapanese: "私を見て。",
  sentenceExplanation:
    "変わっていく今の自分に視線を向けてほしいと呼びかける短いフレーズ。",
  nuance:
    "次の『Now』と合わせて『今の私』を見てほしい、という勢いを作っている。",
  tokens: [en("Look at me", "look at me", "私を見て", "私を見て")],
};

const nowSpec: LineSpec = {
  korean: "Now",
  reading: "ナウ",
  japanese: "今、この瞬間。",
  literalJapanese: "今。",
  sentenceExplanation:
    "過去ではなく、変化の途中にある『今』を切り取るための一語。",
  nuance:
    "時間の焦点を一気に現在へ寄せることで、次の変化した自分の描写が映える。",
  tokens: [en("Now", "now", "今", "今、この瞬間")],
};

const thrillingMeSpec: LineSpec = {
  korean: "어제랑 또 다른 짜릿한 나",
  reading: "オジェラン ット タルン ッチャリタン ナ",
  japanese: "昨日とは違う、胸が高鳴るような私。",
  literalJapanese: "昨日とはまた違う、刺激的な私。",
  sentenceExplanation:
    "昨日と同じ自分ではなく、毎日更新されていく刺激的な自分を描いている。",
  nuance:
    "自己肯定が固定ではなく変化型で、『昨日より新しい私』にわくわくしている感じがある。",
  roleInSong:
    "2番手前の高揚を作る部分。『今の私』が前よりアップデートされていることを見せる。",
  grammarPoints: [
    {
      title: "-랑",
      meaning: "〜と",
      explanation:
        "会話でよく使う『〜と』。어제랑 で『昨日と』の意味になっている。",
      example: "친구랑 영화 봤어",
      exampleJapanese: "友だちと映画を見た",
    },
  ],
  tokens: [
    ko("어제랑", "어제랑", "昨日と", "昨日と"),
    ko("또 다른", "또 다르다", "また違う", "また違う、さらに新しい"),
    ko("짜릿한 나", "짜릿한 나", "刺激的な私", "胸が高鳴るような私", {
      explanation:
        "짜릿하다 は『しびれる』『刺激的だ』『胸が高鳴る』という感覚的な言葉。",
    }),
  ],
};

const fearToThrillSpec: LineSpec = {
  korean: "두려운 모든 게 설레이게",
  reading: "トゥリョウン モドゥン ゲ ソルレイゲ",
  japanese: "怖かったものさえ、胸が弾むものに変わっていく。",
  literalJapanese: "怖いすべてのものが、ときめくように。",
  sentenceExplanation:
    "不安や恐怖が消えるというより、それすらワクワクに変わっていく感覚を表している。",
  nuance:
    "この曲の前向きさがよく出るところで、『怖さをエネルギーに変える』ような高揚がある。",
  roleInSong:
    "この曲のメンタル面をよく表す行。ネガティブを前進の熱量へ変換している。",
  grammarPoints: [
    {
      title: "-게",
      meaning: "〜く、〜するように",
      explanation:
        "状態や結果の方向を表す。설레이게 で『ときめくように』『胸が弾むように』。",
      example: "편하게 말해",
      exampleJapanese: "気楽に話して",
    },
  ],
  tokens: [
    ko("두려운", "두렵다", "怖い", "怖い、不安な"),
    ko("모든 게", "모든 것", "すべてが", "すべてのものが"),
    ko("설레이게", "설레다", "ときめくように", "胸が弾むように", {
      explanation:
        "標準形としては 설레게 がより一般的だが、歌詞では 설레이게 もよく出る。",
    }),
  ],
};

const skyHighSpec: LineSpec = {
  korean: "I'm in sky high OMG",
  reading: "アイム イン スカイ ハイ オーエムジー",
  japanese: "私は空高く舞い上がっている。信じられないくらいに。",
  literalJapanese: "私は空高くいる。なんてこと。",
  sentenceExplanation:
    "気分が一気に持ち上がって、視点そのものが高くなっている状態を英語で勢いよく言っている。",
  nuance:
    "理屈ではなくテンションの高さそのものを見せる行で、次の『小さいことが遠くなる』につながる。",
  roleInSong:
    "ブリッジの中で一気に高度が上がる瞬間を見せる、テンション重視の行。",
  tokens: [
    en("I'm in", "I am in", "私は〜の中にいる", "私は〜の中にいる"),
    en("sky high", "sky high", "空高く", "空高く、とても高いところに"),
    en("OMG", "oh my god", "なんてこと", "驚きや興奮を表す感嘆"),
  ],
};

const smallThingsFadeSpec: LineSpec = {
  korean: "사소한 건 다 아득해져 와",
  reading: "サソハン ゴン ダ アドゥケジョ ワ",
  japanese: "小さなことなんて、どんどん遠く感じていく。",
  literalJapanese: "些細なものはすべて遠くなってくる。",
  sentenceExplanation:
    "高い視点に立つことで、細かな不安や雑音がだんだん重要でなくなっていく様子。",
  nuance:
    "大きく飛んでいるからこそ、足元の小さなノイズが遠ざかっていくという爽快さがある。",
  roleInSong:
    "視点が上がった結果として、細かい悩みが遠のいていくことを示すライン。",
  grammarPoints: [
    {
      title: "-아/어지다",
      meaning: "〜になる",
      explanation:
        "形容詞や状態語に付いて変化を表す。아득해지다 で『遠くなる』『ぼんやりしていく』。",
      example: "밝아졌어",
      exampleJapanese: "明るくなった",
    },
    {
      title: "-아/어 오다",
      meaning: "〜してくる",
      explanation:
        "変化がこちらへ近づいてくる感じを表す。아득해져 와 は『遠くなってくる』という流れ。",
      example: "추워져 와",
      exampleJapanese: "寒くなってきた",
    },
  ],
  tokens: [
    ko("사소한 건", "사소한 것은", "些細なものは", "些細なものは、小さなことは"),
    ko("다", "다", "全部", "全部、すべて"),
    ko("아득해져 와", "아득해지다", "遠くなってくる", "遠く感じられてくる", {
      breakdown: "아득하다 + -아/어지다 + -아/어 오다",
      meaningInThisLine: "視野が広がって、細かい不安が自分から遠ざかっていくこと。",
    }),
  ],
};

const lookAtMeNowSpec: LineSpec = {
  korean: "Look at me now",
  reading: "ルック アット ミー ナウ",
  japanese: "今の私を見て。",
  literalJapanese: "今の私を見て。",
  sentenceExplanation:
    "変化した今の姿を、まっすぐ見てほしいと改めて呼びかけるフレーズ。",
  nuance:
    "『Look at me』よりも現在の勢いが強く、直後の『I'm on fire』を受ける助走になっている。",
  tokens: [en("Look at me now", "look at me now", "今の私を見て", "今の私を見て")],
};

const onFireSpec: LineSpec = {
  korean: "I'm on fire",
  reading: "アイム オン ファイア",
  japanese: "私は今、最高に勢いづいている。",
  literalJapanese: "私は燃えている。",
  sentenceExplanation:
    "火がついたように勢いに乗っている、自信と高揚を一言で押し出す行。",
  nuance:
    "比喩としての on fire で、『絶好調』『ノっている』という英語らしい熱量がある。",
  tokens: [
    en("I'm", "I am", "私は〜だ", "私は〜だ"),
    en("on fire", "on fire", "燃えている、絶好調", "燃えている、勢いに乗っている"),
  ],
  sectionBreakAfter: true,
};

const lostAtNightSpec: LineSpec = {
  korean: "어느 깊은 밤 길을 잃어도",
  reading: "オヌ キプン パム キルル イロド",
  japanese: "深い夜に道を見失ったとしても。",
  literalJapanese: "ある深い夜、道を失っても。",
  sentenceExplanation:
    "迷いや不安、孤独の場面を出しつつ、それでも止まらないという転換の入口になる行。",
  nuance:
    "ここだけ一瞬トーンが沈むが、次で『飛び上がれ』と切り返すための大事な影になっている。",
  roleInSong:
    "曲の後半で一度だけ迷いを認める部分。ここがあるからこそ、次の励ましが強く響く。",
  grammarPoints: [
    {
      title: "-아/어도",
      meaning: "〜しても",
      explanation:
        "譲歩を表す文法。잃어도 で『失っても』『迷っても』という意味になる。",
      example: "늦어도 괜찮아",
      exampleJapanese: "遅くても大丈夫",
    },
  ],
  tokens: [
    ko("어느 깊은 밤", "어느 깊은 밤", "ある深い夜", "ある深い夜、暗い時間"),
    ko("길을 잃어도", "길을 잃다", "道に迷っても", "道に迷っても、進路を見失っても", {
      breakdown: "길 + -을 + 잃다 + -어도",
    }),
  ],
};

const flyInsteadSpec: LineSpec = {
  korean: "차라리 날아올라 그럼 네가",
  reading: "チャラリ ナラオルラ クロム ネガ",
  japanese: "いっそ飛び上がればいい。そうすればあなたが――",
  literalJapanese: "いっそ飛び上がって。そうすればあなたが。",
  sentenceExplanation:
    "迷ったときに、地上で答えを探すのではなく視点ごと上げてしまえ、と背中を押す行。",
  nuance:
    "『道を探す』より『高さを変える』という発想が、この曲らしい大胆さになっている。",
  roleInSong:
    "後半の転換点。迷いから抜け出す方法として『飛ぶ』という発想を差し出している。",
  tokens: [
    ko("차라리", "차라리", "いっそ", "いっそ、むしろ"),
    ko("날아올라", "날아오르다", "飛び上がって", "飛び上がって、舞い上がって"),
    ko("그럼 네가", "그러면 네가", "そうすればあなたが", "そうすればあなたが", {
      explanation: "그럼 は 그러면 の縮約。",
    }),
  ],
};

const yourPathBecomesRoadSpec: LineSpec = {
  korean: "지나가는 대로 길이거든",
  reading: "チナガヌン デロ キリゴドゥン",
  japanese: "あなたが進んだ場所そのものが、道になるから。",
  literalJapanese: "通り過ぎる通りに道だから。",
  sentenceExplanation:
    "正しい道が先に存在するのではなく、自分が通った跡そのものが道になるという、この曲の核心。",
  nuance:
    "最初の『ついて行く必要はない』ときれいにつながる一番重要なメッセージライン。",
  roleInSong:
    "この曲の結論。自分が進むこと自体が道になるという、タイトル級に大事な行。",
  grammarPoints: [
    {
      title: "-는 대로",
      meaning: "〜する通りに、〜するままに",
      explanation:
        "動詞の連体形 + 대로 で『〜する通りに』『〜のままに』を表す。지나가는 대로 で『通っていく通りに』。",
      example: "본 대로 말해",
      exampleJapanese: "見た通りに話して",
    },
    {
      title: "-거든",
      meaning: "〜なんだよ、〜だから",
      explanation:
        "理由や説明をやわらかく強調する語尾。길이거든 で『道なんだよ』『道だから』という感じ。",
      example: "지금 바쁘거든",
      exampleJapanese: "今ちょっと忙しいんだよ",
    },
  ],
  tokens: [
    ko("지나가는 대로", "지나가는 대로", "進む通りに", "通っていく通りに、そのまま進むように", {
      meaningInThisLine: "進んだ場所、通った跡、その全部が自分のルートになっていくこと。",
    }),
    ko("길이거든", "길이다", "道なんだよ", "道なんだよ、道になるから", {
      breakdown: "길 + -이거든",
      example: "다 이유가 있거든",
      exampleJapanese: "全部ちゃんと理由があるんだよ",
    }),
  ],
};

const countSpec: LineSpec = {
  korean: "1 2 3",
  reading: "ワン ツー スリー",
  japanese: "1、2、3。",
  literalJapanese: "1、2、3。",
  sentenceExplanation:
    "ためらわず飛び出す前のカウントで、次の『Fly up』へ勢いをつけている。",
  nuance: "理屈より先に体を動かす瞬間のテンポ感を作る短い行。",
  tokens: [en("1 2 3", "1 2 3", "1、2、3", "1、2、3")],
};

const flyUpSpec: LineSpec = {
  korean: "Fly up",
  reading: "フライ アップ",
  japanese: "高く飛び上がって。",
  literalJapanese: "飛び上がって。",
  sentenceExplanation:
    "迷ったときこそ視野を上げて、自分の道を自分で切り開こうとする掛け声。",
  nuance:
    "ただの励ましではなく、『上から見れば道はできる』という曲の考え方を凝縮している。",
  roleInSong:
    "後半の行動スイッチ。考えるだけでなく、実際に跳ぶイメージへ変える掛け声。",
  tokens: [en("Fly up", "fly up", "飛び上がって", "高く飛び上がって")],
  sectionBreakAfter: true,
};

const hopeSomeoneSpec: LineSpec = {
  korean: "I hope you'd be someone's",
  reading: "アイ ホープ ユード ビー サムワンズ",
  japanese: "あなたも誰かにとって――",
  literalJapanese: "私はあなたが誰かの〜になることを願う。",
  sentenceExplanation:
    "ここでは願いの形になっていて、聴いている相手へバトンを渡すようなやさしい言い方になっている。",
  nuance:
    "前半の断定よりやわらかく、『あなたにもそうなってほしい』という祈りのトーンが出る。",
  roleInSong:
    "曲の視線が完全に聴き手へ向く部分。自分の自己肯定を相手へのエールへ広げている。",
  tokens: [
    en("I hope", "I hope", "願う", "私は願う"),
    en("you'd be", "you would be", "あなたが〜であること", "あなたが〜であること"),
    en("someone's", "someone's", "誰かの", "誰かの"),
  ],
};

const dreamsComeTrueOnlySpec: LineSpec = {
  korean: "Dreams come true",
  reading: "ドリームズ カム トゥルー",
  japanese: "夢が叶ったような存在になってほしい。",
  literalJapanese: "夢が叶ったもの。",
  sentenceExplanation:
    "前の行とつながって、『あなたも誰かの夢になる存在であってほしい』という願いが完成する。",
  nuance:
    "最初のサビでは自己肯定、ここでは他者へのエールに変わっているのが大きな違い。",
  roleInSong:
    "最後のサビに入る前の願いの核。相手を持ち上げながら曲を締めに向かわせる。",
  tokens: [
    en("Dreams come true", "dreams come true", "夢が叶う", "夢が叶うこと、夢の実現"),
  ],
};

export const completeIamLines: LyricLine[] = [
  line(1, line1Spec),
  line(2, line2Spec),
  line(3, line3Spec),
  line(4, line4Spec),
  line(5, onMyWayBelieveSpec),
  line(6, onMyWayAsIsSpec),
  line(7, dreamsLineSpec),
  line(8, dejaVuSpec),
  line(9, strangeViewSpec),
  line(10, farAwaySpec),
  line(11, thatsMySpec),
  line(12, galaxySpec),
  line(13, fantasySpec),
  line(14, stageSpec),
  line(15, whoIAmSpec),
  line(16, lookAtMeSpec),
  line(17, nowSpec),
  line(18, thrillingMeSpec),
  line(19, fearToThrillSpec),
  line(20, skyHighSpec),
  line(21, smallThingsFadeSpec),
  line(22, lookAtMeNowSpec),
  line(23, onFireSpec),
  line(24, onMyWayBelieveSpec),
  line(25, onMyWayAsIsSpec),
  line(26, dreamsLineSpec),
  line(27, dejaVuSpec),
  line(28, strangeViewSpec),
  line(29, farAwaySpec),
  line(30, thatsMySpec),
  line(31, galaxySpec),
  line(32, fantasySpec),
  line(33, stageSpec),
  line(34, whoIAmSpec),
  line(35, lostAtNightSpec),
  line(36, flyInsteadSpec),
  line(37, yourPathBecomesRoadSpec),
  line(38, countSpec),
  line(39, flyUpSpec),
  line(40, hopeSomeoneSpec),
  line(41, dreamsComeTrueOnlySpec),
  line(42, dejaVuSpec),
  line(43, strangeViewSpec),
  line(44, farAwaySpec),
  line(45, thatsMySpec),
  line(46, galaxySpec),
  line(47, fantasySpec),
  line(48, stageSpec),
  line(49, whoIAmSpec),
];

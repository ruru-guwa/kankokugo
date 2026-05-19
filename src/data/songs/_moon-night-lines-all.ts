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
  korean: "떨려오는 별빛 반짝이는데",
  reading: "トルリョオヌン ピョルビッ パンッチャギヌンデ",
  japanese: "胸を震わせる星明かりがきらめいているのに。",
  literalJapanese: "震えてくる星明かりがきらめいているのに。",
  sentenceExplanation:
    "美しく輝く夜空を見ながらも、その光が逆に自分の不安やときめきを強く揺らしてしまう場面。",
  nuance:
    "星明かりは本来ロマンチックなのに、ここでは胸の不安定さまで照らしてしまう。夜の美しさと恋の不安が同時にある。",
  roleInSong:
    "夜の世界観を開く導入。外の景色は輝いているのに、内側の心は揺れているという対比が最初に置かれる。",
  grammarPoints: [
    {
      title: "-아/어 오다",
      meaning: "〜してくる、〜してくるようになる",
      explanation:
        "変化や感情が自分の方へ迫ってくる感じを表す。떨려오다 で『震えてくる、どきどきしてくる』。",
      example: "생각나 오네",
      exampleJapanese: "思い出されてくるね",
    },
    {
      title: "-는데",
      meaning: "〜なのに、〜しているけど",
      explanation:
        "前の状況を置いて、後ろに対比や続きの気持ちを出す形。반짝이는데 で『きらめいているのに』。",
      example: "맑은데 추워",
      exampleJapanese: "晴れているのに寒い",
    },
  ],
  tokens: [
    ko("떨려오는", "떨려오다", "震えてくる", "震えてくる、胸が高鳴ってくる", {
      breakdown: "떨리다 + -어 오다",
      meaningInThisLine: "恋と不安がだんだん自分の中へ迫ってくる感覚。",
    }),
    ko("별빛", "별빛", "星明かり", "星明かり", {
      breakdown: "별 + 빛",
    }),
    ko("반짝이는데", "반짝이다", "きらめいているのに", "きらめいているのに", {
      breakdown: "반짝이다 + -는데",
    }),
  ],
};

const line2Spec: LineSpec = {
  korean: "넌 어디를 보고 있는지",
  reading: "ノン オディルル ポゴ インヌンジ",
  japanese: "あなたはどこを見つめているのだろう。",
  literalJapanese: "あなたはどこを見ているのか。",
  sentenceExplanation:
    "相手の視線や心が、自分ではなく別のどこかへ向いているのではないかと不安になっている。",
  nuance:
    "単に視線の話ではなく、『私を見ているの？ 別の誰かを見ているの？』という心の方向への不安がある。",
  roleInSong:
    "景色の描写から一気に相手の気持ちの不確かさへ入る行。",
  grammarPoints: [
    {
      title: "-는지",
      meaning: "〜なのか、〜しているのか",
      explanation:
        "内容がはっきり分からない時の疑問を表す形。보고 있는지 で『見ているのか』。",
      example: "왜 그런지 몰라",
      exampleJapanese: "なぜそうなのか分からない",
    },
  ],
  tokens: [
    ko("넌", "너는", "あなたは", "あなたは", {
      explanation: "너는 の縮約形。",
    }),
    ko("어디를", "어디", "どこを", "どこを", {
      breakdown: "어디 + -를",
    }),
    ko("보고 있는지", "보고 있다", "見ているのか", "見ているのか、見つめているのか", {
      breakdown: "보다 + -고 있다 + -는지",
      meaningInThisLine: "相手の気持ちの向きが分からないこと。",
    }),
  ],
};

const line3Spec: LineSpec = {
  korean: "금방이라도 사라질 것 같은데",
  reading: "クムバンイラド サラジル コッ カトゥンデ",
  japanese: "今にも消えてしまいそうなのに。",
  literalJapanese: "今すぐにでも消えてしまいそうなのに。",
  sentenceExplanation:
    "相手との関係も、自分の恋も、つかもうとした瞬間に消えてしまいそうな儚さを感じている。",
  nuance:
    "はっきり壊れたわけではないのに、とても不安定で輪郭が薄い感覚がある。",
  roleInSong:
    "相手への不確かさが、関係そのものの儚さとして見えてくる行。",
  grammarPoints: [
    {
      title: "-ㄹ/을 것 같다",
      meaning: "〜しそうだ、〜のようだ",
      explanation:
        "話し手の感覚的な推測を表す定番形。사라질 것 같다 で『消えそうだ』。",
      example: "비 올 것 같아",
      exampleJapanese: "雨が降りそうだ",
    },
  ],
  tokens: [
    ko("금방이라도", "금방이라도", "今すぐにでも", "今すぐにでも", {
      breakdown: "금방 + -이라도",
    }),
    ko("사라질 것 같은데", "사라질 것 같다", "消えそうなのに", "消えてしまいそうなのに", {
      breakdown: "사라지다 + -ㄹ 것 같다 + -는데",
      meaningInThisLine: "相手もこの関係もつかめず、失ってしまいそうな感覚。",
    }),
  ],
};

const line4Spec: LineSpec = {
  korean: "불을 켜줘 심장이 깜깜해",
  reading: "プルル キョジョ シムジャンイ カムカメ",
  japanese: "明かりを灯して。私の心は真っ暗だから。",
  literalJapanese: "明かりをつけて。心臓が真っ暗だ。",
  sentenceExplanation:
    "相手の気持ちが見えないせいで、自分の心の中まで暗闇みたいになっていると訴えている。",
  nuance:
    "심장 はここでは単なる臓器ではなく、感情の中心そのもの。『あなたが光をつけて』という切実さがある。",
  roleInSong:
    "夜の暗さがそのまま心の暗さになる、序盤の核心的な一行。",
  grammarPoints: [
    {
      title: "-아/어 주다",
      meaning: "〜してくれる、〜してあげる",
      explanation:
        "相手にしてほしい時や、相手のために何かする時に使う。켜줘 で『つけてよ、灯して』。",
      example: "기다려줘",
      exampleJapanese: "待っていてよ",
    },
  ],
  tokens: [
    ko("불을 켜줘", "불을 켜주다", "明かりをつけて", "明かりをつけて、灯して", {
      breakdown: "불 + -을 + 켜다 + -아/어 주다",
      meaningInThisLine: "相手の態度で、この暗い気持ちを照らしてほしいこと。",
    }),
    ko("심장이", "심장", "心が", "心臓が、心が", {
      breakdown: "심장 + -이",
    }),
    ko("깜깜해", "깜깜하다", "真っ暗だ", "真っ暗だ", {
      meaningInThisLine: "相手の気持ちが見えず、自分の心も見通せないこと。",
    }),
  ],
};

const line5Spec: LineSpec = {
  korean: "오늘도 기분은 시무룩해",
  reading: "オヌルド キブヌン シムルケ",
  japanese: "今日も気持ちは沈んだまま。",
  literalJapanese: "今日も気分はしょんぼりしている。",
  sentenceExplanation:
    "相手のことを考えるせいで、今日も明るくなれずに気分が沈んでいると語っている。",
  nuance:
    "大きく泣き崩れるのではなく、ずっと気持ちが晴れない『しょんぼり感』がこの曲らしい。",
  roleInSong:
    "夜だけでなく昼の気分まで引きずっていることを示す行。",
  tokens: [
    ko("오늘도", "오늘도", "今日も", "今日も", {
      breakdown: "오늘 + -도",
    }),
    ko("기분은", "기분", "気分は", "気分は", {
      breakdown: "기분 + -은",
    }),
    ko("시무룩해", "시무룩하다", "しょんぼりしている", "しょんぼりしている、沈んでいる", {
      meaningInThisLine: "相手への不安で元気が出ないこと。",
    }),
  ],
};

const line6Spec: LineSpec = {
  korean: "너의 마음 안에 있는 내 모습은",
  reading: "ノエ マウム アネ インヌン ネ モスブン",
  japanese: "あなたの心の中にいる私は。",
  literalJapanese: "あなたの心の中にある私の姿は。",
  sentenceExplanation:
    "自分が相手の心の中でどんな存在なのか、どんなふうに見えているのかを不安げに見つめている。",
  nuance:
    "『私の中のあなた』ではなく『あなたの中の私』を気にしているので、片思いの受け身な苦しさが強い。",
  roleInSong:
    "相手の内側にいる『自分像』を気にすることで、恋の不安がさらに深くなる部分。",
  tokens: [
    ko("너의 마음 안에", "너의 마음 안", "あなたの心の中に", "あなたの心の中に", {
      breakdown: "너 + -의 + 마음 + 안 + -에",
    }),
    ko("있는", "있다", "ある、いる", "ある、いる", {
      breakdown: "있다 + -는",
    }),
    ko("내 모습은", "내 모습", "私の姿は", "私の姿は、私のあり方は", {
      breakdown: "내 + 모습 + -은",
      meaningInThisLine: "相手にとって自分がどんな存在なのか。",
    }),
  ],
};

const line7Spec: LineSpec = {
  korean: "내 맘 같지 않아",
  reading: "ネ マム カッチ アナ",
  japanese: "私が思うような私ではないみたい。",
  literalJapanese: "私の心のようではない。",
  sentenceExplanation:
    "自分が思うほどには、相手の中の自分は大切でも近くもないのかもしれないと感じている。",
  nuance:
    "『期待通りじゃない』『私の温度と同じじゃない』という温度差の寂しさがある。",
  roleInSong:
    "自分の気持ちと相手の気持ちが揃っていないかもしれないと悟る行。",
  tokens: [
    ko("내 맘", "내 마음", "私の気持ち", "私の気持ち、私の心", {
      breakdown: "내 + 마음 → 맘",
    }),
    ko("같지 않아", "같지 않다", "同じじゃない", "同じじゃない、思うようではない", {
      breakdown: "같다 + -지 않다",
      meaningInThisLine: "自分の気持ちの大きさと相手の気持ちが釣り合っていないこと。",
    }),
  ],
};

const line8Spec: LineSpec = {
  korean: "어느 틈에 놓쳐버린 걸까",
  reading: "オヌ トゥメ ノッチョボリン ゴルカ",
  japanese: "いつの間に、すれ違ってしまったのだろう。",
  literalJapanese: "どの隙に逃してしまったのだろうか。",
  sentenceExplanation:
    "どこで関係がずれてしまったのか分からないまま、気づいたら大事なタイミングを逃したように感じている。",
  nuance:
    "原因が分からないまま失ってしまった感じが、後悔を強くしている。",
  roleInSong:
    "不安が『どう見られているか』から『いつ失ったのか』という後悔へ移る行。",
  grammarPoints: [
    {
      title: "-아/어 버리다",
      meaning: "〜してしまう",
      explanation:
        "完了や後悔、取り返しのつかなさを表す。놓쳐버리다 で『逃してしまう』。",
      example: "잊어버렸어",
      exampleJapanese: "忘れてしまった",
    },
    {
      title: "-ㄹ까 / -을까",
      meaning: "〜だろうか",
      explanation:
        "自分の中で問いかけるような語尾。걸까 は 것일까 の縮約。",
      example: "왜 그럴까",
      exampleJapanese: "どうしてだろう",
    },
  ],
  tokens: [
    ko("어느 틈에", "어느 틈에", "いつの間に", "いつの間に、どの隙に", {
      breakdown: "어느 + 틈 + -에",
    }),
    ko("놓쳐버린", "놓쳐버리다", "逃してしまった", "逃してしまった、見失ってしまった", {
      breakdown: "놓치다 + -어 버리다 + -ㄴ",
    }),
    ko("걸까", "것일까", "だろうか", "だろうか", {
      breakdown: "것일까 → 걸까",
    }),
  ],
};

const line9Spec: LineSpec = {
  korean: "좋아하는 만큼 별은 떠오르고",
  reading: "チョアハヌン マンクム ピョルン ットオルゴ",
  japanese: "好きな気持ちの分だけ、星は昇っていく。",
  literalJapanese: "好きな分だけ星は浮かび上がって。",
  sentenceExplanation:
    "相手を好きになるほど夜空の星も増えていくように感じる、感情と景色を重ねた詩的な一行。",
  nuance:
    "好きな気持ちが大きくなるほど夜の世界も広がる。ロマンチックだけど、その分だけ苦しさも深まる。",
  roleInSong:
    "恋心そのものが夜の景色を膨らませていくことを見せる行。",
  grammarPoints: [
    {
      title: "-는 만큼",
      meaning: "〜するほど、〜する分だけ",
      explanation:
        "程度の増加や比例を表す形。좋아하는 만큼 で『好きな分だけ』。",
      example: "원하는 만큼 해",
      exampleJapanese: "望むだけやって",
    },
  ],
  tokens: [
    ko("좋아하는 만큼", "좋아하는 만큼", "好きな分だけ", "好きな分だけ、好きなほど", {
      breakdown: "좋아하다 + -는 + 만큼",
      meaningInThisLine: "恋心が強くなるぶん、夜の景色も大きく見えること。",
    }),
    ko("별은", "별", "星は", "星は", {
      breakdown: "별 + -은",
    }),
    ko("떠오르고", "떠오르다", "昇って", "昇って、浮かび上がって", {
      breakdown: "떠오르다 + -고",
    }),
  ],
};

const line10Spec: LineSpec = {
  korean: "여전히 나는 어쩔 줄 모르고",
  reading: "ヨジョニ ナヌン オッチョル チュル モルゴ",
  japanese: "それでも私は、どうしたらいいか分からないまま。",
  literalJapanese: "相変わらず私はどうする術も分からず。",
  sentenceExplanation:
    "好きな気持ちは増していくのに、結局どう行動すればいいかは分からないままだと認めている。",
  nuance:
    "感情だけが大きくなって、行動の方法は見えない『恋の迷子』状態。",
  roleInSong:
    "夜の景色が広がっても、本人の迷いは解けないと示す部分。",
  tokens: [
    ko("여전히", "여전히", "相変わらず", "相変わらず、今でも"),
    ko("나는", "나", "私は", "私は", {
      breakdown: "나 + -는",
    }),
    ko("어쩔 줄 모르고", "어쩔 줄 모르다", "どうしたらいいか分からず", "どうすればいいか分からず", {
      breakdown: "어쩌다 + -ㄹ 줄 모르다 + -고",
      meaningInThisLine: "好きでも何も決められない状態。",
    }),
  ],
};

const line11Spec: LineSpec = {
  korean: "안개 속에 갇힌",
  reading: "アンゲ ソゲ カチン",
  japanese: "霧の中に閉じ込められたように。",
  literalJapanese: "霧の中に閉じ込められた。",
  sentenceExplanation:
    "何もはっきり見えない霧の中にいるみたいに、相手の気持ちも自分の進む先もぼやけている。",
  nuance:
    "暗闇よりもさらに輪郭のあいまいな不安。見えているようで見えない状態が出る。",
  roleInSong:
    "相手の言葉を読み取れない感覚を視覚的な比喩で置く行。",
  tokens: [
    ko("안개 속에", "안개 속", "霧の中に", "霧の中に", {
      breakdown: "안개 + 속 + -에",
    }),
    ko("갇힌", "갇히다", "閉じ込められた", "閉じ込められた", {
      breakdown: "갇히다 + -ㄴ",
      meaningInThisLine: "先が見えない不安に包まれていること。",
    }),
  ],
};

const line12Spec: LineSpec = {
  korean: "그 말투 속에 담긴",
  reading: "ク マルトゥ ソゲ タムギン",
  japanese: "あなたのその言い方に隠された。",
  literalJapanese: "その話し方の中に込められた。",
  sentenceExplanation:
    "相手の言葉そのものよりも、その言い方や口調の中に本音が隠れているのではと読もうとしている。",
  nuance:
    "片思いの時に、何気ない話し方やトーンまで深読みしてしまう感じがよく出ている。",
  roleInSong:
    "相手の気持ちを言葉の外側から読み取ろうとする部分。",
  tokens: [
    ko("그 말투 속에", "그 말투 속", "その話し方の中に", "その話し方の中に", {
      breakdown: "그 + 말투 + 속 + -에",
    }),
    ko("담긴", "담기다", "込められた", "込められた、隠された", {
      breakdown: "담다 + -기다 + -ㄴ",
      meaningInThisLine: "言葉に出されていない気持ち。",
    }),
  ],
};

const line13Spec: LineSpec = {
  korean: "도무지 알 수 없는",
  reading: "トムジ アル ス オムヌン",
  japanese: "どうしても分からない。",
  literalJapanese: "到底知ることのできない。",
  sentenceExplanation:
    "どれだけ考えても、相手の本当の気持ちはどうしても読み切れないと感じている。",
  nuance:
    "알 수 없다 よりも 도무지 が入ることで、『本当に全然分からない』という行き詰まりが強い。",
  roleInSong:
    "相手の言葉の中身を探っても結局分からないという、夜の迷いの頂点。",
  grammarPoints: [
    {
      title: "도무지",
      meaning: "どうしても、まったく",
      explanation:
        "否定と相性がよく、『本当に全然〜ない』という感じを強める副詞。",
      example: "도무지 모르겠어",
      exampleJapanese: "どうしても分からない",
    },
  ],
  tokens: [
    ko("도무지", "도무지", "どうしても", "どうしても、まったく"),
    ko("알 수 없는", "알 수 없다", "分からない", "知ることができない、分からない", {
      breakdown: "알다 + -ㄹ 수 없다 + -는",
      meaningInThisLine: "相手の本心だけはどうしても見えないこと。",
    }),
  ],
};

const line14Spec: LineSpec = {
  korean: "니가 생각나는 밤",
  reading: "ニガ センガンナヌン パム",
  japanese: "あなたのことを考えてしまう夜。",
  literalJapanese: "あなたが思い浮かぶ夜。",
  sentenceExplanation:
    "結局どれだけ考えても、夜になると相手のことばかり思い浮かんでしまうと締めている。",
  nuance:
    "夜は忘れようとしても思い出してしまう時間。タイトルの『밤』がここで感情と結びつく。",
  roleInSong:
    "1番のまとめ。分からないままでも、思い出さずにはいられない夜だと示す。",
  tokens: [
    ko("니가", "네가", "あなたが", "あなたが", {
      explanation: "구어体で 네가 が 니가 と発音・表記されることがある。",
    }),
    ko("생각나는", "생각나다", "思い出される", "思い出される、考えてしまう", {
      breakdown: "생각나다 + -는",
    }),
    ko("밤", "밤", "夜", "夜", {
      meaningInThisLine: "あなたを思い出してしまう時間そのもの。",
    }),
  ],
};

const line18Spec: LineSpec = {
  korean: "기다렸던 시간이 지나고",
  reading: "キダリョットン シガニ チナゴ",
  japanese: "待ち続けた時間が過ぎていき。",
  literalJapanese: "待っていた時間が過ぎて。",
  sentenceExplanation:
    "ずっと待っていた時間だけが流れていき、結局望んだ瞬間は来なかったように感じている。",
  nuance:
    "『待つ』が空振りに近い形で過ぎていくので、期待と空しさが混ざっている。",
  roleInSong:
    "サビ前で、ただ待つだけの恋がもう長く続いていることを示す行。",
  grammarPoints: [
    {
      title: "-던",
      meaning: "〜していた、以前の〜",
      explanation:
        "過去に続いていた状態を表す。기다렸던 で『待っていた』。",
      example: "바라던 순간",
      exampleJapanese: "願っていた瞬間",
    },
  ],
  tokens: [
    ko("기다렸던 시간이", "기다렸던 시간", "待っていた時間が", "待っていた時間が", {
      breakdown: "기다리다 + -었- + -던 + 시간 + -이",
    }),
    ko("지나고", "지나다", "過ぎて", "過ぎていって", {
      breakdown: "지나다 + -고",
      meaningInThisLine: "何も変わらないまま時間だけが流れていくこと。",
    }),
  ],
};

const line19Spec: LineSpec = {
  korean: "이제 보내줄게",
  reading: "イジェ ポネジュルケ",
  japanese: "もうあなたを見送るね。",
  literalJapanese: "もう手放してあげる。",
  sentenceExplanation:
    "もう諦めて相手を手放そう、と一度は自分に言い聞かせる瞬間。",
  nuance:
    "本心というより、自分を守るためにそう言い聞かせている感じが強い。",
  roleInSong:
    "サビの揺れの前半。諦めようとする意志が一度だけ前に出る。",
  tokens: [
    ko("이제", "이제", "もう、今は", "もう、今は"),
    ko("보내줄게", "보내주다", "見送るね", "送ってあげるね、手放してあげるね", {
      breakdown: "보내다 + -아/어 주다 + -ㄹ게",
      meaningInThisLine: "もう心の中から手放そうとする決意。",
    }),
  ],
};

const line20Spec: LineSpec = {
  korean: "아냐 아직은 너를 내 방에",
  reading: "アニャ アジグン ノルル ネ バンエ",
  japanese: "いや、まだあなたを私の部屋に。",
  literalJapanese: "いや、まだあなたを私の部屋に。",
  sentenceExplanation:
    "さっき『見送る』と言ったのに、すぐに『いや、まだ』と打ち消してしまう揺れが出ている。",
  nuance:
    "아냐 の一言だけで、諦めきれない本音が全部ひっくり返るのが印象的。",
  roleInSong:
    "この曲の核心。『諦めたい』と『まだ好きでいたい』が一瞬でぶつかる場所。",
  tokens: [
    ko("아냐", "아니야", "いや", "いや、違う", {
      explanation: "아니야 のくだけた形。",
    }),
    ko("아직은", "아직은", "まだは", "まだは、まだ今は", {
      breakdown: "아직 + -은",
    }),
    ko("너를", "너", "あなたを", "あなたを", {
      breakdown: "너 + -를",
    }),
    ko("내 방에", "내 방", "私の部屋に", "私の部屋に", {
      breakdown: "내 + 방 + -에",
      meaningInThisLine: "外へ送り出すのではなく、自分の内側の世界に残しておきたいこと。",
    }),
  ],
};

const line21Spec: LineSpec = {
  korean: "몰래 몰래 간직하고 싶은 밤",
  reading: "モルレ モルレ カンジカゴ シプン パム",
  japanese: "こっそり大切にしまっておきたい夜。",
  literalJapanese: "こっそりこっそり大事にしまっておきたい夜。",
  sentenceExplanation:
    "誰にも見せず、相手への気持ちを夜の中にこっそり閉じ込めて大切にしたいと願っている。",
  nuance:
    "諦めるより、隠してでも持ち続けたい。未練がとても静かで切ない形になっている。",
  roleInSong:
    "サビ前半の着地。手放すより『秘密にして残す』方を選んでしまう夜。",
  grammarPoints: [
    {
      title: "-고 싶다",
      meaning: "〜したい",
      explanation:
        "願望を表す基本形。간직하고 싶다 で『大切にしまっておきたい』。",
      example: "보고 싶어",
      exampleJapanese: "会いたい",
    },
  ],
  tokens: [
    ko("몰래 몰래", "몰래 몰래", "こっそりこっそり", "こっそりこっそり、ひそかに"),
    ko("간직하고 싶은", "간직하고 싶다", "大切にしまっておきたい", "大切にしまっておきたい、隠して持っていたい", {
      breakdown: "간직하다 + -고 싶다 + -ㄴ",
      meaningInThisLine: "相手への気持ちをまだ手放したくないこと。",
    }),
    ko("밤", "밤", "夜", "夜", {
      meaningInThisLine: "相手をこっそり抱えていたい時間。",
    }),
  ],
};

const line22Spec: LineSpec = {
  korean: "밤밤밤에 밤 하늘을 날아",
  reading: "パムパムパメ パム ハヌルル ナラ",
  japanese: "夜の夜空を飛んでいく。",
  literalJapanese: "夜、夜、夜に、夜空を飛んで。",
  sentenceExplanation:
    "現実では届かない相手のもとへ、せめて夜空を飛んで会いに行きたいような気持ちをリズムに乗せている。",
  nuance:
    "現実の重さから少し解き放たれて、夢や空想へ飛び出す感じがある。",
  roleInSong:
    "現実の迷いから、夜の幻想世界へ跳ぶサビのフック。",
  tokens: [
    ko("밤밤밤에", "밤밤밤에", "夜、夜、夜に", "夜、夜、夜に", {
      meaningInThisLine: "夜という時間の中へどんどん深く入っていく感覚。",
    }),
    ko("밤 하늘을 날아", "밤 하늘을 날다", "夜空を飛んで", "夜空を飛んで", {
      breakdown: "밤 하늘 + -을 + 날다",
      meaningInThisLine: "届かない相手のところへ想いだけでも飛ばしたいこと。",
    }),
  ],
};

const line23Spec: LineSpec = {
  korean: "As time time for the moon night",
  reading: "アズ タイム タイム フォー ザ ムーン ナイト",
  japanese: "月夜の時間が流れていくように。",
  literalJapanese: "時が、月夜の時間として。",
  sentenceExplanation:
    "夜の時間そのものがゆっくり流れていく中で、相手への想いが深まっていく感覚を英語で幻想的に重ねている。",
  nuance:
    "意味をはっきり説明するより、響きそのもので月夜の余韻を作っているライン。",
  roleInSong:
    "サビの幻想性を強めるフレーズ。現実から夢へ移る橋のような役割。",
  tokens: [
    en("As time", "as time", "時が流れるように", "時が流れるように", {
      trailingSpace: true,
    }),
    en("time for the moon night", "time for the moon night", "月夜の時間", "月夜の時間、月夜のための時間", {
      meaningInThisLine: "夜にだけ開く、相手を強く想ってしまう特別な時間。",
    }),
  ],
};

const line24Spec: LineSpec = {
  korean: "꿈 속에서 너를 만나",
  reading: "クム ソゲソ ノルル マンナ",
  japanese: "夢の中であなたに会って。",
  literalJapanese: "夢の中であなたに会って。",
  sentenceExplanation:
    "現実では会えないからこそ、せめて夢の中でなら相手に会いたいという願いを表している。",
  nuance:
    "この曲の『夜』は、孤独な時間であると同時に夢の中で会える可能性がある時間でもある。",
  roleInSong:
    "サビの幻想世界の着地。現実で届かない相手に夢の中で会いに行く。",
  tokens: [
    ko("꿈 속에서", "꿈 속", "夢の中で", "夢の中で", {
      breakdown: "꿈 + 속 + -에서",
    }),
    ko("너를", "너", "あなたを", "あなたを", {
      breakdown: "너 + -를",
    }),
    ko("만나", "만나다", "会って", "会って", {
      breakdown: "만나다 + -아/어",
      meaningInThisLine: "現実で会えない相手に夢の中だけでも会いたいこと。",
    }),
  ],
};

const line25Spec: LineSpec = {
  korean: "열렬한 사랑 고백 해볼까 (해볼까)",
  reading: "ヨルリョラン サラン コベク ヘボルカ ヘボルカ",
  japanese: "熱い愛の告白をしてみようかな。",
  literalJapanese: "熱烈な愛の告白をしてみようか。",
  sentenceExplanation:
    "夢の中でなら、現実では言えないほど大胆な愛の告白までしてみたいと想像している。",
  nuance:
    "現実より少し大胆になれるのは『夢の中』だから。かっこ内の繰り返しがためらいと可愛さを残す。",
  roleInSong:
    "サビの中で、現実では言えない本音がいちばんストレートに顔を出す部分。",
  grammarPoints: [
    {
      title: "-아/어 보다",
      meaning: "〜してみる",
      explanation:
        "実際に試したり、やってみたりする感覚を出す。해볼까 で『してみようか』。",
      example: "말해볼까",
      exampleJapanese: "言ってみようか",
    },
  ],
  tokens: [
    ko("열렬한 사랑", "열렬한 사랑", "熱い愛", "熱い愛、情熱的な愛", {
      breakdown: "열렬하다 + -ㄴ + 사랑",
    }),
    ko("고백 해볼까", "고백해보다", "告白してみようか", "告白してみようか", {
      breakdown: "고백하다 + -아/어 보다 + -ㄹ까",
      explanation: "歌詞では 띄어쓰기 されているが、ふつうは 고백해볼까 と続ける。",
      meaningInThisLine: "夢の中だけでも本音を全部言ってみたいこと。",
    }),
  ],
};

const line26Spec: LineSpec = {
  korean: "창문 너머로 너를",
  reading: "チャンムン ノモロ ノルル",
  japanese: "窓の向こうにいるあなたを。",
  literalJapanese: "窓の向こうへあなたを。",
  sentenceExplanation:
    "相手がすぐそばではなく、窓越しのように少し隔てられた場所にいる感覚を描いている。",
  nuance:
    "見えるのに届かない距離感が、この曲のもどかしさにぴったり重なる。",
  roleInSong:
    "夢と現実のあいだの距離感を、窓というイメージで見せる行。",
  tokens: [
    ko("창문 너머로", "창문 너머로", "窓の向こうへ", "窓の向こうへ、窓の向こうに", {
      breakdown: "창문 + 너머 + -로",
    }),
    ko("너를", "너", "あなたを", "あなたを", {
      breakdown: "너 + -를",
    }),
  ],
};

const line27Spec: LineSpec = {
  korean: "계속 불러보고 있어",
  reading: "ケソク プルロボゴ イッソ",
  japanese: "何度も呼び続けている。",
  literalJapanese: "ずっと呼んでみている。",
  sentenceExplanation:
    "相手に届くか分からないままでも、名前や存在を何度も呼んでしまうほど気持ちが募っている。",
  nuance:
    "声が届く保証はないのに、やめられない。未練と願いが混ざっている。",
  roleInSong:
    "サビ後半で、ただ夢見るだけでなく相手へ呼びかける行動が加わる部分。",
  tokens: [
    ko("계속", "계속", "ずっと", "ずっと、 계속"),
    ko("불러보고 있어", "불러보고 있다", "呼んでみている", "呼んでみている、呼び続けている", {
      breakdown: "부르다 + -어 보다 + -고 있다",
      meaningInThisLine: "届くか分からなくても相手を呼ばずにいられないこと。",
    }),
  ],
};

const line28Spec: LineSpec = {
  korean: "이렇게 너랑 나",
  reading: "イロッケ ノラン ナ",
  japanese: "こうしてあなたと私。",
  literalJapanese: "こうしてあなたと私。",
  sentenceExplanation:
    "いま自分が夢見ている二人の形を、そっと目の前に置き直している短い一行。",
  nuance:
    "長い説明より、『あなたと私』だけで十分に距離の変化を感じさせる。",
  roleInSong:
    "二人の関係そのものへ視線を戻すつなぎのフレーズ。",
  tokens: [
    ko("이렇게", "이렇게", "こうして", "こうして、このように"),
    ko("너랑 나", "너랑 나", "あなたと私", "あなたと私", {
      breakdown: "너 + -랑 + 나",
    }),
  ],
};

const line29Spec: LineSpec = {
  korean: "우리 둘의 사이가",
  reading: "ウリ トゥレ サイガ",
  japanese: "私たち二人の距離が。",
  literalJapanese: "私たち二人の間が。",
  sentenceExplanation:
    "相手との関係が、ただの知り合いのままではなく、もう少し変わってほしいと願っている。",
  nuance:
    "사이 は単なる距離ではなく、関係性そのものを含む言葉。",
  roleInSong:
    "相手との『あいだ』を意識して願いを具体化する部分。",
  tokens: [
    ko("우리 둘의", "우리 둘", "私たち二人の", "私たち二人の", {
      breakdown: "우리 둘 + -의",
    }),
    ko("사이가", "사이", "間が、関係が", "間が、関係が", {
      breakdown: "사이 + -가",
      meaningInThisLine: "二人の距離や関係性そのもの。",
    }),
  ],
};

const line30Spec: LineSpec = {
  korean: "조금 더 좁혀지길",
  reading: "チョグム ト チョピョジギル",
  japanese: "もう少し近づくことを。",
  literalJapanese: "少しもっと狭まることを。",
  sentenceExplanation:
    "二人の距離や関係が、あと少しだけでも近くなってくれたらと願っている。",
  nuance:
    "一気に結ばれたいというより、『少しでも近づけたら』という慎ましい願い方。",
  roleInSong:
    "サビ後半の願いの核心。現実的で小さな希望を言葉にしている。",
  grammarPoints: [
    {
      title: "-길",
      meaning: "〜することを",
      explanation:
        "願い・期待の内容を表す形。좁혀지길 で『縮まることを』。",
      example: "잘되길 바래",
      exampleJapanese: "うまくいくことを願う",
    },
  ],
  tokens: [
    ko("조금 더", "조금 더", "もう少し", "もう少し"),
    ko("좁혀지길", "좁혀지길", "縮まることを", "縮まることを、近づくことを", {
      breakdown: "좁히다 + -어지다 + -길",
      meaningInThisLine: "二人の心の距離が少しでも近づくこと。",
    }),
  ],
};

const line31Spec: LineSpec = {
  korean: "기대하고 싶은 밤",
  reading: "キデハゴ シプン パム",
  japanese: "願っていたい夜。",
  literalJapanese: "期待していたい夜。",
  sentenceExplanation:
    "不安ばかりの夜でも、それでも少しだけ期待していたいと自分に許している。",
  nuance:
    "確信ではなく期待なのが切ない。でも完全には諦めていない。",
  roleInSong:
    "サビ後半の着地。不安の夜を『期待したい夜』へ少しだけ変える行。",
  tokens: [
    ko("기대하고 싶은", "기대하고 싶다", "期待していたい", "期待していたい、願っていたい", {
      breakdown: "기대하다 + -고 싶다 + -ㄴ",
    }),
    ko("밤", "밤", "夜", "夜", {
      meaningInThisLine: "不安でもまだ期待を捨てきれない時間。",
    }),
  ],
};

const line36Spec: LineSpec = {
  korean: "이제 보내줄게 아냐",
  reading: "イジェ ポネジュルケ アニャ",
  japanese: "もう見送るね、いや。",
  literalJapanese: "もう手放してあげる、いや。",
  sentenceExplanation:
    "見送ろうと決めたはずなのに、最後の最後で『いや』とすぐ打ち消してしまう揺れがさらに強くなる。",
  nuance:
    "前のサビよりも迷いがむき出しで、諦めきれない本音がほとんど勝っている。",
  roleInSong:
    "曲の感情的な核心が再び現れる変化形。諦めと未練のせめぎ合いがもっとはっきり出る。",
  tokens: [
    ko("이제 보내줄게", "보내주다", "もう見送るね", "もう見送るね、手放すね", {
      breakdown: "이제 + 보내다 + -아/어 주다 + -ㄹ게",
    }),
    ko("아냐", "아니야", "いや", "いや、違う", {
      meaningInThisLine: "やっぱりまだ手放したくないという即座の反転。",
    }),
  ],
};

const line37Spec: LineSpec = {
  korean: "아직은 너를 내방에",
  reading: "アジグン ノルル ネバンエ",
  japanese: "まだあなたを私の部屋に。",
  literalJapanese: "まだあなたを私の部屋に。",
  sentenceExplanation:
    "今度は 띄어쓰기 も崩れたまま、まだ相手を自分の内側の部屋に置いておきたい気持ちがそのまま出ている。",
  nuance:
    "言葉が整い切らないぶん、本音がそのままこぼれている感じがある。",
  roleInSong:
    "再び『内側に残したい』未練が出る反復行。",
  tokens: [
    ko("아직은", "아직은", "まだは", "まだは、まだ今は", {
      breakdown: "아직 + -은",
    }),
    ko("너를", "너", "あなたを", "あなたを", {
      breakdown: "너 + -를",
    }),
    ko("내방에", "내방에", "私の部屋に", "私の部屋に", {
      explanation: "標準的には 내 방에 と分けて書くことが多い。",
      meaningInThisLine: "まだ心の中にしまっておきたい相手。",
    }),
  ],
};

const line38Spec: LineSpec = {
  korean: "몰래 몰래 간직하고 싶어",
  reading: "モルレ モルレ カンジカゴ シポ",
  japanese: "こっそり大切にしまっておきたい。",
  literalJapanese: "こっそりこっそり大事にしまっておきたい。",
  sentenceExplanation:
    "『夜』すら省いて、残したい気持ちそのものだけが強く前へ出ているライン。",
  nuance:
    "もう場所や時間の話ではなく、『ただ残したい』という気持ちが直接聞こえる。",
  roleInSong:
    "2回目サビの締め。未練がよりはっきりした形で残る。",
  tokens: [
    ko("몰래 몰래", "몰래 몰래", "こっそりこっそり", "こっそりこっそり"),
    ko("간직하고 싶어", "간직하고 싶다", "大切にしまっておきたい", "大切にしまっておきたい", {
      breakdown: "간직하다 + -고 싶다",
      meaningInThisLine: "相手をまだ心の中に残しておきたいこと。",
    }),
  ],
};

const line39Spec: LineSpec = {
  korean: "다가가기엔 너의 맘이",
  reading: "タガガギエン ノエ マミ",
  japanese: "近づくには、あなたの気持ちが。",
  literalJapanese: "近づくには、あなたの心が。",
  sentenceExplanation:
    "自分が近づくためには、相手の気持ちがまだはっきりしないことが大きな壁になっていると言っている。",
  nuance:
    "自分の勇気だけでは越えられない、『相手の気持ちの不透明さ』がここで正面から出る。",
  roleInSong:
    "後半の本音。諦めきれない一方で、近づく根拠がまだないと認める行。",
  grammarPoints: [
    {
      title: "-기엔",
      meaning: "〜するには",
      explanation:
        "〜하기에는 の縮まった形。条件としては少し難しい、という含みを持つ。다가가기엔 で『近づくには』。",
      example: "믿기엔 어려워",
      exampleJapanese: "信じるには難しい",
    },
  ],
  tokens: [
    ko("다가가기엔", "다가가기에는", "近づくには", "近づくには", {
      breakdown: "다가가다 + -기에는",
    }),
    ko("너의 맘이", "너의 마음", "あなたの気持ちが", "あなたの気持ちが", {
      breakdown: "너 + -의 + 마음 → 맘 + -이",
      meaningInThisLine: "相手の本心がまだ見えていないこと。",
    }),
  ],
};

const line40Spec: LineSpec = {
  korean: "확실하지 않아",
  reading: "ファクシラジ アナ",
  japanese: "まだはっきり分からない。",
  literalJapanese: "確かではない。",
  sentenceExplanation:
    "相手が自分をどう思っているのか、確かな手応えがないと静かに言っている。",
  nuance:
    "否定は強くないけれど、それだけに確信のなさがじわっと重い。",
  roleInSong:
    "近づけない理由が『相手の気持ちの不確かさ』だと短く言い切る部分。",
  tokens: [
    ko("확실하지 않아", "확실하지 않다", "はっきりしない", "はっきりしない、確かではない", {
      breakdown: "확실하다 + -지 않다",
      meaningInThisLine: "相手の気持ちに確信が持てないこと。",
    }),
  ],
};

const line41Spec: LineSpec = {
  korean: "망설여지지만 여기 있기엔",
  reading: "マンソリョジジマン ヨギ イッキエン",
  japanese: "ためらってしまうけれど、このままでいるには。",
  literalJapanese: "ためらわれるけれど、ここにいるには。",
  sentenceExplanation:
    "動くのは怖いけれど、かといってこの距離のまま立ち止まっているのももう苦しいと感じている。",
  nuance:
    "迷いながらも、現状維持だけはもうできないところまで感情が進んでいる。",
  roleInSong:
    "後半の揺れが、停滞を超えて『このままではいられない』へ変わる行。",
  grammarPoints: [
    {
      title: "-지만",
      meaning: "〜だけど、〜けれど",
      explanation:
        "前の気持ちを認めながら、その先に別の本音を続ける。망설여지지만 で『ためらうけれど』。",
      example: "무섭지만 갈래",
      exampleJapanese: "怖いけど行く",
    },
  ],
  tokens: [
    ko("망설여지지만", "망설여지지만", "ためらってしまうけれど", "ためらってしまうけれど", {
      breakdown: "망설여지다 + -지만",
    }),
    ko("여기 있기엔", "여기 있기에는", "ここにいるには", "ここにいるには、このままでいるには", {
      breakdown: "여기 있다 + -기에는",
      meaningInThisLine: "今の距離感のまま止まっていること。",
    }),
  ],
};

const line42Spec: LineSpec = {
  korean: "너무 좋아져버린 내 맘",
  reading: "ノム チョアジョボリン ネ マム",
  japanese: "私の心は、あなたを好きになりすぎてしまった。",
  literalJapanese: "あまりにも好きになってしまった私の心。",
  sentenceExplanation:
    "もう気持ちが深くなりすぎて、元の場所へ戻れないところまで来てしまったと認めている。",
  nuance:
    "좋아져버린 の -버리다 が、『もうどうしようもない』取り返しのつかなさを強くする。",
  roleInSong:
    "諦めきれない理由が、単純に『好きになりすぎてしまったから』だと出る本音の中心。",
  grammarPoints: [
    {
      title: "-아/어 버리다",
      meaning: "〜してしまう",
      explanation:
        "完了や後悔、やりきってしまった感じを出す。좋아져버리다 で『好きになってしまう』。",
      example: "울어버렸어",
      exampleJapanese: "泣いてしまった",
    },
  ],
  tokens: [
    ko("너무", "너무", "あまりにも", "あまりにも、とても"),
    ko("좋아져버린", "좋아져버리다", "好きになってしまった", "好きになってしまった", {
      breakdown: "좋아지다 + -어 버리다 + -ㄴ",
      meaningInThisLine: "気持ちがもう後戻りできないほど大きくなったこと。",
    }),
    ko("내 맘", "내 마음", "私の気持ち", "私の心、私の気持ち", {
      breakdown: "내 + 마음 → 맘",
    }),
  ],
};

const line43Spec: LineSpec = {
  korean: "볼 수 없으니까",
  reading: "ポル ス オプスニカ",
  japanese: "もう会えないから。",
  literalJapanese: "見ることができないから。",
  sentenceExplanation:
    "このまま黙っていたら、相手に会うことも確かめることもできないまま終わってしまうと感じている。",
  nuance:
    "行動したい理由が、希望よりも『失う怖さ』から来ているのが切ない。",
  roleInSong:
    "迷いの先で、黙っていることの痛みがはっきり理由になる行。",
  grammarPoints: [
    {
      title: "-니까",
      meaning: "〜だから",
      explanation:
        "理由や根拠を表す形。없으니까 で『ないから』。",
      example: "늦었으니까 가자",
      exampleJapanese: "遅いから行こう",
    },
  ],
  tokens: [
    ko("볼 수 없으니까", "볼 수 없다", "見られないから", "見ることができないから、会えないから", {
      breakdown: "보다 + -ㄹ 수 없다 + -니까",
      meaningInThisLine: "このままでは相手に届けないし会えないこと。",
    }),
  ],
};

const line44Spec: LineSpec = {
  korean: "지금이 며칠째 훌쩍이는데",
  reading: "チグミ ミョチルッチェ フルッチョギヌンデ",
  japanese: "もう何日も泣いているのに。",
  literalJapanese: "今が何日目か、すすり泣いているのに。",
  sentenceExplanation:
    "相手を思って泣く夜が一日では終わらず、何日も続いていることを表している。",
  nuance:
    "훌쩍이다 は大声で泣くより、鼻をすすったり静かに泣いたりする感じで、この曲の切なさに合う。",
  roleInSong:
    "後半で未練が時間の長さを持ち始める行。夜の孤独が積み重なっている。",
  tokens: [
    ko("지금이 며칠째", "지금이 며칠째", "もう何日も", "もう何日も、今が何日目か", {
      meaningInThisLine: "苦しい夜が何日も続いていること。",
    }),
    ko("훌쩍이는데", "훌쩍이다", "すすり泣いているのに", "すすり泣いているのに", {
      breakdown: "훌쩍이다 + -는데",
      explanation: "静かに鼻をすすりながら泣くような感じ。",
    }),
  ],
};

const line45Spec: LineSpec = {
  korean: "넌 어디로 가고 있는지",
  reading: "ノン オディロ カゴ インヌンジ",
  japanese: "あなたはどこへ向かっているのだろう。",
  literalJapanese: "あなたはどこへ行っているのか。",
  sentenceExplanation:
    "相手の視線だけでなく、人生や気持ちの向かう先まで自分には見えないと感じている。",
  nuance:
    "序盤の 어디를 よりも、こちらは『どこへ行くのか』なので、関係の行き先まで見失っている感じがある。",
  roleInSong:
    "終盤で、相手の心だけでなく未来の方向まで分からない不安が広がる行。",
  tokens: [
    ko("넌", "너는", "あなたは", "あなたは", {
      explanation: "너는 の縮約形。",
    }),
    ko("어디로", "어디로", "どこへ", "どこへ", {
      breakdown: "어디 + -로",
    }),
    ko("가고 있는지", "가고 있다", "行っているのか", "向かっているのか、行っているのか", {
      breakdown: "가다 + -고 있다 + -는지",
      meaningInThisLine: "相手が自分ではないどこかへ進んでいくのではという不安。",
    }),
  ],
};

const line46Spec: LineSpec = {
  korean: "당장이라도 따라가고 싶은데",
  reading: "タンジャンイラド ッタラガゴ シプンデ",
  japanese: "今すぐにでも追いかけたいのに。",
  literalJapanese: "今すぐにでもついて行きたいのに。",
  sentenceExplanation:
    "相手がどこへ行くとしても、今すぐ追いかけて確かめたいほど気持ちが強くなっている。",
  nuance:
    "理性より衝動が前に出ていて、好きという気持ちがかなり切羽詰まっている。",
  roleInSong:
    "終盤で受け身の恋が、追いかけたい衝動へ変わる行。",
  tokens: [
    ko("당장이라도", "당장이라도", "今すぐにでも", "今すぐにでも", {
      breakdown: "당장 + -이라도",
    }),
    ko("따라가고 싶은데", "따라가고 싶다", "ついて行きたいのに", "追いかけたいのに、ついて行きたいのに", {
      breakdown: "따라가다 + -고 싶다 + -ㄴ데",
      meaningInThisLine: "相手を失いたくなくて、今すぐ追いかけたくなること。",
    }),
  ],
};

const line47Spec: LineSpec = {
  korean: "기다렸던 순간",
  reading: "キダリョットン スンガン",
  japanese: "待ち続けていた瞬間。",
  literalJapanese: "待っていた瞬間。",
  sentenceExplanation:
    "ずっと心の中で待っていた決定的な瞬間が来たはずなのに、それもまた夜の中で流れていくように感じている。",
  nuance:
    "期待していた『瞬間』が、喜びではなく切なさの文脈で出るのが印象的。",
  roleInSong:
    "ラスト前で、長く待ったものが何だったのかを短く振り返る行。",
  tokens: [
    ko("기다렸던", "기다리다", "待っていた", "待っていた", {
      breakdown: "기다리다 + -었- + -던",
    }),
    ko("순간", "순간", "瞬間", "瞬間"),
  ],
};

const line48Spec: LineSpec = {
  korean: "오늘이 모두 다 지나고",
  reading: "オヌリ モドゥ タ チナゴ",
  japanese: "今日という日がすべて過ぎ去って。",
  literalJapanese: "今日がすべて全部過ぎて。",
  sentenceExplanation:
    "一日が丸ごと過ぎても、相手を思う気持ちだけは終わらないことを描いている。",
  nuance:
    "오늘이 다 지나고 には、今日という時間を全部使ってもなお残る未練がある。",
  roleInSong:
    "夜が一日の終わりと重なり、恋の余韻だけが残る部分。",
  tokens: [
    ko("오늘이", "오늘", "今日が", "今日が", {
      breakdown: "오늘 + -이",
    }),
    ko("모두 다", "모두 다", "全部", "全部、すべて"),
    ko("지나고", "지나다", "過ぎて", "過ぎ去って", {
      breakdown: "지나다 + -고",
      meaningInThisLine: "今日という時間が全部終わること。",
    }),
  ],
};

const line49Spec: LineSpec = {
  korean: "하염없이 너를 쫓았던 밤",
  reading: "ハヨモプシ ノルル ッチョタットン パム",
  japanese: "果てしなくあなたを追いかけていた夜。",
  literalJapanese: "とめどなくあなたを追いかけた夜。",
  sentenceExplanation:
    "終わりなく相手のことばかり追いかけ、考え、気持ちを向けてしまっていた夜を振り返っている。",
  nuance:
    "하염없이 には『きりなく、むなしく、果てしなく』という少し空しい響きもある。",
  roleInSong:
    "ラストの夜の総括。未練の夜がどれほど長く、果てしなかったかを言う行。",
  tokens: [
    ko("하염없이", "하염없이", "果てしなく", "果てしなく、とめどなく"),
    ko("너를", "너", "あなたを", "あなたを", {
      breakdown: "너 + -를",
    }),
    ko("쫓았던", "쫓다", "追いかけていた", "追いかけていた", {
      breakdown: "쫓다 + -았- + -던",
    }),
    ko("밤", "밤", "夜", "夜", {
      meaningInThisLine: "あなたを追い続けてしまった時間。",
    }),
  ],
};

const line50Spec: LineSpec = {
  korean: "손에 닿지 않는",
  reading: "ソネ タッチ アンヌン",
  japanese: "手を伸ばしても届かない。",
  literalJapanese: "手に届かない。",
  sentenceExplanation:
    "相手が見えているようで、実際には手を伸ばしても届かない遠さにいることを表している。",
  nuance:
    "ただ遠いよりも、あと少しで届きそうなのに届かない感じがいっそう切ない。",
  roleInSong:
    "相手との距離が最後まで埋まらないことを、身体感覚で示す行。",
  tokens: [
    ko("손에", "손", "手に", "手に", {
      breakdown: "손 + -에",
    }),
    ko("닿지 않는", "닿지 않다", "届かない", "触れない、届かない", {
      breakdown: "닿다 + -지 않다 + -는",
      meaningInThisLine: "手を伸ばしても相手に届かないこと。",
    }),
  ],
};

const line51Spec: LineSpec = {
  korean: "니가 보고 싶은 밤",
  reading: "ニガ ポゴ シプン パム",
  japanese: "あなたが恋しくてたまらない夜。",
  literalJapanese: "あなたが見たい夜。",
  sentenceExplanation:
    "相手に会いたい気持ちが抑えきれず、夜になるとその思いがいっそう強くなると締めている。",
  nuance:
    "보고 싶다 は『見たい』より自然には『会いたい』に近く、恋しさがとても強い。",
  roleInSong:
    "曲全体の感情の着地。結局この夜は『あなたに会いたい夜』だったと分かる。",
  tokens: [
    ko("니가", "네가", "あなたが", "あなたが", {
      explanation: "口語的に 네가 が 니가 になる。",
    }),
    ko("보고 싶은", "보고 싶다", "会いたい", "見たい、会いたい", {
      breakdown: "보다 + -고 싶다 + -ㄴ",
      meaningInThisLine: "相手に会いたくてたまらないこと。",
    }),
    ko("밤", "밤", "夜", "夜", {
      meaningInThisLine: "あなたが恋しくて眠れない時間。",
    }),
  ],
};

const line52Spec: LineSpec = {
  korean: "밤밤밤에 밤하늘을 날아",
  reading: "パムパムパメ パムハヌルル ナラ",
  japanese: "夜の夜空を飛んでいく。",
  literalJapanese: "夜、夜、夜に、夜空を飛んで。",
  sentenceExplanation:
    "最後の反復では 띄어쓰기 が 붙은 밤하늘 にまとまり、夜空のイメージがより一つの景色として強く見える。",
  nuance:
    "終盤では現実より夢の感触が強くなっているので、夜空が少しだけ近く感じられる。",
  roleInSong:
    "ラストで幻想のモチーフをもう一度呼び戻すフック。",
  tokens: [
    ko("밤밤밤에", "밤밤밤에", "夜、夜、夜に", "夜、夜、夜に", {
      meaningInThisLine: "夜の奥へ何度も沈んでいくようなリズム。",
    }),
    ko("밤하늘을 날아", "밤하늘을 날다", "夜空を飛んで", "夜空を飛んで", {
      breakdown: "밤하늘 + -을 + 날다",
    }),
  ],
};

export const completeMoonNightLines: LyricLine[] = [
  line(1, { ...line1Spec, sectionBreakAfter: true }),
  line(2, line2Spec),
  line(3, line3Spec),
  line(4, { ...line4Spec, sectionBreakAfter: true }),
  line(5, line5Spec),
  line(6, line6Spec),
  line(7, line7Spec),
  line(8, { ...line8Spec, sectionBreakAfter: true }),
  line(9, line9Spec),
  line(10, line10Spec),
  line(11, line11Spec),
  line(12, line12Spec),
  line(13, line13Spec),
  line(14, { ...line14Spec, sectionBreakAfter: true }),
  line(15, line1Spec),
  line(16, line2Spec),
  line(17, line3Spec),
  line(18, line18Spec),
  line(19, line19Spec),
  line(20, line20Spec),
  line(21, { ...line21Spec, sectionBreakAfter: true }),
  line(22, line22Spec),
  line(23, line23Spec),
  line(24, line24Spec),
  line(25, { ...line25Spec, sectionBreakAfter: true }),
  line(26, line26Spec),
  line(27, line27Spec),
  line(28, line28Spec),
  line(29, line29Spec),
  line(30, line30Spec),
  line(31, { ...line31Spec, sectionBreakAfter: true }),
  line(32, line1Spec),
  line(33, line2Spec),
  line(34, line3Spec),
  line(35, line18Spec),
  line(36, line36Spec),
  line(37, line37Spec),
  line(38, { ...line38Spec, sectionBreakAfter: true }),
  line(39, line39Spec),
  line(40, line40Spec),
  line(41, line41Spec),
  line(42, line42Spec),
  line(43, { ...line43Spec, sectionBreakAfter: true }),
  line(44, line44Spec),
  line(45, line45Spec),
  line(46, line46Spec),
  line(47, line47Spec),
  line(48, line48Spec),
  line(49, line49Spec),
  line(50, line50Spec),
  line(51, { ...line51Spec, sectionBreakAfter: true }),
  line(52, line52Spec),
  line(53, line23Spec),
  line(54, line24Spec),
];

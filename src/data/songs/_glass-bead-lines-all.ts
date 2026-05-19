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
  korean: "투명한 유리구슬처럼 보이지만",
  reading: "トゥミョンハン ユリグスルチョロム ポイジマン",
  japanese: "透明なガラス玉みたいに見えるけれど。",
  literalJapanese: "透明なガラス玉のように見えるけれど。",
  sentenceExplanation:
    "自分は一見すると繊細で壊れやすそうに見えるかもしれない、とまず相手の目線を受け止めている。",
  nuance:
    "ここでは弱さを否定する前に、まず『そう見えるよね』と認めているのがやさしい。見た目の繊細さと内側の強さの対比が始まる。",
  roleInSong:
    "曲の中心比喩を提示する導入。ガラス玉のイメージで、清純さと強さを同時に見せる。",
  grammarPoints: [
    {
      title: "-처럼",
      meaning: "〜のように",
      explanation:
        "比喩を作る基本形。유리구슬처럼 で『ガラス玉のように』。",
      example: "별처럼 빛나",
      exampleJapanese: "星のように輝く",
    },
    {
      title: "-지만",
      meaning: "〜けれど、〜だけど",
      explanation:
        "前を認めながら、後ろで対比や反転を出す形。보이지만 で『見えるけれど』。",
      example: "작지만 강해",
      exampleJapanese: "小さいけれど強い",
    },
  ],
  tokens: [
    ko("투명한", "투명하다", "透明な", "透明な", {
      breakdown: "투명하다 + -ㄴ",
    }),
    ko("유리구슬처럼", "유리구슬처럼", "ガラス玉のように", "ガラス玉のように", {
      breakdown: "유리구슬 + -처럼",
      meaningInThisLine: "繊細で美しいけれど壊れやすそうに見える比喩。",
    }),
    ko("보이지만", "보이다", "見えるけれど", "見えるけれど", {
      breakdown: "보이다 + -지만",
    }),
  ],
};

const line2Spec: LineSpec = {
  korean: "그렇게 쉽게 깨지진 않을 거야",
  reading: "クロッケ シプケ ッケジジン アヌル コヤ",
  japanese: "そんなに簡単には壊れないよ。",
  literalJapanese: "そのように簡単には割れはしないだろう。",
  sentenceExplanation:
    "見た目は繊細でも、本当の自分やこの気持ちはそんなに簡単には壊れないと力強く言っている。",
  nuance:
    "깨지진 は『壊れはしない』という対比の強調で、やわらかな清純さの中に芯の強さが出る。",
  roleInSong:
    "曲全体の核心。『弱く見えても折れない』というメッセージを最もはっきり示す行。",
  grammarPoints: [
    {
      title: "-지는 않다 / -진 않다",
      meaning: "〜しはしない",
      explanation:
        "普通の否定よりも『少なくともそれは違う』と強調する形。깨지진 않을 거야 で『壊れはしないよ』。",
      example: "울진 않아",
      exampleJapanese: "泣きはしない",
    },
    {
      title: "-ㄹ 거야",
      meaning: "〜するだろう、〜するよ",
      explanation:
        "未来の見通しや意思をやわらかく表す形。ここでは自分の強さへの確信がある。",
      example: "지켜줄 거야",
      exampleJapanese: "守ってあげるよ",
    },
  ],
  tokens: [
    ko("그렇게", "그렇게", "そんなに", "そんなに、そのように"),
    ko("쉽게", "쉽다", "簡単に", "簡単に", {
      breakdown: "쉽다 + -게",
    }),
    ko("깨지진", "깨지지는", "壊れは", "壊れは、割れは", {
      breakdown: "깨지다 + -지는",
      meaningInThisLine: "少なくとも簡単に壊れる存在ではない、という強調。",
    }),
    ko("않을 거야", "않을 것이다", "〜しないよ", "〜しないよ、〜しないだろう", {
      breakdown: "않다 + -을 거야",
    }),
  ],
};

const line3Spec: LineSpec = {
  korean: "사랑해 너만을 변하지 않도록",
  reading: "サランヘ ノマヌル ピョナジ アントロク",
  japanese: "あなただけを愛している。この気持ちが変わらないように。",
  literalJapanese: "愛している、あなただけを。変わらないように。",
  sentenceExplanation:
    "相手への一途な愛と、その気持ちがずっと変わらないでいてほしいという願いを同時に言っている。",
  nuance:
    "너만을 が入ることで『あなただけ』が強く出る。告白であり、誓いにも近い行。",
  roleInSong:
    "サビの愛情表現の中心。強さの理由が『一途な愛』だと分かる。",
  grammarPoints: [
    {
      title: "-도록",
      meaning: "〜するように",
      explanation:
        "ある状態が続くよう願ったり整えたりする形。변하지 않도록 で『変わらないように』。",
      example: "잊지 않도록",
      exampleJapanese: "忘れないように",
    },
  ],
  tokens: [
    ko("사랑해", "사랑하다", "愛してる", "愛してる"),
    ko("너만을", "너만을", "あなただけを", "あなただけを", {
      breakdown: "너 + -만 + -을",
      meaningInThisLine: "相手だけを一途に思っていること。",
    }),
    ko("변하지 않도록", "변하지 않도록", "変わらないように", "変わらないように", {
      breakdown: "변하다 + -지 않다 + -도록",
    }),
  ],
};

const line4Spec: LineSpec = {
  korean: "영원히 널 비춰줄게",
  reading: "ヨンウォニ ノル ピチョジュルケ",
  japanese: "永遠にあなたを照らしてあげるね。",
  literalJapanese: "永遠にあなたを照らしてあげる。",
  sentenceExplanation:
    "ただ守られたいだけではなく、自分も相手を照らす存在でいたいと約束している。",
  nuance:
    "清純な恋の歌だけれど受け身ではなく、相手の光になろうとする能動的な愛情がある。",
  roleInSong:
    "サビの締めであり、この曲のいちばん象徴的な約束。",
  grammarPoints: [
    {
      title: "-아/어 주다",
      meaning: "〜してあげる、〜してくれる",
      explanation:
        "相手のために行動する気持ちを入れる形。비춰주다 で『照らしてあげる』。",
      example: "잡아줄게",
      exampleJapanese: "つかんであげるよ",
    },
    {
      title: "-ㄹ게",
      meaning: "〜するね",
      explanation:
        "その場でのやさしい意志や約束を表す。비춰줄게 で『照らしてあげるね』。",
      example: "기다릴게",
      exampleJapanese: "待っているね",
    },
  ],
  tokens: [
    ko("영원히", "영원히", "永遠に", "永遠に"),
    ko("널", "너를", "あなたを", "あなたを", {
      explanation: "너를 の縮約形。",
    }),
    ko("비춰줄게", "비춰주다", "照らしてあげるね", "照らしてあげるね", {
      breakdown: "비추다 + -아/어 주다 + -ㄹ게",
      meaningInThisLine: "相手の光になり続けたいという約束。",
    }),
  ],
};

const line5Spec: LineSpec = {
  korean: "내가 약해 보였나요",
  reading: "ネガ ヤケ ポヨンナヨ",
  japanese: "私は弱く見えたのかな。",
  literalJapanese: "私が弱く見えましたか。",
  sentenceExplanation:
    "相手が自分を心配していることに気づき、その気持ちにやさしく問いかけている。",
  nuance:
    "責める感じではなく、『そう思っていたの？』とそっと確かめる響き。だから次の励ましにつながる。",
  roleInSong:
    "相手の不安を受け止める問いかけとして、サビ前の感情を整える行。",
  grammarPoints: [
    {
      title: "-아/어 보이다",
      meaning: "〜く見える",
      explanation:
        "見た目の印象を表す形。약해 보이다 で『弱く見える』。",
      example: "어려 보인다",
      exampleJapanese: "幼く見える",
    },
    {
      title: "-나요",
      meaning: "〜ですか、〜なのかな",
      explanation:
        "やわらかい疑問を作る形。感情のこもった問いかけに向いている。",
      example: "괜찮나요",
      exampleJapanese: "大丈夫ですか",
    },
  ],
  tokens: [
    ko("내가", "내가", "私が", "私が"),
    ko("약해 보였나요", "약해 보이다", "弱く見えたのかな", "弱く見えましたか、弱く見えたのかな", {
      breakdown: "약하다 + -아/어 보이다 + -나요",
    }),
  ],
};

const line6Spec: LineSpec = {
  korean: "언제나 걱정됐나요",
  reading: "オンジェナ コクチョンデンナヨ",
  japanese: "いつも心配だったのかな。",
  literalJapanese: "いつも心配になりましたか。",
  sentenceExplanation:
    "相手が自分を不安そうに見ていたことを思い返し、その心配を受け止めている。",
  nuance:
    "『心配させてしまったのかな』という、相手への気づかいもにじむ。",
  roleInSong:
    "前の行と対になる問いかけで、相手の視点をしっかり受け止める。",
  tokens: [
    ko("언제나", "언제나", "いつも", "いつも、いつでも"),
    ko("걱정됐나요", "걱정되다", "心配だったのかな", "心配でしたか、心配だったのかな", {
      breakdown: "걱정되다 + -었나요",
    }),
  ],
};

const line7Spec: LineSpec = {
  korean: "달빛에 반짝이는 저 이슬처럼",
  reading: "タルビチェ パンッチャギヌン チョ イスルチョロム",
  japanese: "月明かりにきらめくあの露みたいに。",
  literalJapanese: "月明かりにきらめくあの露のように。",
  sentenceExplanation:
    "月明かりの中で輝いてはいるけれど、すぐ消えてしまいそうな露に自分の見え方を重ねている。",
  nuance:
    "美しいけれど儚いものの代表としての『露』が効いている。繊細さはあるけれど、それで終わらないのがこの曲。",
  roleInSong:
    "弱く見える自分のイメージを、夜のきれいな情景に変えて見せる比喩。",
  tokens: [
    ko("달빛에", "달빛", "月明かりに", "月明かりに", {
      breakdown: "달빛 + -에",
    }),
    ko("반짝이는", "반짝이다", "きらめく", "きらめく、きらきら光る", {
      breakdown: "반짝이다 + -는",
    }),
    ko("저 이슬처럼", "저 이슬처럼", "あの露のように", "あの露のように", {
      breakdown: "저 + 이슬 + -처럼",
      meaningInThisLine: "きれいだけれど消えそうに見えるものの比喩。",
    }),
  ],
};

const line8Spec: LineSpec = {
  korean: "사라질 것만 같나요",
  reading: "サラジル コンマン カンナヨ",
  japanese: "すぐ消えてしまいそうに見えるのかな。",
  literalJapanese: "消えることばかりのようですか。",
  sentenceExplanation:
    "相手から見れば、自分は今にも消えそうなほど儚く見えるのかと問いかけている。",
  nuance:
    "ことさらに弱さを演じているのではなく、『そう見えても違うよ』という前振りとしての問いかけ。",
  roleInSong:
    "露の比喩を受けて、相手の不安を言葉にする行。",
  grammarPoints: [
    {
      title: "-ㄹ 것만 같다",
      meaning: "〜しそうでたまらない、まるで〜しそうだ",
      explanation:
        "単なる推測よりも、その感じが強いことを出す形。사라질 것만 같다 で『消えてしまいそうだ』。",
      example: "울 것만 같아",
      exampleJapanese: "泣いてしまいそうだ",
    },
  ],
  tokens: [
    ko("사라질", "사라지다", "消えそうな", "消えるような", {
      breakdown: "사라지다 + -ㄹ",
    }),
    ko("것만 같나요", "것만 같다", "〜そうに見えるのかな", "〜ばかりのようですか、〜しそうなのかな", {
      breakdown: "것 + -만 + 같다 + -나요",
    }),
  ],
};

const line9Spec: LineSpec = {
  korean: "불안해 마요 꿈만 같나요",
  reading: "プラネ マヨ クムマン カンナヨ",
  japanese: "不安にならないで。夢みたいに感じるのかな。",
  literalJapanese: "不安がってはいけません。夢ばかりのようですか。",
  sentenceExplanation:
    "相手を安心させながら、今の関係が夢みたいに儚く感じられるのかをそっと尋ねている。",
  nuance:
    "まず『不安にならないで』と相手を落ち着かせるのがこの曲らしい。自分が支える側に回っている。",
  roleInSong:
    "相手の心配を受け止めたあと、安心させる言葉へ切り替える転換点。",
  grammarPoints: [
    {
      title: "-지 마요",
      meaning: "〜しないでください",
      explanation:
        "やわらかい禁止・制止。歌詞では 불안해 마요 と縮んだ形で『不安にならないで』。",
      example: "걱정하지 마요",
      exampleJapanese: "心配しないでください",
    },
  ],
  tokens: [
    ko("불안해 마요", "불안해하다", "不安にならないで", "不安にならないで", {
      breakdown: "불안해하다 + -지 마요",
      meaningInThisLine: "相手を安心させたい気持ち。",
    }),
    ko("꿈만 같나요", "꿈만 같다", "夢みたいなのかな", "夢のようですか", {
      breakdown: "꿈 + -만 + 같다 + -나요",
    }),
  ],
};

const line10Spec: LineSpec = {
  korean: "널 위해서 빛나고 있어",
  reading: "ノル ウィヘソ ピンナゴ イッソ",
  japanese: "私はあなたのために輝いているよ。",
  literalJapanese: "あなたのために輝いている。",
  sentenceExplanation:
    "自分はただ守られるだけの存在ではなく、相手のために光る存在なのだと伝えている。",
  nuance:
    "『壊れない』だけでなく『輝いている』まで言うことで、強さが明るさに変わっている。",
  roleInSong:
    "この曲の主人公の主体性を見せる行。守られる側から照らす側へ変わる。",
  grammarPoints: [
    {
      title: "-고 있다",
      meaning: "〜している",
      explanation:
        "進行中の状態を表す基本形。빛나고 있어 で『輝いている』。",
      example: "기다리고 있어",
      exampleJapanese: "待っている",
    },
  ],
  tokens: [
    ko("널", "너를", "あなたを", "あなたを", {
      explanation: "너를 の縮約形。",
    }),
    ko("위해서", "위해서", "〜のために", "〜のために", {
      breakdown: "위하다 + -여서",
    }),
    ko("빛나고 있어", "빛나고 있다", "輝いている", "輝いている", {
      meaningInThisLine: "相手を照らす存在として今も光っていること。",
    }),
  ],
};

const line11Spec: LineSpec = {
  korean: "떨리는 그대 손을 꽉 잡아줄게요",
  reading: "トルリヌン クデ ソヌル クァク チャバジュルケヨ",
  japanese: "震えるあなたの手を、ぎゅっと握ってあげるね。",
  literalJapanese: "震えるあなたの手をぎゅっと握ってあげます。",
  sentenceExplanation:
    "相手が不安で震えているなら、自分がその手をしっかり握って安心させると言っている。",
  nuance:
    "『弱そうに見える私』がここでは逆に相手を支える側に回るのが印象的。",
  roleInSong:
    "守る・包むというこの曲のやさしさが一番分かりやすく出る行。",
  tokens: [
    ko("떨리는", "떨리다", "震える", "震える、どきどきする", {
      breakdown: "떨리다 + -는",
    }),
    ko("그대 손을", "그대 손", "あなたの手を", "あなたの手を", {
      breakdown: "그대 + 손 + -을",
    }),
    ko("꽉", "꽉", "ぎゅっと", "ぎゅっと、しっかり"),
    ko("잡아줄게요", "잡아주다", "握ってあげますね", "握ってあげるね", {
      breakdown: "잡다 + -아/어 주다 + -ㄹ게요",
      meaningInThisLine: "相手の不安を自分が受け止める約束。",
    }),
  ],
};

const line12Spec: LineSpec = {
  korean: "따스히 감싸줄게요",
  reading: "タスヒ カムサジュルケヨ",
  japanese: "あたたかく包み込んであげるね。",
  literalJapanese: "あたたかく包んであげます。",
  sentenceExplanation:
    "手を握るだけでなく、相手の不安そのものをやさしく包み込むと語っている。",
  nuance:
    "따뜻하게 よりも 따스히 の方が詩的でやわらかい。GFRIENDらしい清純さが強い言い方。",
  roleInSong:
    "相手を守りたい気持ちの要約になる一行。",
  tokens: [
    ko("따스히", "따스히", "あたたかく", "あたたかく、ぬくもりをこめて"),
    ko("감싸줄게요", "감싸주다", "包んであげますね", "包み込んであげるね", {
      breakdown: "감싸다 + -아/어 주다 + -ㄹ게요",
    }),
  ],
};

const line17Spec: LineSpec = {
  korean: "못 이룰 것 없어요",
  reading: "モッ イルル コッ オプソヨ",
  japanese: "叶えられないことなんてないよ。",
  literalJapanese: "成し遂げられないものはありません。",
  sentenceExplanation:
    "相手がそばにいてくれるなら、不可能だと思えることも乗り越えられると信じている。",
  nuance:
    "清純な恋の歌だけれど、ここではかなり前向きな確信がある。",
  roleInSong:
    "サビの『壊れない』が、2番では『何でも叶えられる』という未来志向の強さへ広がる。",
  tokens: [
    ko("못", "못", "〜できない", "〜できない"),
    ko("이룰", "이루다", "叶える", "叶える、成し遂げる", {
      breakdown: "이루다 + -ㄹ",
    }),
    ko("것 없어요", "것 없다", "ものはない", "ものはありません", {
      breakdown: "것 + 없다 + -어요",
      meaningInThisLine: "不可能なことなんてないという強い肯定。",
    }),
  ],
};

const line18Spec: LineSpec = {
  korean: "그대만 있어준다면",
  reading: "クデマン イッソジュンダミョン",
  japanese: "あなたさえそばにいてくれるなら。",
  literalJapanese: "あなただけいてくれるなら。",
  sentenceExplanation:
    "自分の強さや希望の条件は、結局相手がそばにいてくれることなのだと打ち明けている。",
  nuance:
    "絶対に一人で平気だと言うのではなく、『あなたがいるから強くなれる』という恋のまっすぐさがある。",
  roleInSong:
    "2番で支え合いの関係がはっきりする行。",
  grammarPoints: [
    {
      title: "-아/어 주다",
      meaning: "〜してくれる",
      explanation:
        "ここでは相手が自分のためにしてくれること。있어주다 で『そばにいてくれる』。",
      example: "기다려준다면",
      exampleJapanese: "待っていてくれるなら",
    },
    {
      title: "-ㄴ다면",
      meaning: "〜なら",
      explanation:
        "仮定を表すやや文語的な形。歌詞でよく使われる。",
      example: "온다면",
      exampleJapanese: "来るなら",
    },
  ],
  tokens: [
    ko("그대만", "그대만", "あなただけ", "あなただけ", {
      breakdown: "그대 + -만",
    }),
    ko("있어준다면", "있어주다", "いてくれるなら", "そばにいてくれるなら", {
      breakdown: "있다 + -아/어 주다 + -ㄴ다면",
    }),
  ],
};

const line19Spec: LineSpec = {
  korean: "어두웠던 맘 속에",
  reading: "オドゥウォットン マム ソゲ",
  japanese: "暗かった心の中に。",
  literalJapanese: "暗かった心の中に。",
  sentenceExplanation:
    "かつて暗かった自分の心の中へ、相手の光が差し込んできたことを示している。",
  nuance:
    "過去の暗さを認めているからこそ、次の『햇살』がより明るく見える。",
  roleInSong:
    "2番で『相手に照らされる自分』を描く準備になる行。",
  grammarPoints: [
    {
      title: "-던",
      meaning: "過去にそうだった〜",
      explanation:
        "過去の状態や習慣を振り返る形。어두웠던 で『暗かった』。",
      example: "좋아하던 노래",
      exampleJapanese: "好きだった歌",
    },
  ],
  tokens: [
    ko("어두웠던", "어둡다", "暗かった", "暗かった", {
      breakdown: "어둡다 + -었 + -던",
    }),
    ko("맘 속에", "맘 속", "心の中に", "心の中に", {
      breakdown: "맘 + 속 + -에",
    }),
  ],
};

const line20Spec: LineSpec = {
  korean: "밝은 햇살을 비춰줘",
  reading: "パルグン ヘッサルル ピチョジョ",
  japanese: "明るい陽ざしを照らしてほしい。",
  literalJapanese: "明るい日差しを照らして。",
  sentenceExplanation:
    "今度は自分が相手に、心の中を明るく照らしてほしいと願っている。",
  nuance:
    "ずっと自分が支えるだけでなく、互いに光になりたいという双方向性が見える。",
  roleInSong:
    "『私が照らす』だけでなく『あなたにも照らしてほしい』と関係が深まる行。",
  tokens: [
    ko("밝은", "밝다", "明るい", "明るい", {
      breakdown: "밝다 + -은",
    }),
    ko("햇살을", "햇살", "陽ざしを", "陽ざしを", {
      breakdown: "햇살 + -을",
    }),
    ko("비춰줘", "비춰주다", "照らして", "照らして、照らしてほしい", {
      breakdown: "비추다 + -아/어 주다",
    }),
  ],
};

const line21Spec: LineSpec = {
  korean: "언제까지나",
  reading: "オンジェカジナ",
  japanese: "いつまでも。",
  literalJapanese: "いつまででも。",
  sentenceExplanation:
    "一時的ではなく、この気持ちも関係も長く続いてほしいという願いを一言で強めている。",
  nuance:
    "短い行だけれど、『永遠に』というサビの約束とも響き合っている。",
  roleInSong:
    "2番の願いを時間の長さで強調する一行。",
  tokens: [ko("언제까지나", "언제까지나", "いつまでも", "いつまでも")],
};

const line22Spec: LineSpec = {
  korean: "두근거리는 심장소리에",
  reading: "トゥグンゴリヌン シムジャンソリエ",
  japanese: "高鳴る鼓動の音から。",
  literalJapanese: "どきどきする心臓の音に。",
  sentenceExplanation:
    "言葉ではなく、鼓動の響きそのものから相手の気持ちを感じ取っている場面。",
  nuance:
    "恋の感情が身体感覚として伝わってくる、初々しい親密さがある。",
  roleInSong:
    "関係が少し近づき、心が伝わる瞬間を描く行。",
  tokens: [
    ko("두근거리는", "두근거리다", "どきどきする", "どきどきする", {
      breakdown: "두근거리다 + -는",
    }),
    ko("심장소리에", "심장소리", "鼓動の音に", "心臓の音に、鼓動から", {
      breakdown: "심장소리 + -에",
    }),
  ],
};

const line23Spec: LineSpec = {
  korean: "그대의 마음이 전해져",
  reading: "クデエ マウミ チョネジョ",
  japanese: "あなたの気持ちが伝わってくる。",
  literalJapanese: "あなたの心が伝わる。",
  sentenceExplanation:
    "相手の本音が、言葉にしなくてもちゃんと届いてくると感じている。",
  nuance:
    "不安だけだった前半に比べて、ここでは『通じ合う感じ』が生まれている。",
  roleInSong:
    "この曲の関係性が一歩進んだことを示す行。",
  tokens: [
    ko("그대의", "그대의", "あなたの", "あなたの"),
    ko("마음이", "마음", "気持ちが", "心が、気持ちが", {
      breakdown: "마음 + -이",
    }),
    ko("전해져", "전해지다", "伝わってくる", "伝わってくる、伝わる", {
      breakdown: "전하다 + -아/어지다",
    }),
  ],
};

const line24Spec: LineSpec = {
  korean: "떨리는 어깨 이젠 꼭 안아줄게요",
  reading: "トルリヌン オッケ イジェン コク アナジュルケヨ",
  japanese: "震える肩を、今度はしっかり抱きしめてあげるね。",
  literalJapanese: "震える肩を、今は必ず抱いてあげます。",
  sentenceExplanation:
    "手を握るだけでなく、相手の不安そのものを抱きしめて受け止めると約束している。",
  nuance:
    "距離がさらに近くなり、支える気持ちも強まっている。이젠 には『もう今は』という進展の響きがある。",
  roleInSong:
    "2番の感情の頂点。保護と親密さが同時に強まる。",
  tokens: [
    ko("떨리는 어깨", "떨리는 어깨", "震える肩", "震える肩", {
      breakdown: "떨리다 + -는 + 어깨",
    }),
    ko("이젠", "이제는", "今はもう", "今は、これからは", {
      explanation: "이제는 の縮約形。",
    }),
    ko("꼭", "꼭", "しっかり", "しっかり、必ず"),
    ko("안아줄게요", "안아주다", "抱きしめてあげますね", "抱きしめてあげるね", {
      breakdown: "안다 + -아/어 주다 + -ㄹ게요",
    }),
  ],
};

const line30Spec: LineSpec = {
  korean: "달콤한 말도 필요 없어요",
  reading: "タルコマン マルド ピリョ オプソヨ",
  japanese: "甘い言葉なんていらないよ。",
  literalJapanese: "甘い言葉も必要ありません。",
  sentenceExplanation:
    "口先だけのやさしさより、本当の気持ちや一緒にいる時間の方がずっと大事だと言っている。",
  nuance:
    "恋愛のきらびやかな表現を否定しながら、むしろ気持ちの本気さを強めている。",
  roleInSong:
    "後半で、愛情の価値基準が『言葉』より『気持ち』にあることを示す行。",
  grammarPoints: [
    {
      title: "-도",
      meaning: "〜も",
      explanation:
        "ここでは『それさえも要らない』という含みで使われる。말도 필요 없어요 で『言葉さえ必要ない』。",
      example: "물도 없어",
      exampleJapanese: "水もない",
    },
  ],
  tokens: [
    ko("달콤한", "달콤하다", "甘い", "甘い"),
    ko("말도", "말", "言葉も", "言葉も", {
      breakdown: "말 + -도",
    }),
    ko("필요 없어요", "필요 없다", "必要ないです", "必要ありません、いらないです", {
      meaningInThisLine: "甘いセリフよりも本当の気持ちが大事だということ。",
    }),
  ],
};

const line31Spec: LineSpec = {
  korean: "(oh 없어요)",
  reading: "オー オプソヨ",
  japanese: "（そう、いらないよ）",
  literalJapanese: "（oh、ありません）",
  sentenceExplanation:
    "直前の『必要ない』をやわらかく繰り返して、感情を可愛く強調している。",
  nuance:
    "掛け声のような短い挿入だけれど、サウンド上は印象が強く、意味もちゃんと補強している。",
  roleInSong:
    "サビ後半の合いの手として、感情を軽やかに反復する。",
  tokens: [
    en("oh", "oh", "ああ", "ああ、oh"),
    ko("없어요", "없다", "ありません", "ありません、いらないです"),
  ],
};

const line32Spec: LineSpec = {
  korean: "매일같은 꿈에 행복해요",
  reading: "メイルガトゥン クメ ヘンボケヨ",
  japanese: "毎日のような夢の中にいるだけで幸せです。",
  literalJapanese: "毎日のような夢に幸せです。",
  sentenceExplanation:
    "派手な言葉がなくても、相手を思う日々そのものが夢みたいで幸せだと感じている。",
  nuance:
    "特別な出来事ではなく、日々続く夢のような気持ちが大切だという穏やかな幸福感。",
  roleInSong:
    "後半の世界観を『守る強さ』から『日常の幸福』へ少し広げる行。",
  tokens: [
    ko("매일같은", "매일같다", "毎日のような", "毎日のような、毎日続くような", {
      meaningInThisLine: "特別な一瞬ではなく、毎日のように感じる幸せ。",
    }),
    ko("꿈에", "꿈", "夢に", "夢に、夢の中で", {
      breakdown: "꿈 + -에",
    }),
    ko("행복해요", "행복하다", "幸せです", "幸せです"),
  ],
};

const line33Spec: LineSpec = {
  korean: "(들리나요)",
  reading: "トゥルリナヨ",
  japanese: "（聞こえているかな）",
  literalJapanese: "（聞こえますか）",
  sentenceExplanation:
    "自分の気持ちやこの幸せな心が、ちゃんと相手に届いているかをそっと確かめている。",
  nuance:
    "小さな問いかけだけれど、かわいく不安がのぞく。",
  roleInSong:
    "後半の幸福感の中に、まだ少し残る初々しい不安を添える一言。",
  tokens: [ko("들리나요", "들리다", "聞こえますか", "聞こえますか、聞こえているかな")],
};

const line34Spec: LineSpec = {
  korean: "아름다운 미소를 모두 담아 둘게요",
  reading: "アルムダウン ミソルル モドゥ タマ ドゥルケヨ",
  japanese: "その美しい笑顔を全部、心にしまっておくね。",
  literalJapanese: "美しい微笑みをすべてしまっておきます。",
  sentenceExplanation:
    "相手の笑顔を、壊れやすい一瞬として流さずに大切な記憶としてしまっておこうとしている。",
  nuance:
    "담아 두다 には『丁寧にしまっておく』感じがある。守りたい気持ちが記憶にも向いている。",
  roleInSong:
    "この恋をただ感じるだけでなく、大事に保存したい気持ちを表す行。",
  grammarPoints: [
    {
      title: "-아/어 두다",
      meaning: "〜しておく、しまっておく",
      explanation:
        "あとで大切にするために、その状態を保つ感じがある。담아 둘게요 で『しまっておくね』。",
      example: "적어 둘게",
      exampleJapanese: "書いておくね",
    },
  ],
  tokens: [
    ko("아름다운", "아름답다", "美しい", "美しい"),
    ko("미소를", "미소", "笑顔を", "微笑みを、笑顔を", {
      breakdown: "미소 + -를",
    }),
    ko("모두", "모두", "全部", "全部、すべて"),
    ko("담아 둘게요", "담아 두다", "しまっておきますね", "しまっておくね", {
      breakdown: "담다 + -아/어 두다 + -ㄹ게요",
    }),
  ],
};

const line35Spec: LineSpec = {
  korean: "깨지지 않도록 지켜줘 언제까지나",
  reading: "ッケジジ アントロク チキョジョ オンジェカジナ",
  japanese: "壊れないように守ってね、いつまでも。",
  literalJapanese: "壊れないように守って、いつまででも。",
  sentenceExplanation:
    "自分は壊れないと言いながらも、この大切な関係は相手にも一緒に守ってほしいと願っている。",
  nuance:
    "強さだけではなく、『大事だからこそ守りたいし守ってほしい』という双方向の愛情がある。",
  roleInSong:
    "後半で、二人の関係を共同で守るものとして描く重要な行。",
  tokens: [
    ko("깨지지 않도록", "깨지지 않도록", "壊れないように", "壊れないように", {
      breakdown: "깨지다 + -지 않다 + -도록",
    }),
    ko("지켜줘", "지켜주다", "守って", "守って、守ってほしい", {
      breakdown: "지키다 + -아/어 주다",
    }),
    ko("언제까지나", "언제까지나", "いつまでも", "いつまでも"),
  ],
};

const line36Spec: LineSpec = {
  korean: "소중해 그 누구보다 더 널 사랑해",
  reading: "ソジュンヘ ク ヌグボダ ト ノル サランヘ",
  japanese: "あなたは大切。誰よりもあなたを愛してる。",
  literalJapanese: "大切だ。その誰よりももっとあなたを愛している。",
  sentenceExplanation:
    "相手が自分にとってどれほど特別かを、かなりまっすぐに言葉にしている。",
  nuance:
    "初期GFRIENDの中でもかなり直接的な愛情表現で、告白の強さがある。",
  roleInSong:
    "後半クライマックスのストレートな愛情宣言。",
  tokens: [
    ko("소중해", "소중하다", "大切だよ", "大切だよ"),
    ko("그 누구보다 더", "그 누구보다 더", "誰よりももっと", "誰よりももっと", {
      breakdown: "그 누구 + -보다 + 더",
      meaningInThisLine: "相手が最優先の特別な存在であること。",
    }),
    ko("널 사랑해", "너를 사랑하다", "あなたを愛してる", "あなたを愛している", {
      breakdown: "너를 + 사랑하다",
    }),
  ],
};

const line37Spec: LineSpec = {
  korean: "믿기지 않는 기적이 찾아 온 거야",
  reading: "ミッキジ アンヌン キジョギ チャジャ オン ゴヤ",
  japanese: "信じられないような奇跡が訪れたんだ。",
  literalJapanese: "信じられない奇跡が訪れてきたのだ。",
  sentenceExplanation:
    "相手と出会えたこと、その関係そのものを奇跡のように感じている。",
  nuance:
    "大げさに聞こえるけれど、この曲のまっすぐな世界観ではとても自然。清純な恋の高揚感がある。",
  roleInSong:
    "愛情の理由を『奇跡』という大きな言葉で言い切るクライマックス。",
  tokens: [
    ko("믿기지 않는", "믿기지 않다", "信じられない", "信じられない", {
      breakdown: "믿기다 + -지 않다 + -는",
    }),
    ko("기적이", "기적", "奇跡が", "奇跡が", {
      breakdown: "기적 + -이",
    }),
    ko("찾아 온 거야", "찾아오다", "訪れたんだ", "訪れてきたんだ", {
      breakdown: "찾아오다 + -ㄴ 거야",
    }),
  ],
};

const line40Spec: LineSpec = {
  korean: "(영원히 널 비춰줄게)",
  reading: "ヨンウォニ ノル ピチョジュルケ",
  japanese: "（永遠にあなたを照らしてあげるね）",
  literalJapanese: "（永遠にあなたを照らしてあげる）",
  sentenceExplanation:
    "メインの約束をもう一度余韻として繰り返し、感情をしっかり残している。",
  nuance:
    "かっこ付きの反復なので、言葉の意味以上に『この誓いはぶれない』という印象が強くなる。",
  roleInSong:
    "後半クライマックスの余韻として、曲の中心メッセージを再確認する行。",
  tokens: [
    ko("영원히", "영원히", "永遠に", "永遠に"),
    ko("널", "너를", "あなたを", "あなたを"),
    ko("비춰줄게", "비춰주다", "照らしてあげるね", "照らしてあげるね"),
  ],
};

export const completeGlassBeadLines: LyricLine[] = [
  line(1, line1Spec),
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
  line(12, { ...line12Spec, sectionBreakAfter: true }),
  line(13, line1Spec),
  line(14, line2Spec),
  line(15, line3Spec),
  line(16, { ...line4Spec, sectionBreakAfter: true }),
  line(17, line17Spec),
  line(18, line18Spec),
  line(19, line19Spec),
  line(20, line20Spec),
  line(21, { ...line21Spec, sectionBreakAfter: true }),
  line(22, line22Spec),
  line(23, line23Spec),
  line(24, line24Spec),
  line(25, { ...line12Spec, sectionBreakAfter: true }),
  line(26, line1Spec),
  line(27, line2Spec),
  line(28, line3Spec),
  line(29, { ...line4Spec, sectionBreakAfter: true }),
  line(30, line30Spec),
  line(31, line31Spec),
  line(32, line32Spec),
  line(33, line33Spec),
  line(34, line34Spec),
  line(35, { ...line35Spec, sectionBreakAfter: true }),
  line(36, line36Spec),
  line(37, line37Spec),
  line(38, line3Spec),
  line(39, line4Spec),
  line(40, { ...line40Spec, sectionBreakAfter: true }),
  line(41, line1Spec),
  line(42, line2Spec),
  line(43, line3Spec),
  line(44, line4Spec),
];

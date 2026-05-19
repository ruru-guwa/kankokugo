import type { LyricLine, Token } from "../../types/song";

type TokenSeed = Omit<Token, "id">;
type LineTemplate = {
  japanese: string;
  literalJapanese: string;
  sentenceExplanation: string;
  tokens: TokenSeed[];
};

const createToken = (
  surface: string,
  base: string,
  language: Token["language"],
  shortMeaning: string,
  meaning: string,
  extras: Partial<TokenSeed> = {},
): TokenSeed => ({
  surface,
  base,
  language,
  shortMeaning,
  meaning,
  ...extras,
});

const lineTemplates: Record<string, LineTemplate> = {
  "Red Velvet": {
    japanese: "Red Velvet。",
    literalJapanese: "Red Velvet。",
    sentenceExplanation:
      "グループ名そのものを最初に置いて、これから始まる舞台の主役が誰かをはっきり示している。",
    tokens: [
      createToken("Red Velvet", "Red Velvet", "en", "レッドベルベット", "Red Velvet"),
    ],
  },
  "무도회를 뒤집어": {
    japanese: "舞踏会をめちゃくちゃに変えて。",
    literalJapanese: "舞踏会をひっくり返して。",
    sentenceExplanation:
      "上品で整った舞踏会をそのまま楽しむのでなく、自分たちらしく大胆にひっくり返そうとしている。",
    tokens: [
      createToken("무도회", "무도회", "ko", "舞踏会", "舞踏会"),
      createToken("뒤집어", "뒤집다", "ko", "ひっくり返して", "ひっくり返して、覆して", {
        explanation: "뒤집다 は『ひっくり返す』『覆す』。ここでは空気やルールごと変える感じ。",
      }),
    ],
  },
  "작은 소란을 또 일으켜": {
    japanese: "また少し騒ぎを起こしてみる。",
    literalJapanese: "小さな騒ぎをまた起こして。",
    sentenceExplanation:
      "大事件ではなく、小さなざわめきを起こして退屈な場を変えるきっかけを作っている。",
    tokens: [
      createToken("소란", "소란", "ko", "騒ぎ", "騒ぎ、ざわめき"),
      createToken("일으켜", "일으키다", "ko", "起こして", "起こして、引き起こして"),
    ],
  },
  "This is gonna be a crazy night": {
    japanese: "今夜はきっと、とびきり刺激的な夜になる。",
    literalJapanese: "これはおかしな夜になるだろう。",
    sentenceExplanation:
      "優雅な舞踏会の予想を外して、今夜は予測不能で刺激的な夜になると先に宣言している。",
    tokens: [
      createToken(
        "crazy night",
        "crazy night",
        "en",
        "刺激的な夜",
        "刺激的で予測不能な夜",
      ),
    ],
  },
  "(To na na na na na night)": {
    japanese: "To na na na na na night",
    literalJapanese: "今夜へ。",
    sentenceExplanation:
      "意味よりもリズムと高揚を優先した掛け声で、夜の扉が開く感じを作っている。",
    tokens: [
      createToken(
        "na na na na na night",
        "na na na na na night",
        "en",
        "夜への掛け声",
        "夜へ向かう高揚を作る掛け声",
      ),
    ],
  },
  "등장부터 인사까지 파격적이게": {
    japanese: "登場から挨拶まで、全部大胆に。",
    literalJapanese: "登場から挨拶まで破格的に。",
    sentenceExplanation:
      "最初の登場から最後の挨拶まで、立ち振る舞い全部を型破りにしてしまおうとしている。",
    tokens: [
      createToken("등장부터", "등장부터", "ko", "登場から", "登場から"),
      createToken("인사까지", "인사까지", "ko", "挨拶まで", "挨拶まで"),
      createToken("파격적이게", "파격적이다", "ko", "大胆に", "型破りに、大胆に"),
    ],
  },
  "우리 살짝 놀아볼까": {
    japanese: "私たち、ちょっと遊んでみない？",
    literalJapanese: "私たち、少し遊んでみようか。",
    sentenceExplanation:
      "軽く誘うような口調で、相手を自分たちの少し危うくて楽しい世界へ誘っている。",
    tokens: [
      createToken("살짝", "살짝", "ko", "少し、そっと", "少し、軽く、そっと"),
      createToken("놀아볼까", "놀아보다", "ko", "遊んでみようか", "遊んでみようか", {
        explanation: "-아/어 보다 が入って『試しにやってみる』感じがある。",
      }),
    ],
  },
  "솔직하게 Bae bae": {
    japanese: "素直になって、Bae bae。",
    literalJapanese: "正直に、Bae bae。",
    sentenceExplanation:
      "遠慮や建前を外して、楽しさや気持ちに素直になろうとやわらかく呼びかけている。",
    tokens: [
      createToken("솔직하게", "솔직하다", "ko", "素直に", "素直に、正直に"),
      createToken("Bae bae", "bae", "en", "親しい呼びかけ", "親しい相手への呼びかけ"),
    ],
  },
  "지금부터 시작해 볼게": {
    japanese: "今から始めるよ。",
    literalJapanese: "今から始めてみるね。",
    sentenceExplanation:
      "ここから本格的に始めると、自分の側から舞台の幕を上げている。",
    tokens: [
      createToken("지금부터", "지금부터", "ko", "今から", "今から"),
      createToken("시작해 볼게", "시작해 보다", "ko", "始めてみるね", "始めてみるね、始めるよ", {
        explanation: "-아/어 볼게 は『やってみるね』という軽い意志表現。",
      }),
    ],
  },
  "(Feel my vibe and sway)": {
    japanese: "私の空気を感じて、身を任せて。",
    literalJapanese: "私の雰囲気を感じて揺れて。",
    sentenceExplanation:
      "頭で理解するより、雰囲気と身体の揺れでこの世界に入ってきてほしいと誘っている。",
    tokens: [
      createToken("vibe", "vibe", "en", "雰囲気", "雰囲気、空気感"),
      createToken("sway", "sway", "en", "揺れる", "揺れる、身を任せる"),
    ],
  },
  "꽃가루를 날려": {
    japanese: "花びらを舞い上がらせて。",
    literalJapanese: "花粉を飛ばして。",
    sentenceExplanation:
      "花びらや紙吹雪のようなイメージで、舞台を祝祭的に彩る演出を入れている。",
    tokens: [
      createToken("꽃가루", "꽃가루", "ko", "花びら、花粉", "花粉、花びらのような紙吹雪"),
      createToken("날려", "날리다", "ko", "舞わせて", "飛ばして、舞わせて"),
    ],
  },
  "폭죽을 더 크게 터트려": {
    japanese: "花火をもっと派手に打ち上げて。",
    literalJapanese: "花火をもっと大きく爆発させて。",
    sentenceExplanation:
      "静かな美しさだけではなく、音と光で夜をもっと派手に変えてしまおうとしている。",
    tokens: [
      createToken("폭죽", "폭죽", "ko", "花火、爆竹", "花火、爆竹"),
      createToken("터트려", "터트리다", "ko", "爆発させて", "爆発させて、弾けさせて"),
    ],
  },
  "우릴 오만과 편견에 가두지 마": {
    japanese: "私たちを決めつけや偏見の中に閉じ込めないで。",
    literalJapanese: "私たちを傲慢と偏見に閉じ込めないで。",
    sentenceExplanation:
      "他人の決めつけや固定観念の枠に、自分たちの自由を押し込めないでほしいと訴えている。",
    tokens: [
      createToken("오만과 편견", "오만과 편견", "ko", "高慢と偏見", "傲慢と偏見、決めつけの枠"),
      createToken("가두지 마", "가두다", "ko", "閉じ込めないで", "閉じ込めないで", {
        explanation: "-지 마 は『〜しないで』という禁止・制止の形。",
      }),
    ],
  },
  "자유로워 지금": {
    japanese: "今この瞬間、私たちは自由。",
    literalJapanese: "自由だ、今。",
    sentenceExplanation:
      "過去や未来、偏見や形式から抜け出した『今この瞬間の自由』を言い切っている。",
    tokens: [
      createToken("자유로워", "자유롭다", "ko", "自由だ", "自由だ、自由である"),
      createToken("지금", "지금", "ko", "今", "今"),
    ],
  },
  "Feel my rhythm Come with me": {
    japanese: "私のリズムを感じて、一緒に来て。",
    literalJapanese: "私のリズムを感じて、私と一緒に来て。",
    sentenceExplanation:
      "この曲の中心フレーズとして、自分の感覚と世界へ相手をまっすぐ招き入れている。",
    tokens: [
      createToken("Feel my rhythm", "feel my rhythm", "en", "私のリズムを感じて", "私のリズムを感じて"),
      createToken("Come with me", "come with me", "en", "一緒に来て", "一緒に来て"),
    ],
  },
  "상상해 봐 뭐든지": {
    japanese: "何だって想像してみて。",
    literalJapanese: "想像してみて、何でも。",
    sentenceExplanation:
      "制限を外して、どんな世界でも自由に想像していいと背中を押している。",
    tokens: [
      createToken("상상해 봐", "상상해 보다", "ko", "想像してみて", "想像してみて"),
      createToken("뭐든지", "뭐든지", "ko", "何でも", "何でも、どんなことでも"),
    ],
  },
  "노래를 따라서 저 달빛에 춤을 춰": {
    japanese: "歌に合わせて、あの月明かりの下で踊ろう。",
    literalJapanese: "歌について、あの月明かりで踊って。",
    sentenceExplanation:
      "音楽と月明かりが重なる幻想的な場所で、理屈を忘れて踊ろうとしている。",
    tokens: [
      createToken("노래를 따라서", "노래를 따라서", "ko", "歌に合わせて", "歌に沿って、歌に合わせて"),
      createToken("달빛에", "달빛", "ko", "月明かりで", "月明かりで、月明かりの下で"),
      createToken("춤을 춰", "춤을 추다", "ko", "踊って", "踊って、踊ろう"),
    ],
  },
  "바로 지금 (Play my rhythm)": {
    japanese: "今この瞬間に、私のリズムを奏でて。",
    literalJapanese: "まさに今、私のリズムを鳴らして。",
    sentenceExplanation:
      "過去でも未来でもなく、『まさに今』にリズムを鳴らしてほしいと強調している。",
    tokens: [
      createToken("바로 지금", "바로 지금", "ko", "まさに今", "まさに今"),
      createToken("Play my rhythm", "play my rhythm", "en", "私のリズムを鳴らして", "私のリズムを鳴らして"),
    ],
  },
  "Follow follow my heartbeat": {
    japanese: "私の鼓動に合わせて、ついてきて。",
    literalJapanese: "私の鼓動についてきて、ついてきて。",
    sentenceExplanation:
      "音楽のビートだけでなく、自分の内側の鼓動そのものへ相手を合わせようとしている。",
    tokens: [
      createToken("Follow follow", "follow follow", "en", "ついてきて", "ついてきて"),
      createToken("my heartbeat", "my heartbeat", "en", "私の鼓動", "私の鼓動"),
    ],
  },
  "해가 떠올 때까지": {
    japanese: "朝日が昇るまで。",
    literalJapanese: "太陽が昇る時まで。",
    sentenceExplanation:
      "この幻想的な夜とダンスの時間が、朝になるまで続いてほしいと願っている。",
    tokens: [
      createToken("해가 떠올 때까지", "해가 떠오를 때까지", "ko", "朝日が昇るまで", "太陽が昇るまで"),
    ],
  },
  "Feel my rhythm 멈추지 말아 줘": {
    japanese: "私のリズムを感じて、止まらないで。",
    literalJapanese: "私のリズムを感じて、止まらないでくれ。",
    sentenceExplanation:
      "このリズムと夢の時間を、途中で切らずにそのまま走らせてほしいと願っている。",
    tokens: [
      createToken("Feel my rhythm", "feel my rhythm", "en", "私のリズムを感じて", "私のリズムを感じて"),
      createToken("멈추지 말아 줘", "멈추지 말아 주다", "ko", "止まらないで", "止まらないで", {
        explanation: "-지 말아 주다 は『〜しないでくれ』という依頼の形。",
      }),
    ],
  },
  "이 순간을 놓지 마 Baby": {
    japanese: "この瞬間を手放さないで、Baby。",
    literalJapanese: "この瞬間を逃さないで、Baby。",
    sentenceExplanation:
      "自由で幻想的なこの一瞬はすぐ過ぎるから、しっかりつかんでいてほしいと伝えている。",
    tokens: [
      createToken("이 순간", "이 순간", "ko", "この瞬間", "この瞬間"),
      createToken("놓지 마", "놓다", "ko", "手放さないで", "手放さないで、逃さないで"),
      createToken("Baby", "baby", "en", "ベイビー", "親しい呼びかけ"),
    ],
  },
  "차는 Old and Classic": {
    japanese: "車は古くて品のあるクラシック。",
    literalJapanese: "車は古くてクラシック。",
    sentenceExplanation:
      "クラシックな車を持ち出して、この曲の古典的で上品な世界観を視覚化している。",
    tokens: [
      createToken("차", "차", "ko", "車", "車"),
      createToken("Old and Classic", "old and classic", "en", "古くてクラシック", "古くてクラシック、品がある"),
    ],
  },
  "(Just ride)": {
    japanese: "そのまま乗って。",
    literalJapanese: "ただ乗って。",
    sentenceExplanation:
      "難しく考えず、この乗り物と流れにそのまま身をまかせてほしいと促している。",
    tokens: [
      createToken("Just ride", "just ride", "en", "そのまま乗って", "そのまま乗って"),
    ],
  },
  "이제 조금 낯선 다른 차원까지": {
    japanese: "少し見慣れない別次元まで行こう。",
    literalJapanese: "今、少し見慣れない別の次元まで。",
    sentenceExplanation:
      "現実の延長ではなく、少し不思議で見慣れない次元へ移動しようとしている。",
    tokens: [
      createToken("낯선", "낯설다", "ko", "見慣れない", "見慣れない、なじみのない"),
      createToken("다른 차원까지", "다른 차원", "ko", "別の次元まで", "別の次元まで"),
    ],
  },
  "(Get loud)": {
    japanese: "もっと盛り上がって。",
    literalJapanese: "大きくなって。",
    sentenceExplanation:
      "音も感情ももっと大きくして、幻想の世界へ勢いをつけようとしている。",
    tokens: [
      createToken("Get loud", "get loud", "en", "もっと盛り上がって", "もっと盛り上がって"),
    ],
  },
  "상상할 수 없던 곳 시간 속": {
    japanese: "想像もできなかった場所、時間の中へ。",
    literalJapanese: "想像できなかった場所、時間の中。",
    sentenceExplanation:
      "空間だけでなく時間ごとずらしながら、予想できなかった幻想の場所へ入っていく。",
    tokens: [
      createToken("상상할 수 없던", "상상할 수 없다", "ko", "想像できなかった", "想像できなかった"),
      createToken("시간 속", "시간 속", "ko", "時間の中", "時間の中"),
    ],
  },
  "예고 없이 등장해": {
    japanese: "突然、予告もなく現れて。",
    literalJapanese: "予告なしに登場して。",
    sentenceExplanation:
      "この不思議な夜や感情は、順番どおりではなく突然ふっと現れるものとして描かれている。",
    tokens: [
      createToken("예고 없이", "예고 없이", "ko", "予告なしに", "予告なしに"),
      createToken("등장해", "등장하다", "ko", "登場して", "登場して、現れて"),
    ],
  },
  "이 밤은 멋지고 우린": {
    japanese: "この夜は最高で、私たちは。",
    literalJapanese: "この夜は素敵で、私たちは。",
    sentenceExplanation:
      "夜そのものの美しさと、その中にいる自分たちの高揚を並べて次の言葉へつないでいる。",
    tokens: [
      createToken("멋지고", "멋지다", "ko", "素敵で", "素敵で、かっこよくて"),
      createToken("우린", "우리는", "ko", "私たちは", "私たちは"),
    ],
  },
  "Fun and wild and brave": {
    japanese: "楽しくて、大胆で、勇敢。",
    literalJapanese: "楽しく、野性的で、勇敢。",
    sentenceExplanation:
      "この夜の自分たちを、楽しさ・大胆さ・勇敢さの三つで一気に言い切っている。",
    tokens: [
      createToken(
        "Fun and wild and brave",
        "fun and wild and brave",
        "en",
        "楽しくて大胆で勇敢",
        "楽しくて、大胆で、勇敢",
      ),
    ],
  },
  "시선을 끄는 네 Motion": {
    japanese: "目を引くあなたの動き。",
    literalJapanese: "視線を引くあなたの動き。",
    sentenceExplanation:
      "相手の動きそのものが視線をさらっていくほど魅力的だと見ているライン。",
    tokens: [
      createToken("시선을 끄는", "시선을 끌다", "ko", "視線を引く", "視線を引く、注目を集める"),
      createToken("Motion", "motion", "en", "動き", "動き"),
    ],
  },
  "G give me a new direction": {
    japanese: "私に新しい方向を示して。",
    literalJapanese: "新しい方向をちょうだい。",
    sentenceExplanation:
      "相手の存在や動きが、自分をまだ見たことのない方向へ導いていく感覚がある。",
    tokens: [
      createToken("new direction", "new direction", "en", "新しい方向", "新しい方向、新しい進路"),
    ],
  },
  "끝없는 Black hole처럼": {
    japanese: "果てしないブラックホールみたいに。",
    literalJapanese: "終わりのないブラックホールのように。",
    sentenceExplanation:
      "一度入ると抜け出せないような強い引力で、相手や感情に深く引き込まれている。",
    tokens: [
      createToken("끝없는", "끝없다", "ko", "果てしない", "果てしない、終わりのない"),
      createToken("Black hole처럼", "Black hole처럼", "en", "ブラックホールのように", "ブラックホールのように"),
    ],
  },
  "빠져드는 Sweet emotion": {
    japanese: "甘い感情にどんどん引き込まれていく。",
    literalJapanese: "落ちていく甘い感情。",
    sentenceExplanation:
      "危うさもあるけれど抗えない、甘い感情の深みに落ちていく感覚を表している。",
    tokens: [
      createToken("빠져드는", "빠져들다", "ko", "引き込まれる", "引き込まれる、のめり込む"),
      createToken("Sweet emotion", "sweet emotion", "en", "甘い感情", "甘い感情"),
    ],
  },
  "너를 태운 채 (Sway)": {
    japanese: "あなたを乗せたまま、揺れながら。",
    literalJapanese: "あなたを乗せたまま。",
    sentenceExplanation:
      "相手をこの不思議な旅に乗せたまま、一緒に揺れながら先へ進もうとしている。",
    tokens: [
      createToken("너를 태운 채", "너를 태우다", "ko", "あなたを乗せたまま", "あなたを乗せたまま", {
        explanation: "-ㄴ 채 は『〜したまま』という状態の継続。",
      }),
      createToken("Sway", "sway", "en", "揺れて", "揺れて"),
    ],
  },
  "어디로든 떠날래 (Way)": {
    japanese: "どこへだって出かけたい。",
    literalJapanese: "どこへでも去りたい。",
    sentenceExplanation:
      "行き先を決めず、どこへでも飛び出せる自由な旅の感覚を強く出している。",
    tokens: [
      createToken("어디로든", "어디로든", "ko", "どこへでも", "どこへでも"),
      createToken("떠날래", "떠나다", "ko", "出かけたい", "出かけたい、旅立ちたい"),
      createToken("Way", "way", "en", "道", "道、方向"),
    ],
  },
  "온 세상 모든 경계를": {
    japanese: "世界中のあらゆる境界を。",
    literalJapanese: "全世界のすべての境界を。",
    sentenceExplanation:
      "現実と夢、過去と未来、古典と現代みたいな境界そのものを対象にしている。",
    tokens: [
      createToken("온 세상", "온 세상", "ko", "全世界", "全世界"),
      createToken("모든 경계", "모든 경계", "ko", "あらゆる境界", "あらゆる境界"),
    ],
  },
  "다 휘저을래 (Oh yeah)": {
    japanese: "全部かき回してしまいたい。",
    literalJapanese: "全部かき混ぜたい。",
    sentenceExplanation:
      "きれいに分けられた境界をそのままにせず、全部混ぜて新しい景色を作ろうとしている。",
    tokens: [
      createToken("휘저을래", "휘젓다", "ko", "かき回したい", "かき回したい"),
      createToken("Oh yeah", "oh yeah", "en", "オーイェー", "高揚の掛け声"),
    ],
  },
  "(흩날려)": {
    japanese: "ひらひら舞わせて。",
    literalJapanese: "舞い散らせて。",
    sentenceExplanation:
      "花びらや紙吹雪が舞うイメージを短く挟み込み、視覚的な華やかさを強めている。",
    tokens: [
      createToken("흩날려", "흩날리다", "ko", "舞い散らせて", "舞い散らせて、ひらひら舞わせて"),
    ],
  },
  "Champagne을 더 크게 터트려": {
    japanese: "シャンパンをもっと派手に開けて。",
    literalJapanese: "シャンパンをもっと大きく弾けさせて。",
    sentenceExplanation:
      "花火と並ぶ祝祭の演出として、シャンパンの弾ける音まで夜の一部にしている。",
    tokens: [
      createToken("Champagne", "champagne", "en", "シャンパン", "シャンパン"),
      createToken("터트려", "터트리다", "ko", "弾けさせて", "爆発させて、弾けさせて"),
    ],
  },
  "(마음껏)": {
    japanese: "思いきり。",
    literalJapanese: "思う存分。",
    sentenceExplanation:
      "遠慮や抑制を外して、この祝祭の時間を心ゆくまで楽しめと言っている。",
    tokens: [
      createToken("마음껏", "마음껏", "ko", "思う存分", "思う存分、心ゆくまで"),
    ],
  },
  "더는 어제와 내일에 가두지 마": {
    japanese: "もう昨日や明日に縛らないで。",
    literalJapanese: "これ以上、昨日と明日に閉じ込めないで。",
    sentenceExplanation:
      "過去の後悔や未来への不安に自分を閉じ込めず、『今』に自由を戻そうとしている。",
    tokens: [
      createToken("더는", "더는", "ko", "もうこれ以上", "もうこれ以上"),
      createToken("어제와 내일에", "어제와 내일", "ko", "昨日と明日に", "昨日と明日に"),
      createToken("가두지 마", "가두다", "ko", "閉じ込めないで", "閉じ込めないで"),
    ],
  },
  "온 세상이 멈추는 순간": {
    japanese: "世界中が止まるような瞬間。",
    literalJapanese: "全世界が止まる瞬間。",
    sentenceExplanation:
      "時間が止まったように感じるほど特別な一瞬へ、曲の焦点がぎゅっと寄っている。",
    tokens: [
      createToken("온 세상이", "온 세상", "ko", "世界中が", "世界中が"),
      createToken("멈추는 순간", "멈추다", "ko", "止まる瞬間", "止まる瞬間"),
    ],
  },
  "What a what a feeling": {
    japanese: "なんて特別な感覚。",
    literalJapanese: "なんて、なんて感覚。",
    sentenceExplanation:
      "言葉で説明しきれない高揚を、そのまま感嘆としてこぼしているライン。",
    tokens: [
      createToken(
        "What a what a feeling",
        "what a what a feeling",
        "en",
        "なんて感覚",
        "なんて特別な感覚",
      ),
    ],
  },
  "어서 내 손을 잡아": {
    japanese: "さあ、私の手を取って。",
    literalJapanese: "早く私の手を握って。",
    sentenceExplanation:
      "一人で眺めるのでなく、手を取って一緒にこの世界へ入ってほしいと強く誘っている。",
    tokens: [
      createToken("어서", "어서", "ko", "さあ、早く", "さあ、早く"),
      createToken("내 손을 잡아", "손을 잡다", "ko", "私の手を取って", "私の手を取って"),
    ],
  },
  "(All right)": {
    japanese: "All right",
    literalJapanese: "大丈夫。",
    sentenceExplanation:
      "相手の不安を軽くほどいて、『そのまま来ていい』と安心させる短い合図になっている。",
    tokens: [
      createToken("All right", "all right", "en", "オールライト", "大丈夫、いいよ"),
    ],
  },
  "본 적 없던 Film": {
    japanese: "今まで見たことのない映画みたいな場面。",
    literalJapanese: "見たことのなかった映画。",
    sentenceExplanation:
      "目の前の出来事を現実ではなく、未体験の映画みたいなシーンとして捉えている。",
    tokens: [
      createToken("본 적 없던", "본 적 없다", "ko", "見たことのない", "見たことのない"),
      createToken("Film", "film", "en", "映画", "映画、フィルム"),
    ],
  },
  "빠져드는 You and I": {
    japanese: "あなたと私は、そこへ吸い込まれていく。",
    literalJapanese: "引き込まれていくあなたと私。",
    sentenceExplanation:
      "一人だけでなく、あなたと私の二人が同じ夢や映像の中へ引き込まれていく。",
    tokens: [
      createToken("빠져드는", "빠져들다", "ko", "引き込まれていく", "引き込まれていく"),
      createToken("You and I", "you and I", "en", "あなたと私", "あなたと私"),
    ],
  },
  "Next time 시계를 돌려": {
    japanese: "次は時計を巻き戻して。",
    literalJapanese: "次は時計を回して。",
    sentenceExplanation:
      "時間そのものまで自由に扱えるような感覚で、次の夢の場面へ移ろうとしている。",
    tokens: [
      createToken("Next time", "next time", "en", "次は", "次は"),
      createToken("시계를 돌려", "시계를 돌리다", "ko", "時計を巻き戻して", "時計を回して、巻き戻して"),
    ],
  },
  "어디로 가볼까": {
    japanese: "どこへ行ってみようか。",
    literalJapanese: "どこへ行ってみようか。",
    sentenceExplanation:
      "行き先を決めず、想像の旅を続けられる自由そのものを楽しんでいる。",
    tokens: [
      createToken("어디로", "어디로", "ko", "どこへ", "どこへ"),
      createToken("가볼까", "가보다", "ko", "行ってみようか", "行ってみようか"),
    ],
  },
  "Come on 또다시 시작해": {
    japanese: "さあ、もう一度始めよう。",
    literalJapanese: "さあ、また再び始めて。",
    sentenceExplanation:
      "終わったかと思った夢や祝祭を、もう一度最初から回し始めようとしている。",
    tokens: [
      createToken("Come on", "come on", "en", "さあ", "さあ"),
      createToken("또다시", "또다시", "ko", "もう一度", "もう一度、再び"),
      createToken("시작해", "시작하다", "ko", "始めて", "始めて、始めよう"),
    ],
  },
  "You and I": {
    japanese: "あなたと私で。",
    literalJapanese: "あなたと私。",
    sentenceExplanation:
      "この幻想の旅やリズムは一人ではなく、あなたと私の二人で作るものだと戻している。",
    tokens: [
      createToken("You and I", "you and I", "en", "あなたと私", "あなたと私"),
    ],
  },
  "Feel my rhythm 끝나지 않는 꿈": {
    japanese: "私のリズムを感じて。これは終わらない夢。",
    literalJapanese: "私のリズムを感じて、終わらない夢。",
    sentenceExplanation:
      "最後はこの夜とリズム全体を『終わらない夢』として包み、余韻の中で締めている。",
    tokens: [
      createToken("Feel my rhythm", "feel my rhythm", "en", "私のリズムを感じて", "私のリズムを感じて"),
      createToken("끝나지 않는 꿈", "끝나지 않다", "ko", "終わらない夢", "終わらない夢", {
        explanation: "-지 않는 は『〜しない』の連体形で、『終わらない〜』を作る。",
      }),
    ],
  },
};

const lyricsSequence: string[] = [
  "Red Velvet",
  "무도회를 뒤집어",
  "작은 소란을 또 일으켜",
  "This is gonna be a crazy night",
  "(To na na na na na night)",
  "등장부터 인사까지 파격적이게",
  "우리 살짝 놀아볼까",
  "솔직하게 Bae bae",
  "지금부터 시작해 볼게",
  "(Feel my vibe and sway)",
  "꽃가루를 날려",
  "폭죽을 더 크게 터트려",
  "우릴 오만과 편견에 가두지 마",
  "자유로워 지금",
  "Feel my rhythm Come with me",
  "상상해 봐 뭐든지",
  "노래를 따라서 저 달빛에 춤을 춰",
  "바로 지금 (Play my rhythm)",
  "Follow follow my heartbeat",
  "해가 떠올 때까지",
  "Feel my rhythm 멈추지 말아 줘",
  "이 순간을 놓지 마 Baby",
  "차는 Old and Classic",
  "(Just ride)",
  "이제 조금 낯선 다른 차원까지",
  "(Get loud)",
  "상상할 수 없던 곳 시간 속",
  "예고 없이 등장해",
  "이 밤은 멋지고 우린",
  "Fun and wild and brave",
  "시선을 끄는 네 Motion",
  "G give me a new direction",
  "끝없는 Black hole처럼",
  "빠져드는 Sweet emotion",
  "너를 태운 채 (Sway)",
  "어디로든 떠날래 (Way)",
  "온 세상 모든 경계를",
  "다 휘저을래 (Oh yeah)",
  "꽃가루를 날려",
  "(흩날려)",
  "Champagne을 더 크게 터트려",
  "(마음껏)",
  "더는 어제와 내일에 가두지 마",
  "자유로워 지금",
  "Feel my rhythm Come with me",
  "상상해 봐 뭐든지",
  "노래를 따라서 저 달빛에 춤을 춰",
  "바로 지금 (Play my rhythm)",
  "Follow follow my heartbeat",
  "해가 떠올 때까지",
  "Feel my rhythm 멈추지 말아 줘",
  "이 순간을 놓지 마 Baby",
  "온 세상이 멈추는 순간",
  "What a what a feeling",
  "어서 내 손을 잡아",
  "(All right)",
  "본 적 없던 Film",
  "빠져드는 You and I",
  "Next time 시계를 돌려",
  "어디로 가볼까",
  "Come on 또다시 시작해",
  "You and I",
  "Feel my rhythm Come with me",
  "상상해 봐 뭐든지",
  "노래를 따라서 저 달빛에 춤을 춰",
  "바로 지금 (Play my rhythm)",
  "Follow follow my heartbeat",
  "해가 떠올 때까지",
  "Feel my rhythm 끝나지 않는 꿈",
  "이 순간을 놓지 마 Baby",
];

export const completeFeelMyRhythmLines: LyricLine[] = lyricsSequence.map(
  (korean, lineIndex) => {
    const template = lineTemplates[korean];

    return {
      id: `line-${lineIndex + 1}`,
      korean,
      japanese: template.japanese,
      literalJapanese: template.literalJapanese,
      sentenceExplanation: template.sentenceExplanation,
      tokens: template.tokens.map((token, tokenIndex) => ({
        id: `line-${lineIndex + 1}-t${tokenIndex + 1}`,
        ...token,
      })),
    };
  },
);

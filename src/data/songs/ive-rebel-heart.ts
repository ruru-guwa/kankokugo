import type { Song } from "../../types/song";
import { completeRebelHeartLines } from "./_rh-lines-all";

const rebelHeartSectionBreaks = new Set([
  4, 8, 9, 13, 19, 23, 27, 29, 33, 39, 40, 46, 50,
]);

const expandTextMap = (
  groups: Array<[number[], string]>,
): Record<number, string> =>
  Object.fromEntries(
    groups.flatMap(([numbers, text]) => numbers.map((number) => [number, text])),
  );

const rebelHeartRoleMap = expandTextMap([
  [[1, 2, 3, 4], "オープニングで『最初から自分を信じて始める』姿勢を固める導入パート。"],
  [[5, 6, 7, 8], "周囲よりも自分の心を守ることへ焦点を移す、自立のパート。"],
  [[9], "サビへ入る直前の短い助走。『好きにすればいい』という余裕を作る。"],
  [[10, 11, 12, 13], "相手の評価を受け流しながら、自分は自分だと突き返すサビ前半。"],
  [[14, 15, 16, 17, 18, 19], "曲の核になるコーラス。反骨心と『折れなさ』を集中的に打ち出す。"],
  [[20, 21, 22, 23], "『足りない』『やりすぎ』と決めつける声をまとめて跳ね返す2番の導入。"],
  [[24, 25, 26, 27], "言葉より行動を選び、自分の道を進む意志を前に出すパート。"],
  [[28, 29], "孤独な夜でも思いを上に打ち上げる、感情の持ち上げ役。"],
  [[30, 31, 32, 33, 34, 35, 36, 37, 38, 39], "2回目のサビ。1回目よりも『折れない意思』の確認として響く繰り返し。"],
  [[40], "コーラスの余韻を強く残す叫びの一行。"],
  [[41, 42, 43, 44, 45, 46], "後半ブリッジ。自己主張だけでなく、分かり合える相手との連帯へ広がる。"],
  [[47, 48, 49, 50], "『ありのまま来ていい』と仲間を招き入れる、開かれたメッセージ。"],
  [[51, 52, 53, 54, 55, 56], "最後のコーラス。個人の反骨心が『私たち』の強さとして締めくくられる。"],
]);

const rebelHeartExtraGrammar: Record<
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
      title: "-ㄴ/는 것처럼",
      meaning: "〜したかのように",
      explanation:
        "すでにそうなったような前提で態度を取る表現。다 이룬 것처럼 で『全部叶えたかのように』。",
      example: "아무 일 없는 것처럼 웃어",
      exampleJapanese: "何事もないかのように笑う",
    },
  ],
  2: [
    {
      title: "마치 ~ 것처럼",
      meaning: "まるで〜したかのように",
      explanation:
        "比喩や仮想の状態を強く押し出す形。승리한 것처럼 で『勝ったかのように』。",
      example: "마치 꿈꾼 것처럼",
      exampleJapanese: "まるで夢を見たかのように",
    },
  ],
  3: [
    {
      title: "-지 않고",
      meaning: "〜せずに",
      explanation:
        "前の動作をしないまま次へつなぐ形。겁내지 않고 で『怖がらずに』。",
      example: "쉬지 않고 달렸어",
      exampleJapanese: "休まずに走った",
    },
    {
      title: "-ㄹ래 / -을래",
      meaning: "〜するつもり、〜したい",
      explanation:
        "話し手の意志をくだけて表す語尾。쏟을래 は『注ぎたい』『注ぐつもりだ』。",
      example: "내가 갈래",
      exampleJapanese: "私が行くよ",
    },
  ],
  4: [
    {
      title: "-대로",
      meaning: "〜のままに、〜通りに",
      explanation:
        "名詞や連体形に付いて『その通りに』『そのままに』を表す。내 모양대로 で『私らしい形のままに』。",
      example: "생각한 대로 해",
      exampleJapanese: "思った通りにやって",
    },
  ],
  6: [
    {
      title: "動詞 + -기",
      meaning: "〜すること",
      explanation:
        "動詞を名詞化する形。지키기 は『守ること』になっていて、宣言のような響きがある。",
      example: "포기하기 싫어",
      exampleJapanese: "諦めるのは嫌だ",
    },
  ],
  7: [
    {
      title: "-ㄹ/을 땐",
      meaning: "〜するときは",
      explanation:
        "때는 の縮約形で、場面を切り出す。받을 땐 で『受けるときは』。",
      example: "힘들 땐 쉬어",
      exampleJapanese: "つらいときは休んで",
    },
    {
      title: "-아/어 두다",
      meaning: "〜しておく",
      explanation:
        "動作をして、その状態を保っておく形。맡겨두다 は『任せておく』。",
      example: "문 열어 둬",
      exampleJapanese: "ドアを開けておいて",
    },
  ],
  8: [
    {
      title: "-ㄹ 거니까",
      meaning: "〜するはずだから、〜するから",
      explanation:
        "未来の見通しや意志を理由として置く言い方。알게 될 거니까 で『分かるようになるはずだから』。",
      example: "잘될 거니까 걱정 마",
      exampleJapanese: "うまくいくはずだから心配しないで",
    },
  ],
  5: [
    {
      title: "더 이상",
      meaning: "これ以上、もう",
      explanation:
        "今を境にそこから先はしない、という線引きを出す副詞表現。더 이상 신경 쓰지 않아 で『もうこれ以上気にしない』。",
      example: "더 이상 참지 않아",
      exampleJapanese: "もうこれ以上我慢しない",
    },
  ],
  22: [
    {
      title: "-든",
      meaning: "〜でも、何であっても",
      explanation:
        "選択や範囲を広く開く形。뭐든 で『何でも』となり、他人の言葉全般をまとめて受け流している。",
      example: "뭐든 말해 봐",
      exampleJapanese: "何でも言ってみて",
    },
  ],
  23: [
    {
      title: "-ㄴ/은 거야",
      meaning: "〜なんだ、〜ということだ",
      explanation:
        "説明や断定をやわらかく言い切る形。어려운 거야 で『難しいんだ』。",
      example: "이게 중요한 거야",
      exampleJapanese: "これが大事なんだ",
    },
  ],
  25: [
    {
      title: "-ㄹ게",
      meaning: "〜するね",
      explanation:
        "自分の意志を相手に向けて軽く約束する形。할게 で『やるね』。",
      example: "내가 해볼게",
      exampleJapanese: "私がやってみるね",
    },
  ],
  28: [
    {
      title: "-아/어지다",
      meaning: "〜くなる、〜になる",
      explanation:
        "状態変化を表す基本形。길어지는 で『長くなっていく』。",
      example: "조용해졌어",
      exampleJapanese: "静かになった",
    },
  ],
  29: [
    {
      title: "쏘아 올리다",
      meaning: "打ち上げる、高く放つ",
      explanation:
        "쏘다 と 올리다 が合わさり、下から上へ勢いよく放つ感じを作る。感情を閉じ込めず外へ上げる比喩にもなる。",
      example: "불꽃을 쏘아 올리다",
      exampleJapanese: "花火を打ち上げる",
    },
  ],
  42: [
    {
      title: "-ㄹ 때가 있다",
      meaning: "〜するときがある",
      explanation:
        "いつもではないが、そういう瞬間があることを表す。필요할 때가 있어 で『必要な時がある』。",
      example: "혼자 있고 싶을 때가 있어",
      exampleJapanese: "一人でいたい時がある",
    },
  ],
  43: [
    {
      title: "-ㄴ/는지",
      meaning: "〜かどうか、〜なのか",
      explanation:
        "内容をぼかして『どんなものか』を表す形。어떤 건지 で『どんなものなのか』。",
      example: "왜 그런지 알아",
      exampleJapanese: "なぜそうなのか分かる",
    },
    {
      title: "-기에",
      meaning: "〜なので、〜だから",
      explanation:
        "理由をやや文語寄りに言う形。잘 알기에 で『よく分かっているから』。",
      example: "시간이 없기에 서둘렀어",
      exampleJapanese: "時間がないので急いだ",
    },
  ],
  44: [
    {
      title: "-보단",
      meaning: "〜よりは",
      explanation:
        "보다 + 는 が縮まったような比較表現。사이보단 で『関係よりは』。",
      example: "말보단 행동이 중요해",
      exampleJapanese: "言葉より行動が大事だ",
    },
  ],
  45: [
    {
      title: "-아/어 주다",
      meaning: "〜してあげる、〜してくれる",
      explanation:
        "相手のために何かをしてあげる／してくれる気持ちを含む。이해해주다 は『理解してあげる』。",
      example: "좀 들어줘",
      exampleJapanese: "ちょっと聞いてよ",
    },
    {
      title: "-고 싶어",
      meaning: "〜したい",
      explanation:
        "話し手の希望を表す基本形。이해해주고 싶어 で『理解してあげたい』。",
      example: "보고 싶어",
      exampleJapanese: "会いたい",
    },
  ],
  46: [
    {
      title: "will always",
      meaning: "これからもずっと〜する",
      explanation:
        "未来へ続く継続の意思を置く英語表現。We will always be... で『私たちはこれからもずっと〜だ』。",
      example: "I will always remember you",
      exampleJapanese: "君をずっと覚えているよ",
    },
  ],
  47: [
    {
      title: "as A",
      meaning: "Aとして、Aのままで",
      explanation:
        "join as who you are で『ありのままのあなたとして加わって』。変わることを条件にしない言い方。",
      example: "Come as you are",
      exampleJapanese: "ありのままで来て",
    },
  ],
  48: [
    {
      title: "we are one",
      meaning: "私たちは一つだ",
      explanation:
        "完全に同じというより、同じ思いでつながっていることを表すフレーズ。",
      example: "Together, we are one",
      exampleJapanese: "一緒なら私たちは一つだ",
    },
  ],
  49: [
    {
      title: "-만으로",
      meaning: "〜だけで",
      explanation:
        "理由や手段を『それだけで十分』と限定する形。이 마음만으로 で『この気持ちだけで』。",
      example: "그 말만으로 충분해",
      exampleJapanese: "その言葉だけで十分だ",
    },
  ],
};

const rebelHeartTokenMeanings: Record<number, Record<string, string>> = {
  9: {
    "you can": "判断する自由は相手に渡しつつ、自分はそれに振り回されないという余裕。",
  },
  10: {
    "Love me": "好意を向けること自体は相手の自由だという受け止め。",
    "hate me": "嫌われることも前提に入れたうえで、それでも自分は変わらないという強さ。",
  },
  11: {
    "You will never be me": "どれだけ見たり真似したりしても、自分の人生そのものにはなれないという宣言。",
    "never be never be never be": "絶対に揺るがないことを反復で叩き込む強調。",
  },
  12: {
    "Try me": "できるならやってみて、と相手を挑発する言い方。",
    "break free": "束縛や決めつけから自力で抜け出すこと。",
  },
  4: {
    "내 모양대로": "他人の型ではなく、自分に合う輪郭のままで進むこと。",
  },
  7: {
    "자유": "ここでは『相手が勝手に解釈する自由』まで含めて手放している感覚。",
    "맡겨두다": "無理に説明せず、そのまま時間に委ねておくこと。",
  },
  8: {
    "알게 될 거니까": "今は誤解されても、いずれ分かると信じている前向きな理由づけ。",
  },
  14: {
    rebels: "派手に反抗する人というより、心の中で流されない人たち。",
    "in our heart": "戦う場所が外側ではなく、自分の内面にあること。",
  },
  15: {
    Rebels: "心の奥に置いている、折れない核のようなもの。",
  },
  18: {
    "꺾이다": "枝が折れるだけでなく、心や意志がくじけることまで含む。",
  },
  22: {
    "I don't care": "相手の評価の内容そのものを、受け取らずに切り離す態度。",
    뭐든: "何を言われても、どんな言葉でもという広い受け流し。",
  },
  24: {
    "Do it": "考えるより、まずやれという行動優先の合図。",
    "move it": "止まらず動け、進めという加速の命令。",
  },
  25: {
    그냥: "複雑に正当化せず、そのままやる軽さ。",
    할게: "説明より先に、自分たちは実際にやるという意思表示。",
  },
  26: {
    "갈 길": "まだ自分が進んでいくべき、長い道のりそのもの。",
  },
  27: {
    드라마: "苦労も高揚も含めた、自分の道の上に待つ物語や波乱。",
  },
  29: {
    "쏘아 올려": "閉じ込めるのではなく、思いを上へ放ってしまう動き。",
  },
  41: {
    따로: "わざわざ説明や理由を求めなくても、という距離感。",
  },
  42: {
    "필요할 때": "自立していても、互いを必要とする瞬間があること。",
  },
  43: {
    "잘 알기에": "自分たちが同じ痛みや気持ちを知っているからこその理解。",
  },
  45: {
    "이해해주고 싶어": "永遠を誓うより、今の気持ちを分かち合いたいというやさしさ。",
  },
  46: {
    "the rebels": "一時的な強がりではなく、これからも続いていく自分たちの核。",
  },
  47: {
    "who you are": "変わった後の理想像ではなく、今のあなたそのもの。",
  },
  48: {
    "We are rebels, we are one": "反骨心を持つ仲間として一つにつながっている、という連帯の宣言。",
    "we are one": "同じ形になるのではなく、同じ気持ちで結ばれていること。",
  },
  49: {
    "이 마음만으로": "大きな証明がなくても、この気持ちだけで十分だということ。",
  },
};

const rebelHeartExtraSentenceExplanations: Record<number, string> = {
  9: "ここでは相手の感情や評価の自由を先に認めたうえで、自分はそこに支配されないと線を引いている。",
  24: "考え込むより、まず動くことを短い英語で畳みかける行。",
  29: "長くなった孤独や寂しさを、内側にためず上へ放っていこうとする一行。",
  40: "コーラスの意味を、叫びそのものに変えて印象づける短いライン。",
  47: "『変わってから来て』ではなく、今のあなたのままで加わっていいと招き入れている。",
  48: "反骨心を持つ者同士が、同じ気持ちでつながっていると確認するブリッジの中心行。",
  49: "言葉や証明よりも、この気持ちだけで十分につながれると結論づけている。",
};

const rebelHeartExtraNuance: Record<number, string> = {
  9: "この短い英語行で、相手の評価の自由と自分の不動さを同時に置いているのが巧い。",
  10: "好きも嫌いも受け止めるが、どちらにも自分の価値を預けないという姿勢がある。",
  11: "『私にはなれない』は優越感より、自分の人生は自分だけのものだという境界線の宣言に近い。",
  12: "試されても壊れず、むしろそこから自由になるという反骨心の実演。",
  24: "短い英語の反復が、理屈より勢いで前へ出るこの曲の行動原理になっている。",
  29: "花火みたいに思いを打ち上げるイメージがあり、孤独を受け身で抱えるだけでは終わらない。",
  40: "意味を説明するというより、仲間内の合図やチャントみたいな熱量が強い。",
  46: "一瞬だけ rebellious なのではなく、『これからもそうあり続ける』と時間軸が伸びる。",
  47: "この曲の包容力が最も強く出る行で、条件付きの連帯ではないことが分かる。",
  48: "一人ひとり違っていても、折れなさの感覚だけは共有しているという連帯感。",
  49: "理屈や肩書きより、今ここにある心の一致だけで十分だとする静かな強さ。",
};

const rebelHeartReadings = [
  "シジャグン ハンサン ダ イルン ゴッチョロム",
  "エンディングン マチ スンリハン ゴッチョロム",
  "コムネジ アンコ マウムル ッソドゥルレ",
  "ネ モヤンデロ",
  "イジェ ト イサン シンギョン スジ アナ",
  "オディエソド ネ マムル チキギ",
  "オヘ パドゥル ッテン チャユエ マッキョドゥルレ",
  "タ アルゲ ドェル コニカ",
  "ソー ユー キャン",
  "ラブ ミー ヘイト ミー",
  "ユー ウィル ネヴァー ビー ネヴァー ビー ネヴァー ビー ミー",
  "トライ ミー アイル ブレイク フリー",
  "ユー ウィル ネヴァー ビー ネヴァー ビー ネヴァー ビー ミー",
  "ウィー アー レベルズ イン アワ ハート",
  "レベルズ イン アワ ハート",
  "ウィー アー レベルズ イン アワ ハート",
  "ウィー アー レベルズ イン アワ ハート",
  "コッキジ アナ",
  "ウィー アー レベルズ イン アワ ハート",
  "ノヌン オディガ チョグム プジョケ",
  "ノヌン コギガ ムォンガ チョム ノムチョ",
  "アイ ドント ケア ムォドゥン マルン チャム シプチ",
  "クレ シレンイ オリョウン ゴヤ",
  "ドゥー イット ムーヴ イット ドゥー イット",
  "ウリン クニャン ハルケ",
  "ネ カル キルン モルゴ",
  "ク ウィエヌン ドゥラマガ イッソ",
  "ット ウェロウミ ノム キロジヌン パメン",
  "ク マムル ッソア オルリョ",
  "ラブ ミー ヘイト ミー",
  "ユー ウィル ネヴァー ビー ネヴァー ビー ネヴァー ビー ミー",
  "トライ ミー アイル ブレイク フリー",
  "ユー ウィル ネヴァー ビー ネヴァー ビー ネヴァー ビー ミー",
  "ウィー アー レベルズ イン アワ ハート",
  "レベルズ イン アワ ハート",
  "ウィー アー レベルズ イン アワ ハート",
  "ウィー アー レベルズ イン アワ ハート",
  "コッキジ アナ",
  "ウィー アー レベルズ イン アワ ハート",
  "レベルズ イン アワ ハート",
  "ウリン タロ イユルル ムッチ アンコ",
  "ソロガ ピリョハル ッテガ イッソ",
  "クロン マミ オットン コンジ チャル アルギエ",
  "ヨンウォヌル パラヌン サイボダン",
  "チグムル イヘヘジュゴ シポ",
  "ウィー ウィル オールウェイズ ビー ザ レベルズ",
  "カム ジョイン アズ フー ユー アー",
  "ウィー アー レベルズ ウィー アー ワン",
  "イ マウムマヌロ",
  "ウィー アー レベルズ ウィー アー ワン",
  "ウィー アー レベルズ イン アワ ハート",
  "レベルズ イン アワ ハート",
  "ウィー アー レベルズ イン アワ ハート",
  "ウィー アー レベルズ イン アワ ハート",
  "コッキジ アナ",
  "ウィー アー レベルズ イン アワ ハート",
];

export const iveRebelHeart: Song = {
  id: "ive-rebel-heart",
  title: "REBEL HEART",
  artist: "IVE",
  difficulty: "中級",
  tags: ["自己肯定", "反骨心", "励まし", "英語ミックス", "中級"],

  overview:
    "人にどう見られても自分の心を守り、自分らしい形で進むことを歌った曲。批判や誤解に振り回されず、『好きでも嫌いでもいい。でもあなたは私にはなれない』という芯の強さを貫いています。孤独や迷いを抱えながらも折れず、同じ気持ちを持つ仲間とつながる感覚まで描かれているのが特徴です。",

  lines: completeRebelHeartLines.map((line, index) => {
    const lineNumber = index + 1;
    const extraGrammar =
      rebelHeartExtraGrammar[lineNumber]?.map((grammarPoint, grammarIndex) => ({
        id: `line-${lineNumber}-extra-g${grammarIndex + 1}`,
        ...grammarPoint,
      })) ?? [];

    return {
      ...line,
      reading: rebelHeartReadings[index],
      roleInSong: rebelHeartRoleMap[lineNumber] ?? line.roleInSong,
      sectionBreakAfter: rebelHeartSectionBreaks.has(lineNumber),
      sentenceExplanation:
        rebelHeartExtraSentenceExplanations[lineNumber] ??
        line.sentenceExplanation,
      nuance: rebelHeartExtraNuance[lineNumber] ?? line.nuance,
      grammarPoints: [...(line.grammarPoints ?? []), ...extraGrammar],
      tokens: line.tokens.map((token) => ({
        ...token,
        meaningInThisLine:
          rebelHeartTokenMeanings[lineNumber]?.[token.surface] ??
          token.meaningInThisLine,
      })),
    };
  }),

  quizzes: [
    {
      id: "q1",
      type: "word-meaning",
      question: "신경 쓰다 の意味は？",
      choices: ["気にする", "守る", "叫ぶ", "変わる"],
      answer: "気にする",
      explanation: "直訳は『神経を使う』ですが、韓国語では『気にする』という意味でよく使います。",
      songId: "ive-rebel-heart",
    },
    {
      id: "q2",
      type: "grammar",
      question: "「-지 않고」の意味は？",
      choices: ["〜せずに", "〜したあとで", "〜するために", "〜してしまう"],
      answer: "〜せずに",
      explanation: "겁내지 않고 で『怖がらずに』。前の動作をしないまま次へつなぐ表現です。",
      songId: "ive-rebel-heart",
    },
    {
      id: "q3",
      type: "word-base",
      question: "맡겨둘래 の原形は？",
      choices: ["맡겨두다", "맡기다", "맡아두다", "맡겨보다"],
      answer: "맡겨두다",
      explanation: "맡기다（任せる）+ 두다（〜しておく）が合わさった形です。",
      songId: "ive-rebel-heart",
    },
    {
      id: "q4",
      type: "grammar",
      question: "「-ㄹ래 / -을래」の意味は？",
      choices: ["〜するつもり、〜したい", "〜したことがある", "〜しなければならない", "〜するらしい"],
      answer: "〜するつもり、〜したい",
      explanation: "쏟을래、맡겨둘래 などで話し手の意志を表しています。",
      songId: "ive-rebel-heart",
    },
    {
      id: "q5",
      type: "fill-blank",
      question: "「어디에서도 내 맘을 _____」の空欄に入るのは？",
      choices: ["지키기", "믿기", "숨기기", "안기기"],
      answer: "지키기",
      explanation: "어디에서도 내 맘을 지키기 で『どんな場所でも自分の心を守ること』です。",
      songId: "ive-rebel-heart",
    },
    {
      id: "q6",
      type: "word-meaning",
      question: "꺾이다 の意味は？",
      choices: ["折れる、くじける", "燃え上がる", "隠れる", "跳ね返る"],
      answer: "折れる、くじける",
      explanation: "꺾이지 않아 で『折れない、くじけない』という曲の核心表現になります。",
      songId: "ive-rebel-heart",
    },
    {
      id: "q7",
      type: "fill-blank",
      question: "「You will never be never be never be _____」の空欄に入るのは？",
      choices: ["me", "free", "one", "heart"],
      answer: "me",
      explanation: "『あなたは決して私にはなれない』という強い自己宣言です。",
      songId: "ive-rebel-heart",
    },
    {
      id: "q8",
      type: "grammar",
      question: "動詞 + 「-기」の意味は？",
      choices: ["〜すること", "〜しながら", "〜したい", "〜してみる"],
      answer: "〜すること",
      explanation: "지키기 は 지키다（守る）を名詞化して『守ること』にした形です。",
      songId: "ive-rebel-heart",
    },
    {
      id: "q9",
      type: "word-meaning",
      question: "바라다 の意味は？",
      choices: ["望む、願う", "比べる", "集める", "壊す"],
      answer: "望む、願う",
      explanation: "영원을 바라는 사이보단 で『永遠を望む関係よりは』という意味で使われています。",
      songId: "ive-rebel-heart",
    },
    {
      id: "q10",
      type: "grammar",
      question: "「-보단」の意味は？",
      choices: ["〜よりは", "〜だけは", "〜までは", "〜ほどは"],
      answer: "〜よりは",
      explanation: "영원을 바라는 사이보단 で比較の『〜よりは』を表します。보다 + 는 の縮約的な形です。",
      songId: "ive-rebel-heart",
    },
    {
      id: "q11",
      type: "which-song",
      question: "「Come, join as who you are」はどの曲？",
      text: "Come, join as who you are",
      choices: ["REBEL HEART", "BANG BANG", "Blue Valentine", "Drama"],
      answer: "REBEL HEART",
      explanation: "IVE『REBEL HEART』。ありのままの自分で加わってほしい、という連帯のメッセージです。",
      songId: "ive-rebel-heart",
    },
    {
      id: "q12",
      type: "word-meaning",
      question: "내 모양대로 の自然な意味は？",
      choices: ["私らしい形で", "私の顔のままで", "私の真似をして", "私の外見だけで"],
      answer: "私らしい形で",
      explanation: "他人に合わせず、自分のあり方のまま進むというこの曲らしい表現です。",
      songId: "ive-rebel-heart",
    },
    {
      id: "q13",
      type: "grammar",
      question: "「-기에」の意味は？",
      choices: ["〜だから、〜なので", "〜したけれど", "〜するために", "〜しながら"],
      answer: "〜だから、〜なので",
      explanation: "잘 알기에 で『よく分かっているから』。理由をやや文語寄りに表す形です。",
      songId: "ive-rebel-heart",
    },
    {
      id: "q14",
      type: "grammar",
      question: "맡겨두다 に入っている「-아/어 두다」の意味は？",
      choices: ["〜しておく", "〜してみる", "〜したい", "〜してしまう"],
      answer: "〜しておく",
      explanation: "맡겨두다 は『任せておく』。動作の結果をそのまま保つニュアンスがあります。",
      songId: "ive-rebel-heart",
    },
    {
      id: "q15",
      type: "fill-blank",
      question: "「그런 맘이 어떤 건지 잘 _____」の空欄に入るのは？",
      choices: ["알기에", "믿기에", "보기에", "주기에"],
      answer: "알기에",
      explanation: "『そういう気持ちがどんなものか、よく分かっているから』という流れです。",
      songId: "ive-rebel-heart",
    },
    {
      id: "q16",
      type: "grammar",
      question: "「-고 싶어」の意味は？",
      choices: ["〜したい", "〜してしまう", "〜するべきだ", "〜するだろう"],
      answer: "〜したい",
      explanation: "이해해주고 싶어 で『理解してあげたい』。話し手の気持ちをそのまま出す形です。",
      songId: "ive-rebel-heart",
    },
  ],
};

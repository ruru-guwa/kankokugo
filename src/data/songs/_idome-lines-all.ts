import type { LyricLine, Token } from "../../types/song";

type TokenSeed = Omit<Token, "id">;
type LineTemplate = Omit<LyricLine, "id" | "korean" | "tokens"> & {
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
  "I could go somewhere": {
    japanese: "どこへだって行ける気がする。",
    literalJapanese: "私はどこかへ行ける。",
    sentenceExplanation:
      "行き先をまだ決め切っていなくても、自分には動き出せる自由があると感じている。",
    tokens: [
      createToken("could", "could", "en", "〜できそう", "〜できる、〜できそうだ"),
      createToken(
        "go somewhere",
        "go somewhere",
        "en",
        "どこかへ行く",
        "どこかへ行く",
      ),
    ],
  },
  "Maybe anywhere": {
    japanese: "きっと、どこへだって。",
    literalJapanese: "たぶん、どこへでも。",
    sentenceExplanation:
      "目的地を限定せず、可能性がどこへでも開いている感覚を広げている。",
    tokens: [
      createToken("Maybe", "maybe", "en", "たぶん", "たぶん、もしかすると"),
      createToken("anywhere", "anywhere", "en", "どこへでも", "どこへでも"),
    ],
  },
  "내 직감은 늘 맞으니깐": {
    japanese: "私の直感は、いつも間違っていないから。",
    literalJapanese: "私の直感はいつも当たるから。",
    sentenceExplanation:
      "周りの基準よりも、自分の直感こそが一番信頼できる判断材料だと置いている。",
    tokens: [
      createToken("직감", "직감", "ko", "直感", "直感"),
      createToken("늘", "늘", "ko", "いつも", "いつも、常に"),
      createToken("맞으니깐", "맞으니까", "ko", "当たるから", "当たるから、合っているから", {
        explanation: "標準的には 맞으니까。歌詞ではやわらかい表記で 맞으니깐 になっている。",
      }),
    ],
  },
  "Just feel it": {
    japanese: "ただ感じるだけでいい。",
    literalJapanese: "ただ感じて。",
    sentenceExplanation:
      "考え込みすぎる前に、まず感覚の方を信じろと自分へ言っている。",
    tokens: [
      createToken("Just", "just", "en", "ただ", "ただ、そのまま"),
      createToken("feel it", "feel it", "en", "それを感じて", "それを感じて"),
    ],
  },
  "손끝엔 나비": {
    japanese: "指先には蝶がとまっているみたい。",
    literalJapanese: "指先には蝶。",
    sentenceExplanation:
      "蝶のイメージで、指先まで軽くしなやかに動く自由な感覚を描いている。",
    tokens: [
      createToken("손끝엔", "손끝에는", "ko", "指先には", "指先には", {
        explanation: "손끝에는 の縮約形。",
      }),
      createToken("나비", "나비", "ko", "蝶", "蝶"),
    ],
  },
  "That's my living ring": {
    japanese: "それが私らしさを示す印みたい。",
    literalJapanese: "それが私の生きている指輪。",
    sentenceExplanation:
      "アクセサリーのような比喩で、その自由さが自分らしさの印だと見せている。",
    tokens: [
      createToken(
        "living ring",
        "living ring",
        "en",
        "生きた輪、指輪",
        "生きた輪、指輪のようなイメージ",
      ),
    ],
  },
  "내 걱정 NO!": {
    japanese: "私のことは心配しないで。",
    literalJapanese: "私の心配はNO！",
    sentenceExplanation:
      "人の心配や過干渉を、軽く笑い飛ばすように跳ね返している。",
    tokens: [
      createToken("걱정", "걱정", "ko", "心配", "心配"),
      createToken("NO!", "no", "en", "ノー", "ノー、いらない"),
    ],
  },
  "난 나답게 더 빛나져": {
    japanese: "私は私らしくいるほど、もっと輝ける。",
    literalJapanese: "私は私らしく、もっと輝いていく。",
    sentenceExplanation:
      "自分らしさを保つほど、かえって強く輝けるという自己肯定を言っている。",
    tokens: [
      createToken("나답게", "나답게", "ko", "私らしく", "私らしく、自分らしく"),
      createToken("빛나져", "빛나다", "ko", "輝いていく", "輝いていく、輝ける", {
        explanation: "歌詞では 빛나져 の形で、自然には『もっと輝いていく』の感じ。",
      }),
    ],
  },
  "Feel the breeze": {
    japanese: "風を感じて。",
    literalJapanese: "そよ風を感じて。",
    sentenceExplanation:
      "空気の流れに身をまかせるような軽さで、場面をやわらかく切り替えている。",
    tokens: [createToken("breeze", "breeze", "en", "そよ風", "そよ風")],
  },
  "나만 들리는 소리": {
    japanese: "私にだけ聞こえる声がある。",
    literalJapanese: "私だけに聞こえる音。",
    sentenceExplanation:
      "人には聞こえない、自分だけの内なる声や感覚を指している。",
    tokens: [
      createToken("나만", "나만", "ko", "私だけ", "私だけ"),
      createToken("들리는", "들리다", "ko", "聞こえる", "聞こえる"),
      createToken("소리", "소리", "ko", "音、声", "音、声"),
    ],
  },
  "I can": {
    japanese: "私は言える。",
    literalJapanese: "私はできる。",
    sentenceExplanation:
      "自分にはできるし言える、と一拍置いて意志を示している。",
    tokens: [
      createToken("I can", "I can", "en", "私はできる", "私はできる、私は言える"),
    ],
  },
  "tell myself that": {
    japanese: "自分にそう言い聞かせられる。",
    literalJapanese: "自分自身にそう言う。",
    sentenceExplanation:
      "外からの声ではなく、自分で自分に確信を渡している流れ。",
    tokens: [
      createToken(
        "tell myself that",
        "tell myself that",
        "en",
        "自分にそう言う",
        "自分にそう言う、言い聞かせる",
      ),
    ],
  },
  "I DO ME, I DO me right": {
    japanese: "私は私らしくいる。それでいい。",
    literalJapanese: "私は私をする、私は正しく私をする。",
    sentenceExplanation:
      "曲の中心フレーズとして、自分らしくいること自体が正しいと宣言している。",
    tokens: [
      createToken("I DO ME", "I do me", "en", "私は私らしくやる", "私は私らしくやる"),
      createToken("right", "right", "en", "正しく、ちゃんと", "正しく、ちゃんと"),
    ],
  },
  "그냥 I DO ME, I DO ma way": {
    japanese: "ただ私は私らしく、自分の道を行く。",
    literalJapanese: "ただ、私は私をする。私は私の道を行く。",
    sentenceExplanation:
      "飾らずに、自分の道をそのまま行くという態度を重ねている。",
    tokens: [
      createToken("그냥", "그냥", "ko", "ただ、そのまま", "ただ、そのまま"),
      createToken("ma way", "my way", "en", "自分のやり方", "自分のやり方、自分の道"),
    ],
  },
  "다른 그림들은 upside-down": {
    japanese: "他の景色なんて、逆さまに見えてもいい。",
    literalJapanese: "他の絵たちは上下逆さま。",
    sentenceExplanation:
      "周囲の景色や基準がひっくり返って見えても、自分の感覚を優先している。",
    tokens: [
      createToken("다른 그림들", "다른 그림들", "ko", "他の景色たち", "他の景色たち"),
      createToken("upside-down", "upside-down", "en", "逆さま", "逆さま、上下逆"),
    ],
  },
  "결국 내가 가는 길이야": {
    japanese: "結局これは、私が進む道だから。",
    literalJapanese: "結局、私が行く道だ。",
    sentenceExplanation:
      "最後に選ぶのは自分で、その進んだ先こそが自分の道になるとまとめている。",
    tokens: [
      createToken("결국", "결국", "ko", "結局", "結局、最後には"),
      createToken("가는 길이야", "가는 길이다", "ko", "進む道なんだ", "進む道なんだ"),
    ],
  },
  "남 눈치s, Why do you care?": {
    japanese: "人の目なんて、なんで気にするの？",
    literalJapanese: "他人の顔色たち、なぜ気にするの？",
    sentenceExplanation:
      "人の目をうかがう癖そのものに、『なんでそこまで気にするの』と問い返している。",
    tokens: [
      createToken("남 눈치s", "남 눈치", "ko", "人の目", "他人の顔色、人の目", {
        explanation: "눈치 は空気や相手の反応をうかがう感覚。ここでは『人の目』に近い。",
      }),
      createToken(
        "Why do you care?",
        "Why do you care?",
        "en",
        "なんで気にするの？",
        "なんで気にするの？",
      ),
    ],
  },
  "I'm just 달릴 거야 멋대로": {
    japanese: "私はただ、自分の好きなように走っていく。",
    literalJapanese: "私はただ走るつもり、思うままに。",
    sentenceExplanation:
      "説明より行動を選び、好きなように走ると宣言している。",
    tokens: [
      createToken("달릴 거야", "달리다", "ko", "走るつもりだ", "走るつもりだ、走っていく"),
      createToken("멋대로", "멋대로", "ko", "思うままに", "思うままに、勝手に"),
    ],
  },
  "Still, pinky 노을빛": {
    japanese: "それでも小指には、夕焼けみたいなピンク色。",
    literalJapanese: "それでも、小指、夕焼け色。",
    sentenceExplanation:
      "小さなピンクの夕焼け色で、自分だけの可愛さや柔らかい個性を置いている。",
    tokens: [
      createToken("pinky", "pinky", "en", "小指、ピンク", "小指、ピンクのイメージ"),
      createToken("노을빛", "노을빛", "ko", "夕焼け色", "夕焼け色"),
    ],
  },
  "날개를 달고": {
    japanese: "翼をつけて。",
    literalJapanese: "翼をつけて。",
    sentenceExplanation:
      "自由がそのまま飛ぶための翼になるイメージで、前へ進む力を足している。",
    tokens: [
      createToken("날개를 달고", "날개를 달다", "ko", "翼をつけて", "翼をつけて"),
    ],
  },
  "'이걸 해야 돼.'": {
    japanese: "「これをやらなきゃ。」",
    literalJapanese: "「これをしなきゃいけない。」",
    sentenceExplanation:
      "世間が押しつける『こうすべき』の声を、そのまま引用して見せている。",
    tokens: [
      createToken("해야 돼", "해야 되다", "ko", "しなきゃいけない", "しなきゃいけない"),
    ],
  },
  "'거길 가야 돼.'": {
    japanese: "「そこに行かなきゃ。」",
    literalJapanese: "「そこへ行かなきゃいけない。」",
    sentenceExplanation:
      "進路まで決めたがる外部の圧力を、そのまま続けて並べている。",
    tokens: [
      createToken("가야 돼", "가야 되다", "ko", "行かなきゃいけない", "行かなきゃいけない"),
    ],
  },
  "상관없죠,": {
    japanese: "そんなの関係ない。",
    literalJapanese: "関係ないでしょう。",
    sentenceExplanation:
      "押しつけられた正解に対して、きっぱり『関係ない』と返している。",
    tokens: [
      createToken("상관없죠", "상관없다", "ko", "関係ないでしょう", "関係ないでしょう"),
    ],
  },
  "난 '내'가 될 거에여": {
    japanese: "私は、ちゃんと「私」になる。",
    literalJapanese: "私は「私」になるつもりです。",
    sentenceExplanation:
      "他人の期待ではなく、自分自身になることを目標に据えている。",
    tokens: [
      createToken("내", "나", "ko", "私", "私"),
      createToken("될 거에여", "되다", "ko", "なるつもりだ", "なるつもりだ", {
        explanation: "標準的には 될 거예요 に近い、歌詞らしいやわらかい表記。",
      }),
    ],
  },
  "콩 무당벌레,": {
    japanese: "小さなてんとう虫みたいに。",
    literalJapanese: "豆、てんとう虫。",
    sentenceExplanation:
      "小さくて愛らしいイメージを、自分のユニークさとして飾っている。",
    tokens: [
      createToken("콩", "콩", "ko", "豆", "豆"),
      createToken("무당벌레", "무당벌레", "ko", "てんとう虫", "てんとう虫"),
    ],
  },
  "That's my piercing": {
    japanese: "それが私らしさを表す飾り。",
    literalJapanese: "それが私のピアス。",
    sentenceExplanation:
      "個性的な飾りのように、自分らしさをチャームとして見せている。",
    tokens: [
      createToken("piercing", "piercing", "en", "ピアス", "ピアス、ボディピアス"),
    ],
  },
  "I'm screaming Yeah!": {
    japanese: "私は思いきり叫ぶ、Yeah！",
    literalJapanese: "私は叫んでいる、Yeah！",
    sentenceExplanation:
      "気持ちを抑えずに声へ変えることで、解放感を一気に押し出している。",
    tokens: [
      createToken("screaming", "scream", "en", "叫んでいる", "叫んでいる、叫ぶ"),
      createToken("Yeah!", "yeah", "en", "イェー", "イェー"),
    ],
  },
  "난, 나답게 더 잘해여": {
    japanese: "私は私らしくいるほど、もっと上手くやれる。",
    literalJapanese: "私は、私らしくもっと上手にやります。",
    sentenceExplanation:
      "人に合わせるより、自分らしくいる方がうまくいくと再確認している。",
    tokens: [
      createToken("나답게", "나답게", "ko", "私らしく", "私らしく、自分らしく"),
      createToken("잘해여", "잘하다", "ko", "上手くやる", "上手くやる", {
        explanation: "標準的には 잘해요 に近い、歌詞らしいやわらかい綴り。",
      }),
    ],
  },
  "I run in the air!": {
    japanese: "私は空を駆け抜ける。",
    literalJapanese: "私は空中を走る。",
    sentenceExplanation:
      "空を走るという誇張で、自由が想像以上の高さまで広がったことを示している。",
    tokens: [
      createToken(
        "run in the air",
        "run in the air",
        "en",
        "空を走る",
        "空を走る、空を駆ける",
      ),
    ],
  },
  "잠 못 드는 밤, 나 달빛 보며": {
    japanese: "眠れない夜、月明かりを見つめながら。",
    literalJapanese: "眠れない夜、私は月明かりを見ながら。",
    sentenceExplanation:
      "不安な夜の中でも、月明かりを見ながら静かに自分を見つめている。",
    tokens: [
      createToken("잠 못 드는", "잠 못 들다", "ko", "眠れない", "眠れない"),
      createToken("달빛 보며", "달빛을 보다", "ko", "月明かりを見ながら", "月明かりを見ながら"),
    ],
  },
  "Maybe, I'm 별난 아이": {
    japanese: "たぶん私は、少し変わった子なのかもしれない。",
    literalJapanese: "たぶん、私は変わった子。",
    sentenceExplanation:
      "自分が少し変わっているかもしれないことを、否定せずそのまま受け止めている。",
    tokens: [
      createToken("별난 아이", "별난 아이", "ko", "変わった子", "変わった子"),
    ],
  },
  "Maybe, 내 꿈 의심 들 때도": {
    japanese: "自分の夢を疑ってしまう時でも。",
    literalJapanese: "たぶん、私の夢に疑いが生じる時も。",
    sentenceExplanation:
      "夢を疑う瞬間があっても、その揺れごと正直に認めている。",
    tokens: [
      createToken("꿈", "꿈", "ko", "夢", "夢"),
      createToken("의심 들 때도", "의심이 들 때도", "ko", "疑いが湧く時でも", "疑いが湧く時でも"),
    ],
  },
  "Keep it in your soul": {
    japanese: "その気持ちは、心の奥に持ち続けて。",
    literalJapanese: "それをあなたの魂の中に保って。",
    sentenceExplanation:
      "揺らいでも、核になる気持ちは心の奥に残しておけと励ましている。",
    tokens: [
      createToken("in your soul", "in your soul", "en", "心の奥に", "心の奥に、魂の中に"),
    ],
  },
  "내 상상보다": {
    japanese: "私が想像していたよりも。",
    literalJapanese: "私の想像より。",
    sentenceExplanation:
      "これまでの自己評価を越える発見が来る前置きになっている。",
    tokens: [createToken("상상보다", "상상보다", "ko", "想像より", "想像より")],
  },
  "더 큰 나였어": {
    japanese: "私はもっと大きな存在だった。",
    literalJapanese: "もっと大きな私だった。",
    sentenceExplanation:
      "自分は思っていたより大きい存在だったと気づく、後半の自己発見の核心。",
    tokens: [
      createToken("더 큰 나", "더 큰 나", "ko", "もっと大きな私", "もっと大きな私"),
    ],
  },
  "겁 없는 my face, no need to chase": {
    japanese: "恐れない私の顔。無理に追いかける必要なんてない。",
    literalJapanese: "怖がらない私の顔、追いかける必要はない。",
    sentenceExplanation:
      "怯えない自分は、誰かの基準や正解を追いかけなくてもいいと示している。",
    tokens: [
      createToken("겁 없는", "겁 없다", "ko", "怖くない", "怖くない、恐れない"),
      createToken("my face", "my face", "en", "私の顔", "私の顔"),
      createToken(
        "no need to chase",
        "no need to chase",
        "en",
        "追う必要はない",
        "追いかける必要はない",
      ),
    ],
  },
  "Eyes closed and 들려 whispering": {
    japanese: "目を閉じると、ささやきが聞こえる。",
    literalJapanese: "目を閉じて、ささやきが聞こえる。",
    sentenceExplanation:
      "静かに目を閉じたとき、本当の声がささやきとして聞こえてくる。",
    tokens: [
      createToken("Eyes closed", "eyes closed", "en", "目を閉じて", "目を閉じて"),
      createToken("들려", "들리다", "ko", "聞こえる", "聞こえる"),
      createToken("whispering", "whisper", "en", "ささやき", "ささやき"),
    ],
  },
  "\"I do me, I do it my way!\"": {
    japanese: "「私は私らしく、自分のやり方で進む！」",
    literalJapanese: "「私は私をする、私は私のやり方でやる！」",
    sentenceExplanation:
      "ブリッジの結論として、自分のやり方で進む意思をもう一度言葉にしている。",
    tokens: [
      createToken("I do me", "I do me", "en", "私は私らしくやる", "私は私らしくやる"),
      createToken("my way", "my way", "en", "自分のやり方", "自分のやり方"),
    ],
  },
};

const lyricsSequence: string[] = [
  "I could go somewhere",
  "Maybe anywhere",
  "내 직감은 늘 맞으니깐",
  "Just feel it",
  "손끝엔 나비",
  "That's my living ring",
  "내 걱정 NO!",
  "난 나답게 더 빛나져",
  "Feel the breeze",
  "나만 들리는 소리",
  "I can",
  "tell myself that",
  "I DO ME, I DO me right",
  "그냥 I DO ME, I DO ma way",
  "다른 그림들은 upside-down",
  "결국 내가 가는 길이야",
  "남 눈치s, Why do you care?",
  "I'm just 달릴 거야 멋대로",
  "Still, pinky 노을빛",
  "날개를 달고",
  "'이걸 해야 돼.'",
  "'거길 가야 돼.'",
  "상관없죠,",
  "난 '내'가 될 거에여",
  "콩 무당벌레,",
  "That's my piercing",
  "I'm screaming Yeah!",
  "난, 나답게 더 잘해여",
  "Feel the breeze",
  "나만 들리는 소리",
  "I can",
  "tell myself that",
  "I DO ME, I DO me right",
  "그냥 I DO ME, I DO ma way",
  "다른 그림들은 upside-down",
  "결국 내가 가는 길이야",
  "남 눈치s, Why do you care?",
  "I'm just 달릴 거야 멋대로",
  "Still, pinky 노을빛",
  "날개를 달고",
  "I run in the air!",
  "잠 못 드는 밤, 나 달빛 보며",
  "Maybe, I'm 별난 아이",
  "Maybe, 내 꿈 의심 들 때도",
  "Keep it in your soul",
  "내 상상보다",
  "더 큰 나였어",
  "겁 없는 my face, no need to chase",
  "Eyes closed and 들려 whispering",
  "\"I do me, I do it my way!\"",
  "I DO ME, I DO me right",
  "그냥 I DO ME, I DO ma way",
  "다른 그림들은 upside-down",
  "결국 내가 가는 길이야",
  "남 눈치s, Why do you care?",
  "I'm just 달릴 거야 멋대로",
  "Still, pinky 노을빛",
  "날개를 달고",
  "I run in the air!",
];

export const completeIDoMeLines: LyricLine[] = lyricsSequence.map(
  (korean, lineIndex) => {
    const template = lineTemplates[korean];

    return {
      id: `line-${lineIndex + 1}`,
      korean,
      japanese: template.japanese,
      literalJapanese: template.literalJapanese,
      sentenceExplanation: template.sentenceExplanation,
      nuance: template.nuance,
      roleInSong: template.roleInSong,
      sectionBreakAfter: template.sectionBreakAfter,
      reading: template.reading,
      grammarPoints: template.grammarPoints,
      tokens: template.tokens.map((token, tokenIndex) => ({
        id: `line-${lineIndex + 1}-t${tokenIndex + 1}`,
        ...token,
      })),
    };
  },
);

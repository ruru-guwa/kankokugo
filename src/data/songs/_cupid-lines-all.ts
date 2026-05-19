import type { LyricLine, Token } from "../../types/song";

type TokenSeed = Omit<Token, "id">;
type LineTemplate = {
  japanese: string;
  literalJapanese: string;
  sentenceExplanation: string;
  nuance?: string;
  tokens: TokenSeed[];
};

const lineTemplates: Record<string, LineTemplate> = {
  "불꺼진 romantic all my life": {
    "japanese": "私の人生、ロマンチックな灯りはずっと消えたまま。",
    "literalJapanese": "火が消えたロマンチック、私の人生ずっと。",
    "sentenceExplanation": "自分の人生には恋愛らしい明るさがない、という寂しさ。 “불꺼진” があるので、恋のときめきや希望が消えている感じ。",
    "nuance": "自分の人生には恋愛らしい明るさがない、という寂しさ。 “불꺼진” があるので、恋のときめきや希望が消えている感じ。",
    "tokens": [
      {
        "surface": "불",
        "base": "불",
        "language": "ko",
        "shortMeaning": "火、灯り",
        "meaning": "火、灯り"
      },
      {
        "surface": "꺼지다",
        "base": "꺼지다",
        "language": "ko",
        "shortMeaning": "消える",
        "meaning": "消える"
      },
      {
        "surface": "불 꺼진",
        "base": "불 꺼진",
        "language": "ko",
        "shortMeaning": "火が消えた、灯りが消えた",
        "meaning": "火が消えた、灯りが消えた"
      },
      {
        "surface": "romantic",
        "base": "romantic",
        "language": "en",
        "shortMeaning": "ロマンチック、恋愛的な雰囲気",
        "meaning": "ロマンチック、恋愛的な雰囲気"
      },
      {
        "surface": "all my life",
        "base": "all my life",
        "language": "en",
        "shortMeaning": "私の人生ずっと",
        "meaning": "私の人生ずっと"
      }
    ]
  },
  "내 주위는 온통 lovely day": {
    "japanese": "周りはみんな幸せそうな恋の日々。",
    "literalJapanese": "私の周りはすべてlovely day。",
    "sentenceExplanation": "自分の周りだけ恋愛モードで幸せそう。 それと自分の loneliness が対比されている。",
    "nuance": "自分の周りだけ恋愛モードで幸せそう。 それと自分の loneliness が対比されている。",
    "tokens": [
      {
        "surface": "내",
        "base": "내",
        "language": "ko",
        "shortMeaning": "私の",
        "meaning": "私の"
      },
      {
        "surface": "주위",
        "base": "주위",
        "language": "ko",
        "shortMeaning": "周り",
        "meaning": "周り"
      },
      {
        "surface": "-는",
        "base": "-는",
        "language": "ko",
        "shortMeaning": "〜は",
        "meaning": "〜は"
      },
      {
        "surface": "온통",
        "base": "온통",
        "language": "ko",
        "shortMeaning": "すべて、一面、すっかり",
        "meaning": "すべて、一面、すっかり"
      },
      {
        "surface": "lovely day",
        "base": "lovely day",
        "language": "en",
        "shortMeaning": "愛らしい日、幸せそうな日",
        "meaning": "愛らしい日、幸せそうな日"
      }
    ]
  },
  "내 눈 속에 비친 arrow sign": {
    "japanese": "私の瞳に映る、恋の矢のサイン。",
    "literalJapanese": "私の目の中に映った矢印のサイン。",
    "sentenceExplanation": "Cupidの矢を連想させる。 恋が始まりそうな予感はあるのに、うまく現実にならない。",
    "nuance": "Cupidの矢を連想させる。 恋が始まりそうな予感はあるのに、うまく現実にならない。",
    "tokens": [
      {
        "surface": "내",
        "base": "내",
        "language": "ko",
        "shortMeaning": "私の",
        "meaning": "私の"
      },
      {
        "surface": "눈",
        "base": "눈",
        "language": "ko",
        "shortMeaning": "目",
        "meaning": "目"
      },
      {
        "surface": "속",
        "base": "속",
        "language": "ko",
        "shortMeaning": "中",
        "meaning": "中"
      },
      {
        "surface": "내 눈 속에",
        "base": "내 눈 속에",
        "language": "ko",
        "shortMeaning": "私の目の中に",
        "meaning": "私の目の中に"
      },
      {
        "surface": "비치다",
        "base": "비치다",
        "language": "ko",
        "shortMeaning": "映る、照らされる",
        "meaning": "映る、照らされる"
      },
      {
        "surface": "비친",
        "base": "비친",
        "language": "ko",
        "shortMeaning": "映った〜",
        "meaning": "映った〜"
      },
      {
        "surface": "arrow",
        "base": "arrow",
        "language": "en",
        "shortMeaning": "矢",
        "meaning": "矢"
      },
      {
        "surface": "sign",
        "base": "sign",
        "language": "en",
        "shortMeaning": "サイン、印",
        "meaning": "サイン、印"
      }
    ]
  },
  "(oh why oh why oh why oh why)": {
    "japanese": "どうして、どうして。",
    "literalJapanese": "ああ、なぜ、なぜ、なぜ、なぜ。",
    "sentenceExplanation": "恋が始まりそうな気配はあるのに何も進まない、その理由の分からなさを感情のまま吐き出している。",
    "nuance": "意味のある問いというより、寂しさと戸惑いがそのまま漏れている合いの手に近い。",
    "tokens": [
      {
        "surface": "oh why",
        "base": "why",
        "language": "en",
        "shortMeaning": "どうして",
        "meaning": "どうして、なぜ"
      }
    ]
  },
  "I'm feeling lonely (lonely)": {
    "japanese": "私は寂しい。",
    "literalJapanese": "私は孤独を感じている。",
    "sentenceExplanation": "この曲の中心感情。 恋に憧れているが、現実では一人で寂しい。",
    "nuance": "この曲の中心感情。 恋に憧れているが、現実では一人で寂しい。",
    "tokens": [
      {
        "surface": "lonely",
        "base": "lonely",
        "language": "en",
        "shortMeaning": "寂しい、孤独な",
        "meaning": "寂しい、孤独な"
      }
    ]
  },
  "그만 힐끗대고 말해줘요 hold me (hold me)": {
    "japanese": "ちらちら見るだけじゃなくて、ちゃんと言って。抱きしめて。",
    "literalJapanese": "もうちらちら見るのをやめて、言ってください、抱きしめて。",
    "sentenceExplanation": "相手が気のある素振りだけして、はっきり言ってくれない感じ。 「見るだけじゃなくて、ちゃんと愛情を示してよ」という不満。",
    "nuance": "相手が気のある素振りだけして、はっきり言ってくれない感じ。 「見るだけじゃなくて、ちゃんと愛情を示してよ」という不満。",
    "tokens": [
      {
        "surface": "그만",
        "base": "그만",
        "language": "ko",
        "shortMeaning": "もうやめて、そこまでにして",
        "meaning": "もうやめて、そこまでにして"
      },
      {
        "surface": "힐끗대다",
        "base": "힐끗대다",
        "language": "ko",
        "shortMeaning": "ちらちら見る",
        "meaning": "ちらちら見る / 힐끗 = ちらっと / -대다 = 何度も〜する"
      },
      {
        "surface": "말하다",
        "base": "말하다",
        "language": "ko",
        "shortMeaning": "言う",
        "meaning": "言う"
      },
      {
        "surface": "말해줘요",
        "base": "말해줘요",
        "language": "ko",
        "shortMeaning": "言ってください",
        "meaning": "言ってください / 말하다 + -아/어 주다 / 言ってくれる"
      },
      {
        "surface": "hold me",
        "base": "hold me",
        "language": "en",
        "shortMeaning": "抱きしめて",
        "meaning": "抱きしめて"
      }
    ]
  },
  "다시 crying in my room": {
    "japanese": "また部屋でひとり泣いている。",
    "literalJapanese": "また私の部屋で泣いている。",
    "sentenceExplanation": "外では平気なふりをしていても、部屋では一人で泣いている。 孤独感が強い。",
    "nuance": "外では平気なふりをしていても、部屋では一人で泣いている。 孤独感が強い。",
    "tokens": [
      {
        "surface": "다시",
        "base": "다시",
        "language": "ko",
        "shortMeaning": "また",
        "meaning": "また"
      },
      {
        "surface": "crying",
        "base": "crying",
        "language": "en",
        "shortMeaning": "泣いている",
        "meaning": "泣いている"
      },
      {
        "surface": "in my room",
        "base": "in my room",
        "language": "en",
        "shortMeaning": "私の部屋で",
        "meaning": "私の部屋で"
      }
    ]
  },
  "숨기고 싶어": {
    "japanese": "この気持ちを隠したい。",
    "literalJapanese": "隠したい。",
    "sentenceExplanation": "恋がうまくいかない寂しさや、愛を求める気持ちを隠したい。 でも後の “I want it more” で、本当は隠しきれないことが分かる。",
    "nuance": "恋がうまくいかない寂しさや、愛を求める気持ちを隠したい。 でも後の “I want it more” で、本当は隠しきれないことが分かる。",
    "tokens": [
      {
        "surface": "숨기다",
        "base": "숨기다",
        "language": "ko",
        "shortMeaning": "隠す",
        "meaning": "隠す"
      },
      {
        "surface": "-고 싶다",
        "base": "-고 싶다",
        "language": "ko",
        "shortMeaning": "〜したい",
        "meaning": "〜したい"
      },
      {
        "surface": "숨기고 싶어",
        "base": "숨기고 싶어",
        "language": "ko",
        "shortMeaning": "隠したい",
        "meaning": "隠したい"
      }
    ]
  },
  "(say what you say but I want it more)": {
    "japanese": "何を言われても、やっぱりもっと欲しくなる。",
    "literalJapanese": "何を言ってもいい、でも私はもっと欲しい。",
    "sentenceExplanation": "周りに何を言われても、恋や愛を欲しがる気持ちは消えない。",
    "nuance": "周りに何を言われても、恋や愛を欲しがる気持ちは消えない。",
    "tokens": [
      {
        "surface": "say what you say",
        "base": "say what you say",
        "language": "en",
        "shortMeaning": "何を言っても",
        "meaning": "何を言っても"
      },
      {
        "surface": "but",
        "base": "but",
        "language": "en",
        "shortMeaning": "でも",
        "meaning": "でも"
      },
      {
        "surface": "I want it more",
        "base": "I want it more",
        "language": "en",
        "shortMeaning": "私はもっと欲しい",
        "meaning": "私はもっと欲しい"
      }
    ]
  },
  "But still I want it more more more": {
    "japanese": "それでも、もっともっと愛が欲しい。",
    "literalJapanese": "でもそれでも私はもっともっともっと欲しい。",
    "sentenceExplanation": "「隠したい」「諦めたい」と思っても、結局まだ愛が欲しい。 この矛盾が曲のかわいさと切なさ。",
    "nuance": "「隠したい」「諦めたい」と思っても、結局まだ愛が欲しい。 この矛盾が曲のかわいさと切なさ。",
    "tokens": [
      {
        "surface": "still",
        "base": "still",
        "language": "en",
        "shortMeaning": "それでも、まだ",
        "meaning": "それでも、まだ"
      },
      {
        "surface": "more",
        "base": "more",
        "language": "en",
        "shortMeaning": "もっと",
        "meaning": "もっと"
      }
    ]
  },
  "I gave a second chance to Cupid": {
    "japanese": "キューピッドにもう一度だけチャンスをあげたのに。",
    "literalJapanese": "私はキューピッドに二度目のチャンスをあげた。",
    "sentenceExplanation": "一度恋に失敗した、または期待を裏切られた。 それでももう一回、恋を信じようとした感じ。",
    "nuance": "一度恋に失敗した、または期待を裏切られた。 それでももう一回、恋を信じようとした感じ。",
    "tokens": [
      {
        "surface": "give a chance",
        "base": "give a chance",
        "language": "en",
        "shortMeaning": "チャンスをあげる",
        "meaning": "チャンスをあげる"
      },
      {
        "surface": "second chance",
        "base": "second chance",
        "language": "en",
        "shortMeaning": "二度目のチャンス",
        "meaning": "二度目のチャンス"
      },
      {
        "surface": "Cupid",
        "base": "Cupid",
        "language": "en",
        "shortMeaning": "キューピッド、恋の神様",
        "meaning": "キューピッド、恋の神様"
      }
    ]
  },
  "널 믿은 내가 정말 stupid": {
    "japanese": "あなたを信じた私が本当にバカだった。",
    "literalJapanese": "あなたを信じた私が本当にバカ。",
    "sentenceExplanation": "Cupidを信じたのに恋がうまくいかず、自己嫌悪している。 「キューピッドが悪い」と言いながら、「信じた自分もバカ」と思っている。",
    "nuance": "Cupidを信じたのに恋がうまくいかず、自己嫌悪している。 「キューピッドが悪い」と言いながら、「信じた自分もバカ」と思っている。",
    "tokens": [
      {
        "surface": "널",
        "base": "널",
        "language": "ko",
        "shortMeaning": "너를 の縮約",
        "meaning": "너를 の縮約 / あなたを",
        "explanation": "ここでは Cupid を指していると考えると自然。"
      },
      {
        "surface": "믿다",
        "base": "믿다",
        "language": "ko",
        "shortMeaning": "信じる",
        "meaning": "信じる"
      },
      {
        "surface": "믿은",
        "base": "믿은",
        "language": "ko",
        "shortMeaning": "信じた〜",
        "meaning": "信じた〜"
      },
      {
        "surface": "내가",
        "base": "내가",
        "language": "ko",
        "shortMeaning": "私が",
        "meaning": "私が"
      },
      {
        "surface": "정말",
        "base": "정말",
        "language": "ko",
        "shortMeaning": "本当に",
        "meaning": "本当に"
      },
      {
        "surface": "stupid",
        "base": "stupid",
        "language": "en",
        "shortMeaning": "バカ、愚か",
        "meaning": "バカ、愚か"
      }
    ]
  },
  "보여줄게 숨겨왔던 love is it real?": {
    "japanese": "隠してきた愛を見せてあげる。これは本物なの？",
    "literalJapanese": "見せてあげる、隠してきた愛、それは本物？",
    "sentenceExplanation": "自分の中にある愛を出そうとしている。 でも同時に、それが本物なのか不安もある。",
    "nuance": "自分の中にある愛を出そうとしている。 でも同時に、それが本物なのか不安もある。",
    "tokens": [
      {
        "surface": "보여주다",
        "base": "보여주다",
        "language": "ko",
        "shortMeaning": "見せてあげる",
        "meaning": "見せてあげる"
      },
      {
        "surface": "보여줄게",
        "base": "보여줄게",
        "language": "ko",
        "shortMeaning": "見せてあげるね",
        "meaning": "見せてあげるね"
      },
      {
        "surface": "숨기다",
        "base": "숨기다",
        "language": "ko",
        "shortMeaning": "隠す",
        "meaning": "隠す"
      },
      {
        "surface": "숨겨오다",
        "base": "숨겨오다",
        "language": "ko",
        "shortMeaning": "ずっと隠してくる",
        "meaning": "ずっと隠してくる"
      },
      {
        "surface": "숨겨왔던",
        "base": "숨겨왔던",
        "language": "ko",
        "shortMeaning": "ずっと隠してきた〜",
        "meaning": "ずっと隠してきた〜"
      },
      {
        "surface": "love",
        "base": "love",
        "language": "en",
        "shortMeaning": "愛",
        "meaning": "愛"
      },
      {
        "surface": "is it real?",
        "base": "is it real?",
        "language": "en",
        "shortMeaning": "それは本物？",
        "meaning": "それは本物？"
      }
    ]
  },
  "Cupid is so dumb": {
    "japanese": "キューピッドって本当に役立たず。",
    "literalJapanese": "キューピッドは本当にバカ。",
    "sentenceExplanation": "恋をうまく運んでくれないCupidへの文句。 かわいく怒っている感じ。",
    "nuance": "恋をうまく運んでくれないCupidへの文句。 かわいく怒っている感じ。",
    "tokens": [
      {
        "surface": "dumb",
        "base": "dumb",
        "language": "en",
        "shortMeaning": "バカ、鈍い、役立たず",
        "meaning": "バカ、鈍い、役立たず"
      }
    ]
  },
  "또 꿈길을 걷는 everyday": {
    "japanese": "また夢みたいな恋を想像して過ごす毎日。",
    "literalJapanese": "また夢の道を歩く毎日。",
    "sentenceExplanation": "現実ではなく、夢や妄想の中で恋をしている感じ。 恋愛への憧れが強い。",
    "nuance": "現実ではなく、夢や妄想の中で恋をしている感じ。 恋愛への憧れが強い。",
    "tokens": [
      {
        "surface": "또",
        "base": "또",
        "language": "ko",
        "shortMeaning": "また",
        "meaning": "また"
      },
      {
        "surface": "꿈",
        "base": "꿈",
        "language": "ko",
        "shortMeaning": "夢",
        "meaning": "夢"
      },
      {
        "surface": "길",
        "base": "길",
        "language": "ko",
        "shortMeaning": "道",
        "meaning": "道"
      },
      {
        "surface": "꿈길",
        "base": "꿈길",
        "language": "ko",
        "shortMeaning": "夢の道、夢の中の道",
        "meaning": "夢の道、夢の中の道"
      },
      {
        "surface": "걷다",
        "base": "걷다",
        "language": "ko",
        "shortMeaning": "歩く",
        "meaning": "歩く"
      },
      {
        "surface": "걷는",
        "base": "걷는",
        "language": "ko",
        "shortMeaning": "歩く〜",
        "meaning": "歩く〜"
      },
      {
        "surface": "everyday",
        "base": "everyday",
        "language": "en",
        "shortMeaning": "毎日",
        "meaning": "毎日"
      }
    ]
  },
  "눈 뜨면 다시 또 flew away": {
    "japanese": "でも目を覚ませば、またどこかへ消えてしまう。",
    "literalJapanese": "目を開けると、また飛んでいった。",
    "sentenceExplanation": "夢の中では恋があるのに、目覚めると消えてしまう。 理想と現実の差。",
    "nuance": "夢の中では恋があるのに、目覚めると消えてしまう。 理想と現実の差。",
    "tokens": [
      {
        "surface": "눈",
        "base": "눈",
        "language": "ko",
        "shortMeaning": "目",
        "meaning": "目"
      },
      {
        "surface": "뜨다",
        "base": "뜨다",
        "language": "ko",
        "shortMeaning": "開ける",
        "meaning": "開ける"
      },
      {
        "surface": "눈 뜨면",
        "base": "눈 뜨면",
        "language": "ko",
        "shortMeaning": "目を開けると、目が覚めると",
        "meaning": "目を開けると、目が覚めると"
      },
      {
        "surface": "다시",
        "base": "다시",
        "language": "ko",
        "shortMeaning": "また",
        "meaning": "また"
      },
      {
        "surface": "flew away",
        "base": "flew away",
        "language": "en",
        "shortMeaning": "飛び去った、消えていった",
        "meaning": "飛び去った、消えていった"
      }
    ]
  },
  "Waiting around is a waste (waste)": {
    "japanese": "ただ待っているだけなんて無駄。",
    "literalJapanese": "待ち続けることは無駄。",
    "sentenceExplanation": "恋が来るのを待っているだけでは何も変わらない。 後半の “I'm gonna make it mine” につながる。",
    "nuance": "恋が来るのを待っているだけでは何も変わらない。 後半の “I'm gonna make it mine” につながる。",
    "tokens": [
      {
        "surface": "waiting around",
        "base": "waiting around",
        "language": "en",
        "shortMeaning": "ただ待っていること",
        "meaning": "ただ待っていること"
      },
      {
        "surface": "waste",
        "base": "waste",
        "language": "en",
        "shortMeaning": "無駄",
        "meaning": "無駄"
      }
    ]
  },
  "나 솔직히 지금이 편해": {
    "japanese": "正直、今のままの方が楽なのかも。",
    "literalJapanese": "私は正直、今が楽。",
    "sentenceExplanation": "恋をしたいけど、恋は不安で面倒でもある。 一人でいる方が楽だという本音。",
    "nuance": "恋をしたいけど、恋は不安で面倒でもある。 一人でいる方が楽だという本音。",
    "tokens": [
      {
        "surface": "나",
        "base": "나",
        "language": "ko",
        "shortMeaning": "私",
        "meaning": "私"
      },
      {
        "surface": "솔직히",
        "base": "솔직히",
        "language": "ko",
        "shortMeaning": "正直に",
        "meaning": "正直に"
      },
      {
        "surface": "지금",
        "base": "지금",
        "language": "ko",
        "shortMeaning": "今",
        "meaning": "今"
      },
      {
        "surface": "-이",
        "base": "-이",
        "language": "ko",
        "shortMeaning": "〜が",
        "meaning": "〜が"
      },
      {
        "surface": "편하다",
        "base": "편하다",
        "language": "ko",
        "shortMeaning": "楽だ、気楽だ、心地よい",
        "meaning": "楽だ、気楽だ、心地よい"
      },
      {
        "surface": "편해",
        "base": "편해",
        "language": "ko",
        "shortMeaning": "楽だ",
        "meaning": "楽だ"
      }
    ]
  },
  "상상만큼 짜릿한 걸까?": {
    "japanese": "恋って、想像するほどドキドキするものなのかな？",
    "literalJapanese": "想像ほどしびれるものなのかな？",
    "sentenceExplanation": "恋に憧れているけど、実際の恋をまだ完全には知らない感じ。 期待と不安が混ざっている。",
    "nuance": "恋に憧れているけど、実際の恋をまだ完全には知らない感じ。 期待と不安が混ざっている。",
    "tokens": [
      {
        "surface": "상상",
        "base": "상상",
        "language": "ko",
        "shortMeaning": "想像",
        "meaning": "想像"
      },
      {
        "surface": "-만큼",
        "base": "-만큼",
        "language": "ko",
        "shortMeaning": "〜ほど、〜くらい",
        "meaning": "〜ほど、〜くらい"
      },
      {
        "surface": "짜릿하다",
        "base": "짜릿하다",
        "language": "ko",
        "shortMeaning": "しびれる、ぞくっとする、ときめく",
        "meaning": "しびれる、ぞくっとする、ときめく"
      },
      {
        "surface": "짜릿한",
        "base": "짜릿한",
        "language": "ko",
        "shortMeaning": "ときめく〜、刺激的な〜",
        "meaning": "ときめく〜、刺激的な〜"
      },
      {
        "surface": "걸까?",
        "base": "걸까?",
        "language": "ko",
        "shortMeaning": "〜なのかな？",
        "meaning": "〜なのかな？"
      }
    ]
  },
  "Now I'm so lonely (lonely)": {
    "japanese": "今、私はすごく寂しい。",
    "literalJapanese": "今、私はとても孤独。",
    "sentenceExplanation": "前半でも lonely と言っていた感情をここで言い直すことで、時間が経っても埋まらない寂しさを強く押し出している。",
    "nuance": "Now が入るので、昔から寂しいというより『いまこの瞬間もまだ寂しい』という現在進行形の孤独に聞こえる。",
    "tokens": [
      {
        "surface": "Now",
        "base": "now",
        "language": "en",
        "shortMeaning": "今",
        "meaning": "今"
      },
      {
        "surface": "so lonely",
        "base": "lonely",
        "language": "en",
        "shortMeaning": "とても寂しい",
        "meaning": "とても寂しい、すごく孤独だ"
      }
    ]
  },
  "매일 꿈속에서 연습했죠 kiss me (kiss me)": {
    "japanese": "毎日、夢の中では「キスして」って練習していた。",
    "literalJapanese": "毎日夢の中で練習したでしょう、キスして。",
    "sentenceExplanation": "現実では恋がうまくいかないから、夢の中で恋愛の練習をしている。 かわいいけど少し切ない。",
    "nuance": "現実では恋がうまくいかないから、夢の中で恋愛の練習をしている。 かわいいけど少し切ない。",
    "tokens": [
      {
        "surface": "매일",
        "base": "매일",
        "language": "ko",
        "shortMeaning": "毎日",
        "meaning": "毎日"
      },
      {
        "surface": "꿈속",
        "base": "꿈속",
        "language": "ko",
        "shortMeaning": "夢の中",
        "meaning": "夢の中 / 꿈 = 夢 / 속 = 中"
      },
      {
        "surface": "-에서",
        "base": "-에서",
        "language": "ko",
        "shortMeaning": "〜で",
        "meaning": "〜で"
      },
      {
        "surface": "연습하다",
        "base": "연습하다",
        "language": "ko",
        "shortMeaning": "練習する",
        "meaning": "練習する"
      },
      {
        "surface": "연습했죠",
        "base": "연습했죠",
        "language": "ko",
        "shortMeaning": "練習したでしょう、練習しましたよね",
        "meaning": "練習したでしょう、練習しましたよね"
      },
      {
        "surface": "kiss me",
        "base": "kiss me",
        "language": "en",
        "shortMeaning": "キスして",
        "meaning": "キスして"
      }
    ]
  },
  "포기할까봐": {
    "japanese": "このまま諦めてしまいそうで。",
    "literalJapanese": "諦めるかと思って。",
    "sentenceExplanation": "恋を求める気持ちはあるのに、うまくいかなすぎて諦めそうになっている。",
    "nuance": "恋を求める気持ちはあるのに、うまくいかなすぎて諦めそうになっている。",
    "tokens": [
      {
        "surface": "포기하다",
        "base": "포기하다",
        "language": "ko",
        "shortMeaning": "諦める",
        "meaning": "諦める"
      },
      {
        "surface": "-ㄹ까 봐",
        "base": "-ㄹ까 봐",
        "language": "ko",
        "shortMeaning": "〜しそうで、〜するかと思って、〜するの…",
        "meaning": "〜しそうで、〜するかと思って、〜するのが怖くて"
      }
    ]
  },
  "I'm so lonely hold me tightly": {
    "japanese": "寂しいから、強く抱きしめて。",
    "literalJapanese": "私はとても孤独、強く抱きしめて。",
    "sentenceExplanation": "孤独を埋めてくれる相手を求めている。 かなりストレートな願望。",
    "nuance": "孤独を埋めてくれる相手を求めている。 かなりストレートな願望。",
    "tokens": [
      {
        "surface": "so lonely",
        "base": "so lonely",
        "language": "en",
        "shortMeaning": "とても寂しい",
        "meaning": "とても寂しい"
      },
      {
        "surface": "hold me tightly",
        "base": "hold me tightly",
        "language": "en",
        "shortMeaning": "強く抱きしめて",
        "meaning": "強く抱きしめて / tightly = きつく、しっかり"
      }
    ]
  },
  "짜릿한 걸 원해": {
    "japanese": "胸が高鳴るような恋が欲しい。",
    "literalJapanese": "しびれるものが欲しい。",
    "sentenceExplanation": "ただ誰かがいればいいのではなく、本当に心が動く恋が欲しい。",
    "nuance": "ただ誰かがいればいいのではなく、本当に心が動く恋が欲しい。",
    "tokens": [
      {
        "surface": "짜릿하다",
        "base": "짜릿하다",
        "language": "ko",
        "shortMeaning": "しびれる、ときめく、刺激的だ",
        "meaning": "しびれる、ときめく、刺激的だ"
      },
      {
        "surface": "짜릿한 것",
        "base": "짜릿한 것",
        "language": "ko",
        "shortMeaning": "ときめくもの、刺激的なもの",
        "meaning": "ときめくもの、刺激的なもの"
      },
      {
        "surface": "걸",
        "base": "걸",
        "language": "ko",
        "shortMeaning": "것을 の縮約",
        "meaning": "것을 の縮約 / ものを"
      },
      {
        "surface": "원하다",
        "base": "원하다",
        "language": "ko",
        "shortMeaning": "望む、欲しがる",
        "meaning": "望む、欲しがる"
      },
      {
        "surface": "원해",
        "base": "원해",
        "language": "ko",
        "shortMeaning": "欲しい",
        "meaning": "欲しい"
      }
    ]
  },
  "who will really love me truly": {
    "japanese": "本当に私を愛してくれる人は誰？",
    "literalJapanese": "誰が本当に私を本気で愛してくれるの？",
    "sentenceExplanation": "表面的な恋ではなく、本物の愛を求めている。",
    "nuance": "表面的な恋ではなく、本物の愛を求めている。",
    "tokens": [
      {
        "surface": "who will",
        "base": "who will",
        "language": "en",
        "shortMeaning": "誰が〜してくれるの？",
        "meaning": "誰が〜してくれるの？"
      },
      {
        "surface": "really",
        "base": "really",
        "language": "en",
        "shortMeaning": "本当に",
        "meaning": "本当に"
      },
      {
        "surface": "love me",
        "base": "love me",
        "language": "en",
        "shortMeaning": "私を愛する",
        "meaning": "私を愛する"
      },
      {
        "surface": "truly",
        "base": "truly",
        "language": "en",
        "shortMeaning": "心から、本当に",
        "meaning": "心から、本当に"
      }
    ]
  },
  "내게 기다림은 없어 I can't wait": {
    "japanese": "もう待ってなんかいられない。",
    "literalJapanese": "私には待つことはない。私は待てない。",
    "sentenceExplanation": "Cupidや相手を待つ受け身の姿勢から、自分で動こうとする姿勢へ変わる。",
    "nuance": "Cupidや相手を待つ受け身の姿勢から、自分で動こうとする姿勢へ変わる。",
    "tokens": [
      {
        "surface": "내게",
        "base": "내게",
        "language": "ko",
        "shortMeaning": "나에게 の縮約",
        "meaning": "나에게 の縮約 / 私に、私には"
      },
      {
        "surface": "기다림",
        "base": "기다림",
        "language": "ko",
        "shortMeaning": "待つこと、待ち時間",
        "meaning": "待つこと、待ち時間 / 기다리다 = 待つ"
      },
      {
        "surface": "-은",
        "base": "-은",
        "language": "ko",
        "shortMeaning": "〜は",
        "meaning": "〜は"
      },
      {
        "surface": "없다",
        "base": "없다",
        "language": "ko",
        "shortMeaning": "ない",
        "meaning": "ない"
      },
      {
        "surface": "없어",
        "base": "없어",
        "language": "ko",
        "shortMeaning": "ない",
        "meaning": "ない"
      },
      {
        "surface": "I can't wait",
        "base": "I can't wait",
        "language": "en",
        "shortMeaning": "待てない",
        "meaning": "待てない"
      }
    ]
  },
  "더는 믿지 않아 now": {
    "japanese": "もうこれ以上は信じない。",
    "literalJapanese": "もうこれ以上信じない、今。",
    "sentenceExplanation": "Cupidを信じるのをやめる。 他人任せの恋をやめる宣言。",
    "nuance": "Cupidを信じるのをやめる。 他人任せの恋をやめる宣言。",
    "tokens": [
      {
        "surface": "더는",
        "base": "더는",
        "language": "ko",
        "shortMeaning": "これ以上は、もう",
        "meaning": "これ以上は、もう"
      },
      {
        "surface": "믿다",
        "base": "믿다",
        "language": "ko",
        "shortMeaning": "信じる",
        "meaning": "信じる"
      },
      {
        "surface": "믿지 않다",
        "base": "믿지 않다",
        "language": "ko",
        "shortMeaning": "信じない",
        "meaning": "信じない"
      },
      {
        "surface": "믿지 않아",
        "base": "믿지 않아",
        "language": "ko",
        "shortMeaning": "信じない",
        "meaning": "信じない"
      }
    ]
  },
  "I'm gonna make it mine": {
    "japanese": "自分の手でこの恋をつかみにいく。",
    "literalJapanese": "私はそれを私のものにするつもり。",
    "sentenceExplanation": "後半で一番大事な変化。 待つ恋から、自分でつかむ恋へ。",
    "nuance": "後半で一番大事な変化。 待つ恋から、自分でつかむ恋へ。",
    "tokens": [
      {
        "surface": "I'm gonna",
        "base": "I'm gonna",
        "language": "en",
        "shortMeaning": "I am going to",
        "meaning": "I am going to / 〜するつもり"
      },
      {
        "surface": "make it mine",
        "base": "make it mine",
        "language": "en",
        "shortMeaning": "それを自分のものにする",
        "meaning": "それを自分のものにする"
      }
    ]
  },
  "Love is a light I'll show my love is right": {
    "japanese": "愛は光。私の愛が本物だって見せてあげる。",
    "literalJapanese": "愛は光。私の愛が正しいことを見せる。",
    "sentenceExplanation": "自分の中の愛を信じようとしている。 Cupidではなく、自分の愛を証明する流れ。",
    "nuance": "自分の中の愛を信じようとしている。 Cupidではなく、自分の愛を証明する流れ。",
    "tokens": [
      {
        "surface": "Love is a light",
        "base": "Love is a light",
        "language": "en",
        "shortMeaning": "愛は光",
        "meaning": "愛は光"
      },
      {
        "surface": "I'll show",
        "base": "I'll show",
        "language": "en",
        "shortMeaning": "私が見せる",
        "meaning": "私が見せる"
      },
      {
        "surface": "my love is right",
        "base": "my love is right",
        "language": "en",
        "shortMeaning": "私の愛が正しい、本物だ",
        "meaning": "私の愛が正しい、本物だ"
      }
    ]
  },
  "It's not a joke so give it to me right now": {
    "japanese": "これは冗談じゃない。だから今すぐ愛をちょうだい。",
    "literalJapanese": "これは冗談ではない。だから今すぐ私にちょうだい。",
    "sentenceExplanation": "恋への願望が本気だということ。 もう曖昧なまま待ちたくない。",
    "nuance": "恋への願望が本気だということ。 もう曖昧なまま待ちたくない。",
    "tokens": [
      {
        "surface": "It's not a joke",
        "base": "It's not a joke",
        "language": "en",
        "shortMeaning": "冗談じゃない",
        "meaning": "冗談じゃない"
      },
      {
        "surface": "give it to me",
        "base": "give it to me",
        "language": "en",
        "shortMeaning": "私にそれをちょうだい",
        "meaning": "私にそれをちょうだい"
      },
      {
        "surface": "right now",
        "base": "right now",
        "language": "en",
        "shortMeaning": "今すぐ",
        "meaning": "今すぐ"
      }
    ]
  },
  "No more chance to you": {
    "japanese": "もうあなたにチャンスはあげない。",
    "literalJapanese": "あなたにこれ以上チャンスはない。",
    "sentenceExplanation": "Cupidに対して「もう失敗は許さない」という感じ。 または鈍い相手への最後通告にも聞こえる。",
    "nuance": "Cupidに対して「もう失敗は許さない」という感じ。 または鈍い相手への最後通告にも聞こえる。",
    "tokens": [
      {
        "surface": "no more",
        "base": "no more",
        "language": "en",
        "shortMeaning": "これ以上ない",
        "meaning": "これ以上ない"
      },
      {
        "surface": "chance",
        "base": "chance",
        "language": "en",
        "shortMeaning": "チャンス",
        "meaning": "チャンス"
      },
      {
        "surface": "to you",
        "base": "to you",
        "language": "en",
        "shortMeaning": "あなたに",
        "meaning": "あなたに"
      }
    ]
  },
  "You know?": {
    "japanese": "分かってる？",
    "literalJapanese": "分かる？",
    "sentenceExplanation": "相手に本気で届いてほしい気持ちを、短い呼びかけでぐっと前に出している。",
    "nuance": "責めるだけでなく『ちゃんと気づいてよ』と確かめる感じがある。",
    "tokens": [
      {
        "surface": "You know?",
        "base": "you know",
        "language": "en",
        "shortMeaning": "分かってる？",
        "meaning": "分かってる？、ねえ聞いてる？"
      }
    ]
  },
  "Hey d-d-d-dumb boy": {
    "japanese": "ねえ、本当に鈍い人。",
    "literalJapanese": "ねえ、バカな男の子。",
    "sentenceExplanation": "恋に気づいてくれない相手、または役に立たないCupidへのからかい。 “d-d-d” はリズムを作っている。",
    "nuance": "恋に気づいてくれない相手、または役に立たないCupidへのからかい。 “d-d-d” はリズムを作っている。",
    "tokens": [
      {
        "surface": "dumb",
        "base": "dumb",
        "language": "en",
        "shortMeaning": "バカ、鈍い",
        "meaning": "バカ、鈍い"
      },
      {
        "surface": "boy",
        "base": "boy",
        "language": "en",
        "shortMeaning": "男の子",
        "meaning": "男の子"
      }
    ]
  },
  "꿈속에 매일 밤 someone": {
    "japanese": "毎晩、夢の中には誰かがいる。",
    "literalJapanese": "夢の中に毎晩、誰か。",
    "sentenceExplanation": "現実ではまだ相手がいない、または愛が手に入らない。 でも夢の中には、理想の someone がいる。",
    "nuance": "現実ではまだ相手がいない、または愛が手に入らない。 でも夢の中には、理想の someone がいる。",
    "tokens": [
      {
        "surface": "꿈속",
        "base": "꿈속",
        "language": "ko",
        "shortMeaning": "夢の中",
        "meaning": "夢の中"
      },
      {
        "surface": "매일 밤",
        "base": "매일 밤",
        "language": "ko",
        "shortMeaning": "毎晩",
        "meaning": "毎晩"
      },
      {
        "surface": "someone",
        "base": "someone",
        "language": "en",
        "shortMeaning": "誰か",
        "meaning": "誰か"
      }
    ]
  },
  "who will share this feeling": {
    "japanese": "この気持ちを一緒に感じてくれる誰か。",
    "literalJapanese": "この気持ちを分かち合ってくれる人。",
    "sentenceExplanation": "一方通行ではなく、同じ気持ちを共有できる相手を求めている。",
    "nuance": "一方通行ではなく、同じ気持ちを共有できる相手を求めている。",
    "tokens": [
      {
        "surface": "share",
        "base": "share",
        "language": "en",
        "shortMeaning": "分かち合う、共有する",
        "meaning": "分かち合う、共有する"
      },
      {
        "surface": "this feeling",
        "base": "this feeling",
        "language": "en",
        "shortMeaning": "この気持ち",
        "meaning": "この気持ち"
      }
    ]
  },
  "I'm a fool a fool for love a fool for love": {
    "japanese": "私は恋に夢中なバカ。愛に弱いバカ。",
    "literalJapanese": "私はバカ、愛のためのバカ、愛のためのバカ。",
    "sentenceExplanation": "自分でもバカだと分かっている。 それでも愛を求めてしまう。",
    "nuance": "自分でもバカだと分かっている。 それでも愛を求めてしまう。",
    "tokens": [
      {
        "surface": "fool",
        "base": "fool",
        "language": "en",
        "shortMeaning": "バカ、愚か者",
        "meaning": "バカ、愚か者"
      },
      {
        "surface": "a fool for love",
        "base": "a fool for love",
        "language": "en",
        "shortMeaning": "愛に夢中なバカ、恋に弱い人",
        "meaning": "愛に夢中なバカ、恋に弱い人"
      }
    ]
  },
  "다시 한번 못 들은 척 기회를 줄게": {
    "japanese": "もう一度だけ、聞こえなかったふりをしてチャンスをあげる。",
    "literalJapanese": "もう一度、聞こえなかったふりをしてチャンスをあげる。",
    "sentenceExplanation": "「No more chance」と言いながら、結局もう一度チャンスをあげてしまう。 恋に弱い自分が出ている。 この矛盾が “a fool for love” とつながる。",
    "nuance": "「No more chance」と言いながら、結局もう一度チャンスをあげてしまう。 恋に弱い自分が出ている。 この矛盾が “a fool for love” とつながる。",
    "tokens": [
      {
        "surface": "다시 한번",
        "base": "다시 한번",
        "language": "ko",
        "shortMeaning": "もう一度",
        "meaning": "もう一度"
      },
      {
        "surface": "못 듣다",
        "base": "못 듣다",
        "language": "ko",
        "shortMeaning": "聞こえない、聞けない",
        "meaning": "聞こえない、聞けない"
      },
      {
        "surface": "못 들은",
        "base": "못 들은",
        "language": "ko",
        "shortMeaning": "聞こえなかった〜",
        "meaning": "聞こえなかった〜"
      },
      {
        "surface": "척",
        "base": "척",
        "language": "ko",
        "shortMeaning": "ふり",
        "meaning": "ふり"
      },
      {
        "surface": "못 들은 척",
        "base": "못 들은 척",
        "language": "ko",
        "shortMeaning": "聞こえなかったふり",
        "meaning": "聞こえなかったふり"
      },
      {
        "surface": "기회",
        "base": "기회",
        "language": "ko",
        "shortMeaning": "チャンス",
        "meaning": "チャンス"
      },
      {
        "surface": "-를",
        "base": "-를",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "주다",
        "base": "주다",
        "language": "ko",
        "shortMeaning": "あげる",
        "meaning": "あげる"
      },
      {
        "surface": "줄게",
        "base": "줄게",
        "language": "ko",
        "shortMeaning": "あげるね",
        "meaning": "あげるね"
      }
    ]
  }
};

const lyricsSequence: string[] = [
  "불꺼진 romantic all my life",
  "내 주위는 온통 lovely day",
  "내 눈 속에 비친 arrow sign",
  "(oh why oh why oh why oh why)",
  "I'm feeling lonely (lonely)",
  "그만 힐끗대고 말해줘요 hold me (hold me)",
  "다시 crying in my room",
  "숨기고 싶어",
  "(say what you say but I want it more)",
  "But still I want it more more more",
  "I gave a second chance to Cupid",
  "널 믿은 내가 정말 stupid",
  "보여줄게 숨겨왔던 love is it real?",
  "Cupid is so dumb",
  "또 꿈길을 걷는 everyday",
  "눈 뜨면 다시 또 flew away",
  "Waiting around is a waste (waste)",
  "나 솔직히 지금이 편해",
  "상상만큼 짜릿한 걸까?",
  "Now I'm so lonely (lonely)",
  "매일 꿈속에서 연습했죠 kiss me (kiss me)",
  "다시 crying in my room",
  "포기할까봐",
  "(say what you say but I want it more)",
  "But still I want it more more more",
  "I gave a second chance to Cupid",
  "널 믿은 내가 정말 stupid",
  "보여줄게 숨겨왔던 love is it real?",
  "Cupid is so dumb",
  "I'm so lonely hold me tightly",
  "짜릿한 걸 원해",
  "who will really love me truly",
  "내게 기다림은 없어 I can't wait",
  "더는 믿지 않아 now",
  "I'm gonna make it mine",
  "Love is a light I'll show my love is right",
  "It's not a joke so give it to me right now",
  "No more chance to you",
  "You know?",
  "Hey d-d-d-dumb boy",
  "꿈속에 매일 밤 someone",
  "who will share this feeling",
  "I'm a fool a fool for love a fool for love",
  "I gave a second chance to Cupid",
  "널 믿은 내가 정말 stupid",
  "보여줄게 숨겨왔던 love is it real?",
  "Cupid is so dumb",
  "I gave a second chance to Cupid",
  "널 믿은 내가 정말 stupid",
  "다시 한번 못 들은 척 기회를 줄게",
  "Cupid is so dumb"
];

export const completeCupidLines: LyricLine[] = lyricsSequence.map((korean, index) => {
  const template = lineTemplates[korean];

  return {
    id: `fifty-fifty-cupid-line-${index + 1}`,
    korean,
    japanese: template.japanese,
    literalJapanese: template.literalJapanese,
    sentenceExplanation: template.sentenceExplanation,
    ...(template.nuance ? { nuance: template.nuance } : {}),
    tokens: template.tokens.map((token, tokenIndex) => ({
      ...token,
      id: `fifty-fifty-cupid-line-${index + 1}-token-${tokenIndex + 1}`,
    })),
  };
});

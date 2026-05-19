import type { LyricLine, Token } from "../../types/song";

type TokenSeed = Omit<Token, "id">;
type LineTemplate = {
  japanese: string;
  literalJapanese: string;
  sentenceExplanation: string;
  tokens: TokenSeed[];
};

const lineTemplates: Record<string, LineTemplate> = {
  "한번 보면 두 번 더 보고 싶어": {
    "japanese": "一度見ると、もっと何度も会いたくなる。",
    "literalJapanese": "一度見ると、二度もっと見たくなる。",
    "sentenceExplanation": "一回会っただけでは足りない。 会うほどにもっと会いたくなる恋の始まり。",
    "tokens": [
      {
        "surface": "한번",
        "base": "한번",
        "language": "ko",
        "shortMeaning": "번 = 回",
        "meaning": "一度、一回 / 한 = 一つの / 번 = 回",
        "explanation": "한 = 一つの 번 = 回"
      },
      {
        "surface": "보다",
        "base": "보다",
        "language": "ko",
        "shortMeaning": "韓国語では 보다 は「見る」だけでなく…",
        "meaning": "見る、会う / 韓国語では 보다 は「見る」だけでなく、人に会う意味でもよく使う。",
        "explanation": "韓国語では 보다 は「見る」だけでなく、人に会う意味でもよく使う。"
      },
      {
        "surface": "보면",
        "base": "보면",
        "language": "ko",
        "shortMeaning": "-면 = 〜すると、〜なら",
        "meaning": "見ると、会うと / -면 = 〜すると、〜なら",
        "explanation": "-면 = 〜すると、〜なら"
      },
      {
        "surface": "두 번",
        "base": "두 번",
        "language": "ko",
        "shortMeaning": "二回",
        "meaning": "二回"
      },
      {
        "surface": "더",
        "base": "더",
        "language": "ko",
        "shortMeaning": "もっと、さらに",
        "meaning": "もっと、さらに"
      },
      {
        "surface": "보고 싶다",
        "base": "보고 싶다",
        "language": "ko",
        "shortMeaning": "会いたい",
        "meaning": "見たい、会いたい / 보고 싶어 / 会いたい",
        "explanation": "보고 싶어 会いたい"
      }
    ]
  },
  "두번 세번 보면 너를 더 안고 싶어": {
    "japanese": "何度も会うほど、あなたをもっと抱きしめたくなる。",
    "literalJapanese": "二度、三度見ると、あなたをもっと抱きしめたくなる。",
    "sentenceExplanation": "会いたい気持ちから、もっと近づきたい気持ちへ進んでいる。 恋の距離が縮まっていく感じ。",
    "tokens": [
      {
        "surface": "두 번",
        "base": "두 번",
        "language": "ko",
        "shortMeaning": "二回",
        "meaning": "二回"
      },
      {
        "surface": "세 번",
        "base": "세 번",
        "language": "ko",
        "shortMeaning": "三回",
        "meaning": "三回"
      },
      {
        "surface": "보면",
        "base": "보면",
        "language": "ko",
        "shortMeaning": "会うと、見ると",
        "meaning": "会うと、見ると"
      },
      {
        "surface": "너를",
        "base": "너를",
        "language": "ko",
        "shortMeaning": "あなたを",
        "meaning": "あなたを"
      },
      {
        "surface": "더",
        "base": "더",
        "language": "ko",
        "shortMeaning": "もっと",
        "meaning": "もっと"
      },
      {
        "surface": "안다",
        "base": "안다",
        "language": "ko",
        "shortMeaning": "抱く、抱きしめる",
        "meaning": "抱く、抱きしめる"
      },
      {
        "surface": "안고 싶다",
        "base": "안고 싶다",
        "language": "ko",
        "shortMeaning": "抱きしめたい",
        "meaning": "抱きしめたい"
      }
    ]
  },
  "너와 커플링 커플링 손에 끼고서": {
    "japanese": "あなたとおそろいの指輪を指にはめて。",
    "literalJapanese": "あなたとカップルリング、カップルリングを手にはめて。",
    "sentenceExplanation": "恋人同士の象徴。 「付き合っていることを形にしたい」という可愛い願望。",
    "tokens": [
      {
        "surface": "너와",
        "base": "너와",
        "language": "ko",
        "shortMeaning": "-와 = 〜と",
        "meaning": "あなたと / 너 = あなた / -와 = 〜と",
        "explanation": "너 = あなた -와 = 〜と"
      },
      {
        "surface": "커플링",
        "base": "커플링",
        "language": "ko",
        "shortMeaning": "링 = リング",
        "meaning": "カップルリング、おそろいの指輪 / 커플 = カップル / 링 = リング",
        "explanation": "커플 = カップル 링 = リング"
      },
      {
        "surface": "손",
        "base": "손",
        "language": "ko",
        "shortMeaning": "手",
        "meaning": "手"
      },
      {
        "surface": "-에",
        "base": "-에",
        "language": "ko",
        "shortMeaning": "手に、指に",
        "meaning": "〜に / 손에 / 手に、指に",
        "explanation": "손에 手に、指に"
      },
      {
        "surface": "끼다",
        "base": "끼다",
        "language": "ko",
        "shortMeaning": "指輪をはめる時によく使う。",
        "meaning": "はめる / 指輪をはめる時によく使う。",
        "explanation": "指輪をはめる時によく使う。"
      },
      {
        "surface": "끼고서",
        "base": "끼고서",
        "language": "ko",
        "shortMeaning": "-고서 = 〜してから、〜した状態で",
        "meaning": "はめて、それから / -고서 = 〜してから、〜した状態で",
        "explanation": "-고서 = 〜してから、〜した状態で"
      }
    ]
  },
  "함께 이 길을 걷고 싶어 난": {
    "japanese": "あなたと一緒にこの道を歩きたい。",
    "literalJapanese": "一緒にこの道を歩きたい、私は。",
    "sentenceExplanation": "文字通り一緒に道を歩きたい意味もあるが、 「これからの時間を一緒に過ごしたい」 「恋人として一緒に進みたい」 という意味にも聞こえる。",
    "tokens": [
      {
        "surface": "함께",
        "base": "함께",
        "language": "ko",
        "shortMeaning": "一緒に",
        "meaning": "一緒に"
      },
      {
        "surface": "이",
        "base": "이",
        "language": "ko",
        "shortMeaning": "この",
        "meaning": "この"
      },
      {
        "surface": "길",
        "base": "길",
        "language": "ko",
        "shortMeaning": "道",
        "meaning": "道"
      },
      {
        "surface": "-을",
        "base": "-을",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "걷다",
        "base": "걷다",
        "language": "ko",
        "shortMeaning": "歩く",
        "meaning": "歩く"
      },
      {
        "surface": "걷고 싶다",
        "base": "걷고 싶다",
        "language": "ko",
        "shortMeaning": "歩きたい",
        "meaning": "歩きたい"
      },
      {
        "surface": "난",
        "base": "난",
        "language": "ko",
        "shortMeaning": "私は",
        "meaning": "나는 の縮約 / 私は",
        "explanation": "私は"
      }
    ]
  },
  "매일 매일 봐도 난 더 좋아져": {
    "japanese": "毎日会っても、あなたのことがもっと好きになる。",
    "literalJapanese": "毎日毎日会っても、私はもっと好きになる。",
    "sentenceExplanation": "普通なら慣れてしまいそうなのに、会うほど好きが増える。 初々しい恋の高まり。",
    "tokens": [
      {
        "surface": "매일",
        "base": "매일",
        "language": "ko",
        "shortMeaning": "毎日",
        "meaning": "毎日"
      },
      {
        "surface": "매일 매일",
        "base": "매일 매일",
        "language": "ko",
        "shortMeaning": "繰り返すことで可愛く強調。",
        "meaning": "毎日毎日 / 繰り返すことで可愛く強調。",
        "explanation": "繰り返すことで可愛く強調。"
      },
      {
        "surface": "봐도",
        "base": "봐도",
        "language": "ko",
        "shortMeaning": "-아/어도 = 〜しても",
        "meaning": "見ても、会っても / -아/어도 = 〜しても",
        "explanation": "-아/어도 = 〜しても"
      },
      {
        "surface": "난",
        "base": "난",
        "language": "ko",
        "shortMeaning": "私は",
        "meaning": "私は"
      },
      {
        "surface": "더",
        "base": "더",
        "language": "ko",
        "shortMeaning": "もっと",
        "meaning": "もっと"
      },
      {
        "surface": "좋다",
        "base": "좋다",
        "language": "ko",
        "shortMeaning": "好きだ、良い",
        "meaning": "好きだ、良い"
      },
      {
        "surface": "좋아지다",
        "base": "좋아지다",
        "language": "ko",
        "shortMeaning": "好きになる、良くなる",
        "meaning": "好きになる、良くなる"
      },
      {
        "surface": "좋아져",
        "base": "좋아져",
        "language": "ko",
        "shortMeaning": "好きになっていく",
        "meaning": "好きになっていく"
      }
    ]
  },
  "두번 세번 나의 볼을 꼬집어 봐도": {
    "japanese": "何度も自分の頬をつねってみても。",
    "literalJapanese": "二度、三度、私の頬をつねってみても。",
    "sentenceExplanation": "「夢じゃないか確かめる」時の動作。 幸せすぎて現実とは思えない感じ。",
    "tokens": [
      {
        "surface": "두 번 세 번",
        "base": "두 번 세 번",
        "language": "ko",
        "shortMeaning": "二度、三度",
        "meaning": "二度、三度"
      },
      {
        "surface": "나의",
        "base": "나의",
        "language": "ko",
        "shortMeaning": "私の",
        "meaning": "私の"
      },
      {
        "surface": "볼",
        "base": "볼",
        "language": "ko",
        "shortMeaning": "頬",
        "meaning": "頬"
      },
      {
        "surface": "-을",
        "base": "-을",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "꼬집다",
        "base": "꼬집다",
        "language": "ko",
        "shortMeaning": "つねる",
        "meaning": "つねる"
      },
      {
        "surface": "꼬집어 보다",
        "base": "꼬집어 보다",
        "language": "ko",
        "shortMeaning": "つねってみる",
        "meaning": "つねってみる"
      },
      {
        "surface": "꼬집어 봐도",
        "base": "꼬집어 봐도",
        "language": "ko",
        "shortMeaning": "つねってみても",
        "meaning": "つねってみても"
      }
    ]
  },
  "마치 dreaming dreaming 꿈을 꾸는 듯": {
    "japanese": "まるで夢を見ているみたい。",
    "literalJapanese": "まるでdreaming dreaming、夢を見ているように。",
    "sentenceExplanation": "恋が現実とは思えないほど幸せ。 前の「頬をつねる」とつながる。",
    "tokens": [
      {
        "surface": "마치",
        "base": "마치",
        "language": "ko",
        "shortMeaning": "まるで",
        "meaning": "まるで"
      },
      {
        "surface": "dream / dreaming",
        "base": "dream / dreaming",
        "language": "en",
        "shortMeaning": "夢を見ること",
        "meaning": "夢を見ること"
      },
      {
        "surface": "꿈",
        "base": "꿈",
        "language": "ko",
        "shortMeaning": "夢",
        "meaning": "夢"
      },
      {
        "surface": "꿈을 꾸다",
        "base": "꿈을 꾸다",
        "language": "ko",
        "shortMeaning": "夢を見る",
        "meaning": "夢を見る"
      },
      {
        "surface": "듯",
        "base": "듯",
        "language": "ko",
        "shortMeaning": "〜のように",
        "meaning": "〜のように"
      }
    ]
  },
  "생각만 해도 난 미소가": {
    "japanese": "考えるだけで、私は笑顔になる。",
    "literalJapanese": "考えるだけでも私は笑みが。",
    "sentenceExplanation": "文としては「미소가 지어져」などが省略されている感じ。 相手のことを思うだけで自然に笑顔になる。",
    "tokens": [
      {
        "surface": "생각",
        "base": "생각",
        "language": "ko",
        "shortMeaning": "考え、思い",
        "meaning": "考え、思い"
      },
      {
        "surface": "생각하다",
        "base": "생각하다",
        "language": "ko",
        "shortMeaning": "考える、思う",
        "meaning": "考える、思う"
      },
      {
        "surface": "생각만 해도",
        "base": "생각만 해도",
        "language": "ko",
        "shortMeaning": "-아/어도 = 〜しても",
        "meaning": "考えるだけでも、思うだけでも / -만 = 〜だけ / -아/어도 = 〜しても",
        "explanation": "-만 = 〜だけ -아/어도 = 〜しても"
      },
      {
        "surface": "난",
        "base": "난",
        "language": "ko",
        "shortMeaning": "私は",
        "meaning": "私は"
      },
      {
        "surface": "미소",
        "base": "미소",
        "language": "ko",
        "shortMeaning": "微笑み、笑顔",
        "meaning": "微笑み、笑顔"
      },
      {
        "surface": "-가",
        "base": "-가",
        "language": "ko",
        "shortMeaning": "〜が",
        "meaning": "〜が"
      }
    ]
  },
  "Mr. Chu 입술 위에 Chu 달콤하게 Chu": {
    "japanese": "Mr. Chu、唇に甘いキスを。",
    "literalJapanese": "Mr. Chu、唇の上にChu、甘くChu。",
    "sentenceExplanation": "“Chu” は直接的な “kiss” よりもかわいく、アイドル曲らしい表現。 甘い恋の象徴。",
    "tokens": [
      {
        "surface": "입술",
        "base": "입술",
        "language": "ko",
        "shortMeaning": "唇",
        "meaning": "唇"
      },
      {
        "surface": "위",
        "base": "위",
        "language": "ko",
        "shortMeaning": "上",
        "meaning": "上"
      },
      {
        "surface": "입술 위에",
        "base": "입술 위에",
        "language": "ko",
        "shortMeaning": "唇の上に",
        "meaning": "唇の上に"
      },
      {
        "surface": "Chu",
        "base": "Chu",
        "language": "en",
        "shortMeaning": "チュッ、キスの音",
        "meaning": "チュッ、キスの音"
      },
      {
        "surface": "달콤하다",
        "base": "달콤하다",
        "language": "ko",
        "shortMeaning": "甘い",
        "meaning": "甘い"
      },
      {
        "surface": "달콤하게",
        "base": "달콤하게",
        "language": "ko",
        "shortMeaning": "甘く",
        "meaning": "甘く"
      }
    ]
  },
  "온몸에 난 힘이 풀려": {
    "japanese": "全身の力が抜けてしまう。",
    "literalJapanese": "全身の力が抜ける。",
    "sentenceExplanation": "キスやときめきで、体の力が抜けるほどドキドキしている。 かなり甘い恋愛表現。",
    "tokens": [
      {
        "surface": "온몸",
        "base": "온몸",
        "language": "ko",
        "shortMeaning": "몸 = 体",
        "meaning": "全身 / 온 = 全〜 / 몸 = 体",
        "explanation": "온 = 全〜 몸 = 体"
      },
      {
        "surface": "-에",
        "base": "-에",
        "language": "ko",
        "shortMeaning": "〜に",
        "meaning": "〜に"
      },
      {
        "surface": "난",
        "base": "난",
        "language": "ko",
        "shortMeaning": "私は",
        "meaning": "나는 / 私は",
        "explanation": "私は"
      },
      {
        "surface": "힘",
        "base": "힘",
        "language": "ko",
        "shortMeaning": "力",
        "meaning": "力"
      },
      {
        "surface": "-이",
        "base": "-이",
        "language": "ko",
        "shortMeaning": "〜が",
        "meaning": "〜が"
      },
      {
        "surface": "풀리다",
        "base": "풀리다",
        "language": "ko",
        "shortMeaning": "ほどける、抜ける、緩む",
        "meaning": "ほどける、抜ける、緩む"
      },
      {
        "surface": "힘이 풀리다",
        "base": "힘이 풀리다",
        "language": "ko",
        "shortMeaning": "力が抜ける",
        "meaning": "力が抜ける"
      }
    ]
  },
  "내 맘 흔들 흔들어 날 흔들어놔요": {
    "japanese": "私の心を揺さぶって、私を夢中にさせる。",
    "literalJapanese": "私の心を揺らし、揺らして、私を揺らしておく。",
    "sentenceExplanation": "相手のキスや存在が、心を落ち着かなくさせる。 「흔들 흔들」は揺れる感じを音で強調している。",
    "tokens": [
      {
        "surface": "내",
        "base": "내",
        "language": "ko",
        "shortMeaning": "私の",
        "meaning": "私の"
      },
      {
        "surface": "맘",
        "base": "맘",
        "language": "ko",
        "shortMeaning": "心、気持ち",
        "meaning": "마음 の縮約 / 心、気持ち",
        "explanation": "心、気持ち"
      },
      {
        "surface": "흔들다",
        "base": "흔들다",
        "language": "ko",
        "shortMeaning": "揺らす",
        "meaning": "揺らす"
      },
      {
        "surface": "흔들어",
        "base": "흔들어",
        "language": "ko",
        "shortMeaning": "揺らして",
        "meaning": "揺らして"
      },
      {
        "surface": "날",
        "base": "날",
        "language": "ko",
        "shortMeaning": "私を",
        "meaning": "나를 の縮約 / 私を",
        "explanation": "私を"
      },
      {
        "surface": "흔들어놓다",
        "base": "흔들어놓다",
        "language": "ko",
        "shortMeaning": "揺さぶっておく、揺さぶった状態にする",
        "meaning": "揺さぶっておく、揺さぶった状態にする"
      },
      {
        "surface": "흔들어놔요",
        "base": "흔들어놔요",
        "language": "ko",
        "shortMeaning": "揺さぶってしまいます、揺さぶります",
        "meaning": "揺さぶってしまいます、揺さぶります"
      }
    ]
  },
  "I'm falling falling for your love": {
    "japanese": "私はあなたの愛にどんどん落ちていく。",
    "literalJapanese": "私はあなたの愛に落ちていく。",
    "sentenceExplanation": "恋に抵抗できず、どんどん惹かれていく。 韓国語の 빠지다「ハマる、落ちる」と近い。",
    "tokens": [
      {
        "surface": "fall for",
        "base": "fall for",
        "language": "en",
        "shortMeaning": "〜に恋に落ちる、〜に惚れる",
        "meaning": "〜に恋に落ちる、〜に惚れる"
      },
      {
        "surface": "falling for your love",
        "base": "falling for your love",
        "language": "en",
        "shortMeaning": "あなたの愛に落ちていく",
        "meaning": "あなたの愛に落ちていく"
      }
    ]
  },
  "Hey you 입술 위에 Chu everyday with you": {
    "japanese": "ねえ、あなた。唇にキスを、毎日あなたと一緒に。",
    "literalJapanese": "Hey you、唇の上にChu、毎日あなたと。",
    "sentenceExplanation": "一度きりではなく、毎日一緒にいたい。 恋人としての幸せな日常を望んでいる。",
    "tokens": [
      {
        "surface": "Hey you",
        "base": "Hey you",
        "language": "en",
        "shortMeaning": "ねえ、あなた",
        "meaning": "ねえ、あなた"
      },
      {
        "surface": "입술 위에 Chu",
        "base": "입술 위에 Chu",
        "language": "ko",
        "shortMeaning": "唇にキス",
        "meaning": "唇にキス"
      },
      {
        "surface": "everyday with you",
        "base": "everyday with you",
        "language": "en",
        "shortMeaning": "毎日あなたと一緒に",
        "meaning": "毎日あなたと一緒に"
      }
    ]
  },
  "널 보면 내 눈이 감겨": {
    "japanese": "あなたを見ると、思わず目を閉じてしまう。",
    "literalJapanese": "あなたを見ると、私の目が閉じる。",
    "sentenceExplanation": "キスを待つ時に目を閉じるイメージ。 相手が近づいてきて、自然に目を閉じてしまう甘い場面。",
    "tokens": [
      {
        "surface": "널",
        "base": "널",
        "language": "ko",
        "shortMeaning": "あなたを",
        "meaning": "너를 の縮約 / あなたを",
        "explanation": "あなたを"
      },
      {
        "surface": "보면",
        "base": "보면",
        "language": "ko",
        "shortMeaning": "見ると",
        "meaning": "見ると"
      },
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
        "surface": "-이",
        "base": "-이",
        "language": "ko",
        "shortMeaning": "〜が",
        "meaning": "〜が"
      },
      {
        "surface": "감기다",
        "base": "감기다",
        "language": "ko",
        "shortMeaning": "閉じられる、閉じる",
        "meaning": "閉じられる、閉じる"
      },
      {
        "surface": "감겨",
        "base": "감겨",
        "language": "ko",
        "shortMeaning": "閉じる",
        "meaning": "閉じる"
      }
    ]
  },
  "몰래 살짝 다가와 또 키스해줄래": {
    "japanese": "こっそりそっと近づいて、またキスしてくれる？",
    "literalJapanese": "こっそり少し近づいて、またキスしてくれる？",
    "sentenceExplanation": "大胆な命令ではなく、可愛くお願いしている感じ。 몰래 살짝 があるので、秘密っぽく甘い雰囲気。",
    "tokens": [
      {
        "surface": "몰래",
        "base": "몰래",
        "language": "ko",
        "shortMeaning": "こっそり",
        "meaning": "こっそり"
      },
      {
        "surface": "살짝",
        "base": "살짝",
        "language": "ko",
        "shortMeaning": "そっと、少し",
        "meaning": "そっと、少し"
      },
      {
        "surface": "다가오다",
        "base": "다가오다",
        "language": "ko",
        "shortMeaning": "近づいてくる",
        "meaning": "近づいてくる"
      },
      {
        "surface": "다가와",
        "base": "다가와",
        "language": "ko",
        "shortMeaning": "近づいてきて",
        "meaning": "近づいてきて"
      },
      {
        "surface": "또",
        "base": "또",
        "language": "ko",
        "shortMeaning": "また",
        "meaning": "また"
      },
      {
        "surface": "키스하다",
        "base": "키스하다",
        "language": "ko",
        "shortMeaning": "キスする",
        "meaning": "キスする"
      },
      {
        "surface": "키스해주다",
        "base": "키스해주다",
        "language": "ko",
        "shortMeaning": "キスしてくれる",
        "meaning": "キスしてくれる"
      },
      {
        "surface": "키스해줄래",
        "base": "키스해줄래",
        "language": "ko",
        "shortMeaning": "-ㄹ래 は「〜する？」「〜してくれる？…",
        "meaning": "キスしてくれる？ / -ㄹ래 は「〜する？」「〜してくれる？」の柔らかい依頼にもなる。",
        "explanation": "-ㄹ래 は「〜する？」「〜してくれる？」の柔らかい依頼にもなる。"
      }
    ]
  },
  "내 꿈결 같은 넌 나만의 Mr. Chu": {
    "japanese": "夢みたいなあなたは、私だけのMr. Chu。",
    "literalJapanese": "私の夢心地のようなあなたは、私だけのMr. Chu。",
    "sentenceExplanation": "相手を独占したい気持ちがある。 “나만의” がかなり大事で、「私だけの特別な人」という意味。",
    "tokens": [
      {
        "surface": "내",
        "base": "내",
        "language": "ko",
        "shortMeaning": "私の",
        "meaning": "私の"
      },
      {
        "surface": "꿈결",
        "base": "꿈결",
        "language": "ko",
        "shortMeaning": "결 = きめ、流れ、感じ",
        "meaning": "夢心地、夢うつつ / 꿈 = 夢 / 결 = きめ、流れ、感じ",
        "explanation": "꿈 = 夢 결 = きめ、流れ、感じ"
      },
      {
        "surface": "꿈결 같은",
        "base": "꿈결 같은",
        "language": "ko",
        "shortMeaning": "夢のような、夢心地のような",
        "meaning": "夢のような、夢心地のような"
      },
      {
        "surface": "넌",
        "base": "넌",
        "language": "ko",
        "shortMeaning": "あなたは",
        "meaning": "너는 の縮約 / あなたは",
        "explanation": "あなたは"
      },
      {
        "surface": "나만의",
        "base": "나만의",
        "language": "ko",
        "shortMeaning": "-의 = 〜の",
        "meaning": "私だけの / 나 = 私 / -만 = 〜だけ / -의 = 〜の",
        "explanation": "나 = 私 -만 = 〜だけ -의 = 〜の"
      },
      {
        "surface": "Mr. Chu",
        "base": "Mr. Chu",
        "language": "en",
        "shortMeaning": "キスをくれる特別な人",
        "meaning": "キスをくれる特別な人"
      }
    ]
  },
  "부드러운 감촉 잊을 수 없어": {
    "japanese": "あのやわらかい感触が忘れられない。",
    "literalJapanese": "やわらかい感触を忘れることができない。",
    "sentenceExplanation": "キスの感触を思い出している。 直接的すぎず、可愛くロマンチックに表現している。",
    "tokens": [
      {
        "surface": "부드럽다",
        "base": "부드럽다",
        "language": "ko",
        "shortMeaning": "やわらかい、なめらかだ",
        "meaning": "やわらかい、なめらかだ"
      },
      {
        "surface": "부드러운",
        "base": "부드러운",
        "language": "ko",
        "shortMeaning": "やわらかい〜",
        "meaning": "やわらかい〜"
      },
      {
        "surface": "감촉",
        "base": "감촉",
        "language": "ko",
        "shortMeaning": "感触、触れた感じ",
        "meaning": "感触、触れた感じ"
      },
      {
        "surface": "잊다",
        "base": "잊다",
        "language": "ko",
        "shortMeaning": "忘れる",
        "meaning": "忘れる"
      },
      {
        "surface": "잊을 수 없다",
        "base": "잊을 수 없다",
        "language": "ko",
        "shortMeaning": "忘れることができない",
        "meaning": "忘れることができない"
      },
      {
        "surface": "없어",
        "base": "없어",
        "language": "ko",
        "shortMeaning": "ない",
        "meaning": "ない"
      }
    ]
  },
  "화끈거리는 내 얼굴 빨개지는 걸": {
    "japanese": "顔が熱くなって、赤くなってしまう。",
    "literalJapanese": "ほてる私の顔が赤くなるの。",
    "sentenceExplanation": "キスや相手を思い出して照れている。 화끈거리다 は体感的な「熱さ」がある。",
    "tokens": [
      {
        "surface": "화끈거리다",
        "base": "화끈거리다",
        "language": "ko",
        "shortMeaning": "顔が赤くなる時によく使う。",
        "meaning": "ほてる、熱くなる / 顔が赤くなる時によく使う。",
        "explanation": "顔が赤くなる時によく使う。"
      },
      {
        "surface": "화끈거리는",
        "base": "화끈거리는",
        "language": "ko",
        "shortMeaning": "ほてる〜",
        "meaning": "ほてる〜"
      },
      {
        "surface": "내",
        "base": "내",
        "language": "ko",
        "shortMeaning": "私の",
        "meaning": "私の"
      },
      {
        "surface": "얼굴",
        "base": "얼굴",
        "language": "ko",
        "shortMeaning": "顔",
        "meaning": "顔"
      },
      {
        "surface": "빨갛다",
        "base": "빨갛다",
        "language": "ko",
        "shortMeaning": "赤い",
        "meaning": "赤い"
      },
      {
        "surface": "빨개지다",
        "base": "빨개지다",
        "language": "ko",
        "shortMeaning": "赤くなる",
        "meaning": "赤くなる"
      },
      {
        "surface": "빨개지는",
        "base": "빨개지는",
        "language": "ko",
        "shortMeaning": "赤くなる〜",
        "meaning": "赤くなる〜"
      },
      {
        "surface": "걸",
        "base": "걸",
        "language": "ko",
        "shortMeaning": "〜ことを、〜なんだよ",
        "meaning": "것을 の縮約 / 〜ことを、〜なんだよ",
        "explanation": "〜ことを、〜なんだよ"
      }
    ]
  },
  "It's so lovely lovely 사랑스러워": {
    "japanese": "本当に可愛くて、愛おしい。",
    "literalJapanese": "とてもlovely lovely、愛らしい。",
    "sentenceExplanation": "相手との恋の雰囲気そのものが可愛い。 “lovely” と “사랑스러워” を重ねて、甘さを強調している。",
    "tokens": [
      {
        "surface": "lovely",
        "base": "lovely",
        "language": "en",
        "shortMeaning": "愛らしい、かわいい",
        "meaning": "愛らしい、かわいい"
      },
      {
        "surface": "사랑스럽다",
        "base": "사랑스럽다",
        "language": "ko",
        "shortMeaning": "愛らしい、かわいらしい",
        "meaning": "愛らしい、かわいらしい"
      },
      {
        "surface": "사랑스러워",
        "base": "사랑스러워",
        "language": "ko",
        "shortMeaning": "愛らしい",
        "meaning": "愛らしい"
      }
    ]
  },
  "난 네가 자꾸만 좋아져": {
    "japanese": "私はどんどんあなたを好きになっていく。",
    "literalJapanese": "私はあなたがしきりに好きになっていく。",
    "sentenceExplanation": "好きが止まらない。 時間が経つほど気持ちが増えていく。",
    "tokens": [
      {
        "surface": "난",
        "base": "난",
        "language": "ko",
        "shortMeaning": "私は",
        "meaning": "나는 / 私は",
        "explanation": "私は"
      },
      {
        "surface": "네가",
        "base": "네가",
        "language": "ko",
        "shortMeaning": "あなたが",
        "meaning": "あなたが"
      },
      {
        "surface": "자꾸",
        "base": "자꾸",
        "language": "ko",
        "shortMeaning": "何度も、しきりに、どんどん",
        "meaning": "何度も、しきりに、どんどん"
      },
      {
        "surface": "-만",
        "base": "-만",
        "language": "ko",
        "shortMeaning": "〜ばかり、強調",
        "meaning": "〜ばかり、強調"
      },
      {
        "surface": "자꾸만",
        "base": "자꾸만",
        "language": "ko",
        "shortMeaning": "どんどん、しきりに",
        "meaning": "どんどん、しきりに"
      },
      {
        "surface": "좋다",
        "base": "좋다",
        "language": "ko",
        "shortMeaning": "好きだ",
        "meaning": "好きだ"
      },
      {
        "surface": "좋아지다",
        "base": "좋아지다",
        "language": "ko",
        "shortMeaning": "好きになる",
        "meaning": "好きになる"
      },
      {
        "surface": "좋아져",
        "base": "좋아져",
        "language": "ko",
        "shortMeaning": "好きになっていく",
        "meaning": "好きになっていく"
      }
    ]
  },
  "내 꿈결 같은 넌 나만의": {
    "japanese": "夢みたいなあなたは、私だけの。",
    "literalJapanese": "私の夢心地のようなあなたは、私だけの。",
    "sentenceExplanation": "相手を独占したい気持ちがある。 “나만의” がかなり大事で、「私だけの特別な人」という意味。",
    "tokens": [
      {
        "surface": "내",
        "base": "내",
        "language": "ko",
        "shortMeaning": "私の",
        "meaning": "私の"
      },
      {
        "surface": "꿈결",
        "base": "꿈결",
        "language": "ko",
        "shortMeaning": "결 = きめ、流れ、感じ",
        "meaning": "夢心地、夢うつつ / 꿈 = 夢 / 결 = きめ、流れ、感じ",
        "explanation": "꿈 = 夢 결 = きめ、流れ、感じ"
      },
      {
        "surface": "꿈결 같은",
        "base": "꿈결 같은",
        "language": "ko",
        "shortMeaning": "夢のような、夢心地のような",
        "meaning": "夢のような、夢心地のような"
      },
      {
        "surface": "넌",
        "base": "넌",
        "language": "ko",
        "shortMeaning": "あなたは",
        "meaning": "너는 の縮約 / あなたは",
        "explanation": "あなたは"
      },
      {
        "surface": "나만의",
        "base": "나만의",
        "language": "ko",
        "shortMeaning": "-의 = 〜の",
        "meaning": "私だけの / 나 = 私 / -만 = 〜だけ / -의 = 〜の",
        "explanation": "나 = 私 -만 = 〜だけ -의 = 〜の"
      },
      {
        "surface": "Mr. Chu",
        "base": "Mr. Chu",
        "language": "en",
        "shortMeaning": "キスをくれる特別な人",
        "meaning": "キスをくれる特別な人"
      }
    ]
  },
  "내 소원을 들어줘요 영원한 사랑 이뤄주길": {
    "japanese": "私の願いを聞いて。永遠の愛を叶えてほしい。",
    "literalJapanese": "私の願いを聞いてください。永遠の愛を叶えてくれることを。",
    "sentenceExplanation": "恋の願いを相手にお願いしている。 敬語っぽい形で、かわいく丁寧。 一時的なときめきではなく、ずっと続く愛を願っている。 アイドル曲らしい純粋な願い。",
    "tokens": [
      {
        "surface": "내",
        "base": "내",
        "language": "ko",
        "shortMeaning": "私の",
        "meaning": "私の"
      },
      {
        "surface": "소원",
        "base": "소원",
        "language": "ko",
        "shortMeaning": "願い、願望",
        "meaning": "願い、願望"
      },
      {
        "surface": "-을",
        "base": "-을",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "듣다",
        "base": "듣다",
        "language": "ko",
        "shortMeaning": "聞く",
        "meaning": "聞く"
      },
      {
        "surface": "들어주다",
        "base": "들어주다",
        "language": "ko",
        "shortMeaning": "直訳は「聞いてくれる」だが、願いの場合…",
        "meaning": "聞いてくれる、叶えてくれる / 直訳は「聞いてくれる」だが、願いの場合は「叶えてくれる」に近い。",
        "explanation": "直訳は「聞いてくれる」だが、願いの場合は「叶えてくれる」に近い。"
      },
      {
        "surface": "들어줘요",
        "base": "들어줘요",
        "language": "ko",
        "shortMeaning": "聞いてください、叶えてください",
        "meaning": "聞いてください、叶えてください"
      },
      {
        "surface": "영원하다",
        "base": "영원하다",
        "language": "ko",
        "shortMeaning": "永遠だ",
        "meaning": "永遠だ"
      },
      {
        "surface": "영원한",
        "base": "영원한",
        "language": "ko",
        "shortMeaning": "永遠の〜",
        "meaning": "永遠の〜"
      },
      {
        "surface": "사랑",
        "base": "사랑",
        "language": "ko",
        "shortMeaning": "愛",
        "meaning": "愛"
      },
      {
        "surface": "이루다",
        "base": "이루다",
        "language": "ko",
        "shortMeaning": "成し遂げる、叶える",
        "meaning": "成し遂げる、叶える"
      },
      {
        "surface": "이뤄주다",
        "base": "이뤄주다",
        "language": "ko",
        "shortMeaning": "叶えてくれる",
        "meaning": "叶えてくれる"
      },
      {
        "surface": "-길",
        "base": "-길",
        "language": "ko",
        "shortMeaning": "〜することを、〜してほしい",
        "meaning": "-기를 の縮約 / 〜することを、〜してほしい",
        "explanation": "〜することを、〜してほしい"
      }
    ]
  },
  "짜릿짜릿한 느낌 절대 맘 변하지 않기": {
    "japanese": "このときめく気持ちが、絶対に変わりませんように。",
    "literalJapanese": "しびれるような感じ、絶対に心が変わらないこと。",
    "sentenceExplanation": "恋のドキドキがずっと続くことを願っている。 “맘 변하지 않기” は約束のような表現。",
    "tokens": [
      {
        "surface": "짜릿하다",
        "base": "짜릿하다",
        "language": "ko",
        "shortMeaning": "しびれる、ぞくっとする、ときめく",
        "meaning": "しびれる、ぞくっとする、ときめく"
      },
      {
        "surface": "짜릿짜릿한",
        "base": "짜릿짜릿한",
        "language": "ko",
        "shortMeaning": "繰り返しで感覚を強調。",
        "meaning": "しびれるような、ときめくような / 繰り返しで感覚を強調。",
        "explanation": "繰り返しで感覚を強調。"
      },
      {
        "surface": "느낌",
        "base": "느낌",
        "language": "ko",
        "shortMeaning": "感じ、感覚",
        "meaning": "感じ、感覚"
      },
      {
        "surface": "절대",
        "base": "절대",
        "language": "ko",
        "shortMeaning": "絶対に",
        "meaning": "絶対に"
      },
      {
        "surface": "맘",
        "base": "맘",
        "language": "ko",
        "shortMeaning": "心、気持ち",
        "meaning": "마음 / 心、気持ち",
        "explanation": "心、気持ち"
      },
      {
        "surface": "변하다",
        "base": "변하다",
        "language": "ko",
        "shortMeaning": "変わる",
        "meaning": "変わる"
      },
      {
        "surface": "변하지 않다",
        "base": "변하지 않다",
        "language": "ko",
        "shortMeaning": "変わらない",
        "meaning": "変わらない"
      },
      {
        "surface": "-기",
        "base": "-기",
        "language": "ko",
        "shortMeaning": "〜すること",
        "meaning": "〜すること"
      }
    ]
  },
  "평생 나만 바라봐줘 baby": {
    "japanese": "一生、私だけを見ていてね、baby。",
    "literalJapanese": "一生、私だけを見つめて、baby。",
    "sentenceExplanation": "かなりストレートな独占欲。 かわいい恋の歌だが、「私だけを見て」という願いもはっきりある。",
    "tokens": [
      {
        "surface": "평생",
        "base": "평생",
        "language": "ko",
        "shortMeaning": "一生",
        "meaning": "一生"
      },
      {
        "surface": "나만",
        "base": "나만",
        "language": "ko",
        "shortMeaning": "私だけ",
        "meaning": "私だけ"
      },
      {
        "surface": "바라보다",
        "base": "바라보다",
        "language": "ko",
        "shortMeaning": "見つめる、見守る",
        "meaning": "見つめる、見守る"
      },
      {
        "surface": "바라봐주다",
        "base": "바라봐주다",
        "language": "ko",
        "shortMeaning": "見つめてくれる",
        "meaning": "見つめてくれる"
      },
      {
        "surface": "바라봐줘",
        "base": "바라봐줘",
        "language": "ko",
        "shortMeaning": "見つめて、見ていて",
        "meaning": "見つめて、見ていて"
      }
    ]
  }
};

const lyricsSequence: string[] = [
  "한번 보면 두 번 더 보고 싶어",
  "두번 세번 보면 너를 더 안고 싶어",
  "너와 커플링 커플링 손에 끼고서",
  "함께 이 길을 걷고 싶어 난",
  "매일 매일 봐도 난 더 좋아져",
  "두번 세번 나의 볼을 꼬집어 봐도",
  "마치 dreaming dreaming 꿈을 꾸는 듯",
  "생각만 해도 난 미소가",
  "Mr. Chu 입술 위에 Chu 달콤하게 Chu",
  "온몸에 난 힘이 풀려",
  "내 맘 흔들 흔들어 날 흔들어놔요",
  "I'm falling falling for your love",
  "Hey you 입술 위에 Chu everyday with you",
  "널 보면 내 눈이 감겨",
  "몰래 살짝 다가와 또 키스해줄래",
  "내 꿈결 같은 넌 나만의 Mr. Chu",
  "부드러운 감촉 잊을 수 없어",
  "화끈거리는 내 얼굴 빨개지는 걸",
  "It's so lovely lovely 사랑스러워",
  "난 네가 자꾸만 좋아져",
  "Mr. Chu 입술 위에 Chu 달콤하게 Chu",
  "온몸에 난 힘이 풀려",
  "내 맘 흔들 흔들어 날 흔들어놔요",
  "I'm falling falling for your love",
  "Hey you 입술 위에 Chu everyday with you",
  "널 보면 내 눈이 감겨",
  "몰래 살짝 다가와 또 키스해줄래",
  "내 꿈결 같은 넌 나만의",
  "내 소원을 들어줘요 영원한 사랑 이뤄주길",
  "짜릿짜릿한 느낌 절대 맘 변하지 않기",
  "평생 나만 바라봐줘 baby",
  "Mr. Chu 입술 위에 Chu 달콤하게 Chu",
  "온몸에 난 힘이 풀려",
  "내 맘 흔들 흔들어 날 흔들어놔요",
  "I'm falling falling for your love",
  "Hey you 입술 위에 Chu everyday with you",
  "널 보면 내 눈이 감겨",
  "몰래 살짝 다가와 또 키스해줄래",
  "내 꿈결 같은 넌 나만의 Mr. Chu"
];

export const completeMrChuLines: LyricLine[] = lyricsSequence.map((korean, index) => {
  const template = lineTemplates[korean];

  return {
    id: `apink-mr-chu-line-${index + 1}`,
    korean,
    japanese: template.japanese,
    literalJapanese: template.literalJapanese,
    sentenceExplanation: template.sentenceExplanation,
    tokens: template.tokens.map((token, tokenIndex) => ({
      ...token,
      id: `apink-mr-chu-line-${index + 1}-token-${tokenIndex + 1}`,
    })),
  };
});

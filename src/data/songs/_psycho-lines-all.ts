import type { LyricLine, Token } from "../../types/song";

type TokenSeed = Omit<Token, "id">;
type LineTemplate = {
  japanese: string;
  literalJapanese: string;
  sentenceExplanation: string;
  tokens: TokenSeed[];
};

const lineTemplates: Record<string, LineTemplate> = {
  "널 어쩌면 좋을까": {
    "japanese": "あなたのこと、どうしたらいいんだろう。",
    "literalJapanese": "あなたをどうすればいいのかな。",
    "sentenceExplanation": "相手への感情を自分でも扱いきれていない。 好きだけど、振り回されて、どう向き合えばいいか分からない始まり。",
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
        "surface": "어쩌다",
        "base": "어쩌다",
        "language": "ko",
        "shortMeaning": "どうする",
        "meaning": "どうする"
      },
      {
        "surface": "어쩌면 좋을까",
        "base": "어쩌면 좋을까",
        "language": "ko",
        "shortMeaning": "좋을까 = いいだろうか",
        "meaning": "どうすればいいのかな / 어쩌면 = どうすれば / 좋을까 = いいだろうか",
        "explanation": "어쩌면 = どうすれば 좋을까 = いいだろうか"
      }
    ]
  },
  "이런 맘은 또 첨이라": {
    "japanese": "こんな気持ちは初めてだから。",
    "literalJapanese": "こんな気持ちはまた初めてだから。",
    "sentenceExplanation": "今まで経験したことのない感情。 普通の恋ではなく、自分でも戸惑うほど強い感情。",
    "tokens": [
      {
        "surface": "이런",
        "base": "이런",
        "language": "ko",
        "shortMeaning": "こんな",
        "meaning": "こんな"
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
        "surface": "또",
        "base": "또",
        "language": "ko",
        "shortMeaning": "また、さらに",
        "meaning": "また、さらに"
      },
      {
        "surface": "첨",
        "base": "첨",
        "language": "ko",
        "shortMeaning": "初めて",
        "meaning": "처음 の縮約 / 初めて",
        "explanation": "初めて"
      },
      {
        "surface": "-이라",
        "base": "-이라",
        "language": "ko",
        "shortMeaning": "〜だから",
        "meaning": "〜だから"
      }
    ]
  },
  "Up & Down이 좀 심해": {
    "japanese": "気持ちの浮き沈みがかなり激しい。",
    "literalJapanese": "上がったり下がったりが少し激しい。",
    "sentenceExplanation": "相手のせいで、感情が安定しない。 好き、怒り、寂しさ、安心が何度も入れ替わる感じ。",
    "tokens": [
      {
        "surface": "Up & Down",
        "base": "Up & Down",
        "language": "en",
        "shortMeaning": "感情の浮き沈みを表す。",
        "meaning": "上がったり下がったり / 感情の浮き沈みを表す。",
        "explanation": "感情の浮き沈みを表す。"
      },
      {
        "surface": "-이",
        "base": "-이",
        "language": "ko",
        "shortMeaning": "〜が",
        "meaning": "〜が"
      },
      {
        "surface": "좀",
        "base": "좀",
        "language": "ko",
        "shortMeaning": "ここでは「かなり」「ちょっと激しすぎる…",
        "meaning": "少し、ちょっと / ここでは「かなり」「ちょっと激しすぎる」くらいのニュアンス。",
        "explanation": "ここでは「かなり」「ちょっと激しすぎる」くらいのニュアンス。"
      },
      {
        "surface": "심하다",
        "base": "심하다",
        "language": "ko",
        "shortMeaning": "ひどい、激しい、程度が強い",
        "meaning": "ひどい、激しい、程度が強い"
      },
      {
        "surface": "심해",
        "base": "심해",
        "language": "ko",
        "shortMeaning": "激しい",
        "meaning": "激しい"
      }
    ]
  },
  "조절이 자꾸 잘 안돼": {
    "japanese": "うまく自分を抑えられない。",
    "literalJapanese": "調節が何度もうまくできない。",
    "sentenceExplanation": "感情のコントロールができない。 この曲の不安定さを直接表している。",
    "tokens": [
      {
        "surface": "조절",
        "base": "조절",
        "language": "ko",
        "shortMeaning": "調節、コントロール",
        "meaning": "調節、コントロール"
      },
      {
        "surface": "-이",
        "base": "-이",
        "language": "ko",
        "shortMeaning": "〜が",
        "meaning": "〜が"
      },
      {
        "surface": "자꾸",
        "base": "자꾸",
        "language": "ko",
        "shortMeaning": "しきりに、何度も、やたらと",
        "meaning": "しきりに、何度も、やたらと"
      },
      {
        "surface": "잘",
        "base": "잘",
        "language": "ko",
        "shortMeaning": "うまく",
        "meaning": "うまく"
      },
      {
        "surface": "안 되다",
        "base": "안 되다",
        "language": "ko",
        "shortMeaning": "うまくいかない、できない",
        "meaning": "うまくいかない、できない"
      },
      {
        "surface": "안돼",
        "base": "안돼",
        "language": "ko",
        "shortMeaning": "できない、うまくいかない",
        "meaning": "できない、うまくいかない"
      }
    ]
  },
  "하나 확실한 건": {
    "japanese": "一つだけ確かなのは。",
    "literalJapanese": "一つ確かなことは。",
    "sentenceExplanation": "気持ちは不安定でも、確かなことが一つある。 次の “I don’t play the game” につながる。",
    "tokens": [
      {
        "surface": "하나",
        "base": "하나",
        "language": "ko",
        "shortMeaning": "一つ",
        "meaning": "一つ"
      },
      {
        "surface": "확실하다",
        "base": "확실하다",
        "language": "ko",
        "shortMeaning": "確かだ、はっきりしている",
        "meaning": "確かだ、はっきりしている"
      },
      {
        "surface": "확실한",
        "base": "확실한",
        "language": "ko",
        "shortMeaning": "確かな〜",
        "meaning": "確かな〜"
      },
      {
        "surface": "건",
        "base": "건",
        "language": "ko",
        "shortMeaning": "ことは、ものは",
        "meaning": "것은 の縮約 / ことは、ものは",
        "explanation": "ことは、ものは"
      }
    ]
  },
  "I don't play the game": {
    "japanese": "駆け引きなんてしていない。",
    "literalJapanese": "私はゲームをしない。",
    "sentenceExplanation": "恋愛の駆け引きではなく、本気で好き。 計算して相手を振り回しているのではなく、感情そのものが激しいということ。",
    "tokens": [
      {
        "surface": "I don't",
        "base": "I don't",
        "language": "en",
        "shortMeaning": "私は〜しない",
        "meaning": "私は〜しない"
      },
      {
        "surface": "play the game",
        "base": "play the game",
        "language": "en",
        "shortMeaning": "ゲームをする、駆け引きをする",
        "meaning": "ゲームをする、駆け引きをする"
      }
    ]
  },
  "우리 진짜 별나대": {
    "japanese": "私たちって、本当に変わっているらしい。",
    "literalJapanese": "私たちは本当に変わっているんだって。",
    "sentenceExplanation": "周りからそう言われている。 自分たちの関係が普通ではないことを本人たちも分かっている。",
    "tokens": [
      {
        "surface": "우리",
        "base": "우리",
        "language": "ko",
        "shortMeaning": "私たち",
        "meaning": "私たち"
      },
      {
        "surface": "진짜",
        "base": "진짜",
        "language": "ko",
        "shortMeaning": "本当に",
        "meaning": "本当に"
      },
      {
        "surface": "별나다",
        "base": "별나다",
        "language": "ko",
        "shortMeaning": "変わっている、普通と違う、風変わりだ",
        "meaning": "変わっている、普通と違う、風変わりだ"
      },
      {
        "surface": "별나대",
        "base": "별나대",
        "language": "ko",
        "shortMeaning": "「〜らしい」「〜なんだって」",
        "meaning": "별나다고 해 の縮約に近い / 変わっているんだって / -대 は伝聞。 / 「〜らしい」「〜なんだって」",
        "explanation": "変わっているんだって -대 は伝聞。 「〜らしい」「〜なんだって」"
      }
    ]
  },
  "그냥 내가 너무 좋아해": {
    "japanese": "ただ、私があなたを好きすぎるだけ。",
    "literalJapanese": "ただ私がすごく好き。",
    "sentenceExplanation": "複雑な理由や計算ではない。 ただ好きすぎるから、おかしくなる。",
    "tokens": [
      {
        "surface": "그냥",
        "base": "그냥",
        "language": "ko",
        "shortMeaning": "ただ、そのまま、理由なく",
        "meaning": "ただ、そのまま、理由なく"
      },
      {
        "surface": "내가",
        "base": "내가",
        "language": "ko",
        "shortMeaning": "私が",
        "meaning": "私が"
      },
      {
        "surface": "너무",
        "base": "너무",
        "language": "ko",
        "shortMeaning": "とても、あまりにも",
        "meaning": "とても、あまりにも"
      },
      {
        "surface": "좋아하다",
        "base": "좋아하다",
        "language": "ko",
        "shortMeaning": "好きだ",
        "meaning": "好きだ"
      },
      {
        "surface": "좋아해",
        "base": "좋아해",
        "language": "ko",
        "shortMeaning": "好き",
        "meaning": "好き"
      }
    ]
  },
  "넌 그걸 너무 잘 알고": {
    "japanese": "あなたはそれを分かっていて。",
    "literalJapanese": "あなたはそれをとてもよく知っていて。",
    "sentenceExplanation": "相手は、自分が好かれていることを知っている。 だから次の「날 쥐락펴락해」につながる。",
    "tokens": [
      {
        "surface": "넌",
        "base": "넌",
        "language": "ko",
        "shortMeaning": "あなたは",
        "meaning": "너는 の縮約 / あなたは",
        "explanation": "あなたは"
      },
      {
        "surface": "그걸",
        "base": "그걸",
        "language": "ko",
        "shortMeaning": "それを",
        "meaning": "그것을 の縮約 / それを",
        "explanation": "それを"
      },
      {
        "surface": "너무",
        "base": "너무",
        "language": "ko",
        "shortMeaning": "とても",
        "meaning": "とても"
      },
      {
        "surface": "잘",
        "base": "잘",
        "language": "ko",
        "shortMeaning": "よく",
        "meaning": "よく"
      },
      {
        "surface": "알다",
        "base": "알다",
        "language": "ko",
        "shortMeaning": "知る、分かる",
        "meaning": "知る、分かる"
      },
      {
        "surface": "알고",
        "base": "알고",
        "language": "ko",
        "shortMeaning": "分かっていて",
        "meaning": "分かっていて"
      }
    ]
  },
  "날 쥐락펴락해": {
    "japanese": "私の心を思いのままに振り回す。",
    "literalJapanese": "私を握ったり広げたりする。",
    "sentenceExplanation": "かなり重要表現。 相手の言動一つで自分の気持ちが上下する。 相手に主導権を握られている感じ。",
    "tokens": [
      {
        "surface": "날",
        "base": "날",
        "language": "ko",
        "shortMeaning": "私を",
        "meaning": "나를 の縮約 / 私を",
        "explanation": "私を"
      },
      {
        "surface": "쥐다",
        "base": "쥐다",
        "language": "ko",
        "shortMeaning": "握る",
        "meaning": "握る"
      },
      {
        "surface": "펴다",
        "base": "펴다",
        "language": "ko",
        "shortMeaning": "広げる、伸ばす",
        "meaning": "広げる、伸ばす"
      },
      {
        "surface": "쥐락펴락하다",
        "base": "쥐락펴락하다",
        "language": "ko",
        "shortMeaning": "握ったり広げたりする。",
        "meaning": "思いのままに操る、手玉に取る / 直訳すると、 / 握ったり広げたりする。",
        "explanation": "直訳すると、 握ったり広げたりする。"
      }
    ]
  },
  "나도 마찬가지인걸": {
    "japanese": "でも私だって同じなんだ。",
    "literalJapanese": "私も同じなの。",
    "sentenceExplanation": "相手だけが自分を振り回しているわけではない。 自分も相手を同じように揺さぶっている。 二人とも加害者であり、被害者でもある関係。",
    "tokens": [
      {
        "surface": "나도",
        "base": "나도",
        "language": "ko",
        "shortMeaning": "私も",
        "meaning": "私も"
      },
      {
        "surface": "마찬가지",
        "base": "마찬가지",
        "language": "ko",
        "shortMeaning": "同じこと、同様",
        "meaning": "同じこと、同様"
      },
      {
        "surface": "-인걸",
        "base": "-인걸",
        "language": "ko",
        "shortMeaning": "説明・言い訳・強調のニュアンス。",
        "meaning": "〜なんだもの、〜なんだよ / 説明・言い訳・強調のニュアンス。",
        "explanation": "説明・言い訳・強調のニュアンス。"
      }
    ]
  },
  "우린 참 별나고 이상한 사이야": {
    "japanese": "私たちは本当に変で、不思議な関係。",
    "literalJapanese": "私たちは本当に変わっていて、おかしな関係だ。",
    "sentenceExplanation": "この曲の中心表現の一つ。 普通の恋人関係ではないが、それでも強く結びついている。",
    "tokens": [
      {
        "surface": "우린",
        "base": "우린",
        "language": "ko",
        "shortMeaning": "私たちは",
        "meaning": "우리는 の縮約 / 私たちは",
        "explanation": "私たちは"
      },
      {
        "surface": "참",
        "base": "참",
        "language": "ko",
        "shortMeaning": "本当に、とても",
        "meaning": "本当に、とても"
      },
      {
        "surface": "별나다",
        "base": "별나다",
        "language": "ko",
        "shortMeaning": "変わっている",
        "meaning": "変わっている"
      },
      {
        "surface": "별나고",
        "base": "별나고",
        "language": "ko",
        "shortMeaning": "変わっていて",
        "meaning": "変わっていて"
      },
      {
        "surface": "이상하다",
        "base": "이상하다",
        "language": "ko",
        "shortMeaning": "変だ、おかしい、不思議だ",
        "meaning": "変だ、おかしい、不思議だ"
      },
      {
        "surface": "이상한",
        "base": "이상한",
        "language": "ko",
        "shortMeaning": "変な〜",
        "meaning": "変な〜"
      },
      {
        "surface": "사이",
        "base": "사이",
        "language": "ko",
        "shortMeaning": "関係、仲",
        "meaning": "関係、仲"
      },
      {
        "surface": "-야",
        "base": "-야",
        "language": "ko",
        "shortMeaning": "〜だよ",
        "meaning": "〜だよ"
      }
    ]
  },
  "서로를 부서지게": {
    "japanese": "お互いを壊してしまうほどに。",
    "literalJapanese": "お互いを壊れるように。",
    "sentenceExplanation": "傷つけ合うほど激しい関係。 ただの喧嘩ではなく、心を壊すほどの衝突。",
    "tokens": [
      {
        "surface": "서로",
        "base": "서로",
        "language": "ko",
        "shortMeaning": "お互い",
        "meaning": "お互い"
      },
      {
        "surface": "서로를",
        "base": "서로를",
        "language": "ko",
        "shortMeaning": "お互いを",
        "meaning": "お互いを"
      },
      {
        "surface": "부서지다",
        "base": "부서지다",
        "language": "ko",
        "shortMeaning": "壊れる、砕ける",
        "meaning": "壊れる、砕ける"
      },
      {
        "surface": "부서지게",
        "base": "부서지게",
        "language": "ko",
        "shortMeaning": "-게 は「〜するように」「〜く」。",
        "meaning": "壊れるように、壊れるほど / -게 は「〜するように」「〜く」。",
        "explanation": "-게 は「〜するように」「〜く」。"
      }
    ]
  },
  "(부서지게)": {
    "japanese": "（壊れるほどに）",
    "literalJapanese": "（壊れるように）",
    "sentenceExplanation": "傷つけ合うほど激しい関係。 ただの喧嘩ではなく、心を壊すほどの衝突。",
    "tokens": [
      {
        "surface": "서로",
        "base": "서로",
        "language": "ko",
        "shortMeaning": "お互い",
        "meaning": "お互い"
      },
      {
        "surface": "서로를",
        "base": "서로를",
        "language": "ko",
        "shortMeaning": "お互いを",
        "meaning": "お互いを"
      },
      {
        "surface": "부서지다",
        "base": "부서지다",
        "language": "ko",
        "shortMeaning": "壊れる、砕ける",
        "meaning": "壊れる、砕ける"
      },
      {
        "surface": "부서지게",
        "base": "부서지게",
        "language": "ko",
        "shortMeaning": "-게 は「〜するように」「〜く」。",
        "meaning": "壊れるように、壊れるほど / -게 は「〜するように」「〜く」。",
        "explanation": "-게 は「〜するように」「〜く」。"
      }
    ]
  },
  "그리곤 또 껴안아": {
    "japanese": "それでもまた抱きしめ合う。",
    "literalJapanese": "そしてまた抱きしめる。",
    "sentenceExplanation": "壊し合うほど傷つけても、結局また戻る。 この曲の「Psycho」的な関係を一番よく表している。",
    "tokens": [
      {
        "surface": "그리곤",
        "base": "그리곤",
        "language": "ko",
        "shortMeaning": "そして、それから",
        "meaning": "그리고는 の縮約 / そして、それから",
        "explanation": "そして、それから"
      },
      {
        "surface": "또",
        "base": "또",
        "language": "ko",
        "shortMeaning": "また",
        "meaning": "また"
      },
      {
        "surface": "껴안다",
        "base": "껴안다",
        "language": "ko",
        "shortMeaning": "抱きしめる",
        "meaning": "抱きしめる"
      },
      {
        "surface": "껴안아",
        "base": "껴안아",
        "language": "ko",
        "shortMeaning": "抱きしめる",
        "meaning": "抱きしめる"
      }
    ]
  },
  "(그리곤 또 껴안아)": {
    "japanese": "（それでもまた抱きしめ合う）",
    "literalJapanese": "（そしてまた抱きしめる）",
    "sentenceExplanation": "壊し合うほど傷つけても、結局また戻る。 この曲の「Psycho」的な関係を一番よく表している。",
    "tokens": [
      {
        "surface": "그리곤",
        "base": "그리곤",
        "language": "ko",
        "shortMeaning": "そして、それから",
        "meaning": "그리고는 の縮約 / そして、それから",
        "explanation": "そして、それから"
      },
      {
        "surface": "또",
        "base": "또",
        "language": "ko",
        "shortMeaning": "また",
        "meaning": "また"
      },
      {
        "surface": "껴안다",
        "base": "껴안다",
        "language": "ko",
        "shortMeaning": "抱きしめる",
        "meaning": "抱きしめる"
      },
      {
        "surface": "껴안아",
        "base": "껴안아",
        "language": "ko",
        "shortMeaning": "抱きしめる",
        "meaning": "抱きしめる"
      }
    ]
  },
  "You got me feeling like a": {
    "japanese": "あなたのせいで、私はまるで。",
    "literalJapanese": "あなたは私に〜のように感じさせる。",
    "sentenceExplanation": "恋で自分らしくいられないほど感情が乱れる。 ただし、この曲ではホラー的な意味より「周りから見たら理解不能な恋」という意味が強い。",
    "tokens": [
      {
        "surface": "You got me",
        "base": "You got me",
        "language": "en",
        "shortMeaning": "あなたは私を〜にした、あなたのせいで私…",
        "meaning": "あなたは私を〜にした、あなたのせいで私は〜になった"
      },
      {
        "surface": "feeling like",
        "base": "feeling like",
        "language": "en",
        "shortMeaning": "〜のように感じる",
        "meaning": "〜のように感じる"
      },
      {
        "surface": "Psycho",
        "base": "Psycho",
        "language": "en",
        "shortMeaning": "サイコ、おかしい人、異常な人",
        "meaning": "サイコ、おかしい人、異常な人"
      }
    ]
  },
  "Psycho psycho": {
    "japanese": "おかしくなったみたい。",
    "literalJapanese": "サイコ、サイコ。",
    "sentenceExplanation": "恋で自分らしくいられないほど感情が乱れる。 ただし、この曲ではホラー的な意味より「周りから見たら理解不能な恋」という意味が強い。",
    "tokens": [
      {
        "surface": "You got me",
        "base": "You got me",
        "language": "en",
        "shortMeaning": "あなたは私を〜にした、あなたのせいで私…",
        "meaning": "あなたは私を〜にした、あなたのせいで私は〜になった"
      },
      {
        "surface": "feeling like",
        "base": "feeling like",
        "language": "en",
        "shortMeaning": "〜のように感じる",
        "meaning": "〜のように感じる"
      },
      {
        "surface": "Psycho",
        "base": "Psycho",
        "language": "en",
        "shortMeaning": "サイコ、おかしい人、異常な人",
        "meaning": "サイコ、おかしい人、異常な人"
      }
    ]
  },
  "우릴 보고 말해 자꾸 자꾸": {
    "japanese": "周りは私たちを見て、何度も言う。",
    "literalJapanese": "私たちを見て、何度も何度も言う。",
    "sentenceExplanation": "周囲の評価が入っている。 二人の関係は、自分たちだけでなく周りからも変に見えている。",
    "tokens": [
      {
        "surface": "우릴",
        "base": "우릴",
        "language": "ko",
        "shortMeaning": "私たちを",
        "meaning": "우리를 の縮約 / 私たちを",
        "explanation": "私たちを"
      },
      {
        "surface": "보다",
        "base": "보다",
        "language": "ko",
        "shortMeaning": "見る",
        "meaning": "見る"
      },
      {
        "surface": "보고",
        "base": "보고",
        "language": "ko",
        "shortMeaning": "見て",
        "meaning": "見て"
      },
      {
        "surface": "말하다",
        "base": "말하다",
        "language": "ko",
        "shortMeaning": "言う",
        "meaning": "言う"
      },
      {
        "surface": "말해",
        "base": "말해",
        "language": "ko",
        "shortMeaning": "言う",
        "meaning": "言う"
      },
      {
        "surface": "자꾸",
        "base": "자꾸",
        "language": "ko",
        "shortMeaning": "何度も、しきりに",
        "meaning": "何度も、しきりに"
      },
      {
        "surface": "자꾸 자꾸",
        "base": "자꾸 자꾸",
        "language": "ko",
        "shortMeaning": "何度も何度も",
        "meaning": "何度も何度も"
      }
    ]
  },
  "다시 안 볼 듯 싸우다가도": {
    "japanese": "もう二度と会わないみたいに喧嘩しても。",
    "literalJapanese": "二度と会わないかのように喧嘩しても。",
    "sentenceExplanation": "別れる勢いで激しく喧嘩する。 でも次で「붙어 다니니」＝くっついている。",
    "tokens": [
      {
        "surface": "다시",
        "base": "다시",
        "language": "ko",
        "shortMeaning": "再び、また",
        "meaning": "再び、また"
      },
      {
        "surface": "안 보다",
        "base": "안 보다",
        "language": "ko",
        "shortMeaning": "見ない、会わない",
        "meaning": "見ない、会わない"
      },
      {
        "surface": "안 볼",
        "base": "안 볼",
        "language": "ko",
        "shortMeaning": "会わない〜",
        "meaning": "会わない〜"
      },
      {
        "surface": "듯",
        "base": "듯",
        "language": "ko",
        "shortMeaning": "〜のように",
        "meaning": "〜のように"
      },
      {
        "surface": "싸우다",
        "base": "싸우다",
        "language": "ko",
        "shortMeaning": "喧嘩する、争う",
        "meaning": "喧嘩する、争う"
      },
      {
        "surface": "싸우다가도",
        "base": "싸우다가도",
        "language": "ko",
        "shortMeaning": "-다가도 は「〜していても」「〜したか…",
        "meaning": "喧嘩していても、喧嘩したかと思えば / -다가도 は「〜していても」「〜したかと思えばまた」という転換。",
        "explanation": "-다가도 は「〜していても」「〜したかと思えばまた」という転換。"
      }
    ]
  },
  "붙어 다니니 말야": {
    "japanese": "結局また一緒にいるから。",
    "literalJapanese": "くっついて歩き回るからさ。",
    "sentenceExplanation": "激しく喧嘩したのに、結局離れられない。 周りが理解できない理由。",
    "tokens": [
      {
        "surface": "붙다",
        "base": "붙다",
        "language": "ko",
        "shortMeaning": "くっつく",
        "meaning": "くっつく"
      },
      {
        "surface": "붙어 다니다",
        "base": "붙어 다니다",
        "language": "ko",
        "shortMeaning": "くっついて歩き回る、いつも一緒にいる",
        "meaning": "くっついて歩き回る、いつも一緒にいる"
      },
      {
        "surface": "-니",
        "base": "-니",
        "language": "ko",
        "shortMeaning": "〜だから、〜すると",
        "meaning": "〜だから、〜すると"
      },
      {
        "surface": "말야",
        "base": "말야",
        "language": "ko",
        "shortMeaning": "〜なんだよ、〜ってこと",
        "meaning": "말이야 の縮約 / 〜なんだよ、〜ってこと",
        "explanation": "〜なんだよ、〜ってこと"
      }
    ]
  },
  "이해가 안 간대": {
    "japanese": "理解できないらしい。",
    "literalJapanese": "理解ができないんだって。",
    "sentenceExplanation": "周りから見ると、二人の関係は意味不明。",
    "tokens": [
      {
        "surface": "이해",
        "base": "이해",
        "language": "ko",
        "shortMeaning": "理解",
        "meaning": "理解"
      },
      {
        "surface": "이해가 가다",
        "base": "이해가 가다",
        "language": "ko",
        "shortMeaning": "直訳は「理解が行く」。",
        "meaning": "理解できる、納得できる / 直訳は「理解が行く」。",
        "explanation": "直訳は「理解が行く」。"
      },
      {
        "surface": "이해가 안 가다",
        "base": "이해가 안 가다",
        "language": "ko",
        "shortMeaning": "理解できない",
        "meaning": "理解できない"
      },
      {
        "surface": "안 간대",
        "base": "안 간대",
        "language": "ko",
        "shortMeaning": "-대 = 〜らしい、〜なんだって",
        "meaning": "理解できないんだって / -대 = 〜らしい、〜なんだって",
        "explanation": "-대 = 〜らしい、〜なんだって"
      }
    ]
  },
  "웃기지도 않대": {
    "japanese": "笑えないほど呆れるらしい。",
    "literalJapanese": "笑えもしないんだって。",
    "sentenceExplanation": "周りは、二人の関係を冗談としても笑えないと思っている。 それほど激しい関係。",
    "tokens": [
      {
        "surface": "웃기다",
        "base": "웃기다",
        "language": "ko",
        "shortMeaning": "笑わせる、面白い",
        "meaning": "笑わせる、面白い"
      },
      {
        "surface": "웃기지도 않다",
        "base": "웃기지도 않다",
        "language": "ko",
        "shortMeaning": "笑えもしない、面白くもない",
        "meaning": "笑えもしない、面白くもない"
      },
      {
        "surface": "않대",
        "base": "않대",
        "language": "ko",
        "shortMeaning": "〜ではないんだって",
        "meaning": "〜ではないんだって"
      }
    ]
  },
  "맞아 Psycho psycho": {
    "japanese": "そう、私たちはちょっとおかしい。",
    "literalJapanese": "そう、サイコ、サイコ。",
    "sentenceExplanation": "周りの評価を否定しない。 「確かに変だよね」と認めている。",
    "tokens": [
      {
        "surface": "맞다",
        "base": "맞다",
        "language": "ko",
        "shortMeaning": "合っている、正しい",
        "meaning": "合っている、正しい"
      },
      {
        "surface": "맞아",
        "base": "맞아",
        "language": "ko",
        "shortMeaning": "そう、合ってる",
        "meaning": "そう、合ってる"
      }
    ]
  },
  "서로 좋아 죽는 바보 바보": {
    "japanese": "お互い好きすぎる、どうしようもないバカ。",
    "literalJapanese": "お互い好きで死にそうなバカ、バカ。",
    "sentenceExplanation": "バカにしているというより、好きすぎて理性が効かない二人。 自分たちのどうしようもなさを認めている。",
    "tokens": [
      {
        "surface": "서로",
        "base": "서로",
        "language": "ko",
        "shortMeaning": "お互い",
        "meaning": "お互い"
      },
      {
        "surface": "좋아하다",
        "base": "좋아하다",
        "language": "ko",
        "shortMeaning": "好きだ",
        "meaning": "好きだ"
      },
      {
        "surface": "좋아 죽다",
        "base": "좋아 죽다",
        "language": "ko",
        "shortMeaning": "お腹が空きすぎて死にそう",
        "meaning": "好きで死にそうだ / -아/어 죽다 は「〜すぎてたまらない」という強調。 / 例： / 배고파 죽겠어 / お腹が空きすぎて死にそう",
        "explanation": "-아/어 죽다 は「〜すぎてたまらない」という強調。 例： 배고파 죽겠어 お腹が空きすぎて死にそう"
      },
      {
        "surface": "바보",
        "base": "바보",
        "language": "ko",
        "shortMeaning": "バカ",
        "meaning": "バカ"
      }
    ]
  },
  "너 없인 어지럽고 슬퍼져": {
    "japanese": "あなたがいないと、めまいがして悲しくなる。",
    "literalJapanese": "あなたなしではめまいがして悲しくなる。",
    "sentenceExplanation": "相手に依存しているような感情。 離れると精神的に不安定になる。",
    "tokens": [
      {
        "surface": "너",
        "base": "너",
        "language": "ko",
        "shortMeaning": "あなた",
        "meaning": "あなた"
      },
      {
        "surface": "없인",
        "base": "없인",
        "language": "ko",
        "shortMeaning": "あなたなしでは",
        "meaning": "없이는 の縮約 / なしでは / 너 없인 / あなたなしでは",
        "explanation": "なしでは 너 없인 あなたなしでは"
      },
      {
        "surface": "어지럽다",
        "base": "어지럽다",
        "language": "ko",
        "shortMeaning": "めまいがする、混乱する",
        "meaning": "めまいがする、混乱する"
      },
      {
        "surface": "어지럽고",
        "base": "어지럽고",
        "language": "ko",
        "shortMeaning": "めまいがして",
        "meaning": "めまいがして"
      },
      {
        "surface": "슬프다",
        "base": "슬프다",
        "language": "ko",
        "shortMeaning": "悲しい",
        "meaning": "悲しい"
      },
      {
        "surface": "슬퍼지다",
        "base": "슬퍼지다",
        "language": "ko",
        "shortMeaning": "悲しくなる",
        "meaning": "悲しくなる"
      }
    ]
  },
  "기운도 막 없어요": {
    "japanese": "力も抜けてしまう。",
    "literalJapanese": "元気もまったくありません。",
    "sentenceExplanation": "相手がいないと気力がなくなる。 かなり感情に支配されている感じ。",
    "tokens": [
      {
        "surface": "기운",
        "base": "기운",
        "language": "ko",
        "shortMeaning": "元気、気力、力",
        "meaning": "元気、気力、力"
      },
      {
        "surface": "-도",
        "base": "-도",
        "language": "ko",
        "shortMeaning": "〜も",
        "meaning": "〜も"
      },
      {
        "surface": "막",
        "base": "막",
        "language": "ko",
        "shortMeaning": "会話で感覚的に強調する時に使う。",
        "meaning": "やたらと、すごく、なんか / 会話で感覚的に強調する時に使う。",
        "explanation": "会話で感覚的に強調する時に使う。"
      },
      {
        "surface": "없다",
        "base": "없다",
        "language": "ko",
        "shortMeaning": "ない",
        "meaning": "ない"
      },
      {
        "surface": "없어요",
        "base": "없어요",
        "language": "ko",
        "shortMeaning": "ありません",
        "meaning": "ありません"
      }
    ]
  },
  "둘이 잘 만났대": {
    "japanese": "二人はお似合いだって。",
    "literalJapanese": "二人はよく出会ったんだって。",
    "sentenceExplanation": "周りが皮肉っぽく「二人はよく似た者同士だね」と言っている感じ。 悪い意味でも良い意味でも「お似合い」。",
    "tokens": [
      {
        "surface": "둘이",
        "base": "둘이",
        "language": "ko",
        "shortMeaning": "二人が、二人で",
        "meaning": "二人が、二人で"
      },
      {
        "surface": "잘",
        "base": "잘",
        "language": "ko",
        "shortMeaning": "よく、うまく",
        "meaning": "よく、うまく"
      },
      {
        "surface": "만나다",
        "base": "만나다",
        "language": "ko",
        "shortMeaning": "出会う、付き合う",
        "meaning": "出会う、付き合う"
      },
      {
        "surface": "잘 만났다",
        "base": "잘 만났다",
        "language": "ko",
        "shortMeaning": "よく出会った、似合っている、ちょうどい…",
        "meaning": "よく出会った、似合っている、ちょうどいい組み合わせだ"
      },
      {
        "surface": "만났대",
        "base": "만났대",
        "language": "ko",
        "shortMeaning": "出会ったんだって",
        "meaning": "出会ったんだって"
      }
    ]
  },
  "Hey now we'll be ok": {
    "japanese": "大丈夫、私たちはきっとうまくいく。",
    "literalJapanese": "ねえ、私たちは大丈夫になる。",
    "sentenceExplanation": "不安定な関係だけど、最後には大丈夫だと信じている。 この曲の救いの言葉。",
    "tokens": [
      {
        "surface": "we'll",
        "base": "we'll",
        "language": "en",
        "shortMeaning": "we will",
        "meaning": "we will"
      },
      {
        "surface": "be ok",
        "base": "be ok",
        "language": "en",
        "shortMeaning": "大丈夫になる、うまくいく",
        "meaning": "大丈夫になる、うまくいく"
      }
    ]
  },
  "Hey trouble": {
    "japanese": "ねえ、厄介なあなた。",
    "literalJapanese": "ねえ、トラブル。",
    "sentenceExplanation": "相手を「trouble」と呼んでいる。 迷惑だけど惹かれる、危険だけど離れられない存在。",
    "tokens": [
      {
        "surface": "trouble",
        "base": "trouble",
        "language": "en",
        "shortMeaning": "問題、厄介ごと、トラブル",
        "meaning": "問題、厄介ごと、トラブル"
      }
    ]
  },
  "경고 따윈 없이 오는 너": {
    "japanese": "あなたはいつも、何の前触れもなくやって来る。",
    "literalJapanese": "警告なんかなしに来るあなた。",
    "sentenceExplanation": "相手は突然心をかき乱す存在。 予測不能なトラブルのようにやって来る。",
    "tokens": [
      {
        "surface": "경고",
        "base": "경고",
        "language": "ko",
        "shortMeaning": "警告",
        "meaning": "警告"
      },
      {
        "surface": "따위",
        "base": "따위",
        "language": "ko",
        "shortMeaning": "〜なんか、〜みたいなもの",
        "meaning": "〜なんか、〜みたいなもの"
      },
      {
        "surface": "따윈",
        "base": "따윈",
        "language": "ko",
        "shortMeaning": "〜なんかは",
        "meaning": "따위는 の縮約 / 〜なんかは",
        "explanation": "〜なんかは"
      },
      {
        "surface": "없이",
        "base": "없이",
        "language": "ko",
        "shortMeaning": "なしに",
        "meaning": "なしに"
      },
      {
        "surface": "오다",
        "base": "오다",
        "language": "ko",
        "shortMeaning": "来る",
        "meaning": "来る"
      },
      {
        "surface": "오는",
        "base": "오는",
        "language": "ko",
        "shortMeaning": "来る〜",
        "meaning": "来る〜"
      },
      {
        "surface": "너",
        "base": "너",
        "language": "ko",
        "shortMeaning": "あなた",
        "meaning": "あなた"
      }
    ]
  },
  "I'm original visual": {
    "japanese": "私は私だけの存在感を持っている。",
    "literalJapanese": "私は独自のビジュアル。",
    "sentenceExplanation": "ここはRed Velvetらしい自信のあるフレーズ。 恋に振り回されつつも、自分の魅力や個性は失っていない。",
    "tokens": [
      {
        "surface": "original",
        "base": "original",
        "language": "en",
        "shortMeaning": "独自の、元々の、本物の",
        "meaning": "独自の、元々の、本物の"
      },
      {
        "surface": "visual",
        "base": "visual",
        "language": "en",
        "shortMeaning": "見た目、存在感、ビジュアル",
        "meaning": "見た目、存在感、ビジュアル"
      }
    ]
  },
  "우린 원래 이랬어 Yeah": {
    "japanese": "私たちは最初からこうだった。",
    "literalJapanese": "私たちはもともとこうだった。",
    "sentenceExplanation": "この激しさは急に始まったものではなく、最初から二人の関係性そのものだったということ。",
    "tokens": [
      {
        "surface": "우린",
        "base": "우린",
        "language": "ko",
        "shortMeaning": "私たちは",
        "meaning": "우리는 / 私たちは",
        "explanation": "私たちは"
      },
      {
        "surface": "원래",
        "base": "원래",
        "language": "ko",
        "shortMeaning": "もともと、本来",
        "meaning": "もともと、本来"
      },
      {
        "surface": "이렇다",
        "base": "이렇다",
        "language": "ko",
        "shortMeaning": "こうだ",
        "meaning": "こうだ"
      },
      {
        "surface": "이랬어",
        "base": "이랬어",
        "language": "ko",
        "shortMeaning": "こうだった",
        "meaning": "こうだった"
      }
    ]
  },
  "두렵지는 않아": {
    "japanese": "怖くなんてない。",
    "literalJapanese": "怖くはない。",
    "sentenceExplanation": "変で危うい関係でも、怖いとは思っていない。",
    "tokens": [
      {
        "surface": "두렵다",
        "base": "두렵다",
        "language": "ko",
        "shortMeaning": "怖い",
        "meaning": "怖い"
      },
      {
        "surface": "두렵지는 않다",
        "base": "두렵지는 않다",
        "language": "ko",
        "shortMeaning": "「怖いわけではない」という感じ。",
        "meaning": "怖くはない / -지는 않다 は対比・強調。 / 「怖いわけではない」という感じ。",
        "explanation": "-지는 않다 は対比・強調。 「怖いわけではない」という感じ。"
      }
    ]
  },
  "(흥미로울 뿐)": {
    "japanese": "（ただ面白いだけ）",
    "literalJapanese": "（興味深いだけ）",
    "sentenceExplanation": "危険ささえも楽しんでいる。 怖さよりも好奇心が勝っている感じ。",
    "tokens": [
      {
        "surface": "흥미롭다",
        "base": "흥미롭다",
        "language": "ko",
        "shortMeaning": "興味深い、面白い",
        "meaning": "興味深い、面白い"
      },
      {
        "surface": "흥미로울",
        "base": "흥미로울",
        "language": "ko",
        "shortMeaning": "興味深い〜",
        "meaning": "興味深い〜"
      },
      {
        "surface": "뿐",
        "base": "뿐",
        "language": "ko",
        "shortMeaning": "〜だけ",
        "meaning": "〜だけ"
      }
    ]
  },
  "It's hot let me just hop": {
    "japanese": "熱くなってきた。もう飛び込ませて。",
    "literalJapanese": "熱い、ただ飛び乗らせて。",
    "sentenceExplanation": "この行では「熱くなってきた。もう飛び込ませて。」と伝えている。",
    "tokens": [
      {
        "surface": "It's hot let me just hop",
        "base": "It's hot let me just hop",
        "language": "en",
        "shortMeaning": "熱くなってる、飛び込ませて",
        "meaning": "熱くなってる、飛び込ませて"
      }
    ]
  },
  "어떻게 널 다룰까? Ooh": {
    "japanese": "あなたをどう扱えばいいんだろう。",
    "literalJapanese": "どうやってあなたを扱おうか。",
    "sentenceExplanation": "相手の感情や行動が読めず、どう接すればいいか分からない。 最初の「널 어쩌면 좋을까」と似た悩み。",
    "tokens": [
      {
        "surface": "어떻게",
        "base": "어떻게",
        "language": "ko",
        "shortMeaning": "どうやって",
        "meaning": "どうやって"
      },
      {
        "surface": "널",
        "base": "널",
        "language": "ko",
        "shortMeaning": "あなたを",
        "meaning": "너를 / あなたを",
        "explanation": "あなたを"
      },
      {
        "surface": "다루다",
        "base": "다루다",
        "language": "ko",
        "shortMeaning": "扱う、対処する",
        "meaning": "扱う、対処する"
      },
      {
        "surface": "다룰까",
        "base": "다룰까",
        "language": "ko",
        "shortMeaning": "扱おうか、扱えばいいのかな",
        "meaning": "扱おうか、扱えばいいのかな"
      }
    ]
  },
  "어쩔 줄을 몰라 너를 달래고": {
    "japanese": "どうしたらいいか分からなくて、あなたをなだめたり。",
    "literalJapanese": "どうすればいいか分からず、あなたをなだめて。",
    "sentenceExplanation": "相手が荒れている時、自分がなだめようとしている。 恋人同士の感情の扱いに苦労している。",
    "tokens": [
      {
        "surface": "어쩔 줄 모르다",
        "base": "어쩔 줄 모르다",
        "language": "ko",
        "shortMeaning": "どうすればいいか分からない",
        "meaning": "どうすればいいか分からない"
      },
      {
        "surface": "어쩔 줄을 몰라",
        "base": "어쩔 줄을 몰라",
        "language": "ko",
        "shortMeaning": "どうすればいいか分からず",
        "meaning": "どうすればいいか分からず"
      },
      {
        "surface": "너를",
        "base": "너를",
        "language": "ko",
        "shortMeaning": "あなたを",
        "meaning": "あなたを"
      },
      {
        "surface": "달래다",
        "base": "달래다",
        "language": "ko",
        "shortMeaning": "なだめる、慰める",
        "meaning": "なだめる、慰める"
      },
      {
        "surface": "달래고",
        "base": "달래고",
        "language": "ko",
        "shortMeaning": "なだめて",
        "meaning": "なだめて"
      }
    ]
  },
  "매섭게 발로 차도": {
    "japanese": "きつく突き放したとしても。",
    "literalJapanese": "激しく足で蹴っても。",
    "sentenceExplanation": "本当に蹴るというより、相手を強く拒絶する・突き放す比喩。 それでも離れられない流れ。",
    "tokens": [
      {
        "surface": "매섭다",
        "base": "매섭다",
        "language": "ko",
        "shortMeaning": "激しい、鋭い、厳しい",
        "meaning": "激しい、鋭い、厳しい"
      },
      {
        "surface": "매섭게",
        "base": "매섭게",
        "language": "ko",
        "shortMeaning": "激しく、鋭く",
        "meaning": "激しく、鋭く"
      },
      {
        "surface": "발",
        "base": "발",
        "language": "ko",
        "shortMeaning": "足",
        "meaning": "足"
      },
      {
        "surface": "-로",
        "base": "-로",
        "language": "ko",
        "shortMeaning": "〜で",
        "meaning": "〜で"
      },
      {
        "surface": "차다",
        "base": "차다",
        "language": "ko",
        "shortMeaning": "蹴る",
        "meaning": "蹴る"
      },
      {
        "surface": "차도",
        "base": "차도",
        "language": "ko",
        "shortMeaning": "蹴っても",
        "meaning": "蹴っても"
      }
    ]
  },
  "가끔 내게 미소 짓는 널": {
    "japanese": "時々、私に笑いかけるあなたを。",
    "literalJapanese": "時々私に微笑むあなたを。",
    "sentenceExplanation": "普段は厄介でも、ふと見せる笑顔でまた離れられなくなる。",
    "tokens": [
      {
        "surface": "가끔",
        "base": "가끔",
        "language": "ko",
        "shortMeaning": "たまに、時々",
        "meaning": "たまに、時々"
      },
      {
        "surface": "내게",
        "base": "내게",
        "language": "ko",
        "shortMeaning": "私に",
        "meaning": "나에게 / 私に",
        "explanation": "私に"
      },
      {
        "surface": "미소",
        "base": "미소",
        "language": "ko",
        "shortMeaning": "微笑み",
        "meaning": "微笑み"
      },
      {
        "surface": "짓다",
        "base": "짓다",
        "language": "ko",
        "shortMeaning": "作る",
        "meaning": "作る"
      },
      {
        "surface": "미소 짓다",
        "base": "미소 짓다",
        "language": "ko",
        "shortMeaning": "微笑む",
        "meaning": "微笑む"
      },
      {
        "surface": "미소 짓는",
        "base": "미소 짓는",
        "language": "ko",
        "shortMeaning": "微笑む〜",
        "meaning": "微笑む〜"
      },
      {
        "surface": "널",
        "base": "널",
        "language": "ko",
        "shortMeaning": "あなたを",
        "meaning": "너를 / あなたを",
        "explanation": "あなたを"
      }
    ]
  },
  "어떻게 놓겠어 Ooh": {
    "japanese": "どうして手放せるというの。",
    "literalJapanese": "どうやって手放せるの。",
    "sentenceExplanation": "手放せるわけがない、という反語。 どんなに苦しくても、相手の笑顔を見ると離れられない。",
    "tokens": [
      {
        "surface": "어떻게",
        "base": "어떻게",
        "language": "ko",
        "shortMeaning": "どうやって",
        "meaning": "どうやって"
      },
      {
        "surface": "놓다",
        "base": "놓다",
        "language": "ko",
        "shortMeaning": "手放す、離す",
        "meaning": "手放す、離す"
      },
      {
        "surface": "놓겠어",
        "base": "놓겠어",
        "language": "ko",
        "shortMeaning": "-겠어 は推量・反語にもなる。",
        "meaning": "手放せるだろうか / -겠어 は推量・反語にもなる。",
        "explanation": "-겠어 は推量・反語にもなる。"
      }
    ]
  },
  "우린 아름답고 참 슬픈 사이야": {
    "japanese": "私たちは美しくて、でもとても悲しい関係。",
    "literalJapanese": "私たちは美しくて、本当に悲しい関係だ。",
    "sentenceExplanation": "美しいだけでも、苦しいだけでもない。 強く惹かれ合うからこそ、悲しさもある。",
    "tokens": [
      {
        "surface": "아름답다",
        "base": "아름답다",
        "language": "ko",
        "shortMeaning": "美しい",
        "meaning": "美しい"
      },
      {
        "surface": "아름답고",
        "base": "아름답고",
        "language": "ko",
        "shortMeaning": "美しくて",
        "meaning": "美しくて"
      },
      {
        "surface": "참",
        "base": "참",
        "language": "ko",
        "shortMeaning": "本当に",
        "meaning": "本当に"
      },
      {
        "surface": "슬프다",
        "base": "슬프다",
        "language": "ko",
        "shortMeaning": "悲しい",
        "meaning": "悲しい"
      },
      {
        "surface": "슬픈",
        "base": "슬픈",
        "language": "ko",
        "shortMeaning": "悲しい〜",
        "meaning": "悲しい〜"
      },
      {
        "surface": "사이",
        "base": "사이",
        "language": "ko",
        "shortMeaning": "関係",
        "meaning": "関係"
      }
    ]
  },
  "서로를 빛나게 해": {
    "japanese": "お互いを輝かせ合っている。",
    "literalJapanese": "お互いを輝かせる。",
    "sentenceExplanation": "壊し合うだけではない。 二人はお互いを傷つける一方で、相手の魅力も引き出している。",
    "tokens": [
      {
        "surface": "서로를",
        "base": "서로를",
        "language": "ko",
        "shortMeaning": "お互いを",
        "meaning": "お互いを"
      },
      {
        "surface": "빛나다",
        "base": "빛나다",
        "language": "ko",
        "shortMeaning": "輝く",
        "meaning": "輝く"
      },
      {
        "surface": "빛나게 하다",
        "base": "빛나게 하다",
        "language": "ko",
        "shortMeaning": "輝かせる",
        "meaning": "輝かせる"
      },
      {
        "surface": "해",
        "base": "해",
        "language": "ko",
        "shortMeaning": "する",
        "meaning": "する"
      }
    ]
  },
  "(Tell me now)": {
    "japanese": "（今教えて）",
    "literalJapanese": "（今言って）",
    "sentenceExplanation": "この行では「（今教えて）」と伝えている。",
    "tokens": [
      {
        "surface": "(Tell me now)",
        "base": "(Tell me now)",
        "language": "en",
        "shortMeaning": "（今教えて）",
        "meaning": "（今教えて）"
      }
    ]
  },
  "마치 달과 강처럼": {
    "japanese": "まるで月と川みたいに。",
    "literalJapanese": "まるで月と川のように。",
    "sentenceExplanation": "月は川を照らし、川は月を映す。 直接一つになるわけではないが、お互いを美しく見せる関係。 「서로를 빛나게 해」とつながる。",
    "tokens": [
      {
        "surface": "마치",
        "base": "마치",
        "language": "ko",
        "shortMeaning": "まるで",
        "meaning": "まるで"
      },
      {
        "surface": "달",
        "base": "달",
        "language": "ko",
        "shortMeaning": "月",
        "meaning": "月"
      },
      {
        "surface": "-과",
        "base": "-과",
        "language": "ko",
        "shortMeaning": "〜と",
        "meaning": "〜と"
      },
      {
        "surface": "강",
        "base": "강",
        "language": "ko",
        "shortMeaning": "川",
        "meaning": "川"
      },
      {
        "surface": "-처럼",
        "base": "-처럼",
        "language": "ko",
        "shortMeaning": "〜のように",
        "meaning": "〜のように"
      }
    ]
  },
  "Don't look back": {
    "japanese": "振り返らないで。",
    "literalJapanese": "振り返らないで。",
    "sentenceExplanation": "過去の喧嘩や傷を振り返りすぎず、前へ進もうということ。",
    "tokens": [
      {
        "surface": "Don't",
        "base": "Don't",
        "language": "en",
        "shortMeaning": "〜しないで",
        "meaning": "〜しないで"
      },
      {
        "surface": "look back",
        "base": "look back",
        "language": "en",
        "shortMeaning": "振り返る",
        "meaning": "振り返る"
      }
    ]
  },
  "그렇게 우리답게 가보자": {
    "japanese": "私たちらしく、このまま進んでみよう。",
    "literalJapanese": "そうやって私たちらしく行ってみよう。",
    "sentenceExplanation": "普通の関係ではないけれど、それが自分たちの形。 周りの基準ではなく、自分たちらしく進むという決意。",
    "tokens": [
      {
        "surface": "그렇게",
        "base": "그렇게",
        "language": "ko",
        "shortMeaning": "そうやって、そのように",
        "meaning": "そうやって、そのように"
      },
      {
        "surface": "우리답다",
        "base": "우리답다",
        "language": "ko",
        "shortMeaning": "-답다 = 〜らしい",
        "meaning": "私たちらしい / 우리 = 私たち / -답다 = 〜らしい",
        "explanation": "우리 = 私たち -답다 = 〜らしい"
      },
      {
        "surface": "우리답게",
        "base": "우리답게",
        "language": "ko",
        "shortMeaning": "私たちらしく",
        "meaning": "私たちらしく"
      },
      {
        "surface": "가다",
        "base": "가다",
        "language": "ko",
        "shortMeaning": "行く、進む",
        "meaning": "行く、進む"
      },
      {
        "surface": "가보다",
        "base": "가보다",
        "language": "ko",
        "shortMeaning": "行ってみる、進んでみる",
        "meaning": "行ってみる、進んでみる"
      },
      {
        "surface": "가보자",
        "base": "가보자",
        "language": "ko",
        "shortMeaning": "行ってみよう、進んでみよう",
        "meaning": "行ってみよう、進んでみよう"
      }
    ]
  },
  "난 온몸으로 널 느끼고 있어": {
    "japanese": "私は全身であなたを感じている。",
    "literalJapanese": "私は全身であなたを感じている。",
    "sentenceExplanation": "頭で考える関係ではなく、身体ごと感情に巻き込まれている。 理屈では説明できない強い結びつき。",
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
        "surface": "온몸",
        "base": "온몸",
        "language": "ko",
        "shortMeaning": "몸 = 体",
        "meaning": "全身 / 온 = 全〜 / 몸 = 体",
        "explanation": "온 = 全〜 몸 = 体"
      },
      {
        "surface": "-으로",
        "base": "-으로",
        "language": "ko",
        "shortMeaning": "全身で",
        "meaning": "〜で / 온몸으로 / 全身で",
        "explanation": "온몸으로 全身で"
      },
      {
        "surface": "널",
        "base": "널",
        "language": "ko",
        "shortMeaning": "あなたを",
        "meaning": "너를 / あなたを",
        "explanation": "あなたを"
      },
      {
        "surface": "느끼다",
        "base": "느끼다",
        "language": "ko",
        "shortMeaning": "感じる",
        "meaning": "感じる"
      },
      {
        "surface": "느끼고 있어",
        "base": "느끼고 있어",
        "language": "ko",
        "shortMeaning": "感じている",
        "meaning": "感じている"
      }
    ]
  },
  "Everything will be ok": {
    "japanese": "すべてきっとうまくいく。",
    "literalJapanese": "すべて大丈夫になる。",
    "sentenceExplanation": "不安定な関係でも、最後は大丈夫だと自分たちに言い聞かせている。",
    "tokens": [
      {
        "surface": "Everything",
        "base": "Everything",
        "language": "en",
        "shortMeaning": "すべて",
        "meaning": "すべて"
      },
      {
        "surface": "will be ok",
        "base": "will be ok",
        "language": "en",
        "shortMeaning": "大丈夫になる、うまくいく",
        "meaning": "大丈夫になる、うまくいく"
      }
    ]
  },
  "(You got me feeling like a psycho)": {
    "japanese": "（あなたのせいで、おかしくなったみたい）",
    "literalJapanese": "（あなたは私をサイコのように感じさせる）",
    "sentenceExplanation": "恋で自分らしくいられないほど感情が乱れる。 ただし、この曲ではホラー的な意味より「周りから見たら理解不能な恋」という意味が強い。",
    "tokens": [
      {
        "surface": "You got me",
        "base": "You got me",
        "language": "en",
        "shortMeaning": "あなたは私を〜にした、あなたのせいで私…",
        "meaning": "あなたは私を〜にした、あなたのせいで私は〜になった"
      },
      {
        "surface": "feeling like",
        "base": "feeling like",
        "language": "en",
        "shortMeaning": "〜のように感じる",
        "meaning": "〜のように感じる"
      },
      {
        "surface": "Psycho",
        "base": "Psycho",
        "language": "en",
        "shortMeaning": "サイコ、おかしい人、異常な人",
        "meaning": "サイコ、おかしい人、異常な人"
      }
    ]
  },
  "Like a psycho psycho": {
    "japanese": "まるでおかしくなったみたい。",
    "literalJapanese": "サイコのように、サイコ。",
    "sentenceExplanation": "恋で自分らしくいられないほど感情が乱れる。 ただし、この曲ではホラー的な意味より「周りから見たら理解不能な恋」という意味が強い。",
    "tokens": [
      {
        "surface": "You got me",
        "base": "You got me",
        "language": "en",
        "shortMeaning": "あなたは私を〜にした、あなたのせいで私…",
        "meaning": "あなたは私を〜にした、あなたのせいで私は〜になった"
      },
      {
        "surface": "feeling like",
        "base": "feeling like",
        "language": "en",
        "shortMeaning": "〜のように感じる",
        "meaning": "〜のように感じる"
      },
      {
        "surface": "Psycho",
        "base": "Psycho",
        "language": "en",
        "shortMeaning": "サイコ、おかしい人、異常な人",
        "meaning": "サイコ、おかしい人、異常な人"
      }
    ]
  },
  "It's alright": {
    "japanese": "大丈夫。",
    "literalJapanese": "大丈夫。",
    "sentenceExplanation": "この行では「大丈夫。」と伝えている。",
    "tokens": [
      {
        "surface": "It's alright",
        "base": "It's alright",
        "language": "en",
        "shortMeaning": "大丈夫",
        "meaning": "大丈夫。"
      }
    ]
  },
  "우린 좀 이상해": {
    "japanese": "私たちは少しおかしい。",
    "literalJapanese": "私たちは少し変だ。",
    "sentenceExplanation": "最後に、自分たちの関係が普通ではないことをもう一度認めて終わる。 でもそれを完全には否定していない。",
    "tokens": [
      {
        "surface": "우린",
        "base": "우린",
        "language": "ko",
        "shortMeaning": "私たちは",
        "meaning": "우리는 / 私たちは",
        "explanation": "私たちは"
      },
      {
        "surface": "좀",
        "base": "좀",
        "language": "ko",
        "shortMeaning": "ちょっと、少し",
        "meaning": "ちょっと、少し"
      },
      {
        "surface": "이상하다",
        "base": "이상하다",
        "language": "ko",
        "shortMeaning": "変だ、おかしい",
        "meaning": "変だ、おかしい"
      },
      {
        "surface": "이상해",
        "base": "이상해",
        "language": "ko",
        "shortMeaning": "変だ",
        "meaning": "変だ"
      }
    ]
  },
  "Psycho": {
    "japanese": "おかしいくらい、離れられない関係。",
    "literalJapanese": "サイコ。",
    "sentenceExplanation": "この行では「おかしいくらい、離れられない関係。」と伝えている。",
    "tokens": [
      {
        "surface": "Psycho",
        "base": "Psycho",
        "language": "en",
        "shortMeaning": "おかしいくらい、離れられない関係",
        "meaning": "おかしいくらい、離れられない関係。"
      }
    ]
  }
};

const lyricsSequence: string[] = [
  "널 어쩌면 좋을까",
  "이런 맘은 또 첨이라",
  "Up & Down이 좀 심해",
  "조절이 자꾸 잘 안돼",
  "하나 확실한 건",
  "I don't play the game",
  "우리 진짜 별나대",
  "그냥 내가 너무 좋아해",
  "넌 그걸 너무 잘 알고",
  "날 쥐락펴락해",
  "나도 마찬가지인걸",
  "우린 참 별나고 이상한 사이야",
  "서로를 부서지게",
  "(부서지게)",
  "그리곤 또 껴안아",
  "(그리곤 또 껴안아)",
  "You got me feeling like a",
  "Psycho psycho",
  "우릴 보고 말해 자꾸 자꾸",
  "다시 안 볼 듯 싸우다가도",
  "붙어 다니니 말야",
  "이해가 안 간대",
  "웃기지도 않대",
  "맞아 Psycho psycho",
  "서로 좋아 죽는 바보 바보",
  "너 없인 어지럽고 슬퍼져",
  "기운도 막 없어요",
  "둘이 잘 만났대",
  "Hey now we'll be ok",
  "Hey trouble",
  "경고 따윈 없이 오는 너",
  "I'm original visual",
  "우린 원래 이랬어 Yeah",
  "두렵지는 않아",
  "(흥미로울 뿐)",
  "It's hot let me just hop",
  "어떻게 널 다룰까? Ooh",
  "어쩔 줄을 몰라 너를 달래고",
  "매섭게 발로 차도",
  "가끔 내게 미소 짓는 널",
  "어떻게 놓겠어 Ooh",
  "우린 아름답고 참 슬픈 사이야",
  "서로를 빛나게 해",
  "(Tell me now)",
  "마치 달과 강처럼",
  "그리곤 또 껴안아",
  "You got me feeling like a",
  "Psycho psycho",
  "우릴 보고 말해 자꾸 자꾸",
  "다시 안 볼 듯 싸우다가도",
  "붙어 다니니 말야",
  "이해가 안 간대",
  "웃기지도 않대",
  "맞아 Psycho psycho",
  "서로 좋아 죽는 바보 바보",
  "너 없인 어지럽고 슬퍼져",
  "기운도 막 없어요",
  "둘이 잘 만났대",
  "Hey now we'll be ok",
  "Don't look back",
  "그렇게 우리답게 가보자",
  "난 온몸으로 널 느끼고 있어",
  "Everything will be ok",
  "(You got me feeling like a psycho)",
  "Like a psycho psycho",
  "우릴 보고 말해 자꾸 자꾸",
  "다시 안 볼 듯 싸우다가도",
  "붙어 다니니 말야",
  "둘이 잘 만났대",
  "Hey now we'll be ok",
  "Hey now we'll be ok",
  "Hey now we'll be ok",
  "Hey now we'll be ok",
  "Hey now we'll be ok",
  "It's alright",
  "It's alright",
  "Hey now we'll be ok",
  "Hey now we'll be ok",
  "Hey now we'll be ok",
  "Hey now we'll be ok",
  "It's alright",
  "It's alright",
  "우린 좀 이상해",
  "Psycho"
];

export const completePsychoLines: LyricLine[] = lyricsSequence.map((korean, index) => {
  const template = lineTemplates[korean];

  return {
    id: `red-velvet-psycho-line-${index + 1}`,
    korean,
    japanese: template.japanese,
    literalJapanese: template.literalJapanese,
    sentenceExplanation: template.sentenceExplanation,
    tokens: template.tokens.map((token, tokenIndex) => ({
      ...token,
      id: `red-velvet-psycho-line-${index + 1}-token-${tokenIndex + 1}`,
    })),
  };
});

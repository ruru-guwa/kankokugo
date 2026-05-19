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
  "나 다시 허락한다면": {
    "japanese": "もし私にもう一度許されるなら。",
    "literalJapanese": "私にもう一度許されるなら。",
    "sentenceExplanation": "もし私にもう一度許されるなら。",
    "nuance": "「もう一度チャンスがあるなら」という意味。 過去に失ったもの、叶わなかった関係をもう一度やり直したい気持ちがある。",
    "tokens": [
      {
        "surface": "나",
        "base": "나",
        "language": "ko",
        "shortMeaning": "私",
        "meaning": "私"
      },
      {
        "surface": "다시",
        "base": "다시",
        "language": "ko",
        "shortMeaning": "もう一度、再び",
        "meaning": "もう一度、再び"
      },
      {
        "surface": "허락하다",
        "base": "허락하다",
        "language": "ko",
        "shortMeaning": "許す、許可する",
        "meaning": "許す、許可する"
      },
      {
        "surface": "허락한다면",
        "base": "허락한다면",
        "language": "ko",
        "shortMeaning": "許されるなら、許可されるなら",
        "meaning": "許されるなら、許可されるなら"
      }
    ]
  },
  "그댈 다시 볼 수 있다면": {
    "japanese": "あなたにもう一度会えるなら。",
    "literalJapanese": "あなたをもう一度見ることができるなら。",
    "sentenceExplanation": "あなたにもう一度会えるなら。",
    "nuance": "ここでの 보다 は「見る」だけでなく「会う」。 会えない相手への強い未練がある。",
    "tokens": [
      {
        "surface": "그댈",
        "base": "그댈",
        "language": "ko",
        "shortMeaning": "그대를 の縮約",
        "meaning": "그대를 の縮約 / あなたを"
      },
      {
        "surface": "다시",
        "base": "다시",
        "language": "ko",
        "shortMeaning": "もう一度",
        "meaning": "もう一度"
      },
      {
        "surface": "보다",
        "base": "보다",
        "language": "ko",
        "shortMeaning": "見る、会う",
        "meaning": "見る、会う"
      },
      {
        "surface": "볼 수 있다",
        "base": "볼 수 있다",
        "language": "ko",
        "shortMeaning": "見ることができる、会うことができる",
        "meaning": "見ることができる、会うことができる"
      },
      {
        "surface": "있다면",
        "base": "있다면",
        "language": "ko",
        "shortMeaning": "できるなら、あるなら",
        "meaning": "できるなら、あるなら"
      }
    ]
  },
  "내 지난 기억 속에서": {
    "japanese": "過ぎ去った私の記憶の中で。",
    "literalJapanese": "私の過ぎた記憶の中で。",
    "sentenceExplanation": "過ぎ去った私の記憶の中で。",
    "nuance": "相手は今の現実ではなく、過去の記憶の中にいる。 でも語り手にとっては、その記憶がまだ生きている。",
    "tokens": [
      {
        "surface": "내",
        "base": "내",
        "language": "ko",
        "shortMeaning": "私の",
        "meaning": "私の"
      },
      {
        "surface": "지난",
        "base": "지난",
        "language": "ko",
        "shortMeaning": "過ぎた、過去の",
        "meaning": "過ぎた、過去の / 지나다 = 過ぎる"
      },
      {
        "surface": "기억",
        "base": "기억",
        "language": "ko",
        "shortMeaning": "記憶",
        "meaning": "記憶"
      },
      {
        "surface": "속",
        "base": "속",
        "language": "ko",
        "shortMeaning": "中",
        "meaning": "中"
      },
      {
        "surface": "-에서",
        "base": "-에서",
        "language": "ko",
        "shortMeaning": "〜で、〜の中で",
        "meaning": "〜で、〜の中で"
      }
    ]
  },
  "그 아픔 속에서": {
    "japanese": "あの痛みの中で。",
    "literalJapanese": "その痛みの中で。",
    "sentenceExplanation": "あの痛みの中で。",
    "nuance": "相手との記憶は幸せだけでなく、痛みも伴っている。 それでもその中から相手を呼ぶほど、忘れられない。",
    "tokens": [
      {
        "surface": "그",
        "base": "그",
        "language": "ko",
        "shortMeaning": "その、あの",
        "meaning": "その、あの"
      },
      {
        "surface": "아픔",
        "base": "아픔",
        "language": "ko",
        "shortMeaning": "痛み、つらさ",
        "meaning": "痛み、つらさ / 아프다 = 痛い、つらい"
      },
      {
        "surface": "속",
        "base": "속",
        "language": "ko",
        "shortMeaning": "中",
        "meaning": "中"
      },
      {
        "surface": "-에서",
        "base": "-에서",
        "language": "ko",
        "shortMeaning": "〜の中で",
        "meaning": "〜の中で"
      }
    ]
  },
  "그댈 불러": {
    "japanese": "あなたの名を呼びます。",
    "literalJapanese": "あなたを呼ぶ。",
    "sentenceExplanation": "あなたの名を呼びます。",
    "nuance": "会えない相手に向かって、記憶の中から呼びかけている。 直接届かない声のような切なさがある。",
    "tokens": [
      {
        "surface": "그댈",
        "base": "그댈",
        "language": "ko",
        "shortMeaning": "あなたを",
        "meaning": "あなたを"
      },
      {
        "surface": "부르다",
        "base": "부르다",
        "language": "ko",
        "shortMeaning": "呼ぶ、歌う",
        "meaning": "呼ぶ、歌う"
      },
      {
        "surface": "불러",
        "base": "불러",
        "language": "ko",
        "shortMeaning": "呼ぶ",
        "meaning": "呼ぶ"
      }
    ]
  },
  "You're my destiny 그댄": {
    "japanese": "あなたは私の運命です。",
    "literalJapanese": "あなたは私の運命、あなたは。",
    "sentenceExplanation": "あなたは私の運命です。",
    "nuance": "相手を偶然の恋ではなく、人生に決められていた存在のように見ている。 かなり重く、深い愛情表現。",
    "tokens": [
      {
        "surface": "destiny",
        "base": "destiny",
        "language": "en",
        "shortMeaning": "運命",
        "meaning": "運命"
      },
      {
        "surface": "그댄",
        "base": "그댄",
        "language": "ko",
        "shortMeaning": "그대는 の縮約",
        "meaning": "그대는 の縮約 / あなたは"
      }
    ]
  },
  "You're my everything": {
    "japanese": "あなたは私のすべてです。",
    "literalJapanese": "あなたは私のすべて。",
    "sentenceExplanation": "あなたは私のすべてです。",
    "nuance": "相手が生活や心の中心にいる。 相手を失うことは、自分の世界そのものを失うような感覚。",
    "tokens": [
      {
        "surface": "everything",
        "base": "everything",
        "language": "en",
        "shortMeaning": "すべて",
        "meaning": "すべて"
      }
    ]
  },
  "그대만 보면서": {
    "japanese": "あなただけを見つめながら。",
    "literalJapanese": "あなただけを見ながら。",
    "sentenceExplanation": "あなただけを見つめながら。",
    "nuance": "他の誰でもなく、相手だけを見ている。 一途さが強く出ている。",
    "tokens": [
      {
        "surface": "그대만",
        "base": "그대만",
        "language": "ko",
        "shortMeaning": "あなただけ",
        "meaning": "あなただけ / 그대 = あなた / -만 = 〜だけ"
      },
      {
        "surface": "보다",
        "base": "보다",
        "language": "ko",
        "shortMeaning": "見る",
        "meaning": "見る"
      },
      {
        "surface": "보면서",
        "base": "보면서",
        "language": "ko",
        "shortMeaning": "見ながら",
        "meaning": "見ながら"
      }
    ]
  },
  "이렇게 소리없이 불러봅니다": {
    "japanese": "こうして声にならないまま、あなたを呼んでみます。",
    "literalJapanese": "こうして声もなく呼んでみます。",
    "sentenceExplanation": "こうして声にならないまま、あなたを呼んでみます。",
    "nuance": "声に出して叫ぶのではなく、心の中で呼んでいる。 伝えたいのに伝えられない切なさがある。",
    "tokens": [
      {
        "surface": "이렇게",
        "base": "이렇게",
        "language": "ko",
        "shortMeaning": "このように、こうして",
        "meaning": "このように、こうして"
      },
      {
        "surface": "소리",
        "base": "소리",
        "language": "ko",
        "shortMeaning": "声、音",
        "meaning": "声、音"
      },
      {
        "surface": "없이",
        "base": "없이",
        "language": "ko",
        "shortMeaning": "〜なしに",
        "meaning": "〜なしに"
      },
      {
        "surface": "소리없이",
        "base": "소리없이",
        "language": "ko",
        "shortMeaning": "声もなく、静かに",
        "meaning": "声もなく、静かに"
      },
      {
        "surface": "부르다",
        "base": "부르다",
        "language": "ko",
        "shortMeaning": "呼ぶ",
        "meaning": "呼ぶ"
      },
      {
        "surface": "불러보다",
        "base": "불러보다",
        "language": "ko",
        "shortMeaning": "呼んでみる",
        "meaning": "呼んでみる"
      },
      {
        "surface": "불러봅니다",
        "base": "불러봅니다",
        "language": "ko",
        "shortMeaning": "呼んでみます",
        "meaning": "呼んでみます"
      }
    ]
  },
  "You're the one my love 그댄": {
    "japanese": "あなたは私のただ一人の愛です。",
    "literalJapanese": "あなたはただ一人の私の愛、あなたは。",
    "sentenceExplanation": "あなたは私のただ一人の愛です。",
    "nuance": "相手は代わりのいない唯一の存在。 “destiny” と同じく、強い唯一性がある。",
    "tokens": [
      {
        "surface": "the one",
        "base": "the one",
        "language": "en",
        "shortMeaning": "ただ一人の人、唯一の人",
        "meaning": "ただ一人の人、唯一の人"
      },
      {
        "surface": "my love",
        "base": "my love",
        "language": "en",
        "shortMeaning": "私の愛、愛する人",
        "meaning": "私の愛、愛する人"
      },
      {
        "surface": "그댄",
        "base": "그댄",
        "language": "ko",
        "shortMeaning": "あなたは",
        "meaning": "あなたは"
      }
    ]
  },
  "You're my delight of all": {
    "japanese": "あなたは私にとって何よりの喜びです。",
    "literalJapanese": "あなたは私のすべての喜び。",
    "sentenceExplanation": "あなたは私にとって何よりの喜びです。",
    "nuance": "相手は苦しみの原因でもあるが、同時に最大の喜びでもある。 愛の重さと美しさが同時にある。",
    "tokens": [
      {
        "surface": "delight",
        "base": "delight",
        "language": "en",
        "shortMeaning": "喜び、楽しみ",
        "meaning": "喜び、楽しみ"
      },
      {
        "surface": "of all",
        "base": "of all",
        "language": "en",
        "shortMeaning": "すべての中で",
        "meaning": "すべての中で"
      }
    ]
  },
  "그대는 영원한 나의 사랑이죠": {
    "japanese": "あなたは永遠に、私の愛です。",
    "literalJapanese": "あなたは永遠の私の愛でしょう。",
    "sentenceExplanation": "あなたは永遠に、私の愛です。",
    "nuance": "一時的な恋ではなく、時間が経っても変わらない愛。 韓国バラードらしい、かなりまっすぐな表現。",
    "tokens": [
      {
        "surface": "그대는",
        "base": "그대는",
        "language": "ko",
        "shortMeaning": "あなたは",
        "meaning": "あなたは"
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
        "surface": "나의",
        "base": "나의",
        "language": "ko",
        "shortMeaning": "私の",
        "meaning": "私の"
      },
      {
        "surface": "사랑",
        "base": "사랑",
        "language": "ko",
        "shortMeaning": "愛",
        "meaning": "愛"
      },
      {
        "surface": "-이죠",
        "base": "-이죠",
        "language": "ko",
        "shortMeaning": "〜ですよね、〜です",
        "meaning": "〜ですよね、〜です"
      }
    ]
  },
  "내 곁에 다가와 줘요": {
    "japanese": "私のそばへ来てください。",
    "literalJapanese": "私のそばに近づいてきてください。",
    "sentenceExplanation": "私のそばへ来てください。",
    "nuance": "相手に戻ってきてほしい願い。 命令ではなく、祈るようなお願い。",
    "tokens": [
      {
        "surface": "내",
        "base": "내",
        "language": "ko",
        "shortMeaning": "私の",
        "meaning": "私の"
      },
      {
        "surface": "곁",
        "base": "곁",
        "language": "ko",
        "shortMeaning": "そば、隣",
        "meaning": "そば、隣"
      },
      {
        "surface": "내 곁에",
        "base": "내 곁에",
        "language": "ko",
        "shortMeaning": "私のそばに",
        "meaning": "私のそばに"
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
        "surface": "-아/어 주다",
        "base": "-아/어 주다",
        "language": "ko",
        "shortMeaning": "〜してくれる",
        "meaning": "〜してくれる"
      },
      {
        "surface": "줘요",
        "base": "줘요",
        "language": "ko",
        "shortMeaning": "ください、してほしいです",
        "meaning": "ください、してほしいです"
      }
    ]
  },
  "날 아직 사랑한다면": {
    "japanese": "まだ私を愛しているのなら。",
    "literalJapanese": "私をまだ愛しているなら。",
    "sentenceExplanation": "まだ私を愛しているのなら。",
    "nuance": "相手の気持ちがまだ残っていることを願っている。 不安と期待が混ざっている。",
    "tokens": [
      {
        "surface": "날",
        "base": "날",
        "language": "ko",
        "shortMeaning": "나를",
        "meaning": "나를 / 私を"
      },
      {
        "surface": "아직",
        "base": "아직",
        "language": "ko",
        "shortMeaning": "まだ",
        "meaning": "まだ"
      },
      {
        "surface": "사랑하다",
        "base": "사랑하다",
        "language": "ko",
        "shortMeaning": "愛する",
        "meaning": "愛する"
      },
      {
        "surface": "사랑한다면",
        "base": "사랑한다면",
        "language": "ko",
        "shortMeaning": "愛しているなら",
        "meaning": "愛しているなら"
      }
    ]
  },
  "두 눈에 고인 눈물이": {
    "japanese": "瞳にたまった涙が。",
    "literalJapanese": "両目にたまった涙が。",
    "sentenceExplanation": "瞳にたまった涙が。",
    "nuance": "感情があふれているが、まだ完全にはこぼれていない涙。 抑えきれない想いの象徴。",
    "tokens": [
      {
        "surface": "두",
        "base": "두",
        "language": "ko",
        "shortMeaning": "二つの",
        "meaning": "二つの"
      },
      {
        "surface": "눈",
        "base": "눈",
        "language": "ko",
        "shortMeaning": "目",
        "meaning": "目"
      },
      {
        "surface": "두 눈",
        "base": "두 눈",
        "language": "ko",
        "shortMeaning": "両目",
        "meaning": "両目"
      },
      {
        "surface": "-에",
        "base": "-에",
        "language": "ko",
        "shortMeaning": "〜に",
        "meaning": "〜に"
      },
      {
        "surface": "고이다",
        "base": "고이다",
        "language": "ko",
        "shortMeaning": "たまる",
        "meaning": "たまる"
      },
      {
        "surface": "고인",
        "base": "고인",
        "language": "ko",
        "shortMeaning": "たまった〜",
        "meaning": "たまった〜"
      },
      {
        "surface": "눈물",
        "base": "눈물",
        "language": "ko",
        "shortMeaning": "涙",
        "meaning": "涙"
      },
      {
        "surface": "-이",
        "base": "-이",
        "language": "ko",
        "shortMeaning": "〜が",
        "meaning": "〜が"
      }
    ]
  },
  "그대를 원하죠": {
    "japanese": "あなたを求めています。",
    "literalJapanese": "あなたを求めています。",
    "sentenceExplanation": "あなたを求めています。",
    "nuance": "涙そのものが相手を求めている、という表現。 理屈ではなく、体と心が相手を必要としている感じ。",
    "tokens": [
      {
        "surface": "그대",
        "base": "그대",
        "language": "ko",
        "shortMeaning": "あなた",
        "meaning": "あなた"
      },
      {
        "surface": "-를",
        "base": "-를",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "원하다",
        "base": "원하다",
        "language": "ko",
        "shortMeaning": "望む、求める",
        "meaning": "望む、求める"
      },
      {
        "surface": "원하죠",
        "base": "원하죠",
        "language": "ko",
        "shortMeaning": "求めています",
        "meaning": "求めています"
      }
    ]
  },
  "사랑해요": {
    "japanese": "愛しています。",
    "literalJapanese": "愛しています。",
    "sentenceExplanation": "愛しています。",
    "nuance": "とても直接的で丁寧な愛の言葉。 この曲では飾りではなく、切実な告白として響く。",
    "tokens": [
      {
        "surface": "사랑하다",
        "base": "사랑하다",
        "language": "ko",
        "shortMeaning": "愛する",
        "meaning": "愛する"
      },
      {
        "surface": "사랑해요",
        "base": "사랑해요",
        "language": "ko",
        "shortMeaning": "愛しています",
        "meaning": "愛しています"
      }
    ]
  },
  "변하지 않는건": {
    "japanese": "変わらないものは。",
    "literalJapanese": "変わらないものは。",
    "sentenceExplanation": "変わらないものは。",
    "nuance": "時間や状況が変わっても、一つだけ変わらないものがあるという流れ。",
    "tokens": [
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
        "surface": "변하지 않는",
        "base": "변하지 않는",
        "language": "ko",
        "shortMeaning": "変わらない〜",
        "meaning": "変わらない〜"
      },
      {
        "surface": "건",
        "base": "건",
        "language": "ko",
        "shortMeaning": "것은 の縮約",
        "meaning": "것은 の縮約 / ものは、ことは"
      }
    ]
  },
  "그대를 향한 나의 사랑입니다": {
    "japanese": "あなたへ向かう私の愛です。",
    "literalJapanese": "あなたに向かう私の愛です。",
    "sentenceExplanation": "あなたへ向かう私の愛です。",
    "nuance": "相手に向かい続ける愛。 一時的な感情ではなく、方向がずっと相手へ向いているという意味。",
    "tokens": [
      {
        "surface": "그대를",
        "base": "그대를",
        "language": "ko",
        "shortMeaning": "あなたを",
        "meaning": "あなたを"
      },
      {
        "surface": "향하다",
        "base": "향하다",
        "language": "ko",
        "shortMeaning": "向かう",
        "meaning": "向かう"
      },
      {
        "surface": "그대를 향한",
        "base": "그대를 향한",
        "language": "ko",
        "shortMeaning": "あなたへ向かう〜、あなたへの〜",
        "meaning": "あなたへ向かう〜、あなたへの〜"
      },
      {
        "surface": "나의",
        "base": "나의",
        "language": "ko",
        "shortMeaning": "私の",
        "meaning": "私の"
      },
      {
        "surface": "사랑",
        "base": "사랑",
        "language": "ko",
        "shortMeaning": "愛",
        "meaning": "愛"
      },
      {
        "surface": "-입니다",
        "base": "-입니다",
        "language": "ko",
        "shortMeaning": "〜です",
        "meaning": "〜です"
      }
    ]
  },
  "세상이 변해도": {
    "japanese": "たとえ世界が変わっても。",
    "literalJapanese": "世界が変わっても。",
    "sentenceExplanation": "たとえ世界が変わっても。",
    "nuance": "周囲の環境、時間、運命が変わっても、という大きな表現。 その中で自分の愛だけは変わらない。",
    "tokens": [
      {
        "surface": "세상",
        "base": "세상",
        "language": "ko",
        "shortMeaning": "世界",
        "meaning": "世界"
      },
      {
        "surface": "-이",
        "base": "-이",
        "language": "ko",
        "shortMeaning": "〜が",
        "meaning": "〜が"
      },
      {
        "surface": "변하다",
        "base": "변하다",
        "language": "ko",
        "shortMeaning": "変わる",
        "meaning": "変わる"
      },
      {
        "surface": "변해도",
        "base": "변해도",
        "language": "ko",
        "shortMeaning": "変わっても",
        "meaning": "変わっても"
      }
    ]
  },
  "그대만 사랑하는 나를 아나요": {
    "japanese": "あなただけを愛している私に、あなたは気づいていますか。",
    "literalJapanese": "あなただけを愛する私を知っていますか。",
    "sentenceExplanation": "あなただけを愛している私に、あなたは気づいていますか。",
    "nuance": "相手に自分の一途な愛を分かってほしい。 「私はずっとあなたを愛しているのに、あなたは知っているの？」という切なさ。",
    "tokens": [
      {
        "surface": "그대만",
        "base": "그대만",
        "language": "ko",
        "shortMeaning": "あなただけ",
        "meaning": "あなただけ"
      },
      {
        "surface": "사랑하다",
        "base": "사랑하다",
        "language": "ko",
        "shortMeaning": "愛する",
        "meaning": "愛する"
      },
      {
        "surface": "사랑하는",
        "base": "사랑하는",
        "language": "ko",
        "shortMeaning": "愛している〜",
        "meaning": "愛している〜"
      },
      {
        "surface": "나를",
        "base": "나를",
        "language": "ko",
        "shortMeaning": "私を",
        "meaning": "私を"
      },
      {
        "surface": "알다",
        "base": "알다",
        "language": "ko",
        "shortMeaning": "知る、分かる",
        "meaning": "知る、分かる"
      },
      {
        "surface": "아나요",
        "base": "아나요",
        "language": "ko",
        "shortMeaning": "分かりますか、知っていますか",
        "meaning": "分かりますか、知っていますか"
      }
    ]
  },
  "My Destiny": {
    "japanese": "私の運命。",
    "literalJapanese": "私の運命。",
    "sentenceExplanation": "私の運命。",
    "nuance": "曲全体の結論。 相手は単なる思い出ではなく、自分の運命そのもの。",
    "tokens": [
      {
        "surface": "My",
        "base": "My",
        "language": "en",
        "shortMeaning": "私の",
        "meaning": "私の"
      },
      {
        "surface": "Destiny",
        "base": "Destiny",
        "language": "en",
        "shortMeaning": "運命",
        "meaning": "運命"
      }
    ]
  },
  "그대를 불러봅니다": {
    "japanese": "あなたの名を呼んでみます。",
    "literalJapanese": "あなたを呼んでみます。",
    "sentenceExplanation": "あなたの名を呼んでみます。",
    "nuance": "最初の “그댈 불러” とつながる。 結局、語り手は最後まで相手を呼び続けている。",
    "tokens": [
      {
        "surface": "그대",
        "base": "그대",
        "language": "ko",
        "shortMeaning": "あなた",
        "meaning": "あなた"
      },
      {
        "surface": "-를",
        "base": "-를",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "부르다",
        "base": "부르다",
        "language": "ko",
        "shortMeaning": "呼ぶ",
        "meaning": "呼ぶ"
      },
      {
        "surface": "불러보다",
        "base": "불러보다",
        "language": "ko",
        "shortMeaning": "呼んでみる",
        "meaning": "呼んでみる"
      },
      {
        "surface": "불러봅니다",
        "base": "불러봅니다",
        "language": "ko",
        "shortMeaning": "呼んでみます",
        "meaning": "呼んでみます"
      }
    ]
  }
};

const lyricsSequence: string[] = [
  "나 다시 허락한다면",
  "그댈 다시 볼 수 있다면",
  "내 지난 기억 속에서",
  "그 아픔 속에서",
  "그댈 불러",
  "You're my destiny 그댄",
  "You're my destiny 그댄",
  "You're my everything",
  "그대만 보면서",
  "이렇게 소리없이 불러봅니다",
  "You're the one my love 그댄",
  "You're the one my love 그댄",
  "You're my delight of all",
  "그대는 영원한 나의 사랑이죠",
  "내 곁에 다가와 줘요",
  "날 아직 사랑한다면",
  "두 눈에 고인 눈물이",
  "그대를 원하죠",
  "사랑해요",
  "You're my destiny 그댄",
  "You're my destiny 그댄",
  "You're my everything",
  "변하지 않는건",
  "그대를 향한 나의 사랑입니다",
  "You're the one my love 그댄",
  "You're the one my love 그댄",
  "You're my delight of all",
  "세상이 변해도",
  "그대만 사랑하는 나를 아나요",
  "My Destiny",
  "그대를 불러봅니다"
];

export const completeMyDestinyLines: LyricLine[] = lyricsSequence.map((korean, index) => {
  const template = lineTemplates[korean];

  return {
    id: `lyn-my-destiny-line-${index + 1}`,
    korean,
    japanese: template.japanese,
    literalJapanese: template.literalJapanese,
    sentenceExplanation: template.sentenceExplanation,
    ...(template.nuance ? { nuance: template.nuance } : {}),
    tokens: template.tokens.map((token, tokenIndex) => ({
      ...token,
      id: `lyn-my-destiny-line-${index + 1}-token-${tokenIndex + 1}`,
    })),
  };
});

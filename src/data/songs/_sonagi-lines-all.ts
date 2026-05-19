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
  "그치지 않기를 바랬죠": {
    "japanese": "この雨が止まらないでほしいと願っていました。",
    "literalJapanese": "止まないことを願っていました。",
    "sentenceExplanation": "この雨が止まらないでほしいと願っていました。",
    "nuance": "“소나기” は普通すぐ止む雨。 だからこそ「止まないでほしい」と願うのが切ない。 相手との関係が一瞬で終わらないでほしいという意味。",
    "tokens": [
      {
        "surface": "그치다",
        "base": "그치다",
        "language": "ko",
        "shortMeaning": "止む、止まる",
        "meaning": "止む、止まる"
      },
      {
        "surface": "-지 않다",
        "base": "-지 않다",
        "language": "ko",
        "shortMeaning": "〜しない",
        "meaning": "〜しない"
      },
      {
        "surface": "그치지 않기",
        "base": "그치지 않기",
        "language": "ko",
        "shortMeaning": "止まないこと",
        "meaning": "止まないこと"
      },
      {
        "surface": "-를",
        "base": "-를",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "바라다",
        "base": "바라다",
        "language": "ko",
        "shortMeaning": "願う、望む",
        "meaning": "願う、望む"
      },
      {
        "surface": "바랬죠",
        "base": "바랬죠",
        "language": "ko",
        "shortMeaning": "願っていました",
        "meaning": "願っていました"
      }
    ]
  },
  "처음 그대 내게로 오던 그날에": {
    "japanese": "初めてあなたが私のもとへ来てくれたあの日。",
    "literalJapanese": "初めてあなたが私のところへ来たあの日に。",
    "sentenceExplanation": "初めてあなたが私のもとへ来てくれたあの日。",
    "nuance": "出会いの日を思い返している。 “오던” があるので、ただの事実ではなく、記憶をしみじみ振り返る感じ。",
    "tokens": [
      {
        "surface": "처음",
        "base": "처음",
        "language": "ko",
        "shortMeaning": "初めて",
        "meaning": "初めて"
      },
      {
        "surface": "그대",
        "base": "그대",
        "language": "ko",
        "shortMeaning": "あなた",
        "meaning": "あなた",
        "explanation": "詩的・丁寧な「あなた」。 日常会話の 너 より柔らかく、歌詞でよく使う。"
      },
      {
        "surface": "내게로",
        "base": "내게로",
        "language": "ko",
        "shortMeaning": "私のところへ",
        "meaning": "私のところへ / 내게 = 나에게 = 私に、私のもとへ / -로 = 〜へ"
      },
      {
        "surface": "오다",
        "base": "오다",
        "language": "ko",
        "shortMeaning": "来る",
        "meaning": "来る"
      },
      {
        "surface": "오던",
        "base": "오던",
        "language": "ko",
        "shortMeaning": "来ていた〜、来た〜",
        "meaning": "来ていた〜、来た〜 / -던 = 過去の回想"
      },
      {
        "surface": "그날",
        "base": "그날",
        "language": "ko",
        "shortMeaning": "その日、あの日",
        "meaning": "その日、あの日"
      }
    ]
  },
  "잠시 동안 적시는": {
    "japanese": "少しの間だけ降って濡らすような。",
    "literalJapanese": "しばらくの間だけ濡らす。",
    "sentenceExplanation": "少しの間だけ降って去ってしまう雨ではありませんように。",
    "nuance": "相手が一時的に心を濡らして去る存在ではなく、ずっと残る人であってほしいという願い。 この曲の核心に近い表現。",
    "tokens": [
      {
        "surface": "잠시 동안",
        "base": "잠시 동안",
        "language": "ko",
        "shortMeaning": "しばらくの間、少しの間",
        "meaning": "しばらくの間、少しの間"
      },
      {
        "surface": "적시다",
        "base": "적시다",
        "language": "ko",
        "shortMeaning": "濡らす、湿らせる",
        "meaning": "濡らす、湿らせる"
      },
      {
        "surface": "적시는",
        "base": "적시는",
        "language": "ko",
        "shortMeaning": "濡らす〜",
        "meaning": "濡らす〜"
      },
      {
        "surface": "그런",
        "base": "그런",
        "language": "ko",
        "shortMeaning": "そんな",
        "meaning": "そんな"
      },
      {
        "surface": "비",
        "base": "비",
        "language": "ko",
        "shortMeaning": "雨",
        "meaning": "雨"
      },
      {
        "surface": "아니다",
        "base": "아니다",
        "language": "ko",
        "shortMeaning": "違う、〜ではない",
        "meaning": "違う、〜ではない"
      },
      {
        "surface": "아니길",
        "base": "아니길",
        "language": "ko",
        "shortMeaning": "〜ではないことを",
        "meaning": "〜ではないことを / -길 = -기를 の縮約 / 〜することを、〜であることを"
      }
    ]
  },
  "그런 비가 아니길": {
    "japanese": "そんな一時的な雨ではないことを。",
    "literalJapanese": "そんな雨ではないことを。",
    "sentenceExplanation": "少しの間だけ降って去ってしまう雨ではありませんように。",
    "nuance": "相手が一時的に心を濡らして去る存在ではなく、ずっと残る人であってほしいという願い。 この曲の核心に近い表現。",
    "tokens": [
      {
        "surface": "잠시 동안",
        "base": "잠시 동안",
        "language": "ko",
        "shortMeaning": "しばらくの間、少しの間",
        "meaning": "しばらくの間、少しの間"
      },
      {
        "surface": "적시다",
        "base": "적시다",
        "language": "ko",
        "shortMeaning": "濡らす、湿らせる",
        "meaning": "濡らす、湿らせる"
      },
      {
        "surface": "적시는",
        "base": "적시는",
        "language": "ko",
        "shortMeaning": "濡らす〜",
        "meaning": "濡らす〜"
      },
      {
        "surface": "그런",
        "base": "그런",
        "language": "ko",
        "shortMeaning": "そんな",
        "meaning": "そんな"
      },
      {
        "surface": "비",
        "base": "비",
        "language": "ko",
        "shortMeaning": "雨",
        "meaning": "雨"
      },
      {
        "surface": "아니다",
        "base": "아니다",
        "language": "ko",
        "shortMeaning": "違う、〜ではない",
        "meaning": "違う、〜ではない"
      },
      {
        "surface": "아니길",
        "base": "아니길",
        "language": "ko",
        "shortMeaning": "〜ではないことを",
        "meaning": "〜ではないことを / -길 = -기를 の縮約 / 〜することを、〜であることを"
      }
    ]
  },
  "간절히 난 바래왔었죠": {
    "japanese": "私は心から願い続けていました。",
    "literalJapanese": "切実に私は願ってきました。",
    "sentenceExplanation": "私は心から願い続けていました。",
    "nuance": "一瞬の軽い願いではなく、ずっと強く願ってきた気持ち。 “간절히” があるので、かなり深い切実さがある。",
    "tokens": [
      {
        "surface": "간절히",
        "base": "간절히",
        "language": "ko",
        "shortMeaning": "切実に、心から",
        "meaning": "切実に、心から"
      },
      {
        "surface": "난",
        "base": "난",
        "language": "ko",
        "shortMeaning": "나는",
        "meaning": "나는 / 私は"
      },
      {
        "surface": "바라다",
        "base": "바라다",
        "language": "ko",
        "shortMeaning": "願う",
        "meaning": "願う"
      },
      {
        "surface": "바래오다",
        "base": "바래오다",
        "language": "ko",
        "shortMeaning": "願い続けてくる",
        "meaning": "願い続けてくる"
      },
      {
        "surface": "바래왔었죠",
        "base": "바래왔었죠",
        "language": "ko",
        "shortMeaning": "願い続けてきました",
        "meaning": "願い続けてきました"
      }
    ]
  },
  "그대도 내 맘 아나요": {
    "japanese": "あなたは私の気持ちに気づいていますか。",
    "literalJapanese": "あなたも私の心を知っていますか。",
    "sentenceExplanation": "あなたは私の気持ちに気づいていますか。",
    "nuance": "自分の気持ちは強いが、相手に伝わっているか分からない。 一方通行かもしれない不安がある。",
    "tokens": [
      {
        "surface": "그대도",
        "base": "그대도",
        "language": "ko",
        "shortMeaning": "あなたも",
        "meaning": "あなたも"
      },
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
        "shortMeaning": "마음 の縮約",
        "meaning": "마음 の縮約 / 心、気持ち"
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
        "shortMeaning": "分かりますか",
        "meaning": "分かりますか"
      }
    ]
  },
  "매일 그대만 그려왔던 나를": {
    "japanese": "毎日あなただけを思い描いてきた私を。",
    "literalJapanese": "毎日あなただけを描いてきた私を。",
    "sentenceExplanation": "毎日あなただけを思ってきた私を。",
    "nuance": "“그리다” は絵を描くだけでなく、心の中で相手を思い浮かべる意味もある。 会えない相手を思い続ける切なさ。",
    "tokens": [
      {
        "surface": "매일",
        "base": "매일",
        "language": "ko",
        "shortMeaning": "毎日",
        "meaning": "毎日"
      },
      {
        "surface": "그대만",
        "base": "그대만",
        "language": "ko",
        "shortMeaning": "あなただけ",
        "meaning": "あなただけ / -만 = 〜だけ"
      },
      {
        "surface": "그리다",
        "base": "그리다",
        "language": "ko",
        "shortMeaning": "描く、思い描く、恋しがる",
        "meaning": "描く、思い描く、恋しがる"
      },
      {
        "surface": "그려오다",
        "base": "그려오다",
        "language": "ko",
        "shortMeaning": "ずっと思い描いてくる",
        "meaning": "ずっと思い描いてくる"
      },
      {
        "surface": "그려왔던",
        "base": "그려왔던",
        "language": "ko",
        "shortMeaning": "ずっと思い描いてきた〜",
        "meaning": "ずっと思い描いてきた〜"
      },
      {
        "surface": "나를",
        "base": "나를",
        "language": "ko",
        "shortMeaning": "私を",
        "meaning": "私を"
      }
    ]
  },
  "오늘도 내 맘에 스며들죠": {
    "japanese": "今日もあなたは、私の心にそっと染み込んできます。",
    "literalJapanese": "今日も私の心に染み込みます。",
    "sentenceExplanation": "今日もあなたは、私の心にそっと染み込んできます。",
    "nuance": "雨が地面に染み込むように、相手の存在が心に入ってくる。 “소나기” の雨のイメージとつながる。",
    "tokens": [
      {
        "surface": "오늘도",
        "base": "오늘도",
        "language": "ko",
        "shortMeaning": "今日も",
        "meaning": "今日も"
      },
      {
        "surface": "내 맘에",
        "base": "내 맘에",
        "language": "ko",
        "shortMeaning": "私の心に",
        "meaning": "私の心に"
      },
      {
        "surface": "스며들다",
        "base": "스며들다",
        "language": "ko",
        "shortMeaning": "染み込む、しみ入る",
        "meaning": "染み込む、しみ入る"
      },
      {
        "surface": "스며들죠",
        "base": "스며들죠",
        "language": "ko",
        "shortMeaning": "染み込んできます",
        "meaning": "染み込んできます"
      }
    ]
  },
  "그대는 선물입니다": {
    "japanese": "あなたは私にとって贈り物です。",
    "literalJapanese": "あなたは贈り物です。",
    "sentenceExplanation": "あなたは私にとって贈り物です。",
    "nuance": "相手を、自分で手に入れたものではなく、授けられた大切な存在として見ている。",
    "tokens": [
      {
        "surface": "그대",
        "base": "그대",
        "language": "ko",
        "shortMeaning": "あなた",
        "meaning": "あなた"
      },
      {
        "surface": "선물",
        "base": "선물",
        "language": "ko",
        "shortMeaning": "贈り物、プレゼント",
        "meaning": "贈り物、プレゼント"
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
  "하늘이 내려준": {
    "japanese": "空が授けてくれた。",
    "literalJapanese": "空が降ろしてくれた。",
    "sentenceExplanation": "天が授けてくれた。",
    "nuance": "偶然ではなく、運命的な贈り物という感じ。 “비가 내리다”＝雨が降る、とも重なる。 相手が雨のように「降ってきた」存在でもある。",
    "tokens": [
      {
        "surface": "하늘",
        "base": "하늘",
        "language": "ko",
        "shortMeaning": "空、天",
        "meaning": "空、天"
      },
      {
        "surface": "-이",
        "base": "-이",
        "language": "ko",
        "shortMeaning": "〜が",
        "meaning": "〜が"
      },
      {
        "surface": "내리다",
        "base": "내리다",
        "language": "ko",
        "shortMeaning": "降ろす、降る、授ける",
        "meaning": "降ろす、降る、授ける"
      },
      {
        "surface": "내려주다",
        "base": "내려주다",
        "language": "ko",
        "shortMeaning": "降ろしてくれる、授けてくれる",
        "meaning": "降ろしてくれる、授けてくれる"
      },
      {
        "surface": "내려준",
        "base": "내려준",
        "language": "ko",
        "shortMeaning": "授けてくれた〜",
        "meaning": "授けてくれた〜"
      }
    ]
  },
  "홀로 선 세상 속에": {
    "japanese": "ひとりで立っているこの世界の中で。",
    "literalJapanese": "ひとりで立った世界の中に。",
    "sentenceExplanation": "ひとりで立っているこの世界の中で。",
    "nuance": "孤独な世界で、ひとり耐えている感じ。 その中で相手を守ると続くので、語り手の決意が強い。",
    "tokens": [
      {
        "surface": "홀로",
        "base": "홀로",
        "language": "ko",
        "shortMeaning": "ひとりで",
        "meaning": "ひとりで"
      },
      {
        "surface": "서다",
        "base": "서다",
        "language": "ko",
        "shortMeaning": "立つ",
        "meaning": "立つ"
      },
      {
        "surface": "선",
        "base": "선",
        "language": "ko",
        "shortMeaning": "立った〜",
        "meaning": "立った〜"
      },
      {
        "surface": "세상",
        "base": "세상",
        "language": "ko",
        "shortMeaning": "世界",
        "meaning": "世界"
      },
      {
        "surface": "속",
        "base": "속",
        "language": "ko",
        "shortMeaning": "中",
        "meaning": "中"
      },
      {
        "surface": "-에",
        "base": "-에",
        "language": "ko",
        "shortMeaning": "〜に、〜で",
        "meaning": "〜に、〜で"
      }
    ]
  },
  "그댈 지켜줄게요": {
    "japanese": "あなたを守ります。",
    "literalJapanese": "あなたを守ってあげます。",
    "sentenceExplanation": "あなたを守ります。",
    "nuance": "一方的に愛されたいのではなく、自分が相手を守りたいという献身。 かなり優しい愛情表現。",
    "tokens": [
      {
        "surface": "그댈",
        "base": "그댈",
        "language": "ko",
        "shortMeaning": "그대를 の縮約",
        "meaning": "그대를 の縮約 / あなたを"
      },
      {
        "surface": "지키다",
        "base": "지키다",
        "language": "ko",
        "shortMeaning": "守る",
        "meaning": "守る"
      },
      {
        "surface": "지켜주다",
        "base": "지켜주다",
        "language": "ko",
        "shortMeaning": "守ってあげる",
        "meaning": "守ってあげる"
      },
      {
        "surface": "지켜줄게요",
        "base": "지켜줄게요",
        "language": "ko",
        "shortMeaning": "守ってあげます",
        "meaning": "守ってあげます"
      }
    ]
  },
  "어느 날 문득": {
    "japanese": "ある日突然。",
    "literalJapanese": "ある日ふと。",
    "sentenceExplanation": "あなたはある日突然、通り雨のように現れた人だけれど。",
    "nuance": "相手は予告なく現れた存在。 でも、通り雨のようにすぐ去ってほしくないという気持ちがある。",
    "tokens": [
      {
        "surface": "어느 날",
        "base": "어느 날",
        "language": "ko",
        "shortMeaning": "ある日",
        "meaning": "ある日"
      },
      {
        "surface": "문득",
        "base": "문득",
        "language": "ko",
        "shortMeaning": "ふと、突然",
        "meaning": "ふと、突然"
      },
      {
        "surface": "소나기",
        "base": "소나기",
        "language": "ko",
        "shortMeaning": "にわか雨、通り雨",
        "meaning": "にわか雨、通り雨"
      },
      {
        "surface": "-처럼",
        "base": "-처럼",
        "language": "ko",
        "shortMeaning": "〜のように",
        "meaning": "〜のように"
      },
      {
        "surface": "내리다",
        "base": "내리다",
        "language": "ko",
        "shortMeaning": "降る",
        "meaning": "降る"
      },
      {
        "surface": "내린",
        "base": "내린",
        "language": "ko",
        "shortMeaning": "降った〜",
        "meaning": "降った〜"
      },
      {
        "surface": "그대지만",
        "base": "그대지만",
        "language": "ko",
        "shortMeaning": "あなたですが、あなただけれど",
        "meaning": "あなたですが、あなただけれど"
      }
    ]
  },
  "소나기처럼": {
    "japanese": "通り雨のように。",
    "literalJapanese": "にわか雨のように。",
    "sentenceExplanation": "あなたはある日突然、通り雨のように現れた人だけれど。",
    "nuance": "相手は予告なく現れた存在。 でも、通り雨のようにすぐ去ってほしくないという気持ちがある。",
    "tokens": [
      {
        "surface": "어느 날",
        "base": "어느 날",
        "language": "ko",
        "shortMeaning": "ある日",
        "meaning": "ある日"
      },
      {
        "surface": "문득",
        "base": "문득",
        "language": "ko",
        "shortMeaning": "ふと、突然",
        "meaning": "ふと、突然"
      },
      {
        "surface": "소나기",
        "base": "소나기",
        "language": "ko",
        "shortMeaning": "にわか雨、通り雨",
        "meaning": "にわか雨、通り雨"
      },
      {
        "surface": "-처럼",
        "base": "-처럼",
        "language": "ko",
        "shortMeaning": "〜のように",
        "meaning": "〜のように"
      },
      {
        "surface": "내리다",
        "base": "내리다",
        "language": "ko",
        "shortMeaning": "降る",
        "meaning": "降る"
      },
      {
        "surface": "내린",
        "base": "내린",
        "language": "ko",
        "shortMeaning": "降った〜",
        "meaning": "降った〜"
      },
      {
        "surface": "그대지만",
        "base": "그대지만",
        "language": "ko",
        "shortMeaning": "あなたですが、あなただけれど",
        "meaning": "あなたですが、あなただけれど"
      }
    ]
  },
  "내린 그대지만": {
    "japanese": "あなたは突然降ってきた雨のような人だけれど。",
    "literalJapanese": "降ったあなたですが。",
    "sentenceExplanation": "あなたはある日突然、通り雨のように現れた人だけれど。",
    "nuance": "相手は予告なく現れた存在。 でも、通り雨のようにすぐ去ってほしくないという気持ちがある。",
    "tokens": [
      {
        "surface": "어느 날",
        "base": "어느 날",
        "language": "ko",
        "shortMeaning": "ある日",
        "meaning": "ある日"
      },
      {
        "surface": "문득",
        "base": "문득",
        "language": "ko",
        "shortMeaning": "ふと、突然",
        "meaning": "ふと、突然"
      },
      {
        "surface": "소나기",
        "base": "소나기",
        "language": "ko",
        "shortMeaning": "にわか雨、通り雨",
        "meaning": "にわか雨、通り雨"
      },
      {
        "surface": "-처럼",
        "base": "-처럼",
        "language": "ko",
        "shortMeaning": "〜のように",
        "meaning": "〜のように"
      },
      {
        "surface": "내리다",
        "base": "내리다",
        "language": "ko",
        "shortMeaning": "降る",
        "meaning": "降る"
      },
      {
        "surface": "내린",
        "base": "내린",
        "language": "ko",
        "shortMeaning": "降った〜",
        "meaning": "降った〜"
      },
      {
        "surface": "그대지만",
        "base": "그대지만",
        "language": "ko",
        "shortMeaning": "あなたですが、あなただけれど",
        "meaning": "あなたですが、あなただけれど"
      }
    ]
  },
  "오늘도 불러 봅니다": {
    "japanese": "今日もあなたの名を呼んでみます。",
    "literalJapanese": "今日も呼んでみます。",
    "sentenceExplanation": "今日もあなたの名を呼んでみます。",
    "nuance": "会えない相手に向かって、そっと名前を呼ぶ感じ。 切ない待ちの感情がある。",
    "tokens": [
      {
        "surface": "오늘도",
        "base": "오늘도",
        "language": "ko",
        "shortMeaning": "今日も",
        "meaning": "今日も"
      },
      {
        "surface": "부르다",
        "base": "부르다",
        "language": "ko",
        "shortMeaning": "呼ぶ、歌う",
        "meaning": "呼ぶ、歌う"
      },
      {
        "surface": "불러보다",
        "base": "불러보다",
        "language": "ko",
        "shortMeaning": "呼んでみる",
        "meaning": "呼んでみる"
      },
      {
        "surface": "불러 봅니다",
        "base": "불러 봅니다",
        "language": "ko",
        "shortMeaning": "呼んでみます",
        "meaning": "呼んでみます"
      }
    ]
  },
  "내겐 소중한 사람": {
    "japanese": "私にとって大切な人。",
    "literalJapanese": "私には大切な人。",
    "sentenceExplanation": "私にとって大切な人。",
    "nuance": "相手が自分にとってどれほど大切かを、素直に言っている。",
    "tokens": [
      {
        "surface": "내겐",
        "base": "내겐",
        "language": "ko",
        "shortMeaning": "나에게는 の縮約",
        "meaning": "나에게는 の縮約 / 私には、私にとっては"
      },
      {
        "surface": "소중하다",
        "base": "소중하다",
        "language": "ko",
        "shortMeaning": "大切だ、貴重だ",
        "meaning": "大切だ、貴重だ"
      },
      {
        "surface": "소중한",
        "base": "소중한",
        "language": "ko",
        "shortMeaning": "大切な〜",
        "meaning": "大切な〜"
      },
      {
        "surface": "사람",
        "base": "사람",
        "language": "ko",
        "shortMeaning": "人",
        "meaning": "人"
      }
    ]
  },
  "Oh": {
    "japanese": "Oh",
    "literalJapanese": "Oh",
    "sentenceExplanation": "この行では「Oh」と伝えている。",
    "tokens": [
      {
        "surface": "Oh",
        "base": "Oh",
        "language": "en",
        "shortMeaning": "Oh",
        "meaning": "Oh"
      }
    ]
  },
  "떨어지는 빗물이": {
    "japanese": "降り落ちる雨粒が。",
    "literalJapanese": "落ちる雨水が。",
    "sentenceExplanation": "降り落ちる雨粒が、いつの間にか私を目覚めさせて。",
    "nuance": "雨音で目が覚める場面。 同時に、相手への思いも目覚める。",
    "tokens": [
      {
        "surface": "떨어지다",
        "base": "떨어지다",
        "language": "ko",
        "shortMeaning": "落ちる",
        "meaning": "落ちる"
      },
      {
        "surface": "떨어지는",
        "base": "떨어지는",
        "language": "ko",
        "shortMeaning": "落ちる〜、降り落ちる〜",
        "meaning": "落ちる〜、降り落ちる〜"
      },
      {
        "surface": "빗물",
        "base": "빗물",
        "language": "ko",
        "shortMeaning": "雨水、雨粒",
        "meaning": "雨水、雨粒 / 비 = 雨 / 물 = 水"
      },
      {
        "surface": "어느새",
        "base": "어느새",
        "language": "ko",
        "shortMeaning": "いつの間にか",
        "meaning": "いつの間にか"
      },
      {
        "surface": "날",
        "base": "날",
        "language": "ko",
        "shortMeaning": "나를",
        "meaning": "나를 / 私を"
      },
      {
        "surface": "깨우다",
        "base": "깨우다",
        "language": "ko",
        "shortMeaning": "起こす、目覚めさせる",
        "meaning": "起こす、目覚めさせる"
      },
      {
        "surface": "깨우고",
        "base": "깨우고",
        "language": "ko",
        "shortMeaning": "起こして",
        "meaning": "起こして"
      }
    ]
  },
  "어느새 날 깨우고": {
    "japanese": "いつの間にか私を目覚めさせて。",
    "literalJapanese": "いつの間にか私を起こして。",
    "sentenceExplanation": "降り落ちる雨粒が、いつの間にか私を目覚めさせて。",
    "nuance": "雨音で目が覚める場面。 同時に、相手への思いも目覚める。",
    "tokens": [
      {
        "surface": "떨어지다",
        "base": "떨어지다",
        "language": "ko",
        "shortMeaning": "落ちる",
        "meaning": "落ちる"
      },
      {
        "surface": "떨어지는",
        "base": "떨어지는",
        "language": "ko",
        "shortMeaning": "落ちる〜、降り落ちる〜",
        "meaning": "落ちる〜、降り落ちる〜"
      },
      {
        "surface": "빗물",
        "base": "빗물",
        "language": "ko",
        "shortMeaning": "雨水、雨粒",
        "meaning": "雨水、雨粒 / 비 = 雨 / 물 = 水"
      },
      {
        "surface": "어느새",
        "base": "어느새",
        "language": "ko",
        "shortMeaning": "いつの間にか",
        "meaning": "いつの間にか"
      },
      {
        "surface": "날",
        "base": "날",
        "language": "ko",
        "shortMeaning": "나를",
        "meaning": "나를 / 私を"
      },
      {
        "surface": "깨우다",
        "base": "깨우다",
        "language": "ko",
        "shortMeaning": "起こす、目覚めさせる",
        "meaning": "起こす、目覚めさせる"
      },
      {
        "surface": "깨우고",
        "base": "깨우고",
        "language": "ko",
        "shortMeaning": "起こして",
        "meaning": "起こして"
      }
    ]
  },
  "그대 생각에 잠겨요": {
    "japanese": "あなたへの思いに浸ってしまいます。",
    "literalJapanese": "あなたの考えに沈みます。",
    "sentenceExplanation": "あなたへの思いに浸ってしまいます。",
    "nuance": "雨の日に相手のことばかり考えてしまう。 “잠기다” は水に沈む意味もあるので、雨のイメージと合っている。",
    "tokens": [
      {
        "surface": "그대",
        "base": "그대",
        "language": "ko",
        "shortMeaning": "あなた",
        "meaning": "あなた"
      },
      {
        "surface": "생각",
        "base": "생각",
        "language": "ko",
        "shortMeaning": "考え、思い",
        "meaning": "考え、思い"
      },
      {
        "surface": "-에",
        "base": "-에",
        "language": "ko",
        "shortMeaning": "〜に",
        "meaning": "〜に"
      },
      {
        "surface": "잠기다",
        "base": "잠기다",
        "language": "ko",
        "shortMeaning": "浸る、沈む",
        "meaning": "浸る、沈む"
      },
      {
        "surface": "잠겨요",
        "base": "잠겨요",
        "language": "ko",
        "shortMeaning": "浸ります",
        "meaning": "浸ります"
      }
    ]
  },
  "이제는 내게로 와요": {
    "japanese": "もう私のもとへ来てください。",
    "literalJapanese": "今は私のところへ来てください。",
    "sentenceExplanation": "もう私のもとへ来てください。",
    "nuance": "待つだけでなく、相手に来てほしいと願っている。 少し切実な呼びかけ。",
    "tokens": [
      {
        "surface": "이제는",
        "base": "이제는",
        "language": "ko",
        "shortMeaning": "もう、今は",
        "meaning": "もう、今は"
      },
      {
        "surface": "내게로",
        "base": "내게로",
        "language": "ko",
        "shortMeaning": "私のもとへ",
        "meaning": "私のもとへ"
      },
      {
        "surface": "오다",
        "base": "오다",
        "language": "ko",
        "shortMeaning": "来る",
        "meaning": "来る"
      },
      {
        "surface": "와요",
        "base": "와요",
        "language": "ko",
        "shortMeaning": "来てください",
        "meaning": "来てください"
      }
    ]
  },
  "언제나처럼 기다리고 있죠": {
    "japanese": "私はいつものように待っています。",
    "literalJapanese": "いつものように待っています。",
    "sentenceExplanation": "私はいつものように待っています。",
    "nuance": "ずっと待ってきた人の言葉。 相手を急かすというより、静かに待ち続ける優しさ。",
    "tokens": [
      {
        "surface": "언제나처럼",
        "base": "언제나처럼",
        "language": "ko",
        "shortMeaning": "いつものように",
        "meaning": "いつものように / 언제나 = いつも / -처럼 = 〜のように"
      },
      {
        "surface": "기다리다",
        "base": "기다리다",
        "language": "ko",
        "shortMeaning": "待つ",
        "meaning": "待つ"
      },
      {
        "surface": "기다리고 있다",
        "base": "기다리고 있다",
        "language": "ko",
        "shortMeaning": "待っている",
        "meaning": "待っている"
      },
      {
        "surface": "있죠",
        "base": "있죠",
        "language": "ko",
        "shortMeaning": "いますよ、いるんです",
        "meaning": "いますよ、いるんです"
      }
    ]
  },
  "그대 손을 꼭 잡아줄게요": {
    "japanese": "あなたの手をぎゅっと握ります。",
    "literalJapanese": "あなたの手をしっかり握ってあげます。",
    "sentenceExplanation": "あなたの手をぎゅっと握ります。",
    "nuance": "相手が不安な時に、そばにいて支える感じ。 “지켜줄게요” と同じく、守る愛。",
    "tokens": [
      {
        "surface": "그대 손",
        "base": "그대 손",
        "language": "ko",
        "shortMeaning": "あなたの手",
        "meaning": "あなたの手"
      },
      {
        "surface": "꼭",
        "base": "꼭",
        "language": "ko",
        "shortMeaning": "ぎゅっと、必ず",
        "meaning": "ぎゅっと、必ず"
      },
      {
        "surface": "잡다",
        "base": "잡다",
        "language": "ko",
        "shortMeaning": "握る、つかむ",
        "meaning": "握る、つかむ"
      },
      {
        "surface": "잡아주다",
        "base": "잡아주다",
        "language": "ko",
        "shortMeaning": "握ってあげる",
        "meaning": "握ってあげる"
      },
      {
        "surface": "잡아줄게요",
        "base": "잡아줄게요",
        "language": "ko",
        "shortMeaning": "握ってあげます",
        "meaning": "握ってあげます"
      }
    ]
  },
  "잊고 싶던 아픈 기억들도": {
    "japanese": "忘れたかった痛い記憶も。",
    "literalJapanese": "忘れたかったつらい記憶たちも。",
    "sentenceExplanation": "忘れたかった痛い記憶も。",
    "nuance": "過去の傷や悲しい思い出。 相手にも語り手にも、癒したい記憶がある。",
    "tokens": [
      {
        "surface": "잊다",
        "base": "잊다",
        "language": "ko",
        "shortMeaning": "忘れる",
        "meaning": "忘れる"
      },
      {
        "surface": "잊고 싶다",
        "base": "잊고 싶다",
        "language": "ko",
        "shortMeaning": "忘れたい",
        "meaning": "忘れたい"
      },
      {
        "surface": "잊고 싶던",
        "base": "잊고 싶던",
        "language": "ko",
        "shortMeaning": "忘れたかった〜",
        "meaning": "忘れたかった〜"
      },
      {
        "surface": "아프다",
        "base": "아프다",
        "language": "ko",
        "shortMeaning": "痛い、つらい",
        "meaning": "痛い、つらい"
      },
      {
        "surface": "아픈",
        "base": "아픈",
        "language": "ko",
        "shortMeaning": "つらい〜",
        "meaning": "つらい〜"
      },
      {
        "surface": "기억",
        "base": "기억",
        "language": "ko",
        "shortMeaning": "記憶",
        "meaning": "記憶"
      },
      {
        "surface": "기억들",
        "base": "기억들",
        "language": "ko",
        "shortMeaning": "記憶たち",
        "meaning": "記憶たち"
      },
      {
        "surface": "-도",
        "base": "-도",
        "language": "ko",
        "shortMeaning": "〜も",
        "meaning": "〜も"
      }
    ]
  },
  "빗방울과 함께 흘려보내면 돼요": {
    "japanese": "雨粒と一緒に流してしまえばいいのです。",
    "literalJapanese": "雨粒と一緒に流して送ればいいです。",
    "sentenceExplanation": "つらい記憶は、雨粒と一緒に流してしまえばいいのです。",
    "nuance": "雨が悲しみを洗い流してくれるイメージ。 “소나기” がただの切ない雨ではなく、癒しの雨にもなっている。",
    "tokens": [
      {
        "surface": "빗방울",
        "base": "빗방울",
        "language": "ko",
        "shortMeaning": "雨粒",
        "meaning": "雨粒 / 비 = 雨 / 방울 = しずく、粒"
      },
      {
        "surface": "-과 함께",
        "base": "-과 함께",
        "language": "ko",
        "shortMeaning": "〜と一緒に",
        "meaning": "〜と一緒に"
      },
      {
        "surface": "흘리다",
        "base": "흘리다",
        "language": "ko",
        "shortMeaning": "流す",
        "meaning": "流す"
      },
      {
        "surface": "보내다",
        "base": "보내다",
        "language": "ko",
        "shortMeaning": "送る、手放す",
        "meaning": "送る、手放す"
      },
      {
        "surface": "흘려보내다",
        "base": "흘려보내다",
        "language": "ko",
        "shortMeaning": "流してしまう、流し去る",
        "meaning": "流してしまう、流し去る"
      },
      {
        "surface": "-면 돼요",
        "base": "-면 돼요",
        "language": "ko",
        "shortMeaning": "〜すればいいです",
        "meaning": "〜すればいいです"
      }
    ]
  },
  "때로는 지쳐도": {
    "japanese": "時には疲れても。",
    "literalJapanese": "時には疲れても。",
    "sentenceExplanation": "時には疲れても。",
    "nuance": "人生や愛の中で疲れる時もあると認めている。 綺麗事だけではない優しさ。",
    "tokens": [
      {
        "surface": "때로는",
        "base": "때로는",
        "language": "ko",
        "shortMeaning": "時には",
        "meaning": "時には"
      },
      {
        "surface": "지치다",
        "base": "지치다",
        "language": "ko",
        "shortMeaning": "疲れる",
        "meaning": "疲れる"
      },
      {
        "surface": "지쳐도",
        "base": "지쳐도",
        "language": "ko",
        "shortMeaning": "疲れても",
        "meaning": "疲れても"
      }
    ]
  },
  "하늘이 흐려도": {
    "japanese": "空が曇っていても。",
    "literalJapanese": "空が曇っても。",
    "sentenceExplanation": "空が曇っていても。",
    "nuance": "気持ちが沈む日、未来が見えない日を表す比喩。 雨・空のイメージが続く。",
    "tokens": [
      {
        "surface": "하늘",
        "base": "하늘",
        "language": "ko",
        "shortMeaning": "空",
        "meaning": "空"
      },
      {
        "surface": "흐리다",
        "base": "흐리다",
        "language": "ko",
        "shortMeaning": "曇る",
        "meaning": "曇る"
      },
      {
        "surface": "흐려도",
        "base": "흐려도",
        "language": "ko",
        "shortMeaning": "曇っても",
        "meaning": "曇っても"
      }
    ]
  },
  "내가 있다는 걸 잊지 말아요": {
    "japanese": "私がいることを忘れないでください。",
    "literalJapanese": "私がいるということを忘れないでください。",
    "sentenceExplanation": "私がいることを忘れないでください。",
    "nuance": "相手が疲れても、曇った気持ちでも、自分はそばにいるという約束。 この曲の支えのメッセージ。",
    "tokens": [
      {
        "surface": "내가",
        "base": "내가",
        "language": "ko",
        "shortMeaning": "私が",
        "meaning": "私が"
      },
      {
        "surface": "있다",
        "base": "있다",
        "language": "ko",
        "shortMeaning": "いる、ある",
        "meaning": "いる、ある"
      },
      {
        "surface": "있다는 것",
        "base": "있다는 것",
        "language": "ko",
        "shortMeaning": "いるということ",
        "meaning": "いるということ"
      },
      {
        "surface": "걸",
        "base": "걸",
        "language": "ko",
        "shortMeaning": "것을 の縮約",
        "meaning": "것을 の縮約 / ことを"
      },
      {
        "surface": "잊다",
        "base": "잊다",
        "language": "ko",
        "shortMeaning": "忘れる",
        "meaning": "忘れる"
      },
      {
        "surface": "잊지 말다",
        "base": "잊지 말다",
        "language": "ko",
        "shortMeaning": "忘れないで",
        "meaning": "忘れないで"
      },
      {
        "surface": "말아요",
        "base": "말아요",
        "language": "ko",
        "shortMeaning": "〜しないでください",
        "meaning": "〜しないでください"
      }
    ]
  },
  "그대는 사랑입니다": {
    "japanese": "あなたは私の愛そのものです。",
    "literalJapanese": "あなたは愛です。",
    "sentenceExplanation": "あなたは私の愛そのものです。",
    "nuance": "前半の “그대는 선물입니다” が、ここで “사랑입니다” に変わる。 相手は贈り物であるだけでなく、愛そのものだと確信している。",
    "tokens": [
      {
        "surface": "그대",
        "base": "그대",
        "language": "ko",
        "shortMeaning": "あなた",
        "meaning": "あなた"
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
  "하나뿐인 사랑": {
    "japanese": "たった一つの愛。",
    "literalJapanese": "たった一つだけの愛。",
    "sentenceExplanation": "たった一つの愛。",
    "nuance": "代わりがない唯一の愛。 かなり強い運命感。",
    "tokens": [
      {
        "surface": "하나",
        "base": "하나",
        "language": "ko",
        "shortMeaning": "一つ",
        "meaning": "一つ"
      },
      {
        "surface": "뿐",
        "base": "뿐",
        "language": "ko",
        "shortMeaning": "〜だけ",
        "meaning": "〜だけ"
      },
      {
        "surface": "하나뿐인",
        "base": "하나뿐인",
        "language": "ko",
        "shortMeaning": "たった一つだけの",
        "meaning": "たった一つだけの"
      },
      {
        "surface": "사랑",
        "base": "사랑",
        "language": "ko",
        "shortMeaning": "愛",
        "meaning": "愛"
      }
    ]
  },
  "다시는 그대와 같은": {
    "japanese": "二度とあなたのような。",
    "literalJapanese": "二度とあなたのような。",
    "sentenceExplanation": "二度とあなたのような愛には出会えないはずだから。",
    "nuance": "相手との愛が唯一無二だという表現。 失いたくない気持ちが強い。",
    "tokens": [
      {
        "surface": "다시는",
        "base": "다시는",
        "language": "ko",
        "shortMeaning": "二度と",
        "meaning": "二度と"
      },
      {
        "surface": "그대와 같은",
        "base": "그대와 같은",
        "language": "ko",
        "shortMeaning": "あなたのような",
        "meaning": "あなたのような / -와 같은 = 〜のような"
      },
      {
        "surface": "사랑",
        "base": "사랑",
        "language": "ko",
        "shortMeaning": "愛",
        "meaning": "愛"
      },
      {
        "surface": "없다",
        "base": "없다",
        "language": "ko",
        "shortMeaning": "ない",
        "meaning": "ない"
      },
      {
        "surface": "없을 테니",
        "base": "없을 테니",
        "language": "ko",
        "shortMeaning": "ないはずだから、ないだろうから",
        "meaning": "ないはずだから、ないだろうから / -ㄹ 테니 = 〜だろうから、〜するつもりだから"
      }
    ]
  },
  "사랑 없을 테니": {
    "japanese": "愛には出会えないはずだから。",
    "literalJapanese": "愛はないはずだから。",
    "sentenceExplanation": "二度とあなたのような愛には出会えないはずだから。",
    "nuance": "相手との愛が唯一無二だという表現。 失いたくない気持ちが強い。",
    "tokens": [
      {
        "surface": "다시는",
        "base": "다시는",
        "language": "ko",
        "shortMeaning": "二度と",
        "meaning": "二度と"
      },
      {
        "surface": "그대와 같은",
        "base": "그대와 같은",
        "language": "ko",
        "shortMeaning": "あなたのような",
        "meaning": "あなたのような / -와 같은 = 〜のような"
      },
      {
        "surface": "사랑",
        "base": "사랑",
        "language": "ko",
        "shortMeaning": "愛",
        "meaning": "愛"
      },
      {
        "surface": "없다",
        "base": "없다",
        "language": "ko",
        "shortMeaning": "ない",
        "meaning": "ない"
      },
      {
        "surface": "없을 테니",
        "base": "없을 테니",
        "language": "ko",
        "shortMeaning": "ないはずだから、ないだろうから",
        "meaning": "ないはずだから、ないだろうから / -ㄹ 테니 = 〜だろうから、〜するつもりだから"
      }
    ]
  },
  "잊지 않아요": {
    "japanese": "私は忘れません。",
    "literalJapanese": "忘れません。",
    "sentenceExplanation": "私は忘れません。",
    "nuance": "記憶を守り続ける決意。",
    "tokens": [
      {
        "surface": "잊다",
        "base": "잊다",
        "language": "ko",
        "shortMeaning": "忘れる",
        "meaning": "忘れる"
      },
      {
        "surface": "잊지 않다",
        "base": "잊지 않다",
        "language": "ko",
        "shortMeaning": "忘れない",
        "meaning": "忘れない"
      },
      {
        "surface": "않아요",
        "base": "않아요",
        "language": "ko",
        "shortMeaning": "〜しません",
        "meaning": "〜しません"
      }
    ]
  },
  "내게 주었던": {
    "japanese": "あなたが私にくれた。",
    "literalJapanese": "私にくれた。",
    "sentenceExplanation": "あなたが私にくれた、どんな小さな思い出ひとつさえも。",
    "nuance": "大きな出来事だけでなく、小さな記憶も大切にしている。 愛の細やかさが出ている。",
    "tokens": [
      {
        "surface": "내게",
        "base": "내게",
        "language": "ko",
        "shortMeaning": "私に",
        "meaning": "私に"
      },
      {
        "surface": "주다",
        "base": "주다",
        "language": "ko",
        "shortMeaning": "くれる、与える",
        "meaning": "くれる、与える"
      },
      {
        "surface": "주었던",
        "base": "주었던",
        "language": "ko",
        "shortMeaning": "くれた〜",
        "meaning": "くれた〜"
      },
      {
        "surface": "작다",
        "base": "작다",
        "language": "ko",
        "shortMeaning": "小さい",
        "meaning": "小さい"
      },
      {
        "surface": "작은",
        "base": "작은",
        "language": "ko",
        "shortMeaning": "小さな〜",
        "meaning": "小さな〜"
      },
      {
        "surface": "기억",
        "base": "기억",
        "language": "ko",
        "shortMeaning": "記憶、思い出",
        "meaning": "記憶、思い出"
      },
      {
        "surface": "하나도",
        "base": "하나도",
        "language": "ko",
        "shortMeaning": "一つも",
        "meaning": "一つも"
      }
    ]
  },
  "작은 기억 하나도": {
    "japanese": "どんな小さな記憶ひとつさえも。",
    "literalJapanese": "小さな記憶一つも。",
    "sentenceExplanation": "あなたが私にくれた、どんな小さな思い出ひとつさえも。",
    "nuance": "大きな出来事だけでなく、小さな記憶も大切にしている。 愛の細やかさが出ている。",
    "tokens": [
      {
        "surface": "내게",
        "base": "내게",
        "language": "ko",
        "shortMeaning": "私に",
        "meaning": "私に"
      },
      {
        "surface": "주다",
        "base": "주다",
        "language": "ko",
        "shortMeaning": "くれる、与える",
        "meaning": "くれる、与える"
      },
      {
        "surface": "주었던",
        "base": "주었던",
        "language": "ko",
        "shortMeaning": "くれた〜",
        "meaning": "くれた〜"
      },
      {
        "surface": "작다",
        "base": "작다",
        "language": "ko",
        "shortMeaning": "小さい",
        "meaning": "小さい"
      },
      {
        "surface": "작은",
        "base": "작은",
        "language": "ko",
        "shortMeaning": "小さな〜",
        "meaning": "小さな〜"
      },
      {
        "surface": "기억",
        "base": "기억",
        "language": "ko",
        "shortMeaning": "記憶、思い出",
        "meaning": "記憶、思い出"
      },
      {
        "surface": "하나도",
        "base": "하나도",
        "language": "ko",
        "shortMeaning": "一つも",
        "meaning": "一つも"
      }
    ]
  },
  "오늘도 새겨봅니다": {
    "japanese": "今日も心に刻みます。",
    "literalJapanese": "今日も刻んでみます。",
    "sentenceExplanation": "今日も心に刻みます。",
    "nuance": "忘れないように、相手との記憶を心に刻む。 “기억” と強くつながる表現。",
    "tokens": [
      {
        "surface": "오늘도",
        "base": "오늘도",
        "language": "ko",
        "shortMeaning": "今日も",
        "meaning": "今日も"
      },
      {
        "surface": "새기다",
        "base": "새기다",
        "language": "ko",
        "shortMeaning": "刻む、心に刻む",
        "meaning": "刻む、心に刻む"
      },
      {
        "surface": "새겨보다",
        "base": "새겨보다",
        "language": "ko",
        "shortMeaning": "刻んでみる",
        "meaning": "刻んでみる"
      },
      {
        "surface": "새겨봅니다",
        "base": "새겨봅니다",
        "language": "ko",
        "shortMeaning": "刻んでみます",
        "meaning": "刻んでみます"
      }
    ]
  },
  "내겐 선물인 그댈": {
    "japanese": "私にとって贈り物のようなあなたを。",
    "literalJapanese": "私には贈り物であるあなたを。",
    "sentenceExplanation": "私にとって贈り物のようなあなたを。",
    "nuance": "最後にもう一度、相手を “선물” と呼ぶ。 この曲全体が、相手を大切に心にしまう歌になっている。",
    "tokens": [
      {
        "surface": "내겐",
        "base": "내겐",
        "language": "ko",
        "shortMeaning": "私にとっては",
        "meaning": "私にとっては"
      },
      {
        "surface": "선물인",
        "base": "선물인",
        "language": "ko",
        "shortMeaning": "贈り物である〜",
        "meaning": "贈り物である〜"
      },
      {
        "surface": "그댈",
        "base": "그댈",
        "language": "ko",
        "shortMeaning": "あなたを",
        "meaning": "あなたを"
      }
    ]
  }
};

const lyricsSequence: string[] = [
  "그치지 않기를 바랬죠",
  "처음 그대 내게로 오던 그날에",
  "잠시 동안 적시는",
  "그런 비가 아니길",
  "간절히 난 바래왔었죠",
  "그대도 내 맘 아나요",
  "매일 그대만 그려왔던 나를",
  "오늘도 내 맘에 스며들죠",
  "그대는 선물입니다",
  "하늘이 내려준",
  "홀로 선 세상 속에",
  "그댈 지켜줄게요",
  "어느 날 문득",
  "소나기처럼",
  "내린 그대지만",
  "오늘도 불러 봅니다",
  "내겐 소중한 사람",
  "Oh",
  "떨어지는 빗물이",
  "어느새 날 깨우고",
  "그대 생각에 잠겨요",
  "이제는 내게로 와요",
  "언제나처럼 기다리고 있죠",
  "그대 손을 꼭 잡아줄게요",
  "그대는 선물입니다",
  "하늘이 내려준",
  "홀로 선 세상 속에",
  "그댈 지켜줄게요",
  "어느 날 문득",
  "소나기처럼",
  "내린 그대지만",
  "오늘도 불러 봅니다",
  "내겐 소중한 사람",
  "잊고 싶던 아픈 기억들도",
  "빗방울과 함께 흘려보내면 돼요",
  "때로는 지쳐도",
  "하늘이 흐려도",
  "내가 있다는 걸 잊지 말아요",
  "그대는 사랑입니다",
  "하나뿐인 사랑",
  "다시는 그대와 같은",
  "사랑 없을 테니",
  "잊지 않아요",
  "내게 주었던",
  "작은 기억 하나도",
  "오늘도 새겨봅니다",
  "내겐 선물인 그댈"
];

export const completeSonagiLines: LyricLine[] = lyricsSequence.map((korean, index) => {
  const template = lineTemplates[korean];

  return {
    id: `eclipse-sonagi-line-${index + 1}`,
    korean,
    japanese: template.japanese,
    literalJapanese: template.literalJapanese,
    sentenceExplanation: template.sentenceExplanation,
    ...(template.nuance ? { nuance: template.nuance } : {}),
    tokens: template.tokens.map((token, tokenIndex) => ({
      ...token,
      id: `eclipse-sonagi-line-${index + 1}-token-${tokenIndex + 1}`,
    })),
  };
});

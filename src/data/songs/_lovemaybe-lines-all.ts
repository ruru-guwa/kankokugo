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
  "너와 함께 하고 싶은 일들을 상상하는 게": {
    "japanese": "あなたと一緒にしたいことを想像するのが。",
    "literalJapanese": "あなたと一緒にしたいことを想像することが。",
    "sentenceExplanation": "あなたと一緒にしたいことを想像するのが。",
    "nuance": "まだ実際に一緒に何かをしているというより、 「一緒に行きたい場所」 「一緒に食べたいもの」 「一緒に過ごす時間」 を頭の中で想像している段階。 恋が始まりかけている時の、日常の中の妄想。",
    "tokens": [
      {
        "surface": "너와",
        "base": "너와",
        "language": "ko",
        "shortMeaning": "あなたと",
        "meaning": "あなたと / 너 = あなた / -와 = 〜と"
      },
      {
        "surface": "함께",
        "base": "함께",
        "language": "ko",
        "shortMeaning": "一緒に",
        "meaning": "一緒に"
      },
      {
        "surface": "하다",
        "base": "하다",
        "language": "ko",
        "shortMeaning": "する",
        "meaning": "する"
      },
      {
        "surface": "하고 싶은",
        "base": "하고 싶은",
        "language": "ko",
        "shortMeaning": "したい〜",
        "meaning": "したい〜 / -고 싶다 = 〜したい"
      },
      {
        "surface": "일들",
        "base": "일들",
        "language": "ko",
        "shortMeaning": "こと、物事たち",
        "meaning": "こと、物事たち / 일 = こと、仕事、用事 / -들 = 複数"
      },
      {
        "surface": "상상하다",
        "base": "상상하다",
        "language": "ko",
        "shortMeaning": "想像する",
        "meaning": "想像する"
      },
      {
        "surface": "상상하는 게",
        "base": "상상하는 게",
        "language": "ko",
        "shortMeaning": "想像することが",
        "meaning": "想像することが / 게 = 것이 の縮約"
      }
    ]
  },
  "요즘 내 일상이 되고": {
    "japanese": "最近の私の日常になっている。",
    "literalJapanese": "最近、私の日常になって。",
    "sentenceExplanation": "最近の私の日常になっている。",
    "nuance": "相手のことを考えるのが、特別な時間ではなく、毎日の当たり前になっている。 恋が生活の中に入り込んでいる感じ。",
    "tokens": [
      {
        "surface": "요즘",
        "base": "요즘",
        "language": "ko",
        "shortMeaning": "最近",
        "meaning": "最近"
      },
      {
        "surface": "내",
        "base": "내",
        "language": "ko",
        "shortMeaning": "私の",
        "meaning": "私の"
      },
      {
        "surface": "일상",
        "base": "일상",
        "language": "ko",
        "shortMeaning": "日常",
        "meaning": "日常"
      },
      {
        "surface": "-이",
        "base": "-이",
        "language": "ko",
        "shortMeaning": "〜が",
        "meaning": "〜が"
      },
      {
        "surface": "되다",
        "base": "되다",
        "language": "ko",
        "shortMeaning": "なる",
        "meaning": "なる"
      },
      {
        "surface": "되고",
        "base": "되고",
        "language": "ko",
        "shortMeaning": "なって",
        "meaning": "なって"
      }
    ]
  },
  "너의 즐거워하는 모습을 보고 있으면": {
    "japanese": "あなたが楽しそうにしている姿を見ていると。",
    "literalJapanese": "あなたが楽しそうにしている姿を見ていると。",
    "sentenceExplanation": "あなたが楽しそうにしている姿を見ていると。",
    "nuance": "自分が何かをされているわけではない。 ただ相手が楽しそうなだけで、自分の気持ちも動く。 相手の感情が自分に移ってくるような恋心。",
    "tokens": [
      {
        "surface": "너의",
        "base": "너의",
        "language": "ko",
        "shortMeaning": "あなたの",
        "meaning": "あなたの"
      },
      {
        "surface": "즐겁다",
        "base": "즐겁다",
        "language": "ko",
        "shortMeaning": "楽しい",
        "meaning": "楽しい"
      },
      {
        "surface": "즐거워하다",
        "base": "즐거워하다",
        "language": "ko",
        "shortMeaning": "楽しそうにする、楽しむ",
        "meaning": "楽しそうにする、楽しむ"
      },
      {
        "surface": "즐거워하는",
        "base": "즐거워하는",
        "language": "ko",
        "shortMeaning": "楽しそうにしている〜",
        "meaning": "楽しそうにしている〜"
      },
      {
        "surface": "모습",
        "base": "모습",
        "language": "ko",
        "shortMeaning": "姿、様子",
        "meaning": "姿、様子"
      },
      {
        "surface": "-을",
        "base": "-을",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "보다",
        "base": "보다",
        "language": "ko",
        "shortMeaning": "見る",
        "meaning": "見る"
      },
      {
        "surface": "보고 있다",
        "base": "보고 있다",
        "language": "ko",
        "shortMeaning": "見ている",
        "meaning": "見ている"
      },
      {
        "surface": "보고 있으면",
        "base": "보고 있으면",
        "language": "ko",
        "shortMeaning": "見ていると",
        "meaning": "見ていると / -면 = 〜すると、〜なら"
      }
    ]
  },
  "자연스레 따라 웃고 있는 걸": {
    "japanese": "気づけば自然に、私も笑っている。",
    "literalJapanese": "自然に一緒に笑っているんだ。",
    "sentenceExplanation": "気づけば自然に、私も笑っている。",
    "nuance": "相手の笑顔につられて、自分も笑ってしまう。 恋愛感情の中でもかなり優しい表現。 「相手の幸せが自分の幸せになる」感じ。",
    "tokens": [
      {
        "surface": "자연스레",
        "base": "자연스레",
        "language": "ko",
        "shortMeaning": "自然に、自然と",
        "meaning": "自然に、自然と",
        "explanation": "자연스럽게 と同じ意味。"
      },
      {
        "surface": "따라",
        "base": "따라",
        "language": "ko",
        "shortMeaning": "ついて、一緒に、まねて",
        "meaning": "ついて、一緒に、まねて"
      },
      {
        "surface": "웃다",
        "base": "웃다",
        "language": "ko",
        "shortMeaning": "笑う",
        "meaning": "笑う"
      },
      {
        "surface": "웃고 있다",
        "base": "웃고 있다",
        "language": "ko",
        "shortMeaning": "笑っている",
        "meaning": "笑っている"
      },
      {
        "surface": "있는 걸",
        "base": "있는 걸",
        "language": "ko",
        "shortMeaning": "いるんだ、いるの",
        "meaning": "いるんだ、いるの"
      }
    ]
  },
  "너의 행동에 설레어하고 뒤척이다가": {
    "japanese": "あなたの仕草にときめいて、眠れずに寝返りを打って。",
    "literalJapanese": "あなたの行動にときめいて、寝返りを打って。",
    "sentenceExplanation": "あなたの仕草にときめいて、眠れずに寝返りを打って。",
    "nuance": "相手のちょっとした行動を何度も思い出して眠れない。 恋の初期にありがちな、「あの言葉どういう意味だったんだろう」と考えすぎる状態。",
    "tokens": [
      {
        "surface": "너의",
        "base": "너의",
        "language": "ko",
        "shortMeaning": "あなたの",
        "meaning": "あなたの"
      },
      {
        "surface": "행동",
        "base": "행동",
        "language": "ko",
        "shortMeaning": "行動、仕草",
        "meaning": "行動、仕草"
      },
      {
        "surface": "-에",
        "base": "-에",
        "language": "ko",
        "shortMeaning": "〜に",
        "meaning": "〜に"
      },
      {
        "surface": "설레다",
        "base": "설레다",
        "language": "ko",
        "shortMeaning": "ときめく、胸が高鳴る",
        "meaning": "ときめく、胸が高鳴る"
      },
      {
        "surface": "설레어하다",
        "base": "설레어하다",
        "language": "ko",
        "shortMeaning": "ときめく、胸を高鳴らせる",
        "meaning": "ときめく、胸を高鳴らせる"
      },
      {
        "surface": "뒤척이다",
        "base": "뒤척이다",
        "language": "ko",
        "shortMeaning": "寝返りを打つ、落ち着かず動く",
        "meaning": "寝返りを打つ、落ち着かず動く"
      },
      {
        "surface": "뒤척이다가",
        "base": "뒤척이다가",
        "language": "ko",
        "shortMeaning": "寝返りを打っていて、寝返りを打ちながら",
        "meaning": "寝返りを打っていて、寝返りを打ちながら"
      }
    ]
  },
  "지새운 밤이 많아지는데": {
    "japanese": "眠れないまま朝を迎える夜が増えている。",
    "literalJapanese": "夜を明かした日が多くなっているのに。",
    "sentenceExplanation": "眠れないまま朝を迎える夜が増えている。",
    "nuance": "ただ少し気になる程度ではなく、眠れないほど相手のことを考えている。 この時点でかなり恋に落ちている。",
    "tokens": [
      {
        "surface": "지새우다",
        "base": "지새우다",
        "language": "ko",
        "shortMeaning": "夜を明かす、眠らずに朝を迎える",
        "meaning": "夜を明かす、眠らずに朝を迎える"
      },
      {
        "surface": "지새운",
        "base": "지새운",
        "language": "ko",
        "shortMeaning": "夜を明かした〜",
        "meaning": "夜を明かした〜"
      },
      {
        "surface": "밤",
        "base": "밤",
        "language": "ko",
        "shortMeaning": "夜",
        "meaning": "夜"
      },
      {
        "surface": "-이",
        "base": "-이",
        "language": "ko",
        "shortMeaning": "〜が",
        "meaning": "〜が"
      },
      {
        "surface": "많아지다",
        "base": "많아지다",
        "language": "ko",
        "shortMeaning": "多くなる、増える",
        "meaning": "多くなる、増える"
      },
      {
        "surface": "많아지는데",
        "base": "많아지는데",
        "language": "ko",
        "shortMeaning": "増えているのに、増えているんだけど",
        "meaning": "増えているのに、増えているんだけど"
      }
    ]
  },
  "이건 누가 봐도 사랑일 텐데": {
    "japanese": "これは誰が見ても恋のはずなのに。",
    "literalJapanese": "これは誰が見ても愛のはずなのに。",
    "sentenceExplanation": "これは誰が見ても恋のはずなのに。",
    "nuance": "自分でもかなり分かっている。 「これは恋かも」ではなく、「誰が見ても恋でしょ」という確信に近い。 でもまだ少し照れや迷いがあるので、タイトルは “사랑인가 봐” になっている。",
    "tokens": [
      {
        "surface": "이건",
        "base": "이건",
        "language": "ko",
        "shortMeaning": "이것은 の縮約",
        "meaning": "이것은 の縮約 / これは"
      },
      {
        "surface": "누가",
        "base": "누가",
        "language": "ko",
        "shortMeaning": "誰が",
        "meaning": "誰が"
      },
      {
        "surface": "봐도",
        "base": "봐도",
        "language": "ko",
        "shortMeaning": "見ても",
        "meaning": "見ても / -아/어도 = 〜しても"
      },
      {
        "surface": "사랑",
        "base": "사랑",
        "language": "ko",
        "shortMeaning": "愛、恋",
        "meaning": "愛、恋"
      },
      {
        "surface": "-일 텐데",
        "base": "-일 텐데",
        "language": "ko",
        "shortMeaning": "〜のはずなのに、〜だろうに",
        "meaning": "〜のはずなのに、〜だろうに"
      }
    ]
  },
  "종일 함께면 질릴 텐데": {
    "japanese": "一日中一緒にいたら普通は飽きるはずなのに。",
    "literalJapanese": "一日中一緒なら飽きるはずなのに。",
    "sentenceExplanation": "一日中一緒にいたら普通は飽きるはずなのに。",
    "nuance": "普通ならずっと一緒にいると疲れたり飽きたりする。 でも相手にはそう感じない。 だから「これは恋だ」と気づいていく。",
    "tokens": [
      {
        "surface": "종일",
        "base": "종일",
        "language": "ko",
        "shortMeaning": "一日中",
        "meaning": "一日中"
      },
      {
        "surface": "함께",
        "base": "함께",
        "language": "ko",
        "shortMeaning": "一緒に",
        "meaning": "一緒に"
      },
      {
        "surface": "-면",
        "base": "-면",
        "language": "ko",
        "shortMeaning": "〜なら",
        "meaning": "〜なら"
      },
      {
        "surface": "질리다",
        "base": "질리다",
        "language": "ko",
        "shortMeaning": "飽きる、うんざりする",
        "meaning": "飽きる、うんざりする"
      },
      {
        "surface": "질릴 텐데",
        "base": "질릴 텐데",
        "language": "ko",
        "shortMeaning": "飽きるはずなのに、飽きるだろうに",
        "meaning": "飽きるはずなのに、飽きるだろうに"
      }
    ]
  },
  "나 돌아서도 온통 너인 건": {
    "japanese": "背を向けても、頭の中があなたでいっぱいなのは。",
    "literalJapanese": "私が背を向けても、すべてがあなただということは。",
    "sentenceExplanation": "背を向けても、頭の中があなたでいっぱいなのは。",
    "nuance": "相手と別れたあとも、相手のことばかり考えてしまう。 目の前にいなくても、心の中にはずっといる。 恋の決定的な状態。",
    "tokens": [
      {
        "surface": "나",
        "base": "나",
        "language": "ko",
        "shortMeaning": "私",
        "meaning": "私"
      },
      {
        "surface": "돌아서다",
        "base": "돌아서다",
        "language": "ko",
        "shortMeaning": "背を向ける、振り返って離れる",
        "meaning": "背を向ける、振り返って離れる"
      },
      {
        "surface": "돌아서도",
        "base": "돌아서도",
        "language": "ko",
        "shortMeaning": "背を向けても、離れても",
        "meaning": "背を向けても、離れても"
      },
      {
        "surface": "온통",
        "base": "온통",
        "language": "ko",
        "shortMeaning": "すべて、一面、全部",
        "meaning": "すべて、一面、全部"
      },
      {
        "surface": "너",
        "base": "너",
        "language": "ko",
        "shortMeaning": "あなた",
        "meaning": "あなた"
      },
      {
        "surface": "-인 건",
        "base": "-인 건",
        "language": "ko",
        "shortMeaning": "〜であることは",
        "meaning": "〜であることは"
      }
    ]
  },
  "아무래도 사랑인가 봐": {
    "japanese": "やっぱりこれは恋みたいだ。",
    "literalJapanese": "どうやら愛みたいだ。",
    "sentenceExplanation": "やっぱりこれは恋みたいだ。",
    "nuance": "確信しきっているようで、少し照れもある言い方。 「これは恋だ」と断言するより柔らかい。 自分の気持ちに気づいて、静かに認める感じ。",
    "tokens": [
      {
        "surface": "아무래도",
        "base": "아무래도",
        "language": "ko",
        "shortMeaning": "どうやら、やっぱり、どう考えても",
        "meaning": "どうやら、やっぱり、どう考えても"
      },
      {
        "surface": "사랑",
        "base": "사랑",
        "language": "ko",
        "shortMeaning": "愛、恋",
        "meaning": "愛、恋"
      },
      {
        "surface": "-인가 봐",
        "base": "-인가 봐",
        "language": "ko",
        "shortMeaning": "〜みたいだ、〜のようだ",
        "meaning": "〜みたいだ、〜のようだ"
      }
    ]
  },
  "점점 너와 하고 싶은 일들 생각하면서": {
    "japanese": "少しずつ、あなたとしたいことばかり考えながら。",
    "literalJapanese": "だんだんあなたとしたいことを考えながら。",
    "sentenceExplanation": "少しずつ、あなたとしたいことばかり考えながら。",
    "nuance": "最初は何となくだった想像が、だんだん増えていく。 恋心が大きくなっていく流れ。",
    "tokens": [
      {
        "surface": "점점",
        "base": "점점",
        "language": "ko",
        "shortMeaning": "だんだん、少しずつ",
        "meaning": "だんだん、少しずつ"
      },
      {
        "surface": "너와",
        "base": "너와",
        "language": "ko",
        "shortMeaning": "あなたと",
        "meaning": "あなたと"
      },
      {
        "surface": "하고 싶은 일들",
        "base": "하고 싶은 일들",
        "language": "ko",
        "shortMeaning": "したいことたち",
        "meaning": "したいことたち"
      },
      {
        "surface": "생각하다",
        "base": "생각하다",
        "language": "ko",
        "shortMeaning": "考える、思う",
        "meaning": "考える、思う"
      },
      {
        "surface": "생각하면서",
        "base": "생각하면서",
        "language": "ko",
        "shortMeaning": "考えながら",
        "meaning": "考えながら"
      }
    ]
  },
  "하룰 보낸 날이 많아지는데": {
    "japanese": "一日を過ごす日が増えている。",
    "literalJapanese": "一日を過ごした日が多くなっているのに。",
    "sentenceExplanation": "そんなふうに一日を過ごす日が増えている。",
    "nuance": "相手のことを考えているだけで一日が過ぎる。 恋が生活の中心になっている。",
    "tokens": [
      {
        "surface": "하루",
        "base": "하루",
        "language": "ko",
        "shortMeaning": "一日",
        "meaning": "一日"
      },
      {
        "surface": "하룰",
        "base": "하룰",
        "language": "ko",
        "shortMeaning": "하루를 の縮約",
        "meaning": "하루를 の縮約 / 一日を"
      },
      {
        "surface": "보내다",
        "base": "보내다",
        "language": "ko",
        "shortMeaning": "過ごす、送る",
        "meaning": "過ごす、送る"
      },
      {
        "surface": "보낸",
        "base": "보낸",
        "language": "ko",
        "shortMeaning": "過ごした〜",
        "meaning": "過ごした〜"
      },
      {
        "surface": "날",
        "base": "날",
        "language": "ko",
        "shortMeaning": "日",
        "meaning": "日"
      },
      {
        "surface": "많아지다",
        "base": "많아지다",
        "language": "ko",
        "shortMeaning": "多くなる、増える",
        "meaning": "多くなる、増える"
      }
    ]
  },
  "너의 행복해하는 모습을 보고 있으면": {
    "japanese": "あなたが幸せそうにしている姿を見ていると。",
    "literalJapanese": "あなたが幸せそうにしている姿を見ていると。",
    "sentenceExplanation": "あなたが幸せそうにしている姿を見ていると。",
    "nuance": "前半の “즐거워하는 모습” と似ている。 楽しそうな姿だけでなく、幸せそうな姿を見るだけで自分も幸せになる。 相手中心の感情。",
    "tokens": [
      {
        "surface": "행복하다",
        "base": "행복하다",
        "language": "ko",
        "shortMeaning": "幸せだ",
        "meaning": "幸せだ"
      },
      {
        "surface": "행복해하다",
        "base": "행복해하다",
        "language": "ko",
        "shortMeaning": "幸せそうにする、幸せに感じる",
        "meaning": "幸せそうにする、幸せに感じる"
      },
      {
        "surface": "행복해하는 모습",
        "base": "행복해하는 모습",
        "language": "ko",
        "shortMeaning": "幸せそうにしている姿",
        "meaning": "幸せそうにしている姿"
      },
      {
        "surface": "보고 있으면",
        "base": "보고 있으면",
        "language": "ko",
        "shortMeaning": "見ていると",
        "meaning": "見ていると"
      }
    ]
  },
  "나도 모르게 따라 웃는데": {
    "japanese": "自分でも気づかないうちに、私も笑ってしまう。",
    "literalJapanese": "私も知らないうちに一緒に笑っているのに。",
    "sentenceExplanation": "自分でも気づかないうちに、私も笑ってしまう。",
    "nuance": "意識して笑っているのではなく、自然に笑顔になる。 本当に好きな相手に対する反応。",
    "tokens": [
      {
        "surface": "나도 모르게",
        "base": "나도 모르게",
        "language": "ko",
        "shortMeaning": "自分でも知らないうちに、無意識に",
        "meaning": "自分でも知らないうちに、無意識に / 나도 = 私も / 모르다 = 知らない、分からない"
      },
      {
        "surface": "따라 웃다",
        "base": "따라 웃다",
        "language": "ko",
        "shortMeaning": "つられて笑う、一緒に笑う",
        "meaning": "つられて笑う、一緒に笑う"
      },
      {
        "surface": "웃는데",
        "base": "웃는데",
        "language": "ko",
        "shortMeaning": "笑っているのに、笑うんだけど",
        "meaning": "笑っているのに、笑うんだけど"
      }
    ]
  },
  "이 정도면 알아줄 만하잖아": {
    "japanese": "ここまで来たら、気づいてくれてもいいでしょ。",
    "literalJapanese": "この程度なら分かってくれるに値するじゃない。",
    "sentenceExplanation": "ここまで来たら、気づいてくれてもいいでしょ。",
    "nuance": "自分の好意はかなり分かりやすく出ているはず。 だから相手に「そろそろ気づいてよ」と言っている。 可愛らしいもどかしさ。",
    "tokens": [
      {
        "surface": "이 정도면",
        "base": "이 정도면",
        "language": "ko",
        "shortMeaning": "この程度なら、ここまでなら",
        "meaning": "この程度なら、ここまでなら"
      },
      {
        "surface": "알다",
        "base": "알다",
        "language": "ko",
        "shortMeaning": "分かる、知る",
        "meaning": "分かる、知る"
      },
      {
        "surface": "알아주다",
        "base": "알아주다",
        "language": "ko",
        "shortMeaning": "分かってくれる、認めてくれる",
        "meaning": "分かってくれる、認めてくれる"
      },
      {
        "surface": "-ㄹ 만하다",
        "base": "-ㄹ 만하다",
        "language": "ko",
        "shortMeaning": "〜する価値がある、〜してもよいくらいだ",
        "meaning": "〜する価値がある、〜してもよいくらいだ"
      },
      {
        "surface": "알아줄 만하다",
        "base": "알아줄 만하다",
        "language": "ko",
        "shortMeaning": "気づいてくれてもいい、分かってくれても…",
        "meaning": "気づいてくれてもいい、分かってくれてもいい"
      },
      {
        "surface": "-잖아",
        "base": "-잖아",
        "language": "ko",
        "shortMeaning": "〜じゃない、〜でしょ",
        "meaning": "〜じゃない、〜でしょ"
      }
    ]
  },
  "너도 용기 낼만 하잖아": {
    "japanese": "あなたも勇気を出してくれてもいいでしょ。",
    "literalJapanese": "あなたも勇気を出すに値するじゃない。",
    "sentenceExplanation": "あなたも勇気を出してくれてもいいでしょ。",
    "nuance": "自分だけが気持ちを見せるのではなく、相手にも一歩踏み出してほしい。 告白してほしい、または関係を進めてほしい気持ち。",
    "tokens": [
      {
        "surface": "너도",
        "base": "너도",
        "language": "ko",
        "shortMeaning": "あなたも",
        "meaning": "あなたも"
      },
      {
        "surface": "용기",
        "base": "용기",
        "language": "ko",
        "shortMeaning": "勇気",
        "meaning": "勇気"
      },
      {
        "surface": "내다",
        "base": "내다",
        "language": "ko",
        "shortMeaning": "出す",
        "meaning": "出す"
      },
      {
        "surface": "용기 내다",
        "base": "용기 내다",
        "language": "ko",
        "shortMeaning": "勇気を出す",
        "meaning": "勇気を出す"
      },
      {
        "surface": "낼 만하다",
        "base": "낼 만하다",
        "language": "ko",
        "shortMeaning": "出してもいい、出す価値がある",
        "meaning": "出してもいい、出す価値がある"
      },
      {
        "surface": "하잖아",
        "base": "하잖아",
        "language": "ko",
        "shortMeaning": "〜じゃない",
        "meaning": "〜じゃない"
      }
    ]
  },
  "나만 이런 게 아니라면": {
    "japanese": "もし私だけがこんな気持ちじゃないのなら。",
    "literalJapanese": "私だけがこうなのではないなら。",
    "sentenceExplanation": "もし私だけがこんな気持ちじゃないのなら。",
    "nuance": "相手も同じ気持ちなら、という条件。 自分だけの片思いかもしれない不安がまだある。",
    "tokens": [
      {
        "surface": "나만",
        "base": "나만",
        "language": "ko",
        "shortMeaning": "私だけ",
        "meaning": "私だけ"
      },
      {
        "surface": "이런",
        "base": "이런",
        "language": "ko",
        "shortMeaning": "こんな",
        "meaning": "こんな"
      },
      {
        "surface": "게",
        "base": "게",
        "language": "ko",
        "shortMeaning": "것이",
        "meaning": "것이 / ことが"
      },
      {
        "surface": "아니다",
        "base": "아니다",
        "language": "ko",
        "shortMeaning": "違う、〜ではない",
        "meaning": "違う、〜ではない"
      },
      {
        "surface": "아니라면",
        "base": "아니라면",
        "language": "ko",
        "shortMeaning": "〜ではないなら",
        "meaning": "〜ではないなら"
      }
    ]
  },
  "우리 만나볼 만하잖아": {
    "japanese": "私たち、付き合ってみてもいいんじゃない？",
    "literalJapanese": "私たち、付き合ってみるに値するじゃない。",
    "sentenceExplanation": "私たち、付き合ってみてもいいんじゃない？",
    "nuance": "かなり大事。 ここで恋を自覚するだけでなく、関係を進めたい気持ちが出る。 ただし強い告白ではなく、柔らかく提案する感じ。",
    "tokens": [
      {
        "surface": "우리",
        "base": "우리",
        "language": "ko",
        "shortMeaning": "私たち",
        "meaning": "私たち"
      },
      {
        "surface": "만나다",
        "base": "만나다",
        "language": "ko",
        "shortMeaning": "会う、付き合う",
        "meaning": "会う、付き合う",
        "explanation": "韓国語で “만나다” は文脈によって「交際する」の意味にもなる。"
      },
      {
        "surface": "만나보다",
        "base": "만나보다",
        "language": "ko",
        "shortMeaning": "会ってみる、付き合ってみる",
        "meaning": "会ってみる、付き合ってみる"
      },
      {
        "surface": "만하잖아",
        "base": "만하잖아",
        "language": "ko",
        "shortMeaning": "〜する価値があるじゃない、〜してもいい…",
        "meaning": "〜する価値があるじゃない、〜してもいいじゃない"
      }
    ]
  }
};

const lyricsSequence: string[] = [
  "너와 함께 하고 싶은 일들을 상상하는 게",
  "요즘 내 일상이 되고",
  "너의 즐거워하는 모습을 보고 있으면",
  "자연스레 따라 웃고 있는 걸",
  "너의 행동에 설레어하고 뒤척이다가",
  "지새운 밤이 많아지는데",
  "이건 누가 봐도 사랑일 텐데",
  "종일 함께면 질릴 텐데",
  "나 돌아서도 온통 너인 건",
  "아무래도 사랑인가 봐",
  "점점 너와 하고 싶은 일들 생각하면서",
  "하룰 보낸 날이 많아지는데",
  "이건 누가 봐도 사랑일 텐데",
  "종일 함께면 질릴 텐데",
  "나 돌아서도 온통 너인 건",
  "아무래도 사랑인가 봐",
  "너의 행복해하는 모습을 보고 있으면",
  "나도 모르게 따라 웃는데",
  "이 정도면 알아줄 만하잖아",
  "너도 용기 낼만 하잖아",
  "나만 이런 게 아니라면",
  "우리 만나볼 만하잖아",
  "아무래도 사랑인가 봐"
];

export const completeLoveMaybeLines: LyricLine[] = lyricsSequence.map((korean, index) => {
  const template = lineTemplates[korean];

  return {
    id: `melomance-love-maybe-line-${index + 1}`,
    korean,
    japanese: template.japanese,
    literalJapanese: template.literalJapanese,
    sentenceExplanation: template.sentenceExplanation,
    ...(template.nuance ? { nuance: template.nuance } : {}),
    tokens: template.tokens.map((token, tokenIndex) => ({
      ...token,
      id: `melomance-love-maybe-line-${index + 1}-token-${tokenIndex + 1}`,
    })),
  };
});

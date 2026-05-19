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
  "같아 보일 수가 없어 난": {
    "japanese": "私は他の誰かと同じには見えない。",
    "literalJapanese": "同じように見えることはできない、私は。",
    "sentenceExplanation": "自分は量産型ではなく、明らかに違う存在だという強気な始まり。 IVEらしい「私は格が違う」という自己確信。",
    "nuance": "自分は量産型ではなく、明らかに違う存在だという強気な始まり。 IVEらしい「私は格が違う」という自己確信。",
    "tokens": [
      {
        "surface": "같다",
        "base": "같다",
        "language": "ko",
        "shortMeaning": "同じだ、似ている",
        "meaning": "同じだ、似ている"
      },
      {
        "surface": "보이다",
        "base": "보이다",
        "language": "ko",
        "shortMeaning": "見える",
        "meaning": "見える"
      },
      {
        "surface": "같아 보이다",
        "base": "같아 보이다",
        "language": "ko",
        "shortMeaning": "同じに見える、似て見える",
        "meaning": "同じに見える、似て見える"
      },
      {
        "surface": "-ㄹ 수가 없다",
        "base": "-ㄹ 수가 없다",
        "language": "ko",
        "shortMeaning": "〜することができない、絶対に〜できない",
        "meaning": "〜することができない、絶対に〜できない"
      },
      {
        "surface": "난",
        "base": "난",
        "language": "ko",
        "shortMeaning": "나는 の縮約",
        "meaning": "나는 の縮約 / 私は"
      }
    ]
  },
  "걷힌 베일 속에 당찬 smile": {
    "japanese": "ベールが外れたその奥には、堂々とした笑顔。",
    "literalJapanese": "めくれたベールの中に、堂々とした笑み。",
    "sentenceExplanation": "隠れていた本当の姿が見える場面。 可愛いだけではなく、堂々として強い本性が現れる。",
    "nuance": "隠れていた本当の姿が見える場面。 可愛いだけではなく、堂々として強い本性が現れる。",
    "tokens": [
      {
        "surface": "걷히다",
        "base": "걷히다",
        "language": "ko",
        "shortMeaning": "取り払われる、めくれる",
        "meaning": "取り払われる、めくれる"
      },
      {
        "surface": "걷힌",
        "base": "걷힌",
        "language": "ko",
        "shortMeaning": "取り払われた〜、めくれた〜",
        "meaning": "取り払われた〜、めくれた〜"
      },
      {
        "surface": "베일",
        "base": "베일",
        "language": "ko",
        "shortMeaning": "ベール",
        "meaning": "ベール"
      },
      {
        "surface": "속",
        "base": "속",
        "language": "ko",
        "shortMeaning": "中、奥",
        "meaning": "中、奥"
      },
      {
        "surface": "당차다",
        "base": "당차다",
        "language": "ko",
        "shortMeaning": "堂々としている、しっかりしている、気が…",
        "meaning": "堂々としている、しっかりしている、気が強い"
      },
      {
        "surface": "당찬",
        "base": "당찬",
        "language": "ko",
        "shortMeaning": "堂々とした〜",
        "meaning": "堂々とした〜"
      },
      {
        "surface": "smile",
        "base": "smile",
        "language": "en",
        "shortMeaning": "笑み",
        "meaning": "笑み"
      }
    ]
  },
  "Better watch out baby, I bite": {
    "japanese": "気をつけて、baby。私は甘くない。",
    "literalJapanese": "気をつけて、baby、私は噛む。",
    "sentenceExplanation": "見た目で甘く見ていると痛い目を見るという警告。 “bite” は、反撃する・危険性があるという意味で使われている。",
    "nuance": "見た目で甘く見ていると痛い目を見るという警告。 “bite” は、反撃する・危険性があるという意味で使われている。",
    "tokens": [
      {
        "surface": "Better watch out",
        "base": "Better watch out",
        "language": "en",
        "shortMeaning": "気をつけた方がいい",
        "meaning": "気をつけた方がいい"
      },
      {
        "surface": "I bite",
        "base": "I bite",
        "language": "en",
        "shortMeaning": "私は噛む",
        "meaning": "私は噛む"
      }
    ]
  },
  "Hold up 날 예의주시 해": {
    "japanese": "待って、私から目を離さないで。",
    "literalJapanese": "待って、私を注意深く見て。",
    "sentenceExplanation": "自分の動き・表情・変化をよく見ておけという強い自信。 相手に警戒を促している。",
    "nuance": "自分の動き・表情・変化をよく見ておけという強い自信。 相手に警戒を促している。",
    "tokens": [
      {
        "surface": "Hold up",
        "base": "Hold up",
        "language": "en",
        "shortMeaning": "待って、止まって",
        "meaning": "待って、止まって"
      },
      {
        "surface": "날",
        "base": "날",
        "language": "ko",
        "shortMeaning": "나를 の縮約",
        "meaning": "나를 の縮約 / 私を"
      },
      {
        "surface": "예의주시하다",
        "base": "예의주시하다",
        "language": "ko",
        "shortMeaning": "注意深く見守る、注視する",
        "meaning": "注意深く見守る、注視する / 예의 = 注意、慎重さ / 주시하다 = 注視する"
      },
      {
        "surface": "해",
        "base": "해",
        "language": "ko",
        "shortMeaning": "して",
        "meaning": "して"
      }
    ]
  },
  "가볍게 뱉던 네 말 in goody bag": {
    "japanese": "軽い気持ちで投げたあなたの言葉も、全部こっちで回収済み。",
    "literalJapanese": "軽く吐いていたあなたの言葉、goody bagの中に。",
    "sentenceExplanation": "相手が軽く言った悪口・批判・挑発も、語り手は全部拾っている。 “goody bag” に入れるように、相手の言葉を材料として持ち帰る感じ。",
    "nuance": "相手が軽く言った悪口・批判・挑発も、語り手は全部拾っている。 “goody bag” に入れるように、相手の言葉を材料として持ち帰る感じ。",
    "tokens": [
      {
        "surface": "가볍게",
        "base": "가볍게",
        "language": "ko",
        "shortMeaning": "軽く、軽率に",
        "meaning": "軽く、軽率に"
      },
      {
        "surface": "뱉다",
        "base": "뱉다",
        "language": "ko",
        "shortMeaning": "吐く、吐き出す",
        "meaning": "吐く、吐き出す"
      },
      {
        "surface": "뱉던",
        "base": "뱉던",
        "language": "ko",
        "shortMeaning": "吐いていた〜、言っていた〜",
        "meaning": "吐いていた〜、言っていた〜"
      },
      {
        "surface": "네",
        "base": "네",
        "language": "ko",
        "shortMeaning": "あなたの",
        "meaning": "あなたの"
      },
      {
        "surface": "말",
        "base": "말",
        "language": "ko",
        "shortMeaning": "言葉",
        "meaning": "言葉"
      },
      {
        "surface": "goody bag",
        "base": "goody bag",
        "language": "en",
        "shortMeaning": "おみやげ袋、持ち帰り用の袋",
        "meaning": "おみやげ袋、持ち帰り用の袋"
      }
    ]
  },
  "Ain't no show and tell,": {
    "japanese": "見せびらかすだけの遊びじゃない。",
    "literalJapanese": "これは見せて説明するものではない。",
    "sentenceExplanation": "ただ見た目でアピールしているだけではない。 実力で分からせるという流れ。",
    "nuance": "ただ見た目でアピールしているだけではない。 実力で分からせるという流れ。",
    "tokens": [
      {
        "surface": "Ain't no",
        "base": "Ain't no",
        "language": "en",
        "shortMeaning": "〜なんかじゃない、〜ではない",
        "meaning": "〜なんかじゃない、〜ではない"
      },
      {
        "surface": "show and tell",
        "base": "show and tell",
        "language": "en",
        "shortMeaning": "見せて説明する発表、見せびらかし",
        "meaning": "見せて説明する発表、見せびらかし"
      }
    ]
  },
  "You don't know me like that": {
    "japanese": "あなたは私のことを分かった気になっているだけ。",
    "literalJapanese": "あなたは私をそんなふうには知らない。",
    "sentenceExplanation": "相手は語り手を浅く見ている。 でも本当の強さや本質は分かっていない。",
    "nuance": "相手は語り手を浅く見ている。 でも本当の強さや本質は分かっていない。",
    "tokens": [
      {
        "surface": "You don't know me",
        "base": "You don't know me",
        "language": "en",
        "shortMeaning": "あなたは私を知らない",
        "meaning": "あなたは私を知らない"
      },
      {
        "surface": "like that",
        "base": "like that",
        "language": "en",
        "shortMeaning": "そんなふうには",
        "meaning": "そんなふうには"
      }
    ]
  },
  "눈을 맞출 때 이미 다른 my 클래스": {
    "japanese": "目が合った時点で、私の格が違うと分かる。",
    "literalJapanese": "目を合わせる時、すでに違う私のクラス。",
    "sentenceExplanation": "説明しなくても、目が合えばレベルの違いが分かるという自信。 “클래스가 다르다” は「格が違う」という意味でよく使われる。",
    "nuance": "説明しなくても、目が合えばレベルの違いが分かるという自信。 “클래스가 다르다” は「格が違う」という意味でよく使われる。",
    "tokens": [
      {
        "surface": "눈",
        "base": "눈",
        "language": "ko",
        "shortMeaning": "目",
        "meaning": "目"
      },
      {
        "surface": "맞추다",
        "base": "맞추다",
        "language": "ko",
        "shortMeaning": "合わせる",
        "meaning": "合わせる"
      },
      {
        "surface": "눈을 맞추다",
        "base": "눈을 맞추다",
        "language": "ko",
        "shortMeaning": "目を合わせる",
        "meaning": "目を合わせる"
      },
      {
        "surface": "때",
        "base": "때",
        "language": "ko",
        "shortMeaning": "時",
        "meaning": "時"
      },
      {
        "surface": "이미",
        "base": "이미",
        "language": "ko",
        "shortMeaning": "すでに",
        "meaning": "すでに"
      },
      {
        "surface": "다르다",
        "base": "다르다",
        "language": "ko",
        "shortMeaning": "違う",
        "meaning": "違う"
      },
      {
        "surface": "다른",
        "base": "다른",
        "language": "ko",
        "shortMeaning": "違う〜",
        "meaning": "違う〜"
      },
      {
        "surface": "클래스",
        "base": "클래스",
        "language": "ko",
        "shortMeaning": "class",
        "meaning": "class / 格、レベル"
      }
    ]
  },
  "턱 끝을 당겨 이제": {
    "japanese": "さあ、あごを引いて構えて。",
    "literalJapanese": "あご先を引いて、今。",
    "sentenceExplanation": "ボクシングの構え。 戦いが始まる前の緊張感。",
    "nuance": "ボクシングの構え。 戦いが始まる前の緊張感。",
    "tokens": [
      {
        "surface": "턱",
        "base": "턱",
        "language": "ko",
        "shortMeaning": "あご",
        "meaning": "あご"
      },
      {
        "surface": "끝",
        "base": "끝",
        "language": "ko",
        "shortMeaning": "先",
        "meaning": "先"
      },
      {
        "surface": "턱 끝",
        "base": "턱 끝",
        "language": "ko",
        "shortMeaning": "あご先",
        "meaning": "あご先"
      },
      {
        "surface": "당기다",
        "base": "당기다",
        "language": "ko",
        "shortMeaning": "引く",
        "meaning": "引く"
      },
      {
        "surface": "당겨",
        "base": "당겨",
        "language": "ko",
        "shortMeaning": "引いて",
        "meaning": "引いて"
      },
      {
        "surface": "이제",
        "base": "이제",
        "language": "ko",
        "shortMeaning": "さあ、今",
        "meaning": "さあ、今"
      }
    ]
  },
  "놀란 널 가둔 eyes": {
    "japanese": "驚くあなたを、私の視線で捕らえる。",
    "literalJapanese": "驚いたあなたを閉じ込めた目。",
    "sentenceExplanation": "視線だけで相手を圧倒する感じ。 相手は語り手の目から逃げられない。",
    "nuance": "視線だけで相手を圧倒する感じ。 相手は語り手の目から逃げられない。",
    "tokens": [
      {
        "surface": "놀라다",
        "base": "놀라다",
        "language": "ko",
        "shortMeaning": "驚く",
        "meaning": "驚く"
      },
      {
        "surface": "놀란",
        "base": "놀란",
        "language": "ko",
        "shortMeaning": "驚いた〜",
        "meaning": "驚いた〜"
      },
      {
        "surface": "널",
        "base": "널",
        "language": "ko",
        "shortMeaning": "너를",
        "meaning": "너를 / あなたを"
      },
      {
        "surface": "가두다",
        "base": "가두다",
        "language": "ko",
        "shortMeaning": "閉じ込める",
        "meaning": "閉じ込める"
      },
      {
        "surface": "가둔",
        "base": "가둔",
        "language": "ko",
        "shortMeaning": "閉じ込めた〜",
        "meaning": "閉じ込めた〜"
      },
      {
        "surface": "eyes",
        "base": "eyes",
        "language": "en",
        "shortMeaning": "目、視線",
        "meaning": "目、視線"
      }
    ]
  },
  "힘껏 내 지른 fire": {
    "japanese": "全力で放つ私の炎。",
    "literalJapanese": "力いっぱい私が放った火。",
    "sentenceExplanation": "怒り・情熱・攻撃性を炎として出している。 パンチにも、叫びにも、存在感にも見える。",
    "nuance": "怒り・情熱・攻撃性を炎として出している。 パンチにも、叫びにも、存在感にも見える。",
    "tokens": [
      {
        "surface": "힘껏",
        "base": "힘껏",
        "language": "ko",
        "shortMeaning": "力いっぱい、全力で",
        "meaning": "力いっぱい、全力で"
      },
      {
        "surface": "내지르다",
        "base": "내지르다",
        "language": "ko",
        "shortMeaning": "叫ぶ、突き出す、放つ",
        "meaning": "叫ぶ、突き出す、放つ"
      },
      {
        "surface": "내 지른",
        "base": "내 지른",
        "language": "ko",
        "shortMeaning": "放った〜、吐き出した〜",
        "meaning": "放った〜、吐き出した〜"
      },
      {
        "surface": "fire",
        "base": "fire",
        "language": "en",
        "shortMeaning": "火、炎",
        "meaning": "火、炎"
      }
    ]
  },
  "절대 넌 못 피해 날": {
    "japanese": "あなたは絶対に私から逃げられない。",
    "literalJapanese": "絶対にあなたは私を避けられない。",
    "sentenceExplanation": "相手に逃げ場はない。 自分の攻撃・存在感・勝負から逃れられないという宣言。",
    "nuance": "相手に逃げ場はない。 自分の攻撃・存在感・勝負から逃れられないという宣言。",
    "tokens": [
      {
        "surface": "절대",
        "base": "절대",
        "language": "ko",
        "shortMeaning": "絶対に",
        "meaning": "絶対に"
      },
      {
        "surface": "넌",
        "base": "넌",
        "language": "ko",
        "shortMeaning": "너는",
        "meaning": "너는 / あなたは"
      },
      {
        "surface": "못",
        "base": "못",
        "language": "ko",
        "shortMeaning": "〜できない",
        "meaning": "〜できない"
      },
      {
        "surface": "피하다",
        "base": "피하다",
        "language": "ko",
        "shortMeaning": "避ける、逃れる",
        "meaning": "避ける、逃れる"
      },
      {
        "surface": "피해",
        "base": "피해",
        "language": "ko",
        "shortMeaning": "避ける",
        "meaning": "避ける"
      },
      {
        "surface": "날",
        "base": "날",
        "language": "ko",
        "shortMeaning": "나를",
        "meaning": "나를 / 私を"
      }
    ]
  },
  "Cuz ima TKO": {
    "japanese": "だって私はTKO級の存在。",
    "literalJapanese": "だって私はTKO。",
    "sentenceExplanation": "「私は相手を戦えなくするほど強い」という意味。 単なる勝利ではなく、圧倒的に打ち負かすイメージ。",
    "nuance": "「私は相手を戦えなくするほど強い」という意味。 単なる勝利ではなく、圧倒的に打ち負かすイメージ。",
    "tokens": [
      {
        "surface": "Cuz",
        "base": "Cuz",
        "language": "en",
        "shortMeaning": "because",
        "meaning": "because / なぜなら"
      },
      {
        "surface": "ima",
        "base": "ima",
        "language": "en",
        "shortMeaning": "I'm a のくだけた表記",
        "meaning": "I'm a のくだけた表記"
      },
      {
        "surface": "TKO",
        "base": "TKO",
        "language": "en",
        "shortMeaning": "Technical Knockout",
        "meaning": "Technical Knockout"
      }
    ]
  },
  "뻔한 네 머릿속": {
    "japanese": "単純で読めきったあなたの考え。",
    "literalJapanese": "ありきたりなあなたの頭の中。",
    "sentenceExplanation": "相手の考えや狙いは全部読めている。 語り手の方が一枚上手。",
    "nuance": "相手の考えや狙いは全部読めている。 語り手の方が一枚上手。",
    "tokens": [
      {
        "surface": "뻔하다",
        "base": "뻔하다",
        "language": "ko",
        "shortMeaning": "明らかだ、見え透いている、ありきたりだ",
        "meaning": "明らかだ、見え透いている、ありきたりだ"
      },
      {
        "surface": "뻔한",
        "base": "뻔한",
        "language": "ko",
        "shortMeaning": "見え透いた〜、ありきたりな〜",
        "meaning": "見え透いた〜、ありきたりな〜"
      },
      {
        "surface": "네",
        "base": "네",
        "language": "ko",
        "shortMeaning": "あなたの",
        "meaning": "あなたの"
      },
      {
        "surface": "머릿속",
        "base": "머릿속",
        "language": "ko",
        "shortMeaning": "頭の中",
        "meaning": "頭の中 / 머리 = 頭 / 속 = 中"
      }
    ]
  },
  "믿다 다쳐 넌 큰 코": {
    "japanese": "甘く見ていたら痛い目を見るよ。",
    "literalJapanese": "信じて怪我をする、あなたは大きな鼻。",
    "sentenceExplanation": "큰 코 は直訳では「大きな鼻」だが、ここでは慣用句 “큰코다치다” を分けた表現。 「油断すると痛い目を見る」という警告。",
    "nuance": "큰 코 は直訳では「大きな鼻」だが、ここでは慣用句 “큰코다치다” を分けた表現。 「油断すると痛い目を見る」という警告。",
    "tokens": [
      {
        "surface": "믿다",
        "base": "믿다",
        "language": "ko",
        "shortMeaning": "信じる",
        "meaning": "信じる"
      },
      {
        "surface": "다치다",
        "base": "다치다",
        "language": "ko",
        "shortMeaning": "怪我をする、傷つく",
        "meaning": "怪我をする、傷つく"
      },
      {
        "surface": "다쳐",
        "base": "다쳐",
        "language": "ko",
        "shortMeaning": "怪我をする",
        "meaning": "怪我をする"
      },
      {
        "surface": "넌",
        "base": "넌",
        "language": "ko",
        "shortMeaning": "あなたは",
        "meaning": "あなたは"
      },
      {
        "surface": "큰 코",
        "base": "큰 코",
        "language": "ko",
        "shortMeaning": "大きな鼻",
        "meaning": "大きな鼻 / 韓国語表現で “큰코다치다” = ひどい目に遭う、痛い目を見る。"
      }
    ]
  },
  "I'm bad to the bad to the, bone": {
    "japanese": "私は芯まで強くて危険。",
    "literalJapanese": "私は骨まで悪い。",
    "sentenceExplanation": "「悪い」というより、強くて危険で手に負えない存在という自称。 自己演出としての baddie 感。",
    "nuance": "「悪い」というより、強くて危険で手に負えない存在という自称。 自己演出としての baddie 感。",
    "tokens": [
      {
        "surface": "bad to the bone",
        "base": "bad to the bone",
        "language": "en",
        "shortMeaning": "骨の髄まで悪い、根っからワル",
        "meaning": "骨の髄まで悪い、根っからワル"
      }
    ]
  },
  "쉽게 놀린 네 손": {
    "japanese": "軽々しく手を出したあなた。",
    "literalJapanese": "軽く動かしたあなたの手。",
    "sentenceExplanation": "相手が軽い気持ちでちょっかいを出した、挑発した感じ。 その軽率さを咎めている。",
    "nuance": "相手が軽い気持ちでちょっかいを出した、挑発した感じ。 その軽率さを咎めている。",
    "tokens": [
      {
        "surface": "쉽게",
        "base": "쉽게",
        "language": "ko",
        "shortMeaning": "簡単に、軽々しく",
        "meaning": "簡単に、軽々しく"
      },
      {
        "surface": "놀리다",
        "base": "놀리다",
        "language": "ko",
        "shortMeaning": "動かす、からかう、弄ぶ",
        "meaning": "動かす、からかう、弄ぶ",
        "explanation": "ここでは「軽く動かした」「軽々しく手を出した」の感じ。"
      },
      {
        "surface": "놀린",
        "base": "놀린",
        "language": "ko",
        "shortMeaning": "動かした〜、弄んだ〜",
        "meaning": "動かした〜、弄んだ〜"
      },
      {
        "surface": "네 손",
        "base": "네 손",
        "language": "ko",
        "shortMeaning": "あなたの手",
        "meaning": "あなたの手"
      }
    ]
  },
  "전부 부숴 난 네 플롯": {
    "japanese": "あなたの描いた筋書きなんて、全部壊してやる。",
    "literalJapanese": "全部壊す、私はあなたの筋書きを。",
    "sentenceExplanation": "相手が語り手を操ろうとしても、その計算やシナリオを壊す。 自分は相手の筋書き通りには動かない。",
    "nuance": "相手が語り手を操ろうとしても、その計算やシナリオを壊す。 自分は相手の筋書き通りには動かない。",
    "tokens": [
      {
        "surface": "전부",
        "base": "전부",
        "language": "ko",
        "shortMeaning": "全部",
        "meaning": "全部"
      },
      {
        "surface": "부수다",
        "base": "부수다",
        "language": "ko",
        "shortMeaning": "壊す",
        "meaning": "壊す"
      },
      {
        "surface": "부숴",
        "base": "부숴",
        "language": "ko",
        "shortMeaning": "壊す",
        "meaning": "壊す"
      },
      {
        "surface": "난",
        "base": "난",
        "language": "ko",
        "shortMeaning": "私は",
        "meaning": "私は"
      },
      {
        "surface": "네",
        "base": "네",
        "language": "ko",
        "shortMeaning": "あなたの",
        "meaning": "あなたの"
      },
      {
        "surface": "플롯",
        "base": "플롯",
        "language": "ko",
        "shortMeaning": "plot",
        "meaning": "plot / 筋書き、計画"
      }
    ]
  },
  "Let them know TKO": {
    "japanese": "みんなに分からせる、これがTKO。",
    "literalJapanese": "彼らにTKOを知らせて。",
    "sentenceExplanation": "相手だけでなく、周囲にも自分の強さを見せつける。",
    "nuance": "相手だけでなく、周囲にも自分の強さを見せつける。",
    "tokens": [
      {
        "surface": "let them know",
        "base": "let them know",
        "language": "en",
        "shortMeaning": "彼らに知らせる、分からせる",
        "meaning": "彼らに知らせる、分からせる"
      }
    ]
  },
  "하얗게 번진 스모크": {
    "japanese": "白く広がる煙の中で。",
    "literalJapanese": "白く広がった煙。",
    "sentenceExplanation": "戦いの後、パンチや爆発の後の煙。 TKOの衝撃で場が白く霞むような演出。",
    "nuance": "戦いの後、パンチや爆発の後の煙。 TKOの衝撃で場が白く霞むような演出。",
    "tokens": [
      {
        "surface": "하얗다",
        "base": "하얗다",
        "language": "ko",
        "shortMeaning": "白い",
        "meaning": "白い"
      },
      {
        "surface": "하얗게",
        "base": "하얗게",
        "language": "ko",
        "shortMeaning": "白く",
        "meaning": "白く"
      },
      {
        "surface": "번지다",
        "base": "번지다",
        "language": "ko",
        "shortMeaning": "広がる、にじむ",
        "meaning": "広がる、にじむ"
      },
      {
        "surface": "번진",
        "base": "번진",
        "language": "ko",
        "shortMeaning": "広がった〜",
        "meaning": "広がった〜"
      },
      {
        "surface": "스모크",
        "base": "스모크",
        "language": "ko",
        "shortMeaning": "smoke",
        "meaning": "smoke / 煙"
      }
    ]
  },
  "So hot but the ice so cold": {
    "japanese": "熱いのに、氷のように冷たい。",
    "literalJapanese": "とても熱い、でも氷はとても冷たい。",
    "sentenceExplanation": "情熱的で強烈だが、同時に冷静でクール。 火と氷の二面性を表している。",
    "nuance": "情熱的で強烈だが、同時に冷静でクール。 火と氷の二面性を表している。",
    "tokens": [
      {
        "surface": "hot",
        "base": "hot",
        "language": "en",
        "shortMeaning": "熱い、強烈な、魅力的な",
        "meaning": "熱い、強烈な、魅力的な"
      },
      {
        "surface": "ice",
        "base": "ice",
        "language": "en",
        "shortMeaning": "氷",
        "meaning": "氷"
      },
      {
        "surface": "cold",
        "base": "cold",
        "language": "en",
        "shortMeaning": "冷たい",
        "meaning": "冷たい"
      }
    ]
  },
  "Float like a butterfly sting like a bee": {
    "japanese": "蝶のように軽やかに舞い、蜂のように鋭く刺す。",
    "literalJapanese": "蝶のように舞い、蜂のように刺す。",
    "sentenceExplanation": "ボクシングの有名な表現。 軽やかなフットワークと鋭い攻撃を表す。 この曲では、かわしながら正確に打ち込む強さ。",
    "nuance": "ボクシングの有名な表現。 軽やかなフットワークと鋭い攻撃を表す。 この曲では、かわしながら正確に打ち込む強さ。",
    "tokens": [
      {
        "surface": "float",
        "base": "float",
        "language": "en",
        "shortMeaning": "浮かぶ、軽やかに動く",
        "meaning": "浮かぶ、軽やかに動く"
      },
      {
        "surface": "butterfly",
        "base": "butterfly",
        "language": "en",
        "shortMeaning": "蝶",
        "meaning": "蝶"
      },
      {
        "surface": "sting",
        "base": "sting",
        "language": "en",
        "shortMeaning": "刺す",
        "meaning": "刺す"
      },
      {
        "surface": "bee",
        "base": "bee",
        "language": "en",
        "shortMeaning": "蜂",
        "meaning": "蜂"
      }
    ]
  },
  "비뚤어진 네 관심은 허니": {
    "japanese": "歪んだあなたの関心なんて、甘い蜜みたいなもの。",
    "literalJapanese": "歪んだあなたの関心はハニー。",
    "sentenceExplanation": "相手の悪意ある関心・ひねくれた注目すら、自分の力に変える感じ。 アンチの視線も栄養にするような強さ。",
    "nuance": "相手の悪意ある関心・ひねくれた注目すら、自分の力に変える感じ。 アンチの視線も栄養にするような強さ。",
    "tokens": [
      {
        "surface": "비뚤어지다",
        "base": "비뚤어지다",
        "language": "ko",
        "shortMeaning": "歪む、曲がる、ひねくれる",
        "meaning": "歪む、曲がる、ひねくれる"
      },
      {
        "surface": "비뚤어진",
        "base": "비뚤어진",
        "language": "ko",
        "shortMeaning": "歪んだ〜",
        "meaning": "歪んだ〜"
      },
      {
        "surface": "네",
        "base": "네",
        "language": "ko",
        "shortMeaning": "あなたの",
        "meaning": "あなたの"
      },
      {
        "surface": "관심",
        "base": "관심",
        "language": "ko",
        "shortMeaning": "関心、興味",
        "meaning": "関心、興味"
      },
      {
        "surface": "허니",
        "base": "허니",
        "language": "ko",
        "shortMeaning": "honey",
        "meaning": "honey / 蜜、甘いもの"
      }
    ]
  },
  "여유로운 스트레이트 꽂아 넣어 깊이": {
    "japanese": "余裕たっぷりのストレートを、深く打ち込む。",
    "literalJapanese": "余裕のあるストレートを深く差し込む。",
    "sentenceExplanation": "焦らず冷静に、でも鋭く一撃を入れる。 実力差がある感じ。",
    "nuance": "焦らず冷静に、でも鋭く一撃を入れる。 実力差がある感じ。",
    "tokens": [
      {
        "surface": "여유롭다",
        "base": "여유롭다",
        "language": "ko",
        "shortMeaning": "余裕がある",
        "meaning": "余裕がある"
      },
      {
        "surface": "여유로운",
        "base": "여유로운",
        "language": "ko",
        "shortMeaning": "余裕のある〜",
        "meaning": "余裕のある〜"
      },
      {
        "surface": "스트레이트",
        "base": "스트레이트",
        "language": "ko",
        "shortMeaning": "straight",
        "meaning": "straight / ストレートパンチ"
      },
      {
        "surface": "꽂다",
        "base": "꽂다",
        "language": "ko",
        "shortMeaning": "差し込む、突き刺す",
        "meaning": "差し込む、突き刺す"
      },
      {
        "surface": "꽂아 넣다",
        "base": "꽂아 넣다",
        "language": "ko",
        "shortMeaning": "差し込む、打ち込む",
        "meaning": "差し込む、打ち込む"
      },
      {
        "surface": "깊이",
        "base": "깊이",
        "language": "ko",
        "shortMeaning": "深く",
        "meaning": "深く"
      }
    ]
  },
  "Hello haters, Imma blow you a kiss": {
    "japanese": "やあ、アンチたち。余裕で投げキスしてあげる。",
    "literalJapanese": "こんにちはアンチたち、私はあなたたちにキスを飛ばす。",
    "sentenceExplanation": "アンチに怒るのではなく、余裕でかわす。 攻撃されても動じない態度。",
    "nuance": "アンチに怒るのではなく、余裕でかわす。 攻撃されても動じない態度。",
    "tokens": [
      {
        "surface": "haters",
        "base": "haters",
        "language": "en",
        "shortMeaning": "アンチ、悪口を言う人たち",
        "meaning": "アンチ、悪口を言う人たち"
      },
      {
        "surface": "blow a kiss",
        "base": "blow a kiss",
        "language": "en",
        "shortMeaning": "投げキスをする",
        "meaning": "投げキスをする"
      }
    ]
  },
  "Take my punch line": {
    "japanese": "私の一撃みたいな言葉を受けてみて。",
    "literalJapanese": "私のパンチラインを受け取って。",
    "sentenceExplanation": "ラップや歌詞の決め台詞で相手を打つ感じ。 ボクシングの punch と言葉の punchline をかけている。",
    "nuance": "ラップや歌詞の決め台詞で相手を打つ感じ。 ボクシングの punch と言葉の punchline をかけている。",
    "tokens": [
      {
        "surface": "punch line",
        "base": "punch line",
        "language": "en",
        "shortMeaning": "オチ、決め台詞",
        "meaning": "オチ、決め台詞",
        "explanation": "ただし punch とかかって「パンチのような一言」にもなる。"
      }
    ]
  },
  "어서 링 위에 올라": {
    "japanese": "さあ、早くリングに上がってきて。",
    "literalJapanese": "早くリングの上に上がって。",
    "sentenceExplanation": "戦う準備はできているから来い、という挑発。 相手を勝負の場へ呼び込んでいる。",
    "nuance": "戦う準備はできているから来い、という挑発。 相手を勝負の場へ呼び込んでいる。",
    "tokens": [
      {
        "surface": "어서",
        "base": "어서",
        "language": "ko",
        "shortMeaning": "早く、さあ",
        "meaning": "早く、さあ"
      },
      {
        "surface": "링",
        "base": "링",
        "language": "ko",
        "shortMeaning": "ring",
        "meaning": "ring / リング"
      },
      {
        "surface": "위",
        "base": "위",
        "language": "ko",
        "shortMeaning": "上",
        "meaning": "上"
      },
      {
        "surface": "-에",
        "base": "-에",
        "language": "ko",
        "shortMeaning": "〜に",
        "meaning": "〜に"
      },
      {
        "surface": "오르다",
        "base": "오르다",
        "language": "ko",
        "shortMeaning": "上がる",
        "meaning": "上がる"
      },
      {
        "surface": "올라",
        "base": "올라",
        "language": "ko",
        "shortMeaning": "上がって",
        "meaning": "上がって"
      }
    ]
  },
  "It's a fight club": {
    "japanese": "ここは戦いの場。",
    "literalJapanese": "これはファイトクラブ。",
    "sentenceExplanation": "ここからは甘い雰囲気ではなく勝負。 相手の言葉や視線との戦い。",
    "nuance": "ここからは甘い雰囲気ではなく勝負。 相手の言葉や視線との戦い。",
    "tokens": [
      {
        "surface": "fight club",
        "base": "fight club",
        "language": "en",
        "shortMeaning": "戦う場所、格闘の場",
        "meaning": "戦う場所、格闘の場"
      }
    ]
  },
  "집중 해 내게만": {
    "japanese": "私だけに集中して。",
    "literalJapanese": "集中して、私にだけ。",
    "sentenceExplanation": "他のものを見る余裕はない。 自分がこの場の中心だという態度。",
    "nuance": "他のものを見る余裕はない。 自分がこの場の中心だという態度。",
    "tokens": [
      {
        "surface": "집중하다",
        "base": "집중하다",
        "language": "ko",
        "shortMeaning": "集中する",
        "meaning": "集中する"
      },
      {
        "surface": "해",
        "base": "해",
        "language": "ko",
        "shortMeaning": "して",
        "meaning": "して"
      },
      {
        "surface": "내게만",
        "base": "내게만",
        "language": "ko",
        "shortMeaning": "나에게만",
        "meaning": "나에게만 / 私にだけ"
      }
    ]
  },
  "Toxic 독이 되는 네": {
    "japanese": "毒になるようなあなたの。",
    "literalJapanese": "Toxic、毒になるあなたの。",
    "sentenceExplanation": "アンチ・批判・悪意ある言葉を「毒」「雑音」として扱う。 中身のない言葉に価値はないという姿勢。",
    "nuance": "アンチ・批判・悪意ある言葉を「毒」「雑音」として扱う。 中身のない言葉に価値はないという姿勢。",
    "tokens": [
      {
        "surface": "toxic",
        "base": "toxic",
        "language": "en",
        "shortMeaning": "有毒な、害のある",
        "meaning": "有毒な、害のある"
      },
      {
        "surface": "독",
        "base": "독",
        "language": "ko",
        "shortMeaning": "毒",
        "meaning": "毒"
      },
      {
        "surface": "독이 되다",
        "base": "독이 되다",
        "language": "ko",
        "shortMeaning": "毒になる",
        "meaning": "毒になる、害になる"
      },
      {
        "surface": "네",
        "base": "네",
        "language": "ko",
        "shortMeaning": "あなたの",
        "meaning": "あなたの"
      }
    ]
  },
  "아무 gibberish": {
    "japanese": "くだらない意味不明な言葉。",
    "literalJapanese": "どうでもいい意味不明な言葉。",
    "sentenceExplanation": "アンチ・批判・悪意ある言葉を「毒」「雑音」として扱う。 中身のない言葉に価値はないという姿勢。",
    "nuance": "アンチ・批判・悪意ある言葉を「毒」「雑音」として扱う。 中身のない言葉に価値はないという姿勢。",
    "tokens": [
      {
        "surface": "아무",
        "base": "아무",
        "language": "ko",
        "shortMeaning": "どうでもいい",
        "meaning": "どうでもいい、何でも"
      },
      {
        "surface": "gibberish",
        "base": "gibberish",
        "language": "en",
        "shortMeaning": "意味不明な言葉",
        "meaning": "意味不明な言葉、たわごと"
      }
    ]
  },
  "세게 밟아 없애 Get clean": {
    "japanese": "強く踏みつけて消し去り、きれいにする。",
    "literalJapanese": "強く踏んでなくす、きれいにして。",
    "sentenceExplanation": "毒のある言葉を踏みつぶして排除する。 自分の場をきれいにする感覚。",
    "nuance": "毒のある言葉を踏みつぶして排除する。 自分の場をきれいにする感覚。",
    "tokens": [
      {
        "surface": "세게",
        "base": "세게",
        "language": "ko",
        "shortMeaning": "強く",
        "meaning": "強く"
      },
      {
        "surface": "밟다",
        "base": "밟다",
        "language": "ko",
        "shortMeaning": "踏む",
        "meaning": "踏む"
      },
      {
        "surface": "밟아",
        "base": "밟아",
        "language": "ko",
        "shortMeaning": "踏んで",
        "meaning": "踏んで"
      },
      {
        "surface": "없애다",
        "base": "없애다",
        "language": "ko",
        "shortMeaning": "なくす、消す",
        "meaning": "なくす、消す"
      },
      {
        "surface": "없애",
        "base": "없애",
        "language": "ko",
        "shortMeaning": "消して",
        "meaning": "消して"
      },
      {
        "surface": "get clean",
        "base": "get clean",
        "language": "en",
        "shortMeaning": "きれいにする、清める",
        "meaning": "きれいにする、清める"
      }
    ]
  },
  "주먹을 올려 이제": {
    "japanese": "さあ、拳を上げて。",
    "literalJapanese": "拳を上げて、今。",
    "sentenceExplanation": "ボクシングの構え。 本格的に戦闘開始。",
    "nuance": "ボクシングの構え。 本格的に戦闘開始。",
    "tokens": [
      {
        "surface": "주먹",
        "base": "주먹",
        "language": "ko",
        "shortMeaning": "拳",
        "meaning": "拳"
      },
      {
        "surface": "올리다",
        "base": "올리다",
        "language": "ko",
        "shortMeaning": "上げる",
        "meaning": "上げる"
      },
      {
        "surface": "올려",
        "base": "올려",
        "language": "ko",
        "shortMeaning": "上げて",
        "meaning": "上げて"
      },
      {
        "surface": "이제",
        "base": "이제",
        "language": "ko",
        "shortMeaning": "さあ、今",
        "meaning": "さあ、今"
      }
    ]
  },
  "춤추듯 떼 두 발": {
    "japanese": "踊るように両足を動かして。",
    "literalJapanese": "踊るように離す、二つの足。",
    "sentenceExplanation": "ボクシングのフットワーク。 戦いなのに、ダンスのように軽やかで余裕がある。",
    "nuance": "ボクシングのフットワーク。 戦いなのに、ダンスのように軽やかで余裕がある。",
    "tokens": [
      {
        "surface": "춤추다",
        "base": "춤추다",
        "language": "ko",
        "shortMeaning": "踊る",
        "meaning": "踊る"
      },
      {
        "surface": "춤추듯",
        "base": "춤추듯",
        "language": "ko",
        "shortMeaning": "踊るように",
        "meaning": "踊るように"
      },
      {
        "surface": "떼다",
        "base": "떼다",
        "language": "ko",
        "shortMeaning": "離す、動かす",
        "meaning": "離す、動かす"
      },
      {
        "surface": "두 발",
        "base": "두 발",
        "language": "ko",
        "shortMeaning": "両足",
        "meaning": "両足"
      }
    ]
  },
  "벌써 빈 틈이 보여": {
    "japanese": "もうあなたの隙が見えている。",
    "literalJapanese": "もう隙が見える。",
    "sentenceExplanation": "相手の弱点をすでに見抜いている。 勝負はほぼ決まっている感じ。",
    "nuance": "相手の弱点をすでに見抜いている。 勝負はほぼ決まっている感じ。",
    "tokens": [
      {
        "surface": "벌써",
        "base": "벌써",
        "language": "ko",
        "shortMeaning": "もう、すでに",
        "meaning": "もう、すでに"
      },
      {
        "surface": "빈틈",
        "base": "빈틈",
        "language": "ko",
        "shortMeaning": "隙、弱点",
        "meaning": "隙、弱点 / 빈 = 空いた / 틈 = 隙間"
      },
      {
        "surface": "보이다",
        "base": "보이다",
        "language": "ko",
        "shortMeaning": "見える",
        "meaning": "見える"
      },
      {
        "surface": "보여",
        "base": "보여",
        "language": "ko",
        "shortMeaning": "見える",
        "meaning": "見える"
      }
    ]
  },
  "날카롭게 뻗어 Right": {
    "japanese": "鋭く右を打ち込む。",
    "literalJapanese": "鋭く伸ばす、右。",
    "sentenceExplanation": "相手の隙を見つけて、右ストレートを入れる。 ボクシング表現。",
    "nuance": "相手の隙を見つけて、右ストレートを入れる。 ボクシング表現。",
    "tokens": [
      {
        "surface": "날카롭다",
        "base": "날카롭다",
        "language": "ko",
        "shortMeaning": "鋭い",
        "meaning": "鋭い"
      },
      {
        "surface": "날카롭게",
        "base": "날카롭게",
        "language": "ko",
        "shortMeaning": "鋭く",
        "meaning": "鋭く"
      },
      {
        "surface": "뻗다",
        "base": "뻗다",
        "language": "ko",
        "shortMeaning": "伸ばす、突き出す",
        "meaning": "伸ばす、突き出す"
      },
      {
        "surface": "뻗어",
        "base": "뻗어",
        "language": "ko",
        "shortMeaning": "突き出して",
        "meaning": "突き出して"
      },
      {
        "surface": "Right",
        "base": "Right",
        "language": "en",
        "shortMeaning": "右、右ストレート",
        "meaning": "右、右ストレート"
      }
    ]
  },
  "Keep on lookin'": {
    "japanese": "見続けていなよ。",
    "literalJapanese": "見続けて。",
    "sentenceExplanation": "自分の強さ・動き・勝利を最後まで見ておけという挑発。",
    "nuance": "自分の強さ・動き・勝利を最後まで見ておけという挑発。",
    "tokens": [
      {
        "surface": "keep on -ing",
        "base": "keep on -ing",
        "language": "en",
        "shortMeaning": "〜し続ける",
        "meaning": "〜し続ける"
      },
      {
        "surface": "lookin'",
        "base": "lookin'",
        "language": "en",
        "shortMeaning": "looking",
        "meaning": "looking / 見ている"
      }
    ]
  },
  "Imma baddie": {
    "japanese": "私は強くて危険な存在。",
    "literalJapanese": "私は悪い子。",
    "sentenceExplanation": "悪人というより、強くて自信があり、簡単には扱えない女性像。",
    "nuance": "悪人というより、強くて自信があり、簡単には扱えない女性像。",
    "tokens": [
      {
        "surface": "Imma",
        "base": "Imma",
        "language": "en",
        "shortMeaning": "I'm a",
        "meaning": "I'm a"
      },
      {
        "surface": "baddie",
        "base": "baddie",
        "language": "en",
        "shortMeaning": "強くて魅力的な悪い女、イケてる女性",
        "meaning": "強くて魅力的な悪い女、イケてる女性"
      }
    ]
  },
  "턱 끝까지": {
    "japanese": "あご先まで。",
    "literalJapanese": "あご先まで。",
    "sentenceExplanation": "相手が追い詰められ、息が乱れている状態。 語り手に圧倒されている。",
    "nuance": "相手が追い詰められ、息が乱れている状態。 語り手に圧倒されている。",
    "tokens": [
      {
        "surface": "턱 끝까지",
        "base": "턱 끝까지",
        "language": "ko",
        "shortMeaning": "あご先まで",
        "meaning": "あご先まで"
      }
    ]
  },
  "엉킨 네 breathing": {
    "japanese": "あなたの呼吸は乱れていく。",
    "literalJapanese": "絡まったあなたの呼吸。",
    "sentenceExplanation": "相手が追い詰められ、息が乱れている状態。 語り手に圧倒されている。",
    "nuance": "相手が追い詰められ、息が乱れている状態。 語り手に圧倒されている。",
    "tokens": [
      {
        "surface": "엉키다",
        "base": "엉키다",
        "language": "ko",
        "shortMeaning": "絡まる",
        "meaning": "絡まる、もつれる"
      },
      {
        "surface": "엉킨",
        "base": "엉킨",
        "language": "ko",
        "shortMeaning": "絡まった〜",
        "meaning": "絡まった〜"
      },
      {
        "surface": "네",
        "base": "네",
        "language": "ko",
        "shortMeaning": "あなたの",
        "meaning": "あなたの"
      },
      {
        "surface": "breathing",
        "base": "breathing",
        "language": "en",
        "shortMeaning": "呼吸",
        "meaning": "呼吸"
      }
    ]
  },
  "Keep on workin'": {
    "japanese": "動き続けてみなよ。",
    "literalJapanese": "働き続けて。",
    "sentenceExplanation": "相手に「まだやれるならやってみな」と言うような余裕。 語り手はまだ負ける気がない。",
    "nuance": "相手に「まだやれるならやってみな」と言うような余裕。 語り手はまだ負ける気がない。",
    "tokens": [
      {
        "surface": "keep on working",
        "base": "keep on working",
        "language": "en",
        "shortMeaning": "動き続ける、頑張り続ける",
        "meaning": "動き続ける、頑張り続ける"
      }
    ]
  },
  "I'm so crazy": {
    "japanese": "私はただ者じゃない。",
    "literalJapanese": "私はとてもクレイジー。",
    "sentenceExplanation": "理性を失っているというより、予測不能で強いという自己演出。",
    "nuance": "理性を失っているというより、予測不能で強いという自己演出。",
    "tokens": [
      {
        "surface": "crazy",
        "base": "crazy",
        "language": "en",
        "shortMeaning": "普通じゃない、やばい、すごい",
        "meaning": "普通じゃない、やばい、すごい"
      }
    ]
  },
  "한 방 먹일": {
    "japanese": "一撃を食らわせる。",
    "literalJapanese": "一発食らわせる。",
    "sentenceExplanation": "勝負を決める一撃を入れる瞬間。 TKOにつながる決定的な場面。",
    "nuance": "勝負を決める一撃を入れる瞬間。 TKOにつながる決定的な場面。",
    "tokens": [
      {
        "surface": "한 방",
        "base": "한 방",
        "language": "ko",
        "shortMeaning": "一発",
        "meaning": "一発"
      },
      {
        "surface": "먹이다",
        "base": "먹이다",
        "language": "ko",
        "shortMeaning": "食らわせる",
        "meaning": "食らわせる"
      },
      {
        "surface": "한 방 먹이다",
        "base": "한 방 먹이다",
        "language": "ko",
        "shortMeaning": "一発食らわせる",
        "meaning": "一発食らわせる"
      }
    ]
  },
  "회심의 타이밍": {
    "japanese": "決定打を入れる最高のタイミング。",
    "literalJapanese": "会心のタイミング。",
    "sentenceExplanation": "勝負を決める一撃を入れる瞬間。 TKOにつながる決定的な場面。",
    "nuance": "勝負を決める一撃を入れる瞬間。 TKOにつながる決定的な場面。",
    "tokens": [
      {
        "surface": "회심",
        "base": "회심",
        "language": "ko",
        "shortMeaning": "会心",
        "meaning": "会心、満足できる最高の一撃"
      },
      {
        "surface": "타이밍",
        "base": "타이밍",
        "language": "ko",
        "shortMeaning": "タイミング",
        "meaning": "timing / タイミング"
      }
    ]
  },
  "더 깊게 남겨 놓은": {
    "japanese": "さらに深く残された。",
    "literalJapanese": "もっと深く残しておいた。",
    "sentenceExplanation": "相手の攻撃でついた傷、または過去の痛みをさらに開くような表現。 ただし後で “흉터 마저도 so glow” と出るため、傷を弱さではなく輝きに変える流れ。",
    "nuance": "相手の攻撃でついた傷、または過去の痛みをさらに開くような表現。 ただし後で “흉터 마저도 so glow” と出るため、傷を弱さではなく輝きに変える流れ。",
    "tokens": [
      {
        "surface": "더",
        "base": "더",
        "language": "ko",
        "shortMeaning": "もっと",
        "meaning": "もっと"
      },
      {
        "surface": "깊게",
        "base": "깊게",
        "language": "ko",
        "shortMeaning": "深く",
        "meaning": "深く"
      },
      {
        "surface": "남기다",
        "base": "남기다",
        "language": "ko",
        "shortMeaning": "残す",
        "meaning": "残す"
      },
      {
        "surface": "남겨 놓다",
        "base": "남겨 놓다",
        "language": "ko",
        "shortMeaning": "残しておく",
        "meaning": "残しておく"
      },
      {
        "surface": "남겨 놓은",
        "base": "남겨 놓은",
        "language": "ko",
        "shortMeaning": "残しておいた〜",
        "meaning": "残しておいた〜"
      }
    ]
  },
  "상처를 가르고": {
    "japanese": "傷跡を切り開いて。",
    "literalJapanese": "傷を切り裂いて。",
    "sentenceExplanation": "相手の攻撃でついた傷、または過去の痛みをさらに開くような表現。 ただし後で “흉터 마저도 so glow” と出るため、傷を弱さではなく輝きに変える流れ。",
    "nuance": "相手の攻撃でついた傷、または過去の痛みをさらに開くような表現。 ただし後で “흉터 마저도 so glow” と出るため、傷を弱さではなく輝きに変える流れ。",
    "tokens": [
      {
        "surface": "상처",
        "base": "상처",
        "language": "ko",
        "shortMeaning": "傷",
        "meaning": "傷"
      },
      {
        "surface": "가르다",
        "base": "가르다",
        "language": "ko",
        "shortMeaning": "切り裂く",
        "meaning": "切り裂く、割る"
      },
      {
        "surface": "가르고",
        "base": "가르고",
        "language": "ko",
        "shortMeaning": "切り裂いて",
        "meaning": "切り裂いて"
      }
    ]
  },
  "Hit that noise": {
    "japanese": "その雑音を打ち砕く。",
    "literalJapanese": "その騒音を打て。",
    "sentenceExplanation": "アンチの声、無意味な批判、邪魔な言葉を“noise”として扱う。 それを一撃で黙らせる。",
    "nuance": "アンチの声、無意味な批判、邪魔な言葉を“noise”として扱う。 それを一撃で黙らせる。",
    "tokens": [
      {
        "surface": "hit",
        "base": "hit",
        "language": "en",
        "shortMeaning": "打つ、叩く",
        "meaning": "打つ、叩く"
      },
      {
        "surface": "noise",
        "base": "noise",
        "language": "en",
        "shortMeaning": "騒音、雑音",
        "meaning": "騒音、雑音"
      }
    ]
  },
  "보여 줄게": {
    "japanese": "見せてあげる。",
    "literalJapanese": "見せてあげる。",
    "sentenceExplanation": "これまでの挑発や準備が、決定的な勝利に向かう。 相手を完全に黙らせる宣言。",
    "nuance": "これまでの挑発や準備が、決定的な勝利に向かう。 相手を完全に黙らせる宣言。",
    "tokens": [
      {
        "surface": "보여주다",
        "base": "보여주다",
        "language": "ko",
        "shortMeaning": "見せてあげる",
        "meaning": "見せてあげる"
      },
      {
        "surface": "보여 줄게",
        "base": "보여 줄게",
        "language": "ko",
        "shortMeaning": "見せてあげるね",
        "meaning": "見せてあげるね"
      }
    ]
  },
  "완벽한 TKO": {
    "japanese": "完璧なTKOを。",
    "literalJapanese": "完璧なTKO。",
    "sentenceExplanation": "これまでの挑発や準備が、決定的な勝利に向かう。 相手を完全に黙らせる宣言。",
    "nuance": "これまでの挑発や準備が、決定的な勝利に向かう。 相手を完全に黙らせる宣言。",
    "tokens": [
      {
        "surface": "완벽하다",
        "base": "완벽하다",
        "language": "ko",
        "shortMeaning": "完璧だ",
        "meaning": "完璧だ"
      },
      {
        "surface": "완벽한",
        "base": "완벽한",
        "language": "ko",
        "shortMeaning": "完璧な〜",
        "meaning": "完璧な〜"
      },
      {
        "surface": "TKO",
        "base": "TKO",
        "language": "en",
        "shortMeaning": "Technical Knockout",
        "meaning": "Technical Knockout"
      }
    ]
  },
  "주도 해 난 this flow": {
    "japanese": "この流れは私が支配している。",
    "literalJapanese": "私はこの流れを主導する。",
    "sentenceExplanation": "相手のペースではなく、自分が試合・曲・場の流れを握っている。 主導権の宣言。",
    "nuance": "相手のペースではなく、自分が試合・曲・場の流れを握っている。 主導権の宣言。",
    "tokens": [
      {
        "surface": "주도하다",
        "base": "주도하다",
        "language": "ko",
        "shortMeaning": "主導する、リードする",
        "meaning": "主導する、リードする"
      },
      {
        "surface": "해",
        "base": "해",
        "language": "ko",
        "shortMeaning": "する",
        "meaning": "する"
      },
      {
        "surface": "난",
        "base": "난",
        "language": "ko",
        "shortMeaning": "私は",
        "meaning": "私は"
      },
      {
        "surface": "this flow",
        "base": "this flow",
        "language": "en",
        "shortMeaning": "この流れ、この展開",
        "meaning": "この流れ、この展開"
      }
    ]
  },
  "흉터 마저도 so glow": {
    "japanese": "傷跡さえも輝きに変える。",
    "literalJapanese": "傷跡さえもとても輝く。",
    "sentenceExplanation": "攻撃されてできた傷も、弱点ではなく魅力や証明になる。 この曲の後半でかなり重要な表現。",
    "nuance": "攻撃されてできた傷も、弱点ではなく魅力や証明になる。 この曲の後半でかなり重要な表現。",
    "tokens": [
      {
        "surface": "흉터",
        "base": "흉터",
        "language": "ko",
        "shortMeaning": "傷跡",
        "meaning": "傷跡"
      },
      {
        "surface": "마저도",
        "base": "마저도",
        "language": "ko",
        "shortMeaning": "〜さえも",
        "meaning": "〜さえも"
      },
      {
        "surface": "glow",
        "base": "glow",
        "language": "en",
        "shortMeaning": "輝く",
        "meaning": "輝く"
      }
    ]
  }
};

const lyricsSequence: string[] = [
  "같아 보일 수가 없어 난",
  "걷힌 베일 속에 당찬 smile",
  "Better watch out baby, I bite",
  "Hold up 날 예의주시 해",
  "가볍게 뱉던 네 말 in goody bag",
  "Ain't no show and tell,",
  "You don't know me like that",
  "눈을 맞출 때 이미 다른 my 클래스",
  "턱 끝을 당겨 이제",
  "놀란 널 가둔 eyes",
  "힘껏 내 지른 fire",
  "절대 넌 못 피해 날",
  "Cuz ima TKO",
  "뻔한 네 머릿속",
  "믿다 다쳐 넌 큰 코",
  "I'm bad to the bad to the, bone",
  "Cuz ima TKO",
  "쉽게 놀린 네 손",
  "전부 부숴 난 네 플롯",
  "Let them know TKO",
  "Cuz ima TKO",
  "하얗게 번진 스모크",
  "So hot but the ice so cold",
  "Let them know TKO",
  "Float like a butterfly sting like a bee",
  "비뚤어진 네 관심은 허니",
  "여유로운 스트레이트 꽂아 넣어 깊이",
  "Hello haters, Imma blow you a kiss",
  "Take my punch line",
  "어서 링 위에 올라",
  "It's a fight club",
  "집중 해 내게만",
  "Toxic 독이 되는 네",
  "아무 gibberish",
  "세게 밟아 없애 Get clean",
  "주먹을 올려 이제",
  "춤추듯 떼 두 발",
  "벌써 빈 틈이 보여",
  "날카롭게 뻗어 Right",
  "Cuz ima TKO",
  "뻔한 네 머릿속",
  "믿다 다쳐 넌 큰 코",
  "I'm bad to the bad to the, bone",
  "Cuz ima TKO",
  "쉽게 놀린 네 손",
  "전부 부숴 난 네 플롯",
  "Let them know TKO",
  "Cuz ima TKO",
  "하얗게 번진 스모크",
  "So hot but the ice so cold",
  "Let them know TKO",
  "Keep on lookin'",
  "Imma baddie",
  "턱 끝까지",
  "엉킨 네 breathing",
  "Keep on workin'",
  "I'm so crazy",
  "한 방 먹일",
  "회심의 타이밍",
  "더 깊게 남겨 놓은",
  "상처를 가르고",
  "Hit that noise",
  "보여 줄게",
  "완벽한 TKO",
  "Cuz ima TKO",
  "주도 해 난 this flow",
  "흉터 마저도 so glow",
  "Let them know TKO",
  "Cuz ima TKO",
  "하얗게 번진 스모크",
  "So hot but the ice so cold",
  "Let them know TKO"
];

export const completeTkoLines: LyricLine[] = lyricsSequence.map((korean, index) => {
  const template = lineTemplates[korean];

  return {
    id: `ive-tko-line-${index + 1}`,
    korean,
    japanese: template.japanese,
    literalJapanese: template.literalJapanese,
    sentenceExplanation: template.sentenceExplanation,
    ...(template.nuance ? { nuance: template.nuance } : {}),
    tokens: template.tokens.map((token, tokenIndex) => ({
      ...token,
      id: `ive-tko-line-${index + 1}-token-${tokenIndex + 1}`,
    })),
  };
});

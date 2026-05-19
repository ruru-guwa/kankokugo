import type { LyricLine, Token } from "../../types/song";

type TokenSeed = Omit<Token, "id">;
type LineTemplate = {
  japanese: string;
  literalJapanese: string;
  sentenceExplanation: string;
  tokens: TokenSeed[];
};

const lineTemplates: Record<string, LineTemplate> = {
  "또 모르지 내 마음이": {
    "japanese": "私の気持ちなんて、またどうなるか分からないでしょ。",
    "literalJapanese": "また分からないでしょ、私の心が。",
    "sentenceExplanation": "自分の気持ちは単純ではなく、予測できない。 IVEらしい「私は私でも読み切れない」という強気さがある。",
    "tokens": [
      {
        "surface": "또",
        "base": "또",
        "language": "ko",
        "shortMeaning": "また、さらに",
        "meaning": "また、さらに"
      },
      {
        "surface": "모르다",
        "base": "모르다",
        "language": "ko",
        "shortMeaning": "分からない、知らない",
        "meaning": "分からない、知らない"
      },
      {
        "surface": "모르지",
        "base": "모르지",
        "language": "ko",
        "shortMeaning": "-지 は「〜でしょ」「〜だよね」の確認…",
        "meaning": "分からないでしょ、分からないよね / -지 は「〜でしょ」「〜だよね」の確認・軽い断定。",
        "explanation": "-지 は「〜でしょ」「〜だよね」の確認・軽い断定。"
      },
      {
        "surface": "내",
        "base": "내",
        "language": "ko",
        "shortMeaning": "私の",
        "meaning": "私の"
      },
      {
        "surface": "마음",
        "base": "마음",
        "language": "ko",
        "shortMeaning": "心、気持ち",
        "meaning": "心、気持ち"
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
  "저 날씨처럼 바뀔지": {
    "japanese": "あの天気みたいに変わるかもしれないし。",
    "literalJapanese": "あの天気のように変わるのか。",
    "sentenceExplanation": "気持ちは天気のように変わるもの。 でも、それが悪いというより「今この瞬間の感情が大事」という流れにつながる。",
    "tokens": [
      {
        "surface": "저",
        "base": "저",
        "language": "ko",
        "shortMeaning": "あの",
        "meaning": "あの"
      },
      {
        "surface": "날씨",
        "base": "날씨",
        "language": "ko",
        "shortMeaning": "天気",
        "meaning": "天気"
      },
      {
        "surface": "-처럼",
        "base": "-처럼",
        "language": "ko",
        "shortMeaning": "あの天気のように",
        "meaning": "〜のように / 저 날씨처럼 / あの天気のように",
        "explanation": "저 날씨처럼 あの天気のように"
      },
      {
        "surface": "바뀌다",
        "base": "바뀌다",
        "language": "ko",
        "shortMeaning": "変わる",
        "meaning": "変わる"
      },
      {
        "surface": "바뀔지",
        "base": "바뀔지",
        "language": "ko",
        "shortMeaning": "-ㄹ지 は「〜するかどうか」「〜かもし…",
        "meaning": "変わるのか、変わるかどうか / -ㄹ지 は「〜するかどうか」「〜かもしれない」のような不確かさ。",
        "explanation": "-ㄹ지 は「〜するかどうか」「〜かもしれない」のような不確かさ。"
      }
    ]
  },
  "날 나조차 다 알 수 없으니": {
    "japanese": "私自身でさえ、自分のことを全部は分からないから。",
    "literalJapanese": "私を、私でさえ全部知ることはできないから。",
    "sentenceExplanation": "自分でも自分の感情を完全には読めない。 ただし、この曲ではその不確かさを弱さではなく、自由さとして扱っている。",
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
        "surface": "나조차",
        "base": "나조차",
        "language": "ko",
        "shortMeaning": "조차 = 〜さえ",
        "meaning": "私でさえ / 나 = 私 / 조차 = 〜さえ",
        "explanation": "나 = 私 조차 = 〜さえ"
      },
      {
        "surface": "다",
        "base": "다",
        "language": "ko",
        "shortMeaning": "全部、すべて",
        "meaning": "全部、すべて"
      },
      {
        "surface": "알다",
        "base": "알다",
        "language": "ko",
        "shortMeaning": "分かる、知る",
        "meaning": "分かる、知る"
      },
      {
        "surface": "알 수 없다",
        "base": "알 수 없다",
        "language": "ko",
        "shortMeaning": "分かることができない",
        "meaning": "分かることができない"
      },
      {
        "surface": "없으니",
        "base": "없으니",
        "language": "ko",
        "shortMeaning": "-으니 = 〜だから、〜なので",
        "meaning": "ないから / -으니 = 〜だから、〜なので",
        "explanation": "-으니 = 〜だから、〜なので"
      }
    ]
  },
  "그게 뭐가 중요하니": {
    "japanese": "でも、それがそんなに大事？",
    "literalJapanese": "それが何が重要なの。",
    "sentenceExplanation": "気持ちが変わるかもしれないこと、自分でも自分を分からないこと。 でも今好きなら、それでいいじゃない、という開き直り。",
    "tokens": [
      {
        "surface": "그게",
        "base": "그게",
        "language": "ko",
        "shortMeaning": "それが",
        "meaning": "그것이 の縮約 / それが",
        "explanation": "それが"
      },
      {
        "surface": "뭐",
        "base": "뭐",
        "language": "ko",
        "shortMeaning": "何",
        "meaning": "何"
      },
      {
        "surface": "-가",
        "base": "-가",
        "language": "ko",
        "shortMeaning": "〜が",
        "meaning": "〜が"
      },
      {
        "surface": "중요하다",
        "base": "중요하다",
        "language": "ko",
        "shortMeaning": "重要だ、大事だ",
        "meaning": "重要だ、大事だ"
      },
      {
        "surface": "중요하니",
        "base": "중요하니",
        "language": "ko",
        "shortMeaning": "-니 は親しい疑問形。",
        "meaning": "重要なの？ / -니 は親しい疑問形。",
        "explanation": "-니 は親しい疑問形。"
      }
    ]
  },
  "지금 네게 완전히": {
    "japanese": "今、私はあなたに完全に。",
    "literalJapanese": "今、あなたに完全に。",
    "sentenceExplanation": "大事なのは過去でも未来でもなく、今の気持ち。 「완전히」があることで、かなり強く夢中になっている感じ。",
    "tokens": [
      {
        "surface": "지금",
        "base": "지금",
        "language": "ko",
        "shortMeaning": "今",
        "meaning": "今"
      },
      {
        "surface": "네게",
        "base": "네게",
        "language": "ko",
        "shortMeaning": "あなたに",
        "meaning": "너에게 の縮約 / あなたに",
        "explanation": "あなたに"
      },
      {
        "surface": "완전히",
        "base": "완전히",
        "language": "ko",
        "shortMeaning": "完全に、すっかり",
        "meaning": "完全に、すっかり"
      }
    ]
  },
  "푹 빠졌단 게 중요한 거지": {
    "japanese": "夢中になっていることの方が大事でしょ。",
    "literalJapanese": "すっかりハマったということが重要なんでしょ。",
    "sentenceExplanation": "自分の感情が今後変わるかどうかより、今完全に惹かれていることが重要。 IVEらしい自信のある恋愛観。",
    "tokens": [
      {
        "surface": "푹",
        "base": "푹",
        "language": "ko",
        "shortMeaning": "すっかり、深く、どっぷり",
        "meaning": "すっかり、深く、どっぷり"
      },
      {
        "surface": "빠지다",
        "base": "빠지다",
        "language": "ko",
        "shortMeaning": "落ちる、ハマる、夢中になる",
        "meaning": "落ちる、ハマる、夢中になる"
      },
      {
        "surface": "푹 빠지다",
        "base": "푹 빠지다",
        "language": "ko",
        "shortMeaning": "すっかりハマる、夢中になる",
        "meaning": "すっかりハマる、夢中になる"
      },
      {
        "surface": "빠졌단",
        "base": "빠졌단",
        "language": "ko",
        "shortMeaning": "ハマったという〜",
        "meaning": "빠졌다는 の縮約 / ハマったという〜",
        "explanation": "ハマったという〜"
      },
      {
        "surface": "게",
        "base": "게",
        "language": "ko",
        "shortMeaning": "ことが",
        "meaning": "것이 の縮約 / ことが",
        "explanation": "ことが"
      },
      {
        "surface": "중요하다",
        "base": "중요하다",
        "language": "ko",
        "shortMeaning": "重要だ",
        "meaning": "重要だ"
      },
      {
        "surface": "중요한 거지",
        "base": "중요한 거지",
        "language": "ko",
        "shortMeaning": "重要なんでしょ、重要なことだよ",
        "meaning": "重要なんでしょ、重要なことだよ"
      }
    ]
  },
  "아마 꿈만 같겠지만 분명 꿈이 아니야": {
    "japanese": "夢みたいに感じるかもしれないけど、これは確かに夢じゃない。",
    "literalJapanese": "たぶん夢のようだろうけど、確かに夢ではない。",
    "sentenceExplanation": "相手にとっては信じられないような出来事かもしれない。 でもこれは現実の本物の感情。",
    "tokens": [
      {
        "surface": "아마",
        "base": "아마",
        "language": "ko",
        "shortMeaning": "たぶん、おそらく",
        "meaning": "たぶん、おそらく"
      },
      {
        "surface": "꿈",
        "base": "꿈",
        "language": "ko",
        "shortMeaning": "夢",
        "meaning": "夢"
      },
      {
        "surface": "-만 같다",
        "base": "-만 같다",
        "language": "ko",
        "shortMeaning": "夢のようだ",
        "meaning": "まるで〜のようだ / 꿈만 같다 / 夢のようだ",
        "explanation": "꿈만 같다 夢のようだ"
      },
      {
        "surface": "같겠지만",
        "base": "같겠지만",
        "language": "ko",
        "shortMeaning": "-겠지만 = 〜だろうけど",
        "meaning": "〜のようだろうけど / -겠지만 = 〜だろうけど",
        "explanation": "-겠지만 = 〜だろうけど"
      },
      {
        "surface": "분명",
        "base": "분명",
        "language": "ko",
        "shortMeaning": "確かに、明らかに",
        "meaning": "確かに、明らかに"
      },
      {
        "surface": "꿈이 아니야",
        "base": "꿈이 아니야",
        "language": "ko",
        "shortMeaning": "夢ではない",
        "meaning": "夢ではない"
      }
    ]
  },
  "달리 설명할 수 없는 이건 사랑일 거야": {
    "japanese": "ほかに説明できないこれは、きっと愛なんだと思う。",
    "literalJapanese": "他に説明できないこれは、愛だと思う。",
    "sentenceExplanation": "「好き」では足りない。 他の言葉で説明できないほど強いから、これは「愛」だと判断している。",
    "tokens": [
      {
        "surface": "달리",
        "base": "달리",
        "language": "ko",
        "shortMeaning": "別に、他に、違う方法で",
        "meaning": "別に、他に、違う方法で"
      },
      {
        "surface": "설명하다",
        "base": "설명하다",
        "language": "ko",
        "shortMeaning": "説明する",
        "meaning": "説明する"
      },
      {
        "surface": "설명할 수 없다",
        "base": "설명할 수 없다",
        "language": "ko",
        "shortMeaning": "説明できない",
        "meaning": "説明できない"
      },
      {
        "surface": "이건",
        "base": "이건",
        "language": "ko",
        "shortMeaning": "これは",
        "meaning": "이것은 の縮約 / これは",
        "explanation": "これは"
      },
      {
        "surface": "사랑",
        "base": "사랑",
        "language": "ko",
        "shortMeaning": "愛",
        "meaning": "愛"
      },
      {
        "surface": "-일 거야",
        "base": "-일 거야",
        "language": "ko",
        "shortMeaning": "〜だろう、〜だと思う",
        "meaning": "〜だろう、〜だと思う"
      }
    ]
  },
  "방금 내가 말한 감정 감히 의심하지 마": {
    "japanese": "今私が言ったこの気持ちを、疑わないで。",
    "literalJapanese": "たった今、私が言った感情を、あえて疑わないで。",
    "sentenceExplanation": "かなり強気。 「私が正直に言っているんだから疑わないで」という、IVEらしい堂々とした告白。",
    "tokens": [
      {
        "surface": "방금",
        "base": "방금",
        "language": "ko",
        "shortMeaning": "たった今、今さっき",
        "meaning": "たった今、今さっき"
      },
      {
        "surface": "내가",
        "base": "내가",
        "language": "ko",
        "shortMeaning": "私が",
        "meaning": "私が"
      },
      {
        "surface": "말하다",
        "base": "말하다",
        "language": "ko",
        "shortMeaning": "言う",
        "meaning": "言う"
      },
      {
        "surface": "말한",
        "base": "말한",
        "language": "ko",
        "shortMeaning": "言った〜",
        "meaning": "言った〜"
      },
      {
        "surface": "감정",
        "base": "감정",
        "language": "ko",
        "shortMeaning": "感情",
        "meaning": "感情"
      },
      {
        "surface": "감히",
        "base": "감히",
        "language": "ko",
        "shortMeaning": "ここでは「よくも疑うな」という強めのニ…",
        "meaning": "あえて、恐れ多くも、生意気にも / ここでは「よくも疑うな」という強めのニュアンス。",
        "explanation": "ここでは「よくも疑うな」という強めのニュアンス。"
      },
      {
        "surface": "의심하다",
        "base": "의심하다",
        "language": "ko",
        "shortMeaning": "疑う",
        "meaning": "疑う"
      },
      {
        "surface": "의심하지 마",
        "base": "의심하지 마",
        "language": "ko",
        "shortMeaning": "疑わないで",
        "meaning": "疑わないで"
      }
    ]
  },
  "그냥 좋다는 게 아냐 What's after 'LIKE'?": {
    "japanese": "ただ「好き」ってだけじゃない。“LIKE”の次に来るものは何？",
    "literalJapanese": "ただ好きだということではない。LIKEの後は何？",
    "sentenceExplanation": "LIKEでは足りないという核心。 好感・興味・軽い好きではなく、その先のLOVEへ進んでいる。 答えは LOVE。 曲全体のテーマそのもの。",
    "tokens": [
      {
        "surface": "그냥",
        "base": "그냥",
        "language": "ko",
        "shortMeaning": "ただ、なんとなく",
        "meaning": "ただ、なんとなく"
      },
      {
        "surface": "좋다",
        "base": "좋다",
        "language": "ko",
        "shortMeaning": "好きだ、良い",
        "meaning": "好きだ、良い"
      },
      {
        "surface": "좋다는",
        "base": "좋다는",
        "language": "ko",
        "shortMeaning": "좋다는",
        "meaning": "好きだという〜 / 좋다 + -다는 / 좋다는",
        "explanation": "좋다 + -다는 좋다는"
      },
      {
        "surface": "게",
        "base": "게",
        "language": "ko",
        "shortMeaning": "ことが",
        "meaning": "것이 / ことが",
        "explanation": "ことが"
      },
      {
        "surface": "아니다",
        "base": "아니다",
        "language": "ko",
        "shortMeaning": "〜ではない",
        "meaning": "〜ではない"
      },
      {
        "surface": "아냐",
        "base": "아냐",
        "language": "ko",
        "shortMeaning": "違う、ではない",
        "meaning": "아니야 の縮約 / 違う、ではない",
        "explanation": "違う、ではない"
      },
      {
        "surface": "What's after",
        "base": "What's after",
        "language": "en",
        "shortMeaning": "〜の後は何？",
        "meaning": "〜の後は何？"
      },
      {
        "surface": "LIKE",
        "base": "LIKE",
        "language": "en",
        "shortMeaning": "好き",
        "meaning": "好き"
      }
    ]
  },
  "You and I": {
    "japanese": "あなたと私。",
    "literalJapanese": "あなたと私。",
    "sentenceExplanation": "二人の関係は、もうただの好意ではない。 LIKEの次に進んでいる。",
    "tokens": [
      {
        "surface": "You and I",
        "base": "You and I",
        "language": "en",
        "shortMeaning": "あなたと私",
        "meaning": "あなたと私"
      },
      {
        "surface": "more than",
        "base": "more than",
        "language": "en",
        "shortMeaning": "〜以上",
        "meaning": "〜以上"
      },
      {
        "surface": "LIKE",
        "base": "LIKE",
        "language": "en",
        "shortMeaning": "好き",
        "meaning": "好き"
      }
    ]
  },
  "It's more than 'LIKE'": {
    "japanese": "これは「好き」以上の気持ち。",
    "literalJapanese": "それは「好き」以上だ。",
    "sentenceExplanation": "二人の関係は、もうただの好意ではない。 LIKEの次に進んでいる。",
    "tokens": [
      {
        "surface": "You and I",
        "base": "You and I",
        "language": "en",
        "shortMeaning": "あなたと私",
        "meaning": "あなたと私"
      },
      {
        "surface": "more than",
        "base": "more than",
        "language": "en",
        "shortMeaning": "〜以上",
        "meaning": "〜以上"
      },
      {
        "surface": "LIKE",
        "base": "LIKE",
        "language": "en",
        "shortMeaning": "好き",
        "meaning": "好き"
      }
    ]
  },
  "L 다음 또 O 다음 난 yeah": {
    "japanese": "Lの次はO、その次に私はいる。",
    "literalJapanese": "Lの次、またOの次、私は yeah。",
    "sentenceExplanation": "LOVEの文字遊び。 L、Oの次に “I＝私” が入り、その後にVEが来るような構造。 厳密な英単語の綴りというより、「私がLOVEの中に入っている」ことを印象づける歌詞。",
    "tokens": [
      {
        "surface": "L",
        "base": "L",
        "language": "en",
        "shortMeaning": "アルファベットのL",
        "meaning": "アルファベットのL"
      },
      {
        "surface": "다음",
        "base": "다음",
        "language": "ko",
        "shortMeaning": "次",
        "meaning": "次"
      },
      {
        "surface": "또",
        "base": "또",
        "language": "ko",
        "shortMeaning": "また、そして",
        "meaning": "また、そして"
      },
      {
        "surface": "O",
        "base": "O",
        "language": "en",
        "shortMeaning": "アルファベットのO",
        "meaning": "アルファベットのO"
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
  "What's after 'LIKE'?": {
    "japanese": "「LIKE」の次に来るものは何？",
    "literalJapanese": "「LIKE」の後は何？",
    "sentenceExplanation": "答えは LOVE。 曲全体のテーマそのもの。",
    "tokens": [
      {
        "surface": "What's after",
        "base": "What's after",
        "language": "en",
        "shortMeaning": "〜の後は何？",
        "meaning": "〜の後は何？"
      },
      {
        "surface": "LIKE",
        "base": "LIKE",
        "language": "en",
        "shortMeaning": "好き",
        "meaning": "好き"
      }
    ]
  },
  "조심해 두 심장에 핀": {
    "japanese": "気をつけて、二人の心に咲いた。",
    "literalJapanese": "気をつけて、二つの心臓に咲いた。",
    "sentenceExplanation": "두 심장 = あなたと私、二人の心。 そこに何かが咲いたという、恋の始まりの表現。",
    "tokens": [
      {
        "surface": "조심하다",
        "base": "조심하다",
        "language": "ko",
        "shortMeaning": "気をつける",
        "meaning": "気をつける"
      },
      {
        "surface": "조심해",
        "base": "조심해",
        "language": "ko",
        "shortMeaning": "気をつけて",
        "meaning": "気をつけて"
      },
      {
        "surface": "두",
        "base": "두",
        "language": "ko",
        "shortMeaning": "二つの",
        "meaning": "二つの"
      },
      {
        "surface": "심장",
        "base": "심장",
        "language": "ko",
        "shortMeaning": "心臓",
        "meaning": "心臓"
      },
      {
        "surface": "-에",
        "base": "-에",
        "language": "ko",
        "shortMeaning": "〜に",
        "meaning": "〜に"
      },
      {
        "surface": "피다",
        "base": "피다",
        "language": "ko",
        "shortMeaning": "咲く",
        "meaning": "咲く"
      },
      {
        "surface": "핀",
        "base": "핀",
        "language": "ko",
        "shortMeaning": "咲いた〜",
        "meaning": "咲いた〜"
      }
    ]
  },
  "새파란 이 불꽃이": {
    "japanese": "鮮やかな青い炎が。",
    "literalJapanese": "真っ青なこの火花が。",
    "sentenceExplanation": "普通、炎は赤いイメージが強いが、ここでは青い炎。 青い炎は温度が高いイメージもあり、冷たそうに見えて実は熱い恋を表している。",
    "tokens": [
      {
        "surface": "새파랗다",
        "base": "새파랗다",
        "language": "ko",
        "shortMeaning": "真っ青だ、鮮やかに青い",
        "meaning": "真っ青だ、鮮やかに青い"
      },
      {
        "surface": "새파란",
        "base": "새파란",
        "language": "ko",
        "shortMeaning": "真っ青な、鮮やかな青い",
        "meaning": "真っ青な、鮮やかな青い"
      },
      {
        "surface": "이",
        "base": "이",
        "language": "ko",
        "shortMeaning": "この",
        "meaning": "この"
      },
      {
        "surface": "불꽃",
        "base": "불꽃",
        "language": "ko",
        "shortMeaning": "꽃 = 花",
        "meaning": "火花、炎 / 불 = 火 / 꽃 = 花",
        "explanation": "불 = 火 꽃 = 花"
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
  "저 태양보다 뜨거울 테니": {
    "japanese": "あの太陽よりも熱く燃えるはずだから。",
    "literalJapanese": "あの太陽より熱いはずだから。",
    "sentenceExplanation": "青い炎が太陽より熱い。 二人の気持ちがそれほど強烈という誇張表現。",
    "tokens": [
      {
        "surface": "저",
        "base": "저",
        "language": "ko",
        "shortMeaning": "あの",
        "meaning": "あの"
      },
      {
        "surface": "태양",
        "base": "태양",
        "language": "ko",
        "shortMeaning": "太陽",
        "meaning": "太陽"
      },
      {
        "surface": "-보다",
        "base": "-보다",
        "language": "ko",
        "shortMeaning": "〜より",
        "meaning": "〜より"
      },
      {
        "surface": "뜨겁다",
        "base": "뜨겁다",
        "language": "ko",
        "shortMeaning": "熱い",
        "meaning": "熱い"
      },
      {
        "surface": "뜨거울",
        "base": "뜨거울",
        "language": "ko",
        "shortMeaning": "熱い〜",
        "meaning": "熱い〜"
      },
      {
        "surface": "-테니",
        "base": "-테니",
        "language": "ko",
        "shortMeaning": "〜だろうから、〜はずだから",
        "meaning": "〜だろうから、〜はずだから"
      }
    ]
  },
  "난 저 위로 또 아래로": {
    "japanese": "私は上がったり下がったり。",
    "literalJapanese": "私はあの上へ、また下へ。",
    "sentenceExplanation": "感情の上下。 前の「気持ちは変わるかも」とつながる。",
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
        "surface": "저",
        "base": "저",
        "language": "ko",
        "shortMeaning": "あの",
        "meaning": "あの"
      },
      {
        "surface": "위",
        "base": "위",
        "language": "ko",
        "shortMeaning": "上",
        "meaning": "上"
      },
      {
        "surface": "-로",
        "base": "-로",
        "language": "ko",
        "shortMeaning": "あの上へ",
        "meaning": "〜へ / 저 위로 / あの上へ",
        "explanation": "저 위로 あの上へ"
      },
      {
        "surface": "또",
        "base": "또",
        "language": "ko",
        "shortMeaning": "また",
        "meaning": "また"
      },
      {
        "surface": "아래",
        "base": "아래",
        "language": "ko",
        "shortMeaning": "下",
        "meaning": "下"
      },
      {
        "surface": "아래로",
        "base": "아래로",
        "language": "ko",
        "shortMeaning": "下へ",
        "meaning": "下へ"
      }
    ]
  },
  "내 그래프는 폭이 커": {
    "japanese": "私の感情のグラフは振れ幅が大きい。",
    "literalJapanese": "私のグラフは幅が大きい。",
    "sentenceExplanation": "気分や感情が大きく動くタイプだと言っている。 でもそれを隠さず、「Yeah that's me」と肯定する。",
    "tokens": [
      {
        "surface": "내",
        "base": "내",
        "language": "ko",
        "shortMeaning": "私の",
        "meaning": "私の"
      },
      {
        "surface": "그래프",
        "base": "그래프",
        "language": "ko",
        "shortMeaning": "グラフ",
        "meaning": "グラフ"
      },
      {
        "surface": "-는",
        "base": "-는",
        "language": "ko",
        "shortMeaning": "〜は",
        "meaning": "〜は"
      },
      {
        "surface": "폭",
        "base": "폭",
        "language": "ko",
        "shortMeaning": "幅",
        "meaning": "幅"
      },
      {
        "surface": "-이",
        "base": "-이",
        "language": "ko",
        "shortMeaning": "〜が",
        "meaning": "〜が"
      },
      {
        "surface": "크다",
        "base": "크다",
        "language": "ko",
        "shortMeaning": "大きい",
        "meaning": "大きい"
      },
      {
        "surface": "커",
        "base": "커",
        "language": "ko",
        "shortMeaning": "大きい",
        "meaning": "大きい"
      }
    ]
  },
  "Yeah that's me": {
    "japanese": "そう、それが私。",
    "literalJapanese": "そう、それが私。",
    "sentenceExplanation": "自分の感情の振れ幅も含めて、自分らしさとして認めている。",
    "tokens": [
      {
        "surface": "that's me",
        "base": "that's me",
        "language": "en",
        "shortMeaning": "それが私",
        "meaning": "それが私"
      }
    ]
  },
  "두 번 세 번 피곤하게 자꾸 질문하지 마": {
    "japanese": "何度も何度も、面倒なくらい聞かないで。",
    "literalJapanese": "二度三度、疲れるように何度も質問しないで。",
    "sentenceExplanation": "「本当に好きなの？」「本気なの？」と何度も確認されることへの強気な返答。 私が言ったならそれを信じて、という態度。",
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
        "surface": "피곤하다",
        "base": "피곤하다",
        "language": "ko",
        "shortMeaning": "疲れる、面倒だ",
        "meaning": "疲れる、面倒だ"
      },
      {
        "surface": "피곤하게",
        "base": "피곤하게",
        "language": "ko",
        "shortMeaning": "疲れるように、面倒くさく",
        "meaning": "疲れるように、面倒くさく"
      },
      {
        "surface": "자꾸",
        "base": "자꾸",
        "language": "ko",
        "shortMeaning": "何度も、しきりに",
        "meaning": "何度も、しきりに"
      },
      {
        "surface": "질문하다",
        "base": "질문하다",
        "language": "ko",
        "shortMeaning": "質問する",
        "meaning": "質問する"
      },
      {
        "surface": "질문하지 마",
        "base": "질문하지 마",
        "language": "ko",
        "shortMeaning": "質問しないで",
        "meaning": "質問しないで"
      }
    ]
  },
  "내 장점이 뭔지 알아? 바로 솔직한 거야": {
    "japanese": "私のいいところ、分かる？ 正直なところだよ。",
    "literalJapanese": "私の長所が何か分かる？ まさに正直なことだ。",
    "sentenceExplanation": "この曲の主人公は、駆け引きをしない。 好きなら好き、愛なら愛と正直に言うタイプ。",
    "tokens": [
      {
        "surface": "내",
        "base": "내",
        "language": "ko",
        "shortMeaning": "私の",
        "meaning": "私の"
      },
      {
        "surface": "장점",
        "base": "장점",
        "language": "ko",
        "shortMeaning": "長所",
        "meaning": "長所"
      },
      {
        "surface": "-이",
        "base": "-이",
        "language": "ko",
        "shortMeaning": "〜が",
        "meaning": "〜が"
      },
      {
        "surface": "뭐",
        "base": "뭐",
        "language": "ko",
        "shortMeaning": "何",
        "meaning": "何"
      },
      {
        "surface": "-ㄴ지",
        "base": "-ㄴ지",
        "language": "ko",
        "shortMeaning": "何なのか",
        "meaning": "〜なのか / 뭔지 = 무엇인지 の縮約 / 何なのか",
        "explanation": "뭔지 = 무엇인지 の縮約 何なのか"
      },
      {
        "surface": "알다",
        "base": "알다",
        "language": "ko",
        "shortMeaning": "分かる、知る",
        "meaning": "分かる、知る"
      },
      {
        "surface": "알아?",
        "base": "알아?",
        "language": "ko",
        "shortMeaning": "分かる？",
        "meaning": "分かる？"
      },
      {
        "surface": "바로",
        "base": "바로",
        "language": "ko",
        "shortMeaning": "まさに、すぐに",
        "meaning": "まさに、すぐに"
      },
      {
        "surface": "솔직하다",
        "base": "솔직하다",
        "language": "ko",
        "shortMeaning": "正直だ、素直だ",
        "meaning": "正直だ、素直だ"
      },
      {
        "surface": "솔직한",
        "base": "솔직한",
        "language": "ko",
        "shortMeaning": "正直な〜",
        "meaning": "正直な〜"
      },
      {
        "surface": "거야",
        "base": "거야",
        "language": "ko",
        "shortMeaning": "〜なんだ",
        "meaning": "것이야 の縮約 / 〜なんだ",
        "explanation": "〜なんだ"
      }
    ]
  },
  "What after like 내 맘에 strike": {
    "japanese": "LIKEの次は何？ 私の心にまっすぐ刺さった。",
    "literalJapanese": "LIKEの後は何、私の心にストライク。",
    "sentenceExplanation": "恋の感覚が心に強く当たった感じ。 野球のストライクというより、「心に命中した」という意味で取ると自然。",
    "tokens": [
      {
        "surface": "What after like",
        "base": "What after like",
        "language": "en",
        "shortMeaning": "文法的には “What's after…",
        "meaning": "LIKEの後は何？ / 文法的には “What's after like?” の省略形のような歌詞表現。",
        "explanation": "文法的には “What's after like?” の省略形のような歌詞表現。"
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
        "shortMeaning": "心",
        "meaning": "마음 / 心",
        "explanation": "心"
      },
      {
        "surface": "-에",
        "base": "-에",
        "language": "ko",
        "shortMeaning": "〜に",
        "meaning": "〜に"
      },
      {
        "surface": "strike",
        "base": "strike",
        "language": "en",
        "shortMeaning": "打つ、命中する、刺さる",
        "meaning": "打つ、命中する、刺さる"
      }
    ]
  },
  "지금 느낀 짜릿함은 마치 tike": {
    "japanese": "今感じたこのしびれる感覚は、まるでtikeみたい。",
    "literalJapanese": "今感じた刺激は、まるでtike。",
    "sentenceExplanation": "“strike” と響きを合わせた音遊びとして見るのが自然。 辞書的な意味より、ラップのリズム・韻が優先されている部分。",
    "tokens": [
      {
        "surface": "지금",
        "base": "지금",
        "language": "ko",
        "shortMeaning": "今",
        "meaning": "今"
      },
      {
        "surface": "느끼다",
        "base": "느끼다",
        "language": "ko",
        "shortMeaning": "感じる",
        "meaning": "感じる"
      },
      {
        "surface": "느낀",
        "base": "느낀",
        "language": "ko",
        "shortMeaning": "感じた〜",
        "meaning": "感じた〜"
      },
      {
        "surface": "짜릿함",
        "base": "짜릿함",
        "language": "ko",
        "shortMeaning": "짜릿하다 = しびれる、刺激的だ",
        "meaning": "しびれる感じ、刺激、ぞくっとする快感 / 짜릿하다 = しびれる、刺激的だ",
        "explanation": "짜릿하다 = しびれる、刺激的だ"
      },
      {
        "surface": "-은",
        "base": "-은",
        "language": "ko",
        "shortMeaning": "〜は",
        "meaning": "〜は"
      },
      {
        "surface": "마치",
        "base": "마치",
        "language": "ko",
        "shortMeaning": "まるで",
        "meaning": "まるで"
      },
      {
        "surface": "tike",
        "base": "tike",
        "language": "en",
        "shortMeaning": "歌詞上の音遊びに近い語",
        "meaning": "歌詞上の音遊びに近い語"
      }
    ]
  },
  "LO 다음에 I 그 다음에 VE": {
    "japanese": "LOの次にI、その次にVE。",
    "literalJapanese": "LOの次にI、その次にVE。",
    "sentenceExplanation": "LOVEの中に “I” が入るような文字遊び。 「私」が愛の中に置かれることで、LIKEの次がLOVEになるという感覚。",
    "tokens": [
      {
        "surface": "LO",
        "base": "LO",
        "language": "en",
        "shortMeaning": "LOVEの前半のような文字",
        "meaning": "LOVEの前半のような文字"
      },
      {
        "surface": "다음에",
        "base": "다음에",
        "language": "ko",
        "shortMeaning": "次に",
        "meaning": "次に"
      },
      {
        "surface": "I",
        "base": "I",
        "language": "en",
        "shortMeaning": "私",
        "meaning": "私"
      },
      {
        "surface": "그 다음에",
        "base": "그 다음에",
        "language": "ko",
        "shortMeaning": "その次に",
        "meaning": "その次に"
      },
      {
        "surface": "VE",
        "base": "VE",
        "language": "en",
        "shortMeaning": "LOVEの後半のような文字",
        "meaning": "LOVEの後半のような文字"
      }
    ]
  },
  "여긴 너와 내 space 아무도 막지 못해": {
    "japanese": "ここはあなたと私だけの場所。誰にも邪魔できない。",
    "literalJapanese": "ここはあなたと私の空間、誰も止められない。",
    "sentenceExplanation": "二人だけの空間。 周りの疑いや質問は関係ない。",
    "tokens": [
      {
        "surface": "여긴",
        "base": "여긴",
        "language": "ko",
        "shortMeaning": "ここは",
        "meaning": "여기는 の縮約 / ここは",
        "explanation": "ここは"
      },
      {
        "surface": "너와",
        "base": "너와",
        "language": "ko",
        "shortMeaning": "あなたと",
        "meaning": "あなたと"
      },
      {
        "surface": "내",
        "base": "내",
        "language": "ko",
        "shortMeaning": "私の",
        "meaning": "私の"
      },
      {
        "surface": "space",
        "base": "space",
        "language": "en",
        "shortMeaning": "空間、場所",
        "meaning": "空間、場所"
      },
      {
        "surface": "아무도",
        "base": "아무도",
        "language": "ko",
        "shortMeaning": "誰も",
        "meaning": "誰も"
      },
      {
        "surface": "막다",
        "base": "막다",
        "language": "ko",
        "shortMeaning": "防ぐ、止める、邪魔する",
        "meaning": "防ぐ、止める、邪魔する"
      },
      {
        "surface": "막지 못하다",
        "base": "막지 못하다",
        "language": "ko",
        "shortMeaning": "止められない",
        "meaning": "止められない"
      }
    ]
  },
  "나를 보면 눈 깜빡할": {
    "japanese": "私を見たら、まばたきする。",
    "literalJapanese": "私を見ると、目をまばたきする。",
    "sentenceExplanation": "かなり自信のある表現。 私から目を離すのはもったいないでしょ、というIVEらしい堂々とした魅力。",
    "tokens": [
      {
        "surface": "나를",
        "base": "나를",
        "language": "ko",
        "shortMeaning": "私を",
        "meaning": "私を"
      },
      {
        "surface": "보다",
        "base": "보다",
        "language": "ko",
        "shortMeaning": "見る",
        "meaning": "見る"
      },
      {
        "surface": "보면",
        "base": "보면",
        "language": "ko",
        "shortMeaning": "見ると",
        "meaning": "見ると"
      },
      {
        "surface": "눈",
        "base": "눈",
        "language": "ko",
        "shortMeaning": "目",
        "meaning": "目"
      },
      {
        "surface": "깜빡하다",
        "base": "깜빡하다",
        "language": "ko",
        "shortMeaning": "まばたきする",
        "meaning": "まばたきする"
      },
      {
        "surface": "깜빡할",
        "base": "깜빡할",
        "language": "ko",
        "shortMeaning": "まばたきする〜",
        "meaning": "まばたきする〜"
      }
    ]
  },
  "시간 조차도 아까울 걸": {
    "japanese": "その時間さえ惜しくなるはず。",
    "literalJapanese": "時間さえも惜しいはず。",
    "sentenceExplanation": "かなり自信のある表現。 私から目を離すのはもったいないでしょ、というIVEらしい堂々とした魅力。",
    "tokens": [
      {
        "surface": "시간",
        "base": "시간",
        "language": "ko",
        "shortMeaning": "時間",
        "meaning": "時間"
      },
      {
        "surface": "조차",
        "base": "조차",
        "language": "ko",
        "shortMeaning": "〜さえ",
        "meaning": "〜さえ"
      },
      {
        "surface": "아깝다",
        "base": "아깝다",
        "language": "ko",
        "shortMeaning": "惜しい、もったいない",
        "meaning": "惜しい、もったいない"
      },
      {
        "surface": "아까울 걸",
        "base": "아까울 걸",
        "language": "ko",
        "shortMeaning": "惜しいはずだよ",
        "meaning": "惜しいはずだよ"
      }
    ]
  },
  "드디어 만나 반가워": {
    "japanese": "やっと会えたね、嬉しい。",
    "literalJapanese": "ついに会えて嬉しい。",
    "sentenceExplanation": "LIKEの先にあるLOVE、または本当の感情にやっと出会えた感じ。",
    "tokens": [
      {
        "surface": "드디어",
        "base": "드디어",
        "language": "ko",
        "shortMeaning": "ついに、やっと",
        "meaning": "ついに、やっと"
      },
      {
        "surface": "만나다",
        "base": "만나다",
        "language": "ko",
        "shortMeaning": "会う",
        "meaning": "会う"
      },
      {
        "surface": "만나",
        "base": "만나",
        "language": "ko",
        "shortMeaning": "会って",
        "meaning": "会って"
      },
      {
        "surface": "반갑다",
        "base": "반갑다",
        "language": "ko",
        "shortMeaning": "嬉しい、会えてうれしい",
        "meaning": "嬉しい、会えてうれしい"
      },
      {
        "surface": "반가워",
        "base": "반가워",
        "language": "ko",
        "shortMeaning": "嬉しい",
        "meaning": "嬉しい"
      }
    ]
  },
  "LOVE 사이 놓일 I": {
    "japanese": "LOVEの中に入る“I”。",
    "literalJapanese": "LOVEの間に置かれるI。",
    "sentenceExplanation": "LOVEという単語の中に “I” が入るという文字遊び。 「私」が愛の中に存在している、という意味にも取れる。",
    "tokens": [
      {
        "surface": "LOVE",
        "base": "LOVE",
        "language": "en",
        "shortMeaning": "愛",
        "meaning": "愛"
      },
      {
        "surface": "사이",
        "base": "사이",
        "language": "ko",
        "shortMeaning": "間",
        "meaning": "間"
      },
      {
        "surface": "놓이다",
        "base": "놓이다",
        "language": "ko",
        "shortMeaning": "置かれる",
        "meaning": "置かれる"
      },
      {
        "surface": "놓일",
        "base": "놓일",
        "language": "ko",
        "shortMeaning": "置かれる〜",
        "meaning": "置かれる〜"
      },
      {
        "surface": "I",
        "base": "I",
        "language": "en",
        "shortMeaning": "私",
        "meaning": "私"
      }
    ]
  },
  "(What's after 'LIKE'?)": {
    "japanese": "（“LIKE”の次に来るものは何？）",
    "literalJapanese": "（「LIKE」の後は何？）",
    "sentenceExplanation": "答えは LOVE。 曲全体のテーマそのもの。",
    "tokens": [
      {
        "surface": "What's after",
        "base": "What's after",
        "language": "en",
        "shortMeaning": "〜の後は何？",
        "meaning": "〜の後は何？"
      },
      {
        "surface": "LIKE",
        "base": "LIKE",
        "language": "en",
        "shortMeaning": "好き",
        "meaning": "好き"
      }
    ]
  },
  "E 앞 또 V 앞 난 yeah": {
    "japanese": "Eの前、Vの前に私はいる。",
    "literalJapanese": "Eの前、またVの前、私は yeah。",
    "sentenceExplanation": "これもLOVEの文字遊び。 Iがどこに入るかを動かしながら、LIKEの後にLOVEが来ることを印象づけている。",
    "tokens": [
      {
        "surface": "E",
        "base": "E",
        "language": "en",
        "shortMeaning": "アルファベットのE",
        "meaning": "アルファベットのE"
      },
      {
        "surface": "앞",
        "base": "앞",
        "language": "ko",
        "shortMeaning": "前",
        "meaning": "前"
      },
      {
        "surface": "또",
        "base": "또",
        "language": "ko",
        "shortMeaning": "また",
        "meaning": "また"
      },
      {
        "surface": "V",
        "base": "V",
        "language": "en",
        "shortMeaning": "アルファベットのV",
        "meaning": "アルファベットのV"
      },
      {
        "surface": "난",
        "base": "난",
        "language": "ko",
        "shortMeaning": "私は",
        "meaning": "私は"
      }
    ]
  }
};

const lyricsSequence: string[] = [
  "또 모르지 내 마음이",
  "저 날씨처럼 바뀔지",
  "날 나조차 다 알 수 없으니",
  "그게 뭐가 중요하니",
  "지금 네게 완전히",
  "푹 빠졌단 게 중요한 거지",
  "아마 꿈만 같겠지만 분명 꿈이 아니야",
  "달리 설명할 수 없는 이건 사랑일 거야",
  "방금 내가 말한 감정 감히 의심하지 마",
  "그냥 좋다는 게 아냐 What's after 'LIKE'?",
  "You and I",
  "It's more than 'LIKE'",
  "L 다음 또 O 다음 난 yeah",
  "You and I",
  "It's more than 'LIKE'",
  "What's after 'LIKE'?",
  "What's after 'LIKE'?",
  "조심해 두 심장에 핀",
  "새파란 이 불꽃이",
  "저 태양보다 뜨거울 테니",
  "난 저 위로 또 아래로",
  "내 그래프는 폭이 커",
  "Yeah that's me",
  "두 번 세 번 피곤하게 자꾸 질문하지 마",
  "내 장점이 뭔지 알아? 바로 솔직한 거야",
  "방금 내가 말한 감정 감히 의심하지 마",
  "그냥 좋다는 게 아냐 What's after 'LIKE'?",
  "You and I",
  "It's more than 'LIKE'",
  "L 다음 또 O 다음 난 yeah",
  "You and I",
  "It's more than 'LIKE'",
  "What's after 'LIKE'?",
  "What's after 'LIKE'?",
  "What after like 내 맘에 strike",
  "지금 느낀 짜릿함은 마치 tike",
  "LO 다음에 I 그 다음에 VE",
  "여긴 너와 내 space 아무도 막지 못해",
  "나를 보면 눈 깜빡할",
  "시간 조차도 아까울 걸",
  "드디어 만나 반가워",
  "LOVE 사이 놓일 I",
  "(What's after 'LIKE'?)",
  "You and I",
  "It's more than 'LIKE'",
  "E 앞 또 V 앞 난 yeah",
  "You and I",
  "It's more than 'LIKE'",
  "What's after 'LIKE'?",
  "You and I",
  "It's more than 'LIKE'",
  "L 다음 또 O 다음 난 yeah",
  "You and I",
  "It's more than 'LIKE'",
  "What's after 'LIKE'?",
  "What's after 'LIKE'?"
];

export const completeAfterLikeLines: LyricLine[] = lyricsSequence.map((korean, index) => {
  const template = lineTemplates[korean];

  return {
    id: `ive-after-like-line-${index + 1}`,
    korean,
    japanese: template.japanese,
    literalJapanese: template.literalJapanese,
    sentenceExplanation: template.sentenceExplanation,
    tokens: template.tokens.map((token, tokenIndex) => ({
      ...token,
      id: `ive-after-like-line-${index + 1}-token-${tokenIndex + 1}`,
    })),
  };
});

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
  "새로운 시작은 늘 설레게 하지": {
    "japanese": "新しい始まりは、いつだって胸を高鳴らせる。",
    "literalJapanese": "新しい始まりは、いつもときめかせる。",
    "sentenceExplanation": "新しい始まりは、いつだって胸を高鳴らせる。",
    "nuance": "新しい挑戦を始める時の期待感。 不安もあるが、それ以上に「何かが変わりそう」という高揚感がある。",
    "tokens": [
      {
        "surface": "새롭다",
        "base": "새롭다",
        "language": "ko",
        "shortMeaning": "新しい",
        "meaning": "新しい"
      },
      {
        "surface": "새로운",
        "base": "새로운",
        "language": "ko",
        "shortMeaning": "新しい〜",
        "meaning": "新しい〜"
      },
      {
        "surface": "시작",
        "base": "시작",
        "language": "ko",
        "shortMeaning": "始まり、スタート",
        "meaning": "始まり、スタート"
      },
      {
        "surface": "-은",
        "base": "-은",
        "language": "ko",
        "shortMeaning": "〜は",
        "meaning": "〜は"
      },
      {
        "surface": "늘",
        "base": "늘",
        "language": "ko",
        "shortMeaning": "いつも、常に",
        "meaning": "いつも、常に"
      },
      {
        "surface": "설레다",
        "base": "설레다",
        "language": "ko",
        "shortMeaning": "ときめく、胸が高鳴る、わくわくする",
        "meaning": "ときめく、胸が高鳴る、わくわくする"
      },
      {
        "surface": "설레게 하다",
        "base": "설레게 하다",
        "language": "ko",
        "shortMeaning": "ときめかせる、胸を高鳴らせる",
        "meaning": "ときめかせる、胸を高鳴らせる"
      },
      {
        "surface": "하지",
        "base": "하지",
        "language": "ko",
        "shortMeaning": "するよね、するものだ",
        "meaning": "するよね、するものだ"
      }
    ]
  },
  "모든 걸 이겨낼 것처럼": {
    "japanese": "どんなことでも乗り越えられそうな気がして。",
    "literalJapanese": "すべてのことに打ち勝てるかのように。",
    "sentenceExplanation": "どんなことでも乗り越えられそうな気がして。",
    "nuance": "始まりの瞬間は、自分が強くなったように感じる。 でも実際には困難もあるため、少し理想や勢いも含まれている。",
    "tokens": [
      {
        "surface": "모든",
        "base": "모든",
        "language": "ko",
        "shortMeaning": "すべての",
        "meaning": "すべての"
      },
      {
        "surface": "걸",
        "base": "걸",
        "language": "ko",
        "shortMeaning": "것을 の縮約",
        "meaning": "것을 の縮約 / ものを、ことを"
      },
      {
        "surface": "이겨내다",
        "base": "이겨내다",
        "language": "ko",
        "shortMeaning": "乗り越える、打ち勝つ",
        "meaning": "乗り越える、打ち勝つ / 이기다 = 勝つ / 내다 = やり遂げる"
      },
      {
        "surface": "이겨낼",
        "base": "이겨낼",
        "language": "ko",
        "shortMeaning": "乗り越える〜",
        "meaning": "乗り越える〜"
      },
      {
        "surface": "것처럼",
        "base": "것처럼",
        "language": "ko",
        "shortMeaning": "〜のように",
        "meaning": "〜のように"
      }
    ]
  },
  "시간을 뒤쫓는 시계바늘처럼": {
    "japanese": "時間を追いかける時計の針みたいに。",
    "literalJapanese": "時間を追いかける時計の針のように。",
    "sentenceExplanation": "時間を追いかける時計の針みたいに。",
    "nuance": "時計の針は止まらず進み続ける。 自分も時間に追われるように、先へ先へ進もうとしている。",
    "tokens": [
      {
        "surface": "시간",
        "base": "시간",
        "language": "ko",
        "shortMeaning": "時間",
        "meaning": "時間"
      },
      {
        "surface": "-을",
        "base": "-을",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "뒤쫓다",
        "base": "뒤쫓다",
        "language": "ko",
        "shortMeaning": "追いかける",
        "meaning": "追いかける / 뒤 = 後ろ / 쫓다 = 追う"
      },
      {
        "surface": "뒤쫓는",
        "base": "뒤쫓는",
        "language": "ko",
        "shortMeaning": "追いかける〜",
        "meaning": "追いかける〜"
      },
      {
        "surface": "시계",
        "base": "시계",
        "language": "ko",
        "shortMeaning": "時計",
        "meaning": "時計"
      },
      {
        "surface": "바늘",
        "base": "바늘",
        "language": "ko",
        "shortMeaning": "針",
        "meaning": "針"
      },
      {
        "surface": "시계바늘",
        "base": "시계바늘",
        "language": "ko",
        "shortMeaning": "時計の針",
        "meaning": "時計の針"
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
  "앞질러 가고 싶어 하지": {
    "japanese": "もっと先へ進みたくなる。",
    "literalJapanese": "追い越して進みたがる。",
    "sentenceExplanation": "もっと先へ進みたくなる。",
    "nuance": "ただ進むだけではなく、周りより先に行きたい、時間さえ追い越したいという焦りと野心。",
    "tokens": [
      {
        "surface": "앞지르다",
        "base": "앞지르다",
        "language": "ko",
        "shortMeaning": "追い越す、先に行く",
        "meaning": "追い越す、先に行く"
      },
      {
        "surface": "앞질러 가다",
        "base": "앞질러 가다",
        "language": "ko",
        "shortMeaning": "追い越して進む",
        "meaning": "追い越して進む"
      },
      {
        "surface": "-고 싶다",
        "base": "-고 싶다",
        "language": "ko",
        "shortMeaning": "〜したい",
        "meaning": "〜したい"
      },
      {
        "surface": "싶어 하지",
        "base": "싶어 하지",
        "language": "ko",
        "shortMeaning": "したがるよね",
        "meaning": "したがるよね"
      }
    ]
  },
  "그어 놓은 선을 넘어": {
    "japanese": "決められた境界線を越えて。",
    "literalJapanese": "引いておいた線を越えて。",
    "sentenceExplanation": "決められた境界線を越えて。",
    "nuance": "社会や他人が決めた限界、自分で勝手に引いた限界を越えるイメージ。 「ここまで」と決められた線を超えて、自分の道を進む。",
    "tokens": [
      {
        "surface": "긋다",
        "base": "긋다",
        "language": "ko",
        "shortMeaning": "線を引く",
        "meaning": "線を引く"
      },
      {
        "surface": "그어 놓다",
        "base": "그어 놓다",
        "language": "ko",
        "shortMeaning": "引いておく",
        "meaning": "引いておく"
      },
      {
        "surface": "그어 놓은",
        "base": "그어 놓은",
        "language": "ko",
        "shortMeaning": "引いておいた〜",
        "meaning": "引いておいた〜"
      },
      {
        "surface": "선",
        "base": "선",
        "language": "ko",
        "shortMeaning": "線、境界線",
        "meaning": "線、境界線"
      },
      {
        "surface": "-을",
        "base": "-을",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "넘다",
        "base": "넘다",
        "language": "ko",
        "shortMeaning": "越える",
        "meaning": "越える"
      },
      {
        "surface": "넘어",
        "base": "넘어",
        "language": "ko",
        "shortMeaning": "越えて",
        "meaning": "越えて"
      }
    ]
  },
  "저마다 삶을 향해": {
    "japanese": "それぞれが自分の人生へ向かっていく。",
    "literalJapanese": "それぞれの人生へ向かって。",
    "sentenceExplanation": "それぞれが自分の人生へ向かっていく。",
    "nuance": "人にはそれぞれの人生がある。 他人と比べるのではなく、それぞれが自分の方向へ進んでいる。",
    "tokens": [
      {
        "surface": "저마다",
        "base": "저마다",
        "language": "ko",
        "shortMeaning": "それぞれ、各自",
        "meaning": "それぞれ、各自"
      },
      {
        "surface": "삶",
        "base": "삶",
        "language": "ko",
        "shortMeaning": "人生、暮らし",
        "meaning": "人生、暮らし"
      },
      {
        "surface": "-을",
        "base": "-을",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "향하다",
        "base": "향하다",
        "language": "ko",
        "shortMeaning": "向かう",
        "meaning": "向かう"
      },
      {
        "surface": "향해",
        "base": "향해",
        "language": "ko",
        "shortMeaning": "向かって",
        "meaning": "向かって"
      }
    ]
  },
  "때론 원망도 하겠지": {
    "japanese": "時には誰かを恨むこともあるだろう。",
    "literalJapanese": "時には恨みもするだろう。",
    "sentenceExplanation": "時には誰かを恨むこともあるだろう。",
    "nuance": "夢を追う道はきれいごとだけではない。 周り、環境、自分の弱さを恨みたくなる時もある。",
    "tokens": [
      {
        "surface": "때론",
        "base": "때론",
        "language": "ko",
        "shortMeaning": "때로는 の縮約",
        "meaning": "때로는 の縮約 / 時には"
      },
      {
        "surface": "원망",
        "base": "원망",
        "language": "ko",
        "shortMeaning": "恨み、不満",
        "meaning": "恨み、不満"
      },
      {
        "surface": "원망하다",
        "base": "원망하다",
        "language": "ko",
        "shortMeaning": "恨む、不満に思う",
        "meaning": "恨む、不満に思う"
      },
      {
        "surface": "-도",
        "base": "-도",
        "language": "ko",
        "shortMeaning": "〜も",
        "meaning": "〜も"
      },
      {
        "surface": "하겠지",
        "base": "하겠지",
        "language": "ko",
        "shortMeaning": "するだろう、するよね",
        "meaning": "するだろう、するよね"
      }
    ]
  },
  "그 선을 먼저 넘지 말라고": {
    "japanese": "「その線を先に越えるな」と言われながら。",
    "literalJapanese": "その線を先に越えるなと。",
    "sentenceExplanation": "「その線を先に越えるな」と言われながら。",
    "nuance": "周囲からの制止や嫉妬、社会の圧力。 「出る杭は打たれる」ような空気もある。",
    "tokens": [
      {
        "surface": "그",
        "base": "그",
        "language": "ko",
        "shortMeaning": "その",
        "meaning": "その"
      },
      {
        "surface": "선",
        "base": "선",
        "language": "ko",
        "shortMeaning": "線",
        "meaning": "線"
      },
      {
        "surface": "먼저",
        "base": "먼저",
        "language": "ko",
        "shortMeaning": "先に",
        "meaning": "先に"
      },
      {
        "surface": "넘다",
        "base": "넘다",
        "language": "ko",
        "shortMeaning": "越える",
        "meaning": "越える"
      },
      {
        "surface": "넘지 말다",
        "base": "넘지 말다",
        "language": "ko",
        "shortMeaning": "越えるな",
        "meaning": "越えるな"
      },
      {
        "surface": "-라고",
        "base": "-라고",
        "language": "ko",
        "shortMeaning": "〜と、〜しろと",
        "meaning": "〜と、〜しろと"
      }
    ]
  },
  "I can fly the sky": {
    "japanese": "私は空へ飛び立てる。",
    "literalJapanese": "私は空を飛べる。",
    "sentenceExplanation": "私は空へ飛び立てる。",
    "nuance": "文法的には “fly in the sky” の方が自然だが、歌詞では勢い重視。 「空さえ飛べる」という強い自己暗示・決意。",
    "tokens": [
      {
        "surface": "I can fly",
        "base": "I can fly",
        "language": "en",
        "shortMeaning": "私は飛べる",
        "meaning": "私は飛べる"
      },
      {
        "surface": "the sky",
        "base": "the sky",
        "language": "en",
        "shortMeaning": "空",
        "meaning": "空"
      }
    ]
  },
  "Never gonna stay": {
    "japanese": "ここに立ち止まるつもりはない。",
    "literalJapanese": "決して留まらない。",
    "sentenceExplanation": "ここに立ち止まるつもりはない。",
    "nuance": "現状維持を拒む表現。 今いる場所に満足せず、前に進む。",
    "tokens": [
      {
        "surface": "never",
        "base": "never",
        "language": "en",
        "shortMeaning": "決して〜ない",
        "meaning": "決して〜ない"
      },
      {
        "surface": "gonna",
        "base": "gonna",
        "language": "en",
        "shortMeaning": "going to のくだけた形",
        "meaning": "going to のくだけた形"
      },
      {
        "surface": "stay",
        "base": "stay",
        "language": "en",
        "shortMeaning": "留まる、立ち止まる",
        "meaning": "留まる、立ち止まる"
      }
    ]
  },
  "내가 지쳐 쓰러질 때까진": {
    "japanese": "疲れ果てて倒れるその時までは。",
    "literalJapanese": "私が疲れて倒れる時までは。",
    "sentenceExplanation": "疲れ果てて倒れるその時までは。",
    "nuance": "限界までやり切る覚悟。 簡単には止まらないという強い意志。",
    "tokens": [
      {
        "surface": "내가",
        "base": "내가",
        "language": "ko",
        "shortMeaning": "私が",
        "meaning": "私が"
      },
      {
        "surface": "지치다",
        "base": "지치다",
        "language": "ko",
        "shortMeaning": "疲れる",
        "meaning": "疲れる"
      },
      {
        "surface": "지쳐",
        "base": "지쳐",
        "language": "ko",
        "shortMeaning": "疲れて",
        "meaning": "疲れて"
      },
      {
        "surface": "쓰러지다",
        "base": "쓰러지다",
        "language": "ko",
        "shortMeaning": "倒れる",
        "meaning": "倒れる"
      },
      {
        "surface": "쓰러질 때",
        "base": "쓰러질 때",
        "language": "ko",
        "shortMeaning": "倒れる時",
        "meaning": "倒れる時"
      },
      {
        "surface": "-까지는 / 까진",
        "base": "-까지는 / 까진",
        "language": "ko",
        "shortMeaning": "〜までは",
        "meaning": "〜までは"
      }
    ]
  },
  "어떤 이유도": {
    "japanese": "どんな理由も。",
    "literalJapanese": "どんな理由も。",
    "sentenceExplanation": "どんな理由も、どんな言い訳も。",
    "nuance": "うまくいかない理由や、諦めるための言い訳を並べたくない。 今は説明よりも行動が必要だという流れ。",
    "tokens": [
      {
        "surface": "어떤",
        "base": "어떤",
        "language": "ko",
        "shortMeaning": "どんな",
        "meaning": "どんな"
      },
      {
        "surface": "이유",
        "base": "이유",
        "language": "ko",
        "shortMeaning": "理由",
        "meaning": "理由"
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
  "어떤 변명도": {
    "japanese": "どんな言い訳も。",
    "literalJapanese": "どんな言い訳も。",
    "sentenceExplanation": "どんな理由も、どんな言い訳も。",
    "nuance": "うまくいかない理由や、諦めるための言い訳を並べたくない。 今は説明よりも行動が必要だという流れ。",
    "tokens": [
      {
        "surface": "어떤",
        "base": "어떤",
        "language": "ko",
        "shortMeaning": "どんな",
        "meaning": "どんな"
      },
      {
        "surface": "변명",
        "base": "변명",
        "language": "ko",
        "shortMeaning": "言い訳",
        "meaning": "言い訳"
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
  "지금 내겐 용기가 필요해": {
    "japanese": "今の私に必要なのは勇気だ。",
    "literalJapanese": "今、私には勇気が必要だ。",
    "sentenceExplanation": "今の私に必要なのは勇気だ。",
    "nuance": "この曲の中心表現の一つ。 理由や言い訳ではなく、前に踏み出す勇気が必要だと分かっている。",
    "tokens": [
      {
        "surface": "지금",
        "base": "지금",
        "language": "ko",
        "shortMeaning": "今",
        "meaning": "今"
      },
      {
        "surface": "내겐",
        "base": "내겐",
        "language": "ko",
        "shortMeaning": "나에게는 の縮約",
        "meaning": "나에게는 の縮約 / 私には"
      },
      {
        "surface": "용기",
        "base": "용기",
        "language": "ko",
        "shortMeaning": "勇気",
        "meaning": "勇気"
      },
      {
        "surface": "필요하다",
        "base": "필요하다",
        "language": "ko",
        "shortMeaning": "必要だ",
        "meaning": "必要だ"
      },
      {
        "surface": "필요해",
        "base": "필요해",
        "language": "ko",
        "shortMeaning": "必要だ",
        "meaning": "必要だ"
      }
    ]
  },
  "빛나지 않아도 내 꿈을 응원해": {
    "japanese": "たとえ今は輝いていなくても、私の夢を信じて応援してほしい。",
    "literalJapanese": "輝かなくても、私の夢を応援して。",
    "sentenceExplanation": "たとえ今は輝いていなくても、私の夢を信じて応援してほしい。",
    "nuance": "今の自分はまだ成功していない。 でも、未完成な夢でも信じてほしいという願い。",
    "tokens": [
      {
        "surface": "빛나다",
        "base": "빛나다",
        "language": "ko",
        "shortMeaning": "輝く",
        "meaning": "輝く"
      },
      {
        "surface": "빛나지 않다",
        "base": "빛나지 않다",
        "language": "ko",
        "shortMeaning": "輝かない",
        "meaning": "輝かない"
      },
      {
        "surface": "빛나지 않아도",
        "base": "빛나지 않아도",
        "language": "ko",
        "shortMeaning": "輝かなくても",
        "meaning": "輝かなくても"
      },
      {
        "surface": "내",
        "base": "내",
        "language": "ko",
        "shortMeaning": "私の",
        "meaning": "私の"
      },
      {
        "surface": "꿈",
        "base": "꿈",
        "language": "ko",
        "shortMeaning": "夢",
        "meaning": "夢"
      },
      {
        "surface": "-을",
        "base": "-을",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "응원하다",
        "base": "응원하다",
        "language": "ko",
        "shortMeaning": "応援する",
        "meaning": "応援する"
      },
      {
        "surface": "응원해",
        "base": "응원해",
        "language": "ko",
        "shortMeaning": "応援して",
        "meaning": "応援して"
      }
    ]
  },
  "그 마지막을 가질 테니": {
    "japanese": "最後には必ず、その夢をつかみ取るから。",
    "literalJapanese": "その最後を手にするつもりだから。",
    "sentenceExplanation": "最後には必ず、その夢をつかみ取るから。",
    "nuance": "今は未完成でも、最後の結果は自分のものにするという自信。 途中ではなく、結末まで見据えている。",
    "tokens": [
      {
        "surface": "그",
        "base": "그",
        "language": "ko",
        "shortMeaning": "その",
        "meaning": "その"
      },
      {
        "surface": "마지막",
        "base": "마지막",
        "language": "ko",
        "shortMeaning": "最後、結末",
        "meaning": "最後、結末"
      },
      {
        "surface": "-을",
        "base": "-을",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "가지다",
        "base": "가지다",
        "language": "ko",
        "shortMeaning": "持つ、手に入れる",
        "meaning": "持つ、手に入れる"
      },
      {
        "surface": "가질 테니",
        "base": "가질 테니",
        "language": "ko",
        "shortMeaning": "手に入れるつもりだから、手に入れるはず…",
        "meaning": "手に入れるつもりだから、手に入れるはずだから / -ㄹ 테니 = 〜するつもりだから、〜するだろうから"
      }
    ]
  },
  "부러진 것처럼 한 발로 뛰어도": {
    "japanese": "たとえ折れたように、片足で進むことになっても。",
    "literalJapanese": "折れたように、片足で走っても。",
    "sentenceExplanation": "たとえ折れたように、片足で進むことになっても。",
    "nuance": "万全ではない状態でも進むという意味。 傷ついていても、不利でも、自分の道を諦めない。",
    "tokens": [
      {
        "surface": "부러지다",
        "base": "부러지다",
        "language": "ko",
        "shortMeaning": "折れる",
        "meaning": "折れる"
      },
      {
        "surface": "부러진",
        "base": "부러진",
        "language": "ko",
        "shortMeaning": "折れた〜",
        "meaning": "折れた〜"
      },
      {
        "surface": "것처럼",
        "base": "것처럼",
        "language": "ko",
        "shortMeaning": "〜のように",
        "meaning": "〜のように"
      },
      {
        "surface": "한 발",
        "base": "한 발",
        "language": "ko",
        "shortMeaning": "片足",
        "meaning": "片足 / 한 = 一つの / 발 = 足"
      },
      {
        "surface": "-로",
        "base": "-로",
        "language": "ko",
        "shortMeaning": "〜で",
        "meaning": "〜で"
      },
      {
        "surface": "뛰다",
        "base": "뛰다",
        "language": "ko",
        "shortMeaning": "走る、跳ぶ",
        "meaning": "走る、跳ぶ"
      },
      {
        "surface": "뛰어도",
        "base": "뛰어도",
        "language": "ko",
        "shortMeaning": "走っても、跳んでも",
        "meaning": "走っても、跳んでも"
      }
    ]
  },
  "난 나의 길을 갈 테니까": {
    "japanese": "私は自分の道を進んでいくから。",
    "literalJapanese": "私は私の道を行くつもりだから。",
    "sentenceExplanation": "私は自分の道を進んでいくから。",
    "nuance": "他人の正解ではなく、自分の道を選ぶという決意。 曲全体の自立心が出ている。",
    "tokens": [
      {
        "surface": "난",
        "base": "난",
        "language": "ko",
        "shortMeaning": "나는",
        "meaning": "나는 / 私は"
      },
      {
        "surface": "나의",
        "base": "나의",
        "language": "ko",
        "shortMeaning": "私の",
        "meaning": "私の"
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
        "surface": "가다",
        "base": "가다",
        "language": "ko",
        "shortMeaning": "行く",
        "meaning": "行く"
      },
      {
        "surface": "갈 테니까",
        "base": "갈 테니까",
        "language": "ko",
        "shortMeaning": "行くつもりだから、行くだろうから",
        "meaning": "行くつもりだから、行くだろうから"
      }
    ]
  },
  "지금 나를 위한 약속": {
    "japanese": "今、自分自身に誓う。",
    "literalJapanese": "今、私のための約束。",
    "sentenceExplanation": "今、自分自身に誓う。",
    "nuance": "誰かへの約束ではなく、自分自身への約束。 夢を追ううえで、自分を裏切らないという誓い。",
    "tokens": [
      {
        "surface": "지금",
        "base": "지금",
        "language": "ko",
        "shortMeaning": "今",
        "meaning": "今"
      },
      {
        "surface": "나를 위한",
        "base": "나를 위한",
        "language": "ko",
        "shortMeaning": "私のための",
        "meaning": "私のための / 나를 = 私を / 위하다 = 〜のために"
      },
      {
        "surface": "약속",
        "base": "약속",
        "language": "ko",
        "shortMeaning": "約束",
        "meaning": "約束"
      }
    ]
  },
  "멈추지 않겠다고": {
    "japanese": "決して止まらないと。",
    "literalJapanese": "止まらないと。",
    "sentenceExplanation": "決して止まらないと。",
    "nuance": "自分に対する誓いの内容。 疲れても、うまくいかなくても止まらないという決意。",
    "tokens": [
      {
        "surface": "멈추다",
        "base": "멈추다",
        "language": "ko",
        "shortMeaning": "止まる",
        "meaning": "止まる"
      },
      {
        "surface": "멈추지 않다",
        "base": "멈추지 않다",
        "language": "ko",
        "shortMeaning": "止まらない",
        "meaning": "止まらない"
      },
      {
        "surface": "-겠다고",
        "base": "-겠다고",
        "language": "ko",
        "shortMeaning": "〜すると、〜するつもりだと",
        "meaning": "〜すると、〜するつもりだと"
      }
    ]
  },
  "또 하나를 앞지르면": {
    "japanese": "また一つ先へ進めば。",
    "literalJapanese": "また一つを追い越せば。",
    "sentenceExplanation": "また一つ先へ進めば。",
    "nuance": "一気に夢に届くのではなく、一つずつ越えていく。 努力の積み重ね。",
    "tokens": [
      {
        "surface": "또",
        "base": "또",
        "language": "ko",
        "shortMeaning": "また",
        "meaning": "また"
      },
      {
        "surface": "하나",
        "base": "하나",
        "language": "ko",
        "shortMeaning": "一つ",
        "meaning": "一つ"
      },
      {
        "surface": "-를",
        "base": "-를",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "앞지르다",
        "base": "앞지르다",
        "language": "ko",
        "shortMeaning": "追い越す",
        "meaning": "追い越す"
      },
      {
        "surface": "앞지르면",
        "base": "앞지르면",
        "language": "ko",
        "shortMeaning": "追い越せば",
        "meaning": "追い越せば"
      }
    ]
  },
  "곧 너의 뒤를 따라잡겠지": {
    "japanese": "すぐにあなたの背中にも追いつくだろう。",
    "literalJapanese": "すぐにあなたの後ろに追いつくだろう。",
    "sentenceExplanation": "すぐにあなたの背中にも追いつくだろう。",
    "nuance": "先を行く誰かに追いつこうとしている。 ライバル、憧れの人、理想の自分などに追いつくイメージ。",
    "tokens": [
      {
        "surface": "곧",
        "base": "곧",
        "language": "ko",
        "shortMeaning": "すぐに、やがて",
        "meaning": "すぐに、やがて"
      },
      {
        "surface": "너의",
        "base": "너의",
        "language": "ko",
        "shortMeaning": "あなたの",
        "meaning": "あなたの"
      },
      {
        "surface": "뒤",
        "base": "뒤",
        "language": "ko",
        "shortMeaning": "後ろ、背中",
        "meaning": "後ろ、背中"
      },
      {
        "surface": "따라잡다",
        "base": "따라잡다",
        "language": "ko",
        "shortMeaning": "追いつく",
        "meaning": "追いつく / 따르다 = ついていく / 잡다 = つかむ"
      },
      {
        "surface": "따라잡겠지",
        "base": "따라잡겠지",
        "language": "ko",
        "shortMeaning": "追いつくだろう",
        "meaning": "追いつくだろう"
      }
    ]
  },
  "원하는 대로": {
    "japanese": "望むままに。",
    "literalJapanese": "望む通りに。",
    "sentenceExplanation": "望むままに。",
    "nuance": "他人に決められた形ではなく、自分が望む形で人生をつかみたい。",
    "tokens": [
      {
        "surface": "원하다",
        "base": "원하다",
        "language": "ko",
        "shortMeaning": "望む",
        "meaning": "望む"
      },
      {
        "surface": "원하는",
        "base": "원하는",
        "language": "ko",
        "shortMeaning": "望む〜",
        "meaning": "望む〜"
      },
      {
        "surface": "-대로",
        "base": "-대로",
        "language": "ko",
        "shortMeaning": "〜の通りに、〜のままに",
        "meaning": "〜の通りに、〜のままに"
      }
    ]
  },
  "다 가질 거야": {
    "japanese": "すべてを手に入れてみせる。",
    "literalJapanese": "すべて手に入れるつもりだ。",
    "sentenceExplanation": "すべてを手に入れてみせる。",
    "nuance": "かなり強い宣言。 遠慮せず、欲しいものを全部つかみにいく野心。",
    "tokens": [
      {
        "surface": "다",
        "base": "다",
        "language": "ko",
        "shortMeaning": "すべて",
        "meaning": "すべて"
      },
      {
        "surface": "가지다",
        "base": "가지다",
        "language": "ko",
        "shortMeaning": "持つ、手に入れる",
        "meaning": "持つ、手に入れる"
      },
      {
        "surface": "가질 거야",
        "base": "가질 거야",
        "language": "ko",
        "shortMeaning": "手に入れるつもりだ",
        "meaning": "手に入れるつもりだ"
      }
    ]
  },
  "그게 바로 내 꿈일 테니까": {
    "japanese": "それこそが、私の夢だから。",
    "literalJapanese": "それがまさに私の夢であるはずだから。",
    "sentenceExplanation": "それこそが、私の夢だから。",
    "nuance": "「望むものを手に入れること」自体が自分の夢。 欲張りではなく、自分の人生を自分で取りにいくという意味。",
    "tokens": [
      {
        "surface": "그게",
        "base": "그게",
        "language": "ko",
        "shortMeaning": "그것이 の縮約",
        "meaning": "그것이 の縮約 / それが"
      },
      {
        "surface": "바로",
        "base": "바로",
        "language": "ko",
        "shortMeaning": "まさに",
        "meaning": "まさに"
      },
      {
        "surface": "내",
        "base": "내",
        "language": "ko",
        "shortMeaning": "私の",
        "meaning": "私の"
      },
      {
        "surface": "꿈",
        "base": "꿈",
        "language": "ko",
        "shortMeaning": "夢",
        "meaning": "夢"
      },
      {
        "surface": "-일 테니까",
        "base": "-일 테니까",
        "language": "ko",
        "shortMeaning": "〜であるはずだから、〜だから",
        "meaning": "〜であるはずだから、〜だから"
      }
    ]
  },
  "변한 건 없어": {
    "japanese": "何も変わっていない。",
    "literalJapanese": "変わったものはない。",
    "sentenceExplanation": "何も変わっていない。",
    "nuance": "状況が悪くなっても、気持ちは変わっていない。 夢への思いは最初のまま。",
    "tokens": [
      {
        "surface": "변하다",
        "base": "변하다",
        "language": "ko",
        "shortMeaning": "変わる",
        "meaning": "変わる"
      },
      {
        "surface": "변한",
        "base": "변한",
        "language": "ko",
        "shortMeaning": "変わった〜",
        "meaning": "変わった〜"
      },
      {
        "surface": "건",
        "base": "건",
        "language": "ko",
        "shortMeaning": "것은 の縮約",
        "meaning": "것은 の縮約 / ものは、ことは"
      },
      {
        "surface": "없다",
        "base": "없다",
        "language": "ko",
        "shortMeaning": "ない",
        "meaning": "ない"
      }
    ]
  },
  "버티고 버텨": {
    "japanese": "耐え抜いて、踏ん張って。",
    "literalJapanese": "耐えて、耐えて。",
    "sentenceExplanation": "耐え抜いて、踏ん張って。",
    "nuance": "華やかに勝つというより、苦しくても粘る。 この曲の現実的な強さが出ている。",
    "tokens": [
      {
        "surface": "버티다",
        "base": "버티다",
        "language": "ko",
        "shortMeaning": "耐える、踏ん張る、持ちこたえる",
        "meaning": "耐える、踏ん張る、持ちこたえる"
      },
      {
        "surface": "버티고 버텨",
        "base": "버티고 버텨",
        "language": "ko",
        "shortMeaning": "耐えて、耐えて",
        "meaning": "耐えて、耐えて"
      }
    ]
  },
  "내 꿈은 더 단단해질 테니": {
    "japanese": "私の夢はもっと強く、揺るがないものになるから。",
    "literalJapanese": "私の夢はもっと固くなるはずだから。",
    "sentenceExplanation": "私の夢はもっと強く、揺るがないものになるから。",
    "nuance": "苦しみや我慢は、夢を弱くするのではなく強くする。 耐え抜いた分だけ、夢がより固まっていく。",
    "tokens": [
      {
        "surface": "내",
        "base": "내",
        "language": "ko",
        "shortMeaning": "私の",
        "meaning": "私の"
      },
      {
        "surface": "꿈",
        "base": "꿈",
        "language": "ko",
        "shortMeaning": "夢",
        "meaning": "夢"
      },
      {
        "surface": "더",
        "base": "더",
        "language": "ko",
        "shortMeaning": "もっと",
        "meaning": "もっと"
      },
      {
        "surface": "단단하다",
        "base": "단단하다",
        "language": "ko",
        "shortMeaning": "固い、しっかりしている、強固だ",
        "meaning": "固い、しっかりしている、強固だ"
      },
      {
        "surface": "단단해지다",
        "base": "단단해지다",
        "language": "ko",
        "shortMeaning": "固くなる、強くなる",
        "meaning": "固くなる、強くなる"
      },
      {
        "surface": "단단해질 테니",
        "base": "단단해질 테니",
        "language": "ko",
        "shortMeaning": "強くなるはずだから、強くなるだろうから",
        "meaning": "強くなるはずだから、強くなるだろうから"
      }
    ]
  },
  "다시 시작해": {
    "japanese": "もう一度、始める。",
    "literalJapanese": "もう一度始める。",
    "sentenceExplanation": "もう一度、始める。",
    "nuance": "失敗した後でも、疲れた後でも、また始める。 この曲のタイトルと結論。",
    "tokens": [
      {
        "surface": "다시",
        "base": "다시",
        "language": "ko",
        "shortMeaning": "もう一度、再び",
        "meaning": "もう一度、再び"
      },
      {
        "surface": "시작하다",
        "base": "시작하다",
        "language": "ko",
        "shortMeaning": "始める",
        "meaning": "始める"
      },
      {
        "surface": "시작해",
        "base": "시작해",
        "language": "ko",
        "shortMeaning": "始める",
        "meaning": "始める"
      }
    ]
  },
  "Ah ah ah ah ah": {
    "japanese": "Ah ah ah ah ah",
    "literalJapanese": "Ah ah ah ah ah",
    "sentenceExplanation": "この行では「Ah ah ah ah ah」と伝えている。",
    "tokens": [
      {
        "surface": "Ah ah ah ah ah",
        "base": "Ah ah ah ah ah",
        "language": "en",
        "shortMeaning": "Ah ah ah ah ah",
        "meaning": "Ah ah ah ah ah"
      }
    ]
  },
  "Ah ah ah ah ah ah": {
    "japanese": "Ah ah ah ah ah ah",
    "literalJapanese": "Ah ah ah ah ah ah",
    "sentenceExplanation": "この行では「Ah ah ah ah ah ah」と伝えている。",
    "tokens": [
      {
        "surface": "Ah ah ah ah ah ah",
        "base": "Ah ah ah ah ah ah",
        "language": "en",
        "shortMeaning": "Ah ah ah ah ah ah",
        "meaning": "Ah ah ah ah ah ah"
      }
    ]
  },
  "Ah ah ah ah": {
    "japanese": "Ah ah ah ah",
    "literalJapanese": "Ah ah ah ah",
    "sentenceExplanation": "この行では「Ah ah ah ah」と伝えている。",
    "tokens": [
      {
        "surface": "Ah ah ah ah",
        "base": "Ah ah ah ah",
        "language": "en",
        "shortMeaning": "Ah ah ah ah",
        "meaning": "Ah ah ah ah"
      }
    ]
  },
  "다시는 나를 잃고 싶지 않아": {
    "japanese": "もう二度と、自分を見失いたくない。",
    "literalJapanese": "二度と私を失いたくない。",
    "sentenceExplanation": "もう二度と、自分を見失いたくない。",
    "nuance": "夢を追う中で、自分らしさを失った過去があるように聞こえる。 成功より前に、自分自身を失わないことが大事だと気づいている。",
    "tokens": [
      {
        "surface": "다시는",
        "base": "다시는",
        "language": "ko",
        "shortMeaning": "二度と",
        "meaning": "二度と"
      },
      {
        "surface": "나를",
        "base": "나를",
        "language": "ko",
        "shortMeaning": "私を",
        "meaning": "私を"
      },
      {
        "surface": "잃다",
        "base": "잃다",
        "language": "ko",
        "shortMeaning": "失う",
        "meaning": "失う"
      },
      {
        "surface": "잃고 싶다",
        "base": "잃고 싶다",
        "language": "ko",
        "shortMeaning": "失いたい",
        "meaning": "失いたい"
      },
      {
        "surface": "잃고 싶지 않다",
        "base": "잃고 싶지 않다",
        "language": "ko",
        "shortMeaning": "失いたくない",
        "meaning": "失いたくない"
      }
    ]
  },
  "내 전부를 걸었으니까": {
    "japanese": "自分のすべてを懸けたから。",
    "literalJapanese": "私のすべてを懸けたから。",
    "sentenceExplanation": "自分のすべてを懸けたから。",
    "nuance": "中途半端な挑戦ではない。 人生や自分自身を懸けるほど、本気で夢に向かっている。",
    "tokens": [
      {
        "surface": "내",
        "base": "내",
        "language": "ko",
        "shortMeaning": "私の",
        "meaning": "私の"
      },
      {
        "surface": "전부",
        "base": "전부",
        "language": "ko",
        "shortMeaning": "すべて",
        "meaning": "すべて"
      },
      {
        "surface": "-를",
        "base": "-를",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "걸다",
        "base": "걸다",
        "language": "ko",
        "shortMeaning": "懸ける",
        "meaning": "懸ける"
      },
      {
        "surface": "걸었으니까",
        "base": "걸었으니까",
        "language": "ko",
        "shortMeaning": "懸けたから",
        "meaning": "懸けたから"
      }
    ]
  }
};

const lyricsSequence: string[] = [
  "새로운 시작은 늘 설레게 하지",
  "모든 걸 이겨낼 것처럼",
  "시간을 뒤쫓는 시계바늘처럼",
  "앞질러 가고 싶어 하지",
  "그어 놓은 선을 넘어",
  "저마다 삶을 향해",
  "때론 원망도 하겠지",
  "그 선을 먼저 넘지 말라고",
  "I can fly the sky",
  "Never gonna stay",
  "내가 지쳐 쓰러질 때까진",
  "어떤 이유도",
  "어떤 변명도",
  "지금 내겐 용기가 필요해",
  "빛나지 않아도 내 꿈을 응원해",
  "그 마지막을 가질 테니",
  "부러진 것처럼 한 발로 뛰어도",
  "난 나의 길을 갈 테니까",
  "지금 나를 위한 약속",
  "멈추지 않겠다고",
  "또 하나를 앞지르면",
  "곧 너의 뒤를 따라잡겠지",
  "원하는 대로",
  "다 가질 거야",
  "그게 바로 내 꿈일 테니까",
  "변한 건 없어",
  "버티고 버텨",
  "내 꿈은 더 단단해질 테니",
  "다시 시작해",
  "Ah ah ah ah ah",
  "Ah ah ah ah ah ah",
  "Ah ah ah ah ah",
  "Ah ah ah ah",
  "다시는 나를 잃고 싶지 않아",
  "내 전부를 걸었으니까",
  "원하는 대로",
  "다 가질 거야",
  "그게 바로 내 꿈일 테니까",
  "변한 건 없어",
  "버티고 버텨",
  "내 꿈은 더 단단해질 테니",
  "다시 시작해",
  "Ah ah ah ah ah",
  "Ah ah ah ah ah ah",
  "Ah ah ah ah ah",
  "Ah ah ah ah"
];

export const completeStartLines: LyricLine[] = lyricsSequence.map((korean, index) => {
  const template = lineTemplates[korean];

  return {
    id: `gaho-start-line-${index + 1}`,
    korean,
    japanese: template.japanese,
    literalJapanese: template.literalJapanese,
    sentenceExplanation: template.sentenceExplanation,
    ...(template.nuance ? { nuance: template.nuance } : {}),
    tokens: template.tokens.map((token, tokenIndex) => ({
      ...token,
      id: `gaho-start-line-${index + 1}-token-${tokenIndex + 1}`,
    })),
  };
});

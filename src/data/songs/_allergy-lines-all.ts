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
  "얼굴 없는 Feed": {
    "japanese": "顔を出していないフィード。",
    "literalJapanese": "顔のないフィード。",
    "sentenceExplanation": "自分の顔を出す自信がないSNS。 「顔を出せない」「見られたくない」という自己否定が最初から出ている。",
    "nuance": "自分の顔を出す自信がないSNS。 「顔を出せない」「見られたくない」という自己否定が最初から出ている。",
    "tokens": [
      {
        "surface": "얼굴",
        "base": "얼굴",
        "language": "ko",
        "shortMeaning": "顔",
        "meaning": "顔"
      },
      {
        "surface": "없다",
        "base": "없다",
        "language": "ko",
        "shortMeaning": "ない",
        "meaning": "ない"
      },
      {
        "surface": "없는",
        "base": "없는",
        "language": "ko",
        "shortMeaning": "ない〜",
        "meaning": "ない〜"
      },
      {
        "surface": "Feed",
        "base": "Feed",
        "language": "en",
        "shortMeaning": "SNSの投稿欄、フィード",
        "meaning": "SNSの投稿欄、フィード"
      }
    ]
  },
  "파리 날리는 Followers": {
    "japanese": "誰も見ていないような少ないフォロワー。",
    "literalJapanese": "ハエが飛ぶフォロワー。",
    "sentenceExplanation": "SNSで人気がない、注目されていないという劣等感。 「フォロワーが少ない」ことをかなり自虐的に言っている。",
    "nuance": "SNSで人気がない、注目されていないという劣等感。 「フォロワーが少ない」ことをかなり自虐的に言っている。",
    "tokens": [
      {
        "surface": "파리",
        "base": "파리",
        "language": "ko",
        "shortMeaning": "ハエ",
        "meaning": "ハエ"
      },
      {
        "surface": "날리다",
        "base": "날리다",
        "language": "ko",
        "shortMeaning": "飛ばす、飛ぶようにする",
        "meaning": "飛ばす、飛ぶようにする"
      },
      {
        "surface": "파리 날리다",
        "base": "파리 날리다",
        "language": "ko",
        "shortMeaning": "客がいない、閑散としている",
        "meaning": "客がいない、閑散としている",
        "explanation": "韓国語の慣用表現。 店などに人が来なくて、ハエだけが飛んでいるような状態。"
      },
      {
        "surface": "Followers",
        "base": "Followers",
        "language": "en",
        "shortMeaning": "フォロワー",
        "meaning": "フォロワー"
      }
    ]
  },
  "I'm a hater of Instagram": {
    "japanese": "私はInstagramが嫌い。",
    "literalJapanese": "私はInstagramが嫌いな人。",
    "sentenceExplanation": "嫌いと言いながら、実際は気になって見てしまう。 SNSに傷つけられているのに、離れられない矛盾がある。",
    "nuance": "嫌いと言いながら、実際は気になって見てしまう。 SNSに傷つけられているのに、離れられない矛盾がある。",
    "tokens": [
      {
        "surface": "I'm a",
        "base": "I'm a",
        "language": "en",
        "shortMeaning": "私は〜な人",
        "meaning": "私は〜な人"
      },
      {
        "surface": "hater",
        "base": "hater",
        "language": "en",
        "shortMeaning": "嫌う人、アンチ",
        "meaning": "嫌う人、アンチ"
      },
      {
        "surface": "Instagram",
        "base": "Instagram",
        "language": "en",
        "shortMeaning": "インスタグラム",
        "meaning": "インスタグラム"
      }
    ]
  },
  "Hater of TikTok": {
    "japanese": "TikTokも嫌い。",
    "literalJapanese": "TikTokが嫌いな人。",
    "sentenceExplanation": "嫌いと言いながら、実際は気になって見てしまう。 SNSに傷つけられているのに、離れられない矛盾がある。",
    "nuance": "嫌いと言いながら、実際は気になって見てしまう。 SNSに傷つけられているのに、離れられない矛盾がある。",
    "tokens": [
      {
        "surface": "Hater",
        "base": "hater",
        "language": "en",
        "shortMeaning": "嫌う人、アンチ",
        "meaning": "嫌う人、アンチ"
      },
      {
        "surface": "TikTok",
        "base": "TikTok",
        "language": "en",
        "shortMeaning": "ティックトック",
        "meaning": "ティックトック"
      }
    ]
  },
  "Lock 걸린 갤러리": {
    "japanese": "ロックされたスマホの写真フォルダ。",
    "literalJapanese": "ロックがかかったギャラリー。",
    "sentenceExplanation": "自分の写真を見られたくない、隠したい。 顔や体、見た目への自信のなさが出ている。",
    "nuance": "自分の写真を見られたくない、隠したい。 顔や体、見た目への自信のなさが出ている。",
    "tokens": [
      {
        "surface": "Lock",
        "base": "Lock",
        "language": "en",
        "shortMeaning": "ロック、鍵",
        "meaning": "ロック、鍵"
      },
      {
        "surface": "걸리다",
        "base": "걸리다",
        "language": "ko",
        "shortMeaning": "かかる",
        "meaning": "かかる"
      },
      {
        "surface": "Lock 걸리다",
        "base": "Lock 걸리다",
        "language": "ko",
        "shortMeaning": "ロックがかかる",
        "meaning": "ロックがかかる"
      },
      {
        "surface": "갤러리",
        "base": "갤러리",
        "language": "ko",
        "shortMeaning": "ギャラリー、スマホの写真フォルダ",
        "meaning": "ギャラリー、スマホの写真フォルダ"
      }
    ]
  },
  "볼품없는 Fit": {
    "japanese": "ぱっとしない服装。",
    "literalJapanese": "見栄えのないFit。",
    "sentenceExplanation": "SNSで見るおしゃれな人たちと比べて、自分の服装がダサく見える。 ここも強い自己否定。",
    "nuance": "SNSで見るおしゃれな人たちと比べて、自分の服装がダサく見える。 ここも強い自己否定。",
    "tokens": [
      {
        "surface": "볼품없다",
        "base": "볼품없다",
        "language": "ko",
        "shortMeaning": "見栄えがしない、ぱっとしない、みすぼら…",
        "meaning": "見栄えがしない、ぱっとしない、みすぼらしい"
      },
      {
        "surface": "볼품없는",
        "base": "볼품없는",
        "language": "ko",
        "shortMeaning": "見栄えのない〜",
        "meaning": "見栄えのない〜"
      },
      {
        "surface": "Fit",
        "base": "Fit",
        "language": "en",
        "shortMeaning": "服装、コーデ、体型の見え方",
        "meaning": "服装、コーデ、体型の見え方"
      }
    ]
  },
  "뭔데 운동도 안 하고": {
    "japanese": "何なの私、運動もしないし。",
    "literalJapanese": "何なの、運動もしないで。",
    "sentenceExplanation": "自分に対するツッコミ。 「努力もしていないのに、可愛くなりたいと思っている自分」を責めている感じ。",
    "nuance": "自分に対するツッコミ。 「努力もしていないのに、可愛くなりたいと思っている自分」を責めている感じ。",
    "tokens": [
      {
        "surface": "뭔데",
        "base": "뭔데",
        "language": "ko",
        "shortMeaning": "何なの、何だけど",
        "meaning": "何なの、何だけど / 뭐 = 何 / -ㄴ데 = 〜なのに、〜だけど"
      },
      {
        "surface": "운동",
        "base": "운동",
        "language": "ko",
        "shortMeaning": "運動",
        "meaning": "運動"
      },
      {
        "surface": "-도",
        "base": "-도",
        "language": "ko",
        "shortMeaning": "〜も",
        "meaning": "〜も"
      },
      {
        "surface": "안 하다",
        "base": "안 하다",
        "language": "ko",
        "shortMeaning": "しない",
        "meaning": "しない"
      },
      {
        "surface": "안 하고",
        "base": "안 하고",
        "language": "ko",
        "shortMeaning": "しないで",
        "meaning": "しないで"
      }
    ]
  },
  "메이크업 하나도 못하고": {
    "japanese": "メイクも全然できないし。",
    "literalJapanese": "メイクも一つもできなくて。",
    "sentenceExplanation": "SNS上の綺麗な人たちはメイクが上手い。 それと比べて、自分は何もできないと感じている。",
    "nuance": "SNS上の綺麗な人たちはメイクが上手い。 それと比べて、自分は何もできないと感じている。",
    "tokens": [
      {
        "surface": "메이크업",
        "base": "메이크업",
        "language": "ko",
        "shortMeaning": "メイク",
        "meaning": "メイク"
      },
      {
        "surface": "하나도",
        "base": "하나도",
        "language": "ko",
        "shortMeaning": "一つも、全然",
        "meaning": "一つも、全然"
      },
      {
        "surface": "못하다",
        "base": "못하다",
        "language": "ko",
        "shortMeaning": "できない、下手だ",
        "meaning": "できない、下手だ"
      },
      {
        "surface": "못하고",
        "base": "못하고",
        "language": "ko",
        "shortMeaning": "できなくて",
        "meaning": "できなくて"
      }
    ]
  },
  "그래 난 내가 봐도 별로인걸": {
    "japanese": "そう、自分で見ても私は微妙なんだ。",
    "literalJapanese": "そう、私は自分が見てもいまいちなんだ。",
    "sentenceExplanation": "他人に言われる前に、自分で自分を否定している。 かなりつらい自己評価。",
    "nuance": "他人に言われる前に、自分で自分を否定している。 かなりつらい自己評価。",
    "tokens": [
      {
        "surface": "그래",
        "base": "그래",
        "language": "ko",
        "shortMeaning": "そう",
        "meaning": "そう"
      },
      {
        "surface": "난",
        "base": "난",
        "language": "ko",
        "shortMeaning": "나는",
        "meaning": "나는 / 私は"
      },
      {
        "surface": "내가",
        "base": "내가",
        "language": "ko",
        "shortMeaning": "私が",
        "meaning": "私が"
      },
      {
        "surface": "봐도",
        "base": "봐도",
        "language": "ko",
        "shortMeaning": "見ても",
        "meaning": "見ても / 보다 = 見る / -아/어도 = 〜しても"
      },
      {
        "surface": "별로",
        "base": "별로",
        "language": "ko",
        "shortMeaning": "いまいち、たいしたことない、あまり良く…",
        "meaning": "いまいち、たいしたことない、あまり良くない"
      },
      {
        "surface": "-인걸",
        "base": "-인걸",
        "language": "ko",
        "shortMeaning": "〜なんだもん、〜なんだよ",
        "meaning": "〜なんだもん、〜なんだよ"
      }
    ]
  },
  "매일 밤 In 탐색 Tab": {
    "japanese": "毎晩、SNSの検索・おすすめ欄を見ている。",
    "literalJapanese": "毎晩、探索タブの中。",
    "sentenceExplanation": "嫌いと言いながら、毎晩SNSを見てしまう。 おすすめ欄で他人の美しさや流行を見て、また傷つく構図。",
    "nuance": "嫌いと言いながら、毎晩SNSを見てしまう。 おすすめ欄で他人の美しさや流行を見て、また傷つく構図。",
    "tokens": [
      {
        "surface": "매일 밤",
        "base": "매일 밤",
        "language": "ko",
        "shortMeaning": "毎晩",
        "meaning": "毎晩 / 매일 = 毎日 / 밤 = 夜"
      },
      {
        "surface": "탐색",
        "base": "탐색",
        "language": "ko",
        "shortMeaning": "探索、検索、探すこと",
        "meaning": "探索、検索、探すこと"
      },
      {
        "surface": "Tab",
        "base": "Tab",
        "language": "en",
        "shortMeaning": "タブ、SNSのおすすめ・検索欄",
        "meaning": "タブ、SNSのおすすめ・検索欄"
      }
    ]
  },
  "나만 없는 샤넬": {
    "japanese": "シャネルを持っていないのは私だけみたい。",
    "literalJapanese": "私だけ持っていないシャネル。",
    "sentenceExplanation": "高級ブランドを持つ人たちと自分を比べている。 実際に全員が持っているわけではないが、SNSを見ると「自分だけない」と感じてしまう。",
    "nuance": "高級ブランドを持つ人たちと自分を比べている。 実際に全員が持っているわけではないが、SNSを見ると「自分だけない」と感じてしまう。",
    "tokens": [
      {
        "surface": "나만",
        "base": "나만",
        "language": "ko",
        "shortMeaning": "私だけ",
        "meaning": "私だけ / 나 = 私 / -만 = 〜だけ"
      },
      {
        "surface": "없다",
        "base": "없다",
        "language": "ko",
        "shortMeaning": "ない",
        "meaning": "ない"
      },
      {
        "surface": "없는",
        "base": "없는",
        "language": "ko",
        "shortMeaning": "ない〜",
        "meaning": "ない〜"
      },
      {
        "surface": "샤넬",
        "base": "샤넬",
        "language": "ko",
        "shortMeaning": "シャネル",
        "meaning": "シャネル"
      }
    ]
  },
  "왠지 나보다 성숙한 요즘 10대": {
    "japanese": "最近の10代は、なぜか私より大人っぽく見える。",
    "literalJapanese": "なぜか私より大人っぽい最近の10代。",
    "sentenceExplanation": "年下の子たちまで自分より垢抜けて見える。 SNS時代の比較疲れが強く出ている。",
    "nuance": "年下の子たちまで自分より垢抜けて見える。 SNS時代の比較疲れが強く出ている。",
    "tokens": [
      {
        "surface": "왠지",
        "base": "왠지",
        "language": "ko",
        "shortMeaning": "なぜか、なんとなく",
        "meaning": "なぜか、なんとなく"
      },
      {
        "surface": "나보다",
        "base": "나보다",
        "language": "ko",
        "shortMeaning": "私より",
        "meaning": "私より / 나 = 私 / -보다 = 〜より"
      },
      {
        "surface": "성숙하다",
        "base": "성숙하다",
        "language": "ko",
        "shortMeaning": "成熟している、大人っぽい",
        "meaning": "成熟している、大人っぽい"
      },
      {
        "surface": "성숙한",
        "base": "성숙한",
        "language": "ko",
        "shortMeaning": "大人っぽい〜",
        "meaning": "大人っぽい〜"
      },
      {
        "surface": "요즘",
        "base": "요즘",
        "language": "ko",
        "shortMeaning": "最近の",
        "meaning": "最近の"
      },
      {
        "surface": "10대",
        "base": "10대",
        "language": "ko",
        "shortMeaning": "10代",
        "meaning": "10代"
      }
    ]
  },
  "MZ 해시태그 What the Y2K": {
    "japanese": "MZだのY2Kだの、何それ。",
    "literalJapanese": "MZハッシュタグ、何なのY2K。",
    "sentenceExplanation": "流行語やトレンドについていけない感じ。 世の中の流れから取り残されている感覚。",
    "nuance": "流行語やトレンドについていけない感じ。 世の中の流れから取り残されている感覚。",
    "tokens": [
      {
        "surface": "MZ",
        "base": "MZ",
        "language": "en",
        "shortMeaning": "韓国でよく使われる「MZ世代」",
        "meaning": "韓国でよく使われる「MZ世代」",
        "explanation": "ミレニアル世代＋Z世代をまとめた言い方。"
      },
      {
        "surface": "해시태그",
        "base": "해시태그",
        "language": "ko",
        "shortMeaning": "ハッシュタグ",
        "meaning": "ハッシュタグ"
      },
      {
        "surface": "What the Y2K",
        "base": "What the Y2K",
        "language": "en",
        "shortMeaning": "Y2Kって何なの",
        "meaning": "Y2Kって何なの / Y2K = 2000年代風ファッション・カルチャーの流行。"
      }
    ]
  },
  "세상은 나 빼고 잘 돌아가": {
    "japanese": "私だけ置いてけぼりで、世の中はうまく回っている。",
    "literalJapanese": "世界は私を除いてうまく回っている。",
    "sentenceExplanation": "この曲の核心の一つ。 自分だけが流行・恋愛・美しさ・人生から取り残されているように感じている。",
    "nuance": "この曲の核心の一つ。 自分だけが流行・恋愛・美しさ・人生から取り残されているように感じている。",
    "tokens": [
      {
        "surface": "세상",
        "base": "세상",
        "language": "ko",
        "shortMeaning": "世界、世の中",
        "meaning": "世界、世の中"
      },
      {
        "surface": "-은",
        "base": "-은",
        "language": "ko",
        "shortMeaning": "〜は",
        "meaning": "〜は"
      },
      {
        "surface": "나",
        "base": "나",
        "language": "ko",
        "shortMeaning": "私",
        "meaning": "私"
      },
      {
        "surface": "빼고",
        "base": "빼고",
        "language": "ko",
        "shortMeaning": "除いて、抜いて",
        "meaning": "除いて、抜いて / 빼다 = 抜く、除く"
      },
      {
        "surface": "잘",
        "base": "잘",
        "language": "ko",
        "shortMeaning": "うまく、よく",
        "meaning": "うまく、よく"
      },
      {
        "surface": "돌아가다",
        "base": "돌아가다",
        "language": "ko",
        "shortMeaning": "回る、進む、機能する",
        "meaning": "回る、進む、機能する"
      }
    ]
  },
  "Please give me the Hate button": {
    "japanese": "いっそ嫌いボタンをちょうだい。",
    "literalJapanese": "私に嫌いボタンをください。",
    "sentenceExplanation": "SNSには「いいね」はあるが、「嫌いボタン」は基本的にない。 それでも「自分が嫌いだから、嫌いボタンを押したい」と言っている。 自己嫌悪が強い。",
    "nuance": "SNSには「いいね」はあるが、「嫌いボタン」は基本的にない。 それでも「自分が嫌いだから、嫌いボタンを押したい」と言っている。 自己嫌悪が強い。",
    "tokens": [
      {
        "surface": "give me",
        "base": "give me",
        "language": "en",
        "shortMeaning": "私にちょうだい",
        "meaning": "私にちょうだい"
      },
      {
        "surface": "Hate button",
        "base": "Hate button",
        "language": "en",
        "shortMeaning": "嫌いボタン",
        "meaning": "嫌いボタン"
      }
    ]
  },
  "난 내가 너무 싫거든": {
    "japanese": "だって私は、自分のことが大嫌いだから。",
    "literalJapanese": "私は自分がとても嫌いだから。",
    "sentenceExplanation": "ここはかなり直接的。 SNS批判だけでなく、自分自身への嫌悪が中心になっている。",
    "nuance": "ここはかなり直接的。 SNS批判だけでなく、自分自身への嫌悪が中心になっている。",
    "tokens": [
      {
        "surface": "난",
        "base": "난",
        "language": "ko",
        "shortMeaning": "나는",
        "meaning": "나는 / 私は"
      },
      {
        "surface": "내가",
        "base": "내가",
        "language": "ko",
        "shortMeaning": "私が、自分が",
        "meaning": "私が、自分が"
      },
      {
        "surface": "너무",
        "base": "너무",
        "language": "ko",
        "shortMeaning": "とても、すごく",
        "meaning": "とても、すごく"
      },
      {
        "surface": "싫다",
        "base": "싫다",
        "language": "ko",
        "shortMeaning": "嫌いだ、嫌だ",
        "meaning": "嫌いだ、嫌だ"
      },
      {
        "surface": "싫거든",
        "base": "싫거든",
        "language": "ko",
        "shortMeaning": "嫌いなんだよ、嫌いだから",
        "meaning": "嫌いなんだよ、嫌いだから / -거든 = 理由説明・打ち明ける感じ"
      }
    ]
  },
  "빌어먹을 My name": {
    "japanese": "最悪な私の名前。",
    "literalJapanese": "くそったれの私の名前。",
    "sentenceExplanation": "自分の名前、自分という存在そのものを嫌っている。 「私であること」への不満につながる。",
    "nuance": "自分の名前、自分という存在そのものを嫌っている。 「私であること」への不満につながる。",
    "tokens": [
      {
        "surface": "빌어먹을",
        "base": "빌어먹을",
        "language": "ko",
        "shortMeaning": "くそったれの、最悪な",
        "meaning": "くそったれの、最悪な",
        "explanation": "強い悪口・不満表現。"
      },
      {
        "surface": "My name",
        "base": "My name",
        "language": "en",
        "shortMeaning": "私の名前",
        "meaning": "私の名前"
      }
    ]
  },
  "Why ain't I pretty": {
    "japanese": "どうして私は可愛くないの。",
    "literalJapanese": "なぜ私は可愛くないの。",
    "sentenceExplanation": "他人と比べたときに出る自己否定。",
    "nuance": "他人と比べたときに出る自己否定。",
    "tokens": [
      {
        "surface": "Why ain't I",
        "base": "Why ain't I",
        "language": "en",
        "shortMeaning": "なぜ私は〜じゃないの",
        "meaning": "なぜ私は〜じゃないの / ain't = am not / are not などのくだけた形"
      },
      {
        "surface": "pretty",
        "base": "pretty",
        "language": "en",
        "shortMeaning": "可愛い、きれい",
        "meaning": "可愛い、きれい"
      }
    ]
  },
  "Why ain't I lovely": {
    "japanese": "どうして私は愛される感じじゃないの。",
    "literalJapanese": "なぜ私は愛らしくないの。",
    "sentenceExplanation": "単に外見だけではなく、「人から好かれる雰囲気」への憧れ。",
    "nuance": "単に外見だけではなく、「人から好かれる雰囲気」への憧れ。",
    "tokens": [
      {
        "surface": "lovely",
        "base": "lovely",
        "language": "en",
        "shortMeaning": "愛らしい、愛される感じの",
        "meaning": "愛らしい、愛される感じの"
      }
    ]
  },
  "Why ain't I sexy": {
    "japanese": "どうして私は魅力的じゃないの。",
    "literalJapanese": "なぜ私はセクシーじゃないの。",
    "sentenceExplanation": "大人っぽさ、異性からの魅力、自己演出への劣等感。",
    "nuance": "大人っぽさ、異性からの魅力、自己演出への劣等感。",
    "tokens": [
      {
        "surface": "sexy",
        "base": "sexy",
        "language": "en",
        "shortMeaning": "セクシー、魅力的",
        "meaning": "セクシー、魅力的"
      }
    ]
  },
  "Why am I me": {
    "japanese": "どうして私は私なんだろう。",
    "literalJapanese": "なぜ私は私なの。",
    "sentenceExplanation": "この曲で最も重い自己否定。 「可愛くない」ではなく、「自分であること自体が嫌」という段階まで行っている。",
    "nuance": "この曲で最も重い自己否定。 「可愛くない」ではなく、「自分であること自体が嫌」という段階まで行っている。",
    "tokens": [
      {
        "surface": "Why",
        "base": "Why",
        "language": "en",
        "shortMeaning": "なぜ",
        "meaning": "なぜ"
      },
      {
        "surface": "am I",
        "base": "am I",
        "language": "en",
        "shortMeaning": "私は〜なのか",
        "meaning": "私は〜なのか"
      },
      {
        "surface": "me",
        "base": "me",
        "language": "en",
        "shortMeaning": "私",
        "meaning": "私"
      }
    ]
  },
  "Love me love me": {
    "japanese": "愛して、私を愛して。",
    "literalJapanese": "私を愛して、私を愛して。",
    "sentenceExplanation": "表面ではSNSや自分を嫌っているが、本音は「愛されたい」。 自己嫌悪と承認欲求が同時にある。",
    "nuance": "表面ではSNSや自分を嫌っているが、本音は「愛されたい」。 自己嫌悪と承認欲求が同時にある。",
    "tokens": [
      {
        "surface": "Love me",
        "base": "love me",
        "language": "en",
        "shortMeaning": "私を愛して",
        "meaning": "私を愛して"
      }
    ]
  },
  "love me love me love me, want": {
    "japanese": "愛されたい、愛されたい、愛されたい。",
    "literalJapanese": "私を愛して、私を愛して、私を愛して、欲しい。",
    "sentenceExplanation": "表面ではSNSや自分を嫌っているが、本音は「愛されたい」。 自己嫌悪と承認欲求が同時にある。",
    "nuance": "表面ではSNSや自分を嫌っているが、本音は「愛されたい」。 自己嫌悪と承認欲求が同時にある。",
    "tokens": [
      {
        "surface": "love me",
        "base": "love me",
        "language": "en",
        "shortMeaning": "私を愛して",
        "meaning": "私を愛して"
      },
      {
        "surface": "want",
        "base": "want",
        "language": "en",
        "shortMeaning": "欲しい、望む",
        "meaning": "欲しい、望む"
      }
    ]
  },
  "She so pretty": {
    "japanese": "あの子はすごく可愛い。",
    "literalJapanese": "彼女はとても可愛い。",
    "sentenceExplanation": "SNSで見ている他人のこと。 “She” は特定の一人というより、自分より輝いて見える誰か全体。",
    "nuance": "SNSで見ている他人のこと。 “She” は特定の一人というより、自分より輝いて見える誰か全体。",
    "tokens": [
      {
        "surface": "She",
        "base": "She",
        "language": "en",
        "shortMeaning": "彼女、あの子",
        "meaning": "彼女、あの子"
      },
      {
        "surface": "so",
        "base": "so",
        "language": "en",
        "shortMeaning": "とても",
        "meaning": "とても"
      },
      {
        "surface": "pretty",
        "base": "pretty",
        "language": "en",
        "shortMeaning": "可愛い、きれい",
        "meaning": "可愛い、きれい"
      }
    ]
  },
  "Yea so lovely": {
    "japanese": "そう、すごく愛される感じ。",
    "literalJapanese": "そう、とても愛らしい。",
    "sentenceExplanation": "「あの子」は可愛いだけでなく、人から愛される雰囲気も持っているように見える。",
    "nuance": "「あの子」は可愛いだけでなく、人から愛される雰囲気も持っているように見える。",
    "tokens": [
      {
        "surface": "lovely",
        "base": "lovely",
        "language": "en",
        "shortMeaning": "愛らしい、好かれる感じ",
        "meaning": "愛らしい、好かれる感じ"
      }
    ]
  },
  "She got everything": {
    "japanese": "あの子は全部持っている。",
    "literalJapanese": "彼女はすべてを持っている。",
    "sentenceExplanation": "外見、ブランド、人気、恋愛、性格、流行への適応。 SNS上では他人が「全部持っている」ように見える。",
    "nuance": "外見、ブランド、人気、恋愛、性格、流行への適応。 SNS上では他人が「全部持っている」ように見える。",
    "tokens": [
      {
        "surface": "She got",
        "base": "She got",
        "language": "en",
        "shortMeaning": "彼女は持っている",
        "meaning": "彼女は持っている"
      },
      {
        "surface": "everything",
        "base": "everything",
        "language": "en",
        "shortMeaning": "すべて",
        "meaning": "すべて"
      }
    ]
  },
  "Why am I not her": {
    "japanese": "どうして私はあの子じゃないんだろう。",
    "literalJapanese": "なぜ私は彼女ではないの。",
    "sentenceExplanation": "自分を良くしたいというより、他人になりたいほど自分を否定している。",
    "nuance": "自分を良くしたいというより、他人になりたいほど自分を否定している。",
    "tokens": [
      {
        "surface": "Why am I not",
        "base": "Why am I not",
        "language": "en",
        "shortMeaning": "なぜ私は〜ではないの",
        "meaning": "なぜ私は〜ではないの"
      },
      {
        "surface": "her",
        "base": "her",
        "language": "en",
        "shortMeaning": "彼女",
        "meaning": "彼女"
      }
    ]
  },
  "love me love me love me but": {
    "japanese": "愛されたい、愛されたい、でも。",
    "literalJapanese": "私を愛して、私を愛して、私を愛して、でも。",
    "sentenceExplanation": "表面ではSNSや自分を嫌っているが、本音は「愛されたい」。 自己嫌悪と承認欲求が同時にある。",
    "nuance": "表面ではSNSや自分を嫌っているが、本音は「愛されたい」。 自己嫌悪と承認欲求が同時にある。",
    "tokens": [
      {
        "surface": "love me",
        "base": "love me",
        "language": "en",
        "shortMeaning": "私を愛して",
        "meaning": "私を愛して"
      },
      {
        "surface": "but",
        "base": "but",
        "language": "en",
        "shortMeaning": "でも",
        "meaning": "でも"
      }
    ]
  },
  "빌어먹을 Huh 내 거울 알러지": {
    "japanese": "最悪。私は鏡を見るのが嫌でたまらない。",
    "literalJapanese": "くそったれ、私の鏡アレルギー。",
    "sentenceExplanation": "本当に鏡にアレルギーがあるわけではない。 鏡を見ると自分の姿を突きつけられてつらい、という比喩。 タイトル “Allergy” の中心表現。",
    "nuance": "本当に鏡にアレルギーがあるわけではない。 鏡を見ると自分の姿を突きつけられてつらい、という比喩。 タイトル “Allergy” の中心表現。",
    "tokens": [
      {
        "surface": "빌어먹을",
        "base": "빌어먹을",
        "language": "ko",
        "shortMeaning": "くそったれの、最悪な",
        "meaning": "くそったれの、最悪な"
      },
      {
        "surface": "내",
        "base": "내",
        "language": "ko",
        "shortMeaning": "私の",
        "meaning": "私の"
      },
      {
        "surface": "거울",
        "base": "거울",
        "language": "ko",
        "shortMeaning": "鏡",
        "meaning": "鏡"
      },
      {
        "surface": "알러지",
        "base": "알러지",
        "language": "ko",
        "shortMeaning": "アレルギー",
        "meaning": "アレルギー"
      }
    ]
  },
  "나도 Want to dance Hype Boy": {
    "japanese": "私だってHype Boyを踊ってみたい。",
    "literalJapanese": "私もHype Boyを踊りたい。",
    "sentenceExplanation": "流行に乗りたい、自分も可愛く踊ってみたい気持ち。 でも次で現実とのギャップが出る。",
    "nuance": "流行に乗りたい、自分も可愛く踊ってみたい気持ち。 でも次で現実とのギャップが出る。",
    "tokens": [
      {
        "surface": "나도",
        "base": "나도",
        "language": "ko",
        "shortMeaning": "私も",
        "meaning": "私も"
      },
      {
        "surface": "want to",
        "base": "want to",
        "language": "en",
        "shortMeaning": "〜したい",
        "meaning": "〜したい"
      },
      {
        "surface": "dance",
        "base": "dance",
        "language": "en",
        "shortMeaning": "踊る",
        "meaning": "踊る"
      },
      {
        "surface": "Hype Boy",
        "base": "Hype Boy",
        "language": "en",
        "shortMeaning": "NewJeansの楽曲名",
        "meaning": "NewJeansの楽曲名"
      }
    ]
  },
  "But 화면 속엔 Like TOMBOY": {
    "japanese": "でも画面に映る私は、思っていた感じと違う。",
    "literalJapanese": "でも画面の中ではTOMBOYみたい。",
    "sentenceExplanation": "可愛くHype Boyを踊りたいのに、画面越しの自分は理想通りではない。 自撮り・動画撮影で現実を見て落ち込む感じ。",
    "nuance": "可愛くHype Boyを踊りたいのに、画面越しの自分は理想通りではない。 自撮り・動画撮影で現実を見て落ち込む感じ。",
    "tokens": [
      {
        "surface": "But",
        "base": "But",
        "language": "en",
        "shortMeaning": "でも",
        "meaning": "でも"
      },
      {
        "surface": "화면",
        "base": "화면",
        "language": "ko",
        "shortMeaning": "画面",
        "meaning": "画面"
      },
      {
        "surface": "속",
        "base": "속",
        "language": "ko",
        "shortMeaning": "中",
        "meaning": "中"
      },
      {
        "surface": "화면 속엔",
        "base": "화면 속엔",
        "language": "ko",
        "shortMeaning": "画面の中には",
        "meaning": "画面の中には"
      },
      {
        "surface": "Like TOMBOY",
        "base": "Like TOMBOY",
        "language": "en",
        "shortMeaning": "TOMBOYみたい",
        "meaning": "TOMBOYみたい",
        "explanation": "TOMBOYはi-dle自身の楽曲。 ここでは、思っていた可愛い感じではなく、違う雰囲気に映る自分を自虐している。"
      }
    ]
  },
  "비웃을 거야 그래 그 Boy": {
    "japanese": "きっとあの男の子にも笑われる。",
    "literalJapanese": "笑うだろう、そう、そのBoy。",
    "sentenceExplanation": "実際に笑われたというより、「笑われるに違いない」と思い込んでいる。 恋愛面での自信のなさ。",
    "nuance": "実際に笑われたというより、「笑われるに違いない」と思い込んでいる。 恋愛面での自信のなさ。",
    "tokens": [
      {
        "surface": "비웃다",
        "base": "비웃다",
        "language": "ko",
        "shortMeaning": "あざ笑う、鼻で笑う",
        "meaning": "あざ笑う、鼻で笑う"
      },
      {
        "surface": "비웃을 거야",
        "base": "비웃을 거야",
        "language": "ko",
        "shortMeaning": "笑うだろう",
        "meaning": "笑うだろう"
      },
      {
        "surface": "그래",
        "base": "그래",
        "language": "ko",
        "shortMeaning": "そう",
        "meaning": "そう"
      },
      {
        "surface": "그 Boy",
        "base": "그 Boy",
        "language": "ko",
        "shortMeaning": "その男の子、あの男の子",
        "meaning": "その男の子、あの男の子"
      }
    ]
  },
  "Oh god it's so funny": {
    "japanese": "ああ、もう笑えるくらい最悪。",
    "literalJapanese": "ああ神様、本当に面白い。",
    "sentenceExplanation": "本当に面白いのではなく、自虐。 つらすぎて逆に笑える、という感じ。",
    "nuance": "本当に面白いのではなく、自虐。 つらすぎて逆に笑える、という感じ。",
    "tokens": [
      {
        "surface": "Oh god",
        "base": "Oh god",
        "language": "en",
        "shortMeaning": "ああ神様、ああもう",
        "meaning": "ああ神様、ああもう"
      },
      {
        "surface": "so funny",
        "base": "so funny",
        "language": "en",
        "shortMeaning": "とても面白い",
        "meaning": "とても面白い"
      }
    ]
  },
  "말투는 왜 Too much dope": {
    "japanese": "話し方だけはやけにイキってる。",
    "literalJapanese": "話し方はなぜそんなにToo much dope。",
    "sentenceExplanation": "自分の口調や振る舞いが空回りしていると感じている。 「見た目は微妙なのに、話し方だけかっこつけてる」と自虐している。",
    "nuance": "自分の口調や振る舞いが空回りしていると感じている。 「見た目は微妙なのに、話し方だけかっこつけてる」と自虐している。",
    "tokens": [
      {
        "surface": "말투",
        "base": "말투",
        "language": "ko",
        "shortMeaning": "話し方、口調",
        "meaning": "話し方、口調"
      },
      {
        "surface": "왜",
        "base": "왜",
        "language": "ko",
        "shortMeaning": "なぜ",
        "meaning": "なぜ"
      },
      {
        "surface": "too much",
        "base": "too much",
        "language": "en",
        "shortMeaning": "やりすぎ",
        "meaning": "やりすぎ"
      },
      {
        "surface": "dope",
        "base": "dope",
        "language": "en",
        "shortMeaning": "かっこいい、イケてる",
        "meaning": "かっこいい、イケてる"
      }
    ]
  },
  "내가 뭔데 성격까지 좋지 않아": {
    "japanese": "私なんて、性格まで良くないし。",
    "literalJapanese": "私が何なの、性格まで良くない。",
    "sentenceExplanation": "外見だけでなく性格まで否定している。 自己嫌悪が内面にまで広がっている。",
    "nuance": "外見だけでなく性格まで否定している。 自己嫌悪が内面にまで広がっている。",
    "tokens": [
      {
        "surface": "내가",
        "base": "내가",
        "language": "ko",
        "shortMeaning": "私が",
        "meaning": "私が"
      },
      {
        "surface": "뭔데",
        "base": "뭔데",
        "language": "ko",
        "shortMeaning": "何なのに、何様なの",
        "meaning": "何なのに、何様なの"
      },
      {
        "surface": "성격",
        "base": "성격",
        "language": "ko",
        "shortMeaning": "性格",
        "meaning": "性格"
      },
      {
        "surface": "-까지",
        "base": "-까지",
        "language": "ko",
        "shortMeaning": "〜まで",
        "meaning": "〜まで"
      },
      {
        "surface": "좋다",
        "base": "좋다",
        "language": "ko",
        "shortMeaning": "良い",
        "meaning": "良い"
      },
      {
        "surface": "좋지 않다",
        "base": "좋지 않다",
        "language": "ko",
        "shortMeaning": "良くない",
        "meaning": "良くない"
      }
    ]
  },
  "그래 맞아 나는 평생 혼자일지도": {
    "japanese": "そうだよね。私は一生ひとりなのかもしれない。",
    "literalJapanese": "そう、合ってる。私は一生一人かもしれない。",
    "sentenceExplanation": "かなり悲観的。 「愛されたい」気持ちがあるからこそ、一生ひとりかもという不安が出ている。",
    "nuance": "かなり悲観的。 「愛されたい」気持ちがあるからこそ、一生ひとりかもという不安が出ている。",
    "tokens": [
      {
        "surface": "그래",
        "base": "그래",
        "language": "ko",
        "shortMeaning": "そう",
        "meaning": "そう"
      },
      {
        "surface": "맞다",
        "base": "맞다",
        "language": "ko",
        "shortMeaning": "合っている、その通りだ",
        "meaning": "合っている、その通りだ"
      },
      {
        "surface": "맞아",
        "base": "맞아",
        "language": "ko",
        "shortMeaning": "そうだ、その通り",
        "meaning": "そうだ、その通り"
      },
      {
        "surface": "나는",
        "base": "나는",
        "language": "ko",
        "shortMeaning": "私は",
        "meaning": "私は"
      },
      {
        "surface": "평생",
        "base": "평생",
        "language": "ko",
        "shortMeaning": "一生",
        "meaning": "一生"
      },
      {
        "surface": "혼자",
        "base": "혼자",
        "language": "ko",
        "shortMeaning": "一人",
        "meaning": "一人"
      },
      {
        "surface": "-일지도",
        "base": "-일지도",
        "language": "ko",
        "shortMeaning": "〜かもしれない",
        "meaning": "〜かもしれない"
      }
    ]
  },
  "Please give me your Like button": {
    "japanese": "あなたの「いいね」をちょうだい。",
    "literalJapanese": "あなたのいいねボタンをください。",
    "sentenceExplanation": "前半では「Hate button」を求めていたが、ここでは「Like button」になる。 本音は嫌われたいのではなく、認められたい、愛されたい。",
    "nuance": "前半では「Hate button」を求めていたが、ここでは「Like button」になる。 本音は嫌われたいのではなく、認められたい、愛されたい。",
    "tokens": [
      {
        "surface": "give me",
        "base": "give me",
        "language": "en",
        "shortMeaning": "私にちょうだい",
        "meaning": "私にちょうだい"
      },
      {
        "surface": "your Like button",
        "base": "your Like button",
        "language": "en",
        "shortMeaning": "あなたのいいねボタン",
        "meaning": "あなたのいいねボタン"
      }
    ]
  },
  "나도 사랑받고 싶거든": {
    "japanese": "私だって愛されたいから。",
    "literalJapanese": "私も愛されたいから。",
    "sentenceExplanation": "この曲の本音。 SNSを嫌っている、自分を嫌っていると言いながら、結局は愛されたい。",
    "nuance": "この曲の本音。 SNSを嫌っている、自分を嫌っていると言いながら、結局は愛されたい。",
    "tokens": [
      {
        "surface": "나도",
        "base": "나도",
        "language": "ko",
        "shortMeaning": "私も",
        "meaning": "私も"
      },
      {
        "surface": "사랑받다",
        "base": "사랑받다",
        "language": "ko",
        "shortMeaning": "愛される",
        "meaning": "愛される / 사랑 = 愛 / 받다 = 受ける"
      },
      {
        "surface": "사랑받고 싶다",
        "base": "사랑받고 싶다",
        "language": "ko",
        "shortMeaning": "愛されたい",
        "meaning": "愛されたい"
      },
      {
        "surface": "-거든",
        "base": "-거든",
        "language": "ko",
        "shortMeaning": "〜なんだよ、〜だから",
        "meaning": "〜なんだよ、〜だから"
      }
    ]
  },
  "라라라라라 라라라 라라라": {
    "japanese": "ラララララ、ラララ、ラララ。",
    "literalJapanese": "ラララララ、ラララ、ラララ。",
    "sentenceExplanation": "この行では「ラララララ、ラララ、ラララ。」と伝えている。",
    "tokens": [
      {
        "surface": "라라라라라 라라라 라라라",
        "base": "라라라라라 라라라 라라라",
        "language": "ko",
        "shortMeaning": "ラララララ、ラララ、ラララ",
        "meaning": "ラララララ、ラララ、ラララ。"
      }
    ]
  },
  "라라라라라 라라라 라": {
    "japanese": "ラララララ、ラララ、ラ。",
    "literalJapanese": "ラララララ、ラララ、ラ。",
    "sentenceExplanation": "この行では「ラララララ、ラララ、ラ。」と伝えている。",
    "tokens": [
      {
        "surface": "라라라라라 라라라 라",
        "base": "라라라라라 라라라 라",
        "language": "ko",
        "shortMeaning": "ラララララ、ラララ、ラ",
        "meaning": "ラララララ、ラララ、ラ。"
      }
    ]
  }
};

const lyricsSequence: string[] = [
  "얼굴 없는 Feed",
  "파리 날리는 Followers",
  "I'm a hater of Instagram",
  "Hater of TikTok",
  "Lock 걸린 갤러리",
  "볼품없는 Fit",
  "뭔데 운동도 안 하고",
  "메이크업 하나도 못하고",
  "그래 난 내가 봐도 별로인걸",
  "매일 밤 In 탐색 Tab",
  "나만 없는 샤넬",
  "왠지 나보다 성숙한 요즘 10대",
  "MZ 해시태그 What the Y2K",
  "세상은 나 빼고 잘 돌아가",
  "Please give me the Hate button",
  "난 내가 너무 싫거든",
  "빌어먹을 My name",
  "Why ain't I pretty",
  "Why ain't I lovely",
  "Why ain't I sexy",
  "Why am I me",
  "Love me love me",
  "love me love me love me, want",
  "Love me love me",
  "love me love me love me, want",
  "She so pretty",
  "Yea so lovely",
  "She got everything",
  "Why am I not her",
  "Love me love me",
  "love me love me love me but",
  "빌어먹을 Huh 내 거울 알러지",
  "나도 Want to dance Hype Boy",
  "But 화면 속엔 Like TOMBOY",
  "비웃을 거야 그래 그 Boy",
  "Oh god it's so funny",
  "말투는 왜 Too much dope",
  "내가 뭔데 성격까지 좋지 않아",
  "그래 맞아 나는 평생 혼자일지도",
  "Please give me your Like button",
  "나도 사랑받고 싶거든",
  "빌어먹을 My name",
  "Why ain't I pretty",
  "Why ain't I lovely",
  "Why ain't I sexy",
  "Why am I me",
  "Love me love me",
  "love me love me love me, want",
  "Love me love me",
  "love me love me love me, want",
  "She so pretty",
  "Yea so lovely",
  "She got everything",
  "Why am I not her",
  "Love me love me",
  "love me love me love me but",
  "빌어먹을 Huh 내 거울 알러지",
  "라라라라라 라라라 라라라",
  "라라라라라 라라라 라",
  "라라라라라 라라라 라라라",
  "라라라라라 라라라 라",
  "빌어먹을 Huh 내 거울 알러지"
];

export const completeAllergyLines: LyricLine[] = lyricsSequence.map((korean, index) => {
  const template = lineTemplates[korean];

  return {
    id: `idle-allergy-line-${index + 1}`,
    korean,
    japanese: template.japanese,
    literalJapanese: template.literalJapanese,
    sentenceExplanation: template.sentenceExplanation,
    ...(template.nuance ? { nuance: template.nuance } : {}),
    tokens: template.tokens.map((token, tokenIndex) => ({
      ...token,
      id: `idle-allergy-line-${index + 1}-token-${tokenIndex + 1}`,
    })),
  };
});

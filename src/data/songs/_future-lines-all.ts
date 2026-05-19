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
  "어딘지 모를 꿈결 속에서": {
    "japanese": "どこか分からない夢の中で。",
    "literalJapanese": "どこか分からない夢心地の中で。",
    "sentenceExplanation": "どこか分からない夢の中で。",
    "nuance": "現実なのか夢なのか曖昧な場所。 未来への希望や不安が、夢のような景色として描かれている。",
    "tokens": [
      {
        "surface": "어딘지",
        "base": "어딘지",
        "language": "ko",
        "shortMeaning": "どこなのか",
        "meaning": "どこなのか / 어디 = どこ / -인지 = 〜なのか"
      },
      {
        "surface": "모르다",
        "base": "모르다",
        "language": "ko",
        "shortMeaning": "分からない",
        "meaning": "分からない"
      },
      {
        "surface": "모를",
        "base": "모를",
        "language": "ko",
        "shortMeaning": "分からない〜",
        "meaning": "分からない〜"
      },
      {
        "surface": "꿈결",
        "base": "꿈결",
        "language": "ko",
        "shortMeaning": "夢心地、夢の中のような状態",
        "meaning": "夢心地、夢の中のような状態 / 꿈 = 夢 / 결 = 流れ、感じ"
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
  "행복한 날 또 본 것 같았어": {
    "japanese": "幸せな自分をまた見た気がした。",
    "literalJapanese": "幸せな私をまた見たようだった。",
    "sentenceExplanation": "幸せな自分をまた見た気がした。",
    "nuance": "未来の幸せな自分を、夢の中でちらっと見たような感覚。 まだ現実ではないが、希望として見えている。",
    "tokens": [
      {
        "surface": "행복하다",
        "base": "행복하다",
        "language": "ko",
        "shortMeaning": "幸せだ",
        "meaning": "幸せだ"
      },
      {
        "surface": "행복한",
        "base": "행복한",
        "language": "ko",
        "shortMeaning": "幸せな〜",
        "meaning": "幸せな〜"
      },
      {
        "surface": "날",
        "base": "날",
        "language": "ko",
        "shortMeaning": "나를 の縮約",
        "meaning": "나를 の縮約 / 私を"
      },
      {
        "surface": "또",
        "base": "또",
        "language": "ko",
        "shortMeaning": "また",
        "meaning": "また"
      },
      {
        "surface": "보다",
        "base": "보다",
        "language": "ko",
        "shortMeaning": "見る",
        "meaning": "見る"
      },
      {
        "surface": "본 것 같다",
        "base": "본 것 같다",
        "language": "ko",
        "shortMeaning": "見たようだ、見た気がする",
        "meaning": "見たようだ、見た気がする"
      },
      {
        "surface": "같았어",
        "base": "같았어",
        "language": "ko",
        "shortMeaning": "〜だった、〜のようだった",
        "meaning": "〜だった、〜のようだった"
      }
    ]
  },
  "다가올 내일은 불안한 표정이지만": {
    "japanese": "やってくる明日は、不安そうな顔をしているけれど。",
    "literalJapanese": "近づいてくる明日は不安な表情だけれど。",
    "sentenceExplanation": "これから来る明日は、不安そうな顔をしているけれど。",
    "nuance": "明日そのものに「不安な表情」があるように表している。 未来への期待だけでなく、不安も同時にある。",
    "tokens": [
      {
        "surface": "다가오다",
        "base": "다가오다",
        "language": "ko",
        "shortMeaning": "近づいてくる",
        "meaning": "近づいてくる"
      },
      {
        "surface": "다가올",
        "base": "다가올",
        "language": "ko",
        "shortMeaning": "近づいてくる〜、やってくる〜",
        "meaning": "近づいてくる〜、やってくる〜"
      },
      {
        "surface": "내일",
        "base": "내일",
        "language": "ko",
        "shortMeaning": "明日",
        "meaning": "明日"
      },
      {
        "surface": "-은",
        "base": "-은",
        "language": "ko",
        "shortMeaning": "〜は",
        "meaning": "〜は"
      },
      {
        "surface": "불안하다",
        "base": "불안하다",
        "language": "ko",
        "shortMeaning": "不安だ",
        "meaning": "不安だ"
      },
      {
        "surface": "불안한",
        "base": "불안한",
        "language": "ko",
        "shortMeaning": "不安な〜",
        "meaning": "不安な〜"
      },
      {
        "surface": "표정",
        "base": "표정",
        "language": "ko",
        "shortMeaning": "表情、顔つき",
        "meaning": "表情、顔つき"
      },
      {
        "surface": "-이지만",
        "base": "-이지만",
        "language": "ko",
        "shortMeaning": "〜だけれど",
        "meaning": "〜だけれど"
      }
    ]
  },
  "쉽게 나를 놓을 순 없네": {
    "japanese": "それでも、私は簡単には自分を諦められない。",
    "literalJapanese": "簡単に私を手放すことはできないね。",
    "sentenceExplanation": "それでも、私は簡単には自分を諦められない。",
    "nuance": "不安でも、自分自身を手放さない。 夢や自分らしさを諦めないという意味に読める。",
    "tokens": [
      {
        "surface": "쉽게",
        "base": "쉽게",
        "language": "ko",
        "shortMeaning": "簡単に、たやすく",
        "meaning": "簡単に、たやすく"
      },
      {
        "surface": "나를",
        "base": "나를",
        "language": "ko",
        "shortMeaning": "私を",
        "meaning": "私を"
      },
      {
        "surface": "놓다",
        "base": "놓다",
        "language": "ko",
        "shortMeaning": "手放す、離す",
        "meaning": "手放す、離す"
      },
      {
        "surface": "놓을 수 없다",
        "base": "놓을 수 없다",
        "language": "ko",
        "shortMeaning": "手放すことができない",
        "meaning": "手放すことができない"
      },
      {
        "surface": "순",
        "base": "순",
        "language": "ko",
        "shortMeaning": "수는 の縮約",
        "meaning": "수는 の縮約 / 〜することは"
      },
      {
        "surface": "없네",
        "base": "없네",
        "language": "ko",
        "shortMeaning": "ないね、できないね",
        "meaning": "ないね、できないね"
      }
    ]
  },
  "찬란한 빛을 향해 걸어": {
    "japanese": "まばゆい光へ向かって歩いていく。",
    "literalJapanese": "まばゆい光に向かって歩く。",
    "sentenceExplanation": "まばゆい光へ向かって歩いていく。",
    "nuance": "未来、希望、夢へ向かって進むイメージ。 暗い場所から光へ進む流れ。",
    "tokens": [
      {
        "surface": "찬란하다",
        "base": "찬란하다",
        "language": "ko",
        "shortMeaning": "きらびやかだ、まばゆい",
        "meaning": "きらびやかだ、まばゆい"
      },
      {
        "surface": "찬란한",
        "base": "찬란한",
        "language": "ko",
        "shortMeaning": "まばゆい〜",
        "meaning": "まばゆい〜"
      },
      {
        "surface": "빛",
        "base": "빛",
        "language": "ko",
        "shortMeaning": "光",
        "meaning": "光"
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
      },
      {
        "surface": "걷다",
        "base": "걷다",
        "language": "ko",
        "shortMeaning": "歩く",
        "meaning": "歩く"
      },
      {
        "surface": "걸어",
        "base": "걸어",
        "language": "ko",
        "shortMeaning": "歩く",
        "meaning": "歩く"
      }
    ]
  },
  "나를 가둘 듯한 미로": {
    "japanese": "私を閉じ込めるような迷路の中で。",
    "literalJapanese": "私を閉じ込めるような迷路。",
    "sentenceExplanation": "私を閉じ込めるような迷路の中で。",
    "nuance": "出口が見えない不安、人生の迷い。 未来へ進みたいのに、道が複雑で閉じ込められている感じ。",
    "tokens": [
      {
        "surface": "나를",
        "base": "나를",
        "language": "ko",
        "shortMeaning": "私を",
        "meaning": "私を"
      },
      {
        "surface": "가두다",
        "base": "가두다",
        "language": "ko",
        "shortMeaning": "閉じ込める",
        "meaning": "閉じ込める"
      },
      {
        "surface": "가둘",
        "base": "가둘",
        "language": "ko",
        "shortMeaning": "閉じ込める〜",
        "meaning": "閉じ込める〜"
      },
      {
        "surface": "듯하다",
        "base": "듯하다",
        "language": "ko",
        "shortMeaning": "〜のようだ",
        "meaning": "〜のようだ"
      },
      {
        "surface": "듯한",
        "base": "듯한",
        "language": "ko",
        "shortMeaning": "〜のような",
        "meaning": "〜のような"
      },
      {
        "surface": "미로",
        "base": "미로",
        "language": "ko",
        "shortMeaning": "迷路",
        "meaning": "迷路"
      }
    ]
  },
  "그럴 때마다 난 너를 기억해": {
    "japanese": "そんな時、私はあなたを思い出す。",
    "literalJapanese": "そんな時ごとに私はあなたを思い出す。",
    "sentenceExplanation": "そんな時、私はあなたを思い出す。",
    "nuance": "迷った時、不安な時、相手の存在が支えになる。 “너” が未来へ進む力になっている。",
    "tokens": [
      {
        "surface": "그럴 때마다",
        "base": "그럴 때마다",
        "language": "ko",
        "shortMeaning": "そんな時ごとに、そんな時はいつも",
        "meaning": "そんな時ごとに、そんな時はいつも / 그렇다 = そうだ / 때 = 時 / -마다 = 〜ごとに"
      },
      {
        "surface": "난",
        "base": "난",
        "language": "ko",
        "shortMeaning": "나는",
        "meaning": "나는 / 私は"
      },
      {
        "surface": "너를",
        "base": "너를",
        "language": "ko",
        "shortMeaning": "あなたを",
        "meaning": "あなたを"
      },
      {
        "surface": "기억하다",
        "base": "기억하다",
        "language": "ko",
        "shortMeaning": "記憶する、思い出す",
        "meaning": "記憶する、思い出す"
      },
      {
        "surface": "기억해",
        "base": "기억해",
        "language": "ko",
        "shortMeaning": "思い出す",
        "meaning": "思い出す"
      }
    ]
  },
  "내 꿈을 잊지 않게 해줘": {
    "japanese": "私が夢を忘れないようにしてくれる。",
    "literalJapanese": "私の夢を忘れないようにしてくれ。",
    "sentenceExplanation": "私が夢を忘れないようにしてくれる。",
    "nuance": "相手がいるから、自分の夢を思い出せる。 ただ恋の相手というより、人生の方向を見失わないための光のような存在。",
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
        "surface": "-을",
        "base": "-을",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
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
        "surface": "-게 하다",
        "base": "-게 하다",
        "language": "ko",
        "shortMeaning": "〜するようにする",
        "meaning": "〜するようにする"
      },
      {
        "surface": "해줘",
        "base": "해줘",
        "language": "ko",
        "shortMeaning": "してくれる、してほしい",
        "meaning": "してくれる、してほしい"
      }
    ]
  },
  "별이 쏟아지는 곳에": {
    "japanese": "星が降り注ぐ場所で。",
    "literalJapanese": "星が降り注ぐ場所に。",
    "sentenceExplanation": "星が降り注ぐ場所で。",
    "nuance": "希望、夢、ロマンチックな未来の象徴。 普通の場所ではなく、夢が叶うような幻想的な場所。",
    "tokens": [
      {
        "surface": "별",
        "base": "별",
        "language": "ko",
        "shortMeaning": "星",
        "meaning": "星"
      },
      {
        "surface": "-이",
        "base": "-이",
        "language": "ko",
        "shortMeaning": "〜が",
        "meaning": "〜が"
      },
      {
        "surface": "쏟아지다",
        "base": "쏟아지다",
        "language": "ko",
        "shortMeaning": "降り注ぐ、あふれ落ちる",
        "meaning": "降り注ぐ、あふれ落ちる"
      },
      {
        "surface": "쏟아지는",
        "base": "쏟아지는",
        "language": "ko",
        "shortMeaning": "降り注ぐ〜",
        "meaning": "降り注ぐ〜"
      },
      {
        "surface": "곳",
        "base": "곳",
        "language": "ko",
        "shortMeaning": "場所",
        "meaning": "場所"
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
  "우린 결국 함께 한다고": {
    "japanese": "私たちは最後には一緒にいるのだと。",
    "literalJapanese": "私たちは結局一緒にいるのだと。",
    "sentenceExplanation": "私たちは最後には一緒にいるのだと。",
    "nuance": "今は不安でも、最後には一緒に未来へ行けるという信念。 “결국” があるので、途中に困難があっても最後は一緒という感じ。",
    "tokens": [
      {
        "surface": "우린",
        "base": "우린",
        "language": "ko",
        "shortMeaning": "우리는",
        "meaning": "우리는 / 私たちは"
      },
      {
        "surface": "결국",
        "base": "결국",
        "language": "ko",
        "shortMeaning": "結局、最後には",
        "meaning": "結局、最後には"
      },
      {
        "surface": "함께 하다",
        "base": "함께 하다",
        "language": "ko",
        "shortMeaning": "一緒にいる、一緒にする",
        "meaning": "一緒にいる、一緒にする"
      },
      {
        "surface": "한다고",
        "base": "한다고",
        "language": "ko",
        "shortMeaning": "〜すると、〜なのだと",
        "meaning": "〜すると、〜なのだと"
      }
    ]
  },
  "You are my future future": {
    "japanese": "あなたは私の未来。",
    "literalJapanese": "あなたは私の未来、未来。",
    "sentenceExplanation": "あなたは私の未来。",
    "nuance": "相手が単に「好きな人」ではなく、自分のこれからの人生そのものに結びついている。 この曲の中心表現。",
    "tokens": [
      {
        "surface": "future",
        "base": "future",
        "language": "en",
        "shortMeaning": "未来",
        "meaning": "未来"
      }
    ]
  },
  "All the time": {
    "japanese": "いつだって。",
    "literalJapanese": "いつも。",
    "sentenceExplanation": "いつだって。",
    "nuance": "一時的ではなく、ずっと相手が未来であり続けるという意味。",
    "tokens": [
      {
        "surface": "all the time",
        "base": "all the time",
        "language": "en",
        "shortMeaning": "いつも、ずっと",
        "meaning": "いつも、ずっと"
      }
    ]
  },
  "힘든 시간들을 건너 너의 손을 잡고 싶어": {
    "japanese": "つらい時間を乗り越えて、あなたの手を握りたい。",
    "literalJapanese": "つらい時間たちを越えて、あなたの手を握りたい。",
    "sentenceExplanation": "つらい時間を乗り越えて、あなたの手を握りたい。",
    "nuance": "困難を越えた先で相手とつながりたい。 「手を握る」は、安心・支え・愛の象徴。",
    "tokens": [
      {
        "surface": "힘들다",
        "base": "힘들다",
        "language": "ko",
        "shortMeaning": "つらい、大変だ",
        "meaning": "つらい、大変だ"
      },
      {
        "surface": "힘든",
        "base": "힘든",
        "language": "ko",
        "shortMeaning": "つらい〜",
        "meaning": "つらい〜"
      },
      {
        "surface": "시간들",
        "base": "시간들",
        "language": "ko",
        "shortMeaning": "時間たち、日々",
        "meaning": "時間たち、日々"
      },
      {
        "surface": "-을",
        "base": "-을",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "건너다",
        "base": "건너다",
        "language": "ko",
        "shortMeaning": "渡る、越える",
        "meaning": "渡る、越える"
      },
      {
        "surface": "건너",
        "base": "건너",
        "language": "ko",
        "shortMeaning": "越えて",
        "meaning": "越えて"
      },
      {
        "surface": "너의",
        "base": "너의",
        "language": "ko",
        "shortMeaning": "あなたの",
        "meaning": "あなたの"
      },
      {
        "surface": "손",
        "base": "손",
        "language": "ko",
        "shortMeaning": "手",
        "meaning": "手"
      },
      {
        "surface": "-을",
        "base": "-을",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "잡다",
        "base": "잡다",
        "language": "ko",
        "shortMeaning": "握る、つかむ",
        "meaning": "握る、つかむ"
      },
      {
        "surface": "잡고 싶다",
        "base": "잡고 싶다",
        "language": "ko",
        "shortMeaning": "握りたい",
        "meaning": "握りたい"
      }
    ]
  },
  "You are my sunshine sunshine": {
    "japanese": "あなたは私の光。",
    "literalJapanese": "あなたは私の陽ざし、陽ざし。",
    "sentenceExplanation": "あなたは私の光。",
    "nuance": "相手が暗さや不安を照らしてくれる存在。 “future” よりも、今の自分を温かく照らすイメージ。",
    "tokens": [
      {
        "surface": "sunshine",
        "base": "sunshine",
        "language": "en",
        "shortMeaning": "日差し、太陽の光",
        "meaning": "日差し、太陽の光"
      }
    ]
  },
  "All the day": {
    "japanese": "一日中ずっと。",
    "literalJapanese": "一日中。",
    "sentenceExplanation": "一日中ずっと。",
    "nuance": "朝から夜まで、相手が自分を照らしている感覚。",
    "tokens": [
      {
        "surface": "all day",
        "base": "all day",
        "language": "en",
        "shortMeaning": "一日中",
        "meaning": "一日中",
        "explanation": "歌詞では “All the day” としてリズムに合わせている。"
      }
    ]
  },
  "해가 밤을 돌아 아침을 또 만든 것처럼": {
    "japanese": "太陽が夜を越えて、また朝を連れてくるように。",
    "literalJapanese": "太陽が夜を回って、朝をまた作ったように。",
    "sentenceExplanation": "太陽が夜を越えて、また朝を連れてくるように。",
    "nuance": "夜＝不安・暗い時間。 朝＝希望・新しい始まり。 太陽が夜を越えて朝を作るように、相手も自分を明るい方へ連れていく。",
    "tokens": [
      {
        "surface": "해",
        "base": "해",
        "language": "ko",
        "shortMeaning": "太陽",
        "meaning": "太陽"
      },
      {
        "surface": "-가",
        "base": "-가",
        "language": "ko",
        "shortMeaning": "〜が",
        "meaning": "〜が"
      },
      {
        "surface": "밤",
        "base": "밤",
        "language": "ko",
        "shortMeaning": "夜",
        "meaning": "夜"
      },
      {
        "surface": "-을",
        "base": "-을",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "돌다",
        "base": "돌다",
        "language": "ko",
        "shortMeaning": "回る、巡る",
        "meaning": "回る、巡る"
      },
      {
        "surface": "돌아",
        "base": "돌아",
        "language": "ko",
        "shortMeaning": "回って、巡って",
        "meaning": "回って、巡って"
      },
      {
        "surface": "아침",
        "base": "아침",
        "language": "ko",
        "shortMeaning": "朝",
        "meaning": "朝"
      },
      {
        "surface": "-을",
        "base": "-을",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "또",
        "base": "또",
        "language": "ko",
        "shortMeaning": "また",
        "meaning": "また"
      },
      {
        "surface": "만들다",
        "base": "만들다",
        "language": "ko",
        "shortMeaning": "作る",
        "meaning": "作る"
      },
      {
        "surface": "만든 것처럼",
        "base": "만든 것처럼",
        "language": "ko",
        "shortMeaning": "作ったように",
        "meaning": "作ったように"
      }
    ]
  },
  "날 비춰줘": {
    "japanese": "私を照らして。",
    "literalJapanese": "私を照らして。",
    "sentenceExplanation": "私を照らして。",
    "nuance": "迷っている自分に光を当ててほしい。 相手への依存というより、希望としての相手を求めている。",
    "tokens": [
      {
        "surface": "날",
        "base": "날",
        "language": "ko",
        "shortMeaning": "나를",
        "meaning": "나를 / 私を"
      },
      {
        "surface": "비추다",
        "base": "비추다",
        "language": "ko",
        "shortMeaning": "照らす",
        "meaning": "照らす"
      },
      {
        "surface": "비춰주다",
        "base": "비춰주다",
        "language": "ko",
        "shortMeaning": "照らしてくれる",
        "meaning": "照らしてくれる"
      },
      {
        "surface": "비춰줘",
        "base": "비춰줘",
        "language": "ko",
        "shortMeaning": "照らして",
        "meaning": "照らして"
      }
    ]
  },
  "너는 또 다른 나의 미래": {
    "japanese": "あなたは、もう一つの私の未来。",
    "literalJapanese": "あなたはもう一つの私の未来。",
    "sentenceExplanation": "あなたは、もう一つの私の未来。",
    "nuance": "自分一人で進む未来とは別に、相手と一緒にある未来が存在する。 相手が自分の人生の可能性を広げている。",
    "tokens": [
      {
        "surface": "너는",
        "base": "너는",
        "language": "ko",
        "shortMeaning": "あなたは",
        "meaning": "あなたは"
      },
      {
        "surface": "또 다른",
        "base": "또 다른",
        "language": "ko",
        "shortMeaning": "もう一つの、また別の",
        "meaning": "もう一つの、また別の"
      },
      {
        "surface": "나의",
        "base": "나의",
        "language": "ko",
        "shortMeaning": "私の",
        "meaning": "私の"
      },
      {
        "surface": "미래",
        "base": "미래",
        "language": "ko",
        "shortMeaning": "未来",
        "meaning": "未来"
      }
    ]
  },
  "영원히 계속될 Love way": {
    "japanese": "永遠に続いていく愛の道。",
    "literalJapanese": "永遠に続くLove way。",
    "sentenceExplanation": "永遠に続いていく愛の道。",
    "nuance": "愛が一時的な感情ではなく、未来へ続いていく道として描かれている。 “way” は進む方向・道のイメージ。",
    "tokens": [
      {
        "surface": "영원히",
        "base": "영원히",
        "language": "ko",
        "shortMeaning": "永遠に",
        "meaning": "永遠に"
      },
      {
        "surface": "계속되다",
        "base": "계속되다",
        "language": "ko",
        "shortMeaning": "続く",
        "meaning": "続く"
      },
      {
        "surface": "계속될",
        "base": "계속될",
        "language": "ko",
        "shortMeaning": "続く〜",
        "meaning": "続く〜"
      },
      {
        "surface": "Love way",
        "base": "Love way",
        "language": "en",
        "shortMeaning": "愛の道",
        "meaning": "愛の道"
      }
    ]
  },
  "I'll show you my love": {
    "japanese": "私の愛を見せてあげる。",
    "literalJapanese": "私はあなたに私の愛を見せる。",
    "sentenceExplanation": "私の愛を見せてあげる。",
    "nuance": "心の中で思っているだけではなく、相手に愛を示したい。 行動で伝えるニュアンスもある。",
    "tokens": [
      {
        "surface": "show",
        "base": "show",
        "language": "en",
        "shortMeaning": "見せる",
        "meaning": "見せる"
      },
      {
        "surface": "my love",
        "base": "my love",
        "language": "en",
        "shortMeaning": "私の愛",
        "meaning": "私の愛"
      }
    ]
  },
  "가끔 넘어져 상처가 나도": {
    "japanese": "時には転んで、傷ついても。",
    "literalJapanese": "時々転んで傷ができても。",
    "sentenceExplanation": "時には転んで、傷ついても。",
    "nuance": "未来へ進む途中で失敗したり傷ついたりすることもある。 それでも進む歌。",
    "tokens": [
      {
        "surface": "가끔",
        "base": "가끔",
        "language": "ko",
        "shortMeaning": "時々",
        "meaning": "時々"
      },
      {
        "surface": "넘어지다",
        "base": "넘어지다",
        "language": "ko",
        "shortMeaning": "転ぶ、倒れる",
        "meaning": "転ぶ、倒れる"
      },
      {
        "surface": "넘어져",
        "base": "넘어져",
        "language": "ko",
        "shortMeaning": "転んで",
        "meaning": "転んで"
      },
      {
        "surface": "상처",
        "base": "상처",
        "language": "ko",
        "shortMeaning": "傷",
        "meaning": "傷"
      },
      {
        "surface": "-가 나다",
        "base": "-가 나다",
        "language": "ko",
        "shortMeaning": "できる、生じる",
        "meaning": "できる、生じる"
      },
      {
        "surface": "상처가 나다",
        "base": "상처가 나다",
        "language": "ko",
        "shortMeaning": "傷ができる、傷つく",
        "meaning": "傷ができる、傷つく"
      },
      {
        "surface": "나도",
        "base": "나도",
        "language": "ko",
        "shortMeaning": "できても",
        "meaning": "できても"
      }
    ]
  },
  "웃는 모습 난 그게 좋았어": {
    "japanese": "それでも笑うあなたの姿が、私は好きだった。",
    "literalJapanese": "笑う姿、私はそれがよかった。",
    "sentenceExplanation": "それでも笑うあなたの姿が、私は好きだった。",
    "nuance": "傷ついても笑う相手の姿に惹かれている。 強さと優しさを感じている。",
    "tokens": [
      {
        "surface": "웃다",
        "base": "웃다",
        "language": "ko",
        "shortMeaning": "笑う",
        "meaning": "笑う"
      },
      {
        "surface": "웃는",
        "base": "웃는",
        "language": "ko",
        "shortMeaning": "笑っている〜",
        "meaning": "笑っている〜"
      },
      {
        "surface": "모습",
        "base": "모습",
        "language": "ko",
        "shortMeaning": "姿",
        "meaning": "姿"
      },
      {
        "surface": "난",
        "base": "난",
        "language": "ko",
        "shortMeaning": "私は",
        "meaning": "私は"
      },
      {
        "surface": "그게",
        "base": "그게",
        "language": "ko",
        "shortMeaning": "それが",
        "meaning": "それが"
      },
      {
        "surface": "좋다",
        "base": "좋다",
        "language": "ko",
        "shortMeaning": "好きだ、良い",
        "meaning": "好きだ、良い"
      },
      {
        "surface": "좋았어",
        "base": "좋았어",
        "language": "ko",
        "shortMeaning": "好きだった、よかった",
        "meaning": "好きだった、よかった"
      }
    ]
  },
  "굳은 다짐들 한 번씩 무너지지만": {
    "japanese": "固く決めたはずの覚悟が、ときどき崩れてしまっても。",
    "literalJapanese": "固い誓いたちが一度ずつ崩れるけれど。",
    "sentenceExplanation": "固く決めたはずの覚悟が、ときどき崩れてしまっても。",
    "nuance": "「絶対頑張る」と決めても、人は不安や疲れで揺れる。 この曲は完全に強い人ではなく、揺れながらも進む人を描いている。",
    "tokens": [
      {
        "surface": "굳다",
        "base": "굳다",
        "language": "ko",
        "shortMeaning": "固い、固まる",
        "meaning": "固い、固まる"
      },
      {
        "surface": "굳은",
        "base": "굳은",
        "language": "ko",
        "shortMeaning": "固い〜",
        "meaning": "固い〜"
      },
      {
        "surface": "다짐",
        "base": "다짐",
        "language": "ko",
        "shortMeaning": "決意、誓い",
        "meaning": "決意、誓い"
      },
      {
        "surface": "다짐들",
        "base": "다짐들",
        "language": "ko",
        "shortMeaning": "決意たち",
        "meaning": "決意たち"
      },
      {
        "surface": "한 번씩",
        "base": "한 번씩",
        "language": "ko",
        "shortMeaning": "一度ずつ、時々",
        "meaning": "一度ずつ、時々"
      },
      {
        "surface": "무너지다",
        "base": "무너지다",
        "language": "ko",
        "shortMeaning": "崩れる",
        "meaning": "崩れる"
      },
      {
        "surface": "무너지지만",
        "base": "무너지지만",
        "language": "ko",
        "shortMeaning": "崩れるけれど",
        "meaning": "崩れるけれど"
      }
    ]
  },
  "너를 보면 견딜 수 있어": {
    "japanese": "あなたを見れば、私は耐えられる。",
    "literalJapanese": "あなたを見ると耐えることができる。",
    "sentenceExplanation": "あなたを見れば、私は耐えられる。",
    "nuance": "相手が心の支え。 未来への不安や痛みを耐える力になる。",
    "tokens": [
      {
        "surface": "너를",
        "base": "너를",
        "language": "ko",
        "shortMeaning": "あなたを",
        "meaning": "あなたを"
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
        "shortMeaning": "見れば",
        "meaning": "見れば"
      },
      {
        "surface": "견디다",
        "base": "견디다",
        "language": "ko",
        "shortMeaning": "耐える、持ちこたえる",
        "meaning": "耐える、持ちこたえる"
      },
      {
        "surface": "견딜 수 있다",
        "base": "견딜 수 있다",
        "language": "ko",
        "shortMeaning": "耐えられる",
        "meaning": "耐えられる"
      },
      {
        "surface": "있어",
        "base": "있어",
        "language": "ko",
        "shortMeaning": "できる",
        "meaning": "できる"
      }
    ]
  },
  "날 비춰 줘": {
    "japanese": "私を照らして。",
    "literalJapanese": "私を照らして。",
    "sentenceExplanation": "私を照らして。",
    "nuance": "迷っている自分に光を当ててほしい。 相手への依存というより、希望としての相手を求めている。",
    "tokens": [
      {
        "surface": "날",
        "base": "날",
        "language": "ko",
        "shortMeaning": "나를",
        "meaning": "나를 / 私を"
      },
      {
        "surface": "비추다",
        "base": "비추다",
        "language": "ko",
        "shortMeaning": "照らす",
        "meaning": "照らす"
      },
      {
        "surface": "비춰주다",
        "base": "비춰주다",
        "language": "ko",
        "shortMeaning": "照らしてくれる",
        "meaning": "照らしてくれる"
      },
      {
        "surface": "비춰줘",
        "base": "비춰줘",
        "language": "ko",
        "shortMeaning": "照らして",
        "meaning": "照らして"
      }
    ]
  }
};

const lyricsSequence: string[] = [
  "어딘지 모를 꿈결 속에서",
  "행복한 날 또 본 것 같았어",
  "다가올 내일은 불안한 표정이지만",
  "쉽게 나를 놓을 순 없네",
  "찬란한 빛을 향해 걸어",
  "나를 가둘 듯한 미로",
  "그럴 때마다 난 너를 기억해",
  "내 꿈을 잊지 않게 해줘",
  "별이 쏟아지는 곳에",
  "우린 결국 함께 한다고",
  "You are my future future",
  "All the time",
  "힘든 시간들을 건너 너의 손을 잡고 싶어",
  "You are my sunshine sunshine",
  "All the day",
  "해가 밤을 돌아 아침을 또 만든 것처럼",
  "날 비춰줘",
  "너는 또 다른 나의 미래",
  "영원히 계속될 Love way",
  "너는 또 다른 나의 미래",
  "I'll show you my love",
  "가끔 넘어져 상처가 나도",
  "웃는 모습 난 그게 좋았어",
  "굳은 다짐들 한 번씩 무너지지만",
  "너를 보면 견딜 수 있어",
  "찬란한 빛을 향해 걸어",
  "나를 가둘 듯한 미로",
  "그럴 때마다 난 너를 기억해",
  "내 꿈을 잊지 않게 해줘",
  "별이 쏟아지는 곳에",
  "우린 결국 함께 한다고",
  "You are my future future",
  "All the time",
  "힘든 시간들을 건너 너의 손을 잡고 싶어",
  "You are my sunshine sunshine",
  "All the day",
  "해가 밤을 돌아 아침을 또 만든 것처럼",
  "날 비춰줘",
  "너는 또 다른 나의 미래",
  "영원히 계속될 Love way",
  "너는 또 다른 나의 미래",
  "I'll show you my love",
  "You are my future future",
  "All the time",
  "힘든 시간들을 건너 너의 손을 잡고 싶어",
  "You are my sunshine sunshine",
  "All the day",
  "해가 밤을 돌아 아침을 또 만든 것처럼",
  "날 비춰 줘",
  "너는 또 다른 나의 미래",
  "영원히 계속될 Love way",
  "너는 또 다른 나의 미래",
  "I'll show you my love"
];

export const completeFutureLines: LyricLine[] = lyricsSequence.map((korean, index) => {
  const template = lineTemplates[korean];

  return {
    id: `red-velvet-future-line-${index + 1}`,
    korean,
    japanese: template.japanese,
    literalJapanese: template.literalJapanese,
    sentenceExplanation: template.sentenceExplanation,
    ...(template.nuance ? { nuance: template.nuance } : {}),
    tokens: template.tokens.map((token, tokenIndex) => ({
      ...token,
      id: `red-velvet-future-line-${index + 1}-token-${tokenIndex + 1}`,
    })),
  };
});

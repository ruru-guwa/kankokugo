import type { LyricLine, Token } from "../../types/song";

type TokenSeed = Omit<Token, "id">;
type LineTemplate = {
  japanese: string;
  literalJapanese: string;
  sentenceExplanation: string;
  tokens: TokenSeed[];
};

const lineTemplates: Record<string, LineTemplate> = {
  "“Shall it all be sung, be done like this\"": {
    "japanese": "すべては、このように歌われ、成し遂げられるのだろうか。",
    "literalJapanese": "それはすべて歌われ、このようになされるべきなのか。",
    "sentenceExplanation": "物語や儀式の始まりのような一文。 普通の会話というより、神話・予言・宣言に近い雰囲気がある。",
    "tokens": [
      {
        "surface": "Shall it all be sung",
        "base": "Shall it all be sung",
        "language": "en",
        "shortMeaning": "それはすべて歌われるべきなのか",
        "meaning": "それはすべて歌われるべきなのか"
      },
      {
        "surface": "be done like this",
        "base": "be done like this",
        "language": "en",
        "shortMeaning": "このように成し遂げられるべきなのか",
        "meaning": "このように成し遂げられるべきなのか"
      }
    ]
  },
  "너의 심장 위에": {
    "japanese": "あなたの心の上に。",
    "literalJapanese": "あなたの心臓の上に。",
    "sentenceExplanation": "単なる「心」よりも、もっと生命の中心に触れる表現。 感情の奥深くに何かが届く感じ。",
    "tokens": [
      {
        "surface": "너의",
        "base": "너의",
        "language": "ko",
        "shortMeaning": "あなたの",
        "meaning": "あなたの"
      },
      {
        "surface": "심장",
        "base": "심장",
        "language": "ko",
        "shortMeaning": "心臓",
        "meaning": "心臓"
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
        "shortMeaning": "〜に、〜の上に",
        "meaning": "〜に、〜の上に"
      }
    ]
  },
  "뿌리내린 순간": {
    "japanese": "根を張ったその瞬間。",
    "literalJapanese": "根を下ろした瞬間。",
    "sentenceExplanation": "一時的な感情ではなく、心の中に深く根づくもの。 歌・夢・情熱が、相手の心に入り込んで定着する感じ。",
    "tokens": [
      {
        "surface": "뿌리",
        "base": "뿌리",
        "language": "ko",
        "shortMeaning": "根",
        "meaning": "根"
      },
      {
        "surface": "내리다",
        "base": "내리다",
        "language": "ko",
        "shortMeaning": "下ろす、降ろす",
        "meaning": "下ろす、降ろす"
      },
      {
        "surface": "뿌리내리다",
        "base": "뿌리내리다",
        "language": "ko",
        "shortMeaning": "根を下ろす、根づく",
        "meaning": "根を下ろす、根づく"
      },
      {
        "surface": "뿌리내린",
        "base": "뿌리내린",
        "language": "ko",
        "shortMeaning": "根を下ろした〜",
        "meaning": "根を下ろした〜"
      },
      {
        "surface": "순간",
        "base": "순간",
        "language": "ko",
        "shortMeaning": "瞬間",
        "meaning": "瞬間"
      }
    ]
  },
  "뻗어나가 깊게": {
    "japanese": "深く広がっていく。",
    "literalJapanese": "深く伸びていく。",
    "sentenceExplanation": "根が心の奥へ伸びていくイメージ。 感情や歌が、表面ではなく深層まで届いている。",
    "tokens": [
      {
        "surface": "뻗다",
        "base": "뻗다",
        "language": "ko",
        "shortMeaning": "伸びる、伸ばす",
        "meaning": "伸びる、伸ばす"
      },
      {
        "surface": "나가다",
        "base": "나가다",
        "language": "ko",
        "shortMeaning": "出ていく、進んでいく",
        "meaning": "出ていく、進んでいく"
      },
      {
        "surface": "뻗어나가다",
        "base": "뻗어나가다",
        "language": "ko",
        "shortMeaning": "伸び広がっていく",
        "meaning": "伸び広がっていく"
      },
      {
        "surface": "깊게",
        "base": "깊게",
        "language": "ko",
        "shortMeaning": "-게 = 〜く",
        "meaning": "深く / 깊다 = 深い / -게 = 〜く",
        "explanation": "깊다 = 深い -게 = 〜く"
      }
    ]
  },
  "이 노래가 들리니 Uh huh": {
    "japanese": "この歌が聞こえている？",
    "literalJapanese": "この歌が聞こえるの？ Uh huh",
    "sentenceExplanation": "ただ音として聞こえるかではなく、 「この歌に込めた願い・情熱・呼びかけが心に届いている？」という意味に近い。",
    "tokens": [
      {
        "surface": "이",
        "base": "이",
        "language": "ko",
        "shortMeaning": "この",
        "meaning": "この"
      },
      {
        "surface": "노래",
        "base": "노래",
        "language": "ko",
        "shortMeaning": "歌",
        "meaning": "歌"
      },
      {
        "surface": "-가",
        "base": "-가",
        "language": "ko",
        "shortMeaning": "〜が",
        "meaning": "〜が"
      },
      {
        "surface": "들리다",
        "base": "들리다",
        "language": "ko",
        "shortMeaning": "聞こえる",
        "meaning": "聞こえる"
      },
      {
        "surface": "들리니?",
        "base": "들리니?",
        "language": "ko",
        "shortMeaning": "聞こえるの？",
        "meaning": "聞こえるの？"
      }
    ]
  },
  "어두운 세상 위에": {
    "japanese": "暗い世界の上へ。",
    "literalJapanese": "暗い世界の上に。",
    "sentenceExplanation": "不安・困難・希望が見えない状況。 その上に次の “Glitter” が降り注ぐ。",
    "tokens": [
      {
        "surface": "어둡다",
        "base": "어둡다",
        "language": "ko",
        "shortMeaning": "暗い",
        "meaning": "暗い"
      },
      {
        "surface": "어두운",
        "base": "어두운",
        "language": "ko",
        "shortMeaning": "暗い〜",
        "meaning": "暗い〜"
      },
      {
        "surface": "세상",
        "base": "세상",
        "language": "ko",
        "shortMeaning": "世界",
        "meaning": "世界"
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
      }
    ]
  },
  "쏟아지는 Glitter": {
    "japanese": "きらめきが降り注いでいる。",
    "literalJapanese": "降り注ぐきらめき。",
    "sentenceExplanation": "暗い世界に光が降ってくる。 絶望の中に、突然希望が差し込むようなイメージ。",
    "tokens": [
      {
        "surface": "쏟아지다",
        "base": "쏟아지다",
        "language": "ko",
        "shortMeaning": "降り注ぐ、あふれ出る",
        "meaning": "降り注ぐ、あふれ出る"
      },
      {
        "surface": "쏟아지는",
        "base": "쏟아지는",
        "language": "ko",
        "shortMeaning": "降り注ぐ〜",
        "meaning": "降り注ぐ〜"
      },
      {
        "surface": "Glitter",
        "base": "Glitter",
        "language": "en",
        "shortMeaning": "きらめき、輝き",
        "meaning": "きらめき、輝き"
      }
    ]
  },
  "목격하고 있어": {
    "japanese": "私は今、それを目にしている。",
    "literalJapanese": "目撃している。",
    "sentenceExplanation": "ただ想像しているのではなく、実際に奇跡が起きているのを見ている感じ。",
    "tokens": [
      {
        "surface": "목격하다",
        "base": "목격하다",
        "language": "ko",
        "shortMeaning": "目撃する",
        "meaning": "目撃する"
      },
      {
        "surface": "-고 있다",
        "base": "-고 있다",
        "language": "ko",
        "shortMeaning": "〜している",
        "meaning": "〜している"
      },
      {
        "surface": "목격하고 있어",
        "base": "목격하고 있어",
        "language": "ko",
        "shortMeaning": "目撃している",
        "meaning": "目撃している"
      }
    ]
  },
  "기적이 틀림없는 것": {
    "japanese": "これは間違いなく奇跡だ。",
    "literalJapanese": "奇跡に違いないもの。",
    "sentenceExplanation": "暗い世界に光が降ること。 夢が現実になり始めること。 それを「奇跡」と呼んでいる。",
    "tokens": [
      {
        "surface": "기적",
        "base": "기적",
        "language": "ko",
        "shortMeaning": "奇跡",
        "meaning": "奇跡"
      },
      {
        "surface": "-이",
        "base": "-이",
        "language": "ko",
        "shortMeaning": "〜が",
        "meaning": "〜が"
      },
      {
        "surface": "틀림없다",
        "base": "틀림없다",
        "language": "ko",
        "shortMeaning": "間違いない",
        "meaning": "間違いない"
      },
      {
        "surface": "틀림없는",
        "base": "틀림없는",
        "language": "ko",
        "shortMeaning": "間違いない〜",
        "meaning": "間違いない〜"
      },
      {
        "surface": "것",
        "base": "것",
        "language": "ko",
        "shortMeaning": "もの、こと",
        "meaning": "もの、こと"
      }
    ]
  },
  "Keep on running": {
    "japanese": "走り続けて。",
    "literalJapanese": "走り続けて。",
    "sentenceExplanation": "止まらずに進むこと。 夢や願いに向かって前進し続ける姿勢。",
    "tokens": [
      {
        "surface": "keep on -ing",
        "base": "keep on -ing",
        "language": "en",
        "shortMeaning": "〜し続ける",
        "meaning": "〜し続ける"
      },
      {
        "surface": "running",
        "base": "running",
        "language": "en",
        "shortMeaning": "走ること",
        "meaning": "走ること"
      }
    ]
  },
  "위험을 겁내지 마": {
    "japanese": "危険を恐れないで。",
    "literalJapanese": "危険を怖がらないで。",
    "sentenceExplanation": "挑戦には危険や不安がある。 でも、それを恐れて止まるなというメッセージ。",
    "tokens": [
      {
        "surface": "위험",
        "base": "위험",
        "language": "ko",
        "shortMeaning": "危険",
        "meaning": "危険"
      },
      {
        "surface": "-을",
        "base": "-을",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "겁내다",
        "base": "겁내다",
        "language": "ko",
        "shortMeaning": "怖がる、恐れる",
        "meaning": "怖がる、恐れる"
      },
      {
        "surface": "겁내지 마",
        "base": "겁내지 마",
        "language": "ko",
        "shortMeaning": "-지 마 = 〜しないで",
        "meaning": "怖がらないで / -지 마 = 〜しないで",
        "explanation": "-지 마 = 〜しないで"
      }
    ]
  },
  "(간직해왔던 불꽃을 일으켜)": {
    "japanese": "（ずっと胸に秘めてきた炎を燃え上がらせて）",
    "literalJapanese": "（大切に持ってきた火花を起こして）",
    "sentenceExplanation": "昔から持っていた夢・情熱・願いを、今こそ表に出すという意味。 「眠っていた火を起こす」感じ。",
    "tokens": [
      {
        "surface": "간직하다",
        "base": "간직하다",
        "language": "ko",
        "shortMeaning": "大切にしまっておく、心に秘める",
        "meaning": "大切にしまっておく、心に秘める"
      },
      {
        "surface": "간직해오다",
        "base": "간직해오다",
        "language": "ko",
        "shortMeaning": "ずっと大切にしてくる",
        "meaning": "ずっと大切にしてくる"
      },
      {
        "surface": "간직해왔던",
        "base": "간직해왔던",
        "language": "ko",
        "shortMeaning": "ずっと大切にしてきた〜",
        "meaning": "ずっと大切にしてきた〜"
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
        "surface": "-을",
        "base": "-을",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "일으키다",
        "base": "일으키다",
        "language": "ko",
        "shortMeaning": "起こす、立ち上げる、引き起こす",
        "meaning": "起こす、立ち上げる、引き起こす"
      },
      {
        "surface": "일으켜",
        "base": "일으켜",
        "language": "ko",
        "shortMeaning": "起こして、燃え上がらせて",
        "meaning": "起こして、燃え上がらせて"
      }
    ]
  },
  "원한 모든 걸 나와 읊조려봐": {
    "japanese": "望んできたものすべてを、私と一緒に唱えてみて。",
    "literalJapanese": "望んだすべてのものを、私とつぶやいてみて。",
    "sentenceExplanation": "願いを言葉にすることで現実に近づけるような表現。 ただ「言ってみて」ではなく “읊조리다” なので、呪文・祈り・詩のような雰囲気がある。",
    "tokens": [
      {
        "surface": "원하다",
        "base": "원하다",
        "language": "ko",
        "shortMeaning": "望む、欲する",
        "meaning": "望む、欲する"
      },
      {
        "surface": "원한",
        "base": "원한",
        "language": "ko",
        "shortMeaning": "望んだ〜",
        "meaning": "望んだ〜"
      },
      {
        "surface": "모든",
        "base": "모든",
        "language": "ko",
        "shortMeaning": "すべての",
        "meaning": "すべての"
      },
      {
        "surface": "것",
        "base": "것",
        "language": "ko",
        "shortMeaning": "もの、こと",
        "meaning": "もの、こと"
      },
      {
        "surface": "걸",
        "base": "걸",
        "language": "ko",
        "shortMeaning": "것을 の縮約",
        "meaning": "것을 の縮約"
      },
      {
        "surface": "나와",
        "base": "나와",
        "language": "ko",
        "shortMeaning": "私と",
        "meaning": "私と"
      },
      {
        "surface": "읊조리다",
        "base": "읊조리다",
        "language": "ko",
        "shortMeaning": "低くつぶやく、唱える、詩を口ずさむ",
        "meaning": "低くつぶやく、唱える、詩を口ずさむ"
      },
      {
        "surface": "읊조려봐",
        "base": "읊조려봐",
        "language": "ko",
        "shortMeaning": "-아/어 보다 = 〜してみる",
        "meaning": "つぶやいてみて、唱えてみて / -아/어 보다 = 〜してみる",
        "explanation": "-아/어 보다 = 〜してみる"
      }
    ]
  },
  "(빗속에서도 타오를 수 있게)": {
    "japanese": "（雨の中でも燃え続けられるように）",
    "literalJapanese": "（雨の中でも燃え上がれるように）",
    "sentenceExplanation": "雨は普通、火を消すもの。 それでも燃える炎は、困難に負けない情熱を表している。",
    "tokens": [
      {
        "surface": "비",
        "base": "비",
        "language": "ko",
        "shortMeaning": "雨",
        "meaning": "雨"
      },
      {
        "surface": "빗속",
        "base": "빗속",
        "language": "ko",
        "shortMeaning": "雨の中",
        "meaning": "雨の中"
      },
      {
        "surface": "-에서도",
        "base": "-에서도",
        "language": "ko",
        "shortMeaning": "〜でも",
        "meaning": "〜でも"
      },
      {
        "surface": "타오르다",
        "base": "타오르다",
        "language": "ko",
        "shortMeaning": "燃え上がる",
        "meaning": "燃え上がる"
      },
      {
        "surface": "타오를 수 있다",
        "base": "타오를 수 있다",
        "language": "ko",
        "shortMeaning": "燃え上がることができる",
        "meaning": "燃え上がることができる"
      },
      {
        "surface": "-게",
        "base": "-게",
        "language": "ko",
        "shortMeaning": "〜できるように、〜するように",
        "meaning": "〜できるように、〜するように"
      }
    ]
  },
  "Now, look at me now": {
    "japanese": "さあ、今の私を見て。",
    "literalJapanese": "今、今の私を見て。",
    "sentenceExplanation": "過去の弱い自分ではなく、今の変わった自分・燃えている自分を見てほしいという宣言。",
    "tokens": [
      {
        "surface": "look at me",
        "base": "look at me",
        "language": "en",
        "shortMeaning": "私を見て",
        "meaning": "私を見て"
      },
      {
        "surface": "now",
        "base": "now",
        "language": "en",
        "shortMeaning": "今",
        "meaning": "今"
      }
    ]
  },
  "Look at me now": {
    "japanese": "今の私を見て。",
    "literalJapanese": "今の私を見て。",
    "sentenceExplanation": "過去の弱い自分ではなく、今の変わった自分・燃えている自分を見てほしいという宣言。",
    "tokens": [
      {
        "surface": "look at me",
        "base": "look at me",
        "language": "en",
        "shortMeaning": "私を見て",
        "meaning": "私を見て"
      },
      {
        "surface": "now",
        "base": "now",
        "language": "en",
        "shortMeaning": "今",
        "meaning": "今"
      }
    ]
  },
  "원하면 뭐든 이뤄지리라": {
    "japanese": "願えば、何だって叶うはず。",
    "literalJapanese": "望めば何でも叶うだろう。",
    "sentenceExplanation": "かなり強い信念。 「叶うかも」ではなく、祈りや予言のように言い切っている。",
    "tokens": [
      {
        "surface": "원하다",
        "base": "원하다",
        "language": "ko",
        "shortMeaning": "望む",
        "meaning": "望む"
      },
      {
        "surface": "원하면",
        "base": "원하면",
        "language": "ko",
        "shortMeaning": "望めば",
        "meaning": "望めば"
      },
      {
        "surface": "뭐든",
        "base": "뭐든",
        "language": "ko",
        "shortMeaning": "何でも",
        "meaning": "何でも"
      },
      {
        "surface": "이루어지다 / 이뤄지다",
        "base": "이루어지다 / 이뤄지다",
        "language": "ko",
        "shortMeaning": "叶う、成し遂げられる",
        "meaning": "叶う、成し遂げられる"
      },
      {
        "surface": "이뤄지리라",
        "base": "이뤄지리라",
        "language": "ko",
        "shortMeaning": "日常会話ではあまり使わず、歌詞・詩・宣…",
        "meaning": "叶うだろう / -리라 は文語的・詩的な未来表現。 / 日常会話ではあまり使わず、歌詞・詩・宣言でよく似合う。",
        "explanation": "-리라 は文語的・詩的な未来表現。 日常会話ではあまり使わず、歌詞・詩・宣言でよく似合う。"
      }
    ]
  },
  "Shine like my crown 과감히 All the way": {
    "japanese": "王冠のように輝いて、大胆に最後まで進んで。",
    "literalJapanese": "私の王冠のように輝いて、大胆に最後まで。",
    "sentenceExplanation": "crown は王者・自信・誇りの象徴。 IVEらしい「自分が主役である」という強さが出ている。",
    "tokens": [
      {
        "surface": "shine",
        "base": "shine",
        "language": "en",
        "shortMeaning": "輝く",
        "meaning": "輝く"
      },
      {
        "surface": "like my crown",
        "base": "like my crown",
        "language": "en",
        "shortMeaning": "私の王冠のように",
        "meaning": "私の王冠のように"
      },
      {
        "surface": "과감히",
        "base": "과감히",
        "language": "ko",
        "shortMeaning": "果敢に、大胆に、思い切って",
        "meaning": "果敢に、大胆に、思い切って"
      },
      {
        "surface": "all the way",
        "base": "all the way",
        "language": "en",
        "shortMeaning": "最後まで、ずっと",
        "meaning": "最後まで、ずっと"
      }
    ]
  },
  "La la la la love flame": {
    "japanese": "La la la la love flame",
    "literalJapanese": "愛の炎。",
    "sentenceExplanation": "ここでの love は恋愛だけでなく、 夢への愛、自己愛、希望、情熱も含んでいるように読める。",
    "tokens": [
      {
        "surface": "love",
        "base": "love",
        "language": "en",
        "shortMeaning": "愛",
        "meaning": "愛"
      },
      {
        "surface": "flame",
        "base": "flame",
        "language": "en",
        "shortMeaning": "炎",
        "meaning": "炎"
      },
      {
        "surface": "love flame",
        "base": "love flame",
        "language": "en",
        "shortMeaning": "愛の炎、情熱の炎",
        "meaning": "愛の炎、情熱の炎"
      }
    ]
  },
  "Wi-wi-win it my way": {
    "japanese": "私のやり方で勝ち取る。",
    "literalJapanese": "私のやり方で勝つ。",
    "sentenceExplanation": "誰かの決めた道ではなく、自分の方法で夢をつかむ。 IVEらしい自己主導の表現。",
    "tokens": [
      {
        "surface": "win",
        "base": "win",
        "language": "en",
        "shortMeaning": "勝つ、勝ち取る",
        "meaning": "勝つ、勝ち取る"
      },
      {
        "surface": "it",
        "base": "it",
        "language": "en",
        "shortMeaning": "それを",
        "meaning": "それを"
      },
      {
        "surface": "my way",
        "base": "my way",
        "language": "en",
        "shortMeaning": "私のやり方で",
        "meaning": "私のやり方で"
      }
    ]
  },
  "두려울 게 없어 내겐": {
    "japanese": "私には怖いものなんてない。",
    "literalJapanese": "私には怖いものがない。",
    "sentenceExplanation": "危険や失敗を恐れない。 前の “위험을 겁내지 마” とつながる。",
    "tokens": [
      {
        "surface": "두렵다",
        "base": "두렵다",
        "language": "ko",
        "shortMeaning": "怖い",
        "meaning": "怖い"
      },
      {
        "surface": "두려울",
        "base": "두려울",
        "language": "ko",
        "shortMeaning": "怖い〜",
        "meaning": "怖い〜"
      },
      {
        "surface": "게",
        "base": "게",
        "language": "ko",
        "shortMeaning": "ものが、ことが",
        "meaning": "것이 の縮約 / ものが、ことが",
        "explanation": "ものが、ことが"
      },
      {
        "surface": "없다",
        "base": "없다",
        "language": "ko",
        "shortMeaning": "ない",
        "meaning": "ない"
      },
      {
        "surface": "내겐",
        "base": "내겐",
        "language": "ko",
        "shortMeaning": "私には",
        "meaning": "나에게는 の縮約 / 私には",
        "explanation": "私には"
      }
    ]
  },
  "새로운 걸 보여줄게": {
    "japanese": "新しい景色を見せてあげる。",
    "literalJapanese": "新しいものを見せてあげる。",
    "sentenceExplanation": "自分が新しい世界を切り開く側。 相手をその世界に連れていく感じ。",
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
        "surface": "걸",
        "base": "걸",
        "language": "ko",
        "shortMeaning": "ものを",
        "meaning": "것을 の縮約 / ものを",
        "explanation": "ものを"
      },
      {
        "surface": "보여주다",
        "base": "보여주다",
        "language": "ko",
        "shortMeaning": "見せてあげる",
        "meaning": "見せてあげる"
      },
      {
        "surface": "보여줄게",
        "base": "보여줄게",
        "language": "ko",
        "shortMeaning": "見せてあげるね",
        "meaning": "見せてあげるね"
      }
    ]
  },
  "꿈을 더 꿈꿔봐도 돼": {
    "japanese": "もっと大きな夢を見てもいい。",
    "literalJapanese": "夢をもっと夢見てみてもいい。",
    "sentenceExplanation": "遠慮して小さな夢にしなくていい。 大きく望んでいいという肯定。",
    "tokens": [
      {
        "surface": "꿈",
        "base": "꿈",
        "language": "ko",
        "shortMeaning": "夢",
        "meaning": "夢"
      },
      {
        "surface": "꿈꾸다",
        "base": "꿈꾸다",
        "language": "ko",
        "shortMeaning": "夢を見る、夢を抱く",
        "meaning": "夢を見る、夢を抱く"
      },
      {
        "surface": "더",
        "base": "더",
        "language": "ko",
        "shortMeaning": "もっと",
        "meaning": "もっと"
      },
      {
        "surface": "꿈꿔보다",
        "base": "꿈꿔보다",
        "language": "ko",
        "shortMeaning": "夢見てみる",
        "meaning": "夢見てみる"
      },
      {
        "surface": "꿈꿔봐도 돼",
        "base": "꿈꿔봐도 돼",
        "language": "ko",
        "shortMeaning": "-아/어도 되다 = 〜してもいい",
        "meaning": "夢見てみてもいい / -아/어도 되다 = 〜してもいい",
        "explanation": "-아/어도 되다 = 〜してもいい"
      }
    ]
  },
  "끝내 현실이 돼": {
    "japanese": "最後には現実になるから。",
    "literalJapanese": "ついには現実になる。",
    "sentenceExplanation": "夢はただの夢で終わらない。 走り続ければ現実になるという曲の核心。",
    "tokens": [
      {
        "surface": "끝내",
        "base": "끝내",
        "language": "ko",
        "shortMeaning": "ついに、とうとう、最後には",
        "meaning": "ついに、とうとう、最後には"
      },
      {
        "surface": "현실",
        "base": "현실",
        "language": "ko",
        "shortMeaning": "現実",
        "meaning": "現実"
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
        "surface": "돼",
        "base": "돼",
        "language": "ko",
        "shortMeaning": "なる",
        "meaning": "なる"
      }
    ]
  },
  "발목 잡은 손을 밀쳐내": {
    "japanese": "足を引っ張る手を振り払って。",
    "literalJapanese": "足首をつかんだ手を押しのけて。",
    "sentenceExplanation": "夢を邪魔するもの、止めようとするものを自分で払いのける表現。",
    "tokens": [
      {
        "surface": "발목",
        "base": "발목",
        "language": "ko",
        "shortMeaning": "足首",
        "meaning": "足首"
      },
      {
        "surface": "잡다",
        "base": "잡다",
        "language": "ko",
        "shortMeaning": "つかむ",
        "meaning": "つかむ"
      },
      {
        "surface": "발목 잡다",
        "base": "발목 잡다",
        "language": "ko",
        "shortMeaning": "直訳は「足首をつかむ」。",
        "meaning": "足を引っ張る、邪魔する / 直訳は「足首をつかむ」。",
        "explanation": "直訳は「足首をつかむ」。"
      },
      {
        "surface": "잡은",
        "base": "잡은",
        "language": "ko",
        "shortMeaning": "つかんだ〜",
        "meaning": "つかんだ〜"
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
        "surface": "밀쳐내다",
        "base": "밀쳐내다",
        "language": "ko",
        "shortMeaning": "押しのける、突き放す",
        "meaning": "押しのける、突き放す"
      },
      {
        "surface": "밀쳐내",
        "base": "밀쳐내",
        "language": "ko",
        "shortMeaning": "押しのけて",
        "meaning": "押しのけて"
      }
    ]
  },
  "움츠렸던 꿈을 펼쳐내": {
    "japanese": "閉じ込めていた夢を広げて。",
    "literalJapanese": "縮こまっていた夢を広げ出して。",
    "sentenceExplanation": "怖くて小さくしていた夢を、もう一度大きく広げる。 自信を取り戻す場面。",
    "tokens": [
      {
        "surface": "움츠리다",
        "base": "움츠리다",
        "language": "ko",
        "shortMeaning": "縮こまる、すくむ",
        "meaning": "縮こまる、すくむ"
      },
      {
        "surface": "움츠렸던",
        "base": "움츠렸던",
        "language": "ko",
        "shortMeaning": "縮こまっていた〜",
        "meaning": "縮こまっていた〜"
      },
      {
        "surface": "꿈",
        "base": "꿈",
        "language": "ko",
        "shortMeaning": "夢",
        "meaning": "夢"
      },
      {
        "surface": "펼치다",
        "base": "펼치다",
        "language": "ko",
        "shortMeaning": "広げる",
        "meaning": "広げる"
      },
      {
        "surface": "펼쳐내다",
        "base": "펼쳐내다",
        "language": "ko",
        "shortMeaning": "広げ出す、開いて見せる",
        "meaning": "広げ出す、開いて見せる"
      },
      {
        "surface": "펼쳐내",
        "base": "펼쳐내",
        "language": "ko",
        "shortMeaning": "広げて",
        "meaning": "広げて"
      }
    ]
  },
  "진흙 속에서도 피는 꽃": {
    "japanese": "泥の中でも咲く花のように。",
    "literalJapanese": "泥の中でも咲く花。",
    "sentenceExplanation": "悪い環境でも咲く強さ。 逆境の中でも美しく成長する象徴。",
    "tokens": [
      {
        "surface": "진흙",
        "base": "진흙",
        "language": "ko",
        "shortMeaning": "泥",
        "meaning": "泥"
      },
      {
        "surface": "속",
        "base": "속",
        "language": "ko",
        "shortMeaning": "中",
        "meaning": "中"
      },
      {
        "surface": "-에서도",
        "base": "-에서도",
        "language": "ko",
        "shortMeaning": "〜でも",
        "meaning": "〜でも"
      },
      {
        "surface": "피다",
        "base": "피다",
        "language": "ko",
        "shortMeaning": "咲く",
        "meaning": "咲く"
      },
      {
        "surface": "피는",
        "base": "피는",
        "language": "ko",
        "shortMeaning": "咲く〜",
        "meaning": "咲く〜"
      },
      {
        "surface": "꽃",
        "base": "꽃",
        "language": "ko",
        "shortMeaning": "花",
        "meaning": "花"
      }
    ]
  },
  "찢긴 날개로도 나는 Bird like": {
    "japanese": "傷ついた翼でも、鳥のように飛んでいく。",
    "literalJapanese": "裂けた翼でも飛ぶ、鳥のように。",
    "sentenceExplanation": "傷ついていても前に進む。 完璧な状態でなくても飛べる、という強い表現。",
    "tokens": [
      {
        "surface": "찢기다",
        "base": "찢기다",
        "language": "ko",
        "shortMeaning": "裂かれる、破れる",
        "meaning": "裂かれる、破れる"
      },
      {
        "surface": "찢긴",
        "base": "찢긴",
        "language": "ko",
        "shortMeaning": "裂けた〜、破れた〜",
        "meaning": "裂けた〜、破れた〜"
      },
      {
        "surface": "날개",
        "base": "날개",
        "language": "ko",
        "shortMeaning": "翼",
        "meaning": "翼"
      },
      {
        "surface": "-로도",
        "base": "-로도",
        "language": "ko",
        "shortMeaning": "〜でも、〜を使っても",
        "meaning": "〜でも、〜を使っても"
      },
      {
        "surface": "날다",
        "base": "날다",
        "language": "ko",
        "shortMeaning": "飛ぶ",
        "meaning": "飛ぶ"
      },
      {
        "surface": "나는",
        "base": "나는",
        "language": "ko",
        "shortMeaning": "飛ぶ〜",
        "meaning": "飛ぶ〜"
      },
      {
        "surface": "bird",
        "base": "bird",
        "language": "en",
        "shortMeaning": "鳥",
        "meaning": "鳥"
      }
    ]
  },
  "1, 2, 3": {
    "japanese": "1、2、3。",
    "literalJapanese": "1、2、3。",
    "sentenceExplanation": "この行では「1、2、3。」と伝えている。",
    "tokens": [
      {
        "surface": "1, 2, 3",
        "base": "1, 2, 3",
        "language": "en",
        "shortMeaning": "1、2、3",
        "meaning": "1、2、3。"
      }
    ]
  },
  "나를 따라 Come with me": {
    "japanese": "私についてきて。",
    "literalJapanese": "私についてきて、一緒に来て。",
    "sentenceExplanation": "自分が先頭に立って導く表現。 IVEらしい「私が見せてあげる」姿勢。",
    "tokens": [
      {
        "surface": "나를",
        "base": "나를",
        "language": "ko",
        "shortMeaning": "私を",
        "meaning": "私を"
      },
      {
        "surface": "따르다",
        "base": "따르다",
        "language": "ko",
        "shortMeaning": "ついていく、従う",
        "meaning": "ついていく、従う"
      },
      {
        "surface": "따라",
        "base": "따라",
        "language": "ko",
        "shortMeaning": "ついてきて",
        "meaning": "ついてきて"
      },
      {
        "surface": "Come with me",
        "base": "Come with me",
        "language": "en",
        "shortMeaning": "私と一緒に来て",
        "meaning": "私と一緒に来て"
      }
    ]
  },
  "흔들리고 부서져도 Then finally": {
    "japanese": "揺らいで壊れそうになっても、最後には。",
    "literalJapanese": "揺れて壊れても、そして最後には。",
    "sentenceExplanation": "途中で不安定になったり傷ついたりしても、最終的には到達する。 不完全さを含んだ前進。",
    "tokens": [
      {
        "surface": "흔들리다",
        "base": "흔들리다",
        "language": "ko",
        "shortMeaning": "揺れる、動揺する",
        "meaning": "揺れる、動揺する"
      },
      {
        "surface": "흔들리고",
        "base": "흔들리고",
        "language": "ko",
        "shortMeaning": "揺れて",
        "meaning": "揺れて"
      },
      {
        "surface": "부서지다",
        "base": "부서지다",
        "language": "ko",
        "shortMeaning": "壊れる、砕ける",
        "meaning": "壊れる、砕ける"
      },
      {
        "surface": "부서져도",
        "base": "부서져도",
        "language": "ko",
        "shortMeaning": "-아/어도 = 〜しても",
        "meaning": "壊れても / -아/어도 = 〜しても",
        "explanation": "-아/어도 = 〜しても"
      },
      {
        "surface": "finally",
        "base": "finally",
        "language": "en",
        "shortMeaning": "最後には",
        "meaning": "最後には"
      }
    ]
  },
  "So go ahead baby": {
    "japanese": "だから進んで、baby。",
    "literalJapanese": "だから進んで、baby。",
    "sentenceExplanation": "迷わず進めという後押し。 失敗や危険があっても行け、という流れ。",
    "tokens": [
      {
        "surface": "go ahead",
        "base": "go ahead",
        "language": "en",
        "shortMeaning": "進んで、やってみて",
        "meaning": "進んで、やってみて"
      }
    ]
  },
  "Oh, look at me, look at me": {
    "japanese": "私を見て。",
    "literalJapanese": "私を見て、私を見て。",
    "sentenceExplanation": "最初は「私を見て」だったのが、最後に「あなたを見て」に広がる。 語り手だけでなく、聴き手自身にも炎や可能性があるという流れ。",
    "tokens": [
      {
        "surface": "look at me",
        "base": "look at me",
        "language": "en",
        "shortMeaning": "私を見て",
        "meaning": "私を見て"
      },
      {
        "surface": "look at you",
        "base": "look at you",
        "language": "en",
        "shortMeaning": "あなたを見て",
        "meaning": "あなたを見て"
      }
    ]
  },
  "눈을 감고 손을 잡아": {
    "japanese": "目を閉じて、私の手を握って。",
    "literalJapanese": "目を閉じて、手を握って。",
    "sentenceExplanation": "信じてついてきて、という表現。 目を閉じることで、不安より信頼を選ぶ感じ。",
    "tokens": [
      {
        "surface": "눈",
        "base": "눈",
        "language": "ko",
        "shortMeaning": "目",
        "meaning": "目"
      },
      {
        "surface": "-을",
        "base": "-을",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "감다",
        "base": "감다",
        "language": "ko",
        "shortMeaning": "閉じる",
        "meaning": "閉じる"
      },
      {
        "surface": "감고",
        "base": "감고",
        "language": "ko",
        "shortMeaning": "閉じて",
        "meaning": "閉じて"
      },
      {
        "surface": "손",
        "base": "손",
        "language": "ko",
        "shortMeaning": "手",
        "meaning": "手"
      },
      {
        "surface": "잡다",
        "base": "잡다",
        "language": "ko",
        "shortMeaning": "握る",
        "meaning": "握る"
      },
      {
        "surface": "잡아",
        "base": "잡아",
        "language": "ko",
        "shortMeaning": "握って",
        "meaning": "握って"
      }
    ]
  },
  "다 보여줄 테니 더 가까이 와": {
    "japanese": "全部見せてあげるから、もっと近くへ来て。",
    "literalJapanese": "全部見せてあげるから、もっと近くに来て。",
    "sentenceExplanation": "新しい世界・夢・自分の炎を見せるから、もっと近づいてという誘い。",
    "tokens": [
      {
        "surface": "다",
        "base": "다",
        "language": "ko",
        "shortMeaning": "全部",
        "meaning": "全部"
      },
      {
        "surface": "보여주다",
        "base": "보여주다",
        "language": "ko",
        "shortMeaning": "見せてあげる",
        "meaning": "見せてあげる"
      },
      {
        "surface": "보여줄 테니",
        "base": "보여줄 테니",
        "language": "ko",
        "shortMeaning": "-ㄹ 테니 = 〜するから、〜するつも…",
        "meaning": "見せてあげるから / -ㄹ 테니 = 〜するから、〜するつもりだから",
        "explanation": "-ㄹ 테니 = 〜するから、〜するつもりだから"
      },
      {
        "surface": "더",
        "base": "더",
        "language": "ko",
        "shortMeaning": "もっと",
        "meaning": "もっと"
      },
      {
        "surface": "가까이",
        "base": "가까이",
        "language": "ko",
        "shortMeaning": "近くに",
        "meaning": "近くに"
      },
      {
        "surface": "오다",
        "base": "오다",
        "language": "ko",
        "shortMeaning": "来る",
        "meaning": "来る"
      },
      {
        "surface": "와",
        "base": "와",
        "language": "ko",
        "shortMeaning": "来て",
        "meaning": "来て"
      }
    ]
  },
  "I got fire in my eyes": {
    "japanese": "私の瞳には炎が宿っている。",
    "literalJapanese": "私の目には炎がある。",
    "sentenceExplanation": "強い意志・情熱・覚悟が目に表れている。 “love flame” とつながる。",
    "tokens": [
      {
        "surface": "fire",
        "base": "fire",
        "language": "en",
        "shortMeaning": "火、炎",
        "meaning": "火、炎"
      },
      {
        "surface": "in my eyes",
        "base": "in my eyes",
        "language": "en",
        "shortMeaning": "私の目の中に",
        "meaning": "私の目の中に"
      }
    ]
  },
  "더 똑바로 봐": {
    "japanese": "もっとまっすぐ見つめて。",
    "literalJapanese": "もっとまっすぐ見て。",
    "sentenceExplanation": "目をそらさず、私の本気を見てという意味。 かなり強気な命令形。",
    "tokens": [
      {
        "surface": "더",
        "base": "더",
        "language": "ko",
        "shortMeaning": "もっと",
        "meaning": "もっと"
      },
      {
        "surface": "똑바로",
        "base": "똑바로",
        "language": "ko",
        "shortMeaning": "まっすぐ、正しく、しっかり",
        "meaning": "まっすぐ、正しく、しっかり"
      },
      {
        "surface": "보다",
        "base": "보다",
        "language": "ko",
        "shortMeaning": "見る",
        "meaning": "見る"
      },
      {
        "surface": "봐",
        "base": "봐",
        "language": "ko",
        "shortMeaning": "見て",
        "meaning": "見て"
      }
    ]
  },
  "La la la love flame": {
    "japanese": "La la la love flame",
    "literalJapanese": "愛の炎。",
    "sentenceExplanation": "ここでの love は恋愛だけでなく、 夢への愛、自己愛、希望、情熱も含んでいるように読める。",
    "tokens": [
      {
        "surface": "love",
        "base": "love",
        "language": "en",
        "shortMeaning": "愛",
        "meaning": "愛"
      },
      {
        "surface": "flame",
        "base": "flame",
        "language": "en",
        "shortMeaning": "炎",
        "meaning": "炎"
      },
      {
        "surface": "love flame",
        "base": "love flame",
        "language": "en",
        "shortMeaning": "愛の炎、情熱の炎",
        "meaning": "愛の炎、情熱の炎"
      }
    ]
  },
  "불을 지핀 건": {
    "japanese": "その火を灯したのは。",
    "literalJapanese": "火をつけたのは。",
    "sentenceExplanation": "情熱や運命を動かすきっかけの話。 次の “네 손에” につながる。",
    "tokens": [
      {
        "surface": "불",
        "base": "불",
        "language": "ko",
        "shortMeaning": "火",
        "meaning": "火"
      },
      {
        "surface": "-을",
        "base": "-을",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "지피다",
        "base": "지피다",
        "language": "ko",
        "shortMeaning": "火をつける、火をおこす",
        "meaning": "火をつける、火をおこす"
      },
      {
        "surface": "지핀",
        "base": "지핀",
        "language": "ko",
        "shortMeaning": "火をつけた〜",
        "meaning": "火をつけた〜"
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
  "운명을 쥔 건": {
    "japanese": "運命を握っているのは。",
    "literalJapanese": "運命を握ったのは。",
    "sentenceExplanation": "運命は外側から与えられるものではなく、自分の手で握るもの。 この曲の自己決定感が出ている。",
    "tokens": [
      {
        "surface": "운명",
        "base": "운명",
        "language": "ko",
        "shortMeaning": "運命",
        "meaning": "運命"
      },
      {
        "surface": "-을",
        "base": "-을",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "쥐다",
        "base": "쥐다",
        "language": "ko",
        "shortMeaning": "握る、つかむ",
        "meaning": "握る、つかむ"
      },
      {
        "surface": "쥔",
        "base": "쥔",
        "language": "ko",
        "shortMeaning": "握った〜",
        "meaning": "握った〜"
      },
      {
        "surface": "건",
        "base": "건",
        "language": "ko",
        "shortMeaning": "ことは、ものは",
        "meaning": "ことは、ものは"
      }
    ]
  },
  "네 손에": {
    "japanese": "あなたの手の中にある。",
    "literalJapanese": "あなたの手に。",
    "sentenceExplanation": "火をつけるのも、運命を握るのも、あなたの手。 つまり、自分の未来は自分で動かせるという意味に読める。",
    "tokens": [
      {
        "surface": "네",
        "base": "네",
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
        "surface": "-에",
        "base": "-에",
        "language": "ko",
        "shortMeaning": "〜に",
        "meaning": "〜に"
      }
    ]
  },
  "흩날리는 빛, 방울에": {
    "japanese": "舞い散る光のしずくの中で。",
    "literalJapanese": "舞い散る光、しずくに。",
    "sentenceExplanation": "“빛 방울” と捉えると「光のしずく」。 火花、光の粒、きらめく雨のような幻想的な場面。",
    "tokens": [
      {
        "surface": "흩날리다",
        "base": "흩날리다",
        "language": "ko",
        "shortMeaning": "舞い散る、ひらひら飛ぶ",
        "meaning": "舞い散る、ひらひら飛ぶ"
      },
      {
        "surface": "흩날리는",
        "base": "흩날리는",
        "language": "ko",
        "shortMeaning": "舞い散る〜",
        "meaning": "舞い散る〜"
      },
      {
        "surface": "빛",
        "base": "빛",
        "language": "ko",
        "shortMeaning": "光",
        "meaning": "光"
      },
      {
        "surface": "방울",
        "base": "방울",
        "language": "ko",
        "shortMeaning": "しずく、粒",
        "meaning": "しずく、粒"
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
  "밤새도록 춤을 출래": {
    "japanese": "夜が明けるまで踊っていたい。",
    "literalJapanese": "一晩中踊りたい。",
    "sentenceExplanation": "解放感と喜び。 夢が動き出した後の祝祭のような雰囲気。",
    "tokens": [
      {
        "surface": "밤",
        "base": "밤",
        "language": "ko",
        "shortMeaning": "夜",
        "meaning": "夜"
      },
      {
        "surface": "새도록",
        "base": "새도록",
        "language": "ko",
        "shortMeaning": "明けるまで",
        "meaning": "明けるまで"
      },
      {
        "surface": "밤새도록",
        "base": "밤새도록",
        "language": "ko",
        "shortMeaning": "一晩中、夜通し",
        "meaning": "一晩中、夜通し"
      },
      {
        "surface": "춤",
        "base": "춤",
        "language": "ko",
        "shortMeaning": "ダンス",
        "meaning": "ダンス"
      },
      {
        "surface": "춤을 추다",
        "base": "춤을 추다",
        "language": "ko",
        "shortMeaning": "踊る",
        "meaning": "踊る"
      },
      {
        "surface": "춤을 출래",
        "base": "춤을 출래",
        "language": "ko",
        "shortMeaning": "-ㄹ래 = 〜したい、〜するつもり",
        "meaning": "踊りたい、踊るつもり / -ㄹ래 = 〜したい、〜するつもり",
        "explanation": "-ㄹ래 = 〜したい、〜するつもり"
      }
    ]
  },
  "오랜 기다림을 끝내": {
    "japanese": "長く続いた待ち時間を終わらせて。",
    "literalJapanese": "長い待ち時間を終わらせて。",
    "sentenceExplanation": "ずっと待っていた変化・成功・夢の始まりが、ついに来る。",
    "tokens": [
      {
        "surface": "오래다",
        "base": "오래다",
        "language": "ko",
        "shortMeaning": "長い",
        "meaning": "長い"
      },
      {
        "surface": "오랜",
        "base": "오랜",
        "language": "ko",
        "shortMeaning": "長い〜",
        "meaning": "長い〜"
      },
      {
        "surface": "기다림",
        "base": "기다림",
        "language": "ko",
        "shortMeaning": "기다리다 = 待つ",
        "meaning": "待つこと、待ち時間 / 기다리다 = 待つ",
        "explanation": "기다리다 = 待つ"
      },
      {
        "surface": "-을",
        "base": "-을",
        "language": "ko",
        "shortMeaning": "〜を",
        "meaning": "〜を"
      },
      {
        "surface": "끝내다",
        "base": "끝내다",
        "language": "ko",
        "shortMeaning": "終わらせる",
        "meaning": "終わらせる"
      },
      {
        "surface": "끝내",
        "base": "끝내",
        "language": "ko",
        "shortMeaning": "終わらせて",
        "meaning": "終わらせて"
      }
    ]
  },
  "마침내 우리답게": {
    "japanese": "ついに、私たちらしく。",
    "literalJapanese": "ついに私たちらしく。",
    "sentenceExplanation": "誰かの正解ではなく、自分たちらしい形で到達する。 “my way” とつながる。",
    "tokens": [
      {
        "surface": "마침내",
        "base": "마침내",
        "language": "ko",
        "shortMeaning": "ついに、とうとう",
        "meaning": "ついに、とうとう"
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
      }
    ]
  },
  "Oh, look at you, look at you": {
    "japanese": "あなたを見て。",
    "literalJapanese": "あなたを見て、あなたを見て。",
    "sentenceExplanation": "最初は「私を見て」だったのが、最後に「あなたを見て」に広がる。 語り手だけでなく、聴き手自身にも炎や可能性があるという流れ。",
    "tokens": [
      {
        "surface": "look at me",
        "base": "look at me",
        "language": "en",
        "shortMeaning": "私を見て",
        "meaning": "私を見て"
      },
      {
        "surface": "look at you",
        "base": "look at you",
        "language": "en",
        "shortMeaning": "あなたを見て",
        "meaning": "あなたを見て"
      }
    ]
  }
};

const lyricsSequence: string[] = [
  "“Shall it all be sung, be done like this\"",
  "너의 심장 위에",
  "뿌리내린 순간",
  "뻗어나가 깊게",
  "이 노래가 들리니 Uh huh",
  "어두운 세상 위에",
  "쏟아지는 Glitter",
  "목격하고 있어",
  "기적이 틀림없는 것",
  "Keep on running",
  "위험을 겁내지 마",
  "(간직해왔던 불꽃을 일으켜)",
  "원한 모든 걸 나와 읊조려봐",
  "(빗속에서도 타오를 수 있게)",
  "Now, look at me now",
  "Look at me now",
  "원하면 뭐든 이뤄지리라",
  "Look at me now",
  "Shine like my crown 과감히 All the way",
  "La la la la love flame",
  "Wi-wi-win it my way",
  "두려울 게 없어 내겐",
  "새로운 걸 보여줄게",
  "La la la la love flame",
  "Wi-wi-win it my way",
  "꿈을 더 꿈꿔봐도 돼",
  "끝내 현실이 돼",
  "발목 잡은 손을 밀쳐내",
  "움츠렸던 꿈을 펼쳐내",
  "진흙 속에서도 피는 꽃",
  "찢긴 날개로도 나는 Bird like",
  "1, 2, 3",
  "나를 따라 Come with me",
  "흔들리고 부서져도 Then finally",
  "So go ahead baby",
  "Keep on running",
  "위험을 겁내지 마",
  "(간직해왔던 불꽃을 일으켜)",
  "원한 모든 걸 나와 읊조려봐",
  "(빗속에서도 타오를 수 있게)",
  "Now, look at me now",
  "Look at me now",
  "원하면 뭐든 이뤄지리라",
  "Look at me now",
  "Shine like my crown 과감히 All the way",
  "Oh, look at me, look at me",
  "Oh, look at me, look at me",
  "눈을 감고 손을 잡아",
  "다 보여줄 테니 더 가까이 와",
  "I got fire in my eyes",
  "더 똑바로 봐",
  "La la la love flame",
  "La la la love flame",
  "불을 지핀 건",
  "운명을 쥔 건",
  "La la la love flame",
  "La la la love flame",
  "네 손에",
  "La la la la love flame",
  "Wi-wi-win it my way",
  "흩날리는 빛, 방울에",
  "밤새도록 춤을 출래",
  "La la la la love flame",
  "Wi-wi-win it my way",
  "오랜 기다림을 끝내",
  "마침내 우리답게",
  "Oh, look at me, look at me",
  "Oh, look at you, look at you"
];

export const completeBlackholeLines: LyricLine[] = lyricsSequence.map((korean, index) => {
  const template = lineTemplates[korean];

  return {
    id: `ive-blackhole-line-${index + 1}`,
    korean,
    japanese: template.japanese,
    literalJapanese: template.literalJapanese,
    sentenceExplanation: template.sentenceExplanation,
    tokens: template.tokens.map((token, tokenIndex) => ({
      ...token,
      id: `ive-blackhole-line-${index + 1}-token-${tokenIndex + 1}`,
    })),
  };
});

import type { LyricLine } from "../../types/song";

const uLines: Record<string, Omit<LyricLine, "id" | "tokens"> & { tokens: Omit<LyricLine["tokens"][number], "id">[] }> = {
  L1: {
    korean: "It’s a new scene It’s aggressive",
    japanese: "新しい場面が始まる。かなり攻めている。",
    literalJapanese: "これは新しい場面。攻撃的だ。",
    sentenceExplanation: "「暴力的」というより、「かなり攻めた感じ」「強気で目立つ感じ」を aggressive で表現しています。",
    tokens: [
      { surface: "It's", base: "It is", language: "en", shortMeaning: "それは〜だ", meaning: "それは〜だ、これは〜だ", trailingSpace: true },
      { surface: "a new scene", base: "new scene", language: "en", shortMeaning: "新しい場面", meaning: "新しい場面、新しい状況", trailingSpace: true },
      { surface: "It's", base: "It is", language: "en", shortMeaning: "それは〜だ", meaning: "それは〜だ", trailingSpace: true },
      { surface: "aggressive", base: "aggressive", language: "en", shortMeaning: "攻撃的な", meaning: "攻撃的な、積極的な、攻めた" },
    ],
  },
  L2: {
    korean: "이미 알아차렸겠지",
    reading: "イミ アラチャリョッケッチ",
    japanese: "もう気づいているでしょ。",
    literalJapanese: "もう気づいただろう。",
    sentenceExplanation: "「私がただ者じゃないって、もう分かってるでしょ？」という強気な推測を表しています。",
    grammarPoints: [
      { id: "gp-eotgetji", title: "-었겠지", meaning: "〜したでしょう", explanation: "過去形(-었)に推測・確認の(-겠지)がくっついた形。『〜したはずでしょ』。", example: "다 먹었겠지.", exampleJapanese: "全部食べただろうね。" }
    ],
    tokens: [
      { surface: "이미", base: "이미", language: "ko", shortMeaning: "すでに", meaning: "すでに、もう", pos: "副詞", level: "初級", trailingSpace: true },
      { surface: "알아차렸겠지", base: "알아차리다", language: "ko", shortMeaning: "気づいたでしょう", meaning: "気づいたでしょう、察したでしょ", pos: "動詞", level: "中級", breakdown: "알다 + 차리다 + -었- + -겠지", explanation: "알아차리다 は『状況を見て気づく、察する』。" },
    ],
  },
  L3: {
    korean: "그치 언니",
    reading: "クチ オンニ",
    japanese: "でしょ、オンニ。",
    literalJapanese: "そうでしょ、お姉さん。",
    sentenceExplanation: "本当の姉というより「ねえ、そこのあなた」くらいの呼びかけ。少し余裕があって、挑発するようなニュアンス。",
    tokens: [
      { surface: "그치", base: "그렇지", language: "ko", shortMeaning: "でしょ", meaning: "そうでしょ？でしょ？", pos: "形容詞", level: "初級", breakdown: "그렇지 の短縮", explanation: "그렇지 のくだけた言い方で、会話で頻出。", trailingSpace: true },
      { surface: "언니", base: "언니", language: "ko", shortMeaning: "お姉さん", meaning: "お姉さん", pos: "名詞", level: "初級", explanation: "女性が年上の女性を呼ぶ時の言葉。歌詞では一般的な呼びかけ。" },
    ],
  },
  L4: {
    korean: "모든 소문 속의 Problem",
    reading: "モドゥン ソムン ソゲ Problem",
    japanese: "あらゆる噂の中心にいる厄介な存在。",
    literalJapanese: "すべての噂の中の問題。",
    sentenceExplanation: "「みんなが噂している、その中心にいるのが私」という感じ。Problemは悪い意味だけでなく、危険で目立つ存在を表す。",
    tokens: [
      { surface: "모든", base: "모든", language: "ko", shortMeaning: "すべての", meaning: "すべての、あらゆる", pos: "冠形詞", level: "初級", trailingSpace: true },
      { surface: "소문", base: "소문", language: "ko", shortMeaning: "噂", meaning: "噂", pos: "名詞", level: "初級", trailingSpace: true },
      { surface: "속의", base: "속", language: "ko", shortMeaning: "中の", meaning: "中の", pos: "名詞＋助詞", level: "初級", breakdown: "속 + 의", trailingSpace: true },
      { surface: "Problem", base: "problem", language: "en", shortMeaning: "問題児", meaning: "問題、問題児、厄介な存在" },
    ],
  },
  L5: {
    korean: "Yeah I'm '걔'지",
    reading: "Yeah I'm ゲジ",
    japanese: "そう、私が噂の「あの子」。",
    literalJapanese: "そう、私が「あの子」だよ。",
    sentenceExplanation: "周りが「あの子って誰？」と噂している対象が自分だと、堂々と言っている表現。",
    grammarPoints: [
      { id: "gp-ji", title: "-지", meaning: "〜だよ、〜でしょ", explanation: "確認・強調・当然感を出す語尾。", example: "내가 최고지.", exampleJapanese: "私が最高でしょ。" }
    ],
    tokens: [
      { surface: "Yeah I'm", base: "I am", language: "en", shortMeaning: "そう、私は", meaning: "そう、私は〜だ", trailingSpace: true },
      { surface: "'걔'지", base: "걔", language: "ko", shortMeaning: "あの子だよ", meaning: "その子だよ、あの子でしょ", pos: "代名詞＋助詞", level: "初級", breakdown: "그 아이 → 걔 + -지", explanation: "걔 は 그 아이（その子）の縮約形。会話でよく使われる。" },
    ],
  },
  L6: {
    korean: "벽에 붙은 나의 Picture",
    reading: "ピョゲ プトゥン ナエ Picture",
    japanese: "壁に貼られた私の写真。",
    literalJapanese: "壁に貼られた私の写真。",
    sentenceExplanation: "次の Wanted とつながって、「指名手配ポスター」みたいなイメージを演出している。",
    tokens: [
      { surface: "벽에", base: "벽", language: "ko", shortMeaning: "壁に", meaning: "壁に", pos: "名詞＋助詞", level: "初級", breakdown: "벽 + 에", trailingSpace: true },
      { surface: "붙은", base: "붙다", language: "ko", shortMeaning: "貼られた", meaning: "くっついた、貼られた", pos: "動詞", level: "初級", breakdown: "붙다 + -은", trailingSpace: true },
      { surface: "나의", base: "나", language: "ko", shortMeaning: "私の", meaning: "私の", pos: "代名詞＋助詞", level: "初級", breakdown: "나 + 의", trailingSpace: true },
      { surface: "Picture", base: "picture", language: "en", shortMeaning: "写真", meaning: "写真、絵" },
    ],
  },
  L7: {
    korean: "아래 Wanted",
    reading: "アレ Wanted",
    japanese: "その下には「お尋ね者」の文字。",
    literalJapanese: "下にはWanted。",
    sentenceExplanation: "「私は危険人物のように注目されている」「みんなが私を追っている」という演出。",
    tokens: [
      { surface: "아래", base: "아래", language: "ko", shortMeaning: "下に", meaning: "下、下側", pos: "名詞", level: "初級", trailingSpace: true },
      { surface: "Wanted", base: "wanted", language: "en", shortMeaning: "指名手配", meaning: "指名手配、求められている" },
    ],
  },
  L8: {
    korean: "Wake up 주저 하지 말고",
    reading: "Wake up チュジョ ハジ マルゴ",
    japanese: "目を覚まして、迷わず来て。",
    literalJapanese: "目を覚まして、ためらわないで。",
    sentenceExplanation: "「ためらっている暇なんてない」「自分の衝動に従え」という強気な流れ。本来は 붙けて 주저하지 말고 と書くことが多い。",
    grammarPoints: [
      { id: "gp-ji-malgo", title: "-지 말고", meaning: "〜しないで", explanation: "禁止の -지 말다 に -고 がついて「〜せずに、〜しないで」。", example: "울지 말고 말해봐.", exampleJapanese: "泣かないで話してみて。" }
    ],
    tokens: [
      { surface: "Wake up", base: "wake up", language: "en", shortMeaning: "目を覚まして", meaning: "起きて、現実を見て", trailingSpace: true },
      { surface: "주저", base: "주저하다", language: "ko", shortMeaning: "ためらうこと", meaning: "ためらう、躊躇する", pos: "名詞/動詞", level: "中級", trailingSpace: true },
      { surface: "하지 말고", base: "말다", language: "ko", shortMeaning: "しないで", meaning: "しないで、せずに", pos: "動詞", level: "初級", breakdown: "하다 + -지 말다 + -고" },
    ],
  },
  L9: {
    korean: "다른 시선들은 뭐 그리",
    reading: "タルン シソンドゥルン ムォ クリ",
    japanese: "周りの視線なんて、そんなに何？",
    literalJapanese: "他の視線たちは何をそんなに。",
    sentenceExplanation: "文としては少し省略されている。後ろに「気にするの？」(신경 써?)が省略されているような感じ。",
    tokens: [
      { surface: "다른", base: "다르다", language: "ko", shortMeaning: "他の", meaning: "他の、別の", pos: "冠形詞", level: "初級", breakdown: "다르다 + -ㄴ", trailingSpace: true },
      { surface: "시선들은", base: "시선", language: "ko", shortMeaning: "視線たちは", meaning: "視線たちは", pos: "名詞＋助詞", level: "中級", breakdown: "시선 + 들 + 은", trailingSpace: true },
      { surface: "뭐", base: "뭐", language: "ko", shortMeaning: "何を", meaning: "何、なんで", pos: "代名詞", level: "初級", trailingSpace: true },
      { surface: "그리", base: "그리", language: "ko", shortMeaning: "そんなに", meaning: "そんなに、あんなに", pos: "副詞", level: "中級", explanation: "그렇게 と近い。少し詩的・歌詞的な響き。" },
    ],
  },
  L10: {
    korean: "I don't give a 쉿! What you say",
    reading: "I don't give a シュッ! What you say",
    japanese: "何を言われても気にしない。黙ってて。",
    literalJapanese: "私は気にしない、シッ！ あなたが何を言おうと。",
    sentenceExplanation: "I don't give a shit（知るか）という表現の、shit を韓国語の 쉿（シッ！）という音で言い換えた言葉遊び。周りの批判を黙らせる感じ。",
    tokens: [
      { surface: "I don't give a", base: "give a shit", language: "en", shortMeaning: "気にしない", meaning: "〜なんて気にしない", trailingSpace: true },
      { surface: "쉿!", base: "쉿", language: "ko", shortMeaning: "シッ", meaning: "シッ、静かに", pos: "感嘆詞", level: "初級", trailingSpace: true },
      { surface: "What you say", base: "what you say", language: "en", shortMeaning: "あなたが言うこと", meaning: "あなたが何を言うか" },
    ],
  },
  L11: {
    korean: "Yeah I be going out with a bang",
    japanese: "私は派手にぶちかまして出ていく。",
    literalJapanese: "私は派手に出ていく。",
    sentenceExplanation: "この曲の中心表現。go out with a bang で「最後に派手に決める」「強烈な印象を残して去る」という意味。",
    tokens: [
      { surface: "Yeah I be", base: "I am", language: "en", shortMeaning: "私は", meaning: "私はいつも〜だ", explanation: "ヒップホップ的な表現で「私はそういう存在だ」という雰囲気。", trailingSpace: true },
      { surface: "going out", base: "go out", language: "en", shortMeaning: "出ていく", meaning: "出ていく、終わる", trailingSpace: true },
      { surface: "with a bang", base: "bang", language: "en", shortMeaning: "派手に", meaning: "派手に、華々しく、大きな音とともに" },
    ],
  },
  L12: {
    korean: "Bang Bang Bang Bang",
    japanese: "Bang Bang Bang Bang",
    literalJapanese: "バン、バン、バン、バン。",
    sentenceExplanation: "音そのものを表している。同時に「派手さ」「衝撃」「爆発力」を出している。",
    tokens: [
      { surface: "Bang Bang Bang Bang", base: "bang", language: "en", shortMeaning: "バン", meaning: "バン、爆発音、銃声" },
    ],
  },
  L14: {
    korean: "I be going out with a bang",
    japanese: "私は派手にぶちかまして出ていく。",
    literalJapanese: "私は派手に出ていく。",
    sentenceExplanation: "サビの繰り返し。静かに終わる気はない、という意味。",
    tokens: [
      { surface: "I be going out with a bang", base: "go out with a bang", language: "en", shortMeaning: "派手にぶちかます", meaning: "私は派手にやってのける" },
    ],
  },
  L15: {
    korean: "Shaking my head",
    japanese: "首を振って、気にしない。",
    literalJapanese: "頭を振っている。",
    sentenceExplanation: "英語圏では首を横に振る動作は「呆れる」「否定する」「相手にしない」という意味。周りが何を言っても流している感じ。",
    tokens: [
      { surface: "Shaking my head", base: "shake head", language: "en", shortMeaning: "首を振って", meaning: "頭を振っている、呆れている" },
    ],
  },
  L16: {
    korean: "This is my way",
    japanese: "これが私のやり方。",
    literalJapanese: "これは私の道。",
    sentenceExplanation: "他人の評価ではなく、自分のやり方を貫く宣言。",
    tokens: [
      { surface: "This is my way", base: "my way", language: "en", shortMeaning: "これが私の道", meaning: "これが私の道、私のやり方" },
    ],
  },
  L17: {
    korean: "Ayayaya I be going out with a bang",
    japanese: "私は派手にぶちかまして進んでいく。",
    literalJapanese: "私は派手に出ていく。",
    sentenceExplanation: "サビの勢いを強める部分。Ayayaya は意味というより掛け声・リズム。",
    tokens: [
      { surface: "Ayayaya", base: "ayayaya", language: "en", shortMeaning: "アヤヤヤ", meaning: "掛け声、リズム", trailingSpace: true },
      { surface: "I be going out with a bang", base: "go out with a bang", language: "en", shortMeaning: "派手にぶちかます", meaning: "私は派手にぶちかましていく" },
    ],
  },
  L18: {
    korean: "This is my day",
    japanese: "今日は私のための日。",
    literalJapanese: "これは私の日。",
    sentenceExplanation: "「今日の主役は私」「私が輝く番」という強い自己肯定。",
    tokens: [
      { surface: "This is my day", base: "my day", language: "en", shortMeaning: "私の日", meaning: "私の日、私が主役の日" },
    ],
  },
  L19: {
    korean: "밤이 올 때",
    reading: "パミ オル テ",
    japanese: "夜が訪れる時。",
    literalJapanese: "夜が来る時。",
    sentenceExplanation: "夜になると、さらに自分の時間が始まる感じ。クラブ・ステージ・派手な登場のイメージにもつながる。",
    tokens: [
      { surface: "밤이", base: "밤", language: "ko", shortMeaning: "夜が", meaning: "夜が", pos: "名詞＋助詞", level: "初級", breakdown: "밤 + 이", trailingSpace: true },
      { surface: "올", base: "오다", language: "ko", shortMeaning: "来る", meaning: "来る〜", pos: "動詞", level: "初級", breakdown: "오다 + -ㄹ", explanation: "오다 の未来・連体形。", trailingSpace: true },
      { surface: "때", base: "때", language: "ko", shortMeaning: "時", meaning: "時", pos: "名詞", level: "初級" },
    ],
  },
  L20: {
    korean: "Ayayaya I be going out with a",
    japanese: "私は派手に飛び出していく。",
    literalJapanese: "私は〜とともに出ていく。",
    sentenceExplanation: "ここで文を途中で切って、次の Bang に続けている。音のインパクトを前に出す歌詞の作り方。",
    tokens: [
      { surface: "Ayayaya", base: "ayayaya", language: "en", shortMeaning: "アヤヤヤ", meaning: "掛け声", trailingSpace: true },
      { surface: "I be going out with a", base: "go out with a bang", language: "en", shortMeaning: "派手に", meaning: "私は派手に〜" },
    ],
  },
  L23: {
    korean: "더 다가와 더, 빨리 go 더",
    reading: "ト タガワ ト, パルリ go ト",
    japanese: "もっと近づいて、もっと早く来て。",
    literalJapanese: "もっと近づいて、もっと、早く行って、もっと。",
    sentenceExplanation: "「もっと来て」「もっと攻めて」という煽り。韓国語の 더 が何度も出て、欲張りで強気な感じが出ている。",
    grammarPoints: [
      { id: "gp-deo", title: "더", meaning: "もっと、さらに", explanation: "程度を強める副詞。", example: "더 주세요.", exampleJapanese: "もっとください。" }
    ],
    tokens: [
      { surface: "더", base: "더", language: "ko", shortMeaning: "もっと", meaning: "もっと", pos: "副詞", level: "初級", trailingSpace: true },
      { surface: "다가와", base: "다가오다", language: "ko", shortMeaning: "近づいてきて", meaning: "近づいてきて", pos: "動詞", level: "中級", explanation: "다가오다 の命令・くだけた形。相手が近づく時に使う。", trailingSpace: true },
      { surface: "더,", base: "더", language: "ko", shortMeaning: "もっと", meaning: "もっと", pos: "副詞", level: "初級", trailingSpace: true },
      { surface: "빨리", base: "빨리", language: "ko", shortMeaning: "速く", meaning: "速く、早く", pos: "副詞", level: "初級", trailingSpace: true },
      { surface: "go", base: "go", language: "en", shortMeaning: "行って", meaning: "行って、進んで", trailingSpace: true },
      { surface: "더", base: "더", language: "ko", shortMeaning: "もっと", meaning: "もっと", pos: "副詞", level: "初級" },
    ],
  },
  L24: {
    korean: "Taking ma 쉿! Gotta pop my gum",
    reading: "Taking ma シュッ! Gotta pop my gum",
    japanese: "余計な声は黙らせて、ガムを弾けさせるみたいに余裕を見せる。",
    literalJapanese: "私のシッを取って、ガムを弾けさせなきゃ。",
    sentenceExplanation: "「周りが何を言っても私は余裕」という態度。ガムを噛んで「パチン」と鳴らす動作で、少し不良っぽい・挑発的なイメージを出している。",
    tokens: [
      { surface: "Taking", base: "take", language: "en", shortMeaning: "受け取って", meaning: "取っている、受け取っている", trailingSpace: true },
      { surface: "ma", base: "my", language: "en", shortMeaning: "私の", meaning: "私の (myのくだけた表記)", trailingSpace: true },
      { surface: "쉿!", base: "쉿", language: "ko", shortMeaning: "シッ", meaning: "シッ、静かに", pos: "感嘆詞", level: "初級", trailingSpace: true },
      { surface: "Gotta", base: "got to", language: "en", shortMeaning: "〜しなきゃ", meaning: "〜しなきゃ、〜しないと", trailingSpace: true },
      { surface: "pop", base: "pop", language: "en", shortMeaning: "鳴らす", meaning: "弾けさせる、鳴らす", trailingSpace: true },
      { surface: "my gum", base: "gum", language: "en", shortMeaning: "私のガム", meaning: "私のガム" },
    ],
  },
  L25: {
    korean: "Gimme that Grr Gimme that kiss",
    japanese: "その刺激をちょうだい、そのキスをちょうだい。",
    literalJapanese: "それをちょうだい、Grr、それをちょうだい、キスを。",
    sentenceExplanation: "Grr はうなり声、怒りや野性味を表す音。可愛さよりも、強気・刺激・挑発が強い表現。",
    tokens: [
      { surface: "Gimme", base: "give me", language: "en", shortMeaning: "ちょうだい", meaning: "ちょうだい、よこして", trailingSpace: true },
      { surface: "that", base: "that", language: "en", shortMeaning: "その", meaning: "それ、その", trailingSpace: true },
      { surface: "Grr", base: "grr", language: "en", shortMeaning: "ガルル(刺激)", meaning: "うなり声、野性味、刺激", trailingSpace: true },
      { surface: "Gimme that kiss", base: "give me kiss", language: "en", shortMeaning: "キスをちょうだい", meaning: "そのキスをちょうだい" },
    ],
  },
  L26: {
    korean: "Hey I told u",
    japanese: "ほら、言ったでしょ。",
    literalJapanese: "ねえ、言ったでしょ。",
    sentenceExplanation: "自分の強さや危険さを前から警告していた、という感じ。told u = told you。",
    tokens: [
      { surface: "Hey", base: "hey", language: "en", shortMeaning: "ねえ", meaning: "ねえ、ほら", trailingSpace: true },
      { surface: "I told", base: "tell", language: "en", shortMeaning: "言った", meaning: "私は言った", trailingSpace: true },
      { surface: "u", base: "you", language: "en", shortMeaning: "あなたに", meaning: "あなたに (youの略)" },
    ],
  },
  L27: {
    korean: "It’s explosive It’s aggressive",
    japanese: "爆発するように強くて、かなり攻めている。",
    literalJapanese: "それは爆発的で、攻撃的だ。",
    sentenceExplanation: "bang と同じく、爆発・衝撃・勢いを表す言葉。",
    tokens: [
      { surface: "It's", base: "It is", language: "en", shortMeaning: "それは〜だ", meaning: "それは〜だ", trailingSpace: true },
      { surface: "explosive", base: "explosive", language: "en", shortMeaning: "爆発的な", meaning: "爆発的な、爆発しそうな", trailingSpace: true },
      { surface: "It's", base: "It is", language: "en", shortMeaning: "それは〜だ", meaning: "それは〜だ", trailingSpace: true },
      { surface: "aggressive", base: "aggressive", language: "en", shortMeaning: "攻撃的な", meaning: "攻撃的な、攻めた" },
    ],
  },
  L28: {
    korean: "It’s a little bit offensive",
    japanese: "少し挑発的なくらい。",
    literalJapanese: "それは少し攻撃的だ。",
    sentenceExplanation: "offensive は英語で「人を不快にさせる」「失礼な」「挑発的な」という意味。「ちょっとやりすぎかもね。でもそれが私」という感じ。",
    tokens: [
      { surface: "It's", base: "It is", language: "en", shortMeaning: "それは〜だ", meaning: "それは〜だ", trailingSpace: true },
      { surface: "a little bit", base: "a little bit", language: "en", shortMeaning: "少し", meaning: "少し、ちょっと", trailingSpace: true },
      { surface: "offensive", base: "offensive", language: "en", shortMeaning: "挑発的な", meaning: "攻撃的な、不快にさせる、挑発的な" },
    ],
  },
  L29: {
    korean: "Yeah I said it (Yeah)",
    japanese: "そう、私は言い切った。",
    literalJapanese: "そう、私はそれを言った。",
    sentenceExplanation: "遠慮なく言い切る感じ。「言っちゃった」「でも撤回しない」という強さ。",
    tokens: [
      { surface: "Yeah I said it", base: "say", language: "en", shortMeaning: "私はそう言った", meaning: "そう、私はそれを言った" },
    ],
  },
  L31: {
    korean: "그냥 맘 가는 대로",
    reading: "クニャン マム ガヌン デロ",
    japanese: "ただ気持ちの向くままに。",
    literalJapanese: "ただ心が行く通りに。",
    sentenceExplanation: "深く考えず、他人の目も気にせず、自分の感覚で動くという意味。",
    grammarPoints: [
      { id: "gp-neun-daero", title: "-는 대로", meaning: "〜する通りに、〜するまま에", explanation: "動詞の連体形について「〜する通りに」を表す。", example: "원하는 대로 하세요.", exampleJapanese: "望む通りにしてください。" }
    ],
    tokens: [
      { surface: "그냥", base: "그냥", language: "ko", shortMeaning: "ただ", meaning: "ただ、そのまま、何も考えずに", pos: "副詞", level: "初級", trailingSpace: true },
      { surface: "맘", base: "마음", language: "ko", shortMeaning: "心", meaning: "心、気持ち", pos: "名詞", level: "初級", breakdown: "마음 の短縮", trailingSpace: true },
      { surface: "가는 대로", base: "가다", language: "ko", shortMeaning: "向くまま에", meaning: "行く通りに、向かうままに", pos: "動詞＋文法", level: "中級", breakdown: "가다 + -는 대로" },
    ],
  },
  L45: {
    korean: "Hot issue ’대체 누굴까‘",
    reading: "Hot issue テチェ ヌグルカ",
    japanese: "話題の中心、「一体あれは誰？」。",
    literalJapanese: "ホットな話題、「一体誰だろう」。",
    sentenceExplanation: "みんなが自分の正体を知りたがっている。「あの噂の子は誰？」と注目されている状態。",
    grammarPoints: [
      { id: "gp-l-kka", title: "-ㄹ/을까", meaning: "〜だろうか、〜かな", explanation: "推測や疑問を表す語尾。", example: "비가 올까?", exampleJapanese: "雨が降るかな？" }
    ],
    tokens: [
      { surface: "Hot issue", base: "hot issue", language: "en", shortMeaning: "話題の中心", meaning: "話題の中心、注目の話題", trailingSpace: true },
      { surface: "’대체", base: "대체", language: "ko", shortMeaning: "一体", meaning: "一体、そもそも", pos: "副詞", level: "中級", trailingSpace: true },
      { surface: "누굴까‘", base: "누구", language: "ko", shortMeaning: "誰だろう", meaning: "誰だろうか", pos: "代名詞＋文法", level: "初級", breakdown: "누구 + -일까 → 누굴까" },
    ],
  },
  L46: {
    korean: "다들 찾기 위해서 안달 나",
    reading: "タドゥル チャッキ ウィヘソ アンダル ナ",
    japanese: "みんな私を見つけたくて仕方ない。",
    literalJapanese: "みんな探すために焦っている。",
    sentenceExplanation: "周りが自分に夢中になっている状態。自分が追われる側・注目される側になっている。",
    grammarPoints: [
      { id: "gp-gi-wihaeseo", title: "-기 위해서", meaning: "〜するために", explanation: "目的を表す文法。動詞の語幹＋기（名詞化）＋위해서。", example: "만나기 위해서 왔어요.", exampleJapanese: "会うために来ました。" }
    ],
    tokens: [
      { surface: "다들", base: "다", language: "ko", shortMeaning: "みんな", meaning: "みんな", pos: "代名詞", level: "初級", breakdown: "다 + 들", trailingSpace: true },
      { surface: "찾기", base: "찾다", language: "ko", shortMeaning: "探すこと", meaning: "探すこと", pos: "名詞(動詞派生)", level: "初級", breakdown: "찾다 + -기", trailingSpace: true },
      { surface: "위해서", base: "위하다", language: "ko", shortMeaning: "ために", meaning: "〜のために", pos: "動詞活用", level: "中級", breakdown: "위하다 + -아/어서", trailingSpace: true },
      { surface: "안달 나", base: "안달 나다", language: "ko", shortMeaning: "必死になる", meaning: "やきもきする、じれったがる、必死になる", pos: "動詞", level: "上級", explanation: "欲しくて・気になって・焦って落ち着かない状態を表す慣用表現。" },
    ],
  },
  L47: {
    korean: "연기처럼 Disappear",
    reading: "ヨンギチョロム Disappear",
    japanese: "煙みたいに姿を消す。",
    literalJapanese: "煙のように消える。",
    sentenceExplanation: "捕まえようとしても、ふっと消える。ミステリアスで掴めない存在。",
    grammarPoints: [
      { id: "gp-cheoreom", title: "-처럼", meaning: "〜のように", explanation: "名詞について比喩を作る助詞。", example: "꿈처럼 아름답다.", exampleJapanese: "夢のように美しい。" }
    ],
    tokens: [
      { surface: "연기처럼", base: "연기", language: "ko", shortMeaning: "煙のように", meaning: "煙のように", pos: "名詞＋助詞", level: "中級", breakdown: "연기 + -처럼", explanation: "연기 には『演技』という意味もあるが、Disappear と繋がるのでここでは『煙』。", trailingSpace: true },
      { surface: "Disappear", base: "disappear", language: "en", shortMeaning: "消える", meaning: "消える、姿を消す" },
    ],
  },
  L48: {
    korean: "Catch me if you can, baby",
    japanese: "捕まえられるものなら捕まえてみて。",
    literalJapanese: "捕まえられるなら捕まえて、baby。",
    sentenceExplanation: "相手を挑発している。「どうせ捕まえられないでしょ？」という余裕がある態度。",
    tokens: [
      { surface: "Catch me", base: "catch me", language: "en", shortMeaning: "私を捕まえて", meaning: "私を捕まえて", trailingSpace: true },
      { surface: "if you can,", base: "if you can", language: "en", shortMeaning: "できるなら", meaning: "できるなら", trailingSpace: true },
      { surface: "baby", base: "baby", language: "en", shortMeaning: "ベイビー", meaning: "呼びかけ" },
    ],
  },
  L49: {
    korean: "조금만 더 놀아줄게",
    reading: "チョグムマン ト ノラジュルケ",
    japanese: "もう少しだけ相手してあげる。",
    literalJapanese: "もう少しだけ遊んであげる。",
    sentenceExplanation: "かなり上から目線。相手に追わせて、自分は余裕で「少しだけ遊んであげる」と言っている。",
    grammarPoints: [
      { id: "gp-a-eojuda", title: "-아/어 주다", meaning: "〜してあげる、〜してくれる", explanation: "他人のために何かをする・してもらう時に使う。", example: "도와주세요.", exampleJapanese: "助けてください。" },
      { id: "gp-l-ge", title: "-ㄹ게/을게", meaning: "〜するね、〜してあげるよ", explanation: "自分の意思を相手に親しく伝える時の語尾。", example: "내가 할게.", exampleJapanese: "私がやるね。" }
    ],
    tokens: [
      { surface: "조금만", base: "조금", language: "ko", shortMeaning: "少しだけ", meaning: "少しだけ", pos: "副詞＋助詞", level: "初級", breakdown: "조금 + -만", trailingSpace: true },
      { surface: "더", base: "더", language: "ko", shortMeaning: "もっと", meaning: "もっと、もう少し", pos: "副詞", level: "初級", trailingSpace: true },
      { surface: "놀아줄게", base: "놀다", language: "ko", shortMeaning: "相手してあげる", meaning: "遊んであげる、相手してあげる", pos: "動詞", level: "初級", breakdown: "놀다 + -아 주다 + -ㄹ게" },
    ],
  },
  L50: {
    korean: "4, 3, 2, 1",
    japanese: "4、3、2、1。",
    literalJapanese: "4、3、2、1。",
    sentenceExplanation: "カウントダウン。爆発・登場・サビへの入りを強める演出で、この後の Bang につながる。",
    tokens: [
      { surface: "4, 3, 2, 1", base: "4, 3, 2, 1", language: "en", shortMeaning: "4, 3, 2, 1", meaning: "カウントダウン" },
    ],
  },
  L51: {
    korean: "Bang",
    japanese: "Bang",
    literalJapanese: "バン。",
    sentenceExplanation: "カウントダウン後の爆発。「ここで私が決める」という感じ。",
    tokens: [
      { surface: "Bang", base: "bang", language: "en", shortMeaning: "バン", meaning: "バン、爆発音、衝撃音" },
    ],
  },
};

const makeLine = (idStr: string, lineDef: any): LyricLine => {
  return {
    ...lineDef,
    id: idStr,
    tokens: lineDef.tokens.map((t: any, i: number) => ({
      ...t,
      id: `${idStr}-t${i + 1}`
    }))
  };
};

export const completeBangBangLines: LyricLine[] = [
  makeLine("line-1", uLines.L1),
  makeLine("line-2", uLines.L2),
  makeLine("line-3", uLines.L3),
  makeLine("line-4", uLines.L4),
  makeLine("line-5", uLines.L5),
  makeLine("line-6", uLines.L6),
  makeLine("line-7", uLines.L7),
  makeLine("line-8", uLines.L8),
  makeLine("line-9", uLines.L9),
  makeLine("line-10", uLines.L10),
  makeLine("line-11", uLines.L11),
  makeLine("line-12", uLines.L12),
  makeLine("line-13", uLines.L12),
  makeLine("line-14", uLines.L14),
  makeLine("line-15", uLines.L15),
  makeLine("line-16", uLines.L16),
  makeLine("line-17", uLines.L17),
  makeLine("line-18", uLines.L18),
  makeLine("line-19", uLines.L19),
  makeLine("line-20", uLines.L20),
  makeLine("line-21", uLines.L12),
  makeLine("line-22", uLines.L12),
  makeLine("line-23", uLines.L23),
  makeLine("line-24", uLines.L24),
  makeLine("line-25", uLines.L25),
  makeLine("line-26", uLines.L26),
  makeLine("line-27", uLines.L27),
  makeLine("line-28", uLines.L28),
  makeLine("line-29", uLines.L29),
  makeLine("line-30", uLines.L8),
  makeLine("line-31", uLines.L31),
  makeLine("line-32", uLines.L10),
  makeLine("line-33", uLines.L11),
  makeLine("line-34", uLines.L12),
  makeLine("line-35", uLines.L12),
  makeLine("line-36", uLines.L14),
  makeLine("line-37", uLines.L15),
  makeLine("line-38", uLines.L16),
  makeLine("line-39", uLines.L17),
  makeLine("line-40", uLines.L18),
  makeLine("line-41", uLines.L19),
  makeLine("line-42", uLines.L20),
  makeLine("line-43", uLines.L12),
  makeLine("line-44", uLines.L12),
  makeLine("line-45", uLines.L45),
  makeLine("line-46", uLines.L46),
  makeLine("line-47", uLines.L47),
  makeLine("line-48", uLines.L48),
  makeLine("line-49", uLines.L49),
  makeLine("line-50", uLines.L50),
  makeLine("line-51", uLines.L51),
  makeLine("line-52", uLines.L15),
  makeLine("line-53", uLines.L16),
  makeLine("line-54", uLines.L17),
  makeLine("line-55", uLines.L18),
  makeLine("line-56", uLines.L19),
  makeLine("line-57", uLines.L20),
  makeLine("line-58", uLines.L12),
  makeLine("line-59", uLines.L12),
];

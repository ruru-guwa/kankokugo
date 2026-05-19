import type { Song } from "../../types/song";
import { completeBangBangLines } from "./_bb-lines-all";

const expandTextMap = (
  groups: Array<[number[], string]>,
): Record<number, string> =>
  Object.fromEntries(
    groups.flatMap(([numbers, text]) => numbers.map((number) => [number, text])),
  );

const bangBangSectionBreaks = new Set([10, 18, 22, 29, 40, 44, 51]);

const bangBangRoleMap = expandTextMap([
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "オープニングで『噂の中心にいる危険で目立つ存在』というキャラクターを立ち上げるパート。"],
  [[11, 12, 13, 14, 15, 16, 17, 18], "1回目のサビ。『派手に決めるのが私のやり方』という曲の中心メッセージを打ち出す。"],
  [[19, 20, 21, 22], "サビ後半のカウントアップ。夜・登場・爆発のイメージで勢いを継続させる。"],
  [[23, 24, 25, 26, 27, 28, 29], "2番で挑発のトーンをさらに強め、近づいてきた相手を余裕であしらうパート。"],
  [[30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40], "2回目のサビ。『私のやり方』をもう一度確認し、自己主張を固める繰り返し。"],
  [[41, 42, 43, 44], "サビ終盤の熱量維持パート。夜が来るたびに自分の時間が始まる感覚を押し出す。"],
  [[45, 46, 47, 48, 49], "ブリッジ。みんなが追いかける存在でありながら、最後までつかまらない余裕を見せる。"],
  [[50, 51, 52, 53, 54, 55, 56, 57, 58, 59], "ラストのカウントダウンから締めまで。爆発的に終える『bang』のイメージを残して去る。"],
]);

const bangBangExtraNuance: Record<number, string> = {
  10: "I don't give a shit を直接は言わず、쉿! に置き換えているのがポイント。乱暴さを保ちつつ、遊び心のある挑発にしている。",
  11: "go out with a bang は『最後に派手に決める』『強烈な印象を残して去る』という英語表現。単なる爆発音以上に、存在感を残すニュアンスが強い。",
  15: "Shaking my head は『ただ首を振る』ではなく、『呆れて相手にしない』『そんなの知ったことじゃない』という身振りとして効いている。",
  16: "『私の道』は REBEL HEART のような内面的な道というより、ステージ上での自分の流儀・見せ方に近い。",
  18: "This is my day は『今日は私の日』で、主役宣言に近い。周りがどう見るかではなく、自分が光る番だと決めている感じ。",
  27: "explosive は bang のイメージを言い換えていて、音だけでなく『触れたら弾ける勢い』まで含む。",
  28: "offensive は単なる悪口ではなく、『ちょっとやりすぎなくらい攻めている』という自己演出の言い方。",
  29: "言いすぎたかもしれないラインでも『Yeah I said it』で引かないのがこの曲の強さ。撤回しない態度まで含まれる。",
  31: "맘 가는 대로 は『衝動的に』ではなく、『自分の心が自然に向かう方向のまま』という自由さを持つ。",
  45: "Hot issue は『話題』以上に、『みんなが追っている中心人物』という自分の見え方を誇らしく言っている。",
  47: "Disappear と結びつくことで、연기 が『煙』として働いている。掴めそうで掴めない存在感の比喩。",
  48: "Catch me if you can は『捕まえてみれば？』という余裕混じりの挑発で、追われる側の立場を楽しんでいる。",
  49: "놀아주다 は文脈次第で『遊んであげる』だけでなく『相手してあげる』にもなり、かなり余裕のある上から目線になる。",
  50: "カウントダウンが入ることで、単なる歌詞ではなく『ここから爆発させる』ステージ演出の空気が強くなる。",
  51: "最後の Bang は単語一つだけで、ここまで積み上げた自己演出を爆発音のイメージに収束させている。",
};

const bangBangExtraGrammar: Record<
  number,
  Array<{
    title: string;
    meaning: string;
    explanation: string;
    example?: string;
    exampleJapanese?: string;
  }>
> = {
  2: [
    {
      title: "-었겠지",
      meaning: "〜したでしょう、〜したはずでしょ",
      explanation:
        "過去形に 추측・確認の 느낌が重なった形。알아차렸겠지 で『もう気づいているでしょ』。",
      example: "봤겠지",
      exampleJapanese: "見ただろうね",
    },
  ],
  5: [
    {
      title: "-지",
      meaning: "〜だよ、〜でしょ",
      explanation:
        "当然感や確認、軽い念押しを出す語尾。걔지 で『あの子だよ』『その子でしょ』。",
      example: "내 거지",
      exampleJapanese: "私のだよ",
    },
  ],
  8: [
    {
      title: "-지 말고",
      meaning: "〜しないで、〜せずに",
      explanation:
        "禁止の -지 말다 に -고 がついて、次の行動へつなぐ形。주저하지 말고 で『ためらわないで』。",
      example: "울지 말고 말해",
      exampleJapanese: "泣かないで言って",
    },
  ],
  16: [
    {
      title: "my way",
      meaning: "自分のやり方",
      explanation:
        "英語の定番表現で、『私の道』から転じて『私の流儀』『私らしいやり方』を表す。",
      example: "Do it my way",
      exampleJapanese: "私のやり方でやって",
    },
  ],
  24: [
    {
      title: "gotta",
      meaning: "〜しなきゃ、〜しないと",
      explanation:
        "got to のくだけた形。会話や歌詞で勢いよく使われやすい。",
      example: "I gotta go",
      exampleJapanese: "もう行かなきゃ",
    },
  ],
  25: [
    {
      title: "gimme",
      meaning: "ちょうだい、よこして",
      explanation:
        "give me の口語的な縮約。甘さよりも勢い・強気が出る言い方。",
      example: "Gimme more",
      exampleJapanese: "もっとちょうだい",
    },
  ],
  28: [
    {
      title: "a little bit",
      meaning: "少し、ちょっと",
      explanation:
        "offensive を少し和らげつつ、『ちょっとどころじゃないかもね』という余裕も出す言い回し。",
      example: "a little bit late",
      exampleJapanese: "少し遅い",
    },
  ],
  31: [
    {
      title: "-는 대로",
      meaning: "〜する通りに、〜するままに",
      explanation:
        "맘 가는 대로 で『心が向かう通りに』。理性で抑えず、そのまま進む感じを出す。",
      example: "생각나는 대로 적어",
      exampleJapanese: "思いつくままに書いて",
    },
  ],
  46: [
    {
      title: "動詞 + -기 위해서",
      meaning: "〜するために",
      explanation:
        "찾기 위해서 で『探すために』。動詞を名詞化して目的を表している。",
      example: "살기 위해서 일해",
      exampleJapanese: "生きるために働く",
    },
  ],
  47: [
    {
      title: "-처럼",
      meaning: "〜のように",
      explanation:
        "연기처럼 で『煙のように』。比喩として使われる助詞で、掴めなさを強めている。",
      example: "바람처럼 지나가",
      exampleJapanese: "風のように過ぎていく",
    },
  ],
  48: [
    {
      title: "if you can",
      meaning: "できるなら",
      explanation:
        "条件を出しつつ、実際には『無理でしょ？』という挑発をこめやすい定番フレーズ。",
      example: "Try it if you can",
      exampleJapanese: "できるならやってみて",
    },
  ],
  49: [
    {
      title: "-만",
      meaning: "〜だけ",
      explanation:
        "조금만 で『少しだけ』。数量をしぼって、余裕のある言い方にしている。",
      example: "하루만 기다려",
      exampleJapanese: "一日だけ待って",
    },
  ],
};

const bangBangTokenMeanings: Record<number, Record<string, string>> = {
  1: {
    aggressive: "暴力的というより、最初からかなり攻めた雰囲気で登場していること。",
  },
  4: {
    Problem: "単なる『問題』ではなく、みんながざわつく危険で目立つ存在。",
  },
  5: {
    "'걔'지": "みんなが噂している『あの子』こそ自分だと、堂々と正体を明かす感じ。",
  },
  10: {
    "I don't give a": "後ろが何であれ『そんなの気にしない』と切り捨てる強さ。",
    "What you say": "あなたが何を言っても関係ない、という突き放し。",
  },
  11: {
    "with a bang": "静かに終わるのではなく、派手に痕跡を残して去ること。",
  },
  15: {
    "Shaking my head": "呆れて首を振り、相手をまともに受け取っていない仕草。",
  },
  16: {
    "This is my way": "他人基準ではなく、自分の流儀を貫く宣言。",
  },
  18: {
    "This is my day": "今日は自分が主役で、自分の空気に変える日だという自己演出。",
  },
  24: {
    "pop": "ガムを鳴らして余裕を見せる、挑発の仕草そのもの。",
    "my gum": "不良っぽいスタイルや退屈しない余裕の象徴。",
  },
  25: {
    Grr: "可愛さではなく、少し野性的で危険な刺激を求める感じ。",
    "Gimme that kiss": "欲しいものは自分から強気に取りに行くニュアンス。",
  },
  27: {
    explosive: "爆発しそうなくらい勢いがあり、触れれば一気に広がる感じ。",
    aggressive: "周囲より一段強く前に出る、攻めた存在感。",
  },
  28: {
    offensive: "少し失礼なくらいでも引かない、挑発の美学。",
  },
  29: {
    "Yeah I said it": "言ってしまったことをむしろ誇っていて、まったく引っ込める気がないこと。",
  },
  31: {
    "그냥": "考え込みすぎず、そのままという軽さ。",
    "맘 가는 대로": "心が向かう方向をそのまま行く、という自由さ。",
  },
  45: {
    "Hot issue": "一時的な話題ではなく、みんなの視線が集まる中心人物としての自分。",
    "누굴까‘": "『あの子は誰？』とみんなが正体を知りたがっている状態。",
  },
  46: {
    "안달 나": "欲しくて焦って落ち着かない状態。相手が自分を追って必死になっている感じ。",
  },
  47: {
    "연기처럼": "つかめそうでつかめない、煙みたいな存在感。",
    "Disappear": "実際に消えるというより、追われても簡単には捕まらないこと。",
  },
  48: {
    "Catch me": "追う側と追われる側の構図を完全に自分有利で楽しんでいる挑発。",
    "if you can,": "できるものならやってみて、という余裕まじりの条件づけ。",
  },
  49: {
    "놀아줄게": "『少しだけ相手してあげるよ』という余裕たっぷりの上から目線。",
  },
  50: {
    "4, 3, 2, 1": "本番直前のカウントで、次の一発を自分のものにする演出。",
  },
  51: {
    Bang: "音一つで存在感を決める、この曲全体の象徴。",
  },
};

const bangBangReadingMap: Record<number, string> = {
  1: "イッツ ア ニュー シーン イッツ アグレッシブ",
  5: "イェア アイム ゲジ",
  6: "ピョゲ プトゥン ナエ ピクチャー",
  7: "アレ ウォンテッド",
  8: "ウェイク アップ チュジョハジ マルゴ",
  10: "アイ ドント ギブ ア シュッ ワット ユー セイ",
  11: "イェア アイ ビー ゴーイング アウト ウィズ ア バン",
  12: "バン バン バン バン",
  13: "バン バン バン バン",
  14: "アイ ビー ゴーイング アウト ウィズ ア バン",
  15: "シェイキング マイ ヘッド",
  16: "ディス イズ マイ ウェイ",
  17: "アヤヤヤ アイ ビー ゴーイング アウト ウィズ ア バン",
  18: "ディス イズ マイ デイ",
  20: "アヤヤヤ アイ ビー ゴーイング アウト ウィズ ア",
  21: "バン バン バン バン",
  22: "バン バン バン バン",
  23: "ト タガワ ト パルリ ゴー ト",
  24: "テイキング マ シュッ ガタ ポップ マイ ガム",
  25: "ギミー ザット グルル ギミー ザット キス",
  26: "ヘイ アイ トールド ユー",
  27: "イッツ エクスプローシブ イッツ アグレッシブ",
  28: "イッツ ア リトル ビット オフェンシブ",
  29: "イェア アイ セディット イェア",
  30: "ウェイク アップ チュジョハジ マルゴ",
  32: "アイ ドント ギブ ア シュッ ワット ユー セイ",
  33: "イェア アイ ビー ゴーイング アウト ウィズ ア バン",
  34: "バン バン バン バン",
  35: "バン バン バン バン",
  36: "アイ ビー ゴーイング アウト ウィズ ア バン",
  37: "シェイキング マイ ヘッド",
  38: "ディス イズ マイ ウェイ",
  39: "アヤヤヤ アイ ビー ゴーイング アウト ウィズ ア バン",
  40: "ディス イズ マイ デイ",
  42: "アヤヤヤ アイ ビー ゴーイング アウト ウィズ ア",
  43: "バン バン バン バン",
  44: "バン バン バン バン",
  45: "ホット イシュー テチェ ヌグルカ",
  47: "ヨンギチョロム ディサピア",
  48: "キャッチ ミー イフ ユー キャン ベイビー",
  50: "フォー スリー ツー ワン",
  51: "バン",
  52: "シェイキング マイ ヘッド",
  53: "ディス イズ マイ ウェイ",
  54: "アヤヤヤ アイ ビー ゴーイング アウト ウィズ ア バン",
  55: "ディス イズ マイ デイ",
  57: "アヤヤヤ アイ ビー ゴーイング アウト ウィズ ア",
  58: "バン バン バン バン",
  59: "バン バン バン バン",
};

export const iveBangBang: Song = {
  id: "ive-bang-bang",
  title: "BANG BANG",
  artist: "IVE",
  difficulty: "中級",
  tags: ["強気", "ヒップホップ", "会話表現", "英語ミックス", "初級", "中級"],

  links: {
    youtube: "https://www.youtube.com/watch?v=EXAMPLE_IVE",
    spotify: "https://open.spotify.com/track/EXAMPLE_IVE",
  },

  overview:
    "「噂されても、追われても、批判されても関係ない。私は私のやり方で、派手に存在感を残していく」というメッセージが込められた強気な曲。韓国語の会話表現（그치, 걔, 그냥 맘 가는 대로 など）が多用されており、口語的な表現を学ぶのに最適です。bang は爆発音だけでなく「強烈な印象を残す」「派手に決める」という意味で使われています。",

  lines: completeBangBangLines.map((line, index) => {
    const lineNumber = index + 1;
    const extraGrammar =
      bangBangExtraGrammar[lineNumber]?.map((grammarPoint, grammarIndex) => ({
        id: `line-${lineNumber}-extra-g${grammarIndex + 1}`,
        ...grammarPoint,
      })) ?? [];

    return {
      ...line,
      reading: bangBangReadingMap[lineNumber] ?? line.reading,
      roleInSong: bangBangRoleMap[lineNumber] ?? line.roleInSong,
      sectionBreakAfter: bangBangSectionBreaks.has(lineNumber),
      nuance: bangBangExtraNuance[lineNumber] ?? line.nuance,
      grammarPoints: [...(line.grammarPoints ?? []), ...extraGrammar],
      tokens: line.tokens.map((token) => ({
        ...token,
        meaningInThisLine:
          bangBangTokenMeanings[lineNumber]?.[token.surface] ??
          token.meaningInThisLine,
      })),
    };
  }),

  quizzes: [
    {
      id: "q1",
      type: "word-meaning",
      question: "이미 の意味は？",
      choices: ["もう、すでに", "まだ", "ずっと", "必ず"],
      answer: "もう、すでに",
      explanation: "이미 알아차렸겠지（もう気づいたでしょ）で使われています。",
      songId: "ive-bang-bang",
    },
    {
      id: "q2",
      type: "word-meaning",
      question: "알아차리다 の意味は？",
      choices: ["気づく、察する", "見逃す", "騙す", "隠す"],
      answer: "気づく、察する",
      explanation: "알다（知る）＋ 차리다（整える）で「状況を見て気づく、察する」という意味です。",
      songId: "ive-bang-bang",
    },
    {
      id: "q3",
      type: "word-meaning",
      question: "소문 の意味は？",
      choices: ["噂", "約束", "真実", "嘘"],
      answer: "噂",
      explanation: "모든 소문 속의 Problem（あらゆる噂の中心にいる問題児）。",
      songId: "ive-bang-bang",
    },
    {
      id: "q4",
      type: "grammar",
      question: "「-지 말고」の意味は？",
      choices: ["〜しないで", "〜してから", "〜しても", "〜しながら"],
      answer: "〜しないで",
      explanation: "주저하지 말고（ためらわないで）などで使われる禁止表現です。",
      songId: "ive-bang-bang",
    },
    {
      id: "q5",
      type: "word-meaning",
      question: "주저하다 の意味は？",
      choices: ["ためらう、躊躇する", "急ぐ", "諦める", "進む"],
      answer: "ためらう、躊躇する",
      explanation: "Wake up 주저하지 말고（目を覚まして。迷わず行って。）",
      songId: "ive-bang-bang",
    },
    {
      id: "q6",
      type: "grammar",
      question: "「-는 대로」の意味は？",
      choices: ["〜する通りに", "〜する代わりに", "〜するほど", "〜するたびに"],
      answer: "〜する通りに",
      explanation: "맘 가는 대로（心の向くままに、心が行く通りに）。",
      songId: "ive-bang-bang",
    },
    {
      id: "q7",
      type: "fill-blank",
      question: "「다들 _____ 위해서 안달 나」の空欄に入るのは？",
      choices: ["찾기", "보기", "가기", "오기"],
      answer: "찾기",
      explanation: "찾기 위해서（探すために）。찾다（探す）＋ 기（名詞化）＋ 위해서（ために）。",
      songId: "ive-bang-bang",
    },
    {
      id: "q8",
      type: "word-meaning",
      question: "안달 나다 の意味は？",
      choices: ["やきもきする、必死になる", "安心する", "驚く", "怒る"],
      answer: "やきもきする、必死になる",
      explanation: "欲しくて・気になって焦って落ち着かない状態を表します。",
      songId: "ive-bang-bang",
    },
    {
      id: "q9",
      type: "fill-blank",
      question: "「_____ Disappear」の空欄に入るのは？",
      choices: ["연기처럼", "얼음처럼", "유리처럼", "바람처럼"],
      answer: "연기처럼",
      explanation: "연기처럼（煙のように）。ミステリアスで掴めない存在を表す比喩です。",
      songId: "ive-bang-bang",
    },
    {
      id: "q10",
      type: "grammar",
      question: "「-ㄹ게/을게」の意味は？",
      choices: ["〜するね（意志・約束）", "〜だろう（推測）", "〜しろ（命令）", "〜しよう（勧誘）"],
      answer: "〜するね（意志・約束）",
      explanation: "조금만 더 놀아줄게（もう少しだけ相手してあげるね）。",
      songId: "ive-bang-bang",
    },
    {
      id: "q11",
      type: "which-song",
      question: "「Catch me if you can, baby」はどの曲？",
      text: "Catch me if you can, baby",
      choices: ["BANG BANG", "Blue Valentine", "Ditto", "Drama"],
      answer: "BANG BANG",
      explanation: "IVE『BANG BANG』。相手を挑発する余裕のある態度を表す歌詞です。",
      songId: "ive-bang-bang",
    },
    {
      id: "q12",
      type: "word-meaning",
      question: "걔 の自然な意味は？",
      choices: ["あの子、その子", "この場所", "その時", "あの道"],
      answer: "あの子、その子",
      explanation: "그 아이 が縮まった形で、会話でよく使う『あの子』『その子』です。",
      songId: "ive-bang-bang",
    },
    {
      id: "q13",
      type: "fill-blank",
      question: "「그냥 맘 가는 _____」の空欄に入るのは？",
      choices: ["대로", "때로", "후로", "처럼"],
      answer: "대로",
      explanation: "맘 가는 대로 で『心の向くままに』という意味になります。",
      songId: "ive-bang-bang",
    },
    {
      id: "q14",
      type: "grammar",
      question: "「-처럼」の意味は？",
      choices: ["〜のように", "〜だけ", "〜より", "〜まで"],
      answer: "〜のように",
      explanation: "연기처럼 Disappear で『煙のように消える』。比喩を作る助詞です。",
      songId: "ive-bang-bang",
    },
    {
      id: "q15",
      type: "word-meaning",
      question: "This is my way の自然な意味は？",
      choices: ["これが私のやり方", "これが私の部屋", "これは私の秘密", "これが私の昨日"],
      answer: "これが私のやり方",
      explanation: "『私の道』から転じて、『私らしい流儀』『私のスタイル』という意味です。",
      songId: "ive-bang-bang",
    },
  ],
};

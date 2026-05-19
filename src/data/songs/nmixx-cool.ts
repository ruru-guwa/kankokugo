import type { Song, Token } from "../../types/song";
import { completeCoolLines } from "./_cool-lines-all";

const expandTextMap = (
  groups: Array<[number[], string]>,
): Record<number, string> =>
  Object.fromEntries(
    groups.flatMap(([numbers, text]) => numbers.map((number) => [number, text])),
  );

const coolSectionBreaks = new Set([4, 8, 12, 15, 18, 22, 25, 29, 33, 37, 41, 44, 47]);

type ExtraTokenSpec = Omit<Token, "id">;

const mergeExtraTokens = (
  lineNumber: number,
  tokens: Token[],
  extras: ExtraTokenSpec[] = [],
): Token[] => {
  const seen = new Set(tokens.map((token) => token.surface));
  const merged = [...tokens];

  extras.forEach((token, index) => {
    if (seen.has(token.surface)) {
      return;
    }

    merged.push({
      id: `line-${lineNumber}-extra-t${index + 1}`,
      ...token,
    });
    seen.add(token.surface);
  });

  return merged;
};

const coolRoleMap = expandTextMap([
  [
    [1, 2, 3, 4],
    "導入。長い夜と霧のイメージで、相手の心が不安や悪夢に覆われている状態を静かに描き出す。",
  ],
  [
    [5, 6, 7, 8],
    "前半Aメロ。向き合えなかった気持ちと、隠しても積もってあふれそうな涙を見抜いている場面。",
  ],
  [
    [9, 10, 11, 12],
    "1回目のサビ。『平気なふりをしなくていい』と問いかけ、blue の奥に colors が広がる流れを示す。",
  ],
  [
    [13, 14, 15],
    "内面へ入る短い転換部。目を閉じて、自分の中の spectrum を目覚めさせる準備をさせる。",
  ],
  [
    [16, 17, 18],
    "サビ後半。ひとりではないことを約束し、長い夢の終わりに rainbow が待っていると支える。",
  ],
  [
    [19, 20, 21, 22],
    "2番前半。目覚めるたびに心へ焦点を合わせ、感情をひとつ残らず拾い集めようとするパート。",
  ],
  [
    [23, 24, 25],
    "2番の押し出し。感情から目をそらさず、濃くなった虹を追って進もうと背中を押す。",
  ],
  [
    [26, 27, 28, 29],
    "感情の拡張部。数多くの出来事と感情が少しずつ光へ変わっていく回復のプロセスを描く。",
  ],
  [
    [30, 31, 32, 33],
    "2番後半。雲の向こうに隠していた気持ちを一つずつ取り出し、忘れていた感情を解き放つ。",
  ],
  [
    [34, 35, 36, 37],
    "再び戻るサビ。blue を流し切った先に colors が広がるという中心メッセージをもう一度確かめる。",
  ],
  [
    [38, 39, 40, 41],
    "ブリッジ。悲しみで満ちた blue さえも、ありのままの本当の自分だと肯定する核心部。",
  ],
  [
    [42, 43, 44],
    "再起動のフレーズ。感情の幅そのものを感じ直し、もう一度自分の spectrum を起こす。",
  ],
  [
    [45, 46, 47],
    "約束の再提示。語り手がそばに残り、夢の終わりに待つ rainbow をもう一度見せる。",
  ],
  [
    [48, 49, 50, 51],
    "エンディング。最初の bad dreams から 햇빛 と新しい光へ着地し、夜を越えた回復を柔らかく締めくくる。",
  ],
]);

const coolReadingMap: Record<number, string> = {
  1: "キナギン バム パンボクテン bad dreams",
  2: "セサンウル タ カリョ so misty",
  3: "アドゥカン sight トゥメ カリョジン",
  4: "ク マミ ヌッキョジヌン ゴル",
  5: "マジュハジ モタン マウミ",
  7: "ト カムチョバド ッサイル your tears",
  8: "ノムチル トゥッ チャオルゴ イッチャナ",
  10: "ヌナペ アルンゴリン blue",
  11: "モドゥ フルリョネン フ",
  12: "ピョルチョジヌン ク アネ colors",
  14: "チャムシ ヌヌル カムゴ",
  15: "ッケウォ ノエ spectrum",
  17: "キンギン ックメ クテ",
  18: "キダリヌン rainbow yeah",
  20: "ネ マムル ト close up",
  23: "ウェミョナル ピリョ オプソ",
  25: "ト チトジン ムジゲル ッタラソ タルリョ",
  28: "ポンジョオドゥッ チョグムシッ パルガワ",
  29: "モヨジン イ カムジョンドゥレ light",
  30: "クルム ティロ スムギン マウムン",
  31: "ハナドゥルシッ ッコネ set free",
  32: "チャムシ イジョットン モドゥン feelings",
  33: "チョグムシッ ットオルゴ イッチャナ",
  39: "トゥ ヌヌル カドゥク チェウン blue",
  40: "インヌン クデロ True",
  41: "ヌッキョジン クデロ タ It's You",
  49: "チョヨンヒ ノル ピチュヌン ヘッピッ",
  50: "ヌンブシン sight マジュ ポン ウリ",
  51: "ト タルン ピチュル ネヌン ゴル",
};

const coolExtraSentenceExplanations: Record<number, string> = {
  11: "悲しみを押しとどめるのではなく、一度ちゃんと涙として外へ出すことを肯定している。",
  12: "blue の奥にはもっと多くの感情の色があり、それが少しずつ広がっていくと示すライン。",
  20: "自分の心をぼんやり眺めるのではなく、もっと近くに寄って細部まで見つめようとしている。",
  22: "どの感情も取りこぼさず、自分を作る断片としてひとつ残らず拾い集めようとしている。",
  25: "受け入れた感情の分だけ濃くなった虹を追いかけて、自分の未来へ走れと背中を押している。",
  29: "集まった感情たちが、重荷ではなく最終的には light として光を放つ形に変わる。",
  31: "隠していた感情を無理やり暴くのではなく、一つずつ取り出して自由にしていくやさしい進め方。",
  39: "両目いっぱいに blue が満ちていることを隠さず、悲しみそのものを否定しない段階まで来ている。",
  40: "悲しい姿も涙も含めて、ありのままの状態こそ本当の自分だとそのまま認めている。",
  41: "感じたもの全部があなた自身だとまとめ、良い感情だけが本物なのではないと肯定している。",
  49: "ここで finally 햇빛 が現れ、bad dreams と misty に覆われた夜から朝の光へ景色が切り替わる。",
  50: "最初は向き合えなかったのに、最後は『向き合って見た私たち』へ変わっているのが大きな回復。",
  51: "涙や blue を通ったあとに出てくるのは別の光で、前とは違う自分の輝きが生まれたことを示す。",
};

const coolExtraNuance: Record<number, string> = {
  11: "『流す』ことが敗北ではなく回復の入口として扱われているのが、この曲のやさしさ。",
  12: "blue を消して colors に置き換えるのではなく、blue の内側から colors が出てくる構図になっている。",
  20: "close up はカメラ用語っぽいので、自分の感情へピントを合わせるイメージが強い。",
  22: "scrap now には、ばらばらの感情を後で見返せるよう保存するような感じもある。",
  25: "虹は遠くの希望というだけでなく、『感情を受け入れた分だけ濃くなるもの』として描かれている。",
  29: "ここでは感情が整理された結果ではなく、集まったままでもう光になれると見せている。",
  31: "하나둘씩 が入ることで、感情整理は一気にしなくてよいというやさしいペース感が出る。",
  39: "両目いっぱいの blue は、涙で視界が満ちる感じと悲しみの色が視界を覆う感じの両方を含む。",
  40: "있는 그대로 True は自己肯定のコアで、飾っていない状態ほど真実だと言っている。",
  41: "感情を分類して良し悪しを決めるのでなく、『そのまま全部が you』へ回収する包容力がある。",
  49: "햇빛 が静かに差すので、回復は派手な逆転ではなく、朝が来るように自然に訪れる。",
  50: "『우리』が入ることで、回復はひとりの作業ではなく、誰かと向き合う関係の中でも起きていると分かる。",
  51: "또 다른 빛 は元に戻るのではなく、涙を通ったあとの新しい輝きであることが重要。",
};

const coolTokenMeanings: Record<number, Record<string, string>> = {
  1: {
    밤: "ここではただの夜ではなく、不安や孤独が長く続く時間帯そのもの。",
    반복된: "一度きりではなく、同じ苦しさが何度も戻ってきたことを示す語。",
    "bad dreams": "現実の夢というより、抜け出しにくい悪い感情や記憶の比喩として響く。",
  },
  3: {
    아득한: "距離が遠いだけでなく、感覚や視界がぼやけてつかみにくい感じ。",
    가려진: "感情そのものが消えたのではなく、まだ見えにくい場所に隠れている状態。",
  },
  4: {
    맘: "마음 より少し柔らかく、親しい距離感で相手の心に触れている響き。",
    걸: "断言というより、『〜なんだよ』と優しく言い聞かせる歌詞らしい語尾。",
  },
  5: {
    "마주하지 못한": "まだ受け止められず、見ないようにしてきた感情の重さが入る表現。",
  },
  7: {
    감춰봐도: "その場しのぎで隠してみても、根本は消えないという無力感がある。",
    쌓일: "悲しみが一滴で終わらず、静かに積み上がっていくイメージ。",
    "your tears": "相手の涙を突き放さず、ちゃんと見えているものとして扱っている。",
  },
  8: {
    "넘칠 듯": "感情のコップがもう限界まで満ちているような切迫感を出す。",
  },
  9: {
    "playing it cool": "つらくても何でもない顔を保とうとする防御の仕方そのもの。",
  },
  10: {
    blue: "この曲では悲しみ、憂うつ、涙の色として最初に現れる中心色。",
  },
  11: {
    흘려낸: "内側に閉じ込めていたものを、やっと外へ出したという解放の感じがある。",
    후: "感情を流すことが終わりではなく、その先に色の変化が待っていることを示す語。",
  },
  12: {
    colors: "悲しみひと色ではない、その人の中に元からある複数の感情や個性の色。",
  },
  15: {
    spectrum: "単なる色の並びではなく、その人の感情の幅や個性の広がりまで含む語。",
  },
  16: {
    "with you": "ただ励ますのでなく、同じ場所にいて一緒に夜を越えるという寄り添い方。",
  },
  18: {
    rainbow: "涙や雨の後に見えるものとして、回復や希望を自然に連想させる象徴。",
  },
  20: {
    맘: "ここでは外から見える態度ではなく、もっと近くで見直すべき本心そのもの。",
    "close up": "感情をぼかさず、輪郭が見える距離まで寄って見つめるイメージ。",
  },
  21: {
    빛: "暗さの反対としての光だけでなく、感情から生まれる輝きや存在感。",
    감정: "この曲では処理すべきノイズではなく、光を生む素材として扱われている。",
  },
  22: {
    빠짐없이: "どの感情も選別せず、取りこぼさず拾うという受容の姿勢。",
    scrap: "散らばった気持ちを切り捨てるのでなく、材料として集め保存するイメージ。",
  },
  23: {
    필요: "『そんな必要はない』と言い切ることで、感情回避の習慣を止めている。",
    없어: "禁止ではなく安心に近い否定で、『もう無理しなくていい』という響きになる。",
  },
  25: {
    짙어진: "薄い希望ではなく、感情を通ったぶんだけ色が濃く深まった状態。",
    무지갤: "縮約でやわらかくしつつ、ここでは自分だけの回復の軌跡としての虹を指す。",
    따라서: "虹をただ見るだけでなく、その道筋に沿って進む行動へつなげる語。",
  },
  29: {
    모여진: "ばらばらだった感情が、今はひとつのまとまりへ向かっている感じ。",
    감정: "個々の感情が単独ではなく、集まって光を作る材料になっている。",
    light: "回復の終点というより、感情を抱えたままでも出せる新しい輝き。",
  },
  30: {
    구름: "心を覆って視界を曇らせるものとして、ここでも曇天のイメージを保っている。",
    숨긴: "忘れたのではなく、自分で見えない場所へ避難させていた気持ち。",
    마음: "整理されていないまま雲の裏へしまわれていた本心。",
  },
  31: {
    하나둘씩: "一気に整理しなくてもよい、少しずつでいいという回復のペース感。",
    꺼내: "隠していたものをようやく外へ持ち出す、勇気の要る動作。",
    "set free": "感情を消すのでなく、閉じ込めた状態から自由にしてあげること。",
  },
  32: {
    잊었던: "完全に忘れたのではなく、思い出さないようにしていた感情に近い。",
    feelings: "ここでは悲しみだけでなく、止めていた感情全体が戻ってくる。",
  },
  33: {
    조금씩: "回復も再発見も急ではなく、ゆっくりと自分の中へ戻ってくる感じ。",
  },
  39: {
    "두 눈": "感情が頭の中だけでなく、目に見えるほど身体の前面へ出ていること。",
    가득: "隠せないほどいっぱいに満ちた状態で、抑え込めなさを強める。",
    채운: "blue が自分を支配しているのではなく、今は正面から認識できる形で満ちている。",
    blue: "もう否定すべき色ではなく、見つめて受け入れるべき感情の色として戻ってくる。",
  },
  40: {
    "있는 그대로": "加工せず、飾らず、泣いている姿もそのまま認める自己肯定の言葉。",
    True: "理想の自分ではなく、今感じている姿こそが真実だという断言。",
  },
  41: {
    느껴진: "頭で判断したものではなく、実際に感じられたものを優先している。",
    그대로: "良い悪いで削らず、その感触のまま受け止めるニュアンス。",
    "It's You": "感情の全部が最終的に『あなた』へ戻る、この曲の最も大きな肯定。",
  },
  49: {
    조용히: "派手に救うのでなく、静かに寄り添って回復を照らす優しい光の入り方。",
    널: "悲しみの只中にいる相手を、具体的に『あなた』として照らしている。",
    햇빛: "bad dreams と misty を抜けた後に初めて現れる、朝の側の光。",
  },
  50: {
    눈부신: "今度は眩しいほどに明るく、以前のぼんやりした sight と対照を作る語。",
    "마주 본": "かつて向き合えなかったものへ、最後は正面から視線を返せるようになった状態。",
    우리: "この回復がひとりの閉じた作業ではなく、関係の中で起きていることを示す。",
  },
  51: {
    "또 다른": "前に戻るのではなく、新しい段階の光が生まれていることを示す表現。",
    빛: "悲しみを消した結果ではなく、悲しみを通った後だからこそ出る別の輝き。",
    내는: "自然に光るのではなく、自分たちの内側から新しい光を出している感じ。",
  },
};

const coolExtraTokens: Record<number, ExtraTokenSpec[]> = {
  1: [
    {
      surface: "기나긴",
      base: "기나길다",
      language: "ko",
      shortMeaning: "とても長い",
      meaning: "とても長い、長々しい",
      explanation: "普通の 길다 より、かなり長く感じることを強めた歌詞的な形。",
      meaningInThisLine: "出口が見えないほど長く感じる夜の重さを先に置いている。",
    },
  ],
  8: [
    {
      surface: "차오르고 있잖아",
      base: "차오르다",
      language: "ko",
      shortMeaning: "こみ上げているじゃない",
      meaning: "満ちてきている、こみ上げているじゃない",
      explanation: "차오르다 + -고 있다 + -잖아 で、進行中の感情を相手に確かめる形。",
      meaningInThisLine: "もう抑えきれないところまで感情が上がってきている状態を示す。",
    },
  ],
  23: [
    {
      surface: "외면할",
      base: "외면하다",
      language: "ko",
      shortMeaning: "目をそらす〜",
      meaning: "目をそらす〜、背を向ける〜",
      meaningInThisLine: "見たくない感情から逃げること自体を、もうやめていいと許している。",
    },
  ],
  28: [
    {
      surface: "번져오듯",
      base: "번져오다",
      language: "ko",
      shortMeaning: "にじんでくるように",
      meaning: "にじんでくるように、広がってくるように",
      meaningInThisLine: "回復が一気に来るのではなく、色や光がにじむように広がる感じ。",
    },
    {
      surface: "밝아와",
      base: "밝아오다",
      language: "ko",
      shortMeaning: "明るくなってくる",
      meaning: "明るくなってくる",
      meaningInThisLine: "暗闇の支配が少しずつほどけ、光の側へ移り始めていること。",
    },
  ],
  33: [
    {
      surface: "떠오르고 있잖아",
      base: "떠오르다",
      language: "ko",
      shortMeaning: "浮かび上がってきているじゃない",
      meaning: "浮かび上がってきているじゃない",
      explanation: "떠오르다 + -고 있다 + -잖아 で、少しずつ見えてきた感情を相手と共有する語尾。",
      meaningInThisLine: "忘れたと思っていた感情が、今また表面へ戻ってきていることを示す。",
    },
  ],
};

const coolExtraGrammar: Record<
  number,
  Array<{
    title: string;
    meaning: string;
    explanation: string;
    example?: string;
    exampleJapanese?: string;
  }>
> = {
  1: [
    {
      title: "-된",
      meaning: "〜された、〜になった",
      explanation:
        "반복된 は 반복되다 から来た連体形で、『繰り返された〜』と後ろの名詞を説明する。",
      example: "계속된 걱정",
      exampleJapanese: "続いた心配",
    },
  ],
  5: [
    {
      title: "-지 못하다",
      meaning: "〜できない",
      explanation:
        "못하다 は能力や状況的にできないことを表す。마주하지 못한 마음 で『向き合えなかった気持ち』。",
      example: "말하지 못한 비밀",
      exampleJapanese: "言えなかった秘密",
    },
  ],
  7: [
    {
      title: "-아/어도",
      meaning: "〜しても",
      explanation:
        "감춰봐도 の -아/어도 は譲歩で、『隠してみても』と結果が変わらないことを見せる。",
      example: "울어도 괜찮아",
      exampleJapanese: "泣いても大丈夫",
    },
  ],
  8: [
    {
      title: "-듯",
      meaning: "〜のように、〜しそうに",
      explanation:
        "넘칠 듯 で『あふれそうに』。状態が今にも起こりそうな感じを出す。",
      example: "비 올 듯 흐려",
      exampleJapanese: "雨が降りそうに曇っている",
    },
    {
      title: "-잖아",
      meaning: "〜じゃない、〜でしょ",
      explanation:
        "相手も分かっていることを確かめるような語尾。차오르고 있잖아 で『こみ上げているでしょう』。",
      example: "알고 있잖아",
      exampleJapanese: "知ってるじゃない",
    },
  ],
  10: [
    {
      title: "-린 / -ㄴ",
      meaning: "〜した〜、〜している〜",
      explanation:
        "아른거린 は 아른거리다 の連体形。『揺れている青』のように後ろの名詞を説明する。",
      example: "흔들린 마음",
      exampleJapanese: "揺れた心",
    },
  ],
  11: [
    {
      title: "-ㄴ/은 후",
      meaning: "〜した後",
      explanation:
        "흘려낸 후 は『流し出した後』。感情を外へ出したあとに次の変化が来る流れ。",
      example: "울고 난 후",
      exampleJapanese: "泣いた後",
    },
  ],
  14: [
    {
      title: "-고",
      meaning: "〜して",
      explanation:
        "動作をつないで次へ進める基本形。눈을 감고 で『目を閉じて』。",
      example: "앉고 쉬어",
      exampleJapanese: "座って休んで",
    },
  ],
  15: [
    {
      title: "命令形",
      meaning: "〜して、〜しなよ",
      explanation:
        "깨워 は 깨우다 の命令形に近い形で、『目覚めさせて』と相手へやさしく促している。",
      example: "열어 봐",
      exampleJapanese: "開けてみて",
    },
  ],
  22: [
    {
      title: "-없이",
      meaning: "〜なく、〜なしで",
      explanation:
        "빠짐없이 で『漏れなく、ひとつ残らず』。抜けがないことを表す。",
      example: "하나도 빠짐없이",
      exampleJapanese: "一つも漏れなく",
    },
  ],
  23: [
    {
      title: "-ㄹ 필요 없다",
      meaning: "〜する必要はない",
      explanation:
        "외면할 필요 없어 は『目をそらす必要はない』。する必要のなさをやさしく言う形。",
      example: "숨길 필요 없어",
      exampleJapanese: "隠す必要はない",
    },
  ],
  25: [
    {
      title: "-을/를 따라서",
      meaning: "〜に沿って、〜をたどって",
      explanation:
        "무지갤 따라서 で『虹をたどって』。方向や道筋に沿って進む感覚を作る。",
      example: "빛을 따라서 가",
      exampleJapanese: "光をたどって行って",
    },
  ],
  31: [
    {
      title: "-씩",
      meaning: "〜ずつ",
      explanation:
        "하나둘씩 で『ひとつふたつずつ』。一気にではなく、少しずつ進める感じが出る。",
      example: "조금씩 나아가",
      exampleJapanese: "少しずつ進んでいく",
    },
  ],
  32: [
    {
      title: "-었던",
      meaning: "〜していた、〜だった",
      explanation:
        "잊었던 は『忘れていた』。過去にそういう状態だったことをふり返る連体形。",
      example: "좋아했던 노래",
      exampleJapanese: "好きだった歌",
    },
  ],
  33: [
    {
      title: "-고 있다",
      meaning: "〜している",
      explanation:
        "떠오르고 있다 は『浮かび上がってきている』。少しずつ進行する変化を見せる。",
      example: "밝아지고 있어",
      exampleJapanese: "明るくなってきている",
    },
  ],
  39: [
    {
      title: "가득",
      meaning: "いっぱいに、たっぷり",
      explanation:
        "두 눈을 가득 채운 blue で『両目をいっぱいに満たした青』。量感を強める副詞。",
      example: "가득 담아",
      exampleJapanese: "いっぱいに込めて",
    },
  ],
  40: [
    {
      title: "그대로",
      meaning: "そのまま、ありのまま",
      explanation:
        "있는 그대로 で『あるそのまま』。加工せず、隠さず、その姿のままを肯定する表現。",
      example: "지금 그대로 좋아",
      exampleJapanese: "今のままでいい",
    },
  ],
  50: [
    {
      title: "複合動詞: 마주 보다",
      meaning: "向き合って見る",
      explanation:
        "마주 보다 は『向き合って見る、見つめ合う』。最後に向き合えるようになった変化が大きい。",
      example: "서로를 마주 보다",
      exampleJapanese: "お互いを見つめ合う",
    },
  ],
};

export const nmixxCool: Song = {
  id: "nmixx-cool",
  title: "COOL (Your rainbow)",
  artist: "NMIXX",
  difficulty: "中級",
  tags: ["寄り添い", "感情", "回復", "虹", "光", "中級"],

  overview:
    "『悲しみや不安を平気なふりで隠さなくていい。涙も含めた感情全部が、最後には自分だけの色や虹になる』と優しく寄り添う曲。blue は悲しみや憂うつの色、colors はその奥にある多様な感情、spectrum は自分の中の色の幅、rainbow は感情を受け入れた先に見える希望としてつながっています。励ますというより、相手の涙や弱さをそのまま認めたうえで一緒に夜を越えるような温度の歌です。",

  lines: completeCoolLines.map((line, index) => {
    const lineNumber = index + 1;
    const extraGrammar =
      coolExtraGrammar[lineNumber]?.map((grammarPoint, grammarIndex) => ({
        id: `line-${lineNumber}-extra-g${grammarIndex + 1}`,
        ...grammarPoint,
      })) ?? [];
    const enrichedTokens = mergeExtraTokens(
      lineNumber,
      line.tokens.map((token) => ({
        ...token,
        meaningInThisLine:
          coolTokenMeanings[lineNumber]?.[token.surface] ?? token.meaningInThisLine,
      })),
      coolExtraTokens[lineNumber],
    );

    return {
      ...line,
      reading: coolReadingMap[lineNumber] ?? line.reading,
      roleInSong: coolRoleMap[lineNumber] ?? line.roleInSong,
      sectionBreakAfter: coolSectionBreaks.has(lineNumber),
      sentenceExplanation:
        coolExtraSentenceExplanations[lineNumber] ?? line.sentenceExplanation,
      nuance: coolExtraNuance[lineNumber] ?? line.nuance,
      grammarPoints: [...(line.grammarPoints ?? []), ...extraGrammar],
      tokens: enrichedTokens,
    };
  }),

  quizzes: [
    {
      id: "q1",
      type: "word-meaning",
      question: "외면하다 の意味は？",
      choices: ["目をそらす、背を向ける", "向き合う", "受け入れる", "慰める"],
      answer: "目をそらす、背を向ける",
      explanation: "외면할 필요 없어 で『目をそらす必要はない』。感情から逃げなくていいという文脈です。",
      songId: "nmixx-cool",
    },
    {
      id: "q2",
      type: "word-meaning",
      question: "아른거리다 の自然な意味は？",
      choices: ["ちらつく、ぼんやり揺れる", "強く光る", "消えていく", "積もっていく"],
      answer: "ちらつく、ぼんやり揺れる",
      explanation: "눈앞에 아른거린 blue で、悲しみの青が目の前で揺れて見える感じです。",
      songId: "nmixx-cool",
    },
    {
      id: "q3",
      type: "word-meaning",
      question: "spectrum がこの曲で表すものは？",
      choices: ["感情や色の幅", "夜の長さ", "雲の動き", "一つの涙"],
      answer: "感情や色の幅",
      explanation: "깨워 너의 spectrum は『あなたの中の色の幅、感情の幅を目覚めさせて』という意味です。",
      songId: "nmixx-cool",
    },
    {
      id: "q4",
      type: "word-base",
      question: "느껴지는 の原形は？",
      choices: ["느껴지다", "느끼다", "느껴보다", "느낀다"],
      answer: "느껴지다",
      explanation: "느껴지다 は『感じられる』。受け身のように自然に感じ取れるニュアンスです。",
      songId: "nmixx-cool",
    },
    {
      id: "q5",
      type: "word-base",
      question: "짙어진 の原形は？",
      choices: ["짙어지다", "짙다", "짙어하다", "짙히다"],
      answer: "짙어지다",
      explanation: "짙다（濃い）+ -어지다 で『濃くなる』。짙어진 は『濃くなった〜』です。",
      songId: "nmixx-cool",
    },
    {
      id: "q6",
      type: "grammar",
      question: "「-지 못하다」の意味は？",
      choices: ["〜できない", "〜したい", "〜してしまう", "〜しないで"],
      answer: "〜できない",
      explanation: "마주하지 못한 마음 で『向き合えなかった気持ち』。能力や状況的にできないことを表します。",
      songId: "nmixx-cool",
    },
    {
      id: "q7",
      type: "grammar",
      question: "「-ㄹ 필요 없다」の意味は？",
      choices: ["〜する必要はない", "〜しなければならない", "〜したほうがいい", "〜してみたい"],
      answer: "〜する必要はない",
      explanation: "외면할 필요 없어 で『目をそらす必要はない』。必要のなさをやわらかく言う形です。",
      songId: "nmixx-cool",
    },
    {
      id: "q8",
      type: "grammar",
      question: "「-듯」の意味として自然なのは？",
      choices: ["〜のように、〜しそうに", "〜したあとで", "〜するだけ", "〜しながら"],
      answer: "〜のように、〜しそうに",
      explanation: "넘칠 듯 は『あふれそうに』。今にもそうなりそうな様子を表します。",
      songId: "nmixx-cool",
    },
    {
      id: "q9",
      type: "fill-blank",
      question: "「깨워 너의 _____」の空欄に入るのは？",
      choices: ["spectrum", "rainbow", "episode", "sunlight"],
      answer: "spectrum",
      explanation: "『あなたの中にある色の幅を目覚めさせて』という中心表現です。",
      songId: "nmixx-cool",
    },
    {
      id: "q10",
      type: "fill-blank",
      question: "「있는 그대로 _____」の空欄に入るのは？",
      choices: ["True", "Blue", "Light", "Focus"],
      answer: "True",
      explanation: "泣いている自分もありのままの本当の姿だと認めるラインです。",
      songId: "nmixx-cool",
    },
    {
      id: "q11",
      type: "fill-blank",
      question: "「기다리는 _____ yeah」の空欄に入るのは？",
      choices: ["rainbow", "spectrum", "sunset", "episode"],
      answer: "rainbow",
      explanation: "長い夢の終わりに待っている希望としての虹です。",
      songId: "nmixx-cool",
    },
    {
      id: "q12",
      type: "which-song",
      question: "「느껴진 그대로 다 It's You」はどの曲？",
      text: "느껴진 그대로 다 It's You",
      choices: ["COOL (Your rainbow)", "O.O", "Blue Valentine", "Glass Bead"],
      answer: "COOL (Your rainbow)",
      explanation: "NMIXX『COOL (Your rainbow)』。感じたままの感情全部があなた自身だと肯定する核心ラインです。",
      songId: "nmixx-cool",
    },
  ],
};

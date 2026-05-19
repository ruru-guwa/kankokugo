import type { Song, Token, WordOriginType } from "../types/song";

type WordOriginInfo = {
  originType: WordOriginType;
  origin: string;
};

const HANJA_CHARACTER_GLOSSES: Record<string, string> = {
  安: "安らか",
  寧: "やすらか",
  感: "感じる",
  謝: "感謝する",
  情: "気持ち",
  觸: "触れる",
  敢: "あえて",
  警: "いましめる",
  告: "告げる",
  恐: "おそれる",
  怖: "こわい",
  過: "過ぎる",
  去: "去る",
  期: "時",
  待: "待つ",
  記: "記す",
  憶: "覚える",
  奇: "不思議",
  跡: "あと",
  未: "まだ",
  來: "来る",
  迷: "迷う",
  路: "道",
  美: "美しい",
  貌: "姿かたち",
  微: "かすかな",
  笑: "笑う",
  反: "くり返す",
  復: "戻る",
  方: "方向",
  只: "ただいま",
  今: "いま",
  目: "目",
  分: "分ける",
  明: "あきらか",
  傷: "きず",
  處: "ところ",
  世: "世",
  界: "境界",
  上: "上",
  所: "ところ",
  願: "願う",
  瞬: "まばたき",
  間: "あいだ",
  時: "時間",
  始: "始める",
  作: "作る",
  神: "精神",
  經: "経る",
  心: "心",
  臟: "臓",
  場: "場所",
  面: "面",
  長: "長い",
  點: "点",
  暫: "しばらく",
  絶: "絶つ",
  對: "向かい合う",
  精: "精",
  調: "整える",
  節: "調節する",
  準: "準じる",
  備: "備える",
  重: "重い",
  要: "かなめ",
  質: "問い質す",
  問: "問う",
  地: "地",
  下: "下",
  鐵: "鉄",
  次: "次",
  祝: "祝う",
  賀: "祝う",
  衝: "つく",
  擊: "打つ",
  歎: "なげく",
  聲: "声",
  太: "大きい",
  陽: "太陽",
  平: "平ら",
  穩: "穏やか",
  生: "生",
  變: "変わる",
  抱: "抱く",
  擁: "かかえる",
  操: "あやつる",
  表: "表す",
  現: "現れる",
  實: "現実",
  確: "たしか",
  痕: "あと",
  興: "興が起こる",
  味: "味わい",
  運: "めぐる",
  命: "いのち",
  危: "危うい",
  險: "けわしい",
  疑: "うたがう",
  理: "ことわり",
  解: "解く",
  說: "説明する",
  永: "永い",
  遠: "遠い",
  完: "完全",
  全: "すべて",
  每: "毎",
  江: "大きな川",
  氣: "気",
  代: "代わる",
  價: "価値",
  月: "月",
  火: "火",
  水: "水",
  木: "木",
  金: "金",
  土: "土",
  日: "日",
  疲: "疲れる",
  困: "困る",
  自: "自ら",
  身: "身",
  率: "率直",
  直: "まっすぐ",
  幅: "幅",
};

const HANJA_ROOTS: Record<string, string> = {
  안녕: "安寧",
  감사: "感謝",
  감정: "感情",
  감촉: "感觸",
  감히: "敢",
  기운: "氣運",
  경고: "警告",
  공포: "恐怖",
  과감: "果敢",
  과거: "過去",
  기대: "期待",
  기억: "記憶",
  기적: "奇跡",
  목격: "目擊",
  미래: "未來",
  미로: "迷路",
  미모: "美貌",
  미소: "微笑",
  반복: "反復",
  방금: "方今",
  분명: "分明",
  상처: "傷處",
  세계: "世界",
  세상: "世上",
  소원: "所願",
  순간: "瞬間",
  시간: "時間",
  시작: "始作",
  설명: "說明",
  솔직: "率直",
  조심: "操心",
  신경: "神經",
  심장: "心臟",
  영원: "永遠",
  완전: "完全",
  운명: "運命",
  위험: "危險",
  의심: "疑心",
  이상: "異常",
  이해: "理解",
  자신: "自身",
  자신감: "自信感",
  장면: "場面",
  장점: "長點",
  잠깐: "暫間",
  잠시: "暫時",
  절대: "絶對",
  정신: "精神",
  지금: "只今",
  조절: "調節",
  준비: "準備",
  중요: "重要",
  질문: "質問",
  지하철: "地下鐵",
  차원: "次元",
  축하: "祝賀",
  충격: "衝擊",
  탄성: "歎聲",
  태양: "太陽",
  평생: "平生",
  평온: "平穩",
  피곤: "疲困",
  포옹: "抱擁",
  표정: "表情",
  폭: "幅",
  필요: "必要",
  현실: "現實",
  확실: "確實",
  흔적: "痕跡",
  흥미: "興味",
  강: "江",
  대가: "代價",
  매일: "每日",
  변: "變",
};

const EXACT_ORIGIN_OVERRIDES: Record<string, WordOriginInfo> = {
  거: makeInfo(
    "grammar",
    "縮約形。것（もの・こと）が会話で短くなった形です。漢字語ではなく、文法的によく使われる依存名詞です。",
  ),
  건: makeInfo(
    "grammar",
    "縮約形。것은 が縮まった形で、『〜ということは』『そのことは』のように使います。",
  ),
  걸: makeInfo(
    "grammar",
    "縮約形。것을 が縮まった形です。歌詞ではくだけた話し方でよく出ます。",
  ),
  거야: makeInfo(
    "grammar",
    "縮約形。것이야 が縮まった形で、『〜なんだよ』『〜だよ』と説明するときの言い方です。",
  ),
  게: makeInfo(
    "grammar",
    "縮約形。ことを表す 것이 が縮まった形か、あるいは文法語尾として使われる形です。データ上では『縮まった形』として扱っています。",
  ),
  것: makeInfo(
    "grammar",
    "依存名詞。『もの』『こと』を表す文法的な名詞で、漢字語ではありません。",
  ),
  것은: makeInfo(
    "grammar",
    "것（もの・こと）に補助詞 が付いた形です。縮約すると 건 になります。",
  ),
  것을: makeInfo(
    "grammar",
    "것（もの・こと）に目的格助詞 が付いた形です。縮約すると 걸 になります。",
  ),
  난: makeInfo(
    "native",
    "縮約形。나는（私は）が縮まった形です。代名詞 나 は固有語で、漢字語ではありません。",
  ),
  날: makeInfo(
    "native",
    "縮約形。나를（私を）が縮まった形です。代名詞 나 は固有語です。",
  ),
  넌: makeInfo(
    "native",
    "縮約形。너는（あなたは）が縮まった形です。너 は固有語の代名詞です。",
  ),
  널: makeInfo(
    "native",
    "縮約形。너를（あなたを）が縮まった形です。너 は固有語の代名詞です。",
  ),
  우린: makeInfo(
    "native",
    "縮約形。우리는（私たちは）が縮まった形です。우리 は固有語です。",
  ),
  우릴: makeInfo(
    "native",
    "縮約形。우리를（私たちを）が縮まった形です。우리 は固有語です。",
  ),
  내겐: makeInfo(
    "native",
    "縮約形。나에게는（私には）が縮まった形です。代名詞 나 に格助詞が付いた形です。",
  ),
  네게: makeInfo(
    "native",
    "縮約形。너에게（あなたに）が縮まった形です。너 は固有語の代名詞です。",
  ),
  뭔가: makeInfo(
    "grammar",
    "縮約形。무언가（何か）が縮まった形です。『はっきり特定しない何か』を表します。",
  ),
  뭘: makeInfo(
    "grammar",
    "縮約形。무엇을（何を）が縮まった形です。会話ではとてもよく使われます。",
  ),
  그게: makeInfo(
    "grammar",
    "縮約形。그것이（それが）が縮まった形です。指示語＋依存名詞の組み合わせです。",
  ),
  그걸: makeInfo(
    "grammar",
    "縮約形。그것을（それを）が縮まった形です。指示語＋依存名詞の組み合わせです。",
  ),
  이건: makeInfo(
    "grammar",
    "縮約形。이것은（これは）が縮まった形です。指示語＋依存名詞の組み合わせです。",
  ),
  안녕하세요: makeInfo(
    "hanja",
    "漢字語。安寧하세요 にあたる挨拶表現です。安寧(안녕) に 하세요 が付いて、『安らかでいてください』から挨拶として使われます。",
  ),
  없인: makeInfo(
    "mixed",
    "縮約形。없이는（〜なしでは）が縮まった形です。없다（ない）に助詞が付いた会話形です。",
  ),
  말야: makeInfo(
    "grammar",
    "縮約形。말이야 が縮まった形です。話題を出したり、語気をやわらげたりするときに使います。",
  ),
  아냐: makeInfo(
    "native",
    "縮約形。아니야（違うよ）が縮まった形です。아니다 は固有語です。",
  ),
  첨: makeInfo(
    "native",
    "縮約形。처음（最初）がくだけて発音された形です。漢字語ではなく、会話でよく起こる省略です。",
  ),
  그리곤: makeInfo(
    "grammar",
    "縮約形。그리고는（そして、そのあとで）が縮まった形です。接続表現が会話調になっています。",
  ),
  온몸: makeInfo(
    "mixed",
    "混合語。온（全部）+ 몸（体）で『全身』という作りです。どちらも漢字語ではありません。",
  ),
  온종일: makeInfo(
    "mixed",
    "混合語。온（全部）+ 終日(종일) で『一日中』という形です。",
  ),
  한번: makeInfo(
    "mixed",
    "混合語。한（ひとつ）+ 番(번) で『一回、一度』という作りです。",
  ),
  "두 번": makeInfo(
    "mixed",
    "混合語。두（ふたつ）+ 番(번) で『二回』という作りです。",
  ),
  "세 번": makeInfo(
    "mixed",
    "混合語。세（みっつ）+ 番(번) で『三回』という作りです。",
  ),
  "두 번 세 번": makeInfo(
    "mixed",
    "混合表現。두 / 세 は固有数詞、번 は 漢字語の 番 です。『二度三度』と回数を重ねています。",
  ),
  한순간: makeInfo(
    "mixed",
    "混合語。한（ひとつ）+ 瞬間(순간) で『一瞬』という作りです。",
  ),
  "매일 매일": makeInfo(
    "hanja",
    "漢字語。每日(매일) を重ねて『毎日毎日』と強調した表現です。",
  ),
  "미소 짓다": makeInfo(
    "mixed",
    "混合表現。微笑(미소) + 짓다（作る・浮かべる）で『微笑む』という作りです。",
  ),
  "미소 짓는": makeInfo(
    "mixed",
    "混合表現。微笑(미소) + 짓다（作る・浮かべる）の連体形で、『微笑む〜』という形です。",
  ),
  "지하철 속": makeInfo(
    "mixed",
    "混合表現。地下鐵(지하철) + 속（中）で『地下鉄の中』という作りです。",
  ),
  "설명할 수 없다": makeInfo(
    "mixed",
    "混合表現。說明(설명) + 하다 + ㄹ 수 없다 で『説明できない』という作りです。",
  ),
  "신경 쓰이다": makeInfo(
    "mixed",
    "混合表現。神經(신경) + 쓰이다 で、直訳は『神経が使われる』。そこから『気になる』の意味になります。",
  ),
  "신경 쓰여": makeInfo(
    "mixed",
    "混合表現。神經(신경) + 쓰이다 の活用形で、『気になって』という意味です。",
  ),
  "이해가 가다": makeInfo(
    "mixed",
    "混合表現。理解(이해) + 가다 で、直訳は『理解が行く』。そこから『理解できる、納得できる』になります。",
  ),
  "이해가 안 가다": makeInfo(
    "mixed",
    "混合表現。理解(이해) + 안 가다 で『理解がいかない』、つまり『理解できない』という言い方です。",
  ),
  이해해주다: makeInfo(
    "mixed",
    "混合表現。理解(이해) + 해주다 で『理解してくれる / 理解してあげる』という作りです。漢字語の名詞に補助動詞が重なっています。",
  ),
  "현실같은": makeInfo(
    "mixed",
    "混合表現。現實(현실) + 같은 で『現実のような』という作りです。",
  ),
  정신없다: makeInfo(
    "mixed",
    "混合表現。精神(정신) + 없다 で、直訳は『精神がない』。そこから『我を忘れるほど忙しい・夢中だ』の意味になります。",
  ),
  정신없이: makeInfo(
    "mixed",
    "混合表現。精神(정신) + 없이 で『精神なく』、つまり『夢中で、我を忘れて』という意味になります。",
  ),
  원하다: makeInfo(
    "hanja",
    "漢字語。願하다（원하다） 由来です。字義は 願=願う。後ろの 하다 が付いて、名詞を『〜する / 〜だ』の語にしています。",
  ),
  원하면: makeInfo(
    "hanja",
    "漢字語。願하면（원하면） 由来です。字義は 願=願う。願하다 の活用形で『望めば』の意味です。",
  ),
  원하니: makeInfo(
    "hanja",
    "漢字語。願하니（원하니） 由来です。字義は 願=願う。願하다 の疑問形で『望むの？』の意味です。",
  ),
  원한: makeInfo(
    "hanja",
    "漢字語。願한（원한） 由来です。字義は 願=願う。願하다 の連体形で『望んだ〜』の意味です。",
  ),
  ㅇㅇ: makeInfo(
    "native",
    "ネット・会話表現。『うんうん』『OK』のように軽く同意するときの韓国語ネット表現です。",
  ),
  "빰 빰 빰": makeInfo(
    "native",
    "擬音語・掛け声です。漢字語ではなく、リズムや勢いを出すための音の表現です。",
  ),
  뽀뽀: makeInfo(
    "native",
    "幼児語・擬音語っぽい語感から来た言い方です。漢字語ではなく、『軽いキス』をかわいく言います。",
  ),
  빵: makeInfo(
    "foreign",
    "外来語。一般にはポルトガル語 pão 系の借用語として説明されることが多い語です。",
  ),
  그래프: makeInfo(
    "foreign",
    "外来語。英語 graph 由来です。",
  ),
  커플링: makeInfo(
    "foreign",
    "外来語。英語 couple + ring 由来のコングリッシュ表現です。",
  ),
  멘탈: makeInfo(
    "foreign",
    "外来語。英語 mental 由来です。",
  ),
  카페인: makeInfo(
    "foreign",
    "外来語。英語 caffeine 系の借用語です。",
  ),
  퀸: makeInfo(
    "foreign",
    "外来語。英語 queen 由来です。",
  ),
  퀸카: makeInfo(
    "foreign",
    "外来語・俗語。英語 queen をもとに韓国語で『一番イケてる女の子』の意味に広がった言い方です。",
  ),
  퀸카카카: makeInfo(
    "foreign",
    "外来語ベースの言葉遊び。퀸카 にリズムを足して勢いを出した形です。",
  ),
  킹카: makeInfo(
    "foreign",
    "外来語・俗語。英語 king をもとに『一番イケてる男の子』の意味で使う言い方です。",
  ),
  카: makeInfo(
    "foreign",
    "外来語・俗語。card 由来とされる軽い言い方で、文脈によっては『イケてる子』系の俗語にもつながります。",
  ),
  키스하다: makeInfo(
    "mixed",
    "混合語。英語 kiss + 하다 で『キスする』という作りです。",
  ),
  "아이스 아메리카노": makeInfo(
    "foreign",
    "外来表現。英語 ice Americano を韓国語発音に寄せた飲み物名です。",
  ),
};

const DERIVED_HANJA_SUFFIX_RULES = [
  {
    suffix: "하다",
    displaySuffix: "하다",
    note: "後ろの 하다 が付いて、名詞を『〜する / 〜だ』の語にしています。",
  },
  {
    suffix: "하고",
    displaySuffix: "하고",
    note: "하다 系の連結形で、『〜して』の流れにつながる形です。",
  },
  {
    suffix: "하니",
    displaySuffix: "하니",
    note: "하다 系の疑問・説明寄りの活用形です。",
  },
  {
    suffix: "하지",
    displaySuffix: "하지",
    note: "하다 系の確認・疑問寄りの活用形です。",
  },
  {
    suffix: "하면",
    displaySuffix: "하면",
    note: "하다 系の条件形で、『〜すれば』の意味になります。",
  },
  {
    suffix: "하는",
    displaySuffix: "하는",
    note: "하다 系の連体形で、『〜する』が後ろの名詞を修飾する形です。",
  },
  {
    suffix: "하네",
    displaySuffix: "하네",
    note: "하다 系の気づき・感嘆寄りの活用形です。",
  },
  {
    suffix: "해",
    displaySuffix: "해",
    note: "하다 系の活用形です。",
  },
  {
    suffix: "한",
    displaySuffix: "한",
    note: "하다 系の連体形で、『〜な』にあたる形です。",
  },
  {
    suffix: "하게",
    displaySuffix: "하게",
    note: "하다 系から作った副詞形です。",
  },
  {
    suffix: "히",
    displaySuffix: "히",
    note: "副詞を作る接尾の -히 が付いた形です。",
  },
  {
    suffix: "이다",
    displaySuffix: "이다",
    note: "名詞に だ を付けた述語形です。",
  },
  {
    suffix: "이야",
    displaySuffix: "이야",
    note: "名詞述語のくだけた形です。",
  },
  {
    suffix: "했던",
    displaySuffix: "했던",
    note: "하다 系の過去連体形です。",
  },
  {
    suffix: "되다",
    displaySuffix: "되다",
    note: "漢字語の名詞に 되다 が付いて、『〜される / 〜になる』の語になっています。",
  },
  {
    suffix: "된",
    displaySuffix: "된",
    note: "되다 系の連体形です。",
  },
  {
    suffix: "되고",
    displaySuffix: "되고",
    note: "되다 系の連結形です。",
  },
  {
    suffix: "되는",
    displaySuffix: "되는",
    note: "되다 系の連体形です。",
  },
  {
    suffix: "되니",
    displaySuffix: "되니",
    note: "되다 系の疑問・説明寄りの活用形です。",
  },
  {
    suffix: "되면",
    displaySuffix: "되면",
    note: "되다 系の条件形です。",
  },
  {
    suffix: "로울",
    displaySuffix: "로울",
    note: "名詞に 롭다 系が付いた形で、『〜に富んだ』『〜らしい』の意味になります。",
  },
  {
    suffix: "로운",
    displaySuffix: "로운",
    note: "名詞に 롭다 系が付いた連体形です。",
  },
  {
    suffix: "롭다",
    displaySuffix: "롭다",
    note: "名詞に 롭다 が付いて、『〜に富んだ』『〜らしい』という形になっています。",
  },
  {
    suffix: "롭게",
    displaySuffix: "롭게",
    note: "롭다 系から作った副詞形です。",
  },
  {
    suffix: "롭고",
    displaySuffix: "롭고",
    note: "롭다 系の連結形です。",
  },
  {
    suffix: "로워",
    displaySuffix: "로워",
    note: "롭다 系の活用形です。",
  },
];

function makeInfo(originType: WordOriginType, origin: string): WordOriginInfo {
  return { originType, origin };
}

function normalizeOriginKey(value: string): string {
  return value
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[?!.,]+$/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function getLookupCandidates(token: Pick<Token, "base" | "surface">): string[] {
  return Array.from(
    new Set(
      [token.base, token.surface]
        .filter((value): value is string => Boolean(value))
        .map(normalizeOriginKey),
    ),
  );
}

function getExactOriginOverride(token: Pick<Token, "base" | "surface">): WordOriginInfo | null {
  for (const key of getLookupCandidates(token)) {
    const override = EXACT_ORIGIN_OVERRIDES[key];
    if (override) {
      return override;
    }
  }

  return null;
}

function getWeekdayOrigin(token: Token): WordOriginInfo | null {
  const weekdayHanja: Record<string, string> = {
    월: "月",
    화: "火",
    수: "水",
    목: "木",
    금: "金",
    토: "土",
    일: "日",
  };

  if (!/曜日/.test(token.meaning) && !/曜日/.test(token.shortMeaning)) {
    return null;
  }

  const hanja = weekdayHanja[normalizeOriginKey(token.base)];
  if (!hanja) {
    return null;
  }

  return makeInfo(
    "hanja",
    `漢字語。${hanja} から来た曜日名の一部です。${describeHanjaWithGlosses(hanja)}`,
  );
}

function getGrammarOrigin(token: Token): WordOriginInfo | null {
  if (token.base.startsWith("-") || token.surface.startsWith("-")) {
    return makeInfo(
      "grammar",
      "文法要素です。助詞・語尾・接辞として使われる形で、漢字語というより『使い方』が大事なタイプです。",
    );
  }

  return null;
}

function getForeignOrigin(token: Token): WordOriginInfo | null {
  const exact = getExactOriginOverride(token);
  if (exact && exact.originType === "foreign") {
    return exact;
  }

  if (token.language === "en") {
    return makeInfo(
      "foreign",
      "英語表現です。韓国語に訳して使うのでなく、原語のまま歌詞に入っているタイプです。",
    );
  }

  if (token.language === "es") {
    return makeInfo(
      "foreign",
      "スペイン語表現です。韓国語の固有語や漢字語ではなく、原語のまま使われています。",
    );
  }

  return null;
}

function findHanjaRoot(text: string): {
  rootHangul: string;
  display: string;
  hanja: string;
  hanjaDisplay: string;
  note?: string;
} | null {
  const normalized = normalizeOriginKey(text);
  const exactHanja = HANJA_ROOTS[normalized];
  if (exactHanja) {
    return {
      rootHangul: normalized,
      display: normalized,
      hanja: exactHanja,
      hanjaDisplay: exactHanja,
    };
  }

  for (const rule of DERIVED_HANJA_SUFFIX_RULES) {
    if (!normalized.endsWith(rule.suffix) || normalized.length <= rule.suffix.length) {
      continue;
    }

    const root = normalized.slice(0, -rule.suffix.length);
    const hanja = HANJA_ROOTS[root];
    if (!hanja) {
      continue;
    }

    return {
      rootHangul: root,
      display: `${root}${rule.displaySuffix}`,
      hanja,
      hanjaDisplay: `${hanja}${rule.displaySuffix}`,
      note: rule.note,
    };
  }

  return null;
}

function describeHanjaWithGlosses(hanja: string): string {
  const parts = Array.from(hanja)
    .filter((char) => HANJA_CHARACTER_GLOSSES[char])
    .map((char) => `${char}=${HANJA_CHARACTER_GLOSSES[char]}`);

  return parts.length > 0 ? `字義は ${parts.join("、")}。` : "";
}

function getHanjaOrigin(token: Token): WordOriginInfo | null {
  const weekdayOrigin = getWeekdayOrigin(token);
  if (weekdayOrigin) {
    return weekdayOrigin;
  }

  for (const candidate of [token.base, token.surface]) {
    const root = findHanjaRoot(candidate);
    if (!root) {
      continue;
    }

    const gloss = describeHanjaWithGlosses(root.hanja);
    const note = root.note ? ` ${root.note}` : "";
    return makeInfo(
      "hanja",
      `漢字語。${root.hanjaDisplay}（${root.display}） 由来です。${gloss}${note}`.trim(),
    );
  }

  return null;
}

function getFallbackNativeOrigin(token: Token): WordOriginInfo {
  if (/\s/.test(token.base)) {
    return makeInfo(
      "mixed",
      "複合表現です。固有語どうし、または固有語と文法要素が組み合わさってできた言い方です。",
    );
  }

  return makeInfo(
    "native",
    "固有語または韓国語の会話表現です。漢字語ではなく、韓国語にもともとある言い方として覚えるタイプです。",
  );
}

function resolveTokenOrigin(token: Token): WordOriginInfo {
  if (token.origin && token.originType) {
    return { origin: token.origin, originType: token.originType };
  }

  const exactOrigin = getExactOriginOverride(token);
  if (exactOrigin) {
    return exactOrigin;
  }

  const grammarOrigin = getGrammarOrigin(token);
  if (grammarOrigin) {
    return grammarOrigin;
  }

  const foreignOrigin = getForeignOrigin(token);
  if (foreignOrigin) {
    return foreignOrigin;
  }

  const hanjaOrigin = getHanjaOrigin(token);
  if (hanjaOrigin) {
    return hanjaOrigin;
  }

  return getFallbackNativeOrigin(token);
}

export function withResolvedWordOrigins(song: Song): Song {
  return {
    ...song,
    lines: song.lines.map((line) => ({
      ...line,
      tokens: line.tokens.map((token) => {
        const origin = resolveTokenOrigin(token);
        return {
          ...token,
          originType: token.originType ?? origin.originType,
          origin: token.origin ?? origin.origin,
        };
      }),
    })),
  };
}

export const WORD_ORIGIN_TYPES: WordOriginType[] = [
  "hanja",
  "native",
  "foreign",
  "grammar",
  "mixed",
];

export function getWordOriginLabel(type: WordOriginType): string {
  switch (type) {
    case "hanja":
      return "漢字語";
    case "native":
      return "固有語";
    case "foreign":
      return "外来語";
    case "grammar":
      return "文法";
    case "mixed":
      return "混合語";
  }
}

export function getWordOriginBadgeClass(type: WordOriginType): string {
  switch (type) {
    case "hanja":
      return "border-amber-200 bg-amber-50 text-amber-700";
    case "native":
      return "border-emerald-200 bg-emerald-50 text-emerald-700";
    case "foreign":
      return "border-sky-200 bg-sky-50 text-sky-700";
    case "grammar":
      return "border-slate-200 bg-slate-50 text-slate-700";
    case "mixed":
      return "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-700";
  }
}

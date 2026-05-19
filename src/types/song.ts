export type Language = "ko" | "en" | "es";

export type Difficulty = "初級" | "中級" | "上級";
export type WordLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type WordOriginType =
  | "hanja"
  | "native"
  | "foreign"
  | "grammar"
  | "mixed";

export type QuizType =
  | "word-meaning"
  | "word-base"
  | "grammar"
  | "fill-blank"
  | "which-song";

export type Token = {
  id: string;

  /** 歌詞に出てくる実際の形 */
  surface: string;

  /** 原形・基本形 */
  base: string;

  /** 韓国語・英語・スペイン語などの言語 */
  language: Language;

  /** ホバー時に表示する短い意味 */
  shortMeaning: string;

  /** 詳細欄に表示する意味 */
  meaning: string;

  /** 品詞 */
  pos?: string;

  /** 旧3段階の難易度。既存データ互換用 */
  level?: Difficulty;

  /** 単語レベル（1-10）。1が最もやさしく、日常で最もよく使う */
  wordLevel?: WordLevel;

  /** 語源の大まかな種類（漢字語・固有語など） */
  originType?: WordOriginType;

  /** 成り立ち・語源の説明 */
  origin?: string;

  /** 分解（例：식다 + -어 버리다 + -ㄴ） */
  breakdown?: string;

  /** 詳しい解説 */
  explanation?: string;

  /** この歌詞内での意味 */
  meaningInThisLine?: string;

  /** 関連語 */
  relatedWords?: string[];

  /** 例文 */
  example?: string;

  /** 例文訳 */
  exampleJapanese?: string;

  /** 表示時に後ろへスペースを入れるか */
  trailingSpace?: boolean;

  /** 表示時に後ろへ句読点などを入れる場合 */
  trailingText?: string;
};

export type GrammarPoint = {
  id: string;
  title: string;
  meaning: string;
  explanation: string;
  example?: string;
  exampleJapanese?: string;
};

export type LyricLine = {
  id: string;

  /** 歌詞原文 */
  korean: string;

  /** 左側の歌詞表示で段落を空ける */
  sectionBreakAfter?: boolean;

  /** 読み方（カタカナ）。ON/OFF切り替え可能 */
  reading?: string;

  /** 自然な日本語訳 */
  japanese: string;

  /** 直訳 */
  literalJapanese?: string;

  /** 一文の意味解説 */
  sentenceExplanation: string;

  /** ニュアンス */
  nuance?: string;

  /** 歌詞全体の中での役割 */
  roleInSong?: string;

  /** この行に出る文法 */
  grammarPoints?: GrammarPoint[];

  /** この行を構成する単語・表現 */
  tokens: Token[];
};

export type Quiz = {
  id: string;
  type: QuizType;
  question: string;
  text?: string;
  choices: string[];
  answer: string;
  explanation: string;
  songId?: string;
};

export type Song = {
  id: string;
  title: string;
  artist: string;
  difficulty?: Difficulty;
  tags: string[];

  links?: {
    youtube?: string;
    spotify?: string;
  };

  /** 曲全体の概要 */
  overview: string;

  /** 歌詞行データ */
  lines: LyricLine[];

  /** 曲別クイズ */
  quizzes: Quiz[];
};

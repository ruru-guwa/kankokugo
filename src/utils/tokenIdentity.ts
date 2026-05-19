import type { Token } from "../types/song";

type TokenIdentityLike = Pick<Token, "language" | "surface" | "base">;

export function stripDecorativeTokenPunctuation(value: string): string {
  return value
    .replace(/^[“"'`([{<「『（【]+/g, "")
    .replace(/[?!,.;:…、。！？"”’'`)\]}>」』）】]+$/g, "")
    .trim();
}

function normalizeTokenText(value: string): string {
  const normalized = stripDecorativeTokenPunctuation(value)
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, " ")
    .trim();

  return /[A-Za-z]/.test(normalized) ? normalized.toLowerCase() : normalized;
}

function slugifyTokenText(value: string): string {
  const normalized = normalizeTokenText(value)
    .replace(/[^a-z0-9가-힣]+/gi, "-")
    .replace(/^-+|-+$/g, "");

  return normalized || "token";
}

export function getTokenIdentityKey(token: TokenIdentityLike): string {
  return [
    token.language,
    normalizeTokenText(token.surface),
    normalizeTokenText(token.base || token.surface),
  ].join("::");
}

export function getTokenIdentityId(token: TokenIdentityLike): string {
  return `word-${token.language}-${slugifyTokenText(token.surface)}-${slugifyTokenText(
    token.base || token.surface,
  )}`;
}

export function dedupeTokens<T extends TokenIdentityLike>(tokens: T[]): T[] {
  const seen = new Set<string>();

  return tokens.filter((token) => {
    const key = getTokenIdentityKey(token);
    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

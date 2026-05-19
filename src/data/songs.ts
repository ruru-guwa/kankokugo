import { aprilAprilStory } from "./songs/april-april-story";
import { apinkMrChu } from "./songs/apink-mr-chu";
import { gfriendGlassBead } from "./songs/gfriend-glass-bead";
import { gfriendMeGustasTu } from "./songs/gfriend-me-gustas-tu";
import { gfriendMoonNight } from "./songs/gfriend-moon-night";
import { gfriendRough } from "./songs/gfriend-rough";
import { gahoStart } from "./songs/gaho-start";
import { eclipseSonagi } from "./songs/eclipse-sonagi";
import { melomanceLoveMaybe } from "./songs/melomance-love-maybe";
import { lynMyDestiny } from "./songs/lyn-my-destiny";
import { fiftyFiftyCupid } from "./songs/fifty-fifty-cupid";
import { idleAllergy } from "./songs/idle-allergy";
import { idleFate } from "./songs/idle-fate";
import { idleQueencard } from "./songs/idle-queencard";
import { kiiikiiiIDoMe } from "./songs/kiiikiii-i-do-me";
import { blueValentine } from "./songs/nmixx-blue-valentine";
import { nmixxCool } from "./songs/nmixx-cool";
import { nmixxHeavySerenade } from "./songs/nmixx-heavy-serenade";
import { nmixxOO } from "./songs/nmixx-oo";
import { redVelvetFeelMyRhythm } from "./songs/red-velvet-feel-my-rhythm";
import { redVelvetFuture } from "./songs/red-velvet-future";
import { redVelvetPsycho } from "./songs/red-velvet-psycho";
import { iveAfterLike } from "./songs/ive-after-like";
import { iveBangBang } from "./songs/ive-bang-bang";
import { iveBlackhole } from "./songs/ive-blackhole";
import { iveFireworks } from "./songs/ive-fireworks";
import { iveIAm } from "./songs/ive-i-am";
import { iveRebelHeart } from "./songs/ive-rebel-heart";
import { iveTko } from "./songs/ive-tko";
import { withGeneratedReadings } from "../utils/songReadings";
import { withResolvedWordOrigins } from "../utils/wordOrigins";
import { withResolvedWordLevels } from "../utils/wordLevels";

const rawSongs = [
  redVelvetPsycho,
  redVelvetFeelMyRhythm,
  redVelvetFuture,
  kiiikiiiIDoMe,
  blueValentine,
  nmixxHeavySerenade,
  fiftyFiftyCupid,
  gahoStart,
  eclipseSonagi,
  melomanceLoveMaybe,
  lynMyDestiny,
  nmixxCool,
  nmixxOO,
  iveBangBang,
  iveAfterLike,
  iveBlackhole,
  iveFireworks,
  iveRebelHeart,
  iveTko,
  iveIAm,
  idleAllergy,
  idleFate,
  idleQueencard,
  apinkMrChu,
  aprilAprilStory,
  gfriendRough,
  gfriendMeGustasTu,
  gfriendMoonNight,
  gfriendGlassBead,
];

export const songs = rawSongs.map((song) =>
  withResolvedWordOrigins(
    withResolvedWordLevels(withGeneratedReadings(song)),
  ),
);

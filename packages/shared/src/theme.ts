export const COLORS = {
  DARK: "#1E293B",
  GRAY: "#94A3B8",
  WHITE: "#F8FAFC",
  ORCHID: {
    MAIN: "#C084FC",
    DARK: "#9D89C8",
  },
  ROSE: {
    MAIN: "#EB6173",
    DARK: "#E0B0B0",
  },
  ACQUAMARINA: {
    MAIN: "#00C9A7",
    DARK: "#00A27C",
  },
  SKY: {
    MAIN: "#00C9FF",
    DARK: "#00A2E8",
  },
  BUTTER: {
    MAIN: "#FFCA00",
    DARK: "#E0B000",
  },
  LIME_PUNCH: {
    MAIN: "#A7FF00",
    DARK: "#7CDE00",
  },
  CLASSIC_BLUE: {
    MAIN: "#00B0FF",
    DARK: "#0080E8",
  },
  CORAL: {
    MAIN: "#FF7F00",
    DARK: "#E06600",
  },
} as const;

export const THEMES = {
  ORCHID: {
    BACKGROUND: COLORS.DARK,
    TEXT: COLORS.ORCHID.DARK,
    SECONDARY_TEXT: COLORS.WHITE,
    TERTIARY_TEXT: COLORS.GRAY,
    IMAGE_BG: COLORS.ORCHID.MAIN,
    BLOB_BG: COLORS.ORCHID.MAIN,
  },
  ROSE: {
    BACKGROUND: COLORS.DARK,
    TEXT: COLORS.ROSE.DARK,
    SECONDARY_TEXT: COLORS.WHITE,
    TERTIARY_TEXT: COLORS.GRAY,
    IMAGE_BG: COLORS.ROSE.MAIN,
    BLOB_BG: COLORS.ROSE.MAIN,
  },
  ACQUAMARINA: {
    BACKGROUND: COLORS.DARK,
    TEXT: COLORS.ACQUAMARINA.DARK,
    SECONDARY_TEXT: COLORS.WHITE,
    TERTIARY_TEXT: COLORS.GRAY,
    IMAGE_BG: COLORS.ACQUAMARINA.MAIN,
    BLOB_BG: COLORS.ACQUAMARINA.MAIN,
  },
  SKY: {
    BACKGROUND: COLORS.DARK,
    TEXT: COLORS.SKY.DARK,
    SECONDARY_TEXT: COLORS.WHITE,
    TERTIARY_TEXT: COLORS.GRAY,
    IMAGE_BG: COLORS.SKY.MAIN,
    BLOB_BG: COLORS.SKY.MAIN,
  },
  BUTTER: {
    BACKGROUND: COLORS.DARK,
    TEXT: COLORS.BUTTER.DARK,
    SECONDARY_TEXT: COLORS.WHITE,
    TERTIARY_TEXT: COLORS.GRAY,
    IMAGE_BG: COLORS.BUTTER.MAIN,
    BLOB_BG: COLORS.BUTTER.MAIN,
  },
  CLASSIC_BLUE: {
    BACKGROUND: COLORS.DARK,
    TEXT: COLORS.WHITE,
    SECONDARY_TEXT: COLORS.CLASSIC_BLUE.DARK,
    TERTIARY_TEXT: COLORS.GRAY,
    IMAGE_BG: COLORS.CLASSIC_BLUE.MAIN,
    BLOB_BG: COLORS.CLASSIC_BLUE.MAIN,
  },
  LIME_PUNCH: {
    BACKGROUND: COLORS.DARK,
    TEXT: COLORS.WHITE,
    SECONDARY_TEXT: COLORS.LIME_PUNCH.DARK,
    TERTIARY_TEXT: COLORS.GRAY,
    IMAGE_BG: COLORS.LIME_PUNCH.MAIN,
    BLOB_BG: COLORS.LIME_PUNCH.MAIN,
  },
  CORAL: {
    BACKGROUND: COLORS.DARK,
    TEXT: COLORS.WHITE,
    SECONDARY_TEXT: COLORS.CORAL.DARK,
    TERTIARY_TEXT: COLORS.GRAY,
    IMAGE_BG: COLORS.CORAL.MAIN,
    BLOB_BG: COLORS.CORAL.MAIN,
  },
  // CLEAR EXPERIMENT
  // ROSEWH:{
  //     BACKGROUND: COLORS.WHITE,
  //     TEXT: COLORS.ROSE.DARK,
  //     SECONDARY_TEXT: COLORS.DARK,
  //     TERTIARY_TEXT: COLORS.ROSE.MAIN,
  //     IMAGE_BG: COLORS.ROSE.MAIN,
  //     BLOB_BG: COLORS.ROSE.MAIN,
  // }
} as const;

export const VARIANTS = {
  TL: {},
  TR: {},
  BL: {},
  BR: {},
} as const;

export type Theme = keyof typeof THEMES;
export type Variant = keyof typeof VARIANTS;

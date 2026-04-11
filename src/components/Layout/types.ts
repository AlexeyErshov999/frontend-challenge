export const TABS = {
  GALLERY: "Все котики",
  FAVORITES: "Любимые котики",
} as const;

export type TActiveTab = typeof TABS[keyof typeof TABS];
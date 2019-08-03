export const themes = [
  {
    name: "default",
    class: "discours-theme-default",
    color: "#fff",
    default: true,
  },
  {
    name: "dark",
    class: "discours-theme-dark",
    color: "#000",
    default: false,
  },
] as const;

const defaultTheme = themes.find((t) => t.default) as typeof themes[0];

export const defaultThemeName: ThemeName = defaultTheme.name;

export type ThemeName = (typeof themes)[number]["name"];

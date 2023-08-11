import { createContext } from "react";

export const THEMES = ["light", "dark"];

export const ThemeContext = createContext({
  value: THEMES[0],
  handleChange: () => {},
});

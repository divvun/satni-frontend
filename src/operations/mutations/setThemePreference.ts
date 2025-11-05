import { themePreferenceVar } from "../../apolloCache";

const setThemePreference = (preference: "light" | "dark" | "system"): void => {
  themePreferenceVar(preference);
  localStorage.setItem("themePreference", preference);
};

export default setThemePreference;

import { darkModeVar } from "../../apolloCache";

const setDarkMode = (enabled: boolean): void => {
  darkModeVar(enabled);
  localStorage.setItem("darkMode", enabled.toString());
};

export default setDarkMode;

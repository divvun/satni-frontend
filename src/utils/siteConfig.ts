/**
 * Get the default interface language based on the hostname
 * @returns Language code (se, sma, smj)
 */
export const getDefaultInterfaceLanguage = (): string => {
  // If running in a browser environment
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;

    if (hostname.includes("baakoe")) {
      return "sma"; // South Sami for baakoe.org
    }
    if (hostname.includes("bahko") || hostname.includes("báhko")) {
      return "smj"; // Lule Sami for báhko.org/bahko.org
    }
  }

  // Default to North Sami for sátni.org/satni.org and any other case
  return "se";
};

/**
 * Get site name based on hostname
 * @returns Site name (sátni.org, baakoe.org, or báhko.org)
 */
export const getSiteName = (): string => {
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    if (hostname.includes("baakoe")) {
      return "baakoe.org";
    }
    if (hostname.includes("bahko") || hostname.includes("báhko")) {
      return "báhko.org";
    }
  }
  // Default to sátni.org for satni.org and sátni.org
  return "sátni.org";
};

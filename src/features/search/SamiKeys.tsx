import React from "react";
import Button from "@mui/material/Button";

interface SamiKeysProps {
  keyHandler: (char: string) => void;
}

const SamiKeys: React.FC<SamiKeysProps> = ({ keyHandler }) => {
  const chars = [
    "á",
    "â",
    "å",
    "æ",
    "ä",
    "č",
    "đ",
    "ǧ",
    "ǥ",
    "ï",
    "ǩ",
    "ŋ",
    "õ",
    "ø",
    "ö",
    "š",
    "ŧ",
    "ž",
    "ʒ",
    "ǯ",
    "ʹ",
    "ʼ",
  ];

  return (
    <>
      {chars.map((char) => (
        <Button
          key={char}
          onClick={() => keyHandler(char)}
          variant="outlined"
          sx={{ textTransform: "none" }}
        >
          {char}
        </Button>
      ))}
    </>
  );
};

export default SamiKeys;

import { useLingui } from "@lingui/react";
import { useQuery } from "@apollo/client/react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import { languageCodes } from "../../translateble_variables";
import {
  GET_LANGS_DICTS,
  type GetLangsAndDictsQuery,
} from "../../operations/queries/getLangsDicts";
import setSrcLangs from "../../operations/mutations/setSrcLangs";
import setTargetLangs from "../../operations/mutations/setTargetLangs";

interface PairHeaderProps {
  language: string;
}

const PairHeader: React.FC<PairHeaderProps> = ({ language }) => {
  const { _ } = useLingui();
  const { data } = useQuery<GetLangsAndDictsQuery>(GET_LANGS_DICTS);
  const targetLangs = data?.targetLangs || [];

  const isChecked = targetLangs.includes(language);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    const newLangs = targetLangs.includes(language)
      ? targetLangs.filter((value: string) => value !== language)
      : [...targetLangs, language];
    setSrcLangs(newLangs);
    setTargetLangs(newLangs);
  };

  return (
    <FormControlLabel
      sx={{ mr: 1 }}
      label={
        <Typography variant="subtitle2">
          {languageCodes[language as keyof typeof languageCodes]
            ? _(languageCodes[language as keyof typeof languageCodes])
            : language}
        </Typography>
      }
      control={
        <Tooltip
          title={isChecked ? "Hide this language" : "Show this language"}
        >
          <Checkbox
            checked={isChecked}
            color="default"
            name={language}
            onChange={handleChange}
          />
        </Tooltip>
      }
    />
  );
};

export default PairHeader;

import { Trans } from "@lingui/react/macro";
import { useLingui } from "@lingui/react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import { wantedDictsVar } from "../../apolloCache";
import { dictionaryNames } from "../../translateble_variables";

interface SourceProps {
  source: string;
  lemma: string;
}

const Source: React.FC<SourceProps> = ({ source, lemma }) => {
  const { _ } = useLingui();
  const wantedDicts = wantedDictsVar();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    wantedDictsVar(wantedDicts.filter((value) => value !== event.target.name));
  };

  return (
    <FormControlLabel
      label={
        <Typography variant="body2">
          <Trans>Source:</Trans>{" "}
          <Link to={`${source}/${lemma}`}>
            {dictionaryNames[source as keyof typeof dictionaryNames]
              ? _(dictionaryNames[source as keyof typeof dictionaryNames])
              : source}
          </Link>
        </Typography>
      }
      control={
        <Tooltip title="Hide this dictionary">
          <Checkbox
            checked
            color="default"
            name={source}
            onChange={handleChange}
          />
        </Tooltip>
      }
    />
  );
};

export default Source;

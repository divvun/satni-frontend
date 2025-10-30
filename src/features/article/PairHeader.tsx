import { useLingui } from "@lingui/react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { makeStyles } from "@mui/styles";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import { languageCodes } from "../../translateble_variables";

// import { wantedLangsVar } from '../../apolloCache';

const useStyles = makeStyles((theme: any) => ({
  lang1: {
    marginRight: theme.spacing(1),
  },
}));

interface PairHeaderProps {
  language: string;
}

const PairHeader: React.FC<PairHeaderProps> = ({ language }) => {
  const { _ } = useLingui();
  const classes = useStyles();
  // const wantedLangs = wantedLangsVar();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    // wantedLangsVar(wantedLangs.filter((value) => value !== event.target.name));
  };

  return (
    <FormControlLabel
      className={classes.lang1}
      label={
        <Typography variant="subtitle2">
          {languageCodes[language as keyof typeof languageCodes]
            ? _(languageCodes[language as keyof typeof languageCodes])
            : language}
        </Typography>
      }
      control={
        <Tooltip title="Hide this language">
          <Checkbox
            checked
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

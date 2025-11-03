import React from "react";
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from "@lingui/react/macro";
import { useLingui } from "@lingui/react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import dictionaryInfo, { dictionaryNames } from "../../translateble_variables";

interface DictChooserProps {
  dicts: string[];
  setDicts: (dicts: string[]) => void;
}

const DictChooser: React.FC<DictChooserProps> = ({ dicts, setDicts }) => {
  const { _ } = useLingui();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    const newDicts = dicts.includes(event.target.name)
      ? dicts.filter((value) => value !== event.target.name)
      : [...dicts, event.target.name];
    setDicts(newDicts);
  };

  return (
    <>
      {Object.keys(dictionaryInfo).map((dict) => (
        <Accordion key={dict}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${dict}-content`}
            id={`${dict}-header`}
          >
            <FormControlLabel
              aria-label={dict}
              onClick={(event) => event.stopPropagation()}
              onFocus={(event) => event.stopPropagation()}
              control={
                <Checkbox
                  checked={dicts.includes(dict)}
                  onChange={handleChange}
                  name={dict}
                />
              }
              label={
                dictionaryNames[dict as keyof typeof dictionaryNames]
                  ? _(dictionaryNames[dict as keyof typeof dictionaryNames])
                  : dict
              }
            />
          </AccordionSummary>
          <AccordionDetails>
            {(dictionaryInfo as any)[dict]?.info?.map(
              (infoText: any, index: number) => (
                <Typography
                  key={`${dict}-info-${index}`}
                  sx={{ mr: 1, width: "50%" }}
                >
                  {_(infoText)}
                </Typography>
              )
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default DictChooser;

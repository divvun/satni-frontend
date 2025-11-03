/* eslint-disable react/no-array-index-key */

import React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import SpeakerButton from "../speaker/SpeakerButton";

interface Analyses {
  [key: string]: string[];
}

interface MyTableRowProps {
  analyses: Analyses;
  name: string;
  values: string[];
  language: string;
}

const MyTableRow: React.FC<MyTableRowProps> = ({
  analyses,
  name,
  values,
  language,
}) => {
  return (
    <TableRow key={name}>
      <TableCell>{name}</TableCell>
      {values.length === 1 && (
        <TableCell key={`${name}_1`} colSpan={2} align="center">
          {analyses[values[0]].map((analysis, index) => (
            <Box
              key={`${analysis}_${index}`}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              {["sme", "sma", "smj"].includes(language) && (
                <SpeakerButton
                  text={` ${analysis},`}
                  language={language}
                  classes={{ icons: "" }}
                />
              )}
              <span>{analysis}</span>
            </Box>
          ))}
        </TableCell>
      )}
      {values.length > 1 &&
        values.map((value, index1) => (
          <TableCell key={index1}>
            {analyses[value]?.map((analysis, index) => (
              <Box
                key={`${analysis}_${index}`}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                {["sme", "sma", "smj"].includes(language) && (
                  <SpeakerButton
                    text={` ${analysis},`}
                    language={language}
                    classes={{ icons: "" }}
                  />
                )}
                <span>{analysis}</span>
              </Box>
            ))}
          </TableCell>
        ))}
    </TableRow>
  );
};

interface TableRowItem {
  name: string;
  values: string[];
}

interface TableRowData {
  [language: string]: TableRowItem[];
}

export const NounTableRows: TableRowData = {
  sma: [
    {
      name: "Nom",
      values: ["+N+Sg+Nom", "+N+Pl+Nom"],
    },
    {
      name: "Acc",
      values: ["+N+Sg+Acc", "+N+Pl+Acc"],
    },
    {
      name: "Gen",
      values: ["+N+Sg+Gen", "+N+Pl+Gen"],
    },
    {
      name: "Ill",
      values: ["+N+Sg+Ill", "+N+Pl+Ill"],
    },
    {
      name: "Ine",
      values: ["+N+Sg+Ine", "+N+Pl+Ine"],
    },
    {
      name: "Ela",
      values: ["+N+Sg+Ela", "+N+Pl+Ela"],
    },
    {
      name: "Com",
      values: ["+N+Sg+Com", "+N+Pl+Com"],
    },
    {
      name: "Ess",
      values: ["+N+Ess"],
    },
  ],
  sme: [
    {
      name: "Nom",
      values: ["+N+Sg+Nom", "+N+Pl+Nom"],
    },
    {
      name: "Acc",
      values: ["+N+Sg+Acc", "+N+Pl+Acc"],
    },
    {
      name: "Gen",
      values: ["+N+Sg+Gen", "+N+Pl+Gen"],
    },
    {
      name: "Ill",
      values: ["+N+Sg+Ill", "+N+Pl+Ill"],
    },
    {
      name: "Loc",
      values: ["+N+Sg+Loc", "+N+Pl+Loc"],
    },
    {
      name: "Com",
      values: ["+N+Sg+Com", "+N+Pl+Com"],
    },
    {
      name: "Ess",
      values: ["+N+Ess"],
    },
  ],
  smj: [
    {
      name: "Nom",
      values: ["+N+Sg+Nom", "+N+Pl+Nom"],
    },
    {
      name: "Acc",
      values: ["+N+Sg+Acc", "+N+Pl+Acc"],
    },
    {
      name: "Gen",
      values: ["+N+Sg+Gen", "+N+Pl+Gen"],
    },
    {
      name: "Ill",
      values: ["+N+Sg+Ill", "+N+Pl+Ill"],
    },
    {
      name: "Ine",
      values: ["+N+Sg+Ine", "+N+Pl+Ine"],
    },
    {
      name: "Ela",
      values: ["+N+Sg+Ela", "+N+Pl+Ela"],
    },
    {
      name: "Com",
      values: ["+N+Sg+Com", "+N+Pl+Com"],
    },
    {
      name: "Abe",
      values: ["+N+Abe"],
    },
    {
      name: "Ess",
      values: ["+N+Ess"],
    },
  ],
  smn: [
    {
      name: "Nom",
      values: ["+N+Sg+Nom", "+N+Pl+Nom"],
    },
    {
      name: "Acc",
      values: ["+N+Sg+Acc", "+N+Pl+Acc"],
    },
    {
      name: "Gen",
      values: ["+N+Sg+Gen", "+N+Pl+Gen"],
    },
    {
      name: "Ill",
      values: ["+N+Sg+Ill", "+N+Pl+Ill"],
    },
    {
      name: "Loc",
      values: ["+N+Sg+Loc", "+N+Pl+Loc"],
    },
    {
      name: "Com",
      values: ["+N+Sg+Com", "+N+Pl+Com"],
    },
    {
      name: "Abe",
      values: ["+N+Sg+Abe", "+N+Pl+Abe"],
    },
    {
      name: "Par",
      values: ["+N+Par"],
    },
    {
      name: "Ess",
      values: ["+N+Ess"],
    },
  ],
  sms: [
    {
      name: "Nom",
      values: ["+N+Sg+Nom", "+N+Pl+Nom"],
    },
    {
      name: "Acc",
      values: ["+N+Sg+Acc", "+N+Pl+Acc"],
    },
    {
      name: "Gen",
      values: ["+N+Sg+Gen", "+N+Pl+Gen"],
    },
    {
      name: "Ill",
      values: ["+N+Sg+Ill", "+N+Pl+Ill"],
    },
    {
      name: "Loc",
      values: ["+N+Sg+Loc", "+N+Pl+Loc"],
    },
    {
      name: "Com",
      values: ["+N+Sg+Com", "+N+Pl+Com"],
    },
    {
      name: "Abe",
      values: ["+N+Sg+Abe", "+N+Pl+Abe"],
    },
    {
      name: "Par",
      values: ["+N+Par"],
    },
    {
      name: "Ess",
      values: ["+N+Ess"],
    },
  ],
  fin: [
    {
      name: "Nom",
      values: ["+N+Sg+Nom", "+N+Pl+Nom"],
    },
    {
      name: "Gen",
      values: ["+N+Sg+Gen", "+N+Pl+Gen"],
    },
    {
      name: "Par",
      values: ["+N+Sg+Par", "+N+Pl+Par"],
    },
    {
      name: "All",
      values: ["+N+Sg+All", "+N+Pl+All"],
    },
    {
      name: "Abl",
      values: ["+N+Sg+Abl", "+N+Pl+Abl"],
    },
    {
      name: "Ade",
      values: ["+N+Sg+Ade", "+N+Pl+Ade"],
    },
    {
      name: "Ill",
      values: ["+N+Sg+Ill", "+N+Pl+Ill"],
    },
    {
      name: "Ine",
      values: ["+N+Sg+Ine", "+N+Pl+Ine"],
    },
    {
      name: "Ela",
      values: ["+N+Sg+Ela", "+N+Pl+Ela"],
    },
    {
      name: "Abe",
      values: ["+N+Sg+Abe", "+N+Pl+Abe"],
    },
    {
      name: "Ess",
      values: ["+N+Sg+Ess", "+N+Pl+Ess"],
    },
    {
      name: "Tra",
      values: ["+N+Sg+Tra", "+N+Pl+Tra"],
    },
    {
      name: "Ins",
      values: ["+N+Sg+Ins", "+N+Pl+Ins"],
    },
  ],
};

interface LangTableProps {
  analyses: Analyses;
  language: string;
}

const LangTable: React.FC<LangTableProps> = ({ analyses, language }) => (
  <TableBody>
    {NounTableRows[language].map((MapTableRow, rowIndex) => {
      if (MapTableRow.values.some((value) => analyses[value])) {
        return (
          <MyTableRow
            key={rowIndex}
            analyses={analyses}
            name={MapTableRow.name}
            values={MapTableRow.values}
            language={language}
          />
        );
      }
      return null;
    })}
  </TableBody>
);

interface ContentProps {
  analyses: Analyses;
  language: string;
}

const Content: React.FC<ContentProps> = ({ analyses, language }) => {
  switch (language) {
    case "sma":
    case "sme":
    case "smj":
    case "smn":
    case "sms":
    case "fin":
      return <LangTable analyses={analyses} language={language} />;
    default:
      return null;
  }
};

interface ParadigmData {
  analyses: Analyses;
}

interface NounParadigmProps {
  paradigm?: ParadigmData;
  language: string;
}

const NounParadigm: React.FC<NounParadigmProps> = ({ paradigm, language }) => {
  if (paradigm) {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>&nbsp;</TableCell>
            <TableCell>Sg</TableCell>
            <TableCell>Pl</TableCell>
          </TableRow>
        </TableHead>
        <Content analyses={paradigm.analyses} language={language} />
      </Table>
    );
  }

  return <div>Paradigm undefined {language}</div>;
};

export default NounParadigm;

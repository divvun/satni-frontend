/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const MyTableRow = ({ analyses, name, values }) => (
  <TableRow key={name}>
    <TableCell>{name}</TableCell>
    {values.length === 1 && (
      <TableCell key={`${name}_1`} colSpan={2} align="center">
        {analyses[values[0]].map((analysis, index) => (
          <div key={`${analysis}_${index}`}>{analysis}</div>
        ))}
      </TableCell>
    )}
    {values.length > 1 &&
      values.map((value, index1) => (
        <TableCell key={index1}>
          {analyses[value] &&
            analyses[value].map((analysis, index) => (
              <div key={`${analysis}_${index}`}>{analysis}</div>
            ))}
        </TableCell>
      ))}
  </TableRow>
);

MyTableRow.propTypes = {
  analyses: PropTypes.shape.isRequired,
  name: PropTypes.string.isRequired,
  values: PropTypes.arrayOf.isRequired,
};

const TableRows = {
  sma: [
    {
      name: 'Nom',
      values: ['N+Sg+Nom', 'N+Pl+Nom'],
    },
    {
      name: 'Acc',
      values: ['N+Sg+Acc', 'N+Pl+Acc'],
    },
    {
      name: 'Gen',
      values: ['N+Sg+Gen', 'N+Pl+Gen'],
    },
    {
      name: 'Ill',
      values: ['N+Sg+Ill', 'N+Pl+Ill'],
    },
    {
      name: 'Ine',
      values: ['N+Sg+Ine', 'N+Pl+Ine'],
    },
    {
      name: 'Ela',
      values: ['N+Sg+Ela', 'N+Pl+Ela'],
    },
    {
      name: 'Com',
      values: ['N+Sg+Com', 'N+Pl+Com'],
    },
    {
      name: 'Ess',
      values: ['N+Ess'],
    },
  ],
  sme: [
    {
      name: 'Nom',
      values: ['N+Sg+Nom', 'N+Pl+Nom'],
    },
    {
      name: 'Acc',
      values: ['N+Sg+Acc', 'N+Pl+Acc'],
    },
    {
      name: 'Gen',
      values: ['N+Sg+Gen', 'N+Pl+Gen'],
    },
    {
      name: 'Ill',
      values: ['N+Sg+Ill', 'N+Pl+Ill'],
    },
    {
      name: 'Loc',
      values: ['N+Sg+Loc', 'N+Pl+Loc'],
    },
    {
      name: 'Com',
      values: ['N+Sg+Com', 'N+Pl+Com'],
    },
    {
      name: 'Ess',
      values: ['N+Ess'],
    },
  ],
  smj: [
    {
      name: 'Nom',
      values: ['N+Sg+Nom', 'N+Pl+Nom'],
    },
    {
      name: 'Acc',
      values: ['N+Sg+Acc', 'N+Pl+Acc'],
    },
    {
      name: 'Gen',
      values: ['N+Sg+Gen', 'N+Pl+Gen'],
    },
    {
      name: 'Ill',
      values: ['N+Sg+Ill', 'N+Pl+Ill'],
    },
    {
      name: 'Ine',
      values: ['N+Sg+Ine', 'N+Pl+Ine'],
    },
    {
      name: 'Ela',
      values: ['N+Sg+Ela', 'N+Pl+Ela'],
    },
    {
      name: 'Com',
      values: ['N+Sg+Com', 'N+Pl+Com'],
    },
    {
      name: 'Abe',
      values: ['N+Abe'],
    },
    {
      name: 'Ess',
      values: ['N+Ess'],
    },
  ],
  smn: [
    {
      name: 'Nom',
      values: ['N+Sg+Nom', 'N+Pl+Nom'],
    },
    {
      name: 'Acc',
      values: ['N+Sg+Acc', 'N+Pl+Acc'],
    },
    {
      name: 'Gen',
      values: ['N+Sg+Gen', 'N+Pl+Gen'],
    },
    {
      name: 'Ill',
      values: ['N+Sg+Ill', 'N+Pl+Ill'],
    },
    {
      name: 'Loc',
      values: ['N+Sg+Loc', 'N+Pl+Loc'],
    },
    {
      name: 'Com',
      values: ['N+Sg+Com', 'N+Pl+Com'],
    },
    {
      name: 'Abe',
      values: ['N+Sg+Abe', 'N+Pl+Abe'],
    },
    {
      name: 'Par',
      values: ['N+Par'],
    },
    {
      name: 'Ess',
      values: ['N+Ess'],
    },
  ],
  sms: [
    {
      name: 'Nom',
      values: ['N+Sg+Nom', 'N+Pl+Nom'],
    },
    {
      name: 'Acc',
      values: ['N+Sg+Acc', 'N+Pl+Acc'],
    },
    {
      name: 'Gen',
      values: ['N+Sg+Gen', 'N+Pl+Gen'],
    },
    {
      name: 'Ill',
      values: ['N+Sg+Ill', 'N+Pl+Ill'],
    },
    {
      name: 'Loc',
      values: ['N+Sg+Loc', 'N+Pl+Loc'],
    },
    {
      name: 'Com',
      values: ['N+Sg+Com', 'N+Pl+Com'],
    },
    {
      name: 'Abe',
      values: ['N+Sg+Abe', 'N+Pl+Abe'],
    },
    {
      name: 'Par',
      values: ['N+Par'],
    },
    {
      name: 'Ess',
      values: ['N+Ess'],
    },
  ],
  fin: [
    {
      name: 'Nom',
      values: ['N+Sg+Nom', 'N+Pl+Nom'],
    },
    {
      name: 'Gen',
      values: ['N+Sg+Gen', 'N+Pl+Gen'],
    },
    {
      name: 'Par',
      values: ['N+Sg+Par', 'N+Pl+Par'],
    },
    {
      name: 'All',
      values: ['N+Sg+All', 'N+Pl+All'],
    },
    {
      name: 'Abl',
      values: ['N+Sg+Abl', 'N+Pl+Abl'],
    },
    {
      name: 'Ade',
      values: ['N+Sg+Ade', 'N+Pl+Ade'],
    },
    {
      name: 'Ill',
      values: ['N+Sg+Ill', 'N+Pl+Ill'],
    },
    {
      name: 'Ine',
      values: ['N+Sg+Ine', 'N+Pl+Ine'],
    },
    {
      name: 'Ela',
      values: ['N+Sg+Ela', 'N+Pl+Ela'],
    },
    {
      name: 'Abe',
      values: ['N+Sg+Abe', 'N+Pl+Abe'],
    },
    {
      name: 'Ess',
      values: ['N+Sg+Ess', 'N+Pl+Ess'],
    },
    {
      name: 'Tra',
      values: ['N+Sg+Tra', 'N+Pl+Tra'],
    },
    {
      name: 'Ins',
      values: ['N+Sg+Ins', 'N+Pl+Ins'],
    },
  ],
};

const LangTable = ({ analyses, language }) => (
  <TableBody>
    {TableRows[language].map((MapTableRow, rowIndex) => {
      if (MapTableRow.values.some((value) => analyses[value])) {
        return (
          <MyTableRow
            key={rowIndex}
            analyses={analyses}
            name={MapTableRow.name}
            values={MapTableRow.values}
          />
        );
      }
      return null;
    })}
  </TableBody>
);

LangTable.propTypes = {
  analyses: PropTypes.shape.isRequired,
  language: PropTypes.string.isRequired,
};

const Content = ({ analyses, language }) => {
  switch (language) {
    case 'sma':
    case 'sme':
    case 'smj':
    case 'smn':
    case 'sms':
    case 'fin':
      return <LangTable analyses={analyses} language={language} />;
    default:
      return null;
  }
};

Content.propTypes = {
  analyses: PropTypes.shape.isRequired,
  language: PropTypes.string.isRequired,
};

const NounParadigm = ({ paradigm, language }) => {
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

NounParadigm.propTypes = {
  paradigm: PropTypes.shape.isRequired,
  language: PropTypes.string.isRequired,
};

export default NounParadigm;

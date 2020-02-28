import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const MyTableRow = ({analyses, name, values}) => (
  <TableRow key={name}>
    <TableCell>{name}</TableCell>
    {(values.length === 1)
      && <TableCell key={`${name}_1`} colSpan={2} align='center'>{analyses[values[0]].map((analysis, index) => (
        <div key={`${analysis}_${index}`}>{analysis}</div>))}</TableCell>}
    {(values.length > 1)
          && values.map((value, index1) => {
            return <TableCell key={index1}>{(analyses[value]) && analyses[value].map((analysis, index) => (
              <div key={`${analysis}_${index}`}>{analysis}</div>))}</TableCell>;
          })}
  </TableRow>
);

const TableRows = {
  sma: [
    {
      name: 'Nom',
      values: ['N+Sg+Nom', 'N+Pl+Nom']
    },
    {
      name: 'Acc',
      values: ['N+Sg+Acc', 'N+Pl+Acc']
    },
    {
      name: 'Gen',
      values: ['N+Sg+Gen', 'N+Pl+Gen']
    },
    {
      name: 'Ill',
      values: ['N+Sg+Ill', 'N+Pl+Ill']
    },
    {
      name: 'Ine',
      values: ['N+Sg+Ine', 'N+Pl+Ine']
    },
    {
      name: 'Ela',
      values: ['N+Sg+Ela', 'N+Pl+Ela']
    },
    {
      name: 'Com',
      values: ['N+Sg+Com', 'N+Pl+Com']
    },
    {
      name: 'Ess',
      values: ['N+Ess']
    }
  ],
  sme: [
    {
      name: 'Nom',
      values: ['N+Sg+Nom', 'N+Pl+Nom']
    },
    {
      name: 'Acc',
      values: ['N+Sg+Acc', 'N+Pl+Acc']
    },
    {
      name: 'Gen',
      values: ['N+Sg+Gen', 'N+Pl+Gen']
    },
    {
      name: 'Ill',
      values: ['N+Sg+Ill', 'N+Pl+Ill']
    },
    {
      name: 'Loc',
      values: ['N+Sg+Loc', 'N+Pl+Loc']
    },
    {
      name: 'Com',
      values: ['N+Sg+Com', 'N+Pl+Com']
    },
    {
      name: 'Ess',
      values: ['N+Ess']
    }
  ],
  smj: [
    {
      name: 'Nom',
      values: ['N+Sg+Nom', 'N+Pl+Nom']
    },
    {
      name: 'Acc',
      values: ['N+Sg+Acc', 'N+Pl+Acc']
    },
    {
      name: 'Gen',
      values: ['N+Sg+Gen', 'N+Pl+Gen']
    },
    {
      name: 'Ill',
      values: ['N+Sg+Ill', 'N+Pl+Ill']
    },
    {
      name: 'Ine',
      values: ['N+Sg+Ine', 'N+Pl+Ine']
    },
    {
      name: 'Ela',
      values: ['N+Sg+Ela', 'N+Pl+Ela']
    },
    {
      name: 'Com',
      values: ['N+Sg+Com', 'N+Pl+Com']
    },
    {
      name: 'Abe',
      values: ['N+Sg+Abe', 'N+Pl+Abe']
    },
    {
      name: 'Ess',
      values: ['N+Ess']
    }
  ],
  smn: [
    {
      name: 'Nom',
      values: ['N+Sg+Nom', 'N+Pl+Nom']
    },
    {
      name: 'Acc',
      values: ['N+Sg+Acc', 'N+Pl+Acc']
    },
    {
      name: 'Gen',
      values: ['N+Sg+Gen', 'N+Pl+Gen']
    },
    {
      name: 'Ill',
      values: ['N+Sg+Ill', 'N+Pl+Ill']
    },
    {
      name: 'Loc',
      values: ['N+Sg+Loc', 'N+Pl+Loc']
    },
    {
      name: 'Com',
      values: ['N+Sg+Com', 'N+Pl+Com']
    },
    {
      name: 'Abe',
      values: ['N+Sg+Abe', 'N+Pl+Abe']
    },
    {
      name: 'Par',
      values: ['N+Par']
    },
    {
      name: 'Ess',
      values: ['N+Ess']
    }
  ],
  sms: [
    {
      name: 'Nom',
      values: ['N+Sg+Nom', 'N+Pl+Nom']
    },
    {
      name: 'Acc',
      values: ['N+Sg+Acc', 'N+Pl+Acc']
    },
    {
      name: 'Gen',
      values: ['N+Sg+Gen', 'N+Pl+Gen']
    },
    {
      name: 'Ill',
      values: ['N+Sg+Ill', 'N+Pl+Ill']
    },
    {
      name: 'Loc',
      values: ['N+Sg+Loc', 'N+Pl+Loc']
    },
    {
      name: 'Com',
      values: ['N+Sg+Com', 'N+Pl+Com']
    },
    {
      name: 'Abe',
      values: ['N+Sg+Abe', 'N+Pl+Abe']
    },
    {
      name: 'Par',
      values: ['N+Par']
    },
    {
      name: 'Ess',
      values: ['N+Ess']
    }
  ],
  fin: [
    {
      name: 'Nom',
      values: ['N+Sg+Nom', 'N+Pl+Nom']
    },
    {
      name: 'Gen',
      values: ['N+Sg+Gen', 'N+Pl+Gen']
    },
    {
      name: 'Par',
      values: ['N+Sg+Par', 'N+Pl+Par']
    },
    {
      name: 'All',
      values: ['N+Sg+All', 'N+Pl+All']
    },
    {
      name: 'Abl',
      values: ['N+Sg+Abl', 'N+Pl+Abl']
    },
    {
      name: 'Ade',
      values: ['N+Sg+Ade', 'N+Pl+Ade']
    },
    {
      name: 'Ill',
      values: ['N+Sg+Ill', 'N+Pl+Ill']
    },
    {
      name: 'Ine',
      values: ['N+Sg+Ine', 'N+Pl+Ine']
    },
    {
      name: 'Ela',
      values: ['N+Sg+Ela', 'N+Pl+Ela']
    },
    {
      name: 'Abe',
      values: ['N+Sg+Abe', 'N+Pl+Abe']
    },
    {
      name: 'Ess',
      values: ['N+Sg+Ess', 'N+Pl+Ess']
    },
    {
      name: 'Tra',
      values: ['N+Sg+Tra', 'N+Pl+Tra']
    },
    {
      name: 'Ins',
      values: ['N+Sg+Ins', 'N+Pl+Ins']
    }
  ]
};

const LangTable = ({analyses, language}) => {
  return (
    <TableBody>
      {TableRows[language].map((TableRow, rowIndex) => {
        if (TableRow['values'].some(value => analyses[value])) {
          return <MyTableRow key={rowIndex} analyses={analyses} name={TableRow['name']} values={TableRow['values']} />;
        }
        return null;
      })}
    </TableBody>
  );
};

const Content = ({analyses, language}) => {
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

const NounParadigm = ({paradigm, language}) => {
  if (paradigm) {
    return <Table>
      <TableHead>
        <TableRow>
          <TableCell>&nbsp;</TableCell><TableCell>Sg</TableCell><TableCell>Pl</TableCell>
        </TableRow>
      </TableHead>
      <Content analyses={paradigm['analyses']} language={language} />
    </Table>;
  } else {
    return <div>Paradigm undefined {language}</div>;
  }
};

export default NounParadigm;

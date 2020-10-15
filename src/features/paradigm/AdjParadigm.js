import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const TableRows = {
  sma: [
    {
      name: 'Attr',
      values: ['A+Attr', 'A+Comp+Attr', 'A+Superl+Attr']
    },
    {
      name: 'Sg/Nom',
      values: ['A+Sg+Nom', 'A+Comp+Sg+Nom', 'A+Superl+Sg+Nom']
    },
    {
      name: 'Pl/Nom',
      values: ['A+Pl+Nom', 'A+Comp+Pl+Nom', 'A+Superl+Pl+Nom']
    },
    {
      name: 'Sg/Acc',
      values: ['A+Sg+Acc', 'A+Comp+Sg+Acc', 'A+Superl+Sg+Acc']
    },
    {
      name: 'Pl/Acc',
      values: ['A+Pl+Acc', 'A+Comp+Pl+Acc', 'A+Superl+Pl+Acc']
    },
    {
      name: 'Sg/Gen',
      values: ['A+Sg+Gen', 'A+Comp+Sg+Gen', 'A+Superl+Sg+Gen']
    },
    {
      name: 'Pl/Gen',
      values: ['A+Pl+Gen', 'A+Comp+Pl+Gen', 'A+Superl+Pl+Gen']
    },
    {
      name: 'Sg/Ill',
      values: ['A+Sg+Ill', 'A+Comp+Sg+Ill', 'A+Superl+Sg+Ill']
    },
    {
      name: 'Pl/Ill',
      values: ['A+Pl+Ill', 'A+Comp+Pl+Ill', 'A+Superl+Pl+Ill']
    },
    {
      name: 'Sg/Ine',
      values: ['A+Sg+Ine', 'A+Comp+Sg+Ine', 'A+Superl+Sg+Ine']
    },
    {
      name: 'Pl/Ine',
      values: ['A+Pl+Ine', 'A+Comp+Pl+Ine', 'A+Superl+Pl+Ine']
    },
    {
      name: 'Sg/Ela',
      values: ['A+Sg+Ela', 'A+Comp+Sg+Ela', 'A+Superl+Sg+Ela']
    },
    {
      name: 'Pl/Ela',
      values: ['A+Pl+Ela', 'A+Comp+Pl+Ela', 'A+Superl+Pl+Ela']
    },
    {
      name: 'Sg/Com',
      values: ['A+Sg+Com', 'A+Comp+Sg+Com', 'A+Superl+Sg+Com']
    },
    {
      name: 'Pl/Com',
      values: ['A+Pl+Com', 'A+Comp+Pl+Com', 'A+Superl+Pl+Com']
    },
    {
      name: 'Ess',
      values: ['A+Ess', 'A+Comp+Ess', 'A+Superl+Ess']
    }
  ],
  sme: [
    {
      name: 'Attr',
      values: ['A+Attr', 'A+Comp+Attr', 'A+Superl+Attr']
    },
    {
      name: 'Sg/Nom',
      values: ['A+Sg+Nom', 'A+Comp+Sg+Nom', 'A+Superl+Sg+Nom']
    },
    {
      name: 'Pl/Nom',
      values: ['A+Pl+Nom', 'A+Comp+Pl+Nom', 'A+Superl+Pl+Nom']
    },
    {
      name: 'Sg/Acc',
      values: ['A+Sg+Acc', 'A+Comp+Sg+Acc', 'A+Superl+Sg+Acc']
    },
    {
      name: 'Pl/Acc',
      values: ['A+Pl+Acc', 'A+Comp+Pl+Acc', 'A+Superl+Pl+Acc']
    },
    {
      name: 'Sg/Gen',
      values: ['A+Sg+Gen', 'A+Comp+Sg+Gen', 'A+Superl+Sg+Gen']
    },
    {
      name: 'Pl/Gen',
      values: ['A+Pl+Gen', 'A+Comp+Pl+Gen', 'A+Superl+Pl+Gen']
    },
    {
      name: 'Sg/Ill',
      values: ['A+Sg+Ill', 'A+Comp+Sg+Ill', 'A+Superl+Sg+Ill']
    },
    {
      name: 'Pl/Ill',
      values: ['A+Pl+Ill', 'A+Comp+Pl+Ill', 'A+Superl+Pl+Ill']
    },
    {
      name: 'Sg/Loc',
      values: ['A+Sg+Loc', 'A+Comp+Sg+Loc', 'A+Superl+Sg+Loc']
    },
    {
      name: 'Pl/Loc',
      values: ['A+Pl+Loc', 'A+Comp+Pl+Loc', 'A+Superl+Pl+Loc']
    },
    {
      name: 'Sg/Com',
      values: ['A+Sg+Com', 'A+Comp+Sg+Com', 'A+Superl+Sg+Com']
    },
    {
      name: 'Pl/Com',
      values: ['A+Pl+Com', 'A+Comp+Pl+Com', 'A+Superl+Pl+Com']
    },
    {
      name: 'Ess',
      values: ['A+Ess', 'A+Comp+Ess', 'A+Superl+Ess']
    }
  ],
  smj: [
    {
      name: 'Attr',
      values: ['A+Attr', 'A+Comp+Attr', 'A+Superl+Attr']
    },
    {
      name: 'Sg/Nom',
      values: ['A+Sg+Nom', 'A+Comp+Sg+Nom', 'A+Superl+Sg+Nom']
    },
    {
      name: 'Pl/Nom',
      values: ['A+Pl+Nom', 'A+Comp+Pl+Nom', 'A+Superl+Pl+Nom']
    },
    {
      name: 'Sg/Acc',
      values: ['A+Sg+Acc', 'A+Comp+Sg+Acc', 'A+Superl+Sg+Acc']
    },
    {
      name: 'Pl/Acc',
      values: ['A+Pl+Acc', 'A+Comp+Pl+Acc', 'A+Superl+Pl+Acc']
    },
    {
      name: 'Sg/Gen',
      values: ['A+Sg+Gen', 'A+Comp+Sg+Gen', 'A+Superl+Sg+Gen']
    },
    {
      name: 'Pl/Gen',
      values: ['A+Pl+Gen', 'A+Comp+Pl+Gen', 'A+Superl+Pl+Gen']
    },
    {
      name: 'Sg/Ill',
      values: ['A+Sg+Ill', 'A+Comp+Sg+Ill', 'A+Superl+Sg+Ill']
    },
    {
      name: 'Pl/Ill',
      values: ['A+Pl+Ill', 'A+Comp+Pl+Ill', 'A+Superl+Pl+Ill']
    },
    {
      name: 'Sg/Ine',
      values: ['A+Sg+Ine', 'A+Comp+Sg+Ine', 'A+Superl+Sg+Ine']
    },
    {
      name: 'Pl/Ine',
      values: ['A+Pl+Ine', 'A+Comp+Pl+Ine', 'A+Superl+Pl+Ine']
    },
    {
      name: 'Sg/Ela',
      values: ['A+Sg+Ela', 'A+Comp+Sg+Ela', 'A+Superl+Sg+Ela']
    },
    {
      name: 'Pl/Ela',
      values: ['A+Pl+Ela', 'A+Comp+Pl+Ela', 'A+Superl+Pl+Ela']
    },
    {
      name: 'Sg/Com',
      values: ['A+Sg+Com', 'A+Comp+Sg+Com', 'A+Superl+Sg+Com']
    },
    {
      name: 'Pl/Com',
      values: ['A+Pl+Com', 'A+Comp+Pl+Com', 'A+Superl+Pl+Com']
    },
    {
      name: 'Sg/Abe',
      values: ['A+Sg+Abe', 'A+Abep+Sg+Abe', 'A+Superl+Sg+Abe']
    },
    {
      name: 'Pl/Abe',
      values: ['A+Pl+Abe', 'A+Abep+Pl+Abe', 'A+Superl+Pl+Abe']
    },
    {
      name: 'Ess',
      values: ['A+Ess', 'A+Comp+Ess', 'A+Superl+Ess']
    }
  ],
  smn: [
    {
      name: 'Attr',
      values: ['A+Attr', 'A+Comp+Attr', 'A+Superl+Attr']
    },
    {
      name: 'Sg/Nom',
      values: ['A+Sg+Nom', 'A+Comp+Sg+Nom', 'A+Superl+Sg+Nom']
    },
    {
      name: 'Pl/Nom',
      values: ['A+Pl+Nom', 'A+Comp+Pl+Nom', 'A+Superl+Pl+Nom']
    },
    {
      name: 'Sg/Acc',
      values: ['A+Sg+Acc', 'A+Comp+Sg+Acc', 'A+Superl+Sg+Acc']
    },
    {
      name: 'Pl/Acc',
      values: ['A+Pl+Acc', 'A+Comp+Pl+Acc', 'A+Superl+Pl+Acc']
    },
    {
      name: 'Sg/Gen',
      values: ['A+Sg+Gen', 'A+Comp+Sg+Gen', 'A+Superl+Sg+Gen']
    },
    {
      name: 'Pl/Gen',
      values: ['A+Pl+Gen', 'A+Comp+Pl+Gen', 'A+Superl+Pl+Gen']
    },
    {
      name: 'Sg/Ill',
      values: ['A+Sg+Ill', 'A+Comp+Sg+Ill', 'A+Superl+Sg+Ill']
    },
    {
      name: 'Pl/Ill',
      values: ['A+Pl+Ill', 'A+Comp+Pl+Ill', 'A+Superl+Pl+Ill']
    },
    {
      name: 'Sg/Ine',
      values: ['A+Sg+Ine', 'A+Comp+Sg+Ine', 'A+Superl+Sg+Ine']
    },
    {
      name: 'Pl/Ine',
      values: ['A+Pl+Ine', 'A+Comp+Pl+Ine', 'A+Superl+Pl+Ine']
    },
    {
      name: 'Sg/Com',
      values: ['A+Sg+Com', 'A+Comp+Sg+Com', 'A+Superl+Sg+Com']
    },
    {
      name: 'Pl/Com',
      values: ['A+Pl+Com', 'A+Comp+Pl+Com', 'A+Superl+Pl+Com']
    },
    {
      name: 'Sg/Abe',
      values: ['A+Sg+Abe', 'A+Abep+Sg+Abe', 'A+Superl+Sg+Abe']
    },
    {
      name: 'Pl/Abe',
      values: ['A+Pl+Abe', 'A+Abep+Pl+Abe', 'A+Superl+Pl+Abe']
    },
    {
      name: 'Par',
      values: ['A+Par', 'A+Comp+Par', 'A+Superl+Par']
    },
    {
      name: 'Ess',
      values: ['A+Ess', 'A+Comp+Ess', 'A+Superl+Ess']
    }
  ],
  sms: [
    {
      name: 'Attr',
      values: ['A+Attr', 'A+Comp+Attr', 'A+Superl+Attr']
    },
    {
      name: 'Sg/Nom',
      values: ['A+Sg+Nom', 'A+Comp+Sg+Nom', 'A+Superl+Sg+Nom']
    },
    {
      name: 'Pl/Nom',
      values: ['A+Pl+Nom', 'A+Comp+Pl+Nom', 'A+Superl+Pl+Nom']
    },
    {
      name: 'Sg/Acc',
      values: ['A+Sg+Acc', 'A+Comp+Sg+Acc', 'A+Superl+Sg+Acc']
    },
    {
      name: 'Pl/Acc',
      values: ['A+Pl+Acc', 'A+Comp+Pl+Acc', 'A+Superl+Pl+Acc']
    },
    {
      name: 'Sg/Gen',
      values: ['A+Sg+Gen', 'A+Comp+Sg+Gen', 'A+Superl+Sg+Gen']
    },
    {
      name: 'Pl/Gen',
      values: ['A+Pl+Gen', 'A+Comp+Pl+Gen', 'A+Superl+Pl+Gen']
    },
    {
      name: 'Sg/Ill',
      values: ['A+Sg+Ill', 'A+Comp+Sg+Ill', 'A+Superl+Sg+Ill']
    },
    {
      name: 'Pl/Ill',
      values: ['A+Pl+Ill', 'A+Comp+Pl+Ill', 'A+Superl+Pl+Ill']
    },
    {
      name: 'Sg/Loc',
      values: ['A+Sg+Loc', 'A+Comp+Sg+Loc', 'A+Superl+Sg+Loc']
    },
    {
      name: 'Pl/Loc',
      values: ['A+Pl+Loc', 'A+Comp+Pl+Loc', 'A+Superl+Pl+Loc']
    },
    {
      name: 'Sg/Com',
      values: ['A+Sg+Com', 'A+Comp+Sg+Com', 'A+Superl+Sg+Com']
    },
    {
      name: 'Pl/Com',
      values: ['A+Pl+Com', 'A+Comp+Pl+Com', 'A+Superl+Pl+Com']
    },
    {
      name: 'Sg/Abe',
      values: ['A+Sg+Abe', 'A+Abep+Sg+Abe', 'A+Superl+Sg+Abe']
    },
    {
      name: 'Pl/Abe',
      values: ['A+Pl+Abe', 'A+Abep+Pl+Abe', 'A+Superl+Pl+Abe']
    },
    {
      name: 'Par',
      values: ['A+Par', 'A+Comp+Par', 'A+Superl+Par']
    },
    {
      name: 'Ess',
      values: ['A+Ess', 'A+Comp+Ess', 'A+Superl+Ess']
    }
  ],
  fin: [
    {
      name: 'Attr',
      values: ['A+Attr', 'A+Comp+Attr', 'A+Superl+Attr']
    },
    {
      name: 'Sg/Nom',
      values: ['A+Sg+Nom', 'A+Comp+Sg+Nom', 'A+Superl+Sg+Nom']
    },
    {
      name: 'Pl/Nom',
      values: ['A+Pl+Nom', 'A+Comp+Pl+Nom', 'A+Superl+Pl+Nom']
    },
    {
      name: 'Sg/Gen',
      values: ['A+Sg+Gen', 'A+Comp+Sg+Gen', 'A+Superl+Sg+Gen']
    },
    {
      name: 'Pl/Gen',
      values: ['A+Pl+Gen', 'A+Comp+Pl+Gen', 'A+Superl+Pl+Gen']
    },
    {
      name: 'Sg/Par',
      values: ['A+Sg+Par', 'A+Comp+Sg+Par', 'A+Superl+Sg+Par']
    },
    {
      name: 'Pl/Par',
      values: ['A+Pl+Par', 'A+Comp+Pl+Par', 'A+Superl+Pl+Par']
    },
    {
      name: 'Sg/All',
      values: ['A+Sg+All', 'A+Comp+Sg+All', 'A+Superl+Sg+All']
    },
    {
      name: 'Pl/All',
      values: ['A+Pl+All', 'A+Comp+Pl+All', 'A+Superl+Pl+All']
    },
    {
      name: 'Sg/Abl',
      values: ['A+Sg+Abl', 'A+Comp+Sg+Abl', 'A+Superl+Sg+Abl']
    },
    {
      name: 'Pl/Abl',
      values: ['A+Pl+Abl', 'A+Comp+Pl+Abl', 'A+Superl+Pl+Abl']
    },
    {
      name: 'Sg/Ade',
      values: ['A+Sg+Ade', 'A+Comp+Sg+Ade', 'A+Superl+Sg+Ade']
    },
    {
      name: 'Pl/Ade',
      values: ['A+Pl+Ade', 'A+Comp+Pl+Ade', 'A+Superl+Pl+Ade']
    },
    {
      name: 'Sg/Ill',
      values: ['A+Sg+Ill', 'A+Comp+Sg+Ill', 'A+Superl+Sg+Ill']
    },
    {
      name: 'Pl/Ill',
      values: ['A+Pl+Ill', 'A+Comp+Pl+Ill', 'A+Superl+Pl+Ill']
    },
    {
      name: 'Sg/Ine',
      values: ['A+Sg+Ine', 'A+Comp+Sg+Ine', 'A+Superl+Sg+Ine']
    },
    {
      name: 'Pl/Ine',
      values: ['A+Pl+Ine', 'A+Comp+Pl+Ine', 'A+Superl+Pl+Ine']
    },
    {
      name: 'Sg/Ela',
      values: ['A+Sg+Ela', 'A+Comp+Sg+Ela', 'A+Superl+Sg+Ela']
    },
    {
      name: 'Pl/Ela',
      values: ['A+Pl+Ela', 'A+Comp+Pl+Ela', 'A+Superl+Pl+Ela']
    },
    {
      name: 'Sg/Abe',
      values: ['A+Sg+Abe', 'A+Comp+Sg+Abe', 'A+Superl+Sg+Abe']
    },
    {
      name: 'Pl/Abe',
      values: ['A+Pl+Abe', 'A+Comp+Pl+Abe', 'A+Superl+Pl+Abe']
    },
    {
      name: 'Sg/Ess',
      values: ['A+Sg+Ess', 'A+Comp+Sg+Ess', 'A+Superl+Sg+Ess']
    },
    {
      name: 'Pl/Ess',
      values: ['A+Pl+Ess', 'A+Comp+Pl+Ess', 'A+Superl+Pl+Ess']
    },
    {
      name: 'Sg/Tra',
      values: ['A+Sg+Tra', 'A+Comp+Sg+Tra', 'A+Superl+Sg+Tra']
    },
    {
      name: 'Pl/Tra',
      values: ['A+Pl+Tra', 'A+Comp+Pl+Tra', 'A+Superl+Pl+Tra']
    },
    {
      name: 'Sg/Ins',
      values: ['A+Sg+Ins', 'A+Comp+Sg+Ins', 'A+Superl+Sg+Ins']
    },
    {
      name: 'Pl/Ins',
      values: ['A+Pl+Ins', 'A+Comp+Pl+Ins', 'A+Superl+Pl+Ins']
    }
  ]
};

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

MyTableRow.propTypes = {
  analyses: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired
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

LangTable.propTypes = {
  analyses: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired
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

Content.propTypes = {
  analyses: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired
};

const AdjParadigm = ({paradigm, language}) => {
  if (paradigm) {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>&nbsp;</TableCell>
            <TableCell>Positive</TableCell>
            <TableCell>Comparative</TableCell>
            <TableCell>Superlative</TableCell>
          </TableRow>
        </TableHead>
        <Content analyses={paradigm['analyses']} language={language} />
      </Table>
    );
  } else {
    return <div>Paradigm undefined {language}</div>;
  }
};

AdjParadigm.propTypes = {
  paradigm: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired
};

export default AdjParadigm;

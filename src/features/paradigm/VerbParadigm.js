import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const MyTableRow = ({analyses, pron, values}) => (
  <TableRow key={pron}>
    <TableCell>{pron}</TableCell>
    {values.map((value, index1) => <TableCell key={index1}>{analyses[value].map((analysis, index) => <div key={`${analysis}_${index}`}>{analysis}</div>)}</TableCell>)}
  </TableRow>
);

const TableRows = {
  sme: [
    {
      values: ['V+Ind+Prs+Sg1', 'V+Ind+Prt+Sg1'],
      pron: 'mun'
    },
    {
      values: ['V+Ind+Prs+Sg2', 'V+Ind+Prt+Sg2'],
      pron: 'don'
    },
    {
      values: ['V+Ind+Prs+Sg3', 'V+Ind+Prt+Sg3'],
      pron: 'son'
    },
    {
      values: ['V+Ind+Prs+Du1', 'V+Ind+Prt+Du1'],
      pron: 'moai'
    },
    {
      values: ['V+Ind+Prs+Du2', 'V+Ind+Prt+Du2'],
      pron: 'doai'
    },
    {
      values: ['V+Ind+Prs+Du3', 'V+Ind+Prt+Du3'],
      pron: 'soai'
    },
    {
      values: ['V+Ind+Prs+Pl1', 'V+Ind+Prt+Pl1'],
      pron: 'mii'
    },
    {
      values: ['V+Ind+Prs+Pl2', 'V+Ind+Prt+Pl2'],
      pron: 'dii'
    },
    {
      values: ['V+Ind+Prs+Pl3', 'V+Ind+Prt+Pl3'],
      pron: 'sii'
    }
  ],
  sma: [
    {
      pron: 'manne',
      values: ['V+Ind+Prs+Sg1', 'V+Ind+Prt+Sg1']
    },
    {
      pron: 'datne',
      values: ['V+Ind+Prs+Sg2', 'V+Ind+Prt+Sg2']
    },
    {
      pron: 'dïhte',
      values: ['V+Ind+Prs+Sg3', 'V+Ind+Prt+Sg3']
    },
    {
      pron: 'månnoeh',
      values: ['V+Ind+Prs+Du1', 'V+Ind+Prt+Du1']
    },
    {
      pron: 'dotne/dåtnoeh',
      values: ['V+Ind+Prs+Du2', 'V+Ind+Prt+Du2']
    },
    {
      pron: 'dah guaktah',
      values: ['V+Ind+Prs+Du3', 'V+Ind+Prt+Du3']
    },
    {
      pron: 'mij',
      values: ['V+Ind+Prs+Pl1', 'V+Ind+Prt+Pl1']
    },
    {
      pron: 'dijjieh',
      values: ['V+Ind+Prs+Pl2', 'V+Ind+Prt+Pl2']
    },
    {
      pron: 'dah',
      values: ['V+Ind+Prs+Pl3', 'V+Ind+Prt+Pl3']
    }
  ],
  smj: [
    {
      pron: 'mån',
      values: ['V+Ind+Prs+Sg1', 'V+Ind+Prt+Sg1']
    },
    {
      pron: 'duon',
      values: ['V+Ind+Prs+Sg2', 'V+Ind+Prt+Sg2']
    },
    {
      pron: 'sån',
      values: ['V+Ind+Prs+Sg3', 'V+Ind+Prt+Sg3']
    },
    {
      pron: 'måj',
      values: ['V+Ind+Prs+Du1', 'V+Ind+Prt+Du1']
    },
    {
      pron: 'dåj',
      values: ['V+Ind+Prs+Du2', 'V+Ind+Prt+Du2']
    },
    {
      pron: 'såj',
      values: ['V+Ind+Prs+Du3', 'V+Ind+Prt+Du3']
    },
    {
      pron: 'mij',
      values: ['V+Ind+Prs+Pl1', 'V+Ind+Prt+Pl1']
    },
    {
      pron: 'dij',
      values: ['V+Ind+Prs+Pl2', 'V+Ind+Prt+Pl2']
    }, {
      pron: 'sij',
      values: ['V+Ind+Prs+Pl3', 'V+Ind+Prt+Pl3']
    }
  ],
  smn: [
    {
      pron: 'mun',
      values: ['V+Ind+Prs+Sg1', 'V+Ind+Prt+Sg1']
    },
    {
      pron: 'tom',
      values: ['V+Ind+Prs+Sg2', 'V+Ind+Prt+Sg2']
    },
    {
      pron: 'sun',
      values: ['V+Ind+Prs+Sg3', 'V+Ind+Prt+Sg3']
    },
    {
      pron: 'muoi',
      values: ['V+Ind+Prs+Du1', 'V+Ind+Prt+Du1']
    },
    {
      pron: 'tuoi',
      values: ['V+Ind+Prs+Du2', 'V+Ind+Prt+Du2']
    },
    {
      pron: 'suoi',
      values: ['V+Ind+Prs+Du3', 'V+Ind+Prt+Du3']
    },
    {
      pron: 'mii',
      values: ['V+Ind+Prs+Pl1', 'V+Ind+Prt+Pl1']
    },
    {
      pron: 'tij',
      values: ['V+Ind+Prs+Pl2', 'V+Ind+Prt+Pl2']
    },
    {
      pron: 'sij',
      values: ['V+Ind+Prs+Pl3', 'V+Ind+Prt+Pl3']
    }
  ],
  sms: [
    {
      pron: 'mon',
      values: ['V+Ind+Prs+Sg1', 'V+Ind+Prt+Sg1']
    },
    {
      pron: 'ton',
      values: ['V+Ind+Prs+Sg2', 'V+Ind+Prt+Sg2']
    },
    {
      pron: 'son',
      values: ['V+Ind+Prs+Sg3', 'V+Ind+Prt+Sg3']
    },
    {
      pron: 'mii',
      values: ['V+Ind+Prs+Pl1', 'V+Ind+Prt+Pl1']
    },
    {
      pron: 'tij',
      values: ['V+Ind+Prs+Pl2', 'V+Ind+Prt+Pl2']
    },
    {
      pron: 'sij',
      values: ['V+Ind+Prs+Pl3', 'V+Ind+Prt+Pl3']
    },
    {
      pron: '',
      values: ['V+Ind+Prs+Sg4', 'V+Ind+Prt+Sg4']
    }
  ]
};

const FinContent = ({analyses}) => {
  return (<div>sma</div>);
};

const LangTable = ({analyses, language}) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell /><TableCell>Present</TableCell><TableCell>Perfectum</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {TableRows[language].map((TableRow, rowIndex) => {
          if (TableRow['values'].some(value => analyses[value])) {
            return <MyTableRow key={rowIndex} analyses={analyses} pron={TableRow['pron']} values={TableRow['values']} />;
          }
          return null;
        })
    }
      </TableBody>
    </Table>
  );
};

const Content = ({analyses, language}) => {
  switch (language) {
    case 'sma':
      return <div>
        <LangTable analyses={analyses} language={language} />
        <div>(ij) {analyses['V+ConNeg'].map(wordform => <span key={wordform}>{wordform}</span>)}</div>
        <div>(lea) {analyses['V+PrfPrc'].map(wordform => <span key={wordform}>{wordform}</span>)}</div>
        <div>(lea) {analyses['V+Ger'].map(wordform => <span key={wordform}>{wordform}</span>)}</div>
      </div>;
    case 'sme':
      return <div>
        <LangTable analyses={analyses} language={language} />
        {[['otne in', 'V+Ind+Prs+ConNeg'], ['ikte in', 'V+Ind+Prt+ConNeg'], ['lean', 'V+PrfPrc']].map((uff, index) => analyses[uff[1]] ? <div>({uff[0]}) {analyses[uff[1]].map(wordform => <span key={wordform}>{wordform}</span>)}</div> : null)}
      </div>;
    case 'smj':
      return <div>
        <LangTable analyses={analyses} language={language} />
        <div>(uddni iv) {analyses['V+Ind+ConNeg'].map(wordform => <span key={wordform}>{wordform}</span>)}</div>
        <div>(iektu ittjiv) {analyses['V+Ind+ConNeg'].map(wordform => <span key={wordform}>{wordform}</span>)}</div>
        <div>(lav) {analyses['V+PrfPrc'].map(wordform => <span key={wordform}>{wordform}</span>)}</div>
      </div>;
    case 'smn':
      return <div>
        <LangTable analyses={analyses} language={language} />
        <div>(onne jiem) {analyses['V+Ind+Prs+ConNeg'].map(wordform => <span key={wordform}>{wordform}</span>)}</div>
        <div>(jieht jiem) {analyses['V+Ind+Prt+ConNeg'].map(wordform => <span key={wordform}>{wordform}</span>)}</div>
        <div>(lam) {analyses['V+PrfPrc'].map(wordform => <span key={wordform}>{wordform}</span>)}</div>
      </div>;
    case 'sms':
      return <div>
        <LangTable analyses={analyses} language={language} />
        <div>(täʹbbe jiõm) {analyses['V+Ind+Prs+ConNeg'].map(wordform => <span key={wordform}>{wordform}</span>)}</div>
        <div>(jåhtta jiõm) {analyses['V+Ind+Prt+ConNeg'].map(wordform => <span key={wordform}>{wordform}</span>)}</div>
      </div>;
    case 'fin':
      return <FinContent analyses={analyses} />;
    default:
      return null;
  }
};

const VerbParadigm = ({paradigm, language}) => {
  if (paradigm) {
    return <Content analyses={paradigm['analyses']} language={language} />;
  } else {
    return <div>Paradigm undefined {language}</div>;
  }
};

export default VerbParadigm;

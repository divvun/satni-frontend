import React from 'react';
import PropTypes from 'prop-types';
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

MyTableRow.propTypes = {
  analyses: PropTypes.object.isRequired,
  pron: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired
};

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

const FinContent = () => {
  return (<div>sma</div>);
};

FinContent.propTypes = {
  analyses: PropTypes.object.isRequired,
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

LangTable.propTypes = {
  analyses: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired
};

const ExtraContent = ({listOfAnalyses, analyses}) => (
  <>
    {listOfAnalyses.map((uff, index) => analyses[uff[1]] ? <div key={index}>({uff[0]}) {analyses[uff[1]].map(wordform => <span key={wordform}>{wordform}</span>)}</div> : null)}
  </>
);

ExtraContent.propTypes = {
  analyses: PropTypes.object.isRequired,
  listOfAnalyses: PropTypes.array.isRequired
};

const Content = ({analyses, language}) => {
  switch (language) {
  case 'sma':
    return <div>
      <LangTable analyses={analyses} language={language} />
      <ExtraContent
        listOfAnalyses={[
          ['ij', 'V+ConNeg'],
          ['lea', 'V+PrfPrc'],
          ['lea', 'V+Ger']
        ]}
        analyses={analyses}/>
    </div>;
  case 'sme':
    return <div>
      <LangTable analyses={analyses} language={language} />
      <ExtraContent
        listOfAnalyses={[
          ['otne in', 'V+Ind+Prs+ConNeg'],
          ['ikte in', 'V+Ind+Prt+ConNeg'],
          ['lean', 'V+PrfPrc']
        ]}
        analyses={analyses}/>
    </div>;
  case 'smj':
    return <div>
      <LangTable analyses={analyses} language={language} />
      <ExtraContent
        listOfAnalyses={[
          ['uddni iv', 'V+Ind+ConNeg'],
          ['iektu ittjiv', 'V+Ind+ConNeg'],
          ['lav', 'V+PrfPrc']
        ]}
        analyses={analyses}/>
    </div>;
  case 'smn':
    return <div>
      <LangTable analyses={analyses} language={language} />
      <ExtraContent
        listOfAnalyses={[
          ['onne jiem', 'V+Ind+Prs+ConNeg'],
          ['jieht jiem', 'V+Ind+Prt+ConNeg'],
          ['lam', 'V+PrfPrc']
        ]}
        analyses={analyses}/>
    </div>;
  case 'sms':
    return <div>
      <LangTable analyses={analyses} language={language} />
      <ExtraContent
        listOfAnalyses={[
          ['täʹbbe jiõm', 'V+Ind+Prs+ConNeg'],
          ['jåhtta jiõm', 'V+Ind+Prt+ConNeg']
        ]}
        analyses={analyses}/>
    </div>;
  case 'fin':
    return <FinContent analyses={analyses} />;
  default:
    return null;
  }
};

Content.propTypes = {
  analyses: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired
};

const VerbParadigm = ({paradigm, language}) => {
  if (paradigm) {
    return <Content analyses={paradigm['analyses']} language={language} />;
  } else {
    return <div>Paradigm undefined {language}</div>;
  }
};

VerbParadigm.propTypes = {
  paradigm: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired
};

export default VerbParadigm;

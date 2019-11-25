import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const SmeContent = ({analyses}) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell>Nom</TableCell>
        <TableCell>{analyses['N+Sg+Nom'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Nom'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Acc</TableCell>
        <TableCell>{analyses['N+Sg+Acc'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Acc'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Gen</TableCell>
        <TableCell>{analyses['N+Sg+Gen'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Gen'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Ill</TableCell>
        <TableCell>{analyses['N+Sg+Ill'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Ill'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Loc</TableCell>
        <TableCell>{analyses['N+Sg+Loc'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Loc'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Com</TableCell>
        <TableCell>{analyses['N+Sg+Com'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Com'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Ess</TableCell>
        <TableCell colSpan={2} align='center'>{analyses['N+Ess'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
    </TableBody>
  );
};

const SmaContent = ({analyses}) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell>Nom</TableCell>
        <TableCell>{analyses['N+Sg+Nom'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Nom'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Acc</TableCell>
        <TableCell>{analyses['N+Sg+Acc'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Acc'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Gen</TableCell>
        <TableCell>{analyses['N+Sg+Gen'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Gen'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Ill</TableCell>
        <TableCell>{analyses['N+Sg+Ill'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Ill'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Ine</TableCell>
        <TableCell>{analyses['N+Sg+Ine'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Ine'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Ela</TableCell>
        <TableCell>{analyses['N+Sg+Ela'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Ela'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Com</TableCell>
        <TableCell>{analyses['N+Sg+Com'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Com'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Ess</TableCell>
        <TableCell colSpan={2} align='center'>{analyses['N+Ess'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
    </TableBody>
  );
};

const SmjContent = ({analyses}) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell>Nom</TableCell>
        <TableCell>{analyses['N+Sg+Nom'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Nom'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Acc</TableCell>
        <TableCell>{analyses['N+Sg+Acc'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Acc'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Gen</TableCell>
        <TableCell>{analyses['N+Sg+Gen'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Gen'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Ill</TableCell>
        <TableCell>{analyses['N+Sg+Ill'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Ill'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Ine</TableCell>
        <TableCell>{analyses['N+Sg+Ine'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Ine'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Ela</TableCell>
        <TableCell>{analyses['N+Sg+Ela'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Ela'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Com</TableCell>
        <TableCell>{analyses['N+Sg+Com'].map((wordform, index) => <div key={wordform + index}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Com'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Abe</TableCell>
        <TableCell>{analyses['N+Sg+Abe'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Abe'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Ess</TableCell>
        <TableCell colSpan={2} align='center'>{analyses['N+Ess'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
    </TableBody>
  );
};

const SmnContent = ({analyses, language}) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell>Nom</TableCell>
        <TableCell>{analyses['N+Sg+Nom'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Nom'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Acc</TableCell>
        <TableCell>{analyses['N+Sg+Acc'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Acc'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Gen</TableCell>
        <TableCell>{analyses['N+Sg+Gen'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Gen'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Ill</TableCell>
        <TableCell>{analyses['N+Sg+Ill'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Ill'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Loc</TableCell>
        <TableCell>{analyses['N+Sg+Loc'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Loc'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Com</TableCell>
        <TableCell>{analyses['N+Sg+Com'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Com'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Abe</TableCell>
        <TableCell>{analyses['N+Sg+Abe'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Abe'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Par</TableCell>
        <TableCell colSpan={2} align='center'>{analyses['N+Par'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Ess</TableCell>
        <TableCell colSpan={2} align='center'>{analyses['N+Ess'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
    </TableBody>
  );
};

const SmsContent = ({analyses, language}) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell>Nom</TableCell>
        <TableCell>{analyses['N+Sg+Nom'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Nom'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Acc</TableCell>
        <TableCell>{analyses['N+Sg+Acc'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Acc'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Gen</TableCell>
        <TableCell>{analyses['N+Sg+Gen'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Gen'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Ill</TableCell>
        <TableCell>{analyses['N+Sg+Ill'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Ill'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Loc</TableCell>
        <TableCell>{analyses['N+Sg+Loc'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Loc'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Com</TableCell>
        <TableCell>{analyses['N+Sg+Com'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Com'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Ess</TableCell>
        <TableCell colSpan={2} align='center'>{analyses['N+Ess'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
    </TableBody>
  );
};

const FinContent = ({analyses, language}) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell>Nom</TableCell>
        <TableCell>{analyses['N+Sg+Nom'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Nom'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Gen</TableCell>
        <TableCell>{analyses['N+Sg+Gen'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Gen'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Par</TableCell>
        <TableCell>{analyses['N+Sg+Par'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Par'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>All</TableCell>
        <TableCell>{analyses['N+Sg+All'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+All'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Abl</TableCell>
        <TableCell>{analyses['N+Sg+Abl'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Abl'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Ade</TableCell>
        <TableCell>{analyses['N+Sg+Ade'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Ade'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Ill</TableCell>
        <TableCell>{analyses['N+Sg+Ill'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Ill'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Ine</TableCell>
        <TableCell>{analyses['N+Sg+Ine'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Ine'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Ela</TableCell>
        <TableCell>{analyses['N+Sg+Ela'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Ela'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Abe</TableCell>
        <TableCell>{analyses['N+Sg+Abe'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Abe'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Ess</TableCell>
        <TableCell>{analyses['N+Sg+Ess'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Ess'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Tra</TableCell>
        <TableCell>{analyses['N+Sg+Tra'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['N+Pl+Tra'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Ins</TableCell>
        <TableCell>&nbsp;</TableCell>
        <TableCell>{analyses['N+Pl+Ins'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
    </TableBody>
  );
};

const Content = ({analyses, language}) => {
  switch (language) {
    case 'sma':
      return <SmaContent analyses={analyses} />;
      break;
    case 'smj':
      return <SmjContent analyses={analyses} />;
      break;
    case 'smn':
      return <SmnContent analyses={analyses} />;
      break;
    case 'sme':
      return <SmeContent analyses={analyses} />;
      break;
    case 'fin':
      return <FinContent analyses={analyses} />;
      break;
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

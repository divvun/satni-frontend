import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const SmeContent = ({analyses}) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell>mun</TableCell>
        <TableCell>{analyses['V+Ind+Prs+Sg1'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['V+Ind+Prt+Sg1'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>don</TableCell>
        <TableCell>{analyses['V+Ind+Prs+Sg2'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['V+Ind+Prt+Sg2'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>son</TableCell>
        <TableCell>{analyses['V+Ind+Prs+Sg3'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['V+Ind+Prt+Sg3'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>moai</TableCell>
        <TableCell>{analyses['V+Ind+Prs+Du1'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['V+Ind+Prt+Du1'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>doai</TableCell>
        <TableCell>{analyses['V+Ind+Prs+Du2'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['V+Ind+Prt+Du2'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>soai</TableCell>
        <TableCell>{analyses['V+Ind+Prs+Du3'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['V+Ind+Prt+Du3'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>mii</TableCell>
        <TableCell>{analyses['V+Ind+Prs+Pl1'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['V+Ind+Prt+Pl1'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>dii</TableCell>
        <TableCell>{analyses['V+Ind+Prs+Pl2'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['V+Ind+Prt+Pl2'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>sii</TableCell>
        <TableCell>{analyses['V+Ind+Prs+Pl3'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['V+Ind+Prt+Pl3'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
    </TableBody>
  );
};

const SmaContent = ({analyses}) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell>manne</TableCell>
        <TableCell>{analyses['V+Ind+Prs+Sg1'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['V+Ind+Prt+Sg1'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>datne</TableCell>
        <TableCell>{analyses['V+Ind+Prs+Sg2'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['V+Ind+Prt+Sg2'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>dïhte</TableCell>
        <TableCell>{analyses['V+Ind+Prs+Sg3'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['V+Ind+Prt+Sg3'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>månnoeh</TableCell>
        <TableCell>{analyses['V+Ind+Prs+Du1'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['V+Ind+Prt+Du1'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>dotne/dåtnoeh</TableCell>
        <TableCell>{analyses['V+Ind+Prs+Du2'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['V+Ind+Prt+Du2'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>dah guaktah</TableCell>
        <TableCell>{analyses['V+Ind+Prs+Du3'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['V+Ind+Prt+Du3'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>mij</TableCell>
        <TableCell>{analyses['V+Ind+Prs+Pl1'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['V+Ind+Prt+Pl1'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>dijjieh</TableCell>
        <TableCell>{analyses['V+Ind+Prs+Pl2'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['V+Ind+Prt+Pl2'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>dah</TableCell>
        <TableCell>{analyses['V+Ind+Prs+Pl3'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['V+Ind+Prt+Pl3'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
    </TableBody>
  );
};

const SmjContent = ({analyses}) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell>mån</TableCell>
        <TableCell>{analyses['V+Ind+Prs+Sg1'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['V+Ind+Prt+Sg1'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>duon</TableCell>
        <TableCell>{analyses['V+Ind+Prs+Sg2'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['V+Ind+Prt+Sg2'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>sån</TableCell>
        <TableCell>{analyses['V+Ind+Prs+Sg3'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['V+Ind+Prt+Sg3'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>måj</TableCell>
        <TableCell>{analyses['V+Ind+Prs+Du1'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['V+Ind+Prt+Du1'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>dåj</TableCell>
        <TableCell>{analyses['V+Ind+Prs+Du2'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['V+Ind+Prt+Du2'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>såj</TableCell>
        <TableCell>{analyses['V+Ind+Prs+Du3'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['V+Ind+Prt+Du3'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>mij</TableCell>
        <TableCell>{analyses['V+Ind+Prs+Pl1'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['V+Ind+Prt+Pl1'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>dij</TableCell>
        <TableCell>{analyses['V+Ind+Prs+Pl2'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['V+Ind+Prt+Pl2'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>sij</TableCell>
        <TableCell>{analyses['V+Ind+Prs+Pl3'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
        <TableCell>{analyses['V+Ind+Prt+Pl3'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      </TableRow>
    </TableBody>
  );
};

const SmnContent = ({analyses}) => {
  return <TableBody>
    <TableRow>
      <TableCell>mun</TableCell>
      <TableCell>{analyses['V+Ind+Prs+Sg1'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      <TableCell>{analyses['V+Ind+Prt+Sg1'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>tom</TableCell>
      <TableCell>{analyses['V+Ind+Prs+Sg2'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      <TableCell>{analyses['V+Ind+Prt+Sg2'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>sun</TableCell>
      <TableCell>{analyses['V+Ind+Prs+Sg3'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      <TableCell>{analyses['V+Ind+Prt+Sg3'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>muoi</TableCell>
      <TableCell>{analyses['V+Ind+Prs+Du1'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      <TableCell>{analyses['V+Ind+Prt+Du1'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>tuoi</TableCell>
      <TableCell>{analyses['V+Ind+Prs+Du2'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      <TableCell>{analyses['V+Ind+Prt+Du2'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>suoi</TableCell>
      <TableCell>{analyses['V+Ind+Prs+Du3'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      <TableCell>{analyses['V+Ind+Prt+Du3'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>mii</TableCell>
      <TableCell>{analyses['V+Ind+Prs+Pl1'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      <TableCell>{analyses['V+Ind+Prt+Pl1'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>tij</TableCell>
      <TableCell>{analyses['V+Ind+Prs+Pl2'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      <TableCell>{analyses['V+Ind+Prt+Pl2'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>sij</TableCell>
      <TableCell>{analyses['V+Ind+Prs+Pl3'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      <TableCell>{analyses['V+Ind+Prt+Pl3'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
    </TableRow>
  </TableBody>;
};

const SmsContent = ({analyses}) => {
  return <TableBody>
    <TableRow>
      <TableCell>mon</TableCell>
      <TableCell>{analyses['V+Ind+Prs+Sg1'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      <TableCell>{analyses['V+Ind+Prt+Sg1'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>ton</TableCell>
      <TableCell>{analyses['V+Ind+Prs+Sg2'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      <TableCell>{analyses['V+Ind+Prt+Sg2'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>son</TableCell>
      <TableCell>{analyses['V+Ind+Prs+Sg3'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      <TableCell>{analyses['V+Ind+Prt+Sg3'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>mii</TableCell>
      <TableCell>{analyses['V+Ind+Prs+Pl1'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      <TableCell>{analyses['V+Ind+Prt+Pl1'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>tij</TableCell>
      <TableCell>{analyses['V+Ind+Prs+Pl2'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      <TableCell>{analyses['V+Ind+Prt+Pl2'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>sij</TableCell>
      <TableCell>{analyses['V+Ind+Prs+Pl3'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      <TableCell>{analyses['V+Ind+Prt+Pl3'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>&nbsp;</TableCell>
      <TableCell>{analyses['V+Ind+Prs+Sg4'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
      <TableCell>{analyses['V+Ind+Prt+Sg4'].map(wordform => <div key={wordform}>{wordform}</div>)}</TableCell>
    </TableRow>
  </TableBody>;
};

const FinContent = ({analyses}) => {
  return (<div>sma</div>);
};

const Content = ({analyses, language}) => {
  switch (language) {
    case 'sma':
      return <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell /><TableCell>Present</TableCell><TableCell>Perfectum</TableCell>
            </TableRow>
          </TableHead>
          <SmaContent analyses={analyses} />
        </Table>
        <div>(ij) {analyses['V+ConNeg'].map(wordform => <span key={wordform}>{wordform}</span>)}</div>
        <div>(lea) {analyses['V+PrfPrc'].map(wordform => <span key={wordform}>{wordform}</span>)}</div>
        <div>(lea) {analyses['V+Ger'].map(wordform => <span key={wordform}>{wordform}</span>)}</div>
      </div>;
      break;
    case 'sme':
      return <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell /><TableCell>Present</TableCell><TableCell>Perfectum</TableCell>
            </TableRow>
          </TableHead>
          <SmeContent analyses={analyses} />
        </Table>
        <div>(otne in) {analyses['V+Ind+Prs+ConNeg'].map(wordform => <span key={wordform}>{wordform}</span>)}</div>
        <div>(ikte in) {analyses['V+Ind+Prt+ConNeg'].map(wordform => <span key={wordform}>{wordform}</span>)}</div>
        <div>(lean) {analyses['V+PrfPrc'].map(wordform => <span key={wordform}>{wordform}</span>)}</div>
      </div>;
      break;
    case 'smj':
      return <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell /><TableCell>Present</TableCell><TableCell>Perfectum</TableCell>
            </TableRow>
          </TableHead>
          <SmjContent analyses={analyses} />
        </Table>
        <div>(uddni iv) {analyses['V+Ind+ConNeg'].map(wordform => <span key={wordform}>{wordform}</span>)}</div>
        <div>(iektu ittjiv) {analyses['V+Ind+ConNeg'].map(wordform => <span key={wordform}>{wordform}</span>)}</div>
        <div>(lav) {analyses['V+PrfPrc'].map(wordform => <span key={wordform}>{wordform}</span>)}</div>
      </div>;
      break;
    case 'smn':
      return <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell /><TableCell>Present</TableCell><TableCell>Perfectum</TableCell>
            </TableRow>
          </TableHead>
          <SmnContent analyses={analyses} />
        </Table>
        <div>(onne jiem) {analyses['V+Ind+Prs+ConNeg'].map(wordform => <span key={wordform}>{wordform}</span>)}</div>
        <div>(jieht jiem) {analyses['V+Ind+Prt+ConNeg'].map(wordform => <span key={wordform}>{wordform}</span>)}</div>
        <div>(lam) {analyses['V+PrfPrc'].map(wordform => <span key={wordform}>{wordform}</span>)}</div>
      </div>;
      break;
    case 'sms':
      return <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell /><TableCell>Present</TableCell><TableCell>Perfectum</TableCell>
            </TableRow>
          </TableHead>
          <SmsContent analyses={analyses} />
        </Table>
        <div>(täʹbbe jiõm) {analyses['V+Ind+Prs+ConNeg'].map(wordform => <span key={wordform}>{wordform}</span>)}</div>
        <div>(jåhtta jiõm) {analyses['V+Ind+Prt+ConNeg'].map(wordform => <span key={wordform}>{wordform}</span>)}</div>
      </div>;
      break;
    case 'fin':
      return <FinContent analyses={analyses} />;
      break;
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

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Trans, t } from '@lingui/macro';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  accordionHeading: {
    // fontSize: theme.typography.pxToRem(15),
    // fontWeight: theme.typography.fontWeightRegular
  },
  infoText: {
    marginRight: theme.spacing(1),
    width: '50%'
  }
}));

// t`Davvisámegiela-suoma digitála sátnegirjji giehtačállosa lea čállán emeritusprofessor Pekka Sammallahti iežas 1989 ja 1993 prentejuvvon sátnegirjjiid vuođul.`,
// t`Digitála sátnegirji sisdoallá badjel 50.000 ohcansáni ja čálli lasiha sániid ain dađistaga.`

const dictionaryInfo = {
  sammallahtismefin: {
    info: [
      t`Emeritusprofessor Pekka Sammallahti has based this dictionary on his own printed dictionaries published in 1989 and 1993.`,
      t`The dictionary contains more than 50.000 entries, and the Sammallahti adds entries regularly.`
    ]
  },
  termwiki: {
    info: [
      t`Giellagáldu's main task is to standardise new terminology and written language for the Sami languages. The standardised terms from their <a href="satni.uit.no/termwiki">termbase<a> is exported daily to this site, to be easily accessible to the Sami community.`,
      t`The termbase consists of over 50,000 term articles, and is updated on a regular basis.`
    ]
  },
  gtsmenob: {
    info: [
      t`This dictionary builds on Nils Jernsletten's dictionary Álgosátnegirji (4322 words), but now it contains 30,000 entries, plus 6000 place name entries.`, 
      t`Approximately half of the content of the dictionary is taken by searching for parallels in a parallel corpus of administrative text. This work was financed by the Ministry of Local Government and Modernisation.` 
    ]
  },
  gtnobsme: {
    info: [
      t`Norwegian → North Sámi is based on the North Sámi → Norwegian dictionary, but frequent Norwegian words have been added. It contains about 26,000 Norwegian entries.`, 
      t`Approximately half of the content of the dictionary is taken by searching for parallels in a parallel corpus of administrative text. This work was financed by the Ministry of Local Government and Modernisation.` 
    ]
  },
  gtnobsma: {
    info: [
      t`This dictionary builds on material prepared by Albert Jåma and Tove Brustad in the Hemnes Saami Organization, but has in addition gained words from Giellatekno and Aajege's work with the Southern Sámi Oahpa.`
    ]
  },
  gtsmanob: {
    info: [
      t`This dictionary builds on material prepared by Albert Jåma and Tove Brustad in the Hemnes Saami Organization, but has in addition gained words from Giellatekno and Aajege's work with the Southern Sámi Oahpa.`
    ]
  },
  gtsmefin: {
    info: [
      t`This dictionary is based on lexical material from the Institute for the Languages of Finland, and from Giellatekno's work with the North Saami Oahpa. In addition, we have included frequent words from North Saami.`,
      t`The dictionary contains about 11,000 entries.`
    ]
  },
  gtfinsme: {
    info: [
      t`This dictionary is based on lexical material from the Institute for the Languages of Finland, and from Giellatekno's work with the North Saami Oahpa. In addition frequent Finnish words have been added.`,
      t`The dictionary contains about 11,000 entries.`
    ]
  },
  gtsmesmn: {
    info: [
      t`This dictionary builds on the Valtonen and Olthuis Inarinsaame-suomi-inarinsaame dictionary (30000 words).`
    ]
  },
  gtsmnsme: {
    info: [
      t`This dictionary builds on the Valtonen and Olthuis Inarinsaame-suomi-inarinsaame dictionary (30000 words).`
    ]
  }
};


const DictionaryInfo = (props) => {
  const classes = useStyles();

  return (
    <>
      {Object.keys(dictionaryInfo).map(key => (
        <Accordion
          key={key}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon/> }
            aria-controls='`${key}-content`'
            id='`${key}-header`'
          >
            <Typography className={classes.accordionHeading}>
              <Trans id={key}/>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {dictionaryInfo[key].info.map((infoText, index) => <Typography key={index} className={classes.infoText}>
              <Trans id={infoText}/>
            </Typography>)}
          </AccordionDetails>
        </Accordion>
      ))}
    
    </>
  );
};

export default DictionaryInfo;

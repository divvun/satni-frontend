import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Trans } from '@lingui/macro';

import Definitions from './Definitions';
import LemmaGroups from './LemmaGroups';

const CategoryLink = ({category}) => {
  return <Grid item xs={12}>
    <Typography>
      <Trans>Category:</Trans>
      <Link href={`https://satni.uit.no/termwiki/index.php?title=Kategoriija:${category}`}
        target='_blank' rel='noopener noreferrer'>
        {category}
      </Link>
    </Typography>
  </Grid>;
};

const SourceLink = ({termwikiref}) => (
  <Grid item xs={12}>
    <Typography>
      <Trans>Source:
        <Link
          href={`https://satni.uit.no/termwiki/index.php?title=${termwikiref}`}
          target='_blank' rel='noopener noreferrer'>
        TermWiki
        </Link>
      </Trans>
    </Typography>
  </Grid>
);

const CollectionLink = ({collection}) => (
  <Grid item xs={12}>
    <Typography>
      <Link
        href={`https://satni.uit.no/termwiki/index.php?title=Collection:${collection}`}
        target='_blank' rel='noopener noreferrer'>
        {collection}
      </Link>
    </Typography>
  </Grid>
);


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1)
  },
  title: {
    fontSize: 14
  }
}));

const TermWikiArticle = ({termGroup, lemmaHandler}) => {
  const classes = useStyles();

  return (
    <>
      <LemmaGroups
        lemmaHandler={lemmaHandler}
        fromterms={termGroup.from.terms}
        toterms={termGroup.to.terms} />
      {(termGroup.from.definition || termGroup.to.definition) && <Definitions definitions={[termGroup.from.definition, termGroup.to.definition]}/>}
      <Grid container>
        <Grid item className={classes.paper}>
          <SourceLink termwikiref={termGroup.termwikiref} />
        </Grid>
        <Grid item className={classes.paper}>
          <CategoryLink category={termGroup.category} />
        </Grid>
      </Grid>
      <Grid>
        {termGroup.collections && termGroup.collections.map((collection, index) => <CollectionLink key={index} collection={collection}/>)}
      </Grid>
    </>
  );
};

export default TermWikiArticle;

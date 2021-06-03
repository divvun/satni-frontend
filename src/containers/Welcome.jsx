import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';

import { Trans } from '@lingui/macro';
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import LanguageIcon from '@material-ui/icons/Language';
import Link from '@material-ui/core/Link';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ViewHeadlineOutlined from '@material-ui/icons/ViewHeadlineOutlined';

import dictionaryInfo from '../translateble_variables';
import { locationParser } from '../utils';

const useStyles = makeStyles((theme) => ({
  welcome: {
    [theme.breakpoints.up('xs')]: {
      marginRight: '20%',
      marginLeft: '20%',
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: theme.spacing(4),
      marginLeft: theme.spacing(4),
    },
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
  },
  heading: {
    textAlign: 'center',
    margin: theme.spacing(1),
  },
  list: {
    marginBottom: theme.spacing(1),
  },
  icons: {
    fontSize: 'inherit',
  },
}));

export const WelcomeHeader = () => {
  const classes = useStyles();
  const { currentLemma, currentDict } = locationParser(useLocation().pathname);
  return (
    <Paper className={classes.welcome}>
      <Typography variant="h5" className={classes.heading}>
        {currentDict && !currentLemma ? (
          <Trans id={currentDict} />
        ) : (
          <Trans>Welcome!</Trans>
        )}
      </Typography>
      <Typography component="p" className={classes.list}>
        {currentDict && !currentLemma ? (
          <>
            {dictionaryInfo[currentDict].info.map((infoText) => (
              <Typography key={infoText} className={classes.infoText}>
                <Trans id={infoText} />
              </Typography>
            ))}
          </>
        ) : (
          <Trans>
            Do searches in{' '}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://giella.org"
            >
              Giellagáldu&apos;s
            </Link>{' '}
            term collection,{' '}
            <Link href="/sammallahtismefin">
              Pekka Sammallahti&apos;s North Sami – Finnish dictionary
            </Link>{' '}
            and{' '}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="http://giellatekno.uit.no"
            >
              Giellatekno&apos;s
            </Link>{' '}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="http://sanit.oahpa.no"
            >
              sami dictionaries
            </Link>
            .
          </Trans>
        )}
      </Typography>
    </Paper>
  );
};

export const SearchWelcome = () => {
  const classes = useStyles();

  return (
    <div className={classes.welcome}>
      <Typography component="p" className={classes.list}>
        <Trans>Search results will appear here.</Trans>
      </Typography>
      <Typography component="p" className={classes.list}>
        <Trans>
          The input field accepts sami, nordic, english and latin search words.
          If you do not have Sami letters on your device, press{' '}
          <KeyboardIcon className={classes.icons} /> to write them in the input
          field.
        </Trans>
      </Typography>
      <Typography component="p" className={classes.list}>
        <Trans>
          You can browse the search words here, new ones will be fetched until
          all matches have been found.
        </Trans>
      </Typography>
      <Typography component="p" className={classes.list}>
        <Trans>
          When you click a word here, dictionary articles appear to the right.
        </Trans>
      </Typography>
    </div>
  );
};

export const DictWelcome = () => {
  const classes = useStyles();

  return (
    <div className={classes.welcome}>
      <Typography component="p" className={classes.list}>
        <Trans>
          Dictionary articles will appear in this pane when you press a word in
          the search results to the left.
        </Trans>
      </Typography>
      <Typography component="p" className={classes.list}>
        <Trans>
          Click <InfoOutlined className={classes.icons} /> to see the inflection
          paradigm of words. Click{' '}
          <ViewHeadlineOutlined className={classes.icons} /> to see examples of
          how the word is used.
        </Trans>
      </Typography>
      <Typography component="p" className={classes.list}>
        <Trans>
          Inside the articles you can hide unwanted languages and dictionaries.
          To reactivate them, press <LanguageIcon className={classes.icons} />{' '}
          or <MenuBookIcon className={classes.icons} /> .
        </Trans>
      </Typography>
    </div>
  );
};

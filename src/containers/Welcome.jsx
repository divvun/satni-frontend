import React from 'react';
import { makeStyles } from '@mui/styles';
import { useLocation } from 'react-router-dom';

import { Trans } from '@lingui/macro';
import { useLingui } from '@lingui/react';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import LanguageIcon from '@mui/icons-material/Language';
import Link from '@mui/material/Link';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ViewHeadlineOutlined from '@mui/icons-material/ViewHeadlineOutlined';

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
  const { _ } = useLingui();
  const { currentLemma, currentDict } = locationParser(useLocation().pathname);
  return (
    <Paper className={classes.welcome}>
      <Typography variant="h5" className={classes.heading}>
        {currentDict && !currentLemma ? (
          <Trans id={currentDict}>{currentDict}</Trans>
        ) : (
          <Trans>Welcome!</Trans>
        )}
      </Typography>
      <Typography component="p" className={classes.list}>
        {currentDict && !currentLemma ? (
          <>
            {dictionaryInfo[currentDict].info.map((infoText, index) => (
              <Typography
                key={`${currentDict}-info-${index}`}
                className={classes.infoText}
                component="span"
              >
                {_(infoText)}
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
            </Link>
            {', '}Hábmer municipality&apos;s{' '}
            <Link href="/habmersmjnob">Lule Sámi - Norwegian</Link> or{' '}
            <Link href="/habmernobsmj">Norwegian - Lule Sámi</Link> medicinal
            dictionaries and{' '}
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

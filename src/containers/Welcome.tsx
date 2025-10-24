import React from 'react';
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from '@lingui/macro';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Link from '@material-ui/core/Link';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Paper from '@material-ui/core/Paper';
import { makeStyles, Theme } from '@material-ui/core/styles';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Typography from '@material-ui/core/Typography';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import InfoOutlined from '@material-ui/icons/InfoOutlined';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import KeyboardIcon from '@material-ui/icons/Keyboard';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import LanguageIcon from '@material-ui/icons/Language';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import MenuBookIcon from '@material-ui/icons/MenuBook';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import ViewHeadlineOutlined from '@material-ui/icons/ViewHeadlineOutlined';
// @ts-ignore - React Router DOM v5 compatibility
import { useLocation } from 'react-router-dom';

import dictionaryInfo from '../translateble_variables';
import { locationParser } from '../utils';

export const WelcomeHeader: React.FC = () => {
  const useStyles = makeStyles((theme: Theme) => ({
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
    infoText: {
      marginBottom: theme.spacing(1),
    },
  }));
  const classes = useStyles();
  const { currentLemma, currentDict } = locationParser(useLocation().pathname);

  return (
    // @ts-ignore - Material-UI v4 compatibility
    <Paper className={classes.welcome}>
      {/* @ts-ignore - Material-UI v4 compatibility */}
      <Typography variant="h5" className={classes.heading}>
        {currentDict && !currentLemma ? (
          <Trans id={currentDict} />
        ) : (
          <Trans>Welcome!</Trans>
        )}
      </Typography>
      {/* @ts-ignore - Material-UI v4 compatibility */}
      <Typography component="p" className={classes.list}>
        {currentDict && !currentLemma ? (
          (dictionaryInfo as any)[currentDict]?.info?.map(
            (infoText: string) => (
              // @ts-ignore - Material-UI v4 compatibility
              <Typography key={infoText} className={classes.infoText}>
                <Trans id={infoText} />
              </Typography>
            ),
          )
        ) : (
          <Trans>
            Do searches in {/* @ts-ignore - Material-UI v4 compatibility */}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://giella.org"
            >
              Giellagáldu&apos;s
            </Link>{' '}
            term collection, {/* @ts-ignore - Material-UI v4 compatibility */}
            <Link href="/sammallahtismefin">
              Pekka Sammallahti&apos;s North Sami – Finnish dictionary
            </Link>
            {', '}Hábmer municipality&apos;s{' '}
            {/* @ts-ignore - Material-UI v4 compatibility */}
            <Link href="/habmersmjnob">Lule Sámi - Norwegian</Link> or{' '}
            {/* @ts-ignore - Material-UI v4 compatibility */}
            <Link href="/habmernobsmj">Norwegian - Lule Sámi</Link> medicinal
            dictionaries and {/* @ts-ignore - Material-UI v4 compatibility */}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="http://giellatekno.uit.no"
            >
              Giellatekno&apos;s
            </Link>{' '}
            {/* @ts-ignore - Material-UI v4 compatibility */}
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

export const SearchWelcome: React.FC = () => {
  const useStyles = makeStyles((theme: Theme) => ({
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
  const classes = useStyles();

  return (
    <div className={classes.welcome}>
      {/* @ts-ignore - Material-UI v4 compatibility */}
      <Typography component="p" className={classes.list}>
        <Trans>Search results will appear here.</Trans>
      </Typography>
      {/* @ts-ignore - Material-UI v4 compatibility */}
      <Typography component="p" className={classes.list}>
        <Trans>
          The input field accepts sami, nordic, english and latin search words.
          If you do not have Sami letters on your device, press{' '}
          {/* @ts-ignore - Material-UI v4 compatibility */}
          <KeyboardIcon className={classes.icons} /> to write them in the input
          field.
        </Trans>
      </Typography>
      {/* @ts-ignore - Material-UI v4 compatibility */}
      <Typography component="p" className={classes.list}>
        <Trans>
          You can browse the search words here, new ones will be fetched until
          all matches have been found.
        </Trans>
      </Typography>
      {/* @ts-ignore - Material-UI v4 compatibility */}
      <Typography component="p" className={classes.list}>
        <Trans>
          When you click a word here, dictionary articles appear to the right.
        </Trans>
      </Typography>
    </div>
  );
};

export const DictWelcome: React.FC = () => {
  const useStyles = makeStyles((theme: Theme) => ({
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
  const classes = useStyles();

  return (
    <div className={classes.welcome}>
      {/* @ts-ignore - Material-UI v4 compatibility */}
      <Typography component="p" className={classes.list}>
        <Trans>
          Dictionary articles will appear in this pane when you press a word in
          the search results to the left.
        </Trans>
      </Typography>
      {/* @ts-ignore - Material-UI v4 compatibility */}
      <Typography component="p" className={classes.list}>
        <Trans>
          Click {/* @ts-ignore - Material-UI v4 compatibility */}
          <InfoOutlined className={classes.icons} /> to see the inflection
          paradigm of words. Click{' '}
          {/* @ts-ignore - Material-UI v4 compatibility */}
          <ViewHeadlineOutlined className={classes.icons} /> to see examples of
          how the word is used.
        </Trans>
      </Typography>
      {/* @ts-ignore - Material-UI v4 compatibility */}
      <Typography component="p" className={classes.list}>
        <Trans>
          Inside the articles you can hide unwanted languages and dictionaries.
          To reactivate them, press{' '}
          {/* @ts-ignore - Material-UI v4 compatibility */}
          <LanguageIcon className={classes.icons} /> or{' '}
          {/* @ts-ignore - Material-UI v4 compatibility */}
          <MenuBookIcon className={classes.icons} /> .
        </Trans>
      </Typography>
    </div>
  );
};

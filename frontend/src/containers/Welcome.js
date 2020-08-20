import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Trans } from '@lingui/macro';
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import LanguageIcon from '@material-ui/icons/Language';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ViewHeadlineOutlined from '@material-ui/icons/ViewHeadlineOutlined';

import DictChooser from 'features/wantedlangs/DictChooser';
import DictionaryInfo from './DictionaryInfo';
import LangChooser from 'features/wantedlangs/LangChooser';

const useStyles = makeStyles(theme => ({
  welcome: {
    margin: theme.spacing(4)
  },
  heading: {
    textAlign: 'center',
    margin: theme.spacing(1)
  },
  list: {
    marginBottom: theme.spacing(1)
  },
  icons: {
    fontSize: 'inherit'
  }
}));

export const DictWelcome = () => {
  const classes = useStyles();

  return (
    <div className={classes.welcome}>
      <Typography
        variant='h4'
        className={classes.heading}
      >
        <Trans>
          Welcome!
        </Trans>
      </Typography>
      <Typography
        component='p'
        className={classes.list}
      >
        <Trans>
          Here you will find <a href='https://giella.org'>Giellagáldu's</a> term collection, Pekka Sammallahti's North Sami – Finnish dictionary and <a href='http://giellatekno.uit.no'>Giellatekno's</a> sami dictionaries, all set up by <a href='http://divvun.no'>Divvun</a>.
        </Trans>
      </Typography>
      <Typography
        component='p'
        className={classes.list}
      >
        <Trans>
          Dictionary articles will appear in this pane when you press a word in the search results to the left.
        </Trans>
      </Typography>
      <Typography
        component='p'
        className={classes.list}
      >
        <Trans>
          Click <InfoOutlined className={classes.icons} /> to see the inflection paradigm of words. Click <ViewHeadlineOutlined className={classes.icons} /> to see examples of how the word is used.
        </Trans>
      </Typography>
      <Typography
        component='p'
        className={classes.list}
      >
        <Trans>
          Inside the articles you can hide unwanted languages and dictionaries. To reactivate them, press <LanguageIcon className={classes.icons} /> or <MenuBookIcon className={classes.icons} /> .
        </Trans>
      </Typography>
      <DictionaryInfo />
    </div>
  );
};

export const SearchWelcome = () => {
  const classes = useStyles();

  return (
    <div className={classes.welcome}>
      <Typography
        component='p'
        className={classes.list}
      >
        <Trans>
          Search results will appear here.
        </Trans>
      </Typography>
      <Typography
        component='p'
        className={classes.list}
      >
        <Trans>
          The input field accepts sami, nordic, english and latin search words.
          If you do not have Sami letters on your device, press <KeyboardIcon className={classes.icons} /> to write them in the input field.
        </Trans>
      </Typography>
      <Typography
        component='p'
        className={classes.list}
      >
        <Trans>
          You can browse the search words here, new ones will be fetched until all matches have been found.
        </Trans>
      </Typography>
      <Typography
        component='p'
        className={classes.list}
      >
        <Trans>
          When you click a word here, dictionary articles appear to the right.
        </Trans>
      </Typography>
    </div>
  );
};

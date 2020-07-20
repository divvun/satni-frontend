import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Downshift from 'downshift';
import { css } from 'react-emotion';
import {
  ControllerButton,
  Input,
  Item,
  ArrowIcon,
  XIcon
} from 'components';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { useCookies } from 'react-cookie';

const GET_LEMMAS = gql`
  query AllLemmas($inputValue: String!, $wantedLangs: [String]! ) {
    stemList (first:10, search: $inputValue, wanted: $wantedLangs) {
      edges {
        node {
          stem
          srclangs
          targetlangs
        }
      }
    }
  }
`;

function renderInput (inputProps) {
  const { InputProps, classes, ref, ...other } = inputProps;

  return (
    <TextField
      InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRoot,
          input: classes.inputInput
        },
        ...InputProps
      }}
      {...other}
      variant='outlined'
      size='small'
      autoFocus
    />
  );
}

function renderSuggestion (suggestionProps) {
  const { suggestion, index, itemProps, highlightedIndex, selectedItem } = suggestionProps;
  const isHighlighted = highlightedIndex === index;
  const isSelected = (selectedItem || '').indexOf(suggestion.stem) > -1;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.stem}
      selected={isHighlighted}
      component='div'
      style={{
        fontWeight: isSelected ? 500 : 400
      }}
    >
      {suggestion.stem}
    </MenuItem>
  );
}

const SearchRenderer = ({
  inputValue,
  selectedItem,
  highlightedIndex,
  getItemProps,
  wantedLangs
}) => {
  const { loading, error, data } = useQuery(
    GET_LEMMAS,
    {
      variables: {
        inputValue,
        wantedLangs
      }
    });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;
  if (!data) return <p>Not found</p>;

  const stemList = data.stemList.edges.map(edge => edge.node);
  return (
    <div>
      {stemList.map((item, index) => (
        <MenuItem
          {...getItemProps({
            key: index,
            item,
            index,
            isActive: highlightedIndex === index,
            isSelected: selectedItem === item.stem
          })}
        >
          {item.stem}
        </MenuItem>
      ))}
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: 250
  },
  container: {
    flexGrow: 1,
    position: 'relative'
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0
  },
  chip: {
    margin: theme.spacing(0.5, 0.25)
  },
  inputRoot: {
    flexWrap: 'wrap'
  },
  inputInput: {
    width: 'auto',
    flexGrow: 1
  },
  divider: {
    height: theme.spacing(2)
  }
}));

const Searcher = ({
  onInputChange
}) => {
  const [articlePath, setArticlePath] = useState('');
  const classes = useStyles();
  const [cookies] = useCookies(['wantedLangs']);

  const handleChange = (selectedItem) => {
    selectedItem
    ? setArticlePath(`/article/${selectedItem.stem}`)
    : setArticlePath(`/`);
  };

  return (
    <Downshift
      onSelect={handleChange}
      itemToString={item => (item ? item.stem : '')}>
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        highlightedIndex,
        inputValue,
        isOpen,
        selectedItem
      }) => {
        const { onBlur, onFocus, ...inputProps } = getInputProps({
          placeholder: 'Search for a word'
        });
        return (
          <div>
            {renderInput({
              fullWidth: true,
              classes,
              InputLabelProps: getLabelProps({ shrink: true }),
              InputProps: { onBlur, onFocus },
              inputProps
            })}

            {isOpen ? (
              <Paper
                className={classes.paper}>
                <SearchRenderer {...{
                  inputValue,
                  selectedItem,
                  highlightedIndex,
                  getItemProps
                }} wantedLangs={cookies.wantedLangs} />
              </Paper>
            ) :
              null
            }
            {articlePath ?
              <Redirect to={articlePath} push /> :
              null
            }
          </div>

        );
      }}
    </Downshift>
  );
};

export default Searcher;

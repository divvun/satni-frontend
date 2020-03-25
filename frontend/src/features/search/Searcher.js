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
import gql from 'graphql-tag';
import { Query } from '@apollo/react-components';

const GET_LEMMAS = gql`
  query AllLemmas($inputValue: String!) {
    lemmas (search: $inputValue) {
      id
      lemma
    }
  }
`;

const SearchRenderer = ({
  inputValue,
  selectedItem,
  highlightedIndex,
  getItemProps
}) => (
  <Query
    query={GET_LEMMAS}
    variables={{
      inputValue
    }}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error {error.message}</p>;
      if (!data) return <p>Not found</p>;

      return (
        <div>
          {data.lemmas.map((item, index) => (
            <Item
              {...getItemProps({
                key: index,
                item,
                index,
                isActive: highlightedIndex === index,
                isSelected: selectedItem === item.lemma
              })}
          >
              {item.lemma}
            </Item>
        ))}
        </div>
      );
    }}
  </Query>
);

const Searcher = ({
  onInputChange
}) => {
  const [articlePath, setArticlePath] = useState('');

  const handleChange = (selectedItem) => {
    selectedItem
    ? setArticlePath(`/article/${selectedItem.lemma}`)
    : setArticlePath(`/`);
  };

  return (
    <Downshift
      onSelect={handleChange}
      itemToString={item => (item ? item.lemma : '')}>
      {({
        getInputProps,
        getToggleButtonProps,
        getItemProps,
        isOpen,
        toggleMenu,
        clearSelection,
        selectedItem,
        inputValue,
        highlightedIndex
      }) => {
        return (
          <div className={css({ margin: 'auto' })}>
            <div
              className={css({
                paddingRight: '1.75em',
                position: 'relative'
              })}>
              <Input
                {...getInputProps({
                  placeholder: 'Search for a word',
                  isOpen,
                  autoFocus: true
                }
              )}
            />
              {selectedItem
              ? <ControllerButton
                css={{ paddingTop: 4 }}
                onClick={clearSelection}
                aria-label='clear selection'
                >
                <XIcon />
              </ControllerButton>
              : <ControllerButton {...getToggleButtonProps()}>
                <ArrowIcon isOpen={isOpen} />
              </ControllerButton>}
            </div>
            {isOpen ?
              <SearchRenderer {...{
                inputValue,
                selectedItem,
                highlightedIndex,
                getItemProps
              }} /> :
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

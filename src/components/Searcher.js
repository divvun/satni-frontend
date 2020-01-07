import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Downshift from 'downshift';
import { css } from 'react-emotion';
import {
  Menu,
  ControllerButton,
  Input,
  Item,
  ArrowIcon,
  XIcon
} from 'components';
import { fetchSearchItems } from 'features/search/searchSlice';

const SearchRenderer = ({
  inputValue,
  selectedItem,
  highlightedIndex,
  getItemProps
}) => {
  const search = useSelector(state => state['search']);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearchItems(inputValue));
  }, [dispatch, inputValue]);

  if (search.error) {
    return <div><b>{inputValue}</b> is not found in this database.</div>;
  }

  if (search.isFetching) {
    return <div>Fetching search results …</div>;
  }

  if (search[inputValue]) {
    return (
      <Menu>
        {search[inputValue]
        .map((item, index) => (
          <Item
            {...getItemProps({
              key: index,
              item,
              index,
              isActive: highlightedIndex === index,
              isSelected: selectedItem === item
            })}
          >
            {item}
          </Item>
        ))}
      </Menu>
    );
  }

  return null;
};

const Searcher = ({
  onInputChange
}) => {
  const [articlePath, setArticlePath] = useState('');

  const handleChange = (selectedItem) => {
    selectedItem
    ? setArticlePath(`/article/${selectedItem}`)
    : setArticlePath(`/`);
  };

  return (
    <Downshift
      onSelect={handleChange} >
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
                  isOpen
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

import React from 'react';
import { connect } from 'react-redux';
import Downshift from 'downshift';
import PropTypes from 'prop-types';
import { inHTMLData } from 'xss-filters';
import { css } from 'react-emotion';
import { debounce } from 'throttle-debounce';
import {
  Menu,
  ControllerButton,
  Input,
  Item,
  ArrowIcon,
  XIcon
} from '../components';
import {
  selectKey,
  selectLemma,
  fetchArticlesIfNeeded,
  fetchItemsIfNeeded
} from '../actions';

const Searcher = ({onSelect, onInputChange, search}) => (
  <Downshift
    onSelect={selection => onSelect(selection)} >
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
                onChange: event => {
                  const value = inHTMLData(event.target.value.toLowerCase());
                  console.log(value);
                  if (!value || value.length < 3) {
                    return;
                  }
                  onInputChange(value);
                }
              })}
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
          {isOpen ? (
            <div>
              {search.isSearching ? (
                <div>loading …</div>
                  ) : <Menu>
                    {search.resultItems
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
                  </Menu>}
            </div>
                  ) : null}
        </div>
      );
    }}
  </Downshift>
);

Searcher.propTypes = {
  onSelect: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  search: PropTypes.object.isRequired
};

const mapStateToProps = (state) => (
  { search: state.search}
);

const mapDispatchToProps = (dispatch) => (
  {
    onSelect: (nextLemma) => {
      dispatch(selectLemma(nextLemma));
      dispatch(fetchArticlesIfNeeded(nextLemma));
    },
    onInputChange: (key) => {
      dispatch(selectKey(key));
      debounce(300, dispatch(fetchItemsIfNeeded(key)));
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Searcher);

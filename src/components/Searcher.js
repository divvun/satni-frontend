import React, { Component } from 'react';
import Downshift from 'downshift';
import PropTypes from 'prop-types';
import { Set } from 'immutable';
import { inHTMLData } from 'xss-filters'
import { css } from 'glamor';
import { Div } from 'glamorous';
import {
  Menu,
  ControllerButton,
  Input,
  Item,
  ArrowIcon,
  XIcon
} from '../components';

export default class Searcher extends Component {
  setting = value => {
    return Set([...this.props.search.searchItems]
    .map(item => item.term))
    .filter(term => term.toLowerCase().startsWith(value))
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
  }

  render () {
    return (
      <Downshift
        onSelect={selection => this.props.onSelect(selection)} >
        {({
          getInputProps,
          getToggleButtonProps,
          getItemProps,
          isOpen,
          toggleMenu,
          clearSelection,
          selectedItem,
          inputValue,
          highlightedIndex,
        }) => {
          return (
            <div className={css({ margin: 'auto' })}>
            <Div position="relative" css={{ paddingRight: '1.75em' }}>
              <Input
              {...getInputProps({
                placeholder: 'Search for a word',
                isOpen,
                onChange: event => {
                  const value = inHTMLData(event.target.value.toLowerCase());
                  console.log(value)
                  if (!value || value.length < 3) {
                    return;
                  }
                  this.props.onInputChange(value);
                }
              })}
              />
              {selectedItem
                ? <ControllerButton
                    css={{ paddingTop: 4 }}
                    onClick={clearSelection}
                    aria-label="clear selection"
                  >
                    <XIcon />
                  </ControllerButton>
                : <ControllerButton {...getToggleButtonProps()}>
                    <ArrowIcon isOpen={isOpen} />
                  </ControllerButton>}
              </Div>
              {isOpen ? (
                <div>
                  {this.props.search.isSearching ? (
                    <div>loading …</div>
                  ) : <Menu>
                  {this.setting(inputValue.toLowerCase())
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
  }
}

Searcher.propTypes = {
  onSelect: PropTypes.func.isRequired
};

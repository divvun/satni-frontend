import React, { Component } from 'react';
import Downshift from 'downshift';
import PropTypes from 'prop-types';
import { Set } from 'immutable';

export default class Searcher extends Component {
  setting = value => {
    return Set([...this.props.search.searchItems]
    .map(item => item.term))
    .filter(term => term.toLowerCase().startsWith(value))
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
  }

  render () {
    const { onSelect, onInputChange, search } = this.props;
    return (
      <Downshift
        onSelect={selection => onSelect(selection)} >
        {({
          selectedItem,
          getInputProps,
          getItemProps,
          getLabelProps,
          highlightedIndex,
          isOpen,
          inputValue
        }) => {
          return (
            <div>
              <label {...getLabelProps()}>Enter a word</label>
              <input {...getInputProps({
                onChange: event => {
                  const value = event.target.value;
                  console.log(value);
                  console.log(this.props.onInputChange);
                  if (!value) {
                    return;
                  }
                  this.props.onInputChange(value);
                }
              })} />
              {isOpen ? (
                <div>
                  <hr />
                  {[...this.props.search.usedSearchKeys].join(', ')}<br />
                  size of search: {this.props.search.searchItems.size} <br />
                  {this.props.search.isSearching ? (
                    <div>loading …</div>
                  ) : <div>{this.setting(inputValue)
                    .map((item, index) => (
                      <div
                        {...getItemProps({
                          key: index,
                          item,
                          style: {
                        backgroundColor: highlightedIndex === index
                          ? 'lightgray'
                          : 'white',
                        fontWeight: selectedItem === item
                          ? 'bold'
                          : 'normal'
                          },
                        })}
                      >
                        {item}
                      </div>
                    ))}</div>}
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

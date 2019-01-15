import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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
  fetchItemsIfNeeded
} from '../actions';

class Searcher extends Component {
  constructor (props) {
    super(props);

    this.state = {
      articlepath: ''
    };
  }

  handleChange = (selectedItem) => {
    this.setState({articlepath: `/article/${selectedItem}`})
  };

  render () {
    const {onInputChange, search} = this.props;
    return (
      <Downshift
        onSelect={this.handleChange} >
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
              {isOpen ?
                <div>
                  {search.isSearching ?
                    <div>Fetching search results …</div> :
                    <Menu>
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
                    </Menu>
                  }
                </div> :
                null
              }
              {this.state.articlepath ?
                <Redirect to={this.state.articlepath} push={true}/> :
                null
              }
            </div>

          );
        }}
      </Downshift>
    );
  }
}

Searcher.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  search: PropTypes.object.isRequired
};

const mapStateToProps = (state) => (
  { search: state.search }
);

const mapDispatchToProps = (dispatch) => (
  {
    onInputChange: (key) => {
      dispatch(selectKey(key));
      debounce(300, dispatch(fetchItemsIfNeeded(key)));
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Searcher);

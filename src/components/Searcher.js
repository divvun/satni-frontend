import React, { Component } from 'react';
import Downshift from 'downshift';
import PropTypes from 'prop-types';

const original = [
  {
    'lang': 'sme',
    'langs': 'fin',
    'dict': 'smefin',
    'term': 'juolgadit'
  },
  {
    'lang': 'sme',
    'langs': 'fin',
    'dict': 'smefin',
    'term': 'juolgat'
  },
  {
    'lang': 'sme',
    'langs': [
      'sme',
      'nor',
      'fin',
      'swe'
    ],
    'dict': 'SD-terms',
    'term': 'juolgebealgi'
  },
  {
    'lang': 'sme',
    'langs': 'nob',
    'dict': 'smenob',
    'term': 'juolgebealgi'
  },
  {
    'lang': null,
    'langs': [
      'nb',
      'se'
    ],
    'dict': 'termwiki',
    'term': 'juolgebáddi'
  },
  {
    'lang': 'sme',
    'langs': 'nob',
    'dict': 'smenob',
    'term': 'juolgedeahkki'
  },
  {
    'lang': 'sme',
    'langs': 'nob',
    'dict': 'smenob',
    'term': 'juolgedikšun'
  },
  {
    'lang': 'sme',
    'langs': [
      'sme',
      'nor',
      'fin',
      'swe'
    ],
    'dict': 'SD-terms',
    'term': 'juolgedikšun'
  },
  {
    'lang': null,
    'langs': [
      'fi',
      'nb',
      'se',
      'sv'
    ],
    'dict': 'termwiki',
    'term': 'juolgedoalan'
  },
  {
    'lang': 'sme',
    'langs': [
      'sme',
      'nor',
      'fin',
      'swe'
    ],
    'dict': 'SD-terms',
    'term': 'juolgedoalan'
  },
  {
    'lang': 'sme',
    'langs': 'nob',
    'dict': 'smenob',
    'term': 'juolgegoazan'
  },
  {
    'lang': null,
    'langs': [
      'fi',
      'nb',
      'se',
      'sv'
    ],
    'dict': 'termwiki',
    'term': 'juolgegoazan'
  },
  {
    'lang': 'sme',
    'langs': [
      'sme',
      'nor',
      'fin',
      'swe'
    ],
    'dict': 'SD-terms',
    'term': 'juolgegoazan'
  },
  {
    'lang': 'sme',
    'langs': 'nob',
    'dict': 'smenob',
    'term': 'juolgegottur'
  },
  {
    'lang': 'sme',
    'langs': [
      'sme',
      'nor',
      'lat'
    ],
    'dict': 'SD-terms',
    'term': 'juolgegávva'
  },
  {
    'lang': 'sme',
    'langs': [
      'sme',
      'nor',
      'fin',
      'swe'
    ],
    'dict': 'SD-terms',
    'term': 'juolgelađas'
  },
  {
    'lang': 'sme',
    'langs': 'nob',
    'dict': 'smenob',
    'term': 'juolgelađas'
  },
  {
    'lang': null,
    'langs': [
      'fi',
      'nb',
      'se',
      'sv'
    ],
    'dict': 'termwiki',
    'term': 'juolgelađas'
  },
  {
    'lang': 'sme',
    'langs': 'smn',
    'dict': 'smesmn',
    'term': 'juolgeluš'
  },
  {
    'lang': 'sme',
    'langs': 'fin',
    'dict': 'smefin',
    'term': 'juolgeluš'
  },
  {
    'lang': 'sme',
    'langs': [
      'sme',
      'nor',
      'fin',
      'sma',
      'sme',
      'smj',
      'swe'
    ],
    'dict': 'SD-terms',
    'term': 'juolgeláhpi'
  },
  {
    'lang': null,
    'langs': [
      'sma',
      'sv',
      'smj',
      'se',
      'smn'
    ],
    'dict': 'termwiki',
    'term': 'juolgeláhpi'
  },
  {
    'lang': 'sme',
    'langs': 'nob',
    'dict': 'smenob',
    'term': 'juolgeláhpi'
  },
  {
    'lang': null,
    'langs': [
      'fi',
      'nb',
      'se',
      'sv'
    ],
    'dict': 'termwiki',
    'term': 'juolgemihttu'
  },
  {
    'lang': 'sme',
    'langs': [
      'sme',
      'nor',
      'fin',
      'swe'
    ],
    'dict': 'SD-terms',
    'term': 'juolgemihttu'
  },
  {
    'lang': 'sme',
    'langs': 'nob',
    'dict': 'smenob',
    'term': 'juolgemihttu'
  },
  {
    'lang': 'sme',
    'langs': [
      'sme',
      'nor'
    ],
    'dict': 'SD-terms',
    'term': 'juolgemátta'
  },
  {
    'lang': null,
    'langs': [
      'nb',
      'se'
    ],
    'dict': 'termwiki',
    'term': 'juolgemátta'
  },
  {
    'lang': 'sme',
    'langs': 'nob',
    'dict': 'smenob',
    'term': 'juolgenohta'
  },
  {
    'lang': 'sme',
    'langs': 'nob',
    'dict': 'smenob',
    'term': 'juolgespábba'
  },
  {
    'lang': 'sme',
    'langs': 'nob',
    'dict': 'smenob',
    'term': 'juolgesteažžu'
  },
  {
    'lang': null,
    'langs': [
      'fi',
      'nb',
      'se',
      'sv'
    ],
    'dict': 'termwiki',
    'term': 'juolgesteažžu'
  },
  {
    'lang': 'sme',
    'langs': [
      'sme',
      'nor',
      'fin',
      'swe'
    ],
    'dict': 'SD-terms',
    'term': 'juolgesteažžu'
  },
  {
    'lang': 'sme',
    'langs': [
      'sme',
      'nor',
      'fin',
      'swe'
    ],
    'dict': 'SD-terms',
    'term': 'juolgestielgu'
  },
  {
    'lang': null,
    'langs': [
      'fi',
      'nb',
      'se',
      'sv'
    ],
    'dict': 'termwiki',
    'term': 'juolgestielgu'
  },
  {
    'lang': 'sme',
    'langs': [
      'sme',
      'nor',
      'fin',
      'swe'
    ],
    'dict': 'SD-terms',
    'term': 'juolgestielka'
  },
  {
    'lang': 'sme',
    'langs': [
      'sme',
      'nor',
      'fin',
      'swe'
    ],
    'dict': 'SD-terms',
    'term': 'juolgestielku'
  },
  {
    'lang': 'sme',
    'langs': [
      'sme',
      'nor',
      'fin',
      'swe'
    ],
    'dict': 'SD-terms',
    'term': 'juolgestážžu'
  },
  {
    'lang': null,
    'langs': [
      'fi',
      'nb',
      'se',
      'sv'
    ],
    'dict': 'termwiki',
    'term': 'juolgesugus'
  },
  {
    'lang': 'sme',
    'langs': [
      'sme',
      'nor',
      'fin',
      'swe'
    ],
    'dict': 'SD-terms',
    'term': 'juolgesugus'
  },
  {
    'lang': 'sme',
    'langs': 'fin',
    'dict': 'smefin',
    'term': 'juolgesuorbma'
  },
  {
    'lang': 'sme',
    'langs': [
      'sme',
      'nor',
      'smj'
    ],
    'dict': 'SD-terms',
    'term': 'juolgesuorbma'
  },
  {
    'lang': null,
    'langs': [
      'nb',
      'se',
      'smn'
    ],
    'dict': 'termwiki',
    'term': 'juolgesuorbma'
  },
  {
    'lang': 'sme',
    'langs': 'smn',
    'dict': 'smesmn',
    'term': 'juolgesuorbma'
  },
  {
    'lang': 'sme',
    'langs': 'nob',
    'dict': 'smenob',
    'term': 'juolgesuorbma'
  },
  {
    'lang': 'sme',
    'langs': 'nob',
    'dict': 'smenob',
    'term': 'juolgesuorri'
  },
  {
    'lang': 'smj',
    'langs': [
      'sme',
      'nor',
      'smj'
    ],
    'dict': 'SD-terms',
    'term': 'juolgetjuvde'
  },
  {
    'lang': 'sme',
    'langs': [
      'sme',
      'nor',
      'fin',
      'swe'
    ],
    'dict': 'SD-terms',
    'term': 'juolgevuloš cokkaldat'
  },
  {
    'lang': null,
    'langs': [
      'fi',
      'nb',
      'se',
      'sv'
    ],
    'dict': 'termwiki',
    'term': 'juolgevuloš cokkaldat'
  },
  {
    'lang': 'sme',
    'langs': 'nob',
    'dict': 'smenob',
    'term': 'juolgevuođđu'
  },
  {
    'lang': null,
    'langs': [
      'nb',
      'se',
      'smn',
      'fi'
    ],
    'dict': 'termwiki',
    'term': 'juolgevuođđu'
  },
  {
    'lang': 'sme',
    'langs': [
      'sme',
      'nor'
    ],
    'dict': 'SD-terms',
    'term': 'juolgevuođđu'
  },
  {
    'lang': 'sme',
    'langs': 'nob',
    'dict': 'smenob',
    'term': 'juolgečelččen'
  },
  {
    'lang': 'sme',
    'langs': [
      'sme',
      'nor',
      'fin',
      'swe'
    ],
    'dict': 'SD-terms',
    'term': 'juolgečelččen'
  },
  {
    'lang': null,
    'langs': [
      'sv',
      'fi',
      'smj',
      'nb',
      'se',
      'sma',
      'smn'
    ],
    'dict': 'termwiki',
    'term': 'juolgge'
  },
  {
    'lang': 'smj',
    'langs': [
      'sme',
      'nor',
      'smj',
      'sma',
      'fin',
      'swe'
    ],
    'dict': 'SD-terms',
    'term': 'juolgge'
  },
  {
    'lang': 'sme',
    'langs': 'fin',
    'dict': 'smefin',
    'term': 'juolggeheapme'
  },
  {
    'lang': 'sme',
    'langs': 'nob',
    'dict': 'smenob',
    'term': 'juolggeheapme'
  },
  {
    'lang': 'sme',
    'langs': 'smn',
    'dict': 'smesmn',
    'term': 'juolggeheapme'
  },
  {
    'lang': 'sme',
    'langs': 'fin',
    'dict': 'smefin',
    'term': 'juolggehuvvat'
  },
  {
    'lang': null,
    'langs': [
      'smj',
      'nb',
      'sv'
    ],
    'dict': 'termwiki',
    'term': 'juolggerábun'
  },
  {
    'lang': null,
    'langs': [
      'nb',
      'smj',
      'sv',
      'fi',
      'se'
    ],
    'dict': 'termwiki',
    'term': 'juolggesuojalm'
  },
  {
    'lang': 'smj',
    'langs': [
      'sma',
      'sme',
      'smj',
      'swe'
    ],
    'dict': 'SD-terms',
    'term': 'juolggevuodo'
  },
  {
    'lang': null,
    'langs': [
      'sma',
      'sv',
      'smj',
      'se',
      'smn'
    ],
    'dict': 'termwiki',
    'term': 'juolggevuodo'
  },
  {
    'lang': 'sme',
    'langs': [
      'sme',
      'nor',
      'fin'
    ],
    'dict': 'SD-terms',
    'term': 'juolggit'
  },
  {
    'lang': 'sme',
    'langs': [
      'sme',
      'nor',
      'fin',
      'swe'
    ],
    'dict': 'SD-terms',
    'term': 'juolgguštit'
  },
  {
    'lang': 'sme',
    'langs': 'nob',
    'dict': 'smenob',
    'term': 'juolgguštit'
  },
  {
    'lang': null,
    'langs': [
      'fi',
      'se',
      'sv'
    ],
    'dict': 'termwiki',
    'term': 'juolgguštit'
  },
  {
    'lang': 'sme',
    'langs': 'fin',
    'dict': 'smefin',
    'term': 'juolggálaš'
  },
  {
    'lang': 'sme',
    'langs': 'fin',
    'dict': 'smefin',
    'term': 'juolgi'
  },
  {
    'lang': 'sme',
    'langs': [
      'sme',
      'nor',
      'sme',
      'nor',
      'smj',
      'sma',
      'fin',
      'swe'
    ],
    'dict': 'SD-terms',
    'term': 'juolgi'
  },
  {
    'lang': null,
    'langs': [
      'sv',
      'fi',
      'smj',
      'nb',
      'se',
      'sma',
      'smn'
    ],
    'dict': 'termwiki',
    'term': 'juolgi'
  },
  {
    'lang': 'sme',
    'langs': 'nob',
    'dict': 'smenob',
    'term': 'juolgi'
  },
  {
    'lang': 'sme',
    'langs': 'smn',
    'dict': 'smesmn',
    'term': 'juolgi'
  }
];

const items = [...new Set(original.map(item => item.term))];

export default class Searcher extends Component {
  render () {
    const { onChange } = this.props;
    return (
      <Downshift
        onChange={selection => onChange(selection)}
        itemToString={item => (item ? item : '')} >
        {({
      getInputProps,
      getItemProps,
      getLabelProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem
    }) => (
      <div>
        <label {...getLabelProps()}>Enter a word</label>
        <input {...getInputProps()} />
        {isOpen ? (
          <div>
            {items
              .filter(item => !inputValue || item.includes(inputValue))
              .map((item, index) => (
                <div
                  {...getItemProps({
                    key: item,
                    index,
                    item,
                    style: {
                      backgroundColor: highlightedIndex === index
                        ? 'lightgray'
                        : 'white',
                      fontWeight: selectedItem === item
                        ? 'bold'
                        : 'normal'
                    }
                  })}
                >
                  {item}
                </div>
              ))}
          </div>
        ) : null}
      </div>
    )}
      </Downshift>
    );
  }
}

Searcher.propTypes = {
  onChange: PropTypes.func.isRequired
};

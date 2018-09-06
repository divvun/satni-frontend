import {removeDuplicates, toJson} from './utils';

it('Turn text in to JSON', () => {
  const gotQuery = '{{ "term" : "juolahtaa mieleen", "dict" : "finsmn", "lang" : "fin", "langs" : "smn" }}';
  const wantQuery = [{ 'term': 'juolahtaa mieleen', 'dict': 'finsmn', 'lang': 'fin', 'langs': 'smn' }];

  expect(toJson(gotQuery)).toEqual(wantQuery);
});

it('Peels the duplicate term away', () => {
  const gotAndro = [
    {
      'tg': [
        {
          'xml:lang': 'en',
          't': {
            '#text': 'androgyne',
            'pos': 'A'
          }
        }
      ],
      'dict': 'termwiki',
      'termwikiref': 'Servodatdieđa:androgyna'
    },
    {
      'tg': [
        {
          'xml:lang': 'en',
          't': {
            '#text': 'androgyne',
            'pos': 'A'
          }
        }
      ],
      'dict': 'termwiki',
      'termwikiref': 'Servodatdieđa:androgyna'
    }
  ];

  const halfAndro = [
    {
      'tg': [
        {
          'xml:lang': 'en',
          't': {
            '#text': 'androgyne',
            'pos': 'A'
          }
        }
      ],
      'dict': 'termwiki',
      'termwikiref': 'Servodatdieđa:androgyna'
    }
  ];

  expect(removeDuplicates(gotAndro)).toEqual(halfAndro);
});

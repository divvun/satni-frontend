import {
  removeDuplicates,
  toJson,
  translationStems,
  translationExamples,
  normaliseDict,
  normaliseTermWiki,
  normaliseSDTerm,
  normaliseNounParadigm,
  normaliseAdjParadigm
} from './utils';
import {
  resultSDTerm,
  resultDictWithExamples,
  resultDictWithoutExamples,
  resultTermWiki,
  resultSmaNounParadigm,
  resultSmeNounParadigm,
  resultSmjNounParadigm,
  resultSmnNounParadigm,
  resultSmeAdjParadigm
} from './utils_testdata';

describe('Massage data from eXist', () => {
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

  it('Turns dict tg where t is an object into an array of stems', () => {
    const tgElement = {
      't': {
        'pos': 'N',
        '#text': 'jalka'
      },
      'xml:lang': 'fin',
      '#text': [
        '\n            ',
        '\n         '
      ]
    };

    expect(translationStems(tgElement))
  .toEqual([{'lemma': 'jalka', 'lang': 'fin', 'pos': 'N'}]);
  });

  it('Turns dict tg where t is an array into an array of stems', () => {
    const tgElement = {
      't': [
        {
          'pos': 'N',
          '#text': 'fot'
        },
        {
          'pos': 'N',
          '#text': 'bein'
        }
      ],
      'xml:lang': 'nob',
      '#text': [
        '\n            ',
        '\n            ',
        '\n         '
      ]
    };

    expect(translationStems(tgElement))
  .toEqual([{'lemma': 'fot', 'lang': 'nob', 'pos': 'N'},
            {'lemma': 'bein', 'lang': 'nob', 'pos': 'N'}]);
  });

  it('Turns dict xg where xg is an object into an array of examples', () => {
    const xgElement = {
      'x': 'original',
      'xt': 'translation'
    };

    expect(translationExamples(xgElement))
  .toEqual([{'x': 'original', 'xt': 'translation'}]);
  });

  it('Turns dict xg where xg is an array into an array of examples', () => {
    const xgElement = [
      {
        'x': 'orig1',
        'xt': 'trans1'
      },
      {
        'x': 'orig2',
        'xt': 'trans2'
      }
    ];

    expect(translationExamples(xgElement))
  .toEqual([{'x': 'orig1', 'xt': 'trans1'},
            {'x': 'orig2', 'xt': 'trans2'}]);
  });

  it('Normalise a dict article with examples into an object', () => {
    const existDict = {
      'expl': null,
      'term': 'oainnáhus',
      'def': null,
      'pos': 'N',
      'status': null,
      'termwikiref': '-1',
      'dict': 'smenob',
      'tg': {
        't': {
          '#text': 'syn',
          'pos': 'N'
        },
        'xg': [
          {
            'xt': 'Jeg prøver å vaske vekk det triste synet fra øynene mine, men det følger med likevel.',
            'x': 'Iskkan sihkkut váivves oainnáhusa iežan čalmmiin, muhto dat liikká čuovvu mu.',
            '#text': [
              '\n               ',
              '\n               ',
              '\n            '
            ]
          },
          {
            'xt': 'Jeg er det eneste hvite mennesket og selvfølgelig et syn.',
            'x': 'Lean áidna vilges olmmoš ja dieđusge oainnáhus.',
            '#text': [
              '\n               ',
              '\n               ',
              '\n            '
            ]
          }
        ],
        '#text': [
          '\n            ',
          '\n            ',
          '\n            ',
          '\n         '
        ],
        'xml:lang': 'nob'
      },
      'lang': 'sme'
    };

    expect(normaliseDict(existDict)).toEqual(resultDictWithExamples);
  });

  it('Normalise a dict article without examples into an object', () => {
    const existDict = {
      'status': null,
      'pos': 'N',
      'dict': 'smefin',
      'tg': {
        't': {
          'pos': 'N',
          '#text': 'kalvoin verkonkudonnassa'
        },
        'xml:lang': 'fin',
        '#text': [
          '\n            ',
          '\n         '
        ]
      },
      'termwikiref': '-1',
      'expl': null,
      'term': 'guolladat',
      'lang': 'sme',
      'def': null
    };

    expect(normaliseDict(existDict)).toEqual(resultDictWithoutExamples);
  });

  it('Normalise a termwiki article into an object', () => {
    const termWiki = {
      'termwikiref': 'Servodatdieđa:androgyna',
      'expl': null,
      'pos': 'N',
      'category': 'Servodatdieđa',
      'def': null,
      'tg': [
        {
          '#text': [
            '\n      ',
            '\n    '
          ],
          'xml:lang': 'en',
          't': {
            '#text': '\n        androgyne\n\n      ',
            'pos': 'N'
          }
        },
        {
          '#text': [
            '\n      ',
            '\n    '
          ],
          'xml:lang': 'smn',
          't': {
            '#text': '\n        androgynlâšvuotâ\n\n      ',
            'pos': 'A'
          }
        },
        {
          '#text': [
            '\n      ',
            '\n    '
          ],
          'xml:lang': 'smn',
          't': '\n        androgynvuotâ\n\n      '
        },
        {
          '#text': [
            '\n      ',
            '\n    '
          ],
          'xml:lang': 'se',
          't': {
            '#text': '\n        androgyna\n\n      ',
            'pos': 'N'
          }
        },
        {
          '#text': [
            '\n      ',
            '\n    '
          ],
          'xml:lang': 'fi',
          't': {
            '#text': '\n        androgyyni\n\n      ',
            'pos': 'N'
          }
        },
        {
          '#text': [
            '\n      ',
            '\n    '
          ],
          'xml:lang': 'smn',
          't': {
            '#text': '\n        androgyn\n\n      ',
            'pos': 'N'
          }
        },
        {
          '#text': [
            '\n      ',
            '\n    '
          ],
          'xml:lang': 'nb',
          't': {
            '#text': '\n        \n\n      ',
            'pos': 'N'
          }
        },
        {
          '#text': [
            '\n      ',
            '\n    '
          ],
          'xml:lang': 'sv',
          't': {
            '#text': '\n        \n\n      ',
            'pos': 'N'
          }
        }
      ],
      'term': 'androgyn',
      'status': null,
      'dict': 'termwiki'
    };

    expect(normaliseTermWiki(termWiki)).toEqual(resultTermWiki);
  });

  it('Normalise a SDTerm article into an object', () => {
    const SDTerm = {
      'status': null,
      'pos': 'S',
      'dict': 'SD-terms',
      'tg': [
        {
          't': [
            'gođđinmuorra',
            'guolládat',
            'guolla'
          ],
          'xml:lang': 'sme',
          '#text': [
            '\n            ',
            '\n        '
          ]
        },
        {
          't': 'målepinne',
          'xml:lang': 'nor',
          '#text': [
            '\n            ',
            '\n        '
          ]
        }
      ],
      'termwikiref': '6035',
      'expl': null,
      'term': 'guolladat',
      'lang': 'sme',
      'def': null
    };

    expect(normaliseSDTerm(SDTerm)).toEqual(resultSDTerm);
  });
});

describe('Massage noun data from the cgi-bin paradigm generator', () => {
  it('Turn smn nouns html into something usable', () => {
    const html = `<html>
      <head>
        <meta http-equiv="Content-type" content="text/html; charset=UTF-8">
        <title>Generating Inari Saami inflectional paradigms</title>
      </head>
      <body>
        <a href="http://uit.no/">The University of Troms&oslash; ></a>
        <a href="http://giellatekno.uit.no/">Giellatekno ></a>
        <br></br>
        <p></p>
        <form action="http://gtweb.uit.no/cgi-bin/smi/smi.cgi" method="get" name="form3" target="_self">
          <table border="0" cellpadding="2" cellspacing="1">
            <tr>
              <td>
                <input name="text" size="50" type="text"></input>
                <select name="pos">
                  <option value="Any">Any</option>
                  <option value="N">Noun</option>
                  <option value="V">Verb</option>
                  <option value="Pron">Pronoun</option>
                  <option value="A">Adjective</option>
                  <option value="Adv">Adverb</option>
                  <option value="Num">Numeral</option>
                </select>
              </td>
              <td>
                <a href="http://giellatekno.uit.no/">
                  <img src="http://giellatekno.uit.no/images/project.png" style="border: none;" title="Giellatekno"></img>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <input name="mode" type="radio" value="minimal">Give minimal paradigm</input>
                <br></br>
                <input checked="1" name="mode" type="radio" value="standard">Standard</input>
                <br></br>
                <input name="mode" type="radio" value="full">Full paradigm</input>
                <br></br>
                <input name="lang" type="hidden" value="smn"></input>
                <input name="plang" type="hidden" value="eng"></input>
                <input name="action" type="hidden" value="paradigm"></input>
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" value="Send form"></input>
                <input type="reset" value="Reset form"></input>
              </td>
            </tr>
          </table>
        </form>
        <p>
          <b>kyeli: Noun (N)</b>
        </p>
        <table>
          <tr>
            <td>
              <font color="white">kyeli</font>
            </td>
            <td>N Sg Nom</td>
            <td>
              <font color="red">kyeli</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">kyeli</font>
            </td>
            <td>N Sg Gen</td>
            <td>
              <font color="red">kyele</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">kyeli</font>
            </td>
            <td>N Sg Acc</td>
            <td>
              <font color="red">kyele</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">kyeli</font>
            </td>
            <td>N Sg Ill</td>
            <td>
              <font color="red">kuálán</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">kyeli</font>
            </td>
            <td>N Sg Loc</td>
            <td>
              <font color="red">kyeleest</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">kyeli</font>
            </td>
            <td>N Sg Com</td>
            <td>
              <font color="red">kuolijn</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">kyeli</font>
            </td>
            <td>N Sg Abe</td>
            <td>
              <font color="red">kyelettáá</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">kyeli</font>
            </td>
            <td>N Pl Nom</td>
            <td>
              <font color="red">kyeleh</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">kyeli</font>
            </td>
            <td>N Pl Gen</td>
            <td>
              <font color="red">kuolij</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">kyeli</font>
            </td>
            <td>N Pl Acc</td>
            <td>
              <font color="red">kuolijd</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">kyeli</font>
            </td>
            <td>N Pl Ill</td>
            <td>
              <font color="red">kuolijd</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">kyeli</font>
            </td>
            <td>N Pl Loc</td>
            <td>
              <font color="red">kuolijn</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">kyeli</font>
            </td>
            <td>N Pl Com</td>
            <td>
              <font color="red">kuolijguin</font>
            </td>
            <td>
              <font color="red">kuolijgijn</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">kyeli</font>
            </td>
            <td>N Pl Abe</td>
            <td>
              <font color="red">kuolijttáá</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">kyeli</font>
            </td>
            <td>N Par</td>
            <td>
              <font color="red">kyellid</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">kyeli</font>
            </td>
            <td>N Ess</td>
            <td>
              <font color="red">kyellin</font>
            </td>
          </tr>
        </table>
        <hr></hr>
        <p>
          <br></br>
          <a href="http://giellatekno.uit.no/doc/lang/sme/docu-mini-smi-grammartags.html">Morphological tags</a></p>
      </body>
    </html>
    `;

    expect(normaliseNounParadigm(html)).toEqual(resultSmnNounParadigm);
  });

  it('Turn sme nouns html into something usable', () => {
    const html = `<html>
      <head>
        <meta http-equiv="Content-type" content="text/html; charset=UTF-8">
        <title>Generating North Saami inflectional paradigms</title>
      </head>
      <body>
        <a href="http://uit.no/">The University of Troms&oslash; ></a>
        <a href="http://giellatekno.uit.no/">Giellatekno ></a>
        <br></br>
        <p></p>
        <form action="http://gtweb.uit.no/cgi-bin/smi/smi.cgi" method="get" name="form3" target="_self">
          <table border="0" cellpadding="2" cellspacing="1">
            <tr>
              <td>
                <input name="text" size="50" type="text"></input>
                <select name="pos">
                  <option value="Any">Any</option>
                  <option value="N">Noun</option>
                  <option value="V">Verb</option>
                  <option value="Pron">Pronoun</option>
                  <option value="A">Adjective</option>
                  <option value="Adv">Adverb</option>
                  <option value="Num">Numeral</option>
                </select>
              </td>
              <td>
                <a href="http://giellatekno.uit.no/">
                  <img src="http://giellatekno.uit.no/images/project.png" style="border: none;" title="Giellatekno"></img>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <input name="mode" type="radio" value="minimal">Give minimal paradigm</input>
                <br></br>
                <input checked="1" name="mode" type="radio" value="standard">Standard</input>
                <br></br>
                <input name="mode" type="radio" value="full">Full paradigm</input>
                <br></br>
                <input name="lang" type="hidden" value="sme"></input>
                <input name="plang" type="hidden" value="eng"></input>
                <input name="action" type="hidden" value="paradigm"></input>
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" value="Send form"></input>
                <input type="reset" value="Reset form"></input>
              </td>
            </tr>
          </table>
        </form>
        <p>
          <b>guolli: Noun (N)</b>
        </p>
      <table>
        <tr>
          <td>
            <font color="white">guolli</font>
          </td>
          <td>N Sg Nom</td>
          <td>
            <font color="red">guolli</font>
          </td>
        </tr>
        <tr>
          <td>
            <font color="white">guolli</font>
          </td>
          <td>N Sg Gen</td>
          <td>
            <font color="red">guole</font>
          </td>
          <td>
            <font color="red">guoli</font>
          </td>
        </tr>
        <tr>
          <td>
            <font color="white">guolli</font>
          </td>
          <td>N Sg Acc</td>
          <td>
            <font color="red">guoli</font>
          </td>
        </tr>
        <tr>
          <td>
            <font color="white">guolli</font>
          </td>
          <td>N Sg Ill</td>
          <td>
            <font color="red">guollái</font>
          </td>
        </tr>
        <tr>
          <td>
            <font color="white">guolli</font>
          </td>
          <td>N Sg Loc</td>
          <td>
            <font color="red">guolis</font>
          </td>
        </tr>
        <tr>
          <td>
            <font color="white">guolli</font>
          </td>
          <td>N Sg Com</td>
          <td>
            <font color="red">guliin</font>
          </td>
        </tr>
        <tr>
          <td>
            <font color="white">guolli</font>
          </td>
          <td>N Pl Nom</td>
          <td>
            <font color="red">guolit</font>
          </td>
        </tr>
        <tr>
          <td>
            <font color="white">guolli</font>
          </td>
          <td>N Pl Gen</td>
          <td>
            <font color="red">guliid</font>
          </td>
        </tr>
        <tr>
          <td>
            <font color="white">guolli</font>
          </td>
          <td>N Pl Acc</td>
          <td>
            <font color="red">guliid</font>
          </td>
        </tr>
        <tr>
          <td>
            <font color="white">guolli</font>
          </td>
          <td>N Pl Ill</td>
          <td>
            <font color="red">guliide</font>
          </td>
        </tr>
        <tr>
          <td>
            <font color="white">guolli</font>
            </td>
            <td>N Pl Loc</td>
            <td>
              <font color="red">guliin</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guolli</font>
            </td>
            <td>N Pl Com</td>
            <td>
              <font color="red">guliiguin</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guolli</font>
            </td>
            <td>N Ess</td>
            <td>
              <font color="red">guollin</font>
            </td>
          </tr>
        </table>
        <hr></hr>
        <p>
          <br></br>
          <a href="http://giellatekno.uit.no/doc/lang/sme/docu-mini-smi-grammartags.html">Morphological tags</a>
        </p>
      </body>
    </html>
`;

    expect(normaliseNounParadigm(html)).toEqual(resultSmeNounParadigm);
  });

  it('Turn sma nouns html into something usable', () => {
    const html = `<html>
      <head>
        <meta http-equiv="Content-type" content="text/html; charset=UTF-8">
        <title>Generating South Saami inflectional paradigms</title>
      </head>
      <body>
        <a href="http://uit.no/">The University of Troms&oslash; ></a>
        <a href="http://giellatekno.uit.no/">Giellatekno ></a>
        <br></br>
        <p></p>
        <form action="http://gtweb.uit.no/cgi-bin/smi/smi.cgi" method="get" name="form3" target="_self">
          <table border="0" cellpadding="2" cellspacing="1">
            <tr>
              <td>
                <input name="text" size="50" type="text"></input>
                <select name="pos">
                <option value="Any">Any</option>
                <option value="N">Noun</option>
                <option value="V">Verb</option>
                <option value="Pron">Pronoun</option>
                <option value="A">Adjective</option>
                <option value="Adv">Adverb</option>
                <option value="Num">Numeral</option>
                </select>
              </td>
              <td>
                <a href="http://giellatekno.uit.no/">
                  <img src="http://giellatekno.uit.no/images/project.png" style="border: none;" title="Giellatekno"></img>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <input name="mode" type="radio" value="minimal">Give minimal paradigm</input>
                <br></br>
                <input checked="1" name="mode" type="radio" value="standard">Standard</input>
                <br></br>
                <input name="mode" type="radio" value="full">Full paradigm</input>
                <br></br>
                <input name="lang" type="hidden" value="sma"></input>
                <input name="plang" type="hidden" value="eng"></input>
                <input name="action" type="hidden" value="paradigm"></input>
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" value="Send form"></input>
                <input type="reset" value="Reset form"></input>
              </td>
            </tr>
          </table>
        </form>
        <p>
          <b>guelie: Noun (N)</b>
        </p>
        <table>
          <tr>
            <td>
              <font color="white">guelie</font>
            </td>
            <td>N Sg Nom</td>
            <td>
              <font color="red">guelie</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guelie</font>
            </td>
            <td>N Sg Gen</td>
            <td>
              <font color="red">guelien</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guelie</font>
            </td>
            <td>N Sg Acc</td>
            <td>
              <font color="red">gueliem</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guelie</font>
            </td>
            <td>N Sg Ill</td>
            <td>
              <font color="red">gualan</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guelie</font>
            </td>
            <td>N Sg Ine</td>
            <td>
              <font color="red">guelesne</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guelie</font>
            </td>
            <td>N Sg Ela</td>
            <td>
              <font color="red">gueleste</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guelie</font>
            </td>
            <td>N Sg Com</td>
            <td>
              <font color="red">gööline</font>
            </td>
            <td>
              <font color="red">gueline</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guelie</font>
            </td>
            <td>N Pl Nom</td>
            <td>
              <font color="red">guelieh</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guelie</font>
            </td>
            <td>N Pl Gen</td>
            <td>
              <font color="red">gööli</font>
            </td>
            <td>
              <font color="red">gueliej</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guelie</font>
            </td>
            <td>N Pl Acc</td>
            <td>
              <font color="red">göölide</font>
            </td>
            <td>
              <font color="red">guelide</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guelie</font>
            </td>
            <td>N Pl Ill</td>
            <td>
              <font color="red">göölide</font>
            </td>
            <td>
              <font color="red">guelide</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guelie</font>
            </td>
            <td>N Pl Ine</td>
            <td>
              <font color="red">gööline</font>
            </td>
            <td>
              <font color="red">gueline</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guelie</font>
            </td>
            <td>N Pl Ela</td>
            <td>
              <font color="red">göölijste</font>
            </td>
            <td>
              <font color="red">guelijste</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guelie</font>
            </td>
            <td>N Pl Com</td>
            <td>
              <font color="red">gööligujmie</font>
            </td>
            <td>
              <font color="red">gueliejgujmie</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guelie</font>
            </td>
            <td>N Ess</td>
            <td>
              <font color="red">gööline</font>
            </td>
            <td>
              <font color="red">gueline</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guelie</font>
            </td>
            <td>N Sg Nom PxSg1</td>
            <td>
              <font color="red">gualeme</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guelie</font>
            </td>
            <td>N Sg Nom PxSg2</td>
            <td>
              <font color="red">gualedh</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guelie</font>
            </td>
            <td>N Sg Nom PxSg3</td>
            <td>
              <font color="red">guelese</font>
            </td>
            <td>
              <font color="red">guelebe</font>
            </td>
            <td>
              <font color="red">guelebe</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guelie</font>
            </td>
            <td>N Sg Gen PxSg1</td>
            <td>
              <font color="red">gualene</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guelie</font>
            </td>
            <td>N Sg Gen PxSg3</td>
            <td>
              <font color="red">gueleben</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guelie</font>
            </td>
            <td>N Sg Acc PxSg1</td>
            <td>
              <font color="red">gualeme</font>
            </td>
            <td>
              <font color="red">gualemem</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guelie</font>
            </td>
            <td>N Sg Acc PxSg2</td>
            <td>
              <font color="red">gualemdh</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guelie</font>
            </td>
            <td>N Sg Acc PxSg3</td>
            <td>
              <font color="red">guelemse</font>
            </td>
            <td>
              <font color="red">guelebem</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guelie</font>
            </td>
            <td>N Sg Ill PxSg1</td>
            <td>
              <font color="red">gualasanne</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guelie</font>
            </td>
            <td>N Sg Ill PxSg2</td>
            <td>
              <font color="red">gualasadth</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guelie</font>
            </td>
            <td>N Sg Ill PxSg3</td>
            <td>
              <font color="red">gueliebasse</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guelie</font>
            </td>
            <td>N Sg Ine PxSg3</td>
            <td>
              <font color="red">gueliebinie</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guelie</font>
            </td>
            <td>N Sg Ela PxSg1</td>
            <td>
              <font color="red">gueliestanne</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guelie</font>
            </td>
            <td>N Sg Ela PxSg2</td>
            <td>
              <font color="red">gueliestadth</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guelie</font>
            </td>
            <td>N Sg Ela PxSg3</td>
            <td>
              <font color="red">gueliebistie</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guelie</font>
            </td>
            <td>N Sg Com PxSg2</td>
            <td>
              <font color="red">gualanadth</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">guelie</font>
            </td>
            <td>N Sg Com PxSg3</td>
            <td>
              <font color="red">gueliebinie</font>
            </td>
          </tr>
        </table>
        <hr></hr>
        <p>
        <br></br>
        <a href="http://giellatekno.uit.no/doc/lang/sme/docu-mini-smi-grammartags.html">Morphological tags</a></p>
      </body>
    </html>
`;

    expect(normaliseNounParadigm(html)).toEqual(resultSmaNounParadigm);
  });

  it('Turn smj nouns html into something usable', () => {
    const html = `<html>
      <head>
        <meta http-equiv="Content-type" content="text/html; charset=UTF-8">
        <title>Generating Lule Saami inflectional paradigms</title>
      </head>
      <body>
        <a href="http://uit.no/">The University of Troms&oslash; ></a>
        <a href="http://giellatekno.uit.no/">Giellatekno ></a>
        <br></br>
        <p></p>
        <form action="http://gtweb.uit.no/cgi-bin/smi/smi.cgi" method="get" name="form3" target="_self">
        <table border="0" cellpadding="2" cellspacing="1">
        <tr>
        <td>
        <input name="text" size="50" type="text"></input>
        <select name="pos">
        <option value="Any">Any</option>
        <option value="N">Noun</option>
        <option value="V">Verb</option>
        <option value="Pron">Pronoun</option>
        <option value="A">Adjective</option>
        <option value="Adv">Adverb</option>
        <option value="Num">Numeral</option>
        </select>
        </td>
        <td>
        <a href="http://giellatekno.uit.no/">
        <img src="http://giellatekno.uit.no/images/project.png" style="border: none;" title="Giellatekno"></img>
        </a>
        </td>
        </tr>
        <tr>
        <td>
        <input name="mode" type="radio" value="minimal">Give minimal paradigm</input>
        <br></br>
        <input checked="1" name="mode" type="radio" value="standard">Standard</input>
        <br></br>
        <input name="mode" type="radio" value="full">Full paradigm</input>
        <br></br>
        <input name="lang" type="hidden" value="smj"></input>
        <input name="plang" type="hidden" value="eng"></input>
        <input name="action" type="hidden" value="paradigm"></input>
        </td>
        </tr>
        <tr>
        <td>
        <input type="submit" value="Send form"></input>
        <input type="reset" value="Reset form"></input>
        </td>
        </tr>
        </table>
        </form>
        <p>
        <b>guolle: Noun (N)</b>
        </p>
        <table>
        <tr>
        <td>
        <font color="white">guolle</font>
        </td>
        <td>N Sg Nom</td>
        <td>
        <font color="red">guolle</font>
        </td>
        </tr>
        <tr>
        <td>
        <font color="white">guolle</font>
        </td>
        <td>N Sg Gen</td>
        <td>
        <font color="red">guole</font>
        </td>
        </tr>
        <tr>
        <td>
        <font color="white">guolle</font>
        </td>
        <td>N Sg Acc</td>
        <td>
        <font color="red">guolev</font>
        </td>
        </tr>
        <tr>
        <td>
        <font color="white">guolle</font>
        </td>
        <td>N Sg Ill</td>
        <td>
        <font color="red">guolláj</font>
        </td>
        </tr>
        <tr>
        <td>
        <font color="white">guolle</font>
        </td>
        <td>N Sg Ine</td>
        <td>
        <font color="red">guolen</font>
        </td>
        </tr>
        <tr>
        <td>
        <font color="white">guolle</font>
        </td>
        <td>N Sg Ela</td>
        <td>
        <font color="red">guoles</font>
        </td>
        </tr>
        <tr>
        <td>
        <font color="white">guolle</font>
        </td>
        <td>N Sg Com</td>
        <td>
        <font color="red">guolijn</font>
        </td>
        <td>
        <font color="red">guolijn</font>
        </td>
        </tr>
        <tr>
        <td>
        <font color="white">guolle</font>
        </td>
        <td>N Sg Abe</td>
        <td>
        <font color="red">guoledagá</font>
        </td>
        <td>
        <font color="red">guoledagi</font>
        </td>
        </tr>
        <tr>
        <td>
        <font color="white">guolle</font>
        </td>
        <td>N Pl Nom</td>
        <td>
        <font color="red">guole</font>
        </td>
        </tr>
        <tr>
        <td>
        <font color="white">guolle</font>
        </td>
        <td>N Pl Gen</td>
        <td>
        <font color="red">guolij</font>
        </td>
        </tr>
        <tr>
        <td>
        <font color="white">guolle</font>
        </td>
        <td>N Pl Acc</td>
        <td>
        <font color="red">guolijt</font>
        </td>
        </tr>
        <tr>
        <td>
        <font color="white">guolle</font>
        </td>
        <td>N Pl Ill</td>
        <td>
        <font color="red">guolijda</font>
        </td>
        </tr>
        <tr>
        <td>
        <font color="white">guolle</font>
        </td>
        <td>N Pl Ine</td>
        <td>
        <font color="red">guolijn</font>
        </td>
        </tr>
        <tr>
        <td>
        <font color="white">guolle</font>
        </td>
        <td>N Pl Ela</td>
        <td>
        <font color="red">guolijs</font>
        </td>
        </tr>
        <tr>
        <td>
        <font color="white">guolle</font>
        </td>
        <td>N Pl Com</td>
        <td>
        <font color="red">guolij</font>
        </td>
        </tr>
        <tr>
        <td>
        <font color="white">guolle</font>
        </td>
        <td>N Pl Abe</td>
        <td>
        <font color="red">guolijdagá</font>
        </td>
        <td>
        <font color="red">guolijdagi</font>
        </td>
        </tr>
        <tr>
        <td>
        <font color="white">guolle</font>
        </td>
        <td>N Abe</td>
        <td>
        <font color="red">guoledak</font>
        </td>
        <td>
        <font color="red">guoleda</font>
        </td>
        </tr>
        <tr>
        <td>
        <font color="white">guolle</font>
        </td>
        <td>N Ess</td>
        <td>
        <font color="red">guollen</font>
        </td>
        </tr>
        </table>
        <hr></hr>
        <p>
        <br></br>
        <a href="http://giellatekno.uit.no/doc/lang/sme/docu-mini-smi-grammartags.html">Morphological tags</a></p>
      </body>
    </html>
    `;

    expect(normaliseNounParadigm(html)).toEqual(resultSmjNounParadigm);
  });
});

describe('Massage adjective data from the cgi-bin paradigm generator', () => {
  it('Turn sme adjective html into something usable', () => {
    const html = `<html>
      <head>
        <meta http-equiv="Content-type" content="text/html; charset=UTF-8"/>
        <title>Generere davvisámegiel sojahanparadigmaid</title>
      </head>
      <body>
        <a href="http://uit.no/">The University of Troms&#xF8; &gt;</a>
        <a href="http://giellatekno.uit.no/">Giellatekno &gt;</a>
        <br/>
        <p/>
        <form action="http://gtweb.uit.no/cgi-bin/smi/smi.cgi" method="get" name="form3" target="_self">
          <table border="0" cellpadding="2" cellspacing="1">
            <tr>
              <td>
                <input name="text" size="50" type="text"/>
                <select name="pos">
                  <option value="Any">Vaikko makkár</option>
                  <option value="N">Substantiiva</option>
                  <option value="V">Vearba</option>
                  <option value="A">Adjektiiva</option>
                  <option value="Adv">Advearba</option>
                  <option value="Pron">Pronomena</option>
                  <option value="Num">Lohkosátni</option>
                </select>
              </td>
              <td>
                <a href="http://giellatekno.uit.no/">
                  <img src="http://giellatekno.uit.no/images/project.png" style="border: none;" title="Giellatekno"/>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <input name="mode" type="radio" value="minimal">Atte minimála paradigma</input>
                <br/>
                <input checked="1" name="mode" type="radio" value="standard">Atte standárdaparadigma</input>
                <br/>
                <input name="mode" type="radio" value="full">Atte buot sojahanhámiid</input>
                <br/>
                <input name="lang" type="hidden" value="sme"/>
                <input name="plang" type="hidden" value="sme"/>
                <input name="action" type="hidden" value="paradigm"/>
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" value="Sádde"/>
                <input type="reset" value="Sihko"/>
              </td>
            </tr>
          </table>
        </form>
        <p>
          <b>linis: Adjektiiva (A)</b>
        </p>
        <table>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Attr</td>
            <td>
              <font color="red">litna</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Comp Attr</td>
            <td>
              <font color="red">litnásut</font>
            </td>
            <td>
              <font color="red">litnásit</font>
            </td>
            <td>
              <font color="red">litnáset</font>
            </td>
            <td>
              <font color="red">litnásat</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Superl Attr</td>
            <td>
              <font color="red">litnáseamos</font>
            </td>
            <td>
              <font color="red">litnásamos</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Sg Nom</td>
            <td>
              <font color="red">linis</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Sg Gen</td>
            <td>
              <font color="red">litnása</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Sg Acc</td>
            <td>
              <font color="red">litnása</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Sg Ill</td>
            <td>
              <font color="red">litnásii</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Sg Loc</td>
            <td>
              <font color="red">litnásis</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Sg Com</td>
            <td>
              <font color="red">litnásiin</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Pl Nom</td>
            <td>
              <font color="red">litnásat</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Pl Gen</td>
            <td>
              <font color="red">litnásiid</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Pl Acc</td>
            <td>
              <font color="red">litnásiid</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Pl Ill</td>
            <td>
              <font color="red">litnásiidda</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Pl Loc</td>
            <td>
              <font color="red">litnásiin</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Pl Com</td>
            <td>
              <font color="red">litnásiiguin</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Ess</td>
            <td>
              <font color="red">linisin</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Comp Ess</td>
            <td>
              <font color="red">litnáseabbon</font>
            </td>
            <td>
              <font color="red">litnásabbon</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Comp Sg Nom</td>
            <td>
              <font color="red">litnásut</font>
            </td>
            <td>
              <font color="red">litnásit</font>
            </td>
            <td>
              <font color="red">litnáset</font>
            </td>
            <td>
              <font color="red">litnáseabbo</font>
            </td>
            <td>
              <font color="red">litnásat</font>
            </td>
            <td>
              <font color="red">litnásabbo</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Comp Sg Gen</td>
            <td>
              <font color="red">litnáseappo</font>
            </td>
            <td>
              <font color="red">litnásabbo</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Comp Sg Acc</td>
            <td>
              <font color="red">litnáseappo</font>
            </td>
            <td>
              <font color="red">litnásabbo</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Comp Sg Ill</td>
            <td>
              <font color="red">litnásebbui</font>
            </td>
            <td>
              <font color="red">litnásabbui</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Comp Sg Loc</td>
            <td>
              <font color="red">litnáseappos</font>
            </td>
            <td>
              <font color="red">litnásabbos</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Comp Sg Com</td>
            <td>
              <font color="red">litnáseappuin</font>
            </td>
            <td>
              <font color="red">litnásabbuin</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Comp Pl Nom</td>
            <td>
              <font color="red">litnáseappot</font>
            </td>
            <td>
              <font color="red">litnásabbot</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Comp Pl Gen</td>
            <td>
              <font color="red">litnáseappuid</font>
            </td>
            <td>
              <font color="red">litnásabbuid</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Comp Pl Acc</td>
            <td>
              <font color="red">litnáseappuid</font>
            </td>
            <td>
              <font color="red">litnásabbuid</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Comp Pl Ill</td>
            <td>
              <font color="red">litnáseappuide</font>
            </td>
            <td>
              <font color="red">litnásabbuide</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Comp Pl Loc</td>
            <td>
              <font color="red">litnáseappuin</font>
            </td>
            <td>
              <font color="red">litnásabbuin</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Comp Pl Com</td>
            <td>
              <font color="red">litnáseappuiguin</font>
            </td>
            <td>
              <font color="red">litnásabbuiguin</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Superl Ess</td>
            <td>
              <font color="red">litnáseamosin</font>
            </td>
            <td>
              <font color="red">litnásamosin</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Superl Sg Nom</td>
            <td>
              <font color="red">litnáseamos</font>
            </td>
            <td>
              <font color="red">litnásamos</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Superl Sg Gen</td>
            <td>
              <font color="red">litnásepmosa</font>
            </td>
            <td>
              <font color="red">litnásamosa</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Superl Sg Acc</td>
            <td>
              <font color="red">litnásepmosa</font>
            </td>
            <td>
              <font color="red">litnásamosa</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Superl Sg Ill</td>
            <td>
              <font color="red">litnásepmosii</font>
            </td>
            <td>
              <font color="red">litnásamosii</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Superl Sg Loc</td>
            <td>
              <font color="red">litnásepmosis</font>
            </td>
            <td>
              <font color="red">litnásamosis</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Superl Sg Com</td>
            <td>
              <font color="red">litnásepmosiin</font>
            </td>
            <td>
              <font color="red">litnásamosiin</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Superl Pl Nom</td>
            <td>
              <font color="red">litnásepmosat</font>
            </td>
            <td>
              <font color="red">litnásamosat</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Superl Pl Gen</td>
            <td>
              <font color="red">litnásepmosiid</font>
            </td>
            <td>
              <font color="red">litnásamosiid</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Superl Pl Acc</td>
            <td>
              <font color="red">litnásepmosiid</font>
            </td>
            <td>
              <font color="red">litnásamosiid</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Superl Pl Ill</td>
            <td>
              <font color="red">litnásepmosiidda</font>
            </td>
            <td>
              <font color="red">litnásamosiidda</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Superl Pl Loc</td>
            <td>
              <font color="red">litnásepmosiin</font>
            </td>
            <td>
              <font color="red">litnásamosiin</font>
            </td>
          </tr>
          <tr>
            <td>
              <font color="white">linis</font>
            </td>
            <td>A Superl Pl Com</td>
            <td>
              <font color="red">litnásepmosiiguin</font>
            </td>
            <td>
              <font color="red">litnásamosiiguin</font>
            </td>
          </tr>
        </table>
        <hr/>
        <p>
          <br/>
          <a href="http://giellatekno.uit.no/doc/lang/sme/docu-mini-smi-grammartags.html">Morphological tags</a>
        </p>
      </body>
    </html>`;
    expect(normaliseAdjParadigm(html)).toEqual(resultSmeAdjParadigm);
  });
});

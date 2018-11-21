import React from 'react';
import styled, { css } from 'react-emotion';
import Searcher from '../components/Searcher';
import Articles from '../components/Articles';

const MyGrid = styled('div')({
  margin: 'auto',
  // You can use @supports with glamor!
  // So you can use @supports with glamorous as well!
  '@supports (display: grid)': {
    display: 'grid',
    gridGap: 10,
    gridTemplateAreas: `
      "header"
      "content"
      "footer"
    `
  }
});

const Box = styled('div')({
  padding: 10,
  fontSize: '120%'
});

const AsyncApp = ({match}) => (
  <MyGrid>
    <Box css={{ gridArea: 'header'}}>
      <div className={css({
        fontWeight: 'bold',
        fontSize: '200%',
        textAlign: 'center'
      })}>
            sátni.org
          </div>
    </Box>
    <Box css={{
      gridArea: 'content',
      paddingBottom: '50px'
    }}>
      <Searcher />
      {match.params.lemma ?
        <Articles lemma={match.params.lemma} /> :
        null
      }
    </Box>
    <Box css={{
      gridArea: 'footer'
    }}>
      <footer className={css({
        position: 'fixed',
        left: '0px',
        bottom: '0px',
        height: '50px',
        width: '100%',
        background: '#999',
        textAlign: 'center'
      })}>
          Sámi dictionaries and terms delivered by<br />
        <a href='http://divvun.no'>Divvun</a>, <a href='http://giella.org'>Giellagáldu</a> and <a href='http://giellatekno.uit.no'>Giellatekno</a>
      </footer>
    </Box>
  </MyGrid>
    );

export default AsyncApp;

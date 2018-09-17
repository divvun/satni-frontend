import React, { Component } from 'react';
import Languages from '../components/Languages';
import glamorous, { Div, A, Footer } from 'glamorous';
import Searcher from '../components/Searcher';
import Articles from '../components/Articles';

const MyGrid = glamorous.div({
  margin: 'auto',
  // You can use @supports with glamor!
  // So you can use @supports with glamorous as well!
  '@supports (display: grid)': {
    display: 'grid',
    gridGap: 10,
    gridTemplateAreas: `
      "header header header"
      "sidebar content content"
      "footer footer footer"
    `
  }
});

const Box = glamorous.div({
  padding: 10,
  fontSize: '120%'
});

const AsyncApp = () => (
  <MyGrid>
    <Box css={{ gridArea: 'header'}}>
      <Div css={{
        fontWeight: 'bold',
        fontSize: '200%',
        textAlign: 'center'}}>
            sátni.org
          </Div>
    </Box>
    <Box css={{
      gridArea: 'sidebar'
    }}>
      <Languages />
    </Box>
    <Box css={{
      gridArea: 'content',
      paddingBottom: '50px'
    }}>
      <Searcher />
      <Articles />
    </Box>
    <Box css={{
      gridArea: 'footer'
    }}>
      <Footer css={{
        position: 'fixed',
        left: '0px',
        bottom: '0px',
        height: '50px',
        width: '100%',
        background: '#999',
        textAlign: 'center'
      }}>
          Sámi dictionaries and terms delivered by<br />
        <A href='http://divvun.no'>Divvun</A>, <A href='http://giella.org'>Giellagáldu</A> and <A href='http://giellatekno.uit.no'>Giellatekno</A>
      </Footer>
    </Box>
  </MyGrid>
    );

export default AsyncApp;

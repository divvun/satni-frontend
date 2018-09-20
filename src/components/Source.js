import React from 'react';
import { Div} from 'glamorous';

const Source = ({source}) => {
  return (
    <Div css={{
      textAlign: 'right',
      marginTop: '1%',
      paddingBottom: '0',
      fontSize: '90%'}}>Source: {source}</Div>
  );
};

export default Source;

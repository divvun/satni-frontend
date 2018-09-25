import React from 'react';
import { css } from "react-emotion";

const Source = ({source}) => {
  return (
    <div className={css({
      textAlign: 'right',
      marginTop: '1%',
      paddingBottom: '0',
      fontSize: '90%'
    })}>Source: {source}</div>
  );
};

export default Source;

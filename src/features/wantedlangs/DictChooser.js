import React from 'react';
import { useCookies } from 'react-cookie';

import DictionaryInfo from 'containers/DictionaryInfo';

const DictChooser = () => {
  const [cookies, setCookie] = useCookies(['wantedDicts']);

  const handleChange = (event) => {
    event.stopPropagation();
    const oldDicts = cookies.wantedDicts;
    const newDicts = oldDicts.includes(event.target.name) ?
      oldDicts.filter(value => value !== event.target.name) :
      [...oldDicts, event.target.name];
    setCookie('wantedDicts', newDicts);
  };

  return <DictionaryInfo
    handleChange={handleChange}
    wantedDicts={cookies.wantedDicts}
  />;
};

export default DictChooser;

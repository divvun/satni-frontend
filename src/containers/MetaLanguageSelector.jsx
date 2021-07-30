import React from 'react';
import { useQuery } from '@apollo/client';

import Dropdown from 'react-bootstrap/Dropdown';
import EnFlag from '../img/en_20x15.png';
import FiFlag from '../img/fi_20x15.png';
import SeFlag from '../img/se_20x15.png';
import NoFlag from '../img/no_20x15.png';

import GET_INTERFACE_LANGUAGE from '../operations/queries/getInterfaceLanguage';
import setInterfaceLanguage from '../operations/mutations/setInterfaceLanguage';

const MetaLanguageSelector = () => {
  const interfaceLanguageQueryResult = useQuery(GET_INTERFACE_LANGUAGE);
  const { interfaceLanguage } = interfaceLanguageQueryResult.data;

  return (
    <Dropdown
      eventKey={interfaceLanguage}
      onSelect={(eventKey) => {
        setInterfaceLanguage(eventKey);
      }}
    >
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        <img src={SeFlag} alt="se flag" /> &nbsp;
        <img src={NoFlag} alt="no flag" /> &nbsp;
        <img src={FiFlag} alt="fi flag" /> &nbsp;
        <img src={EnFlag} alt="en flag" />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="en">
          <img src={EnFlag} alt="en flag" /> English
        </Dropdown.Item>
        <Dropdown.Item eventKey="fi">
          <img src={FiFlag} alt="fi flag" /> Finnish
        </Dropdown.Item>
        <Dropdown.Item eventKey="se">
          <img src={SeFlag} alt="se flag" /> North Saami
        </Dropdown.Item>
        <Dropdown.Item eventKey="nb">
          <img src={NoFlag} alt="nb flag" /> Bokmål
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MetaLanguageSelector;

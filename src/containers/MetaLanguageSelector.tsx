import React from 'react';
import { useQuery } from '@apollo/client';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import FormControl from '@material-ui/core/FormControl';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import InputLabel from '@material-ui/core/InputLabel';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import MenuItem from '@material-ui/core/MenuItem';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Select from '@material-ui/core/Select';
import setInterfaceLanguage from '../operations/mutations/setInterfaceLanguage';
import GET_INTERFACE_LANGUAGE from '../operations/queries/getInterfaceLanguage';

interface InterfaceLanguageQueryData {
  interfaceLanguage: string;
}

const MetaLanguageSelector: React.FC = () => {
  const interfaceLanguageQueryResult = useQuery<InterfaceLanguageQueryData>(
    GET_INTERFACE_LANGUAGE,
  );
  const { interfaceLanguage } = interfaceLanguageQueryResult.data || {
    interfaceLanguage: 'en',
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    event.preventDefault();
    setInterfaceLanguage(event.target.value as string);
  };

  return (
    // @ts-ignore - Material-UI v4 compatibility
    <FormControl variant="filled">
      {/* @ts-ignore - Material-UI v4 compatibility */}
      <InputLabel id="page-language-label">Page language</InputLabel>
      {/* @ts-ignore - Material-UI v4 compatibility */}
      <Select
        labelId="page-language-label"
        id="page-language"
        value={interfaceLanguage}
        onChange={handleChange}
        label="Page language"
      >
        {/* @ts-ignore - Material-UI v4 compatibility */}
        <MenuItem value="en">English</MenuItem>
        {/* @ts-ignore - Material-UI v4 compatibility */}
        <MenuItem value="se">Davvisámegiella</MenuItem>
        {/* @ts-ignore - Material-UI v4 compatibility */}
        <MenuItem value="smj">Julevsámegiella</MenuItem>
        {/* @ts-ignore - Material-UI v4 compatibility */}
        <MenuItem value="sma">Åarjelsaemiengïele</MenuItem>
        {/* @ts-ignore - Material-UI v4 compatibility */}
        <MenuItem value="sms">Nuõrttsääʹmǩiõll</MenuItem>
        {/* @ts-ignore - Material-UI v4 compatibility */}
        <MenuItem value="fi">Suomen kieli</MenuItem>
        {/* @ts-ignore - Material-UI v4 compatibility */}
        <MenuItem value="nb">Bokmål</MenuItem>
        {/* @ts-ignore - Material-UI v4 compatibility */}
        <MenuItem value="nn">Nynorsk</MenuItem>
      </Select>
    </FormControl>
  );
};

export default MetaLanguageSelector;

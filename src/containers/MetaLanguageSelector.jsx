import { useQuery } from '@apollo/client';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import setInterfaceLanguage from '../operations/mutations/setInterfaceLanguage';
import GET_INTERFACE_LANGUAGE from '../operations/queries/getInterfaceLanguage';

const MetaLanguageSelector = () => {
  const interfaceLanguageQueryResult = useQuery(GET_INTERFACE_LANGUAGE);
  const { interfaceLanguage } = interfaceLanguageQueryResult.data;

  const handleChange = (event) => {
    event.preventDefault();
    setInterfaceLanguage(event.target.value);
  };

  return (
    <FormControl variant="filled">
      <InputLabel id="page-language-label">Page language</InputLabel>
      <Select
        labelId="page-language-label"
        id="page-language"
        value={interfaceLanguage}
        onChange={handleChange}
        label="Page language"
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="se">Davvisámegiella</MenuItem>
        <MenuItem value="smj">Julevsámegiella</MenuItem>
        <MenuItem value="sma">Åarjelsaemiengïele</MenuItem>
        <MenuItem value="sms">Nuõrttsääʹmǩiõll</MenuItem>
        <MenuItem value="fi">Suomen kieli</MenuItem>
        <MenuItem value="nb">Bokmål</MenuItem>
        <MenuItem value="nn">Nynorsk</MenuItem>
      </Select>
    </FormControl>
  );
};

export default MetaLanguageSelector;

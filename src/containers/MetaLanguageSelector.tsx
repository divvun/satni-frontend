import React from "react";
import { useQuery } from "@apollo/client/react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import setInterfaceLanguage from "../operations/mutations/setInterfaceLanguage";
import { GET_INTERFACE_LANGUAGE } from "../operations/queries/getInterfaceLanguage";

interface InterfaceLanguageQueryData {
  interfaceLanguage: string;
}

const MetaLanguageSelector: React.FC = () => {
  const interfaceLanguageQueryResult = useQuery<InterfaceLanguageQueryData>(
    GET_INTERFACE_LANGUAGE
  );
  const { interfaceLanguage } = interfaceLanguageQueryResult.data || {
    interfaceLanguage: "en",
  };

  const handleChange = (event: any) => {
    setInterfaceLanguage(event.target.value as string);
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
        <MenuItem value="smn">Anarâškielâ </MenuItem>
        <MenuItem value="sms">Nuõrttsääʹmǩiõll</MenuItem>
        <MenuItem value="fi">Suomen kieli</MenuItem>
        <MenuItem value="nb">Bokmål</MenuItem>
        <MenuItem value="nn">Nynorsk</MenuItem>
      </Select>
    </FormControl>
  );
};

export default MetaLanguageSelector;

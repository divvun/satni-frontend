import React from 'react';
// import { useQuery } from '@apollo/client';

import DictChooser from './DictChooser';
// import GET_LANGS_DICTS from '../../operations/queries/getLangsDicts';
import setWantedDicts from '../../operations/mutations/setWantedDicts';
// import { sanit } from '../../translateble_variables';

const { wantedDicts: sanit } = {
  wantedDicts: ['gtsmenob', 'gtnobsme', 'gtsmefin', 'gtfinsme'],
};

const DictChooserDialog = () => (
  <DictChooser dicts={sanit} setDicts={setWantedDicts} />
);
// const getLangsDictsResult = useQuery(GET_LANGS_DICTS);
// const { wantedDicts: dicts } = getLangsDictsResult.data;
// const ndsDicts = dicts.filter((dict) => dict.startsWith('gt'));
// const { wantedDicts: dicts } = { wantedDicts: ['gtsmenob', 'gtsmefin'] };

export default DictChooserDialog;

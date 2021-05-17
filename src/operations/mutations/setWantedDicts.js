import { wantedDictsVar } from '../../apolloCache';

const setWantedDicts = (dicts) => {
  localStorage.setItem('wantedDicts', JSON.stringify(dicts));
  wantedDictsVar(dicts);
};

export default setWantedDicts;

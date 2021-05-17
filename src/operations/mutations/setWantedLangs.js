import { wantedLangsVar } from '../../apolloCache';

const setWantedLangs = (langs) => {
  localStorage.setItem('wantedLangs', JSON.stringify(langs));
  wantedLangsVar(langs);
};

export default setWantedLangs;

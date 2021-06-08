import { targetLangsVar } from '../../apolloCache';

const setTargetLangs = (langs) => {
  localStorage.setItem('targetLangs', JSON.stringify(langs));
  targetLangsVar(langs);
};

export default setTargetLangs;

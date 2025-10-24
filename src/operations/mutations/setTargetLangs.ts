import { targetLangsVar } from '../../apolloCache';

const setTargetLangs = (langs: string[]): void => {
  localStorage.setItem('targetLangs', JSON.stringify(langs));
  targetLangsVar(langs);
};

export default setTargetLangs;

import { srcLangsVar } from '../../apolloCache';

const setSrcLangs = (langs: string[]): void => {
  localStorage.setItem('srcLangs', JSON.stringify(langs));
  srcLangsVar(langs);
};

export default setSrcLangs;

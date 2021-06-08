import { srcLangsVar } from '../../apolloCache';

const setSrcLangs = (langs) => {
  localStorage.setItem('srcLangs', JSON.stringify(langs));
  srcLangsVar(langs);
};

export default setSrcLangs;

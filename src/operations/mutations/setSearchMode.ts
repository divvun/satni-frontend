import { searchModeVar } from '../../apolloCache';

const setSearchMode = (mode: string): void => {
  searchModeVar(mode);
};

export default setSearchMode;

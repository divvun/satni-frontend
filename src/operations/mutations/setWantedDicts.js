import { availableDictsVar, wantedDictsVar } from '../../apolloCache';

const setWantedDicts = (dicts) => {
  localStorage.setItem(
    'unwantedDicts',
    JSON.stringify(
      availableDictsVar().filter(
        (availableDict) => !dicts.includes(availableDict),
      ),
    ),
  );
  wantedDictsVar(dicts);
};

export default setWantedDicts;

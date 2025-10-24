import { searchListClickedItemVar } from '../../apolloCache';

const setSearchListClickedItem = (position: number): void => {
  searchListClickedItemVar(position);
};

export default setSearchListClickedItem;

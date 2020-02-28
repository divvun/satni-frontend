import { createSlice } from '@reduxjs/toolkit';
import { getSearchItems } from 'api';
import { toJson} from 'utils';

// Only keep search results containing letters, space and hyphen
const filterItems = (searchItems) => {
  return Array.from(new Set(searchItems.map(item => item.term)))
    .filter(term => /^( |[\wåäöøæáčđŋšŧžïâǩǯǧǥʒʹʼ-])+$/u.test(term))
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
};

const searchSlice = createSlice({
  name: 'search',
  initialState: {isFetching: false, error: null},
  reducers: {
    getSearchItemsStart (state) {
      state.isFetching = true;
    },
    getSearchItemsSuccess (state, action) {
      const {key, searchItems} = action.payload;
      state[key] = filterItems(searchItems);
      state.isFetching = false;
      state.error = null;
    },
    getSearchItemsFailure (state, action) {
      state.isFetching = false;
      state.error = action.payload;
    }
  }
});

export const {
  getSearchItemsStart,
  getSearchItemsSuccess,
  getSearchItemsFailure
} = searchSlice.actions;

export default searchSlice.reducer;

export const fetchSearchItems = (key) => async dispatch => {
  try {
    dispatch(getSearchItemsStart());
    const text = await getSearchItems(key);
    const searchItems = toJson(text);
    dispatch(getSearchItemsSuccess({key, searchItems}));
  } catch (err) {
    dispatch(getSearchItemsFailure(err.toString()));
  }
};

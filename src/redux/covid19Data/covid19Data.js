import Axios from 'axios';

const baseURL = 'https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true';

// constants
const FETCH_DATA = 'covidMetrics/covid19Data/FETCH_DATA';

// actions

const fetchData = (payload) => ({
  type: FETCH_DATA,
  payload,
});

// APIs-functions

export const fetchDataApi = () => async (dispatch) => {
  const returnValue = await Axios.get(baseURL);
  console.log(returnValue);
  dispatch(fetchData(returnValue));
};

// initial-state
const initialState = [];

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;

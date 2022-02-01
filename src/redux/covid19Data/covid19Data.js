import Axios from 'axios';

const baseURL = 'https://api.covid19api.com/summary';

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
  const { data: { Countries } } = returnValue;
  dispatch(fetchData(Countries));
};

// initial-state
const initialState = {
  countriesData: [],
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, countriesData: action.payload };
    default:
      return state;
  }
};

export default reducer;

import Axios from 'axios';

const baseURL = 'https://api.covid19api.com/summary';

// constants
const FETCH_DATA = 'covidMetrics/covid19Data/FETCH_DATA';

// actions

const fetchData = (Countries, Global) => ({
  type: FETCH_DATA,
  Countries,
  Global,
});

// APIs-functions

export const fetchDataApi = () => async (dispatch) => {
  const returnValue = await Axios.get(baseURL);
  const { data: { Countries, Global } } = returnValue;
  dispatch(fetchData(Countries, Global));
};

// initial-state
const initialState = {
  countriesData: [],
  globalData: {},
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, countriesData: action.Countries, globalData: action.Global };
    default:
      return state;
  }
};

export default reducer;

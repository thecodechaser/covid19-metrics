import Axios from "axios";


// constants
const FETCH_DATA = 'covidMetrics/covid19Data/FETCH_DATA';

// actions

const fetchData = (payload) => ({
  type: FETCH_DATA,
  payload,
});


// APIs-functions


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

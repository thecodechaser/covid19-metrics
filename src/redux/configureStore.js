import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import covid19Data from './covid19Data/covid19Data'

const reducer = combineReducers({
  covid19Data
});

const store = createStore(
  reducer, applyMiddleware(logger, thunk),
);

export default store;
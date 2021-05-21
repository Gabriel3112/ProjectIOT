import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {WifiReducer} from './reducers/wifi';

const initialState = {
  wifi: {
    info: [],
  },
};
const composeEnhancer = compose;
const reducer = combineReducers({
  wifi: WifiReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;

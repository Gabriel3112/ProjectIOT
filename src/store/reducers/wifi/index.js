import {REQUEST_WIFI, GET_WIFI, FAIL_WIFI} from '../../constants/wifi';
export const WifiReducer = (state = {loading: false, info: []}, action) => {
  switch (action.type) {
    case REQUEST_WIFI:
      return {...state, loading: true};
    case GET_WIFI:
      return {...state, loading: false, info: action.payload};
    case FAIL_WIFI:
      return {loading: false};
    default:
      return state;
  }
};

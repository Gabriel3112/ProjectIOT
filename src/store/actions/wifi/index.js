import axios from 'axios';
import {
  FAIL_WIFI,
  GET_WIFI,
  REQUEST_WIFI,
  REQUEST_CONNECT,
  CONNECT_SUCCESS,
  FAIL_CONNECT,
} from '../../constants/wifi';

export const WifiGet = () => async dispatch => {
  dispatch({type: REQUEST_WIFI});
  try {
    const {data} = await axios.get('http://192.168.4.1/wifi', {
      headers: {'Content-Type': 'text/plain'},
    });
    dispatch({type: GET_WIFI, payload: data});
  } catch (err) {
    console.log(err);
    dispatch({type: FAIL_WIFI});
  }
};

export const ConnectWifi = (ssid, password) => async dispatch => {
  dispatch({type: REQUEST_CONNECT});
  try {
    console.log(
      JSON.stringify({
        ssid,
        password,
      })
    );
    const {data} = await axios.post(
      'http://192.168.4.1/connect',
      JSON.stringify({
        ssid,
        password,
      })
    );

    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

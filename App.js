import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import WifiConnect from './src/screens/wifiConnect';

const Stack = createStackNavigator();

const WifiAnalyzer = () => {
  return (
    <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen name="Wifi Connection" component={WifiConnect} />
      </Stack.Navigator>
    </Provider>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <WifiAnalyzer />
    </NavigationContainer>
  );
}

import React from 'react';

import Home from './src/screens/Home/Home';
import Search from './src/screens/Search/Search';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/reducers';
import reduxThunk from 'redux-thunk';
import {StackParamList} from 'src/helpers/navigation'

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
const Stack = createStackNavigator<StackParamList>();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './src/screens/MenuScreen';
import FechaMenuScreen from './src/screens/FechaMenuScreen';
import ZonaMenuScreen from './src/screens/ZonaMenuScreen';
import ZonaScreen from './src/screens/ZonaScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="FechaMenuScreen" component={FechaMenuScreenScreen} />
        <Stack.Screen name="ZonaMenuScreen" component={ZonaMenuScreenScreen} />
        <Stack.Screen name="ZonaScreen" component={ZonaScreenScreen} />
        {/* Agregar más pantallas según sea necesario */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './src/screens/MenuScreen';
import FechaMenuScreen from './src/screens/FechaMenuScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="FechaMenuScreen" component={FechaMenuScreenScreen} />
        {/* Agregar más pantallas según sea necesario */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

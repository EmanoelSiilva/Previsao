import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './components/MainScreen';
import SecondaryScreen from './components/SecondaryScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MainScreen'>
        <Stack.Screen name="MainScreen" component={MainScreen} options={{title: 'Previsão do Tempo'}}/>
        <Stack.Screen name='SecondaryScreen' component={SecondaryScreen} options={{title: 'Próximos 7 dias'}} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
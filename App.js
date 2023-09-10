import React, {useEffect, useState} from 'react';
import Splash from './src/components/splash.js';
import Map from './src/components/Map.js'
import Main from './src/components/Main.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name = 'Splash' component={Splash}/>
        <Stack.Screen name = 'Main' component={Main}/>
        <Stack.Screen name = 'Map' component={Map}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/components/Main.js'
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Map from './src/components/Map';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name = 'Splash' component={Splash}/>
        <Stack.Screen name = 'Main' component={Main}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

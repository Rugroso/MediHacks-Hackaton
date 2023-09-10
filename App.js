import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/components/Main.js'

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
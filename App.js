import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from './src/theme';
import Splash from './src/components/splash';
import Test from './src/components/test';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name = 'Splash' component={Splash}/>
        <Stack.Screen name = 'Test' component={Test}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.bg,
    fontSize: theme.size.h1
  },
});

import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/components/Main.jsx'

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.bg,
    fontSize: theme.size.h1
  },
});

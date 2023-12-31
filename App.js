import React, {useEffect, useState} from 'react';
import Splash from './src/components/splash.js';
import Map from './src/components/Map.js'
import Main from './src/components/Main.js'
import Diary from './src/components/Diary.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DiaryWriter from './src/components/DiaryWriter.js';
import BreathingMeditation from './src/components/BreathingMeditation.js';
import Evaluation from './src/components/Evaluation.js';
import { LogBox } from 'react-native';
import AudioPlayer from './src/components/Audio.js';
import EditProfile from './src/components/EditProfile.js';

const Stack = createNativeStackNavigator()
LogBox.ignoreAllLogs()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name = 'Splash' component={Splash}/>
        <Stack.Screen name = 'Main' component={Main}/>
        <Stack.Screen name = 'Map' component={Map}/>
        <Stack.Screen name = 'Diary' component={Diary}/>
        <Stack.Screen name = 'DiaryWriter' component={DiaryWriter}/>
        <Stack.Screen name = 'Evaluation' component={Evaluation}/>
        <Stack.Screen name = 'Audio' component={AudioPlayer}/>

        <Stack.Screen name = 'BreathingMeditation' component={BreathingMeditation}/>

        <Stack.Screen name = 'EditProfile' component={EditProfile}/>

      </Stack.Navigator>
  </NavigationContainer>
  );
}

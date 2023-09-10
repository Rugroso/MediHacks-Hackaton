import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableNativeFeedback } from "react-native";
import entries from "../data/entries";
import Constants from "expo-constants";
import theme from "../theme";
import EntriesNotFound from "./EntriesNotFound";
import EvalQuestion from "./EvalQuestion";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';
export default function BreathingMeditation(){
    let [fontsLoaded] = useFonts({
        'FiraSans-Bold' : require('../data/fonts/FiraSans-Bold.ttf'),
        'FiraSans-Regular' : require('../data/fonts/FiraSans-Regular.ttf'),
    })
    const [timer, setTimer] = useState(15 * 60); 

  
  const formatTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

   
    return () => clearInterval(interval);
  }, []);

 
  

    return(
        <View style={styles.contentContainer}>
            <Image
        style={{width: 150, height: 150}}
        source={{
          uri: 'https://freepngimg.com/thumb/categories/1786.png',
        }}
      />
      <Text style={{  fontSize: theme.size.h1, color: theme.colors.offwhite, fontFamily: 'FiraSans-Bold'}}>Breathing Meditation</Text>
      <Image
        style={{width: '95%', height: '40%', marginTop:'10%'}}
        source={{
          uri: 'https://i.ibb.co/HYyJ8xp/yogapic3.png',
        }}
      />
      <Text style={{  fontSize: (theme.size.h1)+20, marginTop:'10%', color: theme.colors.offwhite, fontFamily: 'FiraSans-Bold'}}>Breathe.</Text>
      <Text style={{  fontSize: (theme.size.h3), color: theme.colors.offwhite, fontFamily: 'FiraSans-Regular', textAlign:'center', paddingLeft:'10%', paddingRight: '10%'}}>Relax your body and concentrate on your lungs and breathing.</Text>
      <Text style={{ fontSize: theme.size.h1+15, color: theme.colors.offwhite, fontFamily: "FiraSans-Bold" }}>{formatTime()}</Text>
      </View>
    )
}
const styles = StyleSheet.create({
    contentContainer: {
        
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.bg,
        height: '100%',
        alignItems: 'center',
        
        
    },
    button: {
        
        marginTop:'10%',
        alignSelf: 'center',
        paddingVertical: 20,
        textAlign: 'center',
        width: '80%',
        borderRadius: 20,
        fontFamily: 'FiraSans-Regular',
        fontSize: theme.size.h2,
        backgroundColor: theme.colors.dark,
        color: theme.colors.offwhite,
      },
    
})
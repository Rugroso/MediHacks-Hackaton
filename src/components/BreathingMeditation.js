import React from "react";
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
    })
    return(
        <View style={styles.contentContainer}>
            <Image
        style={{width: 150, height: 150}}
        source={{
          uri: 'https://freepngimg.com/thumb/categories/1786.png',
        }}
      />
      <Text style={{  fontSize: theme.size.h1, color: theme.colors.offwhite, fontFamily: 'FiraSans-Bold'}}>Breathing Meditation</Text>
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
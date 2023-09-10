import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableNativeFeedback } from "react-native";
import entries from "../data/entries";
import Constants from "expo-constants";
import theme from "../theme";
import EntriesNotFound from "./EntriesNotFound";
import EvalQuestion from "./EvalQuestion";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function Evaluation(){
    const saveEvaluation = async () => {
        if (title && entryText) {
          try {
            const newEntry = {
                title: title,
                text: entryText,
                date: new Date().toString() 
            };
            const updatedEntries = [...entries, newEntry];
            await AsyncStorage.setItem(
              'journalEntries',
              JSON.stringify(updatedEntries)
            );
            setEntries(updatedEntries);
            setTitle('');
            setEntryText('');
          } catch (error) {
            console.error('Error saving journal entry:', error);
          }
        }
      };
      let [fontsLoaded] = useFonts({
        'FiraSans-Regular' : require('../data/fonts/FiraSans-Regular.ttf'),
        'FiraSans-Bold' : require('../data/fonts/FiraSans-Bold.ttf'),
      })
      if(!fontsLoaded){
          return<AppLoading/>
      }
    return(
       <SafeAreaView style={{flex:1}}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
            
            <Image
        style={{width: 150, height: 150}}
        source={{
          uri: 'https://freepngimg.com/thumb/categories/1786.png',
        }}
      />
        <Text style={{  fontSize: theme.size.h1, color: theme.colors.offwhite, fontFamily: 'FiraSans-Bold'}}>Evaluate yourself.</Text>
        <Text style={{  fontSize: theme.size.default, color: theme.colors.offwhite, fontFamily: 'FiraSans-Regular', textAlign:'center', width:'60%'}}>How much do you agree with each one of these statements? Try to be as honest as possible. </Text>
        <EvalQuestion question='I had trouble staying focused today.'></EvalQuestion>
        <EvalQuestion question='I felt overwhelmed today.'></EvalQuestion>
        <EvalQuestion question='I struggled to fall asleep last night.'></EvalQuestion>
        <EvalQuestion question='I felt like isolating myself today.'></EvalQuestion>
        <EvalQuestion question='I felt annoyed over trivial issues.'></EvalQuestion>
        <EvalQuestion question='I felt more tired than I should be.'></EvalQuestion>
        <TouchableNativeFeedback >
        <Text style = {styles.button}>Evaluate</Text>
      </TouchableNativeFeedback>
        </ScrollView>
        </SafeAreaView>
        
    );
}
const styles = StyleSheet.create({
    contentContainer: {
        
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.bg,
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
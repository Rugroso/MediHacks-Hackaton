import React from "react";
import { View, StyleSheet, Text, TouchableNativeFeedback } from "react-native";
import theme from "../theme";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/core";

export default function EntriesNotFound(){
    const navigator = useNavigation()
    let [fontsLoaded] = useFonts({
        'FiraSans-Regular' : require('../data/fonts/FiraSans-Regular.ttf'),
        'FiraSans-Bold' : require('../data/fonts/FiraSans-Bold.ttf'),
    })
    if(!fontsLoaded){
        return <AppLoading/>
    }
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>No journal entries were found.</Text>
            <TouchableNativeFeedback onPress={() => {navigator.navigate('DiaryWriter')}}>
                <Text style = {styles.button}>What's on your mind?</Text>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.block,
        margin: '5%',
        padding: 10,
        borderRadius: 20
    },
    text: {
        fontFamily: 'FiraSans-Bold',
        fontSize: theme.size.h1,
        alignSelf: 'center',
        textAlign: 'center'
    },
    button: {
        marginTop: '20%',
        fontFamily: 'FiraSans-Regular',
        fontSize: theme.size.h3,
        color: theme.colors.offwhite,
        backgroundColor: theme.colors.dark,
        alignSelf: 'center',
        textAlign: 'center',
        width: '80%',
        padding: 15,
        borderRadius: 20

    }
})
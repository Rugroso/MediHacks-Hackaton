import React from "react";
import { Image, StyleSheet, View, Text, ImageBackground } from "react-native";
import theme from "../theme";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

export default function Splash(){
    let [fontsLoaded] = useFonts({
        'FiraSans-Regular' : require('../data/fonts/FiraSans-Regular.ttf'),
    })
    if(!fontsLoaded){
        return<AppLoading/>
    }
    return(
        <ImageBackground
            source={require("../data/splashbg.png")}
            style = {styles.container}>
                <View style = {styles.content}>
                    <Image
                        source={require('../data/png/Logo1.png')}
                        style = {styles.logo}
                        resizeMode="contain"
                    />
                    <Text style = {styles.header}>Mindful Moments,</Text>
                    <Text style = {styles.header}>Meaningful Healing</Text>
                </View>
            </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    header: {
        alignSelf: 'center',
        fontSize: theme.size.h2,
        fontFamily: 'FiraSans-Regular',
        color: 'white'
    },
    logo: {
        height: '30%',
        marginBottom: '10%'
    }
})
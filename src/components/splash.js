import React, { useRef, useEffect } from "react";
import { Animated, Image, StyleSheet, View, Text, ImageBackground } from "react-native";
import theme from "../theme";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

function send() {
    navigator = useNavigation()
    setTimeout(() => {
      navigator.replace('Test')
    }, 6000);
  }
  

const FadeIn = props => {
    const fadeAnim = useRef(new Animated.Value(0)).current // Valor inicial de opacidad
    const translateYAnim = useRef(new Animated.Value(20)).current //Valor inicial de traslacion
    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 5000,
                useNativeDriver: true,
            }),
            Animated.timing(translateYAnim, {
                toValue: 0,
                duration: 5000,
                useNativeDriver: true
            }),
        ]).start()
    }, [fadeAnim, translateYAnim])
    return(
        <Animated.View
            style = {{
                ...props.style,
                opacity: fadeAnim,
                transform: [{translateY: translateYAnim}]
            }}>
            {props.children}
            </Animated.View>
    )
}

export default function Splash(){
    send()
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
                <FadeIn style = {styles.content}>
                    <Image
                        source={require('../data/png/Logo1.png')}
                        style = {styles.logo}
                        resizeMode="contain"
                    />
                    <Text style = {styles.header}>Mindful Moments,</Text>
                    <Text style = {styles.header}>Meaningful Healing</Text>
                </FadeIn>
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
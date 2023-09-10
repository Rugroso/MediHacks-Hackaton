import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ImageBackground, Alert, TouchableOpacity } from "react-native";
import theme from "../theme";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Constants from "expo-constants";
import * as FileSystem from 'expo-file-system'

export default function EditProfile(){
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const logData = async () => {
        try{
            const userData = {
                name,
                city,
                state,
            }
            const jsonData = JSON.stringify(userData)
            const filePath = `${FileSystem.documentDirectory}/userData.json`;
            await FileSystem.writeAsStringAsync(filePath, jsonData);
            Alert.alert('Success', 'Information updated.')
            console.log('Write successful', filePath)
        } catch (error){
            console.error('Error saving data:', error)
        }
    }
    let [fontsLoaded] = useFonts({
        'FiraSans-Regular' : require('../data/fonts/FiraSans-Regular.ttf'),
        'FiraSans-Bold' : require('../data/fonts/FiraSans-Bold.ttf'),
    })
    if(!fontsLoaded){
        return<AppLoading/>
    }
    return(
        <ImageBackground
            source={require("../data/john-rodenn-castillo-eluzJSfkNCk-unsplash.jpg")}
            style = {styles.container}>
            <Text style = {styles.header}>Your Profile</Text>
            <View style = {styles.inputContainer}>
                <TextInput
                style = {styles.input}
                placeholder="Name"
                value = {name}
                onChangeText={(text) => setName(text)}
                />
                <TextInput
                style = {styles.input}
                placeholder="City"
                value = {city}
                onChangeText={(text) => setCity(text)}
                />
                <TextInput
                style = {styles.input}
                placeholder="State"
                value = {state}
                onChangeText={(text) => setState(text)}
                />
            </View>
            <TouchableOpacity onPress={logData} activeOpacity={0.8}>
                <Text style = {styles.button}>
                    Accept
                </Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.bg,
        height: '110%',
    },
    header: {
        marginTop: '20%',
        color: theme.colors.dark,
        alignSelf: 'center',
        fontSize: theme.size.h1,
        fontFamily: 'FiraSans-Bold',
        marginBottom: '10%',
    },
    input: {
        alignSelf: 'center',
        backgroundColor: theme.colors.offwhite,
        marginVertical: 5,
        borderWidth: 1,
        padding: 3,
        paddingHorizontal: 10,
        borderWidth: 0,
        borderRadius: 8,
        width: '90%',
        fontFamily: 'FiraSans-Regular'
      },
      inputContainer: {
        backgroundColor: theme.colors.bg,
        margin: '3%',
        paddingVertical: '3%',
        borderRadius: 10,
      },
      button: {
        backgroundColor: theme.colors.bg,
        color: theme.colors.offwhite,
        fontFamily: 'FiraSans-Regular',
        width: '60%',
        alignSelf: 'center',
        textAlign: 'center',
        margin: '3%',
        padding: '3%',
        borderRadius: 10,
      }
})
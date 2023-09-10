import { TouchableNativeFeedback, View, ImageBackground, Text, StyleSheet } from 'react-native';
import theme from '../theme';
import { useNavigation } from '@react-navigation/core';
import AppLoading from "expo-app-loading";

import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    useFonts,
    Kanit_500Medium,
    
  } from "@expo-google-fonts/kanit";
export default function Box({title, width, height, img, direction, iconName, textColor, description, forceflex, route}){
    const navigator = useNavigation()
    const image = {uri: img};
    let [fontsLoaded] = useFonts({
        Kanit_500Medium,
        
      });
    return(
      <TouchableNativeFeedback onPress={() => navigator.navigate(route)}>
        <View style={{width: width, height: height, backgroundColor: theme.colors.block, borderRadius: 30, alignItems: 'center'}}>
             <ImageBackground source={image} resizeMode="cover" imageStyle={{borderRadius: 30}} style={{flex:1, width:'100%', alignItems: 'center', justifyContent: 'center',  flexDirection: direction }}>
             {iconName ? (<View style={{marginLeft:'10%', marginRight: forceflex}}><Ionicons name={iconName} color={theme.colors.offwhite} size={60}></Ionicons></View>):null}
             <View style={{flex:1, flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{flex: 1, color: textColor, fontSize: theme.size.h1, flexWrap: 'wrap', textAlign: 'center', fontFamily: "Kanit_500Medium"}}>{title}</Text>
            </View>
            {description ? (
        <Text style={{margin:'6.5%'}}>{description}</Text>
      ) : null}
            
            </ImageBackground>
        </View>
      </TouchableNativeFeedback>
    )
} 

const styles = StyleSheet.create({
    head: {
        marginLeft: 15,
        marginTop: 10,
        fontSize: theme.size.h2,
        fontFamily: 'FiraSans-Bold',
        color: theme.colors.dark,
    },
    desc: {
        marginLeft: 15,
        fontSize: theme.size.default,
        fontFamily: 'FiraSans-Regular',
        color: theme.colors.dark
    },
})

import { TouchableNativeFeedback, View, ImageBackground, Text, StyleSheet } from 'react-native';
import theme from '../theme';
import { useNavigation } from '@react-navigation/core';
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

export default function Box({title, width, height, img, route, description}){
    const navigator = useNavigation()
    const image = {uri: img};

    let [fontsLoaded] = useFonts({
        'FiraSans-Regular' : require('../data/fonts/FiraSans-Regular.ttf'),
        'FiraSans-Bold' : require('../data/fonts/FiraSans-Bold.ttf'),
    })
    if(!fontsLoaded){
        return<AppLoading/>
    }
    return(
      <TouchableNativeFeedback onPress={() => navigator.navigate(route)}>
        <View style={{width: width, height: height, backgroundColor: theme.colors.block, borderRadius: 30, alignItems: 'center'}}>
             <ImageBackground source={image} resizeMode="cover" imageStyle={{borderRadius: 30}} style={{flex:1, width:'100%' }}>
            <Text style = {styles.head}>{title}</Text>
            <Text style = {styles.desc}>{description}</Text>
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
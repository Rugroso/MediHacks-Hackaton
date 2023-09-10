import { TouchableNativeFeedback, View, ImageBackground, Text, StyleSheet } from 'react-native';
import theme from '../theme';
import { useNavigation } from '@react-navigation/core';
import AppLoading from "expo-app-loading";
import { useFonts } from 'expo-font';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Box({title, width, height, img, direction, iconName, textColor, description, forceflex, route}){
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
        <View style={{width: width, height: height, backgroundColor: theme.colors.block, borderRadius: 30}}>
             <ImageBackground source={image} resizeMode="cover" imageStyle={{borderRadius: 30}} style={{flex:1, width:'100%', flexDirection: direction }}>
             {iconName ? (<View style={{alignSelf: 'center', marginLeft:'5%', marginRight: forceflex}}><Ionicons name={iconName} color={theme.colors.offwhite} size={60}></Ionicons></View>):null}
             <View style={{justifyContent: 'flex-start', flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Text style={styles.head}>{title}</Text>
            </View>
            {description ? (
        <Text style={styles.desc}>{description}</Text>
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
        width: '80%',
        flexWrap: 'wrap',
    },
    desc: {
        marginLeft: 15,
        fontSize: theme.size.default,
        fontFamily: 'FiraSans-Regular',
        color: theme.colors.dark
    },
})

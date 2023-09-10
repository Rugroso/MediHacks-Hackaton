import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import theme from '../theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    useFonts,
    Kanit_500Medium,
    
  } from "@expo-google-fonts/kanit";
export default function Box({title, width, height, img, description, textColor, iconName, direction, forceflex}){
    const image = {uri: img};
    let [fontsLoaded] = useFonts({
        Kanit_500Medium,
        
      });
    return(
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
    )
}
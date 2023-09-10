import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import theme from '../theme';

export default function Box({title, width, height, img}){
    const image = {uri: img};


    return(
        <View style={{width: width, height: height, backgroundColor: theme.colors.block, borderRadius: 30, alignItems: 'center'}}>
             <ImageBackground source={image} resizeMode="cover" imageStyle={{borderRadius: 30}} style={{flex:1, width:'100%' }}>
            <Text>{title}</Text>
            </ImageBackground>
        </View>
    )
}
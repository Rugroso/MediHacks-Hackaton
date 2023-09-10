import { TouchableNativeFeedback, View, ImageBackground, Text } from 'react-native';
import theme from '../theme';
import { useNavigation } from '@react-navigation/core';

export default function Box({title, width, height, img, route}){
    const navigator = useNavigation()
    const image = {uri: img};


    return(
      <TouchableNativeFeedback onPress={() => navigator.navigate(route)}>
        <View style={{width: width, height: height, backgroundColor: theme.colors.block, borderRadius: 30, alignItems: 'center'}}>
             <ImageBackground source={image} resizeMode="cover" imageStyle={{borderRadius: 30}} style={{flex:1, width:'100%' }}>
            <Text>{title}</Text>
            </ImageBackground>
        </View>
      </TouchableNativeFeedback>
    )
}
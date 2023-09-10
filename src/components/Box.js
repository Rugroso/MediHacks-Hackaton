import { StyleSheet, Text, View, Image, TouchableNativeFeedback } from 'react-native';
import theme from '../theme';
import { useNavigation } from '@react-navigation/core';

export default function Box({title, width, height, route}){
    const navigator = useNavigation()
    return(
        <TouchableNativeFeedback onPress={() => navigator.navigate(route)}>
            <View style={{width: width, height: height, backgroundColor: theme.colors.block, borderRadius: 30, alignItems: 'center'}}>
                <Text>{title}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}
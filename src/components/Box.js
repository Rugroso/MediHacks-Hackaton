import { StyleSheet, Text, View, Image } from 'react-native';
import theme from '../theme';

export default function Box({title, width, height}){
    return(
        <View style={{width: width, height: height, backgroundColor: theme.colors.block, borderRadius: 30, alignItems: 'center'}}>
            <Text>{title}</Text>
        </View>
    )
}
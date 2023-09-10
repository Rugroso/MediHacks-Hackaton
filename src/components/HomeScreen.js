import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import theme from '../theme';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Constants from 'expo-constants';
import Box from './Box';
export default function HomeScreen(){
  let [fontsLoaded] = useFonts({
    'FiraSans-Bold' : require('../data/fonts/FiraSans-Bold.ttf'),
})
if(!fontsLoaded){
    return<AppLoading/>
}  
    return(
      <>
    <View style={{ flex: 1,  justifyContent: 'flex-start', alignItems: 'center', backgroundColor: theme.colors.bg}}>
    <Image
        style={{width: 150, height: 150, marginTop: '10%'}}
        source={{
          uri: 'https://freepngimg.com/thumb/categories/1786.png',
        }}
      />
      <Text style={{  fontSize: theme.size.h1, color: theme.colors.offwhite, fontFamily: 'FiraSans-Bold'}}>Welcome Again!</Text>
      <View style={{ flex: 1, paddingBottom: '10%',width: '100%', flexWrap: 'wrap', alignContent: 'space-between',flexDirection: 'row', alignItems: '', justifyContent: 'space-evenly', marginTop: '5%'}}>
      <Box title='Meditation' description = 'Check out your recommended meditation program.' width='45%' height='30%' img='https://i.ibb.co/1XZH3DH/bg13.png' route='BreathingMeditation' centerTextPercent='100%'></Box>
      <Box title='CalmPlay' description = 'Unwind and enjoy.' width='45%' height='30%' img='https://i.ibb.co/1XZH3DH/bg13.png' route = 'Audio' centerTextPercent='100%'></Box>
      <Box title='My Journey' description = 'Add daily notes to your personal blog.' width='92.5%' img='https://i.ibb.co/pJ82j36/bg12.png'height='30%' route='Diary' centerTextPercent='100%'></Box>
      <Box title='Therapist' description = 'Find professional help near you.' width='92.5%' img='https://i.ibb.co/pJ82j36/bg12.png' height='30%' route='Map' centerTextPercent='100%'></Box>
      </View> 
      
    </View>
    <View style={{ height: '8%'}}></View>
  </>
    )
}
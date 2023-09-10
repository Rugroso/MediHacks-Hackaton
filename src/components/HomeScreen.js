import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import theme from '../theme';
import Constants from 'expo-constants';
import Box from './Box';
export default function HomeScreen(){
  
    return(
      <>
    <View style={{ flex: 1,  justifyContent: 'flex-start', alignItems: 'center', backgroundColor: theme.colors.bg}}>
    <Image
        style={{width: 150, height: 150, marginTop: '10%'}}
        source={{
          uri: 'https://freepngimg.com/thumb/categories/1786.png',
        }}
      />
      <Text style={{  fontSize: theme.size.h1, color: theme.colors.offwhite}}>Welcome Again!</Text>
      <View style={{ flex: 1, paddingBottom: '10%',width: '100%', flexWrap: 'wrap', alignContent: 'space-between',flexDirection: 'row', alignItems: '', justifyContent: 'space-evenly', marginTop: '5%'}}>
      <Box title='Meditation' description = 'Check out a recommended meditation program.' width='45%' height='30%' img='https://i.ibb.co/0qbnSyD/bg.png'></Box>
      <Box title='CalmPlay' description = 'Unwind and play.' width='45%' height='30%' img='https://i.ibb.co/5Yv3Lj2/bg2.png'></Box>
      <Box title='My Journey' description = 'Add daily notes to your personal blog.' width='92.5%' height='30%' route='Diary'></Box>
      <Box title='Therapist' description = 'Find professional help near you.' width='92.5%' height='30%' route='Map'></Box>
      </View> 
      
    </View>
    <View style={{ height: '8%'}}></View>
  </>
    )
}
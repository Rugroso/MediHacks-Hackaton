import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import theme from '../theme';
import Constants from 'expo-constants';
import Box from './Box';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
export default function SettingsScreen(){  
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
        
        <Text style={{  fontSize: (theme.size.h1)+10, color: theme.colors.offwhite, fontFamily: 'FiraSans-Bold'}}>Settings</Text>
        <View style={{ flex: 1, paddingBottom: '10%',width: '100%', flexWrap: 'wrap', alignContent: 'space-between',flexDirection: 'row', alignItems: '', justifyContent: 'space-evenly', marginTop: '5%'}}>
        

        <Box title='Edit Profile' width='90%' height='22.5%' img='https://i.ibb.co/W3yCVgd/bg5.png' textColor={theme.colors.offwhite} iconName='newspaper' direction='row' centerTextPercent='85%'></Box>
        <Box title='See Stats' width='90%' height='22.5%' img='https://i.ibb.co/T1qxf0D/bg6.png' textColor={theme.colors.offwhite} iconName='stats-chart' direction='row' centerTextPercent='85%'></Box>
        <Box title='Modify Evaluation' width='90%' height='22.5%' img='https://i.ibb.co/Zfsb2NY/bg8.png' textColor={theme.colors.offwhite} iconName='speedometer' direction='row' route='Evaluation' centerTextPercent='85%'></Box>
        <Box title='Manage App Preferences' width='90%' height='22.5%' img='https://i.ibb.co/QQ3GHJG/bg7.png' textColor={theme.colors.offwhite} iconName='flag' direction='row' centerTextPercent='85%'></Box>

        </View> 
        
      </View>
      <View style={{ height: '8%'}}></View>
    </>
    )
}
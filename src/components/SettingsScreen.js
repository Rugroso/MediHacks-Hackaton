import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import theme from '../theme';
import Constants from 'expo-constants';
import Box from './Box';
import {
  useFonts,
  Kanit_700Bold,
  
} from "@expo-google-fonts/kanit";
export default function SettingsScreen(){
  let [fontsLoaded] = useFonts({
    Kanit_700Bold,
    
  });
    return(
      <>
      <View style={{ flex: 1,  justifyContent: 'flex-start', alignItems: 'center', backgroundColor: theme.colors.bg}}>
      <Image
          style={{width: 150, height: 150, marginTop: '10%'}}
          source={{
            uri: 'https://freepngimg.com/thumb/categories/1786.png',
          }}
        />
        <Text style={{  fontSize: (theme.size.h1)+10, color: theme.colors.offwhite, fontFamily: 'Kanit_700Bold'}}>Settings</Text>
        <View style={{ flex: 1, paddingBottom: '10%',width: '100%', flexWrap: 'wrap', alignContent: 'space-between',flexDirection: 'row', alignItems: '', justifyContent: 'space-evenly', marginTop: '5%'}}>
        
        <Box title='Edit Profile' width='80%' height='22.5%' img='https://i.ibb.co/W3yCVgd/bg5.png' textColor={theme.colors.offwhite} iconName='newspaper' direction='row'></Box>
        <Box title='See Stats' width='80%' height='22.5%' img='https://i.ibb.co/T1qxf0D/bg6.png' textColor={theme.colors.offwhite} iconName='stats-chart' direction='row'></Box>
        <Box title='Modify Evaluation' width='80%' height='22.5%' img='https://i.ibb.co/Zfsb2NY/bg8.png' textColor={theme.colors.offwhite} iconName='speedometer' direction='row' forceflex='6%'></Box>
        <Box title='Manage App Preferences' width='80%' height='22.5%' img='https://i.ibb.co/QQ3GHJG/bg7.png' textColor={theme.colors.offwhite} iconName='flag' direction='row'></Box>
        </View> 
        
      </View>
      <View style={{ height: '8%'}}></View>
    </>
    )
}
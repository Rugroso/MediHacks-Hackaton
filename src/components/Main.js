import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from '../theme.js';
import HomeScreen from './HomeScreen.js';
import SettingsScreen from './SettingsScreen.js';
import UserScreen from './UserScreen.js';
import { useSafeAreaInsets, SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
const Tab = createBottomTabNavigator();
function Home() {
  return (
    <HomeScreen/>
    );
  }
  
  function Settings() {
    return (
      <SettingsScreen/>
      );
    }
    function User() {
      return (
        <UserScreen/>
        );
      }
    function NavContainer(){
      const insets = useSafeAreaInsets();
    return (
      <>
      
        <StatusBar backgroundColor={theme.colors.bg} style="light" />
      
         
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch(route.name){
              case 'Home': iconName = focused ? 'home' : 'home'; break;
              case 'Settings': iconName = focused ? 'settings' : 'settings'; break;
              case 'User': iconName = focused ? 'person' : 'person'; break;
            }
            
            return <Ionicons name={iconName} size={size+10} color={color} />;
          },
          tabBarActiveTintColor: theme.colors.offwhite,
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: theme.colors.dark, 
            height: '8%', 
            
           
            borderTopWidth:0,
            position: 'absolute',
            overflow: 'hidden',
            paddingBottom: -(insets.bottom),
            
          },
          tabBarLabelStyle: { marginBottom: 0,},
          tabBarIconStyle: { marginTop: 13, },
          headerShown: false,
          
        })}
        >
      <Tab.Screen name="Settings"  component={Settings} options={{ tabBarLabel: '' }}/>
      <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: '' }}/>
      <Tab.Screen name="User"  component={User} options={{ tabBarLabel: '' }}/>
    </Tab.Navigator>
    </>
      );
    }
export default function Main(){
    return(
      <SafeAreaProvider style={{ backgroundColor: theme.colors.dark }}>
      <SafeAreaView edges={['bottom', 'top']} style={{flex:1, backgroundColor: theme.colors.dark}}>
      <NavContainer></NavContainer>
      </SafeAreaView>
    </SafeAreaProvider>
    );
}
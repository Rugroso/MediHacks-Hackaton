import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import theme from '../theme';
import * as FileSystem from 'expo-file-system'
import { useFocusEffect } from '@react-navigation/core';

export default function UserScreen() {

  const [userData, setUserData] = useState(null)
  const fetchData = async () => {
    try{
      const filePath = `${FileSystem.documentDirectory}/userData.json`
      const content = await FileSystem.readAsStringAsync(filePath)
      const userData = JSON.parse(content)
      setUserData(userData)
    } catch(error){
      console.error('Error reading data: ', error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  const data = {
    labels: ['Mon', 'Thu', 'Wed', 'Tue', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      data: [2, 3, 4, 3, 3.5, 3, 2],
      strokeWidth: 2,
    }, {
      data: [1], // min value
      withDots: false //Make it transparent
    }, {
      data: [5], //max value
      withDots: false //Make it transparent
    }]
  };

  const handleDataPointClick = (point) => {
    console.log("Punto seleccionado:", point);
  };
  useFocusEffect(() => {
    fetchData()
  })
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={require('../data/Abraham.jpg')} style={styles.image} />
        <Text style={styles.name}>{userData ? userData.name : 'Please wait...'}</Text>
        <Text style={styles.location}>{userData ? userData.city : 'Please wait...'}, {userData ? userData.state : 'Please wait...'}</Text>
      </View>

      <View style={styles.arrow}>
        <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
        <Text style={{width: 150, textAlign: 'center', color: 'white', fontSize:25}}>This Week's Stats</Text>
        <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
      </View>

      <View style={styles.statsContainer}>
        <LineChart
          data={data}
          width={Dimensions.get('window').width - 40}
          height={220}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: theme.colors.bg,
            backgroundGradientFrom: theme.colors.bg,
            backgroundGradientTo: theme.colors.bg,
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: theme.colors.bg
            },
            propsForBackgroundLines: {
              strokeDasharray: ''
            }
          }}
          bezier
          onDataPointClick={handleDataPointClick}
          style={styles.chart}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg,
    alignItems: 'center',
    paddingTop: 10,
  },
  arrow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    shadowColor: '#FFF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 5,
  },
  location: {
    fontSize: 20,
    color: '#FFF',
    marginBottom: 10,
  },
  statsContainer: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chart: {
    marginVertical: 10,
    paddingBottom: 50,
  }
});
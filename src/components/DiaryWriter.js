import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import theme from '../theme';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const DiaryWriter = () => {
  const [entryText, setEntryText] = useState('');
  const [title, setTitle] = useState('');
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    // Load journal entries from AsyncStorage when the component mounts
    loadEntries();
  }, []);

  const loadEntries = async () => {
    try {
      const storedEntries = await AsyncStorage.getItem('journalEntries');
      if (storedEntries !== null) {
        setEntries(JSON.parse(storedEntries));
      }
    } catch (error) {
      console.error('Error loading journal entries:', error);
    }
  };

  const saveEntry = async () => {
    if (title && entryText) {
      try {
        const newEntry = {
            title: title,
            text: entryText,
            date: new Date().toString() 
        };
        const updatedEntries = [...entries, newEntry];
        await AsyncStorage.setItem(
          'journalEntries',
          JSON.stringify(updatedEntries)
        );
        setEntries(updatedEntries);
        setTitle('');
        setEntryText('');
      } catch (error) {
        console.error('Error saving journal entry:', error);
      }
    }
  };
  let [fontsLoaded] = useFonts({
    'FiraSans-Regular' : require('../data/fonts/FiraSans-Regular.ttf'),
    'FiraSans-Bold' : require('../data/fonts/FiraSans-Bold.ttf'),
})
if(!fontsLoaded){
    return<AppLoading/>
}
  return (
    <View style={styles.container}>
        <TextInput
        style={styles.titleinput}
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        multiline = {true}
        placeholder="Write your journal entry"
        value={entryText}
        onChangeText={(text) => setEntryText(text)}
      />
      <TouchableNativeFeedback onPress={saveEntry}>
        <Text style = {styles.button}>Save</Text>
      </TouchableNativeFeedback>
      <FlatList
        data={entries.reverse()}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.entryContainer}>
            <Text style={styles.entryTitle}>{item.title}</Text>
            <Text style={styles.entryText}>{item.text}</Text>
            <Text style={styles.entryDate}>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '15%',
    padding: 16,
    backgroundColor: theme.colors.offwhite,
  },
  entryTitle: {
    fontFamily: 'FiraSans-Bold',
    fontSize: theme.size.h2,
    color: theme.colors.dark,
  },
  titleinput: {
    fontSize: theme.size.h1,
    fontFamily: 'FiraSans-Bold',
    height: 40,
    borderColor: 'gray',
    borderWidth: 0,
    marginBottom: 8,
    paddingHorizontal: 8,
    borderRadius: 20,
  },
  input: {
    fontFamily: 'FiraSans-Regular',
    padding: 10,
    textAlignVertical: 'top',
    borderColor: 'gray',
    borderWidth: 0,
    marginBottom: 8,
    paddingHorizontal: 8,
    borderRadius: 20,
  },
  button: {
    alignSelf: 'center',
    paddingVertical: 10,
    textAlign: 'center',
    width: '80%',
    borderRadius: 20,
    fontFamily: 'FiraSans-Regular',
    backgroundColor: theme.colors.dark,
    color: theme.colors.offwhite,
  },
  entryContainer: {
    marginBottom: 16,
  },
  entryText: {
    fontSize: 16,
    fontFamily: 'FiraSans-Regular',
    color: theme.colors.dark,
  },
  entryDate: {
    fontSize: 12,
    color: theme.colors.block,
  },
});

export default DiaryWriter;

// ../data/entries.js

import AsyncStorage from '@react-native-async-storage/async-storage'; // You can use AsyncStorage for data persistence

// Function to add an entry to the JSON data
export const addEntry = async (newEntry) => {
  try {
    // Retrieve existing entries from AsyncStorage
    const existingEntries = await AsyncStorage.getItem('entries');
    const parsedEntries = JSON.parse(existingEntries) || [];

    // Append the new entry
    parsedEntries.push(newEntry);

    // Store the updated entries back in AsyncStorage
    await AsyncStorage.setItem('entries', JSON.stringify(parsedEntries));

    console.log('Entry added successfully');
  } catch (error) {
    console.error('Error adding entry:', error);
  }
};

// Export the JSON data (initially empty)
export const entries = [];

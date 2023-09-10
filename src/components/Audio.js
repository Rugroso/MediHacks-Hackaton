import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';
import { FontAwesome } from '@expo/vector-icons';

export default function AudioPlayer() {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(1);
  const [volume, setVolume] = useState(1.0);
  const [isLooping, setIsLooping] = useState(false);
  const [songTitle, setSongTitle] = useState("Prueba #1");

  useEffect(() => {
    if (sound) {
      sound.setIsLoopingAsync(isLooping);
    }
  }, [sound, isLooping]);

  async function playSound(url) {
    if (sound) {
      await sound.unloadAsync();
    }
    const { sound: newSound } = await Audio.Sound.createAsync(
       { uri: url }
    );
    setSound(newSound);

    newSound.setOnPlaybackStatusUpdate(status => {
      setProgress(status.positionMillis);
      setDuration(status.durationMillis || 1);
      setIsPlaying(status.isPlaying);
    });

    await newSound.playAsync(); 
  }

  async function togglePlayback() {
    if (!sound) return;
    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
  }

  async function handleSeek(value) {
    if (sound) {
      await sound.setPositionAsync(value);
    }
  }

  async function handleVolumeChange(value) {
    if (sound) {
      await sound.setVolumeAsync(value);
      setVolume(value);
    }
  }

  async function handleStop() {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(false);
    }
  }

  async function handleRestart() {
    if (sound) {
      await sound.setPositionAsync(0);
    }
  }

  function formatTime(ms) {
    const totalSeconds = ms / 1000;
    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor(totalSeconds / 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  async function togglePlayback() {
    if (!sound) {
        await playSound('https://www.soundjay.com/free-music/sounds/midnight-ride-01a.mp3');
    } else if (isPlaying) {
        await sound.pauseAsync();
    } else {
        await sound.playAsync();
    }
}

  return (
    <View style={styles.container}>
      <Image source={require('../data/superb-fairywren-8220199_1280.png')} style={styles.image} />
      <Text style={styles.songTitle}>{songTitle}</Text>
      
      <View style={styles.audioControls}>
        <Slider
          style={{ width: 300, height: 40 }}
          minimumValue={0}
          maximumValue={duration}
          value={progress}
          onSlidingComplete={handleSeek}
          thumbTintColor="#FFF"
          maximumTrackTintColor="#FFF"
          minimumTrackTintColor="blue"
        />
        <Text style={styles.timeText}>{formatTime(progress)} / {formatTime(duration)}</Text>

        <View style={styles.buttonsRow}>
          <FontAwesome name="backward" size={32} color="white" onPress={handleRestart} />
          <FontAwesome name={isPlaying ? 'pause' : 'play'} size={32} color="white" onPress={togglePlayback} />
          <FontAwesome name={isLooping ? 'repeat' : 'rotate-right'} size={isLooping ? 40 : 32} color={isLooping ? 'green' : '#ccc'} onPress={() => setIsLooping(!isLooping)} />
        </View>

        <View style={styles.volumeSlider}>
          <FontAwesome name="volume-down" size={24} color="white" />
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            value={volume}
            onValueChange={handleVolumeChange}
            thumbTintColor="#FFF"
            maximumTrackTintColor="#FFF"
            minimumTrackTintColor="blue"
          />
          <FontAwesome name="volume-up" size={30} color="white" />
        </View>
      </View>
    </View>
  )};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001F3F',
  },
  image: {
    width: 220,
    height: 220,
    borderRadius: 110,
    marginBottom: 30,
  },
  songTitle: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#FFF'
  },
  audioControls: {
    width: '90%',
    alignItems: 'center',
    marginVertical: 0,
  },
  timeText: {
    color: '#FFF',
    fontSize: 16,
    marginVertical: 5
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 20,
    marginbuttom:20
  },
  volumeSlider: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});
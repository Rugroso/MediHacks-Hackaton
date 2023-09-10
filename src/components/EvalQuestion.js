import React, {useState, useRef} from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TouchableNativeFeedback, Animated } from "react-native";
import entries from "../data/entries";
import Constants from "expo-constants";
import theme from "../theme";
import EntriesNotFound from "./EntriesNotFound";
const CircleButton = (props) => {
    
  
    return (
        <TouchableOpacity activeOpacity={1}
        style={{
          margin: props.margin,
          height: props.size,
          width: props.size,
          backgroundColor: props.color,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: props.size * 2,
          borderColor: props.bordercolor,
          borderWidth: 1,
          
        }}
        onPress={props.onPress}>
        <Text style={{color: props.textColor, fontSize: props.fontSize}}>
          {props.text}
        </Text>
      </TouchableOpacity>
    );
  };
  export default function EvalQuestion({ question }) {
    const [selectedButton, setSelectedButton] = useState(null);
  
    const handleButtonPress = (buttonNumber) => {
      setSelectedButton(buttonNumber);
    };
  
    return (
      <View
        style={{
          borderColor: theme.colors.offwhite,
          borderTopWidth: 1,
          width: "100%",
          height: "10.4%",
          marginTop: "4%",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: theme.colors.offwhite,
            textAlign: "center",
            marginTop: "5%",
            fontSize: theme.size.h2,
          }}
        >
          {question}
        </Text>
        <View style={{ flex: 1, flexDirection: "row", marginTop: "5%" }}>
          <CircleButton
            text="1"
            size={50}
            color={selectedButton === 1 ? theme.colors.offwhite : "#1c2436"}
            textColor={selectedButton === 1 ? theme.colors.dark : theme.colors.offwhite}
            fontSize={20}
            margin={10}
            bordercolor={selectedButton === 1 ? theme.colors.dark : theme.colors.offwhite}
            onPress={() => handleButtonPress(1)}
          />
          <CircleButton
            text="2"
            size={50}
            color={selectedButton === 2 ? theme.colors.offwhite : "#29344d"}
            textColor={selectedButton === 2 ? theme.colors.dark : theme.colors.offwhite}
            fontSize={20}
            margin={10}
            bordercolor={selectedButton === 2 ? theme.colors.dark : theme.colors.offwhite}
            onPress={() => handleButtonPress(2)}
          />
          <CircleButton
            text="3"
            size={50}
            color={selectedButton === 3 ? theme.colors.offwhite : "#384769"}
            textColor={selectedButton === 3 ? theme.colors.dark : theme.colors.offwhite}
            fontSize={20}
            margin={10}
            bordercolor={selectedButton === 3 ? theme.colors.dark : theme.colors.offwhite}
            onPress={() => handleButtonPress(3)}
          />
          <CircleButton
            text="4"
            size={50}
            color={selectedButton === 4 ? theme.colors.offwhite : "#4a5e8a"}
            textColor={selectedButton === 4 ? theme.colors.dark : theme.colors.offwhite}
            fontSize={20}
            margin={10}
            bordercolor={selectedButton === 4 ? theme.colors.dark : theme.colors.offwhite}
            onPress={() => handleButtonPress(4)}
          />
          <CircleButton
            text="5"
            size={50}
            color={selectedButton === 5 ? theme.colors.offwhite: "#5b73a8"}
            textColor={selectedButton === 5 ? theme.colors.dark : theme.colors.offwhite}
            fontSize={20}
            margin={10}
            bordercolor={selectedButton === 5 ? theme.colors.dark : theme.colors.offwhite}
            onPress={() => handleButtonPress(5)}
          />
        </View>
      </View>
    );
  }

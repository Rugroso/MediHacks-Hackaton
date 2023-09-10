import React from "react";
import { View, Text, StyleSheet } from "react-native";
import entries from "../data/entries";
import Constants from "expo-constants";
import theme from "../theme";
import EntriesNotFound from "./EntriesNotFound";
import DiaryWriter from "./DiaryWriter";

export default function Diary(){
    return(
        <DiaryWriter/>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.dark,
        height: '100%'
    }
})
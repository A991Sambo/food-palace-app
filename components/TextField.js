import { View, Text, useWindowDimensions, TextInput } from "react-native";
import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from "../pages/styles";

export default function TextField({icon, placeholder}) {
    const {height, width} = useWindowDimensions();
  return (
    <View style={[styles.textField, {}]}>
      <Ionicons name={icon} size={20} color="black" />
      <TextInput style={styles.textInput} placeholder={placeholder}  />
    </View>
  );
}

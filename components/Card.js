import { View, Text, useWindowDimensions, Image, Pressable } from "react-native";
import React from "react";
import styles from "../pages/styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import img from '../assets/food/papa.jpg';
import SecondaryBtn from "./SecondaryBtn";

export default function Card() {
    const {height, width} = useWindowDimensions();
  return (
    <View style={{...styles.card, height: height * 0.2}}>
      
      <Ionicons name={"md-heart"} style={styles.icon} size={20} color="black" />
    
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={img} resizeMode='contain' style={{...styles.cardImg, height: height*0.1}} />
        <View>
        <Text style={styles.catPara}>Rice & Stew</Text>
        <View style={{height: height *0.02}} />
        <Text style={{fontSize: 12}}>Delicious Rice & Stew</Text>
        <View style={{height: height *0.01}} />
        <Text style={{fontSize: 16}}>R 65.00</Text>
        </View>
      </View>
     <Pressable style={{...styles.btnPos}}>
     <Text style={styles.secBtnBtnText}>Remove</Text>
     </Pressable>
    </View>
  );
}

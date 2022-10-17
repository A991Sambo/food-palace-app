import { View, Text, Image } from "react-native";
import React from "react";
import styles from "../pages/styles";
import logo from '../assets/logo3.png';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Header({cartValue}) {
  return (
    <View style={styles.header}>
                <Image source={logo} style={styles.img} />
                <View style={styles.icons}>
                    <View style={styles.cart}>
                    <Ionicons name="md-cart" size={32} color="black" />
                    {cartValue>0&&<View style={styles.value}>
                        <Text style={styles.valueText}>{cartValue}</Text>
                    </View>}
                    </View>
                    <Ionicons name="md-ellipsis-vertical" size={32} color="black" />
                </View>
    </View>
  );
}

import { View, TextInput } from "react-native";
import React from "react";
import styles from "../pages/styles";

export default function PaymentInput({placeholder}) {
  return (
    <View style={styles.textField}>
      <TextInput placeholder={placeholder} />
    </View>
  );
}

import { View, Text, SafeAreaView, useWindowDimensions } from "react-native";
import React from "react";
import SecHeader from "../components/SecHeader";
import styles from "./styles";
import PaymentInput from "../components/PaymentInput";
import CustomeBtn from "../components/CustomeBtn";

export default function Payment({navigation}) {
    const {height, width} = useWindowDimensions();
    function toCart(){
        navigation.navigate('Cart')
      }
      function prevPage(){
        navigation.goBack();
      }
  return (
    <SafeAreaView style={styles.container}>
        <View style={{marginTop: '8%'}}>
        
        <SecHeader toCart={toCart} prevPage={prevPage} />
        <Text style={{...styles.catText, marginLeft: '5%'}}>Payment</Text>
        <View style={{width: '100%', alignItems: 'center'}}>
            <PaymentInput placeholder='Bank name' />
            <PaymentInput placeholder='Card number' />
            <PaymentInput placeholder='Cvv' />
            <PaymentInput placeholder='Expiry date' />
        </View>
        <View style={{height: height *0.05}} />
        <Text style={{...styles.catPara, marginLeft: '5%'}}>Total Price: R130.00</Text>
        <View style={{height: height *0.05}} />
        <CustomeBtn name='Pay' onPress={()=>alert('Thank you . Payment successful.')} />
        </View>
    </SafeAreaView>
  );
}

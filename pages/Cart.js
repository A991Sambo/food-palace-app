import { View, Text, SafeAreaView, ScrollView, useWindowDimensions } from "react-native";
import React from "react";
import styles from "./styles";
import SecHeader from "../components/SecHeader";
import CustomeBtn from "../components/CustomeBtn";
import Card from "../components/Card";

export default function Cart({navigation}) {
    const {height, width} = useWindowDimensions();
    function toPayment(){
        navigation.navigate('Payment')
      }
      function prevPage(){
        navigation.goBack();
      }
  return (
    <SafeAreaView style={styles.container}>
        <View style={{marginTop: '8%'}}>
        
        <SecHeader prevPage={prevPage} />
       
        <ScrollView style={{width: width, height: height*0.80,}}>
        <Text style={{...styles.catText, marginLeft: '5%'}}>Cart</Text>
         <Card />
         <Card />  
        </ScrollView>
        <View style={{elevation: 6, backgroundColor:'#fff'}}>
        <View style={{width: width*0.9, marginHorizontal: width*0.05}}>
            <Text style={styles.catPara}>Total Price: R130.00</Text>
            <View style={{height: height *0.05}} />
        </View>
        
        <CustomeBtn name='Checkout' onPress={toPayment} />
        <View style={{height: height *0.1, width: '100%', backgroundColor: '#484848'}} />
        </View>
        </View>
    </SafeAreaView>
  );
}

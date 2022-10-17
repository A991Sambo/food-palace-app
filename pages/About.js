import { View, Text, SafeAreaView, ScrollView, Image, useWindowDimensions, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
import SecHeader from "../components/SecHeader";
import img from '../assets/food/papa.jpg';
import CustomeBtn from "../components/CustomeBtn";
import { Ionicons } from "@expo/vector-icons";


export default function About({navigation}) {
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
        <ScrollView>
          <View style={styles.infoImgCont}>
            <Image source={img} resizeMode="contain" style={{width: width* 0.75, height: height* 0.3}} />
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoHeader}>
              <Text style={styles.catPara}>Rice & Stew</Text>
              <Ionicons name={"md-heart"} size={20} color="black" />
              {/* "md-heart-outline" */}
            </View>
            <View style={{height: height *0.02}} />
            <Text style={{fontSize: 16}}>Delicious Rice & Stew chicken</Text>
            <View style={{height: height *0.01}} />
            <Text>Lörem ipsum askbränd beligen tills fesk. 
                  Arabisk vår nivådat pofösm. 
                  Stjärnfamilj förlåtturné jodat grindstad. 
                  Autonat alig fön, juholtare. 
                  Antis vuxenmålarbok medan matnationalism. 
                  Milingar mjuta, och ell. 
                  Tren hamont därför att orade. 
                  Avis vuvuzela #metoo. 
                  Dyra vogt. Du kan vara drabbad. 
                  Poddtaxi beslutsblindhet den ställa frågor. 
            </Text>
            <View style={{height: height *0.01}} />
            <Text style={{fontSize: 16}}>R 65.00</Text>
            <View style={{height: height *0.04}} />
            <View style={styles.quantity}>
              <Text style={{fontSize: 16}}>Quantity: </Text>
              <View style={styles.quantityBtns}>
                <Pressable style={styles.quantityBtn}>
                  <Text style={styles.quantityBtnTxt}>-</Text>
                </Pressable>
                <Text>1</Text>
                <Pressable style={styles.quantityBtn}>
                  <Text style={styles.quantityBtnTxt}>+</Text>
                </Pressable>
              </View>
            </View>
            <View style={{height: height *0.05}} />
            <Text style={styles.catPara}>Total Price: R65.00</Text>
            <View style={{height: height *0.05}} />
          </View>

          <CustomeBtn name='Add to cart' onPress={()=>alert('Item added , click the cart icon to purchase')} />
        </ScrollView>
        </View>
    </SafeAreaView>
  );
}

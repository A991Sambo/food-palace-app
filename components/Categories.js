import { View, Text, ScrollView, Pressable, useWindowDimensions } from "react-native";
import React, {useState} from "react";
import styles from "../pages/styles";

export default function Categories() {
    const categories = ['All', 'full plates', 'half plates', 'water', 'cold drinks',];
    const {height,width} = useWindowDimensions();
    const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <View style={{width: width * 0.9}}>
      <ScrollView 
      style={{width: width * 0.9}} 
      horizontal 
      showsHorizontalScrollIndicator={false}>
            {
                categories.map((item, index)=>{
                    return <Pressable 
                                onPress={()=>setSelectedIndex(index)}
                                style={[styles.catBtn,
                                    selectedIndex===index ?
                                        styles.catBtnSelected : styles.catBtnUnselected]} 
                                key={index}>
                                <Text style={[styles.catPara,selectedIndex===index ? 
                                        styles.catParaSelected : styles.catParaUnselected]}>{item}</Text>
                    </Pressable>
                })
            }
      </ScrollView>
    </View>
  );
}

import { View, Text, SafeAreaView, Image, useWindowDimensions, KeyboardAvoidingView, TouchableOpacity,Pressable} from "react-native";
import React,{useState} from "react";
import TextField from "../components/TextField";
import styles from "./styles";
import logo from '../assets/logo.png';
import CustomeBtn from "../components/CustomeBtn";
import SecondaryBtn from "../components/SecondaryBtn";
import { TextInput } from "react-native-web";


//firebase
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
  

export default function Login({navigation}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 
    const {height, width} = useWindowDimensions();

    //login function
    function login(){
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        navigation.navigate('Home')
        console.log('logged in successfully')

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
     
    }

     function toSignUp(){
      console.log('navigate to signup')
      navigation.navigate('Signup')
     }
     console.log(email)
  return (
    <SafeAreaView style={styles.container}>

                <View style={[styles.imgContainer,{marginTop:200 , height: 0.1, marginBottom: height* 0.01}]}>
                    <Image source={logo} resizeMode='cover' style={{width: '44.5%', height: height*0.2,}} />
                </View>



        <KeyboardAvoidingView style={{width: width, alignItems: 'center', marginTop:200}}>
            <View style={styles.imgContainer}>
                <Image source={logo} resizeMode='contain' style={{width: '50%'}} />
            </View>
            <TextInput style={{width:300, paddingLeft:5 , borderRadius: 25,  borderWidth:2}} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"></TextInput>
            <br></br>
            <TextInput style={{width:300, paddingLeft:5 ,  borderRadius: 25, borderWidth:2}} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"></TextInput>
            {/* <TextField  icon='md-mail' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}> </TextField>
            <TextField icon='md-lock-closed' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} /> */}
            <View style={{marginTop: '15%'}} />
            <CustomeBtn name='Sign in' onPress={login} />
            <View style={{marginTop: '6%'}} /> 
            <SecondaryBtn name='Forgot Password?' />
            <SecondaryBtn name='Dont have an account?' onPress={toSignUp} />
       
                  
                  
           
        </KeyboardAvoidingView>                                             
    </SafeAreaView>
  );

}
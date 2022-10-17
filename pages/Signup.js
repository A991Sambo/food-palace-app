import {
  View,
  Text,
  SafeAreaView,
  Image,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, {useState}from "react";
import TextField from "../components/TextField";
import styles from "./styles";
import logo from "../assets/logo.png";
import CustomeBtn from "../components/CustomeBtn";
import SecondaryBtn from "../components/SecondaryBtn";
import { TextInput } from "react-native-web";
//firebase
import { auth } from "./firebase";
import { db } from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";


export default function Signup({ navigation }) {
  const [FirstName, setFirstName] = useState("")
  const [LastName, setLastName] = useState("")
  const [Email, setEmail] = useState("")
  const [MobileNumber, setMobileNumber] = useState("")
  const [Password, setPassword] = useState("")

 console.log(FirstName,LastName,MobileNumber, Email,Password)
  const { height, width } = useWindowDimensions();

  const Signup = () => {
    createUserWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        // Signed in
        const userD = userCredential.user;
        // ...
        console.log("registered succesfully")
 

        const userRef =collection(db,"users")
        const user = {
            Uid:userD.uid,
            FirstName : FirstName,
            LastName: LastName,
            Email: Email,
            MobileNumber: MobileNumber,
            Password: Password,
     
            
        }
        addDoc(userRef,user).then(()=>{
            navigation.navigate("Home");
        })
    
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log("error loggin");
      });


  };

  function login() {
    
    navigation.navigate("login");
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <KeyboardAvoidingView style={{ width: width, alignItems: "center" }}>
          <View
            style={[
              styles.imgContainer,
              { marginTop: height * 0.1, marginBottom: height * 0.05 },
            ]}
          >
            <Image
              source={logo}
              resizeMode="cover"
              style={{ width: "44.5%", height: height * 0.2 }}
            />
          </View>

          <TextInput style={{width:300, paddingLeft:5 , borderRadius: 25,  borderWidth:2}} onChange={(e)=>setFirstName(e.target.value)} placeholder="Enter First Name"></TextInput>
          <br></br>
          <TextInput style={{width:300, paddingLeft:5 , borderRadius: 25,  borderWidth:2}} onChange={(e)=>setLastName(e.target.value)} placeholder="Enter Last Name"></TextInput>
          <br></br>
          <TextInput style={{width:300, paddingLeft:5 , borderRadius: 25,  borderWidth:2}} onChange={(e)=>setMobileNumber(e.target.value)} placeholder="Enter Mobile Number"></TextInput>
          <br></br>
          <TextInput style={{width:300, paddingLeft:5 , borderRadius: 25,  borderWidth:2}} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"></TextInput>
          <br></br>
          <TextInput style={{width:300, paddingLeft:5 , borderRadius: 25,  borderWidth:2}} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"></TextInput>
          <br></br>
          



          
          <View style={{ marginTop: "7%" }} />
          <CustomeBtn name="Sign up" onPress={Signup} />
          <View style={{ marginTop: "5%" }} />
          <SecondaryBtn name="Already have an account?" onPress={ login} />
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

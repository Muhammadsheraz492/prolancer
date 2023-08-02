/** @format */
import React, { useState } from "react";

import {

  View,
  Text,

  TouchableOpacity,
  Dimensions,
  Modal,
  ActivityIndicator,
} from "react-native";

import FormInput from "../Components/FormInput";
import LoginBtn from "../Components/Loginbtn";
import Entypo from "react-native-vector-icons/Entypo";
import Loader from "./Loader";
import { auth } from "../firebase/firebase";
import {createUserWithEmailAndPassword} from 'firebase/auth'
const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [username, setusername] = React.useState();
  const [phone, setphone] = React.useState();
  const [loader,setloader]=useState(false);

const CreateUser=()=>{
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  
}

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "17%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: "10%",
          }}
        />
        <View
          style={{
            width: "95%",
            height: 30,
          }}
        >
                    
      
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo name="chevron-thin-left" size={30} />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 28,
            color: "#3E4A59",
            fontWeight: "800",
          }}
        >
          Get started now
        </Text>
        <View
          style={{
            height: "3%",
          }}
        />
      </View>

      <View
        style={{
          height: "74%",
          //   backgroundColor: "pink",
          alignItems: "center",
          width: "100%",
        }}
      >ß
        <FormInput
          // style={styles.input}

          onChangeText={(username) => setusername(username)}
          // value={text}
          labelValue={username}
          // secureTextEntry={true}
          // keyboardType="email-address"
          placeholder="username"
          autoCapitalize="none"
          autocorrect={false}
        />
        <FormInput
          // style={styles.input}
          onChangeText={(userEmail) => setEmail(userEmail)}
          // value={text}
          labelValue={email}
          // secureTextEntry={true}
          // keyboardType="email-address"
          placeholder="Email"
          autoCapitalize="none"
          autocorrect={false}
        />
        <FormInput
          // style={styles.input}
          onChangeText={(userPassword) => setPassword(userPassword)}
          // value={text}
          labelValue={password}
          secureTextEntry={true}
          placeholder="Password"
        />
        <FormInput
          // style={styles.input}
          onChangeText={(phone) => setphone(phone)}
          // value={text}
          labelValue={phone}
          // secureTextEntry={true}
          // keyboardType=""
          placeholder="Mobile phone number with country code "
        />

        {/* </TouchableOpacity> */}
        <View
          style={{
            height: "44%",
          }}
        />
        <TouchableOpacity
          style={{
            width: "100%",
            height: 46,
            alignItems: "center",
          }}
          onPress={() => {
setloader(true)
CreateUser();

          }}
        >
          <LoginBtn
            color="#003399"
            textcolor="#fff"
            textfontsize={23}
            name="Signup"

          />
        </TouchableOpacity>
      </View>
      <Modal  visible={loader}  transparent>
    <View  style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    <ActivityIndicator  size={"large"} color={"black"} />

    </View>
  </Modal>
    
    </View>
  );
};

export default SignUpScreen;

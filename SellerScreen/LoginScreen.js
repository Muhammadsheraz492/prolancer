/** @format */
import React, { useState } from "react";
// import ax
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  ImageBackground,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import FormInput from "../Components/FormInput";
import LoginBtn from "../Components/Loginbtn";


const LoginScreen = ({ navigation }) => {
  const [username, setuserName] = React.useState();
  const [password, setPassword] = React.useState();




  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
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

          paddingLeft: "3%",
          height: 30,
          // backgroundColor: "pink",
        }}
      >
        
      </View>
      <View
        style={{
          width: "100%",
          height: "14%",
          // paddingTop: "14%",
          // backgroundColor: "pink",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 35,
            color: "#3E4A59",
            fontWeight: "800",
          }}
        >
         Prolancer
        </Text>
        <Text
          style={{
            fontSize: 24,
            color: "#3E4A59",
            // fontWeight: "800",
          }}
        >
          Login Now
        </Text>
        <View
          style={{
            height: "6%",
          }}
        />
        <Text
          style={{
            fontSize: 15,
            color: "#8B959A",
            // fontWeight: "800",
          }}
        >
          Please login to continue using our app.
        </Text>
      </View>
      <View
        style={{
          height: "3%",
        }}
      />
      
   
      <View
        style={{
          height: "35%",
          // backgroundColor: "pink",
          alignItems: "center",
          width: "100%",
        }}
      >
        <FormInput
          // style={styles.input}
          onChangeText={(username) => setuserName(username)}
          // value={text}
          labelValue={username}
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
        
        <View
          style={{
            height: "24%",
          }}
        />
        <TouchableOpacity
          style={{
            width: "100%",
            height: 46,
            alignItems: "center",
          }}
          onPress={() => {
        
            navigation.navigate("Tab");
          }}
        >
          <LoginBtn
            color="#003399"
            textcolor="#fff"
            textfontsize={23}
            name="Login"
          />
        </TouchableOpacity>
        <View
          style={{
            height: "10%",
          }}
        />
        <TouchableOpacity
          style={{
            width: "100%",
            height: 46,
            alignItems: "center",
          }}
          onPress={() => {
        
            navigation.navigate("SignUpScreen");
          }}
        >
          <LoginBtn
            color="#003399"
            textcolor="#fff"
            textfontsize={23}
            name="SignUp"
          />
        </TouchableOpacity>
        <View
          style={{
            height: "3%",
          }}
        />
      </View>
    </View>
  );
};

export default LoginScreen;

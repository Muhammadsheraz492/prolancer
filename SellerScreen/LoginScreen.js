/** @format */
import React, { useState ,useEffect} from "react";
import Constants from 'expo-constants';
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
  ActivityIndicator,
  Modal,
} from "react-native";
import { NotificationPermissionsStatus, requestPermissionsAsync, getExpoPushTokenAsync } from 'expo-notifications';
import FormInput from "../Components/FormInput";
import LoginBtn from "../Components/Loginbtn";
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
const LoginScreen = ({ navigation }) => {
  const [username, setuserName] = React.useState();
  const [password, setPassword] = React.useState();
  const [loader,setloader]=useState(false);
  useEffect(() => {
    registerForPushNotificationsAsync().then((val)=>{
      console.log(val);
    })
  }, []);


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
      <Modal  visible={loader}  transparent>
    <View  style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    <ActivityIndicator  size={"large"} color={"black"} />

    </View>
  </Modal>
    </View>
  );
};

export default LoginScreen;
async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}
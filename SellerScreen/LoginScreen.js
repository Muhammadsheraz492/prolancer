/** @format */
import React, { useState ,useEffect} from "react";
import Constants from 'expo-constants';
// import ax
import {
  
  View,
  Text,
  
  TouchableOpacity,
  Modal,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { NotificationPermissionsStatus, requestPermissionsAsync, getExpoPushTokenAsync } from 'expo-notifications';
import FormInput from "../Components/FormInput";
import LoginBtn from "../Components/Loginbtn";
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth, firestore } from "../firebase/firebase";
import { query,where,collection,doc ,getDocs, updateDoc} from "firebase/firestore";
const projectId = Constants.expoConfig.extra.eas.projectId;
const LoginScreen = ({ navigation }) => {
  const [username, setuserName] = React.useState();
  const [password, setPassword] = React.useState();
  const [loader,setloader]=useState(false);
  const [Device_token,SetDevice_token]=useState("")
  useEffect(() => {
    registerForPushNotificationsAsync().then((val)=>{
      SetDevice_token(val);
    })
  }, []);
  const Signin = () => {
    setloader(true);

    signInWithEmailAndPassword(auth, username, password)
      .then(() => {
        console.log("Signed in");
        const usersRef = collection(firestore, "user");
        const q = query(usersRef, where("user_email", "==", username));
        const Data = {
          device_token: Device_token,
        };

        try {
          getDocs(q)
            .then((querySnapshot) => {
              const doc_ids = [];

              querySnapshot.forEach((doc1) => {
                console.log("Document ID:", doc1.id);
                const documentRef = doc(firestore, "user", doc1.id);

                try {
                  updateDoc(documentRef, Data)
                    .then(() => {
                      console.log("Document updated successfully.");
                      doc_ids.push(doc1.id);
                    })
                    .catch((error) => {
                      console.error("Error updating document:", error);
                    });
                } catch (error) {
                  console.error("Error updating document:", error);
                }
              });

              // After all documents are updated, navigate to the "SelectSkill" screen
              navigation.replace("SelectSkill", {
                doc_ids: doc_ids, // Pass the array of doc_ids
              });
            })
            .catch((err) => {
              console.log("Get Doc", err);
              setloader(false);
            });
        } catch (error) {
          console.error("Get Doc", error);
          setloader(false);
        }
      })
      .catch((err) => {
        setloader(false);
        console.log(err);
      });
  };

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
        
            Signin();
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
    token = (await Notifications.getExpoPushTokenAsync({projectId})).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}
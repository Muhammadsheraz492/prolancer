/** @format */

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from "react-native-safe-area-context";
import LoginScreen from "./SellerScreen/LoginScreen";
import SignUpScreen from "./SellerScreen/SignUpScreen";

import JobList from "./BuyerScreen/JobList";
import Purposal from "./BuyerScreen/Purposal";
import BuyerChat from "./BuyerScreen/BuyerChat";
import More from "./BuyerScreen/More";
import SelectSkill from "./SellerScreen/SelectSkill";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import Constants from 'expo-constants';


// console.log('Project ID:', projectId);

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="LoginScreen"
            component={LoginScreen}
          />
            <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="SignUpScreen"
            component={SignUpScreen}
          />
            <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="SelectSkill"
            component={SelectSkill}
          />
           <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Tab"
            component={TabNavi}
          />
        
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}


const TabNavi = () => {
  return (
    <Tab.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="JobList"
    >
      <Tab.Screen name="JobList" component={JobList} />
      <Tab.Screen name="Purposal" component={Purposal} />
      <Tab.Screen name="BuyerChat" component={BuyerChat} />
      <Tab.Screen name="More" component={More} />
     
    </Tab.Navigator>
  );
};
export default App;
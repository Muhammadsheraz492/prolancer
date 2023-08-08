/** @format */

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
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
import PostProject from "./BuyerScreen/PostProject";
import Notifications from "./BuyerScreen/Notifications";
import Bids from "./BuyerScreen/Bids";
import FQ from "./BuyerScreen/FQ";
import About from "./BuyerScreen/About";
import Support from "./BuyerScreen/Support";
import BidDetail from "./BuyerScreen/BidDetail";
import Tasklist from "./BuyerScreen/Tasklist";
import FileUpload from "./BuyerScreen/FileUpload";
import Chat from "./BuyerScreen/Chat";
import TaskDetail from "./BuyerScreen/TaskDetail";
import JobDetail from "./BuyerScreen/JobDetail";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
            name="Tab"
            component={TabNavi}
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
            name="PostProject"
            component={PostProject}
          />
           <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Notifications"
            component={Notifications}
          />
            <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Bids"
            component={Bids}
          />
            <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="FQ"
            component={FQ}
          />
            <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="About"
            component={About}
          />
           <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Support"
            component={Support}
          />
            <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="BidDetail"
            component={BidDetail}
          />
           
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Tasklist"
            component={Tasklist}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="FileUpload"
            component={FileUpload}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Chat"
            component={Chat}
          />
           <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="TaskDetail"
            component={TaskDetail}
          />
           <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="JobDetail"
            component={JobDetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}


const TabNavi = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="JobList"
    >
      <Tab.Screen
        name="JobList"
        component={JobList}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'search' : 'search-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Purposal"
        component={Purposal}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'ios-paper-plane' : 'ios-paper-plane-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="BuyerChat"
        component={BuyerChat}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? 'chat' : 'chat-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'list' : 'list-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default App;
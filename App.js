/** @format */

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from "react-native-safe-area-context";
import LoginScreen from "./SellerScreen/LoginScreen";
import SignUpScreen from "./SellerScreen/SignUpScreen";
import * as Notifications from 'expo-notifications';
import JobList from "./BuyerScreen/JobList";
import Purposal from "./BuyerScreen/Purposal";
import BuyerChat from "./BuyerScreen/BuyerChat";
import More from "./BuyerScreen/More";
import SelectSkill from "./SellerScreen/SelectSkill";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import Constants from 'expo-constants';
import PostProject from "./BuyerScreen/PortProject";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import JobDetail from "./BuyerScreen/JobDetails";
import Bids from "./BuyerScreen/Bids";
import BidDetail from "./BuyerScreen/BidDetails";


// console.log('Project ID:', projectId);
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
function App() {
  React.useEffect(() => {
    // Add this inside your useEffect
    const subscription = Notifications.addNotificationResponseReceivedListener(response => {
      // Handle notification response (e.g., navigate to a specific screen)
      console.log(response);
    });
  
    return () => subscription.remove();
  }, []);
  
  return (
    <Provider  
    store={store}

    >

   
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
            name="JobDetail"
            component={JobDetail}
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
            name="BidDetail"
            component={BidDetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
    </Provider>
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
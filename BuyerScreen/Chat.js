




import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Entypo from "react-native-vector-icons/Entypo";

function Chat({navigation}) {
  const [focusedTab, setFocusedTab] = useState('Dashboard');


  return (
    <View
    style={{
      flex: 1,
    // alignItems:"center",
      backgroundColor: "white",
    }}
  >
   <View
          style={{
            width: "95%",
            height: 30,
            marginLeft:5
          }}
        >
                    
      
          <TouchableOpacity onPress={() => {navigation.navigate("Bids")}}>
            <Entypo name="chevron-thin-left" size={30} />
          </TouchableOpacity>
          </View>
    <Text
    style=
    {{
      fontSize:20,
      fontWeight:"bold",
      alignSelf:"center",
      color:"#000000"
    }}
    >

Chat
    </Text> 
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingVertical: 10,
          // postion:"absoulte",
          width:"100%",
          position:"absolute",
          bottom: 0, 
          backgroundColor: '#ffffff', // Customize tab bar background color
        }}
      >
        <TouchableOpacity onPress={
          ()=>{

    navigation.navigate("Tasklist")
          }


        } style={{ alignItems: 'center' }}>
          <Ionicons
            name={focusedTab === 'Dashboard' ? 'ios-list' : 'ios-list'}
            size={24}
            color={focusedTab === 'Dashboard' ? '#000000' : '#000000'}
          />
          <Text style={{ color: focusedTab === 'Dashboard' ? '#000000' : '#000000' }}>Tasklist</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() =>{

navigation.navigate("Chat")
      }} style={{ alignItems: 'center' }}>
          <Ionicons
            name={focusedTab === 'BuyerChat' ? 'chatbubble' : 'chatbubble'}
            size={24}
            color={focusedTab === 'BuyerChat' ? '#000000' : '#000000'}
          />
          <Text style={{ color: focusedTab === 'BuyerChat' ? '#000000' : '#000000' }}>Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() =>{

navigation.navigate("FileUpload")
      }} style={{ alignItems: 'center' }}>
          <MaterialCommunityIcons
            name={focusedTab === 'FileUpload' ? 'file-upload' : 'file-upload'}
            size={24}
            color={focusedTab === 'FileUpload' ? '#000000' : '#000000'}
          />
          <Text style={{ color: focusedTab === 'FileUpload' ? '#000000' : '#000000' }}>File Upload</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Chat;

import { View, Text,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Splash() {
    let navigation=useNavigation()
    setTimeout(() => {
        navigation.navigate("Swipers")
    }, 3000);
  return (
    <View  style={{flex:1,alignItems:"center",justifyContent:"center"}}>
    <Image  style={{width:"90%",height:60}}  source={require("../assets/Logo.png")} />
    </View>
  )
}
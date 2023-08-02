import { View, Text } from 'react-native'
import React from 'react'

export default function JobList() {
  return (
    <View
    style={{
      flex: 1,
      backgroundColor: "white",
    }}
  >

    <Text
    style=
    {{
      fontSize:20,
      fontWeight:"bold",
      alignSelf:"center",
      color:"#000000"
    }}
    >

      Job Lists
    </Text>
    </View>
  )
}
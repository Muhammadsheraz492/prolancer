import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

export default function TaskDetail({ route, navigation }) {
  const { Tasktitle } = route.params;

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <View style={{ width: '95%', height: 30, marginTop: 20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo name="chevron-thin-left" size={30} />
        </TouchableOpacity>
      </View>
     

      <View style={{ width: '90%', alignSelf: 'center' }}>
        <Text style={styles.heading}>Task Detail</Text>
        <View style={{ height: 30 }} />

   

        <Text style={styles.jobDetail}>{Tasktitle}</Text>
        <View style={{ height: 20 }} />

      

      

        <TouchableOpacity style={styles.dashboardButton2} onPress={() => navigation.navigate('Tasklist')}>
          <Text style={styles.dashboardButtonText}>Pending</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dashboardButton} onPress={() => navigation.navigate('Tasklist')}>
          <Text style={styles.dashboardButtonText}>In Progress</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dashboardButton} onPress={() => navigation.navigate('Tasklist')}>
          <Text style={styles.dashboardButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#000000',
  },
  subText: {
    fontSize: 14,
    color: 'grey',
  },
  jobDetail: {
    fontSize: 16,
    alignSelf: 'center',
    color: '#000000',
  },
  skill: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
  proposalTextContainer: {
    borderWidth: 1,
    borderColor: '#EAEAEA',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  proposalText: {
    fontSize: 16,
    color: '#000000',
  },
  dashboardButton: {
    backgroundColor: '#000000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'center',
    alignItems:"center",
    width:"50%",
    marginTop: 20,
    marginBottom:20
  },
  dashboardButton2: {
    backgroundColor: 'grey',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'center',
    alignItems:"center",
    width:"50%",
    marginTop: 20,
    marginBottom:20
  },
  dashboardButton3: {
    backgroundColor: '#FF0000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'center',
    alignItems:"center",
    width:"50%",
    marginTop: 20,
    marginBottom:20
  },
  dashboardButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

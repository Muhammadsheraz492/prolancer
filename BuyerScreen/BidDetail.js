import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export default function BidDetail({ route, navigation }) {
  const { JobDetail, Username, Skill } = route.params;
  const [selectedStatus, setSelectedStatus] = useState(null);

  const handleButtonPress = (status) => {
    setSelectedStatus(status);
  };

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
        <Text style={styles.heading}>Bid Detail</Text>
        <View style={{ height: 30 }} />

        <Text style={styles.subText}>{Username}</Text>
        <View style={{ height: 10 }} />

        <Text style={styles.jobDetail}>{JobDetail}</Text>
        <View style={{ height: 20 }} />

        <Text style={styles.skill}>{Skill}</Text>
        <View style={{ height: 30 }} />

        <Text style={styles.heading}>Proposal</Text>
        <View style={styles.proposalTextContainer}>
          <Text style={styles.proposalText}>
            This is a dummy text for the proposal. You can replace this with your actual proposal text.
          </Text>
        </View>

        {!selectedStatus && (
          <View>
            <TouchableOpacity
              style={styles.dashboardButton}
              onPress={() => handleButtonPress('Approved')}
            >
              <Text style={styles.dashboardButtonText}>Approved</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dashboardButton3}
              onPress={() => handleButtonPress('Rejected')}
            >
              <Text style={styles.dashboardButtonText}>Rejected</Text>
            </TouchableOpacity>
          </View>
        )}

        {selectedStatus === 'Approved' && (
          <TouchableOpacity
            style={styles.dashboardButton}
            onPress={() => navigation.navigate('Tasklist')}
          >
            <Text style={styles.dashboardButtonText}>Dashboard</Text>
          </TouchableOpacity>
        )}

        {selectedStatus === 'Rejected' && (
          <TouchableOpacity
          disabled
            style={styles.dashboardButtondisable}
            onPress={() => handleButtonPress('Cancelled')}
          >
            <Text style={styles.dashboardButtonText}>Cancelled</Text>
          </TouchableOpacity>
        )}

        {selectedStatus === 'Cancelled' && (
          <TouchableOpacity
            style={styles.dashboardButton}
            onPress={() => navigation.navigate('Tasklist')}
          >
            <Text style={styles.dashboardButtonText}>Dashboard</Text>
          </TouchableOpacity>
        )}
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
  dashboardButtondisable: {
    backgroundColor: 'lightgrey',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'center',
    alignItems:"center",
    width:"50%",
    marginTop: 20,
    marginBottom:20
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
  dashboardButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

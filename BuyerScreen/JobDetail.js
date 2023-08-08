import { View, Text, StyleSheet, ScrollView, TouchableOpacity , TextInput} from 'react-native';
import React , {useState}from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

export default function JobDetail({ route, navigation }) {
  const { JobDeta, Username, Skill } = route.params;
  const [proposalText, setProposalText] = useState('');
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
        <Text style={styles.heading}>Job Detail</Text>
        <View style={{ height: 30 }} />

        <Text style={styles.subText}>{Username}</Text>
        <View style={{ height: 10 }} />

        <Text style={styles.jobDetail}>{JobDeta}</Text>
        <View style={{ height: 20 }} />

        <Text style={styles.skill}>{Skill}</Text>
        <View style={{ height: 30 }} />

        <Text style={styles.heading}>Write your Purposal</Text>
        <View style={styles.proposalTextContainer}>
          <TextInput
            style={styles.proposalText}
            multiline={true}
            numberOfLines={5}
            placeholder="Write your proposal here..."
            value={proposalText}
            onChangeText={text => setProposalText(text)}
          />
        </View>

        <TouchableOpacity style={styles.dashboardButton} onPress={() => navigation.navigate('Tasklist')}>
          <Text style={styles.dashboardButtonText}>Apply</Text>
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
    height: 70, // Set the height of the TextInput
  },
  skill: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
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

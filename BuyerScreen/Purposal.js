
import { View, Text , TextInput,StyleSheet , FlatList} from 'react-native'
import React from 'react'

export default function Purposal() {
  const [search, setsearch] = React.useState();
  const [data, setdata] = React.useState([]);
  const [originalData, setoriginalData] = React.useState([]);
  const searchFilter = text => {
    if (text) {
      const newdata = originalData.filter(item => {
        const itemdata = item.bas_route
          ? item.bas_route.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemdata.indexOf(textData) > -1;
      });
      setdata(newdata);
      setsearch(text);
    } else {
      setdata(originalData);
      setsearch(text);
    }
  };
  const Jobs = [
    {
      JobDetail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      Username: 'Username',
      
    },
    {
      JobDetail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  
      Username: 'Username',
  
    },
    {
      JobDetail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      Username: 'Username',
      
    },
    {
      JobDetail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  
      Username: 'Username',
  
    },
    {
      JobDetail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      Username: 'Username',
      
    },
    {
      JobDetail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  
      Username: 'Username',
  
    },
    {
      JobDetail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      Username: 'Username',
      
    },
    {
      JobDetail: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  
      Username: 'Username',
  
    },
  
  ];
  return (
    <View
    style={{
      flex: 1,
    alignItems:"center",
      backgroundColor: "white",
    }}
  >
 <View
          style={{
            height: "6%",
          }}
        />
    <Text
    style=
    {{
      fontSize:20,
      fontWeight:"bold",
      alignSelf:"center",
      color:"#000000"
    }}
    >

Purposal Lists
    </Text>
    <View
        style={{
          width: '90%',
          alignSelf: 'center',
          marginTop: 20,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: '100%',
            height: 44,
            backgroundColor: '#EEEEEE',
            borderRadius: 8,
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
        
          <TextInput
            style={styles.input}
            onChangeText={text => searchFilter(text)}
            placeholderTextColor="#969696"
            value={search}
            placeholder="Search Purposal"
            autocorrect={false}
            autoCapitalize="none"
          />
        </View>
        
      </View>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
        marginBottom:10,
        height:"80%"
        }}>
        <FlatList
          data={Jobs}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View
              style={{
                width: '100%',
        marginBottom:10
             ,
                backgroundColor: '#F1F1F1',
                borderRadius: 10,
                marginTop: 10,
                padding:20,
              
               
         
              }}>
            
                <Text
                  style={{
                    fontSize: 17,
                    color: '#000000',
                    // fontWeight: 'bold',
                  }}>
                  {item.JobDetail.slice(0, 50)+"  ..."}
                </Text>
              
                  <Text
                    style={{
                      marginTop:10,
                      fontSize: 15,
                      color: '#5B5B5B',
                      // fontWeight:"bold"
                    }}>
                    {item.Username}
                  </Text>
                 
                
           
            
            </View>
          )}
        />
      </View>
      
    </View>
  )
}


const styles = StyleSheet.create({
  activityIndicatorContainer: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },

  input: {
    // borderWidth: 1,
    borderColor: '#FFB800',
    borderRadius: 5,
    // padding: 10,
    //   margin: 10,

    // height: 53,
    height: 44,

    width: '100%',
    marginLeft: 5,
    color: '#000000',
  },
});

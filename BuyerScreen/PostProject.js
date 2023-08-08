import { View, Text, ScrollView , TouchableOpacity} from 'react-native'; // Import ScrollView
import React , {useState}from 'react';
import FormInput from "../Components/FormInput";
import LoginBtn from "../Components/Loginbtn";
import Entypo from "react-native-vector-icons/Entypo";
export default function PostProject({navigation}) {
  const [PostProject, setPostProject] = React.useState();
  const [Budget, setBudget] = React.useState();
  const [PostProjectDes, setPostProjectDes] = React.useState();
  const radioOptions = [
    { label: 'Android', value: 'option1' },
    { label: 'Ios', value: 'option2' },
    { label: 'Both', value: 'option3' },
    // Add more options as needed
  ];
  const Price = [
    { label: 'Pay by hours', value: 'option1' },
    { label: 'Pay Fixed Price', value: 'option2' },
  
    // Add more options as needed
  ];
  const [radioValue, setRadioValue] = useState(radioOptions[0].value);
  const [PriceValue, setPriceValue] = useState(Price[0].value);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}
    >
     
      <ScrollView
        contentContainerStyle={{
        //   alignItems: 'center', // You can change this based on your content alignment needs
          paddingVertical: 20, // Optional, add padding if required
        }}
      >
 <View
          style={{
            width: "95%",
            height: 30,
          }}
        >
                    
      
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo name="chevron-thin-left" size={30} />
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 20,marginTop:20, fontWeight: 'bold', alignSelf:"center" }}>Post a Project</Text>
      
     <FormInput
          // style={styles.input}
          onChangeText={(PostProject) => setPostProject(PostProject)}
          // value={text}
          labelValue={PostProject}
          // secureTextEntry={true}
          // keyboardType="email-address"
          placeholder="Project Name"
          autoCapitalize="none"
          autocorrect={false}
        />
        <Text style={{ fontSize: 14,  marginLeft:18}}>What platform do you want the app to be developed for?</Text>

       {radioOptions.map((option) => (
          <TouchableOpacity
            key={option.value}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 8,
              marginLeft:18
            }}
            onPress={() => setRadioValue(option.value)}
          >
            <View
              style={{
                width: 20, // Set the size of the circular button
                height: 20,
                borderRadius: 10, // Make the button circular by setting borderRadius to half of the width/height
                borderWidth: 2, // Add a border to make it look like a button
                borderColor: radioValue === option.value ? 'blue' : 'gray', // Set the color based on selection
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10,
              }}
            >
              {radioValue === option.value && (
                <View
                  style={{
                    width: 10, // Set the size of the inner filled circle
                    height: 10,
                    borderRadius: 5, // Make it circular by setting borderRadius to half of the width/height
                    backgroundColor: 'blue', // Set the color of the inner circle
                  }}
                />
              )}
            </View>
            <Text>{option.label}</Text>
          </TouchableOpacity>
        ))}
         
        <Text style={{ fontSize: 15, marginLeft:18}}>Project description:</Text>
      
     <FormInput
          // style={styles.input}
          onChangeText={(PostProjectDes) => setPostProjectDes(PostProjectDes)}
          // value={text}
          labelValue={PostProjectDes}
          // secureTextEntry={true}
          // keyboardType="email-address"
          placeholder="Project Description"
          autoCapitalize="none"
          autocorrect={false}
        />


  
 <Text style={{ fontSize: 15, marginLeft:18}}>Enter your Estimated budget?</Text>
      
      <FormInput
           // style={styles.input}
           onChangeText={(Budget) => setBudget(Budget)}
           // value={text}
           labelValue={Budget}
           // secureTextEntry={true}
           // keyboardType="email-address"
           placeholder="Enterthe Budget"
           autoCapitalize="none"
           autocorrect={false}
         />
          <View

style={{
    height:10
}}
/>
<TouchableOpacity
      style={{
        width: "100%",
        height: 46,
        
        alignItems: "center",
      }}
      onPress={() => {
        // API(); 
        // navigation.navigate("SelectSkill");
      }}
    >
      <LoginBtn
        color="#003399"
        textcolor="#fff"
        textfontsize={23}
        name="Next"
      />
    </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

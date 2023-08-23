import {Text, TouchableOpacity, View, StyleSheet, Alert } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ChevronLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { User, getAuth, onAuthStateChanged } from 'firebase/auth';
import * as Location from 'expo-location';
import { db1, auth1 } from '../src/screens/firebase';
import LottieView from 'lottie-react-native';
import { onValue, off, ref, set } from 'firebase/database';
const Driver_route_select = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])
  const [text, setText] = useState([])
  const [optionId, setOptionId] = useState([])
  
    
  const handleOptionPress = async (optionId) => {
    try {
      await requestLocation();
      //navigation.navigate(optionId); // Navigate to the desired map screen
    } catch (error) {
      console.error('Error sharing location:', error);
    }
};

/*useEffect(() => {
  const unsubscribe = navigation.addListener('beforeRemove', (e) => {
    if (!isFocused) {
      return; // Allow default back navigation
    }

    // Prevent default back navigation
    e.preventDefault();

    // Show an alert and handle user choice
    Alert.alert(
      'Logout',
      'Do you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: () => {
            // Perform logout actions here
            // For example, navigate to the logout screen
            handleLogout();
          },
        },
      ],
      { cancelable: true }
    );
  });

  return unsubscribe;
}, [navigation, isFocused]);  */

    
    useEffect(() => {
        //requestLocation();
        //navigation.navigate(`${optionId}`);

        const intervalId = setInterval(() => {
            requestLocation();
          }, 10000);
      
          // Clean up interval when component unmounts
          return () => clearInterval(intervalId);
        }, []);
      


        /*const handleLogout = async () => {
          try {
            await auth1.signOut(); // Replace with your authentication sign-out method
            navigation.navigate('Driver_Login'); // Navigate to the login screen after logout
          } catch (error) {
            console.error('Error logging out:', error);
      }
    };*/
    const requestLocation = async () => {
      try {
        let { status } = await Location.requestBackgroundPermissionsAsync({
        accuracy: Location.Accuracy.High,
        });
    
        if (status !== 'granted') {
          setError('permission to access location was denied');
          return;
        }
    
        let location = await Location.getCurrentPositionAsync({});
        setLat(location.coords.latitude);
        setLon(location.coords.longitude);
        console.log(location);
        setText(JSON.stringify(location));

        try{
            const db = db1;
            const timeStampString = new Date().toISOString();
            const validPathString = timeStampString.replace(/[\.\-:#\[\]]/g, '_');
            const dbPath = `${optionId}/${validPathString}`;
            //alert('LOCATION SENT!');
            await set(ref(db, dbPath), {
                longitude: location.coords.longitude,
                latitude: location.coords.latitude,
                speed: location.coords.speed,
                altitude: location.coords.altitude,
                heading: location.coords.heading

            });

            //alert('LOCATION SENT!');
        }
        catch (error){
            console.error('Error sending data:' + error);
            alert('Location not sent');
        }
        
        
      } catch (err) {
        console.warn(err);
      }
    };


  
  
  return (
    
    <View  style={tw` p-1   top-7`} >
         <View style={tw`   top-1 m-2 bg-yellow-300 rounded-full`}>
        <TouchableOpacity
               onPress={() => navigation.navigate('MapTest')}

                        style={{ 
                            marginRight: 329,
                            justifyContent:'flex-start', 
                           
                            backgroundColor: 'rgba(255,255,255, 0.2)',
                            
                            borderColor: 'white',
                            marginLeft: 7 ,
                            marginTop:8
                            

                        }}
                       
                    >
                            <ChevronLeftIcon style={{color: 'white', marginLeft: 3 }} />
                    </TouchableOpacity>
          
        

   
        <Text style={tw` bottom-4  text-center justify-evenly text-3xl  font-bold`} color="white"> Select Route </Text>
    </View>

    <View style={tw`h-1/4 w-full `}>
                             
                             <LottieView source={require('../assets/animation_llbw0rds.json')} autoPlay loop />
                     </View>



    <View style={{ marginTop: 35}} >
    <View style={{ flexDirection: 'row' , alignItems: 'center',marginTop: 5 }}>
      <Icon style={tw` p-4  left-4 z-50 p-5 absolute  `}
       name="bus" size={30} color="black" />
      <Text style={tw` p-1 bg-yellow-300 font-bold`}>1</Text>  
       <Text style={tw`top-9 font-bold p-2 bg-yellow-300 rounded-full`} >NIRWARU - JECRC </Text> 
           
    </View>
    <TouchableOpacity    
                     onPress={()=> navigation.navigate('Map1')}
       >       
        <View>  
        <Icon  style={tw `bg-gray-100 absolute top-2  right-8`}
       name="map-marker" size={28} color="red" />
        <Text style={tw `bg-gray-100  absolute mr-6 left-64 m-4 font-bold`}>VIEW MAP</Text>
       </View>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => {setOptionId('Map1');
                     handleOptionPress('Map1')}}>
        <View>
        <Icon  style={tw `bg-gray-100 absolute bottom-4  right-8`}
       name="location-arrow" size={28} color="green" />
        <Text style={tw `bg-gray-100  absolute z-30 mr-12 right-1 bottom-4 font-bold `}>SHARE LOCATION </Text>
        </View>
       </TouchableOpacity>
                    

    
    <View style={tw `border-t border-black mt-10`}></View>

    </View>
  
    <View>
    
    <View style={{ flexDirection: 'row' , alignItems: 'center',marginTop: 40 }}>
      <Icon style={tw` p-4  left-4 z-50 p-5 absolute   `}
       name="bus" size={30} color="black" />
      <Text style={tw` p-1 bg-yellow-300 font-bold `}>2</Text>  
       <Text style={tw`top-9 font-bold p-2 bg-yellow-300 rounded-full`} >MEENA PETROL PUMP-JECRC</Text>      
    </View>
   

   
    <TouchableOpacity    
                     onPress={()=> navigation.navigate('Map2')}
       >       
        <View>  
        <Icon  style={tw `bg-gray-100 absolute top-2  right-8`}
       name="map-marker" size={28} color="red" />
        <Text style={tw `bg-gray-100  absolute mr-6 left-64 m-4 font-bold`}>VIEW MAP</Text>
       </View>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => {setOptionId('Map2');
                     handleOptionPress('Map2')}}>
        <View>
        <Icon  style={tw `bg-gray-100 absolute bottom-6  right-8`}
       name="location-arrow" size={28} color="green" />
        <Text style={tw `bg-gray-100  absolute z-30 mr-12 right-1 bottom-6 font-bold `}>SHARE LOCATION </Text>
        </View>
       </TouchableOpacity>
 <View style={tw `border-t border-black mt-10`}></View>
      
    </View>

    <View>
    <View style={{ flexDirection: 'row' , alignItems: 'center',marginTop: 40 }}>
      <Icon style={tw` p-4  left-4 z-50 p-5 absolute   `}
       name="bus" size={30} color="black" />
      <Text style={tw` p-1 bg-yellow-300 font-bold `}>3</Text>  
       <Text style={tw`top-9 font-bold p-2 bg-yellow-300 rounded-full`} >GANDHI NAGAR PULIYA-JECRC</Text>      
    </View>

    <TouchableOpacity    
                     onPress={()=> navigation.navigate('Map3')}
       >       
        <View>  
        <Icon  style={tw `bg-gray-100 absolute top-2  right-8`}
       name="map-marker" size={28} color="red" />
        <Text style={tw `bg-gray-100  absolute mr-6 left-64 m-4 font-bold`}>VIEW MAP</Text>
       </View>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => {setOptionId('Map3');
                     handleOptionPress('Map3')}}>
        <View>
        <Icon  style={tw `bg-gray-100 absolute bottom-6  right-8`}
       name="location-arrow" size={28} color="green" />
        <Text style={tw `bg-gray-100  absolute z-30 mr-12 right-1 bottom-6 font-bold `}>SHARE LOCATION </Text>
        </View>
       </TouchableOpacity>
 <View style={tw `border-t border-black mt-10`}></View>
</View>

<View>
    <View style={{ flexDirection: 'row' , alignItems: 'center',marginTop: 40 }}>
      <Icon style={tw` p-4  left-4 z-50 p-5 absolute   `}
       name="bus" size={30} color="black" />
      <Text style={tw` p-1 bg-yellow-300 font-bold`}>4</Text>  
       <Text style={tw`top-9 font-bold p-2 bg-yellow-300 rounded-full`} >KHORA BEESAL - JECRC</Text>      
    </View>
  <TouchableOpacity    
                     onPress={()=> navigation.navigate('Map4')}
       >       
        <View>  
        <Icon  style={tw `bg-gray-100 absolute top-2  right-8`}
       name="map-marker" size={28} color="red" />
        <Text style={tw `bg-gray-100  absolute mr-6 left-56 m-4 font-bold left-64`}>VIEW MAP</Text>
       </View>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => {setOptionId('Map4');
                     handleOptionPress('Map4')}}>
        <View>
        <Icon  style={tw `bg-gray-100 absolute bottom-6  right-8`}
       name="location-arrow" size={28} color="green" />
        <Text style={tw `bg-gray-100  absolute z-30 mr-12 right-1 bottom-6 font-bold `}>SHARE LOCATION </Text>
        </View>
       </TouchableOpacity>


 
<View style={tw `border-t border-black mt-10`}></View>
</View>

</View> 
  )
}

export default Driver_route_select ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

});


/*
<View style={{ flexDirection: 'row' , alignItems: 'center',marginTop: 77 }}>
      <Icon style={tw` p-4  left-4 z-50 p-5 absolute   `}
       name="bus" size={20} color="black" />
      <Text style={tw` p-1 bg-yellow-300 `}>4</Text>  
       <Text style={tw`top-9 font-bold`} >NIRWARU - JECRC </Text>      
    </View>
    <TouchableOpacity onPress={()=> navigation.navigate('Map4')}><Text>View on Map</Text></TouchableOpacity>
<TouchableOpacity
 onPress={() => {
  setOptionId('Map4');
  handleOptionPress('Map4');
}}>
<View>

<Icon  style={tw `bg-gray-100  absolute z-50 mr-7 right-4 `}
 name="location-arrow" size={28} color="black" />
 <Text style={tw `bg-gray-100  absolute z-30 mr-7 right-4 mr-12 `}>Share location</Text>
 </View>
 </TouchableOpacity> 
 */
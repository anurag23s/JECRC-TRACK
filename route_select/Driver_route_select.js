import {Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ChevronLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import { FIREBASE_DB } from '../src/screens/firebase';
import LottieView from 'lottie-react-native';
import { onValue, off, ref, set } from 'firebase/database';
const Driver_route_select = () => {
  const navigation = useNavigation();
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])
  const [text, setText] = useState([])
  const [optionId, setOptionId] = useState([])
    
  const handleOptionPress = async (optionId) => {
    try {
      await requestLocation();
      navigation.navigate(optionId); // Navigate to the desired map screen
    } catch (error) {
      console.error('Error sharing location:', error);
    }
};
    
    useEffect(() => {
        requestLocation();
        navigation.navigate(`${optionId}`);

        const intervalId = setInterval(() => {
            requestLocation();
          }, 10000);
      
          // Clean up interval when component unmounts
          return () => clearInterval(intervalId);
        }, []);
      


  
    const requestLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
    
        if (status !== 'granted') {
          setError('permission to access location was denied');
          return;
        }
    
        let location = await Location.getCurrentPositionAsync({});
        setLat(location.coords.latitude);
        setLon(location.coords.longitude);
    
        setText(JSON.stringify(location));

        try{
            const db1 = FIREBASE_DB;
            const timeStampString = new Date().toISOString();
            const validPathString = timeStampString.replace(/[\.\-:#\[\]]/g, '_');
            const dbPath = `${optionId}/${validPathString}`;

            await set(ref(db1, dbPath), {
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
         <View style={tw`   top-1 m-2 bg-blue-300 `}>
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
          
        

   
        <Text style={tw` bottom-4 text-center justify-evenly text-3xl  font-bold`}> Select Route </Text>
    </View>

    <View style={tw`h-1/6 w-full `}>
                             
                             <LottieView source={require('../assets/animation_llerbn4r.json')} autoPlay loop />
                     </View>



    <View style={{ marginTop: 35}} >
    <View style={{ flexDirection: 'row' , alignItems: 'center',marginTop: 7 }}>
      <Icon style={tw` p-4  left-4 z-50 p-5 absolute  `}
       name="bus" size={20} color="black" />
      <Text style={tw` p-1 bg-blue-300 `}>1</Text>  
       <Text style={tw`top-9 `} >NIRWARU - JECRC </Text> 
           
    </View>
                        

      <TouchableOpacity    
        onPress={() => handleOptionPress(setOptionId('Map1'))}

       >
        <View>
      <Icon  style={tw `bg-gray-100 absolute top-0  right-10`}
       name="location-arrow" size={28} color="black" />
        <Text style={tw `bg-gray-100  absolute z-30 mr-12 right-4 `}>Share location</Text>
       </View>
       </TouchableOpacity>
       <View style={tw `border-t border-black mt-10`}></View>

    </View>
  
    <View>
    
    <View style={{ flexDirection: 'row' , alignItems: 'center',marginTop: 77 }}>
      <Icon style={tw` p-4  left-4 z-50 p-5 absolute   `}
       name="bus" size={20} color="black" />
      <Text style={tw` p-1 bg-blue-300 `}>2</Text>  
       <Text style={tw`top-9 `} >MEENA PETROL PUMP - JECRC</Text>      
    </View>
   

   
    <TouchableOpacity

onPress={() => handleOptionPress(setOptionId(Map2))}
>
      <View>
      <Icon  style={tw `bg-gray-100  absolute  flex-1  mr-7  right-4`}
       name="location-arrow" size={28} color="black" />
        <Text style={tw `bg-gray-100  absolute z-30 mr-7 right-4 mr-12 `}>Share location</Text>
       </View>
 </TouchableOpacity>
 <View style={tw `border-t border-black mt-10`}></View>
      
    </View>

    <View>
    <View style={{ flexDirection: 'row' , alignItems: 'center',marginTop: 77 }}>
      <Icon style={tw` p-4  left-4 z-50 p-5 absolute   `}
       name="bus" size={20} color="black" />
      <Text style={tw` p-1 bg-blue-300 `}>3</Text>  
       <Text style={tw`top-9 `} >NIRWARU - JECRC </Text>      
    </View>

    <TouchableOpacity 
    onPress={() => handleOptionPress(setOptionId(Map3))}
    >
<Icon  style={tw `bg-gray-100  absolute z-30 mr-7 right-4 `}
 name="location-arrow" size={28} color="black" />
  <Text style={tw `bg-gray-100  absolute z-30 mr-7 right-4 mr-12 `}>Share location</Text>
 
 </TouchableOpacity>
 <View style={tw `border-t border-black mt-10`}></View>
</View>

<View>
<View style={{ flexDirection: 'row' , alignItems: 'center',marginTop: 77 }}>
      <Icon style={tw` p-4  left-4 z-50 p-5 absolute   `}
       name="bus" size={20} color="black" />
      <Text style={tw` p-1 bg-blue-300 `}>3</Text>  
       <Text style={tw`top-9 `} >NIRWARU - JECRC </Text>      
    </View>

<TouchableOpacity
 onPress={() => handleOptionPress(setOptionId('Map4'))}>
<View>

<Icon  style={tw `bg-gray-100  absolute z-50 mr-7 right-4 `}
 name="location-arrow" size={28} color="black" />
 <Text style={tw `bg-gray-100  absolute z-30 mr-7 right-4 mr-12 `}>Share location</Text>
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



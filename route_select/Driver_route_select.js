import {Text, TouchableOpacity, View, StyleSheet, Alert,Animated,Dimensions } from 'react-native';
import React from 'react';
import { useState, useEffect ,useRef} from 'react';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MIco from 'react-native-vector-icons/Foundation';
import MIcon from 'react-native-vector-icons/FontAwesome5';
import MIcons from 'react-native-vector-icons/MaterialIcons';
const { width: screenWidth } = Dimensions.get('window');
import AntDesign from "react-native-vector-icons/Feather";
import { ChevronLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { User, getAuth, onAuthStateChanged } from 'firebase/auth';
import * as Location from 'expo-location';
import { db1, auth1 } from '../src/screens/firebase';
import LottieView from 'lottie-react-native';
import { onValue, off, ref, set } from 'firebase/database';
import { Avatar } from 'react-native-paper';


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

    const [menuVisible, setMenuVisible ] = useState(false);
    const menuAnimation = useRef(new Animated.Value(0)).current;
  
    const toggleMenu = () => {
      const toValue = menuVisible ? 0 : 1;
      Animated.timing(menuAnimation, {
        toValue,
        duration: 0,
        useNativeDriver: false,
      }).start();
      setMenuVisible(!menuVisible);
    };
  
    const closeMenu = () => {
      Animated.timing(menuAnimation, {
        toValue: 0,
        duration: 800,
        useNativeDriver: false,
      }).start();
      setMenuVisible(false);
    };
    const translateX = menuAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [-screenWidth, 0], 
      
    });
  
  
  
  return (
    <View  style={tw` p-1   top-7`} >
    <View style={tw`   top-1 m-2 bg-blue-300 `}>
   
    <TouchableOpacity  style={tw` top-4  mr-0.5`} 
                
                onPress={toggleMenu}   >
     <AntDesign name={"menu"} size={40} color={"white"} />
   </TouchableOpacity>
   
    {menuVisible && ( // Only render the overlay when the menu is open
   <TouchableOpacity
     style={{
       position: 'absolute',
       top: 0,
       left: 0,
       width: '100%',
       height: '100%',
       backgroundColor: 'transparent', // Change this to a semi-transparent color if desired
     }}
     onPress={closeMenu} // Close the menu when overlay is pressed
   />
 )}
        

   
        <Text style={tw` bottom-4  text-center justify-evenly text-3xl  font-bold`} color="white"> Select Route </Text>
    </View>


    <Animated.View
        style={{
          position: 'absolute',
          left: -10,
          top: 10,
          width: '70%',
          height: "1200%",
          backgroundColor: 'white',
          transform: [{translateX}],
          zIndex: 1,
          
          borderBottomRightRadius: 40,
        }}
      >
        <TouchableOpacity style={{backgroundColor: '#0E3386'}} >

        <Avatar.Image  
        style={tw`  left-4 top-4`}
        size={48}  source={require('../assets/Driver_Avatar.png')} /> 
        <Text style={tw`text-2xl  left-16 bottom-6 text-white` }> Profile  </Text>
      
        </TouchableOpacity> 

        <View style={tw `border-t  border-black  `}></View>

         <TouchableOpacity style={tw` m-3  top-4  rounded-full bg-blue-300 p-2`} onPress={ () => navigation.navigate("BusStop")}>
         <MIcon style={tw` p-3 absolute  `}
          name="route" size={15} color="black" />
           <Text style={tw`  text-left  text-lg  left-4 text-white`}>   Bus Route</Text>
         </TouchableOpacity>


         <TouchableOpacity style={tw` m-3 top-2 p-2 rounded-full bg-blue-300   `} onPress={ () => navigation.navigate("DriverProfileScreen")}>
          <Ionicons style={tw` p-3   absolute `}
          
          name="person-outline" size={22} color="black" />
           <Text style={tw` text-lg text-left  left-4 text-white`}>    Driver Details </Text>
         </TouchableOpacity>

         <TouchableOpacity style={tw` m-3 x-2  top-1 rounded-full bg-blue-300  p-2`} onPress={ () => navigation.navigate("EmergencyContactsList")}>
          
         
         <Ionicons style={tw` p-3   absolute `}
         name="chatbox-ellipses-outline" size={22} color="black" />

           <Text style={tw` text-lg text-left  left-4 text-white`}>    Emergency Contact</Text>
         </TouchableOpacity>



         <TouchableOpacity style={tw` m-3 x-2   rounded-full bg-blue-300  p-2`} onPress={ () => navigation.navigate("AboutUsScreen")}>
        
         <Ionicons style={tw` p-3  absolute `}
         name="information-circle-outline" size={25} color="black" />

           <Text style={tw` text-lg text-left  left-4 text-white`}>    About us</Text>
         </TouchableOpacity>
         <TouchableOpacity style={tw` m-3 x-2   rounded-full bg-blue-300  p-2`} onPress={ () => navigation.navigate("ReportIssue")}>
        
         <MIcons style={tw` p-3  absolute `}
          name="report" size={22}  color="black" />

          <Text style={tw` text-lg text-left  left-4 text-white`}>    ReportIssue</Text>
        </TouchableOpacity>

         <TouchableOpacity style={tw` m-3 x-2   rounded-full bg-blue-300  p-2`} onPress={ () => navigation.navigate("Tnc")}>
        
        < MIco style={tw` p-3  absolute `}
        name="clipboard-pencil" size={25} color="black" />

          <Text style={tw` text-lg text-left  left-4  text-white`}>   Terms and conditions </Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw` m-3 x-2 top-56   rounded-full bg-red-600  p-3`} onPress={ () => navigation.navigate("Chooseuser")}>
        
        < AntDesign style={tw` p-2  absolute `}
        name="stop-circle" size={35} color="black" />

          <Text style={tw` text-xl  text-left  left-8  text-white`}>     Stop Sharing </Text>
        </TouchableOpacity>

         
         
         </Animated.View>  






    <View style={tw`h-1/4 w-full `}>
    {menuVisible && ( // Only render the overlay when the menu is open
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent', // Change this to a semi-transparent color if desired
          }}
          onPress={closeMenu} // Close the menu when overlay is pressed
        />
      )}
                             <LottieView source={require('../assets/animation_llbw0rds.json')} autoPlay loop />
                     </View>



    <View style={{ marginTop: 35}} >
    {menuVisible && ( // Only render the overlay when the menu is open
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent', // Change this to a semi-transparent color if desired
          }}
          onPress={closeMenu} // Close the menu when overlay is pressed
        />
      )}
    <View style={{ flexDirection: 'row' , alignItems: 'center',marginTop: 5 }}>
    {menuVisible && ( // Only render the overlay when the menu is open
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent', // Change this to a semi-transparent color if desired
          }}
          onPress={closeMenu} // Close the menu when overlay is pressed
        />
      )}
      <Icon style={tw` p-4  left-4 p-5 absolute  `}
       name="bus" size={30} color="black" />
      <Text style={tw` p-1 bg-yellow-300 font-bold`}>1</Text>  
       <Text style={tw`top-9 font-bold p-2 bg-yellow-300 rounded-full`} >NIRWARU - JECRC </Text> 
           
    </View>
    <TouchableOpacity    
                     onPress={()=> navigation.navigate('Map1')}
       >       
        <View>  
        {menuVisible && ( // Only render the overlay when the menu is open
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent', // Change this to a semi-transparent color if desired
          }}
          onPress={closeMenu} // Close the menu when overlay is pressed
        />
      )}
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
    {menuVisible && ( // Only render the overlay when the menu is open
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent', // Change this to a semi-transparent color if desired
          }}
          onPress={closeMenu} // Close the menu when overlay is pressed
        />
      )}
    <View style={{ flexDirection: 'row' , alignItems: 'center',marginTop: 40 }}>
      <Icon style={tw` p-4  left-4 p-5 absolute   `}
       name="bus" size={30} color="black" />
      <Text style={tw` p-1 bg-yellow-300 font-bold `}>2</Text>  
       <Text style={tw`top-9 font-bold p-2 bg-yellow-300 rounded-full`} >MEENA PETROL PUMP-JECRC</Text>      
    </View>
   

   
    <TouchableOpacity    
                     onPress={()=> navigation.navigate('Map2')}
       >       
        <View>  
        {menuVisible && ( // Only render the overlay when the menu is open
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent', // Change this to a semi-transparent color if desired
          }}
          onPress={closeMenu} // Close the menu when overlay is pressed
        />
      )}
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
    {menuVisible && ( // Only render the overlay when the menu is open
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent', // Change this to a semi-transparent color if desired
          }}
          onPress={closeMenu} // Close the menu when overlay is pressed
        />
      )}
    <View style={{ flexDirection: 'row' , alignItems: 'center',marginTop: 40 }}>
      <Icon style={tw` p-4  left-4  p-5 absolute   `}
       name="bus" size={30} color="black" />
      <Text style={tw` p-1 bg-yellow-300 font-bold `}>3</Text>  
       <Text style={tw`top-9 font-bold p-2 bg-yellow-300 rounded-full`} >GANDHI NAGAR PULIYA-JECRC</Text>      
    </View>

    <TouchableOpacity    
                     onPress={()=> navigation.navigate('Map3')}
       >       
        <View>  
        {menuVisible && ( // Only render the overlay when the menu is open
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent', // Change this to a semi-transparent color if desired
          }}
          onPress={closeMenu} // Close the menu when overlay is pressed
        />
      )}
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
{menuVisible && ( // Only render the overlay when the menu is open
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent', // Change this to a semi-transparent color if desired
          }}
          onPress={closeMenu} // Close the menu when overlay is pressed
        />
      )}
    <View style={{ flexDirection: 'row' , alignItems: 'center',marginTop: 40 }}>
      <Icon style={tw` p-4  left-4  p-5 absolute   `}
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
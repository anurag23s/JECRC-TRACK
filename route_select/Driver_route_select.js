import {Text, TouchableOpacity, View, StyleSheet, Alert,Animated,Dimensions ,SafeAreaView} from 'react-native';
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
import { db1, auth1 } from '../firebase';
import LottieView from 'lottie-react-native';
import { onValue, off, ref, set } from 'firebase/database';
import { Avatar } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import { BackHandler } from 'react-native';

const Driver_route_select = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])
  const [text, setText] = useState([])
  const [optionId, setOptionId] = useState([])
  const route = useRoute();
  const [menuVisible, setMenuVisible] = useState(false);
  const { driverDetails } = route.params;
  
    



  const handleLogout = async () => {
    try {
      // Implement your logout logic here
      // For example, sign out the user and navigate to the login screen
      await auth1.signOut(); // Replace with your authentication sign-out method
      navigation.navigate('Driver_Login'); // Navigate to the login screen after logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  useEffect(() => {
    const backAction = () => {
      if (isFocused && !menuVisible) {
        // Prevent custom back action for Driver_route_select screen
        alert('Please logout to go back!!')
        return true;
      }
      return false; // Allow default back behavior for other screens
    };
  

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
  
    return () => backHandler.remove(); // Remove the event listener when the component unmounts
  }, [isFocused, menuVisible]);

    

  const handleOptionPress = async (optionId) => {
    try {
      await requestLocation(optionId);
      //navigation.navigate(optionId); // Navigate to the desired map screen
    
    } catch (error) {
      console.error('Error sharing location:', error);
    }
};


    
    useEffect(() => {
        //requestLocation();
        //navigation.navigate(`${optionId}`);

        const intervalId = setInterval(() => {
            requestLocation(optionId);
          }, 10000);
      
          // Clean up interval when component unmounts
          return () => clearInterval(intervalId);
        }, [optionId]);
      


      const requestLocation = async (selectedMap) => {
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
        console.log({driverDetails});
        setText(JSON.stringify(location));

        try{
            const db = db1;
            const timeStampString = new Date().toISOString();
            const validPathString = timeStampString.replace(/[\.\-:#\[\]]/g, '_');
            const dbPath = `${selectedMap}/${validPathString}`;
            //alert('LOCATION SENT!');
            await set(ref(db, dbPath), {
                longitude: location.coords.longitude,
                latitude: location.coords.latitude,
                speed: location.coords.speed,
                altitude: location.coords.altitude,
                heading: location.coords.heading,
                name: driverDetails.Name,
                contact: driverDetails.Contact,

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

    const menuAnimation = useRef(new Animated.Value(0)).current;
  
    const toggleMenu = () => {
      const toValue = menuVisible ? 0 : 1;
      Animated.timing(menuAnimation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }).start();
      setMenuVisible(!menuVisible);
    };
  


    const closeMenu = () => {
      Animated.timing(menuAnimation, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }).start();
      setMenuVisible(false);
    };
    const translateX = menuAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [-screenWidth, 0], 
      
    });
  
  
  
  return (
   
    <View  style={tw` p-1   top-1  flex-1` } >
<TouchableOpacity  style={tw` top-5 z-10  left-4 mr-60  `} 
                
                onPress={toggleMenu}   >
     <AntDesign name={"menu"} size={50} color={"#0E3386"} />
   </TouchableOpacity>
   <View style={tw`   bottom-12  m-2 bg-yellow-300 rounded-full `}>
       
       <Text style={tw`  top-4  text-center justify-evenly text-3xl  font-bold`} color="white"> Select Route </Text>


       <TouchableOpacity
       style={tw `top-4 z-20 absolute right-3 p-2 bg-red-600 font-bold  rounded-full`}
       onPress={handleLogout}
     >
       <Text style={tw`font-bold `}>Logout</Text>
     </TouchableOpacity>


   <Text>

   </Text>

<Text>

</Text>
   </View>
  

    <Animated.View
        style={{
          position: 'absolute',
          left: -10,
          top: 0,
          width: '70%',
          height: "1200%",
          backgroundColor: 'white',
          transform: [{translateX}],
          zIndex: 2,
          
          borderBottomRightRadius: 40,
        }}
      >
        <TouchableOpacity style={{backgroundColor: '#0E3386' }} 
         onPress={ () => navigation.navigate("DriverDetailScreen")} >

        <Avatar.Image  
        style={tw`  left-4 top-16  `}
        size={48}  source={require('../assets/Driver_Avatar.png')} /> 
        <Text style={tw`text-3xl  left-20 top-6  text-white ` }> Profile  </Text>
      <Text></Text>
      <Text></Text>
        </TouchableOpacity> 

        <View style={tw `border-t  border-black  `}></View>
        <Text>

        </Text>

         <TouchableOpacity style={tw` m-3    rounded-full bg-blue-300 p-2`} onPress={ () => navigation.navigate("BusStop")}>
         <MIcon style={tw` p-3 absolute  `}
          name="route" size={15} color="black" />
           <Text style={tw`  text-left  text-lg  left-4 text-white`}>   Bus Route</Text>
         </TouchableOpacity>


         <TouchableOpacity style={tw` m-3  p-2 rounded-full bg-blue-300   `} onPress={ () => navigation.navigate("DriverList")}>
          <Ionicons style={tw` p-3   absolute `}
          
          name="person-outline" size={22} color="black" />
           <Text style={tw` text-lg text-left  left-4 text-white`}>    Driver Details </Text>
         </TouchableOpacity>

         <TouchableOpacity style={tw` m-3   rounded-full bg-blue-300  p-2`} onPress={ () => navigation.navigate("EmergencyContactsList")}>
          
         
         <Ionicons style={tw` p-3   absolute `}
         name="chatbox-ellipses-outline" size={22} color="black" />

           <Text style={tw` text-lg text-left  left-4 text-white`}>    Emergency Contact</Text>
         </TouchableOpacity>



         <TouchableOpacity style={tw` m-3    rounded-full bg-blue-300  p-2`} onPress={ () => navigation.navigate("AboutUsScreen")}>
        
         <Ionicons style={tw` p-3  absolute `}
         name="information-circle-outline" size={25} color="black" />

           <Text style={tw` text-lg text-left  left-4 text-white`}>    About Us</Text>
         </TouchableOpacity>
         <TouchableOpacity style={tw` m-3    rounded-full bg-blue-300  p-2`} onPress={ () => navigation.navigate("AboutJECRC")}>       
        <Ionicons style={tw` p-3  absolute `}
        name="information-circle-outline" size={25} color="black" />
          <Text style={tw` text-lg text-left  left-4 text-white`}>    About JECRC</Text>
        </TouchableOpacity>

         <TouchableOpacity style={tw` m-3    rounded-full bg-blue-300  p-2`} onPress={ () => navigation.navigate("ReportIssue")}>
        
         <MIcons style={tw` p-3  absolute `}
          name="report" size={22}  color="black" />

          <Text style={tw` text-lg text-left  left-4 text-white`}>    Report Issue</Text>
        </TouchableOpacity>

         <TouchableOpacity style={tw` m-3    rounded-full bg-blue-300  p-2`} onPress={ () => navigation.navigate("Tnc")}>
        
        < MIco style={tw` p-3  absolute `}
        name="clipboard-pencil" size={25} color="black" />

          <Text style={tw` text-lg text-left  left-4  text-white`}>   Terms and conditions </Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw` m-3    rounded-full bg-blue-300  p-2`} onPress={ () => navigation.navigate("Tnc")}>
        
        < MIcons style={tw` p-3  absolute `}
        name="question-answer" size={25} color="black" />

          <Text style={tw` text-lg text-left  left-4  text-white`}>    FAQ </Text>
        </TouchableOpacity>

        {/*<TouchableOpacity style={tw` m-3  top-40  rounded-full bg-red-600  p-3`} onPress={ () => navigation.navigate("Home")}>
        
        < AntDesign style={tw` p-2  absolute `}
        name="stop-circle" size={35} color="black" />

      <Text style={tw` text-xl  text-left  left-8  text-white`}>     Stop Sharing </Text>
      </TouchableOpacity>*/}

         
         
         </Animated.View>  






    <View style={tw`h-1/5  `}>
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
        <Icon  style={tw `bg-gray-100 absolute top-2  right-1`}
       name="map-marker" size={28} color="red" />
        <Text style={tw `p-1 bg-yellow-300  absolute right-3 m-3 font-bold rounded-full`}>VIEW MAP</Text>
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
       </View>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => {setOptionId('Map1');
                     handleOptionPress('Map1')}}>
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
        <Icon  style={tw `bg-gray-100 absolute bottom-4  right-1`}
       name="location-arrow" size={28} color="green" />
        <Text style={tw `p-1 bg-yellow-300  absolute z-30 mr-7 right-0 bottom-4 font-bold rounded-full`}>SHARE LOCATION </Text>
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
        <Icon  style={tw `bg-gray-100 absolute top-2  right-1`}
       name="map-marker" size={28} color="red" />
        <Text style={tw `p-1 bg-yellow-300  absolute right-3 m-3 font-bold rounded-full`}>VIEW MAP</Text>
       </View>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => {setOptionId('Map2');
                     handleOptionPress('Map2')}}>
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
        <Icon  style={tw `bg-gray-100 absolute bottom-6  right-1`}
       name="location-arrow" size={28} color="green" />
        <Text style={tw `p-1 bg-yellow-300  absolute z-30 mr-7 right-0 bottom-6 font-bold rounded-full`}>SHARE LOCATION </Text>
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
        <Icon  style={tw `bg-gray-100 absolute top-2  right-1`}
       name="map-marker" size={28} color="red" />
        <Text style={tw `p-1 bg-yellow-300  absolute right-3 m-3 font-bold rounded-full`}>VIEW MAP</Text>
       </View>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => {setOptionId('Map3');
                     handleOptionPress('Map3')}}>
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
        <Icon  style={tw `bg-gray-100 absolute bottom-6  right-1`}
       name="location-arrow" size={28} color="green" />
        <Text style={tw `p-1 bg-yellow-300  absolute z-30 mr-7 right-0 bottom-6 font-bold rounded-full`}>SHARE LOCATION </Text>
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
      <Icon style={tw` p-4  left-4  p-5 absolute   `}
       name="bus" size={30} color="black" />
      <Text style={tw` p-1 bg-yellow-300 font-bold`}>4</Text>  
       <Text style={tw`top-9 font-bold p-2 bg-yellow-300 rounded-full`} >KHORA BEESAL - JECRC</Text>      
    </View>
  <TouchableOpacity    
                     onPress={()=> navigation.navigate('Map4')}
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
        <Icon  style={tw `bg-gray-100 absolute top-2  right-1`}
       name="map-marker" size={28} color="red" />
        <Text style={tw `p-1 bg-yellow-300  absolute right-3 m-3 font-bold rounded-full`}>VIEW MAP</Text>
       </View>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => {setOptionId('Map4');
                     handleOptionPress('Map4')}}>
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
        <Icon  style={tw `bg-gray-100 absolute bottom-6  right-1`}
       name="location-arrow" size={28} color="green" />
        <Text style={tw `p-1 bg-yellow-300  absolute z-30 mr-7 right-0 bottom-6 font-bold rounded-full`}>SHARE LOCATION </Text>
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
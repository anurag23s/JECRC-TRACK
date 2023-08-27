import React, { Component, useState, useEffect, useRef} from "react";
import { StyleSheet, Text, View ,TouchableOpacity, FlatList, SafeAreaView, ImageBackground, Button ,Animated,Dimensions} from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { db1 } from '../src/screens/firebase';
import { onValue, off, ref } from 'firebase/database';
import tw from 'tailwind-react-native-classnames';
//import * as Location from 'expo-location';
import MIco from 'react-native-vector-icons/Foundation';
import MIconss from 'react-native-vector-icons/FontAwesome5';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from "react-native-vector-icons/Feather";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LinearGradient} from 'expo-linear-gradient';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
import { useNavigation } from '@react-navigation/native';



const { width: screenWidth } = Dimensions.get('window');

export default function Route_Map1() {

  const navigation = useNavigation();
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [aname, setAname] = useState('');
  const [contact, setContact] = useState();

  useEffect(() => {
    const db = db1;
    const dbPath = 'Map1'; // Change this path to match your Firebase data structure

    const fetchData = () => {
      const databaseRef = ref(db, dbPath);

      onValue(databaseRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const keys = Object.keys(data);
          const lastKey = keys[keys.length - 1];
          const latestData = data[lastKey];
          setLatitude(latestData.latitude);
          setLongitude(latestData.longitude);
          setAname(latestData.name);
          setContact(latestData.contact);
        }
      });
    };

    // Fetch data initially
    fetchData();

    // Set up interval to fetch data every 15 seconds
    const intervalId = setInterval(fetchData, 30000);

    // Clean up interval and data listener when component unmounts
    return () => {
      clearInterval(intervalId);
      off(databaseRef);
    };
  }, []);


  const [menuVisible, setMenuVisible] = useState(false);
  const menuAnimation = useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    const toValue = menuVisible ? 0 : 1;
    Animated.timing(menuAnimation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    Animated.timing(menuAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setMenuVisible(false);
  };

  const translateX = menuAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-screenWidth, 0],
  });


   const name = [
        
      {text:'NIRWARU'},
      {text:'AMBEY HOSPITAL'},
      {text:'VAIDH Jl'},
      {text:'NATH JI Kl THADI'},
      {text:'NIWARU BYE PASS'},
      {text:'KHIRNI PHATAK'},          
      {text:'HANUMAN NAGAR'},
      {text:'VAISHALI CIRCLE'},
      {text:'GUPTA STORE'},
      {text:'    BHARAT APPARTMENT'}, 
      {text:'AKSHAR DHAM'},          
      {text:'CHITRAKOOT'},
      {text:'CHITRAKOOT BANK CIRCLE'},
      {text:'DABAS PULIA'},
      {text:'200 FEET BYEPASS'}, 
      {text:'PUNJABI DHABA'},
      {text:'OM HOTEL'},
      {text:'METRO STATION'},
      {text:'JECRC COLLEGE'}, 
      {text:'END'}
      
   
    ];

    const [state ] = useState({
      loca : {
        latitude :26.973562,
        longitude : 75.711938,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      locb :   {
        latitude:26.968688,
        longitude:75.717313,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      locc: {
        latitude :26.965187,
        longitude : 75.725313,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      locd: {
        latitude :26.964337,
        longitude : 75.727359,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      loce: {
        latitude :26.959437,
        longitude : 75.735438,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      locf: {
        latitude :26.930029,
        longitude : 75.731049 ,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      locg: {
        latitude :26.922413,
        longitude : 75.748578,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      loch: {
        latitude :26.915563,
        longitude :75.743687,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      loci: {
        latitude :26.911188,
        longitude :75.743828,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      locj: {
        latitude :26.905938,
        longitude :75.739109,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      lockk: {
        latitude : 26.901988,
        longitude : 75.738828,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      locl: {
        latitude :26.901888,
        longitude : 75.735797,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      locm: {
        latitude :26.901763,
        longitude : 75.730484,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      locn: {
        latitude :26.895404,
        longitude :75.733680,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      loco: {
        latitude :26.891556,
        longitude :75.735811 ,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      locp: {
        latitude :26.887062,
        longitude :75.747312 ,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
    
      locq: {
        latitude :26.88845,
        longitude : 75.751215,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      locr: {
        latitude :26.879562,
        longitude :75.751312 ,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
      locs: {
        latitude : 26.781937,
        longitude : 75.822563,
        latitudeDelta: 0.005,
       longitudeDelta: 0.005,
      },
  
    })
    
  const {loca,locb,locc,locd,loce,locf,locg,loch,loci,locj,lockk,locl,locm,locn,loco,locp,locq,locr,locs} = state
  
    return (
      <SafeAreaView>
    <View style={tw`flex:1 bg-white `}>
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
  
      <View  style={tw`   h-4/5`}>
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
        <Text style={tw`left-28  font-bold top-10 text-xl`}>  NIRWARU- JECRC         </Text>
      <TouchableOpacity   
                    style={tw` p-2  `}
                     onPress={toggleMenu}   >
        <AntDesign 
          name={"menu"} size={35} /> 
       </TouchableOpacity>
       
     <MapView
    style={{ flex: 1 }}
    initialRegion={{
      latitude: 26.781937,
      longitude: 75.822563,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >
      <Marker
            coordinate={{ latitude, longitude }}
            title="Bus Location"
            description="Bus Number 1"
            pinColor="yellow"
      />
      
      <Marker
      coordinate={loca}
      title="NIWARU"
    />
    <Marker
      coordinate={locb}
      title="AMBEY HOSPITAL"
    />
  <Marker
      coordinate={ locc}
      title="VAIDH Jl"
    />
  <Marker
      coordinate={ locd}
      title="NATH JI Kl THADI NIWARU ROAD"
    />
  <Marker
      coordinate={ loce }
      title="NIWARU BYE PASS"
    />
  <Marker
      coordinate={ locf }
      title=" KHIRNI PHATAK"
    />
  <Marker
      coordinate={locg }
      title="HANUMAN NAGAR (JODHPUR SWEET)"
    />
  <Marker
      coordinate={ loch }
      title="  VAISHALI CIRCLE "
    />
    <Marker
      coordinate={ loci}
      title=" GUPTA STORE"
    />
    <Marker
      coordinate={locj}
      title=" BHARAT APPARTMENT"
    />
    <Marker
      coordinate={lockk}
      title="AKSHAR DHAM"
    />
    <Marker
      coordinate={locl}
      title="CHITRAKOOT"
    />
    <Marker
      coordinate={locm}
      title="CHITRAKOOT BANK CIRCLE"
    />
    <Marker
      coordinate={locn}
      title="DABAS PULIA"
    />
  
   <Marker
      coordinate={loco}
      title=" 200 FEET BYE  PASS"
    />
  
  <Marker
      coordinate={locp}
      title=" PUNJABI DHABA"
    />
  
  <Marker
      coordinate={locq}
      title="OM HOTEL"
    />
   <Marker
      coordinate={locr}
      title=" METRO STATION"
    />
  
  
  <Marker
    coordinate={{ latitude:26.781937, longitude:75.822563 }}
    title="JECRC FOUNDATION"
    pinColor='midnightblue'
  />
  
  
  <MapViewDirections 
    origin = {loca} 
    destination={locb}
    apikey={GOOGLE_MAPS_APIKEY}
    />
  
  
  <MapViewDirections
   origin = {locb} 
   destination={locc}
   apikey={GOOGLE_MAPS_APIKEY}
  />
  <MapViewDirections 
    origin = {locc} 
    destination={locd}
    apikey={GOOGLE_MAPS_APIKEY}
    />
    <MapViewDirections 
    origin = {locd} 
    destination={loce}
    apikey={GOOGLE_MAPS_APIKEY}
    />
    <MapViewDirections 
    origin = {loce} 
    destination={locf}
    apikey={GOOGLE_MAPS_APIKEY}
    />
   <MapViewDirections 
    origin = {locf} 
    destination={locg}
    apikey={GOOGLE_MAPS_APIKEY}
    />
  <MapViewDirections 
    origin = {locg} 
    destination={loch}
    apikey={GOOGLE_MAPS_APIKEY}
    />
  <MapViewDirections 
    origin = {loch} 
    destination={loci}
    apikey={GOOGLE_MAPS_APIKEY}
    />
  <MapViewDirections 
    origin = {loci} 
    destination={locj}
    apikey={GOOGLE_MAPS_APIKEY}
    />
  <MapViewDirections 
    origin = {locj} 
    destination={lockk}
    apikey={GOOGLE_MAPS_APIKEY}
    />
  <MapViewDirections 
    origin = {lockk} 
    destination={locl}
    apikey={GOOGLE_MAPS_APIKEY}
    />
  <MapViewDirections 
    origin = {locl} 
    destination={locm}
    apikey={GOOGLE_MAPS_APIKEY}
    />
  <MapViewDirections 
    origin = {locm} 
    destination={locn}
    apikey={GOOGLE_MAPS_APIKEY}
    />
    <MapViewDirections 
    origin = {locn} 
    destination={loco}
    apikey={GOOGLE_MAPS_APIKEY}
    />
    <MapViewDirections 
    origin = {loco} 
    destination={locp}
    apikey={GOOGLE_MAPS_APIKEY}
    />
   <MapViewDirections 
    origin = {locp} 
    destination={locq}
    apikey={GOOGLE_MAPS_APIKEY}
    />
   <MapViewDirections 
    origin = {locq} 
    destination={locr}
    apikey={GOOGLE_MAPS_APIKEY}
    />
   <MapViewDirections 
    origin = {locr} 
    destination={locs}
    apikey={GOOGLE_MAPS_APIKEY}
    /> 
  </MapView>
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

        <Text style={tw`text-4xl font-bold top-4 p-2 text-center`}> Menu </Text>
      
        <View style={tw `border-t  border-2 border-black mt-8 `}></View>

         <TouchableOpacity style={tw` m-3  top-4  rounded-full bg-blue-400  p-2`} onPress={ () => navigation.navigate("About")}>
         <MIconss style={tw` p-3 absolute  `}
          name="route" size={15} color="black" />
           <Text style={tw`  text-left  text-lg  left-4`}>   Bus Route</Text>
         </TouchableOpacity>


         <TouchableOpacity style={tw` m-3 top-2 p-2 rounded-full bg-blue-400   `} onPress={ () => navigation.navigate("About")}>
          <Ionicons style={tw` p-3   absolute `}
          
          name="person-outline" size={22} color="black" />
           <Text style={tw` text-lg text-left  left-4`}>    Driver Details </Text>
         </TouchableOpacity>

         <TouchableOpacity style={tw` m-3 x-2  top-1 rounded-full bg-blue-400  p-2`} onPress={ () => navigation.navigate("About")}>
          
         
         <Ionicons style={tw` p-3   absolute `}
         name="chatbox-ellipses-outline" size={22} color="black" />

           <Text style={tw` text-lg text-left  left-4`}>    Emergency Contact</Text>
         </TouchableOpacity>



         <TouchableOpacity style={tw` m-3 x-2   rounded-full bg-blue-400  p-2`} onPress={ () => navigation.navigate("About")}>
        
         <Ionicons style={tw` p-3  absolute `}
         name="information-circle-outline" size={25} color="black" />

           <Text style={tw` text-lg text-left  left-4`}>    About us</Text>
         </TouchableOpacity>
         <TouchableOpacity style={tw` m-3 x-2   rounded-full bg-blue-400  p-2`} onPress={ () => navigation.navigate("About")}>
        
         <MIcons style={tw` p-3  absolute `}
          name="report" size={22}  color="black" />

          <Text style={tw` text-lg text-left  left-4`}>    ReportIssue</Text>
        </TouchableOpacity>

         <TouchableOpacity style={tw` m-3 x-2   rounded-full bg-blue-400  p-2`} onPress={ () => navigation.navigate("About")}>
        
        < MIco style={tw` p-3  absolute `}
        name="clipboard-pencil" size={25} color="black" />

          <Text style={tw` text-lg text-left  left-4`}>   Terms and conditions </Text>
        </TouchableOpacity>



         
         
         </Animated.View> 
         <View   style={tw` flex:1 bg-gray-100  h-1/5 `}>
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
   <Icon style={tw` top-20 left-3 absolute  `}
       name="user-circle" size={60} color="midnightblue" />
 
  <Text   style={tw` text-xl  text-center  font-bold ` }>
    DRIVER DETAILS 
  </Text>
  <Text   style={tw` text-xl  text-center  font-bold ` }>
  RJ26GC7643
  </Text>
  
  <View style={tw `border-t border-black mt-2`}></View>
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
  <View style={tw`top-3 left-4`}>
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
 <Text  style={tw`   left-16  text-lg font-bold` }>
  Name: {aname}
 </Text>
 <Text  style={tw`  left-16 text-lg font-bold` }>
  Contact: {contact}
 </Text>


 <Text  style={tw`  left-16` }>
  
 </Text>
 <Text  style={tw`  left-16` }>
  
 </Text>
 
 
  </View>
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
</View>
  
  </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
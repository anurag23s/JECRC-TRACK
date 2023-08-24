import React, { Component, useState, useEffect, useRef} from "react";
import { StyleSheet, Text, View ,TouchableOpacity, FlatList, SafeAreaView, ImageBackground, Button,Animated,Dimensions} from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { FIREBASE_DB } from '../src/screens/firebase';
import { db1 } from '../src/screens/firebase';
import { onValue, off, ref } from 'firebase/database';
import MIco from 'react-native-vector-icons/Foundation';
import MIconss from 'react-native-vector-icons/FontAwesome5';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from "react-native-vector-icons/Feather";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from 'tailwind-react-native-classnames';
import {LinearGradient} from 'expo-linear-gradient';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
import { useNavigation } from '@react-navigation/native';


const { width: screenWidth } = Dimensions.get('window');

export default function Route_Map2() {
  const navigation = useNavigation();
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    const db = db1;
    const dbPath = 'Map2'; // Change this path to match your Firebase data structure

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
  const name= [
        
    {text:'MEENA PETROL PUMP'},
    {text:'KHOLE KE HANUMAN JI'},
    {text:'RAMGRAH MODE'},
    {text:'DUSSEHRA KOTHI'},
    {text:'JORAWAR SINGH GATE'},
    {text:'BADI CHOPAR'},          
    {text:'JOHARI BAZAR'},
    {text:'NEW GATE'},
    {text:'AJMERI GATE'},
    {text:' S M.S HOSPITAL'}, 
    {text:'LAL KOTHI'},          
    {text:'GANDHI NAGAR CLUB'},
    {text:'AG COLANY'},
    {text:'BHARADWAJ PETROL PUMP'},
    {text:'JAWAHAR CIRCLE'}, 
    {text:'JECRC COLLEGE'}, 
    {text:'END'}
    
 
  ];

    const [state ] = useState({
        loca : {
            latitude :26.92275,
            longitude : 75.84584,
            latitudeDelta: 0.005,
           longitudeDelta: 0.005,
          },
          locb :   {
            latitude:26.938916,
            longitude:75.84679,
            latitudeDelta: 0.005,
           longitudeDelta: 0.005,
          },
          locc: {
            latitude :26.945586,
            longitude : 75.84004,
            latitudeDelta: 0.005,
           longitudeDelta: 0.005,
          },
          locd: {
            latitude :26.939336,
            longitude : 75.837089,
            latitudeDelta: 0.005,
           longitudeDelta: 0.005,
          },
          loce: {
            latitude :26.934777,
            longitude : 75.833335,
            latitudeDelta: 0.005,
           longitudeDelta: 0.005,
          },
          locf: {
            latitude :26.922569,
            longitude : 75.826897,
            latitudeDelta: 0.005,
           longitudeDelta: 0.005,
          },
          locg: {
            latitude :26.922569,
            longitude : 75.82637,
            latitudeDelta: 0.005,
           longitudeDelta: 0.005,
          },
          loch: {
            latitude :26.915894,
            longitude :75.820381,
            latitudeDelta: 0.005,
           longitudeDelta: 0.005,
          },
          loci: {
            latitude :26.914859,
            longitude :75.816895,
            latitudeDelta: 0.005,
           longitudeDelta: 0.005,
          },
          locj: {
            latitude :26.907295,
            longitude : 75.815265,
            latitudeDelta: 0.005,
           longitudeDelta: 0.005,
          },
          lockk: {
            latitude :26.891575,
            longitude :75.806051,
            latitudeDelta: 0.005,
           longitudeDelta: 0.005,
          },
          locl: {
            latitude :26.883237,
            longitude : 75.806788,
            latitudeDelta: 0.005,
           longitudeDelta: 0.005,
          },
          locm: {
            latitude :26.87606,
            longitude : 75.806887,
            latitudeDelta: 0.005,
           longitudeDelta: 0.005,
          },
          locn: {
            latitude :26.848035,
            longitude : 75.803143,
            latitudeDelta: 0.005,
           longitudeDelta: 0.005,
          },
          loco: {
            latitude :26.843099,
            longitude : 75.801867,
            latitudeDelta: 0.005,
           longitudeDelta: 0.005,
          },
          locp: {
            latitude :26.781937,
            longitude : 75.822563,
            latitudeDelta: 0.005,
           longitudeDelta: 0.005,
          },
        
  
    })
    
  const {loca,locb,locc,locd,loce,locf,loch,loci,locj,lockk,locl,locm,locn,loco,locp} = state
  
    return (
      <SafeAreaView>
      <View style={tw`flex:1 bg-white `}>
    
    
        <View  style={tw`   h-4/5`}>
          <Text style={tw`left-20  font-bold top-10 text-xl`}>MEENA PETROL PUMP- JECRC         </Text>
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
            description="Bus Number 2"
            pinColor="yellow"
      />
     
    <Marker
    coordinate={{ latitude: 26.92275, longitude: 75.84584}}
    title="MEENA PETROL PUMP"
  />
  <Marker
    coordinate={{ latitude: 26.938916, longitude:75.84679 }}
    title="KHOLE KE HANUMAN JI"
  />
<Marker
    coordinate={{ latitude: 26.945586, longitude:75.84004 }}
    title="RAMGRAH MODE"
  />
<Marker
    coordinate={{ latitude: 26.939336, longitude:75.837089}}
    title="DUSSEHRA KOTHI"
  />
<Marker
    coordinate={{ latitude: 26.934777, longitude:75.833335 }}
    title="JORAWAR SINGH GATE"
  />
<Marker
    coordinate={{ latitude: 26.922569, longitude:75.826897 }}
    title=" BADI CHOPAR"
  />
<Marker
    coordinate={{ latitude: 26.921008, longitude:75.82637 }}
    title="JOHARI BAZAR"
  />
<Marker
    coordinate={{ latitude: 26.915894, longitude:75.820381 }}
    title=" NEW GATE"
  />
  <Marker
    coordinate={{ latitude: 26.914859, longitude:75.816895}}
    title="AJMERI GATE"
  />
  <Marker
    coordinate={{ latitude: 26.907295, longitude:75.815265 }}
    title="S M.S HOSPITAL"
  />
  <Marker
    coordinate={{ latitude: 26.891575, longitude:75.806051 }}
    title="LAL KOTHI"
  />
  <Marker
    coordinate={{ latitude: 26.883237, longitude:75.806788 }}
    title=" GANDHI NAGAR CLUB"
  />
  <Marker
    coordinate={{ latitude:26.87606, longitude:75.806887 }}
    title="AG COLANY"
  />
  <Marker
    coordinate={{ latitude:26.848035, longitude:75.803143 }}
    title="BHARADWAJ PETROL PUMP"
  />

 <Marker
    coordinate={{ latitude:26.843099, longitude:75.801867 }}
    title=" JAWAHAR CIRCLE"
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



  <View 
    
    style={tw` flex:1 bg-gray-200  h-1/5 `}>

   <Icon style={tw` top-16 left-3 absolute  `}
       name="user-circle" size={60} color="white" />
 
  <Text   style={tw` text-2xl  text-center  font-bold ` }>
  
    Driver Details
    
  </Text>
  
  <View style={tw `border-t border-black mt-2`}></View>
  
  <View style={tw`top-3 left-4`}>
 <Text  style={tw`   left-16  text-lg` }>
  Name: Ram ji
 </Text>
 <Text  style={tw`  left-16 text-lg ` }>
  Contact no: 48942454
 </Text>
 <Text  style={tw`  left-16 text-lg` }>
  Bus No: RJ14GC7643
 </Text>


 <Text  style={tw`  left-16` }>
  
 </Text>
 <Text  style={tw`  left-16` }>
  
 </Text>
 
 
  </View>
  </View>
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


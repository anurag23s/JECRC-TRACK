import React, { Component, useState, useEffect, useRef} from "react";
import { StyleSheet, Text, View ,TouchableOpacity, FlatList, SafeAreaView, ImageBackground, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { db1 } from '../src/screens/firebase';
import { onValue, off, ref } from 'firebase/database';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from 'tailwind-react-native-classnames';
//import * as Location from 'expo-location';






import {LinearGradient} from 'expo-linear-gradient';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export default function Route_Map1() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

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
        <View style={tw`flex:1`}>
          <View  style={tw`  h-1/2`}>
     
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
            title="Driver Location"
            description="Latest driver location"
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
      title="JECRC COLLEGE"
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

  <View  style={tw`  h-1/2 bg-white `}>
<Text  style={tw` text-2xl top-2 text-center font-bold  ` }>
  Route Details
</Text>
<View style={tw `border-t border-black mt-3`}></View>
<View  style={tw`aligned-center  rounded-half  top-2 justify-evenly justify-center h-3/4 bottom-32`}>
<View   style={{height: '100%', width: '100%'}}>
    <LinearGradient 
     colors={['#f9f8dd', '#302a75']} 
      style={{height: '100%'}}> 
  <View>
  <FlatList 

    data={name}
    keyExtractor={(inx) => inx.toString()}
    renderItem={({ item ,inx}) => (
    <View style={tw`text-center justify-center `}>

           {inx > 0 && <Text style={tw` mx-48 `}>•</Text>} 
           {inx > 0 && <Text style={tw` mx-48 `}>•</Text>} 
       <Text style={tw` mx-28 text-center  `}>{item.text}</Text>     
       <MIcon 
       style={tw` mx-28 bottom-5`}
       name="bus-stop" size={20} color="red" /> 

    </View> 
         
  )}
  
  />
  </View>
   </LinearGradient>
</View>
</View>
    
  <View 
    
    style={tw` flex:1  bg-gray-300 h-1/4 bottom-11`}>
   <Icon style={tw`  top-8 left-2 absolute  `}
       name="user-circle" size={50} color="white" />
 
  <Text   style={tw` text-xl  text-center  font-bold ` }>
  
    Driver Details
    
  </Text>
 <Text  style={tw`  left-16` }>
  Name: Ram ji
 </Text>
 <Text  style={tw`  left-16` }>
  Contact no: 48942454
 </Text>
 <Text  style={tw`  left-16` }>
  Bus No: RJ14GC7643
 </Text>
 
 
  </View>

</View>
  </View>
  </SafeAreaView>
    );
  };

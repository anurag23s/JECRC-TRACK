import React, { Component, useState, useEffect, useRef} from "react";
import { StyleSheet, Text, View ,TouchableOpacity, FlatList, SafeAreaView, ImageBackground, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { FIREBASE_DB } from '../FirebaseConfig';
import { onValue, off, ref } from 'firebase/database';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from 'tailwind-react-native-classnames';



import {LinearGradient} from 'expo-linear-gradient';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications


export default function Map1() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    const db = FIREBASE_DB;
    const dbPath = 'user'; // Change this path to match your Firebase data structure

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
        
    {text:'GANDHI NAGAR PULIYA'},
    {text:'CHITRAKOOT CHAURAHA'},
    {text:'AKSHAR DHAM'},
    {text:'SBI BANK'},
    {text:'NIRMAN NAGAR'},
    {text:'SHYAM NAGAR'},          
    {text:'SANJEEVANI HOSPITAL'},
    
    {text:'VIVEK VIHAR'},
    {text:'GURJAR KI THADI'}, 
    {text:'RIDDHI SIDDHI'},   

    {text:'TRIVENI NAGAR CHAURAHA'},
    {text:'GOPAL PURA CHOKI'},
    {text:' MAHAVEER NAGAR'},
    {text:'DURGAPURA ROAD'}, 
    
    {text:'JECRC COLLEGE'}, 
    {text:'END'}
    
 
  ];



    const [state ] = useState({
        loca : {
            latitude :26.932834,
            longitude : 75.730969,
            latitudeDelta: 0.005,
           longitudeDelta: 0.005,
          },
          locb :   {
            latitude:26.905868,
            longitude:75.728948,
            latitudeDelta: 0.005,
           longitudeDelta: 0.005,
          },
          locc: {
            latitude :26.897922,
            longitude : 75.732448,
            latitudeDelta: 0.005,
           longitudeDelta: 0.005,
          },
          locd: {
            latitude :26.890439,
            longitude : 75.736289,
            latitudeDelta: 0.005,
           longitudeDelta: 0.005,
          },
          loce: {
            latitude :26.886170,
            longitude : 75.744620,
            latitudeDelta: 0.005,
           longitudeDelta: 0.005,
          },
          locf: {
            latitude :26.880826,
            longitude :  75.766752,
            latitudeDelta: 0.005,
           longitudeDelta: 0.005,
          },
      
          loch: {
            latitude :26.889768,
            longitude :75.768554,
            latitudeDelta: 0.005,
           longitudeDelta: 0.005,
          },
         // loci: {
           // latitude :26.887194,
           // longitude :75.768246,
           // latitudeDelta: 0.005,
         //  longitudeDelta: 0.005,
         // },
          locj: {
            latitude :26.888786,
            longitude :75.768446,
            latitudeDelta: 0.005,
           longitudeDelta: 0.005,
          },
          lockk: {
            latitude : 26.880836,
            longitude : 75.766727,
            latitudeDelta: 0.005,
           longitudeDelta: 0.005,
          },
          locl: {
            latitude :26.873638,
            longitude : 75.776497,
            latitudeDelta: 0.005,
           longitudeDelta: 0.005,
          },
          locm: {
            latitude :26.868604,
            longitude : 75.783787,
            latitudeDelta: 0.005,
           longitudeDelta: 0.005,
          },
          locn: {
            latitude :26.862836,
            longitude :75.792737,
            latitudeDelta: 0.005,
           longitudeDelta: 0.005,
          },
          loco: {
            latitude :26.850098,
            longitude : 75.794182,
            latitudeDelta: 0.005,
           longitudeDelta: 0.005,
          },
          locp: {
            latitude :26.841261,
            longitude :75.793624 ,
            latitudeDelta: 0.005,
           longitudeDelta: 0.005,
          },
        
          locq: {
            latitude :26.781937,
            longitude : 75.822563,
            latitudeDelta: 0.005,
           longitudeDelta: 0.005,
          },
          
  
    })
    
  const {loca,locb,locc,locd,loce,locf,loch,locj,lockk,locl,locm,locn,loco,locp,locq} = state
  
    return (
        <SafeAreaView>
        <View style={tw`flex:1`}>
          <View  style={tw`flex:1  h-1/2`}>
     
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
  
    );
  };
  
  
  
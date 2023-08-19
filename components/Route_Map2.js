import React, { Component, useState, useEffect, useRef} from "react";
import { StyleSheet, Text, View ,TouchableOpacity, FlatList, SafeAreaView, ImageBackground, Button} from "react-native";
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

export default function Route_Map2() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    const db = FIREBASE_DB;
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


<View  style={tw`flex:1  h-1/2 bg-white `}>
<Text  style={tw` text-2xl top-2 text-center font-bold bg-current ` }>
  Route Details
</Text>
<View style={tw `border-t border-black mt-2`}></View>

<View  style={tw`aligned-center flex:1  rounded-half  top-4 justify-evenly justify-center h-3/4 bottom-32`}>

  <FlatList 

    data={name}
    keyExtractor={(inx) => inx.toString()}
    renderItem={({ item ,inx}) => (
    <View style={tw`text-center justify-center `}>

           {inx > 0 && <Text style={tw` mx-48 `}>•</Text>} 
           {inx > 0 && <Text style={tw` mx-48 `}>•</Text>} 
       <Text style={tw` mx-28 text-center bg-green-400 `}>{item.text}</Text>     
       <MIcon 
       style={tw` mx-28 bottom-5`}
       name="bus-stop" size={20} color="red" /> 

    </View>      
  )}


  
  />
</View>

    







  <View   style={tw` flex:1 rounded-full  bg-blue-300 h-1/4 bottom-11`}>
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


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });



  
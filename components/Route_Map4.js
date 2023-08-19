import React, { Component, useState, useEffect, useRef} from "react";
import { StyleSheet, Text, View ,TouchableOpacity, FlatList, SafeAreaView, ImageBackground, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { FIREBASE_DB } from '../firebase';
import { onValue, off, ref } from 'firebase/database';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from 'tailwind-react-native-classnames';


import {LinearGradient} from 'expo-linear-gradient';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export default function Route_Map4() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    const db = FIREBASE_DB;
    const dbPath = 'Map4'; // Change this path to match your Firebase data structure

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
        
    {text:'KHORA BEESAL'},

    {text:'SITAWALI PHATAK'},
    {text:'NADI KA PHATAK'},
    {text:' DADI KAPHATAK'},

    {text:'MURLIPUR THANA'},
    {text:'GORAS BHANDAR'},          
    {text:'SONI HOSPITAL'},
    
    {text:'AGRASEN TOWER'},
    {text:'BIYANI COLLEGE'}, 
    {text:'BANSAL FURNITURE'},   

    {text:'AMBA BARI'},
    {text:'BANI PARK THANA'},
    {text:'JANGLESHWER'},
    {text:'KHASA KOTHI'}, 
    {text:'IMLI PHATAK  '},  
    {text:' TONK PHATAK GUTTA'},
    {text:'KAMAL & COMPANY'},
    {text:' GOPAL PURA PULIA'},
    {text:'JAIPUR HOSPITAL'},
    {text:' TIDEA OFFICE DURGA PURA'},
    {text:'SITA BARI'},
    {text:'JECRC COLLEGE'}, 
    {text:'END'}
  ];

  
  const [state ] = useState({
    loca : {
      latitude :27.028712,
      longitude :75.719278,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    locb :   {
      latitude:26.986829,
      longitude:75.741671,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    locc: {
      latitude :26.981014,
      longitude :75.745743,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    locd: {
      latitude :26.972311,
      longitude :75.751821,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    loce: {
      latitude :26.970310,
      longitude :75.764699,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    locf: {
      latitude :26.970881,
      longitude :75.769937,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    locg: {
      latitude :26.9678,
      longitude :75.772718,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    loch: {
      latitude :26.957206,
      longitude :75.776759,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    loci: {
      latitude :26.955993,
      longitude :75.779162,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    locj: {
      latitude :26.950577,
      longitude :75.777762,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    lockk: {
      latitude :26.943949,
      longitude :75.777501,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    locl: {
      latitude :26.930175,
      longitude : 75.793642,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    locm: {
      latitude :26.923805,
      longitude :75.793489,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    locn: {
      latitude :26.920305,
      longitude :75.7936,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    loco: {
      latitude :26.889909,
      longitude :75.793886,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    locp: {
      latitude :26.877392,
      longitude :75.797639,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
  
    locq: {
      latitude :26.866371,
      longitude :75.796668,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    locr: {
      latitude :26.861826,
      longitude :75.796032,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    
    locs: {
      latitude :26.857378,
      longitude :75.79537,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    loct: {
      latitude :26.845538,
      longitude :75.793764,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    locu: {
      latitude :26.829108,
      longitude :75.794287,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    
    locv: {
      latitude :26.781937,
      longitude :75.822563,
      latitudeDelta: 0.005,
     longitudeDelta: 0.005,
    },
    



  })
  
const {loca,locb,locc,locd,loce,locf,locg,loch,loci,locj,lockk,locl,locm,locn,loco,locp,locq,locr,locs,loct,locu,locv} = state

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
    title="KHORA BEESAL"
  />
  <Marker
    coordinate={locb}
    title="SITAWALI PHATAK"
  />
<Marker
    coordinate={ locc}
    title="NADI KA PHATAK"
  />
<Marker
    coordinate={ locd}
    title="DADI KAPHATAK"
  />
<Marker
    coordinate={ loce }
    title="MURLIPUR THANA"
  /> 
<Marker
    coordinate={ locf }
    title=" GORAS BHANDAR"
  />
<Marker
    coordinate={locg }
    title=" SONI HOSPITAL"
  />
<Marker
    coordinate={ loch }
    title=" AGRASEN TOWER"
  />
  <Marker
    coordinate={ loci}
    title="BIYANI COLLEGE"
  />
  <Marker
    coordinate={locj}
    title=" BANSAL FURNITURE"
  />
  <Marker
    coordinate={lockk}
    title="AMBA BARI"
  />
  <Marker
    coordinate={locl}
    title="BANI PARK THANA"
  />
  <Marker
    coordinate={locm}
    title=" JANGLESHWER"
  />
  <Marker
    coordinate={locn}
    title=" KHASA KOTHI"
  />

 <Marker
    coordinate={loco}
    title="IMLI PHATAK"
  />

<Marker
    coordinate={locp}
    title="TONK PHATAK GUTTA"
  />

<Marker
    coordinate={locq}
    title="KAMAL & COMPANY"
  />
 <Marker
    coordinate={locr}
    title="GOPAL PURA PULIA"
  />

<Marker
    coordinate={locs}
    title="JAIPUR HOSPITAL"
  />

<Marker
    coordinate={loct}
    title=" IDEA OFFICE DURGA PURA"
  />

<Marker
    coordinate={locu}
    title="SITA BARI"
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
 <MapViewDirections 
  origin = {locs} 
  destination={loct}
  apikey={GOOGLE_MAPS_APIKEY}
  />
  <MapViewDirections 
  origin = {loct} 
  destination={locu}
  apikey={GOOGLE_MAPS_APIKEY}
  />
     <MapViewDirections 
  origin = {locu} 
  destination={locv}
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








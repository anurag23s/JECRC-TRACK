import React, { Component, useState, useEffect, useRef} from "react";
import { StyleSheet, Text, View ,TouchableOpacity, FlatList, SafeAreaView, ImageBackground, Button ,Animated,Dimensions} from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";
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


export default function Route_Map3() {
  const navigation = useNavigation();
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    const db = db1;
    const dbPath = 'Map3'; // Change this path to match your Firebase data structure

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

  const name = [     
    {text:'GANDHI PATH PULIYA'},
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
      <View style={tw`flex:1 bg-white `}>
    
    
        <View  style={tw`   h-4/5`}>
          <Text style={tw`left-20  font-bold top-10 text-xl`}>GANDHI PATH PULIYA- JECRC         </Text>
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
            description="Bus Number 3"
            pinColor="yellow"
      />
      
      <Marker
      coordinate={loca}
      title="GANDHI PATH PULIYA"
    />
    <Marker
      coordinate={locb}
      title="CHITRAKOOT CHAURAHA"
    />
  <Marker
      coordinate={ locc}
      title="AKSHAR DHAM "
    />
  <Marker
      coordinate={ locd}
      title="SBI BANK"
    />

<Marker
      coordinate={ loce }
      title="NIRMAN NAGAR"
    />
  <Marker
      coordinate={ locf }
      title=" SHYAM NAGAR"
    />
 
  <Marker
      coordinate={ loch }
      title=" SANJEEVANI HOSPITAL  "
    />
    

    <Marker
      coordinate={locj}
      title="VIVEK VIHAR "
    />
    <Marker
      coordinate={lockk}
      title="GURJAR KI THADI"
    />
    <Marker
      coordinate={locl}
      title="RIDDHI SIDDHI"
    />
    <Marker
      coordinate={locm}
      title="TRIVENI NAGAR CHAURAHA"
    />
    <Marker
      coordinate={locn}
      title="GOPAL PURA CHOKI"
    />
  
   <Marker
      coordinate={loco}
      title=" MAHAVEER NAGAR"
    />
  
  <Marker
      coordinate={locp}
      title=" DURGAPURA ROAD "
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


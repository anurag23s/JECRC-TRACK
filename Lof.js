import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useEffect, useState} from 'react';
import * as Location from 'expo-location';
import { FIREBASE_DB } from './FirebaseConfig';
import { onValue, ref, set } from 'firebase/database';


const LocF = () => {
    const [lat, setLat] = useState([])
    const [lon, setLon] = useState([])
    const [text, setText] = useState([])
    useEffect(() => {
        requestLocation();

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
    
        let location = await Location.getCurrentPositionAsync({
          accuracy:Location.Accuracy.High,
        });
        setLat(location.coords.latitude);
        setLon(location.coords.longitude);
    
        setText(JSON.stringify(location));

        try{
            const db = FIREBASE_DB;
            const timeStampString = new Date().toISOString();
            const validPathString = timeStampString.replace(/[\.\-:#\[\]]/g, '_');
            const dbPath = `user/${validPathString}`;

            await set(ref(db, dbPath), {
                longitude: location.coords.longitude,
                latitude: location.coords.latitude,
                speed: location.coords.speed,
                altitude: location.coords.altitude,
                heading: location.coords.heading,
                enableHighAccuracy:'true',
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
    
    
    
    console.log(lat, lon)
  return (
    <View>
      <Text>{lat}, {lon}</Text>
    
    
    </View>
  )
}

export default LocF;

const styles = StyleSheet.create({})
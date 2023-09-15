import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import JECRCMap from './JECRCMap'
import SocialMediaLinks from './SocialMedia'
import AntDesign from "react-native-vector-icons/Feather";
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MIco from 'react-native-vector-icons/Foundation';
import MIcon from 'react-native-vector-icons/FontAwesome5';
import MIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

const AboutJECRC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={{flex: 1, height: "100%", width: "100%"}}>
        <LinearGradient 
        colors={['#fff', 'white']} 
        style={{height: '100%'}}>
        <View style={{alignItems:"center"}}><Text style={{fontSize: 36 ,color:'black', fontWeight: "bold", alignItems:"center", marginTop: 20}}>
         JECRC FOUNDATION </Text>
         </View>
         <View style={styles.textContainer}>
         <View style={{alignItems:"center"}}><Text style={styles.description}>
         JECRC Foundation is an educational institution based in Rajasthan, India, that primarily focuses on engineering and technical courses. It is a research-oriented college with strong industry connections, offering state-of-the-art campus facilities and a student-centric learning environment.</Text>
         </View>
         </View>
        <View style={{alignItems:"center", flex: 1, marginTop: 20}}>
        <View style={{flexDirection: 'row'}}><Icon style={{margin: 5}} name="map-marker" size={28} color="#302a75" />
            <Text style={styles.description}>
            Shri Ram ki Nangal, via Sitapura RIICO Tonk Road, Jaipur-302 022 </Text>
        </View>
        <View style={{height: "50%", width: "75%", marginTop: 5}}>
            <JECRCMap />
        </View>
        <View style={{alignItems:'center'}}>
            <Icon name="phone" size={28} /><Text style={styles.description}>0141-2770232</Text>
                        <Text style={styles.description}>919982682473</Text>
                        <MIcons name="email" size={28} /><Text style={styles.description}>info@jecrcmail.com</Text>
            <SocialMediaLinks />
        </View>
    </View>
    </LinearGradient>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({ 
    container: {
        flexGrow: 1,
        //padding: 10,
      },
    textContainer: {
        backgroundColor: 'lightsteelblue',
        padding: 25,
      },
      description: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    
  },
})

export default AboutJECRC
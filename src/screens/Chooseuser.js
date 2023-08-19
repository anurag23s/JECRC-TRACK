import{ FlatList,StyleSheet, Image, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import React from 'react'
import tw from 'twrnc';
import { Icon } from 'react-native-elements';
import {LinearGradient} from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Student_route from '../../route_select/Student_route';
import Driver_Login from '../../route_select/Driver_route_select';

const data =[
{
    id : "123",
    title : "STUDENT",
    image: require("../../assets/studenticon.png"),
    screen: 'Student_route' ,
},
{
id:"456",
title: "DRIVER",
image: require("../../assets/drivericon.png"),
screen: 'Driver_Login',

},
];

const Chooseuser = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
    <View 
        style={{height: '100%', width: '100%'}}>
    <LinearGradient 
        colors={['#f9f8dd', '#302a75']} 
        style={{height: '100%'}}> 
        <View 
            style={{
                flexDirection: "row", 
                marginTop: 45, 
                alignItems: "center", 
                paddingHorizontal: 15}}>
                <TouchableOpacity>
                <Icon name="menu" size={30} color = '#302a75' style={{width:20}}/>
                </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'flex-start', alignItems: 'center', flex: 1}}>
           <Text style={{fontSize: 25 ,color:'#302a75', marginTop: 40, fontWeight: "bold"}}>
         Welcome to JECRC TRACK </Text>
           <View style={styles.lottie}>
    <LottieView source={require('../../assets/animation_llbv6dqe.json')} autoPlay loop />
            </View>
            <FlatList 
     data={data}
     horizontal
     keyExtractor={(item) => item.id}
     renderItem={({item })  => (
        
                
        <TouchableOpacity 
        onPress={() => navigation.navigate(item.screen)}
        style={tw`p-3 pl-7 pb-8 pt-5 bg-white m-6 w-35 rounded-80 my-30`}
        >
            <View>
            <Image 
                style={{ width:80, height:80 , justifyContent: 'center', resizeMode:"contain"}}
                source={item.image}
            />
            <Text style={tw`mt-2 text-lg font-bold`}>{item.title}</Text>
            <Icon  
                 style= {tw`p-2 bg-black rounded-full w-10 mt-4`}               
                 name="arrowright"  color="white" type="antdesign"
            />

        </View>
        </TouchableOpacity>
        
     )}
    />
        
           

        
        </View>
   </LinearGradient>
    </View>
    </SafeAreaView>
  );
};

export default Chooseuser;

const styles= StyleSheet.create({
    lottie: {
        //backgroundColor: '#FFFFFF',
        marginTop: 1,
        alignItems: 'center',
        height: 200,
        width: 200
    },
});


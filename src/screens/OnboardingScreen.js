

import { View,Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { setItem } from './utils/asyncStorage';

const { width, height} = Dimensions.get('window');

export default function OnboardingScreen() {

    const navigation = useNavigation();
    const handleDone = () => {

      navigation.navigate('Home');
      setItem('onboarded','1');
  }
const doneButton = ({...props}) => {
  return (
  <TouchableOpacity style={styles.doneButton} {...props}>
      <Text style={styles.get}>Get Started</Text>
  </TouchableOpacity>
  )
}
    return (
        <View style={styles.container}>

                <Onboarding
                onDone={handleDone}
                onSkip={handleDone}
                bottomBarHighlight= {true}
                DoneButtonComponent={doneButton}
                containerStyles={{ paddingHorizontal: 15}}

                pages={[
                    {
                    backgroundColor: 'skyblue',
                    image: (
                        <View style={styles.lottie}>
                          
                                 <LottieView source={require('../../assets/Bus.json')} autoPlay loop />
                        </View>
                    ),
                    title: 'Commute Unleashed',
                    subtitle: 'Real-time tracking for efficient,eco-friendly commuting',
                    },
                    {
                    backgroundColor: 'pink',
                    image: (
                        <View style={styles.lottie}>
                             
                                <LottieView source={require('../../assets/Maps.json')} autoPlay loop />
                        </View>
                    ),
                      title: 'Our Vision',
                      subtitle: 'Real-time tracking for efficient,eco-friendly commuting',
                    },
                    {
                    backgroundColor: '#a7f3d0',
                    image: (
                        <View style={styles.lottie}>
                               <LottieView source={require('../../assets/Map2.json')} autoPlay loop />
                        </View>
                    ),
                    title: 'Be the Catalyst',
                     subtitle: 'Shape the future of transit through your engagement.',
                    },
                    
                ]}
                />
        </View>
    )
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    lottie: {
        height: width,
        width: width*1.5 , 
    },
    doneButton: {
      padding: 20,
      fontWeight:'bold',
      
  
  },
  get:{
      fontWeight:'bold',
      fontSize:15,
      
  }
})




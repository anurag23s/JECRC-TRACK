import { View,Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { setItem } from './utils/asyncStorage';
import MIco from 'react-native-vector-icons/Foundation';
import tw from 'tailwind-react-native-classnames';
import TncOB from './TncOB';

const { width, height} = Dimensions.get('window');

export default function OnboardingScreen() {

    const navigation = useNavigation();
    const handleDone = () => {

      navigation.navigate('TncOB');
      setItem('onboarded','1');
    
  }
const doneButton = ({...props}) => {
  return (
  <TouchableOpacity style={styles.doneButton} {...props}>
      <Text style={styles.get}>Terms and Conditions</Text>
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
                    title: 'Welcome to JECRC TRACK',
                    subtitle: 'Get started with our amazing bus tracking services.',
                    },
                    {
                    backgroundColor: 'pink',
                    image: (
                        <View style={styles.lottie}>
                             
                                <LottieView source={require('../../assets/Maps.json')} autoPlay loop />
                        </View>
                    ),
                      title: 'Our Vision',
                      subtitle: 'Real-time tracking for efficient, user-friendly commuting',
                    },
                    {
                    backgroundColor: '#a7f3d0',
                    image: (
                        <View style={styles.lottie}>
                               <LottieView source={require('../../assets/Map2.json')} autoPlay loop />
                        </View>
                    ),
                      title: 'Revolutionizing College Transportation',
                      subtitle: 'Explore exciting features and simplify your college journey.',

                     
                           
                        
                     
                    }

                    
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

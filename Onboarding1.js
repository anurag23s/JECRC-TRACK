import React from 'react';
import { View, Text, StyleSheet ,Image,Dimensions} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import Chooseuser from './src/screens/Chooseuser';

const { width, height} = Dimensions.get('window');

export default function OnboardingScreen() {

  const navigation = useNavigation();

  const handleDone = () => {

      navigation.navigate('Chooseuser');
      setItem('onboarded','1');
  }

  const doneButton = ({...props}) => {
      return (
      <TouchableOpacity style={styles.doneButton} {...props}>
          <Text>Done</Text>
      </TouchableOpacity>
      )
  }

  return (
    <View style={styles.container}>
    <Onboarding
                onDone={handleDone}
                onSkip={handleDone}
                bottomBarHighlight= {false}
                DoneButtonComponent={doneButton}
                containerStyles={{ paddingHorizontal: 15}}


pages={[
  {
  backgroundColor:'midnightblue',
  //'#a7f3d0',
  image: (
      <View style={styles.lott}>
        
               <LottieView source={require('./assets/animation_lldqx5jn.json')} autoPlay loop />
      </View>
  ),
  title: 'Commute Unleashed',
  subtitle: 'Discover a new era of travel with smart tracking.',
  },
  {
  backgroundColor: 'white',
  image: (
      <View style={styles.lott}>
           
              <LottieView source={require('./assets/Vision.json')} autoPlay loop />
      </View>
  ),
  title: 'Our Vision',
  subtitle: 'Real-time tracking for efficient,eco-friendly commuting',
  },
  {
  backgroundColor: '#fdc323',
  image: (
      <View style={styles.lott}>
             <LottieView source={require('./assets/Maps.json')} autoPlay loop />
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




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  lott:{
    height: width,
    width: width*0.9
  },
  doneButton: {
    padding: 20,
    backgroundColor: 'white',
    // borderTopLeftRadius: '100%',
    // borderBottomLeftRadius: '100%'
}
});

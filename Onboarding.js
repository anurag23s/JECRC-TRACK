import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Chooseuser from './src/screens/Chooseuser';
import LottieView from 'lottie-react-native';
/*https://i.pinimg.com/originals/54/57/47/545747123b8c60dba4dcadd40b36c1b8.gif
 https://dhundhoo.com/images/dhundhoo_school_bus_animation.gif*/
 
const OnboardingScreen = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      title: 'Welcome to College Bus Tracker',
      description: 'Track your college buses in real-time and never miss a ride!',
      image: 'https://j.gifs.com/jZWNgv@facebook.gif',
    },
    {
      title: 'Real-Time Tracking',
      description: 'Stay updated with live bus locations on the map.',
      image: 'https://media.giphy.com/media/HcP8ePLRnXE4M/source.gif',
    },
    {
      title: 'Get Notifications',
      description: 'Receive notifications for bus arrivals, departures, and delays.',
      image: 'https://dhundhoo.com/images/dhundhoo_school_bus_animation.gif',
    },
  ];

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      // Navigate to the main app screen after onboarding completion
      navigation.navigate('Chooseuser');
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: pages[currentPage].image }} style={styles.image} />
      <Text style={styles.title}>{pages[currentPage].title}</Text>
      <Text style={styles.description}>{pages[currentPage].description}</Text>
      <View style={styles.buttonContainer}>
        {currentPage > 0 && (
          <TouchableOpacity style={styles.button} onPress={handlePrevious}>
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
        )}
        <View style={{ flex: 1 }} />
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>{currentPage === pages.length - 1 ? 'Get Started' : 'Next'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'midnightblue',
  },
  image: {
    width: 390,
    height: 390,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 30,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;
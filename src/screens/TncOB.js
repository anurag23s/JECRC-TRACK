import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, ScrollView ,TouchableOpacity} from 'react-native';
import Chooseuser from './Chooseuser';
import LottieView from 'lottie-react-native';
//import { useNavigation } from '@react-navigation/native';

const TncOB = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>JECRC Track Terms and Conditions</Text>
      <View style={styles.lottie}>
            <LottieView source={require('../../assets/animation_lldyzgmo.json')} autoPlay loop />
  </View>
      <View style={styles.section}>
        <Text style={styles.heading}>1. App Usage</Text>
        <Text style={styles.paragraph}>
          Welcome to JECRC Track! By using the App, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use the App.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>2. Student Access</Text>
        <Text style={styles.paragraph}>
        Students can access the JECRC Track App without the need for authentication.
The App provides real-time tracking of college buses to help students monitor bus locations and estimated arrival times.
The accuracy of bus locations and arrival times may vary based on several factors, including but not limited to traffic conditions and technical limitations.
Students are encouraged to use the App responsibly and refrain from any misuse, abuse, or unauthorized access.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>3. Driver Authentication</Text>
        <Text style={styles.paragraph}>
        The JECRC Track App collects and uses location data solely for the purpose of displaying bus locations to users.
Your personal information, such as your location data, will not be shared with any third parties without your explicit consent, except as required by law or as part of our services' functionality.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>4. Location Sharing</Text>
        <Text style={styles.paragraph}>
        The App facilitates real-time location tracking of college buses by displaying the location information shared by the authorized driver.
Students are granted access to view the live location of the college bus they are assigned to.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>5. Privacy</Text>
        <Text style={styles.paragraph}>
        The App collects and processes location data solely for the purpose of providing bus tracking services.
Location data is securely transmitted and stored.
        </Text>
        
<View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Chooseuser')}>
                <Text style={styles.buttonText}>I AGREE</Text>
              </TouchableOpacity>

        </View>
         
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  lottie: {
    //backgroundColor: '#FFFFFF',
    marginTop: 1,
    flex: 1,
    alignContent: 'center',
    height: 200,
    width: 200,
    justifyContent: 'center',
},
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 1,
  },
  section: {
    marginBottom: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
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
  buttonText:
  {
    color: 'white'
  }
});

export default TncOB;

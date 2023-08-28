
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import UserAvatar from './UserAvatar'; // Import the UserProfileModal component
import { NavigationProp } from '@react-navigation/native';
import { User, getAuth, onAuthStateChanged } from 'firebase/auth';
import { onValue, getDatabase, ref } from 'firebase/database';
import { auth1 } from './firebase';
import { db1 } from './firebase';
import { BottomSheet } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import babelConfig from '../../babel.config';

import AnimatedLottieView from 'lottie-react-native';
import LottieView from 'lottie-react-native';
import { fonts } from 'react-native-elements/dist/config';
const DriverDetailScreen = ({ navigation }) => {
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  const toggleProfileModal = () => {
    setIsProfileVisible(!isProfileVisible);
  };

  const [userEmail, setUserEmail] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const db = getDatabase();

    const authStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);

        if (user.email) {
          const sanitizedEmail = user.email.replace(/[^a-zA-Z0-9]/g, '_');
          const dbPath = `users/userDetail_${sanitizedEmail}`;
          const userRef = ref(db, dbPath);

          onValue(
            userRef,
            (snapshot) => {
              if (snapshot.exists()) {
                const userData = snapshot.val();
                console.log('Retrieved User Data:', userData);
                setUserInfo(userData);
              }
            },
            {
              onlyOnce: true, // This ensures that the listener fetches the data only once
            }
          );
        }
      }
    });

    return () => {
      authStateChanged();
    };
  }, []);

  return (
    
   
    <View style={styles.container}>
       <LinearGradient 
    colors={['#f9f8dd', '#302a75']} 
    style={{height: '100%'}}> 
    
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/* Replace the UserProfile button with an avatar icon */}
        <TouchableOpacity onPress={toggleProfileModal} style={styles.avatar}>
          <MaterialCommunityIcons name="account" size={30} color="blue" />
        </TouchableOpacity>

        {/* Render the UserProfileModal component in a modal when the avatar is clicked */}
        {isProfileVisible && <UserAvatar onClose={toggleProfileModal} />}
      </View>
     
      <View  style={styles.Head}>
        <LottieView source={require('../../assets/animation_llrutvad.json')} autoPlay loop />
            
             </View>
            <Image
        source={require('../../assets/profile.jpeg')}
        style={styles.profileImage}
      />

      {userInfo ? (
        <View style={styles.text}>
          <Text style={styles.detail}>Name: {userInfo.Name}</Text>

          <Text style={styles.detail}>Contact: {userInfo.Contact}</Text>

          <Text style={styles.detail}>Route_No: {userInfo.Route_No}</Text>

          <Text style={styles.detail}>Bus_No: {userInfo.Bus_No}</Text>
        </View>
      ) : null}
    
  </LinearGradient>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  

  },
  Head: {
    backgroundColor:'white',
    width:400,
    height:320,


  },

  text: {
    marginBottom: 380,
    paddingLeft:20 
  },
  profileImage: {
    width: 150,
    height: 150,
 
    marginTop:-40,
    paddingTop:110,

    
  },
  detail: {
    fontSize: 28,
    marginTop: 20,
    paddingLeft:90
  },
 

});

export default DriverDetailScreen;

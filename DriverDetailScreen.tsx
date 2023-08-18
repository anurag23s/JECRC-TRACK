
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet ,ImageBackground,Image,TouchableOpacity,Button} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ChevronLeftIcon} from 'react-native-heroicons/solid';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import UserAvatar from './UserAvatar'; // Import the UserProfileModal component
import { NavigationProp } from '@react-navigation/native';
import ProfileScreen from './ProfileScreen'
import { User, getAuth, onAuthStateChanged } from 'firebase/auth';
import { onValue,getDatabase, ref, get } from 'firebase/database';
import { auth1 } from './firebase';
import {db1} from './firebase'
import { BottomSheet } from 'react-native-elements';



interface RouterProps {
  navigation: NavigationProp<any, any>;
}

interface UserInfo {
  email: string;
  Contact:number
  Name:string
  Bus_No:string
  Route_No:number
}



const DriverProfileScreen: React.FC<RouterProps> = ({ navigation }) => {
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  const toggleProfileModal = () => {
    setIsProfileVisible(!isProfileVisible);
  };

  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  
  
  useEffect(() => {
    const auth = getAuth();
    const db = getDatabase();

    const authStateChanged = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        setUserEmail(user.email);
      
        if (user.email) {
          const sanitizedEmail = user.email.replace(/[^a-zA-Z0-9]/g, '_');
          const dbPath = `users/userDetail_${sanitizedEmail}`;
          const userRef = ref(db, dbPath);

          onValue(userRef, (snapshot) => {
            if (snapshot.exists()) {
              const userData = snapshot.val();
              console.log('Retrieved User Data:', userData);
              setUserInfo(userData);
            }
          }, {
            onlyOnce: true // This ensures that the listener fetches the data only once
          });
        }
      }
    });

    return () => {
      authStateChanged();
    };
  }, []);


  return (


<View style={styles.container}>
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Replace the UserProfile button with an avatar icon */}
      <TouchableOpacity onPress={toggleProfileModal} style = {styles.avatar}>
        <MaterialCommunityIcons name="account" size={30} color="blue" />
      </TouchableOpacity>

      {/* Render the UserProfileModal component in a modal when the avatar is clicked */}
      {isProfileVisible && (
        <UserAvatar onClose={toggleProfileModal} />
      )}

     
    
    </View>
      
    <Text style={styles.Head}>Driver Detail</Text>
    {/* <View style={styles.main}>
    */}
    <Image source={require('./assets/profile.jpeg')} style={styles.profileImage} />
      {/* {userEmail && (
        <Text style={styles.userInfo}>Driver's Email: {userEmail}</Text>
         
      )} */}
   
   

{userInfo ? (
        <View style={styles.text}>

           <Text style={styles.detail}>
          Name: {userInfo.Name}
        </Text>

        <Text style={styles.detail}>
         Contact: {userInfo.Contact}
        </Text>

        <Text style={styles.detail}>
         Route_No: {userInfo.Route_No}
        </Text>
       

        <Text style={styles.detail}>
         Bus_No: {userInfo.Bus_No}
        </Text>
       
        </View>
      
      ):null}
</View>
    
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:240
  },
  Head: {
    fontSize: 24,
    fontWeight: 'bold',

  },
  text:{
   marginBottom:380
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop:190,
  },
  detail: {
    fontSize: 18,
    marginTop: 20,
    
  },
  avatar:{
    position: 'absolute',
    top:10, // Adjust the top position as needed
 left:140, // Adjust the right position as needed

  }
});

export default DriverProfileScreen;














import React, { useState,useRef,useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import { db1, auth1 } from './firebase';
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import Driver_route_select from '../../route_select/Driver_route_select';
import { useNavigation } from '@react-navigation/native';
import { onValue, off, ref } from 'firebase/database';

const Driver_Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = auth1;
  const navigation = useNavigation();
  const emailInputRef = useRef(null); 
  
  useEffect(() => {
    // Focus on the email input field when the screen loads
    emailInputRef.current.focus();
  }, []);

  
  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      //navigation.navigate(Driver_route_select);
      const sanitizedEmail = email.replace(/[^a-zA-Z0-9]/g, '_');
      const dbPath = `users/userDetail_${sanitizedEmail}`;
      const userRef = ref(db1, dbPath);

      onValue(
        userRef,
        (snapshot) => {
          if (snapshot.exists()) {
            const driverDetails = snapshot.val();
            console.log('Retrieved Driver Details:', driverDetails);

            // Pass driverDetails as parameter and navigate to Driver_route_select
            navigation.navigate('Driver_route_select', { driverDetails });
          }
        },
        {
          onlyOnce: true, // Fetch the data only once
        }
      );


    } catch (error) {
      console.log(error);
      alert('Sign in failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = () => {
    if (email !== '') {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert('Password reset email has been sent successfully');
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
        });
    } else {
      alert('Please enter a valid email');
    }
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require('./login8.jpg')}
    >
      <View style={styles.innerContainer}>
         <KeyboardAvoidingView behavior='padding'> 
          <Text style={styles.heading}>Driver's Login Page</Text>
          <View style={styles.loginBox}>
            <Text style={styles.subHeading}>Welcome Back</Text>
            <Text style={styles.infoText}>Login to your account</Text>

            {/* <Field
              value={email}
              style={styles.input}
              placeholder='Email/Password'
              autoCapitalize='none'
              onChangeText={(text) => setEmail(text)}
            />

            <Field
              secureTextEntry={true}
              value={password}
              style={styles.input}
              placeholder='Password'
              autoCapitalize='none'
              onChangeText={(text) => setPassword(text)}
            /> */}

<TextInput
 ref={emailInputRef}
  value={email}
  style={styles.input}
  placeholder='Email'
  autoCapitalize='none'
  keyboardType='email-address'
  onChangeText={(text) => setEmail(text)}
/>

<TextInput
  secureTextEntry={true}
  value={password}
  style={styles.input}
  placeholder='Password'
  autoCapitalize='none'
  onChangeText={(text) => setPassword(text)}
/>
 



            <TouchableOpacity onPress={resetPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            {loading ? (
              <ActivityIndicator size='large' color='#0000ff' />
            ) : (
              <TouchableOpacity style={styles.loginButton} onPress={signIn}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            )}
          </View>
         </KeyboardAvoidingView> 
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    alignItems: 'center',
    width: 430,
    marginTop: 80,
  },
  heading: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 80,
    marginRight: 10,
    marginLeft: 45,
  },
  loginBox: {
    backgroundColor: 'lightgrey',
    height: 700,
    width: 470,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 270,
    paddingTop: 100,
    alignItems: 'center',
  },
  subHeading: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    marginRight: 80,
    marginTop: -30,
  },
  infoText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 35,
    marginRight: 75,
  },
  input: {
    height: 40,
    width: '70%',
      margin: 12,
      backgroundColor: '#fff',
      borderRadius: 30,
      padding: 10,
      marginRight: 30
  },
  forgotPasswordText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 40,
    marginLeft: 130,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: 'midnightblue',
    paddingVertical: 15,
    borderRadius: 40,
    paddingHorizontal: 120,
    marginLeft: -50,
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Driver_Login;
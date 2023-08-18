
import React ,{useState} from 'react-native'
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
import { auth1 } from '../../firebase';
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import Field from './Field.js'

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = auth1;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
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
      source={require('./assets/ocean.jpg')}
    >
      <View style={styles.innerContainer}>
        <KeyboardAvoidingView behavior='padding'>
          <Text style={styles.heading}>Driver's Login Page</Text>
          <View style={styles.loginBox}>
            <Text style={styles.subHeading}>Welcome Back</Text>
            <Text style={styles.infoText}>Login to your account</Text>

            <Field
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
    marginVertical: 4,
    height: 50,

    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 120,
    marginLeft: -50,
    alignItems: 'center',
    marginTop: 20,
    
  },
  forgotPasswordText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 40,
    marginLeft:130
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

export default Login;



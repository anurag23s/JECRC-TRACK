import { View, Text, KeyboardAvoidingView, ActivityIndicator, StyleSheet, TextInput, Button } from 'react-native'
import React, {useEffect, useState} from 'react'
import { db1 } from './firebase';
import { onValue, ref, set } from 'firebase/database';
import {LinearGradient} from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';

const ReportIssue = () => {
    const[sname, setSname]= useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [problem, setProblem] = useState('');
    const [loading, setLoading] = useState(false);


    const SubmitIssue = async () => {
    try{
        const db = db1;
        const timeStampString = new Date().toISOString();
        const validPathString = timeStampString.replace(/[\.\-:#\[\]]/g, '_');
        const dbPath = `issues/${validPathString}`;

        await set(ref(db, dbPath), {
            sname: sname,
            email: email,
            phone: phone,
            problem: problem

        });
    }
    catch (error){
        console.error('Error submitting issue:', error);
        alert('Please Try Again');
    }
};
  return (
    <View 
        style={{height: '100%', width: '100%'}}>
    <LinearGradient 
        colors={['#f9f8dd', '#302a75']} 
        style={{height: '100%'}}> 
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 25, color: '#302a75' ,marginTop: 80 }}>Please let us know if you are facing any problem</Text>
    <View style={styles.lottie}>
    <LottieView source={require('../../assets/animation_lldqx5jn.json')} autoPlay loop />
    </View>
    <View style={{ width: '90%'}}>
    <KeyboardAvoidingView behavior='padding'>
        <TextInput value={sname}  style ={styles.input} placeholder='Your Full Name' onChangeText={(text) => setSname(text)}></TextInput>
        <TextInput value={email} style ={styles.input} placeholder='E-Mail' autoCapitalize='none' keyboardType='email-address' onChangeText={(text) => setEmail(text)}></TextInput>
        <TextInput value={phone} style ={styles.input} placeholder='Mobile Number' autoCapitalize='none' keyboardType='phone-pad' onChangeText={(text) => setPhone(text)}></TextInput>
        <TextInput value={problem} style ={styles.input2} placeholder='Describe Your Problem' textAlignVertical='top' onChangeText={(text) => setProblem(text)}></TextInput>
        
        { loading ? (<ActivityIndicator size ="large" color = "#0000ff" />
        ):( <>
      <Button title="Submit" onPress={SubmitIssue} color='green' />
      </>
      )}
    </KeyboardAvoidingView>
      

    </View>
    </View>
    </LinearGradient>
    </View>
  )
};
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      backgroundColor: '#fff',
      borderRadius: 30,
      padding: 10,
      /*borderWidth: 1,
      padding: 10,
      borderRadius: 30,
      backgroundColor: '#fff',
      borderWidth: 3,
      borderCurve: 'circular',*/
      
    },
    input2: {
        height: 180,
        margin: 12,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10
        //borderWidth: 3     
      },
      lottie: {
        //backgroundColor: '#FFFFFF',
        marginTop: 1,
        alignItems: 'center',
        height: 200,
        width: 200
    },
  });

export default ReportIssue


/*import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
//import { darkGreen } from "./Constants";
import Field from "./Field";
import Btn from "./btn";
import {LinearGradient} from 'expo-linear-gradient';
//import RenMain from "./RenMain";
import { SafeAreaView,SafeAreaProvider } from "react-native-safe-area-context";
const ReportIssue = (props) => {
  return (
    <SafeAreaView>
        <View style={{ alignItems: "center", width: "130%", height: '100%', marginTop: "1%" }}>
        <LinearGradient 
        colors={['#f9f8dd', '#302a75']} 
        style={{height: '100%'}}> 
        <Text
          style={{
            fontSize: 15,
            color: "white",
            fontWeight: "bold",
            marginTop: "1%",
          }}
        >
          Please let us know if you are facing any problem
        </Text>
        <View
          style={{
            backgroundColor: "white",
            height: "100%",
            width: "100%",
            borderTopLeftRadius: 100,
            paddingTop: "5%",
            alignItems: "center",
          }}
        >
          {/* <Text style={ {fontSize: 40, color: {darkGreen}, fontWeight: 'bold', marginRight: 60 }}>Welcome Back</Text>

                    <Text style={{ color:'grey', fontSize: 20, fontWeight: 'bold', marginBottom: 20}}>Login to your account</Text> */

          /*<Field placeholder="First Name" />
          <Field placeholder="Last Name" />
          <Field placeholder="Email/Username" keyboardType={"email-address"} />
          <Field placeholder="Contact Number" keyboardType={"number"} />
          <Field placeholder="Roll Number" />
          {/* <Field placeholder="Branch"  /> */
          /*<Field placeholder="Section" />

          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder=" Confirm Password" secureTextEntry={true} />

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginRight: "20%",
              paddingRight: "3%",
            }}
          >
            <Text style={{ color: "grey", fontSize: 16 }}>
              By signing in, you agree our
            </Text>
            <Text
              style={{ color: darkGreen, fontWeight: "bold", fontSize: 16 }}
            >
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginRight: "20%",
              paddingRight: "3%",
            }}
          >
            <Text style={{ color: "grey", fontSize: 16 }}>and {""} </Text>
            <Text
              style={{ color: darkGreen, fontWeight: "bold", fontSize: 16 }}
            >
              Privacy Policy
            </Text>
          </View>
          <View style={styles.but}>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="SignUp"
            Press={() => {
              alert("Account Created");
              props.navigation.navigate("RenMain");
            }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text
                style={{ color: darkGreen, fontWeight: "bold", fontSize: 16 }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
          </View>
        </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
     but: {
        width: "90%",
        marginRight: "22.5%"
     }
});

export default ReportIssue;
*/

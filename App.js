import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native' ;
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Route_Map4 from './components/Route_Map4';
import Route_Map3 from './components/Route_Map3';
import Route_Map2 from './components/Route_Map2';
import Route_Map1 from './components/Route_Map1';
import Tnc from './src/screens/Tnc';
import Chooseuser from './src/screens/Chooseuser';
import Driver_Login from './src/screens/Driver_Login'
import Driver_route_select from './route_select/Driver_route_select';
import Student_route from './route_select/Student_route';
import DriverList from './DriverList';
import DriverDetailScreen from './src/screens/DriverDetailScreen'
import {useState,useEffect} from 'react'
import BusStop from './BusStop';
import ReportIssue from './src/screens/ReportIssue';
import AboutUsScreen from './AboutUs';
import EmergencyContactsList from './EmergencyContactsList';
import DriverProfileScreen from './src/screens/DriverDetailScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import {getItem} from './src/screens/utils/asyncStorage'
//import AppNavigation from './Navigation/Appnavigation';

const Stack = createStackNavigator();

export default function App(){
  const [showOnboarding,setShowOnboarding]=useState(null);
useEffect(()=>{
  checkIfAlreadyOnboarded();
},[])
const checkIfAlreadyOnboarded=async()=>{
  let onboarded=await getItem('onboarded');

  if(onboarded===1)
  {console.log('kfjj');
      setShowOnboarding(false);
  }
  else{
      setShowOnboarding(true)
  }
}
if(showOnboarding==null)
{
  return null;
}



if(showOnboarding){
  

  return (
    <NavigationContainer>
   <Stack.Navigator initialRouteName={showOnboarding ? 'Home' : 'Jecrc-Track'}>
        {showOnboarding ? (
          <Stack.Screen
            name="Jecrc-Track"
            options={{ headerShown: false }}
            component={OnboardingScreen}
          />
        ) : null}
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Chooseuser}
        />
          
      <Stack.Screen 
        name="Tnc"
        component={Tnc}
        options={{ headerShown: false,}}
      />
     
      <Stack.Screen 
        name="Driver_Login"
        component={Driver_Login}
        options={{ headerShown: false,}}
      /> 
      <Stack.Screen 
        name="Student_route"
        component={Student_route}
        options={{ headerShown: false,}}
      /> 
      <Stack.Screen 
        name="Driver_route_select"
        component={Driver_route_select}
        options={{ headerShown: false,}}
      />
      <Stack.Screen 
        name="Map1"
        component={Route_Map1}
        options={{ headerShown: false,}}
      />
      <Stack.Screen 
        name="Map2"
        component={Route_Map2}
        options={{ headerShown: false,}}
      />
      <Stack.Screen 
        name="Map3"
        component={Route_Map3}
        options={{ headerShown: false,}}
      />
      <Stack.Screen 
        name="Map4"
        component={Route_Map4}
        options={{ headerShown: false,}}
      />
         <Stack.Screen 
        name="BusStop"
        component={BusStop}
        options={{ headerShown: false,}}
      />
      
      <Stack.Screen 
        name="DriverList"
        component={DriverList}
        options={{ headerShown: false,}}
      />
      <Stack.Screen 
        name="DriverDetailScreen"
        component={DriverDetailScreen}
        options={{ headerShown: false,}}
      />
      <Stack.Screen 
        name="ReportIssue"
        component={ReportIssue}
        options={{ headerShown: false,}}
      />
          
          <Stack.Screen 
        name="AboutUsScreen"
        component={AboutUsScreen}
        options={{ headerShown: false,}}
      />

      <Stack.Screen 
        name="EmergencyContactsList"
        component={EmergencyContactsList}
        options={{ headerShown: false,}}
      />



</Stack.Navigator>
</NavigationContainer>
)
}
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});






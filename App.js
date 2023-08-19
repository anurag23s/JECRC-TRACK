import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native' ;
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import OnboardingScreen from './Onboarding';
import Route_Map4 from './components/Route_Map4';
import Route_Map3 from './components/Route_Map3';
import Route_Map2 from './components/Route_Map2';
import Route_Map1 from './components/Route_Map1';
import TnC from './src/screens/Tnc';
import Chooseuser from './src/screens/Chooseuser';
import Driver_Login from './src/screens/Driver_Login'
import Driver_route_select from './route_select/Driver_route_select';
import Student_route from './route_select/Student_route';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false,}}
      />
      <Stack.Screen 
        name="TnC"
        component={TnC}
        options={{ headerShown: false,}}
      />
      <Stack.Screen 
        name="Chooseuser"
        component={Chooseuser}
        options={{ headerShown: false,}}
      />
      <Stack.Screen 
        name="DriverLogin"
        component={Driver_Login}
        options={{ headerShown: false,}}
      /> 
      <Stack.Screen 
        name="StudentRoute"
        component={Student_route}
        options={{ headerShown: false,}}
      /> 
      <Stack.Screen 
        name="DriverRouteSelect"
        component={Driver_route_select}
        options={{ headerShown: false,}}
      />
      <Stack.Screen 
        name="RouteMap1"
        component={Route_Map1}
        options={{ headerShown: false,}}
      />
      <Stack.Screen 
        name="RouteMap2"
        component={Route_Map2}
        options={{ headerShown: false,}}
      />
      <Stack.Screen 
        name="RouteMap3"
        component={Route_Map3}
        options={{ headerShown: false,}}
      />
      <Stack.Screen 
        name="RouteMap4"
        component={Route_Map4}
        options={{ headerShown: false,}}
      />
      

      </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

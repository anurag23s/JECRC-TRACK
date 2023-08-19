import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native' ;
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
        name="SelectScreen"
        component={Chooseuser}
        options={{ headerShown: false,}}
      />
      <Stack.Screen 
        name="Driver"
        component={Driver_Login}
        options={{ headerShown: false,}}
      /> 
      <Stack.Screen 
        name="Student"
        component={Student_route}
        options={{ headerShown: false,}}
      /> 
      <Stack.Screen 
        name="Student"
        component={Driver_route_select}
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

import React,{useEffect,useState} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Onboarding from '../Onboarding';
import Chooseuser from '../src/screens/Chooseuser';
const Stack=createNativeStackNavigator();
export default function AppNavigation(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Onboarding'>
                <Stack.Screen name="Onboarding" option={{headerShown:false}} component={Onboarding} />
                <Stack.Screen name="Chooseuser" option={{headerShown:false}} component={Chooseuser} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
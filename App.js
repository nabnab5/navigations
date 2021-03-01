
import React from 'react';
import { StyleSheet} from 'react-native';
import Constants from 'expo-constants';

import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Profile from './screens/Profile';
import BabyProfile from './screens/BabyProfile';


import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




const Stack = createStackNavigator();

const ProfileNavigator = () => (
    <Stack.Navigator initialRouteName='SignUp'>
      <Stack.Screen name = 'SignUp' component={SignUp} />
      <Stack.Screen name = 'Login' component={Login} />
      <Stack.Screen name = 'Profile' component={Profile}  options={{ headerLeft: null }}/>
      <Stack.Screen name = 'BabyProfile' component={BabyProfile}   />
    </Stack.Navigator>
  
);
export default function App() {
  return(
    <NavigationContainer>
      <ProfileNavigator/>
    </NavigationContainer>
  )
}

const style =StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
});
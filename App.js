
import React from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableHighlight, Image, SafeAreaView, Button, Alert, Platform, StatusBar, ImageBackground } from 'react-native';
import SelectFileScreen from './app/screens/SelectFileScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from './app/config/colors'
import CameraScreen from './app/screens/CameraScreen'
import * as FaceDetector from 'expo-face-detector';
const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: {backgroundColor: colors.secondary},
  headerTitleStyle: { color: "black"},
  headerTintColor: "white",

}
export default function App() {
  console.log('App executed');
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
        <Stack.Screen name='SelectFile' component={SelectFileScreen} />
        <Stack.Screen name='Camera' component={CameraScreen} />
      </Stack.Navigator>

    </NavigationContainer>)
}
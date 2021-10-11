
import React from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableHighlight, Image, SafeAreaView, Button, Alert, Platform, StatusBar, ImageBackground } from 'react-native';
import SecondScreen from './app/screens/SecondScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from './app/config/colors'
const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: {backgroundColor: colors.primary},
  headerTitleStyle: { color: "white"},
  headerTintColor: "white,"
}
export default function App() {
  console.log('App executed');
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
    
      </Stack.Navigator>

    </NavigationContainer>)
}
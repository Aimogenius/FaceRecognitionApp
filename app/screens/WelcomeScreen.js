import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {ImageBackground, StyleSheet, View, Image, Text, Button} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../config/colors';
function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground 
            style={styles.background}
            source={require('../assets/background.jpg')}>
                <View style={styles.textContainer}>
                    
                    <Text style={styles.welcomeText}>Welcome!</Text>

                </View>
                <View style={styles.bottomLine} />
                <View style={styles.startButton}>
                    <Button 
                        title="PRESS TO START"
                        color={colors.primary}
                        onPress={() => navigation.navigate('SelectFile')}
                    />

                </View>

        </ImageBackground>
        
        
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    bottomLine: {
        width:'100%',
        height:70,
        backgroundColor: colors.secondary,
        position: 'absolute',
        bottom:0
        
    },
    registerButton: {
        width:'100%',
        height:70,
        backgroundColor: '#4ecdc4',
        
    },
    logo:{
        width:100,
        height:100,
        
    },
    textContainer:{
        position:'absolute',
        top:150,
        alignItems: 'center'
        
    },
    welcomeText:{
        fontSize:24,
        fontWeight: 'bold',
    },
    startButton:{
        
    }

})
export default WelcomeScreen;
import React from 'react';
import { Image, ImageBackground, StyleSheet, View, SafeAreaView } from 'react-native';
import colors from '../config/colors';

function SecondScreen(props) {
    return (
            <View style={styles.container}>
                <View style={styles.closeIcon}/>
                <View style={styles.deleteIcon}/>
                <Image resizeMode='contain' style={styles.background} source={require("../assets/chair.jpg")}></Image>
            </View>
        
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        width:'100%',
        height:'100%'
    },
    container:{
        flex:1,
        backgroundColor:colors.black
    },

    closeIcon:{
        width:50,
        height:50,
        position:"absolute",
        left:20,
        top:40,
        backgroundColor:colors.primary
    },

    deleteIcon:{
        width:50,
        height:50,
        position:"absolute",
        right:20,
        top:40,
        backgroundColor:colors.secondary
    }
})


export default SecondScreen;
import React, { useState, useEffect } from 'react';
import { Image, ImageBackground, StyleSheet, View, SafeAreaView, Button, TouchableOpacity, Text } from 'react-native';
import colors from '../config/colors';
import * as ImagePicker from 'expo-image-picker';
function SelectFileScreen({navigation}) {
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryPermission(galleryStatus.status === 'granted');
            
          }
        })();
      }, []);

    if (hasGalleryPermission === null) {
        return <View />;
    }
    if (hasGalleryPermission === false) {
        return <Text>No access to gallery</Text>;
    }
    
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
        if (!result.cancelled) {
          setSelectedImage(result.uri);
          navigation.navigate('Camera');
        };
        
      };


    return (
        <ImageBackground 
            style={styles.background}
            source={require('../assets/background.jpg')}>
                <View style={styles.bottomLine} />
                <View style={styles.startButton}>
                    <TouchableOpacity style={styles.openDoc} onPress={() => pickImage()}  >
                        <Text>Select your image</Text>
                    </TouchableOpacity>

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
    openDoc:{
        
        width:'80%',
        padding:10,
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        
    }

})


export default SelectFileScreen;


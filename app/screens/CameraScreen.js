import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableOpacityComponent } from 'react-native';
import { Camera } from 'expo-camera';
import selectedImage from './SelectFileScreen';
import colors from "../config/colors"

export default function CameraScreen() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [retrievedImage, setRetrievedImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  const takePicture = async() =>{
    if (camera) {
      const data = await camera.takePictureAsync(null);
      console.log(data.uri);
      setRetrievedImage(data.uri);
    }
  }

  if (hasCameraPermission === null) {
    return <View />;
  }
  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera style={styles.fixedRatio} type={type} ratio={'1:1'} ref={ref => setCamera(ref)}/>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}>
          <Text style={styles.text}> Flip </Text>
        </TouchableOpacity>
        
      </View>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1
  },
  cameraContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer:{
    justifyContent: 'center',
    alignItems: 'center',

  },
  button:{
    width:'80%',
    padding:10,
    borderRadius:10,
    backgroundColor: colors.primary,
    alignItems: 'center',
    bottom: 50
  },
  text:{
    alignItems: 'center',
  },

  fixedRatio:{
    flex:1,
    aspectRatio:1
  }
})
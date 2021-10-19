# FaceRecognitionApp
The Android/iOS app to recognize the percent of similarity of person's face and its ID face built with React Native and JavaScript.


This app has 3 Screens: WelcomeScreen, SelectFileScreen, and CameraScreen. 




WelcomeScreen.js


This is just a screen for navigation to the main SelectFileScreen and CameraScreen.


SelectFileScreen.js


On this screen, you have to select the Image with your face displayed on the ID card/passport or your selfie to process with face verification. After you selected the file,
you should be navigated onto the camera screen. 


CameraScreen.js


On this screen, you will be asked permission to use your phone camera. Make sure to allow it, since otherwise you would not be able to proceed with face verification. 
After you've done that, there will be a screen, which will automatically take Images and compare them with your ID card/passport/selfie photo. If your image and your face are
similar, you there will be a green border around your camera. Otherwise, the border will be red.


*Important note: The Microsoft Azure services require edits in the direct AndroidManifest and iOS files, which restricts access to the API with the Expo CLI. Moreover,

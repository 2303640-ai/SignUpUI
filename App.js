import React, { useState } from 'react';
import Logo from './assets/logo.png';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import LoginScreen from './src/loginscreen';
import SignUpScreen from './src/signUpscreen';
import StudentHomePage from './src/homepage';


export default function App() {
return(
  <>
     <LoginScreen />
    <SignUpScreen />
     <StudentHomePage />
  </>
);
}

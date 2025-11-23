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

export default function App() {
return(
  <>
     {/* <LoginScreen /> */}
     <SignUpScreen /> 
  </>
);
}

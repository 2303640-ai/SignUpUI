import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/loginscreen';
import SignUpScreen from './src/signUpscreen';


const Stack = createNativeStackNavigator();

const App = () =>  {
return(

  <NavigationContainer>
    <Stack.Navigator
    initialRouteName="LoginScreen"
    screenOptions={{
      headerShown: false ,
    }}
    >
        <Stack.Screen name = "LoginScreen" component={LoginScreen}/>
        <Stack.Screen name = "SignupScreen" component={SignUpScreen}/>

    </Stack.Navigator>
  </NavigationContainer>


  );

};

export default App;

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/LoginScreen';
import SignUpScreen from './src/SignUpScreen';




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
        <Stack.Screen name = "SignUpScreen" component={SignUpScreen}/>

    </Stack.Navigator>
  </NavigationContainer>


  );

};

export default App;

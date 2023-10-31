
import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import ProductScreen from '../Screen/ProductDetails/ProductScreen'



const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
  
      <Stack.Navigator
      screenOptions={
        {
            headerShown:false,
                   
        }
    }
      >
       
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='ProductScreen' component={ProductScreen}/>

       
        
      </Stack.Navigator>
    
  );
}

export default StackNavigation;
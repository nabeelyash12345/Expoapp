import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation'
import BottamTabNavigation from './src/navigation/BottamTabNavigation';


export default function App() {
  return (
    <>
     
         <NavigationContainer>
           <BottamTabNavigation/>
        </NavigationContainer> 
        
     
    </>
  )
}
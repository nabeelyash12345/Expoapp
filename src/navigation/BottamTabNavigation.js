import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feeback from '../Screen/feedback/Feeback';
import Profile from '../Screen/Profile/Profile';
import StackNavigation from '../navigation/StackNavigation';
import FitnessInstructors from '../Screen/FitnessInstructors/FitnessInstructors'

const Tab = createBottomTabNavigator();

export default function BottamTabNavigation() {
  return (

    <Tab.Navigator
      screenOptions={{


        headerShown: false,
        tabBarActiveTintColor: 'rgba(237, 110, 0, 1)',
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 1)',
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: '#111111',
          borderTopWidth: 0,
          height: 83,
          justifyContent: 'center',
          alignItems: 'center',


        },
      }}
    >
      <Tab.Screen name="StackNavigation" component={StackNavigation}
        options={{

          tabBarIcon: ({ focused }) => (

            <View style={{
              alignItems: "baseline", justifyContent: "center",
              height: 49, width: 49, borderRadius: 6, alignItems: 'center'
            }}>
              <Image
                source={require('../../assets/home.png')}

                resizeMode="contain"
                style={{
                  width: 25.13,
                  height: 23.73

                }}
              />

            </View>

          )
        }}

      />
      <Tab.Screen name="FitnessInstructors" component={FitnessInstructors}
        options={{
          tabBarIcon: ({ focused }) => (

            <View style={{
              alignItems: "baseline", justifyContent: "center",
              alignItems: 'center'
            }}>
              <Image
                source={require('../../assets/main.png')}

                resizeMode="contain"
                style={{
                  width: 25.13,
                  height: 23.73

                }}
              />

            </View>

          )
        }}

      />
      <Tab.Screen name={"Feeback"} component={Feeback}
        options={{

          tabBarIcon: ({ focused }) => (

            <View style={{
              alignItems: "baseline", justifyContent: "center",
              height: 50, width: 50, borderRadius: 6, alignItems: 'center'
            }}>
              <Image
                source={require('../../assets/center.png')}

                resizeMode="contain"
                style={{
                  width: 50.13,
                  height: 50.73

                }}
              />


            </View>

          )
        }}

      />

      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (

            <View style={{
              alignItems: "baseline", justifyContent: "center",
              height: 49, width: 49, borderRadius: 6, alignItems: 'center'
            }}>
              <Image
                source={require('../../assets/ep.png')}

                resizeMode="contain"
                style={{
                  width: 25.13,
                  height: 23.73

                }}
              />

            </View>

          )
        }}
      />
     
    </Tab.Navigator>

  );
}
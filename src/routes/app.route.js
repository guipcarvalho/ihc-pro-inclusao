import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Organization from '../pages/Organization';
import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';
import Donation from '../pages/Donation';
import Social from '../pages/Social';
import Help from '../pages/Help';

const Tab = createBottomTabNavigator();

export default function AppRoute() {
    const iconSize = 25;

    return (
        <Tab.Navigator 
         tabBarOptions={{
            style: {
                elevation: 2,
                shadowColor: '#000',
                shadowOffset: { height: -10, width: 0 },
                shadowRadius: 10,
                shadowOpacity: 0.1,
            },
            activeTintColor: '#D32F2F',
            inactiveTintColor: 'gray'
        }}>
            <Tab.Screen name="Organization" component={Organization} options={{
                tabBarLabel: "Organizações",
                tabBarIcon: ({ color }) => {
                    return (<Feather name="globe" size={iconSize} color={color} />)
                }
            }} />
            <Tab.Screen name="Donation" component={Donation} options={{
                tabBarLabel: "Doações",
                tabBarIcon: ({ color }) => {
                    return (<FontAwesome5 name="hand-holding-heart" size={iconSize} color={color} />)
                }
            }} />
            <Tab.Screen name="Help" component={Help} options={{
                tabBarLabel: "Ajude",
                tabBarIcon: ({ color }) => {
                    return (<FontAwesome5 name="first-aid" size={iconSize} color={color} />)
                }
            }} />
        </Tab.Navigator>
    )
}
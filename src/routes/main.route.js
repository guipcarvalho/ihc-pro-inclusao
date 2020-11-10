import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../pages/Login'

const AppStack = createStackNavigator()

export default function MainRoute() {
    return (
        <NavigationContainer>
            <AppStack.Navigator initialRouteName="Login">
                <AppStack.Screen name="Login" component={Login} options={{
                    headerShown: false
                }} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}
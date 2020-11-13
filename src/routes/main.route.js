import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../pages/Login'
import Register from '../pages/Register'
import AppRoute from './app.route'

const AppStack = createStackNavigator()

export default function MainRoute() {
    return (
        <NavigationContainer>
            <AppStack.Navigator initialRouteName="Login" screenOptions={{
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#D32F2F'
                }
            }}>
                <AppStack.Screen name="Login" component={Login} options={{
                    headerShown: false
                }} />
                <AppStack.Screen name="Register" component={Register} options={{
                    headerTitle: 'Cadastro',
                    
                }}/>
                <AppStack.Screen name="App" component={AppRoute} options={{
                    headerShown: false,
                }} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}
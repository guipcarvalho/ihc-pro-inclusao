import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../pages/Login'
import Register from '../pages/Register'
import AppRoute from './app.route'
import OrganizationRegistration from '../pages/OrganizationRegistration'
import HelpRegistration from '../pages/HelpRegistration'
import DonationRegistration from '../pages/DonationRegistration'

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
                <AppStack.Screen name="Home" component={AppRoute} options={{
                    headerShown: false,
                }} />
                <AppStack.Screen name="OrganizationRegistration" component={OrganizationRegistration} options={{
                    headerTitle: 'Cadastro de Organização',
                }}/>
                <AppStack.Screen name="HelpRegistration" component={HelpRegistration} options={{
                    headerTitle: 'Cadastro de Pessoa',
                }}/>
                <AppStack.Screen name="DonationRegistration" component={DonationRegistration} options={{
                    headerTitle: 'Cadastro de Doação',
                }}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}
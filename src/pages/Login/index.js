import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Dimensions, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';


import styles from './styles'
import Animated, { Easing, timing, Value } from 'react-native-reanimated';
import LoginForm from '../../components/LoginForm';

export default function Login() {
    const navigation = useNavigation();
    const [isVisible, setIsVisible] = useState(false);

    const panelHeight = useState(new Value(200))[0];
    const animHeight = (hgt) => timing(panelHeight, {
        duration: 500,
        toValue: hgt,
        easing: Easing.inOut(Easing.ease),
      });

    const buttonOpacity = useState(new Value(1))[0];
    const formOpacity = useState(new Value(0))[0];

    const fadeIn = (attr) => {
        return timing(attr, {
            duration: 500,
            toValue: 1,
            easing: Easing.inOut(Easing.ease),
          });
    }

    const fadeOut = (attr) => {
        return timing(attr, {
            duration: 500,
            toValue: 0,
            easing: Easing.inOut(Easing.ease),
          });
    }


    const getLoginPanel = () => {
        if(isVisible)
            return (
                <Animated.View style={[styles.content, {opacity: formOpacity}]}>
                    <LoginForm onCancel={() => { 
                        animHeight(200).start(); 
                        fadeOut(formOpacity)
                        .start(() => {
                                setIsVisible(false);
                                fadeIn(buttonOpacity).start();
                            });
                    }} 
                    onLogin={() => {
                        navigation.navigate('Home');
                    }}
                    />
                </Animated.View>
            )
        
        return null;
    }

    const getButtons = () => {
        if(!isVisible)
            return (
                <Animated.View style={[styles.content, {opacity: buttonOpacity}]}>
                    <TouchableOpacity style={styles.login} onPress={() => { 
                        animHeight(Dimensions.get('window').height * 0.7).start(); 
                        fadeOut(buttonOpacity)
                        .start(() => {
                                setIsVisible(true);
                                fadeIn(formOpacity).start();
                            });
                        }}>
                        <Text style={styles.loginText}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.registration} onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.registrationText}>Cadastrar</Text>
                    </TouchableOpacity>
                </Animated.View>
            )
        
        return null;
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Pró-Inclusão Ufjf</Text>
            </View>
            <Animated.View style={[styles.bottomContainer, { height: panelHeight }]}>
                { getButtons() }
                { getLoginPanel() }
            </Animated.View>
        </View>
    );
}
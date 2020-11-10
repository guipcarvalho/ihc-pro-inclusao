import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles'

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Pró-Inclusão Ufjf</Text>
            </View>
            <View style={styles.content}>
                <TouchableOpacity style={styles.login}>
                    <Text style={styles.loginText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.registration}>
                    <Text style={styles.registrationText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
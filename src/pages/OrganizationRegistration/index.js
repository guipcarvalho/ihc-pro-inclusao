import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { StatusBar, TextInput, View, TouchableOpacity, Text } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import styles from './styles'

export default function OrganizationRegistration() {
    const [cnpj, setCnpj] = useState('');
    const navigation = useNavigation()
    return (
        <View style={styles.page}>
            <StatusBar barStyle="light-content" />
            <TextInput
                style={styles.field}
                placeholder="Razão Social"
            />
            <TextInputMask 
                type={'cnpj'}
                style={styles.field}
                onChangeText={text => setCnpj(text)}
                value={cnpj}
                placeholder="CNPJ"
            />
            <TouchableOpacity style={styles.register}>
                <Text style={styles.registerText}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancel} onPress={() => navigation.goBack()}>
                <Text style={styles.cancelText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}
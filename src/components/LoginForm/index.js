import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import styles from './styles'

export default function LoginForm({ onCancel }) {
    const [cpf, setCpf] = useState('');

    return (
        <View style={styles.container}>
            <TextInputMask 
                type={'cpf'}
                style={styles.field}
                onChangeText={text => setCpf(text)}
                value={cpf}
                placeholder="CPF"
            />
            <TextInput
                style={styles.field}
                placeholder="Senha"
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.register}>
                <Text style={styles.registerText}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancel} onPress={() => onCancel() }>
                <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
        </View>
    );
}
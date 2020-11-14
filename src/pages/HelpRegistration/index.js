import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { StatusBar, TextInput, View, TouchableOpacity, Text } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import styles from './styles'

export default function HelpRegistration() {
    const [birth, setBirth] = useState('');
    const [cpf, setCpf] = useState('');
    const navigation = useNavigation()
    return (
        <View style={styles.page}>
            <StatusBar barStyle="light-content" />
            <TextInput
                style={styles.field}
                placeholder="Nome completo"
            />
            <TextInputMask 
                type={'datetime'}
                style={styles.field}
                onChangeText={text => setBirth(text)}
                value={birth}
                placeholder="Data de Nascimento"
                options={{
                    format: 'DD/MM/YYYY'
                }}
            />
            <TextInputMask 
                type={'cpf'}
                style={styles.field}
                onChangeText={text => setCpf(text)}
                value={cpf}
                placeholder="CPF"
            />
            <RNPickerSelect
                onValueChange={(value) => setSex(value)}
                items={[
                    { label: 'Masculino', value: 'masc' },
                    { label: 'Feminino', value: 'fem' },
                    { label: 'Não quero declarar', value: 'na' },
                ]}
                placeholder={{ inputLabel: 'Selecione um item', label: 'Selecione um item' }}
                style={{
                    inputIOS: styles.field,
                    inputAndroid: styles.field
                }}
            />
            <TextInput
                style={styles.field}
                placeholder="Bairro"
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
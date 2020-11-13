import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, TextInput, Text, ScrollView, TouchableOpacity, Platform, StatusBar} from "react-native";
import { TextInputMask } from "react-native-masked-text";
import RNPickerSelect from 'react-native-picker-select';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styles from './styles';

export default function Register()
{
    const [date, setDate] = useState('');
    const [cpf, setCpf] = useState('');
    const [sex, setSex] = useState('');

    const navigation = useNavigation();

    return (
        <KeyboardAwareScrollView 
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            extraHeight={100}
            style={{ flex: 1, flexDirection: 'column' }}
            >
                <StatusBar barStyle="light-content" />
                <View style={styles.container}>
                    <Text style={styles.headerText}>Insira os seus dados cadastrais</Text>
                    <TextInput
                        style={styles.field}
                        placeholder="Nome Completo"
                    />
                    <TextInputMask 
                        type={'datetime'}
                        options={{
                            format: 'DD/MM/YYYY'
                        }}
                        style={styles.field}
                        onChangeText={text => setDate(text)}
                        value={date}
                        placeholder="Data de Nascimento"
                    />
                    <TextInputMask 
                        type={'cpf'}
                        style={styles.field}
                        onChangeText={text => setCpf(text)}
                        value={cpf}
                        placeholder="CPF"
                    />
                    <TextInput
                        style={styles.field}
                        placeholder="Cidade"
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
                        placeholder="Instituição"
                    />
                    <TextInput
                        style={styles.field}
                        placeholder="Senha"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={styles.register}>
                        <Text style={styles.registerText}>Cadastrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancel} onPress={() => navigation.goBack() }>
                        <Text style={styles.cancelText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
        </KeyboardAwareScrollView>
    )
}
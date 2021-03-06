import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, TextInput, Text, ScrollView, TouchableOpacity, Platform, StatusBar} from "react-native";
import { TextInputMask } from "react-native-masked-text";
import RNPickerSelect from 'react-native-picker-select';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styles from './styles';

export default function Register()
{
    const [organicacao, setOrganizacao] = useState("");
    const [date, setDate] = useState('');
    const [cpf, setCpf] = useState('');
    const [sex, setSex] = useState('');

    const navigation = useNavigation();

    return (
        <KeyboardAwareScrollView 
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            extraHeight={100}
            style={{ flex: 1, backgroundColor: 'white', flexDirection: 'column' }}
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
                        placeholder={{ inputLabel: 'Selecione seu sexo', label: 'Selecione seu sexo' }}
                        style={{
                            inputIOS: styles.field,
                            inputAndroid: styles.field
                        }}
                    />
                    <RNPickerSelect
                        onValueChange={(value) => setOrganizacao(value)}
                        items={[
                            { label: "SOS Juiz de Fora 1", value: "SOS Juiz de Fora 1" },
                            { label: "SOS Juiz de Fora 2", value: "SOS Juiz de Fora 2" },
                            { label: "SOS Juiz de Fora 3", value: "SOS Juiz de Fora 3" }
                        ]}
                        value={organicacao}
                        placeholder={{
                            inputLabel: "Selecione uma Organização",
                            label: "Selecione uma Organização"
                        }}
                        style={{
                            inputIOS: styles.field,
                            inputAndroid: styles.field
                        }}
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
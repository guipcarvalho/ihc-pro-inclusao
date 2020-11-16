import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { StatusBar, TextInput, View, TouchableOpacity, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import NumericInput from 'react-native-numeric-input'
import RNPickerSelect from "react-native-picker-select";

import styles from './styles'

export default function DonationRegistration() {
    const navigation = useNavigation();
    const [organicacao, setOrganizacao] = useState("");

    return (
        <KeyboardAwareScrollView 
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            extraHeight={100}
            style={{ flex: 1, backgroundColor: 'white', flexDirection: 'column' }}
            >

            <View style={styles.page}>
                <StatusBar barStyle="light-content" />
                <TextInput
                    style={styles.field}
                    placeholder="Nome do produto"
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
                <View style={styles.qtdContainer}>
                    <Text style={styles.qtdText}>Quantidade:</Text>
                    <NumericInput 
                        minValue={0}
                        containerStyle={styles.numericContainer}
                        inputStyle={styles.numericContainer}
                        totalWidth={150}
                        totalHeight={40}
                        rounded
                        reachMinDecIconStyle={{ opacity: 0 }}
                    />
                </View>

                <TextInput
                    style={[styles.field, {height: 100}]}
                    placeholder="Descrição"
                    multiline
                />
                <TouchableOpacity style={styles.register}>
                    <Text style={styles.registerText}>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancel} onPress={() => navigation.goBack()}>
                    <Text style={styles.cancelText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
        
    );
}
import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { StatusBar, TextInput, View, TouchableOpacity, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import NumericInput from 'react-native-numeric-input'

import styles from './styles'

export default function DonationRegistration() {
    const navigation = useNavigation()
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
                
                <TextInput
                    style={styles.field}
                    placeholder="Organização"
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
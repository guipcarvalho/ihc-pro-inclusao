import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import Card from '../../components/Card';
import ListContainer from '../../components/ListContainer';

import styles from './styles'

export default function Help() {
    const navigation = useNavigation();
    return (
        <View style={styles.page}>
            <ListContainer 
                title="Ajude"
                searchText="Procurar por pessoa a ajudar..."
                data={[{},{},{},{},{},{},{},{}]}
                renderItem={(item) => {
                    return (
                        <Card>
                            <Text style={styles.mainText}>Luís Guilherme Carvalho</Text>
                            <Text style={styles.secondaryText}>Nasc: 11/02/1992</Text>
                            <Text style={styles.secondaryText}>CPF: 123.123.456-87</Text>
                            <Text style={styles.secondaryText}>Sexo: Masculino</Text>
                            <Text style={styles.secondaryText}>Bairro: Alto dos Passos</Text>
                        </Card>
                    )
                }}
                plusOnPress={() => navigation.navigate('HelpRegistration')}
            />
        </View>
        
    );
}
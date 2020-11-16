import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import Card from '../../components/Card';
import ListContainer from '../../components/ListContainer';

import styles from './styles'

export default function Donation() {

    const navigation = useNavigation();
    
    return (
        <View style={styles.page}>
            <ListContainer 
                title="Doações"
                searchText="Procurar por doação..."
                plusOnPress={() => navigation.navigate('DonationRegistration')}
                data={[
                {
                    name: 'Arroz 5Kg',
                    qtd: '100'
                },
                {
                    name: 'Feijão 1Kg',
                    qtd: '1000'
                },
                {
                    name: 'Açucar 1Kg',
                    qtd: '400'
                },
                {
                    name: 'Arroz 5Kg',
                    qtd: '100'
                },
                {
                    name: 'Feijão 1Kg',
                    qtd: '1000'
                },
                {
                    name: 'Açucar 1Kg',
                    qtd: '400'
                },
                {
                    name: 'Arroz 5Kg',
                    qtd: '100'
                },
                {
                    name: 'Feijão 1Kg',
                    qtd: '1000'
                },
                {
                    name: 'Açucar 1Kg',
                    qtd: '400'
                }]}
                renderItem={({ item }) => {
                    return (
                        <Card>
                            <Text style={styles.mainText}>{item.name}</Text>
                            <Text style={styles.secondaryText}>Quantidade: {item.qtd}</Text>
                        </Card>
                    )
                }}
            />
        </View>
        
    );
}
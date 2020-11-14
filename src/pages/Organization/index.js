import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import Card from '../../components/Card';
import ListContainer from '../../components/ListContainer';

import styles from './styles'

export default function Organization() {
    const navigation = useNavigation();

    return (
        <View style={styles.page}>
            <ListContainer 
                title="Organizações"
                searchText="Procurar por organização..."
                data={[{},{},{},{},{},{},{},{}]}
                plusOnPress={() => navigation.navigate('OrganizationRegistration')}
                renderItem={(item) => {
                    return (
                        <Card>
                            <Text style={styles.mainText}>Lar Tia Anastácia</Text>
                            <Text style={styles.secondaryText}>02.242.994/0001-88</Text>
                        </Card>
                    )
                }}
            />
        </View>
        
    );
}
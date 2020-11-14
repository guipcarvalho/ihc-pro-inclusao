import React from 'react';
import { Text, View } from 'react-native';
import Card from '../../components/Card';
import ListContainer from '../../components/ListContainer';

import styles from './styles'

export default function Social() {
    return (
        <View style={styles.page}>
            <ListContainer 
                title="Representantes Sociais"
                searchText="Procurar por representante social..."
                data={[{},{},{},{},{},{},{},{}]}
                renderItem={(item) => {
                    return (
                        <Card>
                            <Text style={styles.mainText}>Luís Guilherme Carvalho</Text>
                            <Text style={styles.secondaryText}>11/02/1992</Text>
                        </Card>
                    )
                }}
            />
        </View>
        
    );
}
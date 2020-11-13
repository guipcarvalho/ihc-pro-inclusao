import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Card from '../../components/Card';
import ListContainer from '../../components/ListContainer';

import styles from './styles'

export default function Organization() {
    return (
        <View style={styles.page}>
            <ListContainer 
                title="Organizações"
                searchText="Procurar por organização..."
                data={[{},{},{},{},{},{},{},{}]}
                renderItem={(item) => {
                    return (
                        <Card />
                    )
                }}
            />
        </View>
        
    );
}
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import styles from './styles'

export default function Card() {
    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>Lar Tia Anastácia</Text>
            <Text style={styles.secondaryText}>02.242.994/0001-88</Text>
        </View>
    );
};
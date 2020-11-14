import React, { useState } from 'react';
import { View } from 'react-native';

import styles from './styles'

export default function Card({ children }) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}
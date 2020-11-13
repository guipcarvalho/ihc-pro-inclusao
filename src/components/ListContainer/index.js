import React from 'react'
import { Image, SafeAreaView, StatusBar, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import styles from './styles'

export default function ListContainer({
    title,
    data
})
{
    return (
        <SafeAreaView style={[styles.container]}>
            <StatusBar barStyle="dark-content" />
            <Image style={styles.logo} source={require('../../assets/logo.png')} />
            
            <FlatList 
                ListHeaderComponent={
                    <Text style={styles.pageTitle}>{title}</Text>
                }
                style={styles.list}
            />
        </SafeAreaView>
    );
}
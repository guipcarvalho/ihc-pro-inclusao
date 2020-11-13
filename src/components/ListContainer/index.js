import React from 'react'
import { Image, SafeAreaView, StatusBar, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles'

export default function ListContainer({
    title,
    data,
    renderItem,
    searchText
})
{
    let search;
    return (
        <SafeAreaView style={[styles.container]}>
            <StatusBar barStyle="dark-content" />
            <Image style={styles.logo} source={require('../../assets/logo.png')} />
            
            <FlatList
                data={data}
                ListHeaderComponent={
                    <View>
                        <Text style={styles.pageTitle}>{title}</Text>
                        <View style={styles.searchBox}>
                            <TouchableOpacity style={styles.searchButton} onPress={() => search.focus() }>
                                <Feather name="search" size={20} color="#D32F2F" />
                            </TouchableOpacity>
                            <TextInput ref={(input) => { search = input; }} placeholder={searchText} style={styles.searchInput} />
                        </View>
                    </View>
                }
                renderItem={renderItem}
                style={styles.list}
            />
            <TouchableOpacity style={styles.plusButton}>
                <Feather name="plus" size={40} color="white" />
            </TouchableOpacity>
        </SafeAreaView>
    );
}
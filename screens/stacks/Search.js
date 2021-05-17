import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, StatusBar } from 'react-native'
import { Searchbar } from 'react-native-paper';


export default function Search() {
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return (
        <View>
            <StatusBar StatusBarStyle="light-content" />
            <Searchbar
                placeholder="Search Stores"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'center',
    },
});
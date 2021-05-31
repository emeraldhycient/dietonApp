import React, { useState } from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { Searchbar, Text } from 'react-native-paper';


export default function Search({ route, navigation }) {

    const [searchQuery, setSearchQuery] = useState('');
    const item = route.params.item

    const onChangeSearch = query => setSearchQuery(query);
    return (
        <View>
            <StatusBar StatusBarStyle="light-content" />
            <Searchbar
                placeholder="Search Stores"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <View>
                <Text>{item}</Text>
            </View>
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
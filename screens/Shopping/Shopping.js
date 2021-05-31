import React, { useState } from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';

import ItemList from './ItemList'
import colors from '../../assets/colors'


const Shopping = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return (
        <View style={styles.container}>
            <StatusBar StatusBarStyle="light-content" />
            <Searchbar
                placeholder="Shop Fresh Groceries"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <ItemList />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
    },
})

export default Shopping

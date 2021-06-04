import React, { useState } from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Searchbar, FAB } from 'react-native-paper';

import ItemList from './ItemList'
import colors from '../../assets/colors'


const Shopping = ({ navigation, route }) => {
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
            <FAB
                style={styles.fab}
                icon="plus"
                color={colors.purple}
                onPress={() => navigation.push('Upload groceries')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})

export default Shopping

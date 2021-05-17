import React, { useState } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { Searchbar } from 'react-native-paper';

const Shopping = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return (
        <View>
            <StatusBar StatusBarStyle="light-content" />
            <Searchbar
                placeholder="Shop Fresh Groceries"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
        </View>
    )
}

export default Shopping

import React, { useState } from 'react'
import { View, SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import { Divider, FAB, Searchbar, Text, Button } from 'react-native-paper';

import colors from '../../assets/colors'
import AmountHolder from './AmountHolder'
import NameHolder from './NameHolder'
import TransactionHistory from './TransactionHistory'

const Wallet = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar StatusBarStyle="light-content" />
            <NameHolder />
            <View style={{ margin: 25 }} />
            <AmountHolder />
            <View />
            <TransactionHistory />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight,
    },

})

export default Wallet

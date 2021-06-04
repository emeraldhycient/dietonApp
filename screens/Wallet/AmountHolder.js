import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Divider, FAB, Searchbar, Text, Button } from 'react-native-paper';

import colors from '../../assets/colors'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';




const AmountHolder = () => {
    const accountBalance = 400000
    return (
        <View style={styles.container}>
            <View style={{ width: '100%', justifyContent: 'space-around', paddingLeft: 35, paddingRight: 25, }}>
                <Text style={{ color: colors.grey, }}>
                    Available Balance
                </Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.grey, paddingTop: 10 }}>
                    <MaterialCommunityIcons name='currency-ngn' size={15} />
                    {accountBalance.toFixed(2).toLocaleString("fr-FR")}
                </Text>
            </View>
            <View style={styles.minContainer}>
                <View>
                    <View style={styles.semiContainer}>
                        <Entypo name='wallet' size={25} color={colors.purple} />
                    </View>
                    <Text style={colors.black}>Fund</Text>
                </View>
                <View>
                    <View style={styles.semiContainer}>
                        <FontAwesome name='bank' size={20} color={colors.purple} />
                    </View>
                    <Text style={colors.black}>Withdraw</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '88%',
        height: 200,
        borderRadius: 25,
        backgroundColor: colors.black,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    minContainer: {
        width: '80%',
        height: 90,
        borderRadius: 15,
        backgroundColor: colors.grey,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    semiContainer: {
        width: 45,
        height: 45,
        borderRadius: 15,
        backgroundColor: colors.lightblack,
        justifyContent: 'center',
        alignItems: 'center'
    }

})

export default AmountHolder

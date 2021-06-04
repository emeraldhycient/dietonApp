import React, { useState } from 'react'
import { View, StyleSheet, Image, Pressable } from 'react-native'

import { Text } from 'react-native-paper'

import { useAtom } from 'jotai'

import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/colors'


const NameHolder = () => {
    const name = 'Emerald Hycient'

    return (
        <View style={{ flexDirection: 'row', position: 'absolute', top: 0, left: 0, marginTop: 20, marginLeft: 30, marginBottom: 30, justifyContent: 'space-evenly' }}>
            <View style={{ flexDirection: 'row', }}>
                <View style={styles.profilePicture}>
                    <Pressable>
                        <Image
                            source={{ uri: 'https://media.istockphoto.com/photos/varied-food-carbohydrates-protein-vegetables-fruits-dairy-legumes-on-picture-id1218254547?b=1&k=6&m=1218254547&s=170667a&w=0&h=EXwwoHJ3wI0H2jDfoFhqOiIo2c4cL0y7R8Gop3iIO30=' }}
                            style={{ width: 38, height: 38, borderRadius: 100, }}
                        />
                    </Pressable>
                </View>
                <Text style={{ color: colors.black, fontWeight: 'bold', fontSize: 18, marginLeft: 16 }}>{name}</Text>
            </View>
        </View>
    )
}


styles = StyleSheet.create({

    profilePicture: {
        borderRadius: 100,
        borderColor: '#ccc',
        borderWidth: 2,
        backgroundColor: colors.background,
        width: 42,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.white,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
})

export default NameHolder

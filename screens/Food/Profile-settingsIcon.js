import React, { useState } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'

import { useAtom } from 'jotai'
import colors from '../../assets/colors'


const Profile_settingsIcon = ({ navigation }) => {

    return (
        <View style={{ flexDirection: 'row', position: 'absolute', top: 0, right: 0, margin: 20, justifyContent: 'space-around' }}>

            <View style={styles.profilePicture}>
                <TouchableOpacity onPress={() => navigation.push('Details')}>
                    <Image
                        source={{ uri: 'https://media.istockphoto.com/photos/varied-food-carbohydrates-protein-vegetables-fruits-dairy-legumes-on-picture-id1218254547?b=1&k=6&m=1218254547&s=170667a&w=0&h=EXwwoHJ3wI0H2jDfoFhqOiIo2c4cL0y7R8Gop3iIO30=' }}
                        style={{ width: 40, height: 40, borderRadius: 100, }}
                    />
                </TouchableOpacity>
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
        width: 45,
        height: 45,
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

export default Profile_settingsIcon

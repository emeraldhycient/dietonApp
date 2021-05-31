import React, { useState } from 'react'
import { View, StyleSheet, Image } from 'react-native'

import { useAtom } from 'jotai'

import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/colors'


const Profile_settingsIcon = () => {


    return (
        <View style={{ flexDirection: 'row', position: 'absolute', top: 0, right: 0, margin: 20, justifyContent: 'space-evenly' }}>
            <View style={{ flexDirection: 'row', }}>
                <View>
                    <Ionicons name='settings' size={40} />
                </View>
                <View style={styles.profilePicture}>
                    <Image
                        source={{ uri: 'https://media.istockphoto.com/photos/varied-food-carbohydrates-protein-vegetables-fruits-dairy-legumes-on-picture-id1218254547?b=1&k=6&m=1218254547&s=170667a&w=0&h=EXwwoHJ3wI0H2jDfoFhqOiIo2c4cL0y7R8Gop3iIO30=' }}
                        style={{ width: 40, height: 40, borderRadius: 100, }}
                    />
                </View>
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

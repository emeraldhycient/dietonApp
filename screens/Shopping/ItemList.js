import React, { useState } from 'react'
import { View, StyleSheet, Pressable, TouchableOpacity, Image } from 'react-native'
import { Divider, FAB, Searchbar, Text, Button } from 'react-native-paper';


import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import colors from '../../assets/colors'




import { useAtom } from 'jotai'
import { cartmodal } from '../../state'
import { ScrollView } from 'react-native-gesture-handler'


export default function ItemList({ navigation }) {


    const data = [{ name: 'Fresh Tomato-Kaduna', price: 4000, url: 'https://media.istockphoto.com/photos/shopping-bag-full-of-fresh-vegetables-and-fruits-picture-id1128687123?k=20&m=1128687123&s=612x612&w=0&h=qEa-vkegksLHETe-zuGsWNqhQQI7VwofTbwSpcaNvrU=', id: "1" }, { name: 'Ugwu Vegetable', price: 5000, url: 'https://media.istockphoto.com/photos/healthy-ketogenic-low-carb-food-for-balanced-diet-picture-id1134020377?k=20&m=1134020377&s=612x612&w=0&h=_zNLnBjp2ssFDXdUMBXlwAdQWk4GYG7FIyB5p-Wx7Lw=', id: "2" },
    { name: 'Red Potatoe irish', price: 6000, url: 'https://media.istockphoto.com/photos/shopping-bag-full-of-fresh-vegetables-and-fruits-picture-id1128687123?k=20&m=1128687123&s=612x612&w=0&h=qEa-vkegksLHETe-zuGsWNqhQQI7VwofTbwSpcaNvrU=', id: "3" }, { name: 'Naturally Rippen Oranges', price: 7000, url: 'https://media.istockphoto.com/photos/fried-pork-and-vegetables-on-white-background-picture-id1190330112?k=20&m=1190330112&s=612x612&w=0&h=_TrmthJupdqYmMU-NC-es85TEvaBJsynDS383hqiAvM=', id: "4" },
    { name: 'indian shawa chop', price: 8000, url: 'https://media.istockphoto.com/photos/healthy-ketogenic-low-carb-food-for-balanced-diet-picture-id1134020377?k=20&m=1134020377&s=612x612&w=0&h=_zNLnBjp2ssFDXdUMBXlwAdQWk4GYG7FIyB5p-Wx7Lw=', id: "5" }, { name: 'Fresh Titus Fish', price: 9000, url: 'https://media.istockphoto.com/photos/fried-pork-and-vegetables-on-white-background-picture-id1190330112?k=20&m=1190330112&s=612x612&w=0&h=_TrmthJupdqYmMU-NC-es85TEvaBJsynDS383hqiAvM=', id: "6" }]



    return (
        <View>

            <ScrollView style={{ padding: 16 }}>
                <View style={{}}>
                    {data.map(item => {
                        return (
                            <TouchableOpacity key={item.id}>
                                <View style={styles.productConatiner}>
                                    <Image
                                        source={{ uri: item.url }}
                                        resizeMode='cover'
                                        style={{ width: 100, height: 100, borderRadius: 15, marginLeft: 12 }}
                                    />
                                    <View style={{
                                        height: 100,
                                        padding: 10,
                                        width: '100%'
                                    }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5 }}>
                                            <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'stretch' }}>
                                                <Text style={{ fontWeight: 'bold', fontSize: 13, color: colors.black }}>{item.name}</Text>
                                                <Text style={{ fontSize: 13, fontWeight: 'bold', color: colors.purple, paddingBottom: 5 }}>
                                                    <MaterialCommunityIcons name='currency-ngn' size={15} />
                                                    {item.price.toFixed(2).toLocaleString("fr-FR")}
                                                </Text>
                                            </View>
                                            {/* <View style={{ justifyContent: 'space-between', borderColor: '#ccc', borderWidth: 1, padding: 1, borderRadius: 10 }}>
                                                <View style={styles.btnContainer}>
                                                    <Entypo name='plus' size={25} color='black' />
                                                </View>
                                                <Text>3.5</Text>
                                                <View style={styles.btnContainer}>
                                                    <Entypo name='minus' size={25} color='black' />
                                                </View>
                                            </View>*/}
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: '#f3f3f3',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#ccc',
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    productConatiner: {
        marginBottom: 30,
        backgroundColor: colors.grey,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingRight: '10%',
        paddingLeft: '10%'
    }
})

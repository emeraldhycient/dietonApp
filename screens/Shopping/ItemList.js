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


    const data = [{ name: 'Fresh Tomato-Kaduna', price: 4000, url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2019/04/mae-mu-tomatoes-819x1024.jpg.webp', id: "1" }, { name: 'Ugwu Vegetable', price: 5000, url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2021/01/green-hummus-ingredients-819x1024.jpg.webp', id: "2" },
    { name: 'Red Potatoe irish', price: 6000, url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2021/01/beets-at-the-farmers-market-768x1024.jpg.webp', id: "3" }, { name: 'Naturally Rippen Oranges', price: 7000, url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2021/01/tangerines-and-mangosteen-at-a-market-1024x768.jpg.webp', id: "4" },
    { name: 'indian shawa chop', price: 8000, url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2021/01/rambutan-fruit-close-up-1024x768.jpg.webp', id: "5" }, { name: 'Fresh Titus Fish', price: 9000, url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2021/01/smoked-fish-in-the-fish-market-768x1024.jpg.webp', id: "6" }]



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

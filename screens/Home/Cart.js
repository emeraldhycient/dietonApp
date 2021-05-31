import React, { useState } from 'react'
import { View, StyleSheet, Pressable, TouchableOpacity, Image } from 'react-native'
import { Divider, FAB, Searchbar, Text, Button } from 'react-native-paper';


import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'



import { useAtom } from 'jotai'
import { cartmodal } from '../../state'
import { ScrollView } from 'react-native-gesture-handler'


export default function Cart({ navigation }) {

    const [isVisible, setvisibity] = useAtom(cartmodal)

    const data = [{ name: 'Steak Beef', url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2020/05/costela-de-porco-assada-1-1024x683.jpg.webp', id: "1" }, { name: 'Creamy Pizza', url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2019/01/pizza-768x1024.jpg.webp', id: "2" },
    { name: 'Fresh Berry Juice', url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2020/04/three-layer-smoothie-from-banana-kiwi-and-strawberry-on-a-wooden-background-683x1024.jpg.webp', id: "3" }, { name: 'Scorched Egg', url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches-819x1024.jpg.webp', id: "4" },
    { name: 'Jollof Rice And Egg tomatoe sauce', url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2021/01/hot-shakshuka-819x1024.jpg.webp', id: "5" }, { name: 'Fresh Oven Bread', url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2021/04/muffin-cake-1024x683.jpg.webp', id: "6" }]


    return (
        <View style={styles.cartview}>
            <View style={styles.cancelIconContainer}>
                <Pressable onPress={() => setvisibity(!setvisibity)}>
                    <MaterialIcons name='cancel' size={40} color='red' />
                </Pressable>
            </View>
            <ScrollView style={{ marginTop: 100, padding: 13 }}>
                <View style={{}}>
                    {data.map(item => {
                        return (
                            <TouchableOpacity key={item.id}>
                                <View style={styles.productConatiner}>
                                    <Image
                                        source={{ uri: item.url }}
                                        resizeMode='cover'
                                        style={{ width: 70, height: 70, borderRadius: 100 }}
                                    />
                                    <View style={{
                                        height: 100,
                                        padding: 10,
                                        width: '100%'
                                    }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5 }}>
                                            <View style={{ justifyContent: 'space-between', }}>
                                                <Text style={{ fontWeight: 'bold', fontSize: 13, }}>{item.name}</Text>
                                                <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#388e3c', }}>#4000</Text>
                                            </View>
                                            <View style={{ justifyContent: 'space-between', borderColor: '#ccc', borderWidth: 1, padding: 1, borderRadius: 10 }}>
                                                <View style={styles.btnContainer}>
                                                    <Entypo name='plus' size={25} color='black' />
                                                </View>
                                                <Text>3.5</Text>
                                                <View style={styles.btnContainer}>
                                                    <Entypo name='minus' size={25} color='black' />
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                    <MaterialCommunityIcons name='delete-forever' size={30} />
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
    cancelIconContainer: {
        backgroundColor: '#f3f3f3',
        width: 45,
        height: 45,
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
        position: 'absolute',
        margin: 16,
        right: 0,
        top: 0,
    },
    cartview: {
        width: '90%',
        marginTop: 5,
        marginLeft: '10%',
        backgroundColor: '#fff',
        height: '94%',
        borderColor: '#ccc',
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10
    },
    productConatiner: {
        marginBottom: 30,
        backgroundColor: '#f3f3f3',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
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

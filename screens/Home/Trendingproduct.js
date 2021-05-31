import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Divider, Text, Button } from 'react-native-paper';

import { useAtom } from 'jotai'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import { trending } from '../../state'

const Trendingproduct = () => {

    const [trend, settrending] = useAtom(trending)
    useEffect(() => {
        const data = [{ name: 'Steak Beef', url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2020/05/costela-de-porco-assada-1-1024x683.jpg.webp', id: "1" }, { name: 'Creamy Pizza', url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2019/01/pizza-768x1024.jpg.webp', id: "2" },
        { name: 'Fresh Berry Juice', url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2020/04/three-layer-smoothie-from-banana-kiwi-and-strawberry-on-a-wooden-background-683x1024.jpg.webp', id: "3" }, { name: 'Scorched Egg', url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches-819x1024.jpg.webp', id: "4" },
        { name: 'Jollof Rice And Egg tomatoe sauce', url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2021/01/hot-shakshuka-819x1024.jpg.webp', id: "5" }, { name: 'Fresh Oven Bread', url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2021/04/muffin-cake-1024x683.jpg.webp', id: "6" }]

        settrending(data)

    }, [trend])

    return (
        <ScrollView horizontal style={{ paddingLeft: 10, marginBottom: 5 }}>
            {trend.map(item => {
                return (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('details', { itemid: item.id })}
                        key={item.id}
                    >
                        <View style={styles.productConatiner}>
                            <Image
                                source={{ uri: item.url }}
                                style={{ width: '99%', height: 150, borderRadius: 10 }}
                            />
                            <View style={{
                                height: 100,
                                padding: 10,
                                width: '100%'
                            }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 13, paddingBottom: 5 }}>{item.name}</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5 }}>
                                    <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#388e3c', paddingBottom: 5 }}>#4000</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <AntDesign name='star' size={10} color='tomato' />
                                        <Text>3.5</Text>
                                    </View>
                                </View>
                                <Divider />
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 2, paddingBottom: 1 }}>
                                    <AntDesign name='clockcircle' size={10} color='tomato' />
                                    <Text style={{ marginLeft: 3 }}>Delivery Time : 30 mins</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            })}
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Button icon="eye" mode="text" onPress={() => (alert('viewing all now'))}>
                    View all !
                        </Button>
            </View>
        </ScrollView>
    )
}

export default Trendingproduct


const styles = StyleSheet.create({

    productConatiner: {
        marginBottom: 30,
        backgroundColor: '#f3f3f3',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
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
    },

});

import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, } from 'react-native'
import { Divider, Text, } from 'react-native-paper';

import { useAtom } from 'jotai'

import AntDesign from 'react-native-vector-icons/AntDesign'
import { discovery } from '../../state'

const Discoverproduct = () => {

    const [discover, setdiscovery] = useAtom(discovery)
    useEffect(() => {
        const data = [{ name: 'Steak Beef', url: 'https://unsplash.com/photos/ZuIDLSz3XLg', id: "1" }, { name: 'Creamy Pizza', url: 'https://media.istockphoto.com/photos/delicious-meal-on-a-black-plate-top-view-copy-space-picture-id1165399909?k=20&m=1165399909&s=612x612&w=0&h=5g5C4BDoxaejlIr4r_8cV6jDYXzN8n1-JkIW3LgPUuA=', id: "2" },
        { name: 'Fresh Berry Juice', url: 'https://media.istockphoto.com/photos/arabic-and-middle-eastern-dinner-table-hummus-tabbouleh-salad-salad-picture-id1175505781?k=20&m=1175505781&s=612x612&w=0&h=STomby2lCtcvpl_hxK6RhknQQWrkvpkHcoDLD4zttFk=', id: "3" }, { name: 'Scorched Egg', url: 'https://media.istockphoto.com/photos/healthy-fresh-rainbow-colored-fruits-and-vegetables-background-picture-id1208790371?k=20&m=1208790371&s=612x612&w=0&h=6BngNrl8TColGkvSGJUKFKIM5bv31Nc8MvQhmmC2LlM=', id: "4" },
        { name: 'Jollof Rice And Egg tomatoe sauce', url: 'https://media.istockphoto.com/photos/shopping-bag-full-of-fresh-vegetables-and-fruits-picture-id1128687123?k=20&m=1128687123&s=612x612&w=0&h=qEa-vkegksLHETe-zuGsWNqhQQI7VwofTbwSpcaNvrU=', id: "5" }, { name: 'Fresh Oven Bread', url: 'https://media.istockphoto.com/photos/restaurant-healthy-food-delivery-in-take-away-boxes-picture-id1165063882?k=20&m=1165063882&s=612x612&w=0&h=ZECAZwa2RRRBHWymJTC06emyEzyQ_gu6eIvucJ4-nB4=', id: "6" }]

        setdiscovery(data)

    }, [discover])

    return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
            {discover.map(item => {
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
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#388e3c', paddingBottom: 5 }}>#4000</Text>
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
        </View>
    )
}

export default Discoverproduct


const styles = StyleSheet.create({

    productConatiner: {
        marginBottom: 30,
        backgroundColor: '#f3f3f3',
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
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

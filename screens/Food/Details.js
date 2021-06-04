import React, { useState } from 'react'
import { Image, View, StyleSheet, StatusBar } from 'react-native'
import { Divider, FAB, Searchbar, Text, Button } from 'react-native-paper';
import { useAtom } from 'jotai'

import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';

import Profile_settingsIcon from "./Profile-settingsIcon"
import colors from '../../assets/colors'


const Details = ({ route, navigation }) => {

    const id = route.params.itemid

    const data = [{ name: 'Steak Beef', price: 4000, url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2020/05/costela-de-porco-assada-1-1024x683.jpg.webp', id: "1" }, { name: 'Creamy Pizza', price: 5000, url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2019/01/pizza-768x1024.jpg.webp', id: "2" },
    { name: 'Fresh Berry Juice', price: 6000, url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2020/04/three-layer-smoothie-from-banana-kiwi-and-strawberry-on-a-wooden-background-683x1024.jpg.webp', id: "3" }, { name: 'Scorched Egg', price: 7000, url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches-819x1024.jpg.webp', id: "4" },
    { name: 'Jollof Rice And Egg tomatoe sauce', price: 8000, url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2021/01/hot-shakshuka-819x1024.jpg.webp', id: "5" }, { name: 'Fresh Oven Bread', price: 9000, url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2021/04/muffin-cake-1024x683.jpg.webp', id: "6" }]

    const Filtered = data.filter(item => (
        item.id === id
    ))

    const DataView = () =>
        Filtered.map(item => (
            <View key={id}>
                <Ionicons name='ios-arrow-back-circle-sharp' size={45} style={styles.backIcon} onPress={() => navigation.goBack()} />
                <Image source={{ uri: `${item.url}` }} style={{ width: '100%', height: 300 }} resizeMode='cover' />
            </View>
        ))

    return (
        <View>
            <StatusBar StatusBarStyle="light-content" />
            <DataView />
            <Text>
                {id}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight,
        justifyContent: 'center',
    },
    backIcon: {
        position: 'absolute',
        margin: 16,
        top: 0,
        left: 0,
        zIndex: 2,
        color: colors.white,
    }

})

export default Details

import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, SafeAreaView, Image, Alert, TouchableOpacity, Modal, Pressable } from 'react-native'
import { Divider, FAB, Searchbar, Text, Button } from 'react-native-paper';

import { useAtom } from 'jotai'

import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';

import Profile_settingsIcon from "./Profile-settingsIcon"
import colors from '../../assets/colors'





export default function Home({ navigation }) {

    const [searchQuery, setSearchQuery] = useState('')



    const onChangeSearch = query => setSearchQuery(query);

    const data = [{ name: 'Steak Beef', price: 4000, url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2020/05/costela-de-porco-assada-1-1024x683.jpg.webp', id: "1" }, { name: 'Creamy Pizza', price: 5000, url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2019/01/pizza-768x1024.jpg.webp', id: "2" },
    { name: 'Fresh Berry Juice', price: 6000, url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2020/04/three-layer-smoothie-from-banana-kiwi-and-strawberry-on-a-wooden-background-683x1024.jpg.webp', id: "3" }, { name: 'Scorched Egg', price: 7000, url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches-819x1024.jpg.webp', id: "4" },
    { name: 'Jollof Rice And Egg tomatoe sauce', price: 8000, url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2021/01/hot-shakshuka-819x1024.jpg.webp', id: "5" }, { name: 'Fresh Oven Bread', price: 9000, url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2021/04/muffin-cake-1024x683.jpg.webp', id: "6" }]


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar StatusBarStyle="light-content" />
            <Profile_settingsIcon />
            <ScrollView style={{ marginTop: 70 }}>
                <View style={{ alignItems: 'center', marginBottom: 30 }}>
                    <Searchbar
                        placeholder="Search Stores and groceries"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                        style={{ width: '90%', }}
                        onIconPress={() => navigation.push('searchScreen', { screen: 'search', params: { item: searchQuery } })}
                    />
                </View>
                <Text style={styles.sectionHeader}>Trending</Text>
                <ScrollView horizontal style={{ paddingLeft: 10, marginBottom: 5 }}>
                    {data.map(item => {
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
                                        <Text style={{ fontWeight: 'bold', fontSize: 13, paddingBottom: 5, color: colors.black }}>{item.name}</Text>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5 }}>
                                            <Text style={{ fontSize: 13, fontWeight: 'bold', color: colors.purple, paddingBottom: 5 }}>
                                                <MaterialCommunityIcons name='currency-ngn' size={15} />
                                                {item.price.toFixed(2).toLocaleString("fr-FR")}
                                            </Text>
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                                <AntDesign name='star' size={10} color={colors.red} />
                                                <Text style={{ color: colors.purple }}>3.5</Text>
                                            </View>
                                        </View>
                                        <Divider />
                                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 2, paddingBottom: 1 }}>
                                            <AntDesign name='clockcircle' size={10} color='tomato' />
                                            <Text style={{ marginLeft: 3, color: colors.black }}>Delivery Time : 30 mins</Text>
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
                <Text style={styles.sectionHeader}>Discover</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                    {data.map(item => {
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
                                        <Text style={{ fontWeight: 'bold', fontSize: 13, paddingBottom: 5, color: colors.black }}>{item.name}</Text>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5 }}>
                                            <Text style={{ fontSize: 13, fontWeight: 'bold', color: colors.purple, paddingBottom: 5 }}>
                                                <MaterialCommunityIcons name='currency-ngn' size={15} />
                                                {item.price.toFixed(2).toLocaleString("fr-FR")}
                                            </Text>
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                                <AntDesign name='star' size={10} color={colors.red} />
                                                <Text style={{ color: colors.purple }}>3.5</Text>
                                            </View>
                                        </View>
                                        <Divider />
                                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 2, paddingBottom: 1 }}>
                                            <AntDesign name='clockcircle' size={10} color='tomato' />
                                            <Text style={{ marginLeft: 3, color: colors.black }}>Delivery Time : 30 mins</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <View style={{ marginBottom: 10, marginLeft: '8%' }}>
                    <Button icon="eye" mode="text" onPress={() => (alert('viewing all now'))}>
                        View all !
                        </Button>
                </View>
                <Text style={styles.sectionHeader}>Popular</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                    {data.map(item => {
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
                                        <Text style={{ fontWeight: 'bold', fontSize: 13, paddingBottom: 5, color: colors.black }}>{item.name}</Text>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 5 }}>
                                            <Text style={{ fontSize: 13, fontWeight: 'bold', color: colors.purple, paddingBottom: 5 }}>
                                                <MaterialCommunityIcons name='currency-ngn' size={15} />
                                                {item.price.toFixed(2).toLocaleString("fr-FR")}
                                            </Text>
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                                <AntDesign name='star' size={10} color={colors.red} />
                                                <Text style={{ color: colors.purple }}>3.5</Text>
                                            </View>
                                        </View>
                                        <Divider />
                                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 2, paddingBottom: 1 }}>
                                            <AntDesign name='clockcircle' size={10} color='tomato' />
                                            <Text style={{ marginLeft: 3, color: colors.black }}>Delivery Time : 30 mins</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </ScrollView>
            <FAB
                style={styles.fab}
                icon="plus"
                color={colors.purple}
                onPress={() => navigation.push('createpost')}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight,
        justifyContent: 'center',
    },

    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    productConatiner: {
        marginBottom: 30,
        backgroundColor: colors.grey,
        justifyContent: 'center',
        alignItems: 'center',
        width: 220,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        shadowColor: colors.white,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    sectionHeader: {
        marginBottom: 10,
        marginLeft: '5%',
        fontWeight: 'bold',
        fontSize: 25,
        color: colors.black
    },
});

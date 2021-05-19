import React, { useState } from 'react'
import { View, StyleSheet, StatusBar, SafeAreaView, Image, Alert, TouchableOpacity } from 'react-native'
import { Divider, FAB, Searchbar, Text } from 'react-native-paper';
import colors from '../../assets/colors'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';




export default function Home({ navigation }) {

    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);

    const data = [{ name: 'Steak Beef', url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2020/05/costela-de-porco-assada-1-1024x683.jpg.webp', id: "1" }, { name: 'Creamy Pizza', url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2019/01/pizza-768x1024.jpg.webp', id: "2" },
    { name: 'Fresh Berry Juice', url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2020/04/three-layer-smoothie-from-banana-kiwi-and-strawberry-on-a-wooden-background-683x1024.jpg.webp', id: "3" }, { name: 'Scorched Egg', url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches-819x1024.jpg.webp', id: "4" },
    { name: 'Jollof Rice And Egg tomatoe sauce', url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2021/01/hot-shakshuka-819x1024.jpg.webp', id: "5" }, { name: 'Fresh Oven Bread', url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2021/04/muffin-cake-1024x683.jpg.webp', id: "6" }]


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar StatusBarStyle="light-content" />
            <View style={{ flexDirection: 'row', position: 'absolute', top: 0, right: 0, margin: 20, justifyContent: 'space-evenly' }}>
                <View style={styles.cartContainer}>
                    <Ionicons name='cart' size={35} />
                </View>
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
            <ScrollView style={{ marginTop: 70 }}>
                <View style={{ alignItems: 'center', marginBottom: 30 }}>
                    <Searchbar
                        placeholder="Search Stores"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                        style={{ width: '90%', }}
                        onIconPress={() => alert(searchQuery)}
                    />
                </View>
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
                                        height: 100
                                    }}>
                                        <Text style={{ color: colors.primarytextcolor }}>{item.name}</Text>
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
                color='#f75f08ef'
                onPress={() => navigation.push('createpost')}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight,
        justifyContent: 'center',
    },
    cartContainer: {
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
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
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
    profilePicture: {
        borderRadius: 100,
        borderColor: '#ccc',
        borderWidth: 2,
        backgroundColor: '#f3f3f3',
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#fff",
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
        fontSize: 25
    },
});

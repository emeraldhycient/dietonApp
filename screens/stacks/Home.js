import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button, StatusBar, SafeAreaView, Image, FlatList, Alert, TouchableOpacity } from 'react-native'
import { FAB, Searchbar } from 'react-native-paper';
import colors from '../../assets/colors'

import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';




export default function Home({ navigation }) {

    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);

    const data = [{ name: 'Steak Beef', url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2020/05/costela-de-porco-assada-1-1024x683.jpg.webp', id: "1" }, { name: 'Creamy Pizza', url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2019/01/pizza-768x1024.jpg.webp', id: "2" },
    { name: 'Fresh Berry Juice', url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2020/04/three-layer-smoothie-from-banana-kiwi-and-strawberry-on-a-wooden-background-683x1024.jpg.webp', id: "3" }, { name: 'Scorched Egg', url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches-819x1024.jpg.webp', id: "4" },
    { name: 'Jollof Rice And Egg', url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2021/01/hot-shakshuka-819x1024.jpg.webp', id: "5" }, { name: 'Fresh Oven Bread', url: 'https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2021/04/muffin-cake-1024x683.jpg.webp', id: "6" }]


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar StatusBarStyle="light-content" />
            <View style={{ flex: 1, position: 'absolute', flexDirection: 'row', justifyContent: 'space-between', }}>
                <View>
                    <Ionicons name='settings' size={40} />
                </View>
                <View>
                    <Image
                        source={{ uri: 'https://media.istockphoto.com/photos/varied-food-carbohydrates-protein-vegetables-fruits-dairy-legumes-on-picture-id1218254547?b=1&k=6&m=1218254547&s=170667a&w=0&h=EXwwoHJ3wI0H2jDfoFhqOiIo2c4cL0y7R8Gop3iIO30=' }}
                        style={{ width: 40, height: 40, borderRadius: 100 }}
                    />
                </View>
            </View>
            <Searchbar
                placeholder="Search Stores"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={{ width: '90%' }}
                onIconPress={() => alert(searchQuery)}
            />
            {<View style={styles.cartContainer}>
                <Ionicons name='cart' size={27} />
            </View>}
            <ScrollView style={{ marginTop: 50 }}>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
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
        //justifyContent: 'center',
    },
    cartContainer: {
        backgroundColor: '#f3f3f3',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
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
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    productConatiner: {
        marginBottom: 30,
        backgroundColor: '#f3f3f3',
        flex: 1,

        alignItems: 'center',
        width: 220,
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

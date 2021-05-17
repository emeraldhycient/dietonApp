import React from 'react'
import { View, Text, TextInput, StyleSheet, Button, StatusBar, SafeAreaView, Image, FlatList, Alert, TouchableOpacity } from 'react-native'
import { FAB } from 'react-native-paper';
import colors from '../../assets/colors'




export default function Home({ navigation }) {

    const data = [{ name: 'Patrick star', url: 'https://picsum.photos/id/10/200/300', id: "1" }, { name: 'Gallileo', url: 'https://picsum.photos/id/1002/200/300', id: "2" },
    { name: 'Einsten', url: 'https://picsum.photos/id/1004/200/300', id: "3" }, { name: 'Peterson', url: 'https://picsum.photos/id/1011/200/300', id: "4" },
    { name: 'Schwarzenneger', url: 'https://picsum.photos/id/1015/200/300', id: "5" }, { name: 'Dostoyevsky', url: 'https://picsum.photos/id/1016/200/300', id: "6" }]

    const renderitem = ({ item }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate('details', { itemid: item.id })}
        >
            <View
                style={{
                    marginBottom: 30,
                    backgroundColor: colors.secondarydark,
                    flex: 1,
                    alignItems: 'center',
                    width: 450,
                    borderRadius: 15,
                    shadowColor: "#fff",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                }}
            >
                <Image
                    source={{ uri: item.url }}
                    style={{ width: '100%', height: 200, borderRadius: 10 }}
                />
                <View style={{
                    height: 100
                }}>
                    <Text style={{ color: colors.primarytextcolor }}>{item.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar StatusBarStyle="light-content" />
            <FlatList data={data} renderItem={renderitem} keyExtractor={(item, index) => item.id.toString()} />
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
        backgroundColor: colors.primarydark,
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight,
        //justifyContent: 'center',
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
});

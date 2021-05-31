import React, { useState } from 'react'
import { View, Text, StyleSheet, StatusBar, } from 'react-native'
import { TextInput, Card, Button, FAB, Divider } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker';

import colors from '../../assets/colors'

const Createpost = () => {
    const [productname, setproductname] = useState('')
    const [category, setcategory] = useState('')
    const [courier, setcourier] = useState('')
    const [ingredient, setingredient] = useState('')
    const [price, setprice] = useState('')
    const [description, setdescription] = useState('')
    const [whatyousell, setwhatyousell] = useState('')
    return (
        <View style={styles.container}>
            <TextInput
                label='Product name'
                mode='outlined'
                placeholder="Enter products name"
                value={productname}
                onChangeText={text => setproductname(text)}
            />
            <Divider />
            <Card>
                <Picker
                    selectedValue={category}
                    style={{ height: 50, width: 100 }}
                    mode='dropdown'
                    onValueChange={(itemValue, itemIndex) =>
                        setcategory(itemValue)
                    }
                    style={{ width: '100%', height: 50, color: '#ccc' }}
                >
                    <Picker.Item label="Select Product Category" value="" />
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </Card>
            <Divider />
            <TextInput
                mode='outlined'
                placeholder="List all ingredients"
                label='Ingredients'
                multiline={true}
                numberOfLines={7}
                value={ingredient}
                onChangeText={text => setingredient(text)}
            />
            <Divider />
            <Card>
                <Picker
                    selectedValue={courier}
                    style={{ height: 50, width: 100 }}
                    mode='dropdown'
                    onValueChange={(itemValue, itemIndex) =>
                        setcourier(itemValue)
                    }
                    style={{ width: '100%', height: 50, color: '#ccc' }}
                >
                    <Picker.Item label="Select Courier" value="" />
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </Card>
            <Divider />
            <TextInput
                mode='outlined'
                placeholder="Enter price"
                label='Price'
                numeric
                keyboardType={'numeric'}
                value={price}
                onChangeText={text => setprice(text)}
            />
            <Divider />
            <TextInput
                mode='outlined'
                placeholder="Talk  about this Great Food"
                label='Description'
                multiline={true}
                numberOfLines={7}
                value={description}
                onChangeText={text => setdescription(text)}
            />
            <Divider />
            <Card>
                <Picker
                    selectedValue={whatyousell}
                    style={{ height: 50, width: 100 }}
                    mode='dropdown'
                    onValueChange={(itemValue, itemIndex) =>
                        setwhatyousell(itemValue)
                    }
                    style={{ width: '100%', height: 50, color: '#ccc' }}
                >
                    <Picker.Item label="Select What yousell" value="" />
                    <Picker.Item label="Food" value="Food" />
                    <Picker.Item label="Ingredients" value="Ingredients" />
                    <Picker.Item label="Food & Ingredients" value="both" />
                </Picker>
            </Card>
            <FAB
                style={styles.fab1}
                icon="camera"
                onPress={() => alert('upload image')}
            />
            <FAB
                style={styles.fab2}
                icon="video"
                onPress={() => alert('upload video')}
            />
            <FAB
                style={styles.fab3}
                icon="send"
                label='Upload Post'
                onPress={() => alert('submitted')}
            />
        </View>
    )
}

export default Createpost

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        paddingLeft: 7,
        paddingRight: 7
    },
    fab1: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 160,
    },
    fab2: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 80,
    },
    fab3: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 10,
    },
})
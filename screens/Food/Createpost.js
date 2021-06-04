import React, { useState } from 'react'
import { View, Text, StyleSheet, StatusBar, } from 'react-native'
import { TextInput, Card, Button, FAB, Divider } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker';
import * as DocumentPicker from 'expo-document-picker';


import colors from '../../assets/colors'

const Createpost = () => {
    const [productname, setproductname] = useState('')
    const [courier, setcourier] = useState('')
    const [ingredient, setingredient] = useState('')
    const [price, setprice] = useState('')
    const [description, setdescription] = useState('')
    const [Video, setVideo] = useState('')
    const [Image, setImage] = useState('')

    const selectVideo = async () => {
        let result = await DocumentPicker.getDocumentAsync({ type: 'video/*' });
        if (!result.cancelled) {
            setVideo(result)
        }
    }

    const selectImage = async () => {
        let result = await DocumentPicker.getDocumentAsync({ type: 'image/*' });
        if (!result.cancelled) {
            setImage(result)
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                mode='outlined'
                placeholder="Enter products name"
                value={productname}
                onChangeText={text => setproductname(text)}
            />
            <Divider />
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Button icon="camera" onPress={() => selectImage()}>
                    Food Image
                </Button>
                <Button icon="video" onPress={() => selectVideo()}>
                    Food Video
                </Button>
            </View>
            <Divider />
            <TextInput
                mode='outlined'
                placeholder="List all ingredients"
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
                numeric
                keyboardType={'numeric'}
                value={price}
                onChangeText={text => setprice(text)}
            />
            <Divider />
            <TextInput
                mode='outlined'
                placeholder="Talk  about this Great Food"
                multiline={true}
                numberOfLines={7}
                value={description}
                onChangeText={text => setdescription(text)}
            />
            <Divider />
            <Divider />
            <Button icon="camera" mode="contained">
                upload Food
            </Button>
        </View>
    )
}

export default Createpost

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.grey,
        paddingLeft: 7,
        paddingRight: 7
    },
})
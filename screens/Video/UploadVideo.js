import React, { useState } from 'react'
import { View, Text, StyleSheet, StatusBar, } from 'react-native'
import { TextInput, Card, Button, FAB, Divider } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker';
import * as DocumentPicker from 'expo-document-picker';


import colors from '../../assets/colors'

const UploadVideo = () => {
    const [Videoname, setVideoname] = useState('')
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
                value={Videoname}
                onChangeText={text => setVideoname(text)}
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

            <Divider />
            <Divider />
            <TextInput
                mode='outlined'
                placeholder="Video description"
                multiline={true}
                numberOfLines={7}
                value={description}
                onChangeText={text => setdescription(text)}
            />
            <Divider />
            <Divider />
            <Button icon="upload" mode="contained" style={{ marginTop: 10 }}>
                upload Food
            </Button>
        </View>
    )
}

export default UploadVideo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: 50,
        paddingLeft: 10,
        paddingRight: 10
    },
})
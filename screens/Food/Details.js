import React from 'react'
import { View, Text } from 'react-native'
import { Video } from 'expo-av';


const Details = ({ route, navigation }) => {
    return (
        <View>
            <Text></Text>
            <Video
                source={{ uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1' }}
                style={{ width: '100%', height: 300, borderRadius: 10 }}
                useNativeControls
                resizeMode='contain'
            />
            <Text> 
                {route.params.itemid}
            </Text>
        </View>
    )
}

export default Details

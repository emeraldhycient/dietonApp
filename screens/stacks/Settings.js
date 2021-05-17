import React from 'react'
import { View, Text, Button, StatusBar } from 'react-native'

export default function ({ navigation, route }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <StatusBar StatusBarStyle="light-content" />
            <Text>profile Screen</Text>
            {

            }
            <Text></Text>
            <Button title="go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

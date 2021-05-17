import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity } from 'react-native';

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import Home from "./screens/stacks/Home"
import Search from "./screens/stacks/Search"
import Settings from "./screens/stacks/Settings"
import Shopping from "./screens/stacks/Shopping"
import Details from './screens/stacks/Details'
import Createpost from './screens/stacks/Createpost'

import colors from './assets/colors'
import { color } from 'react-native-reanimated';

const Stack = createStackNavigator();
const Tab = createDrawerNavigator();
const Bottomtab = createMaterialBottomTabNavigator()

const Homestack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.headercolor, },
        headerTintColor: colors.primarytextcolor,
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}
    >
      <Stack.Screen name="home" component={Home}
        options={{
          title: 'Dieton',
          headerRight: () => (
            <TouchableOpacity>
              <Image
                style={{ width: 40, height: 40, borderRadius: 100 }}
                resizeMode="cover"
                source={{ uri: 'https://picsum.photos/200/300' }} />
            </TouchableOpacity>
          )
        }} />
      <Stack.Screen name='details' component={Details} />
      <Stack.Screen name='createpost' component={Createpost} />
    </Stack.Navigator>
  )
}

const Searchstack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="search" component={Search} />
    </Stack.Navigator>
  )
}

const Shoppingstack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.headercolor, },
        headerTintColor: colors.primarytextcolor,
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}
    >
      <Stack.Screen name="Shopping" component={Shopping} />
    </Stack.Navigator>
  )
}

const SettingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.headercolor, },
        headerTintColor: colors.primarytextcolor,
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}
    >
      <Stack.Screen name="settings" component={Settings} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer
    >
      <Bottomtab.Navigator
        activeColor="#6b45bc"
        inactiveColor="#388e3c"
        labeled={false}
        shifting={true}
      >
        <Bottomtab.Screen name="Home" component={Homestack}
          options={{
            tabBarLabel: "Home",
            tabBarColor: colors.headercolor,
            tabBarIcon: ({ color }) => <AntDesign name="home" color={color} size={28} />
          }}
        />
        <Bottomtab.Screen name="search" component={Searchstack} options={{
          tabBarLabel: "search",
          tabBarColor: colors.headercolor,
          tabBarIcon: ({ color }) => <AntDesign name="search1" color={color} size={28} />
        }} />
        <Bottomtab.Screen name="shopping" component={Shoppingstack} options={{
          tabBarLabel: "shopping",
          tabBarColor: colors.headercolor,
          tabBarIcon: ({ color }) => <FontAwesome5 name="shopping-basket" color={color} size={25} />
        }} />
        <Bottomtab.Screen name="settings" component={SettingStack} options={{
          tabBarLabel: "profile",
          tabBarColor: colors.headercolor,
          tabBarIcon: ({ color }) => <Feather name="settings" color={color} size={25} />
        }} />
      </Bottomtab.Navigator>
    </NavigationContainer >
  );
}




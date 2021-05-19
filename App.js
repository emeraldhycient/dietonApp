import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity } from 'react-native';

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'

import Home from "./screens/stacks/Home"
import Search from "./screens/stacks/Search"
import Settings from "./screens/stacks/Settings"
import Shopping from "./screens/stacks/Shopping"
import Details from './screens/stacks/Details'
import Wallet from './screens/stacks/Wallet'
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
        headerShown: false
      }}
    >
      <Stack.Screen name="home" component={Home} />
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
        headerShown: false
      }}
    >
      <Stack.Screen name="Shopping" component={Shopping} />
    </Stack.Navigator>
  )
}

const WalletStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="wallets" component={Wallet} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer
    >
      <Bottomtab.Navigator
        activeColor="#f75f08ef"
        inactiveColor="#388e3c"
        labeled={false}
        shifting={true}
      >
        <Bottomtab.Screen name="Home" component={Homestack}
          options={{
            tabBarLabel: "Home",
            tabBarColor: colors.headercolor,
            tabBarIcon: ({ color }) => <Entypo name="home" color={color} size={28} />
          }}
        />
        <Bottomtab.Screen name="shopping" component={Shoppingstack} options={{
          tabBarLabel: "shopping",
          tabBarColor: colors.headercolor,
          tabBarIcon: ({ color }) => <Entypo name="shopping-bag" color={color} size={25} />
        }} />
        <Bottomtab.Screen name="wallet" component={WalletStack} options={{
          tabBarLabel: "profile",
          tabBarColor: colors.headercolor,
          tabBarIcon: ({ color }) => <FontAwesome5 name="money-check-alt" color={color} size={20} />
        }} />
      </Bottomtab.Navigator>
    </NavigationContainer >
  );
}




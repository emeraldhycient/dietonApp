import React from 'react';

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { Provider } from 'jotai'

import Home from './screens/Food/Home'
import Details from './screens/Food/Details'
import Createpost from './screens/Food/Createpost'
import Postingredient from './screens/Shopping/Postingredient'
import Search from "./screens/Food/Search"
import Shopping from "./screens/Shopping/Shopping"
import Wallet from "./screens/Wallet/Wallet"
import ProfilePage from './screens/Wallet/ProfilePage'

import colors from './assets/colors'


const Stack = createStackNavigator();
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
      <Stack.Screen name='searchScreen' component={Searchstack} />
    </Stack.Navigator>
  )
}

const Searchstack = () => {
  return (
    <Stack.Navigator>
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
      <Stack.Screen name="Upload groceries" component={Postingredient} />
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
      <Stack.Screen name='ProfilePage' component={ProfilePage} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <Provider>
      <NavigationContainer
      >
        <Bottomtab.Navigator
          initialRouteName='shoppings'
          activeColor={colors.lightblack}
          inactiveColor={colors.purple}
          labeled={false}
          shifting={true}
        >
          <Bottomtab.Screen name="Home" component={Homestack}
            options={{
              tabBarLabel: "Home",
              tabBarColor: colors.grey,
              tabBarIcon: ({ color }) => <Ionicons name="fast-food" color={color} size={28} />
            }}
          />
          <Bottomtab.Screen name="shoppings" component={Shoppingstack} options={{
            tabBarLabel: "shopping",
            tabBarColor: colors.grey,
            tabBarIcon: ({ color }) => <Entypo name="shopping-bag" color={color} size={25} />
          }} />
          <Bottomtab.Screen name="wallet" component={WalletStack} options={{
            tabBarLabel: "Wallet",
            tabBarColor: colors.grey,
            tabBarIcon: ({ color }) => <Entypo name="wallet" color={color} size={28} />
          }} />
        </Bottomtab.Navigator>
      </NavigationContainer >
    </Provider>
  );
}




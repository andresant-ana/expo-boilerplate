import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { View, Text, StyleSheet } from "react-native"

import Login from "../screens/login"
import Welcome from "../screens/welcome"
import Register from "../screens/register"

export type RootStackParamList = {
  Login: undefined
  Welcome: { userData: { email: string; password: string } }
  Register: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})

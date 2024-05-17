import React from "react"
import { StatusBar } from "expo-status-bar"
import { View, ViewStyle } from "react-native"
import ListScreen from "./app/screens/ListScreen"

export default function App() {
  return (
    <View style={$container}>
      <StatusBar style="auto" />
      <ListScreen />
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
}

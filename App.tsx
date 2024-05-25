import React from "react"
import { StatusBar } from "expo-status-bar"
import { View, ViewStyle } from "react-native"
import ListScreen from "./app/screens/ListScreen"
import RootNavigator from "./app/Navigator/RootNavigator";

export default function App() {
  return (
    <View style={$container}>
      <StatusBar style="auto" />
     <RootNavigator />
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
}

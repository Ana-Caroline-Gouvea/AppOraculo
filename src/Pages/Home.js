import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import HeaderBusca from '../Components/HeaderBusca'

export default function Home() {


  return (
    <View style={css.container}>
      <HeaderBusca />
    </View>
  )
}
const css = StyleSheet.create({
  container: {
    backgroundColor: "#191919",
    flexGrow: 1,
    color: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white"
  },
  stories: {
    width: "100%",
    height: 100
  }
})
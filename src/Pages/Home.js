import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import HeaderBusca from '../Components/HeaderBusca';


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
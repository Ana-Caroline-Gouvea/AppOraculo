import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { StyleSheet } from 'react-native'

export default function HeaderBusca({...props}) {
  return (
    <TextInput 
        keyboardType="default"
        style={css.Input}
    />
  )
}
const css = StyleSheet.create({
    Input:{
        backgroundColor: "#E8E8E8",
        width: 200,
        display: "flex",
        alignSelf: "flex-end",
        height: 35,
        padding: 7,
        borderRadius: 10,
        marginLeft: 120
    }
})
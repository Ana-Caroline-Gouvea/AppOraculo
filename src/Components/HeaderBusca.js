import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function HeaderBusca({...props}) {
  return (
    <View style={css.flex}>
      <MaterialCommunityIcons name="magnify" style={css.Icon} />
    </View>
  )
}

const css = StyleSheet.create({
    Icon:{
      color: "black",
      fontSize: 30,
      marginLeft: 290,
    },
    flex:{
      display: "flex",
      flexDirection: "row"
    }
})
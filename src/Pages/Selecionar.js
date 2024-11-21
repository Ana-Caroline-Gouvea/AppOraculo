import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import SelecionarComp from '../Components/SelecionarComp'

export default function Selecionar() {
  return (
    <ScrollView>
          <View style={css.boxtitle}>
                <Text style={css.title}>Você pode gostar de... </Text>
        </View>

    </ScrollView>
  )
}

const css = StyleSheet.create({
    title: {
        color: "#7C25AE",
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 50,
    },
    boxtitle: {
        width: '100%',
        height: 120,
        alignItems: "center",
        backgroundColor: 'red'
    },
})
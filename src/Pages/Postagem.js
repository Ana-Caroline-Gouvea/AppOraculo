import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Postagem() {
  return (
    <View style={css.main}>
        <View style={css.boxtitulo}>
            <Text style={css.titulo}>Postagens</Text>
        </View>
    </View>
  )
}

const css = StyleSheet.create({
    main:{
        width: "100%"
    },
    boxtitulo:{
        width:"100%",
        textAlign: "center",
        marginTop: 50,
    },
    titulo:{
        alignSelf: "center",
        fontSize: 30,
        fontWeight: "bold",
        color: "#7C25AE"
    }
    
})


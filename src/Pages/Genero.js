import React, { Children } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import ButtomGenero from '../Components/ButtomGenero'

export default function Genero(props)
{
    return(
        <View style={css.container}>
            <Text style={css.titulo}>Gêneros</Text>
            <ButtomGenero texto="TERROR"></ButtomGenero>
            <ButtomGenero texto="ROMANCE"></ButtomGenero>
            <ButtomGenero texto="FICÇÃO CIENTÍFICA"></ButtomGenero>
            <ButtomGenero texto="DISTOPIA"></ButtomGenero>
            <ButtomGenero texto="SUSPENSE"></ButtomGenero>
            <ButtomGenero texto="FANTASIA"></ButtomGenero>
            <ButtomGenero texto="MISTÉRIO"></ButtomGenero>
            <ButtomGenero texto="POESIA"></ButtomGenero>
            <ButtomGenero texto="AVENTURA"></ButtomGenero>
            <ButtomGenero texto="DRAMA"></ButtomGenero>
            <ButtomGenero texto="HISTÓRICO"></ButtomGenero>
        </View>
    )
}

const css = StyleSheet.create({
    container:{
        width: "100%",
        textAlign: "center",
    },
    titulo:{
        alignSelf: "center",
        marginTop: 50,
        fontSize: 30,
        fontWeight: "bold",
        color: "#7C25AE",
        marginBottom: 30,
    }
})
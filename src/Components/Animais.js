import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Anmais({ nome, image }) {
    return (
        <View style={css.container}>
            
            <View style={css.boxImage}>
                <Image source={{ uri: `data:image/jpeg;base64,${image}` }} style={css.imagem}/>
            </View>
            <View style={css.boxTitle}>
                <Text style={css.title}>{nome}</Text>
            </View>
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        minWidth: "100%",
        width: "100%",
        height: 600
    },
    boxTitle: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        paddingLeft: 5,
    },
    circleAvatar: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: "white",
        marginRight: 10
    },
    title: {
        color: "white",
        textAlign: "center",
        fontSize: 20
    },
    boxImage: {
        width: "100%",
        height: 390
    },
    imagem: {
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    },
    categoryBox: {
        width: "100%",
        marginTop: 15
    },
    descriptionBox: {
        width: "100%",
        marginTop: 15,
        padding: 10
    },
    descriptionText: {
        color: "white",
        textAlign: "justify"
    },
    categoryBox: {
        width: "100%",
        padding: 10
    },
    categoryText: {
        color: "white"
    }
})
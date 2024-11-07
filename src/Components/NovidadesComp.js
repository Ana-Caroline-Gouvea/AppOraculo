import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

export default function NovidadesComp({ item }) {
    return (
        <View>

            <View style={css.box}>
                <View>
                    <View style={css.info}>
                        <Text style={css.text}>  {item.novidadeTexto} </Text>
                        <Text></Text>
                    </View>
                    <View style={css.boximg}>
                        <Image style={css.img} source={{ uri: item.novidadeFoto }}></Image>
                    </View>
                </View>
            </View>
        </View>

    )
}
const css = StyleSheet.create({
    box: {
        width: "90%",
        alignSelf: "center",
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        textAlign: "justify",
        marginTop:10,
        padding:5
    },
    info: {
        backgroundColor: "#D9D9D9",
        width: "100%",
        marginTop: 10,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15, 
    },
    img: {
        width: "100%",
        height: 250,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    }
})


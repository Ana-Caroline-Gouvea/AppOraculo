import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'

export default function ButtomGenero(props)
{
    return(
        <View style={css.main}>
            <View style={css.botao}>
                <Text  style={css.textbutton}>{props.texto}</Text>
            </View>
        </View>
    )
}
const css = StyleSheet.create({
    botao:{
        width: "50%",
        backgroundColor: "#ECECEC",
        alignSelf: "center",
        height: 40,
        display: "flex",
        justifyContent: "center",
        borderRadius: 5,
        borderColor: "#7C25AE",
        borderWidth: 1,
        marginTop: 10,
    },
    main:{
        width: "100%",
    },
    textbutton:{
        alignSelf: "center",
    }
})
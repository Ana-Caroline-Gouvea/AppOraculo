import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function PostComponente({ item }) {
    return (
        <View style={css.main}>
            <View style={css.boxpost}>
                <View style={css.flexUsuario}>
                    <Image source={{ uri: item.usuario.usuarioFoto}} style={css.fotoUsuario}/>
                    <Text style={css.NomeUsuario}>{item.usuario.usuarioNome}</Text>
                </View>
                <View style={css.Boxtext}>
                    <Text style={css.TextPost}>{item.postagemNome}</Text>
                </View>
                <View style={css.boxfoto}>
                    {item.postagemImg &&
                        <Image source={{ uri: item.postagemImg }} style={css.fotopost}></Image>
                    }
                </View>

                <View style={css.flexIcons}>
                    <MaterialCommunityIcons name="cards-heart-outline" style={css.Icon} />
                    <MaterialCommunityIcons name="share-variant" style={css.Icon} />
                </View>
            </View>
            <View style={css.linha}></View>
        </View>
    )
}

const css = StyleSheet.create({
    main: {
        width: "100%",
        marginTop: 10
    },
    boxpost: {
        width: "90%",
        marginLeft: "5%",
    },
    flexUsuario: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    fotoUsuario: {
        width: 60,
        height: 60,
        backgroundColor: "purple",
        borderRadius: 50
    },
    NomeUsuario: {
        marginLeft: 10,
        fontSize: 16,
    },
    Boxtext: {
        backgroundColor: "#E1E1E1",
        marginTop: 10,
        padding: 10,
        borderRadius: 5
    },
    TextPost: {
        fontSize: 16,
    },
    fotopost: {
        width: "100%",
        backgroundColor: "purple",
        height: 350,
        marginTop: 10,
    },
    Icon: {
        fontSize: 35
    },
    flexIcons: {
        width: "30%",
        display: "flex",
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "space-around"
    },
    linha: {
        backgroundColor: "gray",
        width: "100%",
        height: 1,
        marginTop: 20,
    }
})
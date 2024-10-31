import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import PostComponente from '../Components/PostComponente'
import { FlatList } from 'react-native-gesture-handler'


export default function Postagem() {



    const [postagens, setPostagens] = useState([]);

    async function getPosts() {
        await fetch("http://10.133.22.11:5251/api/Postagem/GetAllPostagem",
            {
                method: "GET"
            }
        )
            .then(res => res.json())
            .then(json => setPostagens(json))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <View style={css.main}>
            <View style={css.boxtitulo}>
                <Text style={css.titulo}>Postagens</Text>
            </View>
            {postagens &&
                <FlatList
                    data={postagens}
                    renderItem={({ item }) => <PostComponente item={item} />}
                    keyExtractor={(item) => item.postagemId}
                    style={css.flatlist}
                />
            }
        </View>
    )
}

const css = StyleSheet.create({
    main: {
        width: "100%"
    },
    boxtitulo: {
        width: "100%",
        textAlign: "center",
        marginTop: 50,
    },
    titulo: {
        alignSelf: "center",
        fontSize: 30,
        fontWeight: "bold",
        color: "#7C25AE"
    },
    flatlist:{
        marginTop: 50,
        marginBottom: 100
    }

})


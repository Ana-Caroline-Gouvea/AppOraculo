import React, { useEffect, useState,  } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import PostComponente from '../Components/PostComponente'
import { FlatList } from 'react-native-gesture-handler'
import { TouchableOpacity } from 'react-native';

export default function Postagem() {

    const [postagens, setPostagens] = useState([]);


    async function createPost(){
        await fetch("http://10.133.22.12:5251/api/Postagem/CreatePostagem")
    }

    async function getPosts() {
        await fetch("http://10.133.22.12:5251/api/Postagem/GetAllPostagem",
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
            <TouchableOpacity style={css.newpost}>
                <Text style={css.textbutton}>Criar uma postagem</Text>
            </TouchableOpacity>
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
    },
    newpost:{
        alignSelf: "center",
        borderColor: "#7C25AE",
        width: 160,
        height: 40,
        borderWidth: 1,
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    textbutton:{
        fontSize: 15,
        fontWeight: "bold",
        color: "#7C25AE"
    }
    

})


import React, { useContext, useEffect, useState,  } from 'react'
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native'

import PostComponente from '../Components/PostComponente'
import { FlatList } from 'react-native-gesture-handler'
import { TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Select from '../Components/Select';
import { AuthContext } from '../Context/AuthContext';


export default function Postagem() {

    const {usuario} = useContext( AuthContext );

    const [postagens, setPostagens] = useState([]);
    const [postagemNome, setPostagemNome] = useState();
    const [postagemImg, setPostagemImg] = useState();
    const [comunidadeId, setComunidadeId] = useState();
    const [categoriaId, setCategoriaId] = useState();
    const [usuarioId, setUsuarioId] = useState();
    const [criarPostagem, setCriarPostagem] = useState(false);
    const [comunidades, setComunidades] = useState([]);
    const [comunidade, setComunidade ] = useState();


    async function createPost() {
        try {
            const response = await fetch("http://10.133.22.12:5251/api/Postagem/CreatePostagem", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                    postagemNome: postagemNome,
                    postagemImg: postagemImg,
                    comunidadesId: comunidadeId.comunidadesId,
                    categoriaId: 1,
                    usuarioId: usuario.usuarioId,
                    like: 0,
                    compartilhamento: 0
                })
            });
    
            if (response.ok) {
                Alert.alert("Sucesso", "Postagem publicada com sucesso!");
            } else {
                Alert.alert("Erro", "Não foi possível publicar a postagem. Tente novamente.");
            }
        } catch (err) {
            Alert.alert("Erro", "Ocorreu um erro ao criar a postagem. Verifique sua conexão.");
        }
    }

    async function getComunidades() {
        await fetch('http://10.133.22.12:5251/api/Comunidades/GetAllComunidades', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then( res => res.json() )
        .then( json => setComunidades( json ) )
        .catch( err => console.log( err ) )
    }

    async function getPosts() {
        await fetch("http://10.133.22.26:5251/api/Postagem/GetAllPostagem",
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
        getComunidades();
    }, [])

    return (
        <View style={css.main}>
            {criarPostagem == false ? 
            <View>
            <View style={css.boxtitulo}>
                <Text style={css.titulo}>Postagens</Text>
            </View>
            <TouchableOpacity style={css.newpost}  onPress={() => { setCriarPostagem(true) }}>
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
            :
            <View>
                <TouchableOpacity style={css.buttonback} onPress={() => { setCriarPostagem(false) }}>
                    <MaterialCommunityIcons style={css.back} name="arrow-left-thin"></MaterialCommunityIcons>
                </TouchableOpacity>
                <Text style={css.titulo}>Criar uma Postagem</Text>
                <View style={css.boxpostagem}>
                    <TextInput
                        inputMode="text"
                        placeholder="Digite sua postagem..."
                        style={css.input}
                        value={postagemNome}
                        onChangeText={(digitado) => setPostagemNome(digitado)}
                        placeholderTextColor="#696969"
                        />
                        <TextInput
                        inputMode="text"
                        placeholder="Adicione a URL de uma imagem"
                        style={css.input}
                        value={postagemImg}
                        onChangeText={(digitado) => setPostagemImg(digitado)}
                        placeholderTextColor="#696969"
                        />
                        <View style={css.boxselect}>
                            <Select style={css.select} data={comunidades} setComunidade={setComunidadeId}></Select>
                        </View>
                        <TouchableOpacity onPress={createPost}  style={css.buttonpost}>
                            <Text  style={css.textpost}>Publicar</Text>
                        </TouchableOpacity>
                </View>
            </View>
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
    },
    buttonback:{
        width: 30,
        heigth: 30
    },
    back:{
        fontSize: 40,
        color: "#7C25AE"
    },
    boxpostagem:{
        marginTop: 30
    },
    input:{
        textAlign: "left",
        borderBottomColor: "#7C25AE",
        width: "95%",
        height: 50,
        borderBottomWidth: 1,
        paddingLeft: 10,
        marginBottom: 6,
        borderRadius: 5,
        alignSelf: "center",
        backgroundColor: '#e6e6e6',
        marginBottom: 15
    },
    boxselect:{
        marginLeft: 10
    },
    buttonpost:{
        width: "95%",
        height: 50,
        borderRadius: 5,
        alignSelf: "center",
        backgroundColor: '#7C25AE',
        marginTop: 15,
        display: 'flex',
        justifyContent: 'center'
    },
    textpost:{
        color: 'white',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 18,
    }
    

})


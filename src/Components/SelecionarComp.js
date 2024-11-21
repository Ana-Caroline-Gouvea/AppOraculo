import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export default function SelecionarComp({ item }) {
    const [selected, setSelected] = useState([]);



    async function addComunidade(comunidadeId) {

        if ( selected.includes( comunidadeId ) ) {

            await fetch('http://10.133.22.26:5251/api/ComunidadeUsuario/DeleteComunidadeUsuario/' + comunidadeId + "/" + 3, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(json => {
                    const comunidades = selected.filter( item => item != comunidadeId );
                    setSelected(comunidades);
                }
                )
                .catch(err => console.log( err))

        } else {
            await fetch('http://10.133.22.26:5251/api/ComunidadeUsuario/CreateComunidadeUsuario', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    usuarioId: 3,
                    comunidadesId: comunidadeId
                })
            })
                .then(res => res.json())
                .then(json => {
                    if (json.comunidadeUsuarioId) {
                        const comunidades = [...selected , comunidadeId ];
                        setSelected(comunidades);
                    }
                }
                )
                .catch(err => console.log( err ))
        }
    }

    async function getComunidades()
    {
        await fetch('http://10.133.22.26:5251/api/ComunidadeUsuario/GetAllComunidadeUsuario/', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => {
                let comunidades = [];
                json.map( (item) => {
                    if( item.usuarioId == 3 ) {
                        comunidades.push( item.comunidadesId);
                    }
                })
                setSelected(comunidades);
            }
            )
            .catch(err => console.log( err))
    }

    useEffect( () => {
        getComunidades();
    }, [])

    useEffect( () => {
        console.log( selected );
    }, [selected ] );

    return (
        <View style={css.main}>
            <TouchableOpacity
                style={[css.botao, { borderColor: selected.includes( item.comunidadesId) ? '#7C25AE' : '#CCCCCC' }]}
                onPress={() => addComunidade(item.comunidadesId)}
            >
                <Text style={[css.textbutton, { color: selected.includes( item.comunidadesId) ? '#7C25AE' : 'black', fontWeight: 'bold' }]}>
                    {item.nomeComunidade}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const css = StyleSheet.create({
    botao: {
        width: '90%',
        backgroundColor: '#ECECEC',
        alignSelf: 'center',
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 3,
        marginTop: 10,
    },
    main: {
        width: '100%',
    },
    textbutton: {
        alignSelf: 'center',
        fontSize: 20,
    },
});
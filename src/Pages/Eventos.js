import React, { useEffect, useState, } from 'react'
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import EventoComp from '../Components/EventoComp';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

export default function Eventos() {
    const [evento, setEvento] = useState ([]);

    async function getEventos() {
        await fetch ("http://10.133.22.18:5251/api/Evento/GetAllEvento",
            {
                method: "GET"
            }
        )
        .then(res => res.json())
        .then(json => setEvento(json))
        .catch(err => console.log(err))
    }
    useEffect(() => {
        getEventos();
    }, [])
    return (
        <View>
            <View style={css.boxtitle}>
                <Text style={css.title}>Eventos</Text>
            </View>
            
            {evento && 
                <FlatList
                data={evento}
                renderItem={({item}) =><EventoComp item={item}/>}
                keyExtractor={(item) => item.eventoId}
                style={css.flatList}
                />
            }

        </View>
    )
}

const css = StyleSheet.create({
    title: {
        color: "#7C25AE",
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 50,
    },
    boxtitle: {
        alignItems: "center",
    },
    box: {
        width: "90%",
        alignSelf: "center",
        marginBottom: 10
    },
    text: {
        fontSize: 16,
        textAlign: "justify"
    },
    info: {
        backgroundColor: "red",
        width: "100%",
        marginTop: 10
    },
    flatList:{
        marginTop:10,
        marginBottom:100
    }
})

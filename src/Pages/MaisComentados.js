import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import MCcomponente from '../Components/MCcomponente'

export default function MaisComentados(props) {

    const maiscomentados = [
    {
        id: 1,
        Imagem:  require( "../../assets/hipotesedoamor.jpg"),
        titulo: "A HIPÓTESE DO AMOR",
        Sinopse: "Olive Smith, aluna do doutorado em Biologia da Universidade Stanford, acredita na ciência – não em algo incontrolável como o amor. Depois de sair algumas vezes com Jeremy, ela percebe que sua melhor amiga gosta dele e decide juntá-los. Para mostrar que está feliz com essa  LER MAIS ..."
    },
    {
        id: 2,
        Imagem:  require( "../../assets/venom.jpg"),
        titulo: "Venom 3: A Última Rodada",
        Sinopse: "Eddie e Venom devem tomar uma decisão devastadora enquanto são perseguidos por um misterioso homem.",
    },
    {
        id: 3,
        Imagem:  require( "../../assets/ilovyouimsorry.jpg"),
        titulo: "I Love You, I'm Sorry - Gracie Abrams",
        Sinopse: "Sendo um sucesso no TikTok, a música I Love You, I'm Sorry de Gracie Abrams lidera as paradas musicais com sua nova versão 'Live From VEVO'",
    },
    {
        id: 4,
        Imagem:  require( "../../assets/minecraft.jpg"),
        titulo: "MINECRAFT",
        Sinopse: "Minecraft continua sendo o jogo mais baixado do mundo com quase dois bilhões de downloads, ainda mais agora com a aproximação de seu filme em live action",
    }
]

  return (
    <View  style={css.main}>
         <View style={css.boxtitle}>
                <Text style={css.title}>Mais Comentados</Text>
        </View>
        <FlatList style={css.flatlist}
        data={maiscomentados}
        renderItem={({item}) => <MCcomponente 
        Imagem={item.Imagem}
        titulo={item.titulo}
        Sinopse={item.Sinopse}/>}>
        </FlatList> 
        
    </View>
  )
}
const css = StyleSheet.create({
    main:{
        width: "100%"
    },
    title: {
        color: "#7C25AE",
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 50,
    },
    boxtitle: {
        alignItems: "center",
    },
    flatlist:{
        marginTop: 20,
        marginBottom: 100
    }
})


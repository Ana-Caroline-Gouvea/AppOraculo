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
        Imagem:  require( "../../assets/quartaasa.jpg"),
        titulo: "QUARTA ASA",
        Sinopse: "Violet Sorrengail, uma jovem de vinte anos, estava destinada a entrar na Divisão dos Escribas, levando uma vida relativamente tranquila entre os livros e as aulas de História. No entanto, a general comandante das forças de Navarre – também conhecida como sua mãe  LER MAIS ...",
    },
    {
        id: 3,
        Imagem:  require( "../../assets/naoeamor.jpg"),
        titulo: "NÃO É AMOR",
        Sinopse: "A vida de Rue Siebert não é perfeita, mas ela tem alguns poucos amigos leais e uma carreira de sucesso como engenheira de biotecnologia na Kline, uma das mais promissoras startups no campo da ciência dos alimentos. Ela lutou muito para construir esse mundinho",
    },
    {
        id: 4,
        Imagem:  require( "../../assets/eassimquecomeca.jpg"),
        titulo: "É ASSIM QUE COMEÇA",
        Sinopse: "Lily Bloom continua administrando uma floricultura. Seu ex-marido abusivo, Ryle Kincaid, ainda é um    cirurgião. Mas agora os dois estão oficialmente divorciados e dividem a guarda da filha, Emerson. Quando Lily esbarra em Atlas ― com quem não fala há quase dois anos  LER MAIS ...",
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


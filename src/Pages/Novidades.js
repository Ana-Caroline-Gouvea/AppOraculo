import React from 'react'
import HeaderBusca from '../Components/HeaderBusca'
import { StyleSheet, View, Text, ScrollView } from 'react-native'

export default function Novidades() {
  return (
    <>
    <ScrollView>
    <View style={css.boxtitle}>
        <Text style={css.title}>Novidades</Text>

      </View>
      <View style={css.boxtext}>
        <Text style={css.boxtext}>CONVERSA COM AUTORES - Projeto ORÁCULO</Text>
        <Text style={css.boxtext}> Olá, galera do Oráculo! </Text>
        <Text style={css.boxtext}>No dia 19/09/24, às 19:00, estaremos realizando um evento online e gratuito com a talentosa Paula Pimenta! </Text>
        <Text style={css.boxtext}>Este evento é uma oportunidade única para os nossos membros interagirem com uma das autoras mais queridas da literatura jovem. Preparem-se para uma conversa envolvente e inspiradora!</Text>
        <Text style={css.boxtext}>Lembrando que a participação é exclusiva para membros do Oraculo. Fiquem atentos ao link que enviaremos em breve para garantir seu lugar. Não percam!</Text>
      </View>
    </ScrollView>

    </>
  )
}
const css = StyleSheet.create({
    title:{
        color:"#7C25AE",   
        fontSize: 30, 
        fontWeight: "bold",
        marginTop:50,
    },
    boxtitle:{
        alignItems:"center",
    },
    boxtext:{
        width: "90%",
        padding: 10,
        marginLeft: "5%",
        backgroundColor: "#ECECEC",
        borderRadius: 7,
        

    }
})
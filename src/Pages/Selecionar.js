import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ScrollView, Text, FlatList } from 'react-native'
import SelecionarComp from '../Components/SelecionarComp'

export default function Selecionar() {

  const [selecionado, setSelecionado] = useState()
  async function getComunidadeUsuario() {
    await fetch("http://10.133.22.26:5251/api/Comunidades/GetAllComunidades",
      {
        method: "GET"
      }
    )
      .then(res => res.json())
      .then(json => setSelecionado(json))
      .catch(err => console.log(err))

  }
  useEffect(() => {
    getComunidadeUsuario();
  }, [])


  return (
    <View>
      <View style={css.boxtitle}>
        <Text style={css.title}>Você pode gostar de... </Text>
      </View>

      {selecionado && 
                <FlatList
                data={selecionado}
                renderItem={({item}) =><SelecionarComp item={item}/>}
                keyExtractor={(item) => item.nomeComunidade}
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
    width: '100%',
    height: 120,
    alignItems: "center"
  },
})
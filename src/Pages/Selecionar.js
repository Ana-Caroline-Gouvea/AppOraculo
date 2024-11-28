import React, { useState, useEffect, useContext } from 'react'
import { View, StyleSheet, ScrollView, Text, FlatList, TouchableOpacity } from 'react-native'
import SelecionarComp from '../Components/SelecionarComp'
import { AuthContext } from '../Context/AuthContext'
import { useNavigation } from '@react-navigation/native'

export default function Selecionar({ setSelecionar, setHome, navigation }) {

  const [selecionado, setSelecionado] = useState()
  async function getComunidadeUsuario() {
    await fetch("http://10.133.22.16:5251/api/Comunidades/GetAllComunidades",
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
    <View >

      <View style={css.boxtitle}>
        <Text style={css.title}>Você pode gostar de... </Text>
      </View>

      {selecionado &&
        <FlatList
          data={selecionado}
          renderItem={({ item }) => <SelecionarComp item={item} />}
          keyExtractor={(item) => item.nomeComunidade}
          style={css.flatList}
        />
      }
      <View style={css.boxbtn}>
        <TouchableOpacity style={css.btn} onPress={ () => navigation.navigate( "Home" )}>
          <Text style={css.btntext}>Concluído</Text>
        </TouchableOpacity>
      </View>

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
  btn: {
    width: "90%",
    height: 60,
    backgroundColor: "#7C25AE",
    marginTop: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    display:"flex"

  },
  btntext: {
    color: "white",
    fontSize: 22
  },
  boxbtn: {
    width:"100%",
    alignItems: "center",
    justifyContent: "center",
    display:"flex"


  }
})
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { StyleSheet, View, Image, Text } from 'react-native'

export default function MCcomponente(props) {
  return (
    <View style={css.main}>
        <View style={css.boxmain}>
          <Image source={props.Imagem} style={css.foto}></Image>
          <View style={css.caixatexto}>
            <Text style={css.titulo}>{props.titulo}</Text>
            <View style={css.Icones}>
              <MaterialCommunityIcons name="star" style={css.Icon} />
              <MaterialCommunityIcons name="star" style={css.Icon} />
              <MaterialCommunityIcons name="star" style={css.Icon} />
              <MaterialCommunityIcons name="star" style={css.Icon} />
              <MaterialCommunityIcons name="star" style={css.Icon} />
            </View>
            <View style={css.Sinopse}>
              <Text>{props.Sinopse}</Text>
            </View>
          </View>
        </View>
    </View>
  )
}
const css = StyleSheet.create({
  main:{
    width: "100%",
  },
  boxmain:{
    width: "90%",
    height: 200,
    marginLeft: "5%",
    display:"flex",
    flexDirection: "row",
    marginTop: 30,
    borderRadius: 5
  },
  foto:{
    width: "35%",
    height: 200,
    objectFit: "cover",
    resizeMode: 'contain'
  },
  caixatexto:{
    width: "65%",
    height: 200,
    backgroundColor: "#E3E3E3",
    borderRadius: 5,
    alignSelf: "flex-end",
    padding: 10,
  },
  titulo:{
    fontWeight: "bold",

  },
  Icones:{
    display: "flex",
    flexDirection:"row",
  },
  Icon:{
    fontSize: 17,
    color: "#FFCC00"
  },
})


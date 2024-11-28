import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import NovidadesComp from '../Components/NovidadesComp';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import FabButton from '../Components/FabButton';

export default function Novidades({navigation}) {
  const [novidade, setNovidade] = useState([]);

  async function getNovidades() {
    await fetch("http://10.133.22.6:5251/api/Novidade/GetAllNovidade",
      {
        method: "GET"
      }
    )
      .then(res => res.json())
      .then(json => setNovidade(json))
      .catch(err => console.log(err))

  }
  useEffect(() => {
    getNovidades();
  }, [])

  return (
    <View>
      <View style={css.boxtitle}>
        <Text style={css.title}>Novidades</Text>
      </View>

      {novidade &&
        <FlatList
          data={novidade}
          renderItem={({ item }) => <NovidadesComp item={item} />}
          keyExtractor={(item) => item.novidadeId}
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
  flatList: {
    marginTop: 10,
    marginBottom: 100
  }
})

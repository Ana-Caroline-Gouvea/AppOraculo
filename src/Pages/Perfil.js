import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { PieChart } from "react-native-gifted-charts";
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

export default function Perfil() {
  const pieData = [
    {
      value: 50,
      color: '#7B4EF5',
      gradientCenterColor: '#7B4EF5',
      focused: true,

    },
    {
      value: 30,
      color: '#AE24A8',
      gradientCenterColor: '#AE24A8'
    },
    {
      value: 20,
      color: '#AF68D1',
      gradientCenterColor: '#AF68D1'
    }
  ];

  const pieData2 = [
    {
      value: 60,
      color: '#232675',
      gradientCenterColor: '#232675',
      focused: true,

    },
    {
      value: 25,
      color: '#551872',
      gradientCenterColor: '#551872'
    },
    {
      value: 15,
      color: '#AF68D1',
      gradientCenterColor: '#AF68D1'
    },
  ];
  const renderDot = color => {
    return (
      <View
        style={{
          height: 10,
          width: 10,
          borderRadius: 5,
          backgroundColor: color,
          marginRight: 10,
        }}
      />
    );
  };

  const renderLegendComponent = () => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 8,
            marginTop: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 170,
            }}>
            {renderDot('#7B4EF5')}
            <Text style={{ color: 'black' }}>Comunidade Livro: 50%</Text>
          </View>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 8,
        }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 170,
            }}>
            {renderDot('#AE24A8')}
            <Text style={{ color: 'black' }}>Comunidade Música: 30%</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 170,
            }}>
            {renderDot('#AF68D1')}
            <Text style={{ color: 'black' }}>Comunidade Jogo: 20%</Text>
          </View>
        </View>
      </>
    );
  };

  const renderLegendComponent2 = () => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 8,
            marginTop: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 170,
            }}>
            {renderDot('#232675')}
            <Text style={{ color: 'black' }}>Estilhaça-me</Text>
          </View>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 8,
        }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 170,
            }}>
            {renderDot('#551872')}
            <Text style={{ color: 'black' }}>Pop</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 8,

              width: 170,
            }}>
            {renderDot('#AF68D1')}
            <Text style={{ color: 'black' }}>Minecraft</Text>
          </View>
        </View>
      </>
    );
  };

  return (
    <View>
      <ScrollView>
        {/* <Text style={css.titulo}>Minha Conta</Text> */}

        <View style={css.perfil}>
          <LinearGradient
            colors={['#AE24A8', '#D722D0', '#3D42C3', '#551872', '#AF68D1']}
            start={{ x: 1, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={css.linearGradient}
          >
            <View style={css.innerContainer}>
              <Image source={require("../../assets/cadastro.senai.png")} style={css.fotoPerfil} />
            </View>
          </LinearGradient>
          <Text style={css.nome}>Caah_Tacumba
            <MaterialCommunityIcons name="pencil-outline" color={'#7C25AE'} size={20} />
          </Text>
          <View style={css.boxInfo}>
            <Text style={css.textInfo}>Alterar informações cadastrais</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            alignItems: 'center',
          }}>
          <PieChart
            data={pieData}
            donut
            strokeWidth={2}
            strokeColor="#f2f2f2"
            showGradient
            sectionAutoFocus
            radius={90}
            innerRadius={60}
            innerCircleColor={'#f2f2f2'}
            centerLabelComponent={() => {
              return (
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Text
                    style={{ fontSize: 22, color: 'black', fontWeight: 'bold' }}>
                    50%
                  </Text>
                  <Text style={{ fontSize: 13, color: 'black' }}>Comunidade Livro</Text>
                </View>
              );
            }}
          />
          {renderLegendComponent()}
        </View>

        <View
          style={{
            marginTop: 20,
            marginBottom: 20,
            alignItems: 'center',
          }}>
          <PieChart
            data={pieData2}
            donut
            strokeWidth={2}
            strokeColor="#f2f2f2"
            showGradient
            sectionAutoFocus
            radius={90}
            innerRadius={60}
            innerCircleColor={'#f2f2f2'}
            centerLabelComponent={() => {
              return (
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Text
                    style={{ fontSize: 22, color: 'black', fontWeight: 'bold' }}>
                    30%
                  </Text>
                  <Text style={{ fontSize: 13, color: 'black' }}>De Estilhaça-me
                  </Text>
                </View>
              );
            }}
          />
          {renderLegendComponent2()}
        </View>
      </ScrollView >
    </View>

  )
}
const css = StyleSheet.create({
  titulo: {
    color: '#7C25AE',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 40
  },
  linearGradient: {
    width: 130,
    height: 130,
    borderRadius: 500
  },
  innerContainer: {
    borderRadius: 500,
    display: 'flex',
    alignItems: 'center',
    padding: 4
  },
  fotoPerfil: {
    width: 122,
    height: 122,
    borderRadius: 500,
  },
  perfil: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 30
  },
  nome: {
    marginTop: 10,
    fontSize: 15,
    color: '#7C25AE',
  },
  boxInfo: {
    width: "53%",
    marginTop: 50,
    marginLeft: 15,
    borderColor: '#7C25AE',
    borderWidth: 1,
    padding: 8,
    borderRadius: 10,
    marginBottom: 15
  },
  textInfo: {
    color: '#7C25AE',
    fontWeight: 'bold'
  }

})

import React from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'

export default function Centraldenuncias() {
  return (
    <ScrollView>
      <View style={css.boxtitle}>
        <Text style={css.title}>Central de Denúncias</Text>
      </View>
      <View style={css.textbox}>
        <Text style={css.text}>A comunidade Oráculo é um espaço seguro e respeitoso para a troca
          de ideias e discussões culturais. Caso você tenha presenciado ou sofrido
          comportamentos inadequados, violação das regras ou qualquer outro tipo de conduta
          imprópria, utilize esta página para reportar uma denúncia. Nosso time de moderação
          levará todas as denúncias a sério e tomará as devidas providências.</Text>

        <View style={css.subtitulobox}>
          <Text style={css.subtitulotext}>Como Funciona o Processo de Denúncia?</Text>
        </View>
        <View style={css.topic}>
          <Text style={css.bullet}>1-</Text>
          <Text style={css.text}>Preencha o formulário abaixo: Forneça o máximo de detalhes possível sobre o ocorrido.</Text>
        </View>
        <View style={css.topic}>
          <Text style={css.bullet}>2-</Text>
          <Text style={css.text}>Análise pela equipe de moderação: Após o envio, nossa equipe avaliará a denúncia e iniciará uma investigação.</Text>
        </View>
        <View style={css.topic}>
          <Text style={css.bullet}>3-</Text>
          <Text style={css.text}>Ação corretiva: Se a denúncia for comprovada, medidas serão tomadas, que podem incluir advertências, suspensões ou banimentos, dependendo da gravidade da situação.</Text>
        </View>
        <View style={css.topic}>
          <Text style={css.bullet}>1-</Text>
          <Text style={css.text}>Feedback: Você será notificado sobre a decisão da moderação através do e-mail cadastrado.</Text>
        </View>
        <View style={css.subtitulobox}>
          <Text style={css.subtitulotext}>Formulário de Denúncia</Text>
        </View>
        <Text  style={css.text}>Por favor, preencha as informações abaixo para que possamos analisar sua denúncia:</Text>

        <View style={css.boxinfo}>
          <Text style={css.infotitle}>IMPORTANTE</Text>
          <View style={css.topic}>
            <Text style={css.bullet}>•</Text>
            <Text style={css.text}>Todas as denúncias são confidenciais. Suas informações pessoais e os detalhes da denúncia não serão compartilhados com outras partes envolvidas.</Text>
        </View>
        <View style={css.topic}>
          <Text style={css.bullet}>•</Text>
          <Text style={css.text}>Enviar denúncias falsas ou mal-intencionadas é violação dos termos de uso do Oráculo e pode resultar em penalidades para o denunciante.</Text>
        </View>

        <View style={css.topic}>
            <Text style={css.bullet}>1- </Text>
            <Text style={css.text}>Qual o tipo de violação?</Text>
        </View>

        </View>


      </View>




    </ScrollView>





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
  textbox: {
    width: "90%",
    alignSelf: "center",
    marginBottom: 10,
    
  },
  text: {
    fontSize: 16,
    textAlign: "justify",
    marginTop: 5
  },
  subtitulobox: {
    alignItems: "center",
    marginTop: 5,
  },
  subtitulotext: {
    fontSize: 20,
    fontWeight: "bold",
  },
  topic: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginTop:10,
  },
  boxinfo:{
    width:"100%",
    backgroundColor: "#e6d3ef",
    marginTop:10,
    alignItems: "center",
    borderRadius:5
  },
  infotitle:{
    textAlign:"center",
    fontSize:18,
    marginTop:5
  },

})

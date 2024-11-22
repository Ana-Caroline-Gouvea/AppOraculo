import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';

export default function Home() {
  return (
    <View style={css.container}>
      <ScrollView contentContainerStyle={css.scrollContainer}>
        {/* Título com borda roxa */}
        <View style={css.titleContainer}>
          <Text style={css.title}>Bem-Vindo(a) ao Oráculo!</Text>
        </View>

        {/* Primeiro Bloco */}
        <Image
          source={require('../../assets/img01-parallax.jpg')} // Substitua pelo caminho da imagem
          style={css.image}
        />
        <Text style={css.text}>
          Em um mundo cada vez mais digital e interconectado, o acesso à informação e à cultura se tornou um direito fundamental. 
          Nesse contexto, nós da Oráculo surgimos como um farol, iluminando o caminho para uma educação de qualidade e a inclusão digital.
        </Text>

        {/* Segundo Bloco */}
        <Image
          source={require('../../assets/img02222-parallax.jpg')} // Substitua pelo caminho da imagem
          style={css.image}
        />
        <Text style={css.text}>
          Alinhado com os Objetivos de Desenvolvimento Sustentável (ODS), especificamente o ODS 4 – Educação de Qualidade, 
          o Oráculo se posiciona como um espaço virtual que promove a aprendizagem contínua, o acesso à informação e a troca de conhecimentos. 
          Ao abranger uma vasta gama de comunidades, desde livros até filmes, o site democratiza o acesso à cultura, permitindo que pessoas de todas as idades 
          e regiões do Brasil tenham contato com diferentes formas de expressão artística e intelectual.
        </Text>

        {/* Terceiro Bloco */}
        <Image
          source={require('../../assets/img03333-parallax.jpg')} // Substitua pelo caminho da imagem
          style={css.image}
        />
        <Text style={css.text}>
          Mas o Oráculo vai além de ser apenas um repositório de informações. Ele se configura como um ambiente social virtual, 
          onde os usuários podem interagir, trocar ideias e construir conhecimentos de forma colaborativa. 
          A plataforma oferece ferramentas que permitem a criação de grupos de estudo, fóruns de discussão e outras atividades 
          que estimulam o debate e a reflexão sobre temas relevantes.
        </Text>

        {/* Quarto Bloco */}
        <Image
          source={require('../../assets/img03-parallax.jpg')} // Substitua pelo caminho da imagem
          style={css.image}
        />
      </ScrollView>
    </View>
  );
}

const css = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF', // Fundo branco
    flexGrow: 1,
  },
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
  },
  titleContainer: {
    borderWidth: 2, // Borda
    borderColor: '#800080', // Cor roxa
    borderRadius: 10, // Bordas arredondadas
    padding: 10,
    marginBottom: 20,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#800080', // Texto roxo
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#000000', // Texto preto
    lineHeight: 24,
    textAlign: 'justify',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginVertical: 10,
  },
});

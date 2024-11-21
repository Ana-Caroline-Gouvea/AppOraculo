import React from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'

export default function Suporte() {
    return (
        <ScrollView>
            <View style={css.boxtitle}>
                <Text style={css.title}>Suporte Oráculo</Text>
            </View>
            <View style={css.textbox}>

                <Text style={css.text}>Bem-vindo à página de suporte do Oráculo!  Aqui você encontrará respostas para as dúvidas mais frequentes e terá acesso a um chat para tirar suas dúvidas em tempo real.</Text>
                <View style={css.topic}>
                    <Text style={css.bullet}>1 - </Text>
                    <Text style={css.perg}>  O que é o Oráculo?</Text>
                </View>

                <Text style={css.text}>O Oráculo é uma plataforma que reúne comunidades focadas em diferentes âmbitos culturais e os mais diversos assuntos, permitindo que usuários participem de discussões sobre livros, músicas, jogos e muito mais.</Text>

                <View style={css.topic}>
                    <Text style={css.bullet}>2 - </Text>
                    <Text style={css.perg}>Posso participar de mais de uma comunidade ao mesmo tempo?</Text>
                </View>

                <Text style={css.text}>Sim! No Oráculo, você pode participar de quantas comunidades desejar, desde que respeite as regras específicas de cada uma.</Text>

                <View style={css.topic}>
                    <Text style={css.bullet}>3 - </Text>
                    <Text style={css.perg}>Como posso encontrar uma comunidade que me interessa?</Text>
                </View>

                <Text style={css.text}>Use a barra de busca na página inicial para procurar comunidades com base nos seus interesses. Você pode buscar por temas, nomes de livros, bandas, jogos e muito mais.</Text>

                <View style={css.topic}>
                    <Text style={css.bullet}>4 - </Text>
                    <Text style={css.perg}>Como faço para denunciar um comportamento inadequado em uma comunidade?</Text>
                </View>

                <Text style={css.text}>Se você presenciar um comportamento inadequado que viole nossas regras, clique na opção de "Reportar" no menu. Nossa equipe analisará a situação e tomará as devidas providências.</Text>

                <View style={css.topic}>
                    <Text style={css.bullet}>5 - </Text>
                    <Text style={css.perg}>Como posso personalizar meu perfil?</Text>
                </View>

                <Text style={css.text}>Acesse seu perfil no canto inferior esquerdo do menu e você poderá editar suas informações pessoais, adicionar uma foto de perfil e personalizar seu nome de usuário.</Text>

                <View style={css.topic}>
                    <Text style={css.bullet}>6 - </Text>
                    <Text style={css.perg}>O Oráculo é gratuito?</Text>
                </View>

                <Text style={css.text}>Sim, a participação nas comunidades do Oráculo é gratuita. No entanto, algumas funcionalidades ou comunidades exclusivas podem exigir uma assinatura premium.</Text>

            </View>

            <View style={css.linha}>
            </View>

            <View style={css.textbox}>
                <Text style={css.text}>Se precisar de mais ajuda, nos contatar através do pelo e-mail: suporte@oraculo.com.</Text>

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
    text: {
        fontSize: 16,
        textAlign: "justify",
        marginTop: 5
    },
    textbox: {
        width: "90%",
        alignSelf: "center",
        marginBottom: 10,

    },
    topic: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        marginTop: 10,
        width: "100%"
    },
    bullet: {
        fontSize: 16,
        marginRight: 6,
        color: "#7C25AE",
        fontWeight: "bold"
    },
    perg: {
        fontSize: 16,
        color: "#7C25AE",
        fontWeight: "bold"
    },
    linha: {
        backgroundColor: "#7C25AE",
        height: 2
    }
})

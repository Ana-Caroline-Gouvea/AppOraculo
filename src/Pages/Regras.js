import React from 'react'
import { ScrollView, Text, View, StyleSheet } from 'react-native'

export default function Regras() {
    return (
        <ScrollView>
            <View style={css.boxtitle}>
                <Text style={css.title}>Regras</Text>
            </View>

            <View style={css.textbox}>

                <View style={css.container}>
                    <Text style={css.texttitle}>1 - Respeito Mútuo.</Text>
                    <View style={css.topic}>
                        <Text style={css.bullet}>•</Text>
                        <Text style={css.text}>Trate todos os membros da comunidade com respeito,
                            independentemente de sua origem, raça, etnia, gênero, orientação
                            sexual, crenças ou opiniões.</Text>
                    </View>
                    <View style={css.topic}>
                        <Text style={css.bullet}>•</Text>
                        <Text style={css.text}>Ataques pessoais, assédio, discriminação, insultos ou qualquer
                            tipo de comportamento ofensivo são estritamente proibidos.</Text>
                    </View>
                    <View style={css.topic}>
                        <Text style={css.bullet}>•</Text>
                        <Text style={css.text}>Qualquer forma de discurso de ódio ou incitação à
                            violência resultará em punições severas, incluindo suspensão ou
                            banimento permanente.</Text>
                    </View>
                    <Text style={css.text}>Caso alguma destas regras sejam desconsideradas pelo usuário,
                        ele estará sujeito a advertência, em casos mais sérios, será banido do Oráculo.</Text>

                    <Text style={css.texttitle}>2 - Discussões Saudáveis.</Text>
                    <View style={css.topic}>
                        <Text style={css.bullet}>•</Text>
                        <Text style={css.text}>Incentivamos o debate e a troca de ideias, desde que feito de maneira construtiva e educada.</Text>
                    </View>
                    <View style={css.topic}>
                        <Text style={css.bullet}>•</Text>
                        <Text style={css.text}>Evite a disseminação de desinformação. Informações sem fontes confiáveis podem ser contestadas pela moderação.</Text>
                    </View>
                    <View style={css.topic}>
                        <Text style={css.bullet}>•</Text>
                        <Text style={css.text}>Respeite opiniões diferentes e busque o diálogo, não o confronto.</Text>
                    </View>
                    <Text style={css.text}>Caso alguma destas regras sejam desconsideradas pelo usuário,
                        ele estará sujeito a advertência, em casos mais sérios, será banido do Oráculo.</Text>
                    <Text style={css.texttitle}>3 - Proteção de dados pessoais.</Text>
                    <View style={css.topic}>
                        <Text style={css.bullet}>•</Text>
                        <Text style={css.text}>Não publique informações pessoais suas ou de outros, como endereço, telefone ou documentos de identidade,
                            sem consentimento. A Orácuo se dedica para a proteção de seus dados, portanto, tenha certeza do que está fazendo ao
                            compartilhar estes.</Text>
                    </View>
                    <View style={css.topic}>
                        <Text style={css.bullet}>•</Text>
                        <Text style={css.text}>Qualquer tentativa de coletar dados de outros usuários sem autorização expressa é proibida.</Text>
                    </View>
                    <View style={css.topic}>
                        <Text style={css.bullet}>•</Text>
                        <Text style={css.text}>Assegure-se de proteger sua própria privacidade e a de outros.</Text>
                    </View>
                    <Text style={css.text}>Caso alguma destas regras sejam desconsideradas pelo usuário,
                        ele estará sujeito a advertência, em casos mais sérios, será banido do Oráculo.</Text>
                    <Text style={css.texttitle}>4 - Conteúdo Apropriado.</Text>
                    <View style={css.topic}>
                        <Text style={css.bullet}>•</Text>
                        <Text style={css.text}>Publicações devem ser apropriadas para todas as idades, ou conter aviso claro se forem para um
                            público específico. Há comunidades que contém conteúdo inapropriado para menores de 18 anos (exemplo: filmes
                            pornográficos, livros, músicas e jogos obscenos), portanto, tenha certeza se está em uma comunidade favorável
                            para você.</Text>
                    </View>
                    <View style={css.topic}>
                        <Text style={css.bullet}>•</Text>
                        <Text style={css.text}>Links para sites inseguros ou maliciosos são estritamente proibidos.</Text>
                    </View>
                    <View style={css.topic}>
                        <Text style={css.bullet}>•</Text>
                        <Text style={css.text}>O Oráculo pergunta a idade no momento do cadastro e cada comunidade tem seu público
                            específico, caso o usuário não tenha a idade apropriada para determinada comunidade, não será permitido o
                            seu acesso.</Text>
                    </View>
                    <Text style={css.text}>Caso alguma destas regras sejam desconsideradas pelo usuário,
                        ele estará sujeito a advertência, em casos mais sérios, será banido do Oráculo.</Text>
                    <Text style={css.texttitle}>5 - Spam e Publicidade</Text>
                    <View style={css.topic}>
                        <Text style={css.bullet}>•</Text>
                        <Text style={css.text}>O envio de spam (mensagens repetitivas ou indesejadas) e publicidade não autorizada não é permitido.</Text>
                    </View>
                    <View style={css.topic}>
                        <Text style={css.bullet}>•</Text>
                        <Text style={css.text}>Caso queira divulgar a sua marca, será necessário que você entre em contato e pague uma taxa mensal
                            de R$150,00, contrário disso, estará sujeito a advertência e banimento.</Text>
                    </View>
                    <View style={css.topic}>
                        <Text style={css.bullet}>•</Text>
                        <Text style={css.text}>Posts com o único propósito de autopromoção devem ser evitados, a não ser que agreguem valor à comunidade.</Text>
                    </View>

                    <Text style={css.text}>Caso alguma destas regras sejam desconsideradas pelo usuário,
                        ele estará sujeito a advertência, em casos mais sérios, será banido do Oráculo.</Text>

                    <Text style={css.texttitle}>6 - Uso de Linguagem Adequada.</Text>
                    <View style={css.topic}>
                        <Text style={css.bullet}>•</Text>
                        <Text style={css.text}>Evite palavrões, expressões vulgares e linguagem ofensiva. Mantenha uma comunicação clara e respeitosa.</Text>
                    </View>
                    <View style={css.topic}>
                        <Text style={css.bullet}>•</Text>
                        <Text style={css.text}>A linguagem usada nas discussões deve ser compreensível e acessível para todos os participantes.</Text>
                    </View>

                    <Text style={css.text}>Caso alguma destas regras sejam desconsideradas pelo usuário,
                        ele estará sujeito a advertência, em casos mais sérios, será banido do Oráculo.</Text>

                    <Text style={css.texttitle}>7 - Responsabildade no Compartilhamento de Conteúdo</Text>
                    <View style={css.topic}>
                        <Text style={css.bullet}>•</Text>
                        <Text style={css.text}>Assuma a responsabilidade pelo conteúdo que você compartilha. Verifique a veracidade de fatos
                            antes de postar.</Text>
                    </View>
                    <View style={css.topic}>
                        <Text style={css.bullet}>•</Text>
                        <Text style={css.text}>Conteúdos protegidos por direitos autorais não devem ser compartilhados sem a devida autorização.</Text>
                    </View>
                    <View style={css.topic}>
                        <Text style={css.bullet}>•</Text>
                        <Text style={css.text}>Plágio é estritamente proibido e será penalizado.</Text>
                    </View>
                    <Text style={css.text}>Caso alguma destas regras sejam desconsideradas pelo usuário,
                        ele estará sujeito a advertência, em casos mais sérios, será banido do Oráculo.</Text>
                    <Text style={css.texttitle}>8 - Contribuições Construtivas</Text>
                    <View style={css.topic}>
                        <Text style={css.bullet}>•</Text>
                        <Text style={css.text}>Contribuições que visam enriquecer o diálogo entre as comunidades são altamente incentivadas.</Text>
                    </View>
                    <View style={css.topic}>
                        <Text style={css.bullet}>•</Text>
                        <Text style={css.text}>Procure oferecer soluções e alternativas em vez de apenas criticar.</Text>
                    </View>
                    <View style={css.topic}>
                        <Text style={css.bullet}>•</Text>
                        <Text style={css.text}>Se houver uma reclamação ou denúncia, use os canais adequados para isso, sem criar polêmicas públicas.</Text>
                    </View>
                    <Text style={css.text}>Caso alguma destas regras sejam desconsideradas pelo usuário,
                        ele estará sujeito a advertência, em casos mais sérios, será banido do Oráculo.</Text>
                    <Text style={css.texttitle}>9 -  Moderação e Denúncias</Text>
                    <View style={css.topic}>
                        <Text style={css.bullet}>•</Text>
                        <Text style={css.text}>A equipe de moderação tem autoridade para remover conteúdos ou usuários que violem estas regras.</Text>
                    </View>
                    <View style={css.topic}>
                        <Text style={css.bullet}>•</Text>
                        <Text style={css.text}>Denúncias de violação de regras serão investigadas e podem resultar em advertências, suspensões ou banimento.</Text>
                    </View>
                    <View style={css.topic}>
                        <Text style={css.bullet}>•</Text>
                        <Text style={css.text}>A comunidade pode ajudar na moderação ao reportar comportamento inadequado.</Text>
                    </View>
                    <Text style={css.text}>Caso alguma destas regras sejam desconsideradas pelo usuário,
                        ele estará sujeito a advertência, em casos mais sérios, será banido do Oráculo.</Text>

                    <View style={css.topic}>
                        <Text style={css.texttitle}>10 - Colaborção entre comunidades</Text>
                    </View>
                    <View style={css.topic}>
                    <Text style={css.bullet}>•</Text>
                    <Text style={css.text}>Incentivamos a colaboração e interação respeitosa entre diferentes comunidades.</Text>
                    </View>
                    <View  style={css.topic}>
                        <Text style={css.bullet}>•</Text>
                        <Text style={css.text}>Discussões intercomunitárias devem promover a diversidade de pensamento e evitar tribalismos.</Text>
                    </View>
                    <View  style={css.topic}>
                        <Text style={css.bullet}>•</Text>
                        <Text style={css.text}>Respeite os espaços e limites de cada comunidade, participando ativamente e positivamente.</Text>
                    </View>
                    <Text style={css.text}>Caso alguma destas regras sejam desconsideradas pelo usuário,
                        ele estará sujeito a advertência, em casos mais sérios, será banido do Oráculo.</Text>
                </View>
            </View>
        </ScrollView >
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
        marginBottom: 10
    },
    texttitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
        color: "#7C25AE",
    },
    topic: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    bullet: {
        fontSize: 14,
        marginRight: 5,
    },
    text: {
        fontSize: 16,
         textAlign: "justify"
    },

})










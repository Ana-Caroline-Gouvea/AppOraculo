import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text, Pressable, TextInput, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Select from '../Components/Select';

export default function Centraldenuncias() {
    const [checkbox1, setCheckbx1] = useState(false);
    const [checkbox2, setCheckbx2] = useState(false);
    const [checkbox3, setCheckbx3] = useState(false);
    const [checkbox4, setCheckbx4] = useState(false);
    const [checkbox5, setCheckbx5] = useState(false);
    const [checkbox6, setCheckbx6] = useState(false);

    const [outro, setOutro] = useState('');
    const [descricao, setDescricao] = useState('');
    const [comunidade, setComunidade] = useState('');
    const [email, setEmail] = useState('');
    const [comunidades, setComunidades] = useState([]);

    // Função para buscar comunidades
    async function getComunidades() {
        try {
            const res = await fetch('http://10.133.22.26:5251/api/Comunidades/GetAllComunidades', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            const json = await res.json();
            setComunidades(json);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getComunidades();
    }, []);

    // Validação do formulário
    const validarFormulario = () => {
        const algumCheckboxMarcado =
            checkbox1 || checkbox2 || checkbox3 || checkbox4 || checkbox5 || checkbox6;

        // Verificar se ao menos uma checkbox foi marcada
        if (!algumCheckboxMarcado) {
            Alert.alert('Erro', 'Selecione pelo menos um tipo de violação.');
            return false;
        }

        // Verificar se "Outro" foi selecionado, mas está vazio
        if (checkbox6 && outro.trim() === '') {
            Alert.alert('Erro', 'Especifique a violação em "Outro".');
            return false;
        }

        // Verificar se a descrição foi preenchida
        if (descricao.trim() === '') {
            Alert.alert('Erro', 'Forneça uma descrição detalhada do ocorrido.');
            return false;
        }

        // Verificar se a comunidade foi selecionada
        if (String(comunidade).trim() === '') {
            Alert.alert('Erro', 'Selecione uma comunidade ou tópico relacionado.');
            return false;
        }

        if(email.trim() === ''){
            Alert.alert('Erro', 'Forneça um email válidado para contato.');
            return false;
        }

        return true;
    };

    // Função para enviar a denúncia
    const enviarDenuncia = () => {
        if (validarFormulario()) {
            Alert.alert('Sucesso', 'Denúncia enviada com sucesso!');
        }
    };

    return (
        <ScrollView>
            <View style={css.boxtitle}>
                <Text style={css.title}>Central de Denúncias</Text>
            </View>
            <View style={css.textbox}>
                <Text style={css.text}>A comunidade Oráculo é um espaço seguro e respeitoso para a troca de ideias e discussões culturais. Caso você tenha presenciado ou sofrido comportamentos inadequados, violação das regras ou qualquer outro tipo de conduta imprópria, utilize esta página para reportar uma denúncia. Nosso time de moderação levará todas as denúncias a sério e tomará as devidas providências.</Text>

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
                    <Text style={css.bullet}>4-</Text>
                    <Text style={css.text}>Feedback: Você será notificado sobre a decisão da moderação através do e-mail cadastrado.</Text>
                </View>

                <View style={css.subtitulobox}>
                    <Text style={css.subtitulotext}>Formulário de Denúncia</Text>
                </View>
                <Text style={css.text}>Por favor, preencha as informações abaixo para que possamos analisar sua denúncia:</Text>

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
                </View>

                <View style={css.topic}>
                    <Text style={css.bullet}>1 - </Text>
                    <Text style={css.perg}>Qual o tipo de violação?</Text>
                </View>

                <View style={css.Boxcheck}>
                    <Pressable style={[css.check, { backgroundColor: checkbox1 ? "#7C25AE" : "#F4F4F4" }]} onPress={() => setCheckbx1(current => !current)} />
                    <Text style={css.Boxchecktext}>Comportamento abusivo ou ofensivo</Text>
                </View>

                <View style={css.Boxcheck}>
                    <Pressable style={[css.check, { backgroundColor: checkbox2 ? "#7C25AE" : "#F4F4F4" }]} onPress={() => setCheckbx2(current => !current)} />
                    <Text style={css.Boxchecktext}>Discurso de ódio</Text>
                </View>

                <View style={css.Boxcheck}>
                    <Pressable style={[css.check, { backgroundColor: checkbox3 ? "#7C25AE" : "#F4F4F4" }]} onPress={() => setCheckbx3(current => !current)} />
                    <Text style={css.Boxchecktext}>Spam ou publicidade indesejada</Text>
                </View>

                <View style={css.Boxcheck}>
                    <Pressable style={[css.check, { backgroundColor: checkbox4 ? "#7C25AE" : "#F4F4F4" }]} onPress={() => setCheckbx4(current => !current)} />
                    <Text style={css.Boxchecktext}>Compartilhamento de conteúdo impróprio</Text>
                </View>

                <View style={css.Boxcheck}>
                    <Pressable style={[css.check, { backgroundColor: checkbox5 ? "#7C25AE" : "#F4F4F4" }]} onPress={() => setCheckbx5(current => !current)} />
                    <Text style={css.Boxchecktext}>Violação de direitos autorais</Text>
                </View>

                <View style={css.Boxcheck}>
                    <Pressable style={[css.check, { backgroundColor: checkbox6 ? "#7C25AE" : "#F4F4F4" }]} onPress={() => setCheckbx6(current => !current)} />
                    <Text style={css.Boxchecktext}>Outro (especificar)</Text>
                </View>

                {checkbox6 && (
                    <TextInput
                        style={css.input}
                        placeholder="Especifique a violação"
                        value={outro}
                        onChangeText={setOutro}
                    />
                )}

                <Text style={css.text}>Descrição detalhada do ocorrido:</Text>
                <TextInput
                    style={css.input}
                    placeholder="Descreva o ocorrido"
                    value={descricao}
                    onChangeText={setDescricao}
                />

                <View style={css.topic}>
                    <Text style={css.bullet}>3 - </Text>
                    <Text style={css.perg}>Anexe provas (opcional):</Text>
                </View>
                <TextInput style={css.input} placeholder="Anexar provas (opcional)" />

                <View style={css.topic}>
                    <Text style={css.bullet}>4 - </Text>
                    <Text style={css.perg}>Comunidade:</Text>
                </View>
                <Select data={comunidades} setComunidade={setComunidade} />

                <Text style={css.text}>E-mail para contato:</Text>
                <TextInput
                    style={css.input}
                    placeholder="Seu e-mail"
                    value={email}
                    onChangeText={setEmail}
                />

                <TouchableOpacity style={css.btn} onPress={enviarDenuncia}>
                    <Text style={css.btntext}>Enviar Denúncia</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
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
        marginTop: 5,
        marginBottom: 8
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
        marginTop: 10,
    },
    boxinfo: {
        width: "100%",
        height: 215,
        backgroundColor: "#e6d3ef",
        marginTop: 10,
        alignItems: "center",
        borderRadius: 5
    },
    infotitle: {
        textAlign: "center",
        fontSize: 18,
        marginTop: 5,
        fontWeight: "bold"
    },
    check: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: "#7C25AE",
        borderRadius: 5
    },
    Boxcheck: {
        display: "flex",
        flexDirection: "row",
        columnGap: 8,
        marginBottom: 10
    },
    Boxchecktext: {
        fontSize: 16,
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
    input: {
        width: "100%",
        height: 50,
        borderBottomWidth: 3,
        borderBottomColor: "#7C25AE",
        borderRadius: 8,
        backgroundColor: "#ebebeb",
        fontSize: 18,
        padding: 6,
        marginTop: 10
    },
    btn: {
        width: "100%",
        height: 60,
        backgroundColor: "#7C25AE",
        marginTop: 20,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"

    },
    btntext: {
        color: "white",
        fontSize: 22
    }



})

import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, TouchableOpacity, View, Alert, Image, Platform, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';


export default function Cadastro({ setCadastro }) {
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [apelido, setApelido] = useState("");
    const [data, setData] = useState(null);
    const [senha, setSenha] = useState("");
    const [fotoPerfil, setFotoPerfil] = useState("");
    const [showDatePicker, setShowDatePicker] = useState(false);


    const formatDate = (date) => dayjs(date).format("DD/MM/YYYY");

    const onDateChange = (event, selectedDate) => {
        setShowDatePicker(false);
        if (selectedDate) {
            setData(selectedDate);
        }
    };

    async function Cadastrar() {
        if (!nome.trim() || !email.trim() || !senha.trim() || !confirmarSenha.trim()) {
            Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios.");
            return;
        }
        const fotoPerfilPadrao = "https://static.vecteezy.com/ti/vetor-gratis/p1/20765399-padrao-perfil-conta-desconhecido-icone-preto-silhueta-gratis-vetor.jpg";
        if (senha === confirmarSenha) {
            const fotoParaSalvar = fotoPerfil.trim() !== "" ? fotoPerfil : fotoPerfilPadrao;

            console.log("Dados de cadastro:", { nome, email, apelido, data, senha, fotoPerfil: fotoParaSalvar });
            await fetch('http://10.133.22.12:5251/api/Usuario/CreateUsuario', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    UsuarioNome: nome,
                    UsuarioEmail: email,
                    UsuarioFoto: fotoParaSalvar,
                    UsuarioApelido: apelido,
                    UsuarioDataNascimento: data,
                    UsuarioSenha: senha,
                    usuarioConfirmarSenha: senha
                }),
            })
                .then((res) => res.json())
                .then((json) => {
                    if (json.usuarioId) {
                        setCadastro(true)
                        Alert.alert("Sucesso", "Cadastro concluido com sucesso!");
                    }
                })
                .catch((err) => console.log(err));
        } else {
            Alert.alert("Erro", "As senhas não coincidem.");
        }
    }

    function Voltar() {
        setCadastro(false);
    }

    return (
        <ScrollView contentContainerStyle={css.scrollViewContainer}>
            <View style={css.View}>
                <Image source={require("../../assets/Logo-login.png")} style={css.imagemLogin} />
                <View style={css.boxCadastro}>
                    <Text style={css.title}>Junte-se ao Oráculo!</Text>
                    <TextInput
                        style={css.input}
                        placeholder="Nome"
                        placeholderTextColor="#000"
                        onChangeText={setNome}
                        value={nome}
                    />
                    <TextInput
                        style={css.input}
                        placeholder="Apelido (opcional)"
                        placeholderTextColor="#000"
                        onChangeText={setApelido}
                        value={apelido}
                    />
                    <TextInput
                        style={css.input}
                        placeholder="URL da Foto de Perfil (opcional)"
                        placeholderTextColor="#000"
                        onChangeText={setFotoPerfil}
                        value={fotoPerfil}
                    />
                    <TextInput
                        style={css.input}
                        placeholder="Email"
                        placeholderTextColor="#000"
                        onChangeText={setEmail}
                        value={email}
                    />
                    <TouchableOpacity style={css.input} onPress={() => setShowDatePicker(true)}>
                        <Text style={{ color: data ? "#000" : "#aaa" }}>
                            {data ? formatDate(data) : "Data de Nascimento"}
                        </Text>
                    </TouchableOpacity>
                    {showDatePicker && (
                        <DateTimePicker
                            value={data || new Date()} // Usa a data atual como fallback
                            mode="date"
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                            onChange={onDateChange}
                        />
                    )}
                    <TextInput
                        style={css.input}
                        placeholder="Senha"
                        placeholderTextColor="#000"
                        secureTextEntry
                        onChangeText={setSenha}
                        value={senha}
                    />
                    <TextInput
                        style={css.input}
                        placeholder="Confirmar Senha"
                        placeholderTextColor="#000"
                        secureTextEntry
                        onChangeText={setConfirmarSenha}
                        value={confirmarSenha}
                    />
                    <TouchableOpacity style={css.buttonCadastro} onPress={Cadastrar}>
                        <Text style={css.textCadastro}>Cadastrar-se</Text>
                    </TouchableOpacity>
                    <View style={css.boxLogin}>
                        <Text style={css.LoginTrueText}>Já possui uma conta?</Text>
                        <TouchableOpacity style={css.buttonLogin} onPress={Voltar}>
                            <Text style={css.textLogar}>Logar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const css = StyleSheet.create({
    View: {
        flexGrow: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
    },
    scrollViewContainer: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    title: {
        fontSize: 17,
        color: '#9347B7',
        fontWeight: 'bold',
        marginTop: 10,
    },
    input: {
        width: '90%',
        height: 45,
        marginTop: 25,
        padding: 10,
        borderRadius: 3,
        backgroundColor: 'rgba(219, 219, 219, 0.37)',
        borderColor: '#8E44AD',
        opacity: 0.5,
        borderWidth: 0,
        borderBottomWidth: 1,
    },
    boxCadastro: {
        width: '87%',
        height: 630,
        borderRadius: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.19)',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 160,
        borderColor: "#8E44AD",
        borderWidth: 1.5,
    },
    imgLogo: {
        resizeMode: 'contain',
        width: 700,
        height: 100,
    },
    buttonCadastro: {
        width: "90%",
        height: 40,
        backgroundColor: "#bb1cff",
        alignItems: 'center',
        justifyContent: 'center',
        margin: 18,
        borderRadius: 3,
    },
    textCadastro: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    boxLogin: {
        flexDirection: 'row',
        gap: 8
    },
    buttonLogin: {
        height: 21,
        borderBottomWidth: 0.5,
        borderColor: '#CC02DE',
    },
    textLogar: {
        color: '#B221BE',
        fontWeight: 'bold',
        fontSize: 16,
    },
    imagem: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
    },
    imagemLogin: {
        width: '43%',
        height: '23%',
        position: 'absolute',
        top: '0%',
    }
});

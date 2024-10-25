import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, TouchableOpacity, View, Image, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

export default function Cadastro({ setLogado, setCadastro }) {

    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [cadastroConcluido, setCadastroConcluido] = useState(true);

    function Cadastrar() {
        if (senha == confirmarSenha) {
            setCadastro(false);
            setLogado(true);
            alert('Cadastro concluído com sucesso!');
        } else {
            alert('As senhas não coincidem!');
        }
        setCadastro(true);
    }

    function Voltar() {
        setCadastro(false);
        setLogado(false);

    }
    return (
        <View style={css.View}>
            <Image source={require("../../assets/gradienteApp.jpg")} style={css.imagem} />
            <Image source={require("../../assets/Logo-login.png")} style={css.imagemLogin} />
            <View style={css.boxCadastro}>
            <Text style={css.title} >Junte-se ao Oráculo!</Text>
                <TextInput
                    style={css.input}
                    placeholder="Nome"
                    require
                />
                <TextInput
                    style={css.input}
                    placeholder="Apelido (opcional)"
                />
                <TextInput
                    style={css.input}
                    placeholder="Email"
                    require
                />
                <TextInput
                    style={css.input}
                    placeholder="Data de Nascimento"
                    require
                />
                <TextInput
                    style={css.input}
                    placeholder="Senha"
                    onChangeText={(digitado) => setSenha(digitado)}
                    require
                />
                <TextInput
                    style={css.input}
                    placeholder="Confirmar Senha"
                    onChangeText={(digitado) => setConfirmarSenha(digitado)}
                    require
                />
                <TouchableOpacity style={css.buttonCadastro} onPress={Cadastrar}>
                    <Text style={css.textCadastro} >Cadastrar-se</Text>
                </TouchableOpacity>
                <View style={css.boxLogin}>
                    <Text style={css.LoginTrueText}>Já tem uma conta?</Text>
                    <TouchableOpacity style={css.buttonLogin} onPress={Voltar}>
                        <Text style={css.textLogar}>Logar</Text>
                    </TouchableOpacity>
                </View>
            </View>



        </View>
    )
}

const css = StyleSheet.create({
    View: {
        flexGrow: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
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
        borderWidth: 1,
        marginTop: 25,
        padding: 10,
        borderRadius: 3,
        borderColor: '#8E44AD',
        backgroundColor: '#ffff',
        opacity: 0.5,
        borderWidth: 0,
        borderBottomWidth: 1,
    },
    boxCadastro: {
        width: '87%',
        height: 570,
        borderRadius: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.19)',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 160
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
        margin: 20,
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
        borderColor: '#CC02DE'
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
    LoginTrueText: {
        color: "white"
    },
    imagemLogin: {
        width: '45%',
        height: '25%',
        position: 'absolute',
        top: '2%',
        zIndex: 2,
    }
});

import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';

export default function Login({ setCadastro, setLogado }) {


    const [email, setEmail] = useState(false);
    const [senha, setSenha] = useState(false);

    const { Login, error } = useContext(AuthContext);

    function RealizaLogin() {
        Login(email, senha);
    }

    function Cadastrar() {
        setCadastro(true);
    }

    return (
        <ScrollView contentContainerStyle={css.container}>
            <Image source={require("../../assets/Logo-login.jpg")} style={css.imagemLogin} />
            <Image source={require("../../assets/gradienteApp.jpg")} style={css.imagem} />
            <View style={css.box}>
                <TextInput
                    inputMode="email"
                    placeholder="Email"
                    style={css.input}
                    value={email}
                    onChangeText={(digitado) => setEmail(digitado)}
                    placeholderTextColor="#686D76"
                    require
                />
                <TextInput
                    inputMode="text"
                    placeholder="Senha"
                    secureTextEntry={true}
                    style={css.input}
                    value={senha}
                    onChangeText={(digitado) => setSenha(digitado)}
                    placeholderTextColor="#686D76"
                    require
                />
                <View style={css.esqueciSenha}>
                    <Text style={css.esqueciSenhaText}>Esqueci minha senha!</Text>
                </View>
                <TouchableOpacity style={css.btnLogin} onPress={RealizaLogin}>
                    <Text style={css.btnLoginText}>LOGAR</Text>
                </TouchableOpacity>
                <View style={css.semCadastro}>
                    <Text style={css.semCadastroText}>Ainda não tem uma conta?</Text>
                    <TouchableOpacity onPress={Cadastrar}>
                        <Text style={css.cadastroText}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
                {error &&
                    <View style={css.error}>
                        <Text style={css.errorText}>Revise os campos. Tente novamente!</Text>
                    </View>
                }

            </View>
        </ScrollView>
    )
}
const css = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
    },
    imagem: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
    },
    input: {
        width: '90%',
        height: 45,
        marginTop: 25,
        padding: 10,
        borderRadius: 3,
        borderColor: '#8E44AD',
        backgroundColor: '#ffff',
        opacity: 0.5,
        borderWidth: 0,
        borderBottomWidth: 1,
    },
    semCadastro: {
        width: "90%",
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        gap: 8

    },
    semCadastroText: {
        color: "white",
        display: "flex",
        flexDirection: "row",
    },
    cadastroText: {
        color: "#9f00b4",
        fontWeight: "bold",
    },
    btnLogin: {
        width: "90%",
        height: 40,
        backgroundColor: "#bb1cff",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        borderRadius: 3,
    },
    btnLoginText: {
        color: "white",
        lineHeight: 45,
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold"
    },
    error: {
        width: "100%",
        height: 50,
        marginTop: 30
    },
    errorText: {
        color: "white",
        textAlign: "center"
    },
    esqueciSenha: {
        width: "90%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    esqueciSenhaText: {
        color: "#FFD124",
        fontWeight: "bold",
    },
    box: {
        width: "80%",
        backgroundColor: 'rgba(255, 255, 255, 0.19)',
        justifyContent: "center",
        alignItems: "center",
        height: 460,
        borderRadius: 10,
    },
    esqueciSenha: {
        width: "90%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    esqueciSenhaText: {
        color: "#9900ad",
        fontWeight: "bold",
    },
    imagemLogin: {
        width: '45%',
        height: '25%',
        zIndex: 2,
    }
});
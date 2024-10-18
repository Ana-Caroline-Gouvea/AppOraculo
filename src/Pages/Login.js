import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';

export default function Login({setCadastro, setLogado}) {


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
            <View style={css.box}>
                {/* <Image source={require("../../assets/img/iCompass-logocomp.png")} style={css.logo} /> */}
                <TextInput
                    inputMode="email"
                    placeholder="Email"
                    style={css.input}
                    value={email}
                    onChangeText={(digitado) => setEmail(digitado)}
                    placeholderTextColor="#686D76"
                />
                <TextInput
                    inputMode="text"
                    placeholder="Password"
                    secureTextEntry={true}
                    style={css.input}
                    value={senha}
                    onChangeText={(digitado) => setSenha(digitado)}
                    placeholderTextColor="#686D76"
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
        backgroundColor: "#191919"
    },
    logo: {
        width: "60%",
        resizeMode: "contain"
    },
    input: {
        width: "90%",
        height: 50,
        borderRadius: 10,
        marginBottom: 18,
        marginBottom: 18,
        padding: 15,
        backgroundColor: "white",
        color: "black",
        backgroundColor: "white",
        color: "black",
    },
    semCadastro: {
        width: "90%",
        marginTop: 10,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "row",
        gap: 40

    },
    semCadastroText: {
        color: "white",
        fontWeight: "bold",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "row",
        gap: 40

    },
    semCadastroText: {
        color: "white",
        fontWeight: "bold",
    },
    cadastroText: {
        color: "#FF59B2",
        fontWeight: "bold",
    },
    btnLogin: {
        width: "90%",
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 45,
        backgroundColor: "#FF59B2",
        marginTop: 45,
        backgroundColor: "#FF59B2"
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
    box: {
        width: "80%",
        backgroundColor: "#232323",
        justifyContent: "center",
        alignItems: "center",
        height: 460,
        borderColor: "#FFD124",
        borderWidth: 2,
        borderRadius: 15,
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
        backgroundColor: "#232323",
        justifyContent: "center",
        alignItems: "center",
        height: 460,
        borderColor: "#FFD124",
        borderWidth: 2,
        borderRadius: 15,
    },
    esqueciSenha: {
        width: "90%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    esqueciSenhaText: {
        color: "#FFD124",
        fontWeight: "bold",
    }
});
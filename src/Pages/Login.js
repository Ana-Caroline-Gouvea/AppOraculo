import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet, Alert } from 'react-native';
import React, { useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importar o AsyncStorage
import { AuthContext } from '../Context/AuthContext';

export default function Login({ setCadastro }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const { Login, error } = useContext(AuthContext);

    async function RealizaLogin() {
        if (!email.trim() || !senha.trim()) {
            Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios.");
            return;
        }
        try {
            const userData = await Login(email, senha); 
            if (userData && userData.usuarioId) {
                await AsyncStorage.setItem('userId', userData.usuarioId.toString());
                console.log('Login realizado com sucesso. ID salvo:', userData.usuarioId);
            }
        } catch (error) {
            console.error('Erro ao realizar login:', error);
        }
    }

    function Cadastrar() {
        setCadastro(true);
    }

    return (
        <ScrollView contentContainerStyle={css.scrollViewContainer}>
            <Image source={require('../../assets/Logo-login.png')} style={css.imagemLogin} />
            <View style={css.box}>
                <TextInput
                    inputMode="email"
                    placeholder="Email"
                    style={css.input}
                    value={email}
                    onChangeText={(digitado) => setEmail(digitado)}
                    placeholderTextColor="#000"
                />
                <TextInput
                    inputMode="text"
                    placeholder="Senha"
                    secureTextEntry={true}
                    style={css.input}
                    value={senha}
                    onChangeText={(digitado) => setSenha(digitado)}
                    placeholderTextColor="#000"
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
                {error && (
                    <View style={css.error}>
                        <Text style={css.errorText}>Revise os campos. Tente novamente!</Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
}

const css = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
    },
    imagemLogin: {
        width: '45%',
        height: '25%',
        zIndex: 2,
    },
    box: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 395,
        borderRadius: 10,
        borderColor: '#8E44AD',
        borderWidth: 2,
    },
    input: {
        width: '90%',
        height: 45,
        marginTop: 25,
        padding: 10,
        borderRadius: 3,
        borderColor: '#8E44AD',
        backgroundColor: 'rgba(219, 219, 219, 0.7)',
        opacity: 0.5,
        borderWidth: 0,
        borderBottomWidth: 2.5,
    },
    esqueciSenha: {
        width: '90%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    esqueciSenhaText: {
        color: '#9900ad',
        fontWeight: 'bold',
    },
    btnLogin: {
        width: '90%',
        height: 40,
        backgroundColor: '#bb1cff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        borderRadius: 3,
    },
    btnLoginText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },
    semCadastro: {
        width: '90%',
        marginTop: 10,
        flexDirection: 'row',
    },
    semCadastroText: {
        color: 'black',
    },
    cadastroText: {
        color: '#9f00b4',
        fontWeight: 'bold',
    },
    error: {
        width: '100%',
        height: 50,
        marginTop: 30,
    },
    errorText: {
        color: 'black',
        textAlign: 'center',
    },
});

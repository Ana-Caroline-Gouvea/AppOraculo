import React, { useState } from 'react'
import { Text, TextInput, StyleSheet, TouchableOpacity, View, Image, Keyboard } from 'react-native'

export default function Cadastro({ setLogado, setCadastro}) {

    const[ senha, setSenha ] = useState("");
    const[ confirmarSenha, setConfirmarSenha] = useState("");
    const[ cadastroConcluido, setCadastroConcluido ] = useState(true);

    function Cadastrar() {
        if( senha == confirmarSenha) {
            setCadastro(false);
            setLogado(false);
            alert('Cadastro concluído com sucesso!');
        } else {
            alert('As senhas não coincidem!');
          }
        setCadastro( true );
    }

    function Voltar() {
        setCadastro( false );
        setLogado( false ); 
        
    }
  return (
    <View style={css.View}>
        <View style={css.boxCadastro}>
            <View style={css.boxImg}>
                {/* <Image style={css.imgLogo} source={ require ('../assets/violeta-logo.png')}/> */}
            </View>
            <Text style={css.title}>Cadastro</Text>
        <TextInput 
            style={css.input}
            placeholder="nome"
            />
            <TextInput 
            style={css.input}
            placeholder="email"
            />
            <TextInput 
            style={css.input}
            placeholder="CPF"
            />
            <TextInput 
            style={css.input}
            placeholder="senha"
            onChangeText={ (digitado) => setSenha(digitado)}
            />
            <TextInput
            style={css.input}
            placeholder="confirmar senha"
            onChangeText={ (digitado) => setConfirmarSenha(digitado)}
            />
            <TouchableOpacity style={css.buttonCadastro} onPress={Cadastrar}>
                <Text style={css.textCadastro} >Cadastrar-se</Text>
            </TouchableOpacity>
            <View style={css.boxLogin}>
                <Text>Já tem uma conta?</Text>
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
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        width: 350,
        height: 600,
        backgroundColor: "#F1CEFF",
        borderRadius: 15,
        borderColor: '#DC4EFF',
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgLogo: {
        resizeMode: 'contain',
        width:  700,
        height: 100,
    },
    boxImg: {
        width: '72%',
        height: 60,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonCadastro: {
        width: "90%",
        height: 40,
        backgroundColor: '#D87CFF',
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
    },
    buttonLogin: {
        height: 21,
        borderBottomWidth: 0.5,
        borderColor: '#CC02DE'
    },
    textLogar: {
        color: '#B221BE',
        fontSize: 16,
    }
})

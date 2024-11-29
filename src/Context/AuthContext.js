import { createContext, useState, useEffect } from "react";
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext(0);

function AuthProvider({ children }) {

    const [logado, setLogado] = useState(false); 
    const [error, setError] = useState(false); 
    const [page, setPage] = useState();
    const [usuario, setUsuario] = useState();


    // Função de Login
    async function Login(email, senha) {
        if (email !== "" && senha !== "") {
            try {

                const response = await fetch('http://10.133.22.6:5251/api/Usuario/LoginUsuario', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        usuarioEmail: email,
                        usuarioSenha: senha,
                    }),
                });

                if (!response.ok) {
                    throw new Error(`Erro na resposta da API. Status: ${response.status}`);
                }

                const responseText = await response.text(); // Obtém a resposta como texto
                console.log("Resposta da API como texto:", responseText);

                if (responseText.trim() === "") {
                    throw new Error('Resposta vazia da API');
                }

                let json;
                try {
                    json = JSON.parse(responseText); // Converte o texto para JSON
                    console.log("Resposta JSON da API:", json);
                } catch (parseError) {
                    console.error('Erro ao fazer o parse do JSON:', parseError);
                    setError(true);
                    Alert.alert('Erro', 'A resposta da API não está no formato correto.');
                    return null;
                }

                // Verifica se o JSON contém um ID válido do usuário
                if (json && json.usuarioId) {
                    setUsuario( json );
                    setLogado(true); // Se o ID do usuário for válido, define 'logado' como true
                    setError(false); // Reseta o estado de erro
                    await AsyncStorage.setItem('userId', json.usuarioId.toString()); // Armazena o ID no AsyncStorage
                    console.log("Login bem-sucedido! ID do usuário salvo:", json.usuarioId);
                    return json; // Retorna o JSON com o usuário
                } else {
                    console.log("Erro: O JSON não contém o ID do usuário.");
                    setLogado(false); // Se não tiver ID válido, define 'logado' como false
                    setError(true); // Define erro como true
                    Alert.alert('Erro', 'Ocorreu um erro no login. Tente novamente.');
                    return null;
                }
            } catch (error) {
                console.error("Erro ao fazer login:", error);
                setError(true); // Marca erro como true em caso de falha
                Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login. Tente novamente.');
                return null;
            }
        } else {
            setError(true); // Marca erro como true caso o e-mail ou senha estejam vazios
            Alert.alert('Erro', 'Por favor, insira um e-mail e uma senha.');
            return null;
        }
    }

    return (
        <AuthContext.Provider value={{ logado, Login, error, page: page, setPage: setPage, usuario: usuario, setUsuario: setUsuario }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

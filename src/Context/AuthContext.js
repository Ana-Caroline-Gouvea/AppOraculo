import { createContext, useState } from "react";
import { Alert } from 'react-native';

export const AuthContext = createContext(0);

function AuthProvider({ children }) {
    const [logado, setLogado] = useState(true);
    const [error, setError] = useState(false);

    async function Login(email, senha) {

        if (email != "" && senha != "") {
            await fetch('http://10.133.22.18:5251/api/Usuario/LoginUsuario', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    usuarioEmail: email,
                    usuarioSenha: senha
                })
            })
                .then(res => res.json())
                .then(json => {
                    console.log(json );
                    if( json.usuarioId ) {
                        setLogado(true)
                    } else {
                        setLogado(false)
                        Alert.alert("Error", "Email ou senha incorretos! Por favor, verifique os dados.");
                    }
                }
                )
                .catch(err => setError(true))
        } else {
            setError(true)
        }
    }

    return (
        <AuthContext.Provider value={{ logado: logado, Login, error: error }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
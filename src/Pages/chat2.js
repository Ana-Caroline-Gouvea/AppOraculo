import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importar o AsyncStorage
import io from 'socket.io-client';

export default function Chat() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const socket = useRef(null); // Usando `useRef` para manter a mesma instância de socket

    // Função para buscar os dados do usuário logado
    async function getUsuario() {
        try {
            // Recuperar o ID do usuário do AsyncStorage
            const userId = await AsyncStorage.getItem('userId');
            if (!userId) {
                console.error("Usuário não encontrado no armazenamento local");
                return;
            }

            // Requisição para buscar os dados do usuário
            const response = await fetch(`http://10.133.22.12:5251/api/Usuario/GetUsuarioId/${userId}`);
            const data = await response.json();

            // Verificar e atualizar os estados com os dados do usuário
            console.log("Dados do usuário carregados:", data);
            setUsername(data.usuarioNome && data.usuarioNome.trim() ? data.usuarioNome : 'Usuário');
            setProfilePic(data.usuarioFoto && data.usuarioFoto.trim() ? data.usuarioFoto : '');
        } catch (error) {
            console.error("Erro ao buscar dados do usuário:", error);
        }
    }

    useEffect(() => {
        getUsuario(); // Carrega os dados do usuário ao abrir o chat
    }, []);

    useEffect(() => {
        // Criação da instância do socket

        socket.current = io('http://10.133.22.16:3000');

        socket.current.on('connect', () => {
            console.log('Conectado ao servidor');
        });

        // Recebendo mensagens do servidor e adicionando ao estado
        socket.current.on('chat message', (msg) => {
            setMessages((prevMessages) => {
                // Verifica se a mensagem já existe antes de adicioná-la
                const exists = prevMessages.some(
                    (m) =>
                        m.UsuarioNome === msg.UsuarioNome &&
                        m.message === msg.message &&
                        m.profilePic === msg.profilePic
                );
                if (!exists) {
                    return [...prevMessages, msg];
                }
                return prevMessages;
            });
        });

        socket.current.on('disconnect', () => {
            console.log('Desconectado do servidor');
        });

        return () => {
            socket.current.disconnect();
        };
    }, []);

    const handleSendMessage = () => {
        if (message.trim()) {
            const msg = {
                usuarioNome: username,
                message: message,
                profilePic: profilePic,
            };

            socket.current.emit('chat message', msg);
            setMessage('');
            setMessages((prevMessages) => [...prevMessages, msg]); // Adiciona a mensagem localmente também
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Chat Interativo</Text>
            <FlatList
                data={messages}
                renderItem={({ item }) => (
                    <View style={styles.messageContainer}>
                        {item.profilePic && (
                            <Image
                                source={{ uri: item.profilePic }}
                                style={styles.userImage}
                            />
                        )}
                        <View style={styles.messageContent}>
                            <Text style={styles.userName}>{item.usuarioNome}</Text>
                            <Text style={styles.messageText}>{item.message}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.messagesList}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    value={message}
                    onChangeText={setMessage}
                    placeholder="Digite uma mensagem"
                    placeholderTextColor="#D1C4E9"
                    style={styles.input}
                />
                <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
                    <Text style={styles.sendButtonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#FFFFFF',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#8E44AD',
        marginBottom: 20,
    },
    messagesList: {
        flexGrow: 1,
        paddingBottom: 16,
    },
    messageContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginVertical: 8,
        padding: 12,
        borderRadius: 12,
        backgroundColor: '#EFEFEF',
        shadowColor: '#8E44AD',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#8E44AD',
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 30,
        marginRight: 8,
        marginLeft: -8,
        borderWidth: 2,
        borderColor: '#8E44AD',
    },
    messageContent: {
        flex: 1,
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#4A148C',
        marginBottom: 4,
        marginTop: -4,
    },
    messageText: {
        fontSize: 16,
        color: '#333',
        lineHeight: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F3E5F5',
        borderRadius: 30,
        paddingVertical: 12,
        paddingHorizontal: 15,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#8E44AD',
        shadowColor: '#8E44AD',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        marginRight: 10,
        color: '#4A148C',
        borderColor: '#8E44AD',
        borderWidth: 1,
    },
    sendButton: {
        backgroundColor: '#8E44AD',
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    sendButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

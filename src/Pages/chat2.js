import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import io from 'socket.io-client';

export default function Chat() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const socket = useRef(null); // Usando `useRef` para manter a mesma instância de socket

    // Função para buscar os dados do usuário
    async function getUsuario() {
        try {
            const response = await fetch("http://10.133.22.12:5251/api/Usuario/GetUsuarioId/4");
            const data = await response.json();

            // Exibindo os dados da API no console para verificar o conteúdo
            console.log("Dados do usuário carregados:", data);

            // Verificando se os campos realmente possuem valores válidos
            setUsername(data.usuarioNome && data.usuarioNome.trim() ? data.usuarioNome : 'Usuário');
            setProfilePic(data.usuarioFoto && data.usuarioFoto.trim() ? data.usuarioFoto : '');
        } catch (error) {
            console.error("Erro ao buscar dados do usuário:", error);
        }
    }

    useEffect(() => {
        getUsuario(); // Carrega o usuário ao abrir o chat
    }, []);

    useEffect(() => {
        // Criação da instância do socket
        socket.current = io('http://10.133.22.12:3000');

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
        flexDirection: 'row', // Alinha a imagem e o conteúdo horizontalmente
        alignItems: 'flex-start', // Mantém a imagem alinhada ao topo do conteúdo
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
        width: 50, // Aumentando o tamanho da imagem
        height: 50,
        borderRadius: 30,
        marginRight: 8, // Reduzindo o espaçamento entre a imagem e o texto
        marginLeft: -8, // Movendo a imagem para a esquerda
        borderWidth: 2,
        borderColor: '#8E44AD',
    },
    messageContent: {
        flex: 1, // O texto ocupa o restante do espaço
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 18, // Aumentando o tamanho do nome
        color: '#4A148C',
        marginBottom: 4, // Espaçamento entre o nome e a mensagem
        marginTop: -4, // Movendo o nome para cima
    },
    messageText: {
        fontSize: 16, // Fonte maior para facilitar a leitura
        color: '#333',
        lineHeight: 20, // Linha mais espaçada para clareza
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
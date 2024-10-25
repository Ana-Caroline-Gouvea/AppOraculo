import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Image } from 'react-native';
import io from 'socket.io-client';

export default function Chat({foto}) {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState('vitor'); // Armazena o nome do usuário
    const [profilePic, setProfilePic] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5BSEPxHF0-PRxJlVMHla55wvcxWdSi8RU2g&s'); // Armazena a URL da imagem do perfil

    
    
    // Substitua pelo IP da máquina que está executando o servidor
    const socket = io('http://10.133.22.12:3000');

    useEffect(() => {
        // Conectar ao servidor
        socket.on('connect', () => {
            console.log('Conectado ao servidor');
        });

        // Receber mensagem do servidor
        socket.on('chat message', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        // Log de desconexão
        socket.on('disconnect', () => {
            console.log('Desconectado do servidor');
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const handleSendMessage = () => {
        if (message.trim()) {
            const msg = {
                name: username,  // Usa o nome do usuário armazenado
                message: message,
                profilePic: profilePic  // Usa a URL da imagem do perfil
            };
            socket.emit('chat message', msg);
            setMessage('');
        }
    };

    return (
        <View>
            <Text>Chat Interativo</Text>
            <FlatList
                data={messages}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                        {item.profilePic && <Image source={{ uri: item.profilePic }} style={{ width: 30, height: 30, borderRadius: 15, marginRight: 10 }} />}
                        <View>
                            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                            <Text>{item.message}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            <TextInput
                value={message}
                onChangeText={setMessage}
                placeholder="Digite uma mensagem"
            />
            <Button title="Enviar" onPress={handleSendMessage} />
        </View>
    );
}

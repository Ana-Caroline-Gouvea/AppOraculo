import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import io from 'socket.io-client';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Animated } from 'react-native';

export default function Chat() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [username, setUsername] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [infractions, setInfractions] = useState({});
    const [countdown, setCountdown] = useState(0);
    const countdownRef = useRef(null);
    const progressWidth = useRef(new Animated.Value(0)).current;
    
    const socket = useRef(null);
    const forbiddenWords = [ 'cu', 'pau', 'merda', 'porra', 'caralho', 'buceta', 'vagabundo', 'otário', 'idiota', 
        'burro', 'puta', 'desgraçado', 'cuzão', 'foder', 'cacete', 'piranha', 'arrombado', 
        'filho da puta', 'corno', 'desgraça', 'viado', 'bosta', 'imbecil', 'marrento', 
        'cretino', 'escroto', 'bagunça', 'palhaço', 'babaca', 'puto', 'filha da puta', 'caralhudo', 
        'cuspe', 'foderoso', 'vagabunda', 'putona', 'cachorra', 'pu**', 'safado', 'focinho', 'safada', 
        'bichona', 'putinha', 'xarope', 'gordo', 'caloteiro', 'vagabundagem', 'perdedor', 'amigo do capeta', 
        'baixaria', 'meretriz', 'vagabundo', 'arreganhado', 'fuleiro', 'lixo', 'babaquice', 'desprezível', 
        'quenga', 'cuspiu', 'bando de imbecis', 'lixo humano', 'farsante', 'vadio', 'esquizofrênico', 
        'feio', 'asno', 'burro', 'horrível', 'desprezível', 'desqualificado', 'clown', 'hipócrita', 'pestilento', 
        'bando de bêbado', 'traste', 'infeliz', 'canalha', 'rasteiro', 'preconceituoso', 'patético', 'bichinho', 
        'osso', 'escória', 'pedófilo', 'mané', 'gaton', 'baixote', 'pesado', 'pau mole', 'escroto', 'depravado', 
        'chupador', 'putão', 'bicho', 'goela', 'radical', 'foda-se', 'pessima', 'burlador', 'maldoso', 'gordofóbico', 
        'conduto', 'peidão', 'diabólico', 'cheiroso', 'avassalador', 'batata', 'baleia', 'palmeirense', 'bafuda', 
        'muleke', 'mamileiro', 'bichudo', 'pente', 'tenebroso', 'narcisista', 'magoado', 'caçador', 'camaleão', 
        'batoteiro', 'irritante', 'petulante', 'idiota', 'verme', 'criado', 'monstro', 'fake', 'fantasma', 
        'idiotice', 'bumbum', 'pegador', 'horroroso', 'cabelo', 'bosteta', 'miado', 'sonso', 'demônio', 'fedorento', 
        'geringonça', 'desprezível', 'destruidor', 'ladrão', 'safadinho', 'cachorrão', 'vagabundão', 'palavrão', 
        'pecado', 'racista', 'absurdo', 'filho de rapariga', 'falta de respeito', 'pegador', 'portátil', 'antiquado', 
        'maricas', 'desolado', 'agressor', 'cúmulo', 'desolado', 'puxa saco', 'bunda mole', 'doente', 'inferior', 
        'sujo', 'chaveiro', 'baderneiro', 'mentiroso', 'mentirosos', 'governante', 'pesado', 'descomunal', 
        'improvisado', 'bobalhão', 'desapontado', 'gordo', 'absurdista', 'ganhador', 'hipócrita', 'pessimista', 
        'indefinido', 'grilhoso', 'pesquisador', 'maledeto', 'zumbi', 'bicho', 'insano', 'goleador', 'piriguete', 
        'corrupto', 'abobado', 'boquinha', 'babão', 'arrogante', 'filha da mãe', 'troglodita', 'idiotice', 'desprezível', 
        'bicharada', 'sujo', 'depravado', 'molenga', 'cavalo', 'hiena', 'demente', 'mentira', 'sem vergonha', 'zumbi', 
        'sujo', 'traste', 'lixo', 'maçã podre', 'perdedor', 'sombra', 'apelão', 'esfomeado', 'arrogante', 'negligente', 
        'desaprovado', 'arrebentador', 'caluniador', 'falador', 'pau no cu', 'maricón', 'acabado'];  // Sua lista de palavras proibidas.
    
    const flatListRef = useRef(null);  // Referência para o FlatList

    async function getUsuario() {
        try {
            const userId = await AsyncStorage.getItem('userId');
            if (!userId) {
                console.error("Usuário não encontrado no armazenamento local");
                return;
            }

            // Requisição para buscar os dados do usuário
            const response = await fetch(`http://10.133.22.18:5251/api/Usuario/GetUsuarioId/${userId}`);
            const data = await response.json();

            setUsername(data.usuarioNome && data.usuarioNome.trim() ? data.usuarioNome : 'Usuário');
            setProfilePic(data.usuarioFoto && data.usuarioFoto.trim() ? data.usuarioFoto : '');
        } catch (error) {
            console.error("Erro ao buscar dados do usuário:", error);
        }
    }
    
    useEffect(() => {
        getUsuario();
    }, []);

    useEffect(() => {
        // Criação da instância do socket

        socket.current = io('http://10.133.22.16:3000');

        socket.current.on('connect', () => {
            console.log('Conectado ao servidor');
        });

        socket.current.on('chat message', (msg) => {
            setMessages((prevMessages) => {
                const isDuplicate = prevMessages.some(
                    (m) => m.usuarioNome === msg.usuarioNome && m.message === msg.message && m.timestamp === msg.timestamp
                );
                if (!isDuplicate) {
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
        if (!message.trim() || countdown > 0) return;

        const msg = {
            usuarioNome: username,
            message,
            profilePic,
            timestamp: Date.now(),
        };

        const penaltyMessage = checkMessageForInfractions(msg);
        if (penaltyMessage) {
            const penaltyMsg = {
                usuarioNome: 'Sistema Oráculo',
                message: penaltyMessage,
                profilePic: '',
                timestamp: Date.now(),
            };
            setMessages((prevMessages) => [...prevMessages, penaltyMsg]);
        } else {
            socket.current.emit('chat message', msg);
        }

        setMessage('');
    };

    const checkMessageForInfractions = (msg) => {
        const containsForbiddenWords = forbiddenWords.some((word) =>
            msg.message.toLowerCase().includes(word.toLowerCase())
        );

        if (containsForbiddenWords) {
            const userInfractions = infractions[msg.usuarioNome] || 0;
            const newInfractions = userInfractions + 1;
            setInfractions((prev) => ({ ...prev, [msg.usuarioNome]: newInfractions }));

            if (newInfractions === 1) {
                startCountdown(1); // Primeira infração: 10 segundos
                return `Atenção, ${msg.usuarioNome}! Sua mensagem foi considerada inapropriada.`;
            } else if (newInfractions === 2) {
                startCountdown(1); // Segunda infração: 30 segundos
                return `Cuidado, ${msg.usuarioNome}! Essa é sua segunda infração.`;
            } else if (newInfractions === 3) {
                startCountdown(1); // Terceira infração: 60 segundos
                return `Você foi suspenso, ${msg.usuarioNome}, devido a múltiplas infrações.`;
            }
            else if (newInfractions >= 4) {
                startCountdown(86400); // Terceira infração: 60 segundos
                return `Você foi suspenso, ${msg.usuarioNome}, devido a múltiplas infrações.`;
            }
            
        }

        return null;
    };

    const startCountdown = (seconds) => {
        setCountdown(seconds);
        if (countdownRef.current) clearInterval(countdownRef.current);

        // Animação de progresso
        Animated.timing(progressWidth, {
            toValue: 100, // Representa 100% do progresso
            duration: seconds * 1000,
            useNativeDriver: false,
        }).start();

        countdownRef.current = setInterval(() => {
            setCountdown((prevCountdown) => {
                if (prevCountdown <= 1) {
                    clearInterval(countdownRef.current);
                    Animated.timing(progressWidth, {
                        toValue: 0, // Resetar a barra
                        duration: 0,
                        useNativeDriver: false,
                    }).start();
                    return 0;
                }
                return prevCountdown - 1;
            });
        }, 1000);
    };

    const renderProgressBar = () => (
        <View style={styles.progressBarContainer}>
            <Animated.View
                style={[
                    styles.progressBar,
                    { width: progressWidth.interpolate({ inputRange: [0, 100], outputRange: ['0%', '100%'] }) },
                ]}
            />
        </View>
    );

    const renderCountdown = () => {
        if (countdown > 0) {
            const minutes = Math.floor(countdown / 60);
            const seconds = countdown % 60;
            return (
                <Text style={styles.countdownText}>
                    Tempo restante: {minutes}:{seconds.toString().padStart(2, '0')}
                </Text>
            );
        }
        return null;
    };

    // Scroll automático para a última mensagem
    useEffect(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
    }, [messages]);

    return (
        <View style={styles.container}>
        <FlatList
            ref={flatListRef}  // Adicionando referência ao FlatList
            data={messages}
            renderItem={({ item }) => (
                <View style={styles.messageContainer}>
                    {item.profilePic && (
                        <Image source={{ uri: item.profilePic }} style={styles.userImage} />
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
    
        {/* Container para o cronômetro e a barra de progresso */}
        <View style={styles.penaltyContainer}>
            {countdown > 0 && renderCountdown()}
            {countdown > 0 && renderProgressBar()}
        </View>
    
        {/* Caixa de entrada de mensagens */}
        <View style={styles.inputContainer}>
            <TextInput
                value={message}
                onChangeText={setMessage}
                placeholder="Digite uma mensagem"
                style={styles.input}
                onSubmitEditing={handleSendMessage}  // Envia mensagem ao pressionar Enter
            />
            <TouchableOpacity
                style={[styles.sendButton, { opacity: countdown > 0 ? 0.5 : 1 }]}
                onPress={handleSendMessage}
                disabled={countdown > 0}
            >
                <Icon name="paper-plane" size={24} color="#FFF" />
            </TouchableOpacity>
        </View>
    </View>
    );
}
const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 16, 
        backgroundColor: '#FFFFFF' 
    },
    messagesList: { 
        flexGrow: 1, 
        paddingBottom: 16 
    },
    messageContainer: { 
        flexDirection: 'row', 
        marginVertical: 8, 
        padding: 12, 
        borderRadius: 12, 
        backgroundColor: '#EFEFEF',
        borderLeftWidth: 5, // Borda do lado esquerdo
        borderLeftColor: '#8E44AD', // Cor da borda
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3
    },
    userImage: { 
        width: 50, 
        height: 50, 
        borderRadius: 30, 
        marginRight: 8, 
        borderWidth: 2, 
        borderColor: '#8E44AD' 
    },
    messageContent: { 
        flex: 1 
    },
    userName: { 
        fontWeight: 'bold', 
        fontSize: 18, 
        color: '#4A148C' 
    },
    messageText: { 
        fontSize: 16, 
        color: '#333', 
        lineHeight: 20 
    },
    inputContainer: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        backgroundColor: '#F3E5F5', 
        borderRadius: 30, 
        padding: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginTop: 10, // Espaço superior
    },
    input: { 
        flex: 1, 
        paddingVertical: 12, // Ajuste no padding vertical para deixar a caixa mais alta
        fontSize: 16, 
        backgroundColor: '#FFFFFF', 
        borderRadius: 20, 
        marginRight: 10, 
        paddingHorizontal: 15, // Ajuste no padding horizontal para dar mais espaço ao texto
        borderWidth: 1,
        borderColor: '#8E44AD', // Borda de cor roxa
    },
    sendButton: { 
        backgroundColor: '#8E44AD', 
        borderRadius: 20, 
        paddingVertical: 12, 
        paddingHorizontal: 20, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    sendButtonText: { 
        color: '#FFF', 
        fontWeight: 'bold', 
        fontSize: 16 
    },
    modalOverlay: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'rgba(0, 0, 0, 0.8)' 
    },
    expandedImage: {
        width: 250,
        height: 250, 
        borderRadius: 150,
        borderWidth: 4, 
        borderColor: '#8E44AD',
    },
    closeButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 20,
        padding: 10,
    },
    progressBarContainer: { 
        height: 5, 
        backgroundColor: '#E0E0E0', 
        borderRadius: 2, 
        overflow: 'hidden', 
        marginTop: 8 
    },
    progressBar: { 
        height: '100%', 
        backgroundColor: '#8E44AD' 
    },
    countdownText: { 
        textAlign: 'center', 
        marginTop: 8 
    },
});
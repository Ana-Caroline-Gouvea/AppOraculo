// Conecta ao servidor Socket.io
const socket = io();

// Seleciona os elementos da interface
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const messagesList = document.getElementById('messages');

// Enviar mensagem ao clicar no botão
sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        socket.emit('chat message', message); // Envia a mensagem ao servidor
        messageInput.value = ''; 
    }
});

// Escuta por novas mensagens do servidor e adiciona ao chat
socket.on('chat message', (msg) => {
    const messageItem = document.createElement('li');
    messageItem.textContent = msg;
    messagesList.appendChild(messageItem);
});

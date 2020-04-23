import io from 'socket.io-client';

export const socket = io('http://localhost:8090');

socket.on('connect', () => {
   console.log('supping bro...');
});

socket.on('message', (message) => {
   console.log(message);
});
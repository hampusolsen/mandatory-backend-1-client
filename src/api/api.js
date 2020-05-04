import axios from 'axios';

export async function loginUser(userCredentials) {
   const response = await axios.post('/api/users/login', userCredentials);
   return response.data;
};

export async function registerNewUser(userCredentials) {
   const response = await axios.post('/api/users', userCredentials);
   return response.data;
};

export async function retrieveRoomData(roomId, password) {
   if (!password) {
      const response = await axios.get(`/api/rooms/${roomId}`);
      return response.data;
   } else {
      const response = await axios.post(`/api/rooms/${roomId}`, { password });
      return response.data;
   };
};

export async function registerNewRoom(roomCredentials) {
   const response = await axios.post('/api/rooms', roomCredentials);
   return response.data;
}
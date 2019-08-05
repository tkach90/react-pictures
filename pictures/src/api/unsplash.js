 import axios from 'axios';

export default axios.create({
   baseURL: 'https://api.unsplash.com',
   headers: {
     Authorization: 'Client-ID 9bc1f6ef8d9a8bb38351ec058daa73333a82e56f25477c724128c801fd71a8c2'
 }
});


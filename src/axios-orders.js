import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-bc792-default-rtdb.firebaseio.com/'
});

export default instance;
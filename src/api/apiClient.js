import axios from 'axios';
import Config from 'react-native-config';

// import store from '../store/configureStore';

const SERVER_URL = Config.SERVER_URL;

const config = {
    baseURL: SERVER_URL,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cache-Control': 'no-cache',
    },
    params: {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTEwNDY0NDE3fQ.WnYLFqQzb0jzCBghmutY2bd-XVjA-1U1rVYYpLeHv8s',
    },
};


export function getApiClient() {
    return axios.create({
        baseURL: SERVER_URL,
        headers: {
            'Cache-Control': 'no-cache',
        },
    });
}

export function fetchAvisos() {
    const api = getApiClient();
    return api.post(`${SERVER_URL}/api/avisos`, config.params);
}

export function fetchAluno() {

}

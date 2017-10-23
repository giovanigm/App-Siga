import axios from 'axios';

import store from '../store/configureStore';
import { SERVER_URL } from '../constants/api';

export default function getApiClient() {
    const state = store.getState();
    return axios.create({
        baseURL: SERVER_URL,
        headers: {
            'Cache-Control': 'no-cache',
            'X-API-USUARIO': state.login.usuario,
            'X-API-TOKEN': state.login.token,
        },
    });
}

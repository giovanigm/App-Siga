import axios from 'axios';
import { types } from './login.reducer';
import { SERVER_URL } from '../../constants/api';

export function executeLoginSuccess(res) {
    return {
        type: types.EXECUTE_LOGIN_SUCCESS,
        login: res,
    };
}

export function executeLoginFailed(res) {
    return {
        type: types.EXECUTE_LOGIN_FAILED,
        errorStatus: res,
    };
}

export function saveUserDataInStore(dados) {
    return (dispatch) => {
        return dispatch(executeLoginSuccess(dados));
    };
}

export function executeLogin(usuario, senha) {
    return (dispatch) => {
        const config = {
            headers: {
                'Cache-Control': 'no-cache',
            },
        };
        return axios.post(`${SERVER_URL}/WSLoginFranqueado`, { usuario, senha }, config)
            .then((res) => {
                console.log('RESPONSE', res);
                
                if (res.data.status_code === 200) {
                    return dispatch(executeLoginSuccess(res.data.franqueado));
                }
                
                return dispatch(executeLoginFailed(res.data.status_code));
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error);
                    console.log(error.response.status);
                    return dispatch(executeLoginFailed(error.response.status));
                }

                if (error.request) {
                    console.log(error.request);
                    return dispatch(executeLoginFailed(500));
                }

                console.log('Error', error.message);
                return dispatch(executeLoginFailed(4));
            });
    };
}

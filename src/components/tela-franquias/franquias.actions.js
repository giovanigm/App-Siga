import getApiClient from '../../config/apiClient';
import { types } from './franquias.reducer';

export function retrieveFranquiasSuccess(res) {
    return {
        type: types.RETRIEVE_FRANQUIAS_SUCCESS,
        franquias: res,
    };
}

export function retrieveFranquiasFailed(res) {
    return {
        type: types.RETRIEVE_FRANQUIAS_FAILED,
        errorStatus: res,
    };
}

export function executeLogout() {
    return {
        type: 'EXECUTE_LOGOUT_SUCCESS',
        login: {},
    };
}


export function retrieveFranquias() {
    return (dispatch) => {
        const apiClient = getApiClient();
        return apiClient.post('/WSFranquiasFranqueado')
            .then((res) => {
                console.log('RESPONSE', res);
                if (res.data.status_code === 200) {
                    return dispatch(retrieveFranquiasSuccess(res.data.franquias));
                }

                return dispatch(retrieveFranquiasFailed(res.data.status_code));
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error);
                    console.log(error.response.status);
                    return dispatch(retrieveFranquiasFailed(error.response.status));
                }

                if (error.request) {
                    console.log(error.request);
                    return dispatch(retrieveFranquiasFailed(500));
                }

                console.log('Error', error.message);
                return dispatch(retrieveFranquiasFailed(4));
            });
    };
}

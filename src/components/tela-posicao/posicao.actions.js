import getApiClient from '../../config/apiClient';
import { types } from './posicao.reducer';

export function retrievePosicaoFranquiaSuccess(res) {
    return {
        type: types.RETRIEVE_POSICAO_FRANQUIA_SUCCESS,
        posicao: res,
    };
}

export function retrievePosicaoFranquiaFailed(res) {
    return {
        type: types.RETRIEVE_POSICAO_FRANQUIA_FAILED,
        errorStatus: res,
    };
}

export function retrievePosicaoFranquia(codigoFranquia, anoPosicao) {
    return (dispatch) => {
        const apiClient = getApiClient();
        return apiClient.post('/WSPosicao', { codigo_franquia: codigoFranquia, ano: anoPosicao })
            .then((res) => {
                console.log('RESPONSE', res);
                console.log('ANO', anoPosicao);
                if (res.data.status_code === 200) {
                    return dispatch(retrievePosicaoFranquiaSuccess(res.data));
                }
                
                return dispatch(retrievePosicaoFranquiaFailed(res.data.status_code));
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error);
                    console.log(error.response.status);
                    return dispatch(retrievePosicaoFranquiaFailed(error.response.status));
                }

                if (error.request) {
                    console.log(error.request);
                    return dispatch(retrievePosicaoFranquiaFailed(500));
                }

                console.log('Error', error.message);
                return dispatch(retrievePosicaoFranquiaFailed(4));
            });
    };
}

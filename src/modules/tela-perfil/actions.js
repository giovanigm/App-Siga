import { types } from './reducer';

export const fetchAluno = usuario => ({
    type: types.FETCH_ALUNO,
    payload: usuario,
});

export const fetchAlunoSuccess = payload => ({
    type: types.FETCH_ALUNO_SUCCESS,
    payload,
});

export const fetchAlunoFailed = error => ({
    type: types.FETCH_ALUNO_FAILED,
    errorMessage: error,
});

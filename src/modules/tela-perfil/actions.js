import { types } from './reducer';

export const fetchAluno = () => ({
    type: types.FETCH_ALUNO,
});

export const fetchAlunoSuccess = payload => ({
    type: types.FETCH_ALUNO_SUCCESS,
    payload,
});

export const fetchAlunoFailed = error => ({
    type: types.FETCH_ALUNO_FAILED,
    errorMessage: error,
});

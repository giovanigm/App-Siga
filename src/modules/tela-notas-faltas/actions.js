import { types } from './reducer';

export const fetchAlunoNotas = () => ({
    type: types.FETCH_ALUNO_NOTAS,
});

export const fetchAlunoNotasSuccess = payload => ({
    type: types.FETCH_ALUNO_NOTAS_SUCCESS,
    payload,
});

export const fetchAlunoNotasFailed = error => ({
    type: types.FETCH_ALUNO_NOTAS_FAILED,
    errorMessage: error,
});

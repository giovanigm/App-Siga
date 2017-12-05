import { types } from './reducer';

export const fetchAlunoProvas = () => ({
    type: types.FETCH_ALUNO_PROVAS,
});

export const fetchAlunoProvasSuccess = payload => ({
    type: types.FETCH_ALUNO_PROVAS_SUCCESS,
    payload,
});

export const fetchAlunoProvasFailed = error => ({
    type: types.FETCH_ALUNO_PROVAS_FAILED,
    errorMessage: error,
});

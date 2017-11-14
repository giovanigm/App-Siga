import { types } from './reducer';

export const fetchDisciplinaMateriais = codigo => ({
    type: types.FETCH_DISCIPLINA_MATERIAIS,
    payload: codigo,
});

export const fetchDisciplinaMateriaisSuccess = payload => ({
    type: types.FETCH_DISCIPLINA_MATERIAIS_SUCCESS,
    payload,
});

export const fetchDisciplinaMateriaisFailed = error => ({
    type: types.FETCH_DISCIPLINA_MATERIAIS_FAILED,
    errorMessage: error,
});

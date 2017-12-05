import { types } from './reducer';

export const fetchDisciplinaMateriais = () => ({
    type: types.FETCH_DISCIPLINA_MATERIAIS,
});

export const fetchDisciplinaMateriaisSuccess = payload => ({
    type: types.FETCH_DISCIPLINA_MATERIAIS_SUCCESS,
    payload,
});

export const fetchDisciplinaMateriaisFailed = error => ({
    type: types.FETCH_DISCIPLINA_MATERIAIS_FAILED,
    errorMessage: error,
});

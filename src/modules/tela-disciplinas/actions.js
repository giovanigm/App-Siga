import { types } from './reducer';

export const fetchAlunoDisciplinas = () => ({
    type: types.FETCH_ALUNO_DISCIPLINAS,
});

export const fetchAlunoDisciplinasSuccess = payload => ({
    type: types.FETCH_ALUNO_DISCIPLINAS_SUCCESS,
    payload,
});

export const fetchAlunoDisciplinasFailed = error => ({
    type: types.FETCH_ALUNO_DISCIPLINAS_FAILED,
    errorMessage: error,
});

export const selecionaDisciplina = payload => ({
    type: types.SELECIONA_DISCIPLINA,
    payload,
});

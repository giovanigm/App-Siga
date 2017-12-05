import { types } from './reducer';

export const fetchAlunoHorario = () => ({
    type: types.FETCH_ALUNO_HORARIO,
});

export const fetchAlunoHorarioSuccess = payload => ({
    type: types.FETCH_ALUNO_HORARIO_SUCCESS,
    payload,
});

export const fetchAlunoHorarioFailed = error => ({
    type: types.FETCH_ALUNO_HORARIO_FAILED,
    errorMessage: error,
});

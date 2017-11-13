import { combineEpics } from 'redux-observable';
import fetchAvisosEpic from '../modules/tela-avisos/epic';
import fetchAlunoEpic from '../modules/tela-perfil/epic';
import fetchAlunoHorarioEpic from '../modules/tela-horario/epic';
import fetchAlunoProvasEpic from '../modules/tela-calendario-provas/epic';

const rootEpic = combineEpics(
    fetchAvisosEpic,
    fetchAlunoEpic,
    fetchAlunoHorarioEpic,
    fetchAlunoProvasEpic,
);

export default rootEpic;

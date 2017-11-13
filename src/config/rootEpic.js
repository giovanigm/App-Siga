import { combineEpics } from 'redux-observable';
import fetchAvisosEpic from '../modules/tela-avisos/epic';
import fetchAlunoEpic from '../modules/tela-perfil/epic';
import fetchAlunoHorarioEpic from '../modules/tela-horario/epic';

const rootEpic = combineEpics(
    fetchAvisosEpic,
    fetchAlunoEpic,
    fetchAlunoHorarioEpic,
);

export default rootEpic;

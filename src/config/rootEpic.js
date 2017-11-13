import { combineEpics } from 'redux-observable';
import fetchAvisosEpic from '../modules/tela-avisos/epic';

const rootEpic = combineEpics(
    fetchAvisosEpic,
);

export default rootEpic;

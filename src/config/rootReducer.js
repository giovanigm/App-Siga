import { combineReducers } from 'redux';

import errorHandle from '../api/reducer';

import login from '../modules/tela-login/reducer';
import avisos from '../modules/tela-avisos/reducer';
import perfil from '../modules/tela-perfil/reducer';
import horario from '../modules/tela-horario/reducer';
import provas from '../modules/tela-calendario-provas/reducer';
import historico from '../modules/tela-historico/reducer';
import notas from '../modules/tela-notas-faltas/reducer';
import disciplinas from '../modules/tela-disciplinas/reducer';

import aulas from '../modules/tela-menu-disciplina/tela-aulas-disciplina/reducer';
import materiais from '../modules/tela-menu-disciplina/tela-material-disciplina/reducer';
import apresentacao from '../modules/tela-menu-disciplina/tela-apresentacao-disciplina/card-apresentacao/reducer';
import avaliacoes from '../modules/tela-menu-disciplina/tela-apresentacao-disciplina/card-avaliacoes/reducer';
import bibliografia from '../modules/tela-menu-disciplina/tela-apresentacao-disciplina/card-bibliografia/reducer';

const rootReducer = combineReducers({
    login,
    avisos,
    perfil,
    horario,
    provas,
    historico,
    notas,
    disciplinas,
    aulas,
    materiais,
    apresentacao,
    avaliacoes,
    bibliografia,
    errorHandle,
});

export default rootReducer;

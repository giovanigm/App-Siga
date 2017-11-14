import { combineReducers } from 'redux';
import login from '../modules/tela-login/reducer';
import avisos from '../modules/tela-avisos/reducer';
import perfil from '../modules/tela-perfil/reducer';
import horario from '../modules/tela-horario/reducer';
import provas from '../modules/tela-calendario-provas/reducer';
import historico from '../modules/tela-historico/reducer';

const rootReducer = combineReducers({
    login,
    avisos,
    perfil,
    horario,
    provas,
    historico,
});

export default rootReducer;

import { combineReducers } from 'redux';
import login from '../modules/tela-login/reducer';
import avisos from '../modules/tela-avisos/reducer';
import perfil from '../modules/tela-perfil/reducer';
import horario from '../modules/tela-horario/reducer';

const rootReducer = combineReducers({
    login,
    avisos,
    perfil,
    horario,
});

export default rootReducer;

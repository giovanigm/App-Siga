import { combineReducers } from 'redux';
import login from '../modules/tela-login/reducer';
import avisos from '../modules/tela-avisos/reducer';

const rootReducer = combineReducers({
    login,
    avisos,
});

export default rootReducer;

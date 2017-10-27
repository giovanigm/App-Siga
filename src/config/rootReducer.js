import { combineReducers } from 'redux';
import login from '../modules/tela-login/reducer';

const rootReducer = combineReducers({
    login,
});

export default rootReducer;

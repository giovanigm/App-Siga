import { combineReducers } from 'redux';
import login from '../components/tela-login/login.reducer';

const rootReducer = combineReducers({
    login,
});

export default rootReducer;

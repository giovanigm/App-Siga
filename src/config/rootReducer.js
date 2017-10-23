import { combineReducers } from 'redux';
import login from '../components/tela-login/login.reducer';
import franquias from '../components/tela-franquias/franquias.reducer';
import posicao from '../components/tela-posicao/posicao.reducer';
import posicaoMes from '../components/tela-posicao-mes/posicaoMes.reducer';
import caixa from '../components/tela-caixa/caixa.reducer';
import contasPagar from '../components/tela-contas/contas.reducer';
import planilhaFinanceira from '../components/tela-planilha-financeira/planilha-financeira.reducer';
import ranking from '../components/tela-ranking/ranking.reducer';

const rootReducer = combineReducers({
    login,
    franquias,
    posicao,
    posicaoMes,
    caixa,
    contasPagar,
    planilhaFinanceira,
    ranking,
});

export default rootReducer;

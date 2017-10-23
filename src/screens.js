import { Navigation } from 'react-native-navigation';

import TelaLogin from './components/tela-login';
import Franquias from './components/tela-franquias';
import MenuFranquia from './components/tela-menu-franquia';
import Posicao from './components/tela-posicao';
import PosicaoMes from './components/tela-posicao-mes';
import Caixa from './components/tela-caixa';
import Contas from './components/tela-contas';
import PlanilhaFinanceira from './components/tela-planilha-financeira';
import Ranking from './components/tela-ranking';

export function registerScreens(store, Provider) { //eslint-disable-line
    Navigation.registerComponent('app.Login', () => TelaLogin, store, Provider);
    Navigation.registerComponent('app.Franquias', () => Franquias, store, Provider);
    Navigation.registerComponent('app.MenuFranquia', () => MenuFranquia, store, Provider);
    Navigation.registerComponent('app.Posicao', () => Posicao, store, Provider);
    Navigation.registerComponent('app.PosicaoMes', () => PosicaoMes, store, Provider);
    Navigation.registerComponent('app.Caixa', () => Caixa, store, Provider);
    Navigation.registerComponent('app.Contas', () => Contas, store, Provider);
    Navigation.registerComponent('app.PlanilhaFinanceira', () => PlanilhaFinanceira, store, Provider);
    Navigation.registerComponent('app.Rankings', () => Ranking, store, Provider);
}

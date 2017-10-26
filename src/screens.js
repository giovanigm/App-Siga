import { Navigation } from 'react-native-navigation';

import TelaLogin from './components/tela-login';
import Franquias from './components/tela-franquias';
import MenuFranquia from './components/tela-menu-franquia';
import Posicao from './components/tela-posicao';

export function registerScreens(store, Provider) { //eslint-disable-line
    Navigation.registerComponent('app.Login', () => TelaLogin, store, Provider);
    Navigation.registerComponent('app.Franquias', () => Franquias, store, Provider);
    Navigation.registerComponent('app.MenuFranquia', () => MenuFranquia, store, Provider);
    Navigation.registerComponent('app.Posicao', () => Posicao, store, Provider);
}

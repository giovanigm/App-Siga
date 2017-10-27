import { Navigation } from 'react-native-navigation';

import Drawer from './modules/global/drawer';
import TelaLogin from './modules/tela-login';
import TelaPerfil from './modules/tela-perfil';

export function registerScreens(store, Provider) { //eslint-disable-line
    Navigation.registerComponent('app.Drawer', () => Drawer, store, Provider);
    Navigation.registerComponent('app.Login', () => TelaLogin, store, Provider);
    Navigation.registerComponent('app.Perfil', () => TelaPerfil, store, Provider);
}

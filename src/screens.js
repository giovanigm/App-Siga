import { Navigation } from 'react-native-navigation';

import TelaLogin from './components/tela-login';

export function registerScreens(store, Provider) { //eslint-disable-line
    Navigation.registerComponent('app.Login', () => TelaLogin, store, Provider);
}

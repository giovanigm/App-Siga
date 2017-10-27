import { Navigation } from 'react-native-navigation';

import Drawer from './modules/global/drawer';
import TelaLogin from './modules/tela-login';
import TelaPerfil from './modules/tela-perfil';
import TelaDisciplinas from './modules/tela-disciplinas';
import TelaHistorico from './modules/tela-historico';
import TelaHorario from './modules/tela-horario';
import TelaMenuDisciplina from './modules/tela-menu-disciplina';
import TelaNotasFaltas from './modules/tela-notas-faltas';
import TelaCalendarioProvas from './modules/tela-calendario-provas';


export function registerScreens(store, Provider) { //eslint-disable-line
    Navigation.registerComponent('app.Drawer', () => Drawer, store, Provider);
    Navigation.registerComponent('app.Login', () => TelaLogin, store, Provider);
    Navigation.registerComponent('app.Perfil', () => TelaPerfil, store, Provider);
    Navigation.registerComponent('app.Disciplinas', () => TelaDisciplinas, store, Provider);
    Navigation.registerComponent('app.Historico', () => TelaHistorico, store, Provider);
    Navigation.registerComponent('app.Horario', () => TelaHorario, store, Provider);
    Navigation.registerComponent('app.MenuDisciplina', () => TelaMenuDisciplina, store, Provider);
    Navigation.registerComponent('app.NotasFaltas', () => TelaNotasFaltas, store, Provider);
    Navigation.registerComponent('app.CalendarioProvas', () => TelaCalendarioProvas, store, Provider);
}

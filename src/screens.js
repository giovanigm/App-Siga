import { Navigation } from 'react-native-navigation';

import Drawer from './modules/global/drawer';
import TelaLogin from './modules/tela-login';
import TelaAvisos from './modules/tela-avisos';
import TelaPerfil from './modules/tela-perfil';
import TelaDisciplinas from './modules/tela-disciplinas';
import TelaHistorico from './modules/tela-historico';
import TelaHorario from './modules/tela-horario';
import TelaMenuDisciplina from './modules/tela-menu-disciplina';
import TelaNotasFaltas from './modules/tela-notas-faltas';
import TelaCalendarioProvas from './modules/tela-calendario-provas';
import TelaMaterialDisciplina from './modules/tela-menu-disciplina/tela-material-disciplina';
import TelaApresentacaoDisciplina from './modules/tela-menu-disciplina/tela-apresentacao-disciplina';
import TelaAulasDisciplina from './modules/tela-menu-disciplina/tela-aulas-disciplina';


export function registerScreens(store, Provider) { //eslint-disable-line
    Navigation.registerComponent('app.Drawer', () => Drawer, store, Provider);
    Navigation.registerComponent('app.Login', () => TelaLogin, store, Provider);
    Navigation.registerComponent('app.Avisos', () => TelaAvisos, store, Provider);
    Navigation.registerComponent('app.Perfil', () => TelaPerfil, store, Provider);
    Navigation.registerComponent('app.Disciplinas', () => TelaDisciplinas, store, Provider);
    Navigation.registerComponent('app.Historico', () => TelaHistorico, store, Provider);
    Navigation.registerComponent('app.Horario', () => TelaHorario, store, Provider);
    Navigation.registerComponent('app.Disciplina', () => TelaMenuDisciplina, store, Provider);
    Navigation.registerComponent('app.NotasFaltas', () => TelaNotasFaltas, store, Provider);
    Navigation.registerComponent('app.CalendarioProvas', () => TelaCalendarioProvas, store, Provider);
    Navigation.registerComponent('app.Disciplina.Material', () => TelaMaterialDisciplina, store, Provider);
    Navigation.registerComponent('app.Disciplina.Apresentacao', () => TelaApresentacaoDisciplina, store, Provider);
    Navigation.registerComponent('app.Disciplina.Aulas', () => TelaAulasDisciplina, store, Provider);
}

import { combineEpics } from 'redux-observable';
import fetchAvisosEpic from '../modules/tela-avisos/epic';
import fetchAlunoEpic from '../modules/tela-perfil/epic';
import fetchAlunoHorarioEpic from '../modules/tela-horario/epic';
import fetchAlunoProvasEpic from '../modules/tela-calendario-provas/epic';
import fetchAlunoHistoricoEpic from '../modules/tela-historico/epic';
import fetchAlunoNotasEpic from '../modules/tela-notas-faltas/epic';
import fetchAlunoDisciplinasEpic from '../modules/tela-disciplinas/epic';

import fetchDisciplinaAulasEpic from '../modules/tela-menu-disciplina/tela-aulas-disciplina/epic';
import fetchDisciplinaMateriaisEpic from '../modules/tela-menu-disciplina/tela-material-disciplina/epic';
import fetchDisciplinaApresentacaoEpic from '../modules/tela-menu-disciplina/tela-apresentacao-disciplina/card-apresentacao/epic';
import fetchDisciplinaAvaliacoesEpic from '../modules/tela-menu-disciplina/tela-apresentacao-disciplina/card-avaliacoes/epic';


const rootEpic = combineEpics(
    fetchAvisosEpic,
    fetchAlunoEpic,
    fetchAlunoHorarioEpic,
    fetchAlunoProvasEpic,
    fetchAlunoHistoricoEpic,
    fetchAlunoNotasEpic,
    fetchAlunoDisciplinasEpic,
    fetchDisciplinaAulasEpic,
    fetchDisciplinaMateriaisEpic,
    fetchDisciplinaApresentacaoEpic,
    fetchDisciplinaAvaliacoesEpic,
);

export default rootEpic;

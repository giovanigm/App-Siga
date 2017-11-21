import axios from 'axios';
import Config from 'react-native-config';

import store from '../store/configureStore';

const SERVER_URL = Config.SERVER_URL;


function config() {
    console.log('FUI CHAMADO');
    const state = store.getState();

    const token = {
        token: state.login.data.token,
    };

    return token;
}

function getApiClient() {
    const state = store.getState();

    return axios.create({
        baseURL: SERVER_URL,
        headers: {
            'Cache-Control': 'no-cache',
            'x-access-token': state.login.data.token,
        },
    });
}

function getLoginApiClient() {
    return axios.create({
        baseURL: SERVER_URL,
        headers: {
            'Cache-Control': 'no-cache',
        },
    });
}

export function login(usuario, senha) {
    const api = getLoginApiClient();

    const loginConfig = { usuario, senha };

    return api.post(`${SERVER_URL}/api/alunos/login`, loginConfig);
}

export function fetchAvisos() {
    const api = getApiClient();
    return api.post(`${SERVER_URL}/api/avisos`);
}

export function fetchAluno(usuario) {
    const api = getApiClient();
    return api.post(`${SERVER_URL}/api/alunos/${usuario}`);
}

export function fetchAlunoDisciplinas(usuario) {
    const api = getApiClient();
    return api.post(`${SERVER_URL}/api/alunos/${usuario}/disciplinas`);
}

export function fetchAlunoNotas(usuario) {
    const api = getApiClient();
    return api.post(`${SERVER_URL}/api/alunos/${usuario}/notas`);
}

export function fetchAlunoHistorico(usuario) {
    const api = getApiClient();
    return api.post(`${SERVER_URL}/api/alunos/${usuario}/historico`);
}

export function fetchAlunoHorario(usuario) {
    const api = getApiClient();
    return api.post(`${SERVER_URL}/api/alunos/${usuario}/horario`);
}

export function fetchAlunoProvas(usuario) {
    const api = getApiClient();
    return api.post(`${SERVER_URL}/api/alunos/${usuario}/provas`);
}

export function fetchDisciplinaApresentacao(codigo) {
    const api = getApiClient();
    return api.post(`${SERVER_URL}/api/disciplinas/${codigo}`);
}

export function fetchDisciplinaAvaliacoes(codigo) {
    const api = getApiClient();
    return api.post(`${SERVER_URL}/api/disciplinas/${codigo}/avaliacoes`);
}

export function fetchDisciplinaAulas(codigo) {
    const api = getApiClient();
    return api.post(`${SERVER_URL}/api/disciplinas/${codigo}/aulas`);
}

export function fetchDisciplinaMateriais(codigo) {
    const api = getApiClient();
    return api.post(`${SERVER_URL}/api/disciplinas/${codigo}/materiais`);
}

export function fetchDisciplinaBibliografia(codigo) {
    const api = getApiClient();
    return api.post(`${SERVER_URL}/api/disciplinas/${codigo}/bibliografia`);
}

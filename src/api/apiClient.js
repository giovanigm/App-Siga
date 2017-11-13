import axios from 'axios';
import Config from 'react-native-config';

// import store from '../store/configureStore';

const SERVER_URL = Config.SERVER_URL;

const config = {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTEwNDY0NDE3fQ.WnYLFqQzb0jzCBghmutY2bd-XVjA-1U1rVYYpLeHv8s',
};


export function getApiClient() {
    return axios.create({
        baseURL: SERVER_URL,
        headers: {
            'Cache-Control': 'no-cache',
        },
    });
}

export function login(usuario, senha) {
    const api = getApiClient();

    const loginConfig = { usuario, senha };

    return api.post(`${SERVER_URL}/api/login`, loginConfig);
}

export function fetchAvisos() {
    const api = getApiClient();
    return api.post(`${SERVER_URL}/api/avisos`, config);
}

export function fetchAluno(usuario) {
    const api = getApiClient();
    return api.post(`${SERVER_URL}/api/alunos/${usuario}`, config);
}

export function fetchAlunoDisciplinas(usuario) {
    const api = getApiClient();
    return api.post(`${SERVER_URL}/api/alunos/${usuario}/disciplinas`, config);
}

export function fetchAlunoNotas(usuario) {
    const api = getApiClient();
    return api.post(`${SERVER_URL}/api/alunos/${usuario}/notas`, config);
}

export function fetchAlunoHistorico(usuario) {
    const api = getApiClient();
    return api.post(`${SERVER_URL}/api/alunos/${usuario}/historico`, config);
}

export function fetchAlunoHorario(usuario) {
    const api = getApiClient();
    return api.post(`${SERVER_URL}/api/alunos/${usuario}/horario`, config);
}

export function fetchAlunoProvas(usuario) {
    const api = getApiClient();
    return api.post(`${SERVER_URL}/api/alunos/${usuario}/provas`, config);
}

export function fetchDisciplinaApresentacao(codigo) {
    const api = getApiClient();
    return api.post(`${SERVER_URL}/api/disciplinas/${codigo}`, config);
}

export function fetchDisciplinaAvaliacoes(codigo) {
    const api = getApiClient();
    return api.post(`${SERVER_URL}/api/disciplinas/${codigo}/avaliacoes`, config);
}

export function fetchDisciplinaAulas(codigo) {
    const api = getApiClient();
    return api.post(`${SERVER_URL}/api/disciplinas/${codigo}/aulas`, config);
}

export function fetchDisciplinaMateriais(codigo) {
    const api = getApiClient();
    return api.post(`${SERVER_URL}/api/disciplinas/${codigo}/materiais`, config);
}

export function fetchDisciplinaBibliografia(codigo) {
    const api = getApiClient();
    return api.post(`${SERVER_URL}/api/disciplinas/${codigo}/bibliografia`, config);
}

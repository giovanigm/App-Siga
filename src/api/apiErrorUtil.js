import Toast from 'react-native-simple-toast';

export function geraMensagemErro(errorCode) { //eslint-disable-line
    let texto = '';
    switch (errorCode) {
    case 404:
        texto = 'Conexão com o servidor indisponível';
        break;
    case 401:
        texto = 'Usuário ou senha inválidos';
        break;
    case 403:
        texto = 'Token inválido';
        break;
    case 500:
        texto = 'Erro interno do servidor';
        break;
    default:
        texto = 'Algo deu errado';
    }

    Toast.show(texto, Toast.LONG);
}

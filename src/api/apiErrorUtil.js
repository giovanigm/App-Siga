import Snackbar from 'react-native-snackbar';

export function geraMensagemErro(errorCode, navigator) { //eslint-disable-line
    let texto = '';
    switch (errorCode) {
    case 404:
        texto = 'Conexão com o servidor indisponível';
        break;
    case 401:
        texto = 'Sessão invalidada, efetue login novamente';
        break;
    case 2:
        texto = 'Usuário ou senha inválidos';
        break;
    case 500:
        texto = 'Erro interno do servidor';
        break;
    default:
        texto = 'Algo deu errado';
    }

    Snackbar.show({
        title: texto,
        duration: Snackbar.LENGTH_INDEFINITE,
        action: {
            title: 'OK',
            color: 'lightblue',
            onPress: () => { /* Do something. */ },
        },
    });
}

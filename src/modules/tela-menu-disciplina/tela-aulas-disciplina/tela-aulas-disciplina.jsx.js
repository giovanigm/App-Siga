import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, List } from 'native-base';

import styles from './styles';

const aulas = [
    {
        numero: 1,
        titulo: 'Apresentação  do cronograma- Liberdade e Responsabilidade',
        descricao: 'Apresentação  do cronograma- Contrato pedagógico\nVerdade, Liberdade e Responsabilidade',
        tipo: 'Teórico - Explicativa',
        aulaMinistrada: {
            data: '01/08/2017',
            conteudo: 'Apresentação  do cronograma- Contrato pedagógico\nVerdade, Liberdade e Responsabilidade',
            dicas: '',
        },
    },
    {
        numero: 2,
        titulo: 'ética humana',
        descricao: 'Consciência sobre ações e efeitos no âmbito profissional e pessoal',
        tipo: 'Teórico - Explicativa',
        aulaMinistrada: {
            data: '08/08/2017',
            conteudo: 'Consciência sobre ações e efeitos no âmbito profissional e pessoal',
            dicas: '',
        },
    },
    {
        numero: 3,
        titulo: 'Cidadania Corporativa',
        descricao: 'Exercícios/ Filme.',
        tipo: 'Teórico - Explicativa',
    },
    {
        numero: 4,
        titulo: 'Semana de Provas',
        descricao: 'Avaliação',
        tipo: 'pratica',
    },
];

class TelaAulasDisciplina extends Component {
    static navigatorStyle = styles.navigatorStyle;

    static propTypes = {

    }

    render() {
        return (
            <Container style={styles.container}>
                
            </Container>
        );
    }
}

export default TelaAulasDisciplina;

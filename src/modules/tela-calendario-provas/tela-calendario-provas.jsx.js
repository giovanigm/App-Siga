import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, List, Card, CardItem, Text, H1, H2 } from 'native-base';

import styles from './styles';

import CardProva from './card-prova';

const calendario = [
    {
        disciplina: {
            codigo: 'HSO003',
            nome: 'Ética e Responsabilidade Profissional',
        },
        avaliacoes: [
            {
                codigo: 'P1',
                avaliacao: 'Avaliação de Conhecimento',
                data: '03/10/17',
                hora: '19:00',
            },
            {
                codigo: 'P2',
                avaliacao: 'Avaliação de Conhecimento',
                data: '05/12/17',
                hora: '19:00',
            },
        ],
    },
    {
        disciplina: {
            codigo: 'IIA002',
            nome: 'Inteligência Artificial',
        },
        avaliacoes: [
            {
                codigo: 'P1',
                avaliacao: 'P1',
                data: '27/09/17',
                hora: '19:00',
            },
            {
                codigo: 'P2',
                avaliacao: 'P2',
                data: '29/11/17',
                hora: '19:00',
            },
        ],
    },
    {
        disciplina: {
            codigo: 'ITI004',
            nome: 'Gestão e Governança de Tecnologia da Informação',
        },
        avaliacoes: [
            {
                codigo: 'N1',
                avaliacao: 'Avaliação P1',
                data: '25/09/17',
                hora: '19:00',
            },
            {
                codigo: 'N2',
                avaliacao: 'Avaliação P2',
                data: '27/11/17',
                hora: '19:00',
            },
            {
                codigo: 'N3',
                avaliacao: 'Substitutiva da P1',
                data: '11/12/17',
                hora: '19:00',
            },
        ],
    },
];

class TelaCalendarioProvas extends Component {
    static navigatorStyle = styles.navigatorStyle;

    static propTypes = {

    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <List
                        dataArray={calendario}
                        renderRow={data =>
                            (<CardProva calendario={data} />)} />
                </Content>
            </Container>
        );
    }
}

export default TelaCalendarioProvas;

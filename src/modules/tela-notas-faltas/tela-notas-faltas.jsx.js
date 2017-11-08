import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Body, List, Text, H1, H2 } from 'native-base';

import CardNotas from './card-notas';

import styles from './styles';

const notas = [
    {
        disciplina: {
            codigo: 'HSO003',
            nome: 'Ética e Responsabilidade Profissional',
        },
        mediaFinal: 8,
        faltas: 20,
        frequencia: 80,
        avaliacoes: [
            {
                codigo: 'P1',
                avaliacao: 'P1',
                nota: 7.8,
            },
            {
                codigo: 'P2',
                avaliacao: 'P2',
                nota: 8.9,
            },
        ],
    },
    {
        disciplina: {
            codigo: 'IIA002',
            nome: 'Inteligência Artificial',
        },
        mediaFinal: 8,
        faltas: 20,
        frequencia: 80,
        avaliacoes: [
            {
                codigo: 'P1',
                avaliacao: 'P1',
                nota: 7.8,
            },
            {
                codigo: 'P2',
                avaliacao: 'P2',
                nota: 8.9,
            },
        ],
    },
    {
        disciplina: {
            codigo: 'ITI004',
            nome: 'Gestão e Governança de Tecnologia da Informação',
        },
        mediaFinal: 8,
        faltas: 20,
        frequencia: 80,
        avaliacoes: [
            {
                codigo: 'P1',
                avaliacao: 'P1',
                nota: 7.8,
            },
            {
                codigo: 'P2',
                avaliacao: 'P2',
                nota: 8.9,
            },
            {
                codigo: 'P3',
                avaliacao: 'Substitutiva P1',
                nota: 9.5,
            },
        ],
    },
];

class TelaNotasFaltas extends Component {
    static navigatorStyle = styles.navigatorStyle;

    static propTypes = {

    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <List
                        dataArray={notas}
                        renderRow={data =>
                            (<CardNotas nota={data} />)} />
                </Content>
            </Container>
        );
    }
}

export default TelaNotasFaltas;

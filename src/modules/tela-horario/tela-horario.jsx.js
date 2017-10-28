import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, List } from 'native-base';

import CardHorario from './card-horario';

import styles from './styles';

const horarios = [
    {
        dia: 'Segunda-Feira',
        horarios: [
            {
                hora: '19:00',
                disciplina: 'Administração Geral das Empresas',
            },
            {
                hora: '19:50',
                disciplina: 'Sistemas Operacionais I',
            },
            {
                hora: '20:50',
                disciplina: 'Linguagem de Programação IV',
            },
            {
                hora: '21:40',
                disciplina: 'Ética e Responsabilidade Social',
            },
        ],
    },
    {
        dia: 'Terça-Feira',
        horarios: [
            {
                hora: '19:00',
                disciplina: 'Administração Geral das Empresas',
            },
            {
                hora: '19:50',
                disciplina: 'Sistemas Operacionais I',
            },
            {
                hora: '20:50',
                disciplina: 'Linguagem de Programação IV',
            },
            {
                hora: '21:40',
                disciplina: 'Ética e Responsabilidade Social',
            },
        ],
    },
    {
        dia: 'Quarta-Feira',
        horarios: [
            {
                hora: '19:00',
                disciplina: 'Administração Geral das Empresas',
            },
            {
                hora: '19:50',
                disciplina: 'Sistemas Operacionais I',
            },
            {
                hora: '20:50',
                disciplina: 'Linguagem de Programação IV',
            },
            {
                hora: '21:40',
                disciplina: 'Ética e Responsabilidade Social',
            },
        ],
    },
    {
        dia: 'Quinta-Feira',
        horarios: [
            {
                hora: '19:00',
                disciplina: 'Administração Geral das Empresas',
            },
            {
                hora: '19:50',
                disciplina: 'Sistemas Operacionais I',
            },
            {
                hora: '20:50',
                disciplina: 'Linguagem de Programação IV',
            },
            {
                hora: '21:40',
                disciplina: 'Ética e Responsabilidade Social',
            },
        ],
    },
    {
        dia: 'Sexta-Feira',
        horarios: [
            {
                hora: '19:00',
                disciplina: 'Administração Geral das Empresas',
            },
            {
                hora: '19:50',
                disciplina: 'Sistemas Operacionais I',
            },
            {
                hora: '20:50',
                disciplina: 'Linguagem de Programação IV',
            },
            {
                hora: '21:40',
                disciplina: 'Ética e Responsabilidade Social',
            },
        ],
    },
];

class TelaHorario extends Component {
    static navigatorStyle = styles.navigatorStyle;

    static propTypes = {

    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <List
                        dataArray={horarios}
                        renderRow={data =>
                            (<CardHorario style={styles.item} horario={data} />)} />
                </Content>
            </Container>
        );
    }
}

export default TelaHorario;

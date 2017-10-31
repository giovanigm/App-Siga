import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, List, ListItem, Text } from 'native-base';

import CardDisciplina from './card-disciplina';

import styles from './styles';

const historico = [
    {
        periodo: 1,
        disciplinas: [
            {
                codigo: 'AAG001',
                nome: 'Administração Geral',
                aprovado: 'Sim',
                mediaFinal: 8.2,
                frequencia: 100,
                observação: 'Aluno muito louco de alcool e entorpecentes',
            },
            {
                codigo: 'MMD001',
                nome: 'Matemática Discreta',
                aprovado: 'Sim',
                mediaFinal: 8.2,
                frequencia: 100,
                observação: 'Aluno muito louco de alcool e entorpecentes',
            },
        ],
    },
    {
        periodo: 2,
        disciplinas: [
            {
                codigo: 'ISO100',
                nome: 'Sistemas Operacionais I',
                aprovado: 'Sim',
                mediaFinal: 8.2,
                frequencia: 100,
                observação: 'Aluno muito louco de alcool e entorpecentes',
            },
            {
                codigo: 'ILP010',
                nome: 'Linguagem de Programação',
                aprovado: 'Sim',
                mediaFinal: 8.2,
                frequencia: 100,
                observação: 'Aluno muito louco de alcool e entorpecentes',
            },
        ],
    },
    {
        periodo: 3,
        disciplinas: [
            {
                codigo: 'ISO100',
                nome: 'Sistemas Operacionais I',
                aprovado: 'Sim',
                mediaFinal: 8.2,
                frequencia: 100,
                observação: 'Aluno muito louco de alcool e entorpecentes',
            },
            {
                codigo: 'ILP010',
                nome: 'Linguagem de Programação',
                aprovado: 'Sim',
                mediaFinal: 8.2,
                frequencia: 100,
                observação: 'Aluno muito louco de alcool e entorpecentes',
            },
        ],
    },
];

class TelaHistorico extends Component {
    static navigatorStyle = styles.navigatorStyle;

    static propTypes = {

    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <List
                        dataArray={historico}
                        renderRow={data =>
                            (<Content>
                                <ListItem itemDivider>
                                    <Text>{data.periodo}º Período</Text>
                                </ListItem>
                                <List
                                    dataArray={data.disciplinas}
                                    renderRow={dadosDisciplina => (<CardDisciplina disciplina={dadosDisciplina} />)} />
                            </Content>)} />
                </Content>
            </Container>
        );
    }
}

export default TelaHistorico;

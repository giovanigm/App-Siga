import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, List, ListItem, Left, Item, CardItem, Text, H1, H2 } from 'native-base';

import styles from './styles';


const disciplinas = [
    {
        codigo: 'HSO003',
        nome: 'Ética e Responsabilidade Profissional',
    },
    {
        codigo: 'IIA002',
        nome: 'Inteligência Artificial',
    },
    {
        codigo: 'ITI004',
        nome: 'Gestão e Governança de Tecnologia da Informação',
    },
    {
        codigo: 'LIN600',
        nome: 'Inglês VI',
    },
    {
        codigo: 'TES001',
        nome: 'Estágio Supervisionado',
    },
    {
        codigo: 'TTG103',
        nome: 'Trabalho de Graduação II',
    },
];

class TelaDisciplinas extends Component {
    static navigatorStyle = styles.navigatorStyle;

    static propTypes = {

    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <List
                        dataArray={disciplinas}
                        renderRow={data =>
                            (<ListItem style={styles.item}>
                                <Left>
                                    <Text style={styles.text}>{data.codigo}</Text>
                                    <Text style={styles.text}>{data.nome}</Text>
                                </Left>
                            </ListItem>)} />
                </Content>
            </Container>
        );
    }
}

export default TelaDisciplinas;

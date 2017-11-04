import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, List, ListItem, Left, Item, CardItem, Text, H1, H2 } from 'native-base';

import CardAviso from './card-aviso';

import styles from './styles';

const avisos = [
    {
        codigo: 1,
        titulo: 'Roubo na Fatec',
        conteudo: 'Prezados,\nVenho lhes informar que o aluno Joselito roubou nossos professores.\n\n\n\n\nBando de fdp',
    },
    {
        codigo: 2,
        titulo: '',
        conteudo: '',
    },
];

class TelaAvisos extends Component {
    static navigatorStyle = styles.navigatorStyle;

    static propTypes = {

    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <List
                        dataArray={avisos}
                        renderRow={data =>
                            (<CardAviso style={styles.item} aviso={data} />)} />
                </Content>
            </Container>
        );
    }
}

export default TelaAvisos;

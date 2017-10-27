import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Body, Card, CardItem, Text, H1, H2 } from 'native-base';

import styles from './styles';

class TelaHorario extends Component {
    static navigatorStyle = styles.navigatorStyle;

    static propTypes = {

    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Card style={styles.card}>
                        <CardItem header>
                            <H1>Horário de Aulas do Aluno</H1>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default TelaHorario;

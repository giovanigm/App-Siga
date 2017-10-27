import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Body, Card, CardItem, Text, H1, H2 } from 'native-base';

import styles from './styles';

class TelaCalendarioProvas extends Component {
    static navigatorStyle = styles.navigatorStyle;

    static propTypes = {

    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Card style={styles.card}>
                        <CardItem header>
                            <H1>Calendário de Provas</H1>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default TelaCalendarioProvas;

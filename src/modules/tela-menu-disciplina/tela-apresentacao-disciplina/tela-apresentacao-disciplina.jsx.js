import React, { Component } from 'react';
import { Container } from 'native-base';

import CardApresentacao from './card-apresentacao';

import styles from './styles';

class TelaApresentacaoDisciplina extends Component {
    static navigatorStyle = styles.navigatorStyle;

    static propTypes = {

    }

    render() {
        return (
            <Container style={styles.container}>
                <CardApresentacao />
            </Container>
        );
    }
}

export default TelaApresentacaoDisciplina;

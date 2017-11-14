import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import CardApresentacao from './card-apresentacao';
import CardAvaliacoes from './card-avaliacoes';
import CardBibliografia from './card-bibliografia';

import styles from './styles';

class TelaApresentacaoDisciplina extends Component {
    static navigatorStyle = styles.navigatorStyle;

    static propTypes = {

    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <CardApresentacao />
                    <CardAvaliacoes />
                    <CardBibliografia />
                </Content>
            </Container>
        );
    }
}

export default TelaApresentacaoDisciplina;

import React, { Component } from 'react';
import { Content, Left, Card, CardItem, Text, H3 } from 'native-base';
import PropTypes from 'prop-types';

import styles from './styles';

class CardAula extends Component {
    static propTypes = {
        aula: PropTypes.shape({
            numero: PropTypes.number,
            titulo: PropTypes.string,
            descricao: PropTypes.string,
            tipo: PropTypes.string,
        }).isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            aula: this.props.aula,
        };
    }

    render() {
        const { aula } = this.props;
        return (
            <Card style={styles.card}>
                <CardItem header>
                    <H3 style={styles.titulo}>{aula.numero.toString()} - {aula.titulo}</H3>
                </CardItem>
                <CardItem style={styles.legendaContainer}>
                    <Left><Text>{aula.descricao}</Text></Left>
                </CardItem>
                <CardItem style={styles.legendaContainer}>
                    <Left><Text>{aula.tipo}</Text></Left>
                </CardItem>
                {aula.aulaMinistrada ? <Content>
                    <CardItem><Text style={styles.legenda}>Aula Ministrada</Text></CardItem>
                    <CardItem><Left><Text>{aula.aulaMinistrada.data}</Text></Left></CardItem>
                    <CardItem><Left><Text>{aula.aulaMinistrada.conteudo}</Text></Left></CardItem>
                    <CardItem><Left><Text>{aula.aulaMinistrada.dicas}</Text></Left></CardItem></Content> : <Text /> }
            </Card>
        );
    }
}

export default CardAula;

import React, { Component } from 'react';
import { Content, List, ListItem, Card, CardItem, Text, H3 } from 'native-base';
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
                    <H3>{aula.numero.toString()} - {aula.titulo}</H3>
                </CardItem>
                <CardItem style={styles.legendaContainer}>
                    <Text>{aula.descricao}</Text>
                </CardItem>
                <CardItem style={styles.legendaContainer}>
                    <Text>{aula.tipo}</Text>
                </CardItem>
                {aula.aulaMinistrada ? <Content>
                    <CardItem><H3>Aula Ministrada</H3></CardItem>
                    <CardItem><Text>{aula.aulaMinistrada.data}</Text></CardItem>
                    <CardItem><Text>{aula.aulaMinistrada.conteudo}</Text></CardItem>
                    <CardItem><Text>{aula.aulaMinistrada.dicas}</Text></CardItem></Content> : <Text /> }
            </Card>
        );
    }
}

export default CardAula;

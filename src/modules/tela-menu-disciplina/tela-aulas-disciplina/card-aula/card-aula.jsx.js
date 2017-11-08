import React, { Component } from 'react';
import { List, ListItem, Card, CardItem, Text, H3 } from 'native-base';
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
                    <H3>{aula.numero} - {aula.titulo}</H3>
                </CardItem>
                <CardItem style={styles.legendaContainer}>
                    <Text>{aula.descricao}</Text>
                </CardItem>
                <CardItem style={styles.legendaContainer}>
                    <Text>{aula.tipo}</Text>
                </CardItem>
            </Card>
        );
    }
}

export default CardAula;

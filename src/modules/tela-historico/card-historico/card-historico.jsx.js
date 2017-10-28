import React, { Component } from 'react';
import { List, ListItem, Card, CardItem, Text, Left, H1 } from 'native-base';
import PropTypes from 'prop-types';

import styles from './styles';

class CardHistorico extends Component {
    static propTypes = {
        historico: PropTypes.shape({
            periodo: PropTypes.number,
            disciplinas: PropTypes.array,
        }).isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            historico: this.props.historico,
        };
    }

    render() {
        const { historico } = this.props;
        return (
            <Card>
                <CardItem header>
                    <H1>{historico.dia}</H1>
                </CardItem>
                <CardItem style={styles.legendaContainer}>
                    <Left>
                        <Text style={styles.legenda}>Horário</Text>
                        <Text style={styles.legenda}>Disciplina</Text>
                    </Left>
                </CardItem>
            </Card>
        );
    }
}

export default CardHistorico;

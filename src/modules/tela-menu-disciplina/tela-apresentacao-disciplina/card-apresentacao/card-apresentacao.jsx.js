import React, { Component } from 'react';
import { Card, CardItem, Text, Left, H3 } from 'native-base';
import PropTypes from 'prop-types';

import styles from './styles';

class CardApresentacao extends Component {
    static propTypes = {
        horario: PropTypes.shape({
            dia: PropTypes.string,
            horarios: PropTypes.array,
        }).isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            horario: this.props.horario,
        };
    }

    render() {
        const { horario } = this.props;
        return (
            <Card style={styles.card}>
                <CardItem header>
                    <H3>{horario.dia}</H3>
                </CardItem>
            </Card>
        );
    }
}

export default CardApresentacao;

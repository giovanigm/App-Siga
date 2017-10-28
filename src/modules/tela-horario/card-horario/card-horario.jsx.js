import React, { Component } from 'react';
import { List, ListItem, Card, CardItem, Text, Left, H1 } from 'native-base';
import PropTypes from 'prop-types';

import styles from './styles';

class CardHorario extends Component {
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
            <Card>
                <CardItem header>
                    <H1>{horario.dia}</H1>
                </CardItem>
                <CardItem style={styles.legendaContainer}>
                    <Left>
                        <Text style={styles.legenda}>Horário</Text>
                        <Text style={styles.legenda}>Disciplina</Text>
                    </Left>
                </CardItem>
                <List
                    dataArray={horario.horarios}
                    renderRow={data =>
                        (<ListItem style={styles.item}>
                            <Left>
                                <Text style={styles.text}>{data.hora}</Text>
                                <Text style={styles.text}>{data.disciplina}</Text>
                            </Left>
                        </ListItem>)} />
            </Card>
        );
    }
}

export default CardHorario;

import React, { Component } from 'react';
import { List, ListItem, Card, CardItem, Text, Left, H3 } from 'native-base';
import PropTypes from 'prop-types';

import styles from './styles';

class CardProva extends Component {
    static propTypes = {
        prova: PropTypes.shape({
            disciplina: PropTypes.object,
            avaliacoes: PropTypes.array,
        }).isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            calendario: this.props.prova,
        };
    }

    render() {
        const { prova } = this.props;
        return (
            <Card style={styles.card}>
                <CardItem header>
                    <H3>{prova.disciplina.codigo} - {prova.disciplina.nome}</H3>
                </CardItem>
                <CardItem style={styles.legendaContainer}>
                    <Left>
                        <Text style={styles.legenda}>Avaliação</Text>
                        <Text style={styles.legenda}>Data</Text>
                    </Left>
                </CardItem>
                <List
                    dataArray={prova.avaliacoes}
                    renderRow={data =>
                        (<ListItem style={styles.item}>
                            <Left>
                                <Text style={styles.text}>{data.codigo} - {data.avaliacao}</Text>
                                <Text style={styles.text}>{data.data} - {data.hora}</Text>
                            </Left>
                        </ListItem>)} />
            </Card>
        );
    }
}

export default CardProva;

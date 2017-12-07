import React, { Component } from 'react';
import { List, ListItem, Card, CardItem, Text, Left, H3, Content } from 'native-base';
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
                    <H3 style={styles.titulo}>{prova.disciplina.codigo} - {prova.disciplina.nome}</H3>
                </CardItem>
                <CardItem>
                    <Content contentContainerStyle={styles.legendaContainer}>
                        <Text style={styles.legenda}>Avaliação</Text>
                        <Text style={styles.legenda}>Data</Text>
                        <Text style={styles.legenda}>Horário</Text>
                    </Content>
                </CardItem>
                <List
                    dataArray={prova.avaliacoes}
                    renderRow={data =>
                        (<ListItem style={styles.item}>
                            <Content contentContainerStyle={styles.legendaContainer}>
                                <Text style={styles.text}>{data.codigo}</Text>
                                <Text style={styles.data}>{data.data}</Text>
                                <Text style={styles.text}>{data.hora}</Text>
                            </Content>
                        </ListItem>)} />
            </Card>
        );
    }
}

export default CardProva;

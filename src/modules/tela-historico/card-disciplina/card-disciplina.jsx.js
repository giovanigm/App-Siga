import React, { Component } from 'react';
import { Content, ListItem, Card, CardItem, Text, Left, H3 } from 'native-base';
import PropTypes from 'prop-types';

import styles from './styles';

class CardDisciplina extends Component {
    static propTypes = {
        disciplina: PropTypes.shape({
            codigo: PropTypes.string,
            nome: PropTypes.string,
            aprovado: PropTypes.string,
            mediaFinal: PropTypes.number,
            frequencia: PropTypes.number,
            observação: PropTypes.string,
        }).isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            disciplina: this.props.disciplina,
        };
    }

    render() {
        const { disciplina } = this.props;
        return (
            <Card style={styles.card}>
                <CardItem header>
                    <H3 style={styles.titulo}>{disciplina.codigo} - {disciplina.nome}</H3>
                </CardItem>
                <CardItem>
                    <Content contentContainerStyle={styles.legendaContainer}>
                        <Text style={styles.legenda}>Aprovado</Text>
                        <Text style={styles.legenda}>Média Final</Text>
                        <Text style={styles.legenda}>Frequência</Text>
                    </Content>
                </CardItem>
                <CardItem>
                    <Content contentContainerStyle={styles.legendaContainer}>
                        <Text>{disciplina.aprovado}</Text>
                        <Text>{disciplina.mediaFinal}</Text>
                        <Text>{disciplina.frequencia}%</Text>
                    </Content>
                </CardItem>
                <CardItem>
                    <Text style={styles.legenda}>Observação</Text>
                </CardItem>
                <CardItem>
                    <Text>{disciplina.observação}</Text>
                </CardItem>
            </Card>
        );
    }
}

export default CardDisciplina;

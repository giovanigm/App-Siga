import React, { Component } from 'react';
import { List, ListItem, Card, CardItem, Text, Left, H1 } from 'native-base';
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
            <Card>
                <CardItem header>
                    <H1>{disciplina.codigo} - {disciplina.nome}</H1>
                </CardItem>
                <CardItem>
                    <Left>
                        <Text>Aprovado</Text>
                        <Text>Média Final</Text>
                        <Text>Frequência</Text>
                        <Text>Observação</Text>
                    </Left>
                </CardItem>
                <CardItem>
                    <Left>
                        <Text>{disciplina.aprovado}</Text>
                        <Text>{disciplina.mediaFinal}</Text>
                        <Text>{disciplina.frequencia}</Text>
                        <Text>{disciplina.observação}</Text>
                    </Left>
                </CardItem>
            </Card>
        );
    }
}

export default CardDisciplina;
import React, { Component } from 'react';
import { List, ListItem, Card, CardItem, Text, Left, H3 } from 'native-base';
import PropTypes from 'prop-types';

import styles from './styles';

class CardProva extends Component {
    static propTypes = {
        nota: PropTypes.shape({
            disciplina: PropTypes.object,
            mediaFinal: PropTypes.number,
            faltas: PropTypes.number,
            frequencia: PropTypes.number,
            avaliacoes: PropTypes.array,
        }).isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            nota: this.props.nota,
        };
    }

    render() {
        const { nota } = this.props;
        return (
            <Card style={styles.card}>
                <CardItem header>
                    <H3 style={styles.titulo}>{nota.disciplina.codigo} - {nota.disciplina.nome}</H3>
                </CardItem>
                <CardItem>
                    <Text style={styles.legenda}>Geral</Text>
                </CardItem>
                <CardItem>
                    <Left>
                        <Text>Média Final:</Text>
                        <Text>{nota.mediaFinal}</Text>
                    </Left>
                </CardItem>
                <CardItem>
                    <Left>
                        <Text>Faltas:</Text>
                        <Text>{nota.faltas}</Text>
                    </Left>
                </CardItem>
                <CardItem>
                    <Left>
                        <Text>Frequência:</Text>
                        <Text>{nota.frequencia}%</Text>
                    </Left>
                </CardItem>
                <CardItem>
                    <Text style={styles.legenda}>Notas</Text>
                </CardItem>
                <List
                    dataArray={nota.avaliacoes}
                    renderRow={data =>
                        (<ListItem style={styles.item}>
                            <Left>
                                <Text style={styles.text}>{data.avaliacao}:</Text>
                                <Text style={styles.text}>{data.nota}</Text>
                            </Left>
                        </ListItem>)} />
            </Card>
        );
    }
}

export default CardProva;
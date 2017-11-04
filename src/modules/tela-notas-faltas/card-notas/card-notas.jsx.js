import React, { Component } from 'react';
import { List, ListItem, Card, CardItem, Text, Left, H1 } from 'native-base';
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
            <Card>
                <CardItem header>
                    <H1>{nota.disciplina.codigo} - {nota.disciplina.nome}</H1>
                </CardItem>
                <CardItem>
                    <Left>
                        <Text>Média Final</Text>
                        <Text>{nota.mediaFinal}</Text>
                    </Left>
                </CardItem>
                <CardItem>
                    <Left>
                        <Text>Quantidade de Faltas</Text>
                        <Text>{nota.faltas}</Text>
                    </Left>
                </CardItem>
                <CardItem>
                    <Left>
                        <Text>Frequência</Text>
                        <Text>{nota.frequencia}%</Text>
                    </Left>
                </CardItem>
                <List
                    dataArray={nota.avaliacoes}
                    renderRow={data =>
                        (<ListItem style={styles.item}>
                            <Left>
                                <Text style={styles.text}>{data.codigo} - {data.avaliacao}</Text>
                                <Text style={styles.text}>{data.nota}</Text>
                            </Left>
                        </ListItem>)} />
            </Card>
        );
    }
}

export default CardProva;
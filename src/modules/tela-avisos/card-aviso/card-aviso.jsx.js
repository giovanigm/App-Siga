import React, { Component } from 'react';
import { Card, CardItem, Body, H3 } from 'native-base';
import PropTypes from 'prop-types';
import HTMLView from 'react-native-htmlview';

import styles from './styles';

class CardAviso extends Component {
    static propTypes = {
        aviso: PropTypes.shape({
            codigo: PropTypes.number,
            titulo: PropTypes.string,
            conteudo: PropTypes.string,
        }).isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            aviso: this.props.aviso,
        };
    }

    render() {
        const { aviso } = this.props;
        return (
            <Card style={styles.card}>
                <CardItem header>
                    <H3 style={styles.titulo}>{aviso.titulo}</H3>
                </CardItem>
                <CardItem>
                    <Body>
                        <HTMLView
                            value={aviso.conteudo} />
                    </Body>
                </CardItem>
            </Card>
        );
    }
}

export default CardAviso;

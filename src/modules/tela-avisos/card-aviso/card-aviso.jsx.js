import React, { Component } from 'react';
import { List, ListItem, Card, CardItem, Text, Body, H1 } from 'native-base';
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
            <Card>
                <CardItem header>
                    <H1>{aviso.titulo}</H1>
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

import React, { Component } from 'react';
import { Linking } from 'react-native';
import { List, Button, Card, CardItem, Text, Body, H3 } from 'native-base';
import PropTypes from 'prop-types';

import styles from './styles';

class CardMaterial extends Component {
    static propTypes = {
        material: PropTypes.shape({
            tipoArquivo: PropTypes.string,
            nome: PropTypes.string,
            descricao: PropTypes.string,
            link: PropTypes.string,
        }).isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            material: this.props.material,
        };
    }

    render() {
        const { material } = this.props;
        return (
            <Card>
                <CardItem header>
                    <H3>{material.tipoArquivo} - {material.nome}</H3>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>{material.descricao}</Text>
                    </Body>
                </CardItem>
                <CardItem>
                    <Button onPress={() => Linking.openURL(material.link)}>
                        <Text>Baixar</Text>
                    </Button>
                </CardItem>
            </Card>
        );
    }
}

export default CardMaterial;

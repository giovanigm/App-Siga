import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { CachedImage } from 'react-native-img-cache';

import styles from './styles';

class ItemFranquia extends Component {
    static propTypes = {
        eventEmitter: PropTypes.shape({
            emit: PropTypes.func,
        }).isRequired,
        franquia: PropTypes.shape({
            codigo: PropTypes.number,
            nome: PropTypes.string,
        }).isRequired,
    };

    constructor(props) {
        super(props);

        this.onSelecionaFranquia = this.onSelecionaFranquia.bind(this);
    }

    onSelecionaFranquia() {
        this.props.eventEmitter.emit('franquia.selecionada', this.props.franquia);
    }

    render() {
        const { franquia } = this.props;
        return (
            <View style={styles.cardContainer}>
                <TouchableOpacity activeOpacity={0.9} onPress={this.onSelecionaFranquia}>
                    <View style={styles.card}>
                        <CachedImage
                            source={{ uri: `http://coife.no-ip.org:8080/fachadas/${franquia.codigo}.jpg` }}
                            style={styles.cardImage}>
                            <View style={styles.cardDetails}>
                                <Text
                                    style={styles.cardTitle}
                                    numberOfLines={3}>
                                    {franquia.nome}
                                </Text>
                            </View>
                        </CachedImage>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default ItemFranquia;

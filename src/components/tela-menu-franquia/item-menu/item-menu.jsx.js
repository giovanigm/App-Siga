import React, { Component } from 'react';
import {
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class ItemMenu extends Component {
    static propTypes = {
        eventEmitter: PropTypes.shape({
            emit: PropTypes.func,
        }).isRequired,
        menu: PropTypes.shape({
            icone: PropTypes.number,
            titulo: PropTypes.string,
        }).isRequired,
    }

    constructor(props) {
        super(props);

        this.onSelecionaMenu = this.onSelecionaMenu.bind(this);
    }

    onSelecionaMenu() {
        this.props.eventEmitter.emit('menu.selecionado', this.props.menu);
    }

    render() {
        const { menu } = this.props;
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={this.onSelecionaMenu}
                style={styles.itemContainer}>
                <Image
                    source={menu.icone}
                    style={styles.icone}
                    resizeMode="contain" />
                <Text style={styles.titulo}>
                    {menu.titulo}
                </Text>
            </TouchableOpacity>
        );
    }
}

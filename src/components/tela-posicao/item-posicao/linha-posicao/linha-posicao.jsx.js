import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const LinhaPosicao = ({ item, valor, escuro }) => (
    <View style={escuro ? styles.linhaEscuraContainer : styles.linhaContainer}>
        <Text style={escuro ? styles.textoBranco : styles.texto}>{item}</Text>
        <Text style={escuro ? styles.textoBranco : styles.texto}>{valor}</Text>
    </View>
);


LinhaPosicao.propTypes = {
    item: PropTypes.string.isRequired,
    valor: PropTypes.string.isRequired,
    escuro: PropTypes.bool.isRequired,
};


export default LinhaPosicao;

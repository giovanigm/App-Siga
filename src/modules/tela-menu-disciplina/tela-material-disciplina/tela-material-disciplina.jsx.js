import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, List } from 'native-base';

import CardMaterial from './card-material';

import styles from './styles';

const materiais = [
    {
        tipoArquivo: 'PDF',
        nome: 'Ética e responsabilidade Social',
        descricao: 'Conteúdo de aula',
        link: 'http://google.com',
    },
    {
        tipoArquivo: 'ZIP',
        nome: 'Instalação...',
        descricao: 'Prolog',
        link: 'http://google.com',
    },
    {
        tipoArquivo: 'PDF',
        nome: 'Agentes Inteligentes',
        descricao: 'Agentes Inteligentes',
        link: 'http://google.com',
    },
];

class TelaMaterialDisciplina extends Component {
    static navigatorStyle = styles.navigatorStyle;

    static propTypes = {

    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <List
                        dataArray={materiais}
                        renderRow={data =>
                            (<CardMaterial style={styles.item} material={data} />)} />
                </Content>
            </Container>
        );
    }
}

export default TelaMaterialDisciplina;

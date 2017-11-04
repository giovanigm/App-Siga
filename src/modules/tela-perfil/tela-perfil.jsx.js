import React, { Component } from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Content, Body, Card, CardItem, Text, H1, H2, List, ListItem } from 'native-base';
import Ionicon from 'react-native-vector-icons/Ionicons';

import styles from './styles';


const perfil = {
    nome: 'Joselito da Silva',
    urlFoto: '',
    ra: '142B51',
    emails: [
        'joselito@gmail.com',
        'joselito.silva@fatec.sp.gov.br',
    ],
    cpf: '367.876.970-00',
    dataNascimento: '20/10/1997',
    pp: 82.6,
    pr: 8.71,
};

class TelaPerfil extends Component {
    static navigatorStyle = styles.navigatorStyle;

    static propTypes = {
        navigator: PropTypes.shape({
            setButtons: PropTypes.func,
        }).isRequired,
    }

    componentDidMount() {
        if (Platform.OS === 'ios') {
            Ionicon.getImageSource('ios-menu', 30).then((menu) => {
                this.props.navigator.setButtons({
                    leftButtons: [
                        { id: 'sideMenu', icon: menu },
                    ],
                });
            });
        }
    }


    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Card style={styles.card}>
                        <CardItem header>
                            <H1>{perfil.nome}</H1>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>RA: {perfil.ra}</Text>
                            </Body>
                        </CardItem>
                        <CardItem style={styles.indices}>
                            <Body>
                                <H2>E-mails</H2>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <List
                                dataArray={perfil.emails}
                                renderRow={data =>
                                    (<ListItem style={styles.item}>
                                        <Text>{data}</Text>
                                    </ListItem>)} />
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>CPF : {perfil.cpf}</Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>Nascimento: {perfil.dataNascimento}</Text>
                            </Body>
                        </CardItem>
                        <CardItem style={styles.indices}>
                            <Body>
                                <H2>Índices</H2>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>PP: {perfil.pp}        PR: {perfil.pr}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default TelaPerfil;

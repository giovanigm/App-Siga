import React, { Component } from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Content, Spinner, Body, Card, CardItem, Text, H1, H2, List, ListItem } from 'native-base';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as perfilActions from './actions';

import styles from './styles';

class TelaPerfil extends Component {
    static navigatorStyle = styles.navigatorStyle;

    static propTypes = {
        navigator: PropTypes.shape({
            setButtons: PropTypes.func,
        }).isRequired,
        actions: PropTypes.shape({
            fetchAluno: PropTypes.func,
        }).isRequired,
        perfil: PropTypes.shape({
            data: PropTypes.object,
            isFetching: false,
        }).isRequired,
    }

    componentWillMount() {
        this.fetchAluno('123456789');
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

    onRefresh(usuario) {
        this.fetchAluno(usuario);
    }

    fetchAluno(usuario) {
        this.props.actions.fetchAluno(usuario);
    }


    render() {
        const perfil = this.props.perfil.data;
        return (
            this.props.perfil.isFetching ?
                <Container style={styles.progressBar}><Spinner color="orange" /></Container>
                : <Container style={styles.container}>
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

function mapStateToProps(state, ownProps) {
    return {
        perfil: state.perfil,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(perfilActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TelaPerfil);


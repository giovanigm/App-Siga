import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Thumbnail, Spinner, Card, CardItem, Left, Text, H1, H3, List } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as perfilActions from './actions';

import styles from './styles';

class TelaPerfil extends Component {
    static navigatorStyle = styles.navigatorStyle;

    static propTypes = {
        actions: PropTypes.shape({
            fetchAluno: PropTypes.func,
        }).isRequired,
        perfil: PropTypes.shape({
            data: PropTypes.object,
            isFetching: PropTypes.bool,
        }).isRequired,
    }

    componentWillMount() {
        this.fetchAluno();
    }

    onRefresh() {
        this.fetchAluno();
    }

    fetchAluno() {
        this.props.actions.fetchAluno();
    }


    render() {
        const perfil = this.props.perfil.data;
        return (
            this.props.perfil.isFetching ?
                <Container style={styles.progressBar}><Spinner color="#b42c2f" /></Container>
                : <Container style={styles.container}>
                    <Content>
                        <Card style={styles.card}>
                            <CardItem>
                                <Content contentContainerStyle={{ alignItems: 'center', marginTop: 10 }}>
                                    <Thumbnail large source={{ uri: perfil.urlFoto }} />
                                </Content>
                            </CardItem>
                            <CardItem>
                                <Content contentContainerStyle={{ alignItems: 'center' }}>
                                    <H1>{perfil.nome}</H1>
                                </Content>
                            </CardItem>
                            <CardItem style={styles.indices}>
                                <Content>
                                    <Text style={styles.legenda}>Dados Gerais</Text>
                                </Content>
                            </CardItem>
                            <CardItem>
                                <Left><Text>RA: {perfil.ra}</Text></Left>
                            </CardItem>
                            <CardItem>
                                <Left><Text>CPF : {perfil.cpf}</Text></Left>
                            </CardItem>
                            <CardItem>
                                <Left><Text>Nascimento: {perfil.dataNascimento}</Text></Left>
                            </CardItem>
                            <CardItem style={styles.indices}>
                                <Content>
                                    <Text style={styles.legenda}>E-mails</Text>
                                </Content>
                            </CardItem>
                            <CardItem>
                                <List
                                    dataArray={perfil.emails}
                                    renderRow={data =>
                                        (<CardItem style={styles.item}>
                                            <Text>{data}</Text>
                                        </CardItem>)} />
                            </CardItem>
                            <CardItem style={styles.indices}>
                                <Content>
                                    <Text style={styles.legenda}>Índices</Text>
                                </Content>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Text>PP: {perfil.pp}        PR: {perfil.pr}</Text>
                                </Left>
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


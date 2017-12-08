import React, { Component } from 'react';
import { Card, CardItem, Spinner, Left, H3, Text } from 'native-base';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as apresentacaoActions from './actions';

import styles from './styles';

class CardApresentacao extends Component {
    static propTypes = {
        actions: PropTypes.shape({
            fetchDisciplinaApresentacao: PropTypes.func,
        }).isRequired,
        apresentacao: PropTypes.shape({
            data: PropTypes.object,
            isFetching: PropTypes.bool,
        }).isRequired,
    };

    componentWillMount() {
        this.fetchDisciplinaApresentacao();
    }

    onRefresh() {
        this.fetchDisciplinaApresentacao();
    }

    fetchDisciplinaApresentacao() {
        this.props.actions.fetchDisciplinaApresentacao();
    }

    render() {
        const { apresentacao } = this.props;
        return (
            this.props.apresentacao.isFetching ?
                <Card style={styles.progressBar}><Spinner color="#b42c2f" /></Card>
                : <Card style={styles.card}>
                    <CardItem header>
                        <H3 style={styles.titulo}>{apresentacao.data.titulo}</H3>
                    </CardItem>
                    <CardItem>
                        <Left><Text>{apresentacao.data.apresentacao}</Text></Left>
                    </CardItem>
                    <CardItem>
                        <Text style={styles.legenda}>Área</Text>
                    </CardItem>
                    <CardItem>
                        <Left><Text>{apresentacao.data.area}</Text></Left>
                    </CardItem>
                    <CardItem>
                        <Text style={styles.legenda}>Ementa</Text>
                    </CardItem>
                    <CardItem>
                        <Left><Text>{apresentacao.data.ementa}</Text></Left>
                    </CardItem>
                    <CardItem>
                        <Text style={styles.legenda}>Objetivo</Text>
                    </CardItem>
                    <CardItem>
                        <Left><Text>{apresentacao.data.objetivo}</Text></Left>
                    </CardItem>
                    <CardItem>
                        <Text style={styles.legenda}>Carga Horária</Text>
                    </CardItem>
                    <CardItem>
                        <Left><Text>Semanais: {apresentacao.data.cargas.semanais}</Text></Left>
                    </CardItem>
                    <CardItem>
                        <Left><Text>Teóricas: {apresentacao.data.cargas.teoricas}</Text></Left>
                    </CardItem>
                    <CardItem>
                        <Left><Text>Práticas: {apresentacao.data.cargas.praticas}</Text></Left>
                    </CardItem>
                    <CardItem>
                        <Left><Text>Totais: {apresentacao.data.cargas.totais}</Text></Left>
                    </CardItem>
                </Card>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        apresentacao: state.apresentacao,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(apresentacaoActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardApresentacao);


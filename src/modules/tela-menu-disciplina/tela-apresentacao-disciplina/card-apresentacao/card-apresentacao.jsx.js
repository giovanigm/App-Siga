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
            isFetching: false,
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
                <Card style={styles.progressBar}><Spinner color="orange" /></Card>
                : <Card style={styles.card}>
                    <CardItem header>
                        <H3>{apresentacao.data.titulo}</H3>
                    </CardItem>
                    <CardItem>
                        <Text>{apresentacao.data.apresentacao}</Text>
                    </CardItem>
                    <CardItem>
                        <Text>Área: {apresentacao.data.area}</Text>
                    </CardItem>
                    <CardItem>
                        <Text>Ementa: {apresentacao.data.ementa}</Text>
                    </CardItem>
                    <CardItem>
                        <Text>Objetivo: {apresentacao.data.objetivo}</Text>
                    </CardItem>
                    <CardItem>
                        <H3>Cargas</H3>
                    </CardItem>
                    <CardItem>
                        <Text>Semanais: {apresentacao.data.cargas.semanais}</Text>
                    </CardItem>
                    <CardItem>
                        <Text>Teóricas: {apresentacao.data.cargas.teoricas}</Text>
                    </CardItem>
                    <CardItem>
                        <Text>Práticas: {apresentacao.data.cargas.praticas}</Text>
                    </CardItem>
                    <CardItem>
                        <Text>Totais: {apresentacao.data.cargas.totais}</Text>
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


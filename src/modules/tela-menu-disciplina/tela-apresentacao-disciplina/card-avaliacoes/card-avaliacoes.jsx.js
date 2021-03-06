import React, { Component } from 'react';
import { Card, CardItem, Spinner, Left, H3, Text, List } from 'native-base';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as avaliacoesActions from './actions';

import styles from './styles';

class CardAvaliacoes extends Component {
    static propTypes = {
        actions: PropTypes.shape({
            fetchDisciplinaAvaliacoes: PropTypes.func,
        }).isRequired,
        avaliacoes: PropTypes.shape({
            data: PropTypes.object,
            isFetching: PropTypes.bool,
        }).isRequired,
    };

    componentWillMount() {
        this.fetchDisciplinaAvaliacoes();
    }

    onRefresh() {
        this.fetchDisciplinaAvaliacoes();
    }

    fetchDisciplinaAvaliacoes() {
        this.props.actions.fetchDisciplinaAvaliacoes();
    }

    render() {
        const { avaliacoes } = this.props;
        return (
            this.props.avaliacoes.isFetching ?
                <Card style={styles.progressBar}><Spinner color="#b42c2f" /></Card>
                : <Card style={styles.card}>
                    <CardItem header>
                        <H3 style={styles.titulo}>Avaliações</H3>
                    </CardItem>
                    <CardItem>
                        <Text style={styles.legenda}>Fórmula</Text>
                    </CardItem>
                    <CardItem>
                        <Left><Text>{avaliacoes.data.formula}</Text></Left>
                    </CardItem>
                    <CardItem>
                        <Text style={styles.legenda}>Observações</Text>
                    </CardItem>
                    <CardItem>
                        <Left><Text>{avaliacoes.data.observacoes}</Text></Left>
                    </CardItem>
                    <List
                        dataArray={avaliacoes.data.avaliacoes}
                        renderRow={data =>
                            (<CardItem style={styles.item}>
                                <Left>
                                    <Text style={styles.text}>{data.nome}</Text>
                                </Left>
                                <Left>
                                    <Text style={styles.text}>{data.descricao}</Text>
                                </Left>
                            </CardItem>)} />
                </Card>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        avaliacoes: state.avaliacoes,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(avaliacoesActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardAvaliacoes);

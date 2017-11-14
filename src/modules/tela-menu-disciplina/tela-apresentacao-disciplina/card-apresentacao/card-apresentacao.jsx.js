import React, { Component } from 'react';
import { Card, CardItem, Spinner, Left, H3 } from 'native-base';
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
        this.fetchDisciplinaApresentacao('HSO003');
    }

    onRefresh(codigo) {
        this.fetchDisciplinaApresentacao(codigo);
    }

    fetchDisciplinaApresentacao(codigo) {
        this.props.actions.fetchDisciplinaApresentacao(codigo);
    }

    render() {
        const { apresentacao } = this.props;
        return (
            this.props.apresentacao.isFetching ?
                <Card style={styles.progressBar}><Spinner color="orange" /></Card>
                : <Card style={styles.card}>
                    <CardItem header>
                        <H3></H3>
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


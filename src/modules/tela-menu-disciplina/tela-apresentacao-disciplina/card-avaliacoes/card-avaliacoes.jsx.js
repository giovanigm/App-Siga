import React, { Component } from 'react';
import { Card, CardItem, Spinner, Left, H3 } from 'native-base';
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
            isFetching: false,
        }).isRequired,
    };

    componentWillMount() {
        this.fetchDisciplinaAvaliacoes('HSO003');
    }

    onRefresh(codigo) {
        this.fetchDisciplinaAvaliacoes(codigo);
    }

    fetchDisciplinaAvaliacoes(codigo) {
        this.props.actions.fetchDisciplinaAvaliacoes(codigo);
    }

    render() {
        const { avaliacoes } = this.props;
        return (
            this.props.avaliacoes.isFetching ?
                <Card style={styles.progressBar}><Spinner color="orange" /></Card>
                : <Card style={styles.card}>
                    <CardItem header>
                        <H3 />
                    </CardItem>
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

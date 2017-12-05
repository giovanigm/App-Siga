import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Spinner, List, Text, H1, H2 } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as notasActions from './actions';

import CardNotas from './card-notas';

import styles from './styles';


class TelaNotasFaltas extends Component {
    static navigatorStyle = styles.navigatorStyle;

    static propTypes = {
        actions: PropTypes.shape({
            fetchAlunoNotas: PropTypes.func,
        }).isRequired,
        notas: PropTypes.shape({
            data: PropTypes.array,
            isFetching: PropTypes.bool,
        }).isRequired,
    }

    componentWillMount() {
        this.fetchAlunoNotas();
    }

    onRefresh() {
        this.fetchAlunoNotas();
    }

    fetchAlunoNotas() {
        this.props.actions.fetchAlunoNotas();
    }

    render() {
        return (
            this.props.notas.isFetching ?
                <Container style={styles.progressBar}><Spinner color="orange" /></Container>
                : <Container style={styles.container}>
                    <Content>
                        <List
                            dataArray={this.props.notas.data}
                            renderRow={data =>
                                (<CardNotas nota={data} />)} />
                    </Content>
                </Container>
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {
        notas: state.notas,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(notasActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TelaNotasFaltas);


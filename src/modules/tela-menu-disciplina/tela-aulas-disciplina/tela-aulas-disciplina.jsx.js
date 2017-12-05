import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, List, Spinner } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as aulasActions from './actions';

import CardAula from './card-aula';

import styles from './styles';

class TelaAulasDisciplina extends Component {
    static navigatorStyle = styles.navigatorStyle;

    static propTypes = {
        actions: PropTypes.shape({
            fetchDisciplinaAulas: PropTypes.func,
        }).isRequired,
        aulas: PropTypes.shape({
            data: PropTypes.array,
            isFetching: false,
        }).isRequired,
    }

    componentWillMount() {
        this.fetchDisciplinaAulas();
    }

    onRefresh() {
        this.fetchDisciplinaAulas();
    }

    fetchDisciplinaAulas() {
        this.props.actions.fetchDisciplinaAulas();
    }

    render() {
        return (
            this.props.aulas.isFetching ?
                <Container style={styles.progressBar}><Spinner color="orange" /></Container>
                : <Container style={styles.container}>
                    <Content>
                        <List
                            dataArray={this.props.aulas.data}
                            renderRow={data =>
                                (<CardAula aula={data} />)} />
                    </Content>
                </Container>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        aulas: state.aulas,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(aulasActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TelaAulasDisciplina);


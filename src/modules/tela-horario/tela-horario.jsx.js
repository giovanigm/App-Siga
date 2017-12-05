import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, List, Spinner } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as horarioActions from './actions';

import CardHorario from './card-horario';

import styles from './styles';

class TelaHorario extends Component {
    static navigatorStyle = styles.navigatorStyle;

    static propTypes = {
        actions: PropTypes.shape({
            fetchAlunoHorario: PropTypes.func,
        }).isRequired,
        horario: PropTypes.shape({
            data: PropTypes.array,
            isFetching: PropTypes.bool,
        }).isRequired,
    }

    componentWillMount() {
        this.fetchAlunoHorario();
    }

    onRefresh() {
        this.fetchAlunoHorario();
    }

    fetchAlunoHorario() {
        this.props.actions.fetchAlunoHorario();
    }

    render() {
        return (
            this.props.horario.isFetching ?
                <Container style={styles.progressBar}><Spinner color="orange" /></Container>
                : <Container style={styles.container}>
                    <Content>
                        <List
                            dataArray={this.props.horario.data}
                            renderRow={data =>
                                (<CardHorario horario={data} />)} />
                    </Content>
                </Container>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        horario: state.horario,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(horarioActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TelaHorario);


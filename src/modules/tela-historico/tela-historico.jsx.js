import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Spinner, List, ListItem, Text } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as historicoActions from './actions';

import CardDisciplina from './card-disciplina';

import styles from './styles';


class TelaHistorico extends Component {
    static navigatorStyle = styles.navigatorStyle;

    static propTypes = {
        actions: PropTypes.shape({
            fetchAlunoHistorico: PropTypes.func,
        }).isRequired,
        historico: PropTypes.shape({
            data: PropTypes.array,
            isFetching: PropTypes.bool,
        }).isRequired,
    }

    componentWillMount() {
        this.fetchAlunoHistorico();
    }

    onRefresh() {
        this.fetchAlunoHistorico();
    }

    fetchAlunoHistorico() {
        this.props.actions.fetchAlunoHistorico();
    }

    render() {
        return (
            this.props.historico.isFetching ?
                <Container style={styles.progressBar}><Spinner color="orange" /></Container>
                : <Container style={styles.container}>
                    <Content>
                        <List
                            dataArray={this.props.historico.data}
                            renderRow={data =>
                                (<Content>
                                    <ListItem itemDivider>
                                        <Text>{data.periodo}º Período</Text>
                                    </ListItem>
                                    <List
                                        dataArray={data.disciplinas}
                                        renderRow={dadosDisciplina => (<CardDisciplina disciplina={dadosDisciplina} />)} />
                                </Content>)} />
                    </Content>
                </Container>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        historico: state.historico,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(historicoActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TelaHistorico);

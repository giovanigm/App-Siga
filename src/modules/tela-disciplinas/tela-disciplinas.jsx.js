import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, List, ListItem, Left, Spinner, CardItem, Text, H1, H2 } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as disciplinasActions from './actions';

import styles from './styles';


class TelaDisciplinas extends Component {
    static navigatorStyle = styles.navigatorStyle;

    static propTypes = {
        navigator: PropTypes.shape({
            push: PropTypes.func,
        }).isRequired,
        actions: PropTypes.shape({
            fetchAlunoDisciplinas: PropTypes.func,
            selecionaDisciplina: PropTypes.func,
        }).isRequired,
        disciplinas: PropTypes.shape({
            data: PropTypes.array,
            isFetching: PropTypes.bool,
        }).isRequired,
    }

    componentWillMount() {
        this.fetchAlunoDisciplinas();
    }

    onRefresh() {
        this.fetchAlunoDisciplinas();
    }

    fetchAlunoDisciplinas() {
        this.props.actions.fetchAlunoDisciplinas();
    }

    navegaDisciplina = (disciplina) => {
        this.props.actions.selecionaDisciplina(disciplina);
        this.props.navigator.push({
            screen: 'app.Disciplina',
            title: disciplina.nome,
            topTabs: [{
                screenId: 'app.Disciplina.Apresentacao',
                title: 'Apresentação',
            }, {
                screenId: 'app.Disciplina.Material',
                title: 'Material',
            }, {
                screenId: 'app.Disciplina.Aulas',
                title: 'Aulas',
            }],
            passProps: { disciplina },
        });
    }

    render() {
        return (
            this.props.disciplinas.isFetching ?
                <Container style={styles.progressBar}><Spinner color="#b42c2f" /></Container>
                : <Container style={styles.container}>
                    <Content>
                        <List
                            dataArray={this.props.disciplinas.data}
                            renderRow={data =>
                                (<ListItem button onPress={() => this.navegaDisciplina(data)} style={styles.item}>
                                    <Left>
                                        <Text style={styles.text}>{data.codigo}</Text>
                                        <Text style={styles.text}>{data.nome}</Text>
                                    </Left>
                                </ListItem>)} />
                    </Content>
                </Container>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        disciplinas: state.disciplinas,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(disciplinasActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TelaDisciplinas);


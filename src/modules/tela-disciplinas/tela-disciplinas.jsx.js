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
        }).isRequired,
        disciplinas: PropTypes.shape({
            data: PropTypes.array,
            isFetching: false,
        }).isRequired,
    }

    componentWillMount() {
        this.fetchAlunoDisciplinas('123456789');
    }

    onRefresh(usuario) {
        this.fetchAlunoDisciplinas(usuario);
    }

    fetchAlunoDisciplinas(usuario) {
        this.props.actions.fetchAlunoDisciplinas(usuario);
    }

    navegaDisciplina = (nomeDisciplina) => {
        this.props.navigator.push({
            screen: 'app.Disciplina',
            title: nomeDisciplina,
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
        });
    }

    render() {
        return (
            this.props.disciplinas.isFetching ?
                <Container style={styles.progressBar}><Spinner color="orange" /></Container>
                : <Container style={styles.container}>
                    <Content>
                        <List
                            dataArray={this.props.disciplinas.data}
                            renderRow={data =>
                                (<ListItem button onPress={() => this.navegaDisciplina(data.nome)} style={styles.item}>
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


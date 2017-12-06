import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, List, Spinner, Card, CardItem, Text, H1, H2 } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as provasActions from './actions';

import styles from './styles';

import CardProva from './card-prova';

class TelaCalendarioProvas extends Component {
    static navigatorStyle = styles.navigatorStyle;

    static propTypes = {
        actions: PropTypes.shape({
            fetchAlunoProvas: PropTypes.func,
        }).isRequired,
        provas: PropTypes.shape({
            data: PropTypes.array,
            isFetching: PropTypes.bool,
        }).isRequired,
    }

    componentWillMount() {
        this.fetchAlunoProvas();
    }

    onRefresh() {
        this.fetchAlunoProvas();
    }

    fetchAlunoProvas() {
        this.props.actions.fetchAlunoProvas();
    }

    render() {
        return (
            this.props.provas.isFetching ?
                <Container style={styles.progressBar}><Spinner color="#b42c2f" /></Container>
                : <Container style={styles.container}>
                    <Content>
                        <List
                            dataArray={this.props.provas.data}
                            renderRow={data =>
                                (<CardProva prova={data} />)} />
                    </Content>
                </Container>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        provas: state.provas,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(provasActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TelaCalendarioProvas);


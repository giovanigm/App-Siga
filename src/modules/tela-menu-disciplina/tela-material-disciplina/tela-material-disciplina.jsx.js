import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, List, Spinner } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as materiaisActions from './actions';

import CardMaterial from './card-material';

import styles from './styles';


class TelaMaterialDisciplina extends Component {
    static navigatorStyle = styles.navigatorStyle;

    static propTypes = {
        actions: PropTypes.shape({
            fetchDisciplinaMateriais: PropTypes.func,
        }).isRequired,
        materiais: PropTypes.shape({
            data: PropTypes.array,
            isFetching: PropTypes.bool,
        }).isRequired,
    }

    componentWillMount() {
        this.fetchDisciplinaMateriais();
    }

    onRefresh() {
        this.fetchDisciplinaMateriais();
    }

    fetchDisciplinaMateriais() {
        this.props.actions.fetchDisciplinaMateriais();
    }

    render() {
        return (
            this.props.materiais.isFetching ?
                <Container style={styles.progressBar}><Spinner color="orange" /></Container>
                : <Container style={styles.container}>
                    <Content>
                        <List
                            dataArray={this.props.materiais.data}
                            renderRow={data =>
                                (<CardMaterial material={data} />)} />
                    </Content>
                </Container>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        materiais: state.materiais,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(materiaisActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TelaMaterialDisciplina);


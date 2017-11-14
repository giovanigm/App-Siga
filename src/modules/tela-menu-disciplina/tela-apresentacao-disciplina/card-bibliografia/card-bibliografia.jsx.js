import React, { Component } from 'react';
import { List, Card, CardItem, Text, Left, H3, Spinner } from 'native-base';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as bibliografiaActions from './actions';

import styles from './styles';

class CardBibliografia extends Component {
    static propTypes = {
        actions: PropTypes.shape({
            fetchDisciplinaBibliografia: PropTypes.func,
        }).isRequired,
        bibliografia: PropTypes.shape({
            data: PropTypes.array,
            isFetching: false,
        }).isRequired,
    };

    componentWillMount() {
        this.fetchDisciplinaBibliografia('HSO003');
    }

    onRefresh(codigo) {
        this.fetchDisciplinaBibliografia(codigo);
    }

    fetchDisciplinaBibliografia(codigo) {
        this.props.actions.fetchDisciplinaBibliografia(codigo);
    }

    render() {
        const { bibliografia } = this.props;
        return (
            this.props.bibliografia.isFetching ?
                <Card style={styles.progressBar}><Spinner color="orange" /></Card>
                : <Card style={styles.card}>
                    <CardItem header>
                        <H3>Bibliografia</H3>
                    </CardItem>
                    <List
                        dataArray={bibliografia.data}
                        renderRow={data =>
                            (<CardItem style={styles.item}>
                                <Left>
                                    <Text style={styles.text}>{data}</Text>
                                </Left>
                            </CardItem>)} />
                </Card>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        bibliografia: state.bibliografia,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(bibliografiaActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardBibliografia);


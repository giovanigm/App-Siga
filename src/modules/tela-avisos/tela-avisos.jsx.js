import React, { Component } from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Content, List, Spinner } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Ionicon from 'react-native-vector-icons/Ionicons';

import * as avisosActions from './actions';

import CardAviso from './card-aviso';

import styles from './styles';

class TelaAvisos extends Component {
    static navigatorStyle = styles.navigatorStyle;

    static propTypes = {
        navigator: PropTypes.shape({
            setButtons: PropTypes.func,
        }).isRequired,
        actions: PropTypes.shape({
            fetchAvisos: PropTypes.func,
        }).isRequired,
        avisos: PropTypes.shape({
            data: PropTypes.array,
            isFetching: PropTypes.bool,
        }).isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentWillMount() {
        this.fetchAvisos();
    }

    componentDidMount() {
        if (Platform.OS === 'ios') {
            Ionicon.getImageSource('ios-menu', 30).then((menu) => {
                this.props.navigator.setButtons({
                    leftButtons: [
                        { id: 'sideMenu', icon: menu },
                    ],
                });
            });
        }
    }

    onRefresh() {
        this.fetchAvisos();
    }

    fetchAvisos() {
        this.props.actions.fetchAvisos();
    }

    render() {
        return (
            this.props.avisos.isFetching ?
                <Container style={styles.progressBar}><Spinner color="#b42c2f" /></Container>
                : <Container style={styles.container}>
                    <Content>
                        <List
                            dataArray={this.props.avisos.data}
                            renderRow={data =>
                                (<CardAviso aviso={data} />)} />
                    </Content>
                </Container>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        avisos: state.avisos,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(avisosActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TelaAvisos);

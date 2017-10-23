import React, { Component } from 'react';
import { ListView, View, Platform, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import { EventEmitter } from 'fbemitter';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Spinner } from 'native-base';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { ImageCache } from 'react-native-img-cache';

import * as franquiasActions from './franquias.actions';
import { geraMensagemErro } from '../../util/apiErrorUtil';
import ItemFranquia from './item-franquia';
import styles from './styles';


class Franquias extends Component {
    static navigatorStyle = styles.navigatorStyle;

    static propTypes = {
        navigator: PropTypes.shape({
            push: PropTypes.func,
            setButtons: PropTypes.func,
            setOnNavigatorEvent: PropTypes.func,
            resetTo: PropTypes.func,
        }).isRequired,
        franquias: PropTypes.shape({
            lista: PropTypes.array,
            errorStatus: PropTypes.number,
        }).isRequired,
        actions: PropTypes.shape({
            retrieveFranquias: PropTypes.func,
            executeLogout: PropTypes.func,
        }).isRequired,
    };


    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            isRefreshing: false,
            franquias: {
                lista: [],
                errorStatus: 0,
            },
        };

        this.viewFranquia = this.viewFranquia.bind(this);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

        this.eventEmitter = (new EventEmitter());
    }

    componentWillMount() {
        this.retrieveFranquias();
    }

    componentDidMount() {
        this.eventEmitter.addListener('franquia.selecionada', (franquia) => {
            this.viewFranquia(franquia);
        }, this);
        Ionicon.getImageSource((Platform.OS === 'ios' ? 'ios-log-out' : 'md-log-out'), 27).then((logout) => {
            this.props.navigator.setButtons({
                rightButtons: [
                    { id: 'logout', icon: logout },
                ],
            });
        });
    }

    onNavigatorEvent(event) {
        if (event.type === 'NavBarButtonPress') {
            if (event.id === 'logout') {
                AsyncStorage.clear();
                this.props.actions.executeLogout();
                this.navegaTelaLogin();
                ImageCache.get().clear();
            }
        }
    }

    onRefresh() {
        this.setState({ isLoading: true });
        this.retrieveFranquias('isRefreshed');
    }

    navegaTelaLogin = () => {
        this.props.navigator.resetTo({
            screen: 'app.Login',
        });
    }

    retrieveFranquias(isRefreshed) {
        this.props.actions.retrieveFranquias()
            .then(() => {
                if (this.props.franquias.errorStatus > 0) {
                    geraMensagemErro(this.props.franquias.errorStatus);
                } else {
                    const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });
                    const dataSource = ds.cloneWithRows(this.props.franquias.lista);
                    this.setState({
                        franquias: this.props.franquias,
                        dataSource,
                        isLoading: false,
                    });
                }
            });
        if (isRefreshed && this.setState({ isRefreshing: false }));
    }

    viewFranquia(franquia) {
        this.props.navigator.push({
            screen: 'app.MenuFranquia',
            title: franquia.nome,
            passProps: {
                franquia,
            },
        });
    }

    render() {
        const eventEmitter = this.eventEmitter;
        return (
            this.state.isLoading ?
                <View style={styles.progressBar}><Spinner color="orange" /></View>
                : <View style={styles.container}>
                    <ListView
                        style={styles.container}
                        dataSource={this.state.dataSource}
                        renderRow={rowData => (
                            <ItemFranquia
                                eventEmitter={eventEmitter}
                                franquia={rowData} />)}
                        renderSeparator={(sectionId, rowId) => (
                            <View
                                key={rowId}
                                style={styles.seperator} />)} />
                </View>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        franquias: state.franquias,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(franquiasActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Franquias);

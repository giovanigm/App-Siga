import React, { Component } from 'react';
import { ListView, ScrollView, View, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { EventEmitter } from 'fbemitter';
import { Label, Picker, Item, Spinner } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { geraMensagemErro } from '../../util/apiErrorUtil';
import * as posicaoActions from './posicao.actions';
import ItemPosicao from './item-posicao';
import styles from './styles';

class Posicao extends Component {
    static navigatorStyle = styles.navigatorStyle;

    static propTypes = {
        navigator: PropTypes.shape({
            push: PropTypes.func,
        }).isRequired,
        posicao: PropTypes.shape({
            posicoes: PropTypes.array,
            errorStatus: PropTypes.number,
        }).isRequired,
        actions: PropTypes.shape({
            retrievePosicaoFranquia: PropTypes.func,
        }).isRequired,
        franquia: PropTypes.shape({
            codigo: PropTypes.number,
            ano_inicio: PropTypes.number,
        }).isRequired,
    }

    constructor(props) {
        super(props);

        const date = new Date();

        this.state = {
            items: [],
            ano: date.getFullYear(),
            isLoading: true,
            isRefreshing: false,
            selected1: '2017',
            posicao: {
                posicoes: [],
            },
        };

        this.eventEmitter = (new EventEmitter());
        this.onValueChange = this.onValueChange.bind(this);
        this.onRefresh = this.onRefresh.bind(this);
        this.preencheAnos = this.preencheAnos.bind(this);
    }

    componentWillMount() {
        this.preencheAnos();
        this.retrievePosicao();
    }

    componentDidMount() {
        this.eventEmitter.addListener('posicao.selecionada', (posicao) => {
            this.viewPosicaoMes(posicao);
        }, this);
    }

    onValueChange(value) {
        this.setState({
            selected1: value,
            ano: parseInt(value, 10),
        },
        this.onStateUpdatedRefresh);
    }

    onStateUpdatedRefresh = () => {
        this.onRefresh();
    }

    onRefresh() {
        this.setState({ isLoading: true });
        this.retrievePosicao('isRefreshed');
    }

    preencheAnos() {
        const date = new Date();
        const items = [];
        for (let i = date.getFullYear(); i >= this.props.franquia.ano_inicio; i -= 1) {
            items.push(<Item key={i} label={`${i}`} value={`${i}`} />);
        }
        this.setState({
            items,
        });
    }

    retrievePosicao(isRefreshed) {
        this.props.actions.retrievePosicaoFranquia(this.props.franquia.codigo, this.state.ano)
            .then(() => {
                if (this.props.posicao.errorStatus > 0) {
                    geraMensagemErro(this.props.posicao.errorStatus);
                } else {
                    const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });
                    const dataSource = ds.cloneWithRows(this.props.posicao.posicoes);
                    this.setState({
                        posicao: this.props.posicao,
                        dataSource,
                        isLoading: false,
                    });
                }
            });
        if (isRefreshed && this.setState({ isRefreshing: false }));
    }

    viewPosicaoMes(posicao) {
        this.props.navigator.push({
            screen: 'app.PosicaoMes',
            title: `${posicao.nome_mes} de ${this.state.ano}`,
            passProps: {
                codigoFranquia: this.props.franquia.codigo,
                mes: posicao.mes,
                ano: this.state.ano,
            },
        });
    }

    render() {
        return (
            this.state.isLoading ?
                <View style={styles.progressBar}><Spinner color="orange" /></View>
                : <ScrollView style={styles.container}>
                    <View style={styles.inputContainer}>
                        <Label style={styles.legendaTipo}>Ano:</Label>
                        <Picker
                            iosHeader="Ano"
                            mode="dropdown"
                            selectedValue={this.state.selected1}
                            onValueChange={this.onValueChange}
                            style={Platform.OS === 'ios' ? styles.pickerIos : styles.pickerAndroid}>
                            {
                                this.state.items
                            }
                        </Picker>
                    </View>
                    <ListView
                        style={styles.container}
                        dataSource={this.state.dataSource}
                        renderRow={rowData => (
                            <ItemPosicao
                                posicao={rowData}
                                eventEmitter={this.eventEmitter} />)} />
                </ScrollView>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        posicao: state.posicao,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(posicaoActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posicao);

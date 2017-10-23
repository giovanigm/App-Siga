import React, { Component } from 'react';
import {
    View,
    ListView,
} from 'react-native';
import PropTypes from 'prop-types';
import { EventEmitter } from 'fbemitter';

import ItemMenu from './item-menu';
import styles from './styles';
import menus from './menus';

export default class Franquia extends Component {
    static navigatorStyle = styles.navigatorStyle;

    static propTypes = {
        navigator: PropTypes.shape({
            push: PropTypes.func,
        }).isRequired,
        franquia: PropTypes.shape({
            codigo: PropTypes.number,
            nome: PropTypes.string,
            ano_inicio: PropTypes.number,
        }).isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {

        };

        this.viewMenu = this.viewMenu.bind(this);

        this.eventEmitter = (new EventEmitter());
    }

    componentWillMount() {
        this.retrieveData();
    }

    componentDidMount() {
        this.eventEmitter.addListener('menu.selecionado', (menu) => {
            this.viewMenu(menu);
        }, this);
    }

    retrieveData() {
        const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });
        const dataSource = ds.cloneWithRows(menus);
        this.setState({
            dataSource,
        });
    }

    viewMenu(menu) {
        const { franquia } = this.props;
        this.props.navigator.push({
            screen: menu.tela,
            title: menu.titulo,
            passProps: {
                franquia,
            },
        });
    }

    render() {
        const { franquia } = this.props;
        return (
            <ListView
                style={styles.listContainer}
                dataSource={this.state.dataSource}
                renderRow={rowData => (
                    <ItemMenu
                        menu={rowData}
                        franquia={franquia}
                        eventEmitter={this.eventEmitter} />)}
                renderSeparator={(sectionId, rowId) => (
                    <View
                        key={rowId}
                        style={styles.seperator} />)} />
        );
    }
}

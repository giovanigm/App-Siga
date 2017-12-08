import React, { Component } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import {
    Content,
    Text,
    List,
    ListItem,
    Icon,
    Container,
    Left,
} from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as drawerActions from './actions';
import styles from './styles';

const drawerCover = require('../../../../assets/images/drawer-cover.png');

const drawerImage = require('../../../../assets/images/logo_drawer.png');

const datas = [
    {
        name: 'Início - Avisos',
        route: 'app.Avisos',
        icon: 'home',
    },
    {
        name: 'Meus Dados',
        route: 'app.Perfil',
        icon: 'person',
    },
    {
        name: 'Horário de Aulas',
        route: 'app.Horario',
        icon: 'time',
    },
    {
        name: 'Calendário de Provas',
        route: 'app.CalendarioProvas',
        icon: 'calendar',
    },
    {
        name: 'Meu Histórico',
        route: 'app.Historico',
        icon: 'folder-open',
    },
    {
        name: 'Notas e Faltas',
        route: 'app.NotasFaltas',
        icon: 'stats',
    },
    {
        name: 'Minhas Disciplinas',
        route: 'app.Disciplinas',
        icon: 'list-box',
    },
    {
        name: 'Sair',
        route: 'app.Login',
        icon: 'log-out',
    },
];

class Drawer extends Component {
    static propTypes = {
        navigator: PropTypes.shape({
            pop: PropTypes.func,
            push: PropTypes.func,
            popToRoot: PropTypes.func,
            toggleDrawer: PropTypes.func,
            resetTo: PropTypes.func,
        }).isRequired,
        actions: PropTypes.shape({
            logout: PropTypes.func,
        }).isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            shadowOffsetWidth: 1,
            shadowRadius: 4,
        };
    }

    navega = (menu) => {
        if (menu.icon === 'log-out') {
            this.props.actions.logout();
            this.props.navigator.resetTo({
                screen: menu.route,
            });
        } else {
            this.props.navigator.pop({
                animated: false,
            });

            if (menu.icon !== 'home') {
                this.props.navigator.push({
                    screen: menu.route,
                    title: menu.name,
                    animated: false,
                    passProps: {},
                    backButtonHidden: true,
                    leftButtons: [
                        {
                            id: 'sideMenu',
                        },
                    ],
                });
            }
            this.props.navigator.toggleDrawer({
                side: 'left',
                animated: true,
                to: 'close',
            });
        }
    };

    render() {
        return (
            <Container>
                <Content bounces={false} style={{ flex: 1, backgroundColor: '#fff', top: -1 }}>
                    <Image source={drawerCover} style={styles.drawerCover}>
                        <Image square style={styles.drawerImage} source={drawerImage} />
                    </Image>
                    <List
                        dataArray={datas}
                        renderRow={data =>
                            (<ListItem style={styles.item} button noBorder onPress={() => this.navega(data)}>
                                <Left>
                                    <Icon active name={data.icon} style={styles.icon} />
                                    <Text style={styles.text}>
                                        {data.name}
                                    </Text>
                                </Left>
                            </ListItem>)} />
                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        drawer: state.drawer,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(drawerActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);


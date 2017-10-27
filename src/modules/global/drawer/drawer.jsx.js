import React, { Component } from 'react';
import { Image } from 'react-native';

import {
    Content,
    Text,
    List,
    ListItem,
    Icon,
    Container,
    Left,
} from 'native-base';

import styles from './styles';

const drawerCover = require('../../../../assets/images/drawer-cover.png');

const drawerImage = require('../../../../assets/images/logo-kitchen-sink.png');

const datas = [
    {
        name: 'Dados do Aluno',
        route: 'Anatomy',
        icon: 'person',
    },
    {
        name: 'Horário de Aulas',
        route: 'Actionsheet',
        icon: 'time',
    },
    {
        name: 'Calendário de Provas',
        route: 'Header',
        icon: 'calendar',
    },
    {
        name: 'Histórico do Aluno',
        route: 'NHBadge',
        icon: 'folder-open',
    },
    {
        name: 'Notas e Faltas',
        route: 'NHButton',
        icon: 'stats',
    },
    {
        name: 'Minhas Disciplinas',
        route: 'Footer',
        icon: 'list-box',
    },
];

class Drawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shadowOffsetWidth: 1,
            shadowRadius: 4,
        };
    }

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
                            (<ListItem button noBorder>
                                <Left>
                                    <Icon active name={data.icon} style={{ color: '#777', fontSize: 26, width: 30 }} />
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

export default Drawer;

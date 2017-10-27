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
        name: 'Anatomy',
        route: 'Anatomy',
        icon: 'phone-portrait',
    },
    {
        name: 'Actionsheet',
        route: 'Actionsheet',
        icon: 'easel',
        bg: '#C5F442',
    },
    {
        name: 'Header',
        route: 'Header',
        icon: 'phone-portrait',
        bg: '#477EEA',
        types: '8',
    },
    {
        name: 'Footer',
        route: 'Footer',
        icon: 'phone-portrait',
        bg: '#DA4437',
        types: '4',
    },
    {
        name: 'Badge',
        route: 'NHBadge',
        icon: 'notifications',
        bg: '#4DCAE0',
    },
    {
        name: 'Button',
        route: 'NHButton',
        icon: 'radio-button-off',
        bg: '#1EBC7C',
        types: '9',
    },
    {
        name: 'Card',
        route: 'NHCard',
        icon: 'keypad',
        bg: '#B89EF5',
        types: '5',
    },
    {
        name: 'Check Box',
        route: 'NHCheckbox',
        icon: 'checkmark-circle',
        bg: '#EB6B23',
    },
    {
        name: 'Deck Swiper',
        route: 'NHDeckSwiper',
        icon: 'swap',
        bg: '#3591FA',
        types: '2',
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

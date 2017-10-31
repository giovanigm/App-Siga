import React, { Component } from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Content, Body, Card, CardItem, Text, H1, H2 } from 'native-base';
import Ionicon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

class TelaPerfil extends Component {
    static navigatorStyle = styles.navigatorStyle;

    static propTypes = {
        navigator: PropTypes.shape({
            setButtons: PropTypes.func,
        }).isRequired,
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


    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Card style={styles.card}>
                        <CardItem header>
                            <H1>Joselito da Silva</H1>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>RA: 142B51</Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>E-mail: joselito@gmail.com</Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>CPF : 367.876.970-00</Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>Nascimento: 20/10/1997</Text>
                            </Body>
                        </CardItem>
                        <CardItem style={styles.indices}>
                            <Body>
                                <H2>Índices</H2>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>PP: 82,60        PR: 8,71</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default TelaPerfil;

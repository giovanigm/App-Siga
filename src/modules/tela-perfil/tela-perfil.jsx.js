import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Body, Card, CardItem, Text } from 'native-base';

import styles from './styles';

class TelaPerfil extends Component {
    static navigatorStyle = styles.navigatorStyle;
    
    static propTypes = {

    }

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem header>
                            <Text>NativeBase</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>
                                    Eae Cambada
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem footer>
                            <Text>GeekyAnts</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default TelaPerfil;

import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    AsyncStorage,
} from 'react-native';
import { Content, Form, Item, Input, Icon, Button } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as loginActions from './actions';
import BackgroundImage from '../../../assets/images/background.png';
import Logo from '../../../assets/images/logo.png';
import styles from './styles';

class TelaLogin extends Component {
    static navigatorStyle = styles.navigatorStyle;

    static propTypes = {
        navigator: PropTypes.shape({
            resetTo: PropTypes.func,
            setDrawerEnabled: PropTypes.func,
        }).isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            usuario: '',
            senha: '',
        };

        this.props.navigator.setDrawerEnabled({
            side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
            enabled: false, // should the drawer be enabled or disabled (locked closed)
        });
    }

    navegaTelaPerfil = () => {
        this.props.navigator.resetTo({
            screen: 'app.Perfil',
            title: 'Perfil',
            leftButtons: [
                {
                    id: 'sideMenu',
                },
            ],
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={BackgroundImage} style={styles.background}>
                    <View style={styles.logoContainer}>
                        <Image source={Logo} style={styles.logo} resizeMode="contain" />
                    </View>
                    <View style={styles.formContainer}>
                        <Content>
                            <Form>
                                <Item style={styles.inputItem}>
                                    <Icon
                                        active
                                        name="person"
                                        style={styles.icon} />
                                    <Input
                                        placeholder="Usuário"
                                        placeholderTextColor="white"
                                        style={styles.input}
                                        onChangeText={text => this.setState({ usuario: text })}
                                        onSubmitEditing={(event) => {
                                            this.refs.senhaInput._root.focus();
                                        }}
                                        returnKeyType={'next'} />
                                </Item>
                                <Item style={styles.inputItem}>
                                    <Icon
                                        active
                                        name="lock"
                                        style={styles.icon} />
                                    <Input
                                        secureTextEntry
                                        placeholder="Senha"
                                        placeholderTextColor="white"
                                        style={styles.input}
                                        onChangeText={text => this.setState({ senha: text })}
                                        ref="senhaInput"
                                        returnKeyType={'done'} />
                                </Item>
                                <Button
                                    block
                                    style={styles.buttonContainer}
                                    onPress={this.navegaTelaPerfil}>
                                    <Text style={styles.buttonText}>ENTRAR</Text>
                                </Button>
                            </Form>
                        </Content>
                    </View>
                </Image>
                <Spinner visible={this.state.isLoading} />
            </View>
        );
    }
}


export default TelaLogin;

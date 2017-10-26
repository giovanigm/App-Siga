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

import * as loginActions from './login.actions';
import BackgroundImage from '../../../assets/images/background.png';
import Logo from '../../../assets/images/logo.png';
import styles from './styles';

class TelaLogin extends Component {
    static navigatorStyle = styles.navigatorStyle;

    static propTypes = {
        navigator: PropTypes.shape({
            resetTo: PropTypes.func,
        }).isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            usuario: '',
            senha: '',
        };
    }


    saveUserData = (usuario, token) => {
        try {
            AsyncStorage.setItem('usuario', usuario);
            AsyncStorage.setItem('token', token);
        } catch (error) {
            console.log(error);
        }
    }

    navegaTelaFranquias = () => {
        this.props.navigator.resetTo({
            screen: 'app.Franquias',
            title: 'Minhas Franquias',
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
                                    style={styles.buttonContainer}>
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

/*
function mapStateToProps(state, ownProps) {
    return {
        login: state.login,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TelaLogin); */

export default TelaLogin;

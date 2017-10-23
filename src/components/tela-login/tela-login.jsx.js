import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    AsyncStorage,
    KeyboardAvoidingView
} from 'react-native';
import { Content, Form, Item, Input, Icon, Button } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as loginActions from './login.actions';
import { geraMensagemErro } from '../../util/apiErrorUtil';
import BackgroundImage from '../../images/background.png';
import Logo from '../../images/logo.png';
import styles from './styles';

class TelaLogin extends Component {
    static navigatorStyle = styles.navigatorStyle;

    static propTypes = {
        navigator: PropTypes.shape({
            resetTo: PropTypes.func,
        }).isRequired,
        login: PropTypes.shape({
            usuario: PropTypes.string,
            token: PropTypes.string,
            errorStatus: PropTypes.number,
        }).isRequired,
        actions: PropTypes.shape({
            executeLogin: PropTypes.func,
            saveUserDataInStore: PropTypes.func,
        }).isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            usuario: '',
            senha: '',
        };

        this.executeLogin = this.executeLogin.bind(this);
    }

    componentWillMount() {
        try {
            AsyncStorage.getItem('token').then((token) => {
                if (token !== null) {
                    AsyncStorage.getItem('usuario').then((usuario) => {
                        const dados = {
                            token,
                            usuario,
                        };
                        this.props.actions.saveUserDataInStore(dados);
                        this.navegaTelaFranquias();
                    });
                }
            });
        } catch (error) {
            console.log(error);
        }
        return '';
    }

    executeLogin() {
        this.setState({ isLoading: true });
        this.props.actions.executeLogin(this.state.usuario, this.state.senha)
            .then(() => {
                if (this.props.login.errorStatus > 0) {
                    geraMensagemErro(this.props.login.errorStatus);
                    this.setState({ isLoading: false });
                } else {
                    this.saveUserData(this.props.login.usuario, this.props.login.token);
                    this.setState({ login: this.props.login, isLoading: false }, this.navegaTelaFranquias);
                }
            });
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
                                    style={styles.buttonContainer}
                                    onPress={this.executeLogin}>
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

export default connect(mapStateToProps, mapDispatchToProps)(TelaLogin);

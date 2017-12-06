import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    AsyncStorage,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Content, Form, Item, Input, Icon, Button } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as loginActions from './actions';
import BackgroundImage from '../../../assets/images/background.jpg';
import Logo from '../../../assets/images/logo.png';
import styles from './styles';

class TelaLogin extends Component {
    static navigatorStyle = styles.navigatorStyle;

    static propTypes = {
        navigator: PropTypes.shape({
            resetTo: PropTypes.func,
            setDrawerEnabled: PropTypes.func,
        }).isRequired,
        actions: PropTypes.shape({
            login: PropTypes.func,
            loginSuccess: PropTypes.func,
        }).isRequired,
        login: PropTypes.shape({
            data: PropTypes.object,
            isFetching: PropTypes.bool,
            dataFetched: PropTypes.bool,
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
            side: 'left',
            enabled: false,
        });

        this.login = this.login.bind(this);
        this.navegaTelaPerfil = this.navegaTelaPerfil.bind(this);
        this.saveUserData = this.saveUserData.bind(this);
    }

    componentWillMount() {
        try {
            AsyncStorage.getItem('token').then((token) => {
                if (token !== null) {
                    AsyncStorage.getItem('usuario').then((usuario) => {
                        const data = {
                            token,
                            usuario,
                        };
                        this.props.actions.loginSuccess(data);
                        this.navegaTelaPerfil();
                    });
                }
            });
        } catch (error) {
            console.log(error);
        }
        return '';
    }

    saveUserData = (data) => {
        try {
            AsyncStorage.setItem('token', data.token);
            AsyncStorage.setItem('usuario', data.usuario);
        } catch (error) {
            console.log(error);
        }
    }

    login = () => {
        this.setState({ isLoading: true });
        this.props.actions.login(this.state.usuario, this.state.senha);
    }

    navegaTelaPerfil = () => {
        Navigation.startSingleScreenApp({
            screen: {
                screen: 'app.Avisos',
                animationType: 'fade',
                title: 'Início - Avisos',
                leftButtons: [
                    {
                        id: 'sideMenu',
                    },
                ],
                passProps: {},
            },
            drawer: {
                left: {
                    screen: 'app.Drawer',
                    passProps: {},
                },
                disableOpenGesture: false,
            },
        });
    }

    render() {
        if (this.props.login.dataFetched === true) {
            if (this.props.login.data.success === true) {
                this.saveUserData(this.props.login.data);
                this.navegaTelaPerfil();
            }
        }

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
                                        keyboardType={'numeric'}
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
                                    onPress={this.login}>
                                    <Text style={styles.buttonText}>ENTRAR</Text>
                                </Button>
                            </Form>
                        </Content>
                    </View>
                </Image>
                <Spinner visible={this.props.login.isFetching} />
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

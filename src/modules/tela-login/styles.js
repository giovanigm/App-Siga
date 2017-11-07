import Values from '../../constants/values';

const styles = {
    navigatorStyle: {
        navBarHidden: true,
        statusBarColor: '#37474F',
        statusBarTextColorScheme: 'light',
    },
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        justifyContent: 'center',
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: Values.screenHeight / 6,
    },
    formContainer: {
        flex: 1,
        padding: 10,
    },
    input: {
        color: 'white',
        fontSize: Values.screenHeight / 35,
    },
    inputItem: {
        marginBottom: 10,
    },
    buttonContainer: {
        backgroundColor: '#607D8B',
        paddingVertical: 15,
        marginTop: 5,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700',
        fontSize: Values.screenHeight / 40,
    },
    loginButton: {
        backgroundColor: '#f39c12',
    },
    icon: {
        color: 'white',
    },
};

export default styles;

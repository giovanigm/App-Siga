const React = require('react-native');


const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = {
    navigatorStyle: {
        navBarTextColor: '#ffffff',
        navBarBackgroundColor: '#455A64',
        navBarButtonColor: '#ffffff',
        statusBarColor: '#37474F',
        statusBarTextColorScheme: 'light',
    },
    container: {
        backgroundColor: '#fafafa',
    },
    progressBar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fafafa',
    },
    item: {
        width: deviceWidth,
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
    },
    text: {
        fontWeight: Platform.OS === 'ios' ? '500' : '400',
        fontSize: 16,
        marginLeft: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    codigo: {
        textAlign: 'center',
    },
    nome: {
        textAlign: 'left',
        marginLeft: 20,
        marginRight: 100,
    },
};

export default styles;

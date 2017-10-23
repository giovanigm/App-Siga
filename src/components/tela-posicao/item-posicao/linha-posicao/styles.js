import Values from '../../../../constants/values';

const styles = {
    linhaContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    linhaEscuraContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#878787',
    },
    texto: {
        fontFamily: 'Bariol-Regular',
        fontSize: Values.screenWidth / 25,
        marginLeft: 5,
        marginRight: 5,
    },
    textoBranco: {
        fontFamily: 'Bariol-Regular',
        fontSize: Values.screenWidth / 25,
        marginLeft: 5,
        marginRight: 5,
        color: '#FFF',
    },
    progressBar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
};

export default styles;

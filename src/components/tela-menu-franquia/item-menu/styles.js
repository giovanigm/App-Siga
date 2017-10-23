import Values from '../../../constants/values';

const styles = {
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    titulo: {
        fontSize: Values.screenHeight / 25,
        fontFamily: 'Bariol-Regular',
    },
    icone: {
        alignSelf: 'stretch',
        height: Values.screenHeight / 10,
        width: Values.screenWidth / 6,
        marginLeft: 10,
        marginRight: 10,
    },
};

export default styles;

import { Dimensions } from 'react-native';

import Colors from '../../../constants/colors';

const styles = {
    cardContainer: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 3,
        height: Dimensions.get('window').height / 4,
        flexDirection: 'row',
        overflow: 'hidden',
    },
    cardDetails: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0.3)',
        alignItems: 'center',
    },
    cardImage: {
        flex: 1,
        alignSelf: 'stretch',
    },
    cardTitle: {
        flex: 1,
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'Bariol-Regular',
    },
};

export default styles;

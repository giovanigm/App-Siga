import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import { registerScreens } from './screens';
import store from './store/configureStore';

registerScreens(store, Provider);

Navigation.startSingleScreenApp({
    screen: {
        screen: 'app.Login',
        animationType: 'fade',
        title: 'Login',
    },
});


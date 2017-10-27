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
    drawer: {
        left: {
            screen: 'app.Drawer',
            passProps: {},
        },
        style: { // ( iOS only )
            drawerShadow: true, // optional, add this if you want a side menu drawer shadow
            contentOverlayColor: 'rgba(0,0,0,0.25)', // optional, add this if you want a overlay color when drawer is open
            leftDrawerWidth: 50, // optional, add this if you want a define left drawer width (50=percent)
            rightDrawerWidth: 50, // optional, add this if you want a define right drawer width (50=percent)
            shouldStretchDrawer: true, // optional, iOS only with 'MMDrawer' type, whether or not the panning gesture will “hard-stop” at the maximum width for a given drawer side, default : true
        },
        type: 'MMDrawer', // optional, iOS only, types: 'TheSideBar', 'MMDrawer' default: 'MMDrawer'
        animationType: 'door', // optional, iOS only, for MMDrawer: 'door', 'parallax', 'slide', 'slide-and-scale'
        // for TheSideBar: 'airbnb', 'facebook', 'luvocracy','wunder-list'
        disableOpenGesture: false, // optional, can the drawer be opened with a swipe instead of button
    },
});


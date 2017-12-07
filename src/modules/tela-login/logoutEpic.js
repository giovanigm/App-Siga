import { Observable } from 'rxjs';
import { AsyncStorage } from 'react-native';
import { types } from './reducer';
import * as loginActions from './actions';

const logoutEpic = action$ =>
    action$.ofType(types.LOGOUT)
        .mergeMap(() =>
            Observable.of(AsyncStorage.clear())
                .mapTo(loginActions.logoutSuccess())
                .catch(error => Observable.of(loginActions.loginFailed(error))),
        );

export default logoutEpic;

import { Observable } from 'rxjs';
import Snackbar from 'react-native-snackbar';

import * as apiActions from './actions';

const apiErrorEpic = action$ =>
    action$.ofType('API_REQUEST_FAILED')
        .mergeMap(action =>
            Observable.of(Snackbar.show({
                title: action.errorMessage.message,
                duration: Snackbar.LENGTH_INDEFINITE,
                action: {
                    title: 'OK',
                    color: 'lightblue',
                    onPress: () => { /* Do something. */ },
                },
            }))
                .mapTo(apiActions.errorHandledSuccess(action.errorMessage))
                .catch(error => apiActions.errorHandledFailed(error)),
        );

export default apiErrorEpic;

/* Observable.(login(action.payload.usuario, action.payload.senha))
.map(response => loginActions.loginSuccess(response.data))
.catch(error => Observable.of(loginActions.loginFailed(error))) */

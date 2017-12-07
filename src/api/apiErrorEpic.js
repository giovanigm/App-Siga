import { Observable } from 'rxjs';
import Snackbar from 'react-native-snackbar';

import * as apiActions from './actions';
import { geraMensagemErro } from './apiErrorUtil';

const apiErrorEpic = action$ =>
    action$.ofType('API_REQUEST_FAILED')
        .mergeMap(action =>
            Observable.of(geraMensagemErro(action.errorMessage.response.status))
                .mapTo(apiActions.errorHandledSuccess(action.errorMessage))
                .catch(error => apiActions.errorHandledFailed(error)),
        );

export default apiErrorEpic;

/* Observable.(login(action.payload.usuario, action.payload.senha))
.map(response => loginActions.loginSuccess(response.data))
.catch(error => Observable.of(loginActions.loginFailed(error))) */

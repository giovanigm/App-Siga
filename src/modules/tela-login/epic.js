import { Observable } from 'rxjs';

import { types } from './reducer';
import * as loginActions from './actions';
import { login } from '../../api/apiClient';

const loginEpic = action$ =>
    action$.ofType(types.LOGIN)
        .mergeMap(action =>
            Observable.fromPromise(login(action.payload.usuario, action.payload.senha))
                .map(response => loginActions.loginSuccess(response.data))
                .catch(error => Observable.of(loginActions.loginFailed(error))),
        );

export default loginEpic;

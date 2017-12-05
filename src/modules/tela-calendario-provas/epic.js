import { Observable } from 'rxjs';

import { types } from './reducer';
import * as provasActions from './actions';
import { fetchAlunoProvas } from '../../api/apiClient';

const fetchAlunoProvasEpic = (action$, store) =>
    action$.ofType(types.FETCH_ALUNO_PROVAS)
        .mergeMap(() =>
            Observable.fromPromise(fetchAlunoProvas(store.getState().login.data.usuario))
                .map(response => provasActions.fetchAlunoProvasSuccess(response.data.provas))
                .catch(error => Observable.of(provasActions.fetchAlunoProvasFailed(error))),
        );

export default fetchAlunoProvasEpic;

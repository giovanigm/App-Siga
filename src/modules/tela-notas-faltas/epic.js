import { Observable } from 'rxjs';

import { types } from './reducer';
import * as notasActions from './actions';
import { fetchAlunoNotas } from '../../api/apiClient';

const fetchAlunoNotasEpic = action$ =>
    action$.ofType(types.FETCH_ALUNO_NOTAS)
        .mergeMap(action =>
            Observable.fromPromise(fetchAlunoNotas(action.payload))
                .map(response => notasActions.fetchAlunoNotasSuccess(response.data.notas))
                .catch(error => Observable.of(notasActions.fetchAlunoNotasFailed(error))),
        );

export default fetchAlunoNotasEpic;

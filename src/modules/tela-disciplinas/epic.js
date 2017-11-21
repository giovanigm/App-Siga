import { Observable } from 'rxjs';

import { types } from './reducer';
import * as disciplinasActions from './actions';
import { fetchAlunoDisciplinas } from '../../api/apiClient';

const fetchAlunoDisciplinasEpic = (action$, store) =>
    action$.ofType(types.FETCH_ALUNO_DISCIPLINAS)
        .mergeMap(() =>
            Observable.fromPromise(fetchAlunoDisciplinas(store.getState().login.data.usuario))
                .map(response => disciplinasActions.fetchAlunoDisciplinasSuccess(response.data.disciplinas))
                .catch(error => Observable.of(disciplinasActions.fetchAlunoDisciplinasFailed(error))),
        );

export default fetchAlunoDisciplinasEpic;

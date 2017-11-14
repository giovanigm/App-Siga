import { Observable } from 'rxjs';

import { types } from './reducer';
import * as disciplinasActions from './actions';
import { fetchAlunoDisciplinas } from '../../api/apiClient';

const fetchAlunoDisciplinasEpic = action$ =>
    action$.ofType(types.FETCH_ALUNO_DISCIPLINAS)
        .mergeMap(action =>
            Observable.fromPromise(fetchAlunoDisciplinas(action.payload))
                .map(response => disciplinasActions.fetchAlunoDisciplinasSuccess(response.data.disciplinas))
                .catch(error => Observable.of(disciplinasActions.fetchAlunoDisciplinasFailed(error))),
        );

export default fetchAlunoDisciplinasEpic;

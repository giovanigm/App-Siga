import { Observable } from 'rxjs';

import { types } from './reducer';
import * as horarioActions from './actions';
import { fetchDisciplinaAulas } from '../../../api/apiClient';

const fetchDisciplinaAulasEpic = action$ =>
    action$.ofType(types.FETCH_DISCIPLINA_AULAS)
        .mergeMap(action =>
            Observable.fromPromise(fetchDisciplinaAulas(action.payload))
                .map(response => horarioActions.fetchDisciplinaAulasSuccess(response.data.aulas))
                .catch(error => Observable.of(horarioActions.fetchDisciplinaAulasFailed(error))),
        );

export default fetchDisciplinaAulasEpic;

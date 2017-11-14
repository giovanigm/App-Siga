import { Observable } from 'rxjs';

import { types } from './reducer';
import * as bibliografiaActions from './actions';
import { fetchDisciplinaBibliografia } from '../../../../api/apiClient';

const fetchDisciplinaBibliografiaEpic = action$ =>
    action$.ofType(types.FETCH_DISCIPLINA_BIBLIOGRAFIA)
        .mergeMap(action =>
            Observable.fromPromise(fetchDisciplinaBibliografia(action.payload))
                .map(response => bibliografiaActions.fetchDisciplinaBibliografiaSuccess(response.data.bibliografia))
                .catch(error => Observable.of(bibliografiaActions.fetchDisciplinaBibliografiaFailed(error))),
        );

export default fetchDisciplinaBibliografiaEpic;

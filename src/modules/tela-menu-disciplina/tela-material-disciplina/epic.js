import { Observable } from 'rxjs';

import { types } from './reducer';
import * as materiaisActions from './actions';
import { fetchDisciplinaMateriais } from '../../../api/apiClient';

const fetchDisciplinaMateriaisEpic = action$ =>
    action$.ofType(types.FETCH_DISCIPLINA_MATERIAIS)
        .mergeMap(action =>
            Observable.fromPromise(fetchDisciplinaMateriais(action.payload))
                .map(response => materiaisActions.fetchDisciplinaMateriaisSuccess(response.data.materiais))
                .catch(error => Observable.of(materiaisActions.fetchDisciplinaMateriaisFailed(error))),
        );

export default fetchDisciplinaMateriaisEpic;

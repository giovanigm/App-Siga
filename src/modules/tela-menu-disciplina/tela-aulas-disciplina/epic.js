import { Observable } from 'rxjs';

import { types } from './reducer';
import * as horarioActions from './actions';
import { fetchDisciplinaAulas } from '../../../api/apiClient';

const fetchDisciplinaAulasEpic = (action$, store) =>
    action$.ofType(types.FETCH_DISCIPLINA_AULAS)
        .mergeMap(() =>
            Observable.fromPromise(fetchDisciplinaAulas(store.getState().disciplinas.disciplinaSelecionada.codigo))
                .map(response => horarioActions.fetchDisciplinaAulasSuccess(response.data.aulas))
                .catch(error => Observable.of(horarioActions.fetchDisciplinaAulasFailed(error))),
        );

export default fetchDisciplinaAulasEpic;

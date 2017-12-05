import { Observable } from 'rxjs';

import { types } from './reducer';
import * as bibliografiaActions from './actions';
import { fetchDisciplinaBibliografia } from '../../../../api/apiClient';

const fetchDisciplinaBibliografiaEpic = (action$, store) =>
    action$.ofType(types.FETCH_DISCIPLINA_BIBLIOGRAFIA)
        .mergeMap(() =>
            Observable.fromPromise(fetchDisciplinaBibliografia(store.getState().disciplinas.disciplinaSelecionada.codigo))
                .map(response => bibliografiaActions.fetchDisciplinaBibliografiaSuccess(response.data.bibliografia))
                .catch(error => Observable.of(bibliografiaActions.fetchDisciplinaBibliografiaFailed(error))),
        );

export default fetchDisciplinaBibliografiaEpic;

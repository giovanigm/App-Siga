import { Observable } from 'rxjs';

import { types } from './reducer';
import * as materiaisActions from './actions';
import { fetchDisciplinaMateriais } from '../../../api/apiClient';

const fetchDisciplinaMateriaisEpic = (action$, store) =>
    action$.ofType(types.FETCH_DISCIPLINA_MATERIAIS)
        .mergeMap(() =>
            Observable.fromPromise(fetchDisciplinaMateriais(store.getState().disciplinas.disciplinaSelecionada.codigo))
                .map(response => materiaisActions.fetchDisciplinaMateriaisSuccess(response.data.materiais))
                .catch(error => Observable.of(materiaisActions.fetchDisciplinaMateriaisFailed(error))),
        );

export default fetchDisciplinaMateriaisEpic;

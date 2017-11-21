import { Observable } from 'rxjs';

import { types } from './reducer';
import * as apresentacaoActions from './actions';
import { fetchDisciplinaApresentacao } from '../../../../api/apiClient';

const fetchDisciplinaApresentacaoEpic = (action$, store) =>
    action$.ofType(types.FETCH_DISCIPLINA_APRESENTACAO)
        .mergeMap(() =>
            Observable.fromPromise(fetchDisciplinaApresentacao(store.getState().disciplinas.disciplinaSelecionada.codigo))
                .map(response => apresentacaoActions.fetchDisciplinaApresentacaoSuccess(response.data.disciplina))
                .catch(error => Observable.of(apresentacaoActions.fetchDisciplinaApresentacaoFailed(error))),
        );

export default fetchDisciplinaApresentacaoEpic;

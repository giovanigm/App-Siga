import { Observable } from 'rxjs';

import { types } from './reducer';
import * as avaliacoesActions from './actions';
import { fetchDisciplinaAvaliacoes } from '../../../../api/apiClient';

const fetchDisciplinaAvaliacoesEpic = (action$, store) =>
    action$.ofType(types.FETCH_DISCIPLINA_AVALIACOES)
        .mergeMap(() =>
            Observable.fromPromise(fetchDisciplinaAvaliacoes(store.getState().disciplinas.disciplinaSelecionada.codigo))
                .map(response => avaliacoesActions.fetchDisciplinaAvaliacoesSuccess(response.data.avaliacoes))
                .catch(error => Observable.of(avaliacoesActions.fetchDisciplinaAvaliacoesFailed(error))),
        );

export default fetchDisciplinaAvaliacoesEpic;

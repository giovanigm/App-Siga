import { Observable } from 'rxjs';

import { types } from './reducer';
import * as avaliacoesActions from './actions';
import { fetchDisciplinaAvaliacoes } from '../../../../api/apiClient';

const fetchDisciplinaAvaliacoesEpic = action$ =>
    action$.ofType(types.FETCH_DISCIPLINA_AVALIACOES)
        .mergeMap(action =>
            Observable.fromPromise(fetchDisciplinaAvaliacoes(action.payload))
                .map(response => avaliacoesActions.fetchDisciplinaAvaliacoesSuccess(response.data.avaliacoes))
                .catch(error => Observable.of(avaliacoesActions.fetchDisciplinaAvaliacoesFailed(error))),
        );

export default fetchDisciplinaAvaliacoesEpic;

import { Observable } from 'rxjs';

import { types } from './reducer';
import * as historicoActions from './actions';
import { fetchAlunoHistorico } from '../../api/apiClient';

const fetchAlunoHistoricoEpic = action$ =>
    action$.ofType(types.FETCH_ALUNO_HISTORICO)
        .mergeMap(action =>
            Observable.fromPromise(fetchAlunoHistorico(action.payload))
                .map(response => historicoActions.fetchAlunoHistoricoSuccess(response.data.historico))
                .catch(error => Observable.of(historicoActions.fetchAlunoHistoricoFailed(error))),
        );

export default fetchAlunoHistoricoEpic;

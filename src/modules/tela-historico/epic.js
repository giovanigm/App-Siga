import { Observable } from 'rxjs';

import { types } from './reducer';
import * as historicoActions from './actions';
import { fetchAlunoHistorico } from '../../api/apiClient';

const fetchAlunoHistoricoEpic = (action$, store) =>
    action$.ofType(types.FETCH_ALUNO_HISTORICO)
        .mergeMap(() =>
            Observable.fromPromise(fetchAlunoHistorico(store.getState().login.data.usuario))
                .map(response => historicoActions.fetchAlunoHistoricoSuccess(response.data.historico))
                .catch(error => Observable.of(historicoActions.fetchAlunoHistoricoFailed(error))),
        );

export default fetchAlunoHistoricoEpic;

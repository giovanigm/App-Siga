import { Observable } from 'rxjs';

import { types } from './reducer';
import * as alunoActions from './actions';
import { fetchAluno } from '../../api/apiClient';

const fetchAlunoEpic = (action$, store) =>
    action$.ofType(types.FETCH_ALUNO)
        .mergeMap(() =>
            Observable.fromPromise(fetchAluno(store.getState().login.data.usuario))
                .map(response => alunoActions.fetchAlunoSuccess(response.data.aluno))
                .catch(error => Observable.of(alunoActions.fetchAlunoFailed(error))),
        );

export default fetchAlunoEpic;

import { Observable } from 'rxjs';

import { types } from './reducer';
import * as alunoActions from './actions';
import { fetchAluno } from '../../api/apiClient';

const fetchAlunoEpic = action$ =>
    action$.ofType(types.FETCH_ALUNO)
        .mergeMap(action =>
            Observable.fromPromise(fetchAluno(action.payload))
                .map(response => alunoActions.fetchAlunoSuccess(response.data.aluno))
                .catch(error => Observable.of(alunoActions.fetchAlunoFailed(error))),
        );

export default fetchAlunoEpic;

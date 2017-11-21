import { Observable } from 'rxjs';

import { types } from './reducer';
import * as horarioActions from './actions';
import { fetchAlunoHorario } from '../../api/apiClient';

const fetchAlunoHorarioEpic = (action$, store) =>
    action$.ofType(types.FETCH_ALUNO_HORARIO)
        .mergeMap(() =>
            Observable.fromPromise(fetchAlunoHorario(store.getState().login.data.usuario))
                .map(response => horarioActions.fetchAlunoHorarioSuccess(response.data.horario))
                .catch(error => Observable.of(horarioActions.fetchAlunoHorarioFailed(error))),
        );

export default fetchAlunoHorarioEpic;

import { Observable } from 'rxjs';

import { types } from './reducer';
import * as horarioActions from './actions';
import { fetchAlunoHorario } from '../../api/apiClient';

const fetchAlunoHorarioEpic = action$ =>
    action$.ofType(types.FETCH_ALUNO_HORARIO)
        .mergeMap(action =>
            Observable.fromPromise(fetchAlunoHorario(action.payload))
                .map(response => horarioActions.fetchAlunoHorarioSuccess(response.data.horario))
                .catch(error => Observable.of(horarioActions.fetchAlunoHorarioFailed(error))),
        );

export default fetchAlunoHorarioEpic;

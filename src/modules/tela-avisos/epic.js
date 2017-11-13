import { Observable } from 'rxjs';

import { types } from './reducer';
import * as avisosActions from './actions';
import { fetchAvisos } from '../../api/apiClient';

const fetchAvisosEpic = action$ =>
    action$.ofType(types.FETCH_AVISOS)
        .mergeMap(() =>
            Observable.fromPromise(fetchAvisos())
                .map(response => avisosActions.fetchAvisosSuccess(response.data.avisos))
                .catch(error => Observable.of(avisosActions.fetchAvisosFailed(error))),
        );

export default fetchAvisosEpic;

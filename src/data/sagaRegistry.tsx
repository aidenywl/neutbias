import { all } from 'redux-saga/effects';

import { watchTranslationSubmitSaga } from './translation';

/**
 * Single entrypoint to start all sagas at once.
 *
 * These can be run in parallel by the Web API.
 */

export default function* rootSaga() {
  yield all([watchTranslationSubmitSaga()]);
}

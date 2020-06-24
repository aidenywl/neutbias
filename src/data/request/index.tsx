import { call } from 'redux-saga/effects';

import { SagaIterator } from 'redux-saga';

import type { HttpResponse, RequestOptions } from '../../utils/interface';
import { sendRequest as executeSendRequest } from '../../utils/request';

/**
 * A generator function wrapper for sendRequest to integrate with redux-saga.
 *
 * @param url The url of the request.
 * @param options Specify the http `method`, files, and other http request options.
 */
export function* sendRequest(url: string, options: RequestOptions): SagaIterator<HttpResponse> {
  const { files, headers, ...otherOptions } = options;
  let response;
  if (files) {
    response = yield call(executeSendRequest, url, {
      ...otherOptions,
      files,
      headers: { ...headers },
    });
  } else {
    response = yield call(executeSendRequest, url, options);
  }

  return response;
}

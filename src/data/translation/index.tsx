import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { sendRequest } from '../request';
import {
  InputSentence,
  NeutralizedSentence,
  State as TranslationState,
  TranslationSubmitBiasedTextAction,
  TranslationUpdateBiasedTextAction,
  TranslationTextSubmitSuccessAction,
  TranslationTextSubmitFailureAction,
} from './types';
import { Action, State } from '../types';

const MODEL_ID = 100;
const API_URL = 'https://translate-v1-okehwkqpmq-ue.a.run.app/translate';

/**
 * Actions
 */
export function translationBiasTextFormUpdate(text: string): TranslationUpdateBiasedTextAction {
  return {
    payload: {
      text,
    },
    type: 'TRANSLATION_UPDATE_BIASED_TEXT_ACTION',
  };
}

export function translationSubmitBiasedText(text: string): TranslationSubmitBiasedTextAction {
  return {
    payload: {
      text,
    },
    type: 'TRANSLATION_SUBMIT_BIASED_TEXT',
  };
}
export function translationTextNeutralizeSuccess(text: string): TranslationTextSubmitSuccessAction {
  return {
    payload: {
      text,
    },
    type: 'TRANSLATION_TEXT_NEUTRALIZE_SUCCESS_ACTION',
  };
}

export function translationTextSubmitFailure(message: string): TranslationTextSubmitFailureAction {
  return {
    payload: {
      message,
    },
    type: 'TRANSLATION_TEXT_SUBMIT_FAILURE_ACTION',
  };
}
/**
 * Reducers
 */

export const initialState: TranslationState = {
  error: undefined,
  input: '',
  loading: false,
  output: '',
};

export default function reducer(
  state: TranslationState = initialState,
  action: Action,
): TranslationState {
  switch (action.type) {
    case 'TRANSLATION_SUBMIT_BIASED_TEXT':
      return { ...state, error: undefined, loading: true };
    case 'TRANSLATION_TEXT_SUBMIT_FAILURE_ACTION':
      return { ...state, error: action.payload.message, loading: false };
    case 'TRANSLATION_TEXT_NEUTRALIZE_SUCCESS_ACTION':
      return { ...state, loading: false, output: action.payload.text };
    case 'TRANSLATION_UPDATE_BIASED_TEXT_ACTION':
      return { ...state, error: undefined, input: action.payload.text };
    default:
      return state;
  }
}

/**
 * Worker Sagas
 */
function* executeSubmitBiasedText({
  payload,
}: TranslationSubmitBiasedTextAction): SagaIterator<void> {
  // Construct the request.
  let { text } = payload;

  // Split into sentences.
  let sentences = text.match(/([^\.!\?]+[\.!\?]+)|([^\.!\?]+$)/g);

  if (sentences == null) {
    yield put(translationTextSubmitFailure('You must enter something to neutralize.'));
    return;
  }
  const data: InputSentence[] = sentences.map((sentence) => {
    return {
      src: `${sentence}`,
      id: MODEL_ID,
    };
  });
  try {
    // Run the api
    const { parsedBody } = yield call(sendRequest, API_URL, {
      data,
      method: 'POST',
    });
    // Construct the sentence
    const result = parsedBody[0].reduce(
      (acc: string, item: NeutralizedSentence) => `${acc} ${item.tgt.trim()}`,
      '',
    );
    yield put(translationTextNeutralizeSuccess(result));
  } catch (e) {
    yield put(
      translationTextSubmitFailure(
        'Something went wrong when calling our API. Please try again later.',
      ),
    );
  }
}

/**
 * Watcher Sagas
 */

export function* watchTranslationSubmitSaga() {
  yield takeLatest('TRANSLATION_SUBMIT_BIASED_TEXT', executeSubmitBiasedText);
}

/**
 * Selectors
 */
export function selectErrorValue(state: State) {
  return state.Translation.error;
}

export function selectInputValue(state: State) {
  return state.Translation.input;
}

export function selectLoading(state: State) {
  return state.Translation.loading;
}

export function selectOutputValue(state: State) {
  return state.Translation.output;
}

/**
 * Utils
 */

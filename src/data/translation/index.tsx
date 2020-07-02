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
const API_URL = 'http://35.236.45.155:5000/translator/translate';

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

export function translationTextSubmitFailure(): TranslationTextSubmitFailureAction {
  return {
    type: 'TRANSLATION_TEXT_SUBMIT_FAILURE_ACTION',
  };
}
/**
 * Reducers
 */

export const initialState: TranslationState = {
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
      return { ...state, loading: true };
    case 'TRANSLATION_TEXT_SUBMIT_FAILURE_ACTION':
      return { ...state, loading: false };
    case 'TRANSLATION_TEXT_NEUTRALIZE_SUCCESS_ACTION':
      return { ...state, loading: false, output: action.payload.text };
    case 'TRANSLATION_UPDATE_BIASED_TEXT_ACTION':
      return { ...state, input: action.payload.text };
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
  // Remove ending full stop to cut unnecessary array item.
  if (text[text.length - 1] === '.') {
    text = text.slice(0, -1);
  }
  const sentences = text.split('.');
  const data: InputSentence[] = sentences.map((sentence) => {
    return {
      src: `${sentence}.`,
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
    yield put({ type: 'TRANSLATION_SUBMIT_FAILURE_ACTION', message: e.message });
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

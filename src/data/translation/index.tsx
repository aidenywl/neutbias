import { Action, TranslationState } from './types';

/**
 * Actions
 */

/**
 * Reducers
 */

export const initialState: TranslationState = {
  input: '',
  output: '',
};

export default function reducer(
  state: TranslationState = initialState,
  action: Action,
): TranslationState {
  switch (action.type) {
    case 'TRANSLATION_SUBMIT_BIASED_TEXT_SUBMIT_ACTION':
      return { ...state, input: action.payload.text };
    case 'TRANSLATION_NEUTRALIZED_TEXT_SUCCESS_ACTION':
      return { ...state, output: action.payload.text };
    default:
      return state;
  }
}

/**
 * Sagas
 */

/**
 * Selectors
 */

/**
 * Utils
 */

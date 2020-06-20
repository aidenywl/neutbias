import { State as TranslationState } from './types';
import { Action, State } from '../types';

import { TranslationUpdateBiasedTextAction } from './types';
/**
 * Actions
 */
export function biasTextFormUpdate(text: string): TranslationUpdateBiasedTextAction {
  return {
    payload: {
      text,
    },
    type: 'TRANSLATION_UPDATE_BIASED_TEXT_ACTION',
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
    case 'TRANSLATION_UPDATE_BIASED_TEXT_ACTION':
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
export function selectInputValue(state: State) {
  return state.Translation.input;
}

export function selectLoading(state: State) {
  return state.Translation.loading;
}

/**
 * Utils
 */

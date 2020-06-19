import { Action, State } from './types';

/**
 * Actions
 */

/**
 * Reducers
 */

export const initialState: State = {
  input: '',
  output: '',
};

export default function reducer(state: State = initialState, action: Action): State {
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
export function selectInputValue(state: State) {
  return state.input;
}

/**
 * Utils
 */

/**
 * Actions
 */

export interface TranslationUpdateBiasedTextAction {
  payload: {
    text: string;
  };
  type: 'TRANSLATION_UPDATE_BIASED_TEXT_ACTION';
}

export interface TranslationNeutralizedTextSuccessAction {
  payload: {
    text: string;
  };
  type: 'TRANSLATION_NEUTRALIZED_TEXT_SUCCESS_ACTION';
}

export type Action = TranslationUpdateBiasedTextAction | TranslationNeutralizedTextSuccessAction;
/**
 * State
 */

export interface State {
  input: string;
  loading: boolean;
  output: string;
}

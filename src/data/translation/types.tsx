/**
 * Actions
 */

export interface TranslationBiasedTextSubmitAction {
  payload: {
    text: string;
  };
  type: 'TRANSLATION_SUBMIT_BIASED_TEXT_SUBMIT_ACTION';
}

export interface TranslationNeutralizedTextSuccessAction {
  payload: {
    text: string;
  };
  type: 'TRANSLATION_NEUTRALIZED_TEXT_SUCCESS_ACTION';
}

export type Action = TranslationBiasedTextSubmitAction | TranslationNeutralizedTextSuccessAction;
/**
 * State
 */

export interface TranslationState {
  input: string;
  output: string;
}

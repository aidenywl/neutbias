export interface InputSentence {
  src: string;
  id: number;
}

export interface NeutralizedSentence {
  n_best: number;
  pred_score: number;
  src: string;
  tgt: string;
}

/**
 * Actions
 */

export interface TranslationSubmitBiasedTextAction {
  payload: {
    text: string;
  };
  type: 'TRANSLATION_SUBMIT_BIASED_TEXT';
}
export interface TranslationNeutralizedTextSuccessAction {
  payload: {
    text: string;
  };
  type: 'TRANSLATION_NEUTRALIZED_TEXT_SUCCESS_ACTION';
}

export interface TranslationUpdateBiasedTextAction {
  payload: {
    text: string;
  };
  type: 'TRANSLATION_UPDATE_BIASED_TEXT_ACTION';
}

export interface TranslationTextSubmitSuccessAction {
  payload: {
    text: string;
  };
  type: 'TRANSLATION_TEXT_NEUTRALIZE_SUCCESS_ACTION';
}

export interface TranslationTextSubmitFailureAction {
  payload: {
    message: string;
  };
  type: 'TRANSLATION_TEXT_SUBMIT_FAILURE_ACTION';
}

export type Action =
  | TranslationNeutralizedTextSuccessAction
  | TranslationSubmitBiasedTextAction
  | TranslationUpdateBiasedTextAction
  | TranslationTextSubmitFailureAction
  | TranslationTextSubmitSuccessAction;
/**
 * State
 */

export interface State {
  error?: string;
  input: string;
  loading: boolean;
  output: string;
}

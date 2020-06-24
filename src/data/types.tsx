import { Action as TranslationAction, State as TranslationState } from './translation/types';

export type Action = TranslationAction;

export type State = {
  Translation: TranslationState;
};

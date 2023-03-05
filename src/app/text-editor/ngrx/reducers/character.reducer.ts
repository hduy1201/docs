import { createReducer, on } from '@ngrx/store';
import * as CharacterActions from '../actions/character.action';
import { CharacterState } from '../states/character.state';

export const initialState: CharacterState = {
  globalSelectedCharacterIndex: 0,
  isSelecting: false,
  startSelectionPosition: -1,
  endSelectionPosition: -1,
};

export const characterReducer = createReducer(
  initialState,
  on(
    CharacterActions.changeGlobalSelectedCharacterIndex,
    (state, { payload }) => {
      return {
        ...state,
        globalSelectedCharacterIndex: payload.globalSelectedCharacterIndex,
      };
    }
  ),

  on(CharacterActions.changeIsSelecting, (state, { payload }) => {
    return {
      ...state,
      isSelecting: payload.isSelecting,
    };
  }),

  on(CharacterActions.changeStartSelectionPosition, (state, { payload }) => {
    return {
      ...state,
      startSelectionPosition: payload.startSelectionPosition,
    };
  }),

  on(CharacterActions.changeEndSelectionPosition, (state, { payload }) => {
    return {
      ...state,
      endSelectionPosition: payload.endSelectionPosition,
    };
  }),

  on(CharacterActions.deselect, (state) => {
    return {
      ...state,
      isSelecting: false,
      startSelectionPosition: -1,
      endSelectionPosition: -1,
    };
  })
);

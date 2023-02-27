

import { createReducer, on } from '@ngrx/store';
import * as CharacterActions from '../actions/character.action';
import { CharacterState } from '../states/character.state';

export const initialState: CharacterState = {
    globalSelectedCharacterIndex: 0
};

export const characterReducer = createReducer(
    initialState,
    on(CharacterActions.changeGlobalSelectedCharacterIndex, (state, { payload }) => {
        return {
            ...state,
            globalSelectedCharacterIndex: payload.globalSelectedCharacterIndex
        };
    }
    )
);
import { ParagraphState } from "../states/paragraph.state";
import { changeGlobalSelectedParagraphIndex } from '../actions/paragraph.action';

import { createReducer, on } from '@ngrx/store';

export const initialState: ParagraphState = {
    globalSelectedParagraphIndex: 0
};

export const paragraphReducer = createReducer(
    initialState,
    on(changeGlobalSelectedParagraphIndex, (state, { payload }) => {
        return {
            ...state,
            globalSelectedParagraphIndex: payload.globalSelectedParagraphIndex
        };
    }
    )
);
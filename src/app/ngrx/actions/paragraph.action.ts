import { createAction } from "@ngrx/store";


export const changeGlobalSelectedParagraphIndex = createAction(
    '[Paragraph] Change Global Selected Paragraph Index',
    (payload: { globalSelectedParagraphIndex: number }) => ({ payload })
);
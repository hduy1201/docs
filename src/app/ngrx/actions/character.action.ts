import { createAction } from "@ngrx/store";


export const changeGlobalSelectedCharacterIndex = createAction(
    '[Character] Change Global Selected Character Index',
    (payload: { globalSelectedCharacterIndex: number }) => ({ payload })
);

import { createAction } from '@ngrx/store';

export const changeGlobalSelectedCharacterIndex = createAction(
  '[Character] Change Global Selected Character Index',
  (payload: { globalSelectedCharacterIndex: number }) => ({ payload })
);

export const changeIsSelecting = createAction(
  '[Character] Change Is Selecting',
  (payload: { isSelecting: boolean }) => ({ payload })
);

export const changeStartSelectionPosition = createAction(
  '[Character] Change Start Selection Position',
  (payload: { startSelectionPosition: number }) => ({ payload })
);

export const changeEndSelectionPosition = createAction(
  '[Character] Change End Selection Position',
  (payload: { endSelectionPosition: number }) => ({ payload })
);

export const deselect = createAction('[Character] Deselect');

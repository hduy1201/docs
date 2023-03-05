import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { Store } from '@ngrx/store';
import {
  changeEndSelectionPosition,
  changeGlobalSelectedCharacterIndex,
  changeIsSelecting,
  changeStartSelectionPosition,
} from '../../ngrx/actions/character.action';
import { CharacterState } from '../../ngrx/states/character.state';

@Component({
  selector: 'text-editor-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  @Input() character: string = '';

  @Input() id: number = 0;

  @Output() selectedCharacterId = new EventEmitter<number>();

  cursorPosition: any = 0;

  startSelectionPosition = -1;

  endSelectionPosition = -1;

  @Input()
  isSelecting = false;

  getClassByPosition() {
    if (this.id == this.startSelectionPosition) {
      return ['startSelection'];
    }
    if (this.id == this.endSelectionPosition) {
      return ['endSelection'];
    }
    if (
      this.id > this.startSelectionPosition &&
      this.id < this.endSelectionPosition
    ) {
      return ['inSelection'];
    }
    return [];
  }

  @HostListener('click', ['$event'])
  click(event: MouseEvent) {
    console.log('Click at: ' + this.id);
    this.selectedCharacterId.emit(this.id);
    this.store.dispatch(
      changeGlobalSelectedCharacterIndex({
        globalSelectedCharacterIndex: this.id,
      })
    );
  }

  @HostListener('mousedown', ['$event'])
  mouseDownCharacter(event: MouseEvent) {
    console.log('Mouse down at: ' + this.id);
    this.startSelectionPosition = this.id;
    this.store.dispatch(
      changeStartSelectionPosition({ startSelectionPosition: this.id })
    );
    // this.isSelecting = true;
    this.store.dispatch(changeIsSelecting({ isSelecting: true }));

    if (this.id < this.cursorPosition) {
      this.startSelectionPosition = this.id;
      this.store.dispatch(
        changeStartSelectionPosition({ startSelectionPosition: this.id })
      );
    }
  }

  @HostListener('mouseup', ['$event'])
  mouseUpCharacter(event: MouseEvent) {
    console.log('Mouse up at: ' + this.id);
    this.endSelectionPosition = this.id;
    this.store.dispatch(
      changeEndSelectionPosition({ endSelectionPosition: this.id })
    );
    // this.isSelecting = false;
    this.store.dispatch(changeIsSelecting({ isSelecting: false }));

    if (this.id > this.cursorPosition) {
      this.endSelectionPosition = this.id;
      this.store.dispatch(
        changeEndSelectionPosition({ endSelectionPosition: this.id })
      );
    }
  }

  @HostListener('mousemove', ['$event'])
  mouseMoveCharacter(event: MouseEvent) {
    console.log('Mouse move at: ' + this.id);
    if (this.isSelecting) {
      if (this.id > this.cursorPosition) {
        this.endSelectionPosition = this.id;
        this.store.dispatch(
          changeEndSelectionPosition({ endSelectionPosition: this.id })
        );
      } else {
        this.startSelectionPosition = this.id;
        this.store.dispatch(
          changeStartSelectionPosition({ startSelectionPosition: this.id })
        );
      }
    }
  }

  deselect() {
    this.startSelectionPosition = -1;
    this.endSelectionPosition = -1;
    this.store.dispatch(
      changeStartSelectionPosition({ startSelectionPosition: -1 })
    );
    this.store.dispatch(
      changeEndSelectionPosition({ endSelectionPosition: -1 })
    );
    this.store.dispatch(changeIsSelecting({ isSelecting: false }));
    // this.isSelecting = false;
  }

  constructor(private store: Store<{ character: CharacterState }>) {}
}

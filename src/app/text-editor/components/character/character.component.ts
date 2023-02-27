import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeGlobalSelectedParagraphIndex } from 'src/app/ngrx/actions/paragraph.action';
import { CharacterState } from 'src/app/ngrx/states/character.state';

import { changeGlobalSelectedCharacterIndex } from '../../../ngrx/actions/character.action';

@Component({
  selector: 'text-editor-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  @Input() character: string = '';

  @Input() id: number = 0;

  @Output() selectedCharacterId = new EventEmitter<number>();

  @Input() cursorPosition: number = 0;

  @HostListener('click', ['$event'])
  click(event: MouseEvent) {
    console.log(this.id);
    this.selectedCharacterId.emit(this.id);
    this.store.dispatch(changeGlobalSelectedCharacterIndex({ globalSelectedCharacterIndex: this.id }));
  }

  constructor(private store: Store<{ character: CharacterState }>) {

  }
}

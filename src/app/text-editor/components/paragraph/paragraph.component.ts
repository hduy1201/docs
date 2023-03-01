import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeGlobalSelectedParagraphIndex } from 'src/app/ngrx/actions/paragraph.action';
import { CharacterState } from 'src/app/ngrx/states/character.state';
import { ParagraphState } from 'src/app/ngrx/states/paragraph.state';

@Component({
  selector: 'text-editor-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent {

  @Input()
  characters = new Array<string>();

  @Input()
  id = 0;

  @Input()
  cursorPosition = 0;

  @Output()
  cursorPositionChange = new EventEmitter<number>();

  @Output()
  selectedIndex = new EventEmitter<number>();

  selectedParagraphIndex$ = this.store.select('paragraph', 'globalSelectedParagraphIndex');
  selectedCharacterIndex$ = this.store.select('characters', 'globalSelectedCharacterIndex');

  @HostListener('click', ['$event'])
  click(event: MouseEvent) {
    console.log(event);
    this.selectedIndex.emit(this.id);
  }

  constructor(private store: Store<{ paragraph: ParagraphState, characters: CharacterState }>) {

  }
}

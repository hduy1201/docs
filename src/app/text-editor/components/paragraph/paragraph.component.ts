import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeGlobalSelectedParagraphIndex } from 'src/app/ngrx/actions/paragraph.action';
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

  @HostListener('click', ['$event'])
  click(event: MouseEvent) {
    console.log(event);
    this.selectedIndex.emit(this.id);
  }

  constructor(private store: Store<{ paragraph: ParagraphState }>) {
    this.selectedParagraphIndex$.subscribe((paragraphState) => {
      console.log(paragraphState);
    });
  }

}

import { Component, ElementRef, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeGlobalSelectedParagraphIndex } from 'src/app/ngrx/actions/paragraph.action';
import { CharacterState } from 'src/app/ngrx/states/character.state';
import { ParagraphState } from 'src/app/ngrx/states/paragraph.state';

@Component({
  selector: 'text-editor-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.scss']
})
export class PaperComponent {

  paragraphs = new Array<Array<string>>();

  currentParagraphIndex = 0;

  // @HostListener('click', ['$event'])
  // click(event: MouseEvent) {

  // }

  @HostListener('window:keydown', ['$event'])
  keydown(event: KeyboardEvent) {
    console.log(event);

    if (event.code == 'Space') {
      event.preventDefault();
    }

    if (event.code == 'Backspace') {
      event.preventDefault();
      this.paragraphs[this.currentParagraphIndex].pop();
      if (this.paragraphs[this.currentParagraphIndex].length == 0 && this.currentParagraphIndex > 0) {
        this.paragraphs.splice(this.currentParagraphIndex, 1);
        this.currentParagraphIndex--;
        this.store.dispatch(changeGlobalSelectedParagraphIndex({ globalSelectedParagraphIndex: this.currentParagraphIndex }));
      }
      return;
    }

    if (event.code == 'Enter') {
      event.preventDefault();
      this.paragraphs.push([]);
      this.currentParagraphIndex++;
      this.store.dispatch(changeGlobalSelectedParagraphIndex({ globalSelectedParagraphIndex: this.currentParagraphIndex }));
      return;
    }

    if (event.code == 'Tab') {
      event.preventDefault();
    }

    if (event.code == 'MetaLeft') {
      event.preventDefault();
      return;
    }

    if (event.code == 'MetaRight') {
      event.preventDefault();
      return;
    }

    if (event.code == 'ShiftLeft') {
      event.preventDefault();
      return;
    }

    if (event.code == 'ShiftRight') {
      event.preventDefault();
      return;
    }

    if (event.code == 'ControlLeft') {
      event.preventDefault();
      return;
    }

    if (event.code == 'ControlRight') {
      event.preventDefault();
      return;
    }

    if (event.code == 'AltLeft') {
      event.preventDefault();
      return;
    }

    if (event.code == 'AltRight') {
      event.preventDefault();
      return;
    }

    if (event.code == 'CapsLock') {
      event.preventDefault();
      return;
    }

    if (event.code == 'Escape') {
      event.preventDefault();
      return;
    }

    if (event.code == 'Delete') {
      event.preventDefault();
      this.paragraphs[this.currentParagraphIndex].pop();
      if (this.paragraphs[this.currentParagraphIndex].length == 0 && this.currentParagraphIndex > 0) {
        this.paragraphs.splice(this.currentParagraphIndex, 1);
        this.currentParagraphIndex--;
        this.store.dispatch(changeGlobalSelectedParagraphIndex({ globalSelectedParagraphIndex: this.currentParagraphIndex }));
      }
      return;
    }

    if (event.code == 'Insert') {
      event.preventDefault();
      return;
    }

    if (event.code == 'F1' || event.code == 'F2' || event.code == 'F3' || event.code == 'F4' || event.code == 'F5' || event.code == 'F6' || event.code == 'F7' || event.code == 'F8' || event.code == 'F9' || event.code == 'F10' || event.code == 'F11' || event.code == 'F12') {
      event.preventDefault();
      return;
    }

    this.paragraphs[this.currentParagraphIndex].push(event.key);

    this.store.dispatch(changeGlobalSelectedParagraphIndex({ globalSelectedParagraphIndex: this.currentParagraphIndex }));
  }

  onSelectParagraph(id: any) {
    this.currentParagraphIndex = id;
    console.log(this.currentParagraphIndex);
    this.store.dispatch(changeGlobalSelectedParagraphIndex({ globalSelectedParagraphIndex: this.currentParagraphIndex }));
  }

  constructor(private elemRef: ElementRef, private store: Store<{ character: CharacterState, paragraph: ParagraphState }>) {
    this.paragraphs.push([]);
    this.store.select('character').subscribe((state) => {
      console.log(state);
    });
  }

}

import { Component, ElementRef, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeGlobalSelectedCharacterIndex } from '../../ngrx/actions/character.action';
import { changeGlobalSelectedParagraphIndex } from '../../ngrx/actions/paragraph.action';
import { CharacterState } from '../../ngrx/states/character.state';
import { ParagraphState } from '../../ngrx/states/paragraph.state';

@Component({
  selector: 'text-editor-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.scss'],
})
export class PaperComponent {
  paragraphs = new Array<Array<string>>();

  currentParagraphIndex = 0;

  cursorPosition = 0;

  @HostListener('window:keydown', ['$event'])
  keydown(event: KeyboardEvent) {
    console.log(event);

    if (event.code == 'Space') {
      event.preventDefault();
    }

    if (event.code == 'Backspace') {
      event.preventDefault();
      if (this.cursorPosition != 0) {
        if (
          this.currentParagraphIndex != 0 &&
          this.cursorPosition ==
            this.paragraphs[this.currentParagraphIndex].length &&
          this.paragraphs[this.currentParagraphIndex].length == 0
        ) {
          this.paragraphs.splice(this.currentParagraphIndex, 1);
          this.currentParagraphIndex--;
          this.cursorPosition =
            this.paragraphs[this.currentParagraphIndex].length;
          this.store.dispatch(
            changeGlobalSelectedParagraphIndex({
              globalSelectedParagraphIndex: this.currentParagraphIndex,
            })
          );
        } else {
          this.cursorPosition--;
          this.paragraphs[this.currentParagraphIndex].splice(
            this.cursorPosition,
            1
          );
        }
      } else {
        if (this.currentParagraphIndex != 0) {
          this.currentParagraphIndex--;
          this.cursorPosition =
            this.paragraphs[this.currentParagraphIndex].length;
          this.store.dispatch(
            changeGlobalSelectedParagraphIndex({
              globalSelectedParagraphIndex: this.currentParagraphIndex,
            })
          );
        }
      }
      this.store.dispatch(
        changeGlobalSelectedCharacterIndex({
          globalSelectedCharacterIndex: this.cursorPosition,
        })
      );
      console.log(this.cursorPosition);
      return;
    }

    // if (event.code == 'Backspace') {
    //   event.preventDefault();
    //   if (this.cursorPosition == 0) {
    //     return;
    //   }
    //   if (this.paragraphs[this.currentParagraphIndex].length != 0) {
    //     this.cursorPosition--;
    //     this.paragraphs[this.currentParagraphIndex].splice(this.cursorPosition, 1);
    //   } else {
    //     if (this.currentParagraphIndex != 0) {
    //       this.currentParagraphIndex--;
    //       this.cursorPosition = this.paragraphs[this.currentParagraphIndex].length;
    //       this.store.dispatch(changeGlobalSelectedParagraphIndex({ globalSelectedParagraphIndex: this.currentParagraphIndex }));
    //     }
    //   }
    //   this.store.dispatch(changeGlobalSelectedCharacterIndex({ globalSelectedCharacterIndex: this.cursorPosition }));
    //   console.log(this.cursorPosition);
    //   return;
    // }

    if (event.code == 'Enter') {
      event.preventDefault();
      this.paragraphs.push([]);
      this.currentParagraphIndex++;
      this.cursorPosition = 0;
      this.store.dispatch(
        changeGlobalSelectedCharacterIndex({
          globalSelectedCharacterIndex: this.cursorPosition,
        })
      );
      this.store.dispatch(
        changeGlobalSelectedParagraphIndex({
          globalSelectedParagraphIndex: this.currentParagraphIndex,
        })
      );
      return;
    }

    if (event.code == 'Tab') {
      event.preventDefault();
    }

    if (event.code == 'MetaLeft' || event.code == 'MetaRight') {
      event.preventDefault();
      return;
    }

    if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
      event.preventDefault();
      return;
    }

    if (event.code == 'ControlLeft' || event.code == 'ControlRight') {
      event.preventDefault();
      return;
    }

    if (event.code == 'AltLeft' || event.code == 'AltRight') {
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
      // this.paragraphs[this.currentParagraphIndex].pop();
      // if (this.paragraphs[this.currentParagraphIndex].length == 0 && this.currentParagraphIndex > 0) {
      //   this.paragraphs.splice(this.currentParagraphIndex, 1);
      //   this.currentParagraphIndex--;
      //   this.cursorPosition = this.paragraphs[this.currentParagraphIndex].length;
      //   this.store.dispatch(changeGlobalSelectedParagraphIndex({ globalSelectedParagraphIndex: this.currentParagraphIndex }));
      // }
      return;
    }

    if (event.code == 'Insert') {
      event.preventDefault();
      return;
    }

    if (
      event.code == 'F1' ||
      event.code == 'F2' ||
      event.code == 'F3' ||
      event.code == 'F4' ||
      event.code == 'F5' ||
      event.code == 'F6' ||
      event.code == 'F7' ||
      event.code == 'F8' ||
      event.code == 'F9' ||
      event.code == 'F10' ||
      event.code == 'F11' ||
      event.code == 'F12'
    ) {
      // event.preventDefault();
      return;
    }

    if (event.code == 'ArrowLeft') {
      event.preventDefault();
      if (this.cursorPosition > 0) {
        this.cursorPosition--;
        this.store.dispatch(
          changeGlobalSelectedCharacterIndex({
            globalSelectedCharacterIndex: this.cursorPosition,
          })
        );
      }
      return;
    }

    if (event.code == 'ArrowRight') {
      event.preventDefault();
      if (
        this.cursorPosition < this.paragraphs[this.currentParagraphIndex].length
      ) {
        this.cursorPosition++;
        this.store.dispatch(
          changeGlobalSelectedCharacterIndex({
            globalSelectedCharacterIndex: this.cursorPosition,
          })
        );
      }
      return;
    }

    if (event.code == 'ArrowUp') {
      event.preventDefault();
      if (this.currentParagraphIndex > 0) {
        this.currentParagraphIndex--;
        this.cursorPosition =
          this.paragraphs[this.currentParagraphIndex].length;
        this.store.dispatch(
          changeGlobalSelectedParagraphIndex({
            globalSelectedParagraphIndex: this.currentParagraphIndex,
          })
        );
      }
      return;
    }

    if (event.code == 'ArrowDown') {
      event.preventDefault();
      if (this.currentParagraphIndex < this.paragraphs.length - 1) {
        this.currentParagraphIndex++;
        this.cursorPosition =
          this.paragraphs[this.currentParagraphIndex].length;
        this.store.dispatch(
          changeGlobalSelectedParagraphIndex({
            globalSelectedParagraphIndex: this.currentParagraphIndex,
          })
        );
      }
      return;
    }

    if (
      event.code == 'Home' ||
      event.code == 'End' ||
      event.code == 'PageUp' ||
      event.code == 'PageDown' ||
      event.code == 'NumLock' ||
      event.code == 'ScrollLock' ||
      event.code == 'Pause' ||
      event.code == 'PrintScreen' ||
      event.code == 'ContextMenu' ||
      event.code == 'AudioVolumeMute' ||
      event.code == 'AudioVolumeDown' ||
      event.code == 'AudioVolumeUp' ||
      event.code == 'MediaTrackNext' ||
      event.code == 'MediaTrackPrevious' ||
      event.code == 'MediaStop' ||
      event.code == 'MediaPlayPause' ||
      event.code == 'LaunchMail' ||
      event.code == 'SelectTask' ||
      event.code == 'LaunchApp1' ||
      event.code == 'LaunchApp2' ||
      event.code == 'BrowserSearch' ||
      event.code == 'BrowserHome' ||
      event.code == 'BrowserBack' ||
      event.code == 'BrowserForward' ||
      event.code == 'BrowserStop' ||
      event.code == 'BrowserRefresh' ||
      event.code == 'BrowserFavorites' ||
      event.code == 'Power' ||
      event.code == 'WakeUp' ||
      event.code == 'Eject' ||
      event.code == 'Standby' ||
      event.code == 'LaunchScreenSaver' ||
      event.code == 'LaunchMyComputer' ||
      event.code == 'LaunchCalculator' ||
      event.code == 'LaunchMediaPlayer' ||
      event.code == 'LaunchPhone' ||
      event.code == 'LaunchSpreadsheet' ||
      event.code == 'LaunchWebBrowser' ||
      event.code == 'LaunchContacts' ||
      event.code == 'LaunchCalendar' ||
      event.code == 'LaunchMail2' ||
      event.code == 'LaunchMusicPlayer' ||
      event.code == 'LaunchApplication1' ||
      event.code == 'LaunchApplication2' ||
      event.code == 'LaunchApplication3' ||
      event.code == 'LaunchApplication4' ||
      event.code == 'LaunchApplication5' ||
      event.code == 'LaunchApplication6' ||
      event.code == 'LaunchApplication7' ||
      event.code == 'LaunchApplication8' ||
      event.code == 'LaunchApplication9' ||
      event.code == 'LaunchApplication10' ||
      event.code == 'LaunchApplication11' ||
      event.code == 'LaunchApplication12' ||
      event.code == 'LaunchApplication13' ||
      event.code == 'LaunchApplication14' ||
      event.code == 'LaunchApplication15' ||
      event.code == 'LaunchApplication16' ||
      event.code == 'LaunchApplication17' ||
      event.code == 'LaunchApplication18' ||
      event.code == 'LaunchApplication19' ||
      event.code == 'LaunchApplication20'
    ) {
      event.preventDefault();
      return;
    }

    this.paragraphs[this.currentParagraphIndex].splice(
      this.cursorPosition,
      0,
      event.key
    );
    this.cursorPosition++;
    this.store.dispatch(
      changeGlobalSelectedCharacterIndex({
        globalSelectedCharacterIndex: this.cursorPosition,
      })
    );
    console.log(this.cursorPosition);
    this.store.dispatch(
      changeGlobalSelectedParagraphIndex({
        globalSelectedParagraphIndex: this.currentParagraphIndex,
      })
    );
  }

  onSelectParagraph(id: any) {
    this.currentParagraphIndex = id;
    console.log(this.currentParagraphIndex);
    this.store.dispatch(
      changeGlobalSelectedParagraphIndex({
        globalSelectedParagraphIndex: this.currentParagraphIndex,
      })
    );
  }

  constructor(
    private elemRef: ElementRef,
    private store: Store<{
      characters: CharacterState;
      paragraph: ParagraphState;
    }>
  ) {
    this.paragraphs.push([]);
    this.store.select('characters').subscribe((state) => {
      console.log(state);
      this.cursorPosition = state.globalSelectedCharacterIndex;
    });
  }
}

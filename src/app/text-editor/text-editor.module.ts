import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaperComponent } from './components/paper/paper.component';
import { CharacterComponent } from './components/character/character.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { characterReducer } from '../ngrx/reducers/character.reducer';



@NgModule({
  declarations: [
    PaperComponent,
    CharacterComponent,
    ParagraphComponent,
  ],
  imports: [
    CommonModule,
  
    EffectsModule.forFeature([])
  ],
  exports: [
    PaperComponent
  ]
})
export class TextEditorModule { }

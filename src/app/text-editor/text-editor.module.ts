import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaperComponent } from './components/paper/paper.component';
import { CharacterComponent } from './components/character/character.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { EffectsModule } from '@ngrx/effects';
import { ToolsMenuComponent } from './components/tools-menu/tools-menu.component';

@NgModule({
  declarations: [
    PaperComponent,
    CharacterComponent,
    ParagraphComponent,
    ToolsMenuComponent,
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([])
  ],
  exports: [
    PaperComponent,
    ToolsMenuComponent
  ]
})
export class TextEditorModule { }

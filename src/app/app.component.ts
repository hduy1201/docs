import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ParagraphState } from './ngrx/states/paragraph.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sipmple-docu';
}

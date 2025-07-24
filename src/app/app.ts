import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicContainer } from './components/cs-basic-container/cs-basic-container';
import { ListItem } from './components/cs-li-item/cs-list-item';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BasicContainer, ListItem],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('AngularCheatsheet');
}

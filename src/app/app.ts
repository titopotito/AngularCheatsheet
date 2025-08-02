import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedLinkListComponent } from './shared/link-list/link-list.component';
import { StyleThemeService } from './shared/style-theme-button/style-theme-button.services';
import { SharedStyleThemeButtonComponent } from './shared/style-theme-button/style-theme-button.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SharedLinkListComponent,
    SharedStyleThemeButtonComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Angular Cheatsheet');
  constructor(public styleThemeService: StyleThemeService) {}
}

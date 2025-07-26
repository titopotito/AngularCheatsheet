import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedLinkList } from './shared/link-list/link-list.component';
import { StyleThemeService } from './services/style-theme.services';
import { SharedStyleThemeButton } from './shared/style-theme-button/style-theme-button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SharedLinkList, SharedStyleThemeButton],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('AngularCheatsheet');
  constructor(public styleThemeService: StyleThemeService) {}
}

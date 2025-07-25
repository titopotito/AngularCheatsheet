import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedThemeToggleButton } from './shared/theme-toggle-button/theme-toggle-button.component';
import { SharedLinkList } from './shared/link-list/link-list.component';
import {
  StyleThemeService,
  StyleThemeType,
} from './services/style-theme.services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SharedThemeToggleButton, SharedLinkList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('AngularCheatsheet');
  constructor(public styleThemeService: StyleThemeService) {}
}

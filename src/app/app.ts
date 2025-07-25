import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageIntroduction } from './pages/introduction.component';
import { SharedThemeToggleButton } from './shared/theme-toggle-button/theme-toggle-button.component';

type StyleTheme = 'dark' | 'light';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SharedThemeToggleButton, PageIntroduction],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('AngularCheatsheet');
  theme = signal<StyleTheme>('dark');
  changeTheme(theme: StyleTheme) {
    this.theme.set(theme);
  }
}

import { Injectable, signal } from '@angular/core';

export type StyleThemeType = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class StyleThemeService {
  styleTheme = signal<StyleThemeType>('dark');

  changeStyleTheme(theme: StyleThemeType) {
    this.styleTheme.set(theme);
  }
}

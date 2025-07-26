import { Injectable, signal, WritableSignal } from '@angular/core';

export type StyleThemeType = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class StyleThemeService {
  private DEFAULT_THEME: StyleThemeType = 'dark';

  styleTheme: WritableSignal<StyleThemeType> = signal<StyleThemeType>(
    this.DEFAULT_THEME
  );

  changeStyleTheme(theme: StyleThemeType): void {
    this.styleTheme.set(theme);
  }

  isDarkMode(): boolean {
    return this.styleTheme() === 'dark' ? true : false;
  }
}

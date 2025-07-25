import { Component, output } from '@angular/core';

@Component({
  selector: 'shared-theme-toggle-button',
  template: `<div>
    <input
      type="radio"
      id="dark-theme-button"
      name="style-theme"
      (click)="changeTheme('dark')"
      [defaultChecked]="true"
    />
    <label for="dark-theme-button">Dark</label>
    <input
      type="radio"
      id="light-theme-button"
      name="style-theme"
      (click)="changeTheme('light')"
    />
    <label for="light-theme-button">Light</label>
  </div>`,
})
export class SharedThemeToggleButton {
  theme = output<'dark' | 'light'>();
  changeTheme(theme: 'dark' | 'light') {
    this.theme.emit(theme);
  }
}

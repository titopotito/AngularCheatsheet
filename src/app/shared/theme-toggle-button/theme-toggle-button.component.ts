import { Component } from '@angular/core';
import {
  StyleThemeService,
  StyleThemeType,
} from '../../services/style-theme.services';

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
  constructor(public styleThemeService: StyleThemeService) {}

  changeTheme(theme: StyleThemeType) {
    this.styleThemeService.changeStyleTheme(theme);
  }
}

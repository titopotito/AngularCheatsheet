import { Component } from '@angular/core';
import {
  StyleThemeService,
  StyleThemeType,
} from '../../services/style-theme.services';

@Component({
  selector: 'shared-style-theme-button',
  templateUrl: 'style-theme-button.component.html',
  styleUrl: 'style-theme-button.component.css',
})
export class SharedStyleThemeButton {
  constructor(public styleThemeService: StyleThemeService) {}

  changeTheme(event: Event) {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    const theme: StyleThemeType = input.checked ? 'dark' : 'light';
    this.styleThemeService.changeStyleTheme(theme);
  }
}

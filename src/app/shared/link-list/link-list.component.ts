import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { StyleThemeService } from '../style-theme-button/style-theme-button.services';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'shared-link-list',
  template: `<li class="{{ styleThemeService.styleTheme() }}">
    <a [routerLink]="link()" routerLinkActive="active"
      ><ng-content></ng-content
    ></a>
  </li>`,
  styleUrl: 'link-list.component.css',
})
export class SharedLinkListComponent {
  link = input.required<string>();

  constructor(public styleThemeService: StyleThemeService) {}
}

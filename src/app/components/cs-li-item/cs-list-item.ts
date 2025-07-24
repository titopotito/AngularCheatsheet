import { Component } from '@angular/core';

@Component({
  selector: 'cs-list-item',
  template: `<li>
    <ng-content></ng-content>
  </li>`,
  styleUrl: 'cs-list-item.css',
})
export class ListItem {}

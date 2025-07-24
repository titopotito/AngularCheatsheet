import { Component } from '@angular/core';

@Component({
  selector: 'sh-list-item',
  template: `<li>
    <ng-content></ng-content>
  </li>`,
  styleUrl: 'sh-list-item.css',
})
export class ListItem {}

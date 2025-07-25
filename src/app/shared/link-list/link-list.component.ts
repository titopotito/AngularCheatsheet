import { Component } from '@angular/core';

@Component({
  selector: 'shared-link-list',
  template: `<li>
    <a><ng-content></ng-content></a>
  </li>`,
})
export class SharedLinkList {}

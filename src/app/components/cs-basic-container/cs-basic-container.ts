import { Component } from '@angular/core';

@Component({
  selector: 'cs-basic-container',
  template: `<section>
    <ng-content select="[header]"></ng-content>

    <ul>
      <ng-content select="[list-item]"></ng-content>
    </ul>
  </section>`,
  styleUrl: 'cs-basic-container.css',
})
export class BasicContainer {}

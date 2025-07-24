import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'sh-basic-container',
  template: `<section>
    <ng-content select="[header]"></ng-content>
    <ul #list>
      <ng-content select="[list-item]"></ng-content>
    </ul>
    <ng-container #others>
      <ng-content></ng-content>
    </ng-container>
  </section>`,
  styleUrl: 'sh-basic-container.css',
})
export class BasicContainer {}

import { Component } from '@angular/core';
import { BasicContainer } from '../../shared-components/sh-basic-container/sh-basic-container';
import { ListItem } from '../../shared-components/sh-list-item/sh-list-item';

@Component({
  selector: 'topic-structural-directives',
  imports: [BasicContainer, ListItem],
  template: `<sh-basic-container>
    <h2 header>Structural Directives</h2>
    <sh-list-item list-item>*ngIf</sh-list-item>
    <sh-list-item list-item>*ngFor</sh-list-item>
    <sh-list-item list-item>*ngSwitch</sh-list-item>
  </sh-basic-container>`,
})
export class TopicStructuralDirectives {}

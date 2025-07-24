import { Component } from '@angular/core';
import { BasicContainer } from '../../shared-components/sh-basic-container/sh-basic-container';
import { ListItem } from '../../shared-components/sh-list-item/sh-list-item';

@Component({
  selector: 'topic-set-up',
  imports: [BasicContainer, ListItem],
  template: `<sh-basic-container>
    <h2 header>Set-up</h2>
    <sh-list-item list-item>ng new &lt;project-name&gt;</sh-list-item>
    <sh-list-item list-item>npm start</sh-list-item>
  </sh-basic-container>`,
})
export class TopicSetUp {}

import { Component } from '@angular/core';
import { BasicContainer } from '../../shared-components/sh-basic-container/sh-basic-container';
import { ListItem } from '../../shared-components/sh-list-item/sh-list-item';

@Component({
  selector: 'topic-lifecycle-hooks',
  imports: [BasicContainer, ListItem],
  template: `<sh-basic-container>
    <h2 header>Lifecycle Hooks</h2>
    <sh-list-item list-item>ngOnInit</sh-list-item>
    <sh-list-item list-item>ngOnChanges</sh-list-item>
    <sh-list-item list-item>ngDoCheck</sh-list-item>
    <sh-list-item list-item>ngAfterContentInit</sh-list-item>
    <sh-list-item list-item>ngAfterContentChecked</sh-list-item>
    <sh-list-item list-item>ngAfterViewInit</sh-list-item>
    <sh-list-item list-item>ngAfterViewChecked</sh-list-item>
    <sh-list-item list-item>ngAfterNextRender</sh-list-item>
    <sh-list-item list-item>ngAfterEveryRender</sh-list-item>
    <sh-list-item list-item>ngOnDestroy</sh-list-item>
  </sh-basic-container>`,
})
export class TopicLifecycleHooks {}

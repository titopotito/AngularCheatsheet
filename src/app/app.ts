import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopicComponent } from './main-components/topic-component/topic-component';
import { TopicSetUp } from './main-components/topic-set-up/topic-set-up';
import { TopicStructuralDirectives } from './main-components/topic-structural-directives/topic-structural-directives';
import { TopicLifecycleHooks } from './main-components/topic-lifecycle-hooks/topic-lifecycle-hooks';
import { TopicDataBinding } from './main-components/topic-data-binding/topic-data-binding';
import { TopicControlFlow } from './main-components/topic-control-flow/topic-control-flow';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TopicComponent,
    TopicSetUp,
    TopicStructuralDirectives,
    TopicLifecycleHooks,
    TopicDataBinding,
    TopicControlFlow,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('AngularCheatsheet');
}

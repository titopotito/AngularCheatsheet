import { Component } from '@angular/core';
import { BasicContainer } from '../../shared-components/sh-basic-container/sh-basic-container';
import { ListItem } from '../../shared-components/sh-list-item/sh-list-item';

@Component({
  selector: 'topic-component',
  imports: [BasicContainer, ListItem],
  template: `<sh-basic-container>
    <h2 header>Component</h2>
    <sh-list-item list-item>selector</sh-list-item>
    <sh-list-item list-item>template</sh-list-item>
    <sh-list-item list-item>templateUrl</sh-list-item>
    <sh-list-item list-item>style</sh-list-item>
    <sh-list-item list-item>styleUrl</sh-list-item>
    <sh-list-item list-item>host</sh-list-item>
    <sh-list-item list-item>imports</sh-list-item>
    <pre class="codeblock"><code ngNonBindable>&#64;Component(&#123;
  selector: 'my-component',
  standalone: true,
  imports: [CommonModule],
  template: &#96;&lt;h1&gt;{{ title }}&lt;/h1&gt;&#96;
&#125;)
export class MyComponent &#123;
  title = 'Hello Angular';
&#125;</code></pre>
  </sh-basic-container>`,
})
export class TopicComponent {}

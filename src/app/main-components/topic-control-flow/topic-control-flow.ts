import { Component } from '@angular/core';
import { BasicContainer } from '../../shared-components/sh-basic-container/sh-basic-container';
import { ListItem } from '../../shared-components/sh-list-item/sh-list-item';

@Component({
  selector: 'topic-control-flow',
  imports: [BasicContainer, ListItem],
  template: `<sh-basic-container>
    <h2 header>Control Flow</h2>
    <sh-list-item> &#64;if, &#64;else-if and &#64;else</sh-list-item>
    <pre class="codeblock"><code ngNonBindable>&#64;if (a>b) &#123;
    // insert code 
&#125; &#64;else-if (a&lt;b) &#123;
    // insert code
&#125; &#64;else &#123;
    // insert code
&#125;</code></pre>
    <sh-list-item> &#64;for</sh-list-item>
    <pre
      class="codeblock"
    ><code ngNonBindable>&#64;for (item of items; track item.id; let idx = $index, e = $even) &#123;
    // insert code 
&#125;</code></pre>
  </sh-basic-container>`,
})
export class TopicControlFlow {}

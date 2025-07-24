import { Component } from '@angular/core';
import { BasicContainer } from '../../shared-components/sh-basic-container/sh-basic-container';
import { ListItem } from '../../shared-components/sh-list-item/sh-list-item';

@Component({
  selector: 'topic-data-binding',
  imports: [BasicContainer, ListItem],
  template: `<sh-basic-container>
    <h2 header>Data Binding</h2>
    <sh-list-item list-item
      >Interpolation:
      <pre><code ngNonBindable>{{ &lt;var-name&gt; }}</code></pre>
    </sh-list-item>
    <sh-list-item list-item
      >Property Binding:
      <pre><code ngNonBindable
        >[ &lt;property-name&gt; ]="imageUrl"</code
      ></pre>
    </sh-list-item>
    <sh-list-item list-item
      >Event Binding:
      <pre><code ngNonBindable
        >( &lt;event-name&gt; )="onClick()"</code
      ></pre>
    </sh-list-item>
    <sh-list-item list-item
      >Two-way Binding:
      <pre><code ngNonBindable
        >[( &lt;model-property-name&gt; )]="username"</code
      ></pre>
    </sh-list-item>
  </sh-basic-container>`,
  styleUrl: 'topic-data-binding.css',
})
export class TopicDataBinding {}

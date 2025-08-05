import { Component, input, InputSignal } from '@angular/core';
import { SharedCopyButtonComponent } from '../copy-button/copy-button.component';
import { Highlight } from 'ngx-highlightjs';

@Component({
  imports: [Highlight, SharedCopyButtonComponent],
  selector: 'shared-pre-with-copy-button',
  template: `<pre>
        <code [highlight]="code()" language={{lang()}}></code>
        <shared-copy-button [codeToCopy]="code()"></shared-copy-button>
    </pre>`,
  styles: [
    `
      pre {
        position: relative;
      }

      shared-copy-button {
        position: absolute;
        right: 0;
        margin: 5px;
      }
    `,
  ],
})
export class SharedPreWithCopyButtonComponent {
  code: InputSignal<string> = input.required<string>();
  lang: InputSignal<'typescript' | 'html' | 'bash'> = input.required<
    'typescript' | 'html' | 'bash'
  >();
}

import { Component, input, InputSignal } from '@angular/core';
import { SharedCopyButton } from '../copy-button/copy-button.component';
import { Highlight } from 'ngx-highlightjs';

@Component({
  imports: [Highlight, SharedCopyButton],
  selector: 'shared-pre-with-copy-button',
  template: `<pre>
        <code [highlight]="code()" language={{lang()}}></code>
        <shared-copy-button [codeToCopy]="code()"></shared-copy-button>
    </pre>`,
})
export class SharedPreWithCopyButton {
  code: InputSignal<string> = input.required<string>();
  lang: InputSignal<'typescript' | 'html'> = input.required<
    'typescript' | 'html'
  >();
}

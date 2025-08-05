import { Component } from '@angular/core';
import { SharedPreWithCopyButtonComponent } from '../shared/pre-with-copy-button/pre-with-copy-button.component';

@Component({
  imports: [SharedPreWithCopyButtonComponent],
  selector: 'set-up-page',
  template: `<h2>Set-up</h2>
    <shared-pre-with-copy-button
      [code]="code_str1"
      [lang]="'bash'"
    ></shared-pre-with-copy-button>
    <shared-pre-with-copy-button
      [code]="code_str2"
      [lang]="'bash'"
    ></shared-pre-with-copy-button>
    <shared-pre-with-copy-button
      [code]="code_str3"
      [lang]="'bash'"
    ></shared-pre-with-copy-button>`,
})
export class SetUpPageComponent {
  code_str1: string = `ng new <project-name>`;
  code_str2: string = `cd my-first-angular-app`;
  code_str3: string = `npm start`;
}

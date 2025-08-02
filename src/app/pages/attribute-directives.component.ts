import { Component } from '@angular/core';
import { SharedPreWithCopyButton } from '../shared/pre-with-copy-button/pre-with-copy-button.component';

@Component({
  imports: [SharedPreWithCopyButton],
  selector: 'page-attribute-directives',
  template: `<h2>Attribute Directives</h2>
    <p>
      Change the appearance or behavior of DOM elements and Angular components
      with attribute directives.
    </p>
    <section>
      <h3>Building an Attribute Directive</h3>
      <shared-pre-with-copy-button
        [code]="code_str1"
        [lang]="'typescript'"
      ></shared-pre-with-copy-button>
    </section>
    <section>
      <h3>Using an Attribute Directive</h3>
      <h4>1. Declare in a Module</h4>
      <shared-pre-with-copy-button
        [code]="code_str2"
        [lang]="'typescript'"
      ></shared-pre-with-copy-button>
      <div>or</div>
      <h4>2. Import into a standalone component</h4>
      <shared-pre-with-copy-button
        [code]="code_str3"
        [lang]="'typescript'"
      ></shared-pre-with-copy-button>
    </section>
    <section>
      <h3>Applying an Attribute Directive</h3>
      <shared-pre-with-copy-button
        [code]="code_str4"
        [lang]="'html'"
      ></shared-pre-with-copy-button>
    </section>`,
})
export class PageAttributeDirectives {
  code_str1: string = `import {Directive, ElementRef, inject} from '@angular/core';

@Directive({
    selector: '[appHighlight]',
})
    export class HighlightDirective {
    private el = inject(ElementRef);
    constructor() {
        this.el.nativeElement.style.backgroundColor = 'yellow';
    }
}`;

  code_str2: string = `@NgModule({
  declarations: [HighlightDirective],
  // ...
})
export class AppModule {}`;

  code_str3: string = `@Component({
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  // ...
})`;

  code_str4: string = `<p appHighlight>Highlight me!</p>`;
}

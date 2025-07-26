import { Component } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  imports: [Highlight],
  selector: 'page-attribute-directives',
  template: `<h2>Attribute Directives</h2>
    <p>
      Change the appearance or behavior of DOM elements and Angular components
      with attribute directives.
    </p>
    <h3>Building an Attribute Directive</h3>
    <pre><code [highlight]="code1" language="typescript"></code></pre>

    <h3>Using an Attribute Directive</h3>
    <h4>1. Declare in a Module</h4>
    <pre><code [highlight]="code2" language="typescript"></code></pre>

    <div>or</div>
    <h4>2. Import into a standalone component</h4>
    <pre><code [highlight]="code3" language="typescript"></code></pre>

    <h3>Applying an Attribute Directive</h3>
    <pre><code [highlight]="code4" language="html"></code></pre> `,
})
export class PageAttributeDirectives {
  code1 = `import {Directive, ElementRef, inject} from '@angular/core';

@Directive({
    selector: '[appHighlight]',
})
    export class HighlightDirective {
    private el = inject(ElementRef);
    constructor() {
        this.el.nativeElement.style.backgroundColor = 'yellow';
    }
}`;

  code2 = `@NgModule({
  declarations: [HighlightDirective],
  // ...
})
export class AppModule {}`;

  code3 = `@Component({
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  // ...
})`;

  code4 = `<p appHighlight>Highlight me!</p>`;
}

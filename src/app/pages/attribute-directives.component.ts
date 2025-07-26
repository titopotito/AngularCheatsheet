import { Component } from '@angular/core';

@Component({
  selector: 'page-attribute-directives',
  template: `<h2>Attribute Directives</h2>
    <p>
      Change the appearance or behavior of DOM elements and Angular components
      with attribute directives.
    </p>
    <h3>Building an Attribute Directive</h3>
    <pre
      class="codeblock"
    ><code>import &#123;Directive, ElementRef, inject&#125; from '&#64;angular/core';

&#64;Directive(&#123;
  selector: '[appHighlight]',
&#125;)
export class HighlightDirective &#123;
  private el = inject(ElementRef);
  constructor() &#123;
    this.el.nativeElement.style.backgroundColor = 'yellow';
  &#125;
&#125;</code></pre>

    <h3>Using an Attribute Directive</h3>
    <h4>1. Declare in a Module</h4>
    <pre class="codeblock"><code>&#64;NgModule(&#123;
  declarations: [HighlightDirective],
  // ...
&#125;)
export class AppModule &#123;&#125;</code></pre>

    <div>or</div>
    <h4>2. Import into a standalone component</h4>
    <pre class="codeblock"><code>&#64;Component(&#123;
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  // ...
&#125;)</code></pre>

    <h3>Applying an Attribute Directive</h3>
    <pre
      class="codeblock"
    ><code>&lt;p appHighlight&gt;Highlight me!&lt;/p&gt;</code></pre> `,
})
export class PageAttributeDirectives {}

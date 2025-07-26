import { Component } from '@angular/core';

@Component({
  selector: 'page-injectable',
  template: `
    <h2>&#64;Injectable</h2>
    <p>
      <strong
        >Injects dependencies / service into a component, directive, or other
        injectable.</strong
      >
      When used, checks the registry first if there is an instance that is
      already available. If not, a new instance is created and stored in the
      registry. Angular creates an application-wide injector (also known as the
      "root" injector) during the application bootstrap process.
    </p>
    <h3>Creating an Injectable Service</h3>
    <pre
      class="codeblock"
    ><code>import &#123; Injectable &#125; from '&#64;angular/core';
import &#123; DATA &#125; from './sample-data';

&#64;Injectable(&#123;
  // declares that this service should be created
  // by the root application injector.
  providedIn: 'root',
&#125;)
export class ExampleDataService &#123;
  getData() &#123;
    return DATA;
  &#125;
&#125;</code></pre>
    <h3>Injecting Services</h3>
    <p>
      The inject method can be used in both classes and functions, while the
      constructor method can naturally only be used in a class constructor.
    </p>
    <h4>1. Using <code>inject</code></h4>
    <pre
      class="codeblock"
    ><code >import &#123; inject, Component &#125; from "&#64;angular/core";
import &#123; ExampleDataService &#125; from "./exampledataservice.services.ts";

&#64;Component(&#123;...&#125;)
export class SomeComponent &#123;
  private dataService = inject(ExampleDataService);
&#125;</code></pre>
    <h4>1. Using constructor method</h4>
    <pre
      class="codeblock"
    ><code >import &#123; Component &#125; from "&#64;angular/core";
import &#123; ExampleDataService &#125; from "./exampledataservice.services.ts";

&#64;Component(&#123;...&#125;)
export class SomeComponent &#123;
  constructor(private dataService: ExampleDataService)
&#125;</code></pre>
  `,
})
export class PageInjectable {}

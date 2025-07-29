import { Component } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  imports: [Highlight],
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
    <pre><code [highlight]="code1" language="typescript"></code></pre>
    <h3>Injecting Services</h3>
    <p>
      The inject method can be used in both classes and functions, while the
      constructor method can naturally only be used in a class constructor.
    </p>
    <h4>1. Using <code>inject</code></h4>
    <pre><code [highlight]="code2" language="typescript"></code></pre>

    <h4>2. Using constructor method</h4>
    <pre><code [highlight]="code3" language="typescript"></code></pre>
  `,
})
export class PageInjectable {
  code1: string = `import { Injectable } from '@angular/core';
import { DATA } from './sample-data';

@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class ExampleDataService {
  getData() {
    return DATA;
  }
}`;
  code2: string = `import { inject, Component } from "@angular/core";
import { ExampleDataService } from "./exampledataservice.services.ts";

@Component({...})
export class SomeComponent {
  private dataService = inject(ExampleDataService);
}`;

  code3: string = `import { Component } from "@angular/core";
import { ExampleDataService } from "./exampledataservice.services.ts";

@Component({...})
export class SomeComponent {
  constructor(private dataService: ExampleDataService)
}`;
}

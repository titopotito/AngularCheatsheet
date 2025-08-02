import { Component } from '@angular/core';
import { SharedPreWithCopyButton } from '../shared/pre-with-copy-button/pre-with-copy-button.component';

@Component({
  imports: [SharedPreWithCopyButton],
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
    <shared-pre-with-copy-button
      [code]="code_str1"
      [lang]="'typescript'"
    ></shared-pre-with-copy-button>
    <h3>Injecting Services</h3>
    <p>
      The inject method can be used in both classes and functions, while the
      constructor method can naturally only be used in a class constructor.
    </p>
    <h4>1. Using <code>inject</code></h4>
    <shared-pre-with-copy-button
      [code]="code_str2"
      [lang]="'typescript'"
    ></shared-pre-with-copy-button>
    <h4>2. Using constructor method</h4>
    <shared-pre-with-copy-button
      [code]="code_str3"
      [lang]="'typescript'"
    ></shared-pre-with-copy-button>
  `,
})
export class PageInjectable {
  code_str1: string = `import { Injectable } from '@angular/core';
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
  code_str2: string = `import { inject, Component } from "@angular/core";
import { ExampleDataService } from "./exampledataservice.services.ts";

@Component({...})
export class SomeComponent {
  private dataService = inject(ExampleDataService);
}`;

  code_str3: string = `import { Component } from "@angular/core";
import { ExampleDataService } from "./exampledataservice.services.ts";

@Component({...})
export class SomeComponent {
  constructor(private dataService: ExampleDataService)
}`;
}

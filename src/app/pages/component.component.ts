import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  imports: [CommonModule, Highlight],
  selector: 'page-component',
  styles: [
    `
      table {
        width: 100%;
      }

      th,
      td {
        border: 1px solid #ddd;
        padding: 8px;
        font-size: 0.8rem;
      }
    `,
  ],
  template: `
    <h2>&#64;Component</h2>
    <p>
      Components are the main building blocks of Angular applications. Each
      component represents a part of a larger web page. Organizing an
      application into components helps provide structure to your project,
      clearly separating code into specific parts that are easy to maintain and
      grow over time.
    </p>
    <h3>Component Metadata</h3>
    <table>
      <thead>
        <tr>
          <th>Metadata Property</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody *ngFor="let row of metadataTable">
        <tr>
          <td>{{ row[0] }}</td>
          <td>
            <code>{{ row[1] }}</code>
          </td>
          <td>{{ row[2] }}.</td>
        </tr>
      </tbody>
    </table>
    <h3>Example:</h3>
    <pre><code [highlight]='code1' language="typescript"></code></pre>
  `,
})
export class PageComponent {
  metadataTable: [string, string, string][] = [
    [
      'selector',
      'string',
      "The custom HTML tag used to render the component (e.g., 'app-my-comp').",
    ],
    ['template', 'string', 'Inline HTML template. Use instead of templateUrl.'],
    ['templateUrl', 'string', 'Path to the external HTML template file.'],
    [
      'styles',
      'string[]',
      'Array of inline CSS style strings. Use instead of styleUrls.',
    ],
    ['styleUrls', 'string[]', 'Array of paths to external CSS/SCSS files.'],
    [
      'standalone',
      'boolean',
      'Marks the component as a standalone component (Angular 14+).',
    ],
    [
      'imports',
      'any[]',
      'List of other standalone components/directives/pipes used in this component (Angular 14+).',
    ],
    [
      'providers',
      'Provider[]',
      'Services/providers specific to this component only.',
    ],
    [
      'animations',
      'AnimationMetadata[]',
      'Defines animations for this component.',
    ],
    [
      'changeDetection',
      'ChangeDetectionStrategy',
      'Strategy for detecting changes (e.g., Default, OnPush).',
    ],
    [
      'encapsulation',
      'ViewEncapsulation',
      'Controls style encapsulation (e.g., Emulated, None, ShadowDom).',
    ],
    [
      'interpolation',
      '[string, string]',
      "Custom interpolation delimiters (e.g., ['${', '}']).",
    ],
    [
      'inputs',
      'string[]',
      'Declares input property names if not using @Input() decorator.',
    ],
    [
      'outputs',
      'string[]',
      'Declares output property names if not using @Output() decorator.',
    ],
    [
      'host',
      '{ [key: string]: string }',
      'Binds events, properties, and attributes to the host element.',
    ],
    [
      'viewProviders',
      'Provider[]',
      "Like providers but visible only to the component's view.",
    ],
    [
      'moduleId',
      'string | number',
      'Used for resolving relative paths (legacy; not often needed now).',
    ],
  ];

  code1 = `@Component({
  selector: 'my-component',
  standalone: true,
  imports: [CommonModule],
  template: ${'`<h1>{{ title }}</h1>`'}
})
export class MyComponent {
  title = 'Hello Angular';
}`;
}

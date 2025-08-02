import { Component } from '@angular/core';

@Component({
  selector: 'forms-page',
  template: `<h2>Forms</h2>
    <table border="1" cellpadding="8" cellspacing="0">
      <thead>
        <tr>
          <th></th>
          <th>Reactive</th>
          <th>Template-driven</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Setup of form model</td>
          <td>Explicit, created in component class</td>
          <td>Implicit, created by directives</td>
        </tr>
        <tr>
          <td>Data model</td>
          <td>Structured and immutable</td>
          <td>Unstructured and mutable</td>
        </tr>
        <tr>
          <td>Data flow</td>
          <td>Synchronous</td>
          <td>Asynchronous</td>
        </tr>
        <tr>
          <td>Form validation</td>
          <td>Functions</td>
          <td>Directives</td>
        </tr>
      </tbody>
    </table> `,
})
export class FormsPageComponent {}

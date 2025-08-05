import { Component } from '@angular/core';
import { SharedPreWithCopyButtonComponent } from '../shared/pre-with-copy-button/pre-with-copy-button.component';

@Component({
  imports: [SharedPreWithCopyButtonComponent],
  selector: 'http-client-page',
  template: `<h2>HttpClient</h2>
    <h3>Provide in <code>appConfig</code> or in <code>NgModule</code></h3>
    <shared-pre-with-copy-button
      [code]="code_str1"
      [lang]="'typescript'"
    ></shared-pre-with-copy-button>
    <shared-pre-with-copy-button
      [code]="code_str2"
      [lang]="'typescript'"
    ></shared-pre-with-copy-button>
    <h3>Configuration</h3>
    <thead>
      <tr>
        <th>Configuration</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>withFetch</code></td>
        <td>
          By default, <code>HttpClient</code> uses the XMLHttpRequest API to
          make requests. The <code>withFetch</code> feature switches the client
          to use the fetch API instead.
        </td>
      </tr>
      <tr>
        <td><code>withInterceptors(...)</code></td>
        <td>
          <code>withInterceptors</code> configures the set of interceptor
          functions which will process requests made through
          <code>HttpClient</code>
        </td>
      </tr>
      <tr>
        <td><code>withInterceptorsFromDi(...)</code></td>
        <td>
          <code>withInterceptorsFromDi</code> includes the older style of
          class-based interceptors in the <code>HttpClient</code> configuration
        </td>
      </tr>
      <tr>
        <td><code>withRequestsMadeViaParent()</code></td>
        <td>
          When you add <code>withRequestsMadeViaParent()</code>,
          <code>HttpClient</code> is configured to instead pass requests up to
          the <code>HttpClient</code> instance in the parent injector, once
          they've passed through any configured interceptors at this level.
        </td>
      </tr>
      <tr>
        <td><code>withJsonSupport()</code></td>
        <td>
          Including <code>withJsonSupport()</code> enables the
          <code>.jsonp()</code> method on <code>HttpClient</code>, which makes a
          GET request via the JSONP convention for cross-domain loading of data
        </td>
      </tr>
    </tbody>`,
})
export class HttpClientPageComponent {
  code_str1: string = `export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
  ]
};`;

  code_str2: string = `@NgModule({
  providers: [
    provideHttpClient(),
  ],
  // ... other application configuration
})
export class AppModule {}`;
}

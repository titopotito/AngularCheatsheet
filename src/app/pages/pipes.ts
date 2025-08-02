import { Component } from '@angular/core';
import { SharedPreWithCopyButton } from '../shared/pre-with-copy-button/pre-with-copy-button.component';

@Component({
  imports: [SharedPreWithCopyButton],
  selector: 'page-pipes',
  template: `<h2>Pipes</h2>
    <p>
      Pipes are a special operator in Angular template expressions that allows
      you to transform data declaratively in your template. Pipes let you
      declare a transformation function once and then use that transformation
      across multiple templates. Angular pipes use the vertical bar character
      (|),
    </p>
    <section>
      <h3>Example</h3>
      <shared-pre-with-copy-button
        [code]="code_str1"
        [lang]="'typescript'"
      ></shared-pre-with-copy-button>
    </section>
    <section>
      <h3>Passing parameters to pipes</h3>
      <p>
        To specify a parameter, append the pipe name with a colon (:) followed
        by the parameter value.
      </p>
      <shared-pre-with-copy-button
        [code]="code_str2"
        [lang]="'typescript'"
      ></shared-pre-with-copy-button>
      <p>
        Some pipes may accept multiple parameters. You can specify additional
        parameter values separated by the colon character (:)
      </p>
      <shared-pre-with-copy-button
        [code]="code_str3"
        [lang]="'typescript'"
      ></shared-pre-with-copy-button>
    </section>
    <section>
      <h3>Creating custom pipes</h3>
      <p>
        You can define a custom pipe by implementing a TypeScript class with the
        &#64;Pipe decorator. A pipe must have two things:
      </p>
      <ul>
        <li>- A name, specified in the pipe decorator</li>
        <li>
          - A method named transform that performs the value transformation.
        </li>
      </ul>

      <shared-pre-with-copy-button
        [code]="code_str4"
        [lang]="'typescript'"
      ></shared-pre-with-copy-button>
    </section>
    <section>
      <h3>Built-in pipes</h3>
      <table border="1" cellpadding="8" cellspacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AsyncPipe</td>
            <td>Read the value from a Promise or an RxJS Observable.</td>
          </tr>
          <tr>
            <td>CurrencyPipe</td>
            <td>
              Transforms a number to a currency string, formatted according to
              locale rules.
            </td>
          </tr>
          <tr>
            <td>DatePipe</td>
            <td>Formats a Date value according to locale rules.</td>
          </tr>
          <tr>
            <td>DecimalPipe</td>
            <td>
              Transforms a number into a string with a decimal point, formatted
              according to locale rules.
            </td>
          </tr>
          <tr>
            <td>I18nPluralPipe</td>
            <td>
              Maps a value to a string that pluralizes the value according to
              locale rules.
            </td>
          </tr>
          <tr>
            <td>I18nSelectPipe</td>
            <td>
              Maps a key to a custom selector that returns a desired value.
            </td>
          </tr>
          <tr>
            <td>JsonPipe</td>
            <td>
              Transforms an object to a string representation via
              JSON.stringify, intended for debugging.
            </td>
          </tr>
          <tr>
            <td>KeyValuePipe</td>
            <td>Transforms Object or Map into an array of key value pairs.</td>
          </tr>
          <tr>
            <td>LowerCasePipe</td>
            <td>Transforms text to all lower case.</td>
          </tr>
          <tr>
            <td>PercentPipe</td>
            <td>
              Transforms a number to a percentage string, formatted according to
              locale rules.
            </td>
          </tr>
          <tr>
            <td>SlicePipe</td>
            <td>
              Creates a new Array or String containing a subset (slice) of the
              elements.
            </td>
          </tr>
          <tr>
            <td>TitleCasePipe</td>
            <td>Transforms text to title case.</td>
          </tr>
          <tr>
            <td>UpperCasePipe</td>
            <td>Transforms text to all upper case.</td>
          </tr>
        </tbody>
      </table>
    </section>`,
})
export class PagePipes {
  code_str1 = `import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [CurrencyPipe, DatePipe, TitleCasePipe],
  template: ${`
    <main>
       <!-- Transform the company name to title-case and
       transform the purchasedOn date to a locale-formatted string -->
<h1>Purchases from {{ company | titlecase }} on {{ purchasedOn | date }}</h1>
	    <!-- Transform the amount to a currency-formatted string -->
      <p>Total: {{ amount | currency }}</p>
    </main>
  `},
})
export class ShoppingCartComponent {
  amount = 123.45;
  company = 'acme corporation';
  purchasedOn = '2024-07-08';
}`;
  code_str2: string = `<p>The event will occur at {{ scheduledOn | date:'hh:mm' }}.</p>`;
  code_str3: string = `<p>The event will occur at {{ scheduledOn | date:'hh:mm':'UTC' }}.</p>`;
  code_str4: string = `// kebab-case.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'kebabCase',
})
export class KebabCasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toLowerCase().replace(/ /g, '-');
  }
}`;
}

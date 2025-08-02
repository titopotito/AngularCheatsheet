import { Component } from '@angular/core';
import { SharedPreWithCopyButton } from '../shared/pre-with-copy-button/pre-with-copy-button.component';

@Component({
  imports: [SharedPreWithCopyButton],
  selector: 'page-host-binding',
  template: `<h2>Host Binding</h2>
    <section>
      <h3>Using host property of Component</h3>
      <p>
        A component can bind properties, attributes, and events to its host
        element. This behaves identically to bindings on elements inside the
        component's template, but instead defined with the host property in the
        &#64;Component decorator.
      </p>
      <shared-pre-with-copy-button
        [code]="code_str1"
        [lang]="'typescript'"
      ></shared-pre-with-copy-button>
    </section>
    <section>
      <h3>Using &#64;HostBinding and &#64;HostListener</h3>
      <p>
        You can alternatively bind to the host element by applying the
        &#64;HostBinding and &#64;HostListener decorator to class members.
      </p>
      <p>
        &#64;HostBinding lets you bind host properties and attributes to
        properties and methods.
      </p>
      <p>
        &#64;HostListener lets you bind event listeners to the host element. The
        decorator accepts an event name and an optional array of arguments.
      </p>
      <shared-pre-with-copy-button
        [code]="code_str2"
        [lang]="'typescript'"
      ></shared-pre-with-copy-button>
      <p>
        <em
          >Always prefer using the host property over &#64;HostBinding and
          &#64;HostListener. These decorators exist exclusively for backwards
          compatibility.</em
        >
      </p>
    </section>`,
})
export class PageHostBinding {
  code_str1 = `@Component({
  ...,
  host: {
    'role': 'slider',
    '[attr.aria-valuenow]': 'value',
    '[class.active]': 'isActive()',
    '[tabIndex]': 'disabled ? -1 : 0',
    '(keydown)': 'updateValue($event)',
  },
})
export class CustomSlider {
  value: number = 0;
  disabled: boolean = false;
  isActive = signal(false);
  updateValue(event: KeyboardEvent) { /* ... */ }
  /* ... */
}`;

  code_str2 = `@Component({
  /* ... */
})
export class CustomSlider {
  @HostBinding('attr.aria-valuenow')
  value: number = 0;
  @HostBinding('tabIndex')
  getTabIndex() {
    return this.disabled ? -1 : 0;
  }
  /* ... */
}`;
}

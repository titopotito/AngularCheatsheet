import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'shared-copy-button',
  standalone: true,
  template: `<button (click)="copyCode($event, codeToCopy())">copy</button>`,
  styles: [
    `
      :host {
        display: flex;
        justify-content: flex-end;
      }

      button {
        color: var(--font-color-1);
        background-color: var(--button-color-2);
        border: none;
        padding: 0.5rem;
        width: 5rem;
      }

      button:hover {
        cursor: pointer;
        background-color: var(--button-color-1);
      }
    `,
  ],
})
export class SharedCopyButtonComponent {
  codeToCopy: InputSignal<string> = input<string>('');

  copyCode(event: Event, code_str: string): void {
    navigator.clipboard.writeText(code_str);
    const button = event.currentTarget as HTMLButtonElement;
    button.innerHTML =
      'copied <i class="fa-solid fa-check" style="color:green"></i>';
  }
}

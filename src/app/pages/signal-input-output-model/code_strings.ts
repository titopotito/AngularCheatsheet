const SIGNAL1: string = `const count = signal(0);`;
const SIGNAL2: string = `console.log('The count is: ' + count());`;
const SIGNAL3: string = `count.set(3);`;
const SIGNAL4: string = `// Increment the count by 1.
count.update(value => value + 1);`;
const SIGNAL5: string = `const count: WritableSignal<number> = signal(0);
const doubleCount: Signal<number> = computed(() => count() * 2);`;
const INPUT1: string = `import {Component, input} from '@angular/core';
@Component({/*...*/})
export class CustomSlider {
  // Declare an input named 'value' with a default value of zero.
  value = input(0);
}`;
const INPUT2: string = `<custom-slider [value]="50" />`;
const MODEL1: string = `// ./app.component.ts
import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
@Component({
  selector: 'app-root',
  imports: [CounterComponent],
  template: ${`
    <main>
      <h1>Counter: {{ initialCount }}</h1>
      <app-counter [(count)]="initialCount"></app-counter>
    </main>
  `},
})
export class AppComponent {
  initialCount = 18;
}`;
const MODEL2: string = `// './counter/counter.component.ts';
import { Component, model } from '@angular/core';
@Component({
  selector: 'app-counter',
  template: ${`
    <button (click)="updateCount(-1)">-</button>
    <span>{{ count() }}</span>
    <button (click)="updateCount(+1)">+</button>
  `},
})
export class CounterComponent {
  count = model<number>(0);
  updateCount(amount: number): void {
    this.count.update(currentCount => currentCount + amount);
  }
}`;
const OUTPUT1: string = `@Component({/*...*/})
export class ExpandablePanel {
  panelClosed = output<void>();
}`;
const OUTPUT2: string = `<expandable-panel (panelClosed)="savePanelState()" />`;
const OUTPUT3: string = `this.panelClosed.emit();`;
const OUTPUT4: string = `const someComponentRef: ComponentRef<SomeComponent> = viewContainerRef.createComponent(/*...*/);
someComponentRef.instance.someEventProperty.subscribe(eventData => {
  console.log(eventData);

//....

eventSubscription.unsubscribe();
});`;

export const CODE_STRINGS = {
  SIGNAL1,
  SIGNAL2,
  SIGNAL3,
  SIGNAL4,
  SIGNAL5,
  INPUT1,
  INPUT2,
  MODEL1,
  MODEL2,
  OUTPUT1,
  OUTPUT2,
  OUTPUT3,
  OUTPUT4,
} as const;

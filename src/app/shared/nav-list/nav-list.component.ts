import {
  Component,
  computed,
  inject,
  input,
  InputSignal,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { StyleThemeService } from '../style-theme-button/style-theme.services';

type NavContentArrayType = { navText: string; pageNum: number }[];

export type NavContentType =
  | NavContentArrayType
  | { [pageName: string]: { navText: string; pageNum: number } };

@Component({
  selector: 'shared-nav-list',
  template: `<nav>
    <h3>Topics</h3>
    <ul>
      @for (item of navContentArr(); track item.pageNum) {
      <li>
        <button
          (click)="switchVisibleSection(item.pageNum)"
          [class]="styleThemeService.styleTheme()"
          [class.active]="isNavButtonActive(item.pageNum)"
        >
          {{ item.navText }}
        </button>
      </li>
      }
    </ul>
  </nav>`,
  styleUrl: 'nav-list.component.css',
})
export class SharedNavList {
  styleThemeService = inject(StyleThemeService);

  // You must use viewChild() at the parent component and access visibleSection property
  visibleSection: WritableSignal<number> = signal<number>(1);

  switchVisibleSection(visibleSection: number): void {
    this.visibleSection.set(visibleSection);
  }

  isNavButtonActive(buttonNumber: number): 'active' | '' {
    return this.visibleSection() === buttonNumber ? 'active' : '';
  }

  navContent: InputSignal<NavContentType> = input.required({});

  // soft checks if navContent is NavContentArrayType
  // converts it into NavContentArrayType if it is not yet of that type
  navContentArr: Signal<NavContentArrayType> = computed(() => {
    if (Array.isArray(this.navContent())) {
      return this.navContent() as NavContentArrayType;
    } else {
      const convertedNavContent = Object.values(this.navContent());
      return convertedNavContent as NavContentArrayType;
    }
  });
}

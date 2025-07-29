import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import { StyleThemeService } from '../../shared/style-theme-button/style-theme.services';
import { CODE_STRINGS } from './code_strings';

@Component({
  imports: [Highlight],
  selector: 'page-routing',
  templateUrl: 'routing.component.html',
  styleUrl: 'routing.component.css',
})
export class PageRouting {
  readonly CODE_STRINGS = CODE_STRINGS;

  readonly PAGE_SECTIONS = {
    DEFINING_BASIC_ROUTE: 1,
    GETTING_ROUTE_INFO: 2,
    WILDCARD_ROUTE: 3,
    REDIRECTS: 4,
    NESTED_ROUTES: 5,
    QUERY_PARAMS_AND_FRAGMENTS: 6,
    LAZY_LOADING: 7,
  } as const;

  styleThemeService = inject(StyleThemeService);

  visibleSection: WritableSignal<number> = signal<number>(
    this.PAGE_SECTIONS.DEFINING_BASIC_ROUTE
  );

  switchVisibleSection(visibleSection: number): void {
    this.visibleSection.set(visibleSection);
  }

  isNavButtonActive(buttonNumber: number): 'active' | '' {
    return this.visibleSection() === buttonNumber ? 'active' : '';
  }
}

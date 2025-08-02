import { Component, viewChild } from '@angular/core';
import { CODE_STRINGS } from './code_strings';
import { SharedNavList } from '../../shared/nav-list/nav-list.component';
import { SharedPreWithCopyButton } from '../../shared/pre-with-copy-button/pre-with-copy-button.component';

@Component({
  imports: [SharedPreWithCopyButton, SharedNavList],
  selector: 'page-routing',
  templateUrl: 'routing.component.html',
})
export class PageRouting {
  readonly CODE_STRINGS = CODE_STRINGS;

  readonly PAGE_SECTIONS = {
    DEFINING_BASIC_ROUTE: { navText: 'Defining a basic route', pageNum: 1 },
    GETTING_ROUTE_INFO: { navText: 'Getting route information', pageNum: 2 },
    WILDCARD_ROUTE: { navText: 'Wildcard routes', pageNum: 3 },
    REDIRECTS: { navText: 'Setting up redirects', pageNum: 4 },
    NESTED_ROUTES: { navText: 'Nested routes', pageNum: 5 },
    QUERY_PARAMS_AND_FRAGMENTS: {
      navText: 'Query params and fragments',
      pageNum: 6,
    },
    LAZY_LOADING: { navText: 'Lazy loading', pageNum: 7 },
  } as const;

  navListComponent = viewChild(SharedNavList);

  getVisibleSection() {
    return this.navListComponent()?.visibleSection();
  }
}

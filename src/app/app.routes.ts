import { Routes } from '@angular/router';
import { PageComponent } from './pages/component.component';
import { PageAttributeDirectives } from './pages/attribute-directives.component';
import { PageInjectable } from './pages/injectable.component';
import { PageRouting } from './pages/routing/routing.component';
import { PageHostBinding } from './pages/host-binding.component';

export const routes: Routes = [
  { path: '', component: PageComponent },
  { path: 'component', component: PageComponent },
  { path: 'host-binding', component: PageHostBinding },
  { path: 'injectable', component: PageInjectable },
  { path: 'attribute-directives', component: PageAttributeDirectives },
  { path: 'routing', component: PageRouting },
];

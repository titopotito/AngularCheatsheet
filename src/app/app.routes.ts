import { Routes } from '@angular/router';
import { PageIntroduction } from './pages/introduction.component';
import { PageComponent } from './pages/component.component';
import { PageAttributeDirectives } from './pages/attribute-directives.component';
import { PageInjectable } from './pages/injectable.component';

export const routes: Routes = [
  { path: '', component: PageIntroduction },
  { path: 'introduction', component: PageIntroduction },
  { path: 'component', component: PageComponent },
  { path: 'injectable', component: PageInjectable },
  { path: 'attribute-directives', component: PageAttributeDirectives },
];
